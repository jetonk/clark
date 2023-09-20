import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Card} from '@components/Product/Card';
import {SearchBar} from '@components/SearchBar';
import {Spinner} from '@components/Spinner';
import {NotFound} from '@components/NotFound';
import {styles} from './styles';

const API_URL = 'https://mocki.io/v1/7d2be33f-a0ef-4715-b286-c514fae8bed4';

export function Product({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

  const navigateToDetails = () => {
    navigation.navigate('ProductDetails');
  };

  const handleSearch = value => {
    if (value === '') {
      setFilteredProducts(products);
    }
    const searchTerm = value.toLowerCase();
    const filteredData = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm),
    );
    setFilteredProducts(filteredData);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} />
      {filteredProducts.length === 0 && <NotFound />}
      <FlatList
        data={filteredProducts}
        renderItem={({item}) => (
          <Card item={item} navigateToDetails={navigateToDetails} />
        )}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
}
