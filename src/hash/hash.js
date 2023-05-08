import { createHash } from "crypto";

function hashCreate(pwrd){
    return createHash('sha256').update(pwrd).digest('hex');
}

export let hashConsole = hashCreate("stro stro stro");


class User {
    constructor(name, password){
        this.name = name;
        this.hash = hashCreate(password);
    }

    auth(name, password){
        if(this.name == name && this.hash == hashCreate(password)){
            return true;
            console.log("Sucess!")
        }else{
            return false;
            console.log("Fail! Not a true user!")
        }
    }
}

const user = new User("Joao", "23082005");
console.log(user);

export let userAuth = user.auth;