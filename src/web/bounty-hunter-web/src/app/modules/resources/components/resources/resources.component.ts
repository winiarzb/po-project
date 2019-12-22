import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResourceTab} from './models/resource-tab.model';
import {ResourceNavigationService} from '../../services/resource-navigation.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bh-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit, OnDestroy {

  public readonly tabs: ReadonlyArray<ResourceTab> = Object.freeze([
    new ResourceTab('Kontrakty', 'contracts'),
    new ResourceTab('Słowniki', 'dictionaries'),
    new ResourceTab('Dystrykty', 'districts'),
    new ResourceTab('Galaktyki', 'galaxies'),
    new ResourceTab('Planety', 'planets'),
    new ResourceTab('Recenzje', 'reviews'),
    new ResourceTab('Ofiary', 'victims')
  ]);
  public selectedTab: ResourceTab;

  private readonly subscriptions: Subscription = new Subscription();

  constructor(
    private readonly _navigator: ResourceNavigationService,
    private readonly _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._setInitialSelectedTab();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public navigateToResource(tab: ResourceTab): void {
    this._navigator.navigate(tab.url);
  }

  private _setInitialSelectedTab(): void {
    const subscription = this._route.url.subscribe((url) => {
      if (url[0]) {
        this.selectedTab = this.tabs.find(tab => tab.url === url[0].path);
      }
    });
    this.subscriptions.add(subscription);
  }
}
