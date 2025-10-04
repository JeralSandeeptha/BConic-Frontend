// src/global.d.ts
export {};

declare global {
  interface Window {
    _env_?: {
      [key: string]: string;
    };
  }
}
