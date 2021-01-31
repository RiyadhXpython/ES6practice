class parent{
    constructor(){
        this.fatherName = "Schwerznegger"
    }
}

class child extends parent{
    constructor(name){
        super();
        this.name = name

    }
}

const baby = new child("jhon doe");
const baby2 = new child ("tom")
console.log(baby);
console.log(baby2);