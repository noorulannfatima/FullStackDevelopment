import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Animated, { useAnimatedRef, useScrollViewOffset } from 'react-native-reanimated';

import { HeaderTitle } from '@react-navigation/elements';
import { Stack, Link } from 'expo-router';

export default function Page() {
  const ref = useAnimatedRef<Animated.ScrollView>();
  const scroll = useScrollViewOffset(ref);

  // https://github.com/EvanBacon/expo-github-style-header-animation
  const headerStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: interpolate(scroll.value, [0, 100], [50, 0], 'clamp') }],
    }),
    []
  );

  return (
    <Animated.ScrollView ref={ref}>
      <Stack.Screen
        options={{
          headerTitle: (props) => (
            <View style={{ overflow: 'hidden', paddingBottom: 9, marginBottom: -9 }}>
              <Animated.View style={headerStyle}>
                <HeaderTitle {...props} />
              </Animated.View>
            </View>
          ),
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 45, paddingLeft: 16 }}>
        Home
      </Text>

      {/* <Content /> */}
      {/* 

     */}

      <Link href="/module" asChild>
        <Text>Go to module</Text>
      </Link>

      <Link href="/welcome" asChild>
        <Text>Go to welcome</Text>
      </Link>

      <Link href="/profile" asChild>
        <Text>Show profile</Text>
      </Link>

      <Link href="/blurry" asChild>
        <Text>Go to Blurry Header</Text>
      </Link>
    </Animated.ScrollView>
  );
}
function Content() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.contentWrapper}>
          <View style={styles.videoContainer}>
            {Array.from({ length: 10 }).map((_, index) => (
              <View key={index} style={styles.videoItem}>
                {/* Video content would go here */}
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingVertical: 16, // py-4
  },
  contentWrapper: {
    paddingHorizontal: 16, // px-4
  },
  videoContainer: {
    flexDirection: 'column',
    gap: 16, // gap-4
    alignItems: 'center', // text-center
  },
  videoItem: {
    flex: 1,
    borderRadius: 8, // rounded-lg
    aspectRatio: 16 / 9, // aspect-video
    backgroundColor: '#cbd5e1', // bg-slate-300
    height: 100,
  },
});
