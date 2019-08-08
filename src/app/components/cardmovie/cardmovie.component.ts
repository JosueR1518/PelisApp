import { Component, OnInit, Input } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardmovie',
  templateUrl: './cardmovie.component.html',
  styleUrls: ['./cardmovie.component.css']
})
export class CardmovieComponent implements OnInit {

 @Input() movie:any[];
 @Input() isHome:string='';


  constructor(private peliculaService:PeliculaService, private route:Router) { }

  ngOnInit() {
  }


  getUrlImage(){


    return this.peliculaService.pathImages+ this.movie['backdrop_path'];
  }


  verMovie(id:string){


    this.route.navigate(['/pelicula',id,this.isHome]);
  }




}
