import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', ApiService.token);
    this.http
      .get(ApiService.salesUrl() , {headers})
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
  /**
   * Method for get a  sale by his id on the DB
   * @param id
   */
  getSaleById(id: string): Promise<any> {
    return new Promise(
      (res, rej) => {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', ApiService.token);
        this.http
          .get(ApiService.saleUrl() + id , {headers})
          .subscribe(
            (sale) => {
              console.log(sale);
              res(Sale.fromJSON(sale));
            },
            err => {
              console.error(err);
              rej(err);
            }
          )
      }
    );
  }

  /**
   * Method for add a new sale on the DB
   * @param sale
   */
  addSale(sale: any) {
    return new Promise(
      (res, rej) => {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', ApiService.token);
        headers = headers.append('Content-Type', 'application/json');
        this.http
          .post(ApiService.saleUrl(), sale, {headers})
          .subscribe(
            info => {
              console.info(info);
              res(info);
            },
            err => {
              console.error(err);
              rej(err);
            }
          )

      }
    );
  }

  /**
   * Method for modify a  sale by his id on the DB
   * @param id
   * @param editSale
   */
  editSaleById(id: string , editSale:any): Promise<any> {
    return new Promise(
      (res, rej) => {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', ApiService.token);
        headers.append('Content-Type', 'application/json');
        this.http
          .put(ApiService.saleUrl() + id, editSale,  {headers})
          .subscribe(
            info => {
              console.log(info)
              res(info);
            },
            err => {
              console.error(err);
              rej(err);
            }
          )
      }
    );
  }

  /**
   * Method for delete the selected sale on the DB
   * @param id
   */
  deleteById(id: string): Promise<any> {

    return new Promise(
      (res, rej) => {

        this.http
          .delete(ApiService.saleUrl() + id)
          .subscribe(
            info => {
              for(let i = 0; i < this.salesData.length; i++) {
                if(this.salesData[i].id === id) {
                  this.salesData.splice(i, 1);
                  break;
                }
              }
              this.sales.next(this.salesData);
              res(info);
            },
            err => {
              console.error(err);
              rej(err);
            }
          )

      }
    );

  }

}
