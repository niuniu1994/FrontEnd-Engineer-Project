import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  userName:String;
  constructor(private authService:AuthService) {
    this.userName = authService.getUsername();
  }

  array1:any = [
    {
      title: "Gerer mes abonnés",
      logo: "assets/users-icon.png",
      description: "Retrouvez ici une facon simple et efficace de gerer vos abonnées : Creation, suppression, ajout, droits d'accès...",
      linkdescription: "Gerer mes abonnées",
      link: "/manage-users",
    }
  ]
  array2:any = [
    {
      title: "Gerer mes Livres",
      logo: "assets/livre.png",
      description: "Retrouvez ici une facon simple et efficace de gerer vos Livres : Creation, suppression, ajout, droits d'accès...",
      linkdescription: "Gerer mes Livres",
      link: "/manage-library",
    }
  ]
  array3:any = [
    {
      title: "Mon Dashboard",
      logo: "assets/dashboard.png",
      description: "Gerer de facon plus organisé votre librairie et vos utilisateurs grace à votre espace Dashboard...",
      linkdescription: "Consulter mon dashboard",
      link: "/dashboard",
    }
  ]
  array4:any = [
    {
      title: "Appercu de Ma Bibliothèque",
      logo: "assets/bibliotheques.png",
      description: "Vous pouvez directement vous faire une idée de ce que verront vos abonnés dans cet espace...",
      linkdescription: "Apercu de la Bibliotheque",
      link: "/preview-library",
    }
  ]

  ngOnInit(): void {
  }

}
