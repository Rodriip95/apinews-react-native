import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import TextMontserrat from './TextMontserrat';

interface NewInterface {
  title: string;
  description: string;
  urlToImage: string;
  source: string;
}

interface NewInterfaceProps {
  info: NewInterface;
}

const ItemNew: React.FC = (props: NewInterfaceProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.info.urlToImage}} style={styles.image} />
      <TextMontserrat style={styles.textContainer}>
        {props.info.title}
      </TextMontserrat>
    </View>
  );
};

export default ItemNew;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#cacacc',
  },
  image: {
    height: 200,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,8,8,0.7)',
    color: '#f8f8ff',
    width: '100%',
    padding: 5,
  },
});
