import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]' //attribute selector
})
//add a certain css class when the dropdown is clicked
export class DropdownDirective {
    //bind to the open class
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    // @HostListener('click') click(eventData: Event) {

    //     if ((this.elementRef.nativeElement.className).indexOf('open') > -1) {
    //         this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    //     } else {
    //         this.renderer.addClass(this.elementRef.nativeElement, 'open');
    //     }
    // }
}