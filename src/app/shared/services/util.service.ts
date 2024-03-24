import { Injectable } from '@angular/core';

interface QueryParams {
  [key: string]: string;
};


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public setParams(params: any): QueryParams {
    const objectToArray = Object.entries(params);
    const arrayFiltered = objectToArray.filter(item => (item[1] !== null && item[1] !== undefined && item[1] !== ''));
    const formObject = Object.fromEntries(arrayFiltered) as QueryParams;
    return formObject;
  }
}
