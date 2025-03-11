const campinha = document.getElementById('campinha');
const audio = new Audio('./src/audio/click.mp3')

campinha.addEventListener('click', () => {
  audio.play();
})




Resources


// ----- Erros ----------------------------------------------
audio.addEventListener('error', (e) => {
    console.error('Erro ao carregar arquivo de áudio:', e);
});
