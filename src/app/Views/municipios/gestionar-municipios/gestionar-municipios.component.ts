import { Component } from '@angular/core';
import { municipio } from 'src/app/interface/municipios';
import { MunicipiosService } from 'src/app/servicios/municipios.service';

@Component({
  selector: 'app-gestionar-municipios',
  templateUrl: './gestionar-municipios.component.html',
  styleUrls: ['./gestionar-municipios.component.css']
})
export class GestionarMunicipiosComponent{
  // municipios:municipio[]=[]

  // constructor(private municipioService:MunicipiosService) { }

  // ngOnInit(): void {
  //   this.getAll()
  // }

  // getAll():void{
  //   this.municipioService.getAll().subscribe(
  //     (data:municipio[])=>{
  //         this.municipios=data;
  //   })
  // }
}
