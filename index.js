import { mensagemCifrada } from "./src/cifra/cifra.js";
import { hashConsole, userAuth, userAuthFake } from "./src/hash/hash.js";
import { user, userCorr } from "./src/hash/hashCrypto.js";
import { cypherMsg } from "./src/symetricScript/symetricScript.js"

console.log("Mensagem cifra");
console.log(mensagemCifrada);
console.log("\n\n");
console.log("Senha hash: ");
console.log(hashConsole);
console.log(userAuth);
console.log("\n\n");
console.log("Fake user: ");
console.log(userAuthFake);
console.log("\n\n");
console.log("Hash crypto: ");
console.log(user);
console.log("Hash crypto auth(): ");
console.log(userCorr)
console.log("\n\n");
console.log(cypherMsg);