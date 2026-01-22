import { NativeModule, requireNativeModule } from 'expo';

import { NativeviewModuleEvents } from './Nativeview.types';

declare class NativeviewModule extends NativeModule<NativeviewModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<NativeviewModule>('Nativeview');
