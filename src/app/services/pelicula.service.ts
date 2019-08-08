import { Injectable } from '@angular/core';
import { JsonpClientBackend, HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private apiKey:string =  "ad91b8878ef4ed3920f488e94c950e18";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  private endPartUrl = `&api_key=${this.apiKey}&language=es&callback=JSONP_CALBACK`;
  public pathImages = "image.tmdb.org/t/p/w300/";


  constructor(private http:HttpClient) { }




  getPopulares(){
    let url = ` ${this.endPartUrl}`;
  }


  buscarByTexto(texto:string):Observable<any>{


    let url = `${this.urlMoviedb}/search/movie?query=${texto}${this.endPartUrl}`;
    return this.http.jsonp(url,"callback").pipe(map(data=>data));


    

  }


  findCartelera():Observable<any>{

   
    const endDate   = new Date();
    let startDate = new Date();
    endDate.setDate( startDate.getDate() + 7 );
    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${startDate.toJSON().slice(0,10)}&primary_release_date.lte=${endDate.toJSON().slice(0,10)}${this.endPartUrl}`;

    console.log(startDate.toJSON().slice(0,10),endDate.toJSON().slice(0,10))

    return this.http.jsonp(url,"callback").pipe(map(data=>data));


 
  }

  findMostPopular():Observable<any>{


    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc${this.endPartUrl}`;
    return this.http.jsonp(url,"callback").pipe(map(data=>data));
  }


  findKidsPopular():Observable<any>{
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${this.endPartUrl}`;
    
    return this.http.jsonp(url,"callback").pipe(map(data=>data));
  }

  findMovie(id:string){

    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es`;
    
    return this.http.jsonp(url,"callback").pipe(map(data=>data));

  }


  getPathImage(image:string){

    return `https://${this.pathImages}${image}`;
  }



}
