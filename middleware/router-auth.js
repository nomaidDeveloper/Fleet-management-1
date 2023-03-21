export default function ({ store, route, redirect }) {
    console.log(store, route, redirect,"store, route, redirect-----------");
    const publicPages = ['/login', '/register'];
    const authpage = !publicPages.includes(route.path);
    const loggeduser = store.state.user;
  
    if (authpage && !loggeduser) {
      return redirect('/login');
    }
    redirect();
        
  }
    