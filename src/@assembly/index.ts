/**
 * Compress the import paths into a single path: @assembly
 * Angular Material uses a similar method. It will keep the
 * import paths clean and tidy.
 */

// Module
export * from './assembly.module';

// Components
export * from './components/card/public-api';
export * from './components/demo-content/public-api';
export * from './components/demo-sidebar-content/public-api';
export * from './components/drawer/public-api';
export * from './components/highlight/public-api';
export * from './components/message/public-api';
export * from './components/menu/public-api';
export * from './components/navigation/public-api';
export * from './components/search/public-api';
export * from './components/shortcuts/public-api';
export * from './components/spinner/public-api';
export * from './components/theme-configurator/public-api';

// Directives
export * from './directives/registry/public-api';
export * from './directives/scrollbar/public-api';

// Services
export * from './services/config/public-api';
export * from './services/media-watcher/public-api';
export * from './services/splash-screen/public-api';

// Pipes
export * from './pipes/time-ago/public-api';
export * from './pipes/look-up-by/public-api';

// Animations
export * from './animations/public-api';

// Types
export * from './types/public-api';
