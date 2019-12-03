import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    index:0
  },
  mutations: {
    savedata(state,data){
      state.list=data
    },
    savenum(state,num){
      state.index=num
    },
    finddata(state,text){//模糊搜索
      console.log(text)
      var findlist=state.list.filter(item=>item.tit==text);
      console.log(findlist)
      list.list=findlist;
    }
  },
  actions: {
    getdata(context){
       axios.get('/getlist').then(res=>{
          context.commit('savedata',res.data)
       })
    }
  },
  modules: {
  }
})
