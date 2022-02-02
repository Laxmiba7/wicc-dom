// const lectures = document.getElementById("lecture-list")
// const classList = document.getElementsByClassName("li");
// const classList = document.getElementsByTagName("li");

// for (let index = 0; index < classList.length; index++) {
//     const element = classList[index];
//     console.log(element)
// }

// console.log(classList);
// console.log(Array.from(classList));

// const loopData = Array.from(classList)
// loopData.forEach((item) =>{

//     console.log(item)
// })

// querySelector
// const data = document.querySelectorAll("#lecture-list .title")
// data.forEach(el => {
//     // el.innerText = el.innerText + " 2"
//     el.innerHTML = " <span>title</span>"
// })
// console.log(data)

// const element = document.querySelector("#heading");
// const parentLement = element.parentElement;
// const siblings = element.previousElementSibling;
// const siblings = element.nextElementSibling;
// element.addEventListener("click", function(event){
//     // console.log(event.target.parentElement)

//     event.target.innerText = "testing click"
// })

// const addForm  = document.getElementById("anchor")

// addForm.addEventListener("click", function(event){
//     event.preventDefault()
// })

const forms = document.forms["lecture-add"];

// console.log(document.forms)

forms.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputField = forms.querySelector("input[type='text']");

  const li = document.createElement("li");
  const p = document.createElement("p");
  const button = document.createElement("button");

  if (inputField.value) {
    p.innerText = inputField.value;
    button.innerText = "remove";

    //   button.className = "remove testt"
    //   p.classList.add("test");
    p.classList.add("title");
    //   p.classList.remove("test");
    button.classList.add("remove");

    //   li.appendChild (p);
    //   li.appendChild(button);

    li.append(p, button);

    const lists = document.querySelector("#lecture-list ul");
    lists.appendChild(li);

    inputField.value = "";
  }
});
const lists = document.querySelector("#lecture-list ul");

const lis = document.querySelectorAll("#lecture-list ul li");
lis.forEach((li) => {
  li.addEventListener("click", function (event) {
    alert()
  });
});



const buttons = document.querySelectorAll("#lecture-list ul li button");
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const li = event.target.parentElement;

    event.stopPropagation()

    lists.removeChild(li);

    
  });
});

// const list = document.querySelector("#lecture-list ul");

// list.addEventListener("click", function (event) {
//   if (event.target.className === "remove") {
//     const li = event.target.parentElement;
//     list.removeChild(li)
//   }
// });
