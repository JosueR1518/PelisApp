import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:any[];
  populares:any[];
  kids:any[];
  constructor(private peliculaService:PeliculaService) {

            this.peliculaService.findCartelera().subscribe(data=>{

              this.cartelera = data.results;

              console.log(this.cartelera);

            });

            this.peliculaService.findMostPopular().subscribe(data=>{

              this.populares=data.results;
                
            });


            this.peliculaService.findKidsPopular().subscribe(data=>{

              this.kids=data.results;
                
            });




   }

  ngOnInit() {
  }

}
