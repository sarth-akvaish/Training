import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.Red]}>
          <Text>Red </Text>
        </View>
        <View style={[styles.card, styles.two]}>
          <Text>Red2</Text>
        </View>
        <View style={[styles.card, styles.three]}>
          <Text>Red3</Text>
        </View>
        <View style={[styles.card, styles.three]}>
          <Text>Red4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  Red: {
    backgroundColor: '#EF5354',
  },
  two: {
    backgroundColor: '#EF5321',
  },
  three: {
    backgroundColor: '#E00043',
  },
});
