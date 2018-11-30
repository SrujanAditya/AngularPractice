import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, fallback: any,httpurl:boolean=false): any {
    let img="";
    if(value != "")
      img= value;
    else img= fallback;
    if(httpurl == true){
      img="https"+img;
    }
    return img;
  }

}
