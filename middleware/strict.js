export default function ({ store, redirect }) {
  // use store.getters.isAuth ...
//var value = store.getters.isAuth
//console.log('value ', value)
  if (!store.getters.isAuth) {
    return redirect('/login')
  }
}
