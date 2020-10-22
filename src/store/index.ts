import { createStore } from 'vuex';
import { GlobalState } from './type';

export default createStore({
    state: {
        currentPage:'',
        fromPage: 'home'
    },
    mutations: {
        setCurrentPage(state:GlobalState,page:string){
            state.currentPage = page;
        },
        setFromPage(state:GlobalState,frompage:string){
            state.fromPage = frompage;
        }
    },
    actions: {
    },
    modules: {

    }
})
