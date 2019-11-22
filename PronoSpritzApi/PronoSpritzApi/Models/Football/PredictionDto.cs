namespace PronoSpritzApi.Models.Football
{
    public class PredictionDto
    {
        public int MatchId { get; set; }
        public int HomeGoals { get; set; }
        public int AwayGoals { get; set; }
        public int Points { get; set; }
    }
}