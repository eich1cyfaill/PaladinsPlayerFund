export const totalWinrateFractions = (wins: number, losses: number, currentSeasonWins: number, currentSeasonLosses: number) => {
    let winrate = Math.ceil((wins / (wins + losses)) * 100)
    let lossrate = Math.ceil(100 - winrate)
    let currentSeasonWinrate = Math.ceil((currentSeasonWins / (currentSeasonWins + currentSeasonLosses)) * 100)
    let currentSeasonLossrate = Math.ceil(100 - currentSeasonWinrate)
    document.documentElement.style.setProperty('--win-fractions', `${winrate}fr`)
    document.documentElement.style.setProperty('--lose-fractions', `${lossrate}fr`)
    document.documentElement.style.setProperty('--currentSeason-win-fractions', `${currentSeasonWinrate}fr`)
    document.documentElement.style.setProperty('--currentSeason-lose-fractions', `${currentSeasonLossrate}fr`)
}

export const getWinrateStats = (wins: number, losses: number, currentSeasonWins: number, currentSeasonLosses: number) => {
    let winrate = Math.ceil((wins / (wins + losses)) * 100)
    let lossrate = Math.ceil(100 - winrate)
    let currentSeasonWinrate = Math.ceil((currentSeasonWins / (currentSeasonWins + currentSeasonLosses)) * 100)
    let currentSeasonLossrate = Math.ceil(100 - currentSeasonWinrate)
    return {winrate, lossrate, currentSeasonWinrate, currentSeasonLossrate}
}