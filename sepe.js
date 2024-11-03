// Array of music file paths
const songs = [
    'music/song1.mp3',
    'music/song2.mp3',
    'music/song3.mp3', // Add your music files here
];

let isShuffling = false;
let isRepeating = false;

// Function to play a random song
function playRandomSong() {
    const audioPlayer = document.getElementById('audioPlayer');
    let randomIndex = Math.floor(Math.random() * songs.length);

    // If shuffling is enabled, pick a random song
    if (isShuffling) {
        audioPlayer.src = songs[randomIndex];
    } else {
        audioPlayer.src = songs[songs.length - 1]; // Default to the last song if not shuffling
    }

    audioPlayer.play();
}

// Function to toggle shuffle mode
function toggleShuffle() {
    isShuffling = !isShuffling;
    document.getElementById('shuffleButton').innerText = isShuffling ? "Shuffle On" : "Shuffle Off";
}

// Function to toggle repeat mode
function toggleRepeat() {
    isRepeating = !isRepeating;
    document.getElementById('repeatButton').innerText = isRepeating ? "Repeat On" : "Repeat Off";
}

// Set volume from the slider
document.getElementById('volumeControl').addEventListener('input', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = this.value;
});

// Event listeners for buttons
document.getElementById('playButton').addEventListener('click', playRandomSong);
document.getElementById('shuffleButton').addEventListener('click', toggleShuffle);
document.getElementById('repeatButton').addEventListener('click', toggleRepeat);

// Handle audio ended event for repeat
document.getElementById('audioPlayer').addEventListener('ended', function() {
    if (isRepeating) {
        playRandomSong();
    }
});
