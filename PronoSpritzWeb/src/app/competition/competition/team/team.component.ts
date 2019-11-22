import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
