import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './Nativeview.types';

type NativeviewModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class NativeviewModule extends NativeModule<NativeviewModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(NativeviewModule);
