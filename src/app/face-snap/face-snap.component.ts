import { Component, OnInit, Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgOptimizedImage, CommonModule, RouterLink
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText! : String;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) {}

  ngOnInit(): void {
    this.buttonText = "J'aime";

  }

  onSnap(): void {
    if (this.buttonText === "J'aime") {
      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, "like");
      this.buttonText = "Je n'aime plus";
    } else {
      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, "unlike");
      this.buttonText = "J'aime";
    }

  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
