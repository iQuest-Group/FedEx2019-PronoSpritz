using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using DataAccessLayer;
using DataAccessLayer.Model;
using PronoSpritzApi.Models.Football;

namespace PronoSpritzApi.Controllers
{
    public class MatchesController : ApiController
    {
        public MatchDto Get(int id)
        {
            var dal = new Repository();

            var match = dal.GetMatch(id);

            return ToDto(match);
        }

        [HttpGet]
        [Route("api/competitions/{competitionId}/matches")]
        public IList<MatchDto> ByCompetition(int competitionId)
        {
            var dal = new Repository();

            var matches = dal.GetMatches(competitionId);

            return matches.Select(ToDto).ToList();
        }

        private MatchDto ToDto(FootballMatch match)
        {
            return new MatchDto
            {
                Id = match.Id,
                AwayGoals = match.AwayGoals,
                AwayTeam = match.AwayTeam,
                AwayTeamId = match.AwayTeamId,
                CompetitionId = match.CompetitionId,
                Group = match.Group,
                HomeGoals = match.HomeGoals,
                HomeTeam = match.HomeTeam,
                HomeTeamId = match.HomeTeamId,
                MatchDay = match.MatchDay,
                StartTime = match.StartTime,
                Status = match.Status
            };
        }
    }
}
