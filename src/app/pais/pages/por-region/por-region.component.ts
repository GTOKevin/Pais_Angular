import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 0.5rem;
    }`
  ]
})
export class PorRegionComponent {

  paises:Country[]=[];

  regiones:string[]=["EU","EFTA","CARICOM","PA","AU","USAN","EEU","AL","ASEAN","CAIS","CEFTA","NAFTA","SAARC"];
  regionActiva:string="";

  constructor(private servicePais:PaisService) { }

  activarRegion(region:string){

    if(region === this.regionActiva){return;}

    this.regionActiva=region;
    this.paises=[];
    this.servicePais.getPaisxRegion(region).subscribe(r=>{   
      this.paises=r;
    })

  }

  getClassRegion(region:string){
    return this.regionActiva===region? "btn-primary":"btn-outline-primary"; 
  }
}
