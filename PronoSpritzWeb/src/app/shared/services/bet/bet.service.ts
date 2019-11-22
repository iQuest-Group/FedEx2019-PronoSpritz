import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private requestService: RequestService) { }

  public allBets()
  {
    return this.requestService.get(`/api/bets`);
  }
}
