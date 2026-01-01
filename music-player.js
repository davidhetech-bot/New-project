const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const seek = document.getElementById('seek');
const currentEl = document.getElementById('current');
const durationEl = document.getElementById('duration');
const volume = document.getElementById('volume');
const playlistEl = document.getElementById('playlist');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');

const tracks = [
  {title:'Sample Track 1',artist:'SoundHelix',src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'},
  {title:'Sample Track 2',artist:'SoundHelix',src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'},
  {title:'Sample Track 3',artist:'SoundHelix',src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'}
];

let index = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0=off,1=one,2=all
let order = tracks.map((_,i)=>i);

function loadTrack(i){
  index = i;
  const t = tracks[order[index]];
  audio.src = t.src;
  titleEl.textContent = t.title;
  artistEl.textContent = t.artist;
  updatePlaylistUI();
}

function play(){audio.play();isPlaying=true;playBtn.textContent='⏸'}
function pause(){audio.pause();isPlaying=false;playBtn.textContent='▶️'}

playBtn.addEventListener('click',()=>{isPlaying?pause():play()});
prevBtn.addEventListener('click',()=>{seekToPrev()});
nextBtn.addEventListener('click',()=>{seekToNext()});

audio.addEventListener('timeupdate',()=>{
  if(audio.duration){
    const pct = (audio.currentTime/audio.duration)*100;
    seek.value = pct;
    currentEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

seek.addEventListener('input',()=>{
  if(audio.duration) audio.currentTime = (seek.value/100)*audio.duration;
});

volume.addEventListener('input',()=>{audio.volume = volume.value});

shuffleBtn.addEventListener('click',()=>{
  isShuffle = !isShuffle;
  shuffleBtn.style.opacity = isShuffle?1:0.6;
  if(isShuffle) shuffleOrder(); else order = tracks.map((_,i)=>i);
  loadTrack(0);
});

repeatBtn.addEventListener('click',()=>{
  repeatMode = (repeatMode+1)%3;
  repeatBtn.style.opacity = repeatMode?1:0.6;
});

audio.addEventListener('ended',()=>{
  if(repeatMode===1){audio.currentTime=0;play();return}
  if(index < order.length-1){seekToNext()} else {if(repeatMode===2){loadTrack(0);play()} else pause()}
});

function seekToNext(){
  index = (index+1)%order.length;
  loadTrack(index);
  play();
}
function seekToPrev(){
  index = (index-1+order.length)%order.length;
  loadTrack(index);
  play();
}

function formatTime(sec){
  if(!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec/60); const s = Math.floor(sec%60).toString().padStart(2,'0');
  return `${m}:${s}`;
}

function shuffleOrder(){
  order = tracks.map((_,i)=>i);
  for(let i=order.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];
  }
}

function updatePlaylistUI(){
  playlistEl.innerHTML = '';
  order.forEach((ti,pos)=>{
    const li = document.createElement('li');
    const t = tracks[ti];
    li.textContent = `${t.title} — ${t.artist}`;
    if(pos===index) li.classList.add('active');
    li.addEventListener('click',()=>{loadTrack(pos);play()});
    playlistEl.appendChild(li);
  });
}

// init
loadTrack(0);
volume.value = 0.8; audio.volume = 0.8;