import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private requestService: RequestService) { }

  public allMatches()
  {
    return this.requestService.get(`/api/match`);
  }
}
