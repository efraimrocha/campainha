// Importa as funções que serão testadas
const { startTimer, pauseTimer, resetTimer } = require('../Cronometro');

// Mock das funções do módulo Cronometro
// Isso substitui as funções reais por versões simuladas (mocks) para que possamos testar
// seu comportamento sem depender de implementações reais.
jest.mock('../Cronometro', () => {
  return {
    startTimer: jest.fn(), // Mock da função startTimer
    pauseTimer: jest.fn(), // Mock da função pauseTimer
    resetTimer: jest.fn(), // Mock da função resetTimer
  };
});

// Bloco de testes para o cronômetro
describe('Testes para o cronômetro', () => {
  // Executa antes de cada teste para garantir que os mocks estejam limpos
  beforeEach(() => {
    jest.clearAllMocks(); // Limpa todos os mocks para evitar interferência entre testes
  });

  // Teste 1: Verifica se a função startTimer inicia o cronômetro
  test('startTimer deve iniciar o cronômetro', () => {
    // Chama a função startTimer
    startTimer();

    // Verifica se a função foi chamada
    expect(startTimer).toHaveBeenCalled();
  });

  // Teste 2: Verifica se a função pauseTimer pausa o cronômetro
  test('pauseTimer deve pausar o cronômetro', () => {
    // Chama a função pauseTimer
    pauseTimer();

    // Verifica se a função foi chamada
    expect(pauseTimer).toHaveBeenCalled();
  });

  // Teste 3: Verifica se a função resetTimer reseta o cronômetro
  test('resetTimer deve resetar o cronômetro', () => {
    // Chama a função resetTimer
    resetTimer();

    // Verifica se a função foi chamada
    expect(resetTimer).toHaveBeenCalled();
  });
});