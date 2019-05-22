import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any = []
  plength = 0

  constructor(private remoteService: ProductService) { }

  ngOnInit() {
    this.remoteService.getProducts().subscribe((data) => {
      console.log(data),
        this.products = data
        this.plength
    })
  }

  getAllProducts = function () {
    this.remoteService.getProducts().subscribe((data) => {
      console.log(data),
        this.products = data
    },
      (error) => {
        this.message = "Error..." + JSON.stringify(error)
        console.log("Error")
        console.log(error)
      }
    )
  }


}
