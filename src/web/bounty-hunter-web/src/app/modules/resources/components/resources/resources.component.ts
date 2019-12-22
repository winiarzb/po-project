import {Component, OnInit} from '@angular/core';
import {ResourceTab} from './models/resource-tab.model';
import {ResourceNavigationService} from '../../services/resource-navigation.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

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

  ngOnInit() {
    this._setInitialTab();
  }

  public navigateToResource(tab: ResourceTab): void {
    this._navigator.navigate(tab.url);
  }

  private _setInitialTab(): void {
    if (this._route.firstChild) {
      const url = this._route.firstChild.snapshot.url[0].path;
      this.selectedTab = this.tabs.find(tab => tab.url === url);
    }
  }
}
