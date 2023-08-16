import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { HomeComponent } from './home/home.component';
import { RigisterComponent } from './Account/register/rigister.component';

const routes: Routes = 
[
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RigisterComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
