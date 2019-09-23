import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: object;
  editProduct: any;
  error: any;

  constructor(    
    private _httpService: HttpService,    
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.product = {'title': "", 'price': "", 'image': ""};
    this.findProduct();
  }
  findProduct(){
    this._route.params.subscribe((params) => {
      let obs = this._httpService.getOneProduct(params["id"]);
      obs.subscribe((data: any) =>{
        console.log("Got this data from the FINDPRODUCT function in edit ts", data)
        this.product = data.info
      })
    })
  }
  editSubmit(){
    this._route.params.subscribe((params) => {
      let obs = this._httpService.editProduct(params['id'], this.product)
      obs.subscribe((data:any) => {
        console.log("completed edit", data);
          if(data.error){
            console.log("you have errors in edit submit in  edit component ts")
          }
          else{
            console.log("updated a product")
            this._router.navigate(["home/products"])
        }
      })
    })
  }
  deleteProduct(id:String){
    console.log("Got a product to delete!");
    let obs = this._httpService.deleteProduct(id);
    obs.subscribe(data => { 
      console.log("Deleting a product!")
    })
  }
}
