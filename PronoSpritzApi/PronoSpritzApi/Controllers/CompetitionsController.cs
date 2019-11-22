using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using DataAccessLayer;
using DataAccessLayer.Model;
using PronoSpritzApi.Models.Football;

namespace PronoSpritzApi.Controllers
{
    public class CompetitionsController : ApiController
    {
        public IList<CompetitionDto> Get()
        {
            var dal = new Repository();

            var competitions = dal.GetCompetitions();

            return competitions.Select(ToDto).ToList();
        }

        public CompetitionDto Get(int id)
        {
            var dal = new Repository();

            var competition = dal.GetCompetition(id);

            return ToDto(competition);
        }

        private CompetitionDto ToDto(Competition competition)
        {
            return new CompetitionDto
            {
                Code = competition.Code,
                EmblemUrl = competition.EmblemUrl,
                Id = competition.Id,
                Name = competition.Name
            };
        }
    }
}
