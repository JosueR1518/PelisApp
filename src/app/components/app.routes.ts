import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { BuscadorComponent } from '../pages/buscador/buscador.component';
import { MovieComponent } from '../pages/movie/movie.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar/:term', component: BuscadorComponent },
  { path: 'pelicula/:id/:page', component: MovieComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
