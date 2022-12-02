// Task1

const xmlString = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll("student");
const result = { list: [] };
for (let node of studentNode) {
  const nameNode = node.querySelector("name");
  const nameLang = nameNode.getAttribute("lang");
  const firstName = node.querySelector("first");
  const secondName = node.querySelector("second");
  const ageNode = node.querySelector("age");
  const profNode = node.querySelector("prof");
  const obj = {
    name: firstName.textContent + " " + secondName.textContent,
    age: ageNode.textContent,
    prof: profNode.textContent,
    lang: nameLang,
  };
  result.list.push(obj);
}

console.log(`result`, result);

// Task2


