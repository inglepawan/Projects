const image = document.getElementById('cover');
      title = document.getElementById('music-title');
      artist = document.getElementById('music-artist');
      currentTimeEl = document.getElementById('current-time');
      durationEl = document.getElementById('duration');
      progress = document.getElementById('progress');
      playerProgress = document.getElementById('player-progress');
      prevBtn = document.getElementById('prev');
      nextBtn = document.getElementById('next');
      playBtn = document.getElementById('play');
      background = document.getElementById('bg-img');

      const music = new Audio();

      const songs  = [
        {
            path:'assets/Xopun Xore_Prabin Borah & Barsha Borah.mp3',
            displayName: 'Xopun Xore',
            cover: 'assets',
            artist:'Prabin Borah',
        },
        {
            path:'assets/Kar Agomon _Shankuraj Konwar.mp3',
            displayName: 'Kar Agomon',
            cover: 'assets',
            artist:'Shankuraj',
        },
        {
            path:'assets/JAILER - Rathamaarey_Anirudh  Nelson.mp3',
            displayName: 'Rathamaarey',
            cover: 'assets',
            artist:'Anirudh',
        },
        {
            path:'assets/Pathu Thala - Nee Singam Dhan_Sid-Sriram.mp3',
            displayName: 'Nee Singam Dhan',
            cover: 'assets',
            artist:'Sid-Sriram',
        },
        
];

let musicIndex = 0;
let isPlaying= false;

function togglePlay() {
  if(isPlaying){
    pauseMusic();
  }else{
    playMusic();
  }
};

function playMusic(){
  isPlaying = true;
  //change play button 
  playBtn.classList.replace('fa-play', 'fa-pause');
  //set button hover title
  playBtn.setAttribute('title', 'Pause');
  music.play();
}
function pauseMusic(){
  isPlaying = true;
  //change pause button 
  playBtn.classList.replace('fa-pause', 'fa-play');
  //set button hover title
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

function loadMusic(song){
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = bg-img.cover;
}

function changeMusic(direction){
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();

  music.onloadedmetadata = () => {
    playMusic();
  };
}

// function updateProgressBar(){
//   const { duration, currentTime} = music;
//   const progressPercent = (currentTime / duration ) * 100;
//   progress.style.width = `${progressPercent}%`;

//   const formatTime = (time)=> String(Math.floor(time)).padStart(2, '0');
//   durationEl.textContent = `${formatTime(duration/ 60)}:${formatTime(duration % 60)}`;
//   currentTimeEl.textContent = `${formatTime(currentTime/ 60)}:${formatTime(currentTime % 60)}`;
// }

function updateProgressBar() {
  if (!music.duration || isNaN(music.duration)) return;

  const progressPercent = (music.currentTime / music.duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) =>
    String(Math.floor(time / 60)).padStart(2, '0') + ':' +
    String(Math.floor(time % 60)).padStart(2, '0');

  currentTimeEl.textContent = formatTime(music.currentTime);
  durationEl.textContent = formatTime(music.duration);
}


function setProgressBar (e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', ()=> changeMusic(-1));
next.addEventListener('click', ()=> changeMusic(1));
music.addEventListener('ended', ()=> changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);


