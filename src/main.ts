import { enableprodmode } from '@angular/core';
import { platformbrowserdynamic } from '@angular/platform-browser-dynamic';

import { appmodule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableprodmode();
}

platformbrowserdynamic()
    .bootstrapmodule(appmodule)
    .catch((err) => console.error(err));
