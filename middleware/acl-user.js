export default function ({ store, route, redirect, app }) {
    console.log(store.state.user,"store.state.user----------------");
    const loggeduser = store.state.user;
  
    if (!loggeduser) {
      return redirect('/login');
    }
    redirect();
        
  }
    