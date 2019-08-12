import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';
declare var jQuery:any;
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
  setTimeout(() => {
    this.addAnimationBorder();
  },1000);
  }


  verMovie(id:string){


    this.route.navigate(['/pelicula',id,'']);
  }


  addAnimationBorder(){
    jQuery('.border-shadow').each(function() {
      jQuery(this).on('mouseenter', function() {
          jQuery(this).addClass('sobresalir');
        
        
      }).on('mouseleave', function() {
         jQuery(this).removeClass('sobresalir');
      });
    });
  }

}
