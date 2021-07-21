import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, finalize, tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {LoadService} from '../service/load.service';

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('create')) {
      return next.handle(req);
    }
    console.warn('NotifyInterceptor');

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 200) {
          this.toastr.success('Success', 'success');
          console.log(event);
        }
      })
    );
  }
}
