import { FlatList, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductoItem from './ProductoItem'
import { getProductos } from '../api'

const ProductoList = () => {

    const [productos, setProductos] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const loadProductos = async () => {
        const data = await getProductos()
        setProductos(data)
        //const res = await fetch('http://192.168.0.33:3000/productos')
        //const data = await res.json()
        //console.log(data)
        //return data
    }

    useEffect(() => {
        loadProductos()
    }, []);

    const renderItem = ({ item }) => {
        //console.log(item);
        return <ProductoItem productos={item} />
    };

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadProductos();
        setRefreshing(false);
    })

    return (
        <FlatList
            style={{ width: "100%" }}
            data={productos}
            keyExtractor={(item) => item.id_medicamento + ''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                refreshing={refreshing}
                colors={["#78e08f"]}
                    onRefresh={onRefresh}
                />
            }
        />
    )
}

export default ProductoList