import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
  standalone: false
})
export class SocialPage implements OnInit {

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
