
import { Category, Photo } from './types';

export const PHOTOS: Photo[] = [
  // --- SPORTS (En acción) ---
  { id: 's1', url: 'https://static.wixstatic.com/media/c85f44_1d751449fa5e474e979072983a3f3e05~mv2.jpg', title: 'Intensidad en el Ring', category: Category.SPORTS, width: 800, height: 800 },
  { id: 's2', url: 'https://static.wixstatic.com/media/c85f44_e847702a35b041b298266fc75d9cde12~mv2.jpg', title: 'Velocidad Vertical', category: Category.SPORTS, width: 1200, height: 800 },
  { id: 's3', url: 'https://static.wixstatic.com/media/c85f44_dc2b96bb7d31418cab883a34595c9e9c~mv2.jpg', title: 'Retrato de Acción', category: Category.SPORTS, width: 800, height: 1200 },
  { id: 's4', url: 'https://static.wixstatic.com/media/c85f44_6b1d2dc3183e47e6b9060a6b531b86e2~mv2.jpg', title: 'Liga Wolf', category: Category.SPORTS, width: 1200, height: 800 },
  { id: 's5', url: 'https://static.wixstatic.com/media/c85f44_a9efd6384482462695da274ea30e3250~mv2.jpg', title: 'Fuerza Extrema', category: Category.SPORTS, width: 800, height: 1000 },
  { id: 's6', url: 'https://static.wixstatic.com/media/c85f44_f584c396e37b4cb487cbc0e1e16fc2cc~mv2.jpg', title: 'Enfoque Crítico', category: Category.SPORTS, width: 800, height: 800 },
  
  // --- PORTRAITS (Retratos extraídos del HTML proporcionado) ---
  { id: 'p1', url: 'https://static.wixstatic.com/media/c85f44_8c5a825539c64d1c95ec2fb744fe6d24~mv2.jpg', title: 'Perfil Editorial', category: Category.PORTRAITS, width: 1409, height: 2088 },
  { id: 'p2', url: 'https://static.wixstatic.com/media/c85f44_67f68eeddbc342d3947641b21a15ab17~mv2.jpg', title: 'Javiera Gómez', category: Category.PORTRAITS, width: 1405, height: 2088 },
  { id: 'p3', url: 'https://static.wixstatic.com/media/c85f44_98adf119327e43219c453ba8c823f707~mv2.jpg', title: 'Esencia Capturada', category: Category.PORTRAITS, width: 2088, height: 1670 },
  { id: 'p4', url: 'https://static.wixstatic.com/media/c85f44_4ea16d2817c24b93b5584941f5e6ceaf~mv2.jpg', title: 'Mirada Atenta', category: Category.PORTRAITS, width: 1405, height: 2088 },
  { id: 'p5', url: 'https://static.wixstatic.com/media/c85f44_9ce9807e01324915aec72ed13096eacd~mv2.jpg', title: 'Luz Natural', category: Category.PORTRAITS, width: 2088, height: 1405 },
  { id: 'p6', url: 'https://static.wixstatic.com/media/c85f44_3dcca1baa1b34108baca2515f11b3419~mv2.jpg', title: 'Retrato de Estudio', category: Category.PORTRAITS, width: 4000, height: 6000 },
  { id: 'p7', url: 'https://static.wixstatic.com/media/c85f44_2e7d7d483f8149daae8426540fbc0449~mv2.jpg', title: 'Elegancia Visual', category: Category.PORTRAITS, width: 4000, height: 6000 },
  { id: 'p8', url: 'https://static.wixstatic.com/media/c85f44_fb9828c6f15c426e85b67ecac8c22587~mv2.jpg', title: 'Expresión Urbana', category: Category.PORTRAITS, width: 1419, height: 2128 },
  { id: 'p9', url: 'https://static.wixstatic.com/media/c85f44_b68ffbc86f344abea1fa7454f4f9eb03~mv2.jpg', title: 'Fuerza en Mirada', category: Category.PORTRAITS, width: 1405, height: 2088 },
  { id: 'p10', url: 'https://static.wixstatic.com/media/c85f44_1ca951338ba741b0a0276b53cb3b0e3d~mv2.jpg', title: 'Carácter Único', category: Category.PORTRAITS, width: 4000, height: 6000 },
  { id: 'p11', url: 'https://static.wixstatic.com/media/c85f44_088ef0fde7064dd8aaac5a544693e723~mv2.jpg', title: 'Moda Editorial', category: Category.PORTRAITS, width: 1198, height: 2128 },
  { id: 'p12', url: 'https://static.wixstatic.com/media/c85f44_a4011df0ba0d4396a7db9cc6482b0825~mv2.jpg', title: 'Estética Minimal', category: Category.PORTRAITS, width: 1405, height: 2088 },
  { id: 'p13', url: 'https://static.wixstatic.com/media/c85f44_9ca21a673f174626906dfd5761f9dfaa~mv2.jpg', title: 'Sentimiento Profundo', category: Category.PORTRAITS, width: 4000, height: 6000 },
  { id: 'p14', url: 'https://static.wixstatic.com/media/c85f44_49307853c9114d798998f36343ee9962~mv2.jpg', title: 'Lente Profesional', category: Category.PORTRAITS, width: 1419, height: 2128 },

  // --- ALBUMS ---
  { id: 'a-ciclismo', url: 'https://static.wixstatic.com/media/c85f44_86ccecf9ebee4d98a19241bfcd080c23~mv2.jpg', title: 'Ciclismo', description: 'Temporada 2022-2023', category: Category.ALBUMS, width: 1080, height: 1616 },
  { id: 'a-padel', url: 'https://static.wixstatic.com/media/c85f44_df056b9dc3d4471e8e8a69e0eba5e6a6~mv2.jpg', title: 'Padel', description: 'Torneos y Otros', category: Category.ALBUMS, width: 6000, height: 4000 },
  { id: 'a-rugby', url: 'https://static.wixstatic.com/media/c85f44_7928a808fd4e4a2fbf393c28b901b244~mv2.jpg', title: 'Rugby', description: 'Edición 2022', category: Category.ALBUMS, width: 4000, height: 6000 },
];

export const CLIENT_LOGOS = [
  { id: 'wolf', url: 'https://static.wixstatic.com/media/c85f44_295326f18ba64c25905a55adbdbf502a~mv2.png', name: 'Wolf Padel Chile', link: 'https://www.instagram.com/wolfpadelchile/' },
  { id: 'palace', url: 'https://static.wixstatic.com/media/c85f44_c60fe12c41e345d4a963e6d657263e5c~mv2.png', name: 'Padel Palace', link: 'https://www.instagram.com/padelpalacee/' },
  { id: 'tellez', url: 'https://static.wixstatic.com/media/c85f44_cceb1b7851fd44b8840e4b7c8ed01304~mv2.png', name: 'Tellez Boxing', link: 'https://www.instagram.com/tellezboxing/' },
];

export const RECOGNITIONS = [
  { title: 'Torneo Padel Palace', desc: 'Fotógrafa oficial del certamen realizado en Padel Point, Peñalolén.', year: '2023' },
  { title: 'Torneo Wolf', desc: 'Cobertura en EPadel, con auspicio de marcas como Plan Vital y La Roche Posay.', year: '2023' },
  { title: 'Veladas de Boxeo', desc: 'Documentación de grandes exponentes en Tellez Boxing.', year: '2022' }
];

export const GEAR = {
  cameras: ['Sony A7 III', 'Canon 80D'],
  lenses: ['Sony GM 70-200mm f/2.8', 'Sony 50mm f/1.8 Carl Zeiss', 'Sigma Art 18-35 f/1.8'],
  lighting: ['Flashes Godox V1', 'Softboxes Profesionales', 'Sistemas de Telones']
};

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/pauguse_ph/', user: '@pauguse_ph' },
  { label: 'WhatsApp', href: 'https://wa.me/56900000000', user: 'Consultas Rápidas' },
  { label: 'Behance', href: '#', user: 'Portfolio Extendido' },
];
