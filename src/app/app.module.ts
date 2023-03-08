import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetalleAlimentoComponent } from './Views/alimentos/detalle-alimento/detalle-alimento.component';
import { GestionarAlimentoComponent } from './Views/alimentos/gestionar-alimento/gestionar-alimento.component';
import { RegistrarAlimentoComponent } from './Views/alimentos/registrar-alimento/registrar-alimento.component';
import { GestionarAnimalesComponent } from './Views/animales/gestionar-animales/gestionar-animales.component';
import { GestionarLoginComponent } from './Views/login/gestionar-login/gestionar-login.component';
import { RegistrarLoginComponent } from './Views/login/registrar-login/registrar-login.component';
import { RegistrarMunicipiosComponent } from './Views/municipios/registrar-municipios/registrar-municipios.component';
import { GestionarMunicipiosComponent } from './Views/municipios/gestionar-municipios/gestionar-municipios.component';
import { GestionarUsuariosComponent } from './Views/usuarios/gestionar-usuarios/gestionar-usuarios.component';
import { RegistrarUsuariosComponent } from './Views/usuarios/registrar-usuarios/registrar-usuarios.component';
import { DetallesUsuariosComponent } from './Views/usuarios/detalles-usuarios/detalles-usuarios.component';
import { ActualizarUsuariosComponent } from './Views/usuarios/actualizar-usuarios/actualizar-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroZonasComponent } from './Views/zonas/registro-zonas/registro-zonas.component';
import { GestionarZonasComponent } from './Views/zonas/gestionar-zonas/gestionar-zonas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './Views/side-bar/side-bar.component';
import { TablaGComponent } from './Views/tabla-g/tabla-g.component';
import { RouterModule, Routes } from '@angular/router';
import { GestionarRAnimalComponent } from './Views/requerimiento-animal/gestionar-r-animal/gestionar-r-animal.component';
import { DetallesRAnimalComponent } from './Views/requerimiento-animal/detalles-r-animal/detalles-r-animal.component';
import { RegistrarRAnimalComponent } from './Views/requerimiento-animal/registrar-r-animal/registrar-r-animal.component';
import { TabRegistroComponent } from './Views/tab-registro/tab-registro.component';



const appRoutes:Routes = [

  {path:'', component:GestionarLoginComponent},
  {path:'alimentos', component:GestionarAlimentoComponent},
  {path:'alimentos/detalle', component:DetalleAlimentoComponent},
  {path:'alimentos/actualizar', component:DetalleAlimentoComponent},
  {path:'alimentos/registrar', component:DetalleAlimentoComponent},

  {path:'animales', component:GestionarAnimalesComponent},

  // {path:'login ', component:GestionarLoginComponent},


  {path:'login/registrar', component:RegistrarLoginComponent},


  {path:'municipios', component:GestionarMunicipiosComponent},
  {path:'municipios/registrar', component:RegistrarMunicipiosComponent},




  {path:'alimentos', component:GestionarAlimentoComponent},
  {path:'alimentos/detalle', component:DetalleAlimentoComponent},
  {path:'alimentos/actualizar', component:DetalleAlimentoComponent},
  {path:'alimentos/registrar', component:DetalleAlimentoComponent},



  {path:'animal', component:GestionarRAnimalComponent},
  {path:'animal/detalle', component:DetallesRAnimalComponent},
  {path:'animal/actualizar', component:DetallesRAnimalComponent},
  {path:'animal/registrar', component:RegistrarRAnimalComponent},



  {path:'alimentos', component:GestionarAlimentoComponent},
  {path:'alimentos/detalle', component:DetalleAlimentoComponent},
  {path:'alimentos/actualizar', component:DetalleAlimentoComponent},
  {path:'alimentos/registrar', component:DetalleAlimentoComponent},



  {path:'usuarios', component:GestionarUsuariosComponent},
  {path:'usuarios/detalle', component:DetallesUsuariosComponent},
  {path:'usuarios/actualizar', component:DetallesUsuariosComponent},
  {path:'usuarios/registrar', component:RegistrarUsuariosComponent},




  {path:'zonas', component:GestionarZonasComponent},
  {path:'zonas/registro', component:RegistroZonasComponent},





];

@NgModule({
  declarations: [
    AppComponent,
    DetalleAlimentoComponent,
    GestionarAlimentoComponent,
    RegistrarAlimentoComponent,
    GestionarAnimalesComponent,
    GestionarLoginComponent,
    RegistrarLoginComponent,
    RegistrarMunicipiosComponent,
    GestionarMunicipiosComponent,
    GestionarUsuariosComponent,
    RegistrarUsuariosComponent,
    DetallesUsuariosComponent,
    ActualizarUsuariosComponent,
    RegistroZonasComponent,
    GestionarZonasComponent,
    TabRegistroComponent,
    GestionarRAnimalComponent,
    RegistrarRAnimalComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
