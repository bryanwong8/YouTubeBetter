init();

function init(){
  console.log("Hello world");

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message.text);

    if(message.text == "play"){
      document.getElementsByClassName('ytp-play-button')[0].click();
    }else if(message.text == "speed"){
      let speed = document.getElementsByClassName('html5-main-video')[0];

      speed. playbackRate = message.speed;
    }
  });
}
