class options{
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv(){
		let nDiv = document.createElement('div');
		nDiv.classList.add('divClass');
		document.body.appendChild(nDiv);
		let classDiv = document.querySelector('.divClass');
		classDiv.innerHTML = prompt('Какой текст ввести в наш елемент?', '');
		classDiv.style.height = this.height;
		classDiv.style.width = this.width;
		classDiv.style.background = this.bg;
		classDiv.style.fontSize = this.fontSize;
		classDiv.style.textAlign = this.textAlign;
	}
}

const elem = new options('200px','200px','yellow','12px','center');

elem.newDiv();