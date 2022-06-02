import 'bootstrap';
import m from 'mithril';
// This is imported only for initialization purposes
import Controllers from './controllers/controllers';
import PageNotFound from "./views/pages/PageNotFound";
import Api from "./api";
import {LocalStorage} from "./state";
import Home from './views/pages/home';
import Login from './views/pages/login';
import Signup from './views/pages/signup';
import MyProfile from "./views/pages/myprofile";
//import MySearch, MyFavorites from "./views/pages/mysearch";
import {MySearch,MyFavorites} from "./views/pages/mysearch";
//import MyFavorites from "./views/pages/mysearch";


Api.checkActiveSession()
    .then(function (user) {
        LocalStorage.setItem('user', user);
    })
    .catch(function (e) {
        LocalStorage.removeItem('user');
    })
    .finally(initRouting);

function initRouting() {
    m.route.prefix ='';
    m.route(document.getElementById('content'), '/',
        {
            '/': {
                onmatch: function () {
                    if (!LocalStorage.hasItem('user')) m.route.set('/login');
                    else return Home;
                }
            },
            '/login': {
                onmatch: function () {
                    if (LocalStorage.hasItem('user')) m.route.set('/');
                    else return Login;
                }
            },
            '/signup': {
                onmatch: function () {
                    if (LocalStorage.hasItem('user')) m.route.set('/');
                    else return Signup;
                }
            },
            '/myprofile': {
                onmatch: function (){
                    if (!LocalStorage.hasItem('user')) m.route.set('/login');
                    else return MyProfile;
                }
            },
			'/mysearch': {
                onmatch: function (){
                    if (!LocalStorage.hasItem('user')) m.route.set('/login');
                    else return MySearch;
                }
            },
			'/myfavorites': {
                onmatch: function (){
                    if (!LocalStorage.hasItem('user')) m.route.set('/login');
                    else return MyFavorites;
                }
            },
            '/:404...': PageNotFound
        }
    );
}



