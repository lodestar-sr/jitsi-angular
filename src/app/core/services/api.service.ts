import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;

  constructor(
    protected http: HttpClient,
    protected spinner: NgxSpinnerService,
  ) {
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', `application/json`);
  }

  protected get(url, hasSpinner = true): Observable<any> {
    if (hasSpinner) {
      this.spinner.show();
    }
    return new Observable(observer => {
      this.http.get<any>(url, {headers: this.headers}).subscribe(response => {
        observer.next(response);
        observer.complete();
        if (hasSpinner) {
          this.spinner.hide();
        }
      }, error => {
        observer.error(error);
        observer.complete();
        if (hasSpinner) {
          this.spinner.hide();
        }
      });
    });
  }

  protected post(url, body, hasSpinner = true): Observable<any> {
    if (hasSpinner) {
      this.spinner.show();
    }
    return new Observable(observer => {
      this.http.post<any>(url, body, {headers: this.headers}).subscribe(response => {
        observer.next(response);
        observer.complete();
        if (hasSpinner) {
          this.spinner.hide();
        }
      }, error => {
        observer.error(error);
        observer.complete();
        if (hasSpinner) {
          this.spinner.hide();
        }
      });
    });
  }

  protected put(url, body, hasSpinner = true): Observable<any> {
    if (hasSpinner) {
      this.spinner.show();
    }
    return new Observable(observer => {
      this.http.put<any>(url, body, {headers: this.headers}).subscribe(response => {
        observer.next(response);
        observer.complete();
        if (hasSpinner) {
          this.spinner.hide();
        }
      }, error => {
        observer.error(error);
        observer.complete();
        if (hasSpinner) {
          this.spinner.hide();
        }
      });
    });
  }

  protected delete(url, hasSpinner = true, body = null): Observable<any> {
    if (hasSpinner) {
      this.spinner.show();
    }
    return new Observable(observer => {
      this.http.request('delete', url, {headers: this.headers, body: body}).subscribe(response => {
        observer.next(response);
        observer.complete();
        if (hasSpinner) {
          this.spinner.hide();
        }
      }, error => {
        observer.error(error);
        observer.complete();
        if (hasSpinner) {
          this.spinner.hide();
        }
      });
    });
  }
}
