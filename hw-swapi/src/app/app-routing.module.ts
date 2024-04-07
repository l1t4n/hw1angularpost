import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';

const routes: Routes = [
  {
    path: "people",
    component: PeopleComponent,
  },
  {
    path: "planets",
    component: PlanetsComponent,
  },
  {
    path: "films",
    component: FilmsComponent,
  },
  {
    path: "species",
    component: SpeciesComponent,
  },
  {
    path: "vehicles",
    component: VehiclesComponent,
  },
  {
    path: "starships",
    component: StarshipsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
