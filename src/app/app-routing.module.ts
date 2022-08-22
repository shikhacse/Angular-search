import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { OfficeDetailsComponent } from './office-details/office-details.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {path:'' , component: SearchComponent},
  {path:'result' , component: SearchResultsComponent},
  {path:'detail' , component: SearchDetailsComponent ,
  canActivate : [AuthGuard]
},
  {path:'list-officer' , component: OfficeDetailsComponent},
  {path:'not-found' , component: NotFoundComponent},
  {path:'**' , redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
