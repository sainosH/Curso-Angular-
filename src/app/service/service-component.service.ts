import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponentService {
  
  componentMain?: string;
  componentTertiary?: string;

  //GET Y SET
getComponetMain(): string{
  return this.componentMain || ''
}
setComponetMain(greet: string){
  return this.componentMain = greet;
}

getcomponentTertiary(): string{
  return this.componentTertiary || ''
}
setcomponentTertiary(greet: string){
  return this.componentTertiary = greet;
}

//FUNCTION ``
greet(message: string) {this.getComponetMain
  const menssageComponent = `Hola ${message}`
  console.log(menssageComponent)
  return menssageComponent
}

questionForSecondary(): string{
  return '¿Comó esta el componente secondary?'
}

constructor() { }
}

