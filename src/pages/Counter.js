import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement as decrementAction,
  increment as incrementAction,
  updateIncrement as updateIncrementAction,
} from '../redux/reducers/counter';
import RoundButton from '../components/RoundButton';

const Counter = () => {
  const {count, increment} = useSelector(state => ({
    count: state.counter.value,
    increment: state.counter.increment,
  }));
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementAction());
  const handleDecrement = () => dispatch(decrementAction());

  const handleUpdateIncrement = newIncrement =>
    dispatch(updateIncrementAction(Number(newIncrement)));

  return (
    <View style={styles.screenContainer}>
      <View style={styles.counterContainer}>
        <RoundButton onPress={handleDecrement}>-</RoundButton>
        <Text style={styles.text}>{count}</Text>
        <RoundButton onPress={handleIncrement}>+</RoundButton>
      </View>
      <View style={styles.incrementContainer}>
        <Text style={[styles.text, styles.incrementText]}>
          Current increment:{' '}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleUpdateIncrement}
          value={String(increment)}
          placeholder="increment"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {flex: 1, backgroundColor: '#282a36'},
  counterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    marginTop: 50,
    flexDirection: 'row',
  },
  text: {
    color: '#f8f8f2',
    fontSize: 20,
    marginHorizontal: 30,
  },
  incrementContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#6272a4',
    textAlign: 'center',
    color: '#bd93f9',
    fontSize: 24,
    flex: 2,
    transform: [{translateX: -15}],
  },
  incrementText: {
    flex: 2,
  },
});

export default Counter;
