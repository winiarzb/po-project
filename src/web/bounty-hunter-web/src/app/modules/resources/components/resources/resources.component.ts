import {Component, OnInit} from '@angular/core';
import {ResourceTab} from './models/resource-tab.model';
import {ResourceNavigationService} from '../../services/resource-navigation.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ResourceListComponentBase} from '../resource-list-component.abstract';
import {IIdentifiable} from '../../../../shared/interfaces/identifiable.interface';
import {isDefined} from '../../../../shared/utils/is-defined';

@Component({
  selector: 'bh-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  public readonly tabs: ReadonlyArray<ResourceTab> = Object.freeze([
    new ResourceTab('Kontrakty', 'contracts'),
    new ResourceTab('Słowniki', 'dictionaries'),
    new ResourceTab('Dystrykty', 'districts'),
    new ResourceTab('Galaktyki', 'galaxies'),
    new ResourceTab('Planety', 'planets'),
    new ResourceTab('Recenzje', 'reviews'),
    new ResourceTab('Użytkownicy', 'users'),
    new ResourceTab('Ofiary', 'victims')
  ]);
  public selectedTab: ResourceTab;

  constructor(
    private readonly _navigator: ResourceNavigationService,
    private readonly _route: ActivatedRoute
  ) { }

  private _activatedList: ResourceListComponentBase<IIdentifiable>;

  ngOnInit() {
    this._setInitialTab();
  }

  public navigateToResource(tab: ResourceTab): void {
    this._navigator.navigate(tab.url);
  }

  public onListActivation(list: ResourceListComponentBase<IIdentifiable>): void {
    this._activatedList = list;
  }

  public isEditActive(): boolean {
    return !(isDefined(this._activatedList) && isDefined(this._activatedList.selectedElement));
  }

  public edit(): void {
    this._navigator.navigate(`../edit/${this.selectedTab.url}/${this._activatedList.selectedElement.id}`);
  }

  public create(): void {
    this._navigator.navigate(`../create/${this.selectedTab.url}`);
  }

  private _setInitialTab(): void {
    if (this._route.firstChild) {
      const url = this._route.firstChild.snapshot.url[0].path;
      this.selectedTab = this.tabs.find(tab => tab.url === url);
    }
  }
}
