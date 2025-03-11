(function () {
    // const audio = new Audio('./src/audio/click.mp3');
  
    const primeiroToque = document.getElementById('primeiro-toque');
    const segundoToque = document.getElementById('segundo-toque');
    const terceiroToque = document.getElementById('terceiro-toque');
  
    // Função para tocar o áudio várias vezes com intervalo
    function playAudioMultipleTimes(times) {
      for (let i = 0; i < times; i++) {
        setTimeout(() => {
          audio.currentTime = 0; // Reinicia o áudio para o início
          audio.play();
        }, i * 2000); // Intervalo de 2 segundo (2000 ms)
      }
    }
  
    // Eventos de clique
    primeiroToque.addEventListener('click', () => {
      playAudioMultipleTimes(1);
      console.log('Primeiro toque foi clicado');
    });
  
    segundoToque.addEventListener('click', () => {
      playAudioMultipleTimes(2);
      console.log('Segundo toque foi clicado');
    });
  
    terceiroToque.addEventListener('click', () => {
      playAudioMultipleTimes(3);
      console.log('Terceiro toque foi clicado');
    });
  
    // Tratamento de erros
    audio.addEventListener('error', (e) => {
      console.error('Erro ao carregar arquivo de áudio:', e);
    });
  })();