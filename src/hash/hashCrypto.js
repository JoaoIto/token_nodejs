import { scryptSync, randomBytes, timingSafeEqual, createHash } from "crypto";

function hashCreate(pasw) {
  const crypto = randomBytes(16).toString('hex');
  const paswHash = scryptSync(pasw, crypto, 64).toString('hex');
  return `${crypto}: ${paswHash}`;
}

export let hashConsole = hashCreate("stro stro stro");

class User {
  constructor(name, password) {
    this.name = name;
    [this.crypto, this.hash] = hashCreate(password).split(":");
  }

  auth(name, password) {
    const testHash = scryptSync(password, this.crypto, 64);
    const realHash = Buffer.from(this.hash.trim(), "hex");

    console.log("testHash:", testHash);
    console.log("realHash:", realHash);

    const hashIsTrue = timingSafeEqual(testHash, realHash);

    console.log("hashIsTrue:", hashIsTrue);

    if (hashIsTrue) {
      console.log("User auth!");
      return true;
    }

    console.log("User incorrect!");
    return false;
  }
}

export const user = new User("Joao", "23082005");
console.log(user);
export const userCorr = user.auth("Joao", "23082005");
console.log(userCorr);