
var num1 = prompt('Digite um número')
var num2 = prompt('Digite outro número')

num1 = parseInt(num1) 
num2 = parseInt(num2)

document.write('<strong><h3>Operadores Aritiméticos</h3></br></br><hr></br></strong>')
document.write('A soma de ' + num1 +' + '+ num2 +' é :</br></br><strong>' + (num1 + num2)+'</strong></br></br><hr></br>')

document.write('A subtração de '+ num1 +' - '+ num2 +' é :</br></br><strong>' + (num1 - num2)+'</strong></br></br><hr></br>')

document.write('A multiplicação de '+ num1 +' x '+ num2 +' é :</br></br><strong>' + (num1 * num2)+'</strong></br></br><hr></br>')

document.write('A divisão de '+ num1 +' ÷ '+ num2 +' é :</br></br><strong>' + (num1 / num2)+'</strong></br></br><hr></br>')

document.write('A módulo ou sobra da divisão entre '+ num1 +' % '+ num2 +' é :</br></br><strong>' + (num1 % num2)+'</strong></br></br><hr></br>')

document.write('O Pré Incremento ++ a esquerda soma 1 unidade ao valor da variável no momento que entra comando '+ num1 +' é :</br></br><strong>' + (++num1) +'</strong></br></br><hr></br>')

document.write('O Pré Incremento ++ a esquerda soma 1 unidade ao valor da variável no momento que entra comando '+ num2 +' é :</br></br><strong>' + (++num2) +'</strong></br></br><hr></br>')

document.write('O Pré Decremento -- a esquerda diminiu 1 unidade do valor da variável no momento que entra comando '+ num1 +' é :</br></br><strong>' + (--num1) +'</strong></br></br><hr></br>')

document.write('O Pré Decremento -- a esquerda diminiu 1 unidade do valor da variável no momento que entra comando '+ num2 +' é :</br></br><strong>' + (--num2) +'</strong></br></br><hr></br>')


document.write('O Pós Incremento ++ a direita só soma 1 unidade ao valor da variável, após passar pelo comando '+ num1 +' mantendo o valor :</br></br><strong>' + (num1++) +'</strong></br></br>')
document.write('Pós Incremento ++ a direita somou + 1 resultando em <strong>' + num1 +'</strong>')
document.write('</br></br><hr></br>')

document.write('O Pós Incremento ++ a direita só soma 1 unidade ao valor da variável após passar pelo comando '+ num2 +' mantendo o valor:</br></br><strong>' + (num2++) +'</strong></br></br></br>')
document.write('Pós Incremento ++ a direita somou + 1 resultando em <strong>' + num2 +'</strong>')
document.write('</br></br><hr></br>')

document.write('O Pós Decremento -- a direita diminiu 1 unidade do valor da variável após passar pelo comando '+ num1 +' mantendo o valor :</br></br><strong>' + (num1--) +'</strong></br></br></br>')
document.write('Pós Decremento -- a direita diminui - 1 resultando em <strong>' + num1 +'</strong>')
document.write('</br></br><hr></br>')

document.write('O Pós Decremento -- a direita diminiu 1 unidade do valor da variável após passar pelo comando '+ num2 +' mantendo o valor :</br></br><strong>' + (num2--) +'</strong></br></br></br>')
document.write('Pós Decremento -- a direita diminui - 1 resultando em <strong>' + num2 +'</strong>')
document.write('</br></br><hr></br>')
