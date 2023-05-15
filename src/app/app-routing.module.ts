import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'aadhar', component: AadharComponent},
  { path: 'popup', component: PopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
