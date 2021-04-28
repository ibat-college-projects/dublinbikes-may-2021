import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { DublinBikeStation } from 'src/app/models/dublinbike';
import { DublinbikeService } from 'src/app/services/dublinbike.service';
@Component({
  selector: 'app-dublinbike',
  templateUrl: './dublinbike.component.html',
  styleUrls: ['./dublinbike.component.css']
})
export class DublinbikeComponent implements OnInit {

 



  _dublinBikeStations: DublinBikeStation[] = [{
    "number": 123,
    "contractName": "Lyon",
    "name": "nom station",
    "address": "adresse indicative",
    "position": {
      "lat": 45.774204,
      "lng": 4.867512
    }
  }, {
    "number": 123,
    "contractName": "Lyon",
    "name": "nom station",
    "address": "adresse indicative",
    "position": {
      "lat": 45.774204,
      "lng": 4.867512
    }
  }, {
    "number": 123,
    "contractName": "Lyon",
    "name": "nom station",
    "address": "adresse indicative",
    "position": {
      "lat": 45.774204,
      "lng": 4.867512
    }
  }]

  searchText: string | any;
  
  constructor(private dublinBikeService: DublinbikeService) { }

  ngOnInit(): void {

    this.getStations();
  }

  dublinBikeStations : DublinBikeStation[] = [];
  getStations() {

    this.dublinBikeService.getStations().subscribe(listOfStations => {
    

      this.dublinBikeStations = listOfStations;
    })
  }

}
