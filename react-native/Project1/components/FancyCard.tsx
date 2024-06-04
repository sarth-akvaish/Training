import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trendy Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/431Y-3aXMlFUr2zrEhakiulywlpmp_7D-vwRloHEllM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b193ZWJwLHFfZ2xv/c3N5LHJldF9pbWcs/d184MDAsaF81Mzgv/aHR0cHM6Ly9ibG9n/LnNuYXBwYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDIvR3JhdGlzb2dy/YXBoeS1leGFtcGxl/LWltYWdlLmpwZw',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.title}>Yellow Card</Text>
          <Text style={styles.cardlabel}>Fast and Furious 100</Text>
          <Text style={styles.cardDesc}>
            Fast and Furious 100 Fast and Furious 100 Fast and Furious 100 Fast
            and Furious 100
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  cardElevated: {
    backgroundColor: '#FFDFF9',
  },
  card: {
    width: 360,
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardImage: {
    height: 200,
    borderRadius: 4,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 8,
  },
  title: {
    fontSize: 20,
  },
  cardlabel: {
    color: '#000000',
    fontSize: 14,
    marginVertical: 4,
  },
  cardDesc: {
    color: '#000000',
    fontSize: 13,
  },
  cardFooter: {
    color: '#000000',
    fontSize: 16,
  },
});
