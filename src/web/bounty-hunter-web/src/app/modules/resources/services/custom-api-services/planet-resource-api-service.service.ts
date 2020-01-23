import { Injectable } from '@angular/core';
import {ResourcesApiService} from '../../../../shared/services/resources-api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Planet} from '../../../../shared/models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetResourceApiServiceService extends ResourcesApiService {

  constructor(
    httpClient: HttpClient
  ) {
    super(httpClient, 'planet');
  }

  public getByGalaxyId(galaxyId: number): Observable<Planet[]> {
    return this.get<Planet[]>(`galaxy/${galaxyId}`);
  }
}
