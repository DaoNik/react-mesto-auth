(this['webpackJsonpreact-mesto-auth'] =
  this['webpackJsonpreact-mesto-auth'] || []).push([
  [0],
  {
    10: function (e, t, n) {},
    21: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(1),
        c = n.n(a),
        o = n(11),
        s = n.n(o),
        i = n(5),
        r = (n(10), n(14)),
        u = n(6),
        l = n(3),
        p = n(2),
        d = n(12),
        h = n(13),
        j = new ((function () {
          function e(t) {
            Object(d.a)(this, e),
              (this._url = t.url),
              (this._headers = t.headers);
          }
          return (
            Object(h.a)(e, [
              {
                key: '_checkRequest',
                value: function (e) {
                  return e.ok
                    ? e.json()
                    : Promise.reject(
                        '\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430'
                      );
                },
              },
              {
                key: 'getUserInfo',
                value: function () {
                  var e = this;
                  return fetch(''.concat(this._url, 'users/me'), {
                    method: 'GET',
                    headers: this._headers,
                  }).then(function (t) {
                    return e._checkRequest(t);
                  });
                },
              },
              {
                key: 'addNewUserInfo',
                value: function (e, t) {
                  var n = this;
                  return fetch(''.concat(this._url, 'users/me'), {
                    method: 'PATCH',
                    headers: this._headers,
                    body: JSON.stringify({ name: e, about: t }),
                  }).then(function (e) {
                    return n._checkRequest(e);
                  });
                },
              },
              {
                key: 'addCards',
                value: function () {
                  var e = this;
                  return fetch(''.concat(this._url, 'cards'), {
                    method: 'GET',
                    headers: this._headers,
                  }).then(function (t) {
                    return e._checkRequest(t);
                  });
                },
              },
              {
                key: 'addNewCard',
                value: function (e) {
                  var t = this,
                    n = e.name,
                    a = e.link,
                    c = e.likes;
                  return fetch(''.concat(this._url, 'cards'), {
                    method: 'POST',
                    headers: this._headers,
                    body: JSON.stringify({ name: n, link: a, likes: c }),
                  }).then(function (e) {
                    return t._checkRequest(e);
                  });
                },
              },
              {
                key: 'updateAvatar',
                value: function (e) {
                  var t = this;
                  return fetch(''.concat(this._url, 'users/me/avatar'), {
                    method: 'PATCH',
                    headers: this._headers,
                    body: JSON.stringify({ avatar: e }),
                  }).then(function (e) {
                    return t._checkRequest(e);
                  });
                },
              },
              {
                key: 'addLike',
                value: function (e) {
                  var t = this;
                  return fetch(''.concat(this._url, 'cards/likes/').concat(e), {
                    method: 'PUT',
                    headers: this._headers,
                  }).then(function (e) {
                    return t._checkRequest(e);
                  });
                },
              },
              {
                key: 'deleteLike',
                value: function (e) {
                  var t = this;
                  return fetch(''.concat(this._url, 'cards/likes/').concat(e), {
                    method: 'DELETE',
                    headers: this._headers,
                  }).then(function (e) {
                    return t._checkRequest(e);
                  });
                },
              },
              {
                key: 'deleteCard',
                value: function (e) {
                  var t = this;
                  return fetch(''.concat(this._url, 'cards/').concat(e), {
                    method: 'DELETE',
                    headers: this._headers,
                  }).then(function (e) {
                    return t._checkRequest(e);
                  });
                },
              },
            ]),
            e
          );
        })())({
          url: 'https://nomoreparties.co/v1/cohort-29/',
          headers: {
            authorization: '965be665-caac-4684-953a-3ef75da5404d',
            'Content-Type': 'application/json',
          },
        }),
        m = c.a.createContext(),
        b = n(0);
      var f = function (e) {
          var t = e.card,
            n = e.onCardClick,
            a = e.onCardLike,
            o = e.onCardDelete,
            s = c.a.useContext(m),
            i = t.likes.some(function (e) {
              return e._id === s._id;
            }),
            r = t.owner._id === s._id,
            u = 'gallery__card-btn-trash '.concat(
              r ? '' : 'gallery__card-btn-trash_hidden'
            );
          return Object(b.jsxs)('li', {
            className: 'gallery__card',
            children: [
              Object(b.jsx)('h2', {
                className: 'gallery__card-title',
                children: t.name,
              }),
              Object(b.jsx)('img', {
                onClick: function () {
                  n(t);
                },
                src: t.link,
                alt: t.name,
                className: 'gallery__card-img',
              }),
              Object(b.jsx)('button', {
                type: 'button',
                className: 'gallery__card-btn '.concat(
                  i ? 'gallery__card-btn_active' : ''
                ),
                'aria-label':
                  '\u041a\u043d\u043e\u043f\u043a\u0430 \u043b\u0430\u0439\u043a\u0430',
                'data-before': t.likes.length,
                onClick: function () {
                  a(t);
                },
              }),
              Object(b.jsx)('button', {
                type: 'button',
                className: u,
                'aria-label':
                  '\u041a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438',
                onClick: function () {
                  o(t);
                },
              }),
            ],
          });
        },
        _ = n.p + 'static/media/logo.03b78ada.svg';
      var O = function (e) {
        var t = e.link,
          n = e.text,
          a = e.onLogout,
          c = e.userEmail;
        return Object(b.jsxs)('header', {
          className: 'header',
          children: [
            Object(b.jsx)(i.b, {
              to: '/react-mesto-auth',
              className: 'header__link',
              children: Object(b.jsx)('img', {
                src: _,
                alt: '\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto-Russia',
                className: 'header__image',
              }),
            }),
            Object(b.jsxs)('div', {
              className: 'header__auth-block',
              children: [
                Object(b.jsx)('p', { className: 'header__email', children: c }),
                Object(b.jsx)(i.b, {
                  onClick: function () {
                    '\u0412\u044b\u0439\u0442\u0438' === n && a();
                  },
                  className: 'header__link-auth',
                  to: t,
                  children: n,
                }),
              ],
            }),
          ],
        });
      };
      var v = function (e) {
        var t = c.a.useContext(m);
        return Object(b.jsxs)(b.Fragment, {
          children: [
            Object(b.jsx)(O, {
              link: '/react-mesto-auth/sign-in',
              userEmail: e.userEmail,
              onLogout: e.onLogout,
              text: '\u0412\u044b\u0439\u0442\u0438',
            }),
            Object(b.jsxs)('main', {
              children: [
                Object(b.jsxs)('section', {
                  className: 'profile',
                  children: [
                    Object(b.jsxs)('div', {
                      className: 'profile__wrapper',
                      children: [
                        Object(b.jsx)('h1', {
                          className: 'profile__title',
                          children: t.name,
                        }),
                        Object(b.jsx)('p', {
                          className: 'profile__subtitle',
                          children: t.about,
                        }),
                        Object(b.jsx)('button', {
                          type: 'button',
                          onClick: e.onEditProfile,
                          className: 'profile__button-edit',
                          'aria-label':
                            '\u041a\u043d\u043e\u043f\u043a\u0430 \u0434\u043b\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u043e\u043a\u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0440\u043e\u0434\u0430 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438',
                        }),
                      ],
                    }),
                    Object(b.jsx)('div', {
                      className: 'profile__container-avatar',
                      onClick: e.onEditAvatar,
                      children: Object(b.jsx)('img', {
                        className: 'profile__avatar',
                        src: t.avatar,
                        alt: '\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f',
                      }),
                    }),
                    Object(b.jsx)('button', {
                      type: 'button',
                      onClick: e.onAddPlace,
                      className: 'profile__button-add',
                      'aria-label':
                        '\u041a\u043d\u043e\u043f\u043a\u0430 \u0434\u043b\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u043e\u043a\u043d\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u0435\u0441\u0442',
                    }),
                  ],
                }),
                Object(b.jsx)('section', {
                  className: 'gallery',
                  children: Object(b.jsx)('ul', {
                    className: 'gallery__cards',
                    children: e.cards.map(function (t) {
                      return Object(b.jsx)(
                        f,
                        {
                          card: t,
                          onCardClick: e.onCardClick,
                          onCardLike: e.onCardLike,
                          onCardDelete: e.onCardDelete,
                        },
                        t._id
                      );
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var g = function () {
        return Object(b.jsx)('footer', {
          className: 'footer',
          children: Object(b.jsxs)('p', {
            className: 'footer__title',
            children: ['\xa9 ', new Date().getFullYear(), ' Mesto Russia'],
          }),
        });
      };
      var x = function (e) {
          var t = e.card,
            n = e.onClose;
          return Object(b.jsx)('div', {
            className: 'popup popup_view '.concat(
              t.isOpen ? 'popup_opened' : ''
            ),
            children: Object(b.jsxs)('div', {
              className: 'popup__view-container',
              children: [
                Object(b.jsx)('h2', {
                  className: 'popup__view-title',
                  children: t.name,
                }),
                Object(b.jsx)('img', {
                  src: t.link,
                  alt: t.name,
                  className: 'popup__view-image',
                }),
                Object(b.jsx)('button', {
                  onClick: n,
                  type: 'button',
                  className: 'popup__btn-closed',
                  'aria-label':
                    '\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043e\u043a\u043d\u0430',
                }),
              ],
            }),
          });
        },
        k = n.p + 'static/media/Avatar.727b5baa.png';
      var N = function (e) {
        var t = e.name,
          n = e.title,
          a = e.children,
          c = e.isOpen,
          o = e.onClose,
          s = e.onSubmit,
          i = e.submitButtonText;
        return Object(b.jsx)('div', {
          className: 'popup popup_'
            .concat(t, ' ')
            .concat(c ? 'popup_opened' : ''),
          children: Object(b.jsxs)('div', {
            className: 'popup__container',
            children: [
              Object(b.jsxs)('form', {
                className: 'popup__form',
                name: t,
                onSubmit: s,
                children: [
                  Object(b.jsx)('h2', {
                    className: 'popup__title',
                    children: n,
                  }),
                  a,
                  Object(b.jsx)('button', {
                    type: 'submit',
                    className: 'popup__btn popup__btn-add',
                    children: i,
                  }),
                ],
              }),
              Object(b.jsx)('button', {
                onClick: o,
                type: 'button',
                className: 'popup__btn-closed',
                'aria-label':
                  '\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043e\u043a\u043d\u0430',
              }),
            ],
          }),
        });
      };
      var C = function (e) {
        var t = c.a.useContext(m),
          n = c.a.useState(t.name),
          a = Object(l.a)(n, 2),
          o = a[0],
          s = a[1],
          i = c.a.useState(t.about),
          r = Object(l.a)(i, 2),
          u = r[0],
          p = r[1];
        return (
          c.a.useEffect(
            function () {
              s(t.name), p(t.about);
            },
            [t, e.isOpen]
          ),
          Object(b.jsxs)(N, {
            name: 'edit',
            title:
              '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
            isOpen: e.isOpen,
            onClose: e.onClose,
            onSubmit: function (t) {
              t.preventDefault(), e.onUpdateUser({ name: o, about: u });
            },
            submitButtonText:
              '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
            children: [
              Object(b.jsx)('input', {
                className: 'popup__input popup__input_value_name',
                id: 'name',
                name: 'name',
                type: 'text',
                placeholder: '\u041d\u0438\u043a\u043d\u0435\u0439\u043c',
                minLength: '2',
                maxLength: '40',
                value: o,
                onChange: function (e) {
                  s(e.target.value);
                },
                required: !0,
              }),
              Object(b.jsx)('span', {
                className: 'popup__error',
                id: 'name-error',
              }),
              Object(b.jsx)('input', {
                className: 'popup__input popup__input_value_job',
                id: 'job',
                name: 'job',
                type: 'text',
                placeholder:
                  '\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438',
                minLength: '2',
                maxLength: '200',
                value: u,
                onChange: function (e) {
                  p(e.target.value);
                },
                required: !0,
              }),
              Object(b.jsx)('span', {
                className: 'popup__error',
                id: 'job-error',
              }),
            ],
          })
        );
      };
      var y = function (e) {
        var t = c.a.useRef(null);
        return Object(b.jsxs)(N, {
          name: 'update-avatar',
          title:
            '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
          isOpen: e.isOpen,
          onClose: e.onClose,
          onSubmit: function (n) {
            n.preventDefault(),
              t.current.focus(),
              e.onUpdateAvatar({ avatar: t.current.value });
          },
          submitButtonText:
            '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
          children: [
            Object(b.jsx)('input', {
              className: 'popup__input',
              id: 'avatar-link',
              name: 'link',
              type: 'url',
              placeholder:
                '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443',
              ref: t,
              required: !0,
            }),
            Object(b.jsx)('span', {
              className: 'popup__error',
              id: 'avatar-link-error',
            }),
          ],
        });
      };
      var S = function (e) {
        var t = c.a.useState(''),
          n = Object(l.a)(t, 2),
          a = n[0],
          o = n[1],
          s = c.a.useState(''),
          i = Object(l.a)(s, 2),
          r = i[0],
          u = i[1];
        return (
          c.a.useEffect(
            function () {
              o(''), u('');
            },
            [e.isOpen]
          ),
          Object(b.jsxs)(N, {
            name: 'add',
            title:
              '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
            isOpen: e.isOpen,
            onClose: e.onClose,
            onSubmit: function (t) {
              t.preventDefault(), e.onAddPlace(a, r);
            },
            submitButtonText: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c',
            children: [
              Object(b.jsx)('input', {
                className: 'popup__input popup__input_value_place',
                id: 'place',
                name: 'name',
                type: 'text',
                placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435',
                minLength: '2',
                maxLength: '30',
                value: a,
                onChange: function (e) {
                  o(e.target.value);
                },
                required: !0,
              }),
              Object(b.jsx)('span', {
                className: 'popup__error',
                id: 'place-error',
              }),
              Object(b.jsx)('input', {
                className: 'popup__input popup__input_value_place-link',
                id: 'place-link',
                name: 'link',
                type: 'url',
                placeholder:
                  '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443',
                value: r,
                onChange: function (e) {
                  u(e.target.value);
                },
                required: !0,
              }),
              Object(b.jsx)('span', {
                className: 'popup__error',
                id: 'place-link-error',
              }),
            ],
          })
        );
      };
      function E(e) {
        var t = e.onSubmit,
          n = c.a.useState(''),
          a = Object(l.a)(n, 2),
          o = a[0],
          s = a[1],
          i = c.a.useState(''),
          r = Object(l.a)(i, 2),
          u = r[0],
          p = r[1];
        return Object(b.jsxs)(b.Fragment, {
          children: [
            Object(b.jsx)(O, {
              link: '/react-mesto-auth/sign-up',
              text: '\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f',
            }),
            Object(b.jsxs)('section', {
              className: 'login',
              children: [
                Object(b.jsx)('h2', {
                  className: 'login__title',
                  children: '\u0412\u0445\u043e\u0434',
                }),
                Object(b.jsxs)('form', {
                  onSubmit: function (e) {
                    e.preventDefault(), t(o, u);
                  },
                  children: [
                    Object(b.jsx)('input', {
                      className: 'login__input',
                      value: o,
                      onChange: function (e) {
                        s(e.target.value);
                      },
                      placeholder: 'Email',
                    }),
                    Object(b.jsx)('input', {
                      type: 'password',
                      className: 'login__input',
                      value: u,
                      onChange: function (e) {
                        p(e.target.value);
                      },
                      placeholder: '\u041f\u0430\u0440\u043e\u043b\u044c',
                    }),
                    Object(b.jsx)('button', {
                      className: 'login__submit',
                      type: 'submit',
                      children: '\u0412\u043e\u0439\u0442\u0438',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function L(e) {
        var t = e.onSubmit,
          n = c.a.useState(''),
          a = Object(l.a)(n, 2),
          o = a[0],
          s = a[1],
          r = c.a.useState(''),
          u = Object(l.a)(r, 2),
          p = u[0],
          d = u[1];
        return Object(b.jsxs)(b.Fragment, {
          children: [
            Object(b.jsx)(O, {
              link: '/react-mesto-auth/sign-in',
              text: '\u0412\u043e\u0439\u0442\u0438',
            }),
            Object(b.jsxs)('section', {
              className: 'login',
              children: [
                Object(b.jsx)('h2', {
                  className: 'login__title',
                  children:
                    '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
                }),
                Object(b.jsxs)('form', {
                  onSubmit: function (e) {
                    e.preventDefault(), t(o, p);
                  },
                  children: [
                    Object(b.jsx)('input', {
                      className: 'login__input',
                      value: o,
                      onChange: function (e) {
                        s(e.target.value);
                      },
                      placeholder: 'Email',
                    }),
                    Object(b.jsx)('input', {
                      type: 'password',
                      className: 'login__input',
                      value: p,
                      onChange: function (e) {
                        d(e.target.value);
                      },
                      placeholder: '\u041f\u0430\u0440\u043e\u043b\u044c',
                    }),
                    Object(b.jsx)('button', {
                      className: 'login__submit',
                      type: 'submit',
                      children:
                        '\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f',
                    }),
                    Object(b.jsx)(i.b, {
                      to: '/react-mesto-auth/sign-in',
                      className: 'login__link',
                      children:
                        '\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var w = n.p + 'static/media/Union.1b6082f8.svg',
        T = n.p + 'static/media/cross.7c6a020b.svg';
      function q(e) {
        var t = e.isRegister,
          n = e.isOpen,
          a = e.onClose;
        return Object(b.jsx)('div', {
          className: 'popup popup_info '.concat(n ? 'popup_opened' : ''),
          children: Object(b.jsxs)('div', {
            className: 'popup__container',
            children: [
              Object(b.jsx)('img', {
                className: 'popup__info-image',
                src: t ? w : T,
                alt: '\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043e\u0442\u0440\u0430\u0436\u0430\u044e\u0449\u0430\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438',
              }),
              Object(b.jsx)('h2', {
                className: 'popup__title popup__title_info',
                children: t
                  ? '\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!'
                  : '\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.',
              }),
              Object(b.jsx)('button', {
                onClick: a,
                type: 'button',
                className: 'popup__btn-closed',
                'aria-label':
                  '\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043e\u043a\u043d\u0430',
              }),
            ],
          }),
        });
      }
      var I = 'https://auth.nomoreparties.co';
      function P(e) {
        return e.ok
          ? e.json()
          : Promise.reject(
              '\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 '.concat(
                e.status
              )
            );
      }
      var A = n(15),
        R = ['component'];
      function D(e) {
        var t = e.component,
          n = Object(A.a)(e, R);
        return n.loggedIn
          ? Object(b.jsx)(t, Object(u.a)({}, n))
          : Object(b.jsx)(p.a, { to: '/react-mesto-auth/sign-in' });
      }
      var U = function () {
        var e = Object(p.g)(),
          t = c.a.useState(
            localStorage.getItem('email') ? localStorage.getItem('email') : ''
          ),
          n = Object(l.a)(t, 2),
          a = n[0],
          o = n[1],
          s = c.a.useState(!1),
          i = Object(l.a)(s, 2),
          d = i[0],
          h = i[1],
          f = c.a.useState(!1),
          _ = Object(l.a)(f, 2),
          O = _[0],
          N = _[1],
          w = c.a.useState(!1),
          T = Object(l.a)(w, 2),
          A = T[0],
          R = T[1],
          U = c.a.useState(!1),
          J = Object(l.a)(U, 2),
          B = J[0],
          F = J[1],
          G = c.a.useState(!1),
          z = Object(l.a)(G, 2),
          H = z[0],
          M = z[1],
          Y = c.a.useState({ isOpen: !1, name: '', link: '' }),
          K = Object(l.a)(Y, 2),
          Q = K[0],
          V = K[1],
          W = c.a.useState({
            name: '\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e',
            about:
              '\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430',
            avatar: k,
          }),
          X = Object(l.a)(W, 2),
          Z = X[0],
          $ = X[1],
          ee = c.a.useState([]),
          te = Object(l.a)(ee, 2),
          ne = te[0],
          ae = te[1];
        function ce() {
          N(!1), F(!1), R(!1), M(!1), V({ isOpen: !1, name: '', link: '' });
        }
        function oe(t) {
          M(!0), t && e('/react-mesto-auth');
        }
        c.a.useEffect(function () {
          j.addCards()
            .then(function (e) {
              ae(e);
            })
            .catch(function (e) {
              console.log('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e));
            });
        }, []),
          c.a.useEffect(function () {
            j.getUserInfo()
              .then(function (e) {
                $(e);
              })
              .catch(function (e) {
                console.log('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e));
              });
          }, []),
          c.a.useEffect(function () {
            var e = function (e) {
              'Escape' === e.key && ce();
            };
            return (
              document.addEventListener('keydown', e),
              function () {
                return document.removeEventListener('keydown', e);
              }
            );
          }, []);
        var se = Object(p.f)();
        return (
          c.a.useEffect(function () {
            !(function (t) {
              localStorage.getItem('token') &&
                ((n = localStorage.getItem('token')),
                fetch(''.concat(I, '/users/me'), {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer '.concat(n),
                  },
                })
                  .then(function (e) {
                    return P(e);
                  })
                  .then(function (e) {
                    return e;
                  }))
                  .then(function (n) {
                    n && (h(!0), e(t));
                  })
                  .catch(function (e) {
                    '400' === e
                      ? console.log(
                          '\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435'
                        )
                      : '401' === e
                      ? console.log(
                          '\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d'
                        )
                      : console.log(
                          '\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e)
                        );
                  });
              var n;
            })(se.pathname);
          }, []),
          Object(b.jsxs)(m.Provider, {
            value: Z,
            children: [
              Object(b.jsxs)(p.d, {
                children: [
                  Object(b.jsx)(p.b, {
                    exact: !0,
                    path: '/react-mesto-auth',
                    element: Object(b.jsx)(D, {
                      loggedIn: d,
                      component: v,
                      onEditProfile: function () {
                        F(!0);
                      },
                      onAddPlace: function () {
                        R(!0);
                      },
                      onEditAvatar: function () {
                        N(!0);
                      },
                      onCardClick: function (e) {
                        V({ isOpen: !0, name: e.name, link: e.link });
                      },
                      cards: ne,
                      onCardLike: function (e) {
                        e.likes.some(function (e) {
                          return e._id === Z._id;
                        })
                          ? j
                              .deleteLike(e._id)
                              .then(function (t) {
                                ae(function (n) {
                                  return n.map(function (n) {
                                    return n._id === e._id ? t : n;
                                  });
                                });
                              })
                              .catch(function (e) {
                                console.log(
                                  '\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(
                                    e
                                  )
                                );
                              })
                          : j
                              .addLike(e._id)
                              .then(function (t) {
                                ae(function (n) {
                                  return n.map(function (n) {
                                    return n._id === e._id ? t : n;
                                  });
                                });
                              })
                              .catch(function (e) {
                                console.log(
                                  '\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(
                                    e
                                  )
                                );
                              });
                      },
                      onCardDelete: function (e) {
                        j.deleteCard(e._id)
                          .then(function () {
                            ae(function (t) {
                              return t.filter(function (t) {
                                return t._id !== e._id;
                              });
                            });
                          })
                          .catch(function (e) {
                            console.log(
                              '\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e)
                            );
                          });
                      },
                      onLogout: function () {
                        localStorage.removeItem('token'),
                          localStorage.removeItem('email'),
                          h(!1),
                          o(''),
                          e('/sign-in');
                      },
                      userEmail: a,
                    }),
                  }),
                  Object(b.jsx)(p.b, {
                    path: '/react-mesto-auth/sign-up',
                    element: Object(b.jsx)(L, {
                      onSubmit: function (e, t) {
                        (function (e, t) {
                          return fetch(''.concat(I, '/signup'), {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ password: t, email: e }),
                          }).then(function (e) {
                            return P(e);
                          });
                        })(e, t)
                          .then(function (t) {
                            h(!0),
                              oe(!0),
                              o(e),
                              localStorage.setItem('email', e);
                          })
                          .catch(function (e) {
                            oe(!1),
                              '400' === e
                                ? console.log(
                                    '\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439'
                                  )
                                : console.log(
                                    '\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(
                                      e
                                    )
                                  );
                          });
                      },
                    }),
                  }),
                  Object(b.jsx)(p.b, {
                    path: '/react-mesto-auth/sign-in',
                    element: Object(b.jsx)(E, {
                      onSubmit: function (t, n) {
                        (function (e, t) {
                          return fetch(''.concat(I, '/signin'), {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ password: t, email: e }),
                          })
                            .then(function (e) {
                              return P(e);
                            })
                            .then(function (e) {
                              if (e.token)
                                return (
                                  localStorage.setItem('token', e.token), e
                                );
                            });
                        })(t, n)
                          .then(function (n) {
                            h(!0),
                              o(t),
                              localStorage.setItem('email', t),
                              e('/react-mesto-auth');
                          })
                          .catch(function (e) {
                            '400' === e
                              ? console.log(
                                  '\u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439'
                                )
                              : '401' === e
                              ? console.log(
                                  '\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d'
                                )
                              : console.log(
                                  '\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(
                                    e
                                  )
                                );
                          });
                      },
                    }),
                  }),
                ],
              }),
              Object(b.jsx)(g, {}),
              Object(b.jsx)(q, { isRegister: d, isOpen: H, onClose: ce }),
              Object(b.jsx)(x, { card: Q, onClose: ce }),
              Object(b.jsx)(C, {
                isOpen: B,
                onClose: ce,
                onUpdateUser: function (e) {
                  var t = e.name,
                    n = e.about;
                  j.addNewUserInfo(t, n)
                    .then(function () {
                      $(
                        Object(u.a)(
                          Object(u.a)({}, Z),
                          {},
                          { name: t, about: n }
                        )
                      ),
                        ce();
                    })
                    .catch(function (e) {
                      console.log(
                        '\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e)
                      );
                    });
                },
              }),
              Object(b.jsx)(y, {
                isOpen: O,
                onClose: ce,
                onUpdateAvatar: function (e) {
                  var t = e.avatar;
                  j.updateAvatar(t)
                    .then(function () {
                      $(Object(u.a)(Object(u.a)({}, Z), {}, { avatar: t })),
                        ce();
                    })
                    .catch(function (e) {
                      console.log(
                        '\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e)
                      );
                    });
                },
              }),
              Object(b.jsx)(S, {
                isOpen: A,
                onClose: ce,
                onAddPlace: function (e, t) {
                  j.addNewCard({ name: e, link: t, likes: 0 })
                    .then(function (e) {
                      ae([e].concat(Object(r.a)(ne))), ce();
                    })
                    .catch(function (e) {
                      console.log(
                        '\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e)
                      );
                    });
                },
              }),
            ],
          })
        );
      };
      s.a.render(
        Object(b.jsx)(i.a, { children: Object(b.jsx)(U, {}) }),
        document.querySelector('.root')
      );
    },
  },
  [[21, 1, 2]],
]);
//# sourceMappingURL=main.28ac87b5.chunk.js.map
