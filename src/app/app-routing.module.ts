import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputOutputComponent } from './input-output/input-output.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';

export const routes: Routes = [
  { path: 'inputoutput', component: InputOutputComponent },
  { path: 'viewchild', component: ViewChildComponent},
  { path: 'contentProjection', component: ContentProjectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
