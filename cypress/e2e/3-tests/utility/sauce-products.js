import data from '../../../fixtures/products.json'

function Product(name, description, price) {
    this.name = name,
    this.description = description, 
    this.price = price
}

export const back_pack = new Product(data[0].name, data[0].description, data[0].price);
export const bike_light = new Product(data[1].name, data[1].description, data[1].price);
export const bolt_shirt = new Product(data[2].name, data[2].description, data[2].price);
export const jacket = new Product(data[3].name, data[3].description, data[3].price);
export const onesie = new Product(data[4].name, data[4].description, data[4].price);
export const red_shirt = new Product(data[5].name, data[5].description, data[5].price);
export const product_count = data.length;