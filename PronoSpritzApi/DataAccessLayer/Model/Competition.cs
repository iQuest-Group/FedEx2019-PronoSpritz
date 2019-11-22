using System.Collections.Generic;

namespace DataAccessLayer.Model
{
    public class Competition
    {
        public int Id { get; set; }
        public int CompetitionId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string EmblemUrl { get; set; }

        public List<FootballMatch> Matches { get; set; }
    }
}