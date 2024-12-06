const slider = document.getElementById("volume-slider");
    const label = document.getElementById("volume-label");
    const sliderContainer = document.getElementById("slider-container");

    const sounds = [
      new Audio("https://www.soundjay.com/button/beep-07.wav"),
      new Audio("https://www.soundjay.com/button/button-10.wav"),
      new Audio("https://www.soundjay.com/human/sneeze-01.wav")
    ];

    slider.addEventListener("input", () => {
      const volume = slider.value;
      label.textContent = `Volume: ${volume}`;
      

      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      randomSound.currentTime = 0;
      randomSound.play();

      if (volume == 0) {
        document.body.style.backgroundColor = "white";
        label.style.color = "#000";
      } else {
        document.body.style.backgroundColor = "#121212";
        label.style.color = "#ff5722";
      }
      sliderContainer.style.top = Math.random() * (window.innerHeight - 100) + "px";
      sliderContainer.style.left = Math.random() * (window.innerWidth - 300) + "px";

   
      
      sliderContainer.style.transform = `rotate(${Math.random() * 360}deg)`;
      if (Math.random() > 0.7) {
        slider.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      }
    });


