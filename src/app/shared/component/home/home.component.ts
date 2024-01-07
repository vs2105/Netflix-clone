import { Component, OnInit } from '@angular/core';
import { MovieapiService } from '../../services/movieapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerApiResult:any=[]
  trendingmovieresult:any=[]


  constructor(private _movieapiService:MovieapiService) { }

  ngOnInit(): void {
    this.bannerData()
    this.trendingmoviedata() 
  }

  bannerData(){
    this._movieapiService.bannerapi()
    .subscribe((res)=>{
      // console.log(res);
      
    this.bannerApiResult = res.results
    console.log(this.bannerApiResult);
    
    })
  }

  trendingmoviedata(){
   this._movieapiService.trendingmovies()
    .subscribe((res) =>{
      this.trendingmovieresult=res.results
      console.log(this.trendingmovieresult);
      
    })
  }

}
