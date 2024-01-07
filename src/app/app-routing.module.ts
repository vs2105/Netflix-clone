import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { SearchComponent } from './shared/component/search/search.component';
import { MoviedetailsComponent } from './shared/component/moviedetails/moviedetails.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MoviedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
