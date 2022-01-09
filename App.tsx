import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

interface CounterProps {
  name: String;
}

const App: React.FC<{}> = () => {
  return (
    <View style={styles.mainContainer}>
      <Counter name="Mohan" />
    </View>
  );
};

const Counter: React.FC<CounterProps> = ({name}) => {
  const [counterValue, setCounterValue] = useState<number>(0);

  const decrementHandler = () => {
    setCounterValue(value => value - 1);
  };

  const incrementHandler = () => {
    setCounterValue(value => value + 1);
  };

  const resetHandler = () => {
    setCounterValue(0);
  };

  return (
    <View style={styles.subContainer}>
      <Text style={styles.textStyle}>Hello {name}</Text>
      <Text style={styles.paragraph}> {counterValue} </Text>
      <Button title="-" onPress={decrementHandler} color={'orange'} />
      <Button title="+" onPress={incrementHandler} />
      <Button title="reset" onPress={resetHandler} color={'red'} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
  subContainer: {
    padding: 20,
  },
  textStyle: {
    fontSize: 30,
  },
  paragraph: {
    fontSize: 50,
    textAlign: 'center',
    color: 'green',
  },
  buttonStyle: {
    width: 2,
  },
});

export default App;
