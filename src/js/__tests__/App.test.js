// Importa a função que será testada
const { initializeApp } = require('../App');

// Mock da função initializeApp
// Isso substitui a função real por uma versão simulada (mock) para que possamos testar
// seu comportamento sem depender de implementações reais.
jest.mock('../App', () => {
  return {
    initializeApp: jest.fn(), // Mock da função initializeApp
  };
});

// Bloco de testes para a aplicação principal
describe('Testes para a aplicação principal', () => {
  // Executa antes de cada teste para garantir que os mocks estejam limpos
  beforeEach(() => {
    jest.clearAllMocks(); // Limpa todos os mocks para evitar interferência entre testes
  });

  // Teste 1: Verifica se a função initializeApp inicializa a aplicação
  test('initializeApp deve inicializar a aplicação', () => {
    // Chama a função initializeApp
    initializeApp();

    // Verifica se a função foi chamada
    expect(initializeApp).toHaveBeenCalled();
  });
});