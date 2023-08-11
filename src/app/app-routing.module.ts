import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';

const routes: Routes = 
[
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
