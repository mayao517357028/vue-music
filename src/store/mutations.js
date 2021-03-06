import * as types from './mutationTypes'

const mutations = {
    [types.SINGER_LIST](state,val){
        state.singer=val;
    },
    [types.SET_PLAYING](state,bool){
        state.playing=bool
    },
    [types.SET_FULLSCREEN](state,bool){
        state.fullScreen=bool;
    },
    [types.SET_PLAYLIST](state,arrData){
        state.playlist=arrData;
    },
    [types.SET_SEQUENCELIST](state,arrData){
        state.sequenceList=arrData;
    },
    [types.SET_MODE](state,mode){
        state.mode=mode;
    },
    [types.SET_CURRENTINDEX](state,index){
        state.currentIndex=index;
    },
    [types.SET_RANKING](state,arrData){
        state.ranking=arrData;
    },
    [types.SET_SEARCH_HISTORY](state,arrData){
        state.searchHistory=arrData;
    },
    [types.SET_PLAY_HISTORY](state,arrData){
        state.playHistroy=arrData;
    },
    [types.SET_FAVORITE_LIST](state,arrData){
        state.favoriteList=arrData;
    },
    [types.SET_DETAIL_REC](state,obj){
        state.detailRec=obj;
    }
}

export default mutations