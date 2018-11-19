import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Usuario from '../entities/Usuario';
import Token from '../entities/Token';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Usuario;
  private username: string;
  private token: string;
  private role: string;

  public userObservable = new Subject<Usuario>();

  constructor(private http: HttpClient) { }

  isLoggedIn() {
    return this.token != null;
  }

  currentUserIsAdmin() {

  }

  notifyUserChange(user) {
    this.userObservable.next(user);
  }

  getCurrentUser(): Subject<Usuario> {
    return this.userObservable;
  }

  private setCurrentUsername(username: string) {
    this.username = username;
    if (this.username !== null) {
      localStorage.setItem('currentUsername', username);
    }
  }

  private setCurrentUser(user: Usuario) {
    this.user = user;
    if (this.user !== null) {
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.notifyUserChange(this.user);
    }
  }

  private setCurrentToken(token: string) {
    this.token = token;
    if (this.token !== '') {
      localStorage.setItem('currentToken', this.token);
    }
  }

  private setCurrentRole(role: string) {
    this.role = role;
    if (this.role !== '') {
      localStorage.setItem('currentRole', this.role);
    }
  }

  private getHttpHeaders() {
    const rawHeaders = {
      'Content-Type': 'application/json',
    };
    if (this.isLoggedIn()) {
      rawHeaders['Authorization'] = `Token: ${this.token}`;
    }
    return {
      headers: new HttpHeaders(rawHeaders)
    };
  }

  login(username: string, password: string): Promise<any> {
    const urlToken = `${API_URL}/token/`;
    const urlAficionado = `${API_URL}/usuarios/aficionados/`;
    const urlAdministrador = `${API_URL}/usuarios/administradores/`;

    this.logout();
    const loginData = {
      username,
      password
    };

    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options: object = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers
    };

    return new Promise((resolve, reject) => {
      fetch(urlToken, options)
        .then(response => {
          return response.json();
        }).then(data => {
          this.token = data.token;

          fetch(urlAficionado, options)
            .then(response => {
              return response.json();
            }).then(data => {
              data.map(aficionado => {
                if (aficionado.usuario != null && aficionado.usuario.username === username) {
                  this.setCurrentUser(aficionado);
                  this.setCurrentRole("aficionado");
                  resolve(aficionado);
                }
              });
            });

            fetch(urlAdministrador, options)
            .then(response => {
              return response.json();
            }).then(data => {
              data.map(administrador => {
                if (administrador.usuario != null && administrador.usuario.username === username) {
                  this.setCurrentUser(administrador);
                  this.setCurrentRole("administrador");
                  resolve(administrador);
                }
              });
            });

        }).catch(err => reject("Ocurrió un error: " + err));
    });

  }

  loginHttp(username: string, password: string): Observable<Token> {
    const url = `${API_URL}/token/`;
    this.logout();
    const loginData = {
      username,
      password
    };
    return this.http.post<Token>(url, loginData)
      .pipe(map(token => {
        if (token) {
          this.setCurrentToken(token.token);
        }
        return token;
      }), catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(new Error('Usuario o contraseña incorrectos'));
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUsername');
    localStorage.removeItem('currentToken');
    localStorage.removeItem('currentRole');
    this.setCurrentUser(null);
    this.setCurrentToken('');
    this.setCurrentRole('');
    this.setCurrentUsername('');
  }

}
