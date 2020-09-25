const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


// Song titles
const songs = ['18 Vayathil.mp3', 'Aadatha Aatamellam.mp3', 'Adada Mazhaida.mp3', 'Adada Vaa.mp3',
    'Aedho Saigirai.mp3', 'Arabu Naade.mp3', 'Con Man Theme.mp3', 'Devathayai Kanden.mp3',
    'Dope Track.mp3', 'Edhirthu Nil.mp3', 'En Anbae En Anbae.mp3', 'En Fuse Pochu.mp3',
    'En Jannal Vandha.mp3', 'En Kadhal Solla.mp3', 'Engeyo Partha.mp3', 'Eno Kangal.mp3',
    'High On Love.mp3', 'Idhu Kadhala.mp3', 'Idhu Varai.mp3', 'Iragai Pole.mp3', 'Irava Pagala.mp3',
    'Kaadal Endral.mp3', 'Kaatrukullae.mp3', 'Kadhal Konden.mp3', 'Kadhal Vaithu.mp3',
    'Kadhal Valarthen.mp3', 'Kadhal Vandhale.mp3', 'Kambathu Ponnu.mp3', 'Kan Peasum Varthaigal.mp3',
    'Loosu Penne.mp3', 'Mella Sirithal.mp3', 'Merke Merke.mp3', 'Nahnh Na Nah (New Jack Swing Mix).mp3',
    'Natpinilae Natpinilae.mp3', 'Natpukullae Oru.mp3', 'Neethane.mp3', 'Nenjodu Kalinthidu.mp3',
    'Ninaithu Ninaithu Parthal.mp3', 'Oh Shala.mp3', 'Oru Devadha.mp3', 'Oru Kal.mp3',
    'Oru Naalaikkul.mp3', 'Oru Naalil - It All Comes Down To This.mp3', 'Oru Paarvaiyil.mp3',
    'Pesa Vanthen.mp3', 'Pogathey Pogathe.mp3', 'Poi Solla Intha Manasukku.mp3',
    'Poongatre Poongatre.mp3', 'Siragugal.mp3', 'Sol Pechu.mp3', 'Sollamal Thottu Chellum Thendral.mp3',
    'Stylish Thamizhachi.mp3', 'Suthuthe Suthuthe Bhoomi.mp3', 'Sutta Suriyane.mp3',
    'Teriyaamaley Toleygiyren.mp3', 'Thaakkuthe.mp3', 'Thathi Thathi Thaavuthey.mp3', 'Theme Music.mp3',
    'Thottu Thottu.mp3', 'Thuli Thuli Mazhaiyaai.mp3', 'Unnai Thozhi Enbatha.mp3',
    'Va Va Nilava Pudich.mp3', 'Vaanam.mp3', 'Vandha Kadha.mp3', 'Varriyaa - Night Life.mp3',
    'Venmegam Pennaga.mp3', 'Vethalaiya Potendi.mp3', 'Walking Through The Rainbow.mp3',
    'Yaaro (Friendship).mp3', 'Yedhedo Ennangal Vandhu.mp3', 'Yedho Ondru Ennai.mp3'
];

// Keep track of song
let songIndex = Math.floor((Math.random() * songs.length) + 1);

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song.split('.')[0];
    audio.src = `music/${song}`;
    cover.src = `music/offset.jpg`;
}

// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

// Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// Previous song
function prevSong() {
    progress.style.width = 0;
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Next song
function nextSong() {
    progress.style.width = 0;
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);