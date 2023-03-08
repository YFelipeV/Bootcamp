import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { alimentos} from 'src/app/interface/alimentos';
import { AlimentosService } from 'src/app/servicios/alimentos.service';

@Component({
  selector: 'app-gestionar-alimento',
  templateUrl: './gestionar-alimento.component.html',
  styleUrls: ['./gestionar-alimento.component.css']
})
export class GestionarAlimentoComponent {
  alimento: alimentos[]=[]
  

  constructor (private animalService: AlimentosService){ }

  ngOnInit(): void {
    this.getAll()
    }
  getAll(): void{
    this.animalService.getAll().subscribe(
      (data: alimentos[])=>{
        this.alimento=data;
      })
      console.log(this.alimento)
  }
}
