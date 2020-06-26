import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {

    constructor (private elRef: ElementRef, private renderer: Renderer2) {
        console.log(renderer)
        this.renderer.setStyle( this.elRef.nativeElement, 'color', '#00cacd')
    }

    @Input('appStyle') color: string  ;
    @Input() dStyles: {
        border?: string,
        fontWeight?: string,
        borderRadius?: string
    }
    // ↓ прикольный метод
    @HostBinding('style.color') elColor : string = 'orange'

    @HostListener('click', ['$event.target']) onClick(event: Event){
        console.log(event)
    }
    @HostListener('mouseenter') onEnter(){
        this.elColor = 'red'
        // this.renderer.setStyle( this.elRef.nativeElement, 'color', this.color)
        // this.renderer.setStyle( this.elRef.nativeElement, 'border', this.dStyles.border)
        // this.renderer.setStyle( this.elRef.nativeElement, 'fontWeight', this.dStyles.fontWeight)
        // this.renderer.setStyle( this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius)
    }
    @HostListener('mouseleave' ) onLeave(){
        this.elColor = null
        // this.renderer.setStyle( this.elRef.nativeElement, 'color', '#00cacd')
        // this.renderer.setStyle( this.elRef.nativeElement, 'border', null)
        // this.renderer.setStyle( this.elRef.nativeElement, 'fontWeight', null)
        // this.renderer.setStyle( this.elRef.nativeElement, 'borderRadius',  null)
    }

}


