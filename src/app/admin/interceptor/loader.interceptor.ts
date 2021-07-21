import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, delay} from 'rxjs/operators';
import {LoadService} from '../service/load.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // check request
    if (!req.url.includes('seach')) {
      return next.handle(req);
    }
    console.warn('LoaderInterceptor');

    const loaderService = this.injector.get(LoadService);

    loaderService.show();

    return next.handle(req).pipe(
      delay(3000),
      finalize(() => loaderService.hide())
    );
  }
}
