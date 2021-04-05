 // alert(11);
  // alert('Class 102d27');
  // alert(true);

  // alert(11**11);

  /*
  
  Datatype:
  - String -> "", ''
  - Number -> 11, 11.2 , 1231231231231231231231231312123
  - Boolean -> true, false

  - Array
  - Object

  Mathematics
  - plus +
  - minus -
  - multiply *
  - divide /
  - mode %
  - power **

  Variable
  - var varName = 11;
  */

  // var mathOperation = prompt('Please enter a number'); // return String

  //  ==
  //  <=
  //  >=
  
  //  ===
  //  !=
  
  // if(mathOperation === 12) {
  //   alert(12);
  // }
  
  //  if(mathOperation < 0) {
  //    alert('You input is a negative value');
  //  } else if(mathOperation >= 0) {  
  //    alert('You input is a positive value');
  //  } else {
  //    alert('please enter a number');
  //  }
  
  // alert(mathOperation + 3);
  // alert(mathOperation - 3);
  // alert(mathOperation * 3);
  // alert(mathOperation / 3);
  // alert(mathOperation % 3);
  // alert(mathOperation ** 3);
  
  // document.write(mathOperation ** 3);
  // console.log(mathOperation ** 3);
  
  // var userName = 'Mohammed';
  // alert(userName);
  
  
  // document.write(userName);
  
  // var userInput = prompt('Please enter number of the flower!');

  // for(var i = 10; i > userInput; i = i + 1) {
  //   console.log(i);
  //   document.write('<img src="https://i.pinimg.com/originals/11/2b/74/112b746a2182417b2a947d949798c968.jpg" />')
  // }

  // var i -> start point 
  // 1 < 5 -> 5 < 5


//   var password = prompt('Please enter your password');

// while(password !== 'ahmed') {
//   password = prompt('Your password is wrong please try again');
// }

// var flowerType = prompt('Please enter flower type');
// while(flowerType !== 'tulip' && flowerType !== 'roses') {
//   flowerType = prompt('Please choose tulip or roses');
// }

// var userInput = prompt('Please enter number of the flower!');

// for (var i = 0; i < userInput; i++) {
//   if(flowerType == 'tulip') {
//     document.write('<img src="https://ngb.org/wp-content/uploads/2018/09/longfield.gardens.Sept_.jpg" />');
//   } else {
//       document.write('<img src="https://i.pinimg.com/originals/11/2b/74/112b746a2182417b2a947d949798c968.jpg" />');
//   }
// }


// for(var i = 0; i < 12; i++) {
//   console.log(i);
// }

// for(var i = 100; i <= 200; i++) {
//   console.log(i);
// }

// for(var i = 1000; i < 2000; i++) {
//   console.log(i);
// }

function printName() {
  console.log('Class 102d27');
}

// Params
function printConsoleNumber(parm1, parm2) {
  for(var i = parm1; i < parm2; i++) {
    console.log(i);
  }
}

printName();
// Args
printConsoleNumber(1, 10);
printConsoleNumber(50, 100);
printConsoleNumber(120, 150);
