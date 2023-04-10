import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Call } from '@angular/compiler';
import { HeaderComponent } from './app/header/header.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  export class dataof{
    header:string="my company"
  }
