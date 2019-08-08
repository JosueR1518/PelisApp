import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  texto:string='';
  movies:any[]=[];
  constructor(private ps:PeliculaService,private activatedRoute:ActivatedRoute) { 

   
    this.activatedRoute.params.subscribe(params=>{

         if(params['term']!==''){
           this.texto=params['term'];
              this.buscarMovies();
         }
    });
  }

  ngOnInit() {
  }


  buscarMovies(){


    if(this.texto===''){
      return;
    }
     this.ps.buscarByTexto(this.texto).subscribe(data=>{

      console.log(data);
      this.movies=data.results;
     })

  }


  
}
