import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {
public var_one : any;

  constructor(private http:HttpClient) {
   
   }

   public getDataone(){
        return  this.http.get('https://api.github.com/repositories/19438/issues')
   }

   public getDatatwo(){
       return  this.http.get('https://api.github.com/repositories/19438/issues')
   }
  
}
