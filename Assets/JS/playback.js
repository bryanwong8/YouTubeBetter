init();

function init()
{
  let play = document.querySelector("#play");
  let speed = document.querySelector("#speed_confirm");

  play.addEventListener("click", () => {
    let msg = {
      text: "play"
    }

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, msg);
    });
  });

  speed.addEventListener("click", () => {
    let speed_value = document.querySelector("#speed").value;

    let msg = {
      text: "speed",
      speed: speed_value
    }

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, msg);
    } );
  });
}
