// console.log("Hello World");

function checkBirthYear() {
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let customerYear = document.getElementById("birthYear").valueAsNumber;
  if (currentYear - customerYear >= 18) {
    document.getElementById("result").innerHTML = "Adult";
  } else {
    document.getElementById("result").innerHTML = "Young";
  }
}

function checkAge() {
  let age = document.getElementById("age").valueAsNumber;

  if (age >= 18) {
    document.getElementById("result").innerHTML = "Adult";
  } else {
    document.getElementById("result").innerHTML = "Young";
  }
}

// let your_age = Number(prompt("What is your age"));

// if (your_age > 18) alert("You are adult");
// else alert("You are young");

function myFunction() {
  let your_name = document.getElementById("text1").value;
  alert("Your name is: " + your_name);
}

function sumNumber() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let results = Number(num1) + Number(num2);
  alert("Result:  " + results);
}

function set_text() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function change_img_src() {
  let current_src = document.getElementById("bulb").src;
  console.log(current_src);
  if (current_src.includes("img/pic_bulboff.gif"))
    document.getElementById("bulb").src = "img/pic_bulbon.gif";
  else document.getElementById("bulb").src = "img/pic_bulboff.gif";
}
