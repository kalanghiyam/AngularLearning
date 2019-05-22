import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products: any = []
  category1: any = []
  category2: any = []
  category3: any = []
  category: any = []
  categories = new Map();
  constructor(private remoteService: ProductService) { }

  ngOnInit() {
    this.remoteService.getProducts().subscribe((data) => {
      console.log(data)
      this.products = data

      this.products.forEach(element => {
        console.log("Array Length: "+this.products.length)
        this.category.push(element.category)
      });
      console.log("Category: "+this.category)

      for (let index = 1; index < this.products.length; index++) {
        const element = this.products[index];
        console.log(element.category)
        if (element.category === "Category 1") {
          this.category1.push(element.id)
          this.category1.push(element.pname)
          this.category1.push(element.desc)
          this.category1.push(element.count)
          this.categories.set(element.category, this.category1)
          console.log("Category 1: " + this.category1)
        }
        if (element.category === "Category 2") {
          this.category2.push(element.id)
          this.category2.push(element.pname)
          this.category2.push(element.desc)
          this.category2.push(element.count)
          this.categories.set(element.category, this.category2)
        }
        if (element.category === "Category 3") {
          this.category3.push(element.id)
          this.category3.push(element.pname)
          this.category3.push(element.desc)
          this.category3.push(element.count)
          this.categories.set(element.category, this.category3)
        }
      }

      console.log("Categories : " + this.categories[0])
    })
  }



}
