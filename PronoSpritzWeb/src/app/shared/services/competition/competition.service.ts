import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';
import { MatchDto } from '../../../competition/competition/match.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  constructor(private requestService: RequestService) { }

  bet(match: MatchDto): Observable<MatchDto> {
    return this.requestService.post<MatchDto>('/bet', match);
  }

  getCompetition(): Observable<MatchDto[]> {
    return this.requestService.get<MatchDto[]>('/api/competitions/1/matches');
  }
}
