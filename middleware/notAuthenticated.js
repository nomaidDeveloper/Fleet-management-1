

export default ({ store,route, redirect, req }) => {
  console.log(store,route, redirect, req,"store,route, redirect, req---------------------");
    // If the user is authenticated redirect to home page
    if (store.state.user && req && req.query && !req.query.access_token) {
      return redirect('/') 
    }
    if (!store.state.user) {
      if (route.path === '/login') {
      } else {
        return redirect('/login')
      }
    }
  }