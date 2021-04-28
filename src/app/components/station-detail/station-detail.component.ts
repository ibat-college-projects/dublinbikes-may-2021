import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DublinBikeStation } from 'src/app/models/dublinbike';
import { DublinbikeService } from 'src/app/services/dublinbike.service';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dublinBikeService: DublinbikeService) { }

  ngOnInit(): void {
    this.getBikeStation();
  }

  bikeStationId: number = 0;
  dublinBikeStation: DublinBikeStation | any;
  getBikeStation() {

    this.bikeStationId = Number(this.route.snapshot.paramMap.get('id'));

    this.dublinBikeService.getStation(this.bikeStationId).subscribe(station => {
      console.log(station);
      this.dublinBikeStation = station;

    })

  }

}
