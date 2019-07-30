import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  // injecting an instance of a service into a class.
  // This allows the imported instance about from Http to be used
  constructor(private _http: Http) {
  }

  getAlbum(id: number) {
    // This issues an http call, and returns a JSON
    // response. Therefore we need to map it
    //
    return this._http.get(this._albumUrl).map((response) =>
    response.json());
  }
}
