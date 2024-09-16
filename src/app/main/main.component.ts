import { Component, inject, OnInit } from '@angular/core';
import { ServiceComponentService } from '../service-component.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  messageComponent? : string;
  greetingMessage?: string;
  questionMessage?: string;
  
  //constructor(private _serviceComponent : ServiceComponentService){}
  private _serviceComponentNew = inject(ServiceComponentService);


  ngOnInit(): void {
    this._serviceComponentNew.setComponetMain('Component Tertiary')
    this.messageComponent = this._serviceComponentNew.getComponetMain()
  }

  greet(){
    this.greetingMessage = this._serviceComponentNew.greet(this._serviceComponentNew.getcomponentTertiary())
    this.questionMessage = undefined
  }

  questionForSecondary(){
    this.questionMessage = this._serviceComponentNew.questionForSecondary();
    console.log(this._serviceComponentNew.questionForSecondary());
    this.greetingMessage = undefined
  }
}
