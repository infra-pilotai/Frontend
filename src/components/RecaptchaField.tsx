import ReCAPTCHA from "react-google-recaptcha";
import type { RefObject } from "react";

import { RECAPTCHA_SITE_KEY } from "@/lib/site";

type RecaptchaFieldProps = {
  recaptchaRef: RefObject<ReCAPTCHA | null>;
  onChange?: (token: string | null) => void;
};

export function RecaptchaField({ recaptchaRef, onChange }: RecaptchaFieldProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background/50 p-3">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={onChange}
        theme="dark"
      />
    </div>
  );
}
