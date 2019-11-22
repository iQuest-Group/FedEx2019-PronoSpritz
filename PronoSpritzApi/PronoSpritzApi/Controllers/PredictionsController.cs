using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using DataAccessLayer;
using DataAccessLayer.Model;
using PronoSpritzApi.Models.Football;

namespace PronoSpritzApi.Controllers
{
    public class PredictionsController : ApiController
    {
        public PredictionDto Get(int id)
        {
            var dal = new Repository();

            var prediction = dal.GetPrediction(id);

            return ToDto(prediction);
        }

        [HttpGet]
        [Route("api/competitions/{competitionId}/matches")]
        public IList<PredictionDto> ByCompetition(int competitionId)
        {
            var dal = new Repository();
            string userName = User.Identity.Name;
            var predictions = dal.GetPredictions(userName, competitionId);

            return predictions.Select(ToDto).ToList();
        }

        private PredictionDto ToDto(Prediction prediction)
        {
            return new PredictionDto
            {
                MatchId = prediction.MatchId,
                AwayGoals = prediction.AwayGoals,
                HomeGoals = prediction.HomeGoals,
                Points = prediction.Points
            };
        }

        [HttpPost]
        public IHttpActionResult Save(PredictionDto prediction)
        {
            var repo = new Repository();
            repo.SavePrediction(
                User.Identity.Name,
                prediction.MatchId,
                prediction.HomeGoals, 
                prediction.AwayGoals);

            return Ok();
        }
    }
}
