import { Component } from '@angular/core';

import {RequerimientoAService} from 'src/app/servicios/req-animal.service'
import {requerimientoa} from 'src/app/interface/req-animal'

@Component({
  selector: 'app-gestionar-r-animal',
  templateUrl: './gestionar-r-animal.component.html',
  styleUrls: ['./gestionar-r-animal.component.css']
})
export class GestionarRAnimalComponent {
  requerimientosa:requerimientoa[]=[]

  constructor(private reqaservice:RequerimientoAService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll():void{
    this.reqaservice.getAll().subscribe(
      (data:requerimientoa[])=>{
          this.requerimientosa=data;
    })
    console.log(this.requerimientosa)
  }
}