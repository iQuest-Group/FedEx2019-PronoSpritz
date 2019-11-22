import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from '../../../shared/services/request.service';
import { CompetitionService } from '../../../shared/services/competition/competition.service';
import { MatchDto } from '../match.dto';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() teamName: string;
  @Input() goals: string;
  @Input() status: string;

  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
  }
}
