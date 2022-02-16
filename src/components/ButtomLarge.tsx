import {StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import TextPoppinsBold from './TextPoppins';
import {colors} from '../styles/colors';

const ButtomLarge = ({title, handler}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#03a355"
      onPress={handler}
      style={styles.buttom}>
      <TextPoppinsBold style={styles.text}>{title}</TextPoppinsBold>
    </TouchableHighlight>
  );
};

export default ButtomLarge;

const styles = StyleSheet.create({
  buttom: {
    backgroundColor: colors.verde,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    borderRadius: 20,
  },
  text: {fontSize: 24, color: '#fff'},
});
