## Teste de lógica

O teste consiste em criar um mecanismo de Vending Machine, onde eu tenho uma quantidade de moedas disponiveis e baseado no valor do troco que necessicito devolver ao consumidor, cabe ao mecanismo selecionar e exibir quais as moedas ele devolve.

### Requisitos
* NodeJS
* NPM / YARN

### Instalação e uso

Para a instalação é necessario clonar o repositorio, e uma vez clonado e dentro do mesmo, rodar o seguinte comando:
```
npm install
``` 
ou
```
yarn install
```

Esse comando serve unica e exclusivamente para instalar o Nodemon e deixar nossa aplicação mais agil.

Após todas as dependencias instaladas está na hora de alterar alguns paremetros no código.

No arquivo *core.js* temos duas variaveis passiveis de alteração:

1. Moedas - um array de objetos, contendo *value* e *qntd*, esse parametros indicam que uma moeda tem um valor (ex. R$ 1.00 real) e também uma quantidade (ex. 10 moedas de R$ 1.00 real). Esses campos podem ser amplamente explorados e configurados ao seu gosto.

2. Troco - uma variavel que vai receber o valor que a aplicação necessita devolver ao usuario, ou seja o troco de sua compra. Recomendo que sempre optem, quando configurarem, por manter o tipo dela como *float*. 

Após essa alterações é necessario, para o funcionamento da aplicação, que se rode o comando:
```
npm start
```
ou
```
yarn start
```

Feito isso como dito anteriormente o Nodemon cuidara de reiniciar a aplicação a cada vez que houver uma alteração, tornando a experiencia mais agradavel.