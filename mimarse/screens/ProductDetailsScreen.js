import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Obtener los detalles del producto desde el backend
    axios.get(`http://localhost:5000/api/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [productId]);

  return (
    product ? (
      <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        <Image source={{ uri: product.images[0] }} style={styles.productImage} />
        <Text>{product.description}</Text>
        <Text>Precio: ${product.price}</Text>
        <Button title="Agregar al carrito" onPress={() => {}} />
      </View>
    ) : (
      <Text>Cargando...</Text>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default ProductDetailsScreen;
