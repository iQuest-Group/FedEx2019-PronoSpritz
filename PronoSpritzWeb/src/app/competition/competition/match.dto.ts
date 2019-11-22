// export interface MatchDto {
//   // teamImageUrl: string;
//   teamName: string;
//   liveScore: string;
//   predictionScore: string;
//   status: string;
// }

export interface MatchDto {
    Id: number;
    CompetitionId: number;
    StartTime: Date | string;
    Status: string;
    MatchDay: number;
    Group: string;
    HomeTeam: string;
    HomeTeamId: number;
    AwayTeam: string;
    AwayTeamId: number;
    HomeGoals: number;
    AwayGoals: number;
}
