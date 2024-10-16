import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servidor } from '../util/Servidor';
import { RequestMapping } from '../util/RequesMapping';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  request = new RequestMapping();

  private apiUrl = new Servidor().link;

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + this.request.COMPONENTE_PERSONA + this.request.CONSULTAR_PERSONAS);
  }

  addPersona(persona: any): Observable<any> {
    return this.http.post(this.apiUrl + this.request.COMPONENTE_PERSONA + this.request.REGISTRAR_PERSONAS, persona);
  }
}
