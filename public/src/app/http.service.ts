import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
    getAllProducts(){
      return this._http.get("/products");
    }
    deleteProduct(id:String){
      return this._http.delete("/delete/"+id)
    }
    getOneProduct(id:String){
      return this._http.get("/products/edit/"+id)
    }
    editProduct(id:String, editProduct:object){
      return this._http.put("/products/"+id, editProduct)
    }
    addProduct(newProduct){
      return this._http.post("/products", newProduct)
    }

}
