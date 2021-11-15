let altura = 0
let largura = 0
let vidas = 1
let tempo = 15

let criaMoscaTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal') {
	//1500
	criaMoscaTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMoscaTempo = 1000
} else if (nivel === 'chucknorris') {
	//750
	criaMoscaTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo

	}
	
},1000)

function posicaoRandomica(){

	//remover a mosca anterior (caso exista)
	if(document.getElementById('mosca1')){
		document.getElementById('mosca1').remove()

		//console.log('o elemento afetado foi: v' + vidas)

		if(vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
			vidas++
		}
	}
	let posicaoX = Math.floor(Math.random() * largura) - 90
	let posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//criar o elemento html
let mosca1 = document.createElement('img')
mosca1.src = 'img/mosca.png'
mosca1.className = tamanhoAleatorio() + " " + ladoAleatorio()
mosca1.style.left = posicaoX + 'px'
mosca1.style.top = posicaoY + 'px'
mosca1.style.position = 'absolute'
mosca1.id = "mosca1"
mosca1.onclick = function() {
	this.remove()
	//o this faz referencia ao elemento html que executa a função
}

document.body.appendChild(mosca1)

}

function tamanhoAleatorio() {
	let classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosca1'
		case 1:
			return 'mosca2'
		case 2:
			return 'mosca3'
	}

}

function ladoAleatorio() {
	let classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}
