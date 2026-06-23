import { useCallback, useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { TAWK_EMBED_SRC } from "@/lib/site";

declare global {
  interface Window {
    Tawk_API?: TawkApi;
    Tawk_LoadStart?: Date;
  }
}

type TawkApi = {
  autoStart?: boolean;
  onLoad?: () => void;
  onBeforeLoad?: () => void;
  onChatMaximized?: () => void;
  onChatMinimized?: () => void;
  onChatHidden?: () => void;
  onChatMessageSystem?: (message: unknown) => void;
  start?: (options?: { showWidget?: boolean }) => void;
  showWidget?: () => void;
  hideWidget?: () => void;
  maximize?: () => void;
  minimize?: () => void;
  isChatMaximized?: () => boolean;
  [key: string]: unknown;
};

function setChatOpen(open: boolean) {
  document.body.toggleAttribute("data-tawk-chat-open", open);
}

function hideTawkWidget() {
  window.Tawk_API?.hideWidget?.();
  setChatOpen(false);

  document.querySelectorAll('[id*="tawk"], [class*="tawk"]').forEach((node) => {
    if (!(node instanceof HTMLElement)) return;
    if (/we are here/i.test(node.textContent ?? "")) {
      node.style.setProperty("display", "none", "important");
    }
  });
}

function showTawkChat() {
  const api = window.Tawk_API;
  if (!api) return;

  const open = () => {
    api.showWidget?.();
    api.maximize?.();
    setChatOpen(true);
  };

  if (api.isChatMaximized?.()) {
    open();
    return;
  }

  if (typeof api.start === "function") {
    api.start({ showWidget: true });
    window.setTimeout(open, 150);
    return;
  }

  open();
}

function initTawkApi(onOpen: () => void, onClose: () => void) {
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();
  window.Tawk_API.autoStart = false;

  const api = window.Tawk_API;
  const previousOnBeforeLoad = api.onBeforeLoad;
  const previousOnLoad = api.onLoad;
  const previousOnMaximized = api.onChatMaximized;
  const previousOnMinimized = api.onChatMinimized;
  const previousOnHidden = api.onChatHidden;
  const previousOnSystemMessage = api.onChatMessageSystem;

  api.onBeforeLoad = function tawkOnBeforeLoad() {
    previousOnBeforeLoad?.();
    hideTawkWidget();
  };

  api.onLoad = function tawkOnLoad() {
    previousOnLoad?.();
    hideTawkWidget();
    onClose();
  };

  api.onChatMaximized = function tawkOnMaximized() {
    previousOnMaximized?.();
    setChatOpen(true);
    onOpen();
  };

  api.onChatMinimized = function tawkOnMinimized() {
    previousOnMinimized?.();
    hideTawkWidget();
    onClose();
  };

  api.onChatHidden = function tawkOnHidden() {
    previousOnHidden?.();
    hideTawkWidget();
    onClose();
  };

  api.onChatMessageSystem = function tawkOnSystemMessage(message) {
    previousOnSystemMessage?.(message);
    if (!api.isChatMaximized?.()) {
      hideTawkWidget();
      onClose();
    }
  };
}

export function TawkToWidget() {
  const [showLauncher, setShowLauncher] = useState(true);

  const handleOpen = useCallback(() => {
    setShowLauncher(false);
  }, []);

  const handleClose = useCallback(() => {
    setShowLauncher(true);
  }, []);

  const openChat = useCallback(() => {
    showTawkChat();
  }, []);

  useEffect(() => {
    initTawkApi(handleOpen, handleClose);

    if (!document.querySelector(`script[src="${TAWK_EMBED_SRC}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = TAWK_EMBED_SRC;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      const firstScript = document.getElementsByTagName("script")[0];
      firstScript?.parentNode?.insertBefore(script, firstScript);
    } else {
      hideTawkWidget();
    }

    const observer = new MutationObserver(() => {
      if (!document.body.hasAttribute("data-tawk-chat-open")) {
        hideTawkWidget();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.body.removeAttribute("data-tawk-chat-open");
    };
  }, [handleOpen, handleClose]);

  if (!showLauncher) return null;

  return (
    <button
      type="button"
      onClick={openChat}
      className="fixed bottom-6 right-6 z-[9998] grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition hover:scale-105 hover:opacity-90"
      aria-label="Open live chat"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
