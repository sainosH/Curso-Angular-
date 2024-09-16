import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  countValue: number = 0;
  
  plus() { this.countValue++ }
  less() { this.countValue-- }

  message: string = '';

  receptMessage($event: string) {
    this.message = $event;
  }

}
