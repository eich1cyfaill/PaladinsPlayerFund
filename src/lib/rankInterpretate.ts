export interface IRankInterpretate {
    iconPath: string
    rankName: string
}


export const rankInterpretate = (rankTier: number): IRankInterpretate => {
    switch(rankTier){
        case 1:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/1.png', rankName: 'Bronze V'}
        case 2:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/2.png', rankName: 'Bronze IV'}
        case 3:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/3.png', rankName: 'Bronze III'}
        case 4:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/4.png', rankName: 'Bronze II'}
        case 5:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/5.png', rankName: 'Bronze I'}
        case 6:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/6.png', rankName: 'Silver V'}
        case 7:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/7.png', rankName: 'Silver IV'}
        case 8:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/8.png', rankName: 'Silver III'}
        case 9:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/9.png', rankName: 'Silver II'}
        case 10:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/10.png', rankName: 'Silver I'}
        case 11:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/11.png', rankName: 'Gold V'}
        case 12:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/12.png', rankName: 'Gold IV'}
        case 13:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/13.png', rankName: 'Gold III'}
        case 14:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/14.png', rankName: 'Gold II'}
        case 15:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/15.png', rankName: 'Gold I'}
        case 16:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/16.png', rankName: 'Platinum V'}
        case 17:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/17.png', rankName: 'Platinum IV'}
        case 18:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/18.png', rankName: 'Platinum III'}
        case 19:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/19.png', rankName: 'Platinum II'}
        case 20:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/20.png', rankName: 'Platinum I'}
        case 21:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/21.png', rankName: 'Diamond V'}
        case 22:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/22.png', rankName: 'Diamond IV'}
        case 23:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/23.png', rankName: 'Diamond III'}
        case 24:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/24.png', rankName: 'Diamond II'}
        case 25:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/25.png', rankName: 'Diamond I'}
        case 26:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/26.png', rankName: 'Master'}
        case 27:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/27.png', rankName: 'Grandmaster'}
        default:
            return {iconPath: 'https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/league-tier/0.png', rankName: ''}
    }
}