import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from '../../../shared/services/request.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() teamImageUrl: string;
  @Input() teamName: string;
  @Input() liveScore: string;
  @Input() betScore: string;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  bet(): void {
    this.requestService.post('/bet',
    {
      teamImageUrl: this.teamImageUrl,
      teamName: this.teamName,
      liveScore: this.liveScore,
      betScore: this.betScore
    });
  }
}
