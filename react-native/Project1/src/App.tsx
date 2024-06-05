import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Dice1 from '../assets/One.png';
import Dice2 from '../assets/Two.png';
import Dice3 from '../assets/Three.png';
import Dice4 from '../assets/Four.png';
import Dice5 from '../assets/Five.png';
import Dice6 from '../assets/Six.png';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type diceProps = PropsWithChildren<{imageUrl: ImageSourcePropType}>;

const Dice = ({imageUrl}: diceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(Dice1);

  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);

    switch (randomNumber) {
      case 1:
        setDiceImage(Dice1);
        break;
      case 2:
        setDiceImage(Dice2);
        break;
      case 3:
        setDiceImage(Dice3);
        break;
      case 4:
        setDiceImage(Dice4);
        break;
      case 5:
        setDiceImage(Dice5);
        break;
      case 6:
        setDiceImage(Dice6);
        break;
      default:
        break;
    }

    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
