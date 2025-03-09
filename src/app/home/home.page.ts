import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  publicaciones: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsuarios().subscribe(data => {
      this.publicaciones = data;
    }, error => {
      console.error("Error obteniendo publicaciones:", error);
    });
  }

}
