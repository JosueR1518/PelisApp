import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {


  term:string='';
  constructor(private route:Router) { }

  ngOnInit() {
  }


  buscar(){

    this.route.navigate(['/buscar',this.term]);
  }

}
