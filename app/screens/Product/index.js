import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';
import {Card} from '@components/Product/Card';
import {styles} from './styles';

const API_URL = 'https://mocki.io/v1/7d2be33f-a0ef-4715-b286-c514fae8bed4';

export function Product({navigation}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const navigateToDetails = () => {
    navigation.navigate('ProductDetails');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Card item={item} navigateToDetails={navigateToDetails} />
        )}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
}
