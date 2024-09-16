import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent {

 /*Enviar Recibir y enviar mensajes */
  @Input() sendMessageSecondary: string = '';
  @Output() messageWhereSecondary = new EventEmitter<string>();
  @Output() plusWhereSecondary = new EventEmitter<void>();
  @Output() lessWhereSecondary = new EventEmitter<void>();

  plus(){this.plusWhereSecondary.emit()}
  less(){this.lessWhereSecondary.emit()}

  messageSecondary: string= '';
  sendMessage(){this.messageWhereSecondary.emit(this.sendMessageSecondary)

  }
}