import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  movie:any={};
  url:string;
  constructor(private ps:PeliculaService, private activedRoute:ActivatedRoute,private route:Router) { 

         this.activedRoute.params.subscribe(params=>{


            this.url=params['page'];
            console.log(this.url);
            
            this.ps.findMovie(params['id']).subscribe(data=>{



              this.movie= data;
              this.movie['fullPathImage']= this.ps.getPathImage(this.movie.poster_path);
              console.log(this.movie);


            })});

         

  }



  
  ngOnInit() {
  }




  regresar(){

    if(this.url == ''){
      this.route.navigate(['/home']);
    }else{
      this.route.navigate(['/buscar',this.url]);
    }
    
    
  
  }



}
