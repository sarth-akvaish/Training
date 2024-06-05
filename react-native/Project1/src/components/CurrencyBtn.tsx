import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type currencyBtnProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyBtn = (props: currencyBtnProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#000000',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: '#2d346a',
  },
});

export default CurrencyBtn;
