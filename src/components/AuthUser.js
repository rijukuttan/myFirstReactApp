
 class Auth{
    constructor(){
        this.authenticated=false;
        this.currentUser="";
       
    }
    login(userName){
        this.authenticated=true;
        this.currentUser=userName;
    }
    logout(){
        this.authenticated=false;
        
    }
    isAuthenticated(){
        return this.authenticated;
    }
    currentUserName(){
        return this.currentUser;
    }
 }
 export default new Auth();