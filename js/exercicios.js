
var idade = prompt('Digite a sua idade: ')

if (idade >= 0 && idade < 15) {
	document.write('Você é Criança pois tem ' + idade +' anos de idade');
} 

if(idade >= 15 && idade < 30 ) {
	document.write('Você é Jovem pois tem ' + idade +' anos de idade');
}

if(idade>= 30 && idade < 60 ) {
	document.write('Você é Adulto pois tem ' + idade +' anos de idade');
} 

if(idade >= 60) {
	document.write('Você é Idoso pois tem ' + idade +' anos de idade');
} 
