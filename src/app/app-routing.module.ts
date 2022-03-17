import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {CreateReservationComponent} from "./parking-reservation/create-reservation.component";
import {EditReservationComponent} from "./edit-reservation/edit-reservation.component";
import {CheckAvailiabilityComponent} from "./check-availiability/check-availiability.component";


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'edit', component: EditReservationComponent},
  {path: 'look', component: CheckAvailiabilityComponent},
  {path: 'park', component: CreateReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
