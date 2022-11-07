import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ProductoItem = ({ productos }) => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation()
    return (

        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductoFormScreen', { id: productos.id_medicamento })}>
                <Image style={styles.itemImage} source={{ uri: `http://192.168.0.33:8080/PF/${productos.imagen}`}} />
                <Text style={styles.itemTitle}>{productos.nombre_medicamento}</Text>
                <Text style={styles.itemTitle}>Q.{productos.precio_u}</Text>
            </TouchableOpacity>
        </View>
    )
}

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

export default ProductoItem