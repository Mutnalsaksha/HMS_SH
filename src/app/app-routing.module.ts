import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from "./dashboard/dashboard.component";
import { ServiceRequestsListComponent} from "./service-requests-list/service-requests-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent  },
  { path:'dashboard', component:DashboardComponent},
  { path:'service-requests-list',component:ServiceRequestsListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
