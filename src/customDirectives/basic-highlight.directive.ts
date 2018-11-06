import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[basicHighlight]"
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit () {
        this.elementRef.nativeElement.style.color = 'red';
        this.elementRef.nativeElement.onmouseover = (evt) => {
            evt.target.style.backgroundColor = 'lightblue';
        }

        this.elementRef.nativeElement.onmouseleave = (evt) => {
            evt.target.style.backgroundColor = 'transparent';
        }
    }
}