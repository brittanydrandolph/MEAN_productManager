import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllProducts();

  }
  getAllProducts(){
    let obs = this._httpService.getAllProducts();
    obs.subscribe(data => {
      console.log("Loading all products!", data)
      this.products = data["info"]
    })
  }
  deleteProduct(id:String){
    console.log("Got a product to delete!");
    let obs = this._httpService.deleteProduct(id);
    obs.subscribe(data => { 
      console.log("Deleting a product!")
      this.getAllProducts();
    })
  }

}
