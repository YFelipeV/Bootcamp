import { Component } from '@angular/core';
import { usuario } from 'src/app/interface/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.css']
})
export class GestionarUsuariosComponent {
  usuarios:usuario[]=[]

  constructor(private usuarioService:UsuariosService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll():void{
    this.usuarioService.getAll().subscribe(
      (data:usuario[])=>{
        this.usuarios=data;
      })
  }
}
