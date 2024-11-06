const songs = [
    'music/song1.mp3',
    'music/song2.mp3',
    'music/song3.mp3',
];

let isShuffling = false;
let isRepeating = false;

function playRandomSong() {
    const audioPlayer = document.getElementById('audioPlayer');
    let randomIndex = Math.floor(Math.random() * songs.length);

    if (isShuffling) {
        audioPlayer.src = songs[randomIndex];
    } else {
        audioPlayer.src = songs[songs.length - 1]; 
    }

    audioPlayer.play();
}

function toggleShuffle() {
    isShuffling = !isShuffling;
    document.getElementById('shuffleButton').innerText = isShuffling ? "Embaralhando" : "Ordem Alfabética";
    document.getElementById('shuffleButton').style.backgroundColor = isShuffling ? "#17a2b8" : "#28a745"; 
}

function toggleRepeat() {
    isRepeating = !isRepeating;
    document.getElementById('repeatButton').innerText = isRepeating ? "Repetindo" : "Repetir desligado";
    document.getElementById('repeatButton').style.backgroundColor = isRepeating ? "#ff5722" : "#28a745"; 
}


document.getElementById('volumeControl').addEventListener('input', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = this.value;
});


document.getElementById('playButton').addEventListener('click', playRandomSong);
document.getElementById('shuffleButton').addEventListener('click', toggleShuffle);
document.getElementById('repeatButton').addEventListener('click', toggleRepeat);

document.getElementById('audioPlayer').addEventListener('ended', function() {
    if (isRepeating) {
        playRandomSong();
    }
});
