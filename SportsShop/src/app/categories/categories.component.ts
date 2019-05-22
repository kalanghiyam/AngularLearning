import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products: any = []
  constructor(private remoteService:ProductService) { }

  ngOnInit() {
    this.remoteService.getProducts().subscribe((data)=>{
      console.log(data)
      this.products = data
    })
  }

  

}
