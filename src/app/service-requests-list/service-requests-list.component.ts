import { Component,OnInit } from '@angular/core';
import { ApiService} from "../service/api.service";

@Component({
  selector: 'app-service-requests-list',
  templateUrl: './service-requests-list.component.html',
  styleUrl: './service-requests-list.component.css'
})
export class ServiceRequestsListComponent implements OnInit {
  serviceRequests: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchServiceRequests();
  }

  fetchServiceRequests(): void {
    // Assuming you have an API endpoint to fetch service requests
    this.apiService.getServiceRequests().subscribe((data: any[]) => {
      this.serviceRequests = data;
    });
  }

  showForm(request: any): void {
    // Implement method to show form with details of selected service request
    console.log('View details of service request:', request);
  }

}
