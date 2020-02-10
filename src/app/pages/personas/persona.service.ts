import { Injectable } from '@angular/core';
import { Persona } from './persona'
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Injectable()
export class PersonaService{

    private urlEndPoint: string = 'http://localhost:8080/api/personas';
    private source: Persona[];
    constructor(private http: HttpClient) { }

    getPersonas(page: number): Observable<any> {
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
            tap((response: any) => {
                console.log('PersonaService: tap 1');
                (response.content as Persona[]).forEach(persona=>{
                    console.log(persona.nombres);                    
                });
            }),
            map( (response:any) => {                
                (response.content as Persona[]).map(persona => {
                    persona.nombres = persona.nombres.toUpperCase();
                    return persona;
                });
                return response;
            }),    
            tap(response =>{
                console.log('PersonaService: tap 2');
                (response.content as Persona[]).forEach(persona => {
                    console.log(persona.nombres);
                });
            })
        );
    }
    create(persona : Persona): Observable<Persona> {
        return this.http.post(this.urlEndPoint, persona)
        .pipe(
            map((response: any) => response.persona as Persona),
            catchError(e => {
                if (e.status == 400) {
                    return throwError(e);
                }
                if (e.error.mensaje){
                    console.log(e.error.mensaje);
                }
                return throwError(e);
            }));
    }
    getPersona(id: any): Observable<Persona> {
        return this.http.get(this.urlEndPoint).pipe(
            map( (response) => response as Persona)
        );
    }

    
}