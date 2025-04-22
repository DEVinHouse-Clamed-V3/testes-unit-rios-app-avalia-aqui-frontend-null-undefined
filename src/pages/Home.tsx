import { Text, SafeAreaView, View, Image, TouchableOpacity, StyleSheet } from "react-native"
import {NavigationProp} from '@react-navigation/native'
import { globalStyles } from "../global/styles"


export default function Home({navigation}:{navigation:NavigationProp<any>}) {

    function navigateToLogin() {
        navigation.navigate("Login")
    }

    function navigateToProducts() {
        navigation.navigate('Products')
    }

    return (
        <SafeAreaView style={globalStyles.safe}>

            <View style={styles.row}>
                <Image style={styles.image} source={{uri: 'https://m.media-amazon.com/images/I/81arD48HpRL._AC_UF1000,1000_QL80_.jpg'}}/>
                <Image style={styles.image} source={{uri: 'https://cdn.ome.lt/Z8uv4h9Sl9w4b4xJJDFySIDGBXA=/fit-in/1070x750/smart/filer_public/d7/2b/d72bb848-8dc5-49a2-98cc-580dea871592/avengers-infinity-war-poster.jpeg'}}/>
                <Image style={styles.image} source={{uri: 'https://blog.uceff.edu.br/wp-content/uploads/2019/02/poster-cartaz-breaking-bad-serie-netflix-sucesso.jpg'}}/>
            </View>

            <Text style={styles.title}>Avalie Aqui</Text>
            <Text style={styles.firstText}>Escolha o produto que deseja avaliar e compartilhe sua experiência com outros consumidores.</Text>

            <TouchableOpacity style={styles.buttonLogin} onPress={navigateToLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToProducts}>
                <Text style={{color:'#4A90E2', alignSelf: 'center', marginTop: 20}}>Entrar como visitante</Text>
            </TouchableOpacity>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
   
    row: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        marginTop: 30
       },
    image: {
        width: 100,
        height: 150
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4A90E2',
        alignSelf: 'center',
        marginVertical: 20
    },
    firstText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#4A4A4A'
    },
    buttonLogin: {
        backgroundColor: '#4A90E2',
        alignItems: 'center',
        width: 100,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16
    }
})