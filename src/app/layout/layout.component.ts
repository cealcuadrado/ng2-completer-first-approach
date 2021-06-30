import { Component, OnInit } from '@angular/core';
import { CompleterData, CompleterService } from 'ng2-completer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  searchStr: string;
  captain: string;
  dataService: CompleterData;
  searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];

  captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];

  constructor(private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color')
  }

  ngOnInit(): void {
  }

}
