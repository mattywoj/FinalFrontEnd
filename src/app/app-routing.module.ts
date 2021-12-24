import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentNavigatorComponent } from './resident-navigator/resident-navigator.component';
const routes: Routes = [
  {path:'resident', component:ResidentNavigatorComponent}
];
export const routing = RouterModule.forRoot(routes)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
