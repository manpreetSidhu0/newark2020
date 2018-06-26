import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Data {
items:any;

  constructor(public http: Http) {
    this.items=[
      {title:'Java'},
      {title:'Android'},
      {title:'Ionic'},
      {title:'Dotnet'}

    ]
  }
  filterItems(searchTerm){
 
    return this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    }); 
  }

}
