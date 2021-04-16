
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// function foo(){
//   var bar = "bar";
//   function baz(){
//    console.log(bar);
//   }
//   bam(baz);
// }
// function bam(baz){
//   baz();
// }
// function baz(){
//   var baz="bar";
//   foo();
// }
// console.log( baz());

// function makeFunc() {
//   var name = 'Mozilla';
//   function displayName() {
//     alert(name);
//   }
//   return displayName;
// }

// var myFunc = makeFunc();
// myFunc();
// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, a closure
//     alert(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();
