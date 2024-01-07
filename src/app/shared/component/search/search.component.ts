import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieapiService } from '../../services/movieapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

 searchform!:FormGroup

 searchresult:any

  constructor(private _movieapiService:MovieapiService) { }

  ngOnInit(): void {


   this.searchform=new FormGroup({
    'movieName':new FormControl(null)
   })

  }

  onformSubmit(){
   console.log( this.searchform.value);
     this._movieapiService.getsearchmovie(this.searchform.value)
     .subscribe((res)=>{
      console.log(res,'resultsearch');
       this.searchresult=res.results
     })
     this.searchform.reset()

  }



}
