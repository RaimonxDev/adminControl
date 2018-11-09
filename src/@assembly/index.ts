/**
 * Compress the import paths into a single path: @assembly
 * Angular Material uses a similar method. It will keep the
 * import paths clean and tidy.
 */

// Components
export * from './components/drawer/public';
export * from './components/navigation/public';
export * from './components/search/public';
export * from './components/theme-configurator/public';

// Directives
export * from './directives/registry/public';
export * from './directives/scrollbar/public';

// Services
export * from './services/config/public';
export * from './services/media-watcher/public';
export * from './services/splash-screen/public';

// Pipes
export * from './pipes/time-ago/public';

// Animations
export * from './animations/public';

// Types
export * from './types/public';
