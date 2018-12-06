import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

import { Products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:number;
  prodId:number = 1;
  prodName:string = "book";
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params) 
      this.id = params['id'];
    });
    var prod = Products.find((value) => {
      return (value.id == this.id)
    })
    console.log(prod);
    this.prodId = prod.id;
    this.prodName = prod.name;
  }

  backToHome() {
    this.router.navigate([""]);
  }

}
