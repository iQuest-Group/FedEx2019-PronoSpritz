using System.Collections.Generic;
using System.Web.Http;
using DataAccessLayer;
using DataAccessLayer.Model;

namespace PronoSpritzApi.Controllers
{
    public class CompetitionsController : ApiController
    {
        public IList<Competition> Get()
        {
            var dal = new Repository();

            var competitions = dal.GetCompetitions();

            return competitions;
        }

        public Competition Get(string code)
        {
            var dal = new Repository();

            var competition = dal.GetCompetition(code);

            return competition;
        }
    }
}
