import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [superMan, setSuperMan] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setSuperMan(color);
  };
  return (
    <>
      <StatusBar backgroundColor={superMan} />
      <View style={[styles.container, {backgroundColor: superMan}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press me</Text>
          </View>
        </TouchableOpacity>
        <Text>value : {superMan}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 4,
    backgroundColor: '#6a1b4d',
    padding: 10,
  },
  actionBtnText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;
