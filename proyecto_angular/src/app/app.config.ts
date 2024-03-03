import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import { provideStore } from '@ngrx/store';
import { ROOT_REDUCERS } from "@/store/app.state";
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { ModuleBlogEffects } from "@/store/storemodule-blog/module-blog.effects";
import { ModuleHomeEffects } from "@/store/storemodule-home/module-home.effects";
import { LoadArticleEffect } from "@/store/storemodule-article/effects/LoadArticle.effect";
import { DeleteArticleEffect } from "@/store/storemodule-article/effects/DeleteArticle.effect";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideStore(ROOT_REDUCERS),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([ModuleBlogEffects, ModuleHomeEffects, LoadArticleEffect, DeleteArticleEffect])
]
};
