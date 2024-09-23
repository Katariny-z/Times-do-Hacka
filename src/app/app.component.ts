import { Component, OnInit } from '@angular/core';
import { TeamService } from './services/team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  teams: any[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }
}
