const marvel_heros=['thor','spiderman','ironman']
const dc_heros=['superman','flash','batman']
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
//const newarray= marvel_heros.concat(dc_heros)
//console.log(newarray);


const allnewheroes=[...marvel_heros,...dc_heros]
//console.log(allnewheroes);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherarray=anotherarray.flat(Infinity)
//console.log(realanotherarray);

console.log(Array.isArray('hardik')) // true or false 
console.log(Array.from('hardik')) // array bana dega
console.log(Array.from({name: 'hardik'})) //interesting batao keys se array banana hai ki value se

let score1=100
let score2=300
let score3=200
console.log(Array.of(score1,score2,score3));
