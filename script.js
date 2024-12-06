const ouiButton = document.getElementById('oui-button');

ouiButton.addEventListener('mouseover', moveButton);

function moveButton() {
    const maxX = window.innerWidth - ouiButton.offsetWidth;
    const maxY = window.innerHeight - ouiButton.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    ouiButton.style.position = 'fixed';
    ouiButton.style.left = `${randomX}px`;
    ouiButton.style.top = `${randomY}px`; 
}

const poteaux = document.querySelectorAll('.poteau');

poteaux.forEach(poteau => {
    poteau.addEventListener('click', () => {
        document.getElementById('result').textContent = 'Game Over! Tous les poteaux sont égaux!';
    });
});





const volumeButton = document.getElementById("volume-button");
const message = document.getElementById("message");
const volumeSlider = document.getElementById("volume-slider");
const volumeLabel = document.getElementById("volume-label");

const coughSound = new Audio("./cough-sound.mp3");
const funnySoundLow = new Audio("./cough-sound.mp3");
const funnySoundHigh = new Audio("./cough-sound.mp3");

let volume = 0;

function updateVolumeDisplay() {
  volumeSlider.value = volume;
  volumeLabel.textContent = `Volume: ${Math.round(volume * 100)}%`;
  coughSound.volume = volume;

  if (volume < 0.3) {
 
    coughSound.volume = volume;
   
  } else if (funnySoundLowvolume > 0.7) {
   
    coughSound.volume = volume;
 
  }
}

volumeButton.addEventListener("click", () => {
  volume = volume === 1 ? 0 : volume + 0.25;

  volumeButton.style.animation = "clickEffect 0.5s ease";

  coughSound.currentTime = 0;
  coughSound.play();

  updateVolumeDisplay();
});

updateVolumeDisplay();