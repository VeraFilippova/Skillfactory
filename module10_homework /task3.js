const inputNode = document.querySelector('.input');
const btnNode = document.querySelector('.btn');
const locationNode = document.querySelector('.location');
const resultNode = document.querySelector('.result');
const urlNode = 'wss://echo-ws-service.herokuapp.com';
let websocket;

const messageText = (text, addClass) =>
  `<div class="message-text ${addClass}">${String(text)}</div>`;

const outputMessage = (txt, addClass) => {
  if (txt !== "" && txt.trim().length) {
    resultNode.insertAdjacentHTML("afterbegin", messageText(txt, addClass));
  }
};

websocket = new WebSocket(urlNode);

const sendMessage = (message) => {
  websocket.onopen = function () {
    console.log("Соединение");
  };

  websocket.onclose = function () {
    console.log("Отключен");
  };

  websocket.onmessage = function (evt) {
    outputMessage(evt.data);
  };

  websocket.onerror = function (evt) {
    outputMessage(evt.data, "error");
  };
  websocket.send(message);
};
const error = () => {
  console.log("Нет данных о местоположении");
};

const success = (position) => {
  console.log("position", position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  let mapLink = `<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Местоположение</a>`
  resultNode.insertAdjacentHTML("afterbegin", messageText(mapLink, "client"));
};

locationNode.addEventListener("click", () => {
  if (!navigator.geolocation) {
    console.log("Не поддерживается вашим браузером");
  } else {
    console.log("Определение местоположения…");
    navigator.geolocation.getCurrentPosition(success, error);
  }
});

btnNode.addEventListener("click", () => {
  outputMessage(inputNode.value, "client");
  sendMessage(inputNode.value);
  inputNode.value = "";
});