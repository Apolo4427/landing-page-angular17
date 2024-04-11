import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList:Product[]=[];

  private _apiService = inject(ApiService);
  private _route = inject(Router);

  ngOnInit(): void {
      this._apiService.getProducts().subscribe((data:Product[])=>this.productList=data);
      /*subscribe((data:any[])=>this.productList=data) es donde se observa el observable. 
      Cuando el observable emite un nuevo conjunto de datos (en este caso, una matriz de productos), la función de devolución de llamada 
      (data:any[])=>this.productList=data se ejecutará.
      Esta función asigna los datos emitidos a la propiedad productList del componente o clase en la que se encuentra este código */
  }

  onDetail(id:number):void{
    this._route.navigate(['/products',id]);//navegamos a la ruta "['/products',id]" => /products/id
  }

}
