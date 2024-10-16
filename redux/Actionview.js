import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from './Action';
import {View,Text,Button } from 'react-native';
const ActionView = () => {
  const count = useSelector((state) => state.count); 

  const dispatch = useDispatch();

  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(incrementCounter())} />
      <Button title="Decrement" onPress={() => dispatch(decrementCounter())} />
    </View>
  );
};

export default ActionView;
