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
  },
  {
    name: 'Rejestracja',
    url: 'sign-up'
  }
];

export interface INavigationLink {
  name: string;
  url: string;
}
