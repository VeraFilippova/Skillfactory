const apiURL = "https://picsum.photos/200/300";

function pageLoaded() {
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  const btn = document.querySelector("#button");
  const output = document.querySelector("#output");
  
  function sendRequest() {
    if (1 <= input1.value <= 10 && 1 <= input2.value <= 10) {
      fetch(`https://picsum.photos/v2/list?page=${input1.value}&limit=${input2.value}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        writeOutput(formatOutput(data));
      })
      } else if (10 < input1.value < 1 || isNan(input1.value1)  && 1 <= input2.value <= 10) {
       output.textContext="Номер страницы вне диапазона от 1 до 10";
      } else if (10 < input2.value < 1 || isNan(input2.value1)  && 1 <= input1.value <= 10) {
       output.textContext="Лимит вне диапазона от 1 до 10";
    } else if (10 < input1.value < 1 && 10 < input2.value < 1 && isNan(input1.value1) && isNan(input2.value1)) {
       output.textContext="Номер страницы и лимит вне диапазона от 1 до 10";
    }
  }
  
  function formatOutput(data) {
    let output = `
      <img src="https://picsum.photos/v2/list?page=${input1.value}&limit=${input2.value}" />
    `
    return output;
  }
  
  function writeOutput(message) {
    output.innerHTML = message;
  }
  
  btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);