import m from 'mithril'
import Header from '../components/header';
import Errors from '../components/errors';
import {LocalState, LocalStorage} from '../../state';
//import Profile from "../components/user/profile";

const MyList = {};

MyList.view = function () {
    const listData = LocalStorage.getItem('contingut')
    return m('div', [
        m(Header),
        //m(Profile, {user: userData}),
        m(Errors, { errorTopic: 'error'})
    ]);
};

export default Mylist;