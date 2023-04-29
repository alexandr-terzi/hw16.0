let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

let Kitchen = {
    category: 'Kitchen'
}
let Devices = {
    category: 'Devices'
}
let Cosmetics = {
    category: 'Cosmetics'
}

// class Categories {
//     constructor(categoryName) {
//         this.categoryName = categoryName;
//     }

//     getName() {
//         return this.categoryName;
//     }
// }

// let kitchen = new Categories('Kitchen');
// let devices = new Categories('Devices');
// let cosmetics = new Categories('Cosmetics');



let modProducts = [];

let getProto = (arr, proto) => {
    modProducts = arr
    .map(products => {
        let newProducts = Object.create(proto);
        for (let key in products) {
            newProducts[key] = products[key];
        }
        return newProducts;
    })
    return modProducts;
}

// let allCategories = [];
// allCategories.push(Kitchen, Devices, Cosmetics);

// let categoryName = [];

// for (let key in allCategories) {
//     for (let i = 0; i < allCategories.length; i++) {
//         categoryName.push(allCategories[key].category)
//     }
// }

// console.log(categoryName)

arr = [
    getProto(kitchenProducts, Kitchen),
    getProto(devicesProducts, Devices),
    getProto(cosmeticsProducts, Cosmetics),
]

let renderAll = [];

arr.forEach(element => {
    element.map(obj => {
        renderAll.push(`<div class="category__box">
        <div class="category__img">
        <img src="img/${obj.type}.svg" alt="">
        </div>
        <div class="category__title">
        <p class="title__name">Name:
        <span> ${obj.type}</span>
        </p>
        <p class="title__price">Price: 
        <span> $${Array.isArray(obj.price) ===true ? String(obj.price[0]) + - + String(obj.price[1]) :obj.price}</span>
        </p>
        </div>
        </div>`)
    })
    document.write(`<div class="category">
    <p></p>
    ${renderAll.join(``)}</div>`);
    renderAll.splice(0);
});
