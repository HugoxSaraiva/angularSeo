import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
    { path: '', redirectTo: '/firstComponent', pathMatch: 'full' },
    { path: 'firstComponent', component: FirstComponent },
    { path: 'secondComponent', component: SecondComponent },
], {
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
