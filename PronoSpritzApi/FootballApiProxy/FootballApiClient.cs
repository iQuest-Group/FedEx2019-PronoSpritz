using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FootballApiProxy.Model;
using RestSharp;

namespace FootballApiProxy
{
    public class FootballApiClient
    {
        private readonly RestClient restClient;
        private string baseUrl = "https://api.football-data.org/v2";

        public FootballApiClient()
        {
            restClient = new RestClient(baseUrl);
//            restClient.AddDefaultHeader("X-Auth-Token", "43d30d0e090349829f7b996388498ddd");
            restClient.AddDefaultHeader("X-Auth-Token", "581cd7d3b1c148ebbbd73b67b81d9bd2");
            //restClient.UseSerializer(new JsonNetSerializer());

        }

        public CompetitionModel GetCompetition()
        {
            var request = new RestRequest("/competitions/CL");
            var response = restClient.Get<CompetitionModel>(request);

            return response.Data;
        }

        public List<FootballMatchModel> GetMatches(string competitionCode)
        {
            var request = new RestRequest($"/competitions/{competitionCode}/matches?stage=GROUP_STAGE");
            var response = restClient.Get<MatchesResponse>(request);

            return response.Data.Matches;
        }
    }

    public class MatchesResponse
    {
        public List<FootballMatchModel> Matches { get; set; }
    }
}
