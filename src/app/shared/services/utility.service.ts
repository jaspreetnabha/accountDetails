import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  sort(column, Items, order){
    Items.sort(this.compare(column,order)); 
    order = (order==1)?-1:1;
  }
   compare(column,order) {
    return function(a,b){
    let result = 0;
    // let result = (a[column] < b[column]) ? -1 : (a[column] > b[column]) ? 1 : 0;
    if (a[column] < b[column]) {
      result = -1;
    }
    if (a[column] > b[column] )
    {
      result = 1 ;
    }
    return result *  order;
    };
  }

















  
}

