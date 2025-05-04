import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FormReview from '../src/pages/FormReview';
import { NavigationProp } from '@react-navigation/native';
import { Alert } from 'react-native';


// Mock básico da navegação
const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
} as unknown as NavigationProp<any>;

// Mock do route com ID de produto
const route = {
  params: { product_id: 1 },
};

describe('FormReview', () => {
  it('mostra alerta se enviar com campos vazios', () => {
    const alertSpy = jest.spyOn(Alert, 'alert');

    const { getByText } = render(
      <FormReview navigation={navigation} route={route} />
    );

    fireEvent.press(getByText('Enviar feedback'));

    expect(alertSpy).toHaveBeenCalledWith('Por favor, preencha todos os campos');
  });

  it('preenche os campos e muda o switch', () => {
    const { getByTestId } = render(
      <FormReview navigation={navigation} route={route} />
    );

    fireEvent.changeText(getByTestId('input-name'), 'Felipe');
    fireEvent.changeText(getByTestId('input-email'), 'felipe@email.com');
    fireEvent.changeText(getByTestId('input-experience'), 'Ótimo produto');

    const switchEl = getByTestId('switch-recommend');
    fireEvent(switchEl, 'valueChange', true);

    expect(switchEl.props.value).toBe(true);
  });
});
