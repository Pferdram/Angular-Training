import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiglistsearchComponent } from './biglistsearch/biglistsearch.component';

const routes: Routes = [
    { path: 'biglist', component: BiglistsearchComponent },
    { path: '',   redirectTo: '/biglist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
