import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert, Switch, ActivityIndicator } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { globalStyles } from '../global/styles';
import Experience from '../components/Experience';
import axios from 'axios';
import { API_URL } from "@env"

export default function FormReview({ navigation, route }: { navigation: NavigationProp<any>, route: any }, ) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [recommend, setRecommend] = useState(false);
    const [experience, setExperience] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    const product_id = route.params?.product_id

    const handleSubmit = () => {
        if (!name || !email || !feedback) {
            Alert.alert('Por favor, preencha todos os campos');
            return;
        }

        setIsLoading(true)

        axios.post(`${API_URL}/reviews`, {
            product_id: product_id,
            name: name,
            email: email,
            feedback: feedback,
            experience: experience,
            recommend: recommend
        }).then(() => {
            Alert.alert('Obrigado', 'Feedback cadastrado com sucesso!')
            navigation.navigate('Products')
        }).catch((error) => {
            Alert.alert('Error', 'Não foi possível enviar o seu feedback')
            console.log(error)
        }).finally(() => {
            setIsLoading(false)
        })
    };

    return (
        <SafeAreaView style={globalStyles.safe}>
            
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Nos dê seu feedback</Text>

            <Text style={styles.subtitle}>Sua opinião é importante para nós. Por favor, compartilhe sua experiência.</Text>

            <TextInput
                style={globalStyles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={globalStyles.input}
                placeholder="Seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={[globalStyles.input, styles.textArea]}
                placeholder="Descreva sua experiência"
                value={feedback}
                onChangeText={setFeedback}
                multiline={true}
                numberOfLines={4}
                returnKeyType='done'
                blurOnSubmit={true}
            />

            <Experience onExperienceChange={(value) => setExperience(value)}/>

            <View style={styles.switchContainer}>
                <Switch
                    value={recommend}
                    onValueChange={setRecommend}
                />
                <Text style={styles.switchText}>Recomendaria para outras pessoas?</Text>
            </View>

            
            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton} disabled={isLoading}>
            {isLoading ? (
                    <ActivityIndicator size="small" color="#FFF" />
                ) : (
                    <Text style={styles.submitButtonText}>Enviar feedback</Text>
                )}
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backButton: {
        alignSelf: 'flex-start',
        marginVertical: 10,
        marginLeft: 15
    },
    backText: {
        fontSize: 16,
        color: '#7ED321',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#FFF',
        marginBottom: 15,
    },
    textArea: {
        height: 100,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginLeft: 15,
        marginTop: 20
    },
    switchText: {
        fontSize: 16
    },
    submitButton: {
        backgroundColor: '#7ED321',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
});
