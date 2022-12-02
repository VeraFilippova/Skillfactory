// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.

const btnNode = document.querySelector(".btn");
const inputNode = document.querySelector(".input");

const showResultHtml = document.querySelector(".result");

function useRequest(url, callback) {
  let xhrRequest = new XMLHttpRequest();

  xhrRequest.open("GET", url);
  xhrRequest.onload = function () {
    if (xhrRequest.status != 200) {
      console.log("Статус ответа: ", xhrRequest.status);
    } else {
      let result = JSON.parse(xhrRequest.response);

      if (callback) callback(result);
    }
  };

  xhrRequest.onprogress = function (event) {
    console.log(`Загружено ${event.loaded} из ${event.total}`);
  };

  xhrRequest.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhrRequest.status);
  };

  xhrRequest.send();
}

function ResultShow(apiData) {
  let cards = "";

  apiData.forEach((item) => {
    const cardBlock = `
        
        <div class="card">
            <img src="${item.download_url}" class="card_image" />
            <p> ${item.author} </p>
        </div>
        `;

    cards += cardBlock;
  });

  showResultHtml.innerHTML = cards;
}

btnNode.addEventListener("click", function () {
  let getParam, getUrl;
  const input = Number(inputNode.value);
  if (input < 1 || input > 10) {
    console.log("Число вне диапазона от 1 до 10");
  } else {
    getParam = requestURL.split("=");
    getParam[1] = input;
    getUrl = getParam.join("=");
    useRequest(getUrl, ResultShow);
  }
});
