import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SafePipe } from "../../pipe/safe.pipe";
import { NumberSymbol } from '@angular/common';

@Component({
    selector: 'app-lands',
    standalone: true,
    templateUrl: './lands.component.html',
    styleUrl: './lands.component.css',
    imports: [SafePipe]
})

export class LandsComponent implements OnInit, OnChanges{
  

  desdeTimer: any;


  desde(event: any) {
    clearTimeout(this.desdeTimer);
    if (event !== undefined) {
      const target = event.target as HTMLInputElement;
      const number = parseInt(target.value);
      if (!isNaN(number)) {
        this.desdeTimer = setTimeout(() => {
          this.buscarDesde = number;
          this.createArray(this.buscarDesde);
        }, 2000); // Esperar 2 segundos antes de ejecutar la lógica
      }
    }
  }
  onChange(event: any) {
  const value = parseInt(event.target.value);
  if (!isNaN(value)) {
    this.sizeInit = value;
  }
}

  sumar() {
    this.buscarDesde = this.buscarDesde + this.sizeInit;
  }

  restar() {
    this.buscarDesde = this.buscarDesde - this.sizeInit;
  }

  BASE_URL: String = "https://play.pixels.xyz/pixels/share/";
  LANDS: any = [];
  sizeInit: number = 10;
  numberOfLand: number = 1;
  land: any = {
    url: "",
    id: 0
  }

  buscarDesde: number = 1;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }




  ngOnInit(): void {
    this.createArray(1);
    console.log(this.LANDS);
    
  }

  createArray(numberInit: number){
    console.log("createArray");
    this.LANDS = [];
    for (let i = numberInit; i <numberInit+this.sizeInit; i++) {
      this.land = {
        url: this.BASE_URL + i.toString(),
        id: i
      }
      this.LANDS.push(this.land);  
    }
  }

}
