import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  constructor(private _httpclient:HttpClient) { }

  bannerapi():Observable<any>{
  return this._httpclient.get(`${environment.baseurl}/trending/all/week?api_key=${environment.apiKey}`)
  }

  trendingmovies():Observable<any>{
  return this._httpclient.get(`${environment.baseurl}/trending/movie/day?api_key=${environment.apiKey}`)
  }


  getsearchmovie(data:any):Observable<any>{
   return this._httpclient.get(`${environment.baseurl}/search/movie?api_key=${environment.apiKey}&query=${data.movieName}`)
  }
}
