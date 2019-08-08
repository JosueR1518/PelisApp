import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') movies:any[];
  
  @Input('titulo') titulo:string;


  constructor(private route:Router) { }

  ngOnInit() {
  }


  verMovie(id:string){


    this.route.navigate(['/pelicula',id,'']);
  }

}
