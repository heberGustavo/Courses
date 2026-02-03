import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
})
export class HighLightDirective {
    
    /* INFO
        @HostBinding -> serve para alterar propriedades que o elemento usa a diretiva
        @HostListener -> escuta os eventos acionados
    */
    
    @HostBinding('style.background-color') bgColor = 'transparent';
    
    @HostListener('mouseenter') onMouseEnter() {
        this.bgColor = 'orange'
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.bgColor = 'transparent'
    }
}