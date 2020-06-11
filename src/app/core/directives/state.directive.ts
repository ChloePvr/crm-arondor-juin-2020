import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges{
  @Input() appState: string;
  @HostBinding('class') classPropertyTd: string;
  constructor() { }

   ngOnChanges() {
    this.classPropertyTd = this.formatClass(this.appState);
   }

   public formatClass(state: string): string {
     return `state-${state.replace(/ /g,'').toLowerCase()}`;
   }

}
