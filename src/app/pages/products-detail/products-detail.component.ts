import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit{

  private _service = inject(ApiService);
  private _route = inject(ActivatedRoute)
  /*
  En Angular, ActivatedRoute es una clase proporcionada por el módulo @angular/router que representa la ruta activada actualmente. 
  Cuando navegas entre diferentes componentes o vistas en una aplicación Angular que utiliza el enrutador,
  ActivatedRoute contiene información sobre la ruta actual y todos los parámetros asociados */

  loading:boolean=true;
  public product?:Product;

  //mediante el onInit seteamos la variable product:
  ngOnInit(): void {
      this._route.params.subscribe(
        params=>{
          this._service.getProduct(params['id']).subscribe((data:Product)=>{
            this.product = data;
            this.loading = false;
          });
        }
      )
  }
}
