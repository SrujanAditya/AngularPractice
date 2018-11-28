import { Directive, ElementRef ,OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective implements OnInit {

  constructor(private eleRef:ElementRef) { }

  ngOnInit(){
    this.eleRef.nativeElement.style.backgroundColor = "red";
    this.eleRef.nativeElement.style.color = "white";
  }

  @HostBinding('style.color') color="yellow";

  @HostListener('mouseover') mouseover(eventData:Event){
    this.eleRef.nativeElement.style.backgroundColor="transparent";
    this.color="black";
    // this.eleRef.nativeElement.style.color="black";
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.eleRef.nativeElement.style.backgroundColor="red";
    this.color="white";
    // this.eleRef.nativeElement.style.color="white;"
  }

}

