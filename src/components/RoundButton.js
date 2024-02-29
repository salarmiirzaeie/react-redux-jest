import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import cloneWithoutProperties from '../helpers/cloneWithoutProperties';

const RoundButton = props => {
  const withoutChildrenProps = cloneWithoutProperties(props, ['children']);
  return (
    <TouchableOpacity {...withoutChildrenProps} style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3D2C8D',
    width: 50,
    height: 50,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default RoundButton;
