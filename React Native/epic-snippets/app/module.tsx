import NativeviewView from '@/modules/nativeview/src/NativeviewView';
import { View, Text } from 'react-native';

const Page = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <NativeviewView style={{ flex: 1, width: '100%', backgroundColor: 'blue' }} />
    </View>
  );
};
export default Page;
