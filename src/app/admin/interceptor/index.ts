import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {LoaderInterceptor} from './loader.interceptor';
import {NotifyInterceptor} from './notify.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: NotifyInterceptor, multi: true },
];
