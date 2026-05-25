/// <reference types="vite/client" />

interface ImportMetaEnv {

  /** Full Calendly embed URL from your Calendly dashboard (e.g. https://calendly.com/your-handle/consultation?embed=true) */
  readonly VITE_CALENDLY_EMBED_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
