// chave de encriptação
var chaveCriptografia = [["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"]];

// entrada e saída de texto
var entradaTexto = document.querySelector("#entrada-texto");
var saidaTexto = document.querySelector("#saida-texto");

// botões criptografar, descriptografar e copiar
var botaoCriptografar = document.querySelector("#botao-criptografar");
var botaoDescriptografar = document.querySelector("#botao-descriptografar");
var botaoCopiar = document.querySelector("#botao-copiar");

// função clique do botão criptografar
botaoCriptografar.addEventListener("click", function(){

	document.querySelector(".imagem-saida").style.display = "none";
	document.querySelector("#saida-texto").style.display = "inline";
	var textoCriptografado = encriptar(entradaTexto.value);
	saidaTexto.value = textoCriptografado;

});

// função clique do botão descriptografar
botaoDescriptografar.addEventListener("click", function(){

	document.querySelector(".imagem-saida").style.display = "none";
	document.querySelector("#saida-texto").style.display = "inline";
	var textoDescriptografado = desencriptar(entradaTexto.value);
	saidaTexto.value = textoDescriptografado;

});

// função clique do botão copiar
botaoCopiar.addEventListener("click", function(){
 
	var textoCopiado = saidaTexto.value;
	navigator.clipboard.writeText(textoCopiado);

});

// função de encriptação
function encriptar(stringCriptografada){

	stringCriptografada = stringCriptografada.toLowerCase();

	for(var i = 0; i < chaveCriptografia.length; i++){

		if(stringCriptografada.includes(chaveCriptografia[i][0])){

			stringCriptografada = stringCriptografada.replaceAll(chaveCriptografia[i][0], chaveCriptografia[i][1]);
		}

	}

	return stringCriptografada;
}

// função de descriptação
function desencriptar(stringDescriptografada){

	stringDescriptografada = stringDescriptografada.toLowerCase();

	for(var i = 0; i < chaveCriptografia.length; i++){

		if(stringDescriptografada.includes(chaveCriptografia[i][1])){

			stringDescriptografada = stringDescriptografada.replaceAll(chaveCriptografia[i][1], chaveCriptografia[i][0]);
		}

	}

	return stringDescriptografada;
}