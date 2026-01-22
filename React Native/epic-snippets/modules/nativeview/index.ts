// Reexport the native module. On web, it will be resolved to NativeviewModule.web.ts
// and on native platforms to NativeviewModule.ts
export { default } from './src/NativeviewModule';
export { default as NativeviewView } from './src/NativeviewView';
export * from  './src/Nativeview.types';
