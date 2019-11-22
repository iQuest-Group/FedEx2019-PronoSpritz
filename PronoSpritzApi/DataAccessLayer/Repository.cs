using System.Collections.Generic;
using System.Linq;
using DataAccessLayer.Model;

namespace DataAccessLayer
{
    public class Repository
    {
        public void AddCompetition(Competition competition)
        {
            using (var context = new FootballContext())
            {
                context.Competitions.Add(competition);
                context.SaveChanges();
            }
        }

        public Competition GetCompetition(string code)
        {
            using (var context = new FootballContext())
            {
                return context.Competitions.FirstOrDefault(c => c.Code == code);
            }
        }

        public IList<Competition> GetCompetitions()
        {
            using (var context = new FootballContext())
            {
                return context.Competitions.ToList();
            }
        }
    }
}
