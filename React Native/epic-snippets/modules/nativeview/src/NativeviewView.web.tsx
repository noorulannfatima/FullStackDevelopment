import * as React from 'react';
import { View, Text } from 'react-native';

import { NativeviewViewProps } from './Nativeview.types';

/**
 * Web-compatible fallback for NativeviewView.
 * Since requireNativeView is not available on web, this component
 * provides a placeholder or alternative implementation for the web platform.
 */
export default function NativeviewView(props: NativeviewViewProps) {
  return (
    <View style={props.style}>
      <Text style={{ color: 'red', padding: 20 }}>
        Nativeview is not supported on web.
      </Text>
    </View>
  );
}
