//  const square = function (x ){
//     return x* x;
//  };

// //  const squareArrow = (x) => {
// //      return x * x;
// //  }

// const squareArrow = (x )=> x * x;

//  console.log(squareArrow(8));

 
// const fullName = 'Ritika Ghosh';
// let firstName;

// if(fullName){
//     const  firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);

// const fullName = 'Ritika Ghosh';

// const firstName = (fullName) => fullName.split(' ')[0];
// console.log(firstName('Ritika Ghosh'));

const firstName = (fullName) => {
   return fullName.split(' ')[0];
}

console.log(firstName('Mike Smith'));