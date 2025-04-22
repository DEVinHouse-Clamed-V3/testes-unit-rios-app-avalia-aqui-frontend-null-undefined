import { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView, Alert } from 'react-native';
import {NavigationProp} from '@react-navigation/native'
import { globalStyles } from '../global/styles';


export default function Login({navigation}:{navigation : NavigationProp<any>}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)

    function handleLogin() {
        if(email === "avaliador@email.com" && password === '123456') {
            console.log("FAZENDO LOGIN")
            navigation.navigate('Products')
        } else {
            Alert.alert("Usuario não encontrado")
        }
    }

  return (
    <SafeAreaView style={styles.safe}>

      <View style={styles.bottomSection}>
        
        <TextInput
          placeholder="Email"
          placeholderTextColor="#4A90E2"
          style={globalStyles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#4A90E2" 
          style={globalStyles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}><Text>Exibir senha</Text></TouchableOpacity>

        <View style={styles.passwordRow}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff', // Texto branco
  },
  bottomSection: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#4A90E2', 
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});