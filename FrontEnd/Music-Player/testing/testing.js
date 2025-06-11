const image = document.getElementById('cover');
const title = document.getElementById('music-title');
const artist = document.getElementById('music-artist');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const playerProgress = document.getElementById('player-progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');

const music = new Audio();

const songs = [
  {
    path: 'assets/Xopun Xore_Prabin Borah & Barsha Borah.mp3',
    displayName: 'Xopun Xore',
    cover:
      'https://cdn.pixabay.com/photo/2016/11/19/13/36/music-1836009_1280.jpg',
    artist: 'Prabin Borah',
  },
  {
    path: 'assets/Kar Agomon _Shankuraj Konwar.mp3',
    displayName: 'Kar Agomon',
    cover:
      'https://cdn.pixabay.com/photo/2016/02/13/12/26/dj-1199356_1280.jpg',
    artist: 'Shankuraj',
  },
  {
    path: 'assets/JAILER - Rathamaarey_Anirudh  Nelson.mp3',
    displayName: 'Rathamaarey',
    cover:
      'https://cdn.pixabay.com/photo/2015/09/18/20/15/notes-949482_1280.jpg',
    artist: 'Anirudh',
  },
];

let musicIndex = 0;
let isPlaying = false;

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
}

function playMusic() {
  isPlaying = true;
  music.play();
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  playBtn.title = 'Pause';
}

function pauseMusic() {
  isPlaying = false;
  music.pause();
  playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  playBtn.title = 'Play';
}

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

function updateProgressBar() {
  if (!music.duration) return;
  const progressPercent = (music.currentTime / music.duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  currentTimeEl.textContent = formatTime(music.currentTime);
  durationEl.textContent = formatTime(music.duration);
}

function setProgressBar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

// Load first song on start
loadMusic(songs[musicIndex]);


function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;

  music.load();
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  music.oncanplaythrough = () => {
    playMusic();
    music.oncanplaythrough = null; // remove handler after use
  };
}
