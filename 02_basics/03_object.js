//singleton

//object literals
//object.create
const mysym= Symbol("key1");

const Jsuser={
    name: "hitesh",
    "fullname":"hardik kumar",
    [mysym]:"mykey1",
    age: 18,
    location: "jaipur",
}


//console.log(Jsuser.fullname)
//console.log(Jsuser['fullname'])
//console.log(Jsuser[mysym]);


Jsuser.name="hitesh";
//console.log(Jsuser.name)
//console.log(Jsuser)
//Object.freeze(Jsuser)
Jsuser.name="mahak"
//console.log(Jsuser);


Jsuser.greeting=function(){
    console.log("Hello Js user");
}

Jsuser.greetingTwo=function(){
    console.log('Hello Js user, ${this.name}');
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());