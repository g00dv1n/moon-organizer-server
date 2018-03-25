(function () {
  var _1 = this;

  var _$1 = this;

  var _5 = function (e, t, n) {
    "use strict";

    var a = n(4),
        r = n.n(a),
        i = n(2),
        s = n(373),
        o = n(374),
        u = n(375),
        l = n(376);
    r.a.use(i.d);
    var c = new i.d.Store({
      state: l.a,
      getters: o.a,
      mutations: u.a,
      actions: s.a
    });
    t.a = c;
  };

  var _6 = function (e, t, n) {
    "use strict";

    var a = n(709),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _7 = function (e, t, n) {
    "use strict";

    var a = n(4),
        r = n.n(a),
        i = n(759),
        s = n(701),
        o = n.n(s),
        u = n(700),
        l = n.n(u),
        c = n(711),
        d = n.n(c),
        h = n(702),
        p = n.n(h),
        f = n(710),
        g = n.n(f),
        m = n(282),
        y = n(284),
        b = n(276),
        v = n(285),
        w = n(272),
        A = n(289),
        k = n(292),
        C = n(295),
        x = n(291),
        _ = n(372);

    r.a.use(i.a);

    var P = function (e, t, n) {
      _$1.document.body.scrollTop = 0, n();
    },
        D = new i.a({
      routes: [{
        path: "/",
        name: "default",
        component: o.a
      }, {
        path: "/lunar-day/:dayNumber",
        name: "lunar-day",
        component: l.a,
        props: !0
      }, {
        path: "/:category",
        name: "category-calendar",
        component: o.a,
        beforeEnter: _.a
      }, {
        path: "/me/profile",
        name: "profile",
        component: d.a,
        beforeEnter: _.b
      }, {
        path: "/me/calc",
        name: "calc",
        component: g.a
      }, {
        path: "/me/todo-list",
        name: "todo-list",
        component: m.a
      }, {
        path: "/me/todo-my",
        name: "todo-my",
        component: y.a,
        props: !0,
        beforeEnter: _.b
      }, {
        path: "/me/lunar-birthday",
        name: "lunar-birthday",
        component: b.a,
        props: !0,
        beforeEnter: _.b
      }, {
        path: "/me/zodiac-birthday",
        name: "zodiac-birthday",
        component: v.a,
        props: !0,
        beforeEnter: _.b
      }, {
        path: "/me/biorhythms",
        name: "biorhythms",
        component: w.a,
        props: !0
      }, {
        path: "/reviews/show",
        name: "reviews",
        component: p.a
      }, {
        path: "/promo/about",
        name: "promo-page",
        component: A.a,
        beforeEnter: P
      }, {
        path: "/promo/calc",
        name: "promo-calc",
        component: x.a
      }, {
        path: "/promo/biorhythms",
        name: "promo-biorhythms",
        component: x.b
      }, {
        path: "/promo/todo",
        name: "promo-todo",
        component: x.c
      }, {
        path: "/me/registration",
        name: "registration",
        component: k.a
      }, {
        path: "/me/thank-you",
        name: "thankyou-page",
        component: C.a
      }]
    });

    t.a = D;
  };

  var _8 = function (e, t, n) {
    "use strict";

    var a = n(719),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _9 = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return s;
    });

    var a = n(1),
        r = n.n(a),
        i = function (e) {
      return function (t, n) {
        e.$store.commit("SET_LAST_CLICKED_DAY", t), e.$router.push({
          name: "lunar-day",
          params: r()({
            dayNumber: t.showedLunarDay.number
          }, n)
        });
      };
    },
        s = function (e) {
      var t = e.$refs.modal || _$1.document.getElementById("modal") || e.$refs.main && e.$refs.main.modal;
      return function (n) {
        if (e.$store.commit("SET_LAST_CLICKED_DAY", n), !t) throw new _$1.Error("Cannot get modal !>?");
        t.open();
      };
    };
  };

  var _a = function (e, t, n) {
    "use strict";

    var a = n(18),
        r = n.n(a),
        i = n(125),
        s = n.n(i),
        o = n(166),
        u = n.n(o),
        l = n(626),
        c = n.n(l),
        d = n(327),
        h = function (e, t) {
      return u()([].concat(s()(e)), function (e) {
        return e[t];
      });
    },
        p = function (e) {
      var t = ["lucky", "beauty", "relationship", "business", "health", "house", "shopping", "garden", "fishing"],
          n = t.indexOf(e.toLowerCase());
      return -1 !== n ? n : null;
    },
        f = function (e, t, a) {
      return {
        name: e,
        plus: h(t[e].plus || [], a),
        minus: h(t[e].minus || [], a),
        path: n(106)("./" + e + ".png"),
        order: p(e)
      };
    },
        g = function (e, t, n) {
      return {
        name: e,
        text: t[e][n]
      };
    },
        m = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ru",
          n = d.a[e].categories,
          a = d.a[e].main;
      return {
        categories: c()(r()(n).map(function (e) {
          return f(e, n, t);
        }), "order"),
        main: r()(a).map(function (e) {
          return g(e, a, t);
        })
      };
    };

    t.a = m;
  };

  var _b = function (e, t, n) {
    "use strict";

    var a = {
      SET_LOCALE: "SET_LOCALE",
      SET_CURRENT_TYPE: "SET_CURRENT_TYPE",
      SET_CLIENT_GEO: "SET_CLIENT_GEO",
      SET_LAST_CLICKED_DAY: "SET_LAST_CLICKED_DAY",
      SET_LAST_CLICKED_LUNAR_NUMBER: "SET_LAST_CLICKED_LUNAR_NUMBER",
      SET_NOT_FIRST_TIME: "SET_NOT_FIRST_TIME",
      SET_TODAY: "SET_TODAY",
      SET_MODAL: "SET_MODAL",
      SET_USER: "SET_USER"
    };
    t.a = a;
  };

  var _d = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return i;
    });
    var a = n(123),
        r = n(29);
    n.d(t, "b", function () {
      return a.b;
    }), n.d(t, "c", function () {
      return a.c;
    }), n.d(t, "d", function () {
      return a.d;
    });

    var i = function () {
      return n.i(a.a)(r.a.state.CATEGORIES);
    };
  };

  var _g = function (e, t, n) {
    e.exports = n.p + "static/img/1.0a6ad5f1c74a49162ba4f8d05886767f.jpg";
  };

  var _h = function (e, t, n) {
    n(515);
    var a = n(0)(n(424), n(738), null, null);
    e.exports = a.exports;
  };

  var _i = function (e, t, n) {
    function a(e) {
      return n(r(e));
    }

    function r(e) {
      var t = i[e];
      if (!(t + 1)) throw new _$1.Error("Cannot find module '" + e + "'.");
      return t;
    }

    var i = {
      "./beauty.png": 644,
      "./business.png": 645,
      "./default.png": 175,
      "./default1.png": 646,
      "./fishing.png": 647,
      "./garden.png": 648,
      "./health.png": 649,
      "./house.png": 650,
      "./lucky.png": 651,
      "./relationship.png": 652,
      "./shopping.png": 653
    };
    a.keys = function () {
      return _$1.Object.keys(i);
    }, a.resolve = r, e.exports = a, a.id = 106;
  };

  var _j = function (e, t, n) {
    "use strict";

    var a = {
      API_ROOT: "http://localhost:8090/api/"
    },
        r = {
      API_ROOT: "https://moonorganizer.com/api/"
    },
        i = {
      development: a,
      production: r
    };

    t.a = function () {
      return i.production;
    }();
  };

  var _k = function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return u;
    }), n.d(t, "a", function () {
      return l;
    });

    var a = n(18),
        r = n.n(a),
        i = n(125),
        s = n.n(i),
        o = {
      ru: ["UA", "RU", "BY", "UZ", "KZ", "GE", "AZ", "LT", "MD", "LV", "KG", "TJ", "AM", "TM", "EE"]
    },
        u = function () {
      return [].concat(s()(r()(o)), ["en"]);
    },
        l = function (e) {
      return r()(o).find(function (t) {
        return -1 !== o[t].indexOf(e);
      }) || "en";
    };
  };

  var _n = function (e, t, n) {
    "use strict";

    var a = n(640),
        r = n.n(a),
        i = n(406),
        s = n.n(i),
        o = n(3),
        u = n.n(o),
        l = n(166),
        c = n.n(l),
        d = n(621),
        h = n.n(d),
        p = n(616),
        f = n.n(p),
        g = n(629),
        m = n.n(g),
        y = n(617),
        b = n.n(y),
        v = function (e, t, n) {
      return u()(n).startOf("day").isBetween(u()(e), u()(t)) || u()(n).endOf("day").isBetween(u()(e), u()(t));
    },
        w = function (e, t) {
      return c()(m()(0, t + 1), function (t) {
        return u()(u()(e).startOf("day").add(t, "days"));
      });
    },
        A = function (e) {
      var t = u()(e).endOf("day").toDate(),
          n = u()(e).startOf("day").toDate(),
          a = s.a.phase_hunt(t);
      return a.new_date > t && (a = s.a.phase_hunt(n)), u()(a.new_date);
    },
        k = function (e, t) {
      return u()(t).endOf("day").diff(u()(e).startOf("day"), "days");
    },
        C = function (e, t, n) {
      return e.map(function (e) {
        return r.a.getMoonTimes(u()(e).toDate(), t, n).rise;
      }).filter(function (e) {
        return _$1.Boolean(e);
      }).map(function (e) {
        return u()(e);
      });
    },
        x = function (e, t, n) {
      var a = A(e),
          r = k(a, e),
          i = u()(a).startOf("day"),
          s = w(i, r + 4),
          o = C(s, t, n);
      u()(h()(o)).isSameOrBefore(a) && (o = f()(o));

      for (var l = [{
        number: 1,
        start: a,
        end: h()(o)
      }], c = 0; c < o.length - 1; c++) l.push({
        number: c + 2,
        start: o[c],
        end: o[c + 1]
      });

      return b()(l, function (t) {
        var n = t.start,
            a = t.end;
        return v(n, a, e);
      });
    };

    t.a = x;
  };

  var _o = function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return A;
    }), n.d(t, "a", function () {
      return w;
    });

    var a = n(10),
        r = n.n(a),
        i = n(3),
        s = n.n(i),
        o = n(624),
        u = n.n(o),
        l = n(116),
        c = n(330),
        d = n(119),
        h = n(67),
        p = n(102),
        f = (n.n(p), function (e) {
      return e.isSame(s()(), "day");
    }),
        g = function (e) {
      return e.week() - s()(e).startOf("month").week();
    },
        m = function (e) {
      return s()().isBetween(e[0].start, e[0].end) ? e[0] : e[1];
    },
        y = function (e) {
      var t = e.localeData().weekdaysShort(),
          n = s()().locale("en").localeData().weekdays(),
          a = t.map(function (e, t) {
        return {
          shortLocale: e,
          fullEn: n[t].toLowerCase()
        };
      }),
          r = e.localeData().firstDayOfWeek(),
          i = a.slice(r),
          o = a.slice(0, r);
      return i.concat(o);
    },
        b = function (e) {
      var t = e.weekday();
      return {
        top: g(e) * (100 / 6) + "%",
        left: t * (100 / 7) + "%"
      };
    },
        v = function (e, t) {
      var n = s()(e).startOf("day"),
          a = s()(e).endOf("day"),
          i = t.map(function (e) {
        var t = s.a.max(s()(e.start), s()(n)),
            i = s.a.min(s()(e.end), s()(a)),
            o = s()(i).diff(s()(t)),
            u = s.a.duration(o).asMilliseconds();
        return r()({}, e, {
          duration: u
        });
      });
      return u()(i, function (e) {
        return e.duration;
      });
    },
        w = function (e, t, a, r) {
      var i = f(e),
          s = n.i(l.a)(e, a, r),
          o = v(e, s),
          u = o,
          p = e.date(),
          g = e.toDate(),
          y = n.i(c.a)(u.number),
          w = n(761)("./" + y.replace(" ", "_").toLowerCase() + ".png"),
          A = b(e),
          k = n.i(d.a)(e.toDate()),
          C = n(183)("./" + k + ".png");
      return {
        maxLunarDay: o,
        showedLunarDay: u,
        lunarDays: s,
        isToday: i,
        day: p,
        date: g,
        moonPhase: y,
        moonPhaseLogoPath: w,
        style: A,
        zodiacLogoPath: C,

        get content() {
          return n.i(h.a)(u.number, t);
        },

        get currentLunarDay() {
          m(s);
        },

        get zodiac() {
          return i ? n.i(d.a)(new _$1.Date()) : k;
        }

      };
    },
        A = function () {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s()(), t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ru", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30, r = s()().locale(t), i = s()(e).locale(t), o = s()(i).format("MMMM"), u = s()(i).startOf("month"), l = i.daysInMonth(), c = y(r), d = i.year(), h = [], p = s()(u), f = 0; f < l; f++) {
        var g = w(p, t, n, a);
        h.push(g), p.add(1, "d");
      }

      return {
        days: h,
        monthName: o,
        weekDays: c,
        year: d
      };
    };
  };

  var _p = function (e, t, n) {
    "use strict";

    function a(e) {
      return "/promo/" + e;
    }

    function r() {
      return !0 === o.a.state.authorized;
    }

    function i(e) {
      if (r.call(this)) return !1;
      var t = u[e.toLowerCase()];
      if (!t) throw new _$1.Error("Cannot get promo url for action=" + e);
      return s.a.replace(t), !0;
    }

    t.a = i;
    var s = n(44),
        o = n(29),
        u = {
      biorhythms: a("biorhythms"),
      calc: a("calc"),
      todo: a("todo")
    };
  };

  var _q = function (e, t, n) {
    "use strict";

    var a = function (e) {
      return e -= _$1.Math.floor(e), e < 0 && (e += 1), e;
    },
        r = function (e) {
      var t = void 0,
          n = void 0,
          r = void 0,
          i = void 0,
          s = void 0,
          o = void 0,
          u = void 0,
          l = void 0,
          c = void 0,
          d = e.getFullYear(),
          h = e.getMonth() + 1,
          p = e.getDate();
      t = d - _$1.Math.floor((12 - h) / 10), n = h + 9, n >= 12 && (n -= 12), r = _$1.Math.floor(365.25 * (t + 4712)), i = _$1.Math.floor(30.6 * n + .5), s = _$1.Math.floor(.75 * _$1.Math.floor(t / 100 + 49)) - 38, o = r + i + p + 59, o > 2299160 && (o -= s), u = a((o - 2451550.1) / 29.530588853), u = 2 * u * _$1.Math.PI, l = 2 * _$1.Math.PI * a((o - 2451562.2) / 27.55454988), c = a((o - 2451555.8) / 27.321582241);

      var f = 360 * c + 6.3 * _$1.Math.sin(l) + 1.3 * _$1.Math.sin(2 * u - l) + .7 * _$1.Math.sin(2 * u);

      return f < 30 ? "aries" : f < 60 ? "taurus" : f < 90 ? "gemini" : f < 120 ? "cancer" : f < 150 ? "leo" : f < 180 ? "virgo" : f < 210 ? "libra" : f < 240 ? "scorpio" : f < 270 ? "sagittarius" : f < 300 ? "capricorn" : f < 330 ? "aquarius" : f < 360 ? "pisces" : "aries";
    };

    t.a = r;
  };

  var _r = function (e, t, n) {
    "use strict";

    var a = [{
      name: "default",
      text: {
        ru: "Общий лунный календарь",
        en: "General lunar calendar"
      }
    }, {
      name: "relationship",
      text: {
        ru: "Лунный календарь отношений",
        en: "Couples lunar calendar"
      }
    }, {
      name: "beauty",
      text: {
        ru: "Лунный календарь красоты",
        en: "Beauty lunar calendar"
      }
    }, {
      name: "business",
      text: {
        ru: "Лунный календарь бизнеса",
        en: "Business lunar calendar"
      }
    }, {
      name: "fishing",
      text: {
        ru: "Лунный календарь рыбалки",
        en: "Fishing lunar calendar"
      }
    }, {
      name: "garden",
      text: {
        ru: "Лунный календарь садовода",
        en: "Gardening lunar calendar"
      }
    }, {
      name: "health",
      text: {
        ru: "Лунный календарь здоровья",
        en: "Health lunar calendar"
      }
    }, {
      name: "house",
      text: {
        ru: "Лунный календарь хозяйки",
        en: "Housekeeping lunar calendar"
      }
    }, {
      name: "lucky",
      text: {
        ru: "Лунный календарь удачи",
        en: "Lucky days lunar calendar"
      }
    }, {
      name: "shopping",
      text: {
        ru: "Лунный календарь покупок",
        en: "Shopping lunar calendar"
      }
    }];
    t.a = a;
  };

  var _u = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return O;
    });

    var a = n(332),
        r = n(343),
        i = n(354),
        s = n(356),
        o = n(357),
        u = n(358),
        l = n(359),
        c = n(360),
        d = n(361),
        h = n(333),
        p = n(334),
        f = n(335),
        g = n(336),
        m = n(337),
        y = n(338),
        b = n(339),
        v = n(340),
        w = n(341),
        A = n(342),
        k = n(344),
        C = n(345),
        x = n(346),
        _ = n(347),
        P = n(348),
        D = n(349),
        T = n(350),
        E = n(351),
        B = n(352),
        M = n(353),
        I = n(355),
        L = {
      bd1: a.a,
      bd2: r.a,
      bd3: i.a,
      bd4: s.a,
      bd5: o.a,
      bd6: u.a,
      bd7: l.a,
      bd8: c.a,
      bd9: d.a,
      bd10: h.a,
      bd11: p.a,
      bd12: f.a,
      bd13: g.a,
      bd14: m.a,
      bd15: y.a,
      bd16: b.a,
      bd17: v.a,
      bd18: w.a,
      bd19: A.a,
      bd20: k.a,
      bd21: C.a,
      bd22: x.a,
      bd23: _.a,
      bd24: P.a,
      bd25: D.a,
      bd26: T.a,
      bd27: E.a,
      bd28: B.a,
      bd29: M.a,
      bd30: I.a
    },
        O = function (e) {
      return L["bd" + e];
    };
  };

  var _w = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return b;
    });

    var a = n(18),
        r = n.n(a),
        i = n(369),
        s = n(363),
        o = n(364),
        u = n(365),
        l = n(366),
        c = n(367),
        d = n(368),
        h = n(370),
        p = n(371),
        f = n(628),
        g = n.n(f),
        m = {
      main: i.a,
      beauty: s.a,
      business: o.a,
      garden: u.a,
      health: l.a,
      house: c.a,
      lucky: d.a,
      relationship: h.a,
      shopping: p.a
    },
        y = function (e, t) {
      var n = {
        location: e || "day",
        title: t.titleConst || null,
        textCode: t.textCode || "t1",
        btn: t.btnLangConst || t.btn || "learnMore"
      };
      return "/calendar/vp-promo-hints?" + r()(n).filter(function (e) {
        return !!n[e];
      }).map(function (e) {
        return e + "=" + n[e];
      }).join("&");
    },
        b = function (e) {
      var t = m[e] ? m[e] : m.main,
          n = t[g()(0, t.length - 1)];
      return n.virtualPage = y(e, n), n;
    };
  };

  var _x = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return l;
    }), n.d(t, "b", function () {
      return f;
    }), n.d(t, "d", function () {
      return g;
    }), n.d(t, "c", function () {
      return m;
    });

    var a = n(10),
        r = n.n(a),
        i = n(377),
        s = n(3),
        o = n.n(s),
        u = n(29),
        l = function (e) {
      var t = {};
      return e.forEach(function (e) {
        t[e] = i.a.filter(function (t) {
          return t.category.toLowerCase() === e.toLowerCase();
        }).map(function (e) {
          return r()({}, e, {
            selected: !1
          });
        });
      }), t;
    },
        c = function (e) {
      if (o()().date() > e) {
        var t = o()().add(1, "month").startOf("month");
        return o()(t).date(e);
      }

      return o()().startOf("month").date(e);
    },
        d = function (e) {
      if (e.days) {
        var t = 1 === e.days[0] ? e.days[1] : e.days[0];
        return {
          showedDay: c(t).toDate(),
          name: e.name,
          text: e.text
        };
      }

      return e;
    },
        h = function (e, t) {
      return o()(e.showedDay).isBefore(o()(t.showedDay)) ? -1 : o()(e.showedDay).isAfter(o()(t.showedDay)) ? 1 : o()(e.showedDay).isSame(o()(t.showedDay)) ? 0 : void 0;
    },
        p = function (e) {
      return e.map(d).sort(h);
    },
        f = function (e) {
      var t = p(e);
      return u.a.dispatch("updateUserPartial", {
        tasks: t,
        tasksFrom: new _$1.Date()
      });
    },
        g = function (e) {
      var t = e.date,
          n = u.a.getters.user;
      if (!n) return !1;
      var a = n.tasksOnCalendar;

      if (a && a.length > 0) {
        var r = o()(t).startOf("day"),
            i = !1;
        return a.forEach(function (e) {
          i = i || o()(e.showedDay).startOf("day").isSame(r);
        }), i;
      }

      return !1;
    },
        m = function (e) {
      var t = u.a.getters.user;
      if (!t || !t.tasksOnCalendar) return null;
      var n = o()(e.date).startOf("day"),
          a = t.tasksOnCalendar.filter(function (e) {
        return o()(e.showedDay).startOf("day").isSame(n);
      });
      return a.length > 0 ? a : null;
    };
  };

  var _y = function (e, t, n) {
    "use strict";

    function a() {
      var e = null,
          t = null;
      return {
        promise: new i.a(function (n, a) {
          e = n, t = a;
        }),
        resolve: e,
        reject: t
      };
    }

    t.a = a;
    var r = n(31),
        i = n.n(r);
    t.b = a;
  };

  var _z = function (e, t, n) {
    e.exports = n.p + "static/img/birthday-cake.44341083709e4215d59d1d57065d45cf.png";
  };

  var _A = function (e, t, n) {
    e.exports = n.p + "static/img/default.8ff4cd5481b343860528c8c6c89f0b39.png";
  };

  var _B = function (e, t, n) {
    e.exports = n.p + "static/img/2.5b699abd37e570e7e80b9245bcd45f62.jpg";
  };

  var _C = function (e, t, n) {
    e.exports = n.p + "static/img/3.6a7d9a4dc8ce9e772c8e35cf12a69e04.jpg";
  };

  var _D = function (e, t, n) {
    e.exports = n.p + "static/img/birthday-cake.44341083709e4215d59d1d57065d45cf.png";
  };

  var _E = function (e, t, n) {
    e.exports = n.p + "static/img/calculator.a80c03c891f9704719852fdaf02f5399.png";
  };

  var _F = function (e, t, n) {
    e.exports = n.p + "static/img/solar-system.e9d4e8f0c5337117a1a21598652f6a9b.png";
  };

  var _G = function (e, t, n) {
    n(520);
    var a = n(0)(n(423), n(744), null, null);
    e.exports = a.exports;
  };

  var _H = function (e, t, n) {
    var a = n(0)(n(431), n(742), null, null);
    e.exports = a.exports;
  };

  var _I = function (e, t, n) {
    function a(e) {
      return n(r(e));
    }

    function r(e) {
      var t = i[e];
      if (!(t + 1)) throw new _$1.Error("Cannot find module '" + e + "'.");
      return t;
    }

    var i = {
      "./aquarius.png": 686,
      "./aries.png": 687,
      "./cancer.png": 688,
      "./capricorn.png": 689,
      "./gemini.png": 690,
      "./leo.png": 691,
      "./libra.png": 692,
      "./pisces.png": 693,
      "./sagittarius.png": 694,
      "./scorpio.png": 695,
      "./taurus.png": 696,
      "./virgo.png": 697
    };
    a.keys = function () {
      return _$1.Object.keys(i);
    }, a.resolve = r, e.exports = a, a.id = 183;
  };

  var _J = function (e, t, n) {
    "use strict";

    var a = function (e) {
      return e ? (e = e.toString(), e.charAt(0).toUpperCase() + e.slice(1)) : "";
    };

    t.a = a;
  };

  var _K = function (e, t, n) {
    "use strict";

    var a = n(4),
        r = n.n(a),
        i = n(118);
    r.a.prototype.$redirectToPromo = i.a;
  };

  var _L = function (e, t, n) {
    "use strict";

    function a(e, t) {
      e.use(i.a, {
        id: s,
        router: t,
        autoTracking: {
          pageviewTemplate: function (e) {
            return {
              page: o + e.path,
              title: _$1.document.title,
              location: _$1.window.location.href
            };
          }
        }
      });
    }

    t.a = a;
    var r = n(698),
        i = n.n(r),
        s = "UA-91648464-1",
        o = "/calendar";
  };

  var _M = function (e, t, n) {
    "use strict";

    var a = {
      relationship: {
        primary: "pink"
      },
      beauty: {
        primary: {
          color: "red",
          hue: 700
        }
      },
      fishing: {
        primary: {
          color: "light-blue",
          hue: 800
        }
      },
      garden: {
        primary: {
          color: "cyan",
          hue: 300
        }
      },
      health: {
        primary: {
          color: "light-green",
          hue: 400
        }
      },
      house: {
        primary: {
          color: "deep-orange",
          hue: 300
        }
      },
      business: {
        primary: {
          color: "blue-grey",
          hue: 700
        }
      },
      lucky: {
        primary: {
          color: "light-green",
          hue: 700
        }
      },
      shopping: {
        primary: {
          color: "yellow",
          hue: 900
        }
      }
    };
    t.a = a;
  };

  var _N = function (e, t, n) {
    "use strict";

    function a(e) {
      arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      e.component("vue-chart", r.a);
    }

    var r = n(439);
    t.a = a;
  };

  var _O = function (e, t) {};

  var _P = function (e, t) {};

  var _Q = function (e, t) {};

  var _R = function (e, t) {};

  var _S = function (e, t) {};

  var _T = function (e, t) {};

  var _U = function (e, t) {};

  var _V = function (e, t) {};

  var _W = function (e, t) {};

  var _X = function (e, t) {};

  var _Y = function (e, t) {};

  var _Z = function (e, t) {};

  var _10 = function (e, t) {};

  var _11 = function (e, t) {};

  var _12 = function (e, t) {};

  var _13 = function (e, t) {};

  var _14 = function (e, t) {};

  var _15 = function (e, t) {};

  var _16 = function (e, t) {};

  var _17 = function (e, t) {};

  var _18 = function (e, t) {};

  var _19 = function (e, t) {};

  var _1a = function (e, t) {};

  var _1b = function (e, t) {};

  var _1c = function (e, t) {};

  var _1d = function (e, t) {};

  var _1e = function (e, t) {};

  var _1f = function (e, t) {};

  var _1g = function (e, t, n) {
    n(527);
    var a = n(0)(n(407), n(751), null, null);
    e.exports = a.exports;
  };

  var _1h = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2),
        s = n(707),
        o = n.n(s),
        u = n(66),
        l = n(705),
        c = n.n(l),
        d = n(706),
        h = n.n(d),
        p = n(279),
        f = n(287),
        g = n(264),
        m = function () {
      return _$1.document && _$1.document.documentElement && _$1.document.documentElement.clientWidth < 1024;
    },
        y = function (e) {
      return function () {
        void 0 !== e.isMobile && (e.isMobile = m());
      };
    };

    t.a = {
      name: "app",
      data: function () {
        return {
          isMobile: m()
        };
      },
      components: {
        LoginModal: o.a,
        FeedbackModal: c.a,
        GiftModal: h.a,
        PersonalSidenav: p.a,
        PromoBtn: f.a,
        FreeSidenav: g.a
      },
      methods: r()({}, n.i(i.a)(["showTooltips", "setupPromoBlurCategories"]), {
        toggleLeftSidenav: function () {
          this.$refs.leftSidenav.toggle();
        },
        openLoginModal: function () {
          this.$refs.loginModal.open();
        },
        closeLeftSidenav: function () {
          this.$refs.leftSidenav.close();
        },
        isLocale: function (e) {
          return this.$store.state.locale === e;
        },
        setLocale: function (e) {
          this.$store.commit("SET_LOCALE", e);
        },
        isCurrentType: function (e) {
          return e === this.currentType;
        },
        setCurrentType: function (e) {
          this.$store.commit("SET_CURRENT_TYPE", e);
        },
        hideSidenav: function () {
          var e = this,
              t = function () {
            return e.closeLeftSidenav();
          };

          this.isMobile && _$1.setTimeout(t, 1500);
        },
        goToCalendar: function (e) {
          this.$store.dispatch("updateType", e), this.hideSidenav(), "default" === e ? this.$router.push("/") : this.$router.push({
            name: "category-calendar",
            params: {
              category: e
            }
          });
        },
        todayClickHandler: function () {
          var e = this.$store.state.today;
          e && ("default" === this.currentType ? n.i(u.a)(this)(e) : n.i(u.b)(this)(e));
        },
        logoClick: function () {},
        openFeedbackModal: function () {
          this.$refs.feedback.open();
        },
        openBookmarksModal: function () {
          this.$refs.bookmarks.open();
        }
      }),
      computed: r()({}, n.i(i.b)(["constants", "userAvatar"]), {
        types: function () {
          return this.$store.getters.calendarTypes;
        },
        currentType: function () {
          return this.$store.state.currentType;
        },
        authorized: function () {
          return this.$store.state.authorized;
        },
        locales: function () {
          return this.$store.state.LOCALES;
        },
        logoPath: function () {
          return n(106)("./" + this.currentType + ".png");
        },
        geo: function () {
          return this.$store.state.geo;
        },
        main: function () {
          return this.$refs.main || _$1.document.getElementById("main");
        },
        isCalendarView: function () {
          return "lunar-day" !== this.$route.name;
        },
        isNoLeaveFeedback: function () {
          return "no" === this.$store.state.isLeaveFeedback;
        }
      }),
      created: function () {
        var e = this;
        _$1.window.addEventListener("resize", y(this)), this.$route.query.forcelogin && _$1.setTimeout(function () {
          return e.openLoginModal();
        }, 1);
      }
    };
  };

  var _1i = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return o;
    });

    var a = n(3),
        r = n.n(a),
        i = function (e, t, n) {
      var a = r()(e),
          i = r()(t),
          s = i.diff(a, "days"),
          o = 2 * _$1.Math.PI,
          u = o * s / n;
      return _$1.Math.round(100 * _$1.Math.sin(u));
    },
        s = function (e, t, n, a) {
      for (var s = [], o = 0; o < n; o++) {
        var u = r()(t).add(o, "days");
        s.push({
          per: i(e, u, a),
          date: u
        });
      }

      return s;
    },
        o = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()();
      return {
        physical: s(e, n, t, 23),
        emotional: s(e, n, t, 28),
        intellectual: s(e, n, t, 33)
      };
    };
  };

  var _1j = function (e, t, n) {
    "use strict";

    var a = n(259);
    n.d(t, "a", function () {
      return a.a;
    });
  };

  var _1k = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return i;
    });

    var a = {
      title: {
        ru: "зачатие мальчиков",
        en: "time to conceive a boy"
      },
      signs: ["aries", "gemini", "leo", "libra", "sagittarius", "aquarius"]
    },
        r = {
      title: {
        ru: "зачатие девочек",
        en: "time to conceive a girl"
      },
      signs: ["taurus", "cancer", "virgo", "scorpio", "capricorn", "pisces"]
    },
        i = function (e) {
      return -1 !== a.signs.indexOf(e && e.toLowerCase()) ? a : r;
    };
  };

  var _1l = function (e, t, n) {
    "use strict";

    var a = n(117),
        r = n(3),
        i = n.n(r),
        s = n(708),
        o = n.n(s);
    t.a = {
      name: "calendar",
      data: function () {
        return {
          date: new _$1.Date()
        };
      },
      components: {
        WeekDayModal: o.a
      },
      props: ["locale", "geo", "dayClickHandler", "isColoredHandler"],
      mounted: function () {},
      methods: {
        next: function () {
          this.date = i()(this.date).add(1, "M").toDate();
        },
        prev: function () {
          this.date = i()(this.date).subtract(1, "M").toDate();
        },
        isColored: function (e) {
          return !!this.isColoredHandler && this.isColoredHandler(e);
        },
        onDayClick: function (e) {
          this.dayClickHandler(e);
        },
        onWeekDayClick: function (e) {
          (this.$refs.weekDayModal || _$1.document.getElementById("weekDayModal")).open(e);
        }
      },
      computed: {
        month: function () {
          var e = this.geo,
              t = e.latitude,
              r = e.longitude,
              i = this.geo ? n.i(a.b)(this.date, this.locale, t, r) : null;

          if (_$1.console.log("Calendar month"), _$1.console.log(i), i) {
            var s = i.days.find(function (e) {
              return e.isToday;
            });
            s && this.$store.commit("SET_TODAY", s);
          }

          return i;
        }
      }
    };
  };

  var _1m = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(3),
        s = n.n(i),
        o = n(67),
        u = n(397),
        l = n(2),
        c = n(69),
        d = n(261),
        h = n(121),
        p = n(122),
        f = n(182),
        g = n.n(f),
        m = function () {
      return _$1.window.pageYOffset > 500;
    },
        y = function (e) {
      return function () {
        void 0 !== e.isEnableGoTop && (e.isEnableGoTop = m());
      };
    };

    t.a = {
      name: "day",
      components: {
        PromoBlurBlock: g.a
      },
      data: function () {
        return {
          isEnableGoTop: m()
        };
      },
      props: ["isShowBirthday"],
      created: function () {
        _$1.window.addEventListener("scroll", y(this));
      },
      methods: {
        processCategoryForSharing: function (e) {
          var t = function (e, t) {
            return e.map(function (e) {
              return t + " " + e;
            }).join("\n");
          };

          return "#moonorganizer\n" + t(e.plus, "+") + "\n" + t(e.minus, "-");
        },
        goTop: function () {
          _$1.window.scrollTo(0, 0);
        },
        getDayNumber: function () {
          return this.$route.params && this.$route.params.dayNumber || this.day.showedLunarDay.number;
        },
        goToPromo: function () {
          this.$ga.page(this.promo.virtualPage), this.$router.push({
            name: "promo-page"
          });
        }
      },
      computed: r()({}, n.i(l.b)(["lastClickedDay", "locale", "constants", "user"]), {
        day: function () {
          return this.lastClickedDay;
        },
        tasks: function () {
          var e = this.day;
          return e && this.isPersonal ? n.i(c.c)(e) : null;
        },
        promo: function () {
          return n.i(p.a)("", this.day);
        },
        isPersonal: function () {
          return this.$store.state.personal;
        },
        dayContent: function () {
          if (!this.getDayNumber()) throw new _$1.Error("Cannot get dayNumber from $route.params.dayNumber");
          return n.i(o.a)(this.getDayNumber(), this.locale);
        },
        mainLogo: function () {
          return _$1.window.location.origin + n(175);
        },
        categories: function () {
          var e = this,
              t = this.dayContent.categories;
          if (!t) throw new _$1.Error("Cannot get categories from lastClickedDay. lastClickedDay probably null.");
          return this.isPersonal ? t.filter(function (t) {
            return -1 !== e.user.categories.indexOf(t.name);
          }) : t;
        },
        zodiac: function () {
          return this.lastClickedDay ? this.lastClickedDay.zodiac : null;
        },
        lunarBirthday: function () {
          return this.isShowBirthday && this.day ? n.i(h.a)(this.day.showedLunarDay.number) : null;
        },
        zodiacGarden: function () {
          var e = this.categories.some(function (e) {
            return "garden" === e.name;
          });
          return this.isPersonal && e ? n.i(u.a)(this.zodiac) : null;
        },
        childConception: function () {
          var e = this.categories.some(function (e) {
            return "health" === e.name;
          });
          return this.isPersonal && e ? n.i(d.a)(this.zodiac) : null;
        },
        main: function () {
          var e = this.dayContent.main;
          if (!e) throw new _$1.Error("Cannot get main lunar day info from lastClickedDay. lastClickedDay probably null.");
          return e;
        },
        title: function () {
          return this.getDayNumber() + " " + this.constants.moonDay;
        },
        sharingUrl: function () {
          return _$1.window.location.href;
        },
        lunarDay: function () {
          if (!this.day) return null;
          var e = this.day.showedLunarDay;
          return {
            start: s()(e.start).format("HH:mm DD-MM-YYYY"),
            end: s()(e.end).format("HH:mm DD-MM-YYYY")
          };
        }
      })
    };
  };

  var _1n = function (e, t, n) {
    "use strict";

    var a = n(703),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1o = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2);
    t.a = {
      name: "personal-sidenav",
      data: function () {
        return {};
      },
      components: {},
      computed: r()({}, n.i(i.b)(["constants"]), {
        currentType: function () {
          return this.$store.state.currentType;
        },
        types: function () {
          return this.$store.getters.calendarTypes;
        },
        logoPath: function () {
          return n(106)("./" + this.currentType + ".png");
        },
        isCalendarView: function () {
          return "lunar-day" !== this.$route.name;
        },
        currentYear: function () {
          return new _$1.Date().getFullYear();
        }
      }),
      methods: {
        goToCategory: function (e) {
          this.$emit("category", e);
        },
        isCurrentType: function (e) {
          return e === this.currentType;
        }
      },
      created: function () {}
    };
  };

  var _1p = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(699),
        s = n.n(i),
        o = n(328),
        u = n(704),
        l = n.n(u),
        c = n(2),
        d = n(66),
        h = n(69),
        p = n(122),
        f = n(182),
        g = n.n(f),
        m = function (e, t, n) {
      var a = null;
      return n && n.content && n.content.categories ? a = n.content.categories : _$1.console.warn("Cannot get categories from day.content.categories in extractCategoryContentByDayObject func"), a ? a.find(function (t) {
        return t.name === e;
      }) : null;
    },
        y = function (e, t) {
      return function (t) {
        var n = m(e, 0, t);
        return !!n && n.plus.length > 0 && 0 === n.minus.length;
      };
    };

    t.a = {
      name: "main",
      components: {
        Calendar: s.a,
        CategoryModal: l.a,
        PromoBlurBlock: g.a
      },
      data: function () {
        return {};
      },
      computed: r()({}, n.i(c.b)(["locale", "user"]), {
        modal: function () {
          return this.$refs.modal || _$1.document.getElementById("modal");
        },
        geo: function () {
          return this.$store.state.geo;
        },
        currentType: function () {
          return this.$store.state.currentType;
        },
        isPersonal: function () {
          return this.$store.state.personal;
        },
        isDefault: function () {
          return "default" === this.currentType;
        },
        constants: function () {
          return this.$store.getters.constants;
        },
        isLastClickToday: function () {
          return !!this.$store.state.lastClickedDay && this.$store.state.lastClickedDay.isToday;
        },
        promo: function () {
          return n.i(p.a)(this.currentType, this.category);
        },
        title: function () {
          var e = this.$store.state.lastClickedDay;
          return !e || this.isDefault ? null : e.maxLunarDay.number + " " + this.constants.moonDay;
        },
        category: function () {
          var e = this.$store.state.lastClickedDay;
          return !e || this.isDefault ? null : m(this.currentType, this.locale, e);
        }
      }),
      methods: {
        openModal: function () {
          this.$refs.modal.open();
        },
        dayClickHandler: function () {
          return this.isDefault ? n.i(d.a)(this) : n.i(d.b)(this);
        },
        isColoredHandler: function () {
          return this.user && this.user.tasksOnCalendar && this.user.tasksOnCalendar.length > 0 ? h.d : ["lucky", "fishing"].includes(this.currentType) ? y(this.currentType, this.locale) : function () {
            return !1;
          };
        },
        goToPromo: function () {
          this.$ga.page(this.promo.virtualPage), this.modal.close(), this.$router.push({
            name: "promo-page"
          });
        }
      },
      mounted: function () {
        n.i(o.a)("calendar-container"), _$1.window.onresize = function () {
          n.i(o.a)("calendar-container");
        };
      }
    };
  };

  var _1q = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2);
    t.a = {
      props: {
        mdTitle: _$1.String,
        mdOkText: {
          type: _$1.String,
          default: "Ok"
        },
        onClose: {
          type: _$1.Function,
          default: function () {}
        }
      },
      data: function () {
        return {
          debounce: !1,
          rate: 0,
          feedbackText: "",
          id: null
        };
      },
      computed: r()({}, n.i(i.b)(["constants"])),
      methods: r()({}, n.i(i.a)(["sendReview"]), {
        fireCloseEvent: function () {
          this.debounce || (this.$emit("close"), this.onClose());
        },
        open: function () {
          this.$emit("open"), this.debounce = !1, this.$refs.dialog.open();
        },
        close: function () {
          this.fireCloseEvent(), this.debounce = !0, this.$refs.dialog.close();
        },
        send: function () {
          var e = this;
          this.sendReview({
            rate: this.rate,
            feedback: this.feedbackText,
            id: this.id
          }).then(function (t) {
            e.id = +t.id;
          });
        }
      })
    };
  };

  var _1r = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2);
    t.a = {
      props: {
        mdTitle: _$1.String,
        mdOkText: {
          type: _$1.String,
          default: "Ok"
        },
        onClose: {
          type: _$1.Function,
          default: function () {}
        }
      },
      data: function () {
        return {
          debounce: !1,
          DELAY: 6e4,
          STORAGE_KEY: "clickToPromoPopup_1"
        };
      },
      computed: r()({}, n.i(i.b)(["constants", "locale", "user"])),
      methods: {
        fireCloseEvent: function () {
          this.debounce || (this.$emit("close"), this.onClose());
        },
        open: function () {
          this.$emit("open"), this.debounce = !1, this.$refs.dialog.open();
        },
        close: function () {
          this.fireCloseEvent(), this.debounce = !0, this.$refs.dialog.close(), this.setFlag();
        },
        goToPromo: function () {
          this.close(), this.$router.push({
            name: "promo-page"
          }), this.setFlag();
        },
        canOpen: function () {
          return !this.getFlag() && "ru" === this.locale && !this.user;
        },
        getFlag: function () {
          return _$1.window.localStorage.getItem(this.STORAGE_KEY);
        },
        setFlag: function () {
          return _$1.window.localStorage.setItem(this.STORAGE_KEY, "true");
        }
      },
      mounted: function () {}
    };
  };

  var _1s = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2);
    t.a = {
      props: {
        mdTitle: _$1.String,
        mdOkText: {
          type: _$1.String,
          default: "Ok"
        }
      },
      data: function () {
        return {
          debounce: !1,
          weekDay: null
        };
      },
      computed: r()({}, n.i(i.b)(["weekDays"])),
      methods: {
        fireCloseEvent: function () {
          this.debounce || this.$emit("close");
        },
        open: function (e) {
          this.$emit("open"), this.debounce = !1, this.weekDay = this.weekDays[e], this.$refs.dialog.open();
        },
        close: function () {
          this.fireCloseEvent(), this.debounce = !0, this.$refs.dialog.close();
        }
      }
    };
  };

  var _1t = function (e, t, n) {
    "use strict";

    var a = n(64),
        r = n.n(a),
        i = n(63),
        s = n.n(i),
        o = n(1),
        u = n.n(o),
        l = n(495),
        c = n.n(l),
        d = n(2);
    t.a = {
      name: "avatar",
      data: function () {
        return {
          crop: {},
          file: {},
          isSuccesUpload: !1,
          showedCancel: !1,
          errorMsg: ""
        };
      },
      props: ["title"],
      computed: u()({}, n.i(d.b)(["constants"])),
      methods: u()({}, n.i(d.a)(["putAvatar"]), {
        cancelCrop: function () {
          this.file = {};
        },
        imgOnload: function () {
          var e = this.$refs.avatar || _$1.document.getElementById("avatar");

          this.crop = new c.a(e, {
            enableExif: !0,
            viewport: {
              width: 200,
              height: 200,
              type: "circle"
            },
            boundary: {
              width: 300,
              height: 300
            }
          });
        },
        onChange: function (e) {
          e.name.match(/.(jpg|jpeg|png|gif)$/i) ? (this.file = e, this.isSuccesUpload = !1, _$1.setTimeout(this.imgOnload, 1)) : this.errorMsg = this.constants.mustBeImage;
        },
        sendToServer: function () {
          var e = this;
          return s()(r.a.mark(function t() {
            var n;
            return r.a.wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, e.crop.result({
                    type: "blob",
                    circle: !0,
                    size: {
                      width: 512,
                      height: 512
                    }
                  });

                case 3:
                  return n = t.sent, t.next = 6, e.putAvatar(n);

                case 6:
                  e.isSuccesUpload = !0, e.file = {}, t.next = 14;
                  break;

                case 10:
                  t.prev = 10, t.t0 = t.catch(0), e.isSuccesUpload = !1, e.errorMsg = e.constants.uploadingError;

                case 14:
                case "end":
                  return t.stop();
              }
            }, t, e, [[0, 10]]);
          }))();
        }
      })
    };
  };

  var _1u = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2),
        s = n(260),
        o = n(118),
        u = n(3),
        l = n.n(u);
    t.a = {
      name: "biorhythms",
      data: function () {
        return {};
      },
      components: {},
      beforeRouteEnter: function (e, t, a) {
        n.i(o.a)("biorhythms") || a();
      },
      computed: r()({}, n.i(i.b)(["constants", "locale", "user"]), {
        biorhythms: function () {
          var e = l.a.unix(+this.user.birthday);
          return n.i(s.a)(e);
        },
        columns: function () {
          return [{
            type: "string"
          }, {
            type: "number",
            label: this.constants.physicalBio
          }, {
            type: "number",
            label: this.constants.emotionalBio
          }, {
            type: "number",
            label: this.constants.intellectualBio
          }];
        },
        rows: function () {
          var e = this,
              t = this.biorhythms,
              n = t.physical,
              a = t.emotional,
              r = t.intellectual;
          return n.map(function (t, i) {
            return [t.date.locale(e.locale).format("D ddd"), n[i].per, a[i].per, r[i].per];
          });
        },
        options: function () {
          return {
            legend: "bottom",
            vAxis: {
              viewWindowMode: "explicit",
              minValue: -100,
              maxValue: 100
            },
            hAxis: {
              showTextEvery: 1
            },
            height: "500",
            width: "100%",
            curveType: "function",
            tooltip: {
              isHtml: !0
            },
            chartArea: {
              bottom: 125,
              top: 50,
              width: "90%",
              height: "100%"
            }
          };
        }
      }),
      methods: {},
      created: function () {
        var e = this;

        _$1.window.addEventListener("resize", function () {
          var t = e.$refs.bioChart;
          _$1.console.log(t), t.drawChart();
        });
      }
    };
  };

  var _1v = function (e, t, n) {
    "use strict";

    var a = n(713),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1w = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2),
        s = n(104),
        o = n.n(s),
        u = n(117),
        l = n(66),
        c = n(3),
        d = n.n(c);
    t.a = {
      name: "calc",
      components: {
        DaytimePicker: o.a
      },
      data: function () {
        return {
          day: "",
          cities: "",
          selectCity: null,
          loading: !1,
          isCityValid: !0
        };
      },
      computed: r()({}, n.i(i.b)(["constants", "locale", "axios"])),
      methods: {
        loadCities: function (e) {
          var t = this;
          e && e.length > 2 ? (this.loading = !0, function () {
            t.axios.get("/public/cities/" + t.locale + "/" + e).then(function (e) {
              var n = e.data;
              t.cities = n, t.loading = !1;
            });
          }()) : (this.cities = [], this.loading = !1);
        },
        calculate: function () {
          if (!this.selectCity) return void (this.isCityValid = !1);

          if (!this.$redirectToPromo("calc")) {
            this.isCityValid = !0;
            var e = d.a.unix(_$1.parseInt(this.day)),
                t = this.selectCity,
                a = n.i(u.a)(e, this.locale, _$1.parseInt(t.latitude), _$1.parseInt(t.longitude));
            a.showedLunarDay = e.isBetween(a.lunarDays[0].start, a.lunarDays[0].end) ? a.lunarDays[0] : a.lunarDays[1], n.i(l.a)(this)(a, {
              isShowBirthday: !0
            });
          }
        }
      },
      created: function () {}
    };
  };

  var _1x = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2);
    t.a = {
      name: "categoriesPicker",
      props: ["title", "value"],
      data: function () {
        return {
          selectedCategories: []
        };
      },
      watch: {
        selectedCategories: function () {
          this.$emit("input", this.selectedCategories);
        }
      },
      computed: r()({}, n.i(i.b)(["calendarTypes", "constants"]), {
        allCategories: function () {
          return this.calendarTypes.filter(function (e) {
            return "default" !== e.name;
          });
        }
      }),
      created: function () {
        this.selectedCategories = [].concat(this.value);
      }
    };
  };

  var _1y = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2),
        s = n(630),
        o = n.n(s),
        u = n(3),
        l = n.n(u);
    t.a = {
      name: "daytimePicker",
      props: ["title", "value"],
      data: function () {
        return {
          year: null,
          day: null,
          month: null,
          time: null
        };
      },
      watch: {
        year: function () {
          this.updateFullDate();
        },
        day: function () {
          this.updateFullDate();
        },
        month: function () {
          this.updateFullDate();
        },
        time: function () {
          this.updateFullDate();
        }
      },
      computed: r()({}, n.i(i.b)(["constants"]), {
        locale: function () {
          return this.$store.state.locale;
        },
        years: function () {
          return o()(1945, l()().year() + 1);
        },
        months: function () {
          var e = l()().locale(this.locale).localeData().months();
          return o()(0, 12).map(function (t) {
            return {
              number: t + 1,
              name: e[t]
            };
          });
        },
        days: function () {
          var e = [];

          if (this.month) {
            var t = l()().month(this.month - 1).daysInMonth();
            e = o()(1, t + 1);
          } else e = o()(1, 32);

          return e;
        }
      }),
      methods: {
        updateFullDate: function () {
          var e = l()({
            years: this.year,
            months: this.month - 1,
            days: this.day,
            hours: _$1.parseInt(this.time.split(":")[0] || 0),
            minutes: _$1.parseInt(this.time.split(":")[1] || 0)
          }).unix().toString();
          null !== this.year && null !== this.month && null !== this.day && this.$emit("input", e);
        }
      },
      created: function () {
        var e = this.value ? l.a.unix(_$1.parseInt(this.value)) : l()();
        this.year = e.year(), this.month = e.month() + 1, this.day = e.date(), this.time = l()(e).format("hh:mm");
      }
    };
  };

  var _1z = function (e, t, n) {
    "use strict";

    var a = n(714),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1A = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(30),
        s = n(2),
        o = n(116),
        u = n(121),
        l = n(67),
        c = n(3),
        d = n.n(c);
    t.a = {
      name: "lunar-birthday",
      data: function () {
        return {};
      },
      components: {
        MoonCard: i.a
      },
      computed: r()({}, n.i(s.b)(["constants", "user", "geo", "locale"]), {
        lunarDay: function () {
          var e = this.geo,
              t = e.latitude,
              a = e.longitude,
              r = d.a.unix(+this.user.birthday),
              i = n.i(o.a)(r, t, a);
          return r.isBetween(d()(i[0].start), d()(i[0].end)) ? i[0] : i[1];
        },
        lunarBirthdayContent: function () {
          var e = this,
              t = this.lunarDay;
          return n.i(u.a)(t.number).map(function (t) {
            return t[e.locale];
          });
        },
        mainDayContent: function () {
          var e = this.lunarDay;
          return n.i(l.a)(e.number, this.locale).main;
        },
        subtitle: function () {
          var e = this.lunarDay;
          return {
            ru: "Вы родились в " + e.number + " лунный день.",
            en: "You were born on the " + e.number + " lunar day."
          }[this.locale];
        }
      }),
      methods: {},
      created: function () {}
    };
  };

  var _1B = function (e, t, n) {
    "use strict";

    var a = n(70),
        r = n.n(a),
        i = n(10),
        s = n.n(i),
        o = n(18),
        u = n.n(o),
        l = n(1),
        c = n.n(l),
        d = n(712),
        h = n.n(d),
        p = n(181),
        f = n.n(p),
        g = n(104),
        m = n.n(g),
        y = n(2),
        b = n(68),
        v = n(3),
        w = n.n(v);
    t.a = {
      name: "profile",
      components: {
        AvatarUploader: h.a,
        CategoriesPicker: f.a,
        DaytimePicker: m.a
      },
      data: function () {
        return {
          newUser: {
            name: {
              model: "",
              error: !1,
              validator: function (e) {
                return e.length > 0;
              }
            },
            surname: {
              model: "",
              error: !1
            },
            birthday: {
              model: "",
              error: !1,
              validator: function (e) {
                return w.a.unix(_$1.parseInt(e)).isValid();
              }
            },
            email: {
              model: "",
              error: !1
            },
            password: {
              model: "",
              error: !1
            },
            newPassword: {
              model: "",
              error: !1,
              validator: function (e) {
                return !e || e.length > 7;
              }
            },
            categories: {
              model: [],
              error: !1,
              validator: function (e) {
                return e.length > 0;
              }
            }
          }
        };
      },
      computed: c()({}, n.i(y.b)(["constants", "user"])),
      methods: c()({}, n.i(y.c)([b.a.SET_USER]), n.i(y.a)(["updateUser"]), {
        save: function () {
          this.$refs.daytimePicker.isValid();
        },
        validate: function () {
          var e = this,
              t = !0;
          return u()(this.newUser).forEach(function (n) {
            var a = !e.newUser[n].validator || e.newUser[n].validator(e.newUser[n].model);
            e.newUser[n].error = !a, t = t && a;
          }), t;
        },
        submit: function () {
          var e = this;
          this.validate() && this.updateUser(this.newUserUpdated()).then(function () {
            e.$notify({
              title: e.constants.successTitle,
              message: e.constants.successMsg,
              type: "success"
            });
          }).catch(function () {
            e.$notify({
              title: e.constants.oopsTitle,
              message: e.constants.oopsMsg,
              type: "error"
            });
          });
        },
        newUserUpdated: function () {
          _$1.console.log("NEW USER");

          var e = this.newUser,
              t = u()(e).reduce(function (t, n) {
            return s()(t, r()({}, n, e[n].normalizer ? e[n].normalizer(e[n].model) : e[n].model));
          }, {});
          return t.newPassword && (t.password = t.newPassword), delete t.newPassword, _$1.console.log(t), t;
        }
      }),
      created: function () {
        var e = this,
            t = s()({}, this.user);
        u()(t).forEach(function (n) {
          n in e.newUser && (e.newUser[n].model = t[n]);
        });
      }
    };
  };

  var _1C = function (e, t, n) {
    "use strict";

    var a = n(715),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1D = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2);
    t.a = {
      name: "personal-sidenav",
      data: function () {
        return {};
      },
      components: {},
      computed: r()({}, n.i(i.b)(["userAvatar", "constants", "user"])),
      methods: {
        goToProfile: function () {
          this.$router.push({
            name: "profile"
          });
        },
        logOut: function () {
          _$1.localStorage.setItem("TOKEN", ""), _$1.location.reload();
        }
      },
      created: function () {}
    };
  };

  var _1E = function (e, t, n) {
    "use strict";

    var a = n(18),
        r = n.n(a),
        i = n(1),
        s = n.n(i),
        o = n(30),
        u = n(2),
        l = n(69);
    t.a = {
      name: "TodoList",
      data: function () {
        return {
          activeNames: ["1"],
          tasks: n.i(l.a)(),
          persent: 0,
          isCalculation: !1,
          status: ""
        };
      },
      components: {
        MoonCard: o.a
      },
      methods: s()({}, n.i(u.a)(["updateUser"]), {
        runProgressbar: function () {
          var e = this;
          this.isCalculation = !0, function t() {
            e.persent >= 100 ? (e.status = "success", _$1.setTimeout(function () {
              e.isCalculation = !1, e.persent = 0, e.status = "", e.$router.replace({
                name: "todo-my",
                params: {
                  canSave: !0
                }
              }), e.$destroy();
            }, 1e3)) : (e.persent += 10, _$1.setTimeout(t, 200));
          }();
        },
        saveTasks: function () {
          var e = this;

          if (!this.$redirectToPromo("todo")) {
            var t = this.getSelected();
            n.i(l.b)(t).then(function () {
              return e.runProgressbar();
            });
          }
        },
        getSelected: function () {
          var e = this,
              t = [];
          return this.categories.forEach(function (n) {
            t = t.concat(e.tasks[n].filter(function (e) {
              return !!e.selected;
            }));
          }), t;
        }
      }),
      computed: s()({}, n.i(u.b)(["constants", "locale", "user"]), {
        categories: function () {
          return r()(this.tasks);
        }
      }),
      created: function () {}
    };
  };

  var _1F = function (e, t, n) {
    "use strict";

    var a = n(716),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1G = function (e, t, n) {
    "use strict";

    var a = n(10),
        r = n.n(a),
        i = n(1),
        s = n.n(i),
        o = n(30),
        u = n(2),
        l = n(3),
        c = n.n(l);
    t.a = {
      name: "TodoMy",
      components: {
        MoonCard: o.a
      },
      data: function () {
        return {
          tasks: []
        };
      },
      props: ["canSave"],
      computed: s()({}, n.i(u.b)(["constants", "locale", "user"]), {
        tasksFrom: function () {
          return c()(this.user.tasksFrom).locale(this.locale).format("D MMMM YYYY").toString();
        }
      }),
      methods: s()({}, n.i(u.a)(["updateUserPartial"]), {
        createNew: function () {
          this.$destroy(), this.$router.replace({
            name: "todo-list"
          });
        },
        formatTaskDate: function (e) {
          return c()(e).locale(this.locale).format("D MMMM, ddd").toString();
        },
        save: function () {
          var e = this,
              t = this.tasks.filter(function (e) {
            return e.checked;
          }).map(function (e) {
            var t = r()({}, e);
            return delete t.checked, t;
          });
          return this.updateUserPartial({
            tasksOnCalendar: t
          }).then(function () {
            return e.$router.push({
              name: "default"
            });
          });
        }
      }),
      created: function () {
        var e = this,
            t = this.$store.getters.tasks.map(function (e) {
          return r()({}, e, {
            checked: !0
          });
        });
        t && 0 !== t.length ? this.tasks = [].concat(t) : (this.$router.replace({
          name: "todo-list"
        }), _$1.setTimeout(function () {
          return e.$destroy();
        }, 1));
      }
    };
  };

  var _1H = function (e, t, n) {
    "use strict";

    var a = n(717),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1I = function (e, t, n) {
    "use strict";

    var a = n(718),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1J = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(30),
        s = n(2),
        o = n(384),
        u = n(119),
        l = n(3),
        c = n.n(l);
    t.a = {
      name: "zodiac-birthday",
      data: function () {
        return {};
      },
      components: {
        MoonCard: i.a
      },
      computed: r()({}, n.i(s.b)(["constants", "user", "locale"]), {
        zodiac: function () {
          var e = c.a.unix(this.user.birthday);
          return n.i(u.a)(e.toDate());
        },
        content: function () {
          return n.i(o.a)(this.zodiac);
        },
        icon: function () {
          return n(183)("./" + this.zodiac + ".png");
        }
      }),
      methods: {},
      created: function () {}
    };
  };

  var _1K = function (e, t, n) {
    "use strict";

    var a = n(720),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1L = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2);
    t.a = {
      name: "promot-btn",
      data: function () {
        return {
          excludePages: ["promo-page", "registration", "thankyou-page"]
        };
      },
      components: {},
      computed: r()({}, n.i(i.b)(["user", "constants"]), {
        isVisible: function () {
          return !(this.excludePages.includes(this.$route.name) || this.user);
        }
      }),
      methods: {
        onClick: function () {
          this.$ga.page("/calendar/vp-gift-btn"), this.$router.push({
            name: "promo-page"
          });
        }
      },
      created: function () {}
    };
  };

  var _1M = function (e, t, n) {
    "use strict";

    var a = n(721),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1N = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2),
        s = n(30),
        o = n(45),
        u = [{
      title: {
        ru: "Бесплатный личный астропрогноз",
        en: "Useful tips on all categories"
      },
      text: {
        ru: "Получите ответ от звезд на любой волнующий вас вопрос: совместимость с партнером, открытие бизнеса, реализация своих талантов и так далее.",
        en: "Get information on all categories you are interested in without any restrictions!"
      },
      url: n(675)
    }, {
      title: {
        ru: "Список Дел",
        en: "To-do list"
      },
      text: {
        ru: "Составьте список Ваших дел и Лунный Календарь сам предложит Вам лучшие даты для их выполнения и, если пожелаете, напомнит Вам о них!",
        en: "Make a list of your to-dos and the Lunar Calendar will independently offer you the best dates for their fulfillment! And, if you wish, remind you of your plans in advance!"
      },
      url: n(676)
    }, {
      title: {
        ru: "Мои Биоритмы",
        en: "My Biorhythms"
      },
      text: {
        ru: "Отслеживайте свое состояние в режиме реального времени - графики Ваших физического, эмоционального и интеллектуального ритмов всегда под рукой!",
        en: "Track your condition real-time with the graphs of your physical, emotional and intellectual rhythms!"
      },
      url: n(677)
    }, {
      title: {
        ru: "Калькулятор Лунных Дней",
        en: "Lunar Days Calculator"
      },
      text: {
        ru: "Какой лунный день был в день свадьбы Ваших родителей? На какой лунный день выпадет рождение Вашего малыша? С Калькулятором лунных дней Вы не ограничены во времени!",
        en: "What lunar day was at the day of your parents' wedding? On which lunar day will the birth of your baby occur? With the Lunar Days Calculator, you are not limited in time!"
      },
      url: n(179)
    }, {
      title: {
        ru: "Посевной Календарь по Знакам Зодиака",
        en: "Sowing Calendar based on the Zodiac Signs"
      },
      text: {
        ru: "Какие растения высаживать в зависимости от Знака Зодиака, в котором находится Луна? Используйте списки овощных, пряно-зеленых, плодово-ягодных, полевых, цветущих и комнатных растений для посадки на каждый день!",
        en: "Which plants to plant, depending on the Zodiac Sign in which the Moon is located? Use the lists of vegetables, spices & greenery, fruit & berry, field crops, flowering and houseplants which are good for planting for every day!"
      },
      url: n(679)
    }, {
      title: {
        ru: "Календарь Зачатия по Знакам Зодиака",
        en: "Conception Calendar based on the Zodiac Signs"
      },
      text: {
        ru: 'Запланируйте пол ребенка заранее! Лунный календарь зачатия всегда подскажет, в "мужском" или "женском" Знаке Зодиака находится Луна',
        en: 'Plan the sex of the baby in advance! Conception lunar calendar always tells you, in which Zodiac Sign the Moon is now - the "male" or "female"'
      },
      url: n(678)
    }, {
      title: {
        ru: "Лунный День Рождения",
        en: "My Lunar Birthday"
      },
      text: {
        ru: "Узнайте, как день лунного цикла, в который Вы родились, повлиял на Вас и на Вашу судьбу. Измените свою жизнь к лучшему, зная свои сильные и слабые стороны!",
        en: "Find out how the day of the lunar cycle into which you were born influenced you and your destiny. Make your life happier by the knowledge of your strengths and weaknesses!"
      },
      url: n(178)
    }, {
      title: {
        ru: "Лунный Знак Зодиака",
        en: "My Lunar Zodiac Sign"
      },
      text: {
        ru: 'Лунный Знак Зодиака не менее влиятелен, чем "Солнечный". Каким будет Ваш лунный гороскоп?',
        en: 'Lunar Zodiac Sign is no less influential than "Solar" one. What will be your lunar horoscope?'
      },
      url: n(180)
    }];
    t.a = {
      name: "promo-page",
      data: function () {
        return {
          pluses: u
        };
      },
      components: {
        MoonCard: s.a,
        PromoActivateBtn: o.a
      },
      computed: r()({}, n.i(i.b)(["constants", "locale", "productInfo", "geo"]), {
        isUSD: function () {
          return this.productInfo && "USD" === this.productInfo.currency;
        },
        isBookShowed: function () {
          return "ru" === this.locale;
        }
      }),
      methods: {
        goToRegistration: function () {
          this.$router.push({
            name: "registration"
          });
        }
      },
      created: function () {
        _$1.window.yaCounter.reachGoal("on_promo");
      }
    };
  };

  var _1O = function (e, t, n) {
    "use strict";

    var a = n(723),
        r = n.n(a),
        i = n(724),
        s = n.n(i),
        o = n(722),
        u = n.n(o);
    n.d(t, "a", function () {
      return r.a;
    }), n.d(t, "c", function () {
      return s.a;
    }), n.d(t, "b", function () {
      return u.a;
    });
  };

  var _1P = function (e, t, n) {
    "use strict";

    var a = n(725),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1Q = function (e, t, n) {
    "use strict";

    var a = n(31),
        r = n.n(a),
        i = n(70),
        s = n.n(i),
        o = n(10),
        u = n.n(o),
        l = n(18),
        c = n.n(l),
        d = n(1),
        h = n.n(d),
        p = n(181),
        f = n.n(p),
        g = n(104),
        m = n.n(g),
        y = n(2),
        b = n(3),
        v = n.n(b);
    t.a = {
      name: "registration",
      data: function () {
        return {
          purchaseForm: {},
          newUser: {
            name: {
              model: "",
              error: !1,
              validator: function (e) {
                return e.length > 0;
              }
            },
            surname: {
              model: "",
              error: !1
            },
            birthday: {
              model: "",
              error: !1,
              validator: function (e) {
                return v.a.unix(_$1.parseInt(e)).isValid();
              }
            },
            email: {
              model: "",
              error: !1,
              validator: function (e) {
                return e.length > 0;
              }
            },
            categories: {
              model: [],
              error: !1,
              validator: function (e) {
                return e.length > 0;
              }
            }
          }
        };
      },
      components: {
        CategoriesPicker: f.a,
        DaytimePicker: m.a
      },
      computed: h()({}, n.i(y.b)(["constants", "axios", "geo", "locale"])),
      methods: {
        validate: function () {
          var e = this,
              t = !0;
          return c()(this.newUser).forEach(function (n) {
            var a = !e.newUser[n].validator || e.newUser[n].validator(e.newUser[n].model);
            e.newUser[n].error = !a, t = t && a;
          }), t;
        },
        getUserModel: function (e) {
          var t = e,
              n = c()(t).reduce(function (e, n) {
            return u()(e, s()({}, n, t[n].normalizer ? t[n].normalizer(t[n].model) : t[n].model));
          }, {});
          return n.locale = this.locale, n.geo = this.geo, n;
        },
        loadform: function () {
          var e = this;
          return this.axios.post("/purchase/checkout", {
            user: this.getUserModel(this.newUser),
            locale: this.geo.country
          }).then(function (e) {
            var t = e.data,
                n = _$1.document.getElementById("hidden-purchase-form");

            return n.innerHTML = t.htmlForm, r.a.resolve(n.children[0]);
          }).catch(function (t) {
            return e.$notify({
              title: e.constants.oopsTitle,
              message: "emailAlreadyExists" === t.response.data ? e.constants.emailAlreadyExists : e.constants.oopsMsg,
              type: "error"
            }), r.a.resolve(null);
          });
        },
        submitForm: function () {
          var e = this;
          this.validate() && this.loadform().then(function (t) {
            t && (e.$ga.page("/calendar/vp-user-registred"), t.submit());
          });
        }
      },
      created: function () {
        _$1.window.yaCounter && _$1.window.yaCounter.reachGoal("on_registration");
      }
    };
  };

  var _1R = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2),
        s = n(3),
        o = n.n(s);
    t.a = {
      name: "reviews",
      data: function () {
        return {
          reviews: []
        };
      },
      methods: r()({}, n.i(i.a)(["getReviews"]), {
        formatDate: function (e) {
          return o()(e).format("HH:mm DD-MM-YYYY");
        }
      }),
      created: function () {
        var e = this;
        this.getReviews().then(function (t) {
          var n = t.data;
          _$1.console.log(n), e.reviews = n;
        });
      }
    };
  };

  var _1S = function (e, t, n) {
    "use strict";

    var a = n(726),
        r = n.n(a);
    n.d(t, "a", function () {
      return r.a;
    });
  };

  var _1T = function (e, t, n) {
    "use strict";

    var a = n(1),
        r = n.n(a),
        i = n(2);
    t.a = {
      name: "thankyou-page",
      data: function () {
        return {};
      },
      components: {},
      computed: r()({}, n.i(i.b)(["constants"])),
      methods: {},
      created: function () {}
    };
  };

  var _1U = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "Удачный день! Cила мысли на пике. Задуманное и запланированное в этот день сильно рискует сбыться :)",
        en: "Lucky day! The power of thought is at the peak. Everything conceived and planned today will come true very likely"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "беседы и выяснение предпочтений партнеров, планирование общего будущего, поездок, покупок и так далее",
        en: "talk about partner's preferences, plan a common future, joint trips, shopping, etc."
      }],
      minus: [{
        ru: "cвадьба. Лучше планировать, но не назначать на этот день свадьбу",
        en: "wedding. It's the best day to plan it, but not good for the wedding itself"
      }]
    },
        i = {
      plus: [{
        ru: "моделирование смены своего образа, выбор новой прически, изучение новых средств ухода и выбор новой косметики",
        en: "considering the new style, choose a new hairstyle and makeup, explore new skin care routines"
      }, {
        ru: "стрижка",
        en: "haircut"
      }, {
        ru: "вегетарианская диета, планирование диеты, очистительных процедур, спортивной программы на месяц вперед ",
        en: "vegetarian diet; diet, cleansing procedures, and the sports program planning for the month ahead"
      }],
      minus: [{
        ru: "алкоголь, кофе и крепкий чай, мясо, грубя и тяжелая пища",
        en: "alcohol, coffee, black tea, meat, rough and heavy meal"
      }, {
        ru: "физическое переутомление, злоупотребление косметологическими процедурами",
        en: "physical exhaustion, overindulgence of cosmetic procedures"
      }]
    },
        s = {
      plus: [{
        ru: "разработка концепции и стратегии",
        en: "development of concepts and strategies"
      }, {
        ru: "постановка целей",
        en: "goals setting"
      }, {
        ru: "определение требований",
        en: "requirements definition"
      }],
      minus: []
    },
        o = {
      plus: [],
      minus: [{
        ru: "клева нет",
        en: "worst day for fishing"
      }]
    },
        u = {
      plus: [{
        ru: "удаление вредителей, сорняков, больных и засохших растений, ветвей и побегов",
        en: "removal of pests, weeds, sick and dead plants, branches and runners"
      }, {
        ru: "прищипка овощных культур",
        en: "pruning vegetables"
      }, {
        ru: "вырезка побегов дикой поросли",
        en: "tenderloin of the new wild runners"
      }],
      minus: [{
        ru: "посадка, посев, прививание",
        en: "plant, sow, inoculate"
      }, {
        ru: "окучивание и рыхление земли",
        en: "hill up plants and hoe the soil"
      }]
    },
        l = {
      plus: [{
        ru: "планирование курса лечения, очистительных процедур",
        en: "planning the treatment course and cleansing procedures"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "планирование бюджета на месяц, меню, покупок",
        en: "plan your budget for the month, the menu, shopping dates"
      }],
      minus: []
    },
        d = {
      plus: [],
      minus: [{
        ru: "любые приобретения, особенно в кредит и в долг",
        en: "any purchases, especially on credit and debt"
      }]
    },
        h = {
      relationship: r,
      beauty: i,
      business: s,
      fishing: o,
      garden: u,
      health: l,
      house: c,
      shopping: d,
      lucky: a
    },
        p = {
      symbol: {
        ru: "Свеча, Лампада, Светильник, Фонарь, Третий глаз",
        en: "Candle, Lamp, Third eye"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "анализ, компромисс, спокойствие, планирование, размышление",
        en: "analysis, compromise, peace, planning, thinking"
      },
      element: {
        ru: "Вода",
        en: "Water"
      },
      direction: {
        ru: "Север",
        en: "North"
      },
      shape: {
        ru: "волнистые линии, ассиметрия, плавность",
        en: "wavy lines, asymmetry"
      },
      stone: {
        ru: "бриллиант, горный хрусталь",
        en: "diamond, rhinestone"
      },
      "сolor": {
        ru: "красный, алый, черный",
        en: "red, scarlet, black"
      }
    };
    t.a = {
      categories: h,
      main: p
    };
  };

  var _1V = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "знакомство с семьей партнера, ее бытом и традициями, разговоры о детских годах, просмотр старых фото",
        en: "first meeting with the partner's family, learn their lifestyle and traditions, talk about the partner's childhood, view old photos"
      }, {
        ru: "свадьба (обещает много детей)",
        en: "wedding (promises many children)"
      }, {
        ru: "праздничный секс; разговор о сексе с ребенком-подростком",
        en: "festive sex; talk about sex with your child-teenager"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "баня, паровые ванны, водные процедуры",
        en: "bath, steam bath, hydrotherapy"
      }, {
        ru: "составление программы по уходу за кожей",
        en: "creating a skin care program"
      }, {
        ru: "стрижка к радости и счастью! Волосы станут расти быстрее",
        en: "haircut brings the joy and happiness! The best day to cut hair for length"
      }, {
        ru: "окрашивание блондинок и тонирование седых волос",
        en: "blonde coloring and gray hair tinting"
      }, {
        ru: "семейный обед с близкими",
        en: "family dinner"
      }, {
        ru: "травяные чаи и натуральные соки, овощные супы и рагу",
        en: "herbal teas and juices, vegetable soups and stews"
      }, {
        ru: "общие групповые тренировки, спортивные игры на воздухе. Все, что сейчас можно сделать для укрепления здоровья всей семьей - лучше сделать!",
        en: "group exercises, sports games. All that can be done to strengthen the health of the entire family"
      }, {
        ru: "активный отдых вместе с ребенком – зарядка, небольшой поход, футбол, все, что угодно",
        en: "the morning exercises and sports games together with child"
      }],
      minus: []
    },
        i = {
      plus: [{
        ru: "обращение к опыту предшественников",
        en: "appealing to the predecessors’ experience"
      }, {
        ru: "создание традиций",
        en: "traditions creation"
      }, {
        ru: "изучение истории вашего дела",
        en: "studying your business' story"
      }, {
        ru: "общение со своими учителями, наставниками; людьми, к результатам которых вы стремитесь",
        en: "chat with the teachers, mentors; people, who have got the results that you're striving to get"
      }, {
        ru: "семейный бизнес",
        en: "family business"
      }, {
        ru: "поощрение работников и их семей",
        en: "encouraging employees and their families"
      }, {
        ru: "укрепление престижа компании",
        en: "strengthening the company's prestige"
      }],
      minus: []
    },
        s = {
      plus: [{
        ru: "хороший клев",
        en: "good day for fishing"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "уборка урожая, предназначенного для дальнейшего длительного хранения",
        en: "harvest the plants, that are intended for further long-term storage"
      }, {
        ru: "уборка надземных плодов и зелени, готовых к употреблению",
        en: "harvesting aboveground fruits and herbs, ready-to-eat"
      }, {
        ru: "посадка, посев и пересадка растений",
        en: "planting, sowing and transplanting of plants"
      }, {
        ru: "полив, прививка, удобрение и заготовка черенков",
        en: "watering, inoculation, fertilization and preparing cuttings"
      }],
      minus: [{
        ru: "обрезка деревьев, может плохо сказаться на их здоровье",
        en: "pruning the trees, it can badly affect their health"
      }]
    },
        u = {
      plus: [{
        ru: "начать выработку привычки",
        en: "start building new habits"
      }, {
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "chronic diseases treatment, beginning of the course of medication intake"
      }, {
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamin intake course"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "создание семейных традиций, соберите всех за одним столом",
        en: "create family traditions, gather all relatives at one table"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "семейные покупки: жилье, машина, крупная бытовая техника или покупки, преследующие цель повысить благосостояние вашей семьи",
        en: "family purchases: a house, a car, major appliances, anything aimed at raising of your family's well-being"
      }, {
        ru: "одежда, книги, игрушки, еда для ваших детей",
        en: "clothes, books, toys, food for your children"
      }],
      minus: []
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Фонтан; Источник; Родник",
        en: "The Fountain"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "семья, традиции, строительство, садоводство, сплоченность, домострой, патриархат, укрепление родовых связей, закладка фундамента, возвращение к истокам и своим корням",
        en: "family, traditions, gardening, cohesion, patriarchy, the strengthening of tribal ties, foundation, return to the origins"
      },
      element: {
        ru: "Вода",
        en: "Water"
      },
      direction: {
        ru: "Север",
        en: "North"
      },
      shape: {
        ru: "волнистые линии, плавные переходы, ассиметрия",
        en: "wavy lines, asymmetry"
      },
      stone: {
        ru: "янтарь, цваровит, оливин-хризолит, сардоникс",
        en: "amber, olivine, beryl, onyx"
      },
      "сolor": {
        ru: "желтый, золотой, янтарный, лимонный, шафранный и охра",
        en: "yellow, gold, amber, lemon, saffron and ocher"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _1W = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "Удачный день! Задуманное сегодня сбудется, если искренне верить в это. Осуществление мечты приблизит ее тщательная визуализация",
        en: "Lucky day! The wish conceived today will come true, if you sincerely believe in it. The thorough visualization will help"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "не давайте ни партнеру, ни себе сомневаться в собственных силах",
        en: "Don't doubt in your own abilities and help your partner not to doubt too"
      }, {
        ru: "секс - чем больше, тем лучше; спонтанный, экстравагантный, но основанный на обоюдном желании и любви",
        en: "sex - the more, the better; spontaneous, extravagant, but based on a mutual desire and love"
      }],
      minus: [{
        ru: "свадьба",
        en: "wedding"
      }]
    },
        i = {
      plus: [{
        ru: "очищение",
        en: "cleansing"
      }, {
        ru: "начало цикла процедур интенсивного воздействия масок",
        en: "start of the cycle of procedures devoted to intensive exposure of masks"
      }, {
        ru: "уход за руками и ногами",
        en: "hands and feet care"
      }, {
        ru: "окрашивание волос для брюнеток",
        en: "hair coloring and hair extension for the brunettes"
      }, {
        ru: "питание в зависимости от желаний организма и самочувствия",
        en: "listen to your body and follow its wishes in food"
      }, {
        ru: "различные активные упражнения, тренировки",
        en: "various active exercises"
      }, {
        ru: "цигунические упражнения, а также терапевтические практики, включающие в себя работу с энергией кундалини",
        en: "Chi Kung exercises and therapeutic practices, including the work with kundalini"
      }, {
        ru: "проработка сухожилий. Статические упражнения, в особенности, включающие в себя работу с дыханием",
        en: "focus on tendons. More static exercises, especially breathing"
      }, {
        ru: "разгрузочный день, вода и соки; новый уровень программ, начатых в начале месяца",
        en: "fasting day, water and juice; a new level of programs initiated in the beginning of the month"
      }],
      minus: [{
        ru: "прыжки в воду, плавание на байдарках",
        en: "diving, kayaking"
      }]
    },
        s = {
      plus: [{
        ru: "активные действия в бизнесе",
        en: "active actions in business"
      }, {
        ru: "финансовые операции",
        en: "financial operations"
      }, {
        ru: "риск с верой в удачу",
        en: "the risk with the faith in luck"
      }, {
        ru: "заключение контрактов",
        en: "making agreements"
      }, {
        ru: "вступление в новую должность",
        en: "start working on the new post"
      }, {
        ru: "начало политической карьеры, строительства",
        en: "the beginning of political career"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "хороший клев",
        en: "good day for fishing"
      }],
      minus: []
    },
        u = {
      plus: [{
        ru: "уборка урожая культур, плоды которых созревают над землей: зелень, бахчевые и плодовые культуры, листовые овощи, ягодные кустарники, фрукты",
        en: "harvesting plants, which fruits ripen above the ground: greenery, melons, leafy vegetables, berry bushes, fruits"
      }, {
        ru: "посадка, пересадка, укоренение, черенкование, прореживание",
        en: "planting, transplanting, rooting cuttings, thinning "
      }, {
        ru: "обрезка, пасынкование, прищипка, подкормка растений",
        en: "pruning, breeding, fertilizing plants"
      }, {
        ru: "посадка растений, у которых пригодной в пищу является надземная часть: тыква, огурцы, кабачки, томаты, дыня, баклажаны, кукуруза, подсолнечник, лекарственные растения, цветочные культуры",
        en: "planting plants with the edible aboveground part: pumpkin, cucumbers, tomatoes, melon, corn, sunflowers, herbs, flowers"
      }, {
        ru: "обработка почвы, рыхление",
        en: "soil treatment, hoeing"
      }, {
        ru: "обильный полив",
        en: "abundant watering"
      }],
      minus: [{
        ru: "уборка листвы и ботвы",
        en: "haulm and leaves picking"
      }, {
        ru: "обрезка плодовых деревьев",
        en: "pruning of fruit trees"
      }]
    },
        l = {
      plus: [{
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "chronic diseases treatment, beginning of the course of medication intake"
      }, {
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamin intake course"
      }, {
        ru: "новый уровень программ, начатых в начале месяца",
        en: "new level of the programs initiated in the beginning of lunar month"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "начало любого строительства",
        en: "the beginning of the building process"
      }, {
        ru: "приобретение, установка, ремонт осветительных систем и приборов, камина, плиты",
        en: "purchase, installation, repair the lighting systems and appliances, fireplaces, stoves"
      }],
      minus: []
    },
        d = {
      plus: [{
        ru: "предметы, связанные с огнем: петарды, печи, газовые горелки, свечи, осветительные приборы и лампочки к ним, сварочные аппараты, зажигалки",
        en: "all objects related to fire: firecrackers, stoves, gas burners, candles, lighting fixtures and bulbs to them, cigarette lighters"
      }],
      minus: [{
        ru: "предметы, направленные на тушение огня",
        en: "items designed for fire fighting"
      }]
    },
        h = {
      relationship: r,
      beauty: i,
      business: s,
      fishing: o,
      garden: u,
      health: l,
      house: c,
      shopping: d,
      lucky: a
    },
        p = {
      symbol: {
        ru: "Корона, Пламенный Меч, Огненная Змея, Лабиринт, Хребет",
        en: "Crown, Flaming Sword, Fire Snake"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "самоконтроль, концентрация на цели, управление энергией, честность с самим собой, реальное оценивание своих сил, повышенная энергетика, непредсказуемость реакций в межличностных отношениях, напористость",
        en: "self-control, focus on goals, energy management, honestly with yourself, the real estimation of the forces, increased energy, unpredictable reactions in interpersonal relations, assertiveness"
      },
      element: {
        ru: "Огонь, Земля",
        en: "Fire, Earth"
      },
      direction: {
        ru: "Юго-Запад",
        en: "Southwest"
      },
      shape: {
        ru: "квадрат, горизонтальный прямоугольник",
        en: "square, horizontal rectangle"
      },
      stone: {
        ru: "огненный опал, гематит, сердолик",
        en: "fire opal, hematite, carnelian"
      },
      "сolor": {
        ru: "зеленый, малахитовый и изумрудный",
        en: "green, malachite and emerald"
      }
    };
    t.a = {
      categories: h,
      main: p
    };
  };

  var _1X = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "расскажите, как и за что вы благодарны партнеру",
        en: "tell the partner how grateful you are to him/her, and for what exactly"
      }, {
        ru: "помогите любимому, пожалейте, будьте особенно заботливы сегодня",
        en: "help your loved one, be very attentive today"
      }, {
        ru: "свадьба",
        en: "wedding"
      }, {
        ru: "секс максимально духовный",
        en: "spiritual, exalted sex"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "начало курса ампелотерапии (лечения виноградом или виноградным соком) и сокотерапии - показаны все овощные и фруктовые соки, за исключением яблочного",
        en: "the ampelotherapy (treatment with grapes or grape juice) and juice therapy - all the vegetable and fruit juices, with the exception of cider"
      }, {
        ru: "много питья, увлажняющие процедуры для кожи",
        en: "a lot of drinking, skin moisturizing"
      }, {
        ru: "орехи, семечки, овощи",
        en: "nuts, seeds, vegetables"
      }, {
        ru: "психофизические практики, йога и цигун",
        en: "psychophysical practices, yoga, and Chi Kung"
      }, {
        ru: "массаж, сеансы ароматерапии и групповой медитации, проработка сердечной чакры, селезенки",
        en: "massage, aromatherapy and group meditation, work with the heart chakra, the spleen"
      }, {
        ru: "активные упражнения должны быть уравновешены растягивающими и расслабляющими элементами",
        en: "active exercises must be balanced by stretching and relaxing elements"
      }],
      minus: [{
        ru: "мясо, никотин, алкоголь, яйца, рыба",
        en: "meat, nicotine, alcohol, eggs, fish"
      }]
    },
        i = {
      plus: [{
        ru: "спонсорство духовных и волонтерских организаций, благотворительность",
        en: "sponsorship of religious and volunteer organizations, charity"
      }, {
        ru: "расстановка приоритетов",
        en: "prioritization"
      }, {
        ru: "поощрение сотрудников",
        en: "encouraging employees"
      }, {
        ru: "проведение акций, скидок, подарков",
        en: "offer discounts, gifts to the customers"
      }],
      minus: []
    },
        s = {
      plus: [{
        ru: "хороший клев",
        en: "good day for fishing"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "уборка урожая плодов, которые не предназначены для зимних заготовок",
        en: "harvesting fruit plants that are not intended for the canning"
      }, {
        ru: "посадка, посев, пересадка зелени, плодовых, бахчевых культур, листовых овощей, ягодных кустарников, клубники, плодовых деревьев",
        en: "planting, sowing, transplanting herbs, melons, leafy vegetables, berry bushes, strawberries, fruit trees"
      }, {
        ru: "обработка земли, обрезка, черенкование, укоренение клубничных и других усов, пасынкование, прореживание, сбор семян, обрезка, прищипка, пикирование",
        en: "soil treatment, pruning, rooting of strawberry and other runners, breeding, thinning, seeds picking"
      }],
      minus: [{
        ru: "обрезка плодовых деревьев, т.к. растения могут истечь соком и погибнуть",
        en: "pruning the fruit trees may lead to their death"
      }]
    },
        u = {
      plus: [{
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "chronic diseases treatment, beginning of the course of medication intake"
      }, {
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamin intake course"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "подарки близким",
        en: "make gifts to the loved ones"
      }, {
        ru: "волонтерство – отдайте нуждающимся не нужную вам одежду, игрушки",
        en: "give your old clothes and toys to somebody who really need it"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "книги по духовному развитию -  священные тексты, такие как Коран, Библия; трактаты по психологии",
        en: "books devoted to the spiritual development - the sacred texts such as the Quran, the Bible; treatises on psychology, etc."
      }],
      minus: []
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Магическая Чаша, Череп, Сердце, Чаша Грааля",
        en: "Magic Bowl, Heart, Grail"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "встреча со своей истинной природой, выбор между материальным миром и духовным, достижение чувства единения со Вселенной, альтруистическая деятельность, благодарность, мудрость, восстановление взаимопонимания",
        en: "meeting with your true nature, the choice between the material world and the spiritual, a sense of unity with the universe, altruistic activities, gratitude, wisdom"
      },
      element: {
        ru: "Дерево",
        en: "Wood"
      },
      direction: {
        ru: "Восток",
        en: "East"
      },
      shape: {
        ru: "вертикальный прямоугольник",
        en: "vertical rectangle"
      },
      stone: {
        ru: "лазурит, желтый коралл, перламутр, розовый жемчуг",
        en: "lapis lazuli, yellow, coral, pink pearl"
      },
      "сolor": {
        ru: "голубой, морской волны и лазоревый",
        en: "blue, aqua and azure"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _1Y = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "свадьба ученых, исследователей, студентов",
        en: "wedding of the scientists, researchers and students"
      }, {
        ru: "секс новаторский, активный, до изнурения, экзотический",
        en: "innovative, active, exotic sex until exhaustion"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "омоложение кожи, волос, всего организма. Все лекарства, мази и кремы будут действовать сильнее, чем обычно",
        en: "skin, hair and entire body rejuvenation. All medicines, ointments, and creams will act more strongly than usual"
      }, {
        ru: "стрижка изменит в лучшую сторону всю вашу жизнь! Волосы станут расти быстрее",
        en: "haircut will positively change your life! The best day to cut hair for length"
      }, {
        ru: "фрукты, овощи, соки, каши из цельных круп, морепродукты. Это время кулинарных поисков и открытий! Пробовать можно все, но понемногу",
        en: "fruit and vegetables, juices, cereals from whole grains, seafood. This is a time of culinary explorations and discovery"
      }, {
        ru: "групповые тренировки",
        en: "group exercises"
      }, {
        ru: "внесение корректировок в оздоровительные программы, с поправкой на собственное состояние",
        en: "adjustments in wellness programs, depending on the current state"
      }],
      minus: [{
        ru: "голодание",
        en: "fasting"
      }]
    },
        i = {
      plus: [{
        ru: "внесение корректив в работу и бизнес, рационализация бизнеса",
        en: "adjustments to the work and business, business rationalization"
      }, {
        ru: "установление связей между маленькой и глобальной целью",
        en: "establish links between a small and a global goal"
      }, {
        ru: "строительство круглых объектов",
        en: "construction of round objects"
      }, {
        ru: "командировки",
        en: "business trips"
      }, {
        ru: "изменение привычек",
        en: "changing habits"
      }, {
        ru: "анализ потенциала",
        en: "capacity analysis"
      }, {
        ru: "обучение, чтение специализированной литературы",
        en: "training, reading the specialized literature"
      }, {
        ru: "поиск новых ресурсов",
        en: "search for new resources"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "слабый клев",
        en: "middling day"
      }]
    },
        o = {
      plus: [{
        ru: "уборка урожая культур, у которых пригодной в пищу является верхняя надземная часть: бобовые, огурцы, томаты, перец, кабачки, баклажаны, кукуруза, подсолнечник, цветы и лекарственные растения",
        en: "harvest the plants with edible above ground parts: beans, cucumbers, tomatoes, peppers, zucchini, corn, sunflower, flowers and medicinal herbs"
      }, {
        ru: "посев, посадка, пересадка, черенкование, укоренение черенков и усов, а так же обработка земли",
        en: "sowing, planting, transplanting, breeding, rooting of cuttings and runners, soil treatment"
      }, {
        ru: "прививка, перепрививка",
        en: "inoculation"
      }, {
        ru: "сбор семян, они дадут хорошие всходы и богатый урожай",
        en: "seeds picking, they will give a good harvest"
      }, {
        ru: "работа с корнями, в этот день они мало реагируют на любые повреждения",
        en: "work with the roots, they aren't sensitive to any damage now"
      }, {
        ru: "полив и прикормка",
        en: "watering and fertilizing"
      }],
      minus: [{
        ru: "обрезка деревьев и прищипка",
        en: "pruning plants"
      }, {
        ru: "уборка ботвы и листвы",
        en: "haulm and leaves picking"
      }]
    },
        u = {
      plus: [{
        ru: "пластические операции, профилакитка и протезирование зубов, косметические процедуры",
        en: "plastic surgery, dental deseases prevention, getting dentures, cosmetic procedures"
      }, {
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "chronic diseases treatment, beginning of the course of medication intake"
      }, {
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamin intake course"
      }, {
        ru: "очищение печени",
        en: "liver cleansing"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "выпечка, особенно круглой формы – пироги, печенья и так далее",
        en: "baking, especially the round forms - cakes, cookies, etc."
      }, {
        ru: "время кулинарных поисков и открытий",
        en: "time for the culinary exploration and discovery"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "покупки успешны при условии неспешности выбора, внимания к качеству, консультации с экспертом. Совершайте стильные и оригинальные покупки в этот день",
        en: "purchase will be successful in case of the deliberate choice, with attention to quality and consultations with an expert. Make stylish and original purchases today!"
      }],
      minus: []
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Колесо; Змея, глотающая свой хвост, Диск",
        en: "Wheel; the Snake swallowing its own tail"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "повышение осознанности, установление связи между маленькой и глобальной целью, преодоление эгоизма, дополнительный источник энергии, изменение мнения о себе, коррекция судьбы",
        en: "raising awareness, establishing a connection between a small and a global goal, selfishness overcoming, an additional source of energy, correction the fate"
      },
      element: {
        ru: "Дерево",
        en: "Wood"
      },
      direction: {
        ru: "Юго-Восток",
        en: "Southeast"
      },
      shape: {
        ru: "вертикальный прямоугольник",
        en: "vertical rectangle"
      },
      stone: {
        ru: "красный опал, рубин",
        en: "red opal, ruby"
      },
      "сolor": {
        ru: "синий, индиго, ультрамариновый, васильковый и сапфировый",
        en: "blue, indigo, ultramarine, cornflower, and sapphire"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _1Z = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "Удачный день! Риск и активные шаги навстречу мечте",
        en: "Lucky day! Risk and active steps towards the dream"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "свадьба тех, кто давно в отношениях",
        en: "wedding for those who have been in a relationships for a long time"
      }, {
        ru: "попробуйте заняться сексом там, где никогда не занимались, и так, как никогда этого не делали",
        en: "try to have sex at the absolutely new place, and the way you have never had it"
      }],
      minus: [{
        ru: "развод",
        en: "divorce"
      }]
    },
        i = {
      plus: [{
        ru: "очищение от шлаков",
        en: "cleansing from slags"
      }, {
        ru: "аппаратный и вакуумный массажа, массаж шеи",
        en: "vacuum body massage, neck massage"
      }, {
        ru: "уход за кожей лица, питательные маски",
        en: "skin treatment, moisturizing mask"
      }, {
        ru: "покраска волос",
        en: "hair coloring"
      }, {
        ru: "свежая еда, миндаль, фруктовые соки",
        en: "fresh food, almonds, fruit juices"
      }, {
        ru: "увеличение нагрузок на тренировках, предпочтительны активные упражнения, а не статические",
        en: "raising the bar. Prefer the active exercises to the static ones"
      }],
      minus: [{
        ru: "любование своим отражением в зеркале ",
        en: "looking in the mirror"
      }, {
        ru: "косметические процедуры, кроме очистительных",
        en: "cosmetic procedures, except for cleansing"
      }, {
        ru: "эпиляция",
        en: "epilation"
      }, {
        ru: "голодание",
        en: "fasting"
      }]
    },
        s = {
      plus: [{
        ru: "усиленная работа над начатыми проектами",
        en: "strengthening work on ongoing projects"
      }, {
        ru: "корректировка дел (последний шанс в этом лунном месяце все изменить)",
        en: "last chance in this lunar month to make adjustments"
      }, {
        ru: "организационные вопросы",
        en: "organizational matters"
      }, {
        ru: "упорядочивание документации",
        en: "putting documentation in order"
      }],
      minus: []
    },
        o = {
      plus: [],
      minus: [{
        ru: "слабый клев",
        en: "middling day"
      }]
    },
        u = {
      plus: [{
        ru: "полив и подкормка",
        en: "watering and fertilizing"
      }, {
        ru: "работа с землей, пересадка, посадка культур",
        en: "soil treatment, transplanting, planting"
      }, {
        ru: "уборка урожая",
        en: "harvesting"
      }],
      minus: [{
        ru: "обрезка, пикировка, прищипка, прививка и пасынкование растений",
        en: "pruning, inoculation and breeding the plants"
      }]
    },
        l = {
      plus: [{
        ru: "очищение организма",
        en: "cleansing"
      }, {
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamin intake course"
      }, {
        ru: "сухое голодание",
        en: "dry fasting"
      }],
      minus: [{
        ru: "пластические операции",
        en: "plastic surgery"
      }]
    },
        c = {
      plus: [{
        ru: "упорядочивание бумаг, документов",
        en: "put your papers and documents in order"
      }, {
        ru: "подготовка целительных препаратов",
        en: "make the healing drugs"
      }],
      minus: []
    },
        d = {
      plus: [{
        ru: "приобретение вещи, о которой вы мечтаете уже достаточно давно. Осуществите свою мечту или вообще ничего не покупайте!",
        en: "purchase the thing that you have dreamed to purchase for a long time. Just do it today or don't buy nothing at all"
      }],
      minus: []
    },
        h = {
      relationship: r,
      beauty: i,
      business: s,
      fishing: o,
      garden: u,
      health: l,
      house: c,
      shopping: d,
      lucky: a
    },
        p = {
      symbol: {
        ru: "Труба. Это день призыва",
        en: "Pipe. The day of Challenge"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "активность, действенность, уверенность в себе, стремительность, настойчивость, корректировка",
        en: "activity, efficiency, self-confidence, impetuosity, persistence, adjustment"
      },
      element: {
        ru: "Земля",
        en: "Earth"
      },
      direction: {
        ru: "центр, середина, основание",
        en: "center, middle, base"
      },
      shape: {
        ru: "квадрат",
        en: "square"
      },
      stone: {
        ru: "гиацинт",
        en: "hyacinth"
      },
      "сolor": {
        ru: "фиолетовый, лиловый, сиреневый и белый",
        en: "purple, mauve, lilac and white"
      }
    };
    t.a = {
      categories: h,
      main: p
    };
  };

  var _20 = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "Удачный день! Риск и активные шаги навстречу мечте",
        en: "Lucky day! Risk and active steps towards the dream"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "время сделать то, на что долго не решались!",
        en: "time to do something that you did not dare before!"
      }, {
        ru: "свадьба зрелых людей (для молодых неблагоприятно)",
        en: "wedding for the mature people (unfavorable for the youth)"
      }, {
        ru: "секс энергичный, напористый, активный, без излишеств",
        en: "energetic, assertive, active sex with no frills"
      }],
      minus: []
    },
        i = {
      plus: [{
        ru: "фитотерапия",
        en: "phytotherapy"
      }, {
        ru: "отвары и настои калины, клюквы, рябины",
        en: "decoctions and infusions of viburnum, cranberry, mountain ash"
      }, {
        ru: "процедуры, связанные с укреплением волос. Стрижка сделает волосы гуще, объемнее",
        en: "procedures for hair strengthening. Haircut will make your hair thicker"
      }, {
        ru: "эпиляция, корректировка формы бровей, наращивание волос, создание таких причесок, как африканские косички или перманент",
        en: "hair removal, eyebrow shape correction, hair extensions, as well as to create such hairstyles as African braids or perms"
      }, {
        ru: "сдержанность в пище, в косметике (она будет малодейственна), в употреблении жидкостей (возможны отеки)",
        en: "restraint in food, in cosmetics (it will be ineffective anyway), liquids (may cause edema)"
      }, {
        ru: "различные каши, немного мяса, немного калины",
        en: "different cereals, some meat, viburnum"
      }],
      minus: [{
        ru: "несвежие продукты",
        en: "overdue foods"
      }, {
        ru: "шаги по увеличению нагрузок",
        en: "increasing the physical load"
      }]
    },
        s = {
      plus: [{
        ru: "логическое завершение начатого",
        en: "the logical conclusion of the project"
      }, {
        ru: "разумный риск",
        en: "a reasonable risk"
      }, {
        ru: "активные действия в бизнесе",
        en: "more actions in business"
      }],
      minus: []
    },
        o = {
      plus: [],
      minus: [{
        ru: "слабый клев",
        en: "middling day"
      }]
    },
        u = {
      plus: [{
        ru: "рыхление земли, окучивание, подкормка",
        en: "hoeing, hilling, fertilizing"
      }, {
        ru: "уборка урожая",
        en: "harvesting"
      }],
      minus: [{
        ru: "обрезка, пикировка, прищипка, прививка и пасынкование растений",
        en: "pruning, inoculation and breeding the plants"
      }]
    },
        l = {
      plus: [],
      minus: [{
        ru: "удаление, лечение, протезирование зубов",
        en: "dental treatment, teeth removal, getting dentures"
      }]
    },
        c = {
      plus: [],
      minus: [{
        ru: "любые домашние хлопоты",
        en: "any household chores"
      }]
    },
        d = {
      plus: [],
      minus: [{
        ru: "любые покупки, если продавец груб с вами или пытается вас обмануть – перенесите покупку на два дня вперед",
        en: "any purchses, if the seller is rude to you or trying to deceive you - make this purchase two days later"
      }]
    },
        h = {
      relationship: r,
      beauty: i,
      business: s,
      fishing: o,
      garden: u,
      health: l,
      house: c,
      shopping: d,
      lucky: a
    },
        p = {
      symbol: {
        ru: "Змей, шакал (крылатый посредник между Изидой и Озирисом)",
        en: "Snake, Jackal (winged mediator between Isis and Osiris)"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "уверенность, логическое завершение начатого, победа, успех, высшая точка энергетического наполнения, самоконтроль, активная жизненная позиция, астральные войны, аскеза, самодисциплина",
        en: "certainty, the logical conclusion, victory, success, the highest point of the energy, self-control, active life, astral war, austerity, self-discipline"
      },
      element: {
        ru: "Металл",
        en: "Metal"
      },
      direction: {
        ru: "Запад",
        en: "West"
      },
      shape: {
        ru: "круг, овал",
        en: "round, oval"
      },
      stone: {
        ru: "агат, морион, гагат",
        en: "agate, jet"
      },
      "сolor": {
        ru: "красный, алый и черный",
        en: "red, scarlet, black"
      }
    };
    t.a = {
      categories: h,
      main: p
    };
  };

  var _21 = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "совместная ванная, ароматерапия",
        en: "have the bath together, aromatherapy"
      }],
      minus: [{
        ru: "секс",
        en: "sex"
      }]
    },
        r = {
      plus: [{
        ru: "устранение косметических недостатков, удаление бородавок и родинок, пластическе операции",
        en: "elimination of cosmetic defects, removal of warts and moles, plastic surgery"
      }, {
        ru: "уход за лицом и телом, чистки, процедуры аппаратной косметологии",
        en: "face and body care, cleansing, cosmetology procedures will positively reflect on your appearance"
      }, {
        ru: "депиляция; окрашивание, наращивание ногтей",
        en: "depilation, hair coloring, nail extension"
      }, {
        ru: "блюда, сдобренные куркумой или пить молоко, настоянное с куркумой и фенхелем",
        en: "dishes, spiced with turmeric; milk, infused with turmeric and fennel"
      }, {
        ru: "фрукты и овощи, а также простенькие супы и каши из цельного зерна",
        en: "fruit and vegetables, as well as unpretentious soups and porridge of whole grains"
      }, {
        ru: "снижение нагрузки и работа над закреплением уже достигнутых результатов",
        en: "reducing the load; work on consolidating of the already achieved results"
      }, {
        ru: "седативный массаж, йога, растяжка, сидячая медитация",
        en: "sedative massage, yoga, stretching, meditations"
      }],
      minus: [{
        ru: "голодание",
        en: "fasting"
      }, {
        ru: "рыба и мясо",
        en: "fish and meat"
      }, {
        ru: "спиртные напитки и продукты синтетического происхождения, ненатуральные сладости, грибы",
        en: "alcoholic drinks and synthetic products, unnatural sweets, mushrooms"
      }]
    },
        i = {
      plus: [{
        ru: "составление отчетов",
        en: "making reports"
      }, {
        ru: "установление комфорта и покоя в рабочем коллективе",
        en: "care of the comfort and peace in the working team"
      }, {
        ru: "анализ результатов предыдущих действий",
        en: "analysis of the previous actions results"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "слабый клев",
        en: "middling day"
      }]
    },
        o = {
      plus: [{
        ru: "рыхление, окучивание грядок",
        en: "hoeing and hilling"
      }, {
        ru: "удобрение почвы",
        en: "fertilization"
      }, {
        ru: "прополка сорняков",
        en: "weeding"
      }, {
        ru: "опрыскивание растений от вредителей",
        en: "spraying the plants against pests "
      }],
      minus: [{
        ru: "посадка, пасынкование, обрезка, прищипка растений",
        en: "planting, breeding, pruning plants "
      }, {
        ru: "сбор лекарственных растений, т.к. они сегодня не наделены целебными свойствами",
        en: "picking the medicinal plants, as they haven't healing properties now "
      }]
    },
        u = {
      plus: [{
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamin intake course"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "уют и комфорт и все, что им способствует – зажгите аромалампу, свечи, перестелите постель",
        en: "make your home cozy and comfortable with all that it contributes - aroma lamps, candles, fresh sheets"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "планирование покупки - изучение характеристик желанного товара, отзывов о нем в рекламных проспектах, в Интернете, беседы с экспертами в данной области; или же, при возможности, пробный срок",
        en: "purchase planning - learn desired characteristics of the goods, read reviews, ask experts in the field; or, if possible, get it for a trial period"
      }],
      minus: [{
        ru: "собственно покупки",
        en: "all purchases"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Бабочка; Голубь; Лестница к Небесам; Душа-Психея",
        en: "Butterfly; Dove; Stairway to Heaven"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "спад напряженности, подготовка к полноценному отдыху, нанесение последних штрихов, анализ пройденного пути, установление гармонии между собой и достигнутым результатом",
        en: "preparation for proper rest, applying the finishing touches, the analysis of the traversed path, establishing harmony between yourself and the result achieved"
      },
      element: {
        ru: "Металл",
        en: "Metal"
      },
      direction: {
        ru: "Северо-Запад",
        en: "Northwest"
      },
      shape: {
        ru: "круг, спираль",
        en: "circle, spiral"
      },
      stone: {
        ru: "шпинель, турмалин, изумруд, жемчуг (не черный)",
        en: "spinel, tourmaline, emerald, pearl (other than black)"
      },
      "сolor": {
        ru: "оранжевый, каштановый, шоколадный и коричневый; белый, серебристый, голубой",
        en: "orange and chocolate brown; white, silver, blue"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _22 = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "сходите вместе на вечеринку, мероприятие (веселое!), оторвитесь!",
        en: "visit the big party, cheerful event, have fun!"
      }, {
        ru: "cвадьба очень веселая и роскошная",
        en: "the cheerful and luxurious wedding"
      }, {
        ru: "секс - чем больше тем лучше, тантрический, на природе; нельзя сдерживаться; групповой",
        en: "sex - the more the better, tantric, on the fresh air; don't hide your strange desires!"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "ампелотерапия - лечение виноградным соком",
        en: "ampelotherapy - treatment with the grape juice"
      }, {
        ru: "начало занятий в зале - аэробики, фитнеса или любого другого вида занятий в группе",
        en: "the beginning of aerobic classes, fitness or any other kind of group lessons"
      }, {
        ru: "стрижка (привлечет добрых духов)",
        en: "haircut on this day will draw the kind spirits"
      }, {
        ru: "праздничный стол, ритуальное блюдо этого дня, красное вино",
        en: "festive table, the ritual meal of the day, red wine"
      }, {
        ru: "успокоительные массажи, расслабление",
        en: "soothing massages, relaxation"
      }],
      minus: []
    },
        i = {
      plus: [{
        ru: "презентации, рекламные кампании",
        en: "presentations, advertising campaigns"
      }, {
        ru: "увеселительные мероприятия, корпоративы",
        en: "entertainment events, corporate parties"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "слабый клев",
        en: "middling day"
      }]
    },
        o = {
      plus: [{
        ru: "посадка, посев, сбор урожая",
        en: "planting, sowing, harvesting"
      }, {
        ru: "сбор винограда и виноделие",
        en: "grape harvesting and wine making"
      }, {
        ru: "прополка сорняков",
        en: "weeding"
      }],
      minus: [{
        ru: "пасынкование, обрезка, прищипка растений",
        en: "breeding and pruning plants"
      }]
    },
        u = {
      plus: [{
        ru: "лечение импотенции и бесплодия",
        en: "impotence and infertility treatment"
      }, {
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "chronic diseases treatment, beginning of the course of medication intake"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "организация домашнего праздника, вечеринки",
        en: "arrange a joyful party at home"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "совершенно любые покупки, особенно игрушки (елочные, детские, розыгрыши, эротические), цветы, коньяк, вино; путевки на отдых и все радостное и праздничное",
        en: "any purchases, especially toys (Christmas, erotic, children's), flowers, brandy, wine; tickets to vacation and all joyous and festive"
      }],
      minus: []
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Виноградная гроздь",
        en: "Grape bunch"
      },
      energetics: {
        ru: "активная",
        en: "active"
      },
      keywords: {
        ru: "отдых, расслабление, радость, веселье, праздник, внутренняя свобода, позитивное восприятие реальности, раскрепощение",
        en: "rest, relaxation, joy, fun, holiday, inner freedom, positive perception of reality, liberation"
      },
      element: {
        ru: "Земля",
        en: "Earth"
      },
      direction: {
        ru: "Северо-Восток",
        en: "Northeast"
      },
      shape: {
        ru: "квадрат, горизонтальный прямоугольник",
        en: "square, horizontal rectangle"
      },
      stone: {
        ru: "гематит, циркон",
        en: "hematite, zircon"
      },
      "сolor": {
        ru: "желтый, золотой",
        en: "yellow, gold"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _23 = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "анализ своего поведения, партнер - как зеркало, разговор о недостатках",
        en: "analysis of the self-behavior, the partner is your mirror now. Talk about each other with each other sincerely"
      }, {
        ru: "секс спокойный, медленный, массаж, оральный, НЕ перед зеркалом",
        en: "calm and slow sex, massage + oral sex, keep away from mirrors"
      }],
      minus: [{
        ru: "свадьба",
        en: "wedding"
      }]
    },
        r = {
      plus: [{
        ru: "очищение организма и водных процедур",
        en: "cleansing from slags, treatment with water"
      }, {
        ru: "процедуры очистки и восстановления кожи, баня, массаж, обертывания и питательные маски",
        en: "cleansing and restoration of the skin, bath, massages, body wraps and nourishing masks"
      }, {
        ru: "стрижка привлечет удачу и благополучие",
        en: "haircut attracts luck and prosperity"
      }, {
        ru: "травяные чаи с добавлением куркумы и корицы",
        en: "herbal teas with the addition of turmeric and cinnamon"
      }, {
        ru: "маски, примочки, компрессы, травяные ванны",
        en: "masks, lotions, compresses and herbal baths"
      }, {
        ru: "голодание",
        en: "fasting"
      }, {
        ru: "как можно больше орехов - миндаль, грецкий и кедровый орех, арахис, фундук",
        en: "almonds, walnuts and pine nuts, peanuts, hazelnuts - as more as possible"
      }, {
        ru: "какой-то желанный особенный продукт",
        en: "some desirable special food"
      }, {
        ru: "растягивающие упражнения. Предпочтение упражнениям, где важен ритм, ритмичные дыхательные упражнения",
        en: "stretching exercises. Do not increase the load, give preference to rhythmic exercises, rhythmic breathing exercises"
      }],
      minus: [{
        ru: "уход за ногами",
        en: "feet care"
      }, {
        ru: "употребление водки, шампанского",
        en: "alcohol"
      }]
    },
        i = {
      plus: [{
        ru: "анализ деталей и нюансов, мелочей",
        en: "attention to the details and nuances"
      }, {
        ru: "анализ статистики",
        en: "stats analysis"
      }, {
        ru: "сбор отзывов пользователей",
        en: "customers' feedback analysis"
      }, {
        ru: "сбор жалоб и предложений персонала, сотрудников",
        en: "collecting employees' complaints and suggestions"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "слабый клев",
        en: "middling day"
      }]
    },
        o = {
      plus: [{
        ru: "посев и посадка растений, у которых съедобна подземная часть: картофель, морковь, брюква, лук, свекла, арахис, репа",
        en: "sowing and planting the plants with edible underground parts: potatoes, carrots, turnips, onions, beets, peanuts etc."
      }, {
        ru: "выкопка луковиц и клубней на хранение",
        en: "digging bulbs and tubers for the storage "
      }, {
        ru: "пересадка, прививка, обрезка деревьев",
        en: "transplant, inoculation, pruning trees"
      }, {
        ru: "прополка, прореживание, опрыскивание от болезней и вредителей",
        en: "weeding, thinning, spraying plants against pests"
      }],
      minus: [{
        ru: "полив, он должен быть умеренным",
        en: "watering, it should be moderate"
      }, {
        ru: "работа с корнями растений, так как это может привести к их гибели",
        en: "work with the roots, as this can lead to their death"
      }, {
        ru: "рыхлении почвы",
        en: "hoeing"
      }]
    },
        u = {
      plus: [{
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "chronic diseases treatment, beginning of the course of medication intake"
      }, {
        ru: "хирургические операции – шея (гортань, миндалины, щитовидка), вены и артерии",
        en: "surgical operations - neck (larynx, tonsils, thyroid gland), veins and arteries"
      }, {
        ru: "отказ от вредных привычек",
        en: "getting rid of harmful habits"
      }],
      minus: [{
        ru: "самолечение серьезных болезней",
        en: "self-treatment in case of serious diseases"
      }]
    },
        l = {
      plus: [{
        ru: "внимание к деталям. Мелкий ремонт",
        en: "pay attention to details. Minor repairs"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "небольшие предметы интерьера",
        en: "small furniture"
      }],
      minus: [{
        ru: "любые другие покупки",
        en: "all other purchases"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Обезьяна; Зеркало; Лед",
        en: "Monkey; Mirror; Ice"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "честность, спокойствие, исправление своих недостатков, изменение в лучшую сторону",
        en: "honesty, serenity, correcting the deficiencies, changing for the better"
      },
      element: {
        ru: "Огонь",
        en: "Fire"
      },
      direction: {
        ru: "Юг",
        en: "South"
      },
      shape: {
        ru: "треугольник, зигзаг, изломанная линия",
        en: "triangle, zigzag, broken line"
      },
      stone: {
        ru: "белый агат, опал, сиреневый аметист, шпинель",
        en: "white agate, opal, purple amethyst, spinel"
      },
      "сolor": {
        ru: "зеленый, малахитовый и изумрудный",
        en: "green, malachite and emerald"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _24 = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "развод, разрыв отягощающих отношений",
        en: "Divorce, break the aggravating relations"
      }],
      minus: [{
        ru: "конфликтный день. Не принимайте необдуманных заранее решений",
        en: "day may be full of conflicts. Do not make hasty decisions"
      }, {
        ru: "свадьба",
        en: "wedding"
      }, {
        ru: "любой секс станет насилием",
        en: "sex, may end with the violence"
      }]
    },
        r = {
      plus: [{
        ru: "картофель, капуста, репа, свекла и другие овощи округлой формы",
        en: "potatoes, cabbage, turnips, beets and other rounded shape vegetables"
      }, {
        ru: "маникюр, покраска волос, химическая завивка, стрижка - волосы будут слегка завиваться крупными локонами, приобретут дополнительный объем и блеск",
        en: "manicure, haircut, coloring, perms. Hair will get an extra volume and shine"
      }, {
        ru: "массаж или сауна",
        en: "massage or sauna"
      }, {
        ru: "чем проще будет диета, тем лучше",
        en: "the easier the diet, the better"
      }, {
        ru: "медитации",
        en: "meditation"
      }],
      minus: [{
        ru: "кабачки, огурцы, морковь и другие овощи удлиненной формы",
        en: "courgettes, cucumbers, carrots and other elongated vegetables"
      }, {
        ru: "спортивные тренировки, насекомые на природе, травяные ванны",
        en: "trainings, insects and herbal baths"
      }]
    },
        i = {
      plus: [{
        ru: "генеральная уборка: в офисе, среди задач и персонала. Избавление от ненужного",
        en: "general cleaning: in the office, among the tasks and staff. All unnecessary throw away"
      }, {
        ru: "разграничение своих истинных мыслей и навязанных, самокоучинг",
        en: "differentiation of the true and imposed thoughts, self-coaching"
      }, {
        ru: "расстановка приоритетов",
        en: "prioritization"
      }],
      minus: []
    },
        s = {
      plus: [{
        ru: "хороший клев",
        en: "good day for fishing"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "обрезка растений с целью замедления роста молодых побегов",
        en: "pruning plants with the aim of slowing the growth of young runners"
      }, {
        ru: "прививка, прополка и прореживание",
        en: "inoculation, weeding and thinning"
      }, {
        ru: "выкапывание луковиц и клубней",
        en: "digging up bulbs and tubers"
      }, {
        ru: "корневая органическая подкормка",
        en: "organic fertilizing"
      }, {
        ru: "полив, опрыскивание от вредителей и сорняков",
        en: "watering, spraying against pests and weeds"
      }],
      minus: [{
        ru: "любые работы с использованием садового инвентаря",
        en: "any work with using the garden tools"
      }]
    },
        u = {
      plus: [],
      minus: [{
        ru: "удаление, лечение, протезирование зубов",
        en: "dental treatment, teeth removal, getting dentures"
      }, {
        ru: "хирургические операции",
        en: "surgical operations"
      }]
    },
        l = {
      plus: [{
        ru: "размусоривание",
        en: "decluttering"
      }, {
        ru: "мытье холодильника",
        en: "wash the refrigerator"
      }],
      minus: [{
        ru: "работа с огнем, острыми и тяжелыми предметами, снимать паутину",
        en: "work with fire, sharp and heavy objects, remove the spider web"
      }]
    },
        c = {
      plus: [{
        ru: "приобретение домашних любимцев",
        en: "pets acquisition"
      }],
      minus: [{
        ru: "любые другие, в том числе продукты питания",
        en: "all other, including food"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Паук, сеть, золотой паук, паук Рахна",
        en: "Spider, Web, Gold Spider"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "повышенный самоконтроль, опасность получить травмы, проверка усвоения прошлых лунных уроков, преобразование своих негативных качеств в положительные, время освобождения от всего ненужного, наведение порядка",
        en: 'an increased self-control, a danger of injury, check the assimilation of the past "lunar" lessons, transform the negative qualities into positive ones, the liberation of all unnecessary, restoring an order'
      },
      element: {
        ru: "Вода",
        en: "Water"
      },
      direction: {
        ru: "Север",
        en: "North"
      },
      shape: {
        ru: "волнистые линии, плавные переходы, ассиметрия",
        en: "wavy lines, asymmetry"
      },
      stone: {
        ru: "лабрадор, хризолит, оливин, зеленый гранат, уварит, красный оникс",
        en: "olivine, green garnet, red onyx"
      },
      "сolor": {
        ru: "голубой, морской волны и лазоревый",
        en: "blue, aqua and azure"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _25 = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "шаг вперед в отношениях, начало реализации совместных планов",
        en: "step forward in the relationships, the beginning of the joint plans implementation "
      }, {
        ru: "свадьба людей, которые хотят активной жизни",
        en: "wedding for people who strive to live actively"
      }, {
        ru: "секс праздничный, интересный, оригинальный, приветствуются эксперименты",
        en: "festive, fun, original sex with experiments"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "очищение организма и кожи",
        en: "body and skin cleansing"
      }, {
        ru: "начало диеты, комплекса физических упражнений, курса лечебных масок или смены косметического средства (крема, шампуня, бальзама для волос)",
        en: "the beginning of the diet, exercising, the course of treatment masks; change of cosmetic products (cream, shampoo, hair balm)"
      }, {
        ru: "стрижка (приносит удачу)",
        en: "haircut (brings luck)"
      }, {
        ru: 'смена имиджа – обновление гардероба, "примерка" нового макияжа',
        en: 'the change of look – renewing the wardrobe, "trying on" a new makeup'
      }, {
        ru: "орехи, сухофрукты, изюм, овощи и свежие фрукты",
        en: "nuts, dried fruit, raisins, vegetables and fresh fruit"
      }],
      minus: [{
        ru: "алкоголь, никотин, мясо и грубая пищи, полуфабрикаты. Неразборчивое поглощение пищи может вызвать отложение солей и отравление",
        en: "alcohol, nicotine, meat and rough meal, ready-to-cook food. Indiscriminate food intake can cause deposition of salts, arthritis. A day is fraught with poisoning and unpredictable reaction, even on familiar foods"
      }, {
        ru: "пирсинг, удаление родинок, бородавок, вросших ногтей",
        en: "piercing; moles, warts, ingrown nails removal"
      }, {
        ru: "паровые ванны",
        en: "steam baths"
      }]
    },
        i = {
      plus: [{
        ru: "анализ ниши, целевой аудитории",
        en: "analysis of the niche and the target audience"
      }, {
        ru: "благотворительность, поиск источников финансирования, шаг вперед в бизнесе",
        en: "charity, seeking funding, a step forward in business"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "клева нет",
        en: "worst day for fishing"
      }]
    },
        o = {
      plus: [{
        ru: "посадка и пересадка",
        en: "planting and transplanting"
      }, {
        ru: "посев листовых, зеленых, бахчевых и плодовых культур",
        en: "planting the leafy, green, melons and fruit plants"
      }, {
        ru: "пересадка и посадка кустарников и деревьев",
        en: "transplanting and planting shrubs and trees"
      }, {
        ru: "минеральная подкормка",
        en: "mineral fertilization"
      }, {
        ru: "полив, желательно прикорневой",
        en: "watering, preferably to the root"
      }, {
        ru: "заготовка посадочного материала и его укоренение",
        en: "preparing planting material and its rooting"
      }, {
        ru: "обработка земли",
        en: "soil treatment"
      }, {
        ru: "прививка и перевивка",
        en: "inoculation and transplantation"
      }],
      minus: [{
        ru: "удаление или укорачивание побегов деревьев и кустарников",
        en: "removal or shortening of the runners of trees and shrubs"
      }]
    },
        u = {
      plus: [{
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "treatment of the chronic diseases, beginning of the course of medication intake"
      }, {
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamin intake course"
      }, {
        ru: "очистка желудка и кишечника",
        en: "intestinal cleansing"
      }, {
        ru: "консультация у стоматолога, диагностика",
        en: "consultation with dentist, diagnosis"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "покупка полезностей, облегчающих быт",
        en: "purchase the useful things that facilitate everyday life"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "cамое время для полезных покупок – всего, что способствует наиболее эффективному вращению среди социума и делает вашу жизнь легче",
        en: "it's time for useful purchases - everything that contributes to the most efficient existence in the society and makes your life easier"
      }],
      minus: [{
        ru: "безделушки, ненужные вещи в порыве сиюминутного желания",
        en: "trinkets, useless things in a fit of the momentary desires"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Рог изобилия и Ненасытная пасть",
        en: "Cornucopia and the Insatiable maw"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "начало действия, принятие даров, умножение добра, ритм",
        en: "onset of action, acceptance of gifts, multiplication of goods, rhythm"
      },
      element: {
        ru: "Земля",
        en: "Earth"
      },
      direction: {
        ru: "Юго-Запад",
        en: "Southwest"
      },
      shape: {
        ru: "квадрат, горизонтальный прямоугольник",
        en: "square, horizontal rectangle"
      },
      stone: {
        ru: "жадеин, калцедон, агат переливчатый",
        en: "iridescent agate"
      },
      "сolor": {
        ru: "оранжевый, каштановый, шоколадный и коричневый",
        en: "orange, red, and chocolate brown"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _26 = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "Удачный день! Риск и активные шаги навстречу мечте",
        en: "Lucky day! Risk and active steps towards the dream"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "вспомните историю вашего знакомства, посмотрите на себя отстранено, осознайте те мелочи, которых в прошлом не осознавали",
        en: "share your memories about your love story with the partner, look at your couple voted out, understand those little things that you didn't understand in the past"
      }, {
        ru: "свадьба, особенно для высокодуховных людей",
        en: "wedding, especially for the highly spiritual people"
      }, {
        ru: "секс спокойный, обычный",
        en: "calm, normal sex"
      }],
      minus: [{
        ru: "развод, разрыв отношений",
        en: "divorce, relationship break"
      }]
    },
        i = {
      plus: [{
        ru: "обертывание и контрастные водные процедуры.",
        en: "body wraps and contrast shower"
      }, {
        ru: "уход за волосами, покраска стойкими красителями, завивка, пирсинг",
        en: "hair care and coloring with resistant dyes; perms, piercing"
      }, {
        ru: "салон красоты. Изменение внешнего вида привлечет удачу и благополучие",
        en: "the beauty salon. Change the look to attract good luck and prosperity"
      }, {
        ru: "уход за кожей лица, питательные маски",
        en: "facial skin care, hydrating masks"
      }, {
        ru: "фитотерапия и дыхательная гимнастика, массаж с маслами",
        en: "phytotherapy and breathing exercises, massage with oils"
      }, {
        ru: "лучший день для начала диеты. Отказ от мучного и сладкого",
        en: "start losing weight. Refuse the flour and sweets"
      }, {
        ru: "посещение ресторана с экзотической кухней, необычные, новые блюда",
        en: "unusual, new dishes in the restaurant with exotic cuisine"
      }, {
        ru: "соблюдение установленного режима тренировок и оздоровительных программ",
        en: "wellness programs in the established mode"
      }, {
        ru: "подведение итогов выполняемых со второго лунного дня практик. Определение областей, где стоит тщательнее поработать",
        en: "sum up the results of the programs started on the second lunar day. Identify the areas that need an attention"
      }, {
        ru: "все виды спортивных игр и длительные прогулки на свежем воздухе",
        en: "all kinds of sports and long walks on the fresh air"
      }],
      minus: [{
        ru: "эпиляция",
        en: "epilation"
      }, {
        ru: "мясо птицы",
        en: "poultry meal"
      }]
    },
        s = {
      plus: [{
        ru: "видение общей картины «с высоты»",
        en: "the chance to see the bird's-eye view"
      }, {
        ru: "отслеживание закономерностей и связей",
        en: "track the regularities and patterns"
      }, {
        ru: "анализ КПД используемых ресурсов",
        en: "analysis of the efficiency of the used resources"
      }, {
        ru: "активные, пробивные действия, шанс «словить момент», риск",
        en: "active, punchy actions, catch the moment, risk"
      }, {
        ru: "вступление в новую должность",
        en: "getting a new post"
      }, {
        ru: "приобретение знакомств, связей",
        en: "acquisition of the new profitable relationships"
      }, {
        ru: "коллективная работа",
        en: "teamwork"
      }, {
        ru: "начало новых дел",
        en: "start of the new projects"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "хороший клев",
        en: "good day for fishing"
      }],
      minus: []
    },
        u = {
      plus: [{
        ru: "сбор урожая культур, у которых съедобной является подземная часть",
        en: "harvest the plants with edible underground parts"
      }, {
        ru: "сбор урожая для длительного хранения",
        en: "harvesting for the long-term storage "
      }, {
        ru: "прищипка, прививка и перепрививка",
        en: "inoculation"
      }, {
        ru: "высадка, обрезка деревьев",
        en: "planting, pruning the trees "
      }, {
        ru: "борьба с вредителями и сорняками",
        en: "get rid of pests and weeds"
      }, {
        ru: "подкормка, внесение удобрений",
        en: "fertilizing"
      }, {
        ru: "прореживание всходов, обрезка усов",
        en: "thinning the seedlings, pruning runners "
      }, {
        ru: "уборка опавшей листвы",
        en: "picking fallen leaves "
      }],
      minus: [{
        ru: "любые манипуляции с корнями",
        en: "any manipulation with the roots"
      }, {
        ru: "обильный полив",
        en: "abundant watering"
      }]
    },
        l = {
      plus: [{
        ru: "хирургичесике операции - грудь, молочные железы, почки, мочевой пузырь, половые органы, ноги",
        en: "surgical operations - chest, breasts, kidneys, bladder, genitals, legs"
      }, {
        ru: "отказ от вредных привычек",
        en: "getting rid of harmful habits"
      }],
      minus: []
    },
        c = {
      plus: [],
      minus: [{
        ru: "любые домашние хлопоты",
        en: "any household chores"
      }]
    },
        d = {
      plus: [{
        ru: "любой спортивный инвентарь, абонемент в бассейн, тренажерный зал или же оплата услуг, предоставленных личным тренером",
        en: "any sports equipment, a subscription to the pool, gym or payment for services provided by a personal coach"
      }, {
        ru: "все связанное с движением - велосипед, мотоцикл, автомобиль, корабль, лошадь",
        en: "all associated with the movement - a bicycle, motorcycle, car, boat, horse"
      }, {
        ru: "покупки через интернет",
        en: "online shopping"
      }],
      minus: []
    },
        h = {
      relationship: r,
      beauty: i,
      business: s,
      fishing: o,
      garden: u,
      health: l,
      house: c,
      shopping: d,
      lucky: a
    },
        p = {
      symbol: {
        ru: "Парящий Орел; Муза",
        en: "Soaring Eagle; Muse"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "осознание своей цели, взгляд на свою жизнь с высоты птичьего полета, корректировка, понимание того, что все не случайно, активная жизненная позиция, преодоление сомнений",
        en: "awareness of your goal, look at your life with bird's eye view, adjusting, understanding that it's not by accident, active life, doubts overcoming"
      },
      element: {
        ru: "Земля",
        en: "Earth"
      },
      direction: {
        ru: "Юго-Запад",
        en: "Southwest"
      },
      shape: {
        ru: "квадрат, горизонтальный прямоугольник",
        en: "square, horizontal rectangle"
      },
      stone: {
        ru: "красная яшма, горный хрусталь",
        en: "red jasper, rock crystal"
      },
      "сolor": {
        ru: "синий, индиго, ультрамариновый, васильковый и сапфировый",
        en: "blue, indigo, ultramarine, cornflower, and sapphire"
      }
    };
    t.a = {
      categories: h,
      main: p
    };
  };

  var _27 = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "Удачный день! Риск и активные шаги навстречу мечте",
        en: "Lucky day! Risk and active steps towards the dream"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "день активных и стремительных действий, переход отношений на новый уровень",
        en: "active and fast-paced actions, the transition of relations to a new level"
      }, {
        ru: "спор на что-то, игра, совместное занятие спортом",
        en: "discuss something controversial with the partner, play the game, do some sports together"
      }, {
        ru: "свадьба творческих людей",
        en: "wedding for the creative people"
      }, {
        ru: "секс активный, энергичный, творческий, отдайтесь фантазиям. Скучный секс противопоказан",
        en: "active, energetic, creative sex. Add the fantasy. The dull sex is contraindicated!"
      }],
      minus: []
    },
        i = {
      plus: [{
        ru: "кровоочистительные процедуры",
        en: "the blood cleansing procedures"
      }, {
        ru: "траволечение и фитотерапия",
        en: "herbalism"
      }, {
        ru: "морковный, клюквенный, свекольный, рябиновый и гранатовый соки",
        en: "carrot, cranberry, beet, rowan and pomegranate juices"
      }, {
        ru: "окраска волос, особенно в белый цвет",
        en: "hair coloring, especially in white"
      }, {
        ru: "кардинальная смена облика",
        en: "radical change of look"
      }, {
        ru: "хорошая физическая нагрузка",
        en: "high physical load"
      }, {
        ru: "марш-броски, спортивные игры, конный спорт",
        en: "marathons, sports games, horse riding"
      }, {
        ru: "ванны, души, обливания, закаливание",
        en: "baths, contrast shower, hardening"
      }, {
        ru: "групповые тренировки, спортивные состязания, постановка новых рекордов",
        en: "exercises in groups, sports events, setting new records"
      }],
      minus: [{
        ru: "алкоголь",
        en: "alcohol"
      }]
    },
        s = {
      plus: [{
        ru: "революционные творческие действия",
        en: "revolutionary creative actions"
      }, {
        ru: "фестивали, конкурсы, викторины, коллективное общение",
        en: "festivals, competitions, quizzes, collective communication"
      }, {
        ru: "командировки",
        en: "business trips"
      }, {
        ru: "использование соревновательного инстинкта для того, чтобы спровоцировать рывок вперед в делах",
        en: "using the competitive instinct in order to provoke a leap forward"
      }, {
        ru: "активные действия в бизнесе, особенно в которых участвует много людей",
        en: "active actions in business with the many people involved"
      }, {
        ru: "сбор креативных идей сотрудников, мозговой коллективный штурм",
        en: "collecting the employees' creative ideas, collective brain storming"
      }, {
        ru: "расширение штата сотрудников",
        en: "increase in headcount"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "ЖОР!",
        en: "best day for fishing!"
      }],
      minus: []
    },
        u = {
      plus: [{
        ru: "уборка корнеплодов, насыщенных полезными элементами, а так же уборка лекарственных растений",
        en: "harvesting roots, saturated with the useful elements, and medicinal herbs"
      }, {
        ru: "обрезка деревьев, прививки, подкормка, особенно, прикорневая",
        en: "pruning, inoculation, fertilizing, especially basal"
      }],
      minus: [{
        ru: "прищипка и пикирование",
        en: "breeding and nipping"
      }, {
        ru: "обильный полив",
        en: "abundant watering"
      }]
    },
        l = {
      plus: [{
        ru: "хирург операции легкие, бронхи, кисти, руки, брюшная полость, печень",
        en: "surgical operations - lungs, bronchial tubes, hands, arms, abdomen, liver"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "мойка окон, зеркал",
        en: "washing windows and mirrors"
      }, {
        ru: "чистка ковров, химчистка зимних вещей",
        en: "carpet cleaning, dry cleaning of winter clothes"
      }, {
        ru: "декорирование дома",
        en: "home decoration"
      }],
      minus: []
    },
        d = {
      plus: [{
        ru: "транспортная техника, снаряжение для походов: палатки, спальные мешки, фонари, рюкзаки. При выборе полагаться на собственную интуицию",
        en: "transport and trekking equipment: tents, sleeping bags, flashlights, backpacks. Rely on your own intuition"
      }],
      minus: []
    },
        h = {
      relationship: r,
      beauty: i,
      business: s,
      fishing: o,
      garden: u,
      health: l,
      house: c,
      shopping: d,
      lucky: a
    },
        p = {
      symbol: {
        ru: "Конь; Табун Лошадей; Колесница; Пегас; Солнце, Храм",
        en: "Horse; Herd of horses; Chariot; Pegasus; Sun"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "активность, креативность, творческое осмысление, коллективная работа, эффективное движение вперед, квантовый скачок, революционные преобразования",
        en: "activity, creativity, creative thinking, teamwork, efficient motion forward, a quantum leap, revolutionizing"
      },
      element: {
        ru: "Дерево",
        en: "Wood"
      },
      direction: {
        ru: "Восток",
        en: "East"
      },
      shape: {
        ru: "вертикальный прямоугольник",
        en: "vertical rectangular"
      },
      stone: {
        ru: "циркон, авантюрин",
        en: "zircon, aventurine"
      },
      "сolor": {
        ru: "фиолетовый, лиловый, сиреневый и белый",
        en: "purple, mauve, lilac and white"
      }
    };
    t.a = {
      categories: h,
      main: p
    };
  };

  var _28 = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "приготовьте партнеру что-то вкусное и интересное (пища для желудка и ума)",
        en: "prepare something tasty and interesting for your loved one (food for the stomach and the mind)"
      }, {
        ru: "свадьба с обильным застольем",
        en: "wedding with the abundant feast"
      }, {
        ru: "секс должен закончиться сытным ужином там же, где он был",
        en: "sex should end with a hearty dinner in the same place where it happened"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "примерка и выбор украшений, прокалывание ушей, пирсинг",
        en: "choosing the jewelry, ears piercing"
      }, {
        ru: "коррекция модельной стрижки",
        en: "haircut correction"
      }, {
        ru: "сладкое, овощные салаты, тушеные овощи и запеканки, молоко и блюда из цельных круп",
        en: "sweets, vegetable salads, vegetable stews and casseroles, milk and meals of whole grains"
      }, {
        ru: "прогулки на свежем воздухе и медитации",
        en: "walks on the fresh air, meditation"
      }, {
        ru: "полноценный и радостный отдых",
        en: "full and joyful rest"
      }, {
        ru: "праздничная и сытная еда",
        en: "festive and nourishing food"
      }],
      minus: [{
        ru: "физические нагрузки, маникюр, педикюр",
        en: "high physical load, cut nails"
      }, {
        ru: "что-либо новое со своими волосами. Сделанная сегодня сложная укладка вряд ли продержится обещанный срок",
        en: "something new with the hair. The hairdo from today will not stay beautiful for a long time"
      }]
    },
        i = {
      plus: [{
        ru: "концентрация на завершении дела",
        en: "concentration on the project's completion"
      }, {
        ru: "изучение новых технологий, методов, получение недостающих знаний",
        en: "learning new technologies, methods, fill the knowledge gaps"
      }, {
        ru: "работа с информацией и ее носителями",
        en: "work with information and its carriers"
      }, {
        ru: "любая интеллектуальная активность",
        en: "a very intelligent day"
      }],
      minus: []
    },
        s = {
      plus: [{
        ru: "ЖОР!",
        en: "best day for fishing!"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "посев и посадка корнеплодов, картофеля, луковичных, бобовых",
        en: "sowing and planting of root vegetables, potatoes, onion, beans"
      }, {
        ru: "прореживание всходов",
        en: "thinning the seedlings"
      }, {
        ru: "полив, но не обильный",
        en: "moderate watering"
      }, {
        ru: "уничтожение сорняков и различных вредителей, органическая прикорневая подкормка",
        en: "get rid of weeds and various pests, organic fertilizing"
      }, {
        ru: "обрезка усов земляники",
        en: "cut the strawberries runners"
      }, {
        ru: "срезка цветов, предназначенных для хранения или длительных перевозок, выкопка цветочных луковиц и клубней на хранение",
        en: "cut the flowers for storage or long transportation, digging up flower bulbs and tubers for storage"
      }, {
        ru: "заготовка впрок: варка варенья, консервирование, сушка",
        en: "prepare the fruits for future use: boiling jam, canning, drying"
      }, {
        ru: "уборка сада",
        en: "garden decoration"
      }, {
        ru: "обрезка растений для снижения роста молодых побегов",
        en: "pruning plants in order to reduce the growth of young runners"
      }],
      minus: [{
        ru: "прищипка и пикирование",
        en: "breeding and nipping"
      }]
    },
        u = {
      plus: [],
      minus: [{
        ru: "хирургические операции",
        en: "surgical operations"
      }]
    },
        l = {
      plus: [{
        ru: "обучение кулинарному мастерству, шитью, прочим навыкам",
        en: "training the culinary skills, sewing, and others"
      }, {
        ru: "праздничный сытный ужин",
        en: "make the hearty festive dinner"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "продукты, одежда, предметы обихода. Удачнее всего – сладости, алкоголь, атрибуты праздников; мистические атрибуты: четки, статуэтки богов или же различные священные предметы",
        en: "food, clothing, household items. Sweets, alcohol, holidays attributes; mystical attributes: rosary beads, statues of gods or some sacred objects"
      }],
      minus: []
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Слон Ганеша; Книга; Ключ, Карты Таро; Золотой Ключик",
        en: "Ganesh Elephant; Book; Tarot; Golden Key"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "концентрация на завершении дела, финишная прямая, самоконтроль, соизмерение своих усилий, понимание своей уникальности, концентрация на своем жизненном пути, проникновение в суть тайных символов",
        en: "the final stretch, self-control, the comparison of your efforts, understanding your uniqueness, concentration on your path in life, insight into the secret symbols"
      },
      element: {
        ru: "Дерево",
        en: "Wood"
      },
      direction: {
        ru: "Юго-Восток",
        en: "Southeast"
      },
      shape: {
        ru: "вертикальный прямоугольник",
        en: "vertical rectangular"
      },
      stone: {
        ru: "голубой агат, синий сапфир, синяя яшма, голубой нефрит и янтарь",
        en: "blue agate, blue sapphire, blue jade, blue jade and amber"
      },
      "сolor": {
        ru: "красный, алый и черный",
        en: "red, scarlet and black"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _29 = function (e, t, n) {
    "use strict";

    var a = {
      plus: [],
      minus: [{
        ru: "свадьба",
        en: "wedding"
      }, {
        ru: "секс",
        en: "sex"
      }]
    },
        r = {
      plus: [{
        ru: "растительная пища, больше молока, ватрушки с орехами, кисломолочные продукты",
        en: "vegetable food, dairy products, milk, baked cheesecake with nuts"
      }, {
        ru: "физические упражнения, которые укрепляют позвоночник, упражнения в бассейне",
        en: "physical exercises that strengthen the spine - especially, in the pool"
      }, {
        ru: "стрижка - волосы будут лучше расти, станут густыми и пышными",
        en: "haircut - hair will grow better, become thick and lush"
      }, {
        ru: "напряженные тренировки, направленные на укрепление уже достигнутых результатов",
        en: "hard workouts aimed at strengthening of the already achieved results"
      }, {
        ru: "массаж, гармонизация работы чакр, медитации на природе",
        en: "massage, harmonizing the work of the chakras, meditation in the forest or on the riverside"
      }],
      minus: [{
        ru: "косметические операции, даже удаление прыщей",
        en: "cosmetic surgery, even acne removal"
      }, {
        ru: "химическое воздействие на волосы (окрашивание, завивка). Сложная укладка, сделанная в этот день, продержится недолго",
        en: "a chemical effect on the hair (coloring, perming). Complicated hairdo will not stay beautiful for long"
      }, {
        ru: "мясо, переедание",
        en: "meat, Binge eating"
      }, {
        ru: "новые упражнения",
        en: "new exercises"
      }]
    },
        i = {
      plus: [{
        ru: "поиск финансирования и поддержки со стороны",
        en: "search for funding and support"
      }, {
        ru: "правильное завершение дел",
        en: "proper completion of projects"
      }, {
        ru: "анализ ошибок и недостатков процесса",
        en: "analysis of the process - weaknesses and errors"
      }, {
        ru: "коренные реформы",
        en: "the radical reforms"
      }],
      minus: []
    },
        s = {
      plus: [{
        ru: "ЖОР!",
        en: "best day for fishing!"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "обрезка деревьев, прививка, перепрививка",
        en: "pruning trees, inoculation"
      }, {
        ru: "посадка и сбор плодов, которые находятся в земле: морковь, свекла, картофель, редис, репа и т.д.",
        en: "planting and picking the underground fruits: carrots, beets, potatoes, radishes, etc."
      }, {
        ru: "обрезка усов клубники",
        en: "pruning the strawberry runners"
      }, {
        ru: "выкапывание цветочных луковиц",
        en: "digging flower bulbs "
      }, {
        ru: "прореживание всходов, прополка, опрыскивание культур от вредителей, удобрение почвы",
        en: "thinning of seedlings, weeding, spraying against pests, soil fertilizin"
      }],
      minus: [{
        ru: "обильный полив",
        en: "abundant watering"
      }]
    },
        u = {
      plus: [{
        ru: "отказ от вредных привычек",
        en: "getting rid of harmful habits"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "чистка фарфоровой посуды",
        en: "porcelain tableware cleaning"
      }, {
        ru: "большая стирка, глажка, мелкий ремонт одежды",
        en: "big laundry, ironing, clothes repair"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "спортивный инвентарь - штанги, гантели, эспандеры, различные тренажеры",
        en: "sports equipment - weights, dumbbells, expanders, etc."
      }],
      minus: [{
        ru: "любые другие покупки, особенно оружие и любые опасные предметы вроде кухонных ножей",
        en: "all other purchases, especially the arms and any dangerous items such as kitchen knives"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Макара – полурыба-полукрокодил",
        en: "Makara (half fish, half crocodile)"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "сбор урожая, правильное завершение дел, понимание своих ошибок, коренные реформы, жертвоприношение",
        en: "harvest, proper completion of cases, understanding your mistakes, radical reforms, sacrifice"
      },
      element: {
        ru: "Земля",
        en: "Earth"
      },
      direction: {
        ru: "центр, середина, основание",
        en: "center, middle, base"
      },
      shape: {
        ru: "квадрат",
        en: "square"
      },
      stone: {
        ru: "раухтопаз, черный нефрит, крокодилит, сардер",
        en: "black jade"
      },
      "сolor": {
        ru: "оранжевый, каштановый, шоколадный и коричневый",
        en: "orange, red, and chocolate brown"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2a = function (e, t, n) {
    "use strict";

    var a = {
      name: "relationship",
      plus: [{
        ru: "совместное творчество, старт совместных проектов, посещение выставки/концерта, путешествие",
        en: "co-creation, launch joint projects together, visit the exhibition / concert / take a journey"
      }, {
        ru: "cвадьба",
        en: "wedding"
      }, {
        ru: "секс хороший, продолжительный, целителен",
        en: "the good, long, healing sex"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "приготовление всевозможных лекарственных форм",
        en: "preparation of all kinds of medicines"
      }, {
        ru: "физическая активность",
        en: "high physical activity"
      }, {
        ru: "выбор своего запаха. Выбранные духи будут стойко ассоциироваться у окружающих с Вами",
        en: "choosing the fragrance. If you have a date, your smell will firmly associate with you for a long time"
      }, {
        ru: "баня",
        en: "bath"
      }, {
        ru: "разнообразный и питательный рацион",
        en: "varied and nutritious diet"
      }, {
        ru: "йога, тантра",
        en: "yoga, Tantra"
      }, {
        ru: "вино, виноград, молоко, киломолочные продукты",
        en: "wine, grapes, dairy products"
      }, {
        ru: 'упражнения на выносливость, проработатка "отстающих" мышц',
        en: 'endurance exercises. The hatha yoga will help to work with the "lagging" muscles'
      }, {
        ru: "упор на дыхательные практики",
        en: "breathing techniques"
      }, {
        ru: "энергетические упражнения, укрепляющие костную структуру, цигун",
        en: "energy exercises for the bone structure strengthen"
      }, {
        ru: "медитации, направленные на работу с глубинными структурами человеческой личности, с обретением гармонии между душой и телом",
        en: "meditations, designed to work with the deep structures of the human person, for the acquisition of harmony between body and soul"
      }],
      minus: [{
        ru: "стрижка, волосы станут тоньше",
        en: "haircut will make your hair thinner"
      }, {
        ru: "голод",
        en: "fasting"
      }, {
        ru: "поднятие тяжестей",
        en: "lifting weights"
      }]
    },
        i = {
      plus: [{
        ru: "отправная точка для нового масштабного проекта",
        en: "a starting point for a new large-scale project"
      }, {
        ru: "разработка концепции и стратегии",
        en: "development of the concepts and strategies"
      }, {
        ru: "отказ от старых неработающих схем, технологий, людей",
        en: "getting rid of the old non-working schemes, technologies, employees"
      }, {
        ru: "интеллектуальный и основательный подход",
        en: "intelligent and thorough approach"
      }, {
        ru: "творчество, презентации, выставки, концерты",
        en: "creativity, presentations, exhibitions, concerts"
      }, {
        ru: "генерирование идей, мозговой штурм",
        en: "ideas generation, brainstorming"
      }, {
        ru: "планирование, постановка целей",
        en: "planning, goal setting"
      }],
      minus: []
    },
        s = {
      plus: [{
        ru: "ЖОР!",
        en: "best day for fishing!"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "посадка и посев растений",
        en: "planting and sowing"
      }, {
        ru: "обрезка, прививка и перепрививка деревьев",
        en: "pruning, inoculation trees"
      }, {
        ru: "подкормка и внесение удобрений",
        en: "fertilizing"
      }, {
        ru: "благоустройство сада",
        en: "garden landscaping"
      }],
      minus: [{
        ru: "пикировка и прищипка",
        en: "breeding and nipping"
      }]
    },
        u = {
      plus: [{
        ru: "диагностика, удаление, протезирование зубов",
        en: "dental treatment, teeth removal, getting dentures"
      }, {
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "chronic diseases treatment, beginning of the course of medication intake"
      }, {
        ru: "хирург операции - желудок",
        en: "surgical operations – stomach"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "генеральная уборка, любые домашние хлопоты",
        en: " general cleaning, all the household chores"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "все, что пожелаете! Особенно долгожданные вещи",
        en: "whatever you want! Especially the long-awaited things"
      }],
      minus: [{
        ru: "приобрести что-то подешевле – скупой в 24й лунный день платит дважды",
        en: "buy something cheaper than it is - the stingy one pays twice"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Медведь; Гора, Пещера, Вулкан, Утёс, Фаллос, Гефест, Циклоп",
        en: "Bear; Mountain, Cave, Volcano, Cliff, Phallus, Hephaestus, the Cyclops"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "разрушение старого и создание нового, принятие себя таковым, какой ты есть, основательность",
        en: "the destruction of the old things to create something new, self-acceptance, thoroughness"
      },
      element: {
        ru: "Металл",
        en: "Metal"
      },
      direction: {
        ru: "Запад",
        en: "West"
      },
      shape: {
        ru: "круг, овал",
        en: "round, oval"
      },
      stone: {
        ru: "черная яшма, воздушный обсидиан, малахит, голубой нефрит, гроссуляр",
        en: "black jasper, obsidian air, malachite, jade blue, grossularite"
      },
      "сolor": {
        ru: "желтый, золотой, янтарный, лимонный, шафранный и охра",
        en: "yellow, gold, amber, lemon, saffron and ocher"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2b = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "совместное прохождение тестов, тренинги отношений, консультации",
        en: "do some tests together, visit the trainings devoted to relationship"
      }, {
        ru: "красное вино, неспешный секс в воде",
        en: "drink red wine, have a leisurely sex in water"
      }],
      minus: [{
        ru: "свадьба",
        en: "wedding"
      }]
    },
        r = {
      plus: [{
        ru: "водолечение, ванная с травами",
        en: "hydrotherapy, bath with herbs"
      }, {
        ru: "голод",
        en: "fasting"
      }, {
        ru: "косметические процедуры очищения",
        en: "cosmetic cleansing procedures"
      }, {
        ru: "стрижка порадует, волосы станут гуще",
        en: "haircut brings delight, the hair become thicker"
      }, {
        ru: "окрашивание волос - насыщенный цвет, стойкий",
        en: "hair coloring. The color will be saturated and resistant"
      }, {
        ru: "уход за руками и ногами",
        en: "hands and feet care"
      }, {
        ru: "антицеллюлитный массаж",
        en: "anti-cellulite massage"
      }, {
        ru: "много воды, и чуть молока",
        en: "lots of water, and a little bit of milk"
      }, {
        ru: "упражнения на растягивание",
        en: "stretching exercises"
      }, {
        ru: "расслабляющие массажи, водные процедуры",
        en: "relaxing massages, water treatments"
      }],
      minus: [{
        ru: "грубая пища, дыня, грибы, соки",
        en: "rough food, melon, mushrooms, juices"
      }]
    },
        i = {
      plus: [{
        ru: "юридические, судебные дела",
        en: "legal and judicial affairs"
      }, {
        ru: "торговые операции, закупка материалов",
        en: "trading, materials purchasing"
      }, {
        ru: "самотестирование, тестирование сотрудников",
        en: "self-testing, test employees"
      }, {
        ru: "полноценный отдых",
        en: "take a break to rest"
      }],
      minus: []
    },
        s = {
      plus: [{
        ru: "хороший клев",
        en: "good day for fishing"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "посадка и посев культур, дающих корнеплоды: лук, картофель, свекла, бобовые, морковь, репа, редька и т.д.",
        en: "planting and sowing the plants with edible underground parts: onions, potatoes, beets, beans, carrots, turnip, radish, etc."
      }, {
        ru: "выкопка цветочных луковиц и клубней на хранение",
        en: "digging up flower bulbs and tubers for storage"
      }, {
        ru: "прополка, вспашка, рыхление",
        en: "weeding and hoeing "
      }, {
        ru: "органическая подкормка",
        en: "organic fertilization"
      }, {
        ru: "опрыскивание от вредителей и болезней",
        en: "spraying against pests"
      }, {
        ru: "сушка плодов, трав, корней лекарственных растений",
        en: "drying fruits, herbs, medicinal plants roots"
      }, {
        ru: "благоустройство сада",
        en: "garden landscaping"
      }],
      minus: [{
        ru: "обильный полив",
        en: "abundant watering"
      }, {
        ru: "работа с корнями, повреждение может привести к гибели растения",
        en: "work with the roots, damage can lead to death of the plant"
      }, {
        ru: "прищипка и пикировка",
        en: "breeding and nipping"
      }]
    },
        u = {
      plus: [{
        ru: "диагностика, удаление, протезирование зубов",
        en: "dental treatment, teeth removal, getting dentures"
      }, {
        ru: "хирургческие операции - сердце, спина, позвоночник",
        en: "surgical operations – heart, back, spine"
      }, {
        ru: "отказ от вредных привычек",
        en: "getting rid of harmful habits"
      }],
      minus: [{
        ru: "начало приема новых лекарств",
        en: "beginning of the course of medication intake"
      }]
    },
        l = {
      plus: [{
        ru: "накремьте новую обувь",
        en: "cream the new shoes"
      }, {
        ru: "чистка ювелирных изделий",
        en: "clean the jewelry"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "товары, связанные с морем или просто водой: сувенирные корабли, ракушки, аквариумы с обитателями, надувные бассейны, спасательные жилеты, акваланги или даже простые игрушки для ванны",
        en: "purchases related to the sea or water: souvenir ships, shells, aquariums with its inhabitants, inflatable pools, life jackets, scuba, or even the toys for the bath"
      }, {
        ru: "вещи, призванные восстановить ваше душевное спокойствие -  книги, любые приятные вам мелочи, наборы ароматических масел",
        en: "things designed to restore your peace of mind - books, aromatic oils sets, and everything that make you calm and happy"
      }],
      minus: []
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Черепаха, раковина, урна",
        en: "Turtle, Shell, Urn"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "апатия, пустота после достижения поставленной задачи, восстановление сил, полноценный отдых, психологическая адаптация",
        en: "apathy, emptiness after the task completion, strength recovery, proper rest, psychological adaptation"
      },
      element: {
        ru: "Металл",
        en: "Metal"
      },
      direction: {
        ru: "Северо-Запад",
        en: "Northwest"
      },
      shape: {
        ru: "круг, спираль",
        en: "circle, spiral"
      },
      stone: {
        ru: "шпаты (обереги), тигровый (рыжий) глаз, соколиный (голубой и синий) глаз, кошачий (зеленый) глаз",
        en: "spars (amulets), brindle (red) eye, falcon (blue) eyes, cat (green) eye"
      },
      "сolor": {
        ru: "зеленый, малахитовый и изумрудный",
        en: "green, malachite and emerald"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2c = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "анализ своего поведения, обращение к семейному психологу, чтение психологической литературы об отношениях",
        en: "analyze of the self-behavior, visit the family psychologist, read psychological literature about the relationship"
      }],
      minus: [{
        ru: "свадьба",
        en: "wedding"
      }, {
        ru: "секс, удовольствия не принесет",
        en: "sex, it will not bring the pleasure"
      }]
    },
        r = {
      plus: [{
        ru: "комплексное очищение организма, водные процедуры",
        en: "comprehensive cleansing, water treatments"
      }, {
        ru: '"терапия молчанием"',
        en: '"silent treatment"'
      }, {
        ru: "сведение родинок и бородавок, разглаживание морщин, очистительные процедуры",
        en: "birthmarks and warts removal, wrinkles smoothing"
      }, {
        ru: "стрижка привлечет улучшение финансового положения, увеличение собственности и благорасположение начальства",
        en: "haircut will attract the finances, increase the ownership and benevolence of the authorities"
      }, {
        ru: "рыба, яйца, морепродукты и грибы",
        en: "fish, eggs, seafood and mushrooms"
      }, {
        ru: "простые блюда, голодание",
        en: "simple meals, fasting"
      }, {
        ru: "только расслабляющие и растягивающие упражнения",
        en: "relaxing and stretching exercises"
      }, {
        ru: "точечные массажи и дыхательные гимнастики, время на свежем воздухе вдали от толпы",
        en: "acupressure and breathing exercises on the fresh air away from the crowds"
      }],
      minus: []
    },
        i = {
      plus: [{
        ru: "поиск причинно-следственных связей своих успехов и поражений",
        en: "look to the cause-effect relationships of your successes and failures"
      }, {
        ru: "расстановка приоритетов",
        en: "prioritization"
      }, {
        ru: "посещение наставника, учителя",
        en: "visiting the teacher or coach"
      }, {
        ru: "адвокатура",
        en: "advocacy"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "слабый клев",
        en: "middling day"
      }]
    },
        o = {
      plus: [{
        ru: "обрезка, прививка и перепрививка кустарников и деревьев",
        en: "pruning, inoculation shrubs and trees "
      }, {
        ru: "борьба с вредителями и болезнями",
        en: "fight against pests and diseases "
      }, {
        ru: "уборка листьев и ботвы",
        en: "haulm and leaves picking"
      }, {
        ru: "благоустройство сада",
        en: "garden landscaping "
      }],
      minus: [{
        ru: "обильный полив",
        en: "abundant watering"
      }]
    },
        u = {
      plus: [{
        ru: "отказ от вредных привычек",
        en: "getting rid of harmful habits"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "проверка систем безопасности дома, автомобиля",
        en: "check the security systems of your home and car"
      }],
      minus: [{
        ru: "любые домашние хлопоты",
        en: "any household chores"
      }]
    },
        c = {
      plus: [{
        ru: "хороший день, чтобы сдать что-то в ремонт, или отдать на благотворительность, или выбросить",
        en: "repair something, or donate, or throw away"
      }],
      minus: [{
        ru: "любые покупки",
        en: "all purchases"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Жаба; Болото, Лягушка-путешественница, Омут, Трясина",
        en: "Toad; Swamp; Frog-traveler; Whirlpool"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "плавный переход от апатии к новым целям, обновление движения, разоблачение зла, понимание сути жизненного процесса, следование естественным природным ритмам, четкое определение своих жизненных позиций",
        en: "smooth transition from apathy to the new goals, start the motion, exposing the evil, understanding the essence of the life process, following the rhythms of nature, a clear awareness of your own attitudes"
      },
      element: {
        ru: "Земля",
        en: "Earth"
      },
      direction: {
        ru: "Северо-Восток",
        en: "Northeast"
      },
      shape: {
        ru: "квадрат, вертикальный прямоугольник",
        en: "square, vertical rectangle"
      },
      stone: {
        ru: "аурипигмент, желтый нефрит, жадеит, хризопраз",
        en: "orpiment, yellow jade, jade"
      },
      "сolor": {
        ru: "голубой, морской волны и лазоревый",
        en: "blue, aqua and azure"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2d = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "скромная свадьба",
        en: "the modest wedding"
      }, {
        ru: "высокодуховные отношения, а не просто физиология. Идеально для первого секусального контакта человека, пары или зачатия ребенка",
        en: "highly spiritual relationship, not just physiology. Today is perfect for the first sexual contact for the human or couple, and for a child's conceive"
      }],
      minus: [{
        ru: "секс в воде",
        en: "sex in water"
      }]
    },
        r = {
      plus: [{
        ru: "питание и увлажнение кожи",
        en: "nutrition and hydration of the skin"
      }, {
        ru: "стрижка обострит интуицию и усилит проницательность ума",
        en: "haircut will intensify the intuition "
      }, {
        ru: "немного красного вина, пища с большим количеством специй и приправ. Очень полезна куркума, кардамон, гвоздика и перец. На обед сегодня обязательно должен быть приготовлен легкий суп",
        en: "red wine, food with lots of spices and seasonings. Turmeric, cardamom, cloves, and pepper. Make a light soup for a lunch today"
      }, {
        ru: "привычная схема упражнений, снижение уровня нагрузок. Предпочтение ритмичным упражнениям, упражнения на растяжку",
        en: "usual scheme of exercises, rhythmic and stretching exercises"
      }],
      minus: []
    },
        i = {
      plus: [{
        ru: "научные исследования и экспедиции",
        en: "research, expedition"
      }, {
        ru: "спонсирование, инвестирование",
        en: "invest, become a sponsor"
      }, {
        ru: "психологические тренинги",
        en: "psychological trainings"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "слабый клев",
        en: "middling day"
      }]
    },
        o = {
      plus: [{
        ru: "посев и посадка растений, у которых съедобной является подземная часть",
        en: "sowing and planting the plants with edible underground parts"
      }, {
        ru: "обрезка, прививка и перепрививка",
        en: "pruning and inoculation"
      }, {
        ru: "прополка сорняков и опрыскивание растений от болезней и вредителей",
        en: "weeding and spraying against diseases and pests"
      }],
      minus: [{
        ru: "прищипка и пикирование корней",
        en: "work with roots"
      }, {
        ru: "работа с садовым инвентарем",
        en: "work with the garden tools"
      }]
    },
        u = {
      plus: [{
        ru: "лучший день для зачатия ребенка",
        en: "best day for a child's conceive"
      }, {
        ru: "отказ от вредных привычек",
        en: "getting rid of harmful habits"
      }],
      minus: [{
        ru: "прием лекарств без крайней необходимости",
        en: "drugs if they are not absolutely necessary"
      }]
    },
        l = {
      plus: [{
        ru: "забота о домашних питомцах – чистка аквариума, клетки, вычесывание шерсти",
        en: "take care about pets - clean the aquarium, cages, combing the wool"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "любые недорогостоящие покупки",
        en: "inexpensive purchases"
      }],
      minus: [{
        ru: "дорогостоящие приобретения - потребуют много затрат в будущем на ремонт, комплектующие и т.д.",
        en: "expensive purchases will require a lot of costs in the future to repair, accessories, etc."
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Корабль; Трезубец Нептуна; Скипетр; Жезл",
        en: "Ship; Neptune Trident; Scepter"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "осознание цели, чувство внутреннего ритма, следование естественному течению энергий",
        en: "goal awareness, a sense of inner rhythm, following the natural flow of energy"
      },
      element: {
        ru: "Огонь",
        en: "Fire"
      },
      direction: {
        ru: "Юг",
        en: "South"
      },
      shape: {
        ru: "треугольник, зигзаг, изломанная линия",
        en: "triangle, zigzag, broken line"
      },
      stone: {
        ru: "лиловый прозрачный аметист, изумруд, адуляр, розовый и малиновый кварц, селенит",
        en: "purple transparent amethyst, emerald, adularia, pink and crimson quartz, selenite"
      },
      "сolor": {
        ru: "синий, индиго, ультрамариновый, васильковый и сапфировый",
        en: "blue, indigo, ultramarine, cornflower, and sapphire"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2e = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "совместные энергетические упражнения",
        en: "joint energy exercise"
      }, {
        ru: "секс ажурный, трепетный, романтичный, любовь во всех ее проявлениях",
        en: "delicate, timid, romantic sex, love in all its manifestations!"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "чистка кожи, массажи и водные процедуры",
        en: "skin cleansing, massage, sauna, sunbathing, water treatments"
      }, {
        ru: "наращивание ногтей на геле",
        en: "gel nails extension"
      }, {
        ru: "овощи и фрукты, орехи и зелень (сельдерея, пастернака, базилика, петрушки, укропа, листовых салатов и так далее)",
        en: "vegetables and fruits, nuts and herbs (celery, parsnip, basil, parsley, dill, lettuces, and so on)"
      }, {
        ru: "йога и цигун, водные процедуры, прогулки на свежем воздухе",
        en: "yoga and Chi Kung, walking on the fresh air"
      }, {
        ru: "коррективы в спортивную программу, опробирование новшеств, которые пополнят программу в начале следующего лунного цикла",
        en: "adjustments to the sports program, try some innovations that you may use starting from the next lunar month"
      }, {
        ru: "соковый голод",
        en: "juice fasting"
      }, {
        ru: "медитации, дыхательные и энергетические упражнения важнее физических",
        en: "meditation, breathing and energy exercises are more important than physical activity this day"
      }],
      minus: [{
        ru: "окрашивание волос и бровей",
        en: "hair and eyebrows coloring"
      }]
    },
        i = {
      plus: [{
        ru: "логические завершение лунного месяца и всех его задач",
        en: "the logical completion of the lunar month and all its tasks"
      }, {
        ru: "закупки",
        en: "purchasing"
      }, {
        ru: "командировки",
        en: "business trips"
      }, {
        ru: "анализ результатов за месяц",
        en: "analysis of the past month results"
      }, {
        ru: "меценатство духовных проектов",
        en: "invest in the spiritual projects"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "клева нет",
        en: "the worst day for fishing"
      }]
    },
        o = {
      plus: [{
        ru: "посев и посадка растений",
        en: "sowing and planting"
      }, {
        ru: "подкормка растений",
        en: "fertilizing plants"
      }, {
        ru: "удобрение почвы",
        en: "fertilizing the soil"
      }],
      minus: [{
        ru: "пилить деревья, корчевать",
        en: "cut trees, uproot them"
      }, {
        ru: "рвать цветы и растения",
        en: "pick flowers and plants "
      }, {
        ru: "обильный полив",
        en: "abundant watering "
      }, {
        ru: "копать",
        en: "dig"
      }]
    },
        u = {
      plus: [{
        ru: "хирургические операции – голова (глаза и т.д.)",
        en: "surgical operations – head (eyes, etc.)"
      }, {
        ru: "лечение глаз и уход за ними",
        en: "eyes treatment and care"
      }, {
        ru: "отказ от вредных привычек",
        en: "getting rid of harmful habits"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "заготовка фруктов",
        en: "fruits canning"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "любые покупки – и запланированные, и навеянные ежесекундным порывом; и дорогие, и дешевые",
        en: "all purchases - planned and spontaneous, expensive, and cheap"
      }],
      minus: [{
        ru: "покупки в кредит",
        en: "goods on credit"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Лотос; Цветок; День Солнца, Всходы растений",
        en: "Lotus; Flower; Day of the Sun"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "покой, восстановление связи с божественной сущностью, познание самого себя, внесение света во все сферы жизни, божественная карма",
        en: "peace, recovery connection with divine essence, self-knowledge, the introduction of light into all areas of life, the divine karma"
      },
      element: {
        ru: "Вода",
        en: "Water"
      },
      direction: {
        ru: "Север",
        en: "North"
      },
      shape: {
        ru: "волнистые линии, плавные переходы, ассиметрия",
        en: "wavy lines, asymmetry"
      },
      stone: {
        ru: "арагонит, анадалузин, хризопраз",
        en: "aragonite"
      },
      "сolor": {
        ru: "фиолетовый, лиловый, сиреневый и белый",
        en: "purple, mauve, lilac and white"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2f = function (e, t, n) {
    "use strict";

    var a = {
      plus: [],
      minus: [{
        ru: "конфликтный день, сохраняйте спокойствие",
        en: "day may be full of conflicts, stay calm"
      }, {
        ru: "свадьба, развод, планирование свадьбы",
        en: "wedding, divorce, wedding planning"
      }, {
        ru: "секс",
        en: "sex"
      }]
    },
        r = {
      plus: [{
        ru: "эксперименты с волосами. Новый имидж не только преобразит внешность, но и будет точно отображать ваше мироощущение",
        en: "experiments with the hair"
      }, {
        ru: "массаж или сауна",
        en: "massage or sauna"
      }, {
        ru: "упор на дыхательных упражнениях. Медитации, особенно связанные с созерцанием свечей - для очищения, поднятия тонуса и набора энергии",
        en: "focus on breathing exercises. Meditations, especially associated with the candles contemplation, will cleanse your body and soul and raise your energy"
      }],
      minus: [{
        ru: "любование своим отражением в зеркале, косметические процедуры",
        en: "looking in the mirror, beauty treatments"
      }, {
        ru: "наращивание волос",
        en: "hair extension"
      }, {
        ru: "мясо, спиртные напиткы, любые сомнительные, экзотические продукты",
        en: "meat, alcoholic beverages, any questionable, exotic products"
      }]
    },
        i = {
      plus: [{
        ru: "генеральная уборка: в офисе, среди задач и персонала. Избавление от ненужного",
        en: "general cleaning: in the office, among the tasks and staff. All unnecessary throw away"
      }],
      minus: [{
        ru: "опасный день, лучше всем пойти по домам",
        en: "the dangerous day, it’s the best to let everyone go home"
      }]
    },
        s = {
      plus: [],
      minus: [{
        ru: "клева нет",
        en: "the worst day for fishing"
      }]
    },
        o = {
      plus: [{
        ru: "обрезка деревьев и кустарников с целью удаления поврежденных, больных и засохших ветвей",
        en: "pruning trees and shrubs in order to remove the damaged, sick and dead branches"
      }, {
        ru: "опрыскивание растений от вредителей и сорняков",
        en: "spraying the plants against pests and weeds"
      }],
      minus: [{
        ru: "посадка, прививка",
        en: "planting, inoculation"
      }, {
        ru: "рыхление, копание",
        en: "hoeing, digging"
      }, {
        ru: "оработа с корнями растений",
        en: "work with the plant roots"
      }]
    },
        u = {
      plus: [],
      minus: [{
        ru: "удаление, лечение, протезирование зубов",
        en: "dental treatment, teeth removal, getting dentures"
      }, {
        ru: "хирургические операции",
        en: "surgical operations"
      }]
    },
        l = {
      plus: [{
        ru: "размусоривание",
        en: "decluttering"
      }],
      minus: [{
        ru: "уборка, стирка, любые другие домашние хлопоты",
        en: "cleaning, laundry, any other household chores"
      }]
    },
        c = {
      plus: [],
      minus: [{
        ru: "любые покупки. Угроза низкого качества, брака, обмана",
        en: "all purchases. The high risk of poor quality, defects, cheating"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Спрут, Осьминог, Гидра",
        en: "Octopus, Hydra"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "опасность, повышенный самоконтроль, духовное преобразование, очищение авгиевых конюшен внутреннего мира",
        en: "danger, increased self-control, spiritual transformation, cleansing the Augean stables of the inner world"
      },
      element: {
        ru: "Земля",
        en: "Earth"
      },
      direction: {
        ru: "Юго-Запад",
        en: "Southwest"
      },
      shape: {
        ru: "квадрат, горизонтальный прямоугольник",
        en: "square, horizontal rectangle"
      },
      stone: {
        ru: "змеевик, черный жемчуг, перламутр",
        en: "coil, black pearl"
      },
      "сolor": {
        ru: "красный, алый и черный",
        en: "red, scarlet, and black"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2g = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "свадьбы экстремалов",
        en: "wedding for the adventurers"
      }, {
        ru: "секс экстремальный, в необычной обстановке и позах",
        en: "extreme sex in unusual circumstances and positions"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "баня, сауна",
        en: "bath, sauna"
      }, {
        ru: "стрижка (к богатству), покраска, укладка, завивка",
        en: "haircut (brings wealth), hair coloring, styling, perming"
      }, {
        ru: "восточные единоборства",
        en: "martial arts"
      }, {
        ru: "курсы массажа",
        en: "massage courses"
      }, {
        ru: 'блюда с большим количеством горячих специй (чили, черный перец, имбирь, гвоздика, горчица, хрен, чеснок, асафетида, базилик, корица и тому подобные), мясо «активных» животных, например, барана, но ни в коем случае не говядина (мясо "медленного" животного)',
        en: 'dishes with lots of hot spices (chili, black pepper, ginger, cloves, mustard, horseradish, garlic, basil, cinnamon etc.), the meat of "active" animals, such as sheep, but no beef (because this is the meat of "slow" animal)'
      }, {
        ru: "активные физические нагрузки, комплексы на уравновешивание внутренних энергий (цигун). Завершение тренировки сеансами успокаивающего массажа или медитации",
        en: "active physical load, exercises to balance the internal energy (Chi Kung). Complete the workout with a soothing massage or meditation"
      }],
      minus: [{
        ru: "очистительные практики",
        en: "cleansing practices"
      }]
    },
        i = {
      plus: [{
        ru: "путешествия, строительство",
        en: "traveling, construction"
      }, {
        ru: "самые трудные задачи",
        en: "the most difficult tasks"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "клева нет",
        en: "worst day for fishing"
      }]
    },
        o = {
      plus: [{
        ru: "посадка, пересадка и посев быстрорастущих плодовых культур, особенно тех, у которых наземная часть съедобна (листовые овощи, бобы, баклажаны, огурцы, кабачки, тыква, томаты, кукуруза, патиссоны, горох, зелень, перец, капуста, земляника, подсолнечник и т.д.)",
        en: "planting, transplanting of fast-growing fruit plants, especially those that above ground part is edible (leafy vegetables, beans, eggplants, cucumbers, zucchini, tomatoes, corn, peas, greenery, peppers, cabbage, strawberries, sunflowers, etc.)"
      }, {
        ru: "посадка, пересадка, посев цветочных культур, газонных и лекарственных растений",
        en: "planting, transplanting the flowers and medicinal plants"
      }, {
        ru: "рыхление, прополка, минеральная подкормка, прореживание всходов",
        en: "hoeing, weeding, mineral fertilizing, thinning the seedlings"
      }, {
        ru: "нарезка черенков, их подготовка к укоренению и укоренение, прививка",
        en: "slicing the cuttings, preparing them for rooting and rooting, inoculation"
      }, {
        ru: "сбор плодов",
        en: "harvesting the fruit"
      }],
      minus: []
    },
        u = {
      plus: [{
        ru: "лечение костей и суставов",
        en: "bones and joints treatment"
      }, {
        ru: "лечение зубов",
        en: "dental treatment"
      }, {
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamins intake course"
      }],
      minus: [{
        ru: "очистительные процедуры",
        en: "cleansing procedures"
      }]
    },
        l = {
      plus: [{
        ru: "заготовка полуфабрикатов",
        en: "prepare semi finished goods"
      }, {
        ru: "пересадка комнатных растений",
        en: "transplant the houseplants"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "наборы столовых предметов, инвентарь для работы в саду, все, что может подразумевать несколько «агрессивное» применение",
        en: 'sets of dishes, tools for working in the garden, all that can mean some "aggressive" utilization'
      }],
      minus: [{
        ru: "любые другие покупки. Возможны проблемы с качеством таких приобретений, будьте внимательны",
        en: "all other purchases. Probable problems with the quality of acquisitions, be careful"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Снежный барс, готовящийся к прыжку",
        en: "Snow Leopard, prepared to jump"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "повышенный энергетический тонус, осторожность, самоконтроль, одиночная работа",
        en: "increased energy tone, caution, self-control, work"
      },
      element: {
        ru: "Дерево",
        en: "Wood"
      },
      direction: {
        ru: "Восток",
        en: "East"
      },
      shape: {
        ru: "вытянутый вертикально прямоугольник",
        en: "vertical rectangle"
      },
      stone: {
        ru: "джеспилит, рубин, пирит, авантюрин",
        en: "ruby, pyrite, aventurine"
      },
      "сolor": {
        ru: "желтый, золотой, янтарный, лимонный, шафранный и охра",
        en: "yellow, gold, amber, lemon, saffron and ocher"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2h = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "устройте себе тихий праздник и отдых, валяйтесь в постели целый день, подбейте итоги месяца",
        en: "arrange a peaceful holiday and relaxation time for yourself. Be lazy all day, sum up the lunar month results"
      }],
      minus: [{
        ru: "свадьба",
        en: "wedding"
      }, {
        ru: "секс",
        en: "sex"
      }]
    },
        r = {
      plus: [{
        ru: "расслабление, успокоительные процедуры, обдумывание новых косметических курсов",
        en: "relaxing, soothing treatments; considering the new cosmetic courses"
      }, {
        ru: "стрижка надолго сохранит первозданную форму, волосы медленно отрастают",
        en: "haircut from this day will keep its original look for a long time"
      }, {
        ru: "массаж, травяная ванная, расслабиться в тишине",
        en: "massage, herbal bath, relax in the silence"
      }, {
        ru: "легкая еда, употребление овощей и кисло-сладких фрукто",
        en: "light food, no meat, no rough. More vegetables and sour-sweet fruits"
      }, {
        ru: "отдых от тренировок, медитации",
        en: "a break from exercises, meditate, get the relaxing massage"
      }],
      minus: []
    },
        i = {
      plus: [{
        ru: "возвращение долгов",
        en: "pay off the debts"
      }, {
        ru: "подбивание итогов",
        en: "sum up the results"
      }, {
        ru: "поиск, изготовление талисмана",
        en: "find (or make) your mascot"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "клева нет",
        en: "the worst day for fishing"
      }]
    },
        o = {
      plus: [{
        ru: "полив",
        en: "watering"
      }, {
        ru: "легкое рыхление",
        en: "slight hoeing"
      }],
      minus: [{
        ru: "посев и посадка любых растений",
        en: "sowing and planting any plants"
      }, {
        ru: "прививка",
        en: "inoculation"
      }]
    },
        u = {
      plus: [],
      minus: [{
        ru: "уборка, стирка, любые другие домашние хлопоты",
        en: "cleaning, laundry, any other household chores"
      }]
    },
        l = {
      plus: [{
        ru: "покупки на подарок кому-то",
        en: "gifts to someone"
      }],
      minus: [{
        ru: "покупки для себя",
        en: "purchases for yourself"
      }]
    },
        c = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      house: u,
      shopping: l
    },
        d = {
      symbol: {
        ru: "Золотой Лебедь",
        en: "The Golden Swan"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "завершение, отдых, восстановление сил, альтруизм, любовь и гармония",
        en: "the end, rest, recovery of strength, altruism, love and harmony"
      },
      element: {
        ru: "Дерево",
        en: "Wood"
      },
      direction: {
        ru: "Восток",
        en: "East"
      },
      shape: {
        ru: "вертикальный прямоугольник",
        en: "vertical rectangle"
      },
      stone: {
        ru: "белый коралл, горный хрусталь и турмалин",
        en: "white coral, rock crystal and tourmaline"
      },
      "сolor": {
        ru: "оранжевый, каштановый, шоколадный и коричневый",
        en: "orange, red, and chocolate brown"
      }
    };
    t.a = {
      categories: c,
      main: d
    };
  };

  var _2i = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "анализ своего поведения, партнер – это зеркало, разговор о недостатках",
        en: "analysis of the self-behavior, the partner is your mirror now. Talk about each other with each other sincerely"
      }],
      minus: [{
        ru: "свадьба",
        en: "wedding"
      }, {
        ru: "секс",
        en: "sex"
      }]
    },
        r = {
      plus: [{
        ru: "процедуры, связанные с питанием, уходом, прогулки на свежем воздухе",
        en: "procedures related to nutrition, care, walking outdoors"
      }, {
        ru: "маски очищающего действия",
        en: "cleansing masks"
      }, {
        ru: "педикюр - ноги будут избавлены от мозолей и натоптышей на долгое время",
        en: "pedicure - the feet will be spared from calluses and corns for a long time"
      }, {
        ru: "окрашивание седых волос",
        en: "coloring gray hair"
      }, {
        ru: "стрижка детей",
        en: "children haircut"
      }, {
        ru: "тушеные овощи и салаты. Еда в этот период должна быть сытной, но без излишеств",
        en: "steamed vegetables and salads. The food at this time should be nourishing, but with no frills"
      }, {
        ru: "травяные чаи из седативных трав, например, мелисы, ромашки и мяты",
        en: "herbal teas and sedative herbs, such as melissa, chamomile, and mint"
      }, {
        ru: "сеансы целительных медитаций и глубинных релаксаций",
        en: "sessions of healing meditation and deep relaxation"
      }],
      minus: [{
        ru: "продукты, которые могут вызвать аллергию или нежелательные реакции, продукты неестественной происхождения, новые в рационе",
        en: "the products that may cause allergic reactions or unnatural products that you have never eaten before"
      }, {
        ru: "стрижка",
        en: "haircut"
      }, {
        ru: "отлынивание от тренировки",
        en: "stop workouts"
      }, {
        ru: "приступление к разучиванию новых движений или техник, стремление поставить рекорд. Полезно сделать маленький шаг назад и хорошо отработать уже привычные упражнения",
        en: "start learning the new movements and techniques, strive to put the record"
      }]
    },
        i = {
      plus: [{
        ru: "анализ статистики",
        en: "stats analysis"
      }, {
        ru: "сбор отзывов пользователей",
        en: "customer feedback analysis"
      }, {
        ru: "сбор жалоб и предложений персонала, сотрудников",
        en: "collecting employees' complaints and suggestions"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "клева нет",
        en: "worst day for fishing"
      }]
    },
        o = {
      plus: [{
        ru: "посадка, посев и пересадка",
        en: "plant, sow and transplant"
      }, {
        ru: "внесение прикормок",
        en: "make a groundbait"
      }, {
        ru: "заготовка черенков, прививание",
        en: "prepare the cuttings, inoculation"
      }, {
        ru: "полив, причем очень обильный. Также это относится и к компостным кучам",
        en: "water, water, water! And the compost heaps"
      }, {
        ru: "сбор плодов, особенно тех, которые растут над поверхностью",
        en: "harvest the fruits, especially those that grow above the surface"
      }],
      minus: [{
        ru: "обрезка растений",
        en: "pruning plants"
      }]
    },
        u = {
      plus: [{
        ru: "диагностика, удаление, протезирование зубов",
        en: "dental diagnosis, teeth removal, getting dentures"
      }, {
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "dchronic diseases treatment, beginning of the course of medication intake"
      }, {
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamin intake course"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "спросите у домочадцев и себя самих, что можно улучшить в Вашем доме, чего не хватает",
        en: "ask your family and yourself, what could be improved in your home, and what is missing"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "предметы гигиены",
        en: "hygiene products"
      }],
      minus: [{
        ru: "любые другие покупки, особенно дорогостоящие",
        en: "all other purchases, especially expensive ones"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Древо Познания, выбор между добром и злом",
        en: "Tree of Knowledge, the choice between good and evil"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "информация, умение адекватно реагировать, выбор, анализ текущей ситуации",
        en: "information, the ability to respond adequately, selection, analysis of the current situation"
      },
      element: {
        ru: "Дерево",
        en: "Wood"
      },
      direction: {
        ru: "Юго-Восток",
        en: "Southeast"
      },
      shape: {
        ru: "вытянутый вертикально прямоугольник",
        en: "vertical rectangle"
      },
      stone: {
        ru: "сардоникс, амазонит (приносит в дом радость), зеленый нефрит",
        en: "onyx, amazonite (brings joy to home), green jade"
      },
      "сolor": {
        ru: "зеленый, малахитовый и изумрудный",
        en: "green, malachite and emerald"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2j = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "любые перемены",
        en: "any changes"
      }, {
        ru: "свадьба для тех, кто любит постоянные перемены",
        en: "wedding for those who love the constant changes"
      }, {
        ru: "секс простой, расслабляющий, спокойный, целительный",
        en: "simple, relaxing, calm, healing sex"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "заготовка лекарственных трав и приготовление сборов, настоев и притираний. Травы, собранные в этот день, обладают особенной лечебной силой",
        en: "harvesting medicinal herbs, tinctures and ointments making. The herbs gathered on this day, have special healing power"
      }, {
        ru: "много воды, молоко и творог, вегетарианские блюда",
        en: "water, milk, cheese, vegetarian dishes"
      }, {
        ru: "увеличение физических нагрузок ",
        en: "physical load increasing"
      }],
      minus: [{
        ru: "стрижка волос - может увеличить глазное давление, что приведет к ухудшению зрения",
        en: "haircut can increase eye pressure and lead to the vision loss"
      }, {
        ru: "консервированные продукты, соленые и квашеные овощи ",
        en: "canned foods, salted and pickled vegetables"
      }, {
        ru: "голодание и очистка",
        en: "fasting and cleansing"
      }]
    },
        i = {
      plus: [{
        ru: "реорганизация существующих проектов",
        en: "the reorganization of existing projects"
      }, {
        ru: "применение новых методов в работе",
        en: "application of new methods in work"
      }, {
        ru: "перестановка в офисе, ремонт",
        en: "rearrange, repair in the office"
      }, {
        ru: "интеграция",
        en: "integration"
      }],
      minus: []
    },
        s = {
      plus: [],
      minus: [{
        ru: "слабый клев",
        en: "middling day"
      }]
    },
        o = {
      plus: [{
        ru: "посадка и пересадка, т.к. корни преимущественно насыщены питательными веществами",
        en: "plant and transplant - the roots mostly full of nutrients"
      }, {
        ru: "высадка рассады, она будет лучше приниматься",
        en: "plant the seedlings, she will be better accepted"
      }, {
        ru: "прививание, поливать и подкармливать под корень, потому что корневая система растений скорее вбирает и удерживает влагу",
        en: "inoculation, water at the root because the root system of plants faster absorbs and retains moisture"
      }, {
        ru: "пасынкование, прищипка и обрезка растений",
        en: "pruning plants"
      }, {
        ru: "сбор урожая, но только тех культур, у которых пригодна в пищу надземная часть (перец, кабачки, фрукты, зелень, томаты и др.)",
        en: "harvest, but only those plants that have edible above ground part (peppers, zucchini, fruit, greens, tomatoes, etc )"
      }],
      minus: [{
        ru: "пересадка плодовых растений и кустарников",
        en: "transplant fruit plants and shrubs"
      }, {
        ru: "обрезка плодовых деревьев и кустарников",
        en: "pruning the fruit trees and shrubs"
      }]
    },
        u = {
      plus: [{
        ru: "диагностика, удаление, протезирование зубов",
        en: "dental diagnosis, teeth removal, getting dentures"
      }, {
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "dchronic diseases treatment, beginning of the course of medication intake"
      }, {
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamin intake course"
      }],
      minus: [{
        ru: "голодание и очистка",
        en: "fasting and cleansing"
      }]
    },
        l = {
      plus: [{
        ru: "наведение порядка в шкафах, упорядочивание вещей, продумывание систем хранения",
        en: "bring order to your closets, organize the storage systems"
      }, {
        ru: "перестановка мебели",
        en: "rearrange the furniture"
      }, {
        ru: "любая реорганизация быта",
        en: "reorganize your home and life"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: "все что угодно – от бытовых мелочей до недвижимости",
        en: "anything - from household trifles to the real estate"
      }, {
        ru: "обмен товара с браком, бартер",
        en: "exchange of goods with the defects, barter"
      }],
      minus: []
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Единорог, Кабан роющий землю, Вепрь, Лампада с маслом",
        en: "Unicorn, wild Boar digging the earth, Lamp with oil"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "трансформация, изменения, интегрирование, объединение, увеличение нагрузки",
        en: "transformation, modification, integration, association, increasing load"
      },
      element: {
        ru: "Земля",
        en: "Earth"
      },
      direction: {
        ru: "центр, середина, основание",
        en: "center, middle, base"
      },
      shape: {
        ru: "квадрат",
        en: "square"
      },
      stone: {
        ru: "бирюза, розовый халцедон, мрамор",
        en: "turquoise, pink chalcedony, marble"
      },
      "сolor": {
        ru: "голубой, морской волны и лазоревый",
        en: "blue, aqua and azure"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2k = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "совместный отдых, узнавание привычек друг друга и шанс притереться",
        en: "a joint vacation, learn each other habits and get used to each other"
      }, {
        ru: "свадьба для людей, которые мечтают о спокойной жизни",
        en: "wedding for people who dream of a calm life"
      }, {
        ru: "секс трепетный, нежный, ласковые слова, эротический массаж",
        en: "gentle, timid sex, a lot of tender words & erotic massage"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "общие оздоровительные процедуры для кожи, ароматерапия",
        en: "general wellness treatments for the skin, aromatherapy"
      }, {
        ru: "пилинги, скрабы и другие процедуры, ускоряющие омоложение",
        en: "peeling, scrubs and other treatments for rejuvenation"
      }, {
        ru: "маникюр",
        en: "manicure"
      }, {
        ru: "смена цвета волос",
        en: "changing hair color"
      }, {
        ru: "медитационные упражнения, а также пранаяма и все другие виды дыхательных практик. Увеличение нагрузки",
        en: "meditative exercises and Pranayama and all other breathing practices. Increase the physical load"
      }],
      minus: [{
        ru: "эпиляция",
        en: "depilation"
      }, {
        ru: "стрижка",
        en: "haircut"
      }, {
        ru: "молоко и молочные продукты, пиво, избыток воды (почки ослаблены)",
        en: "milk and dairy products, beer, excess water (kidneys are weakened)"
      }, {
        ru: "очистительные процедуры",
        en: "cleansing procedures"
      }]
    },
        i = {
      plus: [{
        ru: "адаптация к произошедшим изменениям",
        en: "adapting to the recent changes"
      }],
      minus: []
    },
        s = {
      plus: [{
        ru: "хороший клев",
        en: "good day for fishing"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "сбор урожая, плоды будут богаты микроэлементами и витаминами",
        en: "harvesting, the fruits are full with trace elements and vitamins"
      }, {
        ru: "выкапывание корнеплодов, они будут отличаться целебными свойствами",
        en: "digging roots, they have the healing properties"
      }, {
        ru: "посадка и пересадка, растения будут отличаться стремительным ростом и богатым плодоношением",
        en: "plant and transplant, the plants will grow rapidly and fruiting abundantly"
      }, {
        ru: "обработка земли, рыхление, обильный полив",
        en: "soil treatment, hoeing, watering"
      }, {
        ru: "прикорневая подкормка минеральными удобрениями, прививки, черенкования, пасынкования",
        en: "basal fertilization, inoculation, breeding"
      }, {
        ru: "сборка семян",
        en: "picking seeds"
      }],
      minus: [{
        ru: "обрезка и пикировка плодовых деревьев",
        en: "pruning fruit trees"
      }]
    },
        u = {
      plus: [{
        ru: "дыхательная гимнастика",
        en: "breathing exercises"
      }, {
        ru: "диагностика, удаление, протезирование зубов",
        en: "dental diagnosis, teeth removal, getting dentures"
      }, {
        ru: "лечение хронических заболеваний, начало курса приема лекарственных препаратов",
        en: "dchronic diseases treatment, beginning of the course of medication intake"
      }, {
        ru: "начало курса приема витаминных препаратов",
        en: "beginning of the vitamin intake course"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "покупка школьного инвентаря детям, планирование интеллектуального и творческого досуга",
        en: "purchase the school equipment for children, plan the intellectual and creative leisure"
      }],
      minus: []
    },
        c = {
      plus: [{
        ru: 'одежда детям "на вырост"',
        en: "children's clothing"
      }, {
        ru: "товары для интеллектуальной и творческой деятельности (тетради, альбомы для рисования или блокноты, книги, карандаши, ручки, кисти и краски, диски с записями различной музыки, билеты на театральное представление или в музей)",
        en: "products for intellectual and creative activity (notebooks, sketchbooks, books, pencils, pens, brushes and paint, CDs with various music, tickets to the theater performance or to the museum)"
      }],
      minus: [{
        ru: "любые другие покупки",
        en: "any other purchases"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Облака, Журавль, Священная вещая птица Ивик",
        en: "Clouds, Crane, sacred ominous bird Ivik"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "релаксация, медитация, отдых, передача мыслей на расстоянии",
        en: "relaxation, meditation, transmission of thought at a distance"
      },
      element: {
        ru: "Металл",
        en: "Metal"
      },
      direction: {
        ru: "Запад",
        en: "West"
      },
      shape: {
        ru: "круг, овал",
        en: "round, oval"
      },
      stone: {
        ru: "мрамор",
        en: "marble"
      },
      "сolor": {
        ru: "синий, индиго, ультрамариновый, васильковый и сапфировый",
        en: "blue, indigo, ultramarine, cornflower, and sapphire"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2l = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "Удачный день! C помощью силы слова сегодня можно получить все, что угодно! Так что, не бросайте слов на ветер",
        en: "Lucky day! Using the power of the word today, you can get anything that you want! So, be careful with what you say"
      }],
      minus: []
    },
        r = {
      plus: [{
        ru: "свадьба творческих личностей, учителей, психологов",
        en: "wedding for the creative personalities, teachers, psychologists"
      }, {
        ru: "секс с неспешной прелюдией, побольше комплиментов, чтение эротической литературы, романтика и страсть",
        en: "sex with a long and slow prelude, a lot of soft words, reading erotic literature together, care of the romance and passion"
      }],
      minus: []
    },
        i = {
      plus: [{
        ru: "косметические процедуры",
        en: "beauty treatments"
      }, {
        ru: "стрижка принесет остроту чувств, увеличит ваши способности к предвидению и проницательность ума",
        en: " haircut brings the acuteness of feelings; enhance your ability to foresight and sagacity of mind"
      }, {
        ru: "завивка волос, покраска, лечение волос",
        en: "hair perm, coloring, hair treatment"
      }, {
        ru: "травяные чаи, зеленый чай",
        en: "herbal teas, green tea"
      }, {
        ru: "яблоки, финики, черешни, абрикосы, вино и так дале",
        en: "apples, figs, cherries, apricots, wine and so on"
      }, {
        ru: "различные дыхательные упражнения",
        en: "various breathing exercises"
      }],
      minus: [{
        ru: "солярий",
        en: "solarium"
      }, {
        ru: "мясо и яйца, черный чай",
        en: "meat and eggs, black tea"
      }]
    },
        s = {
      plus: [{
        ru: "мотивационные беседы и тренинги",
        en: "motivational discussions and workshops"
      }, {
        ru: "словесные поощрения",
        en: "verbal encouragement"
      }, {
        ru: "переговоры, совещания",
        en: "negotiations, meetings"
      }, {
        ru: "спонсирование, инвестирование в творчество",
        en: "sponsoring, investing in creativity"
      }, {
        ru: "поощрение креативных идей",
        en: "encouraging creative ideas"
      }, {
        ru: "разработка контента ресурса, рекламных текстовок",
        en: "work on the resource content, advertising texts"
      }, {
        ru: 'презентации, поиск финансирования с упором на "словесность"',
        en: "presentations, fundraising, with an emphasis on the words"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "хороший клев",
        en: "good day for fishing"
      }],
      minus: []
    },
        u = {
      plus: [{
        ru: "посадка, пересадка, внесение удобрений, прививание",
        en: "planting, transplanting, fertilizing and inoculations"
      }, {
        ru: "уборка урожая растений, у которых съедобны вершки (томаты, фрукты, ягоды, кабачки, патиссоны, горох, фасоль, тыквы, огурцы, перец и др.)",
        en: "harvest the plants with the edible aboveground parts (tomatoes, fruits, berries, zucchini, peas, beans, cucumbers, peppers, etc.)"
      }, {
        ru: "уборка урожая цветочных культур и лекарственных растений",
        en: "harvesting flowers and medicinal plants"
      }, {
        ru: "уборка урожая корнеплодов",
        en: "harvest the root vegetables "
      }, {
        ru: "поливка, причем как можно чаще",
        en: "watering, as often as possible"
      }, {
        ru: "заготовка черенков, покос газона, сбор трав",
        en: "prepare the cuttings, mowing the lawn, picking herbs "
      }, {
        ru: "сбор семян",
        en: "seeds picking"
      }],
      minus: [{
        ru: "уборка ботвы и листьев",
        en: "haulm and leaves picking"
      }, {
        ru: "обрезка и пикировка растений",
        en: "pruning plants"
      }, {
        ru: "обработка земли. Инструментом можно легко повредить корни и молодые побеги растений, которые в этот период очень болезненно реагируют на любые манипуляции",
        en: "soil treatment. Roots and young runners of plants can be easily damaged, they are very sensitive now"
      }]
    },
        l = {
      plus: [{
        ru: "скороговорки для коррекции речи",
        en: "tongue-twisters for the speech correction"
      }, {
        ru: "начало курса дыхательной гимнастики, лечение бронхов и легких, ароматераиии",
        en: "the beginning of the breathing exercises course, bronchial tubes and lungs treatment, aromatherapy"
      }],
      minus: [{
        ru: "удаление зубов, хирургические операции операции",
        en: "teeth removal, surgical operations"
      }]
    },
        c = {
      plus: [{
        ru: "составление графика распределения домашних обязанностей",
        en: "compilation of household responsibilities schedule"
      }, {
        ru: "консервирование и другие заготовки на зиму, квашение, засолка",
        en: "canning"
      }],
      minus: []
    },
        d = {
      plus: [{
        ru: "книги, диски с музыкальными композициями, аудиокассеты или музыкальные инструменты",
        en: "books, CDs with musical compositions, audio cassettes or musical instruments"
      }, {
        ru: "четки, благовония, статуэтки различных божков и т.д.",
        en: "beads, incense, statues of various deities, etc."
      }],
      minus: [{
        ru: "бытовая техника, одежда. В этот день легко стать обманутым рекламой и поддаться на уговоры консультантов",
        en: "household appliances, clothing. You can easily become deceived by advertising and succumb to the entreaties of consultants today"
      }]
    },
        h = {
      relationship: r,
      beauty: i,
      business: s,
      fishing: o,
      garden: u,
      health: l,
      house: c,
      shopping: d,
      lucky: a
    },
        p = {
      symbol: {
        ru: "Жезл, Роза ветров, Эол",
        en: "Rod, Wind rose, Aeolus"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "сила слова, творчество, иная сторона реальности, глубина понимания, креативность, созидательность, коммуникабельность, контроль речи",
        en: "the power of words, creativity, different side of reality, the depth of understanding, communication skills, speech control"
      },
      element: {
        ru: "Металл",
        en: "Metal"
      },
      direction: {
        ru: "Северо-Запад",
        en: "Northwest"
      },
      shape: {
        ru: "круг, спираль",
        en: "circle, spiral"
      },
      stone: {
        ru: "гиацинт, цитрин",
        en: "hyacinth, citrine"
      },
      "сolor": {
        ru: "фиолетовый, лиловый, сиреневый и белый",
        en: "purple, mauve, lilac and white"
      }
    };
    t.a = {
      categories: h,
      main: p
    };
  };

  var _2m = function (e, t, n) {
    "use strict";

    var a = {
      plus: [{
        ru: "извинитесь перед партнером, если есть за что",
        en: "apologize to a partner, if you have the reason for it"
      }],
      minus: [{
        ru: "свадьба (приведет к нестабильности)",
        en: "wedding (will lead to instability)"
      }, {
        ru: "секс",
        en: "sex"
      }]
    },
        r = {
      plus: [{
        ru: "очищение организма от шлаков, новые косметологические процедуры",
        en: "cleansing the body of toxins, new cosmetic procedures"
      }, {
        ru: "голодание, вегетарианская пища, сложносоставные блюда из многих ингредиентов",
        en: "fasting, vegetarian food, dishes with many ingredients"
      }, {
        ru: "составление сложных сборов трав, притираний, мазей, которые будут использоваться потом",
        en: "making complex collections of herbs, ointments, salves, which will be used later"
      }, {
        ru: "стрижка к красоте и благополучию! Волосы станут расти быстрее",
        en: "haircut brings beauty and well-being! The best day to cut hair for length"
      }, {
        ru: "покраска, смена имиджа, эксперименты",
        en: "hair coloring, look changing, experiments"
      }, {
        ru: "уход за лицом",
        en: "facial care"
      }, {
        ru: "релаксационный массаж",
        en: "relaxation massage"
      }, {
        ru: "медитации и все виды упражнений на расслабление",
        en: "meditation and all kinds of relaxation exercises"
      }, {
        ru: "проработка упражнений, особенно тех, которые до этого удавались с трудом",
        en: "work on familiar exercises"
      }, {
        ru: "растяжка. Плавные тянущие упражнения для снятия хронического напряжения",
        en: "stretching. Smooth pulling exercises to relieve chronic stress"
      }],
      minus: [{
        ru: "увеличение нагрузки",
        en: "physical load increasing"
      }]
    },
        i = {
      plus: [{
        ru: "второй шанс для неудавшихся проектов – при условии применения к ним нового подхода",
        en: "second chance for failed projects - in case if you apply a new approach to them"
      }, {
        ru: "открытость ко всему новому – предложениям, методам",
        en: "openness to everything new - proposals, methods, etc."
      }],
      minus: []
    },
        s = {
      plus: [{
        ru: "хороший клев",
        en: "good day for fishing"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "уборка ботвы и листьев",
        en: "haulm and leaves picking"
      }, {
        ru: "полив растений",
        en: "watering"
      }],
      minus: [{
        ru: "укоренение, посадка, пересадка, черенкование овощных, плодовых, бахчевых культур, зелени, ягодных кустарников, земляники и клубники",
        en: "rooting, planting, transplanting, breeding vegetables, fruit, melons, herbs, berry bushes, strawberries and strawberry"
      }]
    },
        u = {
      plus: [{
        ru: "очищение желудка,голодание, очистка",
        en: "stomach cleansing, fasting"
      }],
      minus: []
    },
        l = {
      plus: [{
        ru: "второй шанс для неудавшихся домашних дел (например, приготовить блюдо, которое раньше не удавалось)",
        en: "a second chance for the failed home affairs (for example, cook something that hasn't came out successful before)"
      }],
      minus: [{
        ru: "пересадка растений",
        en: "transplant the houseplants"
      }]
    },
        c = {
      plus: [{
        ru: "антиквариат, вещи, уже бывшие в употреблении",
        en: "antiques, things that have already been in use"
      }],
      minus: [{
        ru: "любые другие покупки",
        en: "any other purchases"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Птица Феникс; Ларь с Сокровищами; Павлин, Мотылек, Костер",
        en: "Phoenix Bird; Peacock, Butterfly, Fire"
      },
      energetics: {
        ru: "пассивный",
        en: "passive"
      },
      keywords: {
        ru: "возрождение, переход на новый уровень, уединение, внутренняя свобода, смелость, открытость всему новому, неспешность, расслабленность",
        en: "rebirth, transition to a new level, privacy, inner freedom, courage, open-mindedness, relax"
      },
      element: {
        ru: "Земля, Огонь",
        en: "Earth, Fire"
      },
      direction: {
        ru: "Северо-Восток",
        en: "Northeast"
      },
      shape: {
        ru: "квадрат, горизонтальный прямоугольник",
        en: "square, horizontal rectangle"
      },
      stone: {
        ru: "гранатит, уваровит, оливин, хризолит",
        en: "garnet, uvarovite, olivine, beryl"
      },
      "сolor": {
        ru: "красный, алый и черный",
        en: "red, scarlet, and black"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2n = function (e, t, n) {
    "use strict";

    var a = {
      plus: [],
      minus: [{
        ru: "конфликтный день, сохраняйте спокойствие",
        en: "day may be full of conflicts, stay calm"
      }, {
        ru: "свадьба (влечет разочарование)",
        en: "wedding (will lead to the disappointment)"
      }, {
        ru: "секс - лучше воздержаться во избежание насилия",
        en: "sex - refrain to avoid the violence"
      }]
    },
        r = {
      plus: [{
        ru: "очищение от шлаков, траволечение, ароматерапия, водные процедуры, успокаивающие",
        en: "cleansing of toxins, herbalism, aromatherapy, hydrotherapy, soothing procedures"
      }, {
        ru: "обертывания и релакс-процедуры ",
        en: "body wraps and relaxation treatments"
      }, {
        ru: "уход за ногами – кожа на долгое время останется шелковистой и мягкой",
        en: "foot care - the skin will remain silky and soft for a long time"
      }, {
        ru: "простая еда, каши, крупы",
        en: "simple food, cereals"
      }, {
        ru: "медитации и сеансы релаксации",
        en: "meditation and relaxation sessions"
      }],
      minus: [{
        ru: "голодание, чистка лица",
        en: "fasting, facial cleansing "
      }, {
        ru: "грибы, неизвестные продукты, мясо, искусственная еда",
        en: "mushrooms, unknown products, meat, artificial food"
      }, {
        ru: "тренировки и активные упражнения",
        en: "workouts and active exercises"
      }]
    },
        i = {
      plus: [{
        ru: "оценка рисков, проработка страхов",
        en: "risks assessment, fighting fears"
      }],
      minus: []
    },
        s = {
      plus: [{
        ru: "хороший клев",
        en: "good day for fishing"
      }],
      minus: []
    },
        o = {
      plus: [{
        ru: "обработка, рыхление земли, посадка и пересадка культур, дающих надземные плоды",
        en: "soil treatment, hoeing, planting and transplanting plants with the above ground fruits"
      }, {
        ru: "подкормка и прививка растений",
        en: "fertilization and inoculation of plants "
      }, {
        ru: "обрезка, черенкование, подготовка к укоренению и укоренение клубничных усов",
        en: "pruning, preparation for rooting and rooting of the strawberry runners "
      }, {
        ru: "прищипка и пикирование растений, прореживание всходов и сбор семян (собранные в этот день семена дадут дружные всходы и отличный урожай)",
        en: "pruning plants, thinning the seedlings and seeds picking (the seeds will give an excellent harvest) "
      }, {
        ru: "полив и подкормка минеральными удобрениями",
        en: "watering and fertilization"
      }, {
        ru: "сбор плодов",
        en: "harvest the fruits "
      }],
      minus: [{
        ru: "обрезка плодовых деревьев, может привести к их гибели",
        en: "pruning the fruit trees may lead to their death"
      }]
    },
        u = {
      plus: [{
        ru: "обратить внимание на хронические болезни",
        en: "pay attention to the chronic diseases"
      }, {
        ru: "очищение от шлаков, траволечение, ароматерапия, водные процедуры, успокаивающие",
        en: "cleansing from slags, herbalism, aromatherapy, hydrotherapy, soothing procedures"
      }],
      minus: [{
        ru: "удаление, лечение, протезирование зубов",
        en: "dental treatment, teeth removal, getting dentures"
      }, {
        ru: "хирургические операции",
        en: "surgical operations"
      }]
    },
        l = {
      plus: [{
        ru: "проверка систем охраны дома",
        en: "check your home security systems"
      }, {
        ru: "уход, удобрение комнатных растений",
        en: "houseplants fertilizing and care"
      }],
      minus: [{
        ru: "работа на кухне, столярные и слесарные работы",
        en: "kitchen, carpentry and plumbing affairs"
      }]
    },
        c = {
      plus: [],
      minus: [{
        ru: "любые покупки несут в себе опасность, даже еда! Лучше поешьте в ресторане",
        en: "all purchases may bring danger, even the food! It is better to eat in the restaurant"
      }]
    },
        d = {
      relationship: a,
      beauty: r,
      business: i,
      fishing: s,
      garden: o,
      health: u,
      house: l,
      shopping: c
    },
        h = {
      symbol: {
        ru: "Летучая Мышь; Нетопырь",
        en: "The Bat"
      },
      energetics: {
        ru: "активный",
        en: "active"
      },
      keywords: {
        ru: "напряженность, хаотичность, негативные эмоции, стремление к радости, смелость, преодоление страха",
        en: "tension, chaos, negative emotions, the desire for happiness, courage, fear overcoming"
      },
      element: {
        ru: "Огонь",
        en: "Fire"
      },
      direction: {
        ru: "Юг",
        en: "South"
      },
      shape: {
        ru: "треугольник, зигзаг, изломанная линия",
        en: "triangle, zigzag, broken line"
      },
      stone: {
        ru: "черный жемчуг, александрит, раухтопаз (дает одиночество)",
        en: "black pearl, alexandrite"
      },
      "сolor": {
        ru: "оранжевый, каштановый, шоколадный и коричневый",
        en: "orange, red, and chocolate brown"
      }
    };
    t.a = {
      categories: d,
      main: h
    };
  };

  var _2o = function (e, t, n) {
    "use strict";

    var a = n(297),
        r = n(308),
        i = n(319),
        s = n(321),
        o = n(322),
        u = n(323),
        l = n(324),
        c = n(325),
        d = n(326),
        h = n(298),
        p = n(299),
        f = n(300),
        g = n(301),
        m = n(302),
        y = n(303),
        b = n(304),
        v = n(305),
        w = n(306),
        A = n(307),
        k = n(309),
        C = n(310),
        x = n(311),
        _ = n(312),
        P = n(313),
        D = n(314),
        T = n(315),
        E = n(316),
        B = n(317),
        M = n(318),
        I = n(320),
        L = [{}, a.a, r.a, i.a, s.a, o.a, u.a, l.a, c.a, d.a, h.a, p.a, f.a, g.a, m.a, y.a, b.a, v.a, w.a, A.a, k.a, C.a, x.a, _.a, P.a, D.a, T.a, E.a, B.a, M.a, I.a];

    t.a = L;
  };

  var _2p = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return a;
    });

    var a = function (e) {
      var t = _$1.document.getElementById(e);

      if (!t) return _$1.console.log("Cannot find Calendar container by id=" + e), 0;
      var n = t.getBoundingClientRect(),
          a = _$1.document.documentElement && _$1.document.documentElement.clientHeight;
      if (!a) throw new _$1.Error("Cannot get clientHeight from document.documentElement");
      var r = a - n.top;
      return t.style.height = r + "px", r;
    };
  };

  var _2q = function (e, t, n) {
    "use strict";

    var a = n(108),
        r = n.n(a),
        i = function () {
      return r.a.get("https://ipinfo.io/json");
    };

    t.a = i;
  };

  var _2r = function (e, t, n) {
    "use strict";

    var a = n(445),
        r = n.n(a),
        i = [{
      days: [29, 30, 1],
      name: "new moon"
    }, {
      days: [2, 3, 4, 5, 6, 7],
      name: "waxing crescent"
    }, {
      days: [8],
      name: "first quarter"
    }, {
      days: [9, 10, 11, 12, 13, 14],
      name: "waxing gibbous"
    }, {
      days: [15],
      name: "full moon"
    }, {
      days: [16, 17, 18, 19, 20, 21],
      name: "waning gibbous"
    }, {
      days: [22],
      name: "last quarter"
    }, {
      days: [23, 24, 25, 26, 27, 28],
      name: "waning crescent"
    }],
        s = function (e) {
      var t = !0,
          n = !1,
          a = void 0;

      try {
        for (var s, o = r()(i); !(t = (s = o.next()).done); t = !0) {
          var u = s.value;
          if (-1 !== u.days.indexOf(e)) return u.name;
        }
      } catch (e) {
        n = !0, a = e;
      } finally {
        try {
          !t && o.return && o.return();
        } finally {
          if (n) throw a;
        }
      }

      return null;
    };

    t.a = s;
  };

  var _2s = function (e, t, n) {
    "use strict";

    var a = {
      lunarCalendar: {
        ru: "Лунный Календарь",
        en: "Lunar Calendar"
      },
      relationship: {
        ru: "отношения",
        en: "relationship"
      },
      beauty: {
        ru: "красота",
        en: "beauty"
      },
      business: {
        ru: "бизнес",
        en: "business"
      },
      fishing: {
        ru: "рыбалка",
        en: "fishing"
      },
      garden: {
        ru: "сад",
        en: "garden"
      },
      health: {
        ru: "здоровье",
        en: "health"
      },
      house: {
        ru: "дом",
        en: "house"
      },
      lucky: {
        ru: "удача",
        en: "lucky"
      },
      shopping: {
        ru: "покупки",
        en: "shopping"
      },
      symbol: {
        ru: "символ",
        en: "symbol"
      },
      energetics: {
        ru: "энергетика",
        en: "energetics"
      },
      keywords: {
        ru: "ключевые слова",
        en: "keywords"
      },
      element: {
        ru: "элемент",
        en: "element"
      },
      direction: {
        ru: "направление",
        en: "direction"
      },
      shape: {
        ru: "форма",
        en: "shape"
      },
      stone: {
        ru: "камень",
        en: "stone"
      },
      "сolor": {
        ru: "цвет",
        en: "сolor"
      },
      moonDay: {
        ru: "лунный день",
        en: "lunar day"
      },
      aries: {
        ru: "луна в Овне",
        en: "moon in Aries"
      },
      taurus: {
        ru: "луна в Тельце",
        en: "moon in Taurus"
      },
      gemini: {
        ru: "луна в Близнецах",
        en: "moon in Gemini"
      },
      cancer: {
        ru: "луна в Раке",
        en: "moon in Cancer"
      },
      leo: {
        ru: "луна во Льве",
        en: "moon in Leo"
      },
      virgo: {
        ru: "луна в Деве",
        en: "moon in Virgo"
      },
      libra: {
        ru: "луна в Весах",
        en: "moon in Libra"
      },
      scorpio: {
        ru: "луна в Скорпионе",
        en: "moon in Scorpio"
      },
      sagittarius: {
        ru: "луна в Стрельце",
        en: "moon in Sagittarius"
      },
      capricorn: {
        ru: "луна в Козероге",
        en: "moon in Capricorn"
      },
      aquarius: {
        ru: "луна в Водолее",
        en: "moon in Aquarius"
      },
      pisces: {
        ru: "луна в Рыбах",
        en: "moon in Pisces"
      },
      start: {
        ru: "начало",
        en: "start"
      },
      end: {
        ru: "конец",
        en: "end"
      },
      moonPhase: {
        ru: "фаза луны",
        en: "moon phase"
      },
      zodiacSign: {
        ru: "знак зодиака",
        en: "zodiac sign"
      },
      "waxing crescent": {
        ru: "Растущая Луна",
        en: "waxing crescent"
      },
      "first quarter": {
        ru: "Первая Четверть",
        en: "first quarter"
      },
      "waxing gibbous": {
        ru: "Растущая Луна",
        en: "Waxing Gibbous"
      },
      "full moon": {
        ru: "Полнолуние",
        en: "Full Moon"
      },
      "waning gibbous": {
        ru: "Убывающая Луна",
        en: "Waning Gibbous"
      },
      "last quarter": {
        ru: "Последняя Четверть",
        en: "Last Quarter"
      },
      "waning crescent": {
        ru: "Убывающая Луна",
        en: "waning crescent"
      },
      "new moon": {
        ru: "Новолуние",
        en: "New Moon"
      },
      tryAgain: {
        ru: "Попробуйте еще раз!",
        en: "Try again!"
      },
      clickToMe: {
        ru: "Нажмите на день, чтобы узнать больше:",
        en: "Click on the day to learn more:"
      },
      step1: {
        ru: "Вас приветствует Лунный Календарь!<br/> Позвольте нам рассказать о том, как он устроен",
        en: "Welcome to the Moon Organizer!<br/> Let us guide you through its features"
      },
      step2: {
        ru: "Нажмите левой клавишей мыши на дне,<br/> чтобы узнать о нем больше",
        en: "Left-click on the day to learn more about it"
      },
      step3: {
        ru: "Листайте вниз, чтобы прочесть<br/> все советы на этот день",
        en: "Scroll down to read<br/> all tips for this day"
      },
      step4: {
        ru: '<div style="font-size: 18px;">Со знаком "+" - то, чему Луна<br/> благоволит, "-" - то, что лучше<br/> отложить на другой день</div>',
        en: '<div style="font-size: 18px;">Things marked "+" are good<br/> to make on this day, and "-" things<br/> are better to postpone</div>'
      },
      step5: {
        ru: "<div>Выберите календарь на интересующую Вас тему,<br/> чтобы получить советы только по ней</div>",
        en: "Choose a calendar of the topic you are interested in<br/> to get appropriate tips only"
      },
      step6: {
        ru: "<div>Переходите на предыдущий или следующий месяц,<br/> нажимая на стрелках</div>",
        en: "Go to the previous or next month<br/> by clicking on the arrows"
      },
      step7: {
        ru: "Нажмите на дне, чтобы<br/> получить советы на него по выбранной Вами теме",
        en: "Click on the day<br/> to get tips on your chosen topic"
      },
      step8: {
        ru: "",
        en: ""
      },
      step9: {
        ru: "<div>Чтобы вернуться на общий календарь, нажмите сюда</div>",
        en: "Click here to return to the general calendar"
      },
      step10: {
        ru: "Вот и все! Приятного использования!",
        en: "That's all! Enjoy using!"
      },
      ok: {
        ru: "Хорошо!",
        en: "OK"
      },
      skip: {
        ru: "Пропустить",
        en: "Skip"
      },
      gotIt: {
        ru: "Понятно",
        en: "Got it!"
      },
      thanks: {
        ru: "Спасибо!",
        en: "Thanks!"
      },
      today: {
        ru: "Сегодня",
        en: "Today"
      },
      helpTooltip: {
        ru: "Нажмите здесь, чтобы увидеть справку",
        en: "Click here to see tooltip"
      },
      logIn: {
        ru: "Войти",
        en: "Log In"
      },
      enterEmail: {
        ru: "Введите email",
        en: "Enter email"
      },
      enterPassword: {
        ru: "Введите пароль",
        en: "Enter password"
      },
      invalidEmail: {
        ru: "Неверный email",
        en: "Invalid email"
      },
      emailAlreadyExists: {
        ru: "Пользователь с таким email'ом уже существует",
        en: "User with this email already exists"
      },
      invalidLogin: {
        ru: "Неправильный email или пароль",
        en: "Invalid email or password "
      },
      invalidPasswordLength: {
        ru: "Пароль должен быть хотябы 8 символов",
        en: "Password must be at least 8 characters"
      },
      doYouLikeMO: {
        ru: "Вам понравился наш Лунный Календарь?",
        en: "Do You like Moon Organizer?"
      },
      leaveFeedback: {
        ru: "Пожалуйста, оставьте свой отзыв, чтобы мы могли сделать календарь лучше:",
        en: "Please, leave a feedback to help us to get better:"
      },
      terrible: {
        ru: "ужасно",
        en: "terrible"
      },
      bad: {
        ru: "плохо",
        en: "bad"
      },
      normal: {
        ru: "нормально",
        en: "normal"
      },
      good: {
        ru: "хорошо",
        en: "good"
      },
      excellent: {
        ru: "отлично",
        en: "excellent"
      },
      send: {
        ru: "отправить",
        en: "send"
      },
      cancel: {
        ru: "отмена",
        en: "cancel"
      },
      upload: {
        ru: "загрузить",
        en: "upload"
      },
      mustBeImage: {
        ru: "Файл должен быть изображеним. Пожалуйста, попробуйте еще раз.",
        en: "File must be image. Please, try again."
      },
      uploadingError: {
        ru: "Ошибка загрузки. Пожалуйста, попробуйте еще раз.",
        en: "Uploading error. Please, try again."
      },
      uploadPhoto: {
        ru: "Загрузите Ваше фото:",
        en: "Upload your photo"
      },
      uploadingSucces: {
        ru: "Ваше фото успешно загружено.",
        en: "Your photo has been uploaded successful."
      },
      day: {
        ru: "День",
        en: "Day"
      },
      month: {
        ru: "Месяц",
        en: "Month"
      },
      year: {
        ru: "Год",
        en: "Year"
      },
      time: {
        ru: "Время",
        en: "Time"
      },
      save: {
        ru: "Сохранить",
        en: "Save"
      },
      addToBookmarks: {
        ru: "ДОБАВЬТЕ КАЛЕНДАРЬ В ЗАКЛАДКИ",
        en: "ADD CALENDAR TO THE BOOKMARKS"
      },
      addToBookmarksText: {
        ru: '\n        <div class="bookmarks-modal">\n            <div>\n                Нажмите <strong>Ctrl + D</strong>,<br/> чтобы не потерять Лунный Календарь.\n            </div> \n            <div class="bookmarks-modal__thanks">\n                Мы будем рады увидеть Вас снова! <i class="fa fa-smile-o" aria-hidden="true"></i>\n            </div>\n        </div>\n    ',
        en: '\n        <div class="bookmarks-modal">\n            <div>\n                Press <strong>Ctrl + D</strong>,<br/> to save Lunar Calendar.\n            </div> \n            <div class="bookmarks-modal__thanks">\n                We will be glad to see You again! <i class="fa fa-smile-o" aria-hidden="true"></i>\n            </div>\n        </div>\n    '
      },
      name: {
        ru: "Имя",
        en: "Name"
      },
      surname: {
        ru: "Фамилия",
        en: "Surname"
      },
      birthday: {
        ru: "Дата и время рождения",
        en: "Date and time of birth"
      },
      interestCateg: {
        ru: "Интересующие категории:",
        en: "Interesting categories:"
      },
      oldPassword: {
        ru: "Старый пароль",
        en: "Old password"
      },
      newPassword: {
        ru: "Новый пароль",
        en: "New password"
      },
      enterName: {
        ru: "Пожалуйста, введите ваше имя.",
        en: "Please, enter your name."
      },
      enterBirthday: {
        ru: "Пожалуйста, введите введите ваш день рождения.",
        en: "Please, enter you birthday."
      },
      enterCategory: {
        ru: "Пожалуйста, выберете хоть одну категорию.",
        en: "Please, choose at least one category."
      },
      passwordReq: {
        ru: "Пароль должен быть не меньше 8 символов.",
        en: "Password must be at least 8 characters."
      },
      oopsTitle: {
        ru: "Упс!",
        en: "Oops!"
      },
      oopsMsg: {
        ru: "Что-то пошло не так, попробуйте снова!",
        en: "Something went wrong, try again! "
      },
      successTitle: {
        ru: "Готово!",
        en: "Success!"
      },
      successMsg: {
        ru: "Ваши данные успешно сохранены.",
        en: "Your data was saved successfully."
      },
      editProfile: {
        ru: "Редактирование профиля",
        en: "Edit profile"
      },
      lunarCalc: {
        ru: "Калькулятор лунных дней",
        en: "Lunar Days Calculator"
      },
      selectLd: {
        ru: "Выберете дату, чтобы рассчитать лунный день:",
        en: "Select the date to calculate the lunar day:"
      },
      selectCity: {
        ru: "Выберете город:",
        en: "Select the city:"
      },
      startWriteCity: {
        ru: "Начните писать название города",
        en: "Start writing the city name"
      },
      calculate: {
        ru: "Рассчитать",
        en: "Calculate"
      },
      calcTooltip: {
        ru: "* После нажатия на эту кнопку Вы перейдете на страницу лунного дня",
        en: "* After clicking on this button you will go to the page of the lunar day"
      },
      monthPlan: {
        ru: "В ближайший месяц я планирую:",
        en: "In the nearest month I plan to:"
      },
      myTodoList: {
        ru: "Мой список дел",
        en: "My To-Do List"
      },
      todoListTooltip: {
        ru: "Выберите дела из списка ниже, которые Вы планируете сделать в ближайший месяц, и Лунный Календарь подберет лучшие даты специально для Вас!",
        en: "Choose the items from the list below, which you plan to do in the nearest month, and Moon Organizer will pick up the best dates especially for you!"
      },
      todoPlanned: {
        ru: "Вы запланировали:",
        en: "You have planned:"
      },
      todoDaysTooltip: {
        ru: "Лучшие даты для Ваших дел подобраны! Внесите их в календарь, чтобы не забыть.",
        en: "The best dates for your to-dos have been calculated! Add them to the calendar as a reminder."
      },
      createNew: {
        ru: "Создать новый",
        en: "Create new"
      },
      addToCalendar: {
        ru: "Внести в Календарь",
        en: "Add to Calendar"
      },
      yourTaskList: {
        ru: "Ваш список дел от:",
        en: "Your to-do list from:"
      },
      myCalendar: {
        ru: "Мой календарь",
        en: "My calendar"
      },
      myBiorhythms: {
        ru: "Мои биоритмы",
        en: "My biorhythms"
      },
      lunarDaysCalc: {
        ru: "Калькулятор лунных дней",
        en: "Lunar days calculator"
      },
      lunarBirthday: {
        ru: "Лунный день рождения",
        en: "Lunar birthday"
      },
      lunarZodiacSign: {
        ru: "Лунный знак Зодиака",
        en: "The lunar Zodiac sign"
      },
      lunarBirthdayDescription: {
        ru: "Лунный день, в который мы рождаемся, наделяет нас особенностями характера, набором способностей и возможностей, предопределяет здоровье, активность, удачу. Знание лунного дня рождения помогает лучше понять себя и определить свои сильные и слабые стороны, черты, которые стоит развивать, и ситуации, которых стоит избегать.",
        en: "The lunar day of our birth endows us with its character traits and a set of abilities and opportunities, predetermines health, activity, and luck. Knowing the lunar birthday helps to better understand yourself and determine your strengths and weaknesses, traits that are worth developing, and situations that you should avoid."
      },
      ruler: {
        ru: "Правящая планета",
        en: "Rule"
      },
      talismans: {
        ru: "Талисманы",
        en: "Talismans"
      },
      character: {
        ru: "Характер",
        en: "Character"
      },
      sowingCalendar: {
        ru: "Посевной календарь",
        en: "Sowing calendar"
      },
      childConception: {
        ru: "Зачатие ребенка",
        en: "Child conception"
      },
      physicalBio: {
        ru: "Физический",
        en: "Physical"
      },
      emotionalBio: {
        ru: "Эмоциональный",
        en: "Emotional"
      },
      intellectualBio: {
        ru: "Интеллектуальный",
        en: "Intellectual"
      },
      bioTitle: {
        ru: "На графике ниже отображены Ваши биоритмы на ближайший месяц:",
        en: "On the chart below, You can see your biorhythms for the nearest month:"
      },
      forgetPassword: {
        ru: "Забыли пароль?",
        en: "Forgot your password?"
      },
      signUp: {
        ru: "Зарегистрироваться",
        en: "Sign Up"
      },
      resetTitle: {
        ru: "Введите почту, на которую зарегистрирован Ваш аккаунт:",
        en: "Enter the e-mail which is related to your account"
      },
      resetTooltip: {
        ru: 'Мы отправили на Вашу почту Ваш новый пароль. Если не видите письма, проверьте, пожалуйста, папку "Спам" или мы можем отправить Вам его еще раз',
        en: "We've sent your new password to your e-mail. If you can't find it, please check the \"Spam\" folder, or we can resend it"
      },
      resendPass: {
        ru: "отправить еще раз",
        en: "resend my password"
      },
      notFoundMail: {
        ru: "Ваша почта не найдена в нашей базе. Пожалуйста, попробуйте снова.",
        en: "Your mail was not found in our database. Please, try again."
      },
      promoTitle: {
        ru: 'Активируйте Персональный Лунный Календарь прямо сейчас и получите в подарок книгу "Правильное питание по Луне. 145 рецептов"',
        en: "Hurry up to grab your 40% off discount for the Personal Lunar Calendar!"
      },
      promoDesk: {
        ru: "Теперь Лунный Календарь учитывает <b>Ваши</b> предпочтения, сам подбирает лучшие даты для <b>Ваших</b> дел и передает <b>Вам</b> советы звезд, основываясь на дате и времени <b>Вашего</b> рождения!",
        en: "From now on, Lunar Calendar takes into account <b>Your</b> preferences, selects the best dates for <b>Your</b> plans and passes you the stars'tips, based on the date and time of <b>Your</b> birth!"
      },
      promoBuyText: {
        ru: "Активируйте Персональный Календарь всего за",
        en: "Hurry up to activate Personal Calendar for only "
      },
      activate: {
        ru: "Активировать за",
        en: "Activate for"
      },
      promoCardTitle: {
        ru: "8 преимуществ Персонального Лунного Календаря",
        en: "8 advantages of the Personal Lunar Calendar"
      },
      promoCardSubtitle: {
        ru: "которых нет у бесплатной версии:",
        en: "over the free version:"
      },
      supportTeam: {
        ru: "Служба Поддержки",
        en: "The Support Service"
      },
      supportTeamText: {
        ru: "с радостью ответит на все Ваши вопросы",
        en: "will gladly give answers for all your questions"
      },
      learnMore: {
        ru: "Узнать больше",
        en: "Learn more"
      },
      personalLunarCalendar: {
        ru: "Персональный Лунный Календарь",
        en: "Personal Lunar Calendar"
      },
      logOut: {
        ru: "Выйти",
        en: "Log out"
      },
      activateDescription: {
        ru: "Нажатие на эту кнопку приведет Вас на страницу регистрации. После оплаты Вы получите доступ к Персональному календарю, и данные для входа будут отправлены на Вашу почту.",
        en: "Clicking on this button will take you to the registration page. After payment, you will have access to the Personal Calendar, and the login information will be sent to your mail."
      },
      termOfUse: {
        ru: "Правила использования",
        en: "Terms of Use"
      },
      privacyPolicy: {
        ru: "Конфиденциальность",
        en: "Privacy Policy"
      },
      refundPolicy: {
        ru: "Политика возврата",
        en: "Refund Policy"
      },
      termOfUseLink: {
        ru: "https://moonorganizer.com/ru/pravila-ispolzovanija/",
        en: "https://moonorganizer.com/en/terms-of-use/"
      },
      privacyPolicyLink: {
        ru: "https://moonorganizer.com/ru/politika-konfidencialnosti/",
        en: "https://moonorganizer.com/en/privacy-policy/"
      },
      refundPolicyLink: {
        ru: "https://moonorganizer.com/ru/politika-vozvrata-denezhnuh-sredstv/",
        en: "https://moonorganizer.com/en/refund-policy/"
      },
      contactsLink: {
        ru: "https://moonorganizer.com/ru/kontaktu/",
        en: "https://moonorganizer.com/en/contacts/"
      },
      contactUs: {
        ru: "Свяжитесь с нами",
        en: "Contact us"
      },
      registration: {
        ru: "Регистрация",
        en: "Registration"
      },
      checkout: {
        ru: "Перейти к оплате",
        en: "Checkout"
      },
      thanksTitle: {
        ru: "Спасибо, что выбрали нас!",
        en: " Thank you for choosing us!"
      },
      thanksDesc: {
        ru: "Данные для входа в Ваш Персональный календарь и подарок\n отправлены на указанную Вами почту.",
        en: "Login information for your Personal Calendar\n has been sent to the email you specified."
      },
      loading: {
        ru: "Загрузка...",
        en: "Loading..."
      },
      nothingFound: {
        ru: "Ничего не найдено",
        en: "Nothing found"
      },
      promoBtnText: {
        ru: "Вам подарок!",
        en: "40% off discount"
      },
      blurActivate: {
        ru: "Активировать",
        en: "Activate"
      },
      blurText: {
        ru: "Информация по этой категории доступна только в Персональном Лунном Календаре",
        en: "Information on this category is available only in the Personal Lunar Calendar"
      }
    };
    t.a = a;
  };

  var _2t = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в первый лунный день – настоящие мечтатели и всю жизнь немного дети, пребывающие в ожидании чуда. Обладают мощной силой мысли, при позитивном мышлении очень удачливы. <b>Будьте внимательны к тому, о чем и как вы думаете.</b>",
      en: "The people who were born on the first lunar day are dreamers and stay children for a lifetime, waiting for a miracle. They have strong thinking power, and if think positively, they're very lucky. <b>Be careful about what and how you think.</b>"
    },
        r = {
      ru: "Способны горы свернуть – при условии, что начнут действовать. Для многих детей новолуния приступить к реализации задуманного тяжело, для них очень велик соблазн всю жизнь провести в забвении, в ожидании чего-то, в мечтах о подвигах, славе, великих свершениях. Однако, стоит себя перебороть и сделать первый шаг, как планы рожденных в 1 лунный день реализуются достаточно легко и быстро к удивлению окружающих. <b>Просто начните это делать, о чем бы Вы не мечтали!</b>",
      en: 'Born on the first lunar day can reach the sky - in the condition that they will start to do something. For many "new moon" children it is hard to embark to the realization of the conceived plans, it is very tempting for them to spend all their life in oblivion, in anticipation of something, in dreams of deeds, glory, great accomplishments. However, it is worth overcoming and taking the first step, as the plans of those who born on the 1st lunar day are realized quite easily and quickly to the surprise of others. <b>Just start to do something from your dream list!</b>'
    },
        i = {
      ru: "Вторая ловушка после соблазна раствориться в мечтах – это работа на износ. Рожденные в первый лунный день тяжело восстанавливают силы, залог здоровья и долголетия для них – бережное отношение к себе. <b>Не переутомляйтесь, и надолго сохраните энергичность.</b>",
      en: "The second trap, after the temptation to dissolve into dreams, is to work on wear and tear. Born on the first lunar day find it hard to restore strength, the guarantee of health and longevity for them is in the thorough care of yourself. <b>Do not overwork, and you'll keep energy for a long time.</b>"
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2u = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в десятый лунный день  - любимчики общества, доноры энергии для окружающих. Используя свою притягательность на всеобщее благо, эти люди становятся счастливыми и успешными.",
      en: "Born on the tenth lunar day are the favorites of society, energy donors for others. Using their attractiveness to the common good, these people become happy and successful."
    },
        r = {
      ru: "Рожденные в десятые лунные сутки очень любознательны и интересны, часто наделены творческими талантами. У них тесная связь с предками, от них «десятки» получают силу, но и возвращают их долги. <b>Изучайте дерево своего рода, используйте опыт прошлых поколений</b> – полученные знания наверняка помогут Вам в реализации Ваших планов.",
      en: 'Born on the tenth lunar day are very inquisitive and interesting, often endowed with the creative talents. They have a close relationship with their ancestors, "tens" get the strength from them, but also return their debts. <b>Learn your family tree, use the experience of past generations</b> - the knowledge you have gained will certainly help you in the realization of your plans.'
    },
        i = {
      ru: "Люди десятого лунного дня с детских лет умеют находить для себя источники энергии. А вот куда ее потратить, знают не всегда. Лучшие варианты инвестирования своих сил для них – в путешествия, спорт и заботу о родных и близких.",
      en: "People of the tenth lunar day from their childhood can find sources of energy for themselves. But they don't always know where to spend it. The best options for investing the strength for them - in travel, sports and caring for their loved ones."
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2v = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в одиннадцатый лунный день  - очень творческие и зачастую непредсказуемые люди. Их энергетика очень сильна, однако реализовывать свой энергетический потенциал люди одиннадцатых лунных суток могут только с душой, только в том деле, которым они искренне пожелают заниматься. <b>Не делайте ничего по принуждению – это не принесет Вам желаемых результатов.</b>",
      en: 'Born on the eleventh lunar day are very creative and often unpredictable people. Their energy is very strong, but people of the eleventh lunar day can realize their energy potential only "with a soul", only in a matter that they sincerely wish to do. <b>Do not do anything under compulsion - this will not bring you desired results.</b>'
    },
        r = {
      ru: "В одиннадцатый лунный день рождаются хорошие собеседники, они интересны другим своим внутренним миром, а потому с легкостью притягивают к себе людей и могут оказывать на них влияние. Талантливы, часто наделены необычными врождёнными способностями. <b>Развивайте свои таланты!</b> Их ни в коем случае нельзя «губить», «прятать» и «хоронить».",
      en: 'On the eleventh lunar day, good interlocutors are born. They attract others with the deep inner world, and can easily influence people. They are talented, often endowed with unusual innate abilities. <b>Develop your talents!</b> They can\'t be "destroyed", "hidden" and "buried", no way.'
    },
        i = [a, r];
    t.a = i;
  };

  var _2w = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в двенадцатый лунный день – великие миротворцы, очень добрые и милосердные люди, искренние альтруисты. У них открытые сердца, призванные помогать другим. Зачастую люди двенадцатого лунного дня готовы на самопожертвование, и из-за этой черты на их долю может выпасть немало страданий. Однако, рожденных в двенадцатый лунный день это не пугает. Они несут в мир добро любой ценой, осознав свое <b>призвание в созидании, любви и прощении.</b>",
      en: "Born on the twelfth lunar day people are great peacekeepers, very kind and merciful persons, sincere altruists. They have open hearts, feel the desire to help others. Often, people of the twelfth lunar day are ready for self-sacrifice, and because of this trait, they are suffering a lot. However, such people aren't afraid of suffering. They bring good to the world at any cost, realizing their <b>vocation in creation, love, and forgiveness.</b>"
    },
        r = {
      ru: "Люди двенадцатого лунного дня способны тонко чувствовать и понимать все то, что происходит вокруг. Очень важно для них иметь возможность выражать свои чувства. <b>Не подавляйте свои чувства и не скрывайте их!</b> Иначе впадете в апатию.",
      en: "People of the twelfth lunar day are able to feel and understand everything that is happening around them. It is very important for them to be able to express their feelings. <b>Do not repress your feelings and do not hide them!</b> Otherwise, you will fall into the apathy."
    },
        i = {
      ru: "Рожденные в этот день с малых лет доверчивы, застенчивы и стремятся помогать окружающим. Разумеется, найдутся желающие воспользоваться Вашей наивностью и добротой. Но помните: <b>Вам даны силы, чтобы пройти через эти страдания.</b>",
      en: "Born on this day are trustful, shy and seek to help others from a small age. Of course, others are willing to take advantage of their naivety and kindness. But remember: <b>you are given strength to go through these sufferings.</b>"
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2x = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в тринадцатый лунный день  по природе своей – новаторы и изобретатели. У них есть особый дар – совершенно иначе воспринимать мир. Все, с чем соприкасаются люди тринадцатых лунных суток, окрашивается в новые краски. Благодаря врожденной чуткости, они способны чувствовать и более тонкие миры, из которых черпают свою энергетику и вдохновение.",
      en: "Born on the thirteenth lunar day are innovators and inventors. They have a special gift - to perceive the world in a completely different way. Everything that the people of the thirteenth lunar day come into contact with is painted with the new colors. Thanks to their inherent sensitivity, they are able to feel the more subtle worlds, from which they derive their energy and inspiration."
    },
        r = {
      ru: "Для счастья и здоровья рожденным в тринадцатый лунный день необходима разнообразная пища для ума, возможность реализовать свои смелые задумки. <b>Окружите себя возвышенными вещами и людьми!</b> Что касается пищи для желудка, тут стоит быть более переборчивым и тщательно продумать свою диету.",
      en: "For happiness and health born on the thirteenth lunar day need a variety of food for the mind, the opportunity to realize their bold ideas. <b>Surround yourself with sublime things and people!</b> As for food for the stomach, it is worth to be more thorough and think carefully about your diet."
    },
        i = [a, r];
    t.a = i;
  };

  var _2y = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в четырнадцатый лунный день  - принципиальные и волевые лидеры. Это люди, за которыми пойдет толпа – самостоятельные, активные и целеустремленные. Удача сопутствует им в любых начинаниях, которые соответствуют их природе.",
      en: "Born on the fourteenth lunar day people are the principled and strong-willed leaders. They are people, with whom the crowd will go; independent, active and purposeful. Luck accompanies them in any aspiration which corresponds to their nature."
    },
        r = {
      ru: "Люди четырнадцатого лунного дня способны совершать подвиги и вдохновлять на них окружающих. Это прекрасные педагоги, проповедники, медики и политические лидеры. Они не склонны к легкомыслию и практически всегда твердо следуют своим принципам. <b>Отстаивайте свои убеждения, не ведитесь на чужое мнение!</b> Вы – тот, кто несет идеи в мир, а не наоборот.",
      en: "People of the fourteenth lunar day are able to perform feats and inspire others for them. They are wonderful teachers, preachers, doctors and political leaders. They are not inclined to frivolity and almost always follow their principles. <b>Defend your beliefs; do not rely on someone else's opinion!</b> You are the one who brings ideas to the world, and not vice versa."
    },
        i = {
      ru: "Благодаря хорошей интуиции и склонности к озарениям, рожденные в четырнадцатые лунные сутки довольно рано определяют, по какому пути пойдут, и придерживаются его в течение всей жизни. <b>Развивайтесь духовно, чтобы осознать цель своей жизни и обрести гармонию с собой.</b>",
      en: "Thanks to good intuition and inclination to insights, born on the fourteenth lunar day rather early determine which way to go, and stick to it throughout their life. <b>Develop spiritually to realize the purpose of your life and to find harmony with yourself.</b>"
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2z = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в пятнадцатый лунный день  - бунтари, живущие моментом.  Они очень умны и часто наделены творческими талантами, но не могут полноценно реализоваться под чьим-либо началом. <b>Смело отправляйтесь в свободное плавание!</b> Лишь оно поможет Вам правильно использовать весь Ваш потенциал.",
      en: "Born on the fifteenth lunar day people are the rebels, who live in the moment. They are very intelligent and often endowed with creative talents, which cannot be fully realized under anyone else's pressure. <b>Feel free to go on a freewheeling!</b> This is the one thing which will help you to properly use all your potential."
    },
        r = {
      ru: "Люди пятнадцатых лунных суток очень эмоциональны, из-за чего сталкиваются с проблемами социального характера. Окружающие часто считают их характер тяжелым, вспыльчивым, упертым. Кроме того, рожденные в пятнадцатый лунный день очень любвеобильны и подвластны искушениям и соблазнам. <b>Не идите слепо на поводу у своих инстинктов!</b> Научившись контролировать всплески своих эмоций, Вы сможете достичь того душевного умиротворения, к которому так стремитесь.",
      en: "People of the fifteenth lunar day are very emotional, and because of this, they face a lot of social problems. The surrounding people often consider their character as heavy, quick-tempered, stubborn. In addition, born on the fifteenth lunar day are very susceptible and easy to seduce. <b>Do not blindly follow your instincts!</b> Having learned to control the bursts of your emotions, you will be able to achieve the peace of mind which you're striving for."
    },
        i = [a, r];
    t.a = i;
  };

  var _2A = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в шестнадцатый лунный день – высокодуховные созерцатели. Они чисты душой, чувствуют свою глубокую связь с природой, которая заряжает их энергией. Если Вы чувствуете усталость или впадаете в депрессию, выбирайтесь за город – <b>уединение на природе поможет Вам восстановить силы.</b>",
      en: "Born on the sixteenth lunar day are the highly spiritual contemplators. They are pure in heart, they feel their deep connection with nature, which charges them with energy. If you feel tired or depressed, get out of town - <b>solitude on the nature will help you regain strength.</b>"
    },
        r = {
      ru: "Люди шестнадцатых лунных суток – миротворцы, несущие в мир любовь, взаимопонимание, умиротворение, душевное спокойствие.  Они многое успевают за жизнь и пользуются заслуженным уважением окружающих. Рожденные в шестнадцатый лунный день – это люди с непорочной душой, могут легко прощать других, никого не судят. Отличаются высоким духовным уровнем и жизнелюбием.",
      en: "People of the sixteenth lunar day are peacemakers who bring love, mutual understanding, and peace to the world. They achieve a lot of goals during the life and enjoy the well-deserved respect of others. Born on the sixteenth lunar day are people with an unblemished soul, they can easily forgive others, they do not judge anyone. They are distinguished by a high spiritual level and love to live."
    },
        i = [a, r];
    t.a = i;
  };

  var _2B = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в семнадцатый лунный день – очень чувствительные и талантливые натуры. Для большинства из них жизнь – это поиск своей «второй половины». Только почувствовав, что рядом – их идеал, с которым они составляют единое целое, люди семнадцатого лунного дня обретают себя по-настоящему. <b>Будьте внимательны в выборе партнера</b> – ведь именно этот человек может сделать Вас более мудрой, сильной и гармоничной личностью. ",
      en: 'Born on the seventeenth lunar day people are very sensitive and talented. For most of them, life is the search for their "second half". Only having felt that their partner is the ideal one, with which they form a single whole, people of the seventeenth lunar day can find themselves. <b>Be attentive when choosing a partner</b> - this person should make you a wiser, stronger and more harmonious person.'
    },
        r = {
      ru: "Рожденные в семнадцатый лунный день – люди яркие и творческие. С самого детства они собирают вокруг себя людей, зажигают их своей энергией, дарят окружающим радость и любовь. Очень чуткие, рожденные в семнадцатые лунные сутки могут испытывать эмоциональные потрясения, на которые обычные люди способны очень редко. <b>Не принимайте все близко к сердцу!</b> Поберегите свои нервы.",
      en: "Born on the seventeenth lunar day are bright and creative persons. From the very childhood, they gather people around themselves, light them up with their energy, give others joy and love. Very sensitive, born in the seventeenth lunar day can experience emotional shocks, which can't be felt by the ordinary people. <b>Do not take everything to heart!</b> Take care of your nerves."
    },
        i = [a, r];
    t.a = i;
  };

  var _2C = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в восемнадцатый лунный день – очень одаренные и творческие личности. Они могут реализовать себя во многих сферах, проявляя творческие задатки во всем, к чему они прикасаются. Люди восемнадцатого лунного дня могут стать прекрасными актерами, но они подвержены эгоизму и тщеславию, которые могут помешать им добиться высот.",
      en: "Born on the eighteenth lunar day are very gifted and creative individuals. They can realize themselves in many spheres, show creative talents in everything they do. People on the eighteenth lunar day can become beautiful actors, but they are subject to selfishness and vanity that can prevent them from the achievement of heights."
    },
        r = {
      ru: "<b>Найдите себе духовного наставника, тренера</b> – для рожденных в восемнадцатые лунные сутки это чрезвычайно важно. Наставник поможет Вам как двигаться к намеченным Вами целям, так и самосовершенствоваться день ото дня.",
      en: "<b>Find yourself a spiritual mentor, coach</b> - for those who born on the eighteenth lunar day, this is extremely important. A mentor will help you both to move towards your goals and to improve yourself day by day."
    },
        i = {
      ru: "У рожденных в восемнадцатый лунный день ярко выражена психосоматика – любые негативные эмоции быстро сказываются на состоянии их здоровья. Они очень переживают за близких и родных, буквально на физическом уровне способны ощущать эмоциональную боль. Эмоции людей восемнадцатого лунного дня очень сильны и часто хаотичны. <b>Не идите на поводу у своих эмоций!</b> Иногда лучше абстрагироваться и рассуждать хладнокровно.",
      en: "Born on the eighteenth lunar day have an intensive psychosomatics - any negative emotions quickly affect the state of their health. They are very worried about friends and relatives; they are able to feel emotional pain literally on a physical level. The emotions of people of the eighteenth lunar day are very strong and often chaotic. <b>Do not let your emotions ruin your mind!</b> Sometimes it's better to abstract and think dispassionately."
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2D = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в девятнадцатый лунный день – «серые кардиналы», интеллектуалы и неявные лидеры. Они способны объединять других, управлять ими, направлять к реализации поставленных целей и получать результат. Люди девятнадцатых лунных суток могут принимать неординарные решения, поражающие окружающих своей эффективностью и простотой. В жизни такие люди предпочитают быть хозяином ситуации, держать ее под контролем, управлять ходом событий. Это хорошая черта, но <b>не переборщите с манией контроля</b> – иногда стоит позволить событиям течь естественным образом.",
      en: 'Born on the nineteenth lunar day people are the "gray cardinals", intellectuals and implicit leaders. They are able to unite others, manage them, direct them towards the realization of the goals and get results. People of the nineteenth lunar day can make extraordinary decisions that affect others with their efficiency and simplicity. In life, such people prefer to be the master of the situation, to keep it under control, to control the course of events. This is a good trait, but <b>do not overdo with a mania of control</b> - sometimes it\'s worth letting the events flow naturally.'
    },
        r = {
      ru: "Одиночество рожденных в девятнадцатый лунный день не тяготит, и даже наоборот им нравится быть наедине с самими собой, уделяя свое внимание только тому, что им действительно интересно. Однако, их подстерегает много опасных искушений. Такие люди склонны к гордыне, пьянству и разного рода зависимостям. <b>Боритесь со своими пороками, если хотите обрести мудрость и долголетие.</b>",
      en: "The loneliness does not bother those who born on the nineteenth lunar day, and even on the contrary, they like to be alone with themselves, paying attention only to what they are really interested in. However, there are many dangerous temptations. Such people are prone to pride, drunkenness and all kinds of addictions. <b>Fight with your vices, if you want to gain wisdom and longevity.</b>"
    },
        i = [a, r];
    t.a = i;
  };

  var _2E = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные во второй  лунный день – практичные и активные «деятели». Благодаря сильно развитой интуиции способны безошибочно определять для себя, в чем они нуждаются, хорошо разбираются в людях. <b>Принимая решение, слушайте свое сердце.</b>",
      en: "Born on the second lunar day are the pragmatic activists. Due to the highly developed intuition, they are able to accurately determine for themselves what they need, they are well versed in people. <b>When making a decision, listen to your heart.</b>"
    },
        r = {
      ru: "Любопытство, упорство и терпеливость позволяют людям, родившимся во второй лунный день, с легкостью осваивать новые знания, приобретать навыки, добиваться успеха в любой сфере, за которую они возьмутся. Это настоящие гурманы, которые любят поесть много и со вкусом, и при том не склонные к полноте. Прекрасный обмен веществ позволяет детям вторых лунных суток оставаться в прекрасной форме до самой старости.",
      en: "Curiosity, perseverance, and patience help the people born on the second lunar day to master new knowledge easily, acquire skills, achieve success in any field. These are real gourmets who like to eat a lot and with taste, and at the same time they are not prone to fatness. A wonderful metabolism allows the children of the second lunar day to remain in excellent condition until old age."
    },
        i = {
      ru: "Практичность, которую рожденные во второй день лунного цикла проявляют во всех сферах жизни, - это полезная черта. Однако, главная ловушка для них, - их собственная жадность, корысть, скупость, «ненасытность». Давая волю этим низменным качествам, рожденные во второй лунный день  могут лишить себя всех благ, которые так и идут к ним в руки. Кроме того, жадность плохо сказывается на их здоровье – проявляется в виде заболеваний желчного пузыря и почек. <b>Будьте щедры, добры и отзывчивы!</b> Эти качества помогут Вам оставаться здоровыми и счастливыми до самой старости.",
      en: 'The pragmatism, that the born on the second day of lunar cycle show in all spheres of life, is a useful trait. However, the main trap for them is their own greed, stinginess, "insatiability". By giving vent to these bad traits, born on the second lunar day can deprive themselves of all the benefits that usually come directly in their hands. In addition, greed badly affects their health - it quickly manifested in the form of diseases of the gallbladder and kidneys. <b>Be generous, kind and sympathetic!</b> These qualities will help you stay healthy and happy until the old age.'
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2F = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в двадцатый лунный день – волевые мудрецы, способные возвыситься над суетой, окружающими людьми и самими собой. Они понимают жизнь более глубоко, чем остальные, способны осознавать и принимать происходящие изменения в себе и в окружающем мире.  Эта черта помогает людям  двадцатого лунного дня менее болезненно переживать личностное преображение, которое с ними случается довольно часто.",
      en: "Born on the twentieth lunar day are strong-willed wise men, able to rise above the bustle, surrounding people and themselves. They understand life more deeply than others, they are able to realize and accept the changes taking place in themselves and in the world around them. This trait helps people of the twentieth lunar day to feel less painful about the personal transformation that happens to them quite often."
    },
        r = {
      ru: "Взлеты и падения – неотъемлемая часть жизни рожденных в двадцатые лунные сутки. Обладая сильной волей и духовным началом, они способны ставить перед собой сверхцели и добиваться их, иногда ценой самопожертвования. <b>Искоренив в себе гордыню и высокомерие, Вы сможете добиться любых высот, в любой сфере.</b>",
      en: "Rises and falls are an integral part of a life of born in the twentieth lunar day people. Having a strong will and spiritual developed, they are able to set themselves super goals and to achieve them, sometimes at the cost of self-sacrifice. <b>By eliminating pride and arrogance, you can achieve any heights in any field.</b>"
    },
        i = {
      ru: "Рожденные в двадцатый лунный день с детства склонны выступать в роли зачинщиков, собирать вокруг себя других детей. Они умны, любознательны, целеустремленны. Хорошо, если с ранних лет им показывают мир с разных его сторон, и хороших, и плохих; если с ними честны и учат проявлять индивидуальность. <b>Смело проявляйте свою индивидуальность</b> – это актуально в любом возрасте!",
      en: "Born on the twentieth lunar day from childhood tend to act as instigators, gather around themselves other children. They are intelligent, inquisitive, purposeful. It is good if from an early age they have seen the world from different sides, both good and bad; If they are honest and are taught to show individuality. <b>Feel free to show your individuality</b> - it's needed at any age!"
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2G = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в двадцать первый лунный день – очень сильные личности, жизненный путь которых зависит от их выбора. Эти активные, целеустремленные, трудолюбивые люди с незаурядными умственными способностями могут быть  защитниками, борцами за справедливость, если разовьют в себе мужество, благородство и честь. Но если же они не победят в себе гордыню, то станут тиранами, идущими по головам других.",
      en: "Born on the twenty-first lunar day are very strong individualities whose life path depends on their own choice. These active, purposeful, hard-working people with the extraordinary mental abilities can be defenders, fighters for justice if they develop such traits as courage, nobility, and honor. But if they do not eliminate the pride in themselves, they will become tyrants who step over people."
    },
        r = {
      ru: "Рожденные в двадцать первый лунный день всесторонне развиты и обладают знаниями в различных областях. Внутренняя сила помогает им добиваться любых поставленных целей. <b>Какими будут эти цели, добрыми или злыми? Решать только Вам.</b>",
      en: "Born on the twenty-first lunar day are comprehensively developed and have knowledge in various fields. Internal strength helps them achieve any set goals. <b>What will these goals be, good or evil? It's up to you.</b>"
    },
        i = [a, r];
    t.a = i;
  };

  var _2H = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в двадцать второй лунный день – интеллектуалы-упрямцы. Очень умны и легко обучаются новому, проницательны и рассудительны с самого детства. Способны «зреть в корень» и видеть то, чего не видят другие, благодаря чему добиваются успехов в любой области деятельности. <b>Смело беритесь за самые сложные задачи!</b> Вы обязательно с ними справитесь.",
      en: 'Born on the twenty-second lunar day are the stubborn intellectuals. Very smart and studying with ease, insightful and reasonable from the very childhood. They are able to "get to the root" and see what other people do not see, so they achieve success in any field of activity. <b>Feel free to choose the most difficult tasks!</b> You will surely cope with them.'
    },
        r = {
      ru: "Людям двадцать второго лунного дня, несмотря на их повышенную чувствительность и тонкую интуицию, часто присущи цинизм, консерватизм, упрямство, нетерпимость к посторонним взглядам. Излишняя уверенность в своей правоте и нежелание принимать новое могут сыграть с Вами злую шутку и принести много проблем – <b>боритесь со своей нетерпимостью!</b>",
      en: "People of the twenty-second lunar day, despite their hypersensitivity and subtle intuition, are often characterized by cynicism, conservatism, stubbornness, intolerance of outsiders' opinion. Excessive confidence in your rightness and unwillingness to accept something new can play a cruel joke with you and bring many problems - <b>fight with your intolerance!</b>"
    },
        i = [a, r];
    t.a = i;
  };

  var _2I = function (e, t, n) {
    "use strict";

    var a = {
      ru: 'Рожденные в двадцать третий лунный день – "пробивные" перфекционисты. Они достигают совершенства в любом занятии, вся их суть - привести задуманное к идеальному завершению.',
      en: 'Born on the twenty-third lunar day people are the "punchy" perfectionists. They reach perfection in any occupation, their whole essence is to lead conceived to an ideal conclusion.'
    },
        r = {
      ru: "Упорство, преданность поставленной цели и хорошая хватка – эти черты помогают людям двадцать третьих лунных суток горы свернуть и добиться успеха в выбранной деятельности, светлой или темной. Однако, путь разрушения в итоге окажется разрушительным для самих рожденных в двадцать третий лунный день. <b>Выбирайте созидание, направляя свою мощную энергетику в мирное русло,</b> - и Вы проживете долгую и счастливую жизнь.",
      en: "Perseverance, dedication to the goal and good grasp - these traits help people of the twenty-third lunar day to succeed in their chosen activities, light or dark. However, the path of destruction, in the end, will be devastating for the born on the twenty-third lunar day. <b>Choose creativity, direct your powerful energy for peaceful goals</b> - and you will live a long and happy life."
    },
        i = [a, r];
    t.a = i;
  };

  var _2J = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в двадцать четвертый лунный день – предприниматели и организаторы по своей природе. От окружающих их отличает внутренняя уверенность и вера в себя, которая дарит им силу и энергию для осуществления самых смелых планов.",
      en: "Born on the twenty-fourth lunar day are the entrepreneurs and organizers. From the surrounding, they are distinguished by inner confidence, which gives them the strength and energy to carry out the most daring plans."
    },
        r = {
      ru: "Настоящие борцы, люди двадцать четвертых лунных суток с легкостью способны организовать окружающих людей и привести их к задуманной цели. Они очень сильны, талантливы, иногда кажутся странными. Подвижны и любознательны, проявляют творческий подход во всем, чем бы не занялись. Для рожденных в двадцать четвертый лунный день очень важно научиться правильно распределять свой природный потенциал. <b>Убедитесь, что Вы направляете свою энергию в нужное русло.</b>",
      en: "Real warriors, people of the twenty-fourths lunar day are able to easily organize the surrounding people and lead them to their goal. They are very strong, talented, sometimes they seem strange. Active and curious, they show creativity in everything they do. For those who were born on the twenty-fourth lunar day, it is very important to learn how to properly allocate their natural potential. <b>Make sure that you are routing your energy in the right direction.</b>"
    },
        i = [a, r];
    t.a = i;
  };

  var _2K = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в двадцать пятый лунный день – чудаки в поисках истины. Несмотря на внешнюю сдержанность и медлительность, внутри у них идет постоянная работа. Люди двадцать пятого лунного дня наделены необычной способностью анализировать происходящее в уме, не производя при этом активных действий. Из-за несовпадения внутреннего мира и внешнего проявления характера, бывают часто непонятны окружающим. <b>Не обращайте внимания на поверхностные суждения людей о Вас.</b>",
      en: "Born on the twenty-fifth lunar day people are the freaks in search of truth. Despite the external restraint and slowness, inside they are constantly working. People of the twenty-fifth lunar day are endowed with an unusual ability to analyze what is happening in the mind, without producing any active actions. Because of the discrepancy between the inner world and the external manifestation of character, they are often incomprehensible to others. <b>Do not pay attention to the superficial judgments of people about you.</b>"
    },
        r = {
      ru: "Люди двадцать пятых лунных суток умны, целеустремленны и верны своим решениям. С детских лет проявляют мудрость, интерес к духовному развитию, ищут во всем смысл и суть. <b>Поощряйте мудреца-отшельника в себе</b>, и Вы сможете прожить интересную, творческую жизнь.",
      en: "People of the twenty-fifths lunar day are intelligent, purposeful and dedicated to their decisions. Since childhood, they show wisdom, interest to the spiritual development, they are searching for the meaning and essence in everything. <b>Encourage the wiseacre hermit in yourself</b>, and you will be able to live an interesting, creative life."
    },
        i = [a, r];
    t.a = i;
  };

  var _2L = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденных в двадцать шестой лунный день можно охарактеризовать поговоркой «В тихом омуте черти водятся». Несмотря на внешнюю медлительность, а порой кажущуюся отрешенность, они живут активной внутренней жизнью. Их внутренний мир постоянно подвергается переоценке и анализу.",
      en: "Born on the twenty-sixth lunar day people, despite the external slowness, and sometimes seeming detachment, live an active inner life. Their inner world is constantly subjected to reassessment and analysis."
    },
        r = {
      ru: "Люди двадцать шестых лунных суток очень способны. Могут добиться хороших результатов во многих сферах деятельности и прожить счастливую жизнь при условии, что победят в себе гордыню и высокомерие. <b>Держите себя под контролем, не позволяйте радости от успехов превращаться в самолюбование и тщеславие!</b>",
      en: "People of the twenty-sixth lunar days are very gifted. They can achieve good results in many spheres of activity and live a happy life, in condition if they eliminate the pride and arrogance. <b>Keep yourself under control, do not let the joy of success turn into narcissism and vanity!</b>"
    },
        i = {
      ru: "На пользу Вам пойдет и умению лаконично излагать суть. Пустословие у людей двадцать шестого лунного дня отнимает много энергии.",
      en: "In addition, learn how to laconically state the essence. The idle talk takes a lot of energy of people of the twenty-sixth lunar day."
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2M = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в двадцать седьмой лунный день – мудрецы, часто удивляющие окружающих своими поступками и мыслями. В течение жизни постоянно духовно растут, совершая качественные переходы на новые уровни развития. Разумеется, такие «ступеньки» часто бывают болезненными и сопровождаются развенчиванием иллюзий. <b>Принимайте уроки жизни с благодарностью</b>, ведь именно они дают Вам возможность управлять своей судьбой, двигаться в выбранном Вами направлении.",
      en: 'Born on the twenty-seventh lunar day are wise men, often astonishing others with their actions and thoughts. Throughout life they constantly grow spiritually, making qualitative transitions to new levels of development. Of course, such "steps" are often painful and are accompanied by illusions debunking. <b>Take life\'s lessons with gratitude</b>, because they give you the opportunity to control your destiny, to move it in the direction you have chosen.'
    },
        r = {
      ru: "<b>Вам важно развивать в себе ответственность, взвешивать принимаемые решения, выполнять обещания и сдерживать данное слово.</b> Эти качества помогают людям двадцать седьмых лунных суток успешно преодолевать жизненные препятствия и эффективно использовать полученные знания на практике.",
      en: "<b>It is important for you to develop responsibility, weigh decisions, fulfill promises and keep your word.</b> These qualities help people of the twenty-seventh lunar day to successfully overcome life's obstacles and effectively use the gained knowledge in practice."
    },
        i = [a, r];
    t.a = i;
  };

  var _2N = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в двадцать восьмой лунный день – лучшие советчики, наставники, друзья. По своей сути это жизнелюбивые и непорочные люди, несущие окружающим душевное спокойствие, взаимопонимание, умиротворение, любовь. К ним тянутся за поддержкой, приходят за утешением и советом.",
      en: "Born on the twenty-eighth lunar day are the best advisers, mentors, friends. In essence, they are life-loving and immaculate people, bringing peace, mutual understanding, and love to others. Surrounding people come to them to receive support, consolation, and advice."
    },
        r = {
      ru: "Люди двадцать восьмых лунных суток очень восприимчивы, способны тонко чувствовать окружающий мир. В период внутреннего преображения могут заметить не доступные другим истины. Часто им снятся насыщенные сны, несущие в себе откровения. <b>Будьте внимательны к своим озарениям, видениям, снам</b> – они очень ценны для духовного развития не только Вашего, но и Вашего окружения, в котором Вы выступаете в роли духовного наставника.",
      en: "People of the twenty-eighth lunar day are very receptive, able to feel the world around. In the period of inner transformation, they can notice truths that are not available to others. Often they see the bright dreams that bring important insights. <b>Be attentive to your insights, visions, dreams</b> - they are very valuable for the spiritual development, not only yours but your environment, in which you act as a spiritual mentor."
    },
        i = [a, r];
    t.a = i;
  };

  var _2O = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в двадцать девятый лунный день больше других людей подвержены влиянию инстинктов и эмоциональных состояний, и как следствие уязвимы перед иллюзиями, обманами и заблуждениями. Их могут привлекать темные стороны жизни. Попадая под влияние негативной части их личности, люди двадцать девятых лунных суток обрекают себя на жизнь, полную неудач и страданий. ",
      en: "Born on the twenty-ninth lunar day people more than others are affected by instincts and emotional states, and as a result are vulnerable to illusions, deceptions, and delusions. They can be addicted to the dark side of life. Falling under the influence of the negative part of their personality, people of the twenty-ninth lunar day doom themselves to a life full of failures and suffering."
    },
        r = {
      ru: "<b>Научитесь покаянию, смирению, терпению, самопожертвованию.</b> Контролируйте свои мысли и желания, отличайте добро от зла, оценивайте мир рационально. Такой подход позволит Вам управлять своим энергетическим балансом и Вы сможете прожить долгую и счастливую жизнь в гармонии с собой.",
      en: "<b>Learn to repent, humble, patience, self-sacrifice.</b> Control your thoughts and desires, distinguish good from evil, evaluate the world rationally. This approach will allow you to manage your energy balance and you will be able to live a long and happy life in harmony with yourself."
    },
        i = [a, r];
    t.a = i;
  };

  var _2P = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в третий лунный день люди – это фонтан напористой, отчаянной энергии; решительные борцы, воины. Это очень активные люди, которые часто становятся успешными спортсменами, военными, общественными деятелями.",
      en: "The people born on the third lunar day are the fountain of assertive, desperate energy; resolute fighters, warriors. They are very active people who often become the successful athletes, military, public figures."
    },
        r = {
      ru: "Избыток их энергии и сил, направленный в нужное русло, помогает добиться огромных высот в любом деле, где требуются упорство и активность. Однако, неиспользованная энергия людей, рожденных в третий лунный день, может быть опасной и пойти им во вред, трансформируясь в агрессию и жестокость. Для них важно определиться с тем, чем заниматься в жизни. Здорово, если с ранних лет такие дети посещают спортивные секции, различные кружки – причем сразу несколько. Боевые искусства, самосовершенствование, духовные практики – все это отлично подходит людям, рожденным в третьи лунные сутки. <b>Используйте свою энергию всю без остатка на благие цели!</b>",
      en: "The excess of their energy and strength, directed to the right track, helps to reach huge heights in any business where perseverance and activity are required. However, the unused energy of people born on the third lunar day can be dangerous and bring them harm, transforming into aggression and cruelty. It is important for them to decide what to do in life. It's great if from an early age such children attend sports and other various sections - and several at once. Martial arts, spiritual practices - all this is great for people born on the third lunar day. <b>Use all of your energy to achieve the good goals!</b>"
    },
        i = {
      ru: "Сохранить здоровье рожденным в третий лунный день помогут различные, порой даже экстремальные, процедуры закаливания, хождение босиком по земле, обливание холодной водой. <b>Закаляйтесь для того, чтобы противостоять болезням и оставаться в форме долгие годы.</b>",
      en: "To stay healthy, born on the third lunar day can use various, sometimes even extreme, hardening procedures, walking barefoot on the ground, dousing with cold water. <b>Become tempered in order to resist illnesses and stay in shape for many years.</b>"
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2Q = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в тридцатый лунный день – люди высокой судьбы, с какой-то важной для мира в целом жизненной задачей. Это поистине редкие люди, красивые, добрые, мудрые, рано раскрывают себя, следуют своему идеалу, однолюбы. Считается, что если человек рождается в тридцатый лунный день, это одно из последних воплощений его души в нашем мире.",
      en: "Born on the thirtieth lunar day are people of the high destiny, with some vital task for the whole world. These are truly rare people, beautiful, kind, wise, open themselves early, follow their ideal, monogamous. It is believed that if a person was born on the thirtieth lunar day, this is one of the last incarnations of his soul in our world."
    },
        r = {
      ru: "В быту людям тридцатого дня приходится тяжело, их поджидают бесконечные сложности. Им плохо удается активность в делах, конкретизация усилий, трудно избегать риска. <b>Вам важно осознать свою уникальность и миссию и следовать ей, не растрачивая усилий на мирскую суету.</b>",
      en: "In everyday life, people of the thirtieth lunar day have a hard time, and the endless difficulties are waiting for them. They are poorly able to be active in business, making efforts more specific, difficult to avoid risk. <b>It is important for you to realize your uniqueness and mission and to follow it, without wasting your efforts on the worldly vanity.</b>"
    },
        i = [a, r];
    t.a = i;
  };

  var _2R = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в четвертый лунный день загадочны – как для окружающих, так и для самих себя. <b>Самопознание и самоанализ – важнейшие слова в Вашей жизни.</b>",
      en: "Born on the fourth lunar day are mysterious - both for others and for themselves. <b>Self-knowledge and introspection are the most important words in your life.</b>"
    },
        r = {
      ru: "Под влиянием лунного дня рождения такие люди постоянно сталкиваются с выбором – между добром и злом, светом и тьмой. Важно осознавать, что именно от этого выбора зависит путь «четверок» и судьба их близких. <b>Осознанность, понимание, самостоятельность и ответственность – вот те качества, которые подарят Вам счастье.</b>",
      en: 'Under the influence of the lunar birthday, such people are constantly faced with a choice - between good and evil, light and darkness. It is important to realize that the way of the "fours" and the fate of their loved ones depend on this choice. <b>Awareness, understanding, independence and responsibility are the qualities that will bring you the happiness.</b>'
    },
        i = {
      ru: "Кстати о близких – семейные отношения, сохранение и соблюдение традиций предыдущих поколений, изучение дерева рода играют огромную роль в жизни рожденных в четвертые лунные сутки. Они привязаны к родственникам, от которых получают дополнительные силы. <b>Оставайтесь рядом с семьей.</b>",
      en: "By the way, family relations, preservation, and observance of the traditions of previous generations, the family tree studying are very important in the life of those who were born on the fourth lunar day. They are addicted to relatives, from whom they receive additional strength. <b>Stay close to the family.</b>"
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2S = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в пятый лунный день – этакие «сказочные богатыри». В их жизнях часто происходят резкие неожиданные изменения - по большей части, очень удачные. Эти люди чуткие, любознательные, творческие и полны сил для реализации своих целей. Сочетание активности и удачливости позволяет им воплощать в жизнь желания и мечты.",
      en: 'Born on the fifth lunar day people are the sort of "fairy tale heroes". In their lives, sudden unexpected changes often occur, mostly, very successful. These people are sensitive, inquisitive, creative and full of energy for the realization of their goals. The combination of activity and luck allows them to realize their desires and dreams.'
    },
        r = {
      ru: "Потому для рожденных в пятый лунный день очень важно понимать, чего же они хотят на самом деле, учиться контролировать свои эмоции и временами хаотичные желания. <b>Уделяйте время своему духовному развитию, чтобы обрести внутреннюю гармонию и равновесие.</b> Хорошо развитая интуиция и интерес к более тонким мирам помогут подобрать практики и методики самосовершенствования, подходящие именно Вам.",
      en: "Therefore, for those who were born on the fifth lunar day, it is very important to understand what they really want, learn to control their emotions and chaotic desires. <b>Take a time to your spiritual development to gain inner harmony and balance.</b> Well-developed intuition and interest to the more subtle worlds will help you to select practices and methods of self-improvement that are right for you."
    },
        i = [a, r];
    t.a = i;
  };

  var _2T = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в шестой лунный день свободолюбивы и наделены экстрасенсорными способностями. Это очень глубокие, многогранные, творческие личности с необыкновенно развитой интуицией – <b>с большой вероятностью все, что вы предскажете, сбудется.</b>",
      en: "Born on the sixth lunar day people are freedom-loving and endowed with extrasensory abilities. These are very deep, multi-faceted, creative personalities with an unusually developed intuition - <b>everything that you predict will come true with a high probability.</b>"
    },
        r = {
      ru: "Разумеется, способности к ясновидению и чтению чужих мыслей проявляются значительно ярче в тех «шестерках», которые работают над их развитием и практикуются. Коммуникативные же навыки на высоте у всех рожденных в шестой лунный день. Из них получаются прекрасные психологи, воспитатели, тренера. Природная чуткость помогает эффективно использовать всю полученную информацию.",
      en: 'Of course, the ability to clairvoyance and reading of other people\'s thoughts is much more evident in those "sixs" who are working on their development and practicing regularly. But all who were born on the sixth lunar day have the good communicative skills. They can become the excellent psychologists, educators, coaches. Natural sensitivity helps to effectively use all the information received.'
    },
        i = {
      ru: "Людям, родившимся в шестой лунный день, не стоит жить и работать под чьим-либо давлением или состоять в отношениях с тираничными особами. <b>Сохраните свою свободу, ведь только будучи свободным Вы можете полноценно реализоваться.</b> Выбирайте просторное жилье с высокими потолками, проводите больше времени под открытым небом, чтобы хорошо себя чувствовать и оставаться здоровым и энергичным.",
      en: "People born on the sixth lunar day should not live and work under someone's pressure or be in a relationship with tyrannical persons. <b>Keep your freedom, because you can realize yourself fully only by being free.</b> Choose a spacious apartment with the high ceilings, spend more time in the open air, to feel good and stay healthy and energetic."
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2U = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в седьмой лунный день – прирожденные ораторы и мастера слова. Это творческие, красноречивые и харизматичные люди с хорошим, сильным и красивым голосом. Для них важно найти применение своему таланту, иначе они рискуют стать сплетниками и очень поверхностными людьми.",
      en: "Born on the seventh lunar day people are the great speakers and masters of the word. They are creative, eloquent and charismatic people with a good, strong and beautiful voice. It is important for them to find the use for their talent, otherwise, they are risking to become gossips and very superficial people."
    },
        r = {
      ru: 'Крепкое здоровье, обучаемость, умение быстро усваивать информацию и пользоваться ею + от природы сильный характер обеспечивают "семеркам" успех и признание. <b>Используйте свою одаренность в глобальных целях</b>, не размениваясь на мелкие интриги и сплетни! ',
      en: 'The good health, ability to quickly learn information and use it, strong character ensure the success and recognition for the "sevens". <b>Use your talent for global purposes</b>, don\'t waste yourself for small intrigues and gossip!'
    },
        i = {
      ru: "Перебороть лень и уделить время духовному росту – это все, что требуется от рожденных в седьмые лунные сутки. В ответ Вы получите радость от самореализации и добьетесь всего, чего пожелаете.",
      en: "Overcoming laziness and giving a time to the spiritual growth is all that is required from those who born on the seventh lunar day. In return, you will receive joy from self-realization and achieve everything you want."
    },
        s = [a, r, i];
    t.a = s;
  };

  var _2V = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Рожденные в восьмой лунный день очень оригинальны и артистичны. Под влиянием знака лунных суток рождения, такие люди имеют способность «перерождаться». Вся их жизнь – это развитие по спирали, виток за витком они проходят свой путь. <b>Постоянное самосовершенствование – вот, что наполнит Вашу жизнь смыслом.</b> Станьте профессионалом в той области, которую Вы выбрали!",
      en: 'Born on the eighth lunar day people are very original and artistic. Under the influence of the sign of lunar birthday, such people have the ability to "reborn". Their whole life is the "spiral" development, the loop after the loop, they pass their way. <b>Constant self-improvement is something that will fill your life with meaning.</b> Become a professional in the field that you have chosen!'
    },
        r = {
      ru: "В ином случае, рожденные в восьмой лунный день рискуют остаться топтаться на месте со всем своим неиспользованным багажом знаний. А знаний у них много! Ведь «восьмерки» с раннего детства тянутся ко всему новому и неизведанному, с жадностью поглощают информацию. У этих людей отличные умственные способности, временами поражающие окружающих. Кроме того, рожденные в восьмые лунные сутки трудолюбивы, доброжелательны и порядочны. Такая совокупность особенностей позволяет личности добиться высот в любом деле. <b>Избавляйтесь от негатива, верьте в себя и развивайтесь!</b>",
      en: 'Otherwise, those who were born on the eighth lunar day are risking to remain stagnant on the spot with all their unused baggage of knowledge. And they have a lot of knowledge! The "eights" from early childhood are drawn to everything new and unexplored, eagerly absorb information. These people have excellent mental abilities, which can amaze others. In addition, born on the eighth lunar day people are hardworking, benevolent and decent. Such combination of traits allows the individual to achieve heights in any business. <b>Get rid of the negative, believe in yourself and develop!</b>'
    },
        i = [a, r];
    t.a = i;
  };

  var _2W = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Девиз рожденных в девятый лунный день – преодоление. Они часто воспринимают жизнь как борьбу, и главное – смело принимать любые ее вызовы. В борьбе за внешнюю и внутреннюю чистоту заключается развитие рожденных в девятые лунные сутки. Каждая проблема, каждый вызов помогают им стать лучше, усовершенствовать свою жизнь, подняться на ступеньку выше. <b>Преодолевайте свои страхи.</b>",
      en: "The motto of the people who were born on the ninth lunar day is the overcoming. They often perceive life as a struggle, and it's most important to courageously accept all its challenges. The struggle for external and internal purity is the development of those who were born on the ninth lunar day. Every problem, every challenge helps them become better, improve their lives, rise to the level higher. <b>Overcome your fears.</b>"
    },
        r = {
      ru: "К сожалению, рожденные в девятый лунный день часто отличаются слабым здоровьем. Однако, при правильном образе жизни, они могут избежать болезней и сохранить силы до самой старости. Им рекомендуется внимательно относиться к своему питанию, важно исключить алкоголь. Полезно заниматься практиками, поддерживающими хорошую физическую форму. <b>Займитесь йогой, освобождайте в себе положительную энергетику и управляйте ею!</b>",
      en: "Unfortunately, born on the ninth lunar day people often have a poor health. However, with the healthy way of life, they can avoid illnesses and retain strength until the old age. They are recommended to carefully choose their diet, exclude alcohol. It is useful to practice some techniques which maintain a good physical shape. <b>Do yoga, free your positive energy and use it!</b>"
    },
        i = [a, r];
    t.a = i;
  };

  var _2X = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(64),
        r = n.n(a),
        i = n(63),
        s = n.n(i),
        o = n(226),
        u = (n.n(o), n(201)),
        l = n.n(u),
        c = n(225),
        d = (n.n(c), n(200)),
        h = n.n(d),
        p = n(211),
        f = (n.n(p), n(189)),
        g = n.n(f),
        m = n(233),
        y = (n.n(m), n(207)),
        b = n.n(y),
        v = n(227),
        w = (n.n(v), n(202)),
        A = n.n(w),
        k = n(218),
        C = (n.n(k), n(195)),
        x = n.n(C),
        _ = n(219),
        P = (n.n(_), n(196)),
        D = n.n(P),
        T = n(215),
        E = (n.n(T), n(192)),
        B = n.n(E),
        M = n(216),
        I = (n.n(M), n(193)),
        L = n.n(I),
        O = n(229),
        j = (n.n(O), n(203)),
        S = n.n(j),
        z = n(212),
        R = (n.n(z), n(190)),
        H = n.n(R),
        F = n(231),
        G = (n.n(F), n(205)),
        N = n.n(G),
        U = n(228),
        Q = (n.n(U), n(107)),
        Y = n.n(Q),
        K = n(235),
        q = (n.n(K), n(209)),
        X = n.n(q),
        J = n(221),
        Z = (n.n(J), n(198)),
        V = n.n(Z),
        W = n(234),
        $ = (n.n(W), n(208)),
        ee = n.n($),
        te = n(232),
        ne = (n.n(te), n(206)),
        ae = n.n(ne),
        re = n(220),
        ie = (n.n(re), n(197)),
        se = n.n(ie),
        oe = n(214),
        ue = (n.n(oe), n(191)),
        le = n.n(ue),
        ce = n(230),
        de = (n.n(ce), n(204)),
        he = n.n(de),
        pe = n(217),
        fe = (n.n(pe), n(194)),
        ge = n.n(fe),
        me = n(223),
        ye = (n.n(me), n(199)),
        be = n.n(ye),
        ve = n(224),
        we = (n.n(ve), n(213)),
        Ae = (n.n(we), n(22)),
        ke = n.n(Ae),
        Ce = n(4),
        xe = n.n(Ce),
        _e = n(238),
        Pe = n.n(_e),
        De = n(239),
        Te = n.n(De),
        Ee = n(29),
        Be = n(44),
        Me = n(187),
        Ie = n(184),
        Le = n(240),
        Oe = n.n(Le),
        je = n(188),
        Se = n(186),
        ze = (n(185), n(236)),
        Re = (n.n(ze), n(210)),
        He = (n.n(Re), n(222)),
        Fe = (n.n(He), n(237)),
        Ge = (n.n(Fe), function () {
      var e = s()(r.a.mark(function e() {
        var t;
        return r.a.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.prev = 0, e.next = 3, Ee.a.dispatch("loadClientInfo");

            case 3:
              return e.next = 5, Ee.a.dispatch("checkAuth");

            case 5:
              return e.next = 7, Ee.a.dispatch("setupPrice");

            case 7:
              e.next = 12;
              break;

            case 9:
              e.prev = 9, e.t0 = e.catch(0), _$1.console.log(e.t0.message);

            case 12:
              if (e.prev = 12, !(t = "no" === Ee.a.state.notFirstTime)) {
                e.next = 17;
                break;
              }

              return e.next = 17, Ee.a.dispatch("showDayTooltip");

            case 17:
              return e.finish(12);

            case 18:
            case "end":
              return e.stop();
          }
        }, e, this, [[0, 9, 12, 18]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }());

    xe.a.use(ke.a), xe.a.use(be.a), xe.a.use(ge.a), xe.a.use(he.a), xe.a.use(le.a), xe.a.use(se.a), xe.a.use(ae.a), xe.a.use(ee.a), xe.a.use(V.a), xe.a.use(X.a), xe.a.use(Y.a), xe.a.use(N.a), xe.a.use(H.a), xe.a.use(S.a), xe.a.use(L.a), xe.a.use(B.a), xe.a.use(D.a), xe.a.use(x.a), xe.a.use(A.a), xe.a.use(b.a), xe.a.use(g.a), xe.a.use(h.a.directive), xe.a.prototype.$loading = h.a.service, xe.a.prototype.$notify = l.a, xe.a.use(je.a), xe.a.use(Oe.a), xe.a.use(Te.a), xe.a.filter("capitalize", Ie.a), xe.a.material.registerTheme(Me.a), n.i(Se.a)(xe.a, Be.a), new xe.a({
      el: "#app",
      router: Be.a,
      store: Ee.a,
      template: "<App/>",
      components: {
        App: Pe.a
      }
    }), Ge();
  };

  var _2Y = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    });
    var a = {
      paragraphs: [{
        ru: "Вы стали быстрее уставать и чувствуете себя как выжатый лимон без видимых причин? Возможно, Ваш физический биоритм на спаде!",
        en: "Do you get tired faster and feel like a squeezed lemon for no apparent reason? Perhaps your physical biorhythm is low now!"
      }, {
        ru: "Следите за своими биоритмами онлайн с <i>Персональным Лунным Календарем</i>",
        en: "Observe your biorhythms online with <i>the Personal Lunar Calendar</i>"
      }],
      btn: "learnMore",
      textCode: "t1"
    },
        r = [a];
  };

  var _2Z = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return i;
    });
    var a = {
      paragraphs: [{
        ru: "Тяжело сосредоточиться, и новые гениальные идеи не приходят в голову? Возможно, все дело в Вашем интеллектуальном биоритме!",
        en: "Does it become harder to concentrate, and new brilliant ideas do not appear? Perhaps it's all about your intellectual biorhythm!"
      }, {
        ru: "Следите за своими биоритмами онлайн с <i>Персональным Лунным Календарем</i>",
        en: "Observe your biorhythms online with <i>the Personal Lunar Calendar</i>"
      }],
      btn: "learnMore",
      textCode: "t1"
    },
        r = {
      text: {
        ru: "Поручите лунному календарю подобрать лучшие даты для Вашего списка дел!",
        en: "Entrust the picking of the best dates for your to-do list to lunar calendar!"
      },
      btn: "personalLunarCalendar",
      textCode: "t2"
    },
        i = [a, r];
  };

  var _30 = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    });
    var a = {
      text: {
        ru: "Какие растения высаживать в зависимости от Знака Зодиака, в котором находится Луна? Полные списки овощных, пряно-зеленых, плодово-ягодных, полевых, цветочных и комнатных растений в <i>Персональном Лунном Календаре</i>",
        en: "Which plants to plant, depending on the Zodiac Sign in which the Moon is located? Full lists of vegetables, spices & greenery, fruit & berry, field crops, flowering and houseplants in <i>the Personal Lunar Calendar</i>"
      },
      btn: "learnMore",
      textCode: "t1"
    },
        r = [a];
  };

  var _31 = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return i;
    });
    var a = {
      paragraphs: [{
        ru: "Вы стали быстрее уставать и чувствуете себя как выжатый лимон без видимых причин? Возможно, Ваш физический биоритм на спаде!",
        en: "Do you get tired faster and feel like a squeezed lemon for no apparent reason? Perhaps your physical biorhythm is low now!"
      }, {
        ru: "Следите за своими биоритмами онлайн с <i>Персональным Лунным Календарем</i>",
        en: "Observe your biorhythms online with <i>the Personal Lunar Calendar</i>"
      }],
      btn: "learnMore",
      textCode: "t1"
    },
        r = {
      text: {
        ru: "Мечтаете о дочке-принцессе или о сыночке-наследнике? Выберите пол будущего ребенка заранее с <i>Персональным Лунным Календарем!</i>",
        en: "Do you dream of daughter-princess or son, little heir? Choose the sex of your future child in advance with <i>the Personal Lunar Calendar!</i>"
      },
      btn: "learnMore",
      textCode: "t2"
    },
        i = [a, r];
  };

  var _32 = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    });
    var a = {
      text: {
        ru: "Составьте список домашних дел, и лунный календарь сам подберет лучшие даты для них!",
        en: "Make a list of your household affairs, and the lunar calendar will pick up the best dates for them!"
      },
      btn: "personalLunarCalendar",
      textCode: "t1"
    },
        r = [a];
  };

  var _33 = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    });
    var a = {
      text: {
        ru: "Как привлечь удачу в Вашу жизнь, исходя из того, в какой лунный день Вы родились?",
        en: "How to attract luck to your life, based on the lunar day you were born on?"
      },
      btn: "personalLunarCalendar",
      textCode: "t1"
    },
        r = [a];
  };

  var _34 = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return s;
    });
    var a = {
      titleConst: "lunarBirthday",
      paragraphs: [{
        ru: "В какой лунный день Вы родились и как использовать это знание для исполнения Ваших желаний?",
        en: "On which lunar day were you born and how to use this knowledge to fulfill your desires?"
      }, {
        ru: "Ценные советы специально для Вас <i>в Персональном Лунном Календаре</i>",
        en: "Exclusive tips for you <i>in the Personal Lunar Calendar</i>"
      }],
      btnLangConst: "learnMore",
      icon: n(178),
      textCode: "t1"
    },
        r = {
      titleConst: "lunarZodiacSign",
      text: {
        ru: "Какими скрытыми талантами Вас наделил Ваш Лунный Знак Зодиака?",
        en: "What hidden talents your Lunar Zodiac Sign has given to you?"
      },
      btnLangConst: "personalLunarCalendar",
      icon: n(180),
      textCode: "t2"
    },
        i = {
      titleConst: "lunarCalc",
      text: {
        ru: "Какой лунный день был в день свадьбы Ваших родителей, и какой будет, когда Ваш малыш пойдет в школу? Рассчитайте любую дату <i>в Персональном Лунном Календаре!</i>",
        en: "What lunar day was at the day of your parents' wedding, and what will be when your baby goes to school? Calculate any date with <i>the Personal Lunar Calendar!</i>"
      },
      btnLangConst: "learnMore",
      icon: n(179),
      textCode: "t3"
    },
        s = [a, r, i];
  };

  var _35 = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return s;
    });
    var a = {
      paragraphs: [{
        ru: "Вы стали более ранимы и вспыльчивы и часто кофликтуете с близкими? Возможно, всему виной Ваш эмоциональный биоритм!",
        en: "Do you become more vulnerable and quick-tempered and have more conflicts with loved ones? Perhaps it's all about your emotional biorhythm!"
      }, {
        ru: "Следите за своими биоритмами онлайн с <i>Персональным Лунным Календарем</i>",
        en: "Observe your biorhythms online with <i>the Personal Lunar Calendar</i>"
      }],
      btn: "learnMore",
      textCode: "t1"
    },
        r = {
      text: {
        ru: "Мечтаете о дочке-принцессе или о сыночке-наследнике? Выберите пол будущего ребенка заранее с <i>Персональным Лунным Календарем!</i>",
        en: "Do you dream of daughter-princess or son, little heir? Choose the sex of your future child in advance with <i>the Personal Lunar Calendar!</i>"
      },
      btn: "learnMore",
      textCode: "t2"
    },
        i = {
      text: {
        ru: "В какой лунный день родился Ваш любимый человек? <i>Персональный Лунный Календарь</i> поможет Вам понять его лучше и стать еще ближе!",
        en: "On which lunar day was your beloved person born? <i>Personal Lunar Calendar</i> will help you understand your lover better and become closer!"
      },
      btn: "learnMore",
      textCode: "t3"
    },
        s = [a, r, i];
  };

  var _36 = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    });
    var a = {
      text: {
        ru: "Составьте список Ваших покупок, и лунный календарь сам подберет лучшие даты для них!",
        en: "Make a list of your purchases, and the lunar calendar will pick up the best dates for them!"
      },
      btn: "personalLunarCalendar",
      textCode: "t1"
    },
        r = [a];
  };

  var _37 = function (e, t, n) {
    "use strict";

    function a(e, t, n) {
      !1 === i.a.state.authorized ? s.a.replace({
        name: "default"
      }) : n();
    }

    function r(e, t, n) {
      i.a.dispatch("updateType", e.params.category), n();
    }

    t.b = a, t.a = r;
    var i = n(29),
        s = n(44);
  };

  var _38 = function (e, t, n) {
    "use strict";

    var a = n(10),
        r = n.n(a),
        i = n(446),
        s = n.n(i),
        o = n(64),
        u = n.n(o),
        l = n(63),
        c = n.n(l),
        d = n(31),
        h = n.n(d),
        p = n(329),
        f = n(120),
        g = n(4),
        m = n.n(g),
        y = n(68),
        b = {
      loadClientInfo: function (e) {
        var t = e.commit;
        return n.i(p.a)().then(function (e) {
          var n = e.data;
          return t("SET_CLIENT_GEO", n), n;
        }).catch(function (e) {
          throw e.message;
        });
      },
      sendReview: function (e, t) {
        var n = e.state,
            a = t.rate,
            r = t.feedback,
            i = t.id;
        return n.axios.post("public/review", {
          rate: a,
          feedback: r,
          id: i
        }).then(function (e) {
          var t = e.data;
          return _$1.console.log(t), n.isLeaveFeedback = "yes", h.a.resolve(t);
        }).catch(function (e) {
          return _$1.console.error(e), h.a.reject(e);
        });
      },
      getReviews: function (e) {
        return e.state.axios.get("public/reviews");
      },
      updateType: function (e, t) {
        var n = e.commit,
            a = f.a.map(function (e) {
          return e.name;
        }).filter(function (e) {
          return "default" !== e;
        }),
            r = a.includes(t) ? t : "default";
        n("SET_CURRENT_TYPE", r), m.a.material.setCurrentTheme(r);
      },
      showTooltips: function (e) {
        var t = e.state,
            n = e.getters,
            a = _$1.window.EnjoyHint,
            r = n.constants;
        t.router.push({
          name: "default"
        });
        var i = new a({}),
            s = [{
          "next .logo": r.step1,
          shape: "circle",
          nextButton: {
            className: "next-btn",
            text: r.ok
          },
          skipButton: {
            className: "skip-btn",
            text: r.skip
          }
        }, {
          "click .cell": r.step2,
          showSkip: !1
        }, {
          "next .day-title": r.step3,
          nextButton: {
            className: "next-btn",
            text: r.ok
          },
          showSkip: !1
        }, {
          "next .pre-last": r.step4,
          nextButton: {
            className: "next-btn",
            text: r.gotIt
          },
          showSkip: !1
        }, {
          "click .md-button.md-theme-default.md-primary.category:nth-child(2)": r.step5,
          nextButton: {
            className: "next-btn",
            text: r.ok
          },
          showSkip: !1
        }, {
          "click .glyphicon-arrow-right.month-changer": r.step6,
          showSkip: !1
        }, {
          "click .cell": r.step7,
          timeout: 500,
          showSkip: !1
        }, {
          "click #modal-ok": r.step8,
          showSkip: !1
        }, {
          "click .md-button.md-primary.category:nth-child(1)": r.step9,
          nextButton: {
            className: "next-btn",
            text: r.ok
          },
          showSkip: !1
        }, {
          "next .logo": r.step10,
          shape: "circle",
          nextButton: {
            className: "next-btn",
            text: r.thanks
          },
          showSkip: !1
        }];
        i.set(s), i.run();
      },
      showDayTooltip: function (e) {
        var t = e.commit,
            n = e.getters,
            a = _$1.window.EnjoyHint,
            r = n.constants,
            i = new a({
          onEnd: function () {
            t("SET_NOT_FIRST_TIME", "yes");
          }
        }),
            s = [{
          "click .cell.today": r.step2,
          showSkip: !1
        }];
        i.set(s), i.run();
      },
      login: function (e, t) {
        var n = this,
            a = e.state,
            r = t.email,
            i = t.password;
        if (!r || !i) throw new _$1.Error("Cannot get email or password in login action");
        return c()(u.a.mark(function e() {
          var t, s;
          return u.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.axios.post("/public/auth", {
                  email: r,
                  password: i
                });

              case 2:
                if (t = e.sent, s = t.data) {
                  e.next = 6;
                  break;
                }

                throw new _$1.Error("Cannot get data from response in login action");

              case 6:
                if (s.jwt) {
                  e.next = 8;
                  break;
                }

                throw new _$1.Error("Cannot get token (data.jwt) from response.data in login action");

              case 8:
                return a.token = s.jwt, a.authorized = !0, e.abrupt("return", h.a.resolve(t));

              case 11:
              case "end":
                return e.stop();
            }
          }, e, n);
        }))();
      },
      getUser: function (e) {
        return e.state.axios.get("/private/user/").then(function (e) {
          var t = e.data;
          return h.a.resolve(t);
        });
      },
      updateUser: function (e, t) {
        var n = e.state,
            a = e.commit;
        return n.axios.post("/private/user/", t).then(function (e) {
          var n = e.data;
          return a(y.a.SET_USER, t), h.a.resolve(n);
        });
      },
      updateUserPartial: function (e, t) {
        var n = e.state,
            a = e.dispatch,
            i = _$1.JSON.parse(s()(n.user));

        t && (i = r()({}, i, t), a("updateUser", i));
      },
      checkAuth: function (e) {
        var t = this,
            n = e.state,
            a = e.dispatch;
        return c()(u.a.mark(function e() {
          var r, i;
          return u.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = n.token, n.axios.defaults.headers.common.Authorization = "Bearer " + r, e.prev = 2, e.next = 5, a("getUser");

              case 5:
                i = e.sent, i && (n.authorized = !0, n.user = i, n.personal = !0, _$1.console.log("User:"), _$1.console.log(_$1.JSON.parse(s()(i)))), e.next = 12;
                break;

              case 9:
                e.prev = 9, e.t0 = e.catch(2), _$1.console.error(e.t0);

              case 12:
              case "end":
                return e.stop();
            }
          }, e, t, [[2, 9]]);
        }))();
      },
      putAvatar: function (e, t) {
        var n = e.state,
            a = e.getters,
            r = new _$1.FormData(),
            i = n.axios;
        return r.append("file", t), i.put("/private/avatar", r).then(function (e) {
          var t = e.data;
          if (!t || !t.avatarUrl) throw new _$1.Error("cannot get avatarUrl");
          return n.user.avatarUrl = t.avatarUrl, h.a.resolve(a.userAvatar);
        });
      },
      resetPassword: function (e, t) {
        var n = e.state,
            a = n.axios,
            r = n.locale;
        return a.post("/public/reset-password", {
          email: t,
          lang: r
        });
      },
      setupPrice: function (e) {
        var t = this,
            n = e.state;
        return c()(u.a.mark(function e() {
          var a, r, i;
          return u.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = n.axios, r = n.geo.country, e.next = 4, a.get("/purchase/price/" + r);

              case 4:
                return i = e.sent, n.productInfo = i.data, _$1.console.log(i.data), e.abrupt("return", !0);

              case 8:
              case "end":
                return e.stop();
            }
          }, e, t);
        }))();
      },
      setupPromoBlurCategories: function (e, t) {
        var n = e.state,
            a = ["beauty", "health", "shopping"],
            r = void 0;
        _$1.window.localStorage.getItem("exeptBlurCategory") ? r = _$1.window.localStorage.getItem("exeptBlurCategory") : (r = t && t.category && t.category.toLowerCase() || "none", _$1.window.localStorage.setItem("exeptBlurCategory", r)), n.bluredCategories = a.filter(function (e) {
          return e.toLowerCase() !== r;
        });
      }
    };
    t.a = b;
  };

  var _39 = function (e, t, n) {
    "use strict";

    var a = n(10),
        r = n.n(a),
        i = n(450),
        s = n.n(i),
        o = n(18),
        u = n.n(o),
        l = n(114),
        c = {
      calendarTypes: function (e) {
        return e.calendarTypes.map(function (t) {
          var n = t.text[e.locale];
          return {
            name: t.name,
            text: n
          };
        });
      },
      constants: function (e) {
        var t = e.constants,
            n = e.locale,
            a = {};
        return u()(t).forEach(function (e) {
          a[e] = t[e][n];
        }), a;
      },
      weekDays: function (e) {
        var t = e.weekDays,
            n = e.locale,
            a = {};
        return u()(t).forEach(function (e) {
          a[e] = {}, u()(t[e]).forEach(function (r) {
            "object" === s()(t[e][r]) && n in t[e][r] ? a[e][r] = t[e][r][n] : a[e][r] = t[e][r];
          });
        }), a;
      },
      locale: function (e) {
        return e.locale;
      },
      geo: function (e) {
        return e.geo;
      },
      axios: function (e) {
        return e.axios;
      },
      productInfo: function (e) {
        return e.productInfo;
      },
      lastClickedDay: function (e) {
        return e.lastClickedDay;
      },
      userAvatar: function (e) {
        return e.user && e.user.avatarUrl ? l.a.API_ROOT + "public/avatar/" + e.user.avatarUrl : n(642);
      },
      user: function (e) {
        var t = r()({}, e.user);
        return e.user ? t : null;
      },
      tasks: function (e) {
        return e.user && e.user.tasks || [];
      },
      bluredCategories: function (e) {
        return e.bluredCategories || [];
      }
    };
    t.a = c;
  };

  var _3a = function (e, t, n) {
    "use strict";

    var a,
        r = n(70),
        i = n.n(r),
        s = n(1),
        o = n.n(s),
        u = n(10),
        l = n.n(u),
        c = n(115),
        d = n(68),
        h = (a = {}, i()(a, d.a.SET_LOCALE, function (e, t) {
      e.locale = t;
    }), i()(a, d.a.SET_CURRENT_TYPE, function (e, t) {
      e.currentType = t;
    }), i()(a, d.a.SET_CLIENT_GEO, function (e, t) {
      e.geo = l()({}, t), e.geo.latitude = _$1.parseFloat(e.geo.loc.split(",")[0]), e.geo.longitude = _$1.parseFloat(e.geo.loc.split(",")[1]), e.locale = n.i(c.a)(e.geo.country);
    }), i()(a, d.a.SET_LAST_CLICKED_DAY, function (e, t) {
      e.lastClickedDay = o()({}, t);
    }), i()(a, d.a.SET_LAST_CLICKED_LUNAR_NUMBER, function (e, t) {
      e.lastClickedLunarNumber = t;
    }), i()(a, d.a.SET_NOT_FIRST_TIME, function (e, t) {
      e.notFirstTime = t, _$1.localStorage.setItem("NOT_FIRST_TIME", t);
    }), i()(a, d.a.SET_TODAY, function (e, t) {
      e.today = t;
    }), i()(a, d.a.SET_MODAL, function (e, t) {
      e.modal = t;
    }), i()(a, d.a.SET_USER, function (e, t) {
      e.user = l()({}, e.user, t);
    }), a);
    t.a = h;
  };

  var _3b = function (e, t, n) {
    "use strict";

    var a = n(31),
        r = n.n(a),
        i = n(10),
        s = n.n(i),
        o = n(120),
        u = n(331),
        l = n(115),
        c = n(44),
        d = n(114),
        h = n(108),
        p = n.n(h),
        f = n(378),
        g = {
      calendarTypes: o.a,
      constants: u.a,
      weekDays: f.a,
      router: c.a,
      CATEGORIES: ["lucky", "beauty", "relationship", "business", "health", "house", "shopping", "garden", "fishing"],
      bluredCategories: [],
      locale: "en",
      notFirstTime: _$1.localStorage.getItem("NOT_FIRST_TIME") || "no",
      isLeaveFeedback: "",
      token: "",
      LOCALES: n.i(l.b)(),
      currentType: "default",
      lastClickedDay: null,
      today: null,
      geo: {},
      productInfo: {},
      user: null,
      authorized: !1,
      personal: !1,
      config: s()({}, d.a),
      axios: p.a.create({
        baseURL: d.a.API_ROOT
      })
    };
    _$1.Object.defineProperty(g, "isLeaveFeedback", {
      get: function () {
        return _$1.localStorage.getItem("LEAVE_FEEDBACK_1") || "no";
      },
      set: function (e) {
        _$1.localStorage.setItem("LEAVE_FEEDBACK_1", e);
      }
    }), _$1.Object.defineProperty(g, "token", {
      get: function () {
        return _$1.localStorage.getItem("TOKEN");
      },
      set: function (e) {
        _$1.localStorage.setItem("TOKEN", e), g.axios.defaults.headers.common.Authorization = "Bearer " + e;
      }
    }), g.axios.interceptors.response.use(function (e) {
      return e;
    }, function (e) {
      return 401 !== e.response.status && 403 !== e.response.status || (delete g.axios.defaults.headers.common.Authorization, g.authorized = !1, g.token = "", g.user = null), r.a.reject(e);
    }), t.a = g;
  };

  var _3c = function (e, t, n) {
    "use strict";

    var a = [{
      name: "$1",
      category: "relationship",
      days: [24, 20, 21, 22, 17, 12, 10],
      text: {
        ru: "Свадьбу",
        en: "Wedding"
      }
    }, {
      name: "$2",
      category: "relationship",
      days: [5, 21],
      text: {
        ru: "Начать совместную жизнь с партнером",
        en: "Start to live together with the loved one"
      }
    }, {
      name: "$3",
      category: "relationship",
      days: [15, 21],
      text: {
        ru: "Признаться в любви",
        en: "Tell her (him) about your feelings"
      }
    }, {
      name: "$4",
      category: "relationship",
      days: [10],
      text: {
        ru: "Познакомиться с родителями партнера",
        en: "Meet the partner's family at the first time"
      }
    }, {
      name: "$5",
      category: "relationship",
      days: [27],
      text: {
        ru: "Первую близость",
        en: "The first sexual contact"
      }
    }, {
      name: "$6",
      category: "relationship",
      days: [4, 18],
      text: {
        ru: "Поговорить по душам",
        en: "Talk with the partner about each other sincerely"
      }
    }, {
      name: "$7",
      category: "relationship",
      days: [1, 24],
      text: {
        ru: "Распланировать совместное будущее",
        en: "Plan the joint future life"
      }
    }, {
      name: "$8",
      category: "relationship",
      days: [6],
      text: {
        ru: "Совместный отдых",
        en: "Joint vacation"
      }
    }, {
      name: "$9",
      category: "relationship",
      days: [5, 15, 21],
      text: {
        ru: "Пригласить ее (его) на свидание",
        en: "Invite her (him) on a date"
      }
    }, {
      name: "$10",
      category: "relationship",
      days: [2, 3, 11, 13, 14, 17, 21],
      text: {
        ru: "Эксперименты в сексе",
        en: "Try new things in the bed"
      }
    }, {
      name: "$11",
      category: "relationship",
      days: [20],
      text: {
        ru: "Вспомнить историю отношений",
        en: "Refresh in memory your love story details"
      }
    }, {
      name: "$12",
      category: "relationship",
      days: [10],
      text: {
        ru: "Поговорить о сексе с ребенкомподростком",
        en: "Talk about sex with the child-teenager"
      }
    }, {
      name: "$13",
      category: "relationship",
      days: [24],
      text: {
        ru: "Совместное творчество, старт общего дела с партнером",
        en: "Co-creation, launch joint projects with your partner"
      }
    }, {
      name: "$14",
      category: "relationship",
      days: [19],
      text: {
        ru: "Развод, разрыв отношений",
        en: "Divorce, break the aggravating relations"
      }
    }, {
      name: "$15",
      category: "relationship",
      days: [22],
      text: {
        ru: "Устроить романтический ужин",
        en: "Arrange a romantic dinner"
      }
    }, {
      name: "$16",
      category: "relationship",
      days: [25, 26],
      text: {
        ru: "Пойти к семейному психологу, пройти совместно тесты, тренинги для пар",
        en: "Visit the family psychologist, take joint tests, trainings for couples"
      }
    }, {
      name: "$17",
      category: "garden",
      days: [12],
      text: {
        ru: "Посев, посадку листовых, зеленых, цветочных культур",
        en: "Sow, plant herbs, leafy and flowering plants"
      }
    }, {
      name: "$18",
      category: "garden",
      days: [12],
      text: {
        ru: "Посадку кустарников и деревьев",
        en: "Plant shrubs and trees"
      }
    }, {
      name: "$19",
      category: "garden",
      days: [3, 9],
      text: {
        ru: "Посев, посадку растений с надземными плодами",
        en: "Sow, plant the plants with the above ground fruits"
      }
    }, {
      name: "$20",
      category: "garden",
      days: [18, 22, 25, 27],
      text: {
        ru: "Посев, посадку растений с подземными плодами",
        en: "Sow, plant the plants with the edible underground parts"
      }
    }, {
      name: "$21",
      category: "garden",
      days: [5],
      text: {
        ru: "Высадить рассаду",
        en: "Plant the seedlings"
      }
    }, {
      name: "$22",
      category: "garden",
      days: [5, 6, 10],
      text: {
        ru: "Пересадить растения",
        en: "Transplant the plants"
      }
    }, {
      name: "$23",
      category: "garden",
      days: [4, 5, 6, 7, 10, 11, 12, 13, 14, 15],
      text: {
        ru: "Собрать надземные плоды",
        en: "Harvest the above ground fruits"
      }
    }, {
      name: "$24",
      category: "garden",
      days: [6, 7, 10, 18, 19, 20, 21, 23],
      text: {
        ru: "Выкопать корнеплоды, цветочные луковицы",
        en: "Dig the underground fruits and flower bulbs"
      }
    }, {
      name: "$25",
      category: "garden",
      days: [6, 7, 9, 12, 13, _$1.NaN],
      text: {
        ru: "Собрать семена",
        en: "Pick the seeds"
      }
    }, {
      name: "$26",
      category: "garden",
      days: [7, 10],
      text: {
        ru: "Собрать лекарственные растения и травы",
        en: "Harvest the medicinal plants and herbs"
      }
    }, {
      name: "$27",
      category: "garden",
      days: [13],
      text: {
        ru: "Черенкование, укоренение черенков",
        en: "Root the cuttings"
      }
    }, {
      name: "$28",
      category: "garden",
      days: [1, 16, 17, 18, 19, 20, 22, 23, 25, 26, 29],
      text: {
        ru: "Борьбу с вредителями и сорняками",
        en: "Fight against the weeds and pests"
      }
    }, {
      name: "$29",
      category: "garden",
      days: [15, 16],
      text: {
        ru: "Окучивание и рыхление почвы",
        en: "Hoe and hill up the ground"
      }
    }, {
      name: "$30",
      category: "garden",
      days: [7, 16, 19, 22, 23, 24, 25, 28],
      text: {
        ru: "Удобрение почвы",
        en: "Fertilize the soil"
      }
    }, {
      name: "$31",
      category: "garden",
      days: [19, 20, 23, 29],
      text: {
        ru: "Обрезку растений",
        en: "Crop the plants"
      }
    }, {
      name: "$32",
      category: "garden",
      days: [20, 22, 23],
      text: {
        ru: "Прореживание всходов",
        en: "Thinning the seedlings"
      }
    }, {
      name: "$33",
      category: "garden",
      days: [8, 20, 26],
      text: {
        ru: "Уборку ботвы и листьев",
        en: "Pick the haulm and leaves"
      }
    }, {
      name: "$34",
      category: "garden",
      days: [22, 24, 25, 26],
      text: {
        ru: "Заняться благоустройством сада",
        en: "Garden landscaping"
      }
    }, {
      name: "$35",
      category: "garden",
      days: [7],
      text: {
        ru: "Покосить газон",
        en: "Mow the lawn"
      }
    }, {
      name: "$36",
      category: "fishing",
      days: [21, 22, 23, 24],
      text: {
        ru: "Пойти порыбачить",
        en: "Go fishing"
      }
    }, {
      name: "$37",
      category: "house",
      days: [1, 20],
      text: {
        ru: "Распланировать семейный бюджет",
        en: "Plan the family budget"
      }
    }, {
      name: "$38",
      category: "house",
      days: [3],
      text: {
        ru: "Пересадить комнатные растения",
        en: "Transplant the indoor plants"
      }
    }, {
      name: "$39",
      category: "house",
      days: [3],
      text: {
        ru: "Заготовить полуфабрикаты",
        en: "Prepare semi finished goods"
      }
    }, {
      name: "$40",
      category: "house",
      days: [5],
      text: {
        ru: "Навести порядок в шкафах",
        en: "Bring order to the closets"
      }
    }, {
      name: "$41",
      category: "house",
      days: [5],
      text: {
        ru: "Сделать перестановку мебели",
        en: "Rearrange the furniture"
      }
    }, {
      name: "$42",
      category: "house",
      days: [7],
      text: {
        ru: "Законсервировать овощи и фрукты, сделать заготовки на зиму",
        en: "Make canned vegetables and fruits"
      }
    }, {
      name: "$43",
      category: "house",
      days: [10],
      text: {
        ru: "Организовать семейный обед",
        en: "Arrange the family dinner"
      }
    }, {
      name: "$44",
      category: "house",
      days: [19, 29],
      text: {
        ru: "Избавиться от хлама",
        en: "Decluttering"
      }
    }, {
      name: "$45",
      category: "house",
      days: [13],
      text: {
        ru: "Спечь чтото",
        en: "Bake something"
      }
    }, {
      name: "$46",
      category: "house",
      days: [13],
      text: {
        ru: "Приготовить экзотическое необычное блюдо",
        en: "Cook an exotic unusual dish"
      }
    }, {
      name: "$47",
      category: "house",
      days: [14],
      text: {
        ru: "Упорядочить бумаги, документы",
        en: "Put the papers and documents in order"
      }
    }, {
      name: "$48",
      category: "house",
      days: [14],
      text: {
        ru: "Приготовить лекарственные и косметические средства в домашних условиях",
        en: "Make medicinal and cosmetic products"
      }
    }, {
      name: "$49",
      category: "house",
      days: [18],
      text: {
        ru: "Провести мелкий ремонт",
        en: "Minor repairs"
      }
    }, {
      name: "$50",
      category: "house",
      days: [19],
      text: {
        ru: "Помыть холодильник",
        en: "Wash the refrigerator"
      }
    }, {
      name: "$51",
      category: "house",
      days: [21],
      text: {
        ru: "Помыть окна, зеркала",
        en: "Washing windows, mirrors"
      }
    }, {
      name: "$52",
      category: "house",
      days: [21],
      text: {
        ru: "Вычистить ковры, сдать в химчистку верхнюю одежду",
        en: "Clean the carpet, outerwear"
      }
    }, {
      name: "$53",
      category: "house",
      days: [23],
      text: {
        ru: "Большую стирку, глажку",
        en: "Big laundry, ironing"
      }
    }, {
      name: "$54",
      category: "house",
      days: [23],
      text: {
        ru: "Мелкий ремонт одежды",
        en: "Repair the clothes"
      }
    }, {
      name: "$55",
      category: "house",
      days: [23],
      text: {
        ru: "Почистить фарфоровую посуду",
        en: "Clean the porcelain tableware"
      }
    }, {
      name: "$56",
      category: "house",
      days: [25, _$1.NaN],
      text: {
        ru: "Почистить ювелирные изделия",
        en: "Clean the jewelry"
      }
    }, {
      name: "$57",
      category: "house",
      days: [27, _$1.NaN],
      text: {
        ru: "Почистить аквариум, клетку, вычесать шерсть домашних любимцев",
        en: "Clean the aquarium, cages, comb the pets wool"
      }
    }, {
      name: "$58",
      category: "house",
      days: [24],
      text: {
        ru: "Устроить генеральную уборку",
        en: "Arrange the general cleaning"
      }
    }, {
      name: "$59",
      category: "health",
      days: [2, 12],
      text: {
        ru: "Начать курс приема лекарств",
        en: "Begin the course of medication intake"
      }
    }, {
      name: "$60",
      category: "health",
      days: [2, 12],
      text: {
        ru: "Начать курс приема витаминов",
        en: "Begin the vitamin intake course"
      }
    }, {
      name: "$61",
      category: "health",
      days: [12],
      text: {
        ru: "Лечить хронические заболевания",
        en: "Treat chronic diseases"
      }
    }, {
      name: "$62",
      category: "health",
      days: [2, 8],
      text: {
        ru: "Очистку ЖКТ",
        en: "Intestinal cleansing"
      }
    }, {
      name: "$63",
      category: "health",
      days: [2],
      text: {
        ru: "Пойти на консультацию к врачу",
        en: "Get a doctor's consultation"
      }
    }, {
      name: "$64",
      category: "health",
      days: [3],
      text: {
        ru: "Лечить зубы",
        en: "Dental treatment"
      }
    }, {
      name: "$65",
      category: "health",
      days: [3],
      text: {
        ru: "Лечить кости и суставы",
        en: "Treat bones and joints"
      }
    }, {
      name: "$66",
      category: "health",
      days: [7],
      text: {
        ru: "Посетить логопеда",
        en: "Visit the speech therapist"
      }
    }, {
      name: "$67",
      category: "health",
      days: [7],
      text: {
        ru: "Лечить легкие и бронхи",
        en: "Treat the lungs and bronchial tubes"
      }
    }, {
      name: "$68",
      category: "health",
      days: [17],
      text: {
        ru: "Лечить бесплодие",
        en: "Treat infertility"
      }
    }, {
      name: "$69",
      category: "health",
      days: [18, 20, 23],
      text: {
        ru: "Отказаться от вредной привычки",
        en: "Get rid of harmful habit"
      }
    }, {
      name: "$70",
      category: "health",
      days: [13],
      text: {
        ru: "Сделать пластическую операцию",
        en: "Do a plastic surgery"
      }
    }, {
      name: "$71",
      category: "health",
      days: [13],
      text: {
        ru: "Почистить печень",
        en: "Cleanse the liver"
      }
    }, {
      name: "$72",
      category: "health",
      days: [20],
      text: {
        ru: "Хирургическую операцию  грудь, молочные железы, почки, мочевой пузырь, половые органы, ноги",
        en: "Surgical operations - chest, breasts, kidneys, bladder, genitals, legs"
      }
    }, {
      name: "$73",
      category: "health",
      days: [21],
      text: {
        ru: "Хирургическую операцию  легкие, бронхи, кисти, руки, брюшная полость, печень",
        en: "Surgical operations - lungs, bronchial tubes, hands, arms, abdomen, liver"
      }
    }, {
      name: "$74",
      category: "health",
      days: [24],
      text: {
        ru: "Хирургическую операцию  желудок",
        en: "Surgical operations – stomach"
      }
    }, {
      name: "$75",
      category: "health",
      days: [25],
      text: {
        ru: "Хирургическую операцию  сердце, спина, позвоночник",
        en: "Surgical operations – heart, back, spine"
      }
    }, {
      name: "$76",
      category: "health",
      days: [27],
      text: {
        ru: "Зачать ребенка",
        en: "Conceive a child"
      }
    }, {
      name: "$77",
      category: "health",
      days: [28],
      text: {
        ru: "Хирургическую операцию  голова (глаза и тд)",
        en: "Surgical operations – head (eyes, etc.)"
      }
    }, {
      name: "$78",
      category: "health",
      days: [28],
      text: {
        ru: "Лечить глаза",
        en: "Treat the eyes"
      }
    }, {
      name: "$79",
      category: "shopping",
      days: [5, 10, 24],
      text: {
        ru: "Приобрести недвижимость",
        en: "Purchase the property"
      }
    }, {
      name: "$80",
      category: "shopping",
      days: [10, 20],
      text: {
        ru: "Приобрести машину, велосипед, корабль, лошадь",
        en: "Purchase a car, bike, boat, horse"
      }
    }, {
      name: "$81",
      category: "shopping",
      days: [2, 5],
      text: {
        ru: "Приобрести бытовую утварь",
        en: "Purchase housewares"
      }
    }, {
      name: "$82",
      category: "shopping",
      days: [4],
      text: {
        ru: "Приобрести предметы гигиены",
        en: "Purchase hygiene products"
      }
    }, {
      name: "$83",
      category: "shopping",
      days: [18],
      text: {
        ru: "Приобрести мелкую мебель",
        en: "Purchase small furniture"
      }
    }, {
      name: "$84",
      category: "shopping",
      days: [5, 10, 22, 24, 28],
      text: {
        ru: "Приобрести одежду",
        en: "Purchase clothes"
      }
    }, {
      name: "$85",
      category: "shopping",
      days: [6],
      text: {
        ru: "Приобрести канцелярию",
        en: "Purchase stationery"
      }
    }, {
      name: "$86",
      category: "shopping",
      days: [6, 17],
      text: {
        ru: "Приобрести билеты, путевки",
        en: "Purchase tickets for trips"
      }
    }, {
      name: "$87",
      category: "shopping",
      days: [7, 12],
      text: {
        ru: "Приобрести книги",
        en: "Purchase books"
      }
    }, {
      name: "$88",
      category: "shopping",
      days: [7],
      text: {
        ru: "Приобрести музыкальные инструменты",
        en: "Purchase musical instruments"
      }
    }, {
      name: "$89",
      category: "shopping",
      days: [8],
      text: {
        ru: "Приобрести антиквариат",
        en: "Purchase antiques"
      }
    }, {
      name: "$90",
      category: "shopping",
      days: [5, 10, 24],
      text: {
        ru: "Приобрести крупную бытовую технику",
        en: "Purchase major household appliances"
      }
    }, {
      name: "$91",
      category: "shopping",
      days: [11],
      text: {
        ru: "Приобрести осветительные приборы, камины, печи",
        en: "Purchase lighting fixtures, fireplaces, stoves"
      }
    }, {
      name: "$92",
      category: "shopping",
      days: [17, 22],
      text: {
        ru: "Приобрести праздничный декор",
        en: "Purchase festive decoration"
      }
    }, {
      name: "$93",
      category: "shopping",
      days: [6, 10, 17, 22, 17],
      text: {
        ru: "Приобрести товары для детей",
        en: "Purchase products for children"
      }
    }, {
      name: "$94",
      category: "shopping",
      days: [19],
      text: {
        ru: "Приобрести домашних животных",
        en: "Purchase pets"
      }
    }, {
      name: "$95",
      category: "shopping",
      days: [25],
      text: {
        ru: "Приобрести аквариум с обитателями",
        en: "Purchase aquariums with its inhabitants"
      }
    }, {
      name: "$96",
      category: "shopping",
      days: [20],
      text: {
        ru: "Приобрести спортивный инвентарь, абонемент в спортзал",
        en: "Purchase sports equipment, gym membership"
      }
    }, {
      name: "$97",
      category: "shopping",
      days: [21],
      text: {
        ru: "Приобрести снаряжение для походов",
        en: "Purchase trekking equipment"
      }
    }, {
      name: "$98",
      category: "shopping",
      days: [5, 10, 22, 24, 28],
      text: {
        ru: "Купить продукты",
        en: "Buy food"
      }
    }, {
      name: "$99",
      category: "shopping",
      days: [25],
      text: {
        ru: "Приобрести надувные бассейны, акваланги",
        en: "Purchase inflatable pools"
      }
    }, {
      name: "$100",
      category: "shopping",
      days: [25],
      text: {
        ru: "Приобрести приятные мелочи для себя",
        en: "Purchase pleasant little things for yourself"
      }
    }, {
      name: "$101",
      category: "shopping",
      days: [12, 30],
      text: {
        ru: "Купить подарки",
        en: "Buy gifts"
      }
    }, {
      name: "$102",
      category: "shopping",
      days: [5],
      text: {
        ru: "Обменять товар с браком",
        en: "Exchange of goods with the defects"
      }
    }, {
      name: "$103",
      category: "beauty",
      days: [15, 20, 23, 25],
      text: {
        ru: "Сделать стрижку",
        en: "Do a haircut"
      }
    }, {
      name: "$104",
      category: "beauty",
      days: [6, 8, 14, 19, 20, 21],
      text: {
        ru: "Покрасить волосы",
        en: "Color the hair"
      }
    }, {
      name: "$105",
      category: "beauty",
      days: [3, 10, 15],
      text: {
        ru: "Уложить волосы в салоне",
        en: "Do hair styling"
      }
    }, {
      name: "$106",
      category: "beauty",
      days: [6, 13],
      text: {
        ru: "Подрезать кончики",
        en: "Trim the hair"
      }
    }, {
      name: "$107",
      category: "beauty",
      days: [7, 15, 19, 20],
      text: {
        ru: "Завивку волос",
        en: "Do perm"
      }
    }, {
      name: "$108",
      category: "beauty",
      days: [20, 22],
      text: {
        ru: "Сделать пирсинг, проколоть уши",
        en: "Piercing"
      }
    }, {
      name: "$109",
      category: "beauty",
      days: [15],
      text: {
        ru: "Наращивание волос",
        en: "Hair extension"
      }
    }, {
      name: "$110",
      category: "beauty",
      days: [16, 28],
      text: {
        ru: "Наращивание ногтей",
        en: "Nail extension"
      }
    }, {
      name: "$111",
      category: "beauty",
      days: [6, 19],
      text: {
        ru: "Маникюр",
        en: "Manicure"
      }
    }, {
      name: "$112",
      category: "beauty",
      days: [4, 9],
      text: {
        ru: "Педикюр",
        en: "Pedicure"
      }
    }, {
      name: "$113",
      category: "beauty",
      days: [20],
      text: {
        ru: "Сесть на диету",
        en: "Start a diet"
      }
    }, {
      name: "$114",
      category: "beauty",
      days: [2, 17],
      text: {
        ru: "Пойти на фитнес/аэробику",
        en: "Start the fitness classes"
      }
    }, {
      name: "$115",
      category: "beauty",
      days: [2, 8, 21, 29],
      text: {
        ru: "Сменить имидж",
        en: "Change the style"
      }
    }, {
      name: "$116",
      category: "beauty",
      days: [16, 26],
      text: {
        ru: "Удалить родинки, бородавки, вросшие ногти",
        en: "Remove warts and moles"
      }
    }, {
      name: "$117",
      category: "beauty",
      days: [25],
      text: {
        ru: "Антицеллюлитный массаж",
        en: "Anti-cellulite massage"
      }
    }, {
      name: "$118",
      category: "beauty",
      days: [6, 13],
      text: {
        ru: "Пилинги, скрабы, другие омолаживающие процедуры для кожи",
        en: "Skin, hair and entire body rejuvenation"
      }
    }, {
      name: "$119",
      category: "beauty",
      days: [3, 24],
      text: {
        ru: "Посетить сауну, баню",
        en: "Visit the sauna, steam room"
      }
    }, {
      name: "$120",
      category: "beauty",
      days: [18, 20],
      text: {
        ru: "Поухаживать за лицом, сделать питательные маски для кожи",
        en: "Take care of the facial skin, make hydrating masks"
      }
    }, {
      name: "$121",
      category: "beauty",
      days: [16, 18, 28],
      text: {
        ru: "Почистить кожу лица",
        en: "Facial skin cleansing"
      }
    }, {
      name: "$122",
      category: "beauty",
      days: [20],
      text: {
        ru: "Обертывания",
        en: "Make wraps"
      }
    }, {
      name: "$123",
      category: "beauty",
      days: [24],
      text: {
        ru: "Выбрать духи",
        en: "Choose the fragrance"
      }
    }, {
      name: "$124",
      category: "beauty",
      days: [15, 16],
      text: {
        ru: "Сделать эпиляцию",
        en: "Depilation"
      }
    }, {
      name: "$125",
      category: "lucky",
      days: [14, 15, 20, 21],
      text: {
        ru: "Рискнуть",
        en: "Take the risk"
      }
    }, {
      name: "$126",
      category: "lucky",
      days: [11],
      text: {
        ru: "Сыграть в лотерею",
        en: "Play the lottery"
      }
    }, {
      name: "$127",
      category: "lucky",
      days: [1, 7],
      text: {
        ru: "Загадать желание",
        en: "Make a wish"
      }
    }, {
      name: "$128",
      category: "business",
      days: [1, 24],
      text: {
        ru: "Разработать концепцию и стратегию проекта",
        en: "Develop a concept and strategy for the project"
      }
    }, {
      name: "$129",
      category: "business",
      days: [11, 20],
      text: {
        ru: "Вступить в новую должность",
        en: "Start working on the new post"
      }
    }, {
      name: "$130",
      category: "business",
      days: [19, 24],
      text: {
        ru: "Уволиться",
        en: "Quit"
      }
    }, {
      name: "$131",
      category: "business",
      days: [19, 24],
      text: {
        ru: "Уволить кого-то",
        en: "Fire someone"
      }
    }, {
      name: "$132",
      category: "business",
      days: [13, 21],
      text: {
        ru: "Нанять на работу новых сотрудников",
        en: "Hire new employees"
      }
    }, {
      name: "$133",
      category: "business",
      days: [17],
      text: {
        ru: "Организовать корпоратив",
        en: "Visit corporate party"
      }
    }, {
      name: "$134",
      category: "business",
      days: [7, 17],
      text: {
        ru: "Провести рекламную кампанию",
        en: "Conduct an advertising campaign"
      }
    }, {
      name: "$135",
      category: "business",
      days: [2, 7, 12, 27, 28],
      text: {
        ru: "Стать спонсором",
        en: "Become a sponsor"
      }
    }, {
      name: "$136",
      category: "business",
      days: [2, 23],
      text: {
        ru: "Найти источники финансирования",
        en: "Find the sources of funding"
      }
    }, {
      name: "$137",
      category: "business",
      days: [5],
      text: {
        ru: "Перестановку в офисе, ремонт",
        en: "Make rearrange, repair in the office"
      }
    }, {
      name: "$138",
      category: "business",
      days: [5],
      text: {
        ru: "Внедрить новые методы в работу",
        en: "Try the new methods in work"
      }
    }, {
      name: "$139",
      category: "business",
      days: [7],
      text: {
        ru: "Провести мотивационные беседы и тренинги",
        en: "Motivational talks and trainings"
      }
    }, {
      name: "$140",
      category: "business",
      days: [21, 24],
      text: {
        ru: "Устроить мозговой штурм",
        en: "Arrange a brainstorm"
      }
    }, {
      name: "$141",
      category: "business",
      days: [7],
      text: {
        ru: "Презентовать свой проект",
        en: "Present new project"
      }
    }, {
      name: "$142",
      category: "business",
      days: [11],
      text: {
        ru: "Заключить важный контракт",
        en: "Sign an important contract"
      }
    }, {
      name: "$143",
      category: "business",
      days: [12],
      text: {
        ru: "Провести акцию со скидками, подарками",
        en: "Offer discounts and gifts to my customers"
      }
    }, {
      name: "$144",
      category: "business",
      days: [13, 21, 28],
      text: {
        ru: "Поехать в командировку",
        en: "Go on a business trip"
      }
    }, {
      name: "$145",
      category: "business",
      days: [22],
      text: {
        ru: "Обучаться, повысить квалификацию",
        en: "Learn, improve my skills"
      }
    }, {
      name: "$146",
      category: "business",
      days: [14],
      text: {
        ru: "Упорядочить документацию",
        en: "Put documentation in order"
      }
    }, {
      name: "$147",
      category: "business",
      days: [16],
      text: {
        ru: "Составить отчетность",
        en: "Make reports"
      }
    }, {
      name: "$148",
      category: "business",
      days: [20],
      text: {
        ru: "Завести полезные знакомства, связи",
        en: "Make useful acquaintances"
      }
    }, {
      name: "$149",
      category: "business",
      days: [19, 24],
      text: {
        ru: "Отказаться от старых неработающих схем, технологий",
        en: "Get rid of old non-working schemes, technologies"
      }
    }, {
      name: "$150",
      category: "business",
      days: [25],
      text: {
        ru: "Решить юридические, судебные вопросы",
        en: "Solve legal, judicial issues"
      }
    }, {
      name: "$151",
      category: "business",
      days: [25],
      text: {
        ru: "Закупить материалы, товар",
        en: "Purchase materials"
      }
    }];
    t.a = a;
  };

  var _3d = function (e, t, n) {
    "use strict";

    var a = {
      monday: {
        name: {
          ru: "понедельник",
          en: "monday"
        },
        planet: {
          ru: "луна",
          en: "moon"
        },
        planetLogoPath: n(671),
        description: {
          ru: "<strong>Хозяйка понедельника – Луна.</strong> Беспокойная и переменчивая, в астрологии Луна отвечает за эмоции, изменения настроения, женское начало. Потому понедельники лучше посвящать домашним хлопотам, общению с любимыми, семьей, воспитанию детей. Любое большое дело, начатое в понедельник, наверняка будет протекать нестабильно и изменять свое направление, так что этот день – не самый благоприятный для начала бизнес-проектов.<br/><br/>\nПонедельник – день тяжелый, только если идти против течения Лунной энергии. Используйте энергию дня себе во благо, позаботьтесь о своих близких и уюте в Вашем доме, найдите способ порадовать друзей и коллег. Довольная Луна подарит Вам хорошее самочувствие и счастливые взаимоотношения с окружающими.<br/><br/>\n<i>Цвет дня – фиолетовый. Нота – фа.</i>",
          en: "<strong>Moon is the Monday's ruler.</strong> Restless and changeable, the Moon in astrology is responsible for emotion, mood changes, femininity. Because of this, it is better to devote the Mondays to household chores, communication with loved ones, family, parenting. Any great work, which begun on Monday, probably will flow unstable and change its direction, so this day is not the most auspicious for starting business projects.<br/><br/>\nMonday is the hard day only if you go against the tide of the Moon energy. Use the energy of the day for your own benefit, take care of your loved ones and your home coziness, find a way to please friends and colleagues. Satisfied moon will give you good health and happy relationships with others."
        }
      },
      tuesday: {
        name: {
          ru: "вторник",
          en: "tuesday"
        },
        planet: {
          ru: "марс",
          en: "mars"
        },
        planetLogoPath: n(669),
        description: {
          ru: "<strong>Небесный покровитель вторника – Марс.</strong> Энергия этой планеты очень мощная, напористая, «боевая». Марс усилит Ваши лидерские задатки и поможет Вам в любом деле, требующем сообразительности и храбрости. Вторник – прекрасное время, чтобы начать новаторский проект, проявить решительность и инициативу, убедить окружающих в своей правоте. Чем больше сделаешь сегодня, тем больше энергии получишь для дальнейших действий!<br/><br/>\nИзбегайте агрессии и открытых конфликтов – Марс способен из мелочи раздуть крупную ссору. Поиски компромисса в близких отношениях также лучше отложите на другой день недели.<br/><br/>\n<i>Цвет дня – красный. Нота – до.</i>",
          en: "<strong>Mars is the celestial patron of Tuesday.</strong> The energy of this planet is very powerful and assertive. Mars will strengthen your leadership traits and help you in any business that requires intelligence and courage. Tuesday is the perfect time to start an innovative project, take the initiative, convince others of your rightness. The more that you do today, the more energy you'll get for the further actions!<br/><br/>\nAvoid aggression and conflicts - Mars can inflate a large quarrel. It is also better to postpone the search for compromise in a relationship to another day of the week."
        }
      },
      wednesday: {
        name: {
          ru: "среда",
          en: "wednesday"
        },
        planet: {
          ru: "меркурий",
          en: "mercury"
        },
        planetLogoPath: n(670),
        description: {
          ru: "<strong>Средой управляет Меркурий –</strong> планета, ответственная за все интеллектуальное, за коммуникацию, путешествия, покупки. Меркурий наделяет нас рациональностью, быстротой мышления и остроумием, потому среда отлично подходит для всего, что требует ясности мысли, диалога или принятия решений. Устраивайте деловые встречи и заключайте выгодные сделки, начинайте учиться новому, обзаводитесь полезными знакомствами, отправляйтесь в поездки или на шоппинг – сегодня Небеса помогают Вам!<br/><br/>\n<i>Цвет дня – желтый. Нота – си.</i>",
          en: "<strong>The Wednesday is ruled by Mercury -</strong> this planet is responsible for all intellectual, for communication, traveling, shopping. Mercury gives us rationality, quick thinking, and wit, so Wednesday is perfect for anything that requires clear mindset, dialogue, and decision-making. Arrange a business meeting and conclude profitable deals, begin to learn new things, acquire useful contacts, go on trips or shopping - the skies help you today!<br/><br/>"
        }
      },
      thursday: {
        name: {
          ru: "четверг",
          en: "thursday"
        },
        planet: {
          ru: "юпитер",
          en: "jupiter"
        },
        planetLogoPath: n(668),
        description: {
          ru: "<strong>Четвертый день недели управляется Юпитером –</strong> самой философской и духовной планетой в астрологии. Юпитер отвечает за процветание, изобилие и высокие идеалы, помогает нам расширить границы посредством духовных практик и методик самопознания. Посвятите четверг обучению, самосовершенствованию, глубоким размышлениям. Сегодня – прекрасный день, чтобы начать масштабный проект, восстановить справедливость, заняться политической деятельностью и социальной работой, узаконить отношения с любимым человеком.<br/><br/>\n<i>Цвет дня – зеленый. Нота – ля.</i>",
          en: "<strong>The Thursday is ruled by Jupiter -</strong> the most philosophical and spiritual planet in astrology. Jupiter is responsible for prosperity, abundance and high ideals, it helps us to expand the boundaries through spiritual practices and self-discovery techniques. Dedicate Thursday to training, self-improvement, deep reflection. Today is the perfect day to start a large-scale project, restore justice, engage in political activities and social work, legitimize the relationship with your loved one.<br/><br/>"
        }
      },
      friday: {
        name: {
          ru: "пятница",
          en: "friday"
        },
        planet: {
          ru: "венера",
          en: "venus"
        },
        planetLogoPath: n(674),
        description: {
          ru: "<strong>Небесная покровительница пятницы – Венера.</strong> Эта планета любит все красивое, романтику, страсть, искусство, возвышенность чувств. Пятницу лучше всего провести, отдыхая в красивом месте, сходить в театр или галерею, устроить романтическое свидание, приготовить приятный сюрприз или подарок для любимого человека. Важно уделить время себе, красиво одеться, уложить волосы. Дайте волю своему воображению, творите, любите и наслаждайтесь прекрасным сегодня – и Венера исполнит все Ваши самые смелые мечты!<br/><br/>\n<i>Цвет дня – синий. Нота – ми.</i>",
          en: "<strong>Beautiful Venus is the Friday's ruler.</strong> This planet loves all beautiful and romantic, the passion and art. The best decision is to spent Friday relaxing in a beautiful place, go to the theater or gallery, arrange a romantic date, prepare a pleasant surprise or a gift for a loved one. It is important to take the time for yourself, dress pretty, make your hair and nails. Unleash your imagination, create, love, and enjoy the beauty today - Venus will fulfill all your wildest dreams!<br/><br/"
        }
      },
      saturday: {
        name: {
          ru: "суббота",
          en: "saturday"
        },
        planet: {
          ru: "сатурн",
          en: "saturn"
        },
        planetLogoPath: n(672),
        description: {
          ru: "<strong>Сатурн – покровитель субботы.</strong> Это самая холодная и аскетичная планета, которая любит дисциплину, уединение и покой. В субботу лучше побыть наедине с собой, отдохнуть, помедитировать, осмыслить свои цели, подвести итоги. Этот день идеален для всего, чему необходим трезвый, реалистичный и практический подход.<br/><br/>\n<i>Цвет дня – голубой. Нота – соль.</i>",
          en: "<strong>Saturn is the patron of the Saturday.</strong> It is the coldest and the most ascetic planet which loves the discipline, privacy, and tranquility. It's better to be alone with yourself, relax, meditate, reflect on your goals, summarize on Saturday. It is perfect for anything that requires a sober, realistic and practical approach.<br/><br/"
        }
      },
      sunday: {
        name: {
          ru: "суббота",
          en: "sunday"
        },
        planet: {
          ru: "солцне",
          en: "sun"
        },
        planetLogoPath: n(673),
        description: {
          ru: "<strong>Воскресеньем управляет само Солнце –</strong> что бы вы не начали в этот день, наверняка удастся! Дни Солнца созданы для активной радости, праздника, веселья и счастья. Обратитесь к тем, к кому прежде не решались, общайтесь, знакомьтесь – Солнце поможет Вам обзавестись хорошими друзьями и надежными партнерами. Начните сегодня заботиться о своем здоровье, и Солнце подарит Вам бодрость и свою светлую и теплую энергию. Неделя начинается в воскресенье!<br/><br/>\n<i>Цвет дня – оранжевый. Нота – ре.</i>",
          en: "<strong>Sunday is ruled by the Sun itself -</strong> whatever you begin on this day is likely to succeed! Days of the Sun were created for the active joy, celebration, and happiness. Start to communicate with people today - the sun will help you to get the good friends and reliable partners. Start to take care of your health today, and the sun will give you cheerfulness and its bright and warm energy. The week starts on Sunday!<br/><br/"
        }
      }
    };
    t.a = a;
  };

  var _3e = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Водолее</b>",
      en: "The Moon in <b>Aquarius</b>"
    },
        r = {
      ru: "Уран",
      en: "Uranus"
    },
        i = {
      ru: "ключ, икона",
      en: "Key, Icon"
    },
        s = {
      ru: "добрый, общительный, тактичный, веселый, оригинальный, изобретательный, хороший интеллект, интуиция",
      en: "kind, sociable, tactful, cheerful, original, inventive, intellectual, intuitive"
    },
        o = {
      ru: "Рожденные с Луной в Водолее – чувствительны, упорны, умны и оригинальны. Независимы в своих решениях и не поддаются влиянию извне. Могут казаться несколько холодными и безразличными, но на самом деле они просто уравновешенны и наделены способностью хорошо приспосабливаться к различным ситуациям. Кристально честны с теми, с кем имеют дело, и никогда не подведут друзей или членов семьи.",
      en: "Born with the Moon in Aquarius are sensitive, persistent, intelligent and original. Independent in their decisions and not amenable to influence from outside. They may seem pretty cold and indifferent, but in fact they are just balanced and endowed with the ability to adapt well to different situations. They are very honest with those they deal with, and their relatives and friends can fully rely on them."
    },
        u = {
      ru: "Страсти лунных Водолеев — это страсти ума. Представители данного знака интересуются идеями, философией, высшими знаниями. <b>Постоянно насыщайте Ваш мозг новой и качественной информацией – Вам это необходимо.</b>",
      en: "The passions of the lunar Aquarius are the passions of the mind. Representatives of this sign are interested in ideas, philosophy, higher knowledge. <b>Saturate your brain with new and high-quality information constantly - you need it.</b>"
    },
        l = [o, u];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: l
    };
  };

  var _3f = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Овне</b>",
      en: "The Moon in <b>Aries</b>"
    },
        r = {
      ru: "Марс",
      en: "Mars"
    },
        i = {
      ru: "молот, золотое руно",
      en: "Hammer, Golden Fleece"
    },
        s = {
      ru: "энергичный, уверенный, храбрый, благородный, с сильной волей, живой, независимый, экстравертный",
      en: "energetic, confident, brave, noble, with a strong will, alive, independent, extravert"
    },
        o = {
      ru: "Рожденные с Луной в Овне – рисковые лидеры, целеустремленные вожди. Стремятся доказать свое превосходство, для реализации задуманного способны свернуть горы. Марс наделяет представителей этого знака честолюбием, неугомонностью и упрямством; это стопроцентные эгоисты, идущие к мечте напролом. Однако, они от природы нетерпеливы и, начав выполнение задачи, могут передать ее другим. <b>Учитесь терпению!</b> Часто лишь его недостаток мешает Вам добиться желаемого.",
      en: "Born with the Moon in Aries are risky, purposeful leaders. They aspire to prove their superiority, able to do everything to realize their plans. Mars gives to representatives of this sign ambitiousness, restlessness and stubbornness; they are one hundred percent selfish. However, they are very impatient and can pass the started tasks to others. <b>Learn patience! Often, only its lack prevents you from achieving the goal.</b>"
    },
        u = {
      ru: "Лунные Овны вспыльчивы, но отходчивы и быстро забывают обиды. Идеалисты и романтики, они редко обучаются на собственном опыте, оставаясь открытыми и доверчивыми после многих оскорблений и неудач. Не концентрироваться на негативе – отличная черта, но <b>Вам все же стоит научиться учиться на своих ошибках.</b>",
      en: "Lunar Aries are quick-tempered, but they quickly forget quarrels. Idealists and romantics, they rarely learn from their own experience, remaining open and trusting after many insults and failures. Do not concentrate on the negative is an excellent trait, but <b>you still need to learn to learn from your mistakes.</b>"
    },
        l = [o, u];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: l
    };
  };

  var _3g = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Раке</b>",
      en: "The Moon in <b>Cancer</b>"
    },
        r = {
      ru: "Луна",
      en: "Moon"
    },
        i = {
      ru: "клевер, сердце",
      en: "Clover, Heart"
    },
        s = {
      ru: "подвижный, приветливый, контактный, остроумный, находчивый, интеллектуальный",
      en: "peaceful, reserved, shy, patient, sympathetic, faithful, domestic"
    },
        o = {
      ru: "Рожденные с Луной в Раке – тонкие психологи, внешне спокойные и закрытые, аккуратные и трудолюбивые. Благодаря умению чувствовать людей и хорошо развитой интуиции, лунные Раки не прогадают, взявшись за рискованное и кажущееся неприбыльным дело – <b>Вы способны не только реализовать безумную затею, но и сделать ее полезной для окружающих!</b>",
      en: "Born with the Moon in Cancer are the subtle psychologists, seemingly calm and closed, neat and hardworking. Due to the ability to feel people and the well-developed intuition, lunar Cancers will not fail with a risky and seemingly unprofitable affair. <b>You are able not only to realize a crazy venture, but also to make it useful to others!</b>"
    },
        u = {
      ru: "Луна наделяет представителей этого знака уважением к семейным традициям, домашнему уюту. Лунные Раки ласковы с домочадцами, стремятся обеспечить как материальный, так и моральный комфорт для всех членов семьи. Однако, Луна делает их и очень ранимыми и чувствительными, а в случае неудачи – непостоянными, капризными и беспокойными. В состоянии аффекта или опьянения Раки не контролируют себя – <b>не злоупотребляйте спиртными напитками и уединитесь, почувствовав приступ гнева, дабы потом не сожалеть о содеянном.</b>",
      en: "The Moon gives to representatives of this sign the respect for family traditions and home comfort. Lunar Cancers are affectionate with the relatives, strive to provide both material and moral comfort for all members of the family. However, the Moon makes them both very vulnerable and sensitive, and in case of failure, unstable, capricious and restless. In a state of affectation or intoxication, Cancers do not control themselves - <b>do not abuse alcohol and get out, feeling an attack of anger, so that you will not regret afterward.</b>"
    },
        l = [o, u];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: l
    };
  };

  var _3h = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Козероге</b>",
      en: "The Moon in <b>Capricorn</b>"
    },
        r = {
      ru: "Сатурн",
      en: "Saturn"
    },
        i = {
      ru: "черный кот, лестница",
      en: "Black cat, Ladder"
    },
        s = {
      ru: "сдержанный, холодный, практичный, сосредоточенный, усердный, с сильной волей и большой внутренней энергией",
      en: "reserved, cold, practical, focused, zealous, with strong will and great inner energy"
    },
        o = {
      ru: "Рожденные с Луной в Козероге – амбициозные и практичные стратеги. Нетерпимы к легкомыслию. Проживают жизнь, как альпинисты, методично и хладнокровно покоряя вершину за вершиной. Представители этого знака – трудоголики, но для них обязательно испытывать положительные эмоции во время труда. <b>Безрадостная нелюбимая работа не принесет Вам ничего, кроме разочарований!</b>",
      en: "Born with the Moon in Capricorn are the ambitious and practical strategists. Intolerant to frivolity. Live their lives like climbers, methodically and coolly conquering a peak after peak. Representatives of this sign are workaholics, but it is necessary for them to experience positive emotions during the work. <b>A joyless and unloved work will not bring you anything but disappointment!</b>"
    },
        u = {
      ru: "Лунным Козерогам нужно следить за общим состоянием позвоночника и не допускать общего переохлаждения. Делать различные гимнастики, направленные на укрепление позвоночного столба. Беречь зубы и часто обращаться к стоматологу на проверку. <b>Избегайте переутомления и, планируя свою жизнь, не забудьте запланировать и отдых.</b>",
      en: "Lunar Capricorns need to monitor the general condition of the spine and prevent the hypothermia. Do various gymnastics for the spine’s strengthening. Visit the dentist regularly. Avoid overwork! <b>When planning your life, do not forget to plan your rest.</b>"
    },
        l = [o, u];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: l
    };
  };

  var _3i = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Близнецах</b>",
      en: "The Moon in <b>Gemini</b>"
    },
        r = {
      ru: "Меркурий",
      en: "Mercury"
    },
        i = {
      ru: "змея, маска",
      en: "Snake, Mask"
    },
        s = {
      ru: "подвижный, приветливый, контактный, остроумный, находчивый, интеллектуальный",
      en: "agile, affable, contact, witty, resourceful, intelligent"
    },
        o = {
      ru: "Рожденные с Луной в Близнецах – разносторонне развитые интеллектуалы. Меркурий наделяет их выдающимися умственными способностями, коммуникабельностью, страстностью и авантюризмом. Лунные близнецы по натуре своей – успешные бизнесмены, предприниматели, лидеры. Они обладают прекрасной интуицией и оказываются правы во всем, что бы не предсказывали – пускай часто это лишь слова, не подкрепленные фактами.",
      en: "Born with the Moon in Gemini are the versatile intellectuals. Mercury empowers them with outstanding mental abilities, sociability, passion and adventurism. Lunar Gemini are successful businessmen, entrepreneurs, leaders. They have a wonderful intuition and everything they predict becomes true - even if there are only words not supported by facts."
    },
        u = {
      ru: "Осознавая свои преимущества, представители этого знака могут становится самодовольными и высокомерными – <b>не зазнавайтесь! Звездная болезнь не принесет Вам ничего, кроме усталости.</b>",
      en: "Realizing their advantages, the representatives of this sign can become self-satisfied and arrogant - <b>do not be conceited! Superiority complex will not bring you anything but fatigue.</b>"
    },
        l = {
      ru: "Выносливые физически, лунные близнецы лабильны эмоционально – скука и переутомление моментально сказываются на состоянии их здоровья. <b>Мыслите позитивно, если желаете сохранить здоровье и прожить долгую жизнь!</b>",
      en: "The lunar Gemini have big endurance, but they are emotionally labile - boredom and fatigue instantly affect their health. <b>Think positively if you want to stay healthy and live a long life!</b>"
    },
        c = [o, u, l];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: c
    };
  };

  var _3j = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return m;
    });

    var a = n(379),
        r = n(380),
        i = n(381),
        s = n(382),
        o = n(383),
        u = n(385),
        l = n(386),
        c = n(387),
        d = n(388),
        h = n(389),
        p = n(390),
        f = n(391),
        g = {
      aquarius: a.a,
      aries: r.a,
      cancer: i.a,
      capricorn: s.a,
      gemini: o.a,
      leo: u.a,
      libra: l.a,
      pisces: c.a,
      sagittarius: d.a,
      scorpio: h.a,
      taurus: p.a,
      virgo: f.a
    },
        m = function (e) {
      return g[e.toLowerCase()];
    };
  };

  var _3k = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна во <b>Льве</b>",
      en: "The Moon in <b>Leo</b>"
    },
        r = {
      ru: "Солнце",
      en: "Sun"
    },
        i = {
      ru: "янтарь, алмаз, изумруд, рубин, топаз, оникс, тигровый глаз",
      en: "Amber, diamond, emerald, ruby, topaz, onyx, tiger's eye"
    },
        s = {
      ru: "властный, честный, возвышенный, великодушный, верный, готовый помочь, напористый, страстный, магнетический",
      en: "imperious, honest, sublime, generous, faithful, ready to help, assertive, passionate, magnetic"
    },
        o = {
      ru: "Рожденные с Луной во Льве – яркие и царственные личности. Они великодушны, справедливы, независимы и, помимо больших амбиций, способны долго и плодотворно трудиться. Уверены в себе и не жалеют сил, чтобы добиваться все больших и больших результатов. Лунные Львы считают, что всё в их жизнях должно быть на высшем уровне. <b>Не ведитесь на лесть и комплименты – с их помощью окружающие могут легко манипулировать Вами!</b>",
      en: "Born with the Moon in Leo are bright and regal personalities. They are generous, independent and, apart from having great ambitions, are able to work long and fruitfully. They are confident in themselves and spare no effort to achieve the greater and greater results. Lunar Lions believe that everything in their lives must be at the highest level. <b>Do not be fooled by flattery and compliments - with their help, others can easily manipulate you!</b>"
    },
        u = {
      ru: "У лунных Львов сильная энергетика и развитые артистические данные, с помощью чего они притягивают к себе людей и с легкостью становятся лидерами в обществе. В силу своего характера представители этого знака стремятся занимать только первые места во всём и не терпят критики в свой адрес. <b>Учитесь адекватно воспринимать конструктивную критику!</b>",
      en: "Lunar Lions have strong energy and developed artistic features, with the help of which they attract people to themselves and easily become leaders in society. The representatives of this sign tend to occupy only the first places in everything and do not tolerate criticism in their address. <b>Learn to adequately perceive the constructive criticism!</b>"
    },
        l = {
      ru: "Лунные Львы щедры, но часто одаривают других лишь для того, чтобы привлечь к себе внимание. Кроме того, им свойственно впадать в крайности – доказывать свою правоту с помощью кулаков или одеваться кричаще. <b>Не выходите за пределы разумного.</b>",
      en: "The Lunar Lions are generous, but often show kindness to others only to attract attention for themselves. In addition, they tend to go to extremes. <b>Do not go beyond reason.</b>"
    },
        c = [o, u, l];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: c
    };
  };

  var _3l = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Весах</b>",
      en: "The Moon in <b>Libra</b>"
    },
        r = {
      ru: "Венера",
      en: "Venus"
    },
        i = {
      ru: "сердце, чашка чаю, книга",
      en: "Heart, Cup of tea, Book"
    },
        s = {
      ru: "благородный, вежливый, честный, интуитивный, гармоничный, очаровательный",
      en: "noble, polite, honest, intuitive, harmonious, charming"
    },
        o = {
      ru: "Рожденные с Луной в Весах – люди творческие, часто находящиеся в разладе с окружающей действительностью. Представители этого знака больше других нуждаются в уравновешенности и гармонии, не находя их, становятся сумасбродными, эгоистичными и ненадежными, бросают вызов всем вокруг. Венера наделяет лунных Весов развитым чувством прекрасного – и они пойдут на все, чтобы избежать контакта с людьми, которые оскорбляют законы этики и хорошего вкуса. <b>Найдите то, что поможет Вам обрести равновесие.</b>",
      en: "Born with the Moon in Libra are creative people, that are often feel the discord with surrounding reality. Representatives of this sign more than others need a balance and harmony. When not finding it, they become extravagant, selfish and unreliable, challenge everyone around. Venus gives the lunar Libra a developed sense of beauty - and they will do anything to avoid contact with people who offend the laws of ethics and the good taste. <b>Find something that will help you to find balance.</b>"
    },
        u = {
      ru: "Лунные Весы – свободные художники. Увлекаются никак не связанными между собой областями знаний и умудряются успешно сочетать их в своей работе. Весы достигают успеха в партнерском бизнесе, им необходимо иметь компаньона. Однако, в своем стремлении к гармонии и согласию, <b>не жертвуйте собственными интересами!</b>",
      en: "Lunar Libra are the free artists. They are fond of unrelated fields of knowledge and manage to successfully combine them in their work. To achieve success in business, they need to have a partner. However, in your striving for harmony, <b>do not sacrifice your own interests!</b>"
    },
        l = [o, u];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: l
    };
  };

  var _3m = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Рыбах</b>",
      en: "The Moon in <b>Pisces</b>"
    },
        r = {
      ru: "Нептун",
      en: "Neptune"
    },
        i = {
      ru: "узел, нарцисс",
      en: "Knot, Narcissus"
    },
        s = {
      ru: "добродушный, терпеливый, замкнутый, любвеобильный, непостоянный, набожный. При поражении - ленивый, сонливый, мало уверенный в себе",
      en: "good-natured, patient, closed, loving, unstable, pious. At defeat - lazy, drowsy, uncertain"
    },
        o = {
      ru: "Рожденные с Луной в Рыбах – чувствительные и мягкие мечтатели. Нептун наделяет богатой фантазией, благодаря чему им часто намного проще жить в собственном вымышленном мире, чем в реальном. Из представителей этого знака получаются великие музыканты, художники, писатели – люди искусства, склонные полагаться на случай, вдохновение и благосклонность судьбы. <b>Не замыкайтесь в себе, лучше раскрасьте реальность вокруг красками своего воображения!</b>",
      en: "Born with the Moon in Pisces are sensitive and softhearted dreamers. Neptune gives a rich imagination, and it often easier for them to live in their own fictional world than in the reality. The representatives of this sign become great musicians, artists, writers - the people of art, that are inclined to rely on chance, inspiration and favors of fate. <b>Do not close in your inner world, paint the reality around with the colors of your imagination!</b>"
    },
        u = {
      ru: "Лунные Рыбы – натуры бескорыстные, доверчивые и зависимые от людей, с которыми находятся в близких отношениях. Однажды разочаровавшись в ком-то, они становятся подозрительными и скрытными. <b>Не давайте себя использовать! Вы не обязаны угождать кому бы то ни было.</b>",
      en: "Lunar Pisces are unselfish, trustful and dependent on people with whom they are in close relationship. Once disappointed in someone, they become suspicious and secretive. <b>Do not let people use you! You do not have to please anyone.</b>"
    },
        l = {
      ru: "Рыбам как последнему знаку зодиакального круга дано слабое тело с замедленным восстановлением сил. Часты случаи заболеваний пищеварительной системы, респираторных и гормональных проблем, зависимости от алкоголя и наркотиков. <b>Берегите себя, больше отдыхайте, ведите здоровый образ жизни</b> – для Вас это важно больше, чем для других.",
      en: "Pisces as the last sign of the zodiac circle is given a weak body with a slow recovery of forces. They often suffer from diseases of the digestive system, respiratory and hormonal problems, dependence on alcohol and drugs. <b>Take care of yourself, rest more, choose a healthy lifestyle - these things are more important for you than for others.</b>"
    },
        c = [o, u, l];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: c
    };
  };

  var _3n = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Стрельце</b>",
      en: "The Moon in <b>Sagittarius</b>"
    },
        r = {
      ru: "Юпитер",
      en: "Jupiter"
    },
        i = {
      ru: "саламандра, подкова",
      en: "Salamander, Horseshoe"
    },
        s = {
      ru: "честный, великодушный, мирный, оптимистичный, интеллектуальный, мечтательный, романтичный, независимый, пользуется популярностью",
      en: "honest, generous, peaceful, optimistic, intelligent, dreamy, romantic, independent, popular"
    },
        o = {
      ru: "Рожденные с Луной в Стрельце – идеалисты и неисправимые романтики. Они очень страстны, честны и прямы в своих чувствах и намерениях, хотя окружающие могут принимать эти качества за поверхностность и непостоянство. Несмотря на свою общительность, представители этого знака часто бывают одиноки, так и не найдя в реальности своего идеала. <b>Слушайте свою интуицию – она никогда Вас не подводит.</b>",
      en: "Born with the Moon in Sagittarius are the idealists and incorrigible romantics. They are very passionate, honest and straightforward in their feelings and intentions, although others can accept these traits for superficiality and impermanence. Despite their sociability, representatives of this sign often are lonely, because they cannot find their ideal in reality. <b>Listen to your intuition - it never lies.</b>"
    },
        u = {
      ru: "Лунные Стрельцы – неугомонные личности, постоянно стремящиеся к новым открытиям и приключениям. Это генераторы великих идей, способные создавать большие проекты и привлекать к их реализации других – для продумывания мелких деталей, которое представителям этого знака не удается. <b>Найдите дело, которое Вам нравится и приносит пользу обществу – и в нем Вы достигнете успеха.</b>",
      en: "Lunar Sagittarius are the restless persons, constantly striving for new discoveries and adventures. They are generators of great ideas, capable of creating large projects and attracting others to its implementation. <b>Find a business which you like and which benefits society, and you will achieve success.</b>"
    },
        l = [o, u];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: l
    };
  };

  var _3o = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Скорпионе</b>",
      en: "The Moon in <b>Scorpio</b>"
    },
        r = {
      ru: "Марс и Плутон",
      en: "Mars and Pluto"
    },
        i = {
      ru: "жук, скорпион",
      en: "Beetle, Scorpion"
    },
        s = {
      ru: "замкнутый, наблюдательный, страстный, сексуальный, эмоциональный, волевой, настойчивый, упорный",
      en: "closed, observant, passionate, sexy, emotional, strong-willed, persevering, tenacious"
    },
        o = {
      ru: "Рожденные с Луной в Скорпионе – серые кардиналы и ловкие манипуляторы. Обладают сверхъестественной способностью анализировать почти все на свете, добираясь до сущности каждого дела. Наибольшего успеха представители данного знака достигают в управлении чужими или партнерскими финансами и ресурсами. Получают желаемое, играя на темных сторонах окружающих, которые хорошо распознают.",
      en: "Born with the Moon in Scorpio are gray cardinals and deft manipulators. They have a supernatural ability to analyze almost everything in the world, getting to the essence of each case. Representatives of this sign achieve the greatest success in the management of others’ or partners’ finances and resources. They get what they want, by playing on the dark sides of the people around."
    },
        u = {
      ru: "Лунные Скорпионы очень серьезно относятся ко всему, что они делают. Единственное, что им плохо удается, - так это понимать собственное тело. Крепкое, полное жизненных сил и энергии от рождения, оно часто гиперсексуально и склонно к полноте. <b>Прислушивайтесь к потребностям своего организма, чтобы сохранить его врожденную выносливость.</b>",
      en: "Lunar Scorpios take very seriously everything they do. The only thing that they do badly is their own body understanding. Strong, full of vitality and energy from birth, it is often hypersexual and inclined to fullness. <b>Listen to the needs of your body to preserve its innate endurance.</b>"
    },
        l = [o, u];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: l
    };
  };

  var _3p = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Тельце</b>",
      en: "The Moon in <b>Taurus</b>"
    },
        r = {
      ru: "Венера",
      en: "Venus"
    },
        i = {
      ru: "золотой телец, сова",
      en: "Golden calf, Owl"
    },
        s = {
      ru: "старательный, практичный, уверенный в себе, консервативный",
      en: "diligent, practical, confident, conservative"
    },
        o = {
      ru: "Рожденные с Луной в Тельце – надежные и справедливые прагматики. Больше всего ценят собственную материальную стабильность и комфорт, очень практичны, из-за чего могут казаться окружающим жадными и меркантильными. Это скрытые энтузиасты и упрямцы, которые стремятся к своей цели, не смотря на неудачи и препятствия. <b>Будьте внимательны! Иногда, чтобы добиться цели, нужна гибкость, а не упорство.</b>",
      en: "Born with the Moon in Taurus are reliable and fair pragmatists. Most of all they value their own financial stability and comfort, they are very practical, and they can seem to be greedy and mercantile because of these traits. They are hidden enthusiasts and stubborn people who are striving for their goal, despite failures and obstacles. <b>Be careful! Sometimes, to achieve the goal, you need flexibility, not perseverance.</b>"
    },
        u = {
      ru: "Венера наделяет лунных Тельцов развитым чувством стиля, хорошим вкусом, любовью ко всему утонченному и прекрасному. Они добры и преданны близким, обычно являются главными добытчиками в семье, заботятся о том, чтобы в доме царили стабильность и достаток. <b>Только в атмосфере покоя и стабильности Вы сможете реализовать себя в полной мере.</b>",
      en: "Venus endows lunar Taurus with a developed sense of style, good taste, love for everything sublime and beautiful. They are kind and devoted to their relatives, usually they are the main earners in family, take care of its stability and prosperity. <b>In an atmosphere of peace and stability only, you will be able to fully realize yourself.</b>"
    },
        l = [o, u];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: l
    };
  };

  var _3q = function (e, t, n) {
    "use strict";

    var a = {
      ru: "Луна в <b>Деве</b>",
      en: "The Moon in <b>Virgo</b>"
    },
        r = {
      ru: "Меркурий",
      en: "Mercury"
    },
        i = {
      ru: "кузнечик, астра",
      en: "Grasshopper, Aster"
    },
        s = {
      ru: "скромный, простой, спокойный, общительный, но суховатый, методичный до педантичности",
      en: "modest, simple, calm, sociable, but rather dry; methodical, pedantic"
    },
        o = {
      ru: "Рожденные с Луной в Деве – практичные и сообразительные труженики, очень замкнуты и осторожны. Они независимы и верят, что уверенность в своих силах и самоуважение дают человеку счастье и спокойствие ума. Благодаря умению обращать внимание на мелочи, представители этого знака способны хорошо разбираться в технических вопросах. <b>Найдите свое дело и станьте в нем профессионалом</b>– только так Вы сможете реализоваться в полной мере.",
      en: "Born with the Moon in Virgo are practical and intelligent workaholics, very closed and cautious. They are independent and believe that self-reliance and self-respect give a person happiness and the peace of mind. Due to the ability to pay attention to small details, the representatives of this sign can deeply understand the technical issues. <b>Find your business and become a professional in it</b> - only in this way you will be able to fully realize yourself."
    },
        u = {
      ru: "Лунные Девы нуждаются в похвале и поддержке близких – так их уверенность и эффективность возрастают в несколько раз. Представители этого знака заботятся о том, чтобы все домочадцы придерживались гигиены и здорового образа жизни, для них важно, чтобы все было правильно. <b>Правильно – это не всегда счастливо.</b>",
      en: "Lunar Virgos need the praise and support of loved ones, and their confidence and effectiveness increase in several times. Representatives of this sign take care that all family members adhere to hygiene and healthy lifestyle, it is important for them that everything is right. But <b>right does not always mean happy.</b>"
    },
        l = [o, u];
    t.a = {
      title: a,
      ruler: r,
      talismans: i,
      character: s,
      paragraphs: l
    };
  };

  var _3r = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>ВОДОЛЕЙ</b> – <i>бесплодный знак Зодиака</i>",
      en: "<b>AQUARIUS</b> - <i>a barren sign</i>"
    },
        r = {
      ru: "<b>укоренение и пересадка:</b> абутилон (комнатный клён), алоказия Сандера, бокарнея отогнутая, драцена Годсефа, калатея (Лубберса, полосатая, украшенная, розовато-раскрашенная, Маккоя), каллистемон лимонно-жёлтый, кокколоба ягодоносная, колеус (карликовый, Блюмс, Фершаффельта), крестовик Роули, ктенанта Оппенгейма, маранта беложилковатая, пуансеттия (молочай прекраснейший), роголистник, строманта приятная, ятрофа",
      en: "<b>rooting and transplanting:</b> abutilon (indoor maple), alocasia sanderiana, bocarnea, dracena godseffiana, calathea (striped, decorated, pink), callistemon (lemon yellow), coccoloba uvifera, coleus blumei, Ktenanta Oppenheim, arrowroot, poinsettia, hornwort, stromanthe, jatropha"
    },
        i = [r];
    t.a = {
      title: a,
      pluses: i
    };
  };

  var _3s = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>ОВЕН</b> – <i>бесплодный знак Зодиака</i>",
      en: "<b>ARIES</b> - <i>a barren sign</i>"
    },
        r = {
      ru: "<b>посев и посадка следующих овощных культур:</b> капуста пекинская, лук (батун, репчатый на перо), редис",
      en: "<b>sowing and planting of the listed vegetables:</b> peking cabbage, onions, radish"
    },
        i = {
      ru: "<b>пряно-зеленыx:</b> базилик, горчица, кориандр (кинза), кресс-салат, листовая горчица, петрушка на зелень, редис, салат",
      en: "<b>spices & greenery:</b> basil, coriander, watercress, mustard leaf, parsley, lettuce"
    },
        s = {
      ru: "<b>полевых:</b> люцерна",
      en: "<b>field crops:</b> alfalfa"
    },
        o = [r, i, s];
    t.a = {
      title: a,
      pluses: o
    };
  };

  var _3t = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>РАК</b> – <i>плодородный знак</i>",
      en: "<b>CANCER</b> - <i>a fertile sign</i>"
    },
        r = {
      ru: "<b>посев и посадка следующих овощных культур:</b> арахис, баклажаны, бахчевые, бобовые, дайкон, кабачки, капуста (белокочанная, брокколи, брюссельская, кольраби, красная, пекинская, савойская, цветная), картофель, лук (батун, латук, репчатый, шнитт), мангольд, морковь, огурцы, патиссоны, перец сладкий, редька, свекла, томат, тыква",
      en: "<b>sowing and planting of the listed vegetables:</b> peanuts, aubergines, melons, legumes, daikon, zucchini, cabbage (broccoli, brussels, kohlrabi, red, peking, savoy), potatoes, onions, chard, carrots, cucumbers, squash, sweet pepper, radish, beet, tomato, pumpkin"
    },
        i = {
      ru: "<b>пряно-зеленыx:</b> артишок, базилик, кориандр, кресс-салат, мята, мелисса, сельдерей, спаржа, укроп, фенхель, цикорий, чабер, шпинат, щавель",
      en: "<b>spices & greenery:</b> artichoke, basil, coriander, watercress, mint, celery, asparagus, dill, fennel, chicory, savory, spinach, sorrel"
    },
        s = {
      ru: "<b>плодово-ягодных:</b> виноград, груша, земляника, калина, малина, рябина, слива, смородина, шиповник, яблоня",
      en: "<b>fruit & berry plants:</b> grapes, pear, strawberry, viburnum, raspberry, mountain ash, plum, currant, dog rose, apple tree"
    },
        o = {
      ru: "<b>полевых:</b> кукуруза, люцерна, овес, пшеница, рожь, подсолнечник, ячмень",
      en: "<b>field crops:</b> corn, alfalfa, oats, wheat, rye, sunflower, barley"
    },
        u = {
      ru: "<b>цветов:</b> астра, василек, георгин, гиацинт, гладиолус, гвоздика, душистый горошек, календула, клематис, крокусы, лилейные, мак, маттиола, настурция, незабудка, маргаритка, роза, фиалка, хризантема, цинния, шалфей",
      en: "<b>flowering plants:</b> aster, cornflower, dahlia, hyacinth, gladiolus, carnation, sweet peas, calendula, clematis, crocus, lily, poppy, matthiola, nasturtium, forget-me-not, daisy, rose, violet, chrysanthemum, zinnia, sage"
    },
        l = {
      ru: "<b>укоренение, пересадка, обрезка комнатных растений:</b> агава американская и нитеносная, аглаонема скромная, аир злаковидный, гастерия бородавчатая, диффенбахия прелестная, каланхоэ (войлочное, бехарское), пахивитум яйценосный, молодил кровельный и паутинистый, очиток (Адольфа, краснокраплённый, Моргана, толстолистный), хавортия жемчугоносная и шахматная, эчеверия (горбатоцветковая, Деренберга, сизая, щетинистая)",
      en: "<b>rooting, transplanting, trimming of the houseplants:</b> agave, aglaonema modestum, calamus, gasteria, dieffenbachia, kalanchoe, haworthia, echeveria (derenbergii, blue)"
    },
        c = [r, i, s, o, u, l];
    t.a = {
      title: a,
      pluses: c
    };
  };

  var _3u = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>КОЗЕРОГ</b> – <i>знак средней плодородности</i>",
      en: "<b>CAPRICORN</b> - <i>average fertility sign</i>"
    },
        r = {
      ru: "<b>посев и посадка следующих овощных культур:</b> арахис, бобовые, дайкон, капуста (белокочанная, брокколи, кольраби, цветная), картофель, лук (батун, порей, репчатый, шнитт), мангольд, морковь, перец горький, редис, редька, репа, свекла, топинамбур, тыква, чеснок",
      en: "<b>sowing and planting of the listed vegetables:</b> peanuts, legumes, daikon, cabbage (white cabbage, broccoli, kohlrabi, etc.), potatoes, onions, chard, carrots, radish, turnips, beets, Jerusalem artichoke, pumpkin, garlic"
    },
        i = {
      ru: "<b>пряно-зеленыx:</b> базилик, мята, петрушка, сельдерей, укроп, хрен, шпинат, щавель",
      en: "<b>spices & greenery:</b> basil, mint, parsley, celery, dill, horseradish, spinach, sorrel"
    },
        s = {
      ru: "<b>плодово-ягодных:</b> абрикос, вишня, груша, земляника, крыжовник, персик, слива, смородина, яблоня",
      en: "<b>fruit & berry plants:</b> apricot, cherry, pear, strawberry, gooseberry, peach, plum, currant, apple"
    },
        o = {
      ru: "<b>полевых:</b> гречиха, ячмень",
      en: "<b>field crops:</b> buckwheat, barley"
    },
        u = {
      ru: "<b>цветов:</b> ирис",
      en: "<b>flowering plants:</b> iris"
    },
        l = {
      ru: "<b>комнатных растений:</b> драцена (деремская, душистая), конофитум Фридриха, лавр благородный, лапидария Маргарет, ларгиродерма яичковидная, пальмы веерные (хамеропс приземистый, трахикарпус Форчуна, вашингтония нитеносная), толстянка (серебристая, серповидная), фикус (Бенджамина, бенгальский, лировидный), фикус эластик (каучуконосный), хвойные растения, юкка слоновая",
      en: "<b>houseplants:</b> dracaena (Derek, fragrans), conophytum Friedrich, noble laurel, lapidaria margaretae, fan palm (chamaerops squat, trachycarpus Fortunei, washingtonia), money tree, ficus (Benjamina, Bengali, lyrata), ficus elastica (rubber plant), conifers, yucca elephantipes"
    },
        c = [r, i, s, o, u, l];
    t.a = {
      title: a,
      pluses: c
    };
  };

  var _3v = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>БЛИЗНЕЦЫ</b> – <i>бесплодный знак</i>",
      en: "<b>GEMINI</b> - <i>a barren sign</i>"
    },
        r = {
      ru: "<b>посев и посадка кустарниковых и вьющихся растений:</b> лианы, пассифлора, плющ и др.",
      en: "<b>sowing and planting of the shrubs and climbing plants:</b> lianas, ivy, etc."
    },
        i = {
      ru: "<b>овощных культур:</b> бобовые, капуста (брокколи, кольраби, пекинская, савойская, цветная), перец горький, редис",
      en: "<b>vegetables:</b> legumes, cabbage (broccoli, kohlrabi, peking, savoy), bitter pepper, radish"
    },
        s = {
      ru: "<b>пряно-зеленыx:</b> валериана, мята, петрушку, фенхель, шпинат",
      en: "<b>spices & greenery:</b> valerian, mint, parsley, fennel, spinach"
    },
        o = {
      ru: "<b>плодово-ягодных:</b> дыни, виноград, земляника, лимонник",
      en: "<b>fruit & berry plants:</b> melons, grapes, strawberries, lemongrass"
    },
        u = {
      ru: "<b>цветов:</b> душистый горошек, ландыш, пассифлора, роза",
      en: "<b>flowering plants:</b> sweet peas, lily of the valley, passion flowers, rose"
    },
        l = {
      ru: "<b>комнатных растений:</b> аспарагусы (густоцветковый, Мейера, перистый, спаржевый), зебрина, каллизия изящная, перистые пальмы (финик канарский, кокос Ведделя), сеткреазия пурпурная, традесканции, хлорофитум хохлатый, цианотис кьюсский",
      en: "<b>houseplants:</b> asparagus, zebrina, callisia elegans, pinnate palm trees, purpurea purple, tradescantia, chlorophytum, cyanotis"
    },
        c = [r, i, s, o, u, l];
    t.a = {
      title: a,
      pluses: c
    };
  };

  var _3w = function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return m;
    });

    var a = n(392),
        r = n(393),
        i = n(394),
        s = n(395),
        o = n(396),
        u = n(398),
        l = n(399),
        c = n(400),
        d = n(401),
        h = n(402),
        p = n(403),
        f = n(404),
        g = {
      aquarius: a.a,
      aries: r.a,
      cancer: i.a,
      capricorn: s.a,
      gemini: o.a,
      leo: u.a,
      libra: l.a,
      pisces: c.a,
      sagittarius: d.a,
      scorpio: h.a,
      taurus: p.a,
      virgo: f.a
    },
        m = function (e) {
      return g[e && e.toLowerCase()];
    };
  };

  var _3x = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>ЛЕВ</b> – <i>бесплодный знак</i>",
      en: "<b>LEO</b> - <i>a barren sign</i>"
    },
        r = {
      ru: "<b>посев и посадка следующих овощных культур:</b> скорционер",
      en: "<b>sowing and planting of the listed vegetables:</b> scorzonera"
    },
        i = {
      ru: "<b>пряно-зеленыx:</b> валериана, горчица, фенхель",
      en: "<b>spices & greenery:</b> valerian, mustard, fennel"
    },
        s = {
      ru: "<b>плодово-ягодных:</b> виноград, крыжовник, орех грецкий, слива, черешня",
      en: "<b>fruit & berry plants:</b> grapes, gooseberries, walnut, plum, cherry"
    },
        o = {
      ru: "<b>полевых:</b> люцерна, подсолнечник, рис, сорго, хлопок",
      en: "<b>field crops:</b> alfalfa, sunflower, rice, sorghum, cotton"
    },
        u = {
      ru: "<b>цветов:</b> василек, душистый горошек, календула, незабудка, мак, маттиола, маргаритка, фиалка",
      en: "<b>flowering plants:</b> cornflower, sweet peas, calendula, forget-me-not, poppy, matthiol, daisy, violet"
    },
        l = {
      ru: "<b>комнатных растений:</b> амарант хвостатый, афеландра оттопыренная, гардения жасминовидная, калл, кальцеолярия гибридная, камелия, мимоза стыдливая",
      en: "<b>houseplants:</b> amaranth, aphelandra, jasmine gardenia, calla, calceolaria hybrida, camellia, mimosa shy"
    },
        c = [r, i, s, o, u, l];
    t.a = {
      title: a,
      pluses: c
    };
  };

  var _3y = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>ВЕСЫ</b> – <i>знак средней плодородности</i>",
      en: "<b>LIBRA</b> - <i>average fertility sign</i>"
    },
        r = {
      ru: "<b>посев и посадка следующих овощных культур:</b> арахис, баклажаны, бобовые, дайкон, кабачки, капуста (белокочанная ранняя, брокколи, кольраби, пекинская, савойская, цветная), картофель, лук (батун, порей, репчатый, шнитт), кукуруза, морковь, огурцы, пастернак, патиссоны, перец горький и сладкий, редис, редька, репа, свекла, скорционера, томат, топинамбур,тыква",
      en: "<b>sowing and planting of the listed vegetables:</b> peanuts, aubergines, legumes, daikon, zucchini, cabbage (broccoli, kohlrabi, peking, savoy), potatoes, onions, corn, carrots, cucumbers, parsnips, patissons, pepper (bitter and sweet), radish, turnips, beet, scorzonera, tomato, jerusalem artichoke, pumpkin"
    },
        i = {
      ru: "<b>пряно-зеленыx:</b> артишок, горчица, кориандр, кресс-салат, петрушка, сельдерей, спаржа, укроп, чабер, шпинат, щавель",
      en: "<b>spices & greenery:</b> artichoke, mustard, coriander, watercress, parsley, celery, asparagus, dill, savory, spinach, sorrel"
    },
        s = {
      ru: "<b>плодово-ягодных:</b> абрикос, виноград, вишня, груша, земляника, крыжовник, персик, слива, яблоня",
      en: "<b>fruit & berry plants:</b> apricots, grapes, cherries, pears, strawberries, gooseberries, peaches, plums, apple-trees"
    },
        o = {
      ru: "<b>полевых культур:</b> кукуруза, овес, пшеница, рожь, подсолнечник, чечевица, ячмень",
      en: "<b>field crops:</b> corn, oats, wheat, rye, sunflower, lentils, barley"
    },
        u = {
      ru: "<b>цветов:</b> гвоздика, георгин, гладиолус, дельфиниум, ирис, клематис, маргаритка, настурция, незабудка, пион, примула, фиалка, флокс, хризантема, шалфей",
      en: "<b>flowering plants:</b> carnations, dahlias, gladiolus, delphinium, iris, clematis, daisy, nasturtium, forget-me-not, peony, primula, violet, phlox, chrysanthemum, sage"
    },
        l = {
      ru: "<b>комнатных растений:</b> азалия индийская белая, гелиотроп гибридный, гибискус (китайская роза), гортензия, целозия перистая, цеструм ночной, цинерария (крестовик кровавый), кроссандра волнистолистная, куфея огненно-красная, лилия",
      en: "<b>houseplants:</b> azalea, heliotrope hybrid, hibiscus (Chinese rose), hydrangea, night cestrum, cineraria, lily"
    },
        c = [r, i, s, o, u, l];
    t.a = {
      title: a,
      pluses: c
    };
  };

  var _3z = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>РЫБЫ</b> – <i>плодородный знак Зодиака</i>",
      en: "<b>PISCES</b> – <i>a fertile sig</i>"
    },
        r = {
      ru: "<b>посев и посадка следующих овощных культур:</b> арахис, баклажаны, бахчевые, бобовые, дайкон, кабачки, капуста (белокочанная ранняя, брокколи, брюссельская, кольраби, красная, пекинская, савойская, цветная), картофель, лагенария, мангольд, морковь, огурцы, пастернак, патиссоны, перец (сладкий и горький), помидоры, редис, редька, свекла, тыква",
      en: "<b>sowing and planting of the listed vegetables:</b> peanuts, aubergines, melons, legumes, daikon, zucchini, cabbage, potatoes, lagenaria, chard, carrots, cucumbers, parsnips, squash, pepper (sweet and bitter), tomatoes, radish, beets, pumpkin"
    },
        i = {
      ru: "<b>пряно-зеленыx:</b> артишок, базилик, кресс-салат, петрушка, салат, сельдерей, спаржа, укроп, хрен, цикорий, шпинат",
      en: "<b>spices & greenery:</b> artichoke, basil, watercress, parsley, lettuce, celery, asparagus, dill, horseradish, chicory, spinach"
    },
        s = {
      ru: "<b>плодово-ягодных:</b> виноград, груша, земляника, малина, крыжовник, слива, смородина, шиповник, яблоня",
      en: "<b>fruit & berry plants:</b> grape, pear, strawberry, raspberry, gooseberry, plum, currant, dog rose, apple"
    },
        o = {
      ru: "<b>полевых:</b> кукуруза, люцерна, овес, пшеница, рожь, сорго, подсолнечник, ячмень",
      en: "<b>field crops:</b> corn, alfalfa, oats, wheat, rye, sorghum, sunflower, barley"
    },
        u = {
      ru: "<b>цветов:</b> гвоздика, лилейные, шалфей",
      en: "<b>flowering plants:</b> cloves, lily, sage"
    },
        l = {
      ru: "<b>комнатных растений:</b> аквариумные растения (валлиснерия спиральная, кабомба водная, бовиэя вьющаяся (вьющийся или морской огурец), бриофиллум, будра плющевидная, герани (войлочная, головчатая, курчавая, сильнопахнущая), гипоцирта голая, орхидея, папирус, пальма рыбий хвост, пеллиония Даво, пилея (Кадье, ползучая, монетолистная, мелколистная), плектрантус, рипсалис (пустоплодный, странный), роголистник общий, криптокорина), сидерасис буроватый, толстянка плаунолистная, толмия Мензиса, фикусы ампельные (карликовый, укореняющийся), хелксина Солейроля, циперус раскидистый, элодея канадская",
      en: "<b>houseplants:</b> aquarium plants (vallisneria spiralis, sea cabbage, sea cucumber), bryophyllum, thymes, geraniums, hypocyrta glabra, orchid, papyrus, fishtail palm, pellionia daveauana, pilea, plectranthus, rhipsalis, cryptocorynes, siderasis fuscata, money tree, tolmiea menziesii, ficus"
    },
        c = [r, i, s, o, u, l];
    t.a = {
      title: a,
      pluses: c
    };
  };

  var _3A = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>СТРЕЛЕЦ</b> – <i>знак средней плодородности</i>",
      en: "<b>SAGITTARIUS</b> - <i>average fertility sign</i>"
    },
        r = {
      ru: "<b>посев и посадка следующих овощных культур:</b> бобовые, капуста красная, картофель, лук (батун, латук, порей, репчатый, шнитт), перец сладкий, помидоры, редис, топинамбур, тыква, чеснок",
      en: "<b>sowing and planting of the listed vegetables:</b> legumes, red cabbage, potatoes, onions, sweet peppers, tomatoes, radish, jerusalem artichoke, pumpkin, garlic"
    },
        i = {
      ru: "<b>пряно-зеленыx:</b> фенхель мята, сельдерей, спаржа, хрен, цикорий; газонные травы",
      en: "<b>spices & greenery:</b> fennel, mint, celery, asparagus, horseradish, chicory; lawn grasses"
    },
        s = {
      ru: "<b>плодово-ягодных:</b> виноград, вишня, земляника, лимонник, яблоня",
      en: "<b>fruit & berry plants:</b> grapes, cherries, strawberries, lemongrass, apple"
    },
        o = {
      ru: "<b>полевых культур:</b> сахарная свекла",
      en: "<b>field crops:</b> sugar beet"
    },
        u = {
      ru: "<b>комнатных растений:</b> комнатный виноград, комнатный лимон, кливия, сансевиерия, стрелиция королевская, шефлера лучелистная (дерево-зонтик, дерево-осьминог), тростникововидные (бамбуковые) пальмы, лашеналия алоэвидная, хемантус Катарины, фикус священный, эухарис крупноцветковый, кринум Паула",
      en: "<b>houseplants:</b> indoor grapes and lemon, clivia, sansevieria, strelitzia, bamboo palms, lachenalia aloides, haemanthus, sacred ficus, crinum"
    },
        l = [r, i, s, o, u];
    t.a = {
      title: a,
      pluses: l
    };
  };

  var _3B = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>СКОРПИОН</b> – <i>плодородный знак</i>",
      en: "<b>SCORPIO</b> - <i>a fertile sign</i>"
    },
        r = {
      ru: "<b>посев и посадка следующих овощных культур:</b> арахис, баклажаны, бахчевые, бобовые, дайкон, кабачки, капуста (белокочанная, кольраби, красная, цветная), картофель, лук (батун, латук, порей, шнитт), мангольд, морковь, огурцы, пастернак, патиссоны, перец (сладким и горький), редис, редька, свекла, томат, топинамбур, тыква, чеснок",
      en: "<b>sowing and planting of the listed vegetables:</b> peanuts, aubergines, melons, legumes, daikon, zucchini, cabbage, potatoes, onions, chard, carrots, cucumbers, parsnips, squash, pepper (sweet and bitter), radish, beet, tomato, jerusalem artichoke, pumpkin, garlic"
    },
        i = {
      ru: "<b>пряно-зеленыx:</b> артишок, базилик, горчица, кориандр, кресс-салат, мята, петрушка, сельдерей, укроп, хрен, цикорий, шпинат",
      en: "<b>spices & greenery:</b> artichoke, basil, mustard, coriander, watercress, mint, parsley, celery, dill, horseradish, chicory, spinach"
    },
        s = {
      ru: "<b>плодово-ягодных:</b> абрикос, виноград, вишня, груша, земляника, малина, крыжовник, персик, слива, смородина, яблоня",
      en: "<b>fruit & berry plants:</b> apricots, grapes, cherries, pears, strawberries, raspberries, gooseberries, peaches, plums, currants, apple-trees"
    },
        o = {
      ru: "<b>полевых культур:</b> кукуруза, люцерна, овес, пшеница, рожь, сорго, подсолнечник, ячмень",
      en: "<b>field crops:</b> corn, alfalfa, oats, wheat, rye, sorghum, sunflower, barley"
    },
        u = {
      ru: "<b>цветов:</b> георгин, гладиолус, гиацинт, ирис, крокусы, лилейные",
      en: "<b>flowering plants:</b> dahlia, gladiolus, hyacinth, iris, crocus, lily"
    },
        l = {
      ru: "<b>комнатных растений:</b> алоэ колпачковидное, апорокактус плетевидный, гинурахамецериус Сильвестра, горноколосник колючий, драконово дерево, дурман белоснежный, кактусы пустынные, опунция Бергера, стапелия пёстрая, олеандр, Фаукария, цереус перуанский, эхинокактус Грусона",
      en: "<b>houseplants:</b> aloe, aporocactus, dragon tree, desert cacti, stapelia variegata, oleander, faucaria, peruvian cereus, echinocactus grusonii"
    },
        c = [r, i, s, o, u, l];
    t.a = {
      title: a,
      pluses: c
    };
  };

  var _3C = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>ТЕЛЕЦ</b> – <i>знак средней плодородности</i>",
      en: "<b>TAURUS</b> - <i>average fertility sign</i>"
    },
        r = {
      ru: "<b>посев и посадка следующих овощных культур:</b> арахис, бахчевые, бобовые, дайкон, капуста (белокочанная, брокколи, кольраби, красная, цветная), кабачки, картофель, лагенария, лук (батун, порей, репчатый, шнитт), мангольд, морковь, огурцы, перец (сладкий и горький), редис, редька, свекла, томат, топинамбур, тыква, репа",
      en: "<b>sowing and planting of the listed vegetables:</b> peanuts, melons, legumes, daikon, cabbage, zucchini, potatoes, lagenaria, onions, chard, carrot, cucumber, pepper (sweet and bitter), radish, beet, tomato, Jerusalem artichoke, pumpkin, turnip"
    },
        i = {
      ru: "<b>пряно-зеленыx:</b> артишок, валериана, капуста, кориандр, кресс-салат, петрушка, салат, сельдерей, спаржа, укроп, фенхель, цикорий, шпинат, щавель",
      en: "<b>spices & greenery:</b> artichoke, valerian, coriander, watercress, parsley, lettuce, celery, asparagus, dill, fennel, chicory, spinach, sorrel"
    },
        s = {
      ru: "<b>плодово-ягодных:</b> вишня, груша, земляника, облепиха, слива, черешня, шиповник, яблоня",
      en: "<b>fruit & berry plants:</b> cherry, pear, strawberry, sea-buckthorn, plum, cherry, dog rose, apple-tree"
    },
        o = {
      ru: "<b>полевых:</b> кукуруза, подсолнечник",
      en: "<b>field crops:</b> corn, sunflower"
    },
        u = {
      ru: "<b>цветов:</b> бархатцы, георгин, гиацинт, гладиолус, душистый горошек, ирис, крокус, лилейные, настурция, нарцисс, тюльпан, шалфей",
      en: "<b>flowering plants:</b> marigolds, dahlias, hyacinth, gladiolus, sweet peas, iris, crocus, lily, nasturtium, narcissus, tulip, sage"
    },
        l = {
      ru: "<b>комнатных растений:</b> бегонии декоративно-цветущие (клубневая, многоцветковая, зимоцветная), каланхоэ Блосфельда и Мангина, фиалка узамбарская, цикламен персидский, ампельные пеперомии (лазящая, крупнолистная, стелющаяся), первоцвет (примула) — мягковатый, обратноконический, китайский, синнингия",
      en: "<b>houseplants:</b> begonia (tuberous, winter), kalanchoe (blossfeldiana and manginii), usambara violet, cyclamen persicum, peperomia, primrose, synangia"
    },
        c = [r, i, s, o, u, l];
    t.a = {
      title: a,
      pluses: c
    };
  };

  var _3D = function (e, t, n) {
    "use strict";

    var a = {
      ru: "<b>ДЕВА</b> – <i>бесплодный знак</i>",
      en: "<b>VIRGO</b> - <i>a barren sign</i>"
    },
        r = {
      ru: "<b>посев и посадка лиан, вьющихся, растений с воздушными корнями</b>",
      en: "<b>sowing and planting of the lians, climbing plants with air roots</b>"
    },
        i = {
      ru: "<b>пряно-зеленыx:</b> анис, артишок, валериана, петрушка, укроп",
      en: "<b>spices & greenery:</b> anise, artichoke, valerian, parsley, dill"
    },
        s = {
      ru: "<b>плодово-ягодных:</b> виноград, крыжовник",
      en: "<b>fruit & berry plants:</b> grapes, gooseberries"
    },
        o = {
      ru: "<b>овощных:</b> огурцы, перец горький",
      en: "<b>vegetables:</b> cucumbers, bitter pepper"
    },
        u = {
      ru: "<b>цветов:</b> астра, бархатцы, василек, георгин, гвоздика, гладиолус, дельфиниум, душистый горошек, ирис, календула, крокусы, лилейные, мак, маргаритка, маттиола, незабудка, пион, примула, флокс, цинния, шалфей",
      en: "<b>flowering plants:</b> aster, marigold, cornflower, dahlia, carnation, gladiolus, delphinium, sweet peas, iris, calendula, crocuses, lily, poppy, daisy, mattiola, forget-me-not, peony, primrose, phlox, zinnia, sage"
    },
        l = {
      ru: "<b>комнатных растений:</b> аукуба, драцена, монстера делициоза, роициссус ромбический, сциндапсус, фатсия японская, филодендрон (гитаровидный, лазящий), циссус (антарктический, полосатый, разноцветный)",
      en: "<b>houseplants:</b> aukuba, dracaena, monstera deliciosa, rhoicissus rhombifolia, scindapsus, japanese fatsia, philodendron, cissus"
    },
        c = [r, i, s, o, u, l];
    t.a = {
      title: a,
      pluses: c
    };
  };

  var _3E = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(258);
    t.default = a.a;
  };

  var _3F = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(262);
    t.default = a.a;
  };

  var _3G = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(263);
    t.default = a.a;
  };

  var _3H = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(266);
    t.default = a.a;
  };

  var _3I = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(294);
    t.default = a.a;
  };

  var _3J = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(265);
    t.default = a.a;
  };

  var _3K = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = {
      props: {
        mdTitle: _$1.String,
        mdOkText: {
          type: _$1.String,
          default: "Ok"
        }
      },
      data: function () {
        return {
          debounce: !1
        };
      },
      methods: {
        fireCloseEvent: function () {
          this.debounce || this.$emit("close");
        },
        open: function () {
          this.$emit("open"), this.debounce = !1, this.$refs.dialog.open();
        },
        close: function () {
          this.fireCloseEvent(), this.debounce = !0, this.$refs.dialog.close();
        }
      }
    };
  };

  var _3L = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(267);
    t.default = a.a;
  };

  var _3M = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(268);
    t.default = a.a;
  };

  var _3N = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = {
      data: function () {
        return {
          state: "normal",
          debounce: !1,
          showResetTooltip: !1,
          notFoundMail: !1,
          isLoginError: !1,
          isResetDone: !1,
          user: {
            email: null,
            password: null
          }
        };
      },
      computed: {
        isEmailInvalid: function () {
          return !1;
        },
        isPasswordInvalid: function () {
          return null !== this.user.password && this.user.password.length < 8;
        },
        isReadyForSubmit: function () {
          return this.user.email && this.user.password && !this.isEmailInvalid && !this.isPasswordInvalid;
        },
        isNormal: function () {
          return "normal" === this.state;
        },
        isReset: function () {
          return "reset" === this.state;
        },
        constants: function () {
          return this.$store.getters.constants;
        }
      },
      methods: {
        resetPasswordState: function () {
          this.state = "reset";
        },
        fireCloseEvent: function () {
          this.state = "normal", this.showResetTooltip = !1, this.notFoundMail = !1, this.debounce || this.$emit("close");
        },
        open: function () {
          this.$emit("open"), this.debounce = !1, this.$refs.dialog.open();
        },
        close: function () {
          this.fireCloseEvent(), this.debounce = !0, this.$refs.dialog.close();
        },
        reset: function () {
          var e = this;
          this.$store.dispatch("resetPassword", this.user.email).then(function (t) {
            e.showResetTooltip = !0, e.notFoundMail = !1, e.isResetDone = !0;
          }).catch(function (t) {
            404 === t.response.status && (e.notFoundMail = !0, e.isResetDone = !1);
          });
        },
        goToPromo: function () {
          this.close(), this.$router.push({
            name: "promo-page"
          });
        },
        submit: function () {
          var e = this;
          _$1.console.warn(this.user), this.$store.dispatch("login", e.user).then(function (t) {
            e.isLoginError = !1, e.close(), e.$router.push({
              name: "default"
            }), _$1.location.reload();
          }).catch(function (t) {
            _$1.console.log(t), e.isLoginError = !0;
          });
        }
      }
    };
  };

  var _3O = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(269);
    t.default = a.a;
  };

  var _3P = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = {
      props: {
        title: _$1.String
      },
      data: function () {
        return {};
      }
    };
  };

  var _3Q = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(273);
    t.default = a.a;
  };

  var _3R = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(278);
    t.default = a.a;
  };

  var _3S = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(270);
    t.default = a.a;
  };

  var _3T = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(271);
    t.default = a.a;
  };

  var _3U = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(274);
    t.default = a.a;
  };

  var _3V = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(275);
    t.default = a.a;
  };

  var _3W = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(277);
    t.default = a.a;
  };

  var _3X = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(280);
    t.default = a.a;
  };

  var _3Y = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(281);
    t.default = a.a;
  };

  var _3Z = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(283);
    t.default = a.a;
  };

  var _40 = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(286);
    t.default = a.a;
  };

  var _41 = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(1),
        r = n.n(a),
        i = n(2);
    t.default = {
      name: "promo-calc",
      data: function () {
        return {};
      },
      computed: r()({}, n.i(i.b)(["constants", "locale", "productInfo"]), {
        isUSD: function () {
          return this.productInfo && "USD" === this.productInfo.currency;
        },
        isBookShowed: function () {
          return "ru" === this.locale;
        }
      }),
      methods: {
        goToRegistration: function () {
          this.$router.push({
            name: "registration"
          });
        }
      }
    };
  };

  var _42 = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(1),
        r = n.n(a),
        i = n(2);
    t.default = {
      name: "promo-blur-block",
      computed: r()({}, n.i(i.b)(["constants"]))
    };
  };

  var _43 = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(288);
    t.default = a.a;
  };

  var _44 = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(290);
    t.default = a.a;
  };

  var _45 = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(1),
        r = n.n(a),
        i = n(45),
        s = n(2);
    t.default = {
      name: "promo-biorhythms",
      components: {
        PromoActivateBtn: i.a
      },
      data: function () {
        return {
          promoText: {
            ru: 'Функция "Мои биоритмы" доступна только в Персональном Лунном Календаре',
            en: '"My biorhythms" option is available only in the Personal Lunar Calendar'
          },
          promoTitle: {
            ru: "Отслеживайте свое состояние в режиме реального времени - графики Ваших физического, эмоционального и интеллектуального ритмов всегда под рукой!",
            en: "Track your condition real-time with the graphs of your physical, emotional and intellectual rhythms!"
          }
        };
      },
      computed: r()({}, n.i(s.b)(["constants"]), {
        text: function () {
          return this.promoText[this.$store.state.locale];
        },
        title: function () {
          return this.promoTitle[this.$store.state.locale];
        },
        screenUrl: function () {
          return n(762)("./biorhythms-1-" + this.$store.state.locale + ".jpg");
        }
      }),
      methods: {
        goToPromoAbout: function () {
          this.$router.push({
            name: "promo-page"
          });
        }
      }
    };
  };

  var _46 = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(1),
        r = n.n(a),
        i = n(45),
        s = n(2);
    t.default = {
      name: "promo-calc",
      components: {
        PromoActivateBtn: i.a
      },
      data: function () {
        return {
          promoText: {
            ru: 'Функция "Калькулятор лунных дней" доступна только в Персональном Лунном Календаре',
            en: '"Lunar days calculator" option is available only in the Personal Lunar Calendar'
          }
        };
      },
      computed: r()({}, n.i(s.b)(["constants"]), {
        text: function () {
          return this.promoText[this.$store.state.locale];
        }
      }),
      methods: {
        goToPromoAbout: function () {
          this.$router.push({
            name: "promo-page"
          });
        }
      }
    };
  };

  var _47 = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(1),
        r = n.n(a),
        i = n(45),
        s = n(2);
    t.default = {
      name: "promo-todo",
      components: {
        PromoActivateBtn: i.a
      },
      data: function () {
        return {
          promoText: {
            ru: 'Функция "Мой список дел" доступна только в Персональном Лунном Календаре',
            en: '"My to-do list" option is available only in the Personal Lunar Calendar'
          }
        };
      },
      computed: r()({}, n.i(s.b)(["constants"]), {
        text: function () {
          return this.promoText[this.$store.state.locale];
        }
      }),
      methods: {
        goToPromoAbout: function () {
          this.$router.push({
            name: "promo-page"
          });
        }
      }
    };
  };

  var _48 = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(293);
    t.default = a.a;
  };

  var _49 = function (e, t, n) {
    "use strict";

    _$1.Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = n(296);
    t.default = a.a;
  };

  var _4a = function (e, t, n) {
    "use strict";

    var a = n(623),
        r = n.n(a),
        i = n(27),
        s = n.n(i),
        o = n(622),
        u = n.n(o),
        l = n(164),
        c = n.n(l),
        d = n(442),
        h = n.i(d.a)(),
        p = {
      packages: {
        type: _$1.Array,
        default: function () {
          return ["corechart"];
        }
      },
      version: {
        default: "current"
      },
      mapsApiKey: {
        default: !1
      },
      chartType: {
        type: _$1.String,
        default: function () {
          return "LineChart";
        }
      },
      chartEvents: {
        type: _$1.Object,
        default: function () {
          return {};
        }
      },
      columns: {
        required: !0,
        type: _$1.Array
      },
      rows: {
        type: _$1.Array,
        default: function () {
          return [];
        }
      },
      options: {
        type: _$1.Object,
        default: function () {
          return {
            chart: {
              title: "Chart Title",
              subtitle: "Subtitle"
            },
            hAxis: {
              title: "X Label"
            },
            vAxis: {
              title: "Y Label"
            },
            width: "400px",
            height: "300px",
            animation: {
              duration: 500,
              easing: "out"
            }
          };
        }
      }
    };
    t.a = {
      name: "vue-chart",
      props: p,
      render: function (e) {
        return e("div", {
          class: "vue-chart-container"
        }, [e("div", {
          attrs: {
            id: this.chartId,
            class: "vue-chart"
          }
        })]);
      },
      data: function () {
        return {
          chart: null,
          chartId: "X" + this._uid,
          wrapper: null,
          dataTable: [],
          hiddenColumns: []
        };
      },
      events: {
        redrawChart: function () {
          this.drawChart();
        }
      },
      mounted: function () {
        var e = this;
        n.i(d.b)(e.packages, e.version, e.mapsApiKey).then(e.drawChart).then(function () {
          var t = p;
          delete t.bounds, n.i(d.c)(e, t), n.i(d.d)(e, e.chart, e.chartEvents);
        }).catch(function (e) {
          throw e;
        });
      },
      methods: {
        buildDataTable: function () {
          var e = this,
              t = new _$1.google.visualization.DataTable();
          return c()(e.columns, function (e) {
            t.addColumn(e);
          }), u()(e.rows) || t.addRows(e.rows), t;
        },
        updateDataTable: function () {
          var e = this;
          e.dataTable.removeRows(0, e.dataTable.getNumberOfRows()), e.dataTable.removeColumns(0, e.dataTable.getNumberOfColumns()), c()(e.columns, function (t) {
            e.dataTable.addColumn(t);
          }), u()(e.rows) || e.dataTable.addRows(e.rows);
        },
        buildWrapper: function (e, t, n, a) {
          return new _$1.google.visualization.ChartWrapper({
            chartType: e,
            dataTable: t,
            options: n,
            containerId: a
          });
        },
        buildChart: function () {
          var e = this,
              t = u()(e.dataTable) ? e.buildDataTable() : e.dataTable;
          e.wrapper = e.buildWrapper(e.chartType, t, e.options, e.chartId), e.dataTable = e.wrapper.getDataTable(), _$1.google.visualization.events.addOneTimeListener(e.wrapper, "ready", function () {
            e.chart = e.wrapper.getChart(), h.resolve();
          });
        },
        drawChart: function () {
          var e = this;
          if ((u()(e.rows) || s()(e.rows)) && !u()(e.columns)) return r()(e.chart) ? e.buildChart() : e.updateDataTable(), e.wrapper.draw(), h.promise;
        }
      }
    };
  };

  var _4b = function (e, t, n) {
    "use strict";

    function a(e, t, n) {
      for (var a in n) {
        var r = a,
            i = n[a];
        "ready" === r ? i() : _$1.google.visualization.events.addListener(t, r, i);
      }
    }

    t.a = a;
  };

  var _4c = function (e, t, n) {
    "use strict";

    function a() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["corechart"],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "current",
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!_$1.Array.isArray(e)) throw new _$1.TypeError("packages must be an array");
      if ("current" !== t && "number" != typeof t && "upcoming" !== t) throw new _$1.TypeError('version must be a number, "upcoming" or "current"');
      if (i || s) return o.promise;
      i = !0;

      var a = _$1.document.createElement("script");

      return a.setAttribute("src", "https://www.gstatic.com/charts/loader.js"), a.onreadystatechange = a.onload = function () {
        var a = {
          packages: e
        };
        n && (a.mapsApiKey = n), _$1.google.charts.load(t, a), _$1.google.charts.setOnLoadCallback(function () {
          i = !1, s = !0, o.resolve();
        });
      }, _$1.document.getElementsByTagName("head")[0].appendChild(a), o.promise;
    }

    t.a = a;
    var r = n(124),
        i = !1,
        s = !1,
        o = n.i(r.b)();
  };

  var _4d = function (e, t, n) {
    "use strict";

    var a = n(440);
    n.d(t, "d", function () {
      return a.a;
    });
    var r = n(441);
    n.d(t, "b", function () {
      return r.a;
    });
    var i = n(124);
    n.d(t, "a", function () {
      return i.a;
    });
    var s = n(443);
    n.d(t, "c", function () {
      return s.a;
    });
  };

  var _4e = function (e, t, n) {
    "use strict";

    function a(e, t) {
      o()(t, function (t, n) {
        var a = t.type;
        e.$watch(n, function () {
          e.drawChart();
        }, {
          deep: i()(a)
        });
      });
    }

    t.a = a;
    var r = n(26),
        i = n.n(r),
        s = n(164),
        o = n.n(s);
  };

  var _4f = function (e, t) {};

  var _4g = function (e, t) {};

  var _4h = function (e, t) {};

  var _4i = function (e, t) {};

  var _4j = function (e, t) {};

  var _4k = function (e, t) {};

  var _4l = function (e, t) {};

  var _4m = function (e, t) {};

  var _4n = function (e, t) {};

  var _4o = function (e, t) {};

  var _4p = function (e, t) {};

  var _4q = function (e, t) {};

  var _4r = function (e, t) {};

  var _4s = function (e, t) {};

  var _4t = function (e, t) {};

  var _4u = function (e, t) {};

  var _4v = function (e, t) {};

  var _4w = function (e, t) {};

  var _4x = function (e, t) {};

  var _4y = function (e, t) {};

  var _4z = function (e, t) {};

  var _4A = function (e, t) {};

  var _4B = function (e, t) {};

  var _4C = function (e, t) {};

  var _4D = function (e, t) {};

  var _4E = function (e, t) {};

  var _4F = function (e, t) {};

  var _4G = function (e, t) {};

  var _4H = function (e, t) {};

  var _4I = function (e, t) {};

  var _4J = function (e, t) {};

  var _4K = function (e, t, n) {
    function a(e) {
      return n(r(e));
    }

    function r(e) {
      var t = i[e];
      if (!(t + 1)) throw new _$1.Error("Cannot find module '" + e + "'.");
      return t;
    }

    var i = {
      "./en-au": 167,
      "./en-au.js": 167,
      "./en-ca": 168,
      "./en-ca.js": 168,
      "./en-gb": 169,
      "./en-gb.js": 169,
      "./en-ie": 170,
      "./en-ie.js": 170,
      "./en-nz": 171,
      "./en-nz.js": 171,
      "./ru": 102,
      "./ru.js": 102
    };
    a.keys = function () {
      return _$1.Object.keys(i);
    }, a.resolve = r, e.exports = a, a.id = 636;
  };

  var _4L = function (e, t, n) {
    e.exports = n.p + "static/img/avatar.0562c8dca22c95bd20f1917570186ae1.png";
  };

  var _4M = function (e, t, n) {
    e.exports = n.p + "static/img/calc.2cb811881f629ed16495b62a1e39b726.png";
  };

  var _4N = function (e, t, n) {
    e.exports = n.p + "static/img/beauty.bd89a40d0aaf4d3739d1c9855fdb32fb.png";
  };

  var _4O = function (e, t, n) {
    e.exports = n.p + "static/img/business.1f87c59f635066d3ebab96f7a1640dc6.png";
  };

  var _4P = function (e, t, n) {
    e.exports = n.p + "static/img/default1.59c72c9e4212ca53d45d4657c8c39114.png";
  };

  var _4Q = function (e, t, n) {
    e.exports = n.p + "static/img/fishing.7b23c9082ff84c9de6e8ef7e96f2e12a.png";
  };

  var _4R = function (e, t, n) {
    e.exports = n.p + "static/img/garden.c883993f57cc74945a6fb2a3c078540b.png";
  };

  var _4S = function (e, t, n) {
    e.exports = n.p + "static/img/health.cd25d7a98c02ae3cfc35525a585c3b0c.png";
  };

  var _4T = function (e, t, n) {
    e.exports = n.p + "static/img/house.fabe98ab8682f857d1bb5b968e8afb55.png";
  };

  var _4U = function (e, t, n) {
    e.exports = n.p + "static/img/lucky.ac8cd984d54a5e26ecd0a21c16757000.png";
  };

  var _4V = function (e, t, n) {
    e.exports = n.p + "static/img/relationship.2f164e64e51607f4a2bbfc93ebc22ac7.png";
  };

  var _4W = function (e, t, n) {
    e.exports = n.p + "static/img/shopping.8f98141e2b60256338b0497d6acdef03.png";
  };

  var _4X = function (e, t) {
    e.exports = "data:image/png;base64,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";
  };

  var _4Y = function (e, t, n) {
    e.exports = n.p + "static/img/gift.306fa0d846f38dcf9de03b58c93ea34f.png";
  };

  var _4Z = function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC2VBMVEUAAADh4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/Ph4/MAAADeCmK+AAAA8XRSTlMACBsuQVRoe46hrLO5wMfN1Nvh6O/1/AMfQGGCo7vP4hY3WHma3foLZZLtAiRSgK7+GY/eQn248AEy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";
  };

  var _50 = function (e, t, n) {
    e.exports = n.p + "static/img/first_quarter.e53b60dca6ed27066a8d73bb37213fc1.png";
  };

  var _51 = function (e, t, n) {
    e.exports = n.p + "static/img/full_moon.cb7df118e8d15e988a8eb4a53d82eac6.png";
  };

  var _52 = function (e, t, n) {
    e.exports = n.p + "static/img/last_quarter.78333ff8ea51d2db31fe4d8bff61609d.png";
  };

  var _53 = function (e, t, n) {
    e.exports = n.p + "static/img/new_moon.790410f9644d2c1cface08168e015309.png";
  };

  var _54 = function (e, t, n) {
    e.exports = n.p + "static/img/waning_crescent.10d827442baec9d886ad61c7dc8e67b7.png";
  };

  var _55 = function (e, t, n) {
    e.exports = n.p + "static/img/waning_gibbous.8c13861a7629f85e5fb9acd8a32acb5f.png";
  };

  var _56 = function (e, t, n) {
    e.exports = n.p + "static/img/waxing_crescent.96efccef0fc3fbb1c4ab1acc480800bc.png";
  };

  var _57 = function (e, t, n) {
    e.exports = n.p + "static/img/waxing_gibbous.4e44d1338ac422265016629c63722d24.png";
  };

  var _58 = function (e, t, n) {
    e.exports = n.p + "static/img/newborn.aeac6ad1ab8b97e43e610cb9357b93b3.png";
  };

  var _59 = function (e, t, n) {
    e.exports = n.p + "static/img/notepad.8eb030749fb3fcd4389f4ae12417fe6f.png";
  };

  var _5a = function (e, t, n) {
    e.exports = n.p + "static/img/pen-container.495a81545e040c3693001cca068a4224.png";
  };

  var _5b = function (e, t, n) {
    e.exports = n.p + "static/img/jupiter.9ca8c9a1b8be701c591b1f61784e07da.png";
  };

  var _5c = function (e, t, n) {
    e.exports = n.p + "static/img/mars.40cd6fccdb5b7af64bb23a641300a8cb.png";
  };

  var _5d = function (e, t, n) {
    e.exports = n.p + "static/img/mercury.68c1c3c417d3f3ae3d1e547400c05faa.png";
  };

  var _5e = function (e, t, n) {
    e.exports = n.p + "static/img/moon.f587df6fcef48c2d49aee8ff5646a935.png";
  };

  var _5f = function (e, t, n) {
    e.exports = n.p + "static/img/saturn.b2dfb3c2b1b630a0e86f22b503e2b929.png";
  };

  var _5g = function (e, t, n) {
    e.exports = n.p + "static/img/sun.3c9f32dc3e3875b4de5e74ea8f55f749.png";
  };

  var _5h = function (e, t, n) {
    e.exports = n.p + "static/img/venus.7bcfe6bbd37d3d48bd3c7c0e1bfec738.png";
  };

  var _5i = function (e, t, n) {
    e.exports = n.p + "static/img/calendar.ce2591e50c479e3e919e66b8239abb64.png";
  };

  var _5j = function (e, t, n) {
    e.exports = n.p + "static/img/clipboard.90039e0fd32e2e72af74f7245ed3138f.png";
  };

  var _5k = function (e, t, n) {
    e.exports = n.p + "static/img/line-chart.84db5fdaea133603576196c73169c7a1.png";
  };

  var _5l = function (e, t, n) {
    e.exports = n.p + "static/img/newborn.aeac6ad1ab8b97e43e610cb9357b93b3.png";
  };

  var _5m = function (e, t, n) {
    e.exports = n.p + "static/img/sprout.9e6fddd3b6504a890c7718621eea4594.png";
  };

  var _5n = function (e, t, n) {
    e.exports = n.p + "static/img/biorhythms-1-en.35b88f008862c70a1a5bb6f064c54a65.jpg";
  };

  var _5o = function (e, t, n) {
    e.exports = n.p + "static/img/biorhythms-1-ru.de1d050400c796aba947b0f75b110b30.jpg";
  };

  var _5p = function (e, t, n) {
    e.exports = n.p + "static/img/sprout.9e6fddd3b6504a890c7718621eea4594.png";
  };

  var _5q = function (e, t, n) {
    e.exports = n.p + "static/img/star.867b7833e65645609b8760c56aa7ed7a.png";
  };

  var _5r = function (e, t, n) {
    e.exports = n.p + "static/img/tasks.90039e0fd32e2e72af74f7245ed3138f.png";
  };

  var _5s = function (e, t, n) {
    e.exports = n.p + "static/img/wand.9b507f243f48dace08124f2d578f2394.png";
  };

  var _5t = function (e, t, n) {
    e.exports = n.p + "static/img/aquarius.3d1df477f75ff09f2d4118a862cb2405.png";
  };

  var _5u = function (e, t, n) {
    e.exports = n.p + "static/img/aries.3a077308158cc29e15276c6a598c4ef2.png";
  };

  var _5v = function (e, t, n) {
    e.exports = n.p + "static/img/cancer.ad468a4c65f976ccb4f6210db7b780cf.png";
  };

  var _5w = function (e, t, n) {
    e.exports = n.p + "static/img/capricorn.2d2322f7d40705d7b1c130e34a814b04.png";
  };

  var _5x = function (e, t, n) {
    e.exports = n.p + "static/img/gemini.a1579641f4b6b3d771f08039b1ed5043.png";
  };

  var _5y = function (e, t, n) {
    e.exports = n.p + "static/img/leo.c3dfa9daf90764116a82222bf984580d.png";
  };

  var _5z = function (e, t, n) {
    e.exports = n.p + "static/img/libra.3e576806cda6fcad0e13d57113f347ca.png";
  };

  var _5A = function (e, t, n) {
    e.exports = n.p + "static/img/pisces.6db5226b56f16e21da46017394622e37.png";
  };

  var _5B = function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAH6MAAB+jAH2GftsAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAs1QTFRF////5kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85kw85k095k4+5k8/5lBA5lBB5lFC5lJD5lNE5lRE5lRF5lVG5ldI51lL51xO52BS52FT52FU52NW52RW52VY52ZY52da52hb521g6HJm6HNn6HRo6HVp6HZq6Hlu6Htw6H1x6H5z6IF26IV66Yd96ZKJ6ZOK6ZSL6ZWM6ZaN6ZeO6ZmR6ZqR6qGa6qWe6qaf6qeg6qih6qmj6qqj6quk6rCq6rGr6rKs67ex67y467+668C768C868TA68XB68jE68jF68nF7MzI7NDN7NHO7NLP7NbT7NfV7NjV7NjW7N3b7N3c7ODe7eXk7ebl7efm7efn7ejn7eno7enp7erq7ezs7e3tQRXQVwAAAJh0Uk5TAAECAwQFBggJCgsMDQ4PEBMUFxgcHiAhIyUnKS8wMjM1ODs8PkBBQkRFR0hOT1BSU1RVV1lbXV5fYGFkaGptb3BxdHZ3e3x+gIGChIWGiImLjpaXmJqbnZ+hoqWmp6qsra6vsrO4ubq9vr/AwsbHyMnLzM3O0NPU1tja29zd3t/g4ePl5ufo6evt7u/x8/X29/j5+vv8/f7KsSkKAAAW6ElEQVR42u2d+V/V2X2HP17wgiAigoKKKyIuuIDKIi64DaLiuC8oAooo7qgoLlHZRBYvoCyHtE2bzLSZdKZmuk8yiU0mnZmmSybpMu10SdtJJ22nkb+hP6jIzl3O96zv56f5ided8zzC/X7PRmQNoTHxSalrtuw+XFhSevbCleu3qu43eTo6PE33q25dv3LhbGlJ4eHdW9akJsXHhBIwBXfcgqwdR05XVLcwH2iprjh9ZEfWgjg3RlBTXFMSV+fmn6vuZAHRWX0uP3d14hQXRlQfopLWHyxvYVxpKT+4PikKY6v67/v4tF0na5lj1J7clRaPvwpqEpe+/1o7E0D7tf3pcRhvlQienV1Yx4RSV5g9OxgjrwARi7aVeZgUPGXbFkXAgMxv+nNyL3UyqXReyp2DJwQpRGcUNDAlaCjIiIYPsX/05+Vd7WIK0XU1bx6+EghiQkZRM1OQ5qKMCbDjNONXnXjElOXRiVXj4cg5wlYUtzLFaS1eEQZTThC6/JiHaYHn2HJMJ/J+4Ft89CHTiIdHF+PhkB8xOVVMO6pyYmCOB0HJJR1MSzpKkoPgL0Bit9cwjanZHguH/jM25VQX05yuUyljYdIvonLqmRHU52Alie9M3dvCjKFl71QY9YmE453MKDqPJ8Cq19/7Uy4yA7mYgmcCr973rvsKM5Q76/CWeDQichqZwTTmYAnRiP/6Nzcww2nYjN8CwxGyoZ5ZQP2GELgeAvfaGmYJNWuxt2AgwVlVzCKqsrCArC+utNvMMm6nYb64l8QKZiEViTD/fMKviFlKEaYKicLz2pi1tOWFW65/TGYds5q6zDE2+59bzqynfK61+icXQD9jjBVMtnPOb6MH7p/j2WjhPOGMyxD/isszbHvtv7Md1vvSvtOqCYLEm1A+kJv2vBeKPNAF34PpOhBph/9ltZA9NLXLLNAfXQzRw1Ns/FEjyQ9geSQeJButf9w+KB6NfePM9T/zBvyOzo2Zpq762PQYdr3h8SYj14rElEGtt5QZeLRAaiO8ek9jqmnLPg5Bqm8cMmqpyLRKGPWVymnm+F/aDJ++07zUlG//eXj179/kQJ4RTwMTS6HSX0onGvDy5x48+s897V8KZbbCYiC0Zmqt370HCgNlj8YbSSedh7/AOT9JV//T78IeD+5O19P//Ca440PTfB39p2PujxuP0/XzvxXaeLJVt6//+XDGl3ytHgYiz8AYb85otGg8thK++FOpzXESs+phywnqZ+nhPwGTvw7RrMWB0wux69sxPAvV97+kDZ6co22J6v5XYtu3o7SvVNt/ViccOUtnlsr+s7H4y3G6stX1/xr0iOA1Vf2/DjdieB3+UQB+/+OvgGLf/2BFJMp9E8zC93+xzwKKPQ2uxPO/6PcBSr0RWoL3f+LfCSr0Vngh3v9LoE2ZmaEEzP9JwaPI7PAszP9LolmJFSKxWP8jjXoFVolFVsKDPCqlrxR1Y/2vVM7IXi2O9f+Sycf+H8uRumcoHeMvH4n7Budj/6cCPJa2d3g69n8rQZOk8wMm4fwHRbgr5QwRN85/UYbzMh4Gcf6TQuwR7z8To64Swk+Tm4nz/5SiVfCJkhNx/qdi3BN6qqwL5/8qR6nIk6XzMN7qkSfO/1IsAVaQLmH3C0zDEiAlaRZ0x0h4JcZaTSrF3DN0CCOtKodE+E/FOKuLgNvmYnD/n8I0On7jpAv3fypNmdNvAzZhjNVmk8NTAFgDpDiPHZ0UGIf735XnxjgHA9iH8VWffc75T8bo6kCyU/6jH2BwdeBBtEMBFGNs9aDYGf/LMLK6sMyRbcC1GFhdqHVi0/ABjKs+HODvPxGLQDSiK5G3/5CbFg9n91vvOMW77778r1/n+pFvhnAOYKe19p989OkXPQJ4h+/H3snX/wxbDwLs/uDLHjFwDqB9Bk//QZct9f/GZz09egbALgdxDGCjrb//f9KjbQBsIz//k209CfK9Ho0D8EzmFkCBrV8APtc5AFbAy/9cW/8AvN2jdQBsLh//Y8ptDeB9zQMoH4OTAALiY5EBvOvA/wCXUwPC6xCArgHU8dgqZPFOYN3/BHDZMRxr8WUQb2sfQFvgx4kX2etf98dAxhgrCngWmNnMe9oHwAKcF3ZVWB2A1q+Cn1MR2F6xNLv96zwZ9JK0QPwH37Y8AH2ng3u5HRxAAFkMaLog5BUB3DHqroJ/xjgtCftQVgBV/h8kvBbuufFU2m8AttbvhaA18CbMv4MB1Pi7QHQDvInz72AAbIN//sNwI6RA/04GUB/mVwCbIU6gfycDYJv98R/RAHMC/TsaQEOEHwHkwJxI/44GwHL8+AaA8wCF+nc2gEbfvwWsgzqh/p0NgK3zeS/QHbgT6t/hAO74uk8oBe7E+nc4AJbiYwAXIU+sf6cDuOib/wTIc9T/h8IDYAk+BXAc9pz0//Qd8QEc98X/1E7oc9I/kxBA51QfAtgLfY76lxEA2+u9/6gW+HPUv5QAWqLwFlgV/1IC8P598FjMAzvsX04A9WPxEkgR/3IC8Ppl0CkYdNi/pABOebkdFGeCOu1fUgBd3m0V3Q6FTvuXFADb7tU8INYCO+5fVgA13swJ4l4Y5/3LCsCr22RKINFx/9ICKPHiatgOWHTcv7QAOmLwFlAF/9ICGP1toAv7QQX4lxdA1WjnRSyGRgH+5QXAFo8SwFF4FOBfYgBHR/Yf+hAiBfiXGMDD0BEDWA6RIvxLDIAtHzGAYzApwr/MAI6NuB/MA5Ui/MsMwDPSLrEVUCnEv8wA2ApcDy3dv9QARrhaenwrZArxLzWA1vHDBrAKMsX4lxoAWzVsACdgU4x/uQGcGM7/hEfQKca/3AAeTRgmgAzoFORfbgAsA3dDSPYvOYBhbpEIboZQQf4lB9A89AHi8yBUlH/JAbB5uB5Mrn/ZAQx9mdhVKBXlX3YAV4fyH40NQcL8yw6gKxoPgVL9yw5gyAfBAkgV5l96AEPcLO/C2dDi/EsPoGHw4uA5sCrOv/QA2JxBAeRCqzj/8gPIHRTAJXgV519+AJcGXQ+BkwEF+pcfQOfAKyQWQaxA//IDYIsGBLANZgX6VyCAbQMCKINagf4VCKBswFSwWRsCfvtPfvT0D76hrn8FAvD0nxKebZL+3/+3np6enp5n//C7qvpXIAA2u18A2ebo/82/ePZyTP/nB91q+lchgOx+ARQa47/7H/uO6t9+TUn/KgRQ2C+AOmMC+EH/Yf37r6noX4UA6vr6jzPG/zv/2+NQATz9qxAAi+sTQLoxAfzNoIHlVABX/0oEkN4ngP3GBPAvPc4UwNe/EgHs7xPANVP8/8avehwpgLN/JQK49sq/u92UAJ4MKSngAnj7VyKAdndvAPHG/AX4xjMnCuDuX4kAWHxvAGnmvAb6eQ//Avj7VyOAtN4AdpkTwE97uBfggH81AtjVG8BJcwL4w2e8C3DCvxoBnOwNoNacANhf9vAtwBH/agRQ23tPpEH+2W/9B9cCnPGvRgDs5U2SSSYFwL79XxwLcMi/IgEkvQhgPUMBYv0rEsD6FwEcZChArH9FAjj4IoByhgLE+lckgPIXuwLNuyucSwEO+lckgJbnOwSnMIYCxPpXJAA2hYiIEhkKEOyfvTX4x74lYZQSiYhoNUMBgv2z7i8G/tgvuiUM0mqT9wUHVIDD/hn7dODP/VTGGD3fI5zPUIBo/+yjgT/4IxlDlE9EROcYChDtnz35sv8P/vKJjBE6R0RE1QwFiPbP2Af9f/IHUgaomojIbfDJAH4VIMQ/6/6s70/+rFvK+HS6jdoTwKcAMf4Ze6PPCvafvCFpfOKIaAFDARL8M8be+/z5D/78PWnDs4CIshgKkOKfse633//44/ff7pY3OllEtIOhADn+FWAHER1hKMBW/+wIEZ1mKMBW/+w0EVUwFGCrf1Zh9HsgHwuw0D+rJqIWhgJs9c9aiEIZQwG2+mcslGIYCrDXP4sxaGdwIAXY6p/FG7YrxM8Cfmirf5ZEqQwF9Fjrn6XSGoYC7PXP1tAWhgLs9c+20G6GAuz1z3bTYYYC7PXPDht0SjDnAqzwzwqphKEAe/2zEiplKMBe/6yUzjIUYK9/dpYuMBRgr392ga4wFGCvf3aFrjMUYK9/dp1uMTsL+OWw/n9o0zjcoio7Axh+/pfnLTPqU0X34d/mAu5TE/zbXEATeeDf5gI81AH/NhfQYWEAT72ZCrClgA77/gQ89W4y0JICPNZ9CXzq7XIAOwposu0x8Kn3C4KsKOC+ZS+CnvqyJNCGAqrsehX81LdFwRYUcMuqyaCnvm4LML+A6zZNBw/v/5fWFnDFogUhI+z/43rPkFZcsGdJ2Ij7P60t4Kw1i0JH2f9rawGltiwLH3X/t6UFlFiyMcSL/f92FlBox9Ywr85/sLKAw1ZsDvXy/A8bC9htw/Zwr89/sbCALRYcEOHD+T/2FbDG/CNifDr/yboCUo0/JMrH879sKyDJ9GPifD7/zbIC4g0/KNKP8//sKiDG7KNi/Tr/0aoCQo0+LNrP8z8tKqDF6OPi/T7/1Z4Cqk2+MCKA83+tKaDC4CtjAjr/2ZYCTpt7aVSA539bUsARY6+NC/j8dzsK2GHqxZEczv+3ooAsQ6+O5XL/gw0FLDDz8mhO939YUECckdfHc7v/xfgCOt1k4Jsgjvf/mF5ANRERnYN/Pwr4u68aMFbniIgoH/79KeADAwYrn4iIcuHfnwK+/D39RyuXiIhWw79fBfyT/sO1moiIEuHfvwLe1H68EomIaAr8+1fAH2s/YFOIiMjVAv9+FfBnug9Yi4uIiKgc/v0q4M91H7Hy5/7pIPz7VcCf6j5kB18EsB7+/Srgd3Qfs/UvAkiCf38K+HftBy3pRQBR8O9HAc/0fwiIehEA1cK/7wX8tfb+a1/6p5Pw71UB/9nnJ//z17UP4GRvALvg3yu+/lfPXvzg//vRr+n/d3NXbwBp8O8lf/TTnz/r+dW/fvJtEx6c0noDiId/H34NPDFlPVh8bwDudvi3j3Z3bwB0Df7t49or/7Qf/u1jf58A0uHfPtL7BBAH//YR1ycAqoN/26jr61/LE4PhPyAK+wWQDf+2kd0vgNnwbxuz+wUQ7IF/u/AE9wuAyuDfLsr6+6dt8G8X2wYEsAj+7WLRgAAiOuHfJjojBgRAl+DfJi4N9K/PHmH450HuoADmwL9NzBkUgKsB/u2hwTUoACqAf3soGOyfMuDfHjKGCCC6C/5toSt6iADoKvzbwtWh/FMe/NtC3pABzIN/W5g3ZADBzfBvB83BQwZARfBvB0VD+1f5QRD+nX4IJCKa8Aj+beDRhGECoBPwbwMnhvNPq+DfBlYNG8D4Vvg3n9bxwwZAxfBvPsXD+6cV8G8+K0YIIMwD/6bjCRshADoG/6ZzbCT/tBz+TWf5iAGEPoR/s3kYOmIAdBT+zeboyP5pMfybzeJRAnBVwb/JVLlGCYBy4N9kckbzTzEd8G8uHTGjBkAl8G8uJaP7p2T4N5dkLwIIqoF/U6kJ8iIA2g7/prLdG/8U2wX/ZtIV61UAdAr+zeSUd/4pBf7NJMXLAMbWw7+J1I/1MgCJbwPh30FyvPVPUS3wbx4tUV4HQHvh3zz2eu+fpnbCv2l0TvUhADoO/6Zx3Bf/lAD/ppHgUwB0Ef7N4qJv/oW/DIJ/RV4C9c4J3oF/k7gT5GMAtA7+TWKdr/4prBH+zaExzOcABL4Phn/HyfHdP0U0wL8pNET4EQBthn9T2OyPfwqrh38zqA/zKwDaAP9msME//xRSA/8mUBPiZwC0Fv5NYK2//sldBf/6U+X2OwDKgn/9yfLfPwXfhn/duR0cQACUBv+6kxaIf3JVwL/eVLgCCoAS4V9vEilAnLlF4jvwL4aiQP1TbJsDH+vNX8C/ENpiAw7AkcvEPoF/MeQF7p/C67h/rG/CvxjqwjkEQJncP9d34V8MmTz805hy3p/rQ/gXQvkYLgHQXN4f7GfwL4S5xAneN8v/GP5FUMDLP03mfI/E9+BfAJ7J3AKgjXw/2hP4F8BGfv4p6DLXj9b9Kfw7zuUgjgHQjHauH+5b/w3/DtM+g7iyk+/H+z78O8xOvv4p5CbfPwLff/U74BffgS7u3AzhHAAlcj4/9Fsvvwd88iZ0cacrkbhzgPNn7H7yvR//7MPvfhO2HOAAf/8UWYtx1YXaSAcCoGUYWF1YRo5QjJHVg2Jn/FP0A4ytDjyIdigAJW6TAaOSTI6xD6OrPvuc80/jbmB8VefGOAcDoJmPMcJq83gmOcomDLHabHLWP7nKMMYqU+ZyOACKacQoq0tjDDlOKoZZXVJJAIcwzqpySIR/Cq/ESKtJZbiQAGhaM8ZaRZqnkSCWdmG01aNrKQkjD8OtHnni/JOrFOOtGqUugQHQxHsYcbW4N5GEMrMVY64SrTNJMJkYdJXIJOHswairwx7x/sl9HuOuCufdEgKgSXcx8mpwdxJJYXoTxl4FmqaTJOZjfZACPJ5P0kjH8MsnnSSyFeMvm60klXwYkEu+XP/kPgMHMjnjlhwARVbCgjwqI0k6sfXwIIv6WFKAWVggJInmWaQECR64kIEngRRhYRtsiKdtISnDknb4EE37ElKIlZ0wIpbOlaQUWVgoLJSuLFKMbEgRSTYpx2uwIo7XSEFehxdRvE6EAuAffwXw+1+5b4J4FnD++382KUwW3gc4/fyfRUqzEu8EnX3/t5IUZwnmBRykbQkpz0LMDTqGZyFpQALWBzhEcwJpwSysEXKE+lmkCbGVsMWfyljShkisFebOmUjSCDf2C3Am3016gT1DXNlK2pGOnaPceJxOGjIfu8c50TSftGQ6TpDgwt3ppCmTcIoMB85PIm1x4ySpgNnjJp3JxHmCAdGaSZozE2eKBsC9maQ9E3GusN+UTiQDcOVhoZhfdOW5yAyWYoLYD5qXkjFMq4RPX6mcRgYRfghGfeNQOJlFKu4b9IHGVDKOGNw56jVlMWQgrk2YH/SKx5tcZCYzcfu8F9yYScYybh/8jsa+cWQyyQ+geCQeJJPhRBfD8vAUR5P5LKuF6KGpXUZWEHkAkwNDvfo/EEm2kHgTvgdyM5EsImQntpH3o31nCNnFjMuw/orLM8g6gjZiH/kLPBuDyEYmF8A9Y4wVTCZbmVsO/eVzyWLGZNbZrb8ucwzZTXiexYcKteWFE4gtstV/USzsP38vVGGj/opEmO9dK5J22zb9t9Nc8N6H4Kwqm/RXZQXD+QDca2ts0V+z1g3fQ00QbLDifLn6DSFwPQxhmxtM19+wOQyeRyAix+j9A405EXA82m+BdV8xVf+ddfjX79U8YcpFE/VfTAmCW29JOG7YzROdxxNg1Sem7m0xR3/L3qkw6jNROYY8FdbnRMGmX4xNOaX9+uGuUyljYTKAqcLtWr8frNmOCb+AnwmSSzr0tN9Rkozv/VyIydFwpqgqJwbmuOFafPShTvYfHl2M2V7OhC4/psk6cs+x5aHw5chb4hXFyp8821q8Au97HWT8qhOP1LX/6MSq8XDkNBMyipQ8eLK5KGMC7IgheF7eVaVeEXVdzZuHRV5iic4oUGT1SENBRjR8SHk4nJN7SfKsYeel3Dl44JNJxKJtZZIeDz1l2xZhgY8SXwlmZxcK3mNYV5g9G3/0lSIuff81IceOtF/bnx6H8VYSd3zarpMOHkJWe3JXWjzW9KtOVNL6g+Wc1xO1lB9cn4R1HTo9IUxJXJ2bf646wKeEzupz+bmrE6fgm762fxXiFmTtOHK6otqnXwkt1RWnj+zIWhCH3/fmEBoTn5S6Zsvuw4UlpWcvXLl+q+p+k6ejw9N0v+rW9SsXzpaWFB7evWVNalJ8jEWTef8P0xm+xOcJ6CkAAAAASUVORK5CYII=";
  };

  var _5C = function (e, t, n) {
    e.exports = n.p + "static/img/scorpio.a3fecdc43abb0eeb8e4a0dcddbe9590d.png";
  };

  var _5D = function (e, t, n) {
    e.exports = n.p + "static/img/taurus.f32d5382f084b51a4e075b2fe483568a.png";
  };

  var _5E = function (e, t, n) {
    e.exports = n.p + "static/img/virgo.e39f179fcbff1ffed80caffef829e76f.png";
  };

  var _5F = function (e, t, n) {
    n(531);
    var a = n(0)(n(408), n(755), "data-v-d0c65424", null);
    e.exports = a.exports;
  };

  var _5G = function (e, t, n) {
    n(514);
    var a = n(0)(n(409), n(737), null, null);
    e.exports = a.exports;
  };

  var _5H = function (e, t, n) {
    n(529);
    var a = n(0)(n(410), n(753), "data-v-b0af122e", null);
    e.exports = a.exports;
  };

  var _5I = function (e, t, n) {
    n(506);
    var a = n(0)(n(411), n(729), null, null);
    e.exports = a.exports;
  };

  var _5J = function (e, t, n) {
    n(519);
    var a = n(0)(n(412), n(743), null, null);
    e.exports = a.exports;
  };

  var _5K = function (e, t, n) {
    n(508);
    var a = n(0)(n(413), n(731), null, null);
    e.exports = a.exports;
  };

  var _5L = function (e, t, n) {
    n(504);
    var a = n(0)(n(414), n(727), null, null);
    e.exports = a.exports;
  };

  var _5M = function (e, t, n) {
    n(507);
    var a = n(0)(n(415), n(730), "data-v-2cb56b64", null);
    e.exports = a.exports;
  };

  var _5N = function (e, t, n) {
    n(516);
    var a = n(0)(n(416), n(739), "data-v-42fd9966", null);
    e.exports = a.exports;
  };

  var _5O = function (e, t, n) {
    n(526);
    var a = n(0)(n(417), n(750), null, null);
    e.exports = a.exports;
  };

  var _5P = function (e, t, n) {
    n(523);
    var a = n(0)(n(418), n(747), "data-v-71d64113", null);
    e.exports = a.exports;
  };

  var _5Q = function (e, t, n) {
    n(518);
    var a = n(0)(n(419), n(741), "data-v-554d1984", null);
    e.exports = a.exports;
  };

  var _5R = function (e, t, n) {
    n(524);
    var a = n(0)(n(420), n(748), null, null);
    e.exports = a.exports;
  };

  var _5S = function (e, t, n) {
    n(513);
    var a = n(0)(n(421), n(736), null, null);
    e.exports = a.exports;
  };

  var _5T = function (e, t, n) {
    n(505);
    var a = n(0)(n(422), n(728), "data-v-1da08370", null);
    e.exports = a.exports;
  };

  var _5U = function (e, t, n) {
    n(533);
    var a = n(0)(n(425), n(757), "data-v-f1ed5eb2", null);
    e.exports = a.exports;
  };

  var _5V = function (e, t, n) {
    n(532);
    var a = n(0)(n(426), n(756), null, null);
    e.exports = a.exports;
  };

  var _5W = function (e, t, n) {
    n(510);
    var a = n(0)(n(427), n(733), null, null);
    e.exports = a.exports;
  };

  var _5X = function (e, t, n) {
    n(534);
    var a = n(0)(n(428), n(758), "data-v-f4bb223c", null);
    e.exports = a.exports;
  };

  var _5Y = function (e, t, n) {
    n(525);
    var a = n(0)(n(429), n(749), "data-v-73e0efc9", null);
    e.exports = a.exports;
  };

  var _5Z = function (e, t, n) {
    n(522);
    var a = n(0)(n(430), n(746), "data-v-71715946", null);
    e.exports = a.exports;
  };

  var _60 = function (e, t, n) {
    n(521);
    var a = n(0)(n(432), n(745), "data-v-6a4f19ce", null);
    e.exports = a.exports;
  };

  var _61 = function (e, t, n) {
    n(517);
    var a = n(0)(n(433), n(740), "data-v-51c898ac", null);
    e.exports = a.exports;
  };

  var _62 = function (e, t, n) {
    n(512);
    var a = n(0)(n(434), n(735), "data-v-35410c08", null);
    e.exports = a.exports;
  };

  var _63 = function (e, t, n) {
    n(530);
    var a = n(0)(n(435), n(754), "data-v-bf0bff08", null);
    e.exports = a.exports;
  };

  var _64 = function (e, t, n) {
    n(528);
    var a = n(0)(n(436), n(752), "data-v-a19f9caa", null);
    e.exports = a.exports;
  };

  var _65 = function (e, t, n) {
    n(511);
    var a = n(0)(n(437), n(734), "data-v-3222c98f", null);
    e.exports = a.exports;
  };

  var _66 = function (e, t, n) {
    n(509);
    var a = n(0)(n(438), n(732), "data-v-30a92108", null);
    e.exports = a.exports;
  };

  var _67 = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("md-dialog", {
          ref: "dialog",
          staticClass: "md-dialog-alert",
          on: {
            close: function (t) {
              e.fireCloseEvent();
            }
          }
        }, [n("md-dialog-title", [n("div", {
          staticClass: "modal-title"
        }, [e._v(e._s(e.constants.doYouLikeMO))])]), e._v(" "), n("md-dialog-content", [n("div", {
          staticClass: "content-container"
        }, [n("div", {
          staticClass: "rate"
        }, [n("el-rate", {
          attrs: {
            texts: [e.constants.terrible, e.constants.bad, e.constants.normal, e.constants.good, e.constants.excellent],
            "show-text": ""
          },
          on: {
            change: function (t) {
              e.send();
            }
          },
          model: {
            value: e.rate,
            callback: function (t) {
              e.rate = t;
            },
            expression: "rate"
          }
        })], 1), e._v(" "), n("div", {
          staticClass: "feedback-label"
        }, [e._v(e._s(e.constants.leaveFeedback))]), e._v(" "), n("div", {
          staticClass: "feedback"
        }, [n("el-input", {
          attrs: {
            type: "textarea",
            rows: 4
          },
          model: {
            value: e.feedbackText,
            callback: function (t) {
              e.feedbackText = t;
            },
            expression: "feedbackText"
          }
        })], 1)])]), e._v(" "), n("md-dialog-actions", [n("md-button", {
          staticClass: "md-raised md-primary submit-btn",
          nativeOn: {
            click: function (t) {
              e.send(), e.close();
            }
          }
        }, [e._v(e._s(e.constants.send))])], 1), e._v(" "), n("div", {
          staticClass: "closeBtn",
          on: {
            click: function (t) {
              e.close();
            }
          }
        }, [n("i", {
          staticClass: "material-icons"
        }, [e._v("clear")])])], 1);
      },
      staticRenderFns: []
    };
  };

  var _68 = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "bio raw"
        }, [n("div", {
          staticClass: "col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12"
        }, [n("div", {
          staticClass: "bio__title"
        }, [e._v(e._s(e.constants.bioTitle))]), e._v(" "), n("vue-chart", {
          ref: "bioChart",
          attrs: {
            "chart-type": "LineChart",
            columns: e.columns,
            rows: e.rows,
            options: e.options
          }
        })], 1)]);
      },
      staticRenderFns: []
    };
  };

  var _69 = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", e._l(e.reviews, function (t) {
          return n("div", {
            staticClass: "review"
          }, [n("div", {
            staticClass: "review__date"
          }, [e._v(e._s(e.formatDate(t.created_at)))]), e._v(" "), n("div", {
            staticClass: "review__date"
          }, [n("el-rate", {
            attrs: {
              disabled: ""
            },
            model: {
              value: t.rate,
              callback: function (e) {
                t.rate = e;
              },
              expression: "r.rate"
            }
          })], 1), e._v(" "), t.feedback ? n("div", {
            staticClass: "review__text"
          }, [e._v(e._s(t.feedback))]) : e._e()]);
        }));
      },
      staticRenderFns: []
    };
  };

  var _6a = function (e, t, n) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("md-dialog", {
          ref: "dialog",
          staticClass: "md-dialog-alert",
          on: {
            close: function (t) {
              e.fireCloseEvent();
            }
          }
        }, [a("md-dialog-title", [a("div", {
          staticClass: "modal-title"
        }, [e._v("\n            Мы подготовили для Вас подарок!\n        ")])]), e._v(" "), a("md-dialog-content", [a("div", {
          staticClass: "start-text"
        }, [e._v("\n            Активируйте Персональный Лунный Календарь прямо сейчас"), a("br"), e._v(" и получите в подарок:\n        ")]), e._v(" "), a("div", {
          staticClass: "book"
        }, [a("el-carousel", {
          staticClass: "carousel",
          attrs: {
            interval: 2e3,
            "indicator-position": "none",
            arrow: "never",
            height: "250px"
          }
        }, [a("el-carousel-item", {
          staticClass: "slide"
        }, [a("img", {
          attrs: {
            src: n(103)
          }
        })]), e._v(" "), a("el-carousel-item", {
          staticClass: "slide"
        }, [a("img", {
          attrs: {
            src: n(176)
          }
        })]), e._v(" "), a("el-carousel-item", {
          staticClass: "slide"
        }, [a("img", {
          attrs: {
            src: n(177)
          }
        })])], 1), e._v(" "), a("div", {
          staticClass: "book__desc"
        }, [a("div", {
          staticClass: "title"
        }, [a("i", {
          staticClass: "fa fa-gift fa-lg",
          attrs: {
            "aria-hidden": "true"
          }
        }), e._v("\n                     книгу рецептов\n                ")]), e._v(" "), a("div", {
          staticClass: "name"
        }, [e._v('\n                    "Правильное питание по Луне"\n                ')]), e._v(" "), a("div", {
          staticClass: "plus"
        }, [a("i", {
          staticClass: "fa fa-check",
          attrs: {
            "aria-hidden": "true"
          }
        }), e._v("\n                    145 рецептов\n                ")]), e._v(" "), a("div", {
          staticClass: "plus"
        }, [a("i", {
          staticClass: "fa fa-check",
          attrs: {
            "aria-hidden": "true"
          }
        }), e._v("\n                    основные блюда, десерты и напитки\n                ")]), e._v(" "), a("div", {
          staticClass: "plus"
        }, [a("i", {
          staticClass: "fa fa-check",
          attrs: {
            "aria-hidden": "true"
          }
        }), e._v("\n                    меню на каждый лунный день!\n                ")])])], 1)]), e._v(" "), a("md-dialog-actions", {
          staticClass: "actions"
        }, [a("md-button", {
          staticClass: "md-raised md-primary gift-btn",
          nativeOn: {
            click: function (t) {
              e.goToPromo();
            }
          }
        }, [e._v("\n            Получить подарок\n        ")])], 1), e._v(" "), a("div", {
          staticClass: "closeBtn",
          on: {
            click: function (t) {
              e.close();
            }
          }
        }, [a("i", {
          staticClass: "material-icons"
        }, [e._v("clear")])])], 1);
      },
      staticRenderFns: []
    };
  };

  var _6b = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("md-dialog", {
          ref: "dialog",
          staticClass: "md-dialog-alert",
          on: {
            close: function (t) {
              e.fireCloseEvent();
            }
          }
        }, [e.mdTitle ? n("md-dialog-title", [e._v(e._s(e.mdTitle))]) : e._e(), e._v(" "), n("md-dialog-content", [e._t("default")], 2), e._v(" "), n("md-dialog-actions", [n("md-button", {
          staticClass: "md-primary",
          attrs: {
            id: "modal-ok"
          },
          nativeOn: {
            click: function (t) {
              e.close();
            }
          }
        }, [e._v(e._s(e.mdOkText))])], 1)], 1);
      },
      staticRenderFns: []
    };
  };

  var _6c = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "thanks"
        }, [n("h1", [e._v(e._s(e.constants.thanksTitle) + "\n    "), n("i", {
          staticClass: "fa fa-smile-o",
          attrs: {
            "aria-hidden": "true"
          }
        })]), e._v(" "), n("h3", [e._v(e._s(e.constants.thanksDesc))]), e._v(" "), n("div", {
          staticClass: "contacts"
        }, [e._v("\n    " + e._s(e.constants.supportTeam) + " " + e._s(e.constants.supportTeamText) + ": moon.organizer@gmail.com / +38 (050) 860-46-24\n  ")])]);
      },
      staticRenderFns: []
    };
  };

  var _6d = function (e, t, n) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          staticClass: "todo-container row"
        }, [a("moon-card", {
          staticClass: "col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
          attrs: {
            title: e.constants.myTodoList
          }
        }, [a("img", {
          staticClass: "todo__img left",
          attrs: {
            src: n(667)
          }
        }), e._v(" "), a("img", {
          staticClass: "todo__img right",
          attrs: {
            src: n(666)
          }
        }), e._v(" "), a("div", {
          staticClass: "todo__tooltip"
        }, [e._v(e._s(e.constants.todoListTooltip))]), e._v(" "), a("div", {
          staticClass: "todo__title2"
        }, [e._v(e._s(e.constants.monthPlan))]), e._v(" "), a("el-collapse", {
          staticClass: "todo-collapse"
        }, e._l(e.categories, function (t) {
          return a("el-collapse-item", {
            attrs: {
              title: e._f("capitalize")(e.constants[t]),
              name: t
            }
          }, e._l(e.tasks[t], function (t) {
            return a("div", {
              staticClass: "todo__task"
            }, [a("el-checkbox", {
              model: {
                value: t.selected,
                callback: function (e) {
                  t.selected = e;
                },
                expression: "task.selected"
              }
            }, [e._v("\n                        " + e._s(t.text[e.locale]) + "\n                    ")])], 1);
          }));
        })), e._v(" "), a("md-button", {
          staticClass: "md-raised md-primary",
          nativeOn: {
            click: function (t) {
              e.saveTasks(t);
            }
          }
        }, [e._v("\n            " + e._s(e.constants.calculate) + "\n        ")])], 1), e._v(" "), e.isCalculation ? a("div", {
          staticClass: "progress__background"
        }, [a("el-progress", {
          staticClass: "progress__bar",
          attrs: {
            status: e.status,
            type: "circle",
            percentage: e.persent
          }
        })], 1) : e._e()], 1);
      },
      staticRenderFns: []
    };
  };

  var _6e = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "registration-containter"
        }, [n("h1", [e._v(e._s(e.constants.registration))]), e._v(" "), n("div", {
          staticClass: "registration_form"
        }, [n("div", {
          staticClass: "registration_raw"
        }, [n("div", {
          staticClass: "registration_block"
        }, [n("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.constants.name))]), e._v(" "), n("div", {
          staticClass: "profile__field"
        }, [n("el-input", {
          class: {
            "is-error": e.newUser.name.error
          },
          attrs: {
            placeholder: ""
          },
          model: {
            value: e.newUser.name.model,
            callback: function (t) {
              e.newUser.name.model = t;
            },
            expression: "newUser.name.model"
          }
        }), e._v(" "), e.newUser.name.error ? n("div", {
          staticClass: "el-form-item__error"
        }, [e._v(e._s(e.constants.enterName))]) : e._e()], 1)]), e._v(" "), n("div", {
          staticClass: "registration_block"
        }, [n("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.constants.surname))]), e._v(" "), n("div", {
          staticClass: "profile__field"
        }, [n("el-input", {
          class: {
            "is-error": e.newUser.surname.error
          },
          attrs: {
            placeholder: ""
          },
          model: {
            value: e.newUser.surname.model,
            callback: function (t) {
              e.newUser.surname.model = t;
            },
            expression: "newUser.surname.model"
          }
        }), e._v(" "), e.newUser.surname.error ? n("div", {
          staticClass: "el-form-item__error"
        }, [e._v(e._s(e.constants.enterName))]) : e._e()], 1)])]), e._v(" "), n("div", {
          staticClass: "registration_raw"
        }, [n("div", {
          staticClass: "registration_block pb-25"
        }, [n("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.constants.birthday))]), e._v(" "), n("div", {
          staticClass: "profile__daytime"
        }, [n("daytime-picker", {
          model: {
            value: e.newUser.birthday.model,
            callback: function (t) {
              e.newUser.birthday.model = t;
            },
            expression: "newUser.birthday.model"
          }
        })], 1), e._v(" "), e.newUser.birthday.error ? n("div", {
          staticClass: "el-form-item__error"
        }, [e._v(e._s(e.constants.enterBirthday))]) : e._e()]), e._v(" "), n("div", {
          staticClass: "registration_block"
        }, [n("div", {
          staticClass: "profile__field"
        }, [n("categories-picker", {
          class: {
            "is-error": e.newUser.categories.error
          },
          attrs: {
            title: e.constants.interestCateg
          },
          model: {
            value: e.newUser.categories.model,
            callback: function (t) {
              e.newUser.categories.model = t;
            },
            expression: "newUser.categories.model"
          }
        }), e._v(" "), e.newUser.categories.error ? n("div", {
          staticClass: "el-form-item__error"
        }, [e._v(e._s(e.constants.enterCategory))]) : e._e()], 1)])]), e._v(" "), n("div", {
          staticClass: "registration_block__email"
        }, [n("h3", {
          staticClass: "profile__input"
        }, [e._v("Email")]), e._v(" "), n("el-input", {
          class: {
            "is-error": e.newUser.email.error
          },
          attrs: {
            placeholder: ""
          },
          model: {
            value: e.newUser.email.model,
            callback: function (t) {
              e.newUser.email.model = t;
            },
            expression: "newUser.email.model"
          }
        })], 1), e._v(" "), n("div", {
          staticClass: "submitbtn_container"
        }, [n("md-button", {
          staticClass: "md-raised md-primary",
          nativeOn: {
            click: function (t) {
              e.submitForm();
            }
          }
        }, [e._v("\n        " + e._s(e.constants.checkout) + "\n      ")])], 1)]), e._v(" "), n("div", {
          attrs: {
            id: "hidden-purchase-form"
          }
        })]);
      },
      staticRenderFns: []
    };
  };

  var _6f = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "specific-promo-page"
        }, [n("div", {
          staticClass: "specific-promo-page__title"
        }, [e._v("\n        " + e._s(e.title) + "\n    ")]), e._v(" "), n("div", {
          staticClass: "specific-promo-page__screen"
        }, [n("img", {
          attrs: {
            src: e.screenUrl,
            alt: ""
          }
        })]), e._v(" "), n("div", {
          staticClass: "specific-promo-page__text"
        }, [e._v("\n        " + e._s(e.text) + "\n    ")]), e._v(" "), n("div", {
          staticClass: "specific-promo-page__controls"
        }, [n("md-button", {
          staticClass: "md-raised",
          nativeOn: {
            click: function (t) {
              e.goToPromoAbout(t);
            }
          }
        }, [e._v("\n             " + e._s(e.constants.learnMore) + "\n         ")]), e._v(" "), n("promo-activate-btn")], 1)]);
      },
      staticRenderFns: []
    };
  };

  var _6g = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", [n("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.title || e.constants.uploadPhoto))]), e._v(" "), n("div", {
          staticClass: "avatar-container"
        }, [n("el-upload", {
          ref: "uploader",
          staticClass: "avatar-uploader",
          attrs: {
            action: "https://jsonplaceholder.typicode.com/posts/",
            "show-file-list": !1,
            "on-change": e.onChange,
            "auto-upload": !1,
            accept: "image/*"
          }
        }, [!e.file.url || e.isSuccesUpload ? n("i", {
          staticClass: "el-icon-plus avatar-uploader-icon"
        }) : e._e()]), e._v(" "), n("div", {
          staticClass: "alert-container"
        }, [e.isSuccesUpload ? n("el-alert", {
          attrs: {
            title: e.constants.uploadingSucces,
            type: "success",
            "show-icon": ""
          }
        }) : e._e(), e._v(" "), e.errorMsg ? n("el-alert", {
          attrs: {
            title: e.errorMsg,
            type: "error",
            "show-icon": ""
          }
        }) : e._e()], 1), e._v(" "), e.file.url && !e.isSuccesUpload ? n("div", [n("img", {
          ref: "avatar",
          attrs: {
            src: e.file.url,
            id: "avatar"
          }
        })]) : e._e()], 1), e._v(" "), e.file.url && !e.isSuccesUpload ? n("md-button", {
          staticClass: "md-raised",
          nativeOn: {
            click: function (t) {
              e.cancelCrop();
            }
          }
        }, [e._v("\n        " + e._s(e.constants.cancel) + "\n    ")]) : e._e(), e._v(" "), e.file.url ? n("md-button", {
          staticClass: "md-raised md-primary",
          nativeOn: {
            click: function (t) {
              e.sendToServer();
            }
          }
        }, [e._v(e._s(e.constants.upload))]) : e._e()], 1);
      },
      staticRenderFns: []
    };
  };

  var _6h = function (e, t, n) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return e.dayContent ? n("div", {
          staticClass: "container-fluid"
        }, [e.isEnableGoTop ? n("div", {
          staticClass: "up-button no-select",
          on: {
            click: function (t) {
              e.goTop();
            }
          }
        }, [n("i", {
          staticClass: "material-icons"
        }, [e._v("expand_less")])]) : e._e(), e._v(" "), n("div", {
          staticClass: "row"
        }, [n("div", {
          staticClass: "day-info col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1"
        }, [n("div", {
          staticClass: "color-block"
        }, [n("div", {
          staticClass: "day-title"
        }, [e._v(e._s(e._f("capitalize")(e.title)))])]), e._v(" "), n("div", {
          staticClass: "category-content main"
        }, [e.day ? n("div", {
          staticClass: "dynamic-info"
        }, [n("div", [n("b", [e._v(e._s(e._f("capitalize")(e.constants.start)) + ": ")]), e._v("\n                        " + e._s(e.lunarDay.start) + "\n                    ")]), e._v(" "), n("div", [n("b", [e._v(e._s(e._f("capitalize")(e.constants.end)) + ": ")]), e._v("\n                        " + e._s(e.lunarDay.end) + "\n                    ")]), e._v(" "), n("div", {
          staticClass: "dynamic-icons-block"
        }, [n("div", [n("img", {
          attrs: {
            src: e.day.moonPhaseLogoPath
          }
        })]), e._v(" "), n("div", [e._v(e._s(e._f("capitalize")(e.constants[e.day.moonPhase])))]), e._v(" "), n("div", [n("img", {
          attrs: {
            src: e.day.zodiacLogoPath
          }
        })]), e._v(" "), n("div", [e._v(e._s(e._f("capitalize")(e.constants[e.day.zodiac])))])])]) : e._e(), e._v(" "), e._l(e.main, function (t) {
          return n("div", [n("b", [e._v(e._s(e._f("capitalize")(e.constants[t.name])) + ": ")]), e._v(" " + e._s(t.text))]);
        }), e._v(" "), n("social-sharing", {
          attrs: {
            url: e.sharingUrl,
            media: e.mainLogo,
            title: e.title
          },
          inlineTemplate: {
            render: function () {
              var e = this,
                  t = e.$createElement,
                  n = e._self._c || t;
              return n("div", {
                staticClass: "social-sharing"
              }, [n("network", {
                attrs: {
                  network: "facebook"
                }
              }, [n("i", {
                staticClass: "fa fa-facebook fa-lg"
              })]), e._v(" "), n("network", {
                attrs: {
                  network: "googleplus"
                }
              }, [n("i", {
                staticClass: "fa fa-google-plus fa-lg"
              })]), e._v(" "), n("network", {
                attrs: {
                  network: "twitter"
                }
              }, [n("i", {
                staticClass: "fa fa-twitter fa-lg"
              })]), e._v(" "), n("network", {
                attrs: {
                  network: "vk"
                }
              }, [n("i", {
                staticClass: "fa fa-vk fa-lg"
              })])], 1);
            },
            staticRenderFns: []
          }
        })], 2)])]), e._v(" "), n("div", {
          staticClass: "row day-raw"
        }, [e.lunarBirthday ? n("div", {
          staticClass: "day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
        }, [e._m(0), e._v(" "), n("div", {
          staticClass: "color-block"
        }, [n("div", {
          staticClass: "category-name"
        }, [e._v(e._s(e.constants.lunarBirthday))])]), e._v(" "), n("div", {
          staticClass: "category-content"
        }, e._l(e.lunarBirthday, function (t) {
          return n("div", {
            domProps: {
              innerHTML: e._s(t[e.locale])
            }
          });
        }))]) : e._e(), e._v(" "), e.tasks ? n("div", {
          staticClass: "day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
        }, [e._m(1), e._v(" "), n("div", {
          staticClass: "color-block"
        }, [n("div", {
          staticClass: "category-name"
        }, [e._v(e._s(e.constants.todoPlanned))])]), e._v(" "), n("div", {
          staticClass: "category-content"
        }, e._l(e.tasks, function (t) {
          return n("div", [e._v("\n                    " + e._s(t.text[e.locale]) + "\n                ")]);
        }))]) : e._e(), e._v(" "), e.childConception ? n("div", {
          staticClass: "day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
        }, [e._m(2), e._v(" "), n("div", {
          staticClass: "color-block"
        }, [n("div", {
          staticClass: "category-name"
        }, [e._v(e._s(e.constants.childConception))])]), e._v(" "), n("div", {
          staticClass: "category-content"
        }, [n("div", {
          staticClass: "plus"
        }, [e._m(3), e._v(" "), n("div", {
          domProps: {
            innerHTML: e._s(e.childConception.title[e.locale])
          }
        })])])]) : e._e(), e._v(" "), e.isPersonal ? e._e() : n("div", {
          staticClass: "day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
        }, [n("div", {
          staticClass: "img-container"
        }, [n("img", {
          attrs: {
            src: e.promo.icon
          }
        })]), e._v(" "), n("div", {
          staticClass: "color-block"
        }, [n("div", {
          staticClass: "category-name"
        }, [e._v(e._s(e.constants[e.promo.titleConst]))])]), e._v(" "), n("div", {
          staticClass: "category-content"
        }, [e._l(e.promo.paragraphs, function (t) {
          return e.promo.paragraphs ? n("div", {
            domProps: {
              innerHTML: e._s(t[e.locale])
            }
          }) : e._e();
        }), e._v(" "), e.promo.text ? n("div", {
          domProps: {
            innerHTML: e._s(e.promo.text[e.locale])
          }
        }) : e._e(), e._v(" "), "learnMore" === e.promo.btnLangConst ? n("div", {
          staticClass: "promo__btn",
          on: {
            click: function (t) {
              e.goToPromo();
            }
          }
        }, [n("md-button", {
          staticClass: "md-raised md-primary"
        }, [e._v(e._s(e.constants[e.promo.btnLangConst]))])], 1) : n("div", {
          staticClass: "promo__link",
          on: {
            click: function (t) {
              e.goToPromo();
            }
          }
        }, [e._v("\n                    " + e._s(e.constants[e.promo.btnLangConst]) + " >>\n                ")])], 2)]), e._v(" "), e._l(e.categories, function (t, a) {
          return n("div", {
            staticClass: "day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
          }, [n("div", {
            staticClass: "img-container"
          }, [n("img", {
            attrs: {
              src: t.path
            }
          })]), e._v(" "), n("div", {
            staticClass: "color-block"
          }, [n("div", {
            staticClass: "category-name"
          }, [e._v(e._s(e._f("capitalize")(e.constants[t.name])))])]), e._v(" "), n("div", {
            staticClass: "category-content",
            class: {
              "pre-last": a === e.categories.length - 2
            }
          }, [e._l(t.plus, function (t) {
            return n("div", {
              staticClass: "plus"
            }, [e._m(4, !0), e._v(" "), n("div", [e._v(e._s(t))])]);
          }), e._v(" "), e._l(t.minus, function (t) {
            return n("div", {
              staticClass: "minus"
            }, [e._m(5, !0), e._v(" "), n("div", [e._v(e._s(t))])]);
          })], 2)]);
        }), e._v(" "), e.zodiacGarden ? n("div", {
          staticClass: "day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
        }, [e._m(6), e._v(" "), n("div", {
          staticClass: "color-block"
        }, [n("div", {
          staticClass: "category-name"
        }, [e._v(e._s(e.constants.sowingCalendar))])]), e._v(" "), n("div", {
          staticClass: "category-content"
        }, [n("div", {
          domProps: {
            innerHTML: e._s(e.zodiacGarden.title[e.locale])
          }
        }), e._v(" "), e._l(e.zodiacGarden.pluses, function (t) {
          return n("div", {
            staticClass: "plus"
          }, [e._m(7, !0), e._v(" "), n("div", {
            domProps: {
              innerHTML: e._s(t[e.locale])
            }
          })]);
        })], 2)]) : e._e()], 2)]) : e._e();
      },
      staticRenderFns: [function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          staticClass: "img-container"
        }, [a("img", {
          attrs: {
            src: n(174)
          }
        })]);
      }, function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          staticClass: "img-container"
        }, [a("img", {
          attrs: {
            src: n(684)
          }
        })]);
      }, function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          staticClass: "img-container"
        }, [a("img", {
          attrs: {
            src: n(665)
          }
        })]);
      }, function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "category-icon"
        }, [n("i", {
          staticClass: "material-icons"
        }, [e._v("add_circle")])]);
      }, function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "category-icon"
        }, [n("i", {
          staticClass: "material-icons"
        }, [e._v("add_circle")])]);
      }, function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "category-icon"
        }, [n("i", {
          staticClass: "material-icons"
        }, [e._v("remove_circle")])]);
      }, function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          staticClass: "img-container"
        }, [a("img", {
          attrs: {
            src: n(682)
          }
        })]);
      }, function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "category-icon"
        }, [n("i", {
          staticClass: "material-icons"
        }, [e._v("add_circle")])]);
      }]
    };
  };

  var _6i = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", [e.title ? n("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.title))]) : e._e(), e._v(" "), n("div", {
          staticClass: "dtm-container"
        }, [n("el-tooltip", {
          attrs: {
            effect: "dark",
            content: e.constants.year,
            placement: "top"
          }
        }, [n("el-select", {
          staticClass: "dtm-container__year",
          attrs: {
            placeholder: e.constants.year
          },
          model: {
            value: e.year,
            callback: function (t) {
              e.year = t;
            },
            expression: "year"
          }
        }, e._l(e.years, function (e) {
          return n("el-option", {
            key: e,
            attrs: {
              label: e,
              value: e
            }
          });
        }))], 1), e._v(" "), n("el-tooltip", {
          attrs: {
            effect: "dark",
            content: e.constants.month,
            placement: "top"
          }
        }, [n("el-select", {
          staticClass: "dtm-container__month",
          attrs: {
            placeholder: e.constants.month
          },
          model: {
            value: e.month,
            callback: function (t) {
              e.month = t;
            },
            expression: "month"
          }
        }, e._l(e.months, function (e) {
          return n("el-option", {
            attrs: {
              label: e.number,
              value: e.number
            }
          });
        }))], 1), e._v(" "), n("el-tooltip", {
          attrs: {
            effect: "dark",
            content: e.constants.day,
            placement: "top"
          }
        }, [n("el-select", {
          staticClass: "dtm-container__day",
          attrs: {
            placeholder: e.constants.day
          },
          model: {
            value: e.day,
            callback: function (t) {
              e.day = t;
            },
            expression: "day"
          }
        }, e._l(e.days, function (e) {
          return n("el-option", {
            key: e,
            attrs: {
              label: e,
              value: e
            }
          });
        }))], 1)], 1), e._v(" "), n("div", {
          staticClass: "time-container"
        }, [n("el-tooltip", {
          attrs: {
            effect: "dark",
            content: e.constants.time,
            placement: "top"
          }
        }, [n("el-time-select", {
          attrs: {
            "picker-options": {
              start: "00:00",
              step: "00:15",
              end: "23:59"
            },
            placeholder: e.constants.time,
            editable: !1
          },
          model: {
            value: e.time,
            callback: function (t) {
              e.time = t;
            },
            expression: "time"
          }
        })], 1)], 1)]);
      },
      staticRenderFns: []
    };
  };

  var _6j = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("md-dialog", {
          ref: "dialog",
          staticClass: "md-dialog-alert",
          on: {
            close: function (t) {
              e.fireCloseEvent();
            }
          }
        }, [n("md-dialog-content", [e.isNormal ? n("div", {
          staticClass: "login-modal__content"
        }, [n("md-input-container", {
          class: {
            "md-input-invalid": e.isEmailInvalid
          }
        }, [n("md-icon", [e._v("email")]), e._v(" "), n("label", [e._v(e._s(e.constants.enterEmail))]), e._v(" "), n("md-input", {
          attrs: {
            required: ""
          },
          model: {
            value: e.user.email,
            callback: function (t) {
              e.user.email = t;
            },
            expression: "user.email"
          }
        }), e._v(" "), n("span", {
          staticClass: "md-error"
        }, [e._v(e._s(e.constants.invalidEmail))])], 1), e._v(" "), n("md-input-container", {
          class: {
            "md-input-invalid": e.isPasswordInvalid
          },
          attrs: {
            "md-has-password": ""
          }
        }, [n("md-icon", [e._v("lock")]), e._v(" "), n("label", [e._v(e._s(e.constants.enterPassword))]), e._v(" "), n("md-input", {
          attrs: {
            type: "password",
            required: ""
          },
          model: {
            value: e.user.password,
            callback: function (t) {
              e.user.password = t;
            },
            expression: "user.password"
          }
        }), e._v(" "), n("span", {
          staticClass: "md-error"
        }, [e._v(e._s(e.constants.invalidPasswordLength))])], 1), e._v(" "), e.isLoginError ? n("div", {
          staticClass: "login-error"
        }, [e._v(e._s(e.constants.invalidLogin))]) : e._e()], 1) : e._e(), e._v(" "), e.isReset ? n("div", {
          staticClass: "login-modal__content"
        }, [n("div", {
          staticClass: "reset-title"
        }, [e._v(e._s(e.constants.resetTitle))]), e._v(" "), n("md-input-container", {
          class: {
            "md-input-invalid": e.isEmailInvalid
          }
        }, [n("md-icon", [e._v("email")]), e._v(" "), n("label", [e._v(e._s(e.constants.enterEmail))]), e._v(" "), n("md-input", {
          attrs: {
            required: ""
          },
          model: {
            value: e.user.email,
            callback: function (t) {
              e.user.email = t;
            },
            expression: "user.email"
          }
        }), e._v(" "), n("span", {
          staticClass: "md-error"
        }, [e._v(e._s(e.constants.invalidEmail))])], 1), e._v(" "), e.showResetTooltip ? n("div", [n("div", {
          staticClass: "reset-tooltip"
        }, [e._v(e._s(e.constants.resetTooltip))]), e._v(" "), n("div", {
          staticClass: "resend-btn",
          on: {
            click: function (t) {
              e.reset();
            }
          }
        }, [e._v(e._s(e.constants.resendPass))])]) : e._e(), e._v(" "), e.notFoundMail ? n("div", {
          staticClass: "reset-tooltip"
        }, [e._v("\n                " + e._s(e.constants.notFoundMail) + "\n            ")]) : e._e()], 1) : e._e()]), e._v(" "), n("md-dialog-actions", [e.isNormal ? n("md-button", {
          staticClass: "md-raised md-primary login-submit",
          attrs: {
            disabled: !e.isReadyForSubmit
          },
          nativeOn: {
            click: function (t) {
              e.submit();
            }
          }
        }, [e._v("\n            OK\n        ")]) : e._e(), e._v(" "), e.isReset ? n("md-button", {
          staticClass: "md-raised md-primary",
          attrs: {
            disabled: e.isEmailInvalid
          },
          nativeOn: {
            click: function (t) {
              e.isResetDone ? e.close() : e.reset();
            }
          }
        }, [e._v("\n            OK\n        ")]) : e._e()], 1), e._v(" "), e.isNormal ? n("div", {
          staticClass: "some-actions"
        }, [n("div", {
          staticClass: "reset-link",
          on: {
            click: e.resetPasswordState
          }
        }, [e._v(e._s(e.constants.forgetPassword))]), e._v(" "), n("div", {
          staticClass: "singup-link",
          on: {
            click: function (t) {
              e.goToPromo();
            }
          }
        }, [e._v(e._s(e.constants.signUp))])]) : e._e()], 1);
      },
      staticRenderFns: []
    };
  };

  var _6k = function (e, t, n) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          staticClass: "raw promo"
        }, [a("div", {
          staticClass: "col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 promo__title"
        }, [a("div", {
          staticClass: "promo__text"
        }, [a("div", [e._v(" " + e._s(e.constants.promoTitle) + " ")]), e._v(" "), a("promo-activate-btn", {
          staticClass: "btn"
        })], 1), e._v(" "), e.isBookShowed ? a("div", {
          staticClass: "promo__screen"
        }, [a("img", {
          attrs: {
            src: n(103)
          }
        })]) : e._e()]), e._v(" "), a("moon-card", {
          staticClass: "promo__card col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1"
        }, [a("div", {
          staticClass: "card__title",
          slot: "title"
        }, [a("div", [e._v(e._s(e.constants.promoCardTitle))]), e._v(" "), a("div", {
          staticClass: "card__subtitle"
        }, [e._v(e._s(e.constants.promoCardSubtitle))])]), e._v(" "), a("div", {
          staticClass: "card__content"
        }, e._l(e.pluses, function (t) {
          return a("div", {
            staticClass: "card__block"
          }, [a("div", {
            staticClass: "icon col-md-3 col-sm-3 col-xs-12"
          }, [a("img", {
            attrs: {
              src: t.url
            }
          })]), e._v(" "), a("div", {
            staticClass: "text col-md-9 col-sm-9 col-xs-12"
          }, [a("div", {
            staticClass: "title"
          }, [e._v(e._s(t.title[e.locale]))]), e._v(" "), a("div", {
            staticClass: "desc"
          }, [e._v(e._s(t.text[e.locale]))])])]);
        }))]), e._v(" "), a("div", {
          staticClass: "promo__buyblock"
        }, [a("promo-activate-btn", {
          staticClass: "btn"
        })], 1), e._v(" "), a("div", {
          staticClass: "promo__activate-desc"
        }, [a("div", {
          staticClass: "desc"
        }, [e._v("* " + e._s(e.constants.activateDescription))])]), e._v(" "), e.isBookShowed ? a("div", {
          staticClass: "book"
        }, [a("el-carousel", {
          staticClass: "carousel",
          attrs: {
            interval: 2e3,
            "indicator-position": "none",
            arrow: "never",
            height: "250px"
          }
        }, [a("el-carousel-item", {
          staticClass: "slide"
        }, [a("img", {
          attrs: {
            src: n(103)
          }
        })]), e._v(" "), a("el-carousel-item", {
          staticClass: "slide"
        }, [a("img", {
          attrs: {
            src: n(176)
          }
        })]), e._v(" "), a("el-carousel-item", {
          staticClass: "slide"
        }, [a("img", {
          attrs: {
            src: n(177)
          }
        })])], 1), e._v(" "), e._m(0)], 1) : e._e(), e._v(" "), a("div", {
          staticClass: "promo__end"
        }, [e._v("\n        " + e._s(e.constants.supportTeam) + " " + e._s(e.constants.supportTeamText) + ": moon.organizer@gmail.com / +38 (050) 860-46-24\n    ")])], 1);
      },
      staticRenderFns: [function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "book__desc"
        }, [n("div", {
          staticClass: "title"
        }, [n("i", {
          staticClass: "fa fa-gift fa-lg",
          attrs: {
            "aria-hidden": "true"
          }
        }), e._v("\n                     книга рецептов\n                ")]), e._v(" "), n("div", {
          staticClass: "name"
        }, [e._v('\n                    "Правильное питание по Луне"\n                ')]), e._v(" "), n("div", {
          staticClass: "plus"
        }, [n("i", {
          staticClass: "fa fa-check",
          attrs: {
            "aria-hidden": "true"
          }
        }), e._v("\n                    145 рецептов\n                ")]), e._v(" "), n("div", {
          staticClass: "plus"
        }, [n("i", {
          staticClass: "fa fa-check",
          attrs: {
            "aria-hidden": "true"
          }
        }), e._v("\n                    основные блюда, десерты и напитки\n                ")]), e._v(" "), n("div", {
          staticClass: "plus"
        }, [n("i", {
          staticClass: "fa fa-check",
          attrs: {
            "aria-hidden": "true"
          }
        }), e._v("\n                    меню на каждый лунный день!\n                ")])]);
      }]
    };
  };

  var _6l = function (e, t, n) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "calendar-container"
        }, [n("div", {
          staticClass: "day-info col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"
        }, [n("div", {
          staticClass: "color-block"
        }, [n("div", {
          staticClass: "day-title"
        }, [e._v(e._s(e.constants.lunarCalc))])]), e._v(" "), n("div", {
          staticClass: "content"
        }, [e._m(0), e._v(" "), n("div", {
          staticClass: "content__text"
        }, [e._v(e._s(e.constants.selectLd))]), e._v(" "), n("div", {
          staticClass: "content__datetime"
        }, [n("daytime-picker", {
          model: {
            value: e.day,
            callback: function (t) {
              e.day = t;
            },
            expression: "day"
          }
        })], 1), e._v(" "), n("div", {
          staticClass: "content__text"
        }, [e._v(e._s(e.constants.selectCity))]), e._v(" "), n("div", {
          staticClass: "content__city"
        }, [n("el-select", {
          attrs: {
            filterable: "",
            remote: "",
            "loading-text": e.constants.loading,
            "no-match-text": e.constants.nothingFound,
            "no-data-text": e.constants.nothingFound,
            placeholder: e.constants.startWriteCity,
            "remote-method": e.loadCities,
            loading: e.loading
          },
          model: {
            value: e.selectCity,
            callback: function (t) {
              e.selectCity = t;
            },
            expression: "selectCity"
          }
        }, e._l(e.cities, function (t) {
          return n("el-option", {
            key: t.defaultName,
            attrs: {
              label: t[e.locale],
              value: t
            }
          });
        })), e._v(" "), e.isCityValid ? e._e() : n("div", {
          staticClass: "el-form-item__error"
        }, [e._v(e._s(e.constants.selectCity))])], 1), e._v(" "), n("div", {
          staticClass: "content__btn"
        }, [n("md-button", {
          staticClass: "md-raised md-primary",
          nativeOn: {
            click: function (t) {
              e.calculate(t);
            }
          }
        }, [e._v(e._s(e.constants.calculate))]), e._v(" "), n("div", {
          staticClass: "info"
        }, [e._v(e._s(e.constants.calcTooltip))])], 1)])])]);
      },
      staticRenderFns: [function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          staticClass: "content__logo visible-md-block visible-lg-block"
        }, [a("img", {
          attrs: {
            src: n(643)
          }
        })]);
      }]
    };
  };

  var _6m = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "promo-block-hider"
        }, [n("div", {
          staticClass: "text"
        }, [e._v("\n        " + e._s(e.constants.blurText) + "\n    ")]), e._v(" "), n("router-link", {
          attrs: {
            to: {
              name: "promo-page"
            }
          }
        }, [n("md-button", {
          staticClass: "md-raised md-primary"
        }, [e._v("\n            " + e._s(e.constants.blurActivate) + "\n        ")])], 1)], 1);
      },
      staticRenderFns: []
    };
  };

  var _6n = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", [n("md-toolbar", {
          attrs: {
            "md-theme": "white"
          }
        }, [e.isCalendarView ? n("div", {
          staticClass: "logo"
        }, [n("img", {
          attrs: {
            src: e.logoPath
          }
        })]) : n("router-link", {
          staticClass: "logo",
          attrs: {
            to: "/"
          }
        }, [n("img", {
          attrs: {
            src: e.logoPath
          }
        })])], 1), e._v(" "), n("md-list", [n("md-list-item", [n("span", {
          staticClass: "main-title"
        }, [e._v(e._s(e.constants.lunarCalendar) + " " + e._s(e.currentYear))]), e._v(" "), n("md-list-expand", [n("md-list", e._l(e.types, function (t) {
          return n("md-button", {
            key: t.name,
            class: ["md-primary", "category", {
              active: e.isCurrentType(t.name)
            }],
            nativeOn: {
              click: function (n) {
                e.goToCategory(t.name);
              }
            }
          }, [e._v("\n                " + e._s(t.text) + "\n            ")]);
        }))], 1)], 1), e._v(" "), n("md-list-item", [n("router-link", {
          attrs: {
            to: {
              name: "biorhythms"
            }
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v("\n          " + e._s(e.constants.myBiorhythms) + "\n        ")])])], 1), e._v(" "), n("md-list-item", [n("router-link", {
          attrs: {
            to: {
              name: "todo-list"
            }
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v("\n          " + e._s(e.constants.myTodoList) + "\n          "), n("i", {
          staticClass: "fa fa-bell promo-icon",
          attrs: {
            "aria-hidden": "true"
          }
        })])])], 1), e._v(" "), n("md-list-item", [n("router-link", {
          attrs: {
            to: {
              name: "calc"
            }
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v("\n          " + e._s(e.constants.lunarDaysCalc) + "\n          "), n("i", {
          staticClass: "fa fa-bell promo-icon",
          attrs: {
            "aria-hidden": "true"
          }
        })])])], 1)], 1)], 1);
      },
      staticRenderFns: []
    };
  };

  var _6o = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", [e.title ? n("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.title))]) : e._e(), e._v(" "), n("el-select", {
          attrs: {
            multiple: "",
            placeholder: ""
          },
          model: {
            value: e.selectedCategories,
            callback: function (t) {
              e.selectedCategories = t;
            },
            expression: "selectedCategories"
          }
        }, e._l(e.allCategories, function (e) {
          return n("el-option", {
            key: e.name,
            attrs: {
              label: e.text,
              value: e.name
            }
          });
        }))], 1);
      },
      staticRenderFns: []
    };
  };

  var _6p = function (e, t, n) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return e.isVisible ? a("div", {
          attrs: {
            id: "promo-btn"
          },
          on: {
            click: e.onClick
          }
        }, [a("div", {
          staticClass: "desc"
        }, [e._v(e._s(e.constants.promoBtnText) + ">>")]), e._v(" "), a("img", {
          attrs: {
            src: n(655),
            alt: ""
          }
        })]) : e._e();
      },
      staticRenderFns: []
    };
  };

  var _6q = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("md-button", {
          staticClass: "md-raised md-primary",
          nativeOn: {
            click: function (t) {
              e.goToRegistration(t);
            }
          }
        }, [e._v("\n    " + e._s(e.constants.activate) + "\n    "), e.isUSD ? n("i", {
          staticClass: "strikethrough"
        }, [e._v("19.95 USD")]) : e._e(), e._v(" "), n("i", {
          staticClass: "price"
        }, [e._v(e._s(e.productInfo.amount) + " " + e._s(e.productInfo.currency))])]);
      },
      staticRenderFns: []
    };
  };

  var _6r = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "card"
        }, [e._t("title", [n("div", {
          staticClass: "card__title"
        }, [e._v(e._s(e.title))])]), e._v(" "), n("div", {
          staticClass: "card__content"
        }, [e._t("default")], 2)], 2);
      },
      staticRenderFns: []
    };
  };

  var _6s = function (e, t, n) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          staticClass: "container profile-container"
        }, [a("div", {
          staticClass: "profile__title"
        }, [a("img", {
          attrs: {
            src: n(654)
          }
        }), e._v(" "), a("div", [e._v(e._s(e.constants.editProfile))])]), e._v(" "), a("div", {
          staticClass: "raw"
        }, [a("div", {
          staticClass: "col-md-4 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"
        }, [a("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.constants.name))]), e._v(" "), a("div", {
          staticClass: "profile__field"
        }, [a("el-input", {
          class: {
            "is-error": e.newUser.name.error
          },
          attrs: {
            placeholder: ""
          },
          model: {
            value: e.newUser.name.model,
            callback: function (t) {
              e.newUser.name.model = t;
            },
            expression: "newUser.name.model"
          }
        }), e._v(" "), e.newUser.name.error ? a("div", {
          staticClass: "el-form-item__error"
        }, [e._v(e._s(e.constants.enterName))]) : e._e()], 1), e._v(" "), a("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.constants.surname))]), e._v(" "), a("div", {
          staticClass: "profile__field"
        }, [a("el-input", {
          class: {
            "is-error": e.newUser.surname.error
          },
          attrs: {
            placeholder: ""
          },
          model: {
            value: e.newUser.surname.model,
            callback: function (t) {
              e.newUser.surname.model = t;
            },
            expression: "newUser.surname.model"
          }
        }), e._v(" "), e.newUser.surname.error ? a("div", {
          staticClass: "el-form-item__error"
        }, [e._v(e._s(e.constants.enterName))]) : e._e()], 1), e._v(" "), a("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.constants.birthday))]), e._v(" "), a("div", {
          staticClass: "profile__daytime"
        }, [a("daytime-picker", {
          model: {
            value: e.newUser.birthday.model,
            callback: function (t) {
              e.newUser.birthday.model = t;
            },
            expression: "newUser.birthday.model"
          }
        })], 1), e._v(" "), e.newUser.surname.error ? a("div", {
          staticClass: "el-form-item__error"
        }, [e._v(e._s(e.constants.enterBirthday))]) : e._e(), e._v(" "), a("div", {
          staticClass: "profile__field"
        }, [a("categories-picker", {
          class: {
            "is-error": e.newUser.categories.error
          },
          attrs: {
            title: e.constants.interestCateg
          },
          model: {
            value: e.newUser.categories.model,
            callback: function (t) {
              e.newUser.categories.model = t;
            },
            expression: "newUser.categories.model"
          }
        }), e._v(" "), e.newUser.categories.error ? a("div", {
          staticClass: "el-form-item__error"
        }, [e._v(e._s(e.constants.enterCategory))]) : e._e()], 1), e._v(" "), a("h3", {
          staticClass: "profile__input"
        }, [e._v("Email")]), e._v(" "), a("el-input", {
          attrs: {
            placeholder: "",
            disabled: !0
          },
          model: {
            value: e.newUser.email.model,
            callback: function (t) {
              e.newUser.email.model = t;
            },
            expression: "newUser.email.model"
          }
        }), e._v(" "), a("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.constants.oldPassword))]), e._v(" "), a("el-input", {
          attrs: {
            placeholder: "",
            disabled: !0
          },
          model: {
            value: e.newUser.password.model,
            callback: function (t) {
              e.newUser.password.model = t;
            },
            expression: "newUser.password.model"
          }
        }), e._v(" "), a("h3", {
          staticClass: "profile__input"
        }, [e._v(e._s(e.constants.newPassword))]), e._v(" "), a("div", {
          staticClass: "profile__field"
        }, [a("el-input", {
          class: {
            "is-error": e.newUser.newPassword.error
          },
          attrs: {
            placeholder: ""
          },
          model: {
            value: e.newUser.newPassword.model,
            callback: function (t) {
              e.newUser.newPassword.model = t;
            },
            expression: "newUser.newPassword.model"
          }
        }), e._v(" "), e.newUser.newPassword.error ? a("div", {
          staticClass: "el-form-item__error"
        }, [e._v(e._s(e.constants.passwordReq))]) : e._e()], 1)], 1), e._v(" "), a("div", {
          staticClass: "col-md-6 col-md-offset-0 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"
        }, [a("avatar-uploader"), e._v(" "), a("div", {
          staticClass: "clearfix visible-md-block visible-lg-block col-balancer"
        })], 1)]), e._v(" "), a("div", {
          staticClass: "raw"
        }, [a("div", {
          staticClass: "col-md-4 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"
        }, [a("div", {
          staticClass: "profile__btns"
        }, [a("md-button", {
          staticClass: "md-raised"
        }, [e._v(e._s(e.constants.cancel))]), e._v(" "), a("md-button", {
          staticClass: "md-raised md-primary",
          nativeOn: {
            click: function (t) {
              e.submit(t);
            }
          }
        }, [e._v(e._s(e.constants.save))])], 1)])])]);
      },
      staticRenderFns: []
    };
  };

  var _6t = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "zodiac raw"
        }, [n("moon-card", {
          staticClass: "col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
          attrs: {
            title: e.constants.lunarZodiacSign
          }
        }, [n("div", {
          staticClass: "zodiac__content"
        }, [n("div", {
          staticClass: "zodiac__icon"
        }, [n("img", {
          attrs: {
            src: e.icon
          }
        })]), e._v(" "), n("div", {
          staticClass: "zodiac__title",
          domProps: {
            innerHTML: e._s(e.content.title[e.locale])
          }
        }), e._v(" "), n("div", {
          staticClass: "zodiac__item"
        }, [n("div", [e._v(e._s(e.constants.ruler) + ": ")]), e._v(" "), n("div", [e._v(e._s(e.content.ruler[e.locale]))])]), e._v(" "), n("div", {
          staticClass: "zodiac__item"
        }, [n("div", [e._v(e._s(e.constants.talismans) + ": ")]), e._v(" "), n("div", [e._v(e._s(e.content.talismans[e.locale]))])]), e._v(" "), n("div", {
          staticClass: "zodiac__item"
        }, [n("div", [e._v(e._s(e.constants.character) + ": ")]), e._v(" "), n("div", [e._v(e._s(e.content.character[e.locale]))])]), e._v(" "), n("div", {
          staticClass: "zodiac__info"
        }, e._l(e.content.paragraphs, function (t) {
          return n("div", {
            domProps: {
              innerHTML: e._s(t[e.locale])
            }
          });
        }))])])], 1);
      },
      staticRenderFns: []
    };
  };

  var _6u = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("md-dialog", {
          ref: "dialog",
          staticClass: "md-dialog-alert",
          on: {
            close: function (t) {
              e.fireCloseEvent();
            }
          }
        }, [e.weekDay ? n("md-dialog-title", [n("div", {
          staticClass: "modal-title text-capitalize"
        }, [e._v(e._s(e.weekDay.name))])]) : e._e(), e._v(" "), e.weekDay ? n("md-dialog-content", [n("div", {
          staticClass: "planet-logo"
        }, [n("img", {
          attrs: {
            src: e.weekDay.planetLogoPath
          }
        })]), e._v(" "), n("div", {
          staticClass: "description",
          domProps: {
            innerHTML: e._s(e.weekDay.description)
          }
        })]) : e._e(), e._v(" "), n("md-dialog-actions", [n("md-button", {
          staticClass: "md-raised md-primary submit-btn",
          nativeOn: {
            click: function (t) {
              e.close();
            }
          }
        }, [e._v("OK")])], 1), e._v(" "), n("div", {
          staticClass: "closeBtn",
          on: {
            click: function (t) {
              e.close();
            }
          }
        }, [n("i", {
          staticClass: "material-icons"
        }, [e._v("clear")])])], 1);
      },
      staticRenderFns: []
    };
  };

  var _6v = function (e, t, n) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          attrs: {
            id: "app"
          }
        }, [a("login-modal", {
          ref: "loginModal",
          attrs: {
            id: "login-modal"
          }
        }), e._v(" "), a("promo-btn"), e._v(" "), a("gift-modal", {
          ref: "giftModal"
        }), e._v(" "), a("md-sidenav", {
          ref: "leftSidenav",
          staticClass: "main-sidenav md-left md-fixed",
          attrs: {
            "md-swipeable": ""
          }
        }, [e.isMobile ? a("div", {
          staticClass: "closeBtn",
          on: {
            click: function (t) {
              e.toggleLeftSidenav();
            }
          }
        }, [a("i", {
          staticClass: "material-icons"
        }, [e._v("clear")])]) : e._e(), e._v(" "), e.$store.state.personal ? a("div", [a("personal-sidenav")], 1) : a("div", [a("free-sidenav", {
          on: {
            category: e.goToCalendar
          }
        })], 1)]), e._v(" "), a("md-toolbar", {
          staticClass: "header"
        }, [e.isMobile ? a("md-button", {
          staticClass: "md-icon-button",
          attrs: {
            id: "menu-btn"
          },
          nativeOn: {
            click: function (t) {
              e.toggleLeftSidenav(t);
            }
          }
        }, [a("md-icon", [e._v("menu")])], 1) : e._e(), e._v(" "), a("div", {
          staticClass: "today-btn"
        }, [a("md-button", {
          staticClass: "md-raised",
          nativeOn: {
            click: function (t) {
              e.todayClickHandler(t);
            }
          }
        }, [e._v(e._s(e.constants.today))])], 1), e._v(" "), e.isMobile ? e._e() : a("div", {
          staticClass: "vline"
        }), e._v(" "), e.isMobile ? e._e() : a("div", {
          staticClass: "help-link",
          on: {
            click: function (t) {
              e.showTooltips();
            }
          }
        }, [a("md-icon", {
          staticClass: "md-size-1x md-raised"
        }, [e._v("help")]), e._v(" "), a("md-tooltip", {
          attrs: {
            "md-direction": "bottom"
          }
        }, [a("div", {
          staticStyle: {
            "font-size": "15px"
          }
        }, [e._v(e._s(e.constants.helpTooltip))])])], 1), e._v(" "), a("a", {
          staticClass: "contacts-link",
          attrs: {
            href: e.constants.contactsLink
          }
        }, [a("md-icon", {
          staticClass: "md-size-1x md-raised"
        }, [e._v("mail")]), e._v(" "), a("md-tooltip", {
          attrs: {
            "md-delay": "400",
            "md-direction": "bottom"
          }
        }, [a("div", {
          staticStyle: {
            "font-size": "15px"
          }
        }, [e._v(e._s(e.constants.contactUs))])])], 1), e._v(" "), a("md-button-toggle", {
          staticClass: "md-primary",
          attrs: {
            id: "lang-switcher",
            "md-single": ""
          }
        }, e._l(e.locales, function (t) {
          return a("md-button", {
            class: {
              "md-toggle": e.isLocale(t)
            },
            nativeOn: {
              click: function (n) {
                e.setLocale(t);
              }
            }
          }, [e._v(e._s(t))]);
        })), e._v(" "), e.authorized ? e._e() : a("div", {
          staticClass: "login-btn"
        }, [a("img", {
          attrs: {
            src: n(656)
          },
          on: {
            click: function (t) {
              e.openLoginModal();
            }
          }
        }), e._v(" "), a("md-tooltip", {
          attrs: {
            "md-direction": "bottom"
          }
        }, [e._v(e._s(e.constants.logIn))])], 1)], 1), e._v(" "), a("keep-alive", [a("router-view", {
          ref: "main"
        })], 1), e._v(" "), a("feedback-modal", {
          ref: "feedback",
          attrs: {
            "on-close": e.openBookmarksModal
          }
        }), e._v(" "), a("md-dialog-alert", {
          ref: "bookmarks",
          attrs: {
            "md-title": e.constants.addToBookmarks,
            "md-content-html": e.constants.addToBookmarksText
          }
        })], 1);
      },
      staticRenderFns: []
    };
  };

  var _6w = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "specific-promo-page"
        }, [n("div", {
          staticClass: "specific-promo-page__text"
        }, [e._v("\n        " + e._s(e.text) + "\n    ")]), e._v(" "), n("div", {
          staticClass: "specific-promo-page__controls"
        }, [n("md-button", {
          staticClass: "md-raised",
          nativeOn: {
            click: function (t) {
              e.goToPromoAbout(t);
            }
          }
        }, [e._v("\n             " + e._s(e.constants.learnMore) + "\n         ")]), e._v(" "), n("promo-activate-btn")], 1)]);
      },
      staticRenderFns: []
    };
  };

  var _6x = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "hello"
        }, [n("category-modal", {
          ref: "modal",
          attrs: {
            id: "modal",
            "md-title": e.title
          }
        }, [e.category ? n("div", {
          staticClass: "category-content"
        }, [e._l(e.category.plus, function (t) {
          return n("div", {
            staticClass: "plus"
          }, [n("div", {
            staticClass: "category-icon"
          }, [n("i", {
            staticClass: "material-icons"
          }, [e._v("add_circle")])]), e._v(" "), n("div", [e._v(e._s(t))])]);
        }), e._v(" "), e._l(e.category.minus, function (t) {
          return n("div", {
            staticClass: "minus"
          }, [n("div", {
            staticClass: "category-icon"
          }, [n("i", {
            staticClass: "material-icons"
          }, [e._v("remove_circle")])]), e._v(" "), n("div", [e._v(e._s(t))])]);
        })], 2) : n("div", {
          staticClass: "try-again"
        }, [n("div", {
          staticClass: "text-center"
        }, [e._v(e._s(e.constants.tryAgain))])]), e._v(" "), n("div", {
          staticClass: "promo__modal"
        }, [n("div", {
          staticClass: "promo__separator"
        }), e._v(" "), e._l(e.promo.paragraphs, function (t) {
          return e.promo.paragraphs ? n("div", {
            domProps: {
              innerHTML: e._s(t[e.locale])
            }
          }) : e._e();
        }), e._v(" "), e.promo.text ? n("div", {
          domProps: {
            innerHTML: e._s(e.promo.text[e.locale])
          }
        }) : e._e(), e._v(" "), n("div", {
          staticClass: "promo__link",
          on: {
            click: function (t) {
              e.goToPromo();
            }
          }
        }, [e._v(e._s(e.constants[e.promo.btn]) + " >>")])], 2)]), e._v(" "), n("div", {
          staticClass: "container",
          attrs: {
            id: "calendar-container"
          }
        }, [n("div", {
          staticClass: "calendar-wraper"
        }, [e.geo ? n("calendar", {
          attrs: {
            locale: e.locale,
            geo: e.geo,
            "day-click-handler": e.dayClickHandler(),
            "is-colored-handler": e.isColoredHandler()
          }
        }) : e._e()], 1)])], 1);
      },
      staticRenderFns: []
    };
  };

  var _6y = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "specific-promo-page"
        }, [n("div", {
          staticClass: "specific-promo-page__text"
        }, [e._v("\n        " + e._s(e.text) + "\n    ")]), e._v(" "), n("div", {
          staticClass: "specific-promo-page__controls"
        }, [n("md-button", {
          staticClass: "md-raised",
          nativeOn: {
            click: function (t) {
              e.goToPromoAbout(t);
            }
          }
        }, [e._v("\n             " + e._s(e.constants.learnMore) + "\n         ")]), e._v(" "), n("promo-activate-btn")], 1)]);
      },
      staticRenderFns: []
    };
  };

  var _6z = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return e.month ? n("div", {
          attrs: {
            id: "main-container"
          }
        }, [n("week-day-modal", {
          ref: "weekDayModal",
          attrs: {
            id: "weekDayModal"
          }
        }), e._v(" "), n("div", {
          staticClass: "month-container"
        }, [n("div", {
          staticClass: "glyphicon glyphicon-arrow-left month-changer",
          on: {
            click: function (t) {
              e.prev();
            }
          }
        }), e._v(" "), n("div", {
          staticClass: "month text-capitalize"
        }, [e._v(e._s(e.month.monthName) + " " + e._s(e.month.year))]), e._v(" "), n("div", {
          staticClass: "glyphicon glyphicon-arrow-right month-changer",
          on: {
            click: function (t) {
              e.next();
            }
          }
        })]), e._v(" "), n("div", {
          staticClass: "weekdays-container text-capitalize"
        }, e._l(e.month.weekDays, function (t) {
          return n("div", {
            staticClass: "weekday",
            on: {
              click: function (n) {
                e.onWeekDayClick(t.fullEn);
              }
            }
          }, [e._v("\n            " + e._s(t.shortLocale) + "\n        ")]);
        })), e._v(" "), n("div", {
          ref: "container",
          attrs: {
            id: "calendar-container"
          }
        }, e._l(e.month.days, function (t) {
          return n("div", {
            class: ["cell", {
              colored: e.isColoredHandler(t)
            }, {
              today: t.isToday
            }],
            style: t.style,
            on: {
              click: function (n) {
                e.onDayClick(t);
              }
            }
          }, [n("div", {
            staticClass: "date"
          }, [e._v(e._s(t.day))]), e._v(" "), n("div", {
            staticClass: "lunar-date"
          }, [e._v(e._s(t.showedLunarDay.number))]), e._v(" "), n("div", {
            staticClass: "moon-phase"
          }, [n("img", {
            attrs: {
              src: t.moonPhaseLogoPath
            }
          })])]);
        }))], 1) : e._e();
      },
      staticRenderFns: []
    };
  };

  var _6A = function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "sidenav"
        }, [n("div", {
          staticClass: "logo",
          on: {
            click: function (t) {
              e.goToProfile();
            }
          }
        }, [n("img", {
          attrs: {
            src: e.userAvatar
          }
        })]), e._v(" "), n("md-list", {
          staticClass: "md-dense sidenav__list"
        }, [n("md-list-item", {
          staticStyle: {
            "margin-bottom": "15px"
          }
        }, [n("span", {
          staticClass: "sidenav__client"
        }, [e._v(e._s(e.user.name) + " " + e._s(e.user.surname))]), e._v(" "), n("md-list-expand", [n("md-list", [n("md-list-item", {
          staticClass: "sidenav__child"
        }, [n("router-link", {
          attrs: {
            to: {
              name: "lunar-birthday"
            }
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v(e._s(e.constants.lunarBirthday))])])], 1), e._v(" "), n("md-list-item", {
          staticClass: "sidenav__child"
        }, [n("router-link", {
          attrs: {
            to: {
              name: "zodiac-birthday"
            }
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v(e._s(e.constants.lunarZodiacSign))])])], 1), e._v(" "), n("md-list-item", {
          staticClass: "sidenav__child"
        }, [n("router-link", {
          attrs: {
            to: {
              name: "profile"
            }
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v(e._s(e.constants.editProfile))])])], 1), e._v(" "), n("md-list-item", {
          staticClass: "sidenav__child"
        }, [n("router-link", {
          attrs: {
            to: {
              name: "default"
            }
          },
          nativeOn: {
            click: function (t) {
              e.logOut();
            }
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v(e._s(e.constants.logOut))])])], 1)], 1)], 1)], 1), e._v(" "), n("md-list-item", [n("router-link", {
          attrs: {
            to: "/"
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v(e._s(e.constants.myCalendar))])])], 1), e._v(" "), n("md-list-item", [n("router-link", {
          attrs: {
            to: {
              name: "biorhythms"
            }
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v(e._s(e.constants.myBiorhythms))])])], 1), e._v(" "), n("md-list-item", [n("router-link", {
          attrs: {
            to: {
              name: "todo-my"
            }
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v(e._s(e.constants.myTodoList))])])], 1), e._v(" "), n("md-list-item", [n("router-link", {
          attrs: {
            to: {
              name: "calc"
            }
          }
        }, [n("div", {
          staticClass: "sidenav__item"
        }, [e._v(e._s(e.constants.lunarDaysCalc))])])], 1)], 1)], 1);
      },
      staticRenderFns: []
    };
  };

  var _6B = function (e, t, n) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          staticClass: "birthday raw"
        }, [a("moon-card", {
          staticClass: "col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
          attrs: {
            title: e.constants.lunarBirthday
          }
        }, [a("div", {
          staticClass: "birthday__content"
        }, [a("div", {
          staticClass: "birthday__icon"
        }, [a("img", {
          attrs: {
            src: n(174)
          }
        })]), e._v(" "), a("div", {
          staticClass: "birthday__description"
        }, [e._v(e._s(e.constants.lunarBirthdayDescription))]), e._v(" "), a("div", {
          staticClass: "birthday__title"
        }, [e._v(e._s(e.subtitle))]), e._v(" "), a("div", {
          staticClass: "birthday__info"
        }, e._l(e.mainDayContent, function (t) {
          return a("div", [a("b", [e._v(e._s(e._f("capitalize")(e.constants[t.name])) + ": ")]), e._v(" " + e._s(t.text) + "\n                ")]);
        })), e._v(" "), a("div", {
          staticClass: "birthday__info"
        }, e._l(e.lunarBirthdayContent, function (t) {
          return a("div", {
            domProps: {
              innerHTML: e._s(t)
            }
          });
        }))])])], 1);
      },
      staticRenderFns: []
    };
  };

  var _6C = function (e, t, n) {
    e.exports = {
      render: function () {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", {
          staticClass: "todo-container row"
        }, [a("moon-card", {
          staticClass: "col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
          attrs: {
            title: e.constants.myTodoList
          }
        }, [a("img", {
          staticClass: "todo__img left2",
          attrs: {
            src: n(683)
          }
        }), e._v(" "), a("img", {
          staticClass: "todo__img right2",
          attrs: {
            src: n(685)
          }
        }), e._v(" "), e.canSave ? a("div", {
          staticClass: "todo__tooltip"
        }, [e._v(e._s(e.constants.todoDaysTooltip))]) : a("div", {
          staticClass: "todo__tooltip"
        }, [e._v("\n            " + e._s(e.constants.yourTaskList) + " " + e._s(e.tasksFrom) + "\n            ")]), e._v(" "), a("div", {
          staticClass: "todo__title2"
        }, [e._v(e._s(e.constants.todoPlanned))]), e._v(" "), a("div", {
          staticClass: "todo__days"
        }, e._l(e.tasks, function (t) {
          return a("div", {
            staticClass: "todo__task"
          }, [e.canSave ? a("el-checkbox", {
            model: {
              value: t.checked,
              callback: function (e) {
                t.checked = e;
              },
              expression: "task.checked"
            }
          }, [e._v("\n                    " + e._s(t.text[e.locale]) + " —\n                    "), a("i", {
            staticClass: "text-capitalize"
          }, [e._v(e._s(e.formatTaskDate(t.showedDay)))])]) : a("div", [e._v("\n                    " + e._s(t.text[e.locale]) + " —\n                    "), a("i", {
            staticClass: "text-capitalize"
          }, [e._v(e._s(e.formatTaskDate(t.showedDay)))])])], 1);
        })), e._v(" "), a("div", {
          staticClass: "todo__buttons"
        }, [a("md-button", {
          staticClass: "md-raised md-default",
          nativeOn: {
            click: function (t) {
              e.createNew(t);
            }
          }
        }, [e._v("\n                " + e._s(e.constants.createNew) + "\n            ")]), e._v(" "), e.canSave ? a("md-button", {
          staticClass: "md-raised md-primary",
          nativeOn: {
            click: function (t) {
              e.save(t);
            }
          }
        }, [e._v("\n                " + e._s(e.constants.addToCalendar) + "\n            ")]) : e._e()], 1)])], 1);
      },
      staticRenderFns: []
    };
  };

  var _6D = function (e, t, n) {
    function a(e) {
      return n(r(e));
    }

    function r(e) {
      var t = i[e];
      if (!(t + 1)) throw new _$1.Error("Cannot find module '" + e + "'.");
      return t;
    }

    var i = {
      "./first_quarter.png": 657,
      "./full_moon.png": 658,
      "./last_quarter.png": 659,
      "./new_moon.png": 660,
      "./waning_crescent.png": 661,
      "./waning_gibbous.png": 662,
      "./waxing_crescent.png": 663,
      "./waxing_gibbous.png": 664
    };
    a.keys = function () {
      return _$1.Object.keys(i);
    }, a.resolve = r, e.exports = a, a.id = 761;
  };

  var _6E = function (e, t, n) {
    function a(e) {
      return n(r(e));
    }

    function r(e) {
      var t = i[e];
      if (!(t + 1)) throw new _$1.Error("Cannot find module '" + e + "'.");
      return t;
    }

    var i = {
      "./biorhythms-1-en.jpg": 680,
      "./biorhythms-1-ru.jpg": 681
    };
    a.keys = function () {
      return _$1.Object.keys(i);
    }, a.resolve = r, e.exports = a, a.id = 762;
  };

  var _0 = _1;
  var _2 = _0.webpackJsonp;

  if (_0.webpackJsonp !== _2) {
    throw new Error("Prepack model invariant violation: " + _0.webpackJsonp);
  }

  var _3 = [0];
  var _4 = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,, _5, _6,,,,,,,,,,,,,, _7, _8,,,,,,,,,,,,,,,,,,,,, _9, _a, _b, _d,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, _g, _h,, _i,,,,,,,, _j, _k, _n, _o, _p, _q, _r, _u, _w, _x, _y,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N,,,,,,,,,,,,,,,,,,,,,, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _1a, _1b, _1c, _1d, _1e, _1f, _1g,,,,,,,,,,,,,,,,,,,, _1h, _1i, _1j, _1k, _1l, _1m, _1n, _1o, _1p, _1q, _1r, _1s, _1t, _1u, _1v, _1w, _1x, _1y, _1z, _1A, _1B, _1C, _1D, _1E, _1F, _1G, _1H, _1I, _1J, _1K, _1L, _1M, _1N, _1O, _1P, _1Q, _1R, _1S, _1T, _1U, _1V, _1W, _1X, _1Y, _1Z, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _2a, _2b, _2c, _2d, _2e, _2f, _2g, _2h, _2i, _2j, _2k, _2l, _2m, _2n, _2o, _2p, _2q, _2r, _2s, _2t, _2u, _2v, _2w, _2x, _2y, _2z, _2A, _2B, _2C, _2D, _2E, _2F, _2G, _2H, _2I, _2J, _2K, _2L, _2M, _2N, _2O, _2P, _2Q, _2R, _2S, _2T, _2U, _2V, _2W, _2X, _2Y, _2Z, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _3a, _3b, _3c, _3d, _3e, _3f, _3g, _3h, _3i, _3j, _3k, _3l, _3m, _3n, _3o, _3p, _3q, _3r, _3s, _3t, _3u, _3v, _3w, _3x, _3y, _3z, _3A, _3B, _3C, _3D,,, _3E, _3F, _3G, _3H, _3I, _3J, _3K, _3L, _3M, _3N, _3O, _3P, _3Q, _3R, _3S, _3T, _3U, _3V, _3W, _3X, _3Y, _3Z, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _4a, _4b, _4c, _4d, _4e,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, _4f, _4g, _4h, _4i, _4j, _4k, _4l, _4m, _4n, _4o, _4p, _4q, _4r, _4s, _4t, _4u, _4v, _4w, _4x, _4y, _4z, _4A, _4B, _4C, _4D, _4E, _4F, _4G, _4H, _4I, _4J,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, _4K,,,,,, _4L, _4M, _4N, _4O, _4P, _4Q, _4R, _4S, _4T, _4U, _4V, _4W, _4X, _4Y, _4Z, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _5a, _5b, _5c, _5d, _5e, _5f, _5g, _5h, _5i, _5j, _5k, _5l, _5m, _5n, _5o, _5p, _5q, _5r, _5s, _5t, _5u, _5v, _5w, _5x, _5y, _5z, _5A, _5B, _5C, _5D, _5E,, _5F, _5G, _5H, _5I, _5J, _5K, _5L, _5M, _5N, _5O, _5P, _5Q, _5R, _5S, _5T, _5U, _5V, _5W, _5X, _5Y, _5Z, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _6a, _6b, _6c, _6d, _6e, _6f, _6g, _6h, _6i, _6j, _6k, _6l, _6m, _6n, _6o, _6p, _6q, _6r, _6s, _6t, _6u, _6v, _6w, _6x, _6y, _6z, _6A, _6B, _6C,,, _6D, _6E];
  var _6F = [362];

  var _$0 = _2(_3, _4, _6F);
}).call(this);