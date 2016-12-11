"use strict";


(function(){
  //console.log("Init drums");
  window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio){
      return;
    }
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
    //console.log("audio ", audio);
    //console.log("key press", e);
  });

  function removeTransition(e){
    if(e.propertyName != 'transform'){
      return;
    }
    //console.log(e, this);
    this.classList.remove('playing');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))

})();
