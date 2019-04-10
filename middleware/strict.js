export default function ({ store, redirect }) {
  //use store.getters.isAuthenticated ...
  var value = store.getters['authentication/isAuthenticated']
  console.log('value ', value)
  if (!value) {
    return redirect('/login')
  }
}
