import { Component } from '@angular/core';
import { zona } from 'src/app/interface/zona';
import { ZonasService } from 'src/app/servicios/zonas.service';

@Component({
  selector: 'app-gestionar-zonas',
  templateUrl: './gestionar-zonas.component.html',
  styleUrls: ['./gestionar-zonas.component.css']
})
export class GestionarZonasComponent {

  zonas: zona[] = []

  constructor(private zonaService: ZonasService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(): void {
    this.zonaService.getAll().subscribe(
      (data: zona[]) => {
        this.zonas = data;
      })
  }
}
