import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
//import { CreateComponent } from './...'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
/*{
	  path: 'create-customer',
	  component: CreateComponent,
  },*/
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
