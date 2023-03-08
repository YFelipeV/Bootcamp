import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqAnimalPostService } from 'src/app/servicios/req-animal-post.service';

@Component({
  selector: 'app-registrar-r-animal',
  templateUrl: './registrar-r-animal.component.html',
  styleUrls: ['./registrar-r-animal.component.css']
})
export class RegistrarRAnimalComponent {
  form: FormGroup=new FormGroup({
    
    idRequerimiento_animal: new FormControl(''),
    nombre_fase: new FormControl(''),
    m_s: new FormControl(''),
    e_m_ave: new FormControl(''),
    e_d_cerdo :new FormControl(''),
    proteina :new FormControl(''),
    fibra_cruda:new FormControl(''),
    ext_etereo: new FormControl(''),
    calcio: new FormControl(''),
    fosf_disp: new FormControl(''),
    sodio: new FormControl(''),
    arginia: new FormControl(''),
    lisina: new FormControl(''),
    metronina: new FormControl(''),
    met_cis:new FormControl(''),
    treonina: new FormControl(''),
    triptofano: new FormControl(''),
    ceniza: new FormControl(''),
  });

  constructor(
    public ReqAnimalPostService: ReqAnimalPostService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      idRequerimiento_animal: ['', Validators.required], 
      nombre_fase: ['', Validators.required], 
      m_s: ['', Validators.required], 
      e_m_ave: ['', Validators.required], 
      e_d_cerdo: ['', Validators.required], 
      proteina: ['', Validators.required], 
      fibra_cruda: ['', Validators.required], 
      ext_etereo: ['', Validators.required], 
      calcio: ['', Validators.required], 
      fosf_disp: ['', Validators.required], 
      sodio: ['', Validators.required], 
      arginia: ['', Validators.required], 
      lisina: ['', Validators.required], 
      metronina: ['', Validators.required], 
      met_cis: ['', Validators.required], 
      treonina: ['', Validators.required], 
      triptofano: ['', Validators.required], 
      ceniza: ['', Validators.required], 
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.ReqAnimalPostService.create(this.form.value).subscribe(res => {
         console.log('Person created successfully!');
       
    })
  }

}
