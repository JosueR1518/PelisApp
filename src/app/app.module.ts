import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { CardmovieComponent } from './components/cardmovie/cardmovie.component';
import { MovieComponent } from './pages/movie/movie.component';
import { APP_ROUTING } from './components/app.routes';
import { PeliculaService } from './services/pelicula.service';
import { FormsModule } from '@angular/forms';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PipeImagePipe } from './pipes/pipe-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent,
    CardmovieComponent,
    MovieComponent,
    GaleriaComponent,
    PipeImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
