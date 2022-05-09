/*
1) Crie uma aplicação para efetuar o cálculo do índice de massa corporal. 
Considere os seguintes critérios:

1) Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa. 
2) Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em 
centímetros. 
3) Na sequência a aplicação deve solicitar que seja informado o peso da pessoa. 
4) Após as entradas de dados, atente-se a conversão das informações para dados do tipo 
float. 
5) Converta a altura recebida em centímetros para metros. (basta dividir a altura por 
100). altura / 100
6) Internamente a aplicação deve executar o cálculo do índice de massa corporal através 
da expressão: M = peso (quilos) ÷ altura² 
7) Após identificar o índice de massa corporal o sistema deverá classificar em faixas 
descritivas utilizando os critérios abaixo: 
a) Se M estiver abaixo de 16 : Baixo peso muito grave 
b) Se M estiver entre 16 e 16,99: Baixo peso grave 
c) Se M estiver entre 17 e 18,49: Baixo peso 
d) Se M estiver entre 18,50 e 24,99: Peso normal 
e) Se M estiver entre 25 e 29,99: Sobrepeso 
f) Se M estiver entre 30 e 34,99: Obesidade grau I 
g) Se M estiver entre 35 e 39,99: Obesidade grau II 
h) Se M for maior que 40: Obesidade grau III 
8) Ao término o sistema deve fornecer a seguinte saída para o usuário: 
“<Nome> possui índice de massa corporal igual a <m>, sendo classificado como: 
<classificacao>.” 
*As informações em vermelho são variáveis e devem ser substituídas pelos seus respectivos 
valores calculadas dentro da aplicação.
*/
document.write('<h3>Calculo do índice da massa corporal</h3></br></br>')
var nome = prompt('Digite o seu nome completo: ')
var altura = prompt('Digite sua altura em centímetros, exemplo digite desta forma 180 \n\n Digite a sua altura em cm: ')
var peso = prompt('Digite o seu peso: ')
altura = parseFloat(altura); 
peso = parseFloat(peso); 
altura/=100
document.write('Sua altura é '+ altura + ' 	e seu peso atual é '+peso +' Kg')
document.write('</br></br>')
var imc = Math.round(peso / (altura*altura))
document.write('O valor atual do seu IMC esta em: ' + imc)
document.write('</br></br>')

classificacao = '';

if (imc < 16) {// a) Se M estiver abaixo de 16 : Baixo peso muito grave
	classificacao = ('Baixo peso muito grave')
} else if (imc >= 16 && imc <= 16.99) { // b) Se M estiver entre 16 e 16,99: Baixo peso grave
	classificacao = ('Baixo peso grave')
} else if (imc >= 17 && imc <= 18.49) { // c) Se M estiver entre 17 e 18,49: Baixo peso 
	classificacao = ('Baixo peso')
} else if (imc >= 18.50 && imc <= 24.99) { // d) Se M estiver entre 18,50 e 24,99: Peso normal
	classificacao = ('Peso normal')
} else if (imc >= 25 && imc <= 29.99) { // e) Se M estiver entre 25 e 29,99: Sobrepeso
	classificacao = ('Sobrepeso')
} else if (imc >= 30 && imc <= 34.99) { // f) Se M estiver entre 30 e 34,99: Obesidade grau I
	classificacao = ('Obesidade grau I')
} else if (imc >= 35 && imc <= 39.99) { // g) Se M estiver entre 35 e 39,99: Obesidade grau II
	classificacao = ('Obesidade grau II')
} else {//h) Se M for maior que 40: Obesidade grau III
	classificacao = ('Obesidade grau III')
}

document.write(nome + ' você possui um índice de massa corporal, igual a ' + imc + ' sendo classificado: <strong><h3><br>' + classificacao + '</br></h3></strong>'); 

document.write('</br></br></br></br>')
