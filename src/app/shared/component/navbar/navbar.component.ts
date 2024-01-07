import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  navbg:any

  @HostListener('document:scroll') scrolltop(){
    console.log(document.body.scrollTop,'hgfgjfdj');
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        this.navbg = {
        'background-color':'#000'
       }
    }else{
      this.navbg ={}
    }
  }

  ngOnInit(): void {
  }

}
