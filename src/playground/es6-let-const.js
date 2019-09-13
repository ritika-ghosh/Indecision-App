var nameVar = 'Ritika';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Rats';
console.log('nameConst', nameConst);

//Block Scoping

const fullName = 'Ritika Ghosh';
let firstName;

if(fullName){
    const  firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);