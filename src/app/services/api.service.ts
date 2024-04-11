import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient)//para conectar a apis (bakcend)
  //para que funcione esta injeccion es necesario agregar "provideHttpClient()" en los  "providers" del archivo app.config.ts, ver el archivo...
  private urlBase:string = 'https://api.escuelajs.co/api/v1/products';

  getProducts():Observable<Product[]>{
    //Observable<Product[]> => devuelve un observable array de tipo product
    return this._http.get<Product[]>(this.urlBase);
    //se usa el servicio _http para llamar el metodo get de HttpClient y usarlo para traer la informacion de la variable urlBase
  }

  getProduct(id:number):Observable<Product>{
    return this._http.get<Product>(`${this.urlBase}/${id}`);
  }
}
