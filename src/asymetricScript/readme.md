# asymetricScript

***Asymetric Script*** é um tipo de script em que é baseado em tipos de chave de encriptação de desencriptação. Na qual temos 2 tipos de chaves:

- ***Chave pública:*** Uma chave que é compartilhada livremente na rede usada para encriptografar a informação. Já que sua função é só essa, não existe muito perigo para compartilhar esta chave nessa rede.

- ***Chave privada:*** A chave privada que faz a função mais perigisa, que usa para desincriptografar a informação principal!

---

## Código: 

```js
import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

export const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

const criptoDates = publicEncrypt(
    publicKey, 
    Buffer.from("Mensagem secreta: ")
)

export const criptoDatesString = criptoDates.toString('hex')

const msgDescrypt = privateDecrypt(
    privateKey, 
    criptoDates
)

export const msgDescryptString = msgDescrypt.toString('utf-8');
```