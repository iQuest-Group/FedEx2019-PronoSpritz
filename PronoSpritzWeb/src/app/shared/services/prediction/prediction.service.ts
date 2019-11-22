import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private requestService: RequestService) { }

  public allPredictions()
  {
    return this.requestService.get(`/api/prediction`);
  }

  public savePrediction(matchId: number, prediction : {homeGoals: number, awayGoals: number})
  {
    return this.requestService.post(`/api/prediction/${matchId}`, prediction);
  }
}
