const btnNode = document.querySelector(".btn");
const input1Node = document.querySelector(".input1");
const input2Node = document.querySelector(".input2");
const erorrNode = document.querySelector(".error");
const showResult = document.querySelector(".result");

btnNode.addEventListener("click", () => {
  if (
    Number(input1Node.value) >= 100 &&
    Number(input1Node.value) <= 300 &&
    Number(input2Node.value) >= 100 &&
    Number(input1Node.value) <= 300
  ) {
    fetch(
      `https://picsum.photos/${Number(input1Node.value)}/${Number(
        input2Node.value
      )}`
    ).then((response) => {
      showResult.innerHTML += ` <img src=${response.url}>`;
    });
  } else {
    erorrNode.innerHTML += ` <h3> Одно из веденных числе вне диапазона от 100 до 300 <h3>`;
  }
});
