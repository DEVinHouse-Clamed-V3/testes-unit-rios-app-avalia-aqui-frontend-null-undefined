import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Home from "../src/pages/Home";
import { NavigationProp } from "@react-navigation/native";

describe("Teste do componente Home", () => {
  // Mock da função de navegação
  // boilerplate necessário para simular a navegação no React Navigation e Tipagem do NavigationProp
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Deve renderizar o título corretamente", () => {
    const { getByText } = render(<Home navigation={navigation} />);
    expect(getByText("Avalie Aqui")).toBeTruthy();
  });

  it("Deve renderizar o texto corretamente", () => {
    const { getByText } = render(<Home navigation={navigation} />);
    expect(
      getByText(
        "Escolha o produto que deseja avaliar e compartilhe sua experiência com outros consumidores.",
      ),
    ).toBeTruthy();
  });

  it("Deve navegar para a tela de Login ao pressionar o botão 'Entrar'"),
    () => {
      const { getByText } = render(<Home navigation={navigation} />);
      const button = getByText("Entrar");
      fireEvent.press(button);
      expect(mockNavigate).toHaveBeenCalledWith("Login");
    };

  it("Deve navegar para a tela de Produtos ao pressionar o botão 'Entrar como visitante'"),
    () => {
      const { getByText } = render(<Home navigation={navigation} />);
      const button = getByText("Entrar como visitante");
      fireEvent.press(button);
      expect(mockNavigate).toHaveBeenCalledWith("Products");
    };
  it("Deve renderizar as imagens corretamente"),
    () => {
      const { getByTestId } = render(<Home navigation={navigation} />);
      const image1 = getByTestId("image-1");
      const image2 = getByTestId("image-2");
      const image3 = getByTestId("image-3");

      expect(image1).toBeTruthy();
      expect(image2).toBeTruthy();
      expect(image3).toBeTruthy();
    };

  it("Deve renderizar o botão 'Entrar' corretamente"),
    () => {
      const { getByText } = render(<Home navigation={navigation} />);
      const button = getByText("Entrar");
      expect(button).toBeTruthy();
    };

  it("Deve renderizar o botão 'Entrar como visitante' corretamente"),
    () => {
      const { getByText } = render(<Home navigation={navigation} />);
      const button = getByText("Entrar como visitante");
      expect(button).toBeTruthy();
    };

  it("Deve renderizar o botão 'Entrar' com o texto correto"),
    () => {
      const { getByText } = render(<Home navigation={navigation} />);
      const button = getByText("Entrar");
      expect(button.props.children).toBe("Entrar");
    };

  it("Deve renderizar o botão 'Entrar como visitante' com o texto correto"),
    () => {
      const { getByText } = render(<Home navigation={navigation} />);
      const button = getByText("Entrar como visitante");
      expect(button.props.children).toBe("Entrar como visitante");
    };

  it("Deve renderizar o botão 'Entrar' com o estilo correto"),
    () => {
      const { getByText } = render(<Home navigation={navigation} />);
      const button = getByText("Entrar");
      expect(button.props.style).toEqual({
        backgroundColor: "#4A90E2",
        alignItems: "center",
        width: 100,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: "center",
      });
    };
});
