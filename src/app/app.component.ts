import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private clientService: ClientesService, private formBuilder: FormBuilder) { }
  dataRes: any;
  currentPage = 1;
  pageSize = 10;
 public data = this.formBuilder.group({
    id: ['', [Validators.required]],
    title: ['', Validators.required],
    body: ['', Validators.required],

  })
  


  ngOnInit(): void {
    this.ObtenerDatos();
  }

  public submit() {
    //console.log(this.data)

  }


  

  public enviarDatos() {

 console.log("dATOS", this.data )
    this.clientService.enviarDatos(this.data.valid).subscribe(
      response => {
        this.ObtenerDatos()
        console.log(response)
      },
      error => console.log("ERROR", error)
    )
  }

  private ObtenerDatos() {
    this.clientService.getDatos(this.currentPage, this.pageSize).subscribe(
      response => this.dataRes = response
    );
  }
  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.ObtenerDatos();
  }

  eliminarRegistro(id: number) {
    this.clientService.EliminarDatos(id).subscribe(
      (response) => {
        this.ObtenerDatos()
        console.log('Registro eliminado con éxito', response);
      },
      (error) => {
        console.error('Error al eliminar el registro', error);
      }
    );
  }


}
