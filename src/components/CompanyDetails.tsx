import {
  SITE_LOCATION,
  SITE_PHONE,
  SITE_PHONE_TEL,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/site";

const link = "text-primary hover:underline";

export function LegalContactList() {
  return (
    <ul className="list-disc space-y-2 pl-6">
      <li>
        By email:{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={link}>
          {SUPPORT_EMAIL}
        </a>
      </li>
      <li>
        By phone:{" "}
        <a href={`tel:${SITE_PHONE_TEL}`} className={link}>
          {SITE_PHONE}
        </a>
      </li>
      <li>By mail: {SITE_LOCATION}</li>
      <li>
        On our website:{" "}
        <a href={SITE_URL} rel="external nofollow noopener" target="_blank" className={link}>
          {SITE_URL}
        </a>
      </li>
    </ul>
  );
}
