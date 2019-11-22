using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PronoSpritzApi.Models.Football
{
    public class CompetitionDto
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string EmblemUrl { get; set; }
    }
}