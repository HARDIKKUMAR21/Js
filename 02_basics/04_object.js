//const tinderUser= new Object() singleton object
const tinderUser={}

tinderUser.id=1234
tinderUser.name="hardik"
tinderUser.isloggedin=false
//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"kumar",
        }

    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
//const obj3={obj1,obj2};
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2} 

//console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:2,
        email:"k@gmail.com",
    },
    {
        id:3,
        email:"p@gmail.com",
    },
]

//console.log(users[1].email)
//console.log(tinderUser)
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isloggedin'))

const course={
    coursename:"js in hindi",
    price:9999,
    instructor:"hitesh",

}

const {instructor:ins}=course
console.log(ins)



/* const navbar= ({company}) => {

}

navbar(company="hitesh")*/
