import { Component, OnInit } from '@angular/core';
import { Rbgs } from './../rbgs';

@Component({
  selector: 'app-rbgs',
  templateUrl: './rbgs.component.html',
  styleUrls: ['./rbgs.component.css']
})
export class RbgsComponent implements OnInit {
  colors: Array<string> = ["Purple", "Aqua", "Beige", "Blue", "BlueViolet", "CadetBlue", "Chartreuse", "Cyan", "DarkSalmon", 
  "DeepPink", "OliveDrab", "PaleGreen", "Salmon", "Brown", "Yellow", "Thistle", "SteelBlue", "Sienna", "Red", "Black", 
  "MediumSpringGreen", "Indigo", "DimGrey", "SkyBlue", "Peru", "Orchid", "Lavender", "AntiqueWhite", "MistyRose", 
  "FloralWhite", "Ivory"];
  barcode: string[];
  rnd:number;
  constructor() { 
    this.barcode = [];
    for (let i = 0; i < 10; i++) {
      this.rnd = Math.floor(Math.random() * this.colors.length);
      this.barcode[i] = this.colors[this.rnd];
    }
  }

  ngOnInit() {
  }

}
