namespace DataAccessLayer.Model
{
    public class Prediction
    {
        public int Id { get; set; } 
        public int MatchId { get; set; }
        public int HomeGoals { get; set; }
        public int AwayGoals { get; set; }
        public int Points { get; set; }
        public FootballMatch Match { get; set; }
        public string Username { get; set; }
    }
}