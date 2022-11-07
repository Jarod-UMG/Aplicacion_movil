import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { getProducto } from '../api';

const ProductoFormScreen = ({ navigation, route }) => {

  const [producto, setProducto] = useState({
    nombre_medicamento: "",

  });
 // const navigation = useNavigation();

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: 'Detalle producto' });
      (async () => {
        const producto = await getProducto(route.params.id);
        setProducto({
          imagen: producto.imagen,
          nombre_medicamento: producto.nombre_medicamento,
          precio_u: producto.precio_u,
          cantidad_stock: producto.cantidad_stock,
          descripcion: producto.descripcion
        });
        console.log(producto);
      })();
    }
  }, []);

  return (

    <Layout>
      <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{ uri: `http://192.168.0.33:8080/PF/${producto.imagen}`}} />
        <Text style={styles.itemTitle}>{producto.nombre_medicamento}</Text>
        <Text style={styles.itemTitle}>Precio: Q.{producto.precio_u}</Text>
        <Text style={styles.itemTitle}>Existencia: {producto.cantidad_stock}</Text>
        <Text style={styles.itemTitle}>Descripcion: {producto.descripcion}</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,

  },
  itemTitle: {
    color: "#000000",
    fontSize: 20,
  },
  itemImage: {
    width: 235,
    height: 215,
    borderRadius: 25,
  },
})

export default ProductoFormScreen