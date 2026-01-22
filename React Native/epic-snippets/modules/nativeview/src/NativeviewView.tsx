import { requireNativeView } from 'expo';
import * as React from 'react';

import { NativeviewViewProps } from './Nativeview.types';

/**
 * Native view component for the Nativeview module.
 * This component uses `requireNativeView` to link the native view implementation
 * from the native side (iOS/Android).
 * 
 * Note: This file is only used on native platforms. Web support is handled
 * by `NativeviewView.web.tsx`.
 */
const NativeView: React.ComponentType<NativeviewViewProps> = requireNativeView('Nativeview');

export default function NativeviewView(props: NativeviewViewProps) {
  return <NativeView {...props} />;
}
