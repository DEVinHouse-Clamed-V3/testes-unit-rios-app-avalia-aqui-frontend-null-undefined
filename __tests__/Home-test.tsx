import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../src/pages/Home';
import { NavigationProp } from '@react-navigation/native';


const mockNavigate = jest.fn();

const navigation = {
    navigate: mockNavigate,
    dispatch: jest.fn(),
    goBack: jest.fn(),
    reset: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    isFocused: jest.fn(),
    canGoBack: jest.fn(),
    navigateDeprecated: jest.fn(),
    preload: jest.fn(),
    getId: jest.fn(),
    getState: jest.fn(),
    setStateForNextRouteNamesChange: jest.fn(),
  } as unknown as NavigationProp<any>;

const setup = () => {
    return render(<Home navigation={navigation} />)
}

beforeEach(() => {
    mockNavigate.mockClear();
})

describe('Home', () => {
    test('deve renderizar os textos principais corretamente', () => {
        const {getByText} = setup()

        expect(getByText('Avalie Aqui')).toBeTruthy()
        expect(getByText('Escolha o produto que deseja avaliar e compartilhe sua experiência com outros consumidores.')).toBeTruthy()
        expect(getByText('Entrar')).toBeTruthy()
        expect(getByText('Entrar como visitante')).toBeTruthy()
    })

    test('deve renderizar os 3 posters de imagem', () => {
        const { getByTestId } = setup();
    
        expect(getByTestId('poster1')).toBeTruthy();
        expect(getByTestId('poster2')).toBeTruthy();
        expect(getByTestId('poster3')).toBeTruthy();
      });

    test('deve navegar para a tela de Login ao pressionar o botão "Entrar"', () => {
        const {getByText} = setup()

        const botaoEntrar = getByText('Entrar')
        fireEvent.press(botaoEntrar)

        expect(mockNavigate).toHaveBeenCalledWith('Login')
    })

    test('deve navegar para "Products" ao pressionar o botão "Entrar como visitante"', () => {
        const {getByText} = setup()

        const botaoEntrarVisitante = getByText('Entrar como visitante')
        fireEvent.press(botaoEntrarVisitante)

        expect(mockNavigate).toHaveBeenCalledWith('Products')
    })

})