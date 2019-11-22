import { Component, OnInit } from '@angular/core';
import { PredictionService } from 'src/app/shared/services/prediction/prediction.service';
import { MatchService } from 'src/app/shared/services/match/match.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

  public predictions;

  constructor(
    private matchService: MatchService,
    private predictionService: PredictionService) { }

  ngOnInit() {
    /*
    forkJoin(this.matchService.allMatches(), this.predictionService.allPredictions())
    .subscribe({
      next: ([matches, predictions]) => {
        this.predictions = matches.map((match) => {
          return {
            ...match,
            prediction: predictions.find(prediction => prediction.MatchId === match.id)
          }
        })
      }
    });*/
  }



}
