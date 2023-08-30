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
      // console.log(this.selecao, " SELECAO");
      // this.selecao?.nativeElement.focus()
      // document.getElementById("#selecao")?.focus();


      const input: HTMLInputElement = this.selecao?.nativeElement as HTMLInputElement;
    input.focus();
      // this.showAlert = false;
      // this.message = "";
    }, 5000);
  }

  logDeFoco(): void {
    console.log("FOCO ATIVADO");
    
  }
}
