import React from 'react';
import {StyleSheet, View, Text, NativeModules} from 'react-native';
import RNDP3TSDK from 'dp3t-sdk-react-native';

const App = () => {
  console.warn(NativeModules.RNDP3TSDK);

  RNDP3TSDK.initialize('rntest', 'dev')
    .then((res) => {
      console.warn('res', res);
    })
    .catch((error) => {
      console.warn(error);
    });

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
