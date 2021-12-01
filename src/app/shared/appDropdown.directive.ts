import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostBinding('class.show') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        const dropMenu = this.el.nativeElement.querySelector('.dropdown-menu');
        if(this.isOpen) this.renderer.addClass(dropMenu, 'show');
        else this.renderer.removeClass(dropMenu, 'show');
    }
}