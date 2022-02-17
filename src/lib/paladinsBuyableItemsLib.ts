export const paladinsBuyableItemsLib = (itemid: number) => {
    switch (itemid) {
        case 13253:
            return {itemId: 13253, name: 'Illuminate', desc: 'Increase the range at which you see nearby stealthed targets by (15/30/45) units', cost: [150, 300, 450]}
        case 11683:
            return {itemId: 11683, name: 'Resilience', desc: 'Reduce the duration and effectiveness of Crowd Control and Slows by (25%/50%/75%)', cost: [200, 400, 600]}
        case 13228:
            return {itemId: 13228, name: 'Guardian', desc: 'Increase the effectiveness of Shields you create by (7%/14%/21%). This does not affect most cards and passives.', cost: [300, 600, 900]}
        case 13229:
            return {itemId: 13229, name: 'Haven' , desc: 'Reduce the Damage you take from Direct and Area of Effect attacks by (5.5%/11%/16.5%).', cost: [300, 600, 900]}
        case 11826:
            return {itemId: 11826, name: 'Nimble', desc: 'Gain +(7%/14%/21%) Movement Speed.', cost: [150, 300, 450]}
        case 11646:
            return {itemId: 11646, name: 'Master Riding', desc: 'Increase your Mount Speed by (15%/30%/45%).', cost: [250, 500, 750]}
        case 13165:
            return {itemId: 13165, name: 'Morale Boost', desc: 'Increase your Ultimate charge rate by (10%/20%/30%).', cost: [250, 500, 750]}
        case 11723:
            return {itemId: 11723, name: 'Chronos', desc: 'Reduce the Cooldown of all your abilities by (10%/20%/30%.', cost: [300, 600, 900]}
        case 11797:
            return {itemId: 11797, name: 'Kill to heal', desc: 'Getting a kill or elimination heals you for (300/600/900) Health.', cost: [200, 400 ,600]}
        case 12010:
            return {itemId: 12010, name: 'Life Rip', desc: 'Your weapon shots gain +(10%/20%/30%) Lifesteal.', cost: [200,400,600]}
        case 14633:
            return {itemId: 14633, name: 'Rejuvinate', desc: 'Receive (8%/16%/24%) more healing from other players.', cost: [200, 400, 600]}
        case 13224:
            return {itemId: 13224, name: 'Veteran', desc: 'Increase your base maximum Health by (5%/10%/15%).', cost: [200, 400, 600]}
        case 13235:
            return {itemId: 13235, name: 'Deft Hands', desc: 'Increase your Reload Speed by (20%/40%/60%).', cost: [250, 500, 750]}
        case 13079:
            return {itemId: 13079, name: 'Buldozer', desc: 'Your weapon shots deal +(25%/50%/75%) Damage to Deployables, Pets, and Illusions', cost: [150, 300, 450]}
        case 13071:
            return {itemId: 13071, name: 'Wrecker', desc: 'Your weapon attacks deal (30%/60%/90%) increased Damage to Shields.', cost: [300, 600, 900]}
        case 29974:
            return {itemId: 29974, name: "Provision", desc: "Restore (15/30/45)% of your maximum Ammo after earning an Elimination.", cost: [250, 500, 750]}


        default:
            return {}
    }
}