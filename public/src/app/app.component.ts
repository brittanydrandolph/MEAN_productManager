import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Manager';


constructor(private _httpService: HttpService,
  private _router: Router,
  private _route: ActivatedRoute,
  ) {}
  ngOnInit(){
    this._router.navigate(["/home"])
  }
}
