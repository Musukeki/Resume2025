import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderSettingService {
  constructor(private http: HttpClient) {}

  loadJson(path = '/assets/data.json') {
    return firstValueFrom(this.http.get<any>(path));
  }
}
