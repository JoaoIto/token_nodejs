import { scryptSync, randomBytes, timingSafeEqual, createHash } from "crypto";

function hashCreate(pasw) {
  const crypto = randomBytes(16).toString('hex');
  const paswHash = scryptSync(pasw, crypto, 64);
  return `${crypto}: ${paswHash}`;
}

export let hashConsole = hashCreate("stro stro stro");

class User {
  constructor(name, password) {
    this.name = name;
    [this.crypto, this.hash] = hashCreate(password).split(':');
  }
}

export const user = new User("Joao", "23082005");
console.log(user);
