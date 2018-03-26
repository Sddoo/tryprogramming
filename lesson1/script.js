var mainList = {};

mainList = {
	money: +prompt("Ваш бюджет?", ""),
	name: prompt("Название вашего магазина?", ""),
	shopGoods: [],
	emp: {
		employers: {}
	},
	open: true
};

for (var i = 0; i<3; i++){
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?", "");
}

console.log(typeof(mainList.shopGoods[1]));

alert("Бюджет на один день: " + mainList.money/30);