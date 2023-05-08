# Criptografia e tokens em JS:

A arte de criptografar e codificar faz parte da nossa história e essa prática não ficou de fora nas evoluções tecnológicas; por isso que, quando os computadores foram criados, a programação foi pensada como uma forma que facilitasse a comunicação entre pessoas e máquinas.

Sobre a ***Cifra de César***, que foi o método usado por Júlio César para criptografar as mensagens mandadas por ele, garantindo um maior sigilo e segurança das informações. A cifra de César consiste em: **substituir cada letra da mensagem pela letra que está três posições depois dela na ordem alfabética.**

```
|     VERSÃO ORIGINAL    | A | L | U | R | A |
|:----------------------:|:-:|:-:|:-:|:-:|:-:|
| CIFRA DE CÉSAR ( 3 → ) | D | O | Z | U | D |
```

---

Daí surgiu a necessidade de ***codificar* essa comunicação**. Cada caractere que utilizamos para passar instruções ao computador, sejam letras, números, símbolos, até mesmo espaços e aspas, é interpretado no computador como uma sequência numérica de 0 ou 1, configurando a quantidade de 8 bits, que é a quantidade de memória consumida por cada caractere no computador.

## Em código

### Usando os métodos ***``charCodeAt()``*** e ***``fromCharCode()``***

O ***``charCodeAt()``*** é um método usado para retornar o número que indica o valor Unicode do caractere no índice especificado.

```js
let mensagem = "A";
let codAscii = mensagem.charCodeAt(0);

console.log(codAscii); // 65

let mensagem = "a";

let codAscii = mensagem.charCodeAt(0);

console.log(codAscii); // 97
```

### Exemplo com laço ``for()``

```js
const mensagem = "ALURA";

for (let i = 0; i < mensagem.length; i++) {
 console.log(mensagem.charCodeAt(i));
}

/*
65
76
85
82
65
*/
```

Nesse código, criamos um laço de repetição for e colocamos entre parênteses 3 expressões:

- ***``let i = 0:``*** Criamos uma variável “i’ com valor atribuído 0. Essa variável é criada no início do laço e serve para o controle dos índices da string a cada loop. o valor dela será usado para passar para charCodeAt() o índice correspondente à cada caractere;

- ***``i < mensagem.length:``*** Condição de parada do laço. A cada início de loop o programa verifica se o resultado desta comparação é true ou false e executa o código dentro do loop enquanto retornar true;


- ***``i++ : O operador ++``*** é usado para incrementar o valor de i ao final de cada loop.

---