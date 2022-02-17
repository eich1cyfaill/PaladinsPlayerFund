import * as playerSearchActionCreators from './playerSearchAC'
import * as championListActionCreators from './championListAC'
import * as playerInfoActionCreators from './playerInfoAC'
import * as matchDetailActionCreators from './matchDetailAC'
import * as devActionCreators from './devAC'
import * as rankingActionCreators from './rankingAC'


export default {
    ...playerSearchActionCreators,
    ...championListActionCreators,
    ...playerInfoActionCreators,
    ...matchDetailActionCreators,
    ...devActionCreators,
    ...rankingActionCreators
}