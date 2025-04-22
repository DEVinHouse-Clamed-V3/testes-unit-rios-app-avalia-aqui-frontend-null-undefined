import axios from "axios"
import {View, Text, Alert, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native'
import { useState, useEffect } from 'react'
import {NavigationProp, useFocusEffect} from '@react-navigation/native'
import { globalStyles } from "../global/styles"
import { API_URL } from "@env"

type Product = {
    id: number
    name: string
    price: string
    brand: string
    description: string
    image: string
}

export default function Products({ navigation }:{navigation : NavigationProp<any>}) {

    const [products, setProducts] = useState<Product[]>([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))

    useFocusEffect(() =>{


        axios.get(`${API_URL}/products`)
        .then((response) => {
            setProducts(response.data)
        })
        .catch((error) => {
            Alert.alert('Não foi possível obter a lista de produtos')
            console.log(error)
        })
    })

    function navigateToReview(id: number) {
        console.log("Navigating to FormReview with productId:", id);
        navigation.navigate('FormReview', {product_id: id})
    }

    return (
        <SafeAreaView style={globalStyles.safe}>

            <TextInput
                style={globalStyles.input}
                value={search}
                onChangeText={setSearch}
                placeholder="Buscar"
            />

            <FlatList 
            ListEmptyComponent={() => (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {
                        loading ? (
                            <>
                                <Text>Carregando ...</Text>
                            </>

                        ) : <Text>Não existem produtos</Text>
                    }
                </View>
            )}
            data={filteredProducts}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <View style={styles.row}>
                    
                        <Image style={styles.cardImage} source={{uri: item.image}}/>
                    
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.name}</Text>
                            <Text style={styles.cardText}>{item.brand}</Text>
                            <Text style={styles.cardText}>{item.description}</Text>
                            <Text style={styles.cardPrice}>{item.price}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigateToReview(item.id)}>
                        <Text style={styles.buttonText}>Avaliar</Text>
                    </TouchableOpacity>
                </View>
            )}
            />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        width: '95%', // Garante que o card ocupe 100% da largura da tela
        padding: 10,
        marginVertical: 8,
        borderRadius: 8,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    cardImage: {
        width: 100,
        height: 150,
        marginRight: 10
    },
    cardContent: {
        flex: 1,
        gap: 10
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        color: '#7ED321'
    },
    cardText: {
        fontSize: 14,
        flexWrap: 'wrap',
        color: '#4A4A4A'
    },
    cardPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f8a488'
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#7ED321',
        padding: 10,
        borderRadius: 18,
        marginTop: 10
    },
    buttonText: {
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold'
    }
})