import Movie from '../models/movie'

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
                    onclick: () => vnode.attrs.deleteItem(vnode.attrs.key)
                })
            ]
        )
    }
}

function TitleList() {

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
                console.log('1',data);
                list.push({
                    srcImage: data.Poster,
                    title: data.Title,
                    year: data.Year,
                    genre: data.Genre,
                    key: key++
                });
                console.log('2',data);
                Movie.save({
                    srcImage: data.Poster,
                    title: data.Title,
                    year: data.Year,
                    genre: data.Genre,
                    key: key++,
                    id: key
                });
                console.log('3',data);
            })
            .catch((e) => console.log(e));

    }

    function deleteItem(key) {
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
};


m.mount(document.getElementById('areasearch'), TitleList);
