const songs = [
    'O Mago de Pornóis [TubeRipper.com].mp3',
    'Absyntho - Meu Ursinho Blau Blau (Áudio Oficial) [TubeRipper.com].mp3',
    'Estranha Loucura e2024/Estranha Loucura [TubeRipper.com].mp3',
    'José Roberto - Assim Não Pode Ser (Pseudo Video) [TubeRipper.com].mp3',
    'Me Dê Motivo [TubeRipper.com].mp3',
    'Michael Sullivan e Paulo Massadas - Lady X ( Especial Tv Manchete 1992) Inédito [TubeRipper.com].m4a',
    'Ney Matogrosso - Manequim [TubeRipper.com].mp3',
    'Sementes Do Amanhã [TubeRipper.com].m4a'
];


let isShuffling = false;
let isRepeating = false;
let currentSongIndex = 0; // Variável para manter o índice da música atual

function playRandomSong() {
    const audioPlayer = document.getElementById('audioPlayer');

    if (isShuffling) {
        // Embaralha a música aleatoriamente
        let randomIndex = Math.floor(Math.random() * songs.length);
        audioPlayer.src = songs[randomIndex];
    } else {
        // Toca a próxima música da lista
        audioPlayer.src = songs[currentSongIndex];
        // Atualiza o índice para a próxima música
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }

    audioPlayer.play();
}

function toggleShuffle() {
    isShuffling = !isShuffling;
    document.getElementById('shuffleButton').innerText = isShuffling ? "Shuffle On" : "Shuffle Off";
    document.getElementById('shuffleButton').style.backgroundColor = isShuffling ? "#17a2b8" : "#28a745"; 
}

function toggleRepeat() {
    isRepeating = !isRepeating;
    document.getElementById('repeatButton').innerText = isRepeating ? "Repeat On" : "Repeat Off";
    document.getElementById('repeatButton').style.backgroundColor = isRepeating ? "#ff5722" : "#28a745"; 
}

// Ajuste de volume
document.getElementById('volumeControl').addEventListener('input', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = this.value;
});

// Eventos dos botões
document.getElementById('playButton').addEventListener('click', playRandomSong);
document.getElementById('shuffleButton').addEventListener('click', toggleShuffle);
document.getElementById('repeatButton').addEventListener('click', toggleRepeat);

// Evento de repetição
document.getElementById('audioPlayer').addEventListener('ended', function() {
    if (isRepeating) {
        playRandomSong(); // Repetir a música se "repeat" estiver ativado
    }
});
