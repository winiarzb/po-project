import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserStateService} from '../../modules/user/services/user-state.service';

@Directive({
  selector: '[bhLinkAccessor]'
})
export class LinkAccessorDirective implements OnInit {

  @Input('bhLinkAccessorOf') roles: string[];

  constructor(
    private _templateRef: TemplateRef<void>,
    private _containerRef: ViewContainerRef,
    private _userService: UserStateService
  ) { }

  ngOnInit(): void {
    if (this._userService.isLogged && this.roles.includes(this._userService.state.userRole)) {
      this._containerRef.createEmbeddedView(this._templateRef);
    }
  }
}
