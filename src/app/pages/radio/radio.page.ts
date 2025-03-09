import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
  standalone: false
})
export class RadioPage{
  audio = new Audio();
  isPlaying = false;
  currentImageIndex = 0;
  images = [
    'https://www.purotip.com/wp-content/uploads/2019/02/queen.jpg', 
    'https://www.guioteca.com/curiosidades/files/2020/05/guns_roses.jpg',
    'https://i.pinimg.com/236x/43/5d/ac/435dac8c565dd94b43a7c4a0a513f69b.jpg',
    'https://elcuarteldelmetal.es/wp-content/uploads/2019/07/musica-rock.jpeg'
  ];
i: any;


  constructor() {
    // URL del streaming en vivo (cámbiala con tu servidor Icecast o Shoutcast)
    this.audio.src = 'https://stream.radioparadise.com/rock-320';
    this.audio.load();
    setInterval(() => {
        this.changeImage();
      }, 3000); // Cambia cada 3 segundos
    
      
  }
  
  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  toggleRadio() {
    if (this.isPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
    } else {
      this.audio.play().then(() => {
        this.isPlaying = true;
      }).catch(error => console.error('Error al reproducir', error));
    }
  }
}
