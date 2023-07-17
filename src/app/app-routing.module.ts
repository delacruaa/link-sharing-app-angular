import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { PreviewByIdComponent } from './pages/preview-by-id/preview-by-id.component';

const routes: Routes = [
  {path:'', component: MainPageComponent}, 
  {path:'preview', component:PreviewComponent},
  {path:':id', component:PreviewByIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
