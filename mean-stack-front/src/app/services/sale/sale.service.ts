import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from '../api/api.service';
import {map} from "rxjs/operators";
import {Sale} from "../../models/sale.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  sales = new BehaviorSubject<Array<Sale>>([]);
  private salesData: Array<Sale> = [];

  constructor(private http: HttpClient) {

  }

  //Methode for get all sales off the db
  getAll(): void {

    this.http
      .get(ApiService.salesUrl())
      .pipe(
        map((res: any) => {
          return res.map((item: any) => Sale.fromJSON(item))
        })
      )
      .subscribe(
        (sales: Array<Sale>) => {
          this.salesData = sales;
          this.sales.next(sales);
          console.log(sales)
        },
        err => {
          console.error(err);
        }
      );
  }

  deleteById(id: string): Promise<any> {
    return new Promise((res, rej) => {
      this.http.delete(ApiService.saleUrl() + id)
        .subscribe(info => {
            for (let i = 0; i < this.salesData.length; i++) {
              if (this.salesData[i].id == id) {
                this.salesData.splice(i, 1);
                break;
              }
            }
            this.sales.next(this.salesData);
            res(info);
          },
          err => {
            console.error(err)
            rej(err);

          })

    })
  }

}
