import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale.model';
import {SaleService} from "../../services/sale/sale.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sales-view',
  templateUrl: './sales-view.component.html',
  styleUrls: ['./sales-view.component.css']
})
export class SalesViewComponent implements OnInit, OnDestroy {

  sales: Array<Sale> | undefined;
  subs: Array<Subscription> = [] ;


  constructor(private salesService: SaleService, ) {
    this.subs = [];
  }

  ngOnInit(): void {
    this.initSub();
    this.salesService.getAll();
  }

  private initSub(): void {
    const saleSub = this.salesService.sales.subscribe(
      (sales: Array<Sale>) => this.sales = sales);
    this.subs.push(saleSub);

  }
  //supprime la vente selectionné
  onclickDelete(id:string): void {
    this.salesService.deleteById(id)
      .then(res => {
        console.info('Success delete');
      })
      .catch( err => {
        console.error('Error deleting')
      })

  }
  ngOnDestroy(): void {
  this.subs.forEach(sub => sub.unsubscribe());
  }

}
