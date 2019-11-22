import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { MatchDto } from './match.dto';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
})
export class CompetitionComponent implements OnInit {
  competitionName: string;
  match: MatchDto;

  constructor(private requestService: RequestService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.competitionName = params.get('competitionName');
    });

    this.match = {
      teamImageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      teamName: 'Team1',
      liveScore: '0',
      predictionScore: '1',
      status: false
    };
  }
}
