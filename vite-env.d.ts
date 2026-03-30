declare module 'swiper/css';
declare module 'swiper/css/effect-flip';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';


interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}