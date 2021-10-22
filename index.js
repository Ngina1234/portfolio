function calculator(num1, num2) {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let output =document.getElementById("output");

  num1 = parseInt(num1.value);
  num2 = parseInt(num2.value);

  const sum=num1+num2;
  const diff =num1-num1;
  const product =num1*num2;
  const quot= num1/num2;
  output.innerHTML ="+sum+"\n difference 

  console.log("Sum: + sum");
  console.log("difference: + diff");
  console.log("Product: + Product");
console.log("quotientt: + quot");
console.log("type of quotient:"=typeof quot);
}
let navbar_icon = document.getElementById ("navbar-icon");
navbar_icon.addEventListener("click",function () {
  let collapse =document.getElementById("collapse");
  if(collapse.style.diplay=="none")
  collapse.style.display="flex";
  else
  collapse.style.display = "none";
});


