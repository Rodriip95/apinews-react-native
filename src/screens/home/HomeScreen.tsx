import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from '../../context';
import {
  CountryType,
  getNews,
  LanguageType,
  OptionsType,
  urlBuild,
} from '../../api';
import ItemNew from '../../components/ItemNew';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const {
    state: {user},
  } = useContext(AppContext);

  const argentina: CountryType = {
    country: 'ar',
  };
  const espanol: LanguageType = {
    language: 'es',
  };

  const ejemplo: OptionsType = {
    focus: argentina,
  };

  useEffect(() => {
    console.log('useEffect');
    console.log('Page: ', page);
    setLoading(true);
    getData();
  }, [page]);

  const getData: void = async () => {
    try {
      let res = await getNews(ejemplo, page);
      setData(data.concat(res.articles));
      setLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Ups! Algo salio mal!',
        'Reinicie la aplicacion y vuelva a intentarlo',
      );
      setLoading(false);
    }
  };

  const loadMoreNews = () => {
    setPage(page + 1);
    setLoading(true);
  };

  const loadMoreComponent = () => {
    return loading ? (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <ItemNew info={item} />}
        keyExtractor={item => item.publishedAt}
        ListFooterComponent={loadMoreComponent}
        onEndReachedThreshold={0}
        onEndReached={loadMoreNews}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  loaderContainer: {
    marginVertical: 10,
  },
});
