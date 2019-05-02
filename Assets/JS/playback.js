init();

function init()
{
  let play = document.querySelector("#play");
  let speed = document.querySelector("#speed_confirm");
  let search_bar = document.querySelector("#search");
  let mic = document.querySelector("microphone");

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
    });
  });

  mic.addEventListener("click", () => {
      let mic_input = document.querySelector("mic_input");

      let msg = {
        text: "mic"
      }
  });
}
