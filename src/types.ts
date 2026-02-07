
export enum Category {
  HOME = 'Portada',
  SPORTS = 'En acción',
  PORTRAITS = 'Retratos',
  ALBUMS = 'Álbumes',
  ABOUT = 'Sobre mí',
  CONTACT = 'Contacto',
  EVENTS = 'Eventos'
}

export interface Photo {
  id: string;
  url: string;
  title: string;
  category: Category;
  description?: string;
  width: number;
  height: number;
}

export interface NavItem {
  label: string;
  href: string;
}
