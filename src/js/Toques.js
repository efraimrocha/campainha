const primeiroToque = document.getElementById('primeiro-toque');
const segundoToque = document.getElementById('segundo-toque');
const terceiroToque = document.getElementById('terceiro-toque');
const resetToquesBtn = document.getElementById('reset-toques'); // Botão de reset

// const audio = new Audio('./src/audio/click.mp3');

// Função para tocar o áudio várias vezes com intervalo
function playAudioMultipleTimes(times) {
  for (let i = 0; i < times; i++) {
    setTimeout(() => {
      audio.currentTime = 0; // Reinicia o áudio para o início
      audio.play();
    }, i * 2000); // Intervalo de 1 segundo (1000 ms)
  }
}

// Função para mudar a cor do botão para "cinza-inativo"
function desativarBotao(botao) {
  botao.classList.add('cinza-inativo'); // Adiciona a classe cinza-inativo
  botao.disabled = true; // Desabilita o botão para evitar múltiplos cliques
}

// Função para resetar os botões
function resetToques() {
  const botoes = [primeiroToque, segundoToque, terceiroToque];
  botoes.forEach(botao => {
    botao.classList.remove('cinza-inativo'); // Remove a classe cinza-inativo
    botao.disabled = false; // Habilita o botão novamente
  });
  console.log('Toques resetados');
}

// Eventos de clique nos botões de toque
primeiroToque.addEventListener('click', () => {
  playAudioMultipleTimes(1);
  desativarBotao(primeiroToque); // Desativa o botão
  console.log('Primeiro toque foi clicado');
});

segundoToque.addEventListener('click', () => {
  playAudioMultipleTimes(2);
  desativarBotao(segundoToque); // Desativa o botão
  console.log('Segundo toque foi clicado');
});

terceiroToque.addEventListener('click', () => {
  playAudioMultipleTimes(3);
  desativarBotao(terceiroToque); // Desativa o botão
  console.log('Terceiro toque foi clicado');
});

// Evento de clique no botão de reset
resetToquesBtn.addEventListener('click', resetToques);

// Tratamento de erros
audio.addEventListener('error', (e) => {
  console.error('Erro ao carregar arquivo de áudio:', e);
});