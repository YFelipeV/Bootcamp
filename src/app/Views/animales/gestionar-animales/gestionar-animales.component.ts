import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { animal } from 'src/app/interface/animales';
import { AnimalesService } from 'src/app/servicios/animales.service';

@Component({
  selector: 'app-gestionar-animales',
  templateUrl: './gestionar-animales.component.html',
  styleUrls: ['./gestionar-animales.component.css']
})
export class GestionarAnimalesComponent {
  animales: animal[]=[]
  form: FormGroup= new FormGroup({
    name: new FormControl(''),
    
  });

  constructor (private animalService: AnimalesService){ }

  ngOnInit(): void {
    this.getAll()
    }
  getAll(): void{
    this.animalService.getAll().subscribe(
      (data: animal[])=>{
        this.animales=data;
      })
  }
  
}
