let app = document.querySelector(".app");
let chat = document.querySelector(".chat");
let friends = document.querySelector(".friends");
let loud = document.querySelector(".loud");
let loudText = document.querySelector("#loud");
loudText.textContent = "It will be a little loud in here.\nAre you ready?";
let skypeSound =
  "https://raw.githubusercontent.com/N0vum/Sound-samples/main/skype_message.mp3";
const chatting = [
  ["<p class='message'>Hi guys!</p>"],
  [
    "<p class='message fr'>Hello!</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/hello.mp3",
  ],
  ["<p class='message'>Do you remember what day it is today?</p>"],
  [
    "<p class='message fr'>My memory sucks.</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/my-memory-sucks.mp3",
  ],
  ["<p class='message'>Today is Pasha's birthday!</p>"],
  [
    "<p class='message fr'>No!</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/no.mp3",
  ],
  ["<p class='message'>Yes! He is 34!</p>"],
  [
    "<p class='message fr'>You're kidding!</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/youre-kidding.mp3",
  ],
  [
    "<p class='message fr'>Do you know how old the Earth is?</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/do-you-know-how-old-the-earth-is.mp3",
  ],
  [
    "<p class='message fr'>We grow up.</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/we-grow-up.mp3",
  ],
  ["<p class='message'>So, what do we wish Pasha?</p>"],
  [
    "<p class='message fr'>Be sympathetic!</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/be-sympathetic.mp3",
  ],
  [
    "<p class='message fr'>Be aloof, not a doof!</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/be-aloof-not-a-doof.mp3",
  ],
  ["<p class='message'>What about a gift?</p>"],
  [
    "<p class='message fr'>Muffin!</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/muffin.mp3",
  ],
  [
    "<img style='width:180px' class='message nom'  src='https://raw.githubusercontent.com/N0vum/Sound-samples/main/muffin.png' />",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/mixkit-happy-crowd-cheer-975.wav",
  ],
  [
    "<p class='message fr'>Congratulations!</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/congratulations.mp3",
  ],
  [
    "<p class='message fr oops'>You know what? That is the best fake speech I think I've ever heard!</p>",
    "https://raw.githubusercontent.com/N0vum/Sound-samples/main/you-know-what-that-is-the-best-fake-speech-i-think-ive-ever-heard.mp3",
  ],
  [
    "<div class='congratulation'>HAPPY <span class='circle' style='background-color: #e91e23'></span> BIRTHDAY <span class='circle' style='background-color: #02b2e7'></span> TO <span  class='circle' style='background-color: #fabc16'></span> YOU!</div>",
    "https://www.televisiontunes.com/uploads/audio/Friends.mp3",
  ],
];

function letsChat() {
  console.log("I know it's a terrible code!");
  loud.remove();
  friends.classList.add("visible");
  chatting.map((m, index) => {
    m.length < 2 ? m.push(skypeSound) : m;
    if (index == chatting.length - 1) {
      function setLastMessage() {
        app.remove();
        document.body.insertAdjacentHTML("beforebegin", m[0]);
        new Audio(m[1]).play();
      }
      setTimeout(setLastMessage, 2000 * index);
    } else {
      function setMessage() {
        chat.insertAdjacentHTML("beforebegin", m[0]);
        new Audio(m[1]).play();
        chat.scrollIntoView({ block: "end" });
      }

      setTimeout(setMessage, 2000 * index);
    }
  });
}
document.querySelector("#okay").addEventListener("click", letsChat);
