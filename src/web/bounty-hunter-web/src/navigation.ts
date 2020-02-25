export const NAVIGATION: INavigationLink[] = [
  {
    name: 'Moje zlecenia',
    url: 'contract/my',
    roles: ['ADMIN', 'CLIENT', 'HUNTER']
  },
  {
    name: 'Utwórz zlecenie',
    url: 'contract/create',
    roles: ['ADMIN', 'CLIENT']
  },
  {
    name: 'Sprawdź zlecenia',
    url: 'contract/list',
    roles: ['ADMIN', 'CLIENT', 'HUNTER']
  },
  {
    name: 'Zarządzaj zasobami',
    url: 'resources',
    roles: ['ADMIN']
  },
];

export interface INavigationLink {
  name: string;
  url: string;
  roles: string[];
}
