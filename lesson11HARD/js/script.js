window.addEventListener('DOMContentLoaded',function(){
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a){
		for (let i = a; i < tabContent.length;i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b){
		if (tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	info.addEventListener('click', function(event){
		let target = event.target;
		if (target.className == 'info-header-tab'){
			for (let i = 0; i < tab.length; i++){
				if (target == tab[i]){
					showTabContent(i);
					break;
				}
			}
		}
	});


	let deadline = '2018-04-12';

	function getTimeRemaining(endtime){
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000)%60),
			minutes = Math.floor( (t/1000/60)%60),
			hours = Math.floor( (t/1000/3600));

		return{
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime){
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock(){
			let t = getTimeRemaining(endtime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
			if (t.total <= 0){
				clearInterval(timeInterval);
			}
		}

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);
	}
	setClock('timer', deadline);

	//

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptions = document.querySelectorAll('.description-btn');

	for (let i = 0; i < descriptions.length; i++){
		descriptions[i].addEventListener('click', function(){
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}

	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function(){
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	//Форма
	let message = new Object();
	message.loading = "Пока идет загрузка...";
	message.success = "Успех!";
	message.failure = "Что-то не так...";

	let form = document.getElementsByClassName('main-form')[0],
		moreForm = document.getElementById('form'),
		input = form.getElementsByTagName('input'),
		moreInput = moreForm.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

//ФУНКЦИЯ СОЗДАНИЯ ГИФКИ
	function image(elem){
		let img = document.createElement('img');
		img.classList.add('loading');
		img.style.backgroundImage = 'img/ajax-loader.gif';
		elem.appendChild(img);
	}

	function loadToForm(form,inputs){
		statusMessage.innerHTML = '';
		form.appendChild(statusMessage);
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');
		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		let formData = new FormData(form);
		request.send(formData);
		request.onreadystatechange = function(){
			if (request.readyState < 4){
				statusMessage.innerHTML = message.loading;
				image(form); // ЕЕ ВЫЗОВ
			} else if (request.readyState === 4){
				if (request.status == 200 && request.status < 300){
					statusMessage.innerHTML = message.success;
				}
				else{
					statusMessage.innerHTML = message.failure;
				}
			}
		};
		for (let i = 0; i < inputs.length; i++){
			inputs[i].value = '';
		}
	}

	moreForm.addEventListener('submit', function(event){
		event.preventDefault();
		loadToForm(moreForm,moreInput);
		/*moreForm.appendChild(statusMessage);
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');
		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		let formData = new FormData(moreForm);
		request.send(formData);
		request.onreadystatechange = function(){
			if (request.readyState < 4){
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4){
				if (request.status == 200 && request.status < 300){
					statusMessage.innerHTML = message.success;
				}
				else{
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i = 0; i < moreInput.length; i++){
			moreInput[i].value = '';
		}*/
	});

	form.addEventListener('submit', function(event){
		event.preventDefault();
		loadToForm(form,input);
		/*form.appendChild(statusMessage);

		//AJAX

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');
		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		let formData = new FormData(form);
		request.send(formData);
		request.onreadystatechange = function(){
			if (request.readyState < 4){
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4){
				if (request.status == 200 && request.status < 300){
					statusMessage.innerHTML = message.success;
				}
				else{
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i = 0; i < input.length; i++){
			input[i].value = '';
		}*/
	});

});