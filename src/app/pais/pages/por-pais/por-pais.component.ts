import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li{
    cursor:pointer;
  }`
  ]
})
export class PorPaisComponent  {

  termino:string="";
  hayError:boolean=false;
  paises:Country[]=[];
  paisesSugerido:Country[]=[];
  mostrarSugerencias:boolean=false;
  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.mostrarSugerencias=false;
    this.termino=termino;
    this.paisService.buscarPais(this.termino)
    .subscribe( (resp)=>{
      this.paises=resp;
      },(err)=>{
      this.paises=[];
      this.hayError=true;
    });

  }



  sugerencias(termino:string){
    this.hayError=false;
    this.mostrarSugerencias=true;
    this.termino=termino;
    this.paisService.buscarPais(termino)
    .subscribe(
      pais=>this.paisesSugerido=pais.splice(0,5),
      err=>this.paisesSugerido=[]
    );
  }


  buscarSugerido(termino:string){
    this.buscar(termino);
  }
}
