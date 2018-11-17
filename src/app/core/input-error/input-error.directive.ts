import { InputErrorService } from './input-error.service';
import { FormControl } from '@angular/forms';
import {
  Directive, Input, TemplateRef, ViewContainerRef,
  OnChanges, Component, ComponentFactoryResolver, Renderer2
} from '@angular/core';

@Directive({
  selector: '[appInputError]'
})
export class InputErrorDirective implements OnChanges {

  private _control: FormControl;
  @Input() control: FormControl;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private renderer: Renderer2,
    private errorService: InputErrorService
  ) {
  }

  @Input()
  set appInputError(control: FormControl) {
    this._control = control;
  }

  ngOnChanges(): void {
    this.onChangeControl(this._control);
  }

  onChangeControl(control: FormControl) {
    if (control.errors) {
      console.log('errors: ' + JSON.stringify(control.errors));
      this.viewContainer.createEmbeddedView(this.templateRef);
      const cmpFactory = this.cfr.resolveComponentFactory(ErrorMessageComponent);
      const componentRef = this.viewContainer.createComponent(cmpFactory);
      this.templateRef.createEmbeddedView(cmpFactory);
      componentRef.instance.message = this.errorService.getErrorMessage(control);
      this.renderer.addClass(componentRef.location.nativeElement, 'mat-error');
    } else {
      this.viewContainer.clear();
    }
  }

}

@Component({
  template: `
    {{message}}
`})
export class ErrorMessageComponent {

  message: string;

}
