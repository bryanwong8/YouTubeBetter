init();

function init(){
  console.log("Hello world");

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message.text);


  });
}
