import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
