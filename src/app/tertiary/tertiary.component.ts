import { Component, inject, OnInit } from '@angular/core';
import { ServiceComponentService } from '../service/service-component.service';

@Component({
  selector: 'app-tertiary',
  templateUrl: './tertiary.component.html',
  styleUrls: ['./tertiary.component.css']
})
export class TertiaryComponent implements OnInit {
  messageComponent? : string;  
  greetingMessage?: string;
  questionMessage?: string;

  //constructor(private _serviceComponent : ServiceComponentService){}
  private _serviceComponentNew = inject(ServiceComponentService);
  
  ngOnInit(): void {
    this._serviceComponentNew.setcomponentTertiary('Component Main')
    this.messageComponent = this._serviceComponentNew.getcomponentTertiary()
  }

  greet(){
    this.greetingMessage = this._serviceComponentNew.greet(this._serviceComponentNew.getComponetMain())
    this.questionMessage = undefined
  }

  questionForSecondary(){
    this.questionMessage = this._serviceComponentNew.questionForSecondary();
    console.log(this._serviceComponentNew.questionForSecondary());
    this.greetingMessage = undefined
  }

}




