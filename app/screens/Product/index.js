import React, {useEffect, useState, useCallback, useContext} from 'react';
import {
  SafeAreaView,
  FlatList,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {Card} from '@components/Product/Card';
import {SearchBar} from '@components/SearchBar';
import {Spinner} from '@components/Spinner';
import {Label} from '@components/Label';
import {styles} from './styles';
import {API_URL} from 'app/config';
import {AppContext} from 'app/context';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function Product({navigation}) {
  const {setProduct} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [rows, setRows] = useState(5);
  const [expanded, setExpanded] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data.slice(0, 5));
      setIsLoading(false);
      setRefreshing(false);
      setError(null);
    } catch (err) {
      setIsLoading(false);
      setError(err?.message || 'Error during the API request.');
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const onRefresh = () => {
    setSearch('');
    fetchProducts();
  };

  const handleCardOnClick = product => {
    setProduct(product);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setExpanded(!expanded);
    navigation.navigate('ProductDetails', {transition: 'collapseExpand'});
  };

  const handleSearch = value => {
    setSearch(value);
    if (value === '') {
      setFilteredProducts(products);
      return;
    }

    const searchTerm = value.toLowerCase();
    const filteredData = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm),
    );
    setFilteredProducts(filteredData);
  };

  const onEndReached = () => {
    if (search === '') {
      setRows(rows + rows);
      setFilteredProducts(products.slice(0, rows + rows));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SafeAreaView
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onResponderMove={event => {
        console.log('event', event);
      }}>
      <SearchBar search={search} handleSearch={handleSearch} />
      {filteredProducts.length === 0 && !error && (
        <Label text="Product not found.." />
      )}
      {error && <Label text={error} />}
      <FlatList
        data={filteredProducts}
        renderItem={({item}) => (
          <Card item={item} handleCardOnClick={() => handleCardOnClick(item)} />
        )}
        initialNumToRender={5}
        removeClippedSubviews
        keyExtractor={item => item.name}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
      />
    </SafeAreaView>
  );
}
