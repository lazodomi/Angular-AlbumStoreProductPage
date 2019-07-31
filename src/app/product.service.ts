import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  // injecting an instance of a service into a class.
  // This allows the imported instance about from Http to be used
  constructor(private _http: Http) {}

  getAlbum(ID: number) {
    // This returns a Http request response.
    // and then maps it to JSON
    return this._http.get(this._albumUrl).map((response) =>
    response.json());

    // this._http.get(this._albumUrl): issues an HTTP call

  }
}
