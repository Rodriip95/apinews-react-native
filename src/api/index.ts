//https://newsapi.org/v2/top-headlines?country=us
//GET https://newsapi.org/v2/top-headlines?country=de&category=business
//https://newsapi.org/v2/top-headlines?language=es&pageSize=10
/**
 *  1) Noticias destacadas de ARGENTINA,
 *      country=ar
 *  2) Noticias mundiales destacadas en ESPAÑOL
 *      language=es
 *  3) Noticias de ARGENTICA por categorias
 *      business, entertainment, general, health, science, sports, technology
 *  4) Paginado pageSize=10 & page=1
 */

export type OptionsType = {
  focus: CountryType | LanguageType;
  category?: string;
};

export type CountryType = {
  country: string;
};

export type LanguageType = {
  language: string;
};

const apiUrl: string = 'https://newsapi.org/v2/top-headlines';

//Api key publica sin .env config para facilitar implementacion
const apiKey: string = 'b3980768202141c6b1efacdbd9539bdd';

export const urlBuild = (params: OptionsType, page: number) => {
  const keys = Object.keys(params.focus)[0];
  const principal = `${keys}=${params.focus[keys]}`;
  const cat = params.category ? `&category=${params.category}` : '';
  const format = `${apiUrl}?${principal}${cat}&pageSize=5&page=${page}&apiKey=${apiKey}`;
  return format;
};

export const getNews: any = async (data: string, page: number) => {
  console.log('getNews');
  try {
    const response = await fetch(urlBuild(data, page));
    const resJson = await response.json();
    console.log(resJson.status);
    return resJson;
  } catch (error) {
    console.error(error);
  }
};
