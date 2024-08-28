const tracks = [
    {
        title: "Death Bed - Powfu",
        src: "deathbed.mp3.mp3"
    },
    {
        title: "Beautiful - Bazzi, Camila Cabello",
        src: "beautiful.mp3.mp3"
    },
    {
        title: "Dandelions - Ruth B.",
        src: "dandelions.mp3.mp3"
    }
];

let currentTrackIndex = 0;

const audio = document.getElementById('audio');
const trackTitle = document.getElementById('trackTitle');

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    trackTitle.textContent = track.title;
    audio.load();
    audio.play();
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
}

function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
}

// Initial load
loadTrack(currentTrackIndex);
