import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default new vuex.Store({
    state: {
      locationId: null
    }
    // getters: {
    //   id (state){
    //     console.log(state.locationId, 222222)
    //     return state.locationId
    //   }
    // }
})
