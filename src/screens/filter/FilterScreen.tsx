import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import TextMontserrat from '../../components/TextMontserrat';
import ArgentinaIcon from '../../assets/icons/ArgentinaIcon';
import GlobalIcon from '../../assets/icons/GlobalIcon';
import {colors} from '../../styles/colors';
import {AppContext} from '../../context';
import ButtomLarge from '../../components/ButtomLarge';
import {APPLY_FILTERS} from '../../context/actions';
import {useNavigation} from '@react-navigation/native';

type Categories = {
  categoryArr: string[];
};

const FilterScreen = () => {
  const navigation = useNavigation();
  const categories: Categories = {
    categoryArr: [
      'general',
      'entertainment',
      'sports',
      'business',
      'health',
      'science',
      'technology',
    ],
  };

  const [categorySelect, setCategorySelect] = useState('');
  const [locationSelect, setLocationSelect] = useState('');

  useEffect(() => {
    let catSelect = filters?.category;
    setCategorySelect(catSelect);
    let locSelect = Object.values(filters.focus)[0];
    setLocationSelect(locSelect);
  }, []);

  const {
    state: {filters},
    dispatch,
  } = useContext(AppContext);

  const handleFilters = () => {
    dispatch({
      type: APPLY_FILTERS,
      payload: {
        focus: locationSelect === 'ar' ? {country: 'ar'} : {language: 'es'},
        category: categorySelect,
      },
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={[styles.row, styles.margen]}>
          <Image
            source={require('../../assets/icons/location.png')}
            style={{width: 28, height: 28}}
          />
          <TextMontserrat style={styles.textFilterDescription}>
            Selecciona la ubicación de las noticias:
          </TextMontserrat>
        </View>

        <TouchableOpacity
          onPress={() => setLocationSelect('ar')}
          style={[
            styles.row,
            locationSelect === 'ar'
              ? styles.locationContainerSelect
              : styles.locationContainer,
          ]}>
          <ArgentinaIcon />
          <TextMontserrat style={styles.textFilter}>Argentina</TextMontserrat>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setLocationSelect('es')}
          style={[
            styles.row,
            locationSelect === 'es'
              ? styles.locationContainerSelect
              : styles.locationContainer,
          ]}>
          <GlobalIcon />
          <TextMontserrat style={styles.textFilter}>
            Mundiales en español
          </TextMontserrat>
        </TouchableOpacity>

        <View style={[styles.row, styles.margen]}>
          <Image
            source={require('../../assets/icons/browser.png')}
            style={{width: 25, height: 25}}
          />
          <TextMontserrat style={styles.textFilterDescription}>
            Selecciona una categoria de busqueda:
          </TextMontserrat>
        </View>
        <View style={styles.wrap}>
          {categories.categoryArr.map(cat => (
            <TouchableOpacity
              key={cat}
              style={
                categorySelect === cat
                  ? styles.categoryContainerSelect
                  : styles.categoryContainer
              }
              onPress={() => setCategorySelect(cat)}>
              <TextMontserrat
                style={
                  categorySelect === cat
                    ? styles.categoryItemSelect
                    : styles.categoryItem
                }>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </TextMontserrat>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.margen}>
        <ButtomLarge title={'APLICAR FILTROS'} handler={handleFilters} />
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blancoFondo,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    alignSelf: 'center',
    padding: 12,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 8,
    marginVertical: 5,
    borderColor: colors.grisTitulos,
  },
  categoryContainerSelect: {
    alignSelf: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: colors.verde,
    borderRadius: 20,
    marginHorizontal: 8,
    marginVertical: 5,
    backgroundColor: colors.verde,
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textFilter: {
    fontSize: 20,
    color: colors.grisTitulos,
    marginLeft: 10,
  },
  categoryItem: {
    fontSize: 18,
    color: colors.grisTitulos,
  },
  categoryItemSelect: {
    fontSize: 18,
    color: '#000',
    fontWeight: '900',
  },
  textFilterDescription: {
    fontSize: 16,
    color: colors.grisTitulos,
    marginLeft: 10,
  },
  locationContainer: {
    marginHorizontal: 20,
    marginVertical: 8,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: colors.grisTextos,
  },
  locationContainerSelect: {
    marginHorizontal: 20,
    marginVertical: 8,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    borderColor: colors.verde,
  },
  margen: {
    margin: 10,
  },
});
