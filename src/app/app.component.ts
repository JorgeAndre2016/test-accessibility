import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("selecao") public selecao: ElementRef | undefined;
  title = 'test-accessibility';
  message = "";
  showAlert = false

  ativar(): void {
    this.message = "Alerta de voz";
    this.showAlert = true;
    
    setTimeout(() => {
      const input: HTMLInputElement = this.selecao?.nativeElement as HTMLInputElement;
      input.focus();
    }, 1000);

    setTimeout(() => {
      this.showAlert = false;
      this.message = "";
    }, 5000);
  }

  logDeFoco(): void {
    console.log("FOCO ATIVADO");
    
  }
}
