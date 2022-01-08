import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Extravagant 40 Red Roses Arrangemen', "This bouquet clipping 10 mixed roses together is a perfect representation of your love and care. Be it Birthday, Anniversaries, Mother's Day or any other occasion, express your bountiful wishes with this scintillating and love-filled bunch.", 599,"https://www.fnp.com/images/pr/x/extravagant-40-red-roses-arrangement_1.jpg"),
    new Product(2, 'Pristine White Roses Bunch', "A whole bouquet of creamy white blooms is perfect for celebrating the purity and innocence. It is this purity that makes it a popular flower for weddings.", 499,"https://www.fnp.com/images/pr/x/v20190122233452/pristine-white-roses-bunch_1.jpg"),
    new Product(3, 'Vibrant Jubilance', "It's time to give your love a magical touch of affection and what could be a better hamper of love than this arrangement of six enticing Purple colored Orchids beautifully wrapped in a paper packing.", 50,"https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/05032019/IMG_4345-600x600.jpg"),
    new Product(4, 'Pink Oriental Lilies ', "Lilies look soft but are actually one of the strongest flowers. They blossom and they spread their beauty all around. Gift someone this Beautiful bunch of 6 Pink Oriental Lilies, wrapped in Cellophane paper. Make someone feel that they are just as beautiful as these flowers.", 200,"https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/Flowers/flowers/IMG_9934-(2)-600x600.jpg"),
    new Product(5, 'Hot Pink Roses, Oriental Pink Lilies', "Pink is a beautiful colour. It makes everything look so romantic. Send this Bouquet of 15 Hot Pink Roses, 8 Oriental Pink Lilies, wrapped in Pink paper packaging to someone special.", 100,"https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/04thJan/oriental-touch-600x600.JPG"),
    new Product(6, 'Pink Roses Pink Rafia ',"We know you these wrapped beauties caught your attention at first site and why not? Look at these beautiful light pink rose wrapped in a jute cloth, oozing love and admiration in every way. Send this beautiful floral arrangement to your special one today and let it speak love on your behalf.", 150,"https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/009/1557125390IMG_8823-600x600.jpg"),
    new Product(7, 'Purple Orchids Arica Palm Leaves',"A queen deserves nothing less than the most beautiful Purple Orchids. To make sure that you get the best for your best, we have put the most fragrant and well-blossomed 6 Purple Orchids in a Glass Vase.", 250,"https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/Flowers/flowers-14-600x600.jpg"),
    new Product(8, 'Yellow Roses', "Express your emotions in the best way with our beautiful floral bouquet of 10 Yellow Roses wrapped in cellophane and be ready to get praises every single time!", 300,"https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/181017/_MG_2869-600x600.jpg"),
  ]

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from an API and return an Observable
    return this.products
  }
}
