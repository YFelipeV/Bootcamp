import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent {
  form: FormGroup=new FormGroup({
    nombre: new FormControl(''),
    lema: new FormControl(''),
  });

  constructor(
    public UsuariosService: UsuariosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      lema: ['', Validators.required],
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.UsuariosService.create(this.form.value).subscribe(res => {
      console.log('Person created successfully!');
    });
  }
}
