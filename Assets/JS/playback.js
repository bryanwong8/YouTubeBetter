init();

function init()
{
  let play = document.querySelector("#play");
  let forward = document.querySelector("#forward");
  let backward = document.querySelector("#backword");

  play.addEventListener("click", () => {
    let msg = {
      text: "play"
    }

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, msg);
    });
  });
}
