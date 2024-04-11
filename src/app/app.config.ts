import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]
};
/*En Angular, los "providers" son una parte fundamental del sistema de inyección de dependencias de Angular. 
Permiten a los componentes, servicios y otros objetos de Angular obtener instancias de otras clases que necesitan para realizar su trabajo.

Los "providers" se definen generalmente a nivel de módulo (@NgModule), pero también se pueden proporcionar a nivel de componente. 
Cuando un componente o servicio solicita una dependencia a Angular, el sistema de inyección de dependencias busca en su 
registro de "providers" para encontrar una instancia adecuada. Si no la encuentra, Angular intentará crearla utilizando las 
instrucciones proporcionadas en los "providers".

En resumen, los "providers" en Angular son la manera en que se gestionan las dependencias y se proporcionan instancias de clases necesarias
para el funcionamiento de la aplicación. Permiten un acoplamiento débil entre los componentes y servicios, 
lo que facilita la reutilización y el mantenimiento del código.*/
