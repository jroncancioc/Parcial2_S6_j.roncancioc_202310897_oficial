import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-airline-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {
  airlines: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/main/flights.json';
    this.http.get<any[]>(url).subscribe(data => {
      this.airlines = data;
    });
  }
}
