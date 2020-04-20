import React from 'react';
import {StyleSheet, View, Text, NativeModules} from 'react-native';
import dp3t from 'dp3t-sdk-react-native';

const App = () => {
  dp3t
    .initialize('rndemo', 'dev')
    .then((res) => {
      console.warn('res', res);
    })
    .catch((error) => {
      console.warn(error);
    });

  dp3t
    .startTracing()
    .then((res) => {
      console.warn('start tracing');
    })
    .catch((error) => {
      console.warn(error);
    });

  dp3t
    .sync()
    .then((res) => {
      console.warn('Sync success');
    })
    .catch((error) => {
      console.warn('sync error: ', error);
    });

  dp3t
    .status()
    .then((status) => {
      console.warn('status: ', status);
    })
    .catch((error) => {
      console.warn(error);
    });

  dp3t
    .iWasExposed('2020-04-09', 'WWWWWW')
    .then((res) => {
      console.warn('I was exposed success');
    })
    .catch((error) => {
      console.warn('I was exposed error: ', error);
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
