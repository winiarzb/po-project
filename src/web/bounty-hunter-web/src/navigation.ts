export const NAVIGATION: INavigationLink[] = [
  {
    name: 'Utwórz zlecenie',
    url: 'contract/create'
  },
  {
    name: 'Sprawdź zlecenia',
    url: 'contract/list'
  },
  {
    name: 'Zarządzaj zasobami',
    url: 'resources'
  }
];

export interface INavigationLink {
  name: string;
  url: string;
}
