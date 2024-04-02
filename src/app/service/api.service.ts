import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://your-backend-api-url/api'; // Replace this with your actual backend API URL

  constructor(private http: HttpClient) { }

  getServiceRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/service-requests`);
  }

  // Define more methods for other API endpoints (e.g., saveForm, removeServiceRequest, etc.)
}
