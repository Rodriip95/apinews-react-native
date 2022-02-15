import {StyleSheet, Text} from 'react-native';
import React from 'react';

const TextMontserrat = props => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

export default TextMontserrat;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
  },
});
