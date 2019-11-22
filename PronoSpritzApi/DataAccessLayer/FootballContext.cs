using System.Data.Entity;
using DataAccessLayer.Model;

namespace DataAccessLayer
{
    public class FootballContext : DbContext
    {
        public FootballContext() : base("DefaultConnection")
        {
        }
        public DbSet<Competition> Competitions { get; set; }
        public DbSet<FootballMatch> Matches { get; set; }
        public DbSet<Prediction> Predictions { get; set; }
    }
}