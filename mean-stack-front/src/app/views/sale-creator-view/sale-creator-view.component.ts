import { Component, OnInit } from '@angular/core';
import {Sale} from "../../models/sale.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SaleService} from "../../services/sale/sale.service";
import {Router} from "@angular/router";
import {Customer} from "../../models/customer.model";

@Component({
  selector: 'app-sale-creator-view',
  templateUrl: './sale-creator-view.component.html',
  styleUrls: ['./sale-creator-view.component.css']
})
export class SaleCreatorViewComponent implements OnInit {


  sale = new Sale(new Date(), [], '', new Customer('', 18, '' , 0), false, '');
  newSaleForm: FormGroup ;

  constructor(private saleService: SaleService ,public formBuilder: FormBuilder,
              private router: Router) {
    this. newSaleForm = this.formBuilder.group({
      saleDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/)]],
      storeLocation: ['', Validators.required],
      customer: this.formBuilder.group({
        gender: ['', Validators.required],
        age: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        satisfaction: ['', Validators.required],
      }),
      couponUsed: [''],
      purchaseMethod: ['', Validators.required],
    });

  }
  ngOnInit(): void {

  }

  onSubmitNewSaleForm(){

    console.log(this.sale.saleDate)
    this.saleService.addSale(this.sale.toJSON())
      .then(() => {
        this.router.navigate(['sales'])
      })


  }

}
