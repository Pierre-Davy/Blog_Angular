import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "Angular",
      description: "Ceci est la première fois que je code en Angular",
      imageUrl: "https://angular.io/assets/images/logos/angular/angular.png",
      creationDate: new Date(),
      snaps: 172,
      location: "Brest"
    },
    {
      id: 2,
      title: "Javascript",
      description: "JS classique ou Angular",
      imageUrl: "https://i1.wp.com/www.keesmel.com/wp-content/uploads/2020/09/js-logo.png?fit=500%2C500",
      creationDate: new Date(),
      snaps: 9,
      location: "Quimper"
    },
    {
      id: 3,
      title: "Vue.js",
      description: "La différence avec Vue.js",
      imageUrl: "https://gary-deshayes.com/wp-content/uploads/2022/01/vuejs.png?ezimgfmt=ngcb1/notWebP",
      creationDate: new Date(),
      snaps: 5
    },
    {
      id: 4,
      title: "Angular",
      description: "Ceci est la première fois que je code en Angular",
      imageUrl: "https://angular.io/assets/images/logos/angular/angular.png",
      creationDate: new Date(),
      snaps: 240,
      location: "Brest"
    },
    {
      id: 5,
      title: "Javascript",
      description: "JS classique ou Angular",
      imageUrl: "https://i1.wp.com/www.keesmel.com/wp-content/uploads/2020/09/js-logo.png?fit=500%2C500",
      creationDate: new Date(),
      snaps: 9,
      location: "Quimper"
    },
    {
      id: 6,
      title: "Vue.js",
      description: "La différence avec Vue.js",
      imageUrl: "https://gary-deshayes.com/wp-content/uploads/2022/01/vuejs.png?ezimgfmt=ngcb1/notWebP",
      creationDate: new Date(),
      snaps: 5
    }

  ];

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error("No face snap found with id " + faceSnapId);
    } else {
      return faceSnap;
    }
  }

  likeFaceSnapById(faceSnapId: number, snapType: 'like' | 'unlike' ): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === "like" ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
