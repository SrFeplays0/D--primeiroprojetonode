import express from 'express';

const host = '0.0.0.0';
const porta = 3000;

const app = express();

function retornaPaginainicial(requisicao, resposta){
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="UTF-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>página inicial</h1>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};
function calcular(requisicao, resposta){

    let numero = requisicao.query.valor;
    if(!numero){
        resposta.write('<!DOCTYPE html>');
        resposta.write('<html>');
        resposta.write('<head>');
        resposta.write('<meta charset="UTF-8">');
        resposta.write('<title>Tabuada</title>');
        resposta.write('</head>');
        resposta.write('<body>');
        resposta.write('<h1>Informe o valor desejado na URL: http://localhost:3000/tabuada?valor=5</h1>');
        resposta.write('</body>');
        resposta.write('</html>');
        resposta.end();
    }
    else{
        resposta.write('<!DOCTYPE html>');
        resposta.write('<html>');
        resposta.write('<head>');
        resposta.write('<meta charset="UTF-8">');
        resposta.write('<title>Tabuada</title>');
        resposta.write('</head>');
        resposta.write('<body>');
        resposta.write('<h1>tabuada do ' + numero +'</h1>');
        resposta.write('<ul>');
        for (let i = 1; i <= 10; i++) {
            resposta.write('<li><strong>' + numero + ' x ' + i + ' = ' + (numero * i) + '</strong></li>');
        }
        resposta.write('</body>');
        resposta.write('</html>');
        resposta.end();
    }
}

app.get("/", retornaPaginainicial);
app.get("/tabuada", calcular);

app.listen(porta, host, () => {
    console.log("Servidor esta executando em http://" + host + ":" + porta) ;
});