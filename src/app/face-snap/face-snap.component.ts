import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  creationDate!: Date;
  snaps! : number;
  imageUrl! : string;
  buttonText! : String;


  ngOnInit(): void {
    this.title = 'Mon Application Angular';
    this.description = 'Ceci est une petite description de mon projet en Angular';
    this.creationDate = new Date();
    this.snaps = 6;
    this.imageUrl = "https://logowik.com/content/uploads/images/angular9826.logowik.com.webp";
    this.buttonText = "J'aime";

  }

  onSnap(): void {
    if (this.buttonText === "J'aime") {
      this.snaps ++;
      this.buttonText = "Je n'aime plus";
    } else {
      this.snaps --;
      this.buttonText = "J'aime";
    }

  }

}
