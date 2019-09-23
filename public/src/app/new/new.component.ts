import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newProduct = {'title': "", 'price': "", 'image': ""}
  }
  createSubmit(){
    let obs = this._httpService.addProduct(this.newProduct);
    obs.subscribe((data:any) => {
      console.log("create a new product from new component ts", data)
      this.newProduct = {'title': "", 'price': "", 'image': ""}
      this._router.navigate(["home/products"])
    })
  }
}
