export const state = () => ({
  loading:false,
  user:{
    businessName:'',
    email:'',
    loginStatus:''
  }
})

export const action = {
  register({commit}, payload) {
    return new Promise((resolve,reject)=>{

    })
  },

  login({commit}, payload) {
    console.log(`user is ${JSON.stringify(payload)}`)
    return new Promise((resolve,reject)=>{

    })
    
  }
}
