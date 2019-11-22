import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { CompetitionDto } from '../competition.dto';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {
  competitions: CompetitionDto[];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.get<CompetitionDto[]>('/competitions').subscribe(response => {
      this.competitions = response;
    });
  }
}
