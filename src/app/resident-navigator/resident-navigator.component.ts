import { Component, OnInit } from '@angular/core';
import { residentService } from '../Services/residentService';
@Component({
  selector: 'app-resident-navigator',
  templateUrl: './resident-navigator.component.html',
  styleUrls: ['./resident-navigator.component.css']
})
export class ResidentNavigatorComponent implements OnInit {

  constructor(private residentService: residentService) { }
  residents: any[] | undefined;
  ngOnInit(): void {
    this.residentService.findAllResidents().then(residents => this.residents = residents)
  }

}
