import { Component, OnInit } from '@angular/core';
import {Sale} from "../../models/sale.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SaleService} from "../../services/sale/sale.service";

@Component({
  selector: 'app-sale-view',
  templateUrl: './sale-view.component.html',
  styleUrls: ['./sale-view.component.css']
})
export class SaleViewComponent implements OnInit {

  // @ts-ignore
  sale:Sale  ;


  constructor(private route: ActivatedRoute, private saleService: SaleService) {
  }

  /**
   * Lifecycle method
   */
  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.saleService.getSaleById(id)
      .then(
        (sale: Sale) => {
          this.sale = sale;
        }
      );

  }


  formattedPrice(priceNotFormatted: any) {
    return priceNotFormatted.replace('.', ',');

  }

  // @ts-ignore
  getTotalItem(quantity: any, priceNotFormatted: any):string {
    return this.formattedPrice((parseInt(quantity) * parseFloat(priceNotFormatted)).toFixed(2).toString());
  }

  getTotalAmout(sale: Sale){
    let total = 0 ;
    sale.items.forEach((item => {
      total += parseFloat(this.getTotalItem(item.quantity , item.price.$numberDecimal));
    }));
    return this.formattedPrice(total.toFixed(2).toString());
  }
}
