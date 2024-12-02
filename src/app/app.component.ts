import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | string = '';

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }

  restar(): void {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
  }

  limpiar(): void {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = '';
  }
}
