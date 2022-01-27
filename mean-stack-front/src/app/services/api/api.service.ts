import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static rootUrl = 'http://localhost:8081';

  constructor() {
  }
  // Return all sales
  static salesUrl():string {
    return `${ApiService.rootUrl}/sales`
  }

  //Return one sale
  static saleUrl():string {
    return `${ApiService.rootUrl}/sale/`
  }


}
