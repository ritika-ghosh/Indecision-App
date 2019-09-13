
//arguments object
const add =  (a, b) => {
    //console.log(arguments)
    return a + b
};

console.log(add(55,1))

//this keyword
const user = {
    name: 'Ritika',
    cities: ['Jabalpur','New York', 'Dubmlin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in' + city);
       }
    
};

console.log(user.printPlacesLived());


//Chaleenge
const multiplier = {
    number: [10,20,30],
    multiplyBy: 3,
    multiply() {
        return this.number.map((into) => this.multiplyBy +'*'+ into + '='+ this.multiplyBy * into);
    }
};
console.log(multiplier.multiply());