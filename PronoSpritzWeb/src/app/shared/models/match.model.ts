export interface Match {
    id: number;
    matchId: number;
    startTime: Date;
    status: string;
    matchDay: number;
    group: string;
    homeTeam: string;
    homeTeamId: number;
    awayTeam: string;
    awayTeamId: string;
    homeGoals: number;
    awayGoals: number;
}