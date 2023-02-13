for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
  }
  
  document.addEventListener("keypress", (e) => {
    makeSound(e.key);
    buttonAnimation(e.key);
  });
  
  function makeSound(key) {
    switch (key) {
      case "a":
        var audio = new Audio("./sounds/boom.wav");
        audio.play();
        break;
      case "s":
        var audio = new Audio("./sounds/clap.wav");
        audio.play();
        break;
      case "d":
        var audio = new Audio("./sounds/hihat.wav");
        audio.play();
        break;
      case "f":
        var audio = new Audio("./sounds/kick.wav");
        audio.play();
        break;
      case "g":
        var audio = new Audio("./sounds/openhat.wav");
        audio.play();
        break;
      case "h":
        var audio = new Audio("./sounds/ride.wav");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./sounds/snare.wav");
        audio.play();
        break;
      case "k":
        var audio = new Audio("./sounds/tink.wav");
        audio.play();
        break;
      case "l":
        var audio = new Audio("./sounds/tom.wav");
        audio.play();
        break;
      default:
        console.log(buttonInnerHTML);
    }
  }
  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }