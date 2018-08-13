import {Directive, ElementRef, Inject, Injectable, Input, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})

@Injectable()
export class AutofocusDirective {


  @Input() isAlways:boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {


  }

  ngOnInit(){
    this.focus()
    if(this.isAlways){
      setInterval(()=>{
        this.focus();
      },300)
    }
  }

  focus(){
    this.elementRef.nativeElement.focus();
  }

}
