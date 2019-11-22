import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private requestService: RequestService) { }

  public allGames(competitionId: number)
  {
    return this.requestService.get(`/api/match/${competitionId}`);
  }
}
