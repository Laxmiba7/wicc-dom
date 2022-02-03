const lecturesList = [
  { title: "Introduction to WEB" },
  { title: "Introduction to HTML & CSS" },
  { title: "Git and its best practices" },
];

const lists = document.querySelector("#lecture-list ul");

function showLists() {
  const lisArray = [];
  lecturesList.forEach((item) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");

    p.innerText = item.title;
    button.innerText = "remove";

    p.classList.add("title");
    button.classList.add("remove");

    li.append(p, button);

    lisArray.push(li);
  });

  lists.replaceChildren(...lisArray);
}

document.addEventListener("DOMContentLoaded", function (event) {
  showLists();

  const forms = document.forms["lecture-add"];

  forms.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputField = forms.querySelector("input[type='text']");
    if (inputField.value) {
      lecturesList.push({
        title: inputField.value,
      });

      lists.innerHTML = "";

      showLists();

      inputField.value = "";
    }
  });

  const list = document.querySelector("#lecture-list ul");

  list.addEventListener("click", function (event) {
    if (event.target.className === "remove") {
      const li = event.target.parentElement;
      list.removeChild(li);
    }
  });
});

// const lists = document.querySelector("#lecture-list ul");

// document.addEventListener("DOMContentLoaded", function (event) {
//   const forms = document.forms["lecture-add"];

//   forms.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const inputField = forms.querySelector("input[type='text']");

//     const li = document.createElement("li");
//     const p = document.createElement("p");
//     const button = document.createElement("button");

//     if (inputField.value) {
//       p.innerText = inputField.value;
//       button.innerText = "remove";
//       p.classList.add("title");
//       button.classList.add("remove");
//       li.append(p, button);

//       const lists = document.querySelector("#lecture-list ul");
//       lists.appendChild(li);

//       inputField.value = "";
//     }
//   });

//   const list = document.querySelector("#lecture-list ul");

//   list.addEventListener("click", function (event) {
//     if (event.target.className === "remove") {
//       const li = event.target.parentElement;
//       list.removeChild(li);
//     }
//   });
// });

// function promise2() {
//   return new Promise((resolve, reject) => {
//     resolve("success");
//     // reject("failure");
//   });
// }

// function promise() {
//   return new Promise((resolve, reject) => {
//     resolve(promise2);
//     // reject("failure");
//   });
// }

// console.log(
//   promise()
//     .then((res) => {
//       // console.log(res);
//     }).then((res2) => {
//       console.log(res2);
//     })
//     .catch((error) => {
//       // console.log(error);
//     })
//   // .finally(fin => {
//   //   console.log("fin")
//   // })
// );

function fetchApi() {
  return fetch("https://jsonplaceholder.typadasdsadicode.com/todos/1").then((response) =>
    response.json()
  );
  // .then((json) => console.log(json));

  // console.log("response", res);
  // console.log("test");
}

async function asyncAwait() {



  try {
  
  
    return await fetchApi();


  } catch (error) {
  
  
    throw error;
  
  
  
  
  } finally{

  }

  // fetchApi()
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

console.log(asyncAwait());
