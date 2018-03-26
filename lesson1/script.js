var mainList = {};

mainList = {
	money: +prompt("Ваш бюджет?", ""),
	name: prompt("Название вашего магазина?", ""),
	shopGoods: [],
	employers: {},
	open: true
};

for (var i = 0; i<3; i++){
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?", "");
}

alert("Бюджет на один день: " + mainList.money/30);