import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeImage'
})
export class PipeImagePipe implements PipeTransform {



 
  transform(pelicula: any): string {

let  path = 'https://image.tmdb.org/t/p/w500';
    if(pelicula.backdrop_path ){

     // console.log(path+pelicula.backdrop_path);
      return path+pelicula.backdrop_path;

    }else{

      if(pelicula.poster_path){
      //  console.log(path+pelicula.poster_path);
        return path+pelicula.poster_path;

      }
    }


    return 'assets/img/no-image-available.png';
  }

}
