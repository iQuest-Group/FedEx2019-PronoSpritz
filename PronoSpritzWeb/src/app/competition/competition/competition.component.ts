import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { MatchDto } from './match.dto';
import { CompetitionService } from 'src/app/shared/services/competition/competition.service';
import { match } from 'minimatch';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
})
export class CompetitionComponent implements OnInit {

  constructor(private competition: CompetitionService, private router: ActivatedRoute) { }
  competitionName: string;
  matches: MatchDto[];

  previousMatchDay = '';

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.competitionName = params.get('competitionName');
    });

    this.competition.getCompetition<MatchDto[]>().subscribe(response => {
      this.matches = response;
    });

  }

  getDate(match: MatchDto): string {
    const date = new Date(match.StartTime);

    let formattedDate = date.toLocaleString('ro-RO');
    formattedDate = formattedDate.replace(',', '');
    formattedDate = formattedDate.replace(' ', '<br>');

    return formattedDate;
  }

  getMatchDay(matchDay: string): string {
    if (this.previousMatchDay !== matchDay) {
      this.previousMatchDay = matchDay;
      return `Match day ${matchDay}`;
    }

    this.previousMatchDay = matchDay;
    return '';
  }
}
