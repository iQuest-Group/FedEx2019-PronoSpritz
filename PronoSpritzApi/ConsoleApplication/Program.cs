using System.Collections.Generic;
using System.Linq;
using DataAccessLayer;
using DataAccessLayer.Model;
using FootballApiProxy;
using FootballApiProxy.Model;

namespace ConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            var proxy = new FootballApiClient();
            CompetitionModel competitionProxy = proxy.GetCompetition();
            List<FootballMatchModel> matchesProxy = proxy.GetMatches(competitionProxy.Code);

            var competition = new Competition
            {
                CompetitionId = competitionProxy.Id,
                Code = competitionProxy.Code,
                Name = competitionProxy.Name,
                EmblemUrl = competitionProxy.EmblemUrl,
                Matches = matchesProxy.Select(x => MapMatch(x, competitionProxy.Id)).ToList()
            };

            var dal = new Repository();
            dal.AddCompetition(competition);
        }

        private static FootballMatch MapMatch(FootballMatchModel match, int competitionId)
        {
            return new FootballMatch
            {
                OriginalMatchId = match.Id,
                CompetitionId = competitionId,
                MatchDay = match.MatchDay,
                StartTime = match.UtcDate,
                AwayGoals = match.Score.FullTime.AwayTeam,
                HomeGoals = match.Score.FullTime.HomeTeam,
                AwayTeam = match.AwayTeam.Name,
                AwayTeamId = match.AwayTeam.Id,
                HomeTeam = match.HomeTeam.Name,
                HomeTeamId = match.HomeTeam.Id,
                Group = match.Group,
                Status = match.Status
            };
        }
    }
}
