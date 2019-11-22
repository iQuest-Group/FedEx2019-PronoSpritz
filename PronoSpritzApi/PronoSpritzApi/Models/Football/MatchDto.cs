using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PronoSpritzApi.Models.Football
{
    public class MatchDto
    {
        public int Id { get; set; }
        public int CompetitionId { get; set; }
        public DateTime StartTime { get; set; }
        public string Status { get; set; }
        public int MatchDay { get; set; }
        public string Group { get; set; }
        public string HomeTeam { get; set; }
        public int HomeTeamId { get; set; }
        public string AwayTeam { get; set; }
        public int AwayTeamId { get; set; }
        public int HomeGoals { get; set; }
        public int AwayGoals { get; set; }
    }
}   