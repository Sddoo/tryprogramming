let m = prompt("Введите количество массивов");
let n = prompt("Введите количество массивов");
let Arr = [];
let sum = 0;
for (let i = 0; i < m; i++){
	Arr[i] = [];
	for (let j = 0; j < n; j++){
		Arr[i][j] = Math.floor(Math.random() * (6));
		sum += Arr[i][j];
	}
}
alert(sum);
console.log(Arr);