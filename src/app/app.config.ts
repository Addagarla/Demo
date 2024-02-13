import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), MatSidenavModule, MatListModule]
};
