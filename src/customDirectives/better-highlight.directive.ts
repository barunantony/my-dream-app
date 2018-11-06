import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColorRef: string = 'transparent';
  @HostBinding('style.color') colorRef: string; // = 'blue';
  @HostBinding('style.display') displayRef: string = 'block';

  @Input() highlightedColor: string;

  /** commented the Renderer2 and ElementRef as they are no longer required while using HostBinding */
  // constructor(private elRender: Renderer2, private elRef: ElementRef) { }
  constructor() {}

  ngOnInit() {
    // this.elRender.setStyle(this.elRef.nativeElement, 'color', 'blue');
    // this.elRender.setStyle(this.elRef.nativeElement, 'display', 'block');
    this.colorRef = this.highlightedColor;
  }

  @HostListener('mouseover') onMouseoverEvent() {
    // this.elRender.setStyle(this.elRef.nativeElement, 'backgroundColor', 'wheat');
    this.backgroundColorRef = 'wheat';
  }

  @HostListener('mouseleave') onMouseleaveEvent() {
    // this.elRender.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColorRef = 'transparent';
  }

}
