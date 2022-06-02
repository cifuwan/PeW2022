import m from 'mithril';

const Profile = {
    oninit: function (vnode) {
        let component = this;
        component.user = vnode.attrs.user;
    },
    view: function (vnode) {
        return [
            m("link", {"href":"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css","rel":"stylesheet","id":"bootstrap-css"}),
            m("script", {"src":"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"}),
            m("script", {"src":"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"}),
            m("div", {"class":"container emp-profile"},
                m("form", {"method":"post"},
                    [
                        m("div", {"class":"row"},
                            [
                                m("div", {"class":"col-md-4"},
                                    m("div", {"class":"profile-img"},
                                        [
                                            m("img", {"src":this.user.photo,"alt":""}),
                                            m("div", {"class":"file btn btn-lg btn-primary"},
                                                [
                                                    " Change Photo ",
                                                    m("input", {"type":"file","name":"file"})
                                                ]
                                            )
                                        ]
                                    )
                                ),
                                m("div", {"class":"col-md-6"},
                                    m("div", {"class":"profile-head"},
                                        [
                                            m("h5",
                                                "@" + this.user.username
                                            ),
                                            m("h6",
                                                " User "
                                            ),
                                            m("p", {"class":"proile-rating"},
                                                [
                                                    "RANKINGS : ",
                                                    m("span",
                                                        "0/0"
                                                    )
                                                ]
                                            ),
                                            m("ul", {"class":"nav nav-tabs","id":"myTab","role":"tablist"},
                                                [
                                                    m("li", {"class":"nav-item"},
                                                        m("a", {"class":"nav-link active","id":"home-tab","data-toggle":"tab","href":"#home","role":"tab","aria-controls":"home","aria-selected":"true"},
                                                            "About"
                                                        )
                                                    ),
                                                    m("li", {"class":"nav-item"},
                                                        m("a", {"class":"nav-link","id":"profile-tab","data-toggle":"tab","href":"#profile","role":"tab","aria-controls":"profile","aria-selected":"false"},
                                                            "Rated films/TV shows"
                                                        )
                                                    )
                                                ]
                                            )
                                        ]
                                    )
                                ),
                                m("div", {"class":"col-md-2"},
                                    m("input", {"class":"profile-edit-btn","type":"submit","name":"btnAddMore","value":"Edit Profile"})
                                )
                            ]
                        ),
                        m("div", {"class":"row"},
                            [
                                m("div", {"class":"col-md-4"},
                                    m("div", {"class":"profile-work"},
                                        [
                                            m("p",
                                                "PROFILE LINKS"
                                            ),
                                            m("a", {"href":"/myconfiguration"},
                                                "Configuration"
                                            ),
                                            m("br"),
                                            m("a", {"href":"/contacts"},
                                                "Contacts"
                                            )
                                        ]
                                    )
                                ),
                                m("div", {"class":"col-md-8"},
                                    m("div", {"class":"tab-content profile-tab","id":"myTabContent"},
                                        [
                                            m("div", {"class":"tab-pane fade show active","id":"home","role":"tabpanel","aria-labelledby":"home-tab"},
                                                [
                                                    m("div", {"class":"row"},
                                                        [
                                                            m("div", {"class":"col-md-6"},
                                                                m("label",
                                                                    "Username "
                                                                )
                                                            ),
                                                            m("div", {"class":"col-md-6"},
                                                                m("p",
                                                                    this.user.username
                                                                )
                                                            )
                                                        ]
                                                    ),
                                                    m("div", {"class":"row"},
                                                        [
                                                            m("div", {"class":"col-md-6"},
                                                                m("label",
                                                                    "Name"
                                                                )
                                                            ),
                                                            m("div", {"class":"col-md-6"},
                                                                m("p",
                                                                    this.user.name
                                                                )
                                                            )
                                                        ]
                                                    ),
                                                    m("div", {"class":"row"},
                                                        [
                                                            m("div", {"class":"col-md-6"},
                                                                m("label",
                                                                    "Email"
                                                                )
                                                            ),
                                                            m("div", {"class":"col-md-6"},
                                                                m("p",
                                                                    this.user.email
                                                                )
                                                            )
                                                        ]
                                                    ),
                                                    m("div", {"class":"row"},
                                                        [
                                                            m("div", {"class":"col-md-6"},
                                                                m("label",
                                                                    "Phone"
                                                                )
                                                            ),
                                                            m("div", {"class":"col-md-6"},
                                                                m("p",
                                                                    this.user.phone
                                                                )
                                                            )
                                                        ]
                                                    )
                                                ]
                                            ),
                                            m("div", {"class":"tab-pane fade","id":"profile","role":"tabpanel","aria-labelledby":"profile-tab"}
                                            /* Rated films tab
                                            [
                                                m("div", {"class":"row"},
                                                    [
                                                        m("div", {"class":"col-md-6"},
                                                            m("label",
                                                                "Experience"
                                                            )
                                                        ),
                                                        m("div", {"class":"col-md-6"},
                                                            m("p",
                                                                "Expert"
                                                            )
                                                        )
                                                    ]
                                                ),
                                                m("div", {"class":"row"},
                                                    [
                                                        m("div", {"class":"col-md-6"},
                                                            m("label",
                                                                "Hourly Rate"
                                                            )
                                                        ),
                                                        m("div", {"class":"col-md-6"},
                                                            m("p",
                                                                "10$/hr"
                                                            )
                                                        )
                                                    ]
                                                ),
                                                m("div", {"class":"row"},
                                                    [
                                                        m("div", {"class":"col-md-6"},
                                                            m("label",
                                                                "Total Projects"
                                                            )
                                                        ),
                                                        m("div", {"class":"col-md-6"},
                                                            m("p",
                                                                "230"
                                                            )
                                                        )
                                                    ]
                                                ),
                                                m("div", {"class":"row"},
                                                    [
                                                        m("div", {"class":"col-md-6"},
                                                            m("label",
                                                                "English Level"
                                                            )
                                                        ),
                                                        m("div", {"class":"col-md-6"},
                                                            m("p",
                                                                "Expert"
                                                            )
                                                        )
                                                    ]
                                                ),
                                                m("div", {"class":"row"},
                                                    [
                                                        m("div", {"class":"col-md-6"},
                                                            m("label",
                                                                "Availability"
                                                            )
                                                        ),
                                                        m("div", {"class":"col-md-6"},
                                                            m("p",
                                                                "6 months"
                                                            )
                                                        )
                                                    ]
                                                ),
                                                m("div", {"class":"row"},
                                                    m("div", {"class":"col-md-12"},
                                                        [
                                                            m("label",
                                                                "Your Bio"
                                                            ),
                                                            m("br"),
                                                            m("p",
                                                                "Your detail description"
                                                            )
                                                        ]
                                                    )
                                                )
                                            ]*/
                                        )
                                        ]
                                    )
                                )
                            ]
                        )
                    ]
                )
            )
        ]
    }
}

export default Profile;