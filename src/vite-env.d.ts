/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
  /** Full Calendly embed URL from your Calendly dashboard (e.g. https://calendly.com/your-handle/consultation?embed=true) */
  readonly VITE_CALENDLY_EMBED_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
