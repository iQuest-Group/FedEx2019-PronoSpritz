import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private requestService: RequestService) { }

  public leaderboard()
  {
    return this.requestService.get(`/api/leaderboard`);
  }
}
