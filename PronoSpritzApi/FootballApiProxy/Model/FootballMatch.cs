using System;

namespace FootballApiProxy.Model
{
    public class FootballMatchModel
    {
        public int Id { get; set; }
        public DateTime UtcDate { get; set; }
        public string Status { get; set; }
        public int MatchDay { get; set; }
        public string Group { get; set; }
        public Team HomeTeam { get; set; }
        public Team AwayTeam { get; set; }
        public Score Score { get; set; }
    }
}