const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const movie = document.getElementById('movie');
const cover = document.getElementById('cover');


// Song titles
const songs = ['18 Vayathil - Kadhal Kondein.mp3', 'Aadatha Aatamellam - Mounam Pesiyathey.mp3',
    'Adada Mazhaida - Paiyaa.mp3', 'Adada Vaa - Sarvam.mp3', 'Aedho Saigirai - Vaamanan.mp3',
    'Arabu Naade - Thottal Poo Malarum.mp3', 'Con Man Theme - Masss.mp3',
    'Devathayai Kanden - Kadhal Kondein.mp3', 'Dope Track - Pyaar Prema Kaadhal.mp3',
    'Edhirthu Nil - Biriyani.mp3', 'En Anbae En Anbae - Mounam Pesiyathey.mp3',
    'En Fuse Pochu - Aarambam.mp3', 'En Jannal Vandha - Theeradha Vilayattu Pillai.mp3',
    'En Kadhal Solla - Paiyaa.mp3', 'Engeyo Partha - Yaaradi Nee Mohini.mp3',
    'Eno Kangal - Kalvanin Kaadhali.mp3', 'High On Love - Pyaar Prema Kaadhal.mp3',
    'Idhu Kadhala - Thulluvadho Ilamai.mp3', 'Idhu Varai - Goa.mp3',
    'Iragai Pole - Naan Mahan Alla.mp3', 'Irava Pagala - Poovellam Kaettu Paar.mp3',
    'Kaadal Endral - Goa.mp3', 'Kaatrukullae - Sarvam.mp3', 'Kadhal Konden - Kadhal Kondein.mp3',
    'Kadhal Vaithu - Deepavali.mp3', 'Kadhal Valarthen - Manmadhan.mp3',
    'Kadhal Vandhale - Vallavan.mp3', 'Kambathu Ponnu - Sandakozhi 2.mp3',
    'Kan Peasum Varthaigal - 7G Rainbow Colony.mp3', 'Loosu Penne - Vallavan.mp3',
    'Mella Sirithal - Aadhalal Kadhal Seiveer.mp3', 'Merke Merke - Kanda Naal Mudhalaai.mp3',
    'Nahnh Na Nah (New Jack Swing Mix) - Biriyani.mp3', 'Natpinilae Natpinilae - Kadhal Kondein.mp3',
    'Natpukullae Oru - Chennai 600028.mp3', 'Neethane - Sarvam.mp3',
    'Nenjodu Kalinthidu - Kadhal Kondein.mp3', 'Ninaithu Ninaithu Parthal - 7G Rainbow Colony.mp3',
    'Oh Shala - Kaadhal Solla Vandhen.mp3', 'Oru Devadhai - Vaamanan.mp3',
    'Oru Kal - Siva Manasula Sakthi.mp3', 'Oru Naalaikkul - Yaaradi Nee Mohini.mp3',
    'Oru Naalil - Pudhupettai.mp3', 'Oru Paarvaiyil - Siva Manasula Sakthi.mp3',
    'Pesa Vanthen - Manmadhan.mp3', 'Pogathey Pogathe - Deepavali.mp3', 'Poi Solla Intha Manasukku - April Maadhathil.mp3',
    'Poongatre Poongatre - Paiyaa.mp3', 'Siragugal - Sarvam.mp3', 'Sol Pechu - Thillalangadi.mp3',
    'Sollamal Thottu Chellum Thendral - Dheena.mp3', 'Stylish Thamizhachi - Aarambam.mp3',
    'Suthuthe Suthuthe Bhoomi - Paiyaa.mp3', 'Sutta Suriyane - Sarvam.mp3',
    'Teriyaamaley Toleygiyren - Theeradha Vilayattu Pillai.mp3',
    'Thaakkuthe - Baana Kaathadi.mp3', 'Thathi Thathi Thaavuthey - Kadhal Kondein.mp3',
    'Theme Music - Sarvam.mp3', 'Thottu Thottu - Kadhal Kondein.mp3',
    'Thuli Thuli Mazhaiyaai - Paiyaa.mp3', 'Unnai Thozhi Enbatha - Kadhal Kondein.mp3',
    'Va Va Nilava Pudichu - Naan Mahan Alla.mp3', 'Vaanam - Vaanam.mp3',
    'Vandha Kadha - Vai Raja Vai.mp3', 'Varriyaa - Pudhupettai.mp3',
    'Venmegam Pennaga - Yaaradi Nee Mohini.mp3', 'Vethalaiya Potendi - Billa.mp3',
    'Walking Through The Rainbow - 7G Rainbow Colony.mp3', 'Yaaro (Friendship) - Chennai 600028.mp3',
    'Yedhedo Ennangal Vandhu - Pattiyal.mp3', 'Yedho Ondru Ennai - Paiyaa.mp3'
];

// Keep track of song
let songIndex = Math.floor((Math.random() * songs.length) + 1);

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song.split('.')[0].split(' - ')[0];
    movie.innerText = song.split('.')[0].split(' - ')[1];
    audio.src = `music/${song}`;
    cover.src = `images/${song.split('.')[0].split(' - ')[1]}.jpg`;
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