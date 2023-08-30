import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-accessibility';
  message = "";
  showAlert = false


  ativar(): void {
    this.message = "Alerta de voz";
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
      this.message = "";
    }, 10000);
  }
}
