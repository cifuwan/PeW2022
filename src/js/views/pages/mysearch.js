import m from 'mithril'
import Header from '../components/header';
import Errors from '../components/errors';
import Movie from '../../models/movie';
import MoviesColection from '../../models/movies';
import {LocalStorage} from "../../state";

let llistaFavorits = []

function Title() {

  return {
    oncreate: (vnode) => {
      $(vnode.dom).draggable({
        revert: true
      });
      $(vnode.dom).data('key', vnode.attrs.key)
      $(vnode.dom).data('listId', vnode.attrs.listId)
    },

    view: (vnode) => m("li.item",
      [
        m("img.poster[src=" + vnode.attrs.item.srcImage + "]"),
        m("div.filmInfo",
          [
            m("p", "Title: " + vnode.attrs.item.title),
            m("p", "Year: " + vnode.attrs.item.year),
            m("p", "Genre: " + vnode.attrs.item.genre)
          ]
        ),
        m("br.clearBoth"),
        m("img.delButton[src='https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/114/f-cross_256-32.png']", {
          onclick: () => 
          {
            vnode.attrs.deleteItem(vnode.attrs.key);
          }
        })
      ]
    )
  }
}

function TitleList(a) {
  if (!TitleList.hasOwnProperty('id'))
    TitleList.id = 0;

  let listId = TitleList.id++;

  let list = [];
  let title = '';
  let key = 0;

  function addItem() {
    m.request({
        method: "GET",
        url: "https://www.omdbapi.com/?apikey=b0247a83&t=" + title,
      })
      .then(function(data) {
        list.push({
          srcImage: data.Poster,
          title: data.Title,
          year: data.Year,
          genre: data.Genre,
          key: key++
        });
        
      })
      .catch((e) => console.log(e));

  }

  function deleteItem(key) {
  	let elementToDelete = list.find(item => item.key == key);
    llistaFavorits.push(elementToDelete);
    const userData = LocalStorage.getItem('user')
    let movie = new Movie({...elementToDelete, userId: userData.id})
    //let movie = new Movie(elementToDelete);
    movie.save();
    
    list = list.filter(item => item.key != key);
    m.redraw();
  }
  
  return {
    view: (vnode) => {
    	return m("div.root",
        [
          m("div.input",
            [
              m("input[type='text']", {
                oninput: (e) => title = e.target.value
              }),
              m("button.addButton", {
                  onclick: addItem
                },
                "ADD"
              )
            ]
          ),
          m("div.content",
            [
              m('ul.list', list.map((item) => m(Title, {
                item: item,
                key: item.key,
                deleteItem,
                listId
              }))),
              m("img.trashcan[src='https://cdn4.iconfinder.com/data/icons/gnome-desktop-icons-png/PNG/64/Gnome-Edit-Delete-64.png']")
            ]
          )
        ]
      )
    },

    oncreate: (vnode) => {
      $(vnode.dom).find(".trashcan").droppable({
        tolerance: "pointer",
        drop: function(event, ui) {
          if (listId === $(ui.draggable).data('listId'))
            deleteItem($(ui.draggable).data('key'));
        }
      });
    }
  }
}

function FavoritesList(a) {
  if (!TitleList.hasOwnProperty('id'))
    TitleList.id = 0;

  let listId = TitleList.id++;

  let title = '';
  let key = 0;

  function deleteFavorite(key) {
    console.log('key',key)
  	let elementToDelete = list.find(item => item.id == key);
    list = list.filter(item => item.id != key);
    let movie = new Movie(elementToDelete)

    movie.remove();
    m.redraw();
  }
  
  let list = []
  let movies = new MoviesColection();
  const userData = LocalStorage.getItem('user')
  movies.load({userId:userData.id}).then((data) => {
    console.log("then", data.data);
    list.push(...data.data)
    m.redraw();
  })
  return {
    view: (vnode) => {
      
      return m("div.root",
        [
         
          m("div.content",
            [
              m('ul.list', list.map((item) => m(Title, {
                item: item,
                key: item.id,
                deleteItem: deleteFavorite,
                listId
              }))),
              m("img.trashcan[src='https://cdn4.iconfinder.com/data/icons/gnome-desktop-icons-png/PNG/64/Gnome-Edit-Delete-64.png']")
            ]
          )
        ]
      )
    }
   }
}

function Root(pmode) {
	var list = []
    var mode = pmode
    
    function setMode(newMode) {
    	mode = newMode
		m.redraw();
    } 
    
    
	return {
    	view: (vnode) => {
      	return m('div.arrel', [ m(Header),
         	m("button.addButton", {
            onclick: () => setMode('favorits')
          },
            "favorits"
           ),
        	m("button.addButton", {
            onclick: () => setMode('cerca')
          },
            "cerca"
           ),
          mode === 'cerca' && m('h1', 'Search'),
		  mode === 'cerca' &&  m(TitleList, {list: list}),
          mode !== 'cerca' &&m('h1', 'Favorites'),
          mode !== 'cerca' && m(FavoritesList, {list:llistaFavorits})])
      },
    }
}


const MySearch = Root('cerca');
const MyFavorites = Root('favorits');


//m.mount(document.getElementById('area1'), TitleList);
//m.mount(document.getElementById('area2'), Root);

export {MySearch,MyFavorites};
//export default {MySearch,MyFavorites};