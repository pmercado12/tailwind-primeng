import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: '.my-app-dark', // Clase para activar modo oscuro
          cssLayer: {
              name: 'primeng',
              order: 'theme, base, primeng, utilities' // Orden crucial para Tailwind
          }
        }
      }
    })
  ]
};
