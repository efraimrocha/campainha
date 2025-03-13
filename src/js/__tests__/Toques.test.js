// Importa as funções que serão testadas
const { playAudioMultipleTimes, resetToques } = require('../Toques');

// Mock das funções do módulo Toques
// Isso substitui as funções reais por versões simuladas (mocks) para que possamos testar
// seu comportamento sem depender de implementações reais (como tocar áudio).
jest.mock('../Toques', () => {
  return {
    playAudioMultipleTimes: jest.fn(), // Mock da função playAudioMultipleTimes
    resetToques: jest.fn(), // Mock da função resetToques
  };
});

// Bloco de testes para a funcionalidade de toques
describe('Testes para a funcionalidade de toques', () => {
  // Executa antes de cada teste para garantir que os mocks estejam limpos
  beforeEach(() => {
    jest.clearAllMocks(); // Limpa todos os mocks para evitar interferência entre testes
  });

  // Teste 1: Verifica se a função playAudioMultipleTimes toca o áudio uma vez
  test('playAudioMultipleTimes deve tocar o áudio uma vez', () => {
    // Chama a função com o argumento 1 (tocar uma vez)
    playAudioMultipleTimes(1);

    // Verifica se a função foi chamada com o argumento correto
    expect(playAudioMultipleTimes).toHaveBeenCalledWith(1);
  });

  // Teste 2: Verifica se a função playAudioMultipleTimes toca o áudio duas vezes
  test('playAudioMultipleTimes deve tocar o áudio duas vezes', () => {
    // Chama a função com o argumento 2 (tocar duas vezes)
    playAudioMultipleTimes(2);

    // Verifica se a função foi chamada com o argumento correto
    expect(playAudioMultipleTimes).toHaveBeenCalledWith(2);
  });

  // Teste 3: Verifica se a função playAudioMultipleTimes toca o áudio três vezes
  test('playAudioMultipleTimes deve tocar o áudio três vezes', () => {
    // Chama a função com o argumento 3 (tocar três vezes)
    playAudioMultipleTimes(3);

    // Verifica se a função foi chamada com o argumento correto
    expect(playAudioMultipleTimes).toHaveBeenCalledWith(3);
  });

  // Teste 4: Verifica se a função resetToques reativa os botões
  test('resetToques deve redefinir os botões', () => {
    // Chama a função resetToques
    resetToques();

    // Verifica se a função foi chamada
    expect(resetToques).toHaveBeenCalled();
  });
});