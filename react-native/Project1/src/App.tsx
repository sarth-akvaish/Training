import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {currencyByRupee} from './constants';
import CurrencyBtn from './components/CurrencyBtn';

export default function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setresultValue] = useState('');
  const [tarCurr, settarCurr] = useState('');

  const buttonPress = (target: currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * target.value;
      const result = `${target.symbol} ${convertedValue.toFixed(2)}`;
      setresultValue(result);
      settarCurr(target.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor: '#F4be2c',
        textColor: '#000000',
      });
    }
  };
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>Rs.</Text>
            <TextInput
              maxLength={14}
              clearButtonMode="always"
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Enter Amount in Rupee"
            />
          </View>
          {resultValue && (
            <Text style={styles.rupeesContainer}>{resultValue}</Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  tarCurr === item.name && styles.selected,
                ]}
                onPress={() => buttonPress(item)}>
                <CurrencyBtn {...item} />
              </Pressable>
            )}
          />
        </View>
        <Text>I am working</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
