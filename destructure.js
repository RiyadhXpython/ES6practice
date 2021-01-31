


// const person = { name : "riad shanto" , age: 17 , phone: 01010101,  job: "facebooking" , gfName: "nirjona"}

// const gfName = person.gfName;
// const job = person.job;
// const {phone} = {name : "riad shanto" , age: 17 , phone: 01010101,  job: "facebooking" , gfName: "nirjona"}


// console.log(job, phone)
// console.log(gfName,job)
// console.log(job, gfName)
// console.log(gfName, job)

const friends = ["shakib", "tamim", "salman", "riyadh" , "rony"]
const[chotoFriend,...nextFriend] = friends;
console.log(chotoFriend, nextFriend)

const {phone}= person;

const complexObject = {
    name: "bca" ,
    info: {
        adress: "kolaBagan",
        leader: "shanto",
    }
}

const {leader} = complexObject.info;




