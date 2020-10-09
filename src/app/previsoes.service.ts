import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Previsao } from './model/previsao';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  constructor(private httpClient: HttpClient){

  }

  public obterPrevisoes(): Observable<Previsao[]>{
    return this.httpClient.get<Previsao[]>('http://api.openweathermap.org/data/2.5/forecast?q=itu&appid=f33bd330527e0c283262de103d2f5186&units=metric&lang=pt_br&cnt=16');
  }
}
