import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addTrack, setUpPlayer} from '../musicService';

export default function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let issetup = await setUpPlayer();

    if (issetup) {
      await addTrack();
    }

    setIsPlayerReady(issetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>Seem's ok</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
