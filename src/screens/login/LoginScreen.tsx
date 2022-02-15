import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from '../../context';
import {
  CountryType,
  getNews,
  LanguageType,
  OptionsType,
  urlBuild,
} from '../../api';

interface NewInterface {
  title: string;
  description: string;
  urlToImage: string;
  source: string;
}

const LoginScreen = () => {
  const {
    state: {user},
  } = useContext(AppContext);

  const [news, setNews] = useState(null);
  const [page, setPage] = useState(1);

  const argentina: CountryType = {
    country: 'ar',
  };
  const espanol: LanguageType = {
    language: 'es',
  };

  const ejemplo: OptionsType = {
    focus: espanol,
    category: 'sports',
  };

  useEffect(() => {
    getNewsLocal();
  }, []);

  const getNewsLocal = async () => {
    let res = await getNews(urlBuild(ejemplo));
    setNews(res);
  };

  return (
    <View>
      {news?.articles.map(item => (
        <Text>{item.title}</Text>
      ))}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
