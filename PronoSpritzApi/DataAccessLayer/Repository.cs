using System.Collections.Generic;
using System.Linq;
using DataAccessLayer.Model;

namespace DataAccessLayer
{
    public class Repository
    {
        public void AddCompetition(Competition competition)
        {
            using (var context = new FootballContext())
            {
                context.Competitions.Add(competition);
                context.SaveChanges();
            }
        }

        public Competition GetCompetition(int id)
        {
            using (var context = new FootballContext())
            {
                return context.Competitions.FirstOrDefault(c => c.Id == id);
            }
        }

        public IList<Competition> GetCompetitions()
        {
            using (var context = new FootballContext())
            {
                return context.Competitions.ToList();
            }
        }

        public FootballMatch GetMatch(int id)
        {
            using (var context = new FootballContext())
            {
                return context.Matches.FirstOrDefault(c => c.Id == id);
            }
        }

        public IList<FootballMatch> GetMatches(int competitionId)
        {
            using (var context = new FootballContext())
            {
                return context.Matches.Where(c => c.CompetitionId == competitionId).ToList();
            }
        }

        public Prediction GetPrediction(int matchId)
        {
            using (var context = new FootballContext())
            {
                return context.Predictions.FirstOrDefault(c => c.MatchId == matchId);
            }
        }

        public IList<Prediction> GetPredictions(string username, int competitionId)
        {
            using (var context = new FootballContext())
            {
                return context.Predictions.Where(p => p.Match.CompetitionId == competitionId 
                                                      && p.Username == username).ToList();
            }
        }

        public void SavePrediction(string username, int matchId, int homeGoals, int awayGoals)
        {
            using (var context = new FootballContext())
            {
                var prediction = context.Predictions.FirstOrDefault(p => p.MatchId == matchId && p.Username == username);

                if (prediction == null)
                {
                    prediction = new Prediction
                    {
                        Username = username,
                        MatchId = matchId,
                        AwayGoals = awayGoals,
                        HomeGoals = homeGoals
                    };
                    context.Predictions.Add(prediction);
                }
                else
                {
                    prediction.HomeGoals = homeGoals;
                    prediction.AwayGoals = awayGoals;
                }

                context.SaveChanges();
            }
        }
    }
}
