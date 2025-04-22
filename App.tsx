import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Products from './src/pages/Products';
import Reviews from './src/pages/Reviews';
import FormReview from './src/pages/FormReview';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        
        <Stack.Screen name="Home" component={Home} options={{header: () => <></>}}/>

        <Stack.Screen name="Login" component={Login} options={{header: () => <></>}}/>

        <Stack.Screen name="Products" component={Products} options={{header: () => <></>}}/>

        <Stack.Screen name="Reviews" component={Reviews} options={{header: () => <></>}}/>

        <Stack.Screen name="FormReview" component={FormReview} options={{header: () => <></>}}/>

      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

