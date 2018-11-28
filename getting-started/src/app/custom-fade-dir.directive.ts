import { Directive, ElementRef ,OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appCustomFadeDir]'
})
export class CustomFadeDirDirective implements OnInit {

  constructor(private eleRef:ElementRef) { }

  ngOnInit(){
    this.eleRef.nativeElement.style.backgroundColor = "red";
    this.eleRef.nativeElement.style.color = "white";
  }

  @HostBinding('style.color') color="yellow";

  @HostListener('mouseover') mouseover(eventData:Event){
    this.eleRef.nativeElement.style.opacity="0.3";
    this.color="black";
    // this.eleRef.nativeElement.style.color="black";
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.eleRef.nativeElement.style.backgroundColor="red";
    this.color="white";
    // this.eleRef.nativeElement.style.color="white;"
  }

}
