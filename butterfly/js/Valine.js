/*!
 * Valine v1.4.1
 * (c) 2017-2020 xCss
 * Released under the GPL-2.0 License.
 * Last Update: 2020-4-11 14:31:20
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Valine = t())
    : (e.Valine = t());
})(this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.i = function (e) {
        return e;
      }),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 19))
    );
  })([
    function (e, t, n) {
      var r,
        i,
        o; /*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
      !(function (n, s) {
        (i = [e, t]),
          (r = s),
          void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) &&
            (e.exports = o);
      })(0, function (e, t) {
        "use strict";
        function n(e) {
          function t(t) {
            var n = e.style.width;
            (e.style.width = "0px"),
              e.offsetWidth,
              (e.style.width = n),
              (e.style.overflowY = t);
          }
          function n(e) {
            for (
              var t = [];
              e && e.parentNode && e.parentNode instanceof Element;

            )
              e.parentNode.scrollTop &&
                t.push({
                  node: e.parentNode,
                  scrollTop: e.parentNode.scrollTop,
                }),
                (e = e.parentNode);
            return t;
          }
          function r() {
            if (0 !== e.scrollHeight) {
              var t = n(e),
                r =
                  document.documentElement &&
                  document.documentElement.scrollTop;
              (e.style.height = ""),
                (e.style.height = e.scrollHeight + a + "px"),
                (u = e.clientWidth),
                t.forEach(function (e) {
                  e.node.scrollTop = e.scrollTop;
                }),
                r && (document.documentElement.scrollTop = r);
            }
          }
          function i() {
            r();
            var n = Math.round(parseFloat(e.style.height)),
              i = window.getComputedStyle(e, null),
              o =
                "content-box" === i.boxSizing
                  ? Math.round(parseFloat(i.height))
                  : e.offsetHeight;
            if (
              (o < n
                ? "hidden" === i.overflowY &&
                  (t("scroll"),
                  r(),
                  (o =
                    "content-box" === i.boxSizing
                      ? Math.round(
                          parseFloat(window.getComputedStyle(e, null).height)
                        )
                      : e.offsetHeight))
                : "hidden" !== i.overflowY &&
                  (t("hidden"),
                  r(),
                  (o =
                    "content-box" === i.boxSizing
                      ? Math.round(
                          parseFloat(window.getComputedStyle(e, null).height)
                        )
                      : e.offsetHeight)),
              c !== o)
            ) {
              c = o;
              var a = s("autosize:resized");
              try {
                e.dispatchEvent(a);
              } catch (e) {}
            }
          }
          if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
            var a = null,
              u = null,
              c = null,
              l = function () {
                e.clientWidth !== u && i();
              },
              h = function (t) {
                window.removeEventListener("resize", l, !1),
                  e.removeEventListener("input", i, !1),
                  e.removeEventListener("keyup", i, !1),
                  e.removeEventListener("autosize:destroy", h, !1),
                  e.removeEventListener("autosize:update", i, !1),
                  Object.keys(t).forEach(function (n) {
                    e.style[n] = t[n];
                  }),
                  o.delete(e);
              }.bind(e, {
                height: e.style.height,
                resize: e.style.resize,
                overflowY: e.style.overflowY,
                overflowX: e.style.overflowX,
                wordWrap: e.style.wordWrap,
              });
            e.addEventListener("autosize:destroy", h, !1),
              "onpropertychange" in e &&
                "oninput" in e &&
                e.addEventListener("keyup", i, !1),
              window.addEventListener("resize", l, !1),
              e.addEventListener("input", i, !1),
              e.addEventListener("autosize:update", i, !1),
              (e.style.overflowX = "hidden"),
              (e.style.wordWrap = "break-word"),
              o.set(e, { destroy: h, update: i }),
              (function () {
                var t = window.getComputedStyle(e, null);
                "vertical" === t.resize
                  ? (e.style.resize = "none")
                  : "both" === t.resize && (e.style.resize = "horizontal"),
                  (a =
                    "content-box" === t.boxSizing
                      ? -(
                          parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)
                        )
                      : parseFloat(t.borderTopWidth) +
                        parseFloat(t.borderBottomWidth)),
                  isNaN(a) && (a = 0),
                  i();
              })();
          }
        }
        function r(e) {
          var t = o.get(e);
          t && t.destroy();
        }
        function i(e) {
          var t = o.get(e);
          t && t.update();
        }
        var o =
            "function" == typeof Map
              ? new Map()
              : (function () {
                  var e = [],
                    t = [];
                  return {
                    has: function (t) {
                      return e.indexOf(t) > -1;
                    },
                    get: function (n) {
                      return t[e.indexOf(n)];
                    },
                    set: function (n, r) {
                      -1 === e.indexOf(n) && (e.push(n), t.push(r));
                    },
                    delete: function (n) {
                      var r = e.indexOf(n);
                      r > -1 && (e.splice(r, 1), t.splice(r, 1));
                    },
                  };
                })(),
          s = function (e) {
            return new Event(e, { bubbles: !0 });
          };
        try {
          new Event("test");
        } catch (e) {
          s = function (e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !1), t;
          };
        }
        var a = null;
        "undefined" == typeof window ||
        "function" != typeof window.getComputedStyle
          ? ((a = function (e) {
              return e;
            }),
            (a.destroy = function (e) {
              return e;
            }),
            (a.update = function (e) {
              return e;
            }))
          : ((a = function (e, t) {
              return (
                e &&
                  Array.prototype.forEach.call(e.length ? e : [e], function (
                    e
                  ) {
                    return n(e);
                  }),
                e
              );
            }),
            (a.destroy = function (e) {
              return (
                e && Array.prototype.forEach.call(e.length ? e : [e], r), e
              );
            }),
            (a.update = function (e) {
              return (
                e && Array.prototype.forEach.call(e.length ? e : [e], i), e
              );
            })),
          (t.default = a),
          (e.exports = t.default);
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        var t = this;
        return t.init(e), t;
      }
      function i(e) {
        return new r(e);
      }
      var o = n(10).version,
        s = n(6),
        a = n(9),
        u = n(0),
        c = n(5),
        l = n(3),
        h = n(4),
        f = n(2),
        d = n(7),
        p = n(8),
        v = {
          comment: "",
          nick: "Anonymous",
          mail: "",
          link: "",
          ua: navigator.userAgent,
          url: "",
        },
        g = {
          "zh-cn": {
            head: {
              nick: "昵称(必填)",
              mail: "邮箱(必填)",
              link: "网址(https://)",
            },
            tips: {
              comments: "评论",
              sofa: "快来做第一个评论的人吧~",
              busy: "还在提交中，请稍候...",
              again: "这么简单也能错，也是没谁了.",
            },
            ctrl: {
              reply: "回复",
              ok: "好的",
              sure: "确认",
              cancel: "取消",
              confirm: "确认",
              continue: "继续",
              more: "查看更多...",
              try: "再试试?",
              preview: "预览",
              emoji: "表情",
            },
            error: {
              99: "初始化失败，请检查init中的`el`元素.",
              100: "初始化失败，请检查你的AppId和AppKey.",
              401: "未经授权的操作，请检查你的AppId和AppKey.",
              403: "访问被api域名白名单拒绝，请检查你的安全域名设置.",
            },
            timeago: {
              seconds: "秒前",
              minutes: "分钟前",
              hours: "小时前",
              days: "天前",
              now: "刚刚",
            },
          },
          en: {
            head: {
              nick: "NickName",
              mail: "E-Mail",
              link: "Website(http://)",
            },
            tips: {
              comments: "Comments",
              sofa: "No comments yet.",
              busy: "Submit is busy, please wait...",
              again: "Sorry, this is a wrong calculation.",
            },
            ctrl: {
              reply: "Reply",
              ok: "Ok",
              sure: "Sure",
              cancel: "Cancel",
              confirm: "Confirm",
              continue: "Continue",
              more: "Load More...",
              try: "Once More?",
              preview: "Preview",
              emoji: "Emoji",
            },
            error: {
              99: "Initialization failed, Please check the `el` element in the init method.",
              100: "Initialization failed, Please check your appId and appKey.",
              401: "Unauthorized operation, Please check your appId and appKey.",
              403: "Access denied by api domain white list, Please check your security domain.",
            },
            timeago: {
              seconds: "seconds ago",
              minutes: "minutes ago",
              hours: "hours ago",
              days: "days ago",
              now: "just now",
            },
          },
        },
        _ = {
          cdn: "https://gravatar.loli.net/avatar/",
          ds: [
            "mp",
            "identicon",
            "monsterid",
            "wavatar",
            "robohash",
            "retro",
            "",
          ],
          params: "",
          hide: !1,
        },
        m = ["nick", "mail", "link"],
        y =
          Storage &&
          localStorage &&
          localStorage instanceof Storage &&
          localStorage;
      (r.prototype.init = function (e) {
        var t = this;
        return (
          (t.config = e),
          "undefined" == typeof document ? void console : (!!e && t._init(), t)
        );
      }),
        (r.prototype._init = function () {
          var e = this;
          try {
            var t = e.config,
              n = t.lang,
              r = t.langMode,
              i = t.avatar,
              s = t.avatarForce,
              u = t.avatar_cdn,
              c = t.notify,
              l = t.verify,
              f = t.visitor,
              y = t.path,
              b = void 0 === y ? location.pathname : y,
              x = t.pageSize,
              O = t.recordIP,
              S = t.clazzName,
              A = void 0 === S ? "Comment" : S;
            t.master, t.friends;
            (e.config.path = b.replace(/index\.html?$/, "")),
              (e.config.clazzName = A);
            var k = _.ds,
              E = s ? "&q=" + Math.random().toString(32).substring(2) : "";
            n && r && e.installLocale(n, r),
              (e.locale = e.locale || g[n || "zh-cn"]),
              (e.notify = c || !1),
              (e.verify = l || !1),
              (_.params =
                "?d=" + (k.indexOf(i) > -1 ? i : "mp") + "&v=" + o + E),
              (_.hide = "hide" === i),
              (_.cdn = /^https?\:\/\//.test(u) ? u : _.cdn);
            var C = Number(x || 10);
            if (
              ((e.config.pageSize = isNaN(C) ? 10 : C < 1 ? 10 : C),
              a.setOptions({
                renderer: new a.Renderer(),
                highlight: !1 === e.config.highlight ? null : d,
                gfm: !0,
                tables: !0,
                breaks: !0,
                pedantic: !1,
                sanitize: !0,
                smartLists: !0,
                smartypants: !0,
              }),
              O)
            ) {
              var T = h.create(
                  "script",
                  "src",
                  "//api.ip.sb/jsonip?callback=getIP"
                ),
                j = document.getElementsByTagName("script")[0];
              j.parentNode.insertBefore(T, j),
                (window.getIP = function (e) {
                  v.ip = e.ip;
                });
            }
            var N = e.config.app_id || e.config.appId,
              U = e.config.app_key || e.config.appKey;
            if (!N || !U) throw 99;
            var I = "https://",
              R = "";
            if (!e.config.serverURLs)
              switch (N.slice(-9)) {
                case "-9Nh9j0Va":
                  I += "tab.";
                  break;
                case "-MdYXbMMI":
                  I += "us.";
              }
            R = e.config.serverURLs || I + "avoscloud.com";
            try {
              p.init({ appId: N, appKey: U, serverURLs: R });
            } catch (e) {}
            var L = h.findAll(document, ".valine-comment-count");
            h.each(L, function (t, n) {
              if (n) {
                var r = h.attr(n, "data-xid");
                r &&
                  e
                    .Q(r)
                    .count()
                    .then(function (e) {
                      n.innerText = e;
                    })
                    .catch(function (e) {
                      n.innerText = 0;
                    });
              }
            }),
              f && w.add(p.Object.extend("Counter"), e.config.path);
            var P = e.config.el || null,
              D = h.findAll(document, P);
            if (!(P = P instanceof HTMLElement ? P : D[D.length - 1] || null))
              return;
            e.el = P;
            try {
              e.el.classList.add("v");
            } catch (t) {
              e.el.setAttribute("class", e.el.getAttribute("class") + " v");
            }
            _.hide && e.el.classList.add("hide-avatar"),
              (e.config.meta = (
                e.config.guest_info ||
                e.config.meta ||
                m
              ).filter(function (e) {
                return m.indexOf(e) > -1;
              }));
            var M = (0 == e.config.meta.length ? m : e.config.meta).map(
              function (t) {
                var n = "mail" == t ? "email" : "text";
                return m.indexOf(t) > -1
                  ? '<input name="' +
                      t +
                      '" placeholder="' +
                      e.locale.head[t] +
                      '" class="v' +
                      t +
                      ' vinput" type="' +
                      n +
                      '">'
                  : "";
              }
            );
            (e.placeholder = e.config.placeholder || "Just Go Go"),
              (e.el.innerHTML =
                '<div class="vwrap"><div class="vheader item' +
                M.length +
                '">' +
                M.join("") +
                '</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' +
                e.placeholder +
                '"></textarea><div class="vctrl"><span class="vemoji-btn">' +
                e.locale.ctrl.emoji +
                '</span> | <span class="vpreview-btn">' +
                e.locale.ctrl.preview +
                '</span></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div><div class="vcontrol"><div class="col col-20" title="Markdown is supported"><a href="https://segmentfault.com/markdown" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="col col-80 text-right"><button type="button" title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' +
                e.locale.ctrl.reply +
                '</button></div></div><div style="display:none;" class="vmark"></div></div><div class="vinfo" style="display:none;"><div class="vcount col"></div></div><div class="vlist"></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center"></div><div class="info"><div class="power txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v' +
                o +
                "</div></div>");
            var F = h.find(e.el, ".vempty");
            e.nodata = {
              show: function (t) {
                return (
                  (F.innerHTML = t || e.locale.tips.sofa),
                  h.attr(F, "style", "display:block;"),
                  e
                );
              },
              hide: function () {
                return h.attr(F, "style", "display:none;"), e;
              },
            };
            var q = h.create("div", "class", "vloading"),
              z = h.find(e.el, ".vlist");
            e.loading = {
              show: function (t) {
                var n = h.findAll(z, ".vcard");
                return (
                  t ? z.insertBefore(q, n[0]) : z.appendChild(q),
                  e.nodata.hide(),
                  e
                );
              },
              hide: function () {
                var t = h.find(z, ".vloading");
                return (
                  t && h.remove(t),
                  0 === h.findAll(z, ".vcard").length && e.nodata.show(),
                  e
                );
              },
            };
            var $ = h.find(e.el, ".vmark");
            (e.alert = {
              show: function (t) {
                $.innerHTML =
                  '<div class="valert txt-center"><div class="vtext">' +
                  ((t && t.text) || 1) +
                  '</div><div class="vbtns"></div></div>';
                var n = h.find($, ".vbtns"),
                  r =
                    '<button class="vcancel vbtn">' +
                    ((t && t.ctxt) || e.locale.ctrl.cancel) +
                    "</button>",
                  i =
                    '<button class="vsure vbtn">' +
                    ((t && t.otxt) || e.locale.ctrl.sure) +
                    "</button>";
                if (
                  ((n.innerHTML = "" + r + (t && t.type && i)),
                  h.on("click", h.find($, ".vcancel"), function (t) {
                    e.alert.hide();
                  }),
                  h.attr($, "style", "display:block;"),
                  t && t.type)
                ) {
                  var o = h.find($, ".vsure");
                  h.on("click", o, function (n) {
                    e.alert.hide(), t.cb && t.cb();
                  });
                }
                return e;
              },
              hide: function () {
                return h.attr($, "style", "display:none;"), e;
              },
            }),
              e.bind();
          } catch (t) {
            e.ErrorHandler(t, "init");
          }
        });
      var b = function (e, t) {
          var n = new e(),
            r = new p.ACL();
          r.setPublicReadAccess(!0),
            r.setPublicWriteAccess(!0),
            n.setACL(r),
            n.set("url", t.url),
            n.set("xid", t.xid),
            n.set("title", t.title),
            n.set("time", 1),
            n
              .save()
              .then(function (e) {
                h.find(t.el, ".leancloud-visitors-count").innerText = 1;
              })
              .catch(function (e) {});
        },
        w = {
          add: function (e, t) {
            var n = h.findAll(
              document,
              ".leancloud_visitors,.leancloud-visitors"
            );
            if (n.length) {
              var r = n[0],
                i = h.attr(r, "id"),
                o = h.attr(r, "data-flag-title"),
                s = encodeURI(i),
                a = { el: r, url: i, xid: s, title: o };
              if (decodeURI(i) === decodeURI(t)) {
                var u = new p.Query(e);
                u.equalTo("url", i),
                  u
                    .find()
                    .then(function (t) {
                      if (t.length > 0) {
                        var n = t[0];
                        n.increment("time"),
                          n
                            .save()
                            .then(function (e) {
                              h.find(
                                r,
                                ".leancloud-visitors-count"
                              ).innerText = e.get("time");
                            })
                            .catch(function (e) {});
                      } else b(e, a);
                    })
                    .catch(function (t) {
                      101 == t.code && b(e, a);
                    });
              } else w.show(e, n);
            }
          },
          show: function (e, t) {
            h.each(t, function (e, t) {
              var n = h.find(t, ".leancloud-visitors-count");
              n && (n.innerText = 0);
            });
            var n = [];
            for (var r in t) t.hasOwnProperty(r) && n.push(h.attr(t[r], "id"));
            if (n.length) {
              var i = new p.Query(e);
              i.containedIn("url", n),
                i
                  .find()
                  .then(function (e) {
                    e.length > 0 &&
                      h.each(e, function (e, t) {
                        var n = t.get("url"),
                          r = t.get("time"),
                          i = h.findAll(
                            document,
                            '.leancloud_visitors[id="' +
                              n +
                              '"],.leancloud-visitors[id="' +
                              n +
                              '"]'
                          );
                        h.each(i, function (e, t) {
                          var n = h.find(t, ".leancloud-visitors-count");
                          n && (n.innerText = r);
                        });
                      });
                  })
                  .catch(function (e) {});
            }
          },
        };
      (r.prototype.Q = function (e) {
        var t = this;
        if (1 == arguments.length) {
          var n = new p.Query(t.config.clazzName);
          n.doesNotExist("rid");
          var r = new p.Query(t.config.clazzName);
          r.equalTo("rid", "");
          var i = p.Query.or(n, r);
          return (
            "*" === e ? i.exists("url") : i.equalTo("url", decodeURI(e)),
            i.addDescending("createdAt"),
            i.addDescending("insertedAt"),
            i
          );
        }
        var o = JSON.stringify(arguments[1]).replace(/(\[|\])/g, ""),
          s =
            "select * from " +
            t.config.clazzName +
            " where rid in (" +
            o +
            ") order by -createdAt,-createdAt";
        return p.Query.doCloudQuery(s);
      }),
        (r.prototype.ErrorHandler = function (e, t) {
          var n = this;
          if (
            (n.el && n.loading.hide().nodata.hide(),
            "[object Error]" === {}.toString.call(e))
          ) {
            var r = e.code || "",
              i = n.locale.error[r],
              o = i || e.message || e.error || "";
            101 == r
              ? n.nodata.show()
              : (n.el &&
                  n.nodata.show(
                    '<pre style="text-align:left;">Code ' +
                      r +
                      ": " +
                      o +
                      "</pre>"
                  )) ||
                console;
          } else
            (n.el &&
              n.nodata.show(
                '<pre style="text-align:left;">' + JSON.stringify(e) + "</pre>"
              )) ||
              console;
        }),
        (r.prototype.installLocale = function (e, t) {
          var n = this;
          return (
            (t = t || {}), e && ((g[e] = t), (n.locale = g[e] || g["zh-cn"])), n
          );
        }),
        (r.prototype.setPath = function (e) {
          return (this.config.path = e), this;
        }),
        (r.prototype.bind = function (e) {
          var t = this,
            n = h.find(t.el, ".vemojis"),
            r = h.find(t.el, ".vpreview"),
            i = h.find(t.el, ".vemoji-btn"),
            o = h.find(t.el, ".vpreview-btn"),
            d = h.find(t.el, ".veditor"),
            g = f.data;
          for (var m in g)
            g.hasOwnProperty(m) &&
              (function (e, t) {
                var r = h.create("i", { name: e, title: e });
                (r.innerHTML = t),
                  n.appendChild(r),
                  h.on("click", r, function (n) {
                    C(
                      d,
                      t.includes("<img")
                        ? "!" + e + "(" + t.match(/src="(.*?)"/)[1] + ")"
                        : t
                    ),
                      w(d);
                  });
              })(m, g[m]);
          (t.emoji = {
            show: function () {
              return (
                t.preview.hide(),
                h.attr(i, "v", 1),
                h.removeAttr(o, "v"),
                h.attr(n, "style", "display:block"),
                t.emoji
              );
            },
            hide: function () {
              return (
                h.removeAttr(i, "v"),
                h.attr(n, "style", "display:hide"),
                t.emoji
              );
            },
          }),
            (t.preview = {
              show: function () {
                return (
                  v.comment &&
                    (t.emoji.hide(),
                    h.attr(o, "v", 1),
                    h.removeAttr(i, "v"),
                    (r.innerHTML = v.comment),
                    h.attr(r, "style", "display:block"),
                    U()),
                  t.preview
                );
              },
              hide: function () {
                return (
                  h.removeAttr(o, "v"),
                  h.attr(r, "style", "display:none"),
                  t.preview
                );
              },
              empty: function () {
                return (r.innerHtml = ""), t.preview;
              },
            });
          var b = function (e) {
              var t = h.create("div");
              t.insertAdjacentHTML("afterbegin", e);
              var n = h.findAll(t, "*"),
                r = [
                  "INPUT",
                  "STYLE",
                  "SCRIPT",
                  "IFRAME",
                  "FRAME",
                  "AUDIO",
                  "VIDEO",
                  "EMBED",
                  "META",
                  "TITLE",
                  "LINK",
                ],
                i = function (e, t) {
                  var n = h.attr(e, t);
                  n && h.attr(e, t, n.replace(/(javascript|eval)/gi, ""));
                };
              return (
                h.each(n, function (e, t) {
                  1 === t.nodeType &&
                    (r.indexOf(t.nodeName) > -1 &&
                      ("INPUT" === t.nodeName &&
                      "checkbox" === h.attr(t, "type")
                        ? h.attr(t, "disabled", "disabled")
                        : h.remove(t)),
                    "A" === t.nodeName && i(t, "href"),
                    h.clearAttr(t));
                }),
                t.innerHTML
              );
            },
            w = function (e) {
              var t = e.value || "";
              (t = f.parse(t)), (e.value = t);
              var n = b(a(t));
              (v.comment = n), (r.innerHTML = n), t ? u(e) : u.destroy(e);
            };
          h.on("click", i, function (e) {
            h.attr(i, "v") ? t.emoji.hide() : t.emoji.show();
          }),
            h.on("click", o, function (e) {
              h.attr(o, "v") ? t.preview.hide() : t.preview.show();
            });
          for (
            var x = t.config.meta,
              O = {},
              S = { veditor: "comment" },
              A = 0,
              k = x.length;
            A < k;
            A++
          )
            S["v" + x[A]] = x[A];
          for (var E in S)
            S.hasOwnProperty(E) &&
              (function () {
                var e = S[E],
                  n = h.find(t.el, "." + E);
                (O[e] = n),
                  n &&
                    h.on("input change blur", n, function (t) {
                      "comment" === e
                        ? w(n)
                        : (v[e] = h
                            .escape(n.value.replace(/(^\s*)|(\s*$)/g, ""))
                            .substring(0, 20));
                    });
              })();
          var C = function (e, t) {
              if (document.selection) {
                e.focus();
                (document.selection.createRange().text = t), e.focus();
              } else if (e.selectionStart || "0" == e.selectionStart) {
                var n = e.selectionStart,
                  r = e.selectionEnd,
                  i = e.scrollTop;
                (e.value =
                  e.value.substring(0, n) +
                  t +
                  e.value.substring(r, e.value.length)),
                  e.focus(),
                  (e.selectionStart = n + t.length),
                  (e.selectionEnd = n + t.length),
                  (e.scrollTop = i);
              } else e.focus(), (e.value += t);
            },
            T = function (e) {
              var n = h.find(t.el, ".vh[rootid='" + e + "']"),
                r = h.find(n, ".vquote");
              return (
                r ||
                  ((r = h.create("div", "class", "vquote")), n.appendChild(r)),
                r
              );
            },
            j = function e() {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1,
                r = t.config.pageSize,
                i = Number(h.find(t.el, ".vnum").innerText);
              t.loading.show();
              var o = t.Q(t.config.path);
              o.limit(r),
                o.skip((n - 1) * r),
                o
                  .find()
                  .then(function (o) {
                    for (var s = o.length, a = [], u = 0; u < s; u++) {
                      var c = o[u];
                      a.push(c.id), N(c, h.find(t.el, ".vlist"), !0);
                    }
                    t.Q(t.config.path, a).then(function (e) {
                      for (
                        var t = (e && e.results) || [], n = 0;
                        n < t.length;
                        n++
                      ) {
                        var r = t[n];
                        N(r, T(r.get("rid")));
                      }
                    });
                    var l = h.find(t.el, ".vpage");
                    l.innerHTML =
                      r * n < i
                        ? '<button type="button" class="vmore vbtn">' +
                          t.locale.ctrl.more +
                          "</button>"
                        : "";
                    var f = h.find(l, ".vmore");
                    f &&
                      h.on("click", f, function (t) {
                        (l.innerHTML = ""), e(++n);
                      }),
                      t.loading.hide();
                  })
                  .catch(function (e) {
                    t.loading.hide().ErrorHandler(e, "query");
                  });
            };
          t.Q(t.config.path)
            .count()
            .then(function (e) {
              e > 0
                ? (h.attr(h.find(t.el, ".vinfo"), "style", "display:block;"),
                  (h.find(t.el, ".vcount").innerHTML =
                    '<span class="vnum">' +
                    e +
                    "</span> " +
                    t.locale.tips.comments),
                  j())
                : t.loading.hide();
            })
            .catch(function (e) {
              t.ErrorHandler(e, "count");
            });
          var N = function (e, n, r) {
              var i = h.create("div", { class: "vcard", id: e.id }),
                o = _.cdn + s(e.get("mail")) + _.params;
              if (e.get("mail").includes("@qq.com")) {
                var a = e.get("mail").replace(/@.*/, "");
                null !== a.match(/^\d+$/g) &&
                  (o =
                    "https://cors-anywhere.herokuapp.com/q1.qlogo.cn/g?b=qq&nk=" +
                    a +
                    "&s=100");
              }
              var u = _.hide
                  ? ""
                  : '<img class="vimg" src="' +
                    o +
                    '" crossorigin="Anonymous">',
                f = e.get("ua") || "",
                d = "";
              if (f) {
                f = l(f);
                d =
                  '<span class="vsys"><i class="fab fa-' +
                  (["xiaomi"].includes(f.browser.toLowerCase())
                    ? "mobile-alt fas"
                    : f.browser.toLowerCase()) +
                  '"></i>' +
                  f.browser +
                  " " +
                  f.version +
                  "</span>" +
                  " " +
                  ('<span class="vsys"><i class="fab fa-' +
                    (["mac os", "ios"].includes(f.os.toLowerCase())
                      ? "apple"
                      : f.os.toLowerCase()) +
                    '"></i>' +
                    f.os +
                    " " +
                    f.osVersion +
                    "</span>");
              }
              "*" === t.config.path &&
                (d =
                  '<a href="' +
                  e.get("url") +
                  '" class="vsys">' +
                  e.get("url") +
                  "</a>");
              var p = s(e.get("mail")) === t.config.master,
                v = t.config.friends.includes(s(e.get("mail").toLowerCase())),
                g = p
                  ? '<span class="vtag vmaster">博主</span>'
                  : v
                  ? '<span class="vtag vfriend">小伙伴</span>'
                  : '<span class="vtag vvisitor">访客</span>',
                m = "",
                y = e.get("link")
                  ? /^https?\:\/\//.test(e.get("link"))
                    ? e.get("link")
                    : "http://" + e.get("link")
                  : "";
              (m = y
                ? '<a class="vnick" rel="nofollow" href="' +
                  y +
                  '" target="_blank" >' +
                  e.get("nick") +
                  "</a>" +
                  g
                : '<span class="vnick">' + e.get("nick") + "</span>" + g),
                (i.innerHTML =
                  u +
                  '\n            <div class="vh" rootid=' +
                  (e.get("rid") || e.id) +
                  '>\n                <div class="vhead">' +
                  m +
                  " " +
                  d +
                  '</div>\n                <div class="vmeta">\n                    <span class="vtime">' +
                  c(e.get("insertedAt") || e.createdAt, t.locale) +
                  '</span>\n                    <span class="vat">' +
                  t.locale.ctrl.reply +
                  '</span>\n                </div>\n                <div class="vcontent">\n                    ' +
                  b(e.get("comment")) +
                  "\n                </div>\n            </div>");
              for (
                var w = h.find(i, ".vat"),
                  x = h.findAll(i, "a"),
                  O = 0,
                  S = x.length;
                O < S;
                O++
              ) {
                var A = x[O];
                A &&
                  -1 == (h.attr(A, "class") || "").indexOf("at") &&
                  h.attr(A, { target: "_blank", rel: "nofollow" });
              }
              var k = h.findAll(n, ".vcard");
              r ? n.appendChild(i) : n.insertBefore(i, k[0]);
              var E = h.find(i, ".vcontent");
              E && I(E), w && L(w, e), U();
            },
            U = function () {
              setTimeout(function () {
                try {
                  "undefined" != typeof MathJax &&
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub]),
                    "undefined" != typeof hljs &&
                      (h.each(h.findAll("pre code"), function (e, t) {
                        hljs.highlightBlock(t);
                      }),
                      h.each(h.findAll("code.hljs"), function (e, t) {
                        hljs.lineNumbersBlock(t);
                      }));
                } catch (e) {}
              }, 200);
            },
            I = function (e) {
              setTimeout(function () {
                e.offsetHeight > 180 &&
                  (e.classList.add("expand"),
                  h.on("click", e, function (t) {
                    h.attr(e, "class", "vcontent");
                  }));
              });
            },
            R = {},
            L = function (e, t) {
              h.on("click", e, function (e) {
                var n = "@" + h.escape(t.get("nick"));
                (R = {
                  at: h.escape(n) + " ",
                  rid: t.get("rid") || t.id,
                  pid: t.id,
                  rmail: t.get("mail"),
                }),
                  h.attr(O.comment, "placeholder", n),
                  O.comment.focus();
              });
            };
          !(function () {
            var e = y && y.ValineCache;
            if (e) {
              e = JSON.parse(e);
              var n = x;
              for (var r in n) {
                var i = n[r];
                (h.find(t.el, ".v" + i).value = h.unescape(e[i])),
                  (v[i] = e[i]);
              }
            }
          })();
          var P = function () {
              (v.comment = ""),
                (O.comment.value = ""),
                w(O.comment),
                h.attr(O.comment, "placeholder", t.placeholder),
                (R = {}),
                t.preview.empty().hide();
            },
            D = h.find(t.el, ".vsubmit"),
            M = function (e) {
              return h.attr(D, "disabled")
                ? void t.alert.show({
                    type: 0,
                    text: t.locale.tips.busy + 'ヾ(๑╹◡╹)ﾉ"',
                    ctxt: t.locale.ctrl.ok,
                  })
                : "" == v.comment
                ? void O.comment.focus()
                : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                    v.mail
                  )
                ? ((v.nick = v.nick || "Anonymous"),
                  void (t.notify || t.verify ? z(q) : q()))
                : void O.mail.focus();
            },
            F = function () {
              var e = new p.ACL();
              return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e;
            },
            q = function () {
              h.attr(D, "disabled", !0), t.loading.show(!0);
              var e = p.Object.extend(t.config.clazzName || "Comment"),
                n = new e();
              if (
                ((v.url = decodeURI(t.config.path)),
                (v.insertedAt = new Date()),
                R.rid)
              ) {
                var r = R.pid || R.rid;
                n.set("rid", R.rid),
                  n.set("pid", r),
                  (v.comment = v.comment.replace(
                    "<p>",
                    '<p><a class="at" href="#' + r + '">' + R.at + "</a> , "
                  ));
              }
              for (var i in v)
                if (v.hasOwnProperty(i)) {
                  var o = v[i];
                  n.set(i, o);
                }
              n.setACL(F()),
                n
                  .save()
                  .then(function (e) {
                    "Anonymous" != v.nick &&
                      y &&
                      y.setItem(
                        "ValineCache",
                        JSON.stringify({
                          nick: v.nick,
                          link: v.link,
                          mail: v.mail,
                        })
                      );
                    var n = h.find(t.el, ".vnum"),
                      r = 1;
                    try {
                      if (R.rid) {
                        var i =
                          h.find(t.el, '.vquote[rid="' + R.rid + '"]') ||
                          T(R.rid);
                        N(e, i, !0);
                      } else n ? ((r = Number(n.innerText) + 1), (n.innerText = r)) : (h.find(t.el, ".vcount").innerHTML = '<span class="num">1</span> ' + t.locale.tips.comments), N(e, h.find(t.el, ".vlist")), t.config.pageSize++;
                      v.mail && $({ username: v.nick, mail: v.mail }),
                        R.at &&
                          R.rmail &&
                          t.notify &&
                          B({ username: R.at.replace("@", ""), mail: R.rmail }),
                        h.removeAttr(D, "disabled"),
                        t.loading.hide(),
                        P();
                    } catch (e) {
                      t.ErrorHandler(e, "save");
                    }
                  })
                  .catch(function (e) {
                    t.ErrorHandler(e, "commitEvt");
                  });
            },
            z = function e(n) {
              var r = Math.floor(10 * Math.random() + 1),
                i = Math.floor(10 * Math.random() + 1),
                o = Math.floor(10 * Math.random() + 1),
                s = ["+", "-", "x"],
                a = s[Math.floor(3 * Math.random())],
                u = s[Math.floor(3 * Math.random())],
                c = "" + r + a + i + u + o,
                l = c + " = <input class='vcode vinput' >";
              t.alert.show({
                type: 1,
                text: l,
                ctxt: t.locale.ctrl.cancel,
                otxt: t.locale.ctrl.ok,
                cb: function () {
                  var r = +h.find(t.el, ".vcode").value;
                  new Function("return " + c.replace(/x/g, "*"))() === r
                    ? n && n()
                    : t.alert.show({
                        type: 1,
                        text: "(T＿T)" + t.locale.tips.again,
                        ctxt: t.locale.ctrl.cancel,
                        otxt: t.locale.ctrl.try,
                        cb: function () {
                          e(n);
                        },
                      });
                },
              });
            },
            $ = function (e) {
              var t = new p.User();
              return (
                t.setUsername(e.username),
                t.setPassword(e.mail),
                t.setEmail(e.mail),
                t.setACL(F()),
                t.signUp()
              );
            },
            B = function e(n) {
              p.User.requestPasswordReset(n.mail)
                .then(function (e) {})
                .catch(function (r) {
                  1 == r.code
                    ? t.alert.show({
                        type: 0,
                        text:
                          "ヾ(ｏ･ω･)ﾉ At太频繁啦，提醒功能暂时宕机。<br>" +
                          r.error,
                        ctxt: t.locale.ctrl.ok,
                      })
                    : $(n)
                        .then(function (t) {
                          e(n);
                        })
                        .catch(function (e) {});
                });
            };
          h.on("click", D, M),
            h.on("keydown", document, function (e) {
              e = event || e;
              var t = e.keyCode || e.which || e.charCode;
              ((e.ctrlKey || e.metaKey) && 13 === t && M(), 9 === t) &&
                "veditor" == (document.activeElement.id || "") &&
                (e.preventDefault(), C(d, "    "));
            }),
            h.on("paste", document, function (e) {
              var t =
                  "clipboardData" in e
                    ? e.clipboardData
                    : (e.originalEvent && e.originalEvent.clipboardData) ||
                      window.clipboardData,
                n = t && t.items,
                r = [];
              if (n && n.length > 0) {
                for (var i = 0; i < n.length; i++)
                  if (-1 !== n[i].type.indexOf("image")) {
                    r.push(n[i].getAsFile());
                    break;
                  }
                if (r.length) {
                  for (var o in r)
                    !(function (e) {
                      var t = r[e],
                        n = "![Uploading " + t.name + "]()";
                      C(d, n),
                        t &&
                          W(t, function (e, r) {
                            !e &&
                              r &&
                              (d.value = d.value.replace(
                                n,
                                "\r\n![" + t.name + "](" + r.data + ")"
                              ));
                          });
                    })(o);
                }
              }
            });
          var W = function (e, t) {
            var n = new FormData();
            n.append("file", e);
            var r = window.XMLHttpRequest
              ? new XMLHttpRequest()
              : new ActiveXObject("Microsoft.XMLHTTP");
            (r.onreadystatechange = function () {
              if (4 == r.readyState && 200 == r.status)
                try {
                  var e = JSON.parse(r.responseText);
                  t && t(null, e);
                } catch (e) {
                  t && t(e);
                }
              else t && t(r.status);
            }),
              (r.onerror = function (e) {}),
              r.open("POST", "https://imgkr.com/api/files/upload", !0),
              r.send(n);
          };
        }),
        (e.exports = i),
        (e.exports.default = i);
    },
    function (e, t, n) {
      "use strict";
      // 图床仓库
      function r(e) {
        return (
          '<img src="https://cdn.jsdelivr.net/gh/blogimg/emotion/' + e + '" />'
        );
      }
      // 自定义链接
      function r_c(e) {
        return '<img src="' + e + '" />';
      }
      // 表情
      var i = {
          "[custom1]": r_c(
            "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/face_酸了.png"
          ),
          "[custom_1]": r("custom/1.webp"),
          "[custom_2]": r("custom/2.webp"),
          "[custom_3]": r("custom/3.jpg"),
          "[custom_4]": r("custom/4.jpg"),
          "[custom_5]": r("custom/5.gif"),
          "[custom_6]": r("custom/6.gif"),
          "[custom_7]": r("custom/7.webp"),
          "[custom_8]": r("custom/8.webp"),
          "[custom_9]": r("custom/9.webp"),
          "[custom_10]": r("custom/10.webp"),
          "[custom_11]": r("custom/11.webp"),
          "[custom_12]": r("custom/12.webp"),
          "[custom_13]": r("custom/13.webp"),
          "[custom_15]": r("custom/15.webp"),
          "[custom_16]": r("custom/16.webp"),
          "[custom_17]": r("custom/17.webp"),
          "[custom_18]": r("custom/18.jpg"),
          "[custom_19]": r("custom/19.webp"),
          "[custom_20]": r("custom/20.webp"),
          "[custom_21]": r("custom/21.webp"),
          "[custom_22]": r("custom/22.webp"),
          "[custom_23]": r("custom/23.webp"),
          "[custom_24]": r("custom/24.webp"),
          "[custom_25]": r("custom/25.jpg"),
          "[custom_26]": r("custom/26.webp"),
          "[custom_27]": r("custom/27.webp"),
          "[custom_28]": r("custom/28.webp"),
          "[custom_29]": r("custom/29.webp"),
          "[custom_30]": r("custom/30.gif"),
          "[custom_31]": r("custom/31.webp"),
          "[2233娘_吃惊]": r("bilibili/2233娘_吃惊.png"),
          "[2233娘_大哭]": r("bilibili/2233娘_大哭.png"),
          "[2233娘_大笑]": r("bilibili/2233娘_大笑.png"),
          "[2233娘_第一]": r("bilibili/2233娘_第一.png"),
          "[2233娘_汗]": r("bilibili/2233娘_汗.png"),
          "[2233娘_喝水]": r("bilibili/2233娘_喝水.png"),
          "[2233娘_困惑]": r("bilibili/2233娘_困惑.png"),
          "[2233娘_卖萌]": r("bilibili/2233娘_卖萌.png"),
          "[2233娘_怒]": r("bilibili/2233娘_怒.png"),
          "[2233娘_吐魂]": r("bilibili/2233娘_吐魂.png"),
          "[2233娘_委屈]": r("bilibili/2233娘_委屈.png"),
          "[2233娘_无言]": r("bilibili/2233娘_无言.png"),
          "[2233娘_耶]": r("bilibili/2233娘_耶.png"),
          "[2233娘_疑问]": r("bilibili/2233娘_疑问.png"),
          "[2233娘_郁闷]": r("bilibili/2233娘_郁闷.png"),
          "[tv_doge]": r("bilibili/tv_doge.png"),
          "[tv_白眼]": r("bilibili/tv_白眼.png"),
          "[tv_鄙视]": r("bilibili/tv_鄙视.png"),
          "[tv_闭嘴]": r("bilibili/tv_闭嘴.png"),
          "[tv_馋]": r("bilibili/tv_馋.png"),
          "[tv_打脸]": r("bilibili/tv_打脸.png"),
          "[tv_大哭]": r("bilibili/tv_大哭.png"),
          "[tv_大佬]": r("bilibili/tv_大佬.png"),
          "[tv_呆]": r("bilibili/tv_呆.png"),
          "[tv_点赞]": r("bilibili/tv_点赞.png"),
          "[tv_发财]": r("bilibili/tv_发财.png"),
          "[tv_发怒]": r("bilibili/tv_发怒.png"),
          "[tv_尴尬]": r("bilibili/tv_尴尬.png"),
          "[tv_鼓掌]": r("bilibili/tv_鼓掌.png"),
          "[tv_鬼脸]": r("bilibili/tv_鬼脸.png"),
          "[tv_害羞]": r("bilibili/tv_害羞.png"),
          "[tv_黑人问号]": r("bilibili/tv_黑人问号.png"),
          "[tv_坏笑]": r("bilibili/tv_坏笑.png"),
          "[tv_惊吓]": r("bilibili/tv_惊吓.png"),
          "[tv_可爱]": r("bilibili/tv_可爱.png"),
          "[tv_抠鼻]": r("bilibili/tv_抠鼻.png"),
          "[tv_困]": r("bilibili/tv_困.png"),
          "[tv_冷漠]": r("bilibili/tv_冷漠.png"),
          "[tv_流鼻血]": r("bilibili/tv_流鼻血.png"),
          "[tv_流汗]": r("bilibili/tv_流汗.png"),
          "[tv_流泪]": r("bilibili/tv_流泪.png"),
          "[tv_腼腆]": r("bilibili/tv_腼腆.png"),
          "[tv_目瞪口呆]": r("bilibili/tv_目瞪口呆.png"),
          "[tv_难过]": r("bilibili/tv_难过.png"),
          "[tv_呕吐]": r("bilibili/tv_呕吐.png"),
          "[tv_亲亲]": r("bilibili/tv_亲亲.png"),
          "[tv_色]": r("bilibili/tv_色.png"),
          "[tv_生病]": r("bilibili/tv_生病.png"),
          "[tv_生气]": r("bilibili/tv_生气.png"),
          "[tv_睡着]": r("bilibili/tv_睡着.png"),
          "[tv_思考]": r("bilibili/tv_思考.png"),
          "[tv_调侃]": r("bilibili/tv_调侃.png"),
          "[tv_调皮]": r("bilibili/tv_调皮.png"),
          "[tv_偷笑]": r("bilibili/tv_偷笑.png"),
          "[tv_吐血]": r("bilibili/tv_吐血.png"),
          "[tv_微笑]": r("bilibili/tv_微笑.png"),
          "[tv_委屈]": r("bilibili/tv_委屈.png"),
          "[tv_无奈]": r("bilibili/tv_无奈.png"),
          "[tv_笑哭]": r("bilibili/tv_笑哭.png"),
          "[tv_斜眼笑]": r("bilibili/tv_斜眼笑.png"),
          "[tv_疑问]": r("bilibili/tv_疑问.png"),
          "[tv_晕]": r("bilibili/tv_晕.png"),
          "[tv_再见]": r("bilibili/tv_再见.png"),
          "[tv_皱眉]": r("bilibili/tv_皱眉.png"),
          "[tv_抓狂]": r("bilibili/tv_抓狂.png"),
          "[aru_1]": r("aru/1.png"),
          "[aru_2]": r("aru/2.png"),
          "[aru_3]": r("aru/3.png"),
          "[aru_4]": r("aru/4.png"),
          "[aru_5]": r("aru/5.png"),
          "[aru_6]": r("aru/6.png"),
          "[aru_7]": r("aru/7.png"),
          "[aru_8]": r("aru/8.png"),
          "[aru_9]": r("aru/9.png"),
          "[aru_10]": r("aru/10.png"),
          "[aru_11]": r("aru/11.png"),
          "[aru_12]": r("aru/12.png"),
          "[aru_13]": r("aru/13.png"),
          "[aru_14]": r("aru/14.png"),
          "[aru_15]": r("aru/15.png"),
          "[aru_16]": r("aru/16.png"),
          "[aru_17]": r("aru/17.png"),
          "[aru_18]": r("aru/18.png"),
          "[aru_19]": r("aru/19.png"),
          "[aru_20]": r("aru/20.png"),
          "[aru_21]": r("aru/21.png"),
          "[aru_22]": r("aru/22.png"),
          "[aru_23]": r("aru/23.png"),
          "[aru_24]": r("aru/24.png"),
          "[aru_25]": r("aru/25.png"),
          "[aru_26]": r("aru/26.png"),
          "[aru_27]": r("aru/27.png"),
          "[aru_28]": r("aru/28.png"),
          "[aru_29]": r("aru/29.png"),
          "[aru_30]": r("aru/30.png"),
          "[aru_31]": r("aru/31.png"),
          "[aru_32]": r("aru/32.png"),
          "[aru_33]": r("aru/33.png"),
          "[aru_34]": r("aru/34.png"),
          "[aru_35]": r("aru/35.png"),
          "[aru_36]": r("aru/36.png"),
          "[aru_37]": r("aru/37.png"),
          "[aru_38]": r("aru/38.png"),
          "[aru_39]": r("aru/39.png"),
          "[aru_40]": r("aru/40.png"),
          "[aru_41]": r("aru/41.png"),
          "[aru_42]": r("aru/42.png"),
          "[aru_43]": r("aru/43.png"),
          "[aru_44]": r("aru/44.png"),
          "[aru_45]": r("aru/45.png"),
          "[aru_46]": r("aru/46.png"),
          "[aru_47]": r("aru/47.png"),
          "[aru_48]": r("aru/48.png"),
          "[aru_49]": r("aru/49.png"),
          "[aru_50]": r("aru/50.png"),
          "[aru_51]": r("aru/51.png"),
          "[aru_52]": r("aru/52.png"),
          "[aru_53]": r("aru/53.png"),
          "[aru_54]": r("aru/54.png"),
          "[aru_55]": r("aru/55.png"),
          "[aru_56]": r("aru/56.png"),
          "[aru_57]": r("aru/57.png"),
          "[aru_58]": r("aru/58.png"),
          "[aru_59]": r("aru/59.png"),
          "[aru_60]": r("aru/60.png"),
          "[aru_61]": r("aru/61.png"),
          "[aru_62]": r("aru/62.png"),
          "[aru_63]": r("aru/63.png"),
          "[aru_64]": r("aru/64.png"),
          "[aru_65]": r("aru/65.png"),
          "[aru_66]": r("aru/66.png"),
          "[aru_67]": r("aru/67.png"),
          "[aru_68]": r("aru/68.png"),
          "[aru_69]": r("aru/69.png"),
          "[aru_70]": r("aru/70.png"),
          "[aru_71]": r("aru/71.png"),
          "[aru_72]": r("aru/72.png"),
          "[aru_73]": r("aru/73.png"),
          "[aru_74]": r("aru/74.png"),
          "[aru_75]": r("aru/75.png"),
          "[aru_76]": r("aru/76.png"),
          "[aru_77]": r("aru/77.png"),
          "[aru_78]": r("aru/78.png"),
          "[aru_79]": r("aru/79.png"),
          "[aru_80]": r("aru/80.png"),
          "[aru_81]": r("aru/81.png"),
          "[aru_82]": r("aru/82.png"),
          "[aru_83]": r("aru/83.png"),
          "[aru_84]": r("aru/84.png"),
          "[aru_85]": r("aru/85.png"),
          "[aru_86]": r("aru/86.png"),
          "[aru_87]": r("aru/87.png"),
          "[aru_88]": r("aru/88.png"),
          "[aru_89]": r("aru/89.png"),
          "[aru_90]": r("aru/90.png"),
          "[aru_91]": r("aru/91.png"),
          "[aru_92]": r("aru/92.png"),
          "[aru_93]": r("aru/93.png"),
          "[aru_94]": r("aru/94.png"),
          "[aru_95]": r("aru/95.png"),
          "[aru_96]": r("aru/96.png"),
          "[aru_97]": r("aru/97.png"),
          "[aru_98]": r("aru/98.png"),
          "[aru_99]": r("aru/99.png"),
          "[aru_100]": r("aru/100.png"),
          "[aru_101]": r("aru/101.png"),
          "[aru_102]": r("aru/102.png"),
          "[aru_103]": r("aru/103.png"),
          "[aru_104]": r("aru/104.png"),
          "[aru_105]": r("aru/105.png"),
          "[aru_106]": r("aru/106.png"),
          "[aru_107]": r("aru/107.png"),
          "[aru_108]": r("aru/108.png"),
          "[aru_109]": r("aru/109.png"),
          "[aru_110]": r("aru/110.png"),
          "[aru_111]": r("aru/111.png"),
          "[aru_112]": r("aru/112.png"),
          "[aru_113]": r("aru/113.png"),
          "[aru_114]": r("aru/114.png"),
          "[aru_115]": r("aru/115.png"),
          "[aru_116]": r("aru/116.png"),
          "[aru_117]": r("aru/117.png"),
          "[aru_118]": r("aru/118.png"),
          "[aru_119]": r("aru/119.png"),
          "[aru_120]": r("aru/120.png"),
          "[aru_121]": r("aru/121.png"),
          "[aru_122]": r("aru/122.png"),
          "[aru_123]": r("aru/123.png"),
          "[aru_124]": r("aru/124.png"),
          "[aru_125]": r("aru/125.png"),
          "[aru_126]": r("aru/126.png"),
          "[aru_127]": r("aru/127.png"),
          "[aru_128]": r("aru/128.png"),
          "[aru_129]": r("aru/129.png"),
          "[aru_130]": r("aru/130.png"),
          "[aru_131]": r("aru/131.png"),
          "[aru_132]": r("aru/132.png"),
          "[aru_133]": r("aru/133.png"),
          "[aru_134]": r("aru/134.png"),
          "[aru_135]": r("aru/135.png"),
          "[aru_136]": r("aru/136.png"),
          "[aru_137]": r("aru/137.png"),
          "[aru_138]": r("aru/138.png"),
          "[aru_139]": r("aru/139.png"),
          "[aru_140]": r("aru/140.png"),
          "[aru_141]": r("aru/141.png"),
          "[aru_142]": r("aru/142.png"),
          "[aru_143]": r("aru/143.png"),
          "[aru_144]": r("aru/144.png"),
          "[aru_145]": r("aru/145.png"),
          "[aru_146]": r("aru/146.png"),
          "[aru_147]": r("aru/147.png"),
          "[aru_148]": r("aru/148.png"),
          "[aru_149]": r("aru/149.png"),
          "[aru_150]": r("aru/150.png"),
          "[aru_151]": r("aru/151.png"),
          "[aru_152]": r("aru/152.png"),
          "[aru_153]": r("aru/153.png"),
          "[aru_154]": r("aru/154.png"),
          "[aru_155]": r("aru/155.png"),
          "[aru_156]": r("aru/156.png"),
          "[aru_157]": r("aru/157.png"),
          "[aru_158]": r("aru/158.png"),
          "[aru_159]": r("aru/159.png"),
          "[aru_160]": r("aru/160.png"),
          "[aru_161]": r("aru/161.png"),
          "[aru_162]": r("aru/162.png"),
          "[aru_163]": r("aru/163.png"),
          "[aru_164]": r("aru/164.png"),
          "[aru_165]": r("aru/165.png"),
          "[aru_166]": r("aru/166.png"),
          "[aru_167]": r("aru/167.png"),
          "[aru_168]": r("aru/168.png"),
          "[aru_169]": r("aru/169.png"),
          "[aru_170]": r("aru/170.png"),
          "[aru_171]": r("aru/171.png"),
          "[aru_172]": r("aru/172.png"),
          "[aru_173]": r("aru/173.png"),
          "[aru_174]": r("aru/174.png"),
          "[aru_175]": r("aru/175.png"),
          "[aru_176]": r("aru/176.png"),
          "[aru_177]": r("aru/177.png"),
          "[aru_178]": r("aru/178.png"),
          "[aru_179]": r("aru/179.png"),
          "[aru_180]": r("aru/180.png"),
          "[aru_181]": r("aru/181.png"),
          "[aru_182]": r("aru/182.png"),
          "[aru_183]": r("aru/183.png"),
          "[aru_184]": r("aru/184.png"),
          "[aru_185]": r("aru/185.png"),
          "[aru_186]": r("aru/186.png"),
          "[aru_187]": r("aru/187.png"),
          "[aru_188]": r("aru/188.png"),
          "[aru_189]": r("aru/189.png"),
          "[aru_190]": r("aru/190.png"),
          "[aru_191]": r("aru/191.png"),
          "[aru_192]": r("aru/192.png"),
          "[aru_193]": r("aru/193.png"),
          "[aru_194]": r("aru/194.png"),
          "[aru_195]": r("aru/195.png"),
          "[aru_196]": r("aru/196.png"),
          "[aru_197]": r("aru/197.png"),
          "[aru_198]": r("aru/198.png"),
          "[aru_199]": r("aru/199.png"),
          "[aru_200]": r("aru/200.png"),
          "[aru_201]": r("aru/201.png"),
          "[aru_202]": r("aru/202.png"),
          "[aru_203]": r("aru/203.png"),
          "[aru_204]": r("aru/204.png"),
          "[aru_205]": r("aru/205.png"),
          "[aru_206]": r("aru/206.png"),
          "[aru_207]": r("aru/207.png"),
          "[aru_208]": r("aru/208.png"),
          "[aru_209]": r("aru/209.png"),
          "[aru_210]": r("aru/210.png"),
          "[aru_211]": r("aru/211.png"),
          "[aru_212]": r("aru/212.png"),
          "[aru_213]": r("aru/213.png"),
          "[aru_214]": r("aru/214.png"),
          "[aru_215]": r("aru/215.png"),
          "[aru_216]": r("aru/216.png"),
          "[aru_217]": r("aru/217.png"),
          "[aru_218]": r("aru/218.png"),
          "[aru_219]": r("aru/219.png"),
          "[aru_220]": r("aru/220.png"),
          "[aru_221]": r("aru/221.png"),
          "[aru_222]": r("aru/222.png"),
          "[aru_223]": r("aru/223.png"),
          "[aru_224]": r("aru/224.png"),
          "[aru_225]": r("aru/225.png"),
          "[aru_226]": r("aru/226.png"),
          "[aru_227]": r("aru/227.png"),
          "[aru_228]": r("aru/228.png"),
          "[aru_229]": r("aru/229.png"),
          "[aru_230]": r("aru/230.png"),
          "[aru_231]": r("aru/231.png"),
          "[aru_232]": r("aru/232.png"),
          "[aru_233]": r("aru/233.png"),
          "[aru_234]": r("aru/234.png"),
          "[aru_235]": r("aru/235.png"),
          "[aru_236]": r("aru/236.png"),
          "[aru_237]": r("aru/237.png"),
          "[aru_238]": r("aru/238.png"),
          "[aru_239]": r("aru/239.png"),
          "[aru_240]": r("aru/240.png"),
          "[aru_241]": r("aru/241.png"),
          "[aru_242]": r("aru/242.png"),
          "[aru_243]": r("aru/243.png"),
          "[aru_244]": r("aru/244.png"),
          "[aru_245]": r("aru/245.png"),
          "[aru_246]": r("aru/246.png"),
          "[aru_247]": r("aru/247.png"),
          "[aru_248]": r("aru/248.png"),
          "[aru_249]": r("aru/249.png"),
          "[aru_250]": r("aru/250.png"),
          "[aru_251]": r("aru/251.png"),
          "[aru_252]": r("aru/252.png"),
          "[aru_253]": r("aru/253.png"),
          "[aru_254]": r("aru/254.png"),
          "[aru_255]": r("aru/255.png"),
          "[aru_256]": r("aru/256.png"),
          "[aru_257]": r("aru/257.png"),
          "[aru_258]": r("aru/258.png"),
          "[aru_259]": r("aru/259.png"),
          "[aru_260]": r("aru/260.png"),
          "[aru_261]": r("aru/261.png"),
          "[aru_262]": r("aru/262.png"),
          "[aru_263]": r("aru/263.png"),
          "[aru_264]": r("aru/264.png"),
          "[aru_265]": r("aru/265.png"),
          "[aru_266]": r("aru/266.png"),
          "[aru_267]": r("aru/267.png"),
          "[aru_268]": r("aru/268.png"),
          "[aru_269]": r("aru/269.png"),
          "[aru_270]": r("aru/270.png"),
          "[aru_271]": r("aru/271.png"),
          "[aru_272]": r("aru/272.png"),
          "[aru_273]": r("aru/273.png"),
          "[aru_274]": r("aru/274.png"),
          "[aru_275]": r("aru/275.png"),
          "[aru_276]": r("aru/276.png"),
          "[aru_277]": r("aru/277.png"),
          "[aru_278]": r("aru/278.png"),
          "[aru_279]": r("aru/279.png"),
          "[aru_280]": r("aru/280.png"),
          "[aru_281]": r("aru/281.png"),
          "[aru_282]": r("aru/282.png"),
          "[aru_283]": r("aru/283.png"),
          "[aru_284]": r("aru/284.png"),
          "[aru_285]": r("aru/285.png"),
          "[aru_286]": r("aru/286.png"),
          "[aru_287]": r("aru/287.png"),
          "[aru_288]": r("aru/288.png"),
          "[aru_289]": r("aru/289.png"),
          "[aru_290]": r("aru/290.png"),
          "[aru_291]": r("aru/291.png"),
          "[aru_292]": r("aru/292.png"),
          "[aru_293]": r("aru/293.png"),
          "[aru_294]": r("aru/294.png"),
          "[aru_295]": r("aru/295.png"),
          "[aru_296]": r("aru/296.png"),
          "[aru_297]": r("aru/297.png"),
          "[aru_298]": r("aru/298.png"),
          "[aru_299]": r("aru/299.png"),
          "[aru_300]": r("aru/300.png"),
          "[aru_301]": r("aru/301.png"),
          "[aru_302]": r("aru/302.png"),
          "[aru_303]": r("aru/303.png"),
          "[aru_304]": r("aru/304.png"),
          "[aru_305]": r("aru/305.png"),
          "[aru_306]": r("aru/306.png"),
          "[paopao_1]": r("paopao/1.png"),
          "[paopao_2]": r("paopao/2.png"),
          "[paopao_3]": r("paopao/3.png"),
          "[paopao_4]": r("paopao/4.png"),
          "[paopao_5]": r("paopao/5.png"),
          "[paopao_6]": r("paopao/6.png"),
          "[paopao_7]": r("paopao/7.png"),
          "[paopao_8]": r("paopao/8.png"),
          "[paopao_9]": r("paopao/9.png"),
          "[paopao_10]": r("paopao/10.png"),
          "[paopao_11]": r("paopao/11.png"),
          "[paopao_12]": r("paopao/12.png"),
          "[paopao_13]": r("paopao/13.png"),
          "[paopao_14]": r("paopao/14.png"),
          "[paopao_15]": r("paopao/15.png"),
          "[paopao_16]": r("paopao/16.png"),
          "[paopao_17]": r("paopao/17.png"),
          "[paopao_18]": r("paopao/18.png"),
          "[paopao_19]": r("paopao/19.png"),
          "[paopao_20]": r("paopao/20.png"),
          "[paopao_21]": r("paopao/21.png"),
          "[paopao_22]": r("paopao/22.png"),
          "[paopao_23]": r("paopao/23.png"),
          "[paopao_24]": r("paopao/24.png"),
          "[paopao_25]": r("paopao/25.png"),
          "[paopao_26]": r("paopao/26.png"),
          "[paopao_27]": r("paopao/27.png"),
          "[paopao_28]": r("paopao/28.png"),
          "[paopao_29]": r("paopao/29.png"),
          "[paopao_30]": r("paopao/30.png"),
          "[paopao_31]": r("paopao/31.png"),
          "[paopao_32]": r("paopao/32.png"),
          "[paopao_33]": r("paopao/33.png"),
          "[paopao_34]": r("paopao/34.png"),
          "[paopao_35]": r("paopao/35.png"),
          "[paopao_36]": r("paopao/36.png"),
          "[paopao_37]": r("paopao/37.png"),
          "[paopao_38]": r("paopao/38.png"),
          "[paopao_39]": r("paopao/39.png"),
          "[paopao_40]": r("paopao/40.png"),
          "[paopao_41]": r("paopao/41.png"),
          "[paopao_42]": r("paopao/42.png"),
          "[paopao_43]": r("paopao/43.png"),
          "[paopao_44]": r("paopao/44.png"),
          "[paopao_45]": r("paopao/45.png"),
          "[paopao_46]": r("paopao/46.png"),
          "[paopao_47]": r("paopao/47.png"),
          "[paopao_48]": r("paopao/48.png"),
          "[paopao_49]": r("paopao/49.png"),
          "[paopao_50]": r("paopao/50.png"),
          "[paopao_51]": r("paopao/51.png"),
          "[paopao_52]": r("paopao/52.png"),
          "[paopao_53]": r("paopao/53.png"),
          "[paopao_54]": r("paopao/54.png"),
          "[paopao_55]": r("paopao/55.png"),
          "[paopao_56]": r("paopao/56.png"),
          "[paopao_57]": r("paopao/57.png"),
          "[paopao_58]": r("paopao/58.png"),
          "[paopao_59]": r("paopao/59.png"),
          "[paopao_60]": r("paopao/60.png"),
          "[paopao_61]": r("paopao/61.png"),
          "[paopao_62]": r("paopao/62.png"),
          "[paopao_63]": r("paopao/63.png"),
          "[paopao_64]": r("paopao/64.png"),
          "[paopao_65]": r("paopao/65.png"),
          "[paopao_66]": r("paopao/66.png"),
          "[paopao_67]": r("paopao/67.png"),
          "[paopao_68]": r("paopao/68.png"),
          "[paopao_69]": r("paopao/69.png"),
          "[paopao_70]": r("paopao/70.png"),
          "[paopao_71]": r("paopao/71.png"),
          "[paopao_72]": r("paopao/72.png"),
          "[paopao_73]": r("paopao/73.png"),
          "[paopao_74]": r("paopao/74.png"),
          "[paopao_75]": r("paopao/75.png"),
          "[paopao_76]": r("paopao/76.png"),
          "[paopao_77]": r("paopao/77.png"),
          "[paopao_78]": r("paopao/78.png"),
          "[paopao_79]": r("paopao/79.png"),
          "[paopao_80]": r("paopao/80.png"),
          "[paopao_81]": r("paopao/81.png"),
          "[paopao_82]": r("paopao/82.png"),
          "[paopao_83]": r("paopao/83.png"),
          "[paopao_84]": r("paopao/84.png"),
        },
        o = {
          data: Object.assign(i, n(13)),
          parse: function (e) {
            return String(e).replace(/:(.+?):/g, function (e, t) {
              return o.data[t] || e;
            });
          },
        };
      e.exports = o;
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        var t = this,
          n = {
            Trident: e.indexOf("Trident") > -1 || e.indexOf("NET CLR") > -1,
            Presto: e.indexOf("Presto") > -1,
            WebKit: e.indexOf("AppleWebKit") > -1,
            Gecko: e.indexOf("Gecko/") > -1,
            Safari: e.indexOf("Safari") > -1,
            Chrome: e.indexOf("Chrome") > -1 || e.indexOf("CriOS") > -1,
            IE: e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1,
            Edge: e.indexOf("Edge") > -1,
            Firefox: e.indexOf("Firefox") > -1 || e.indexOf("FxiOS") > -1,
            "Firefox Focus": e.indexOf("Focus") > -1,
            Chromium: e.indexOf("Chromium") > -1,
            Opera: e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1,
            Vivaldi: e.indexOf("Vivaldi") > -1,
            Yandex: e.indexOf("YaBrowser") > -1,
            Kindle: e.indexOf("Kindle") > -1 || e.indexOf("Silk/") > -1,
            360: e.indexOf("360EE") > -1 || e.indexOf("360SE") > -1,
            UC: e.indexOf("UC") > -1 || e.indexOf(" UBrowser") > -1,
            QQBrowser: e.indexOf("QQBrowser") > -1,
            QQ: e.indexOf("QQ/") > -1,
            Baidu: e.indexOf("Baidu") > -1 || e.indexOf("BIDUBrowser") > -1,
            Maxthon: e.indexOf("Maxthon") > -1,
            Sogou: e.indexOf("MetaSr") > -1 || e.indexOf("Sogou") > -1,
            LBBROWSER: e.indexOf("LBBROWSER") > -1,
            "2345Explorer": e.indexOf("2345Explorer") > -1,
            TheWorld: e.indexOf("TheWorld") > -1,
            XiaoMi: e.indexOf("MiuiBrowser") > -1,
            Quark: e.indexOf("Quark") > -1,
            Qiyu: e.indexOf("Qiyu") > -1,
            Wechat: e.indexOf("MicroMessenger") > -1,
            Taobao: e.indexOf("AliApp(TB") > -1,
            Alipay: e.indexOf("AliApp(AP") > -1,
            Weibo: e.indexOf("Weibo") > -1,
            Douban: e.indexOf("com.douban.frodo") > -1,
            Suning: e.indexOf("SNEBUY-APP") > -1,
            iQiYi: e.indexOf("IqiyiApp") > -1,
            Windows: e.indexOf("Windows") > -1,
            Linux: e.indexOf("Linux") > -1 || e.indexOf("X11") > -1,
            "Mac OS": e.indexOf("Macintosh") > -1,
            Android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
            Ubuntu: e.indexOf("Ubuntu") > -1,
            FreeBSD: e.indexOf("FreeBSD") > -1,
            Debian: e.indexOf("Debian") > -1,
            "Windows Phone":
              e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1,
            BlackBerry: e.indexOf("BlackBerry") > -1 || e.indexOf("RIM") > -1,
            MeeGo: e.indexOf("MeeGo") > -1,
            Symbian: e.indexOf("Symbian") > -1,
            iOS: e.indexOf("like Mac OS X") > -1,
            "Chrome OS": e.indexOf("CrOS") > -1,
            WebOS: e.indexOf("hpwOS") > -1,
            Mobile:
              e.indexOf("Mobi") > -1 ||
              e.indexOf("iPh") > -1 ||
              e.indexOf("480") > -1,
            Tablet:
              e.indexOf("Tablet") > -1 ||
              e.indexOf("Pad") > -1 ||
              e.indexOf("Nexus 7") > -1,
          };
        n.Mobile && (n.Mobile = !(e.indexOf("iPad") > -1));
        var r = {
          engine: ["WebKit", "Trident", "Gecko", "Presto"],
          browser: [
            "Safari",
            "Chrome",
            "Edge",
            "IE",
            "Firefox",
            "Firefox Focus",
            "Chromium",
            "Opera",
            "Vivaldi",
            "Yandex",
            "Kindle",
            "360",
            "UC",
            "QQBrowser",
            "QQ",
            "Baidu",
            "Maxthon",
            "Sogou",
            "LBBROWSER",
            "2345Explorer",
            "TheWorld",
            "XiaoMi",
            "Quark",
            "Qiyu",
            "Wechat",
            "Taobao",
            "Alipay",
            "Weibo",
            "Douban",
            "Suning",
            "iQiYi",
          ],
          os: [
            "Windows",
            "Linux",
            "Mac OS",
            "Android",
            "Ubuntu",
            "FreeBSD",
            "Debian",
            "iOS",
            "Windows Phone",
            "BlackBerry",
            "MeeGo",
            "Symbian",
            "Chrome OS",
            "WebOS",
          ],
          device: ["Mobile", "Tablet"],
        };
        t.device = "PC";
        for (var i in r)
          for (var o = 0; o < r[i].length; o++) {
            var s = r[i][o];
            n[s] && (t[i] = s);
          }
        var a = {
          Windows: function () {
            var t = e.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
            return (
              {
                6.4: "10",
                6.3: "8.1",
                6.2: "8",
                6.1: "7",
                "6.0": "Vista",
                5.2: "XP",
                5.1: "XP",
                "5.0": "2000",
              }[t] || t
            );
          },
          Android: function () {
            return e.replace(/^.*Android ([\d.]+);.*$/, "$1");
          },
          iOS: function () {
            return e.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".");
          },
          Debian: function () {
            return e.replace(/^.*Debian\/([\d.]+).*$/, "$1");
          },
          "Windows Phone": function () {
            return e.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2");
          },
          "Mac OS": function () {
            return e
              .replace(/^.*Mac OS X ([\d_]+).*$/, "$1")
              .replace(/_/g, ".");
          },
          WebOS: function () {
            return e.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1");
          },
        };
        (t.osVersion = ""),
          a[t.os] &&
            ((t.osVersion = a[t.os]()), t.osVersion == e && (t.osVersion = ""));
        var u = {
          Safari: function () {
            return e.replace(/^.*Version\/([\d.]+).*$/, "$1");
          },
          Chrome: function () {
            return e
              .replace(/^.*Chrome\/([\d.]+).*$/, "$1")
              .replace(/^.*CriOS\/([\d.]+).*$/, "$1");
          },
          IE: function () {
            return e
              .replace(/^.*MSIE ([\d.]+).*$/, "$1")
              .replace(/^.*rv:([\d.]+).*$/, "$1");
          },
          Edge: function () {
            return e.replace(/^.*Edge\/([\d.]+).*$/, "$1");
          },
          Firefox: function () {
            return e
              .replace(/^.*Firefox\/([\d.]+).*$/, "$1")
              .replace(/^.*FxiOS\/([\d.]+).*$/, "$1");
          },
          "Firefox Focus": function () {
            return e.replace(/^.*Focus\/([\d.]+).*$/, "$1");
          },
          Chromium: function () {
            return e.replace(/^.*Chromium\/([\d.]+).*$/, "$1");
          },
          Opera: function () {
            return e
              .replace(/^.*Opera\/([\d.]+).*$/, "$1")
              .replace(/^.*OPR\/([\d.]+).*$/, "$1");
          },
          Vivaldi: function () {
            return e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1");
          },
          Yandex: function () {
            return e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1");
          },
          Kindle: function () {
            return e.replace(/^.*Version\/([\d.]+).*$/, "$1");
          },
          Maxthon: function () {
            return e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1");
          },
          QQBrowser: function () {
            return e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1");
          },
          QQ: function () {
            return e.replace(/^.*QQ\/([\d.]+).*$/, "$1");
          },
          Baidu: function () {
            return e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1");
          },
          UC: function () {
            return e.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1");
          },
          Sogou: function () {
            return e
              .replace(/^.*SE ([\d.X]+).*$/, "$1")
              .replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1");
          },
          "2345Explorer": function () {
            return e.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1");
          },
          TheWorld: function () {
            return e.replace(/^.*TheWorld ([\d.]+).*$/, "$1");
          },
          XiaoMi: function () {
            return e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1");
          },
          Quark: function () {
            return e.replace(/^.*Quark\/([\d.]+).*$/, "$1");
          },
          Qiyu: function () {
            return e.replace(/^.*Qiyu\/([\d.]+).*$/, "$1");
          },
          Wechat: function () {
            return e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1");
          },
          Taobao: function () {
            return e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1");
          },
          Alipay: function () {
            return e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1");
          },
          Weibo: function () {
            return e.replace(/^.*weibo__([\d.]+).*$/, "$1");
          },
          Douban: function () {
            return e.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1");
          },
          Suning: function () {
            return e.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1");
          },
          iQiYi: function () {
            return e.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1");
          },
        };
        (t.version = ""),
          u[t.browser] &&
            ((t.version = u[t.browser]()), t.version == e && (t.version = "")),
          "Edge" == t.browser
            ? (t.engine = "EdgeHTML")
            : "Chrome" == t.browser && parseInt(t.version) > 27
            ? (t.engine = "Blink")
            : "Opera" == t.browser && parseInt(t.version) > 12
            ? (t.engine = "Blink")
            : "Yandex" == t.browser
            ? (t.engine = "Blink")
            : void 0 == t.browser && (t.browser = "Unknow App");
      }
      function i(e) {
        return new r(e);
      }
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = (window, document, {}),
        i = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "`": "&#x60;",
          "\\": "&#x5c;",
        };
      for (var o in i) r[i[o]] = o;
      var s = /[&<>"'`\\]/g,
        a = RegExp(s.source),
        u = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g,
        c = RegExp(u.source),
        l = {
          on: function (e, t, n, r) {
            e = e.split(" ");
            for (var i = 0, o = e.length; i < o; i++)
              l.off(e[i], t, n, r),
                t.addEventListener
                  ? t.addEventListener(e[i], n, r || !1)
                  : t.attachEvent
                  ? t.attachEvent("on" + e[i], n)
                  : (t["on" + e[i]] = n);
          },
          off: function (e, t, n, r) {
            e = e.split(" ");
            for (var i = 0, o = e.length; i < o; i++)
              t.removeEventListener
                ? t.removeEventListener(e, n, r || !1)
                : t.detachEvent
                ? t.detachEvent("on" + e, n)
                : (t["on" + e] = null);
          },
          escape: function (e) {
            return e && a.test(e)
              ? e.replace(s, function (e) {
                  return i[e];
                })
              : e;
          },
          unescape: function (e) {
            return e && c.test(e)
              ? e.replace(u, function (e) {
                  return r[e];
                })
              : e;
          },
          create: function (e, t, n) {
            var r = document.createElement(e);
            return l.attr(r, t, n), r;
          },
          find: function (e, t) {
            return e.querySelector(t);
          },
          findAll: function (e, t) {
            return e.querySelectorAll(t);
          },
          attr: function (e, t, n) {
            if (void 0 === e.getAttribute) return l.prop(e, t, n);
            if (void 0 !== n)
              null === n ? l.removeAttr(e, t) : e.setAttribute(t, n);
            else {
              if ("[object Object]" !== {}.toString.call(t))
                return e.getAttribute(t);
              l.each(t, function (t, n) {
                e.setAttribute(t, n);
              });
            }
          },
          prop: function (e, t, n) {
            return void 0 !== n
              ? (e[t] = n)
              : "[object Object]" !== {}.toString.call(t)
              ? e[t]
              : void l.each(t, function (t, n) {
                  e[t] = n;
                });
          },
          removeAttr: function (e, t) {
            var n = void 0,
              r = 0,
              i = t && t.match(/[^\x20\t\r\n\f\*\/\\]+/g);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
            return e;
          },
          clearAttr: function (e) {
            var t = e.attributes,
              n = [
                "align",
                "alt",
                "checked",
                "class",
                "disabled",
                "href",
                "id",
                "target",
                "title",
                "type",
                "src",
                "style",
              ];
            return (
              l.each(t, function (t, r) {
                var i = r.name;
                switch (i.toLowerCase()) {
                  case "style":
                    var o = r.value;
                    l.each(o.split(";"), function (t, n) {
                      n.indexOf("color") > -1
                        ? l.attr(e, "style", n)
                        : l.removeAttr(e, "style");
                    });
                    break;
                  case "class":
                    if ("CODE" == e.nodeName) return !1;
                    var s = r.value;
                    s.indexOf("at") > -1
                      ? l.attr(e, "class", "at")
                      : s.indexOf("vemoji") > -1
                      ? l.attr(e, "class", "vemoji")
                      : l.removeAttr(e, "class");
                    break;
                  default:
                    if (n.indexOf(i) > -1) return !0;
                    l.removeAttr(e, i);
                }
              }),
              e
            );
          },
          remove: function (e) {
            try {
              e.parentNode && e.parentNode.removeChild(e);
            } catch (e) {}
          },
          each: function (e, t) {
            var n = 0,
              r = e.length,
              i = ["[object Array]", "[object NodeList]"],
              o = {}.toString.call(e);
            if (i.indexOf(o) > -1)
              for (; n < r && (!t || !1 !== t.call(e[n], n, e[n])); n++);
            else
              for (n in e)
                if (e.hasOwnProperty(n) && t && !1 === t.call(e[n], n, e[n]))
                  break;
            return e;
          },
        };
      e.exports = l;
    },
    function (e, t, n) {
      "use strict";
      var r = function (e, t) {
          if (e)
            try {
              var n = e.getTime(),
                r = new Date().getTime(),
                o = r - n,
                s = Math.floor(o / 864e5);
              if (0 === s) {
                var a = o % 864e5,
                  u = Math.floor(a / 36e5);
                if (0 === u) {
                  var c = a % 36e5,
                    l = Math.floor(c / 6e4);
                  if (0 === l) {
                    var h = c % 6e4;
                    return Math.round(h / 1e3) + " " + t.timeago.seconds;
                  }
                  return l + " " + t.timeago.minutes;
                }
                return u + " " + t.timeago.hours;
              }
              return s < 0
                ? t.timeago.now
                : s < 8
                ? s + " " + t.timeago.days
                : i(e);
            } catch (e) {}
        },
        i = function (e) {
          var t = o(e.getDate(), 2),
            n = o(e.getMonth() + 1, 2);
          return o(e.getFullYear(), 2) + "-" + n + "-" + t;
        },
        o = function (e, t) {
          for (var n = e.toString(); n.length < t; ) n = "0" + n;
          return n;
        };
      e.exports = r;
    },
    function (e, t, n) {
      var r;
      !(function (i) {
        "use strict";
        function o(e, t) {
          var n = (65535 & e) + (65535 & t);
          return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
        }
        function s(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function a(e, t, n, r, i, a) {
          return o(s(o(o(t, e), o(r, a)), i), n);
        }
        function u(e, t, n, r, i, o, s) {
          return a((t & n) | (~t & r), e, t, i, o, s);
        }
        function c(e, t, n, r, i, o, s) {
          return a((t & r) | (n & ~r), e, t, i, o, s);
        }
        function l(e, t, n, r, i, o, s) {
          return a(t ^ n ^ r, e, t, i, o, s);
        }
        function h(e, t, n, r, i, o, s) {
          return a(n ^ (t | ~r), e, t, i, o, s);
        }
        function f(e, t) {
          (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
          var n,
            r,
            i,
            s,
            a,
            f = 1732584193,
            d = -271733879,
            p = -1732584194,
            v = 271733878;
          for (n = 0; n < e.length; n += 16)
            (r = f),
              (i = d),
              (s = p),
              (a = v),
              (f = u(f, d, p, v, e[n], 7, -680876936)),
              (v = u(v, f, d, p, e[n + 1], 12, -389564586)),
              (p = u(p, v, f, d, e[n + 2], 17, 606105819)),
              (d = u(d, p, v, f, e[n + 3], 22, -1044525330)),
              (f = u(f, d, p, v, e[n + 4], 7, -176418897)),
              (v = u(v, f, d, p, e[n + 5], 12, 1200080426)),
              (p = u(p, v, f, d, e[n + 6], 17, -1473231341)),
              (d = u(d, p, v, f, e[n + 7], 22, -45705983)),
              (f = u(f, d, p, v, e[n + 8], 7, 1770035416)),
              (v = u(v, f, d, p, e[n + 9], 12, -1958414417)),
              (p = u(p, v, f, d, e[n + 10], 17, -42063)),
              (d = u(d, p, v, f, e[n + 11], 22, -1990404162)),
              (f = u(f, d, p, v, e[n + 12], 7, 1804603682)),
              (v = u(v, f, d, p, e[n + 13], 12, -40341101)),
              (p = u(p, v, f, d, e[n + 14], 17, -1502002290)),
              (d = u(d, p, v, f, e[n + 15], 22, 1236535329)),
              (f = c(f, d, p, v, e[n + 1], 5, -165796510)),
              (v = c(v, f, d, p, e[n + 6], 9, -1069501632)),
              (p = c(p, v, f, d, e[n + 11], 14, 643717713)),
              (d = c(d, p, v, f, e[n], 20, -373897302)),
              (f = c(f, d, p, v, e[n + 5], 5, -701558691)),
              (v = c(v, f, d, p, e[n + 10], 9, 38016083)),
              (p = c(p, v, f, d, e[n + 15], 14, -660478335)),
              (d = c(d, p, v, f, e[n + 4], 20, -405537848)),
              (f = c(f, d, p, v, e[n + 9], 5, 568446438)),
              (v = c(v, f, d, p, e[n + 14], 9, -1019803690)),
              (p = c(p, v, f, d, e[n + 3], 14, -187363961)),
              (d = c(d, p, v, f, e[n + 8], 20, 1163531501)),
              (f = c(f, d, p, v, e[n + 13], 5, -1444681467)),
              (v = c(v, f, d, p, e[n + 2], 9, -51403784)),
              (p = c(p, v, f, d, e[n + 7], 14, 1735328473)),
              (d = c(d, p, v, f, e[n + 12], 20, -1926607734)),
              (f = l(f, d, p, v, e[n + 5], 4, -378558)),
              (v = l(v, f, d, p, e[n + 8], 11, -2022574463)),
              (p = l(p, v, f, d, e[n + 11], 16, 1839030562)),
              (d = l(d, p, v, f, e[n + 14], 23, -35309556)),
              (f = l(f, d, p, v, e[n + 1], 4, -1530992060)),
              (v = l(v, f, d, p, e[n + 4], 11, 1272893353)),
              (p = l(p, v, f, d, e[n + 7], 16, -155497632)),
              (d = l(d, p, v, f, e[n + 10], 23, -1094730640)),
              (f = l(f, d, p, v, e[n + 13], 4, 681279174)),
              (v = l(v, f, d, p, e[n], 11, -358537222)),
              (p = l(p, v, f, d, e[n + 3], 16, -722521979)),
              (d = l(d, p, v, f, e[n + 6], 23, 76029189)),
              (f = l(f, d, p, v, e[n + 9], 4, -640364487)),
              (v = l(v, f, d, p, e[n + 12], 11, -421815835)),
              (p = l(p, v, f, d, e[n + 15], 16, 530742520)),
              (d = l(d, p, v, f, e[n + 2], 23, -995338651)),
              (f = h(f, d, p, v, e[n], 6, -198630844)),
              (v = h(v, f, d, p, e[n + 7], 10, 1126891415)),
              (p = h(p, v, f, d, e[n + 14], 15, -1416354905)),
              (d = h(d, p, v, f, e[n + 5], 21, -57434055)),
              (f = h(f, d, p, v, e[n + 12], 6, 1700485571)),
              (v = h(v, f, d, p, e[n + 3], 10, -1894986606)),
              (p = h(p, v, f, d, e[n + 10], 15, -1051523)),
              (d = h(d, p, v, f, e[n + 1], 21, -2054922799)),
              (f = h(f, d, p, v, e[n + 8], 6, 1873313359)),
              (v = h(v, f, d, p, e[n + 15], 10, -30611744)),
              (p = h(p, v, f, d, e[n + 6], 15, -1560198380)),
              (d = h(d, p, v, f, e[n + 13], 21, 1309151649)),
              (f = h(f, d, p, v, e[n + 4], 6, -145523070)),
              (v = h(v, f, d, p, e[n + 11], 10, -1120210379)),
              (p = h(p, v, f, d, e[n + 2], 15, 718787259)),
              (d = h(d, p, v, f, e[n + 9], 21, -343485551)),
              (f = o(f, r)),
              (d = o(d, i)),
              (p = o(p, s)),
              (v = o(v, a));
          return [f, d, p, v];
        }
        function d(e) {
          var t,
            n = "",
            r = 32 * e.length;
          for (t = 0; t < r; t += 8)
            n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
          return n;
        }
        function p(e) {
          var t,
            n = [];
          for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)
            n[t] = 0;
          var r = 8 * e.length;
          for (t = 0; t < r; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
          return n;
        }
        function v(e) {
          return d(f(p(e), 8 * e.length));
        }
        function g(e, t) {
          var n,
            r,
            i = p(e),
            o = [],
            s = [];
          for (
            o[15] = s[15] = void 0,
              i.length > 16 && (i = f(i, 8 * e.length)),
              n = 0;
            n < 16;
            n += 1
          )
            (o[n] = 909522486 ^ i[n]), (s[n] = 1549556828 ^ i[n]);
          return (
            (r = f(o.concat(p(t)), 512 + 8 * t.length)), d(f(s.concat(r), 640))
          );
        }
        function _(e) {
          var t,
            n,
            r = "0123456789abcdef",
            i = "";
          for (n = 0; n < e.length; n += 1)
            (t = e.charCodeAt(n)),
              (i += r.charAt((t >>> 4) & 15) + r.charAt(15 & t));
          return i;
        }
        function m(e) {
          return unescape(encodeURIComponent(e));
        }
        function y(e) {
          return v(m(e));
        }
        function b(e) {
          return _(y(e));
        }
        function w(e, t) {
          return g(m(e), m(t));
        }
        function x(e, t) {
          return _(w(e, t));
        }
        function O(e, t, n) {
          return t ? (n ? w(t, e) : x(t, e)) : n ? y(e) : b(e);
        }
        void 0 !==
          (r = function () {
            return O;
          }.call(t, n, t, e)) && (e.exports = r);
      })();
    },
    function (e, t, n) {
      !(function (t, n) {
        e.exports = n();
      })(0, function () {
        "use strict";
        function e(e) {
          return '<span style="color: slategray">' + e + "</span>";
        }
        var t = (function (e, t) {
            return (t = { exports: {} }), e(t, t.exports), t.exports;
          })(function (e) {
            var t = (e.exports = function () {
              return new RegExp(
                "(?:" + t.line().source + ")|(?:" + t.block().source + ")",
                "gm"
              );
            });
            (t.line = function () {
              return /(?:^|\s)\/\/(.+?)$/gm;
            }),
              (t.block = function () {
                return /\/\*([\S\s]*?)\*\//gm;
              });
          }),
          n = [
            "23AC69",
            "91C132",
            "F19726",
            "E8552D",
            "1AAB8E",
            "E1147F",
            "2980C1",
            "1BA1E6",
            "9FA0A0",
            "F19726",
            "E30B20",
            "E30B20",
            "A3338B",
          ];
        return function (r, i) {
          void 0 === i && (i = {});
          var o = i.colors;
          void 0 === o && (o = n);
          var s = 0,
            a = {},
            u = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/,
            c = /</,
            l = new RegExp(
              "(" + u.source + "|" + c.source + ")|(" + t().source + ")",
              "gmi"
            );
          return r.replace(l, function (t, n, r) {
            if (r) return e(r);
            if ("<" === n) return "&lt;";
            var i;
            a[n] ? (i = a[n]) : ((i = o[s]), (a[n] = i));
            var u = '<span style="color: #' + i + '">' + n + "</span>";
            return (s = ++s % o.length), u;
          });
        };
      });
    },
    function (e, t, n) {
      (function (t) {
        !(function (t, n) {
          e.exports = n();
        })("undefined" != typeof self && self, function () {
          return (function (e) {
            function t(r) {
              if (n[r]) return n[r].exports;
              var i = (n[r] = { i: r, l: !1, exports: {} });
              return (
                e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports
              );
            }
            var n = {};
            return (
              (t.m = e),
              (t.c = n),
              (t.d = function (e, n, r) {
                t.o(e, n) ||
                  Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r,
                  });
              }),
              (t.n = function (e) {
                var n =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return t.d(n, "a", n), n;
              }),
              (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (t.p = ""),
              t((t.s = 15))
            );
          })([
            function (e, t, n) {
              (function (e, n) {
                var r, i;
                !(function () {
                  var o =
                      ("object" == typeof self && self.self === self && self) ||
                      ("object" == typeof e && e.global === e && e) ||
                      this ||
                      {},
                    s = o._,
                    a = Array.prototype,
                    u = Object.prototype,
                    c = "undefined" != typeof Symbol ? Symbol.prototype : null,
                    l = a.push,
                    h = a.slice,
                    f = u.toString,
                    d = u.hasOwnProperty,
                    p = Array.isArray,
                    v = Object.keys,
                    g = Object.create,
                    _ = function () {},
                    m = function (e) {
                      return e instanceof m
                        ? e
                        : this instanceof m
                        ? void (this._wrapped = e)
                        : new m(e);
                    };
                  void 0 === t || t.nodeType
                    ? (o._ = m)
                    : (void 0 !== n &&
                        !n.nodeType &&
                        n.exports &&
                        (t = n.exports = m),
                      (t._ = m)),
                    (m.VERSION = "1.9.1");
                  var y,
                    b = function (e, t, n) {
                      if (void 0 === t) return e;
                      switch (null == n ? 3 : n) {
                        case 1:
                          return function (n) {
                            return e.call(t, n);
                          };
                        case 3:
                          return function (n, r, i) {
                            return e.call(t, n, r, i);
                          };
                        case 4:
                          return function (n, r, i, o) {
                            return e.call(t, n, r, i, o);
                          };
                      }
                      return function () {
                        return e.apply(t, arguments);
                      };
                    },
                    w = function (e, t, n) {
                      return m.iteratee !== y
                        ? m.iteratee(e, t)
                        : null == e
                        ? m.identity
                        : m.isFunction(e)
                        ? b(e, t, n)
                        : m.isObject(e) && !m.isArray(e)
                        ? m.matcher(e)
                        : m.property(e);
                    };
                  m.iteratee = y = function (e, t) {
                    return w(e, t, 1 / 0);
                  };
                  var x = function (e, t) {
                      return (
                        (t = null == t ? e.length - 1 : +t),
                        function () {
                          for (
                            var n = Math.max(arguments.length - t, 0),
                              r = Array(n),
                              i = 0;
                            i < n;
                            i++
                          )
                            r[i] = arguments[i + t];
                          switch (t) {
                            case 0:
                              return e.call(this, r);
                            case 1:
                              return e.call(this, arguments[0], r);
                            case 2:
                              return e.call(
                                this,
                                arguments[0],
                                arguments[1],
                                r
                              );
                          }
                          var o = Array(t + 1);
                          for (i = 0; i < t; i++) o[i] = arguments[i];
                          return (o[t] = r), e.apply(this, o);
                        }
                      );
                    },
                    O = function (e) {
                      if (!m.isObject(e)) return {};
                      if (g) return g(e);
                      _.prototype = e;
                      var t = new _();
                      return (_.prototype = null), t;
                    },
                    S = function (e) {
                      return function (t) {
                        return null == t ? void 0 : t[e];
                      };
                    },
                    A = function (e, t) {
                      return null != e && d.call(e, t);
                    },
                    k = function (e, t) {
                      for (var n = t.length, r = 0; r < n; r++) {
                        if (null == e) return;
                        e = e[t[r]];
                      }
                      return n ? e : void 0;
                    },
                    E = Math.pow(2, 53) - 1,
                    C = S("length"),
                    T = function (e) {
                      var t = C(e);
                      return "number" == typeof t && t >= 0 && t <= E;
                    };
                  (m.each = m.forEach = function (e, t, n) {
                    t = b(t, n);
                    var r, i;
                    if (T(e))
                      for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
                    else {
                      var o = m.keys(e);
                      for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e);
                    }
                    return e;
                  }),
                    (m.map = m.collect = function (e, t, n) {
                      t = w(t, n);
                      for (
                        var r = !T(e) && m.keys(e),
                          i = (r || e).length,
                          o = Array(i),
                          s = 0;
                        s < i;
                        s++
                      ) {
                        var a = r ? r[s] : s;
                        o[s] = t(e[a], a, e);
                      }
                      return o;
                    });
                  var j = function (e) {
                    var t = function (t, n, r, i) {
                      var o = !T(t) && m.keys(t),
                        s = (o || t).length,
                        a = e > 0 ? 0 : s - 1;
                      for (
                        i || ((r = t[o ? o[a] : a]), (a += e));
                        a >= 0 && a < s;
                        a += e
                      ) {
                        var u = o ? o[a] : a;
                        r = n(r, t[u], u, t);
                      }
                      return r;
                    };
                    return function (e, n, r, i) {
                      var o = arguments.length >= 3;
                      return t(e, b(n, i, 4), r, o);
                    };
                  };
                  (m.reduce = m.foldl = m.inject = j(1)),
                    (m.reduceRight = m.foldr = j(-1)),
                    (m.find = m.detect = function (e, t, n) {
                      var r = T(e) ? m.findIndex : m.findKey,
                        i = r(e, t, n);
                      if (void 0 !== i && -1 !== i) return e[i];
                    }),
                    (m.filter = m.select = function (e, t, n) {
                      var r = [];
                      return (
                        (t = w(t, n)),
                        m.each(e, function (e, n, i) {
                          t(e, n, i) && r.push(e);
                        }),
                        r
                      );
                    }),
                    (m.reject = function (e, t, n) {
                      return m.filter(e, m.negate(w(t)), n);
                    }),
                    (m.every = m.all = function (e, t, n) {
                      t = w(t, n);
                      for (
                        var r = !T(e) && m.keys(e), i = (r || e).length, o = 0;
                        o < i;
                        o++
                      ) {
                        var s = r ? r[o] : o;
                        if (!t(e[s], s, e)) return !1;
                      }
                      return !0;
                    }),
                    (m.some = m.any = function (e, t, n) {
                      t = w(t, n);
                      for (
                        var r = !T(e) && m.keys(e), i = (r || e).length, o = 0;
                        o < i;
                        o++
                      ) {
                        var s = r ? r[o] : o;
                        if (t(e[s], s, e)) return !0;
                      }
                      return !1;
                    }),
                    (m.contains = m.includes = m.include = function (
                      e,
                      t,
                      n,
                      r
                    ) {
                      return (
                        T(e) || (e = m.values(e)),
                        ("number" != typeof n || r) && (n = 0),
                        m.indexOf(e, t, n) >= 0
                      );
                    }),
                    (m.invoke = x(function (e, t, n) {
                      var r, i;
                      return (
                        m.isFunction(t)
                          ? (i = t)
                          : m.isArray(t) &&
                            ((r = t.slice(0, -1)), (t = t[t.length - 1])),
                        m.map(e, function (e) {
                          var o = i;
                          if (!o) {
                            if ((r && r.length && (e = k(e, r)), null == e))
                              return;
                            o = e[t];
                          }
                          return null == o ? o : o.apply(e, n);
                        })
                      );
                    })),
                    (m.pluck = function (e, t) {
                      return m.map(e, m.property(t));
                    }),
                    (m.where = function (e, t) {
                      return m.filter(e, m.matcher(t));
                    }),
                    (m.findWhere = function (e, t) {
                      return m.find(e, m.matcher(t));
                    }),
                    (m.max = function (e, t, n) {
                      var r,
                        i,
                        o = -1 / 0,
                        s = -1 / 0;
                      if (
                        null == t ||
                        ("number" == typeof t &&
                          "object" != typeof e[0] &&
                          null != e)
                      ) {
                        e = T(e) ? e : m.values(e);
                        for (var a = 0, u = e.length; a < u; a++)
                          null != (r = e[a]) && r > o && (o = r);
                      } else
                        (t = w(t, n)),
                          m.each(e, function (e, n, r) {
                            ((i = t(e, n, r)) > s ||
                              (i === -1 / 0 && o === -1 / 0)) &&
                              ((o = e), (s = i));
                          });
                      return o;
                    }),
                    (m.min = function (e, t, n) {
                      var r,
                        i,
                        o = 1 / 0,
                        s = 1 / 0;
                      if (
                        null == t ||
                        ("number" == typeof t &&
                          "object" != typeof e[0] &&
                          null != e)
                      ) {
                        e = T(e) ? e : m.values(e);
                        for (var a = 0, u = e.length; a < u; a++)
                          null != (r = e[a]) && r < o && (o = r);
                      } else
                        (t = w(t, n)),
                          m.each(e, function (e, n, r) {
                            ((i = t(e, n, r)) < s ||
                              (i === 1 / 0 && o === 1 / 0)) &&
                              ((o = e), (s = i));
                          });
                      return o;
                    }),
                    (m.shuffle = function (e) {
                      return m.sample(e, 1 / 0);
                    }),
                    (m.sample = function (e, t, n) {
                      if (null == t || n)
                        return (
                          T(e) || (e = m.values(e)), e[m.random(e.length - 1)]
                        );
                      var r = T(e) ? m.clone(e) : m.values(e),
                        i = C(r);
                      t = Math.max(Math.min(t, i), 0);
                      for (var o = i - 1, s = 0; s < t; s++) {
                        var a = m.random(s, o),
                          u = r[s];
                        (r[s] = r[a]), (r[a] = u);
                      }
                      return r.slice(0, t);
                    }),
                    (m.sortBy = function (e, t, n) {
                      var r = 0;
                      return (
                        (t = w(t, n)),
                        m.pluck(
                          m
                            .map(e, function (e, n, i) {
                              return {
                                value: e,
                                index: r++,
                                criteria: t(e, n, i),
                              };
                            })
                            .sort(function (e, t) {
                              var n = e.criteria,
                                r = t.criteria;
                              if (n !== r) {
                                if (n > r || void 0 === n) return 1;
                                if (n < r || void 0 === r) return -1;
                              }
                              return e.index - t.index;
                            }),
                          "value"
                        )
                      );
                    });
                  var N = function (e, t) {
                    return function (n, r, i) {
                      var o = t ? [[], []] : {};
                      return (
                        (r = w(r, i)),
                        m.each(n, function (t, i) {
                          var s = r(t, i, n);
                          e(o, t, s);
                        }),
                        o
                      );
                    };
                  };
                  (m.groupBy = N(function (e, t, n) {
                    A(e, n) ? e[n].push(t) : (e[n] = [t]);
                  })),
                    (m.indexBy = N(function (e, t, n) {
                      e[n] = t;
                    })),
                    (m.countBy = N(function (e, t, n) {
                      A(e, n) ? e[n]++ : (e[n] = 1);
                    }));
                  var U = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
                  (m.toArray = function (e) {
                    return e
                      ? m.isArray(e)
                        ? h.call(e)
                        : m.isString(e)
                        ? e.match(U)
                        : T(e)
                        ? m.map(e, m.identity)
                        : m.values(e)
                      : [];
                  }),
                    (m.size = function (e) {
                      return null == e ? 0 : T(e) ? e.length : m.keys(e).length;
                    }),
                    (m.partition = N(function (e, t, n) {
                      e[n ? 0 : 1].push(t);
                    }, !0)),
                    (m.first = m.head = m.take = function (e, t, n) {
                      return null == e || e.length < 1
                        ? null == t
                          ? void 0
                          : []
                        : null == t || n
                        ? e[0]
                        : m.initial(e, e.length - t);
                    }),
                    (m.initial = function (e, t, n) {
                      return h.call(
                        e,
                        0,
                        Math.max(0, e.length - (null == t || n ? 1 : t))
                      );
                    }),
                    (m.last = function (e, t, n) {
                      return null == e || e.length < 1
                        ? null == t
                          ? void 0
                          : []
                        : null == t || n
                        ? e[e.length - 1]
                        : m.rest(e, Math.max(0, e.length - t));
                    }),
                    (m.rest = m.tail = m.drop = function (e, t, n) {
                      return h.call(e, null == t || n ? 1 : t);
                    }),
                    (m.compact = function (e) {
                      return m.filter(e, Boolean);
                    });
                  var I = function (e, t, n, r) {
                    r = r || [];
                    for (var i = r.length, o = 0, s = C(e); o < s; o++) {
                      var a = e[o];
                      if (T(a) && (m.isArray(a) || m.isArguments(a)))
                        if (t)
                          for (var u = 0, c = a.length; u < c; )
                            r[i++] = a[u++];
                        else I(a, t, n, r), (i = r.length);
                      else n || (r[i++] = a);
                    }
                    return r;
                  };
                  (m.flatten = function (e, t) {
                    return I(e, t, !1);
                  }),
                    (m.without = x(function (e, t) {
                      return m.difference(e, t);
                    })),
                    (m.uniq = m.unique = function (e, t, n, r) {
                      m.isBoolean(t) || ((r = n), (n = t), (t = !1)),
                        null != n && (n = w(n, r));
                      for (var i = [], o = [], s = 0, a = C(e); s < a; s++) {
                        var u = e[s],
                          c = n ? n(u, s, e) : u;
                        t && !n
                          ? ((s && o === c) || i.push(u), (o = c))
                          : n
                          ? m.contains(o, c) || (o.push(c), i.push(u))
                          : m.contains(i, u) || i.push(u);
                      }
                      return i;
                    }),
                    (m.union = x(function (e) {
                      return m.uniq(I(e, !0, !0));
                    })),
                    (m.intersection = function (e) {
                      for (
                        var t = [], n = arguments.length, r = 0, i = C(e);
                        r < i;
                        r++
                      ) {
                        var o = e[r];
                        if (!m.contains(t, o)) {
                          var s;
                          for (
                            s = 1;
                            s < n && m.contains(arguments[s], o);
                            s++
                          );
                          s === n && t.push(o);
                        }
                      }
                      return t;
                    }),
                    (m.difference = x(function (e, t) {
                      return (
                        (t = I(t, !0, !0)),
                        m.filter(e, function (e) {
                          return !m.contains(t, e);
                        })
                      );
                    })),
                    (m.unzip = function (e) {
                      for (
                        var t = (e && m.max(e, C).length) || 0,
                          n = Array(t),
                          r = 0;
                        r < t;
                        r++
                      )
                        n[r] = m.pluck(e, r);
                      return n;
                    }),
                    (m.zip = x(m.unzip)),
                    (m.object = function (e, t) {
                      for (var n = {}, r = 0, i = C(e); r < i; r++)
                        t ? (n[e[r]] = t[r]) : (n[e[r][0]] = e[r][1]);
                      return n;
                    });
                  var R = function (e) {
                    return function (t, n, r) {
                      n = w(n, r);
                      for (
                        var i = C(t), o = e > 0 ? 0 : i - 1;
                        o >= 0 && o < i;
                        o += e
                      )
                        if (n(t[o], o, t)) return o;
                      return -1;
                    };
                  };
                  (m.findIndex = R(1)),
                    (m.findLastIndex = R(-1)),
                    (m.sortedIndex = function (e, t, n, r) {
                      n = w(n, r, 1);
                      for (var i = n(t), o = 0, s = C(e); o < s; ) {
                        var a = Math.floor((o + s) / 2);
                        n(e[a]) < i ? (o = a + 1) : (s = a);
                      }
                      return o;
                    });
                  var L = function (e, t, n) {
                    return function (r, i, o) {
                      var s = 0,
                        a = C(r);
                      if ("number" == typeof o)
                        e > 0
                          ? (s = o >= 0 ? o : Math.max(o + a, s))
                          : (a = o >= 0 ? Math.min(o + 1, a) : o + a + 1);
                      else if (n && o && a)
                        return (o = n(r, i)), r[o] === i ? o : -1;
                      if (i !== i)
                        return (
                          (o = t(h.call(r, s, a), m.isNaN)), o >= 0 ? o + s : -1
                        );
                      for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e)
                        if (r[o] === i) return o;
                      return -1;
                    };
                  };
                  (m.indexOf = L(1, m.findIndex, m.sortedIndex)),
                    (m.lastIndexOf = L(-1, m.findLastIndex)),
                    (m.range = function (e, t, n) {
                      null == t && ((t = e || 0), (e = 0)),
                        n || (n = t < e ? -1 : 1);
                      for (
                        var r = Math.max(Math.ceil((t - e) / n), 0),
                          i = Array(r),
                          o = 0;
                        o < r;
                        o++, e += n
                      )
                        i[o] = e;
                      return i;
                    }),
                    (m.chunk = function (e, t) {
                      if (null == t || t < 1) return [];
                      for (var n = [], r = 0, i = e.length; r < i; )
                        n.push(h.call(e, r, (r += t)));
                      return n;
                    });
                  var P = function (e, t, n, r, i) {
                    if (!(r instanceof t)) return e.apply(n, i);
                    var o = O(e.prototype),
                      s = e.apply(o, i);
                    return m.isObject(s) ? s : o;
                  };
                  (m.bind = x(function (e, t, n) {
                    if (!m.isFunction(e))
                      throw new TypeError("Bind must be called on a function");
                    var r = x(function (i) {
                      return P(e, r, t, this, n.concat(i));
                    });
                    return r;
                  })),
                    (m.partial = x(function (e, t) {
                      var n = m.partial.placeholder,
                        r = function () {
                          for (
                            var i = 0, o = t.length, s = Array(o), a = 0;
                            a < o;
                            a++
                          )
                            s[a] = t[a] === n ? arguments[i++] : t[a];
                          for (; i < arguments.length; ) s.push(arguments[i++]);
                          return P(e, r, this, this, s);
                        };
                      return r;
                    })),
                    (m.partial.placeholder = m),
                    (m.bindAll = x(function (e, t) {
                      t = I(t, !1, !1);
                      var n = t.length;
                      if (n < 1)
                        throw new Error(
                          "bindAll must be passed function names"
                        );
                      for (; n--; ) {
                        var r = t[n];
                        e[r] = m.bind(e[r], e);
                      }
                    })),
                    (m.memoize = function (e, t) {
                      var n = function (r) {
                        var i = n.cache,
                          o = "" + (t ? t.apply(this, arguments) : r);
                        return (
                          A(i, o) || (i[o] = e.apply(this, arguments)), i[o]
                        );
                      };
                      return (n.cache = {}), n;
                    }),
                    (m.delay = x(function (e, t, n) {
                      return setTimeout(function () {
                        return e.apply(null, n);
                      }, t);
                    })),
                    (m.defer = m.partial(m.delay, m, 1)),
                    (m.throttle = function (e, t, n) {
                      var r,
                        i,
                        o,
                        s,
                        a = 0;
                      n || (n = {});
                      var u = function () {
                          (a = !1 === n.leading ? 0 : m.now()),
                            (r = null),
                            (s = e.apply(i, o)),
                            r || (i = o = null);
                        },
                        c = function () {
                          var c = m.now();
                          a || !1 !== n.leading || (a = c);
                          var l = t - (c - a);
                          return (
                            (i = this),
                            (o = arguments),
                            l <= 0 || l > t
                              ? (r && (clearTimeout(r), (r = null)),
                                (a = c),
                                (s = e.apply(i, o)),
                                r || (i = o = null))
                              : r ||
                                !1 === n.trailing ||
                                (r = setTimeout(u, l)),
                            s
                          );
                        };
                      return (
                        (c.cancel = function () {
                          clearTimeout(r), (a = 0), (r = i = o = null);
                        }),
                        c
                      );
                    }),
                    (m.debounce = function (e, t, n) {
                      var r,
                        i,
                        o = function (t, n) {
                          (r = null), n && (i = e.apply(t, n));
                        },
                        s = x(function (s) {
                          if ((r && clearTimeout(r), n)) {
                            var a = !r;
                            (r = setTimeout(o, t)), a && (i = e.apply(this, s));
                          } else r = m.delay(o, t, this, s);
                          return i;
                        });
                      return (
                        (s.cancel = function () {
                          clearTimeout(r), (r = null);
                        }),
                        s
                      );
                    }),
                    (m.wrap = function (e, t) {
                      return m.partial(t, e);
                    }),
                    (m.negate = function (e) {
                      return function () {
                        return !e.apply(this, arguments);
                      };
                    }),
                    (m.compose = function () {
                      var e = arguments,
                        t = e.length - 1;
                      return function () {
                        for (var n = t, r = e[t].apply(this, arguments); n--; )
                          r = e[n].call(this, r);
                        return r;
                      };
                    }),
                    (m.after = function (e, t) {
                      return function () {
                        if (--e < 1) return t.apply(this, arguments);
                      };
                    }),
                    (m.before = function (e, t) {
                      var n;
                      return function () {
                        return (
                          --e > 0 && (n = t.apply(this, arguments)),
                          e <= 1 && (t = null),
                          n
                        );
                      };
                    }),
                    (m.once = m.partial(m.before, 2)),
                    (m.restArguments = x);
                  var D = !{ toString: null }.propertyIsEnumerable("toString"),
                    M = [
                      "valueOf",
                      "isPrototypeOf",
                      "toString",
                      "propertyIsEnumerable",
                      "hasOwnProperty",
                      "toLocaleString",
                    ],
                    F = function (e, t) {
                      var n = M.length,
                        r = e.constructor,
                        i = (m.isFunction(r) && r.prototype) || u,
                        o = "constructor";
                      for (A(e, o) && !m.contains(t, o) && t.push(o); n--; )
                        (o = M[n]) in e &&
                          e[o] !== i[o] &&
                          !m.contains(t, o) &&
                          t.push(o);
                    };
                  (m.keys = function (e) {
                    if (!m.isObject(e)) return [];
                    if (v) return v(e);
                    var t = [];
                    for (var n in e) A(e, n) && t.push(n);
                    return D && F(e, t), t;
                  }),
                    (m.allKeys = function (e) {
                      if (!m.isObject(e)) return [];
                      var t = [];
                      for (var n in e) t.push(n);
                      return D && F(e, t), t;
                    }),
                    (m.values = function (e) {
                      for (
                        var t = m.keys(e), n = t.length, r = Array(n), i = 0;
                        i < n;
                        i++
                      )
                        r[i] = e[t[i]];
                      return r;
                    }),
                    (m.mapObject = function (e, t, n) {
                      t = w(t, n);
                      for (
                        var r = m.keys(e), i = r.length, o = {}, s = 0;
                        s < i;
                        s++
                      ) {
                        var a = r[s];
                        o[a] = t(e[a], a, e);
                      }
                      return o;
                    }),
                    (m.pairs = function (e) {
                      for (
                        var t = m.keys(e), n = t.length, r = Array(n), i = 0;
                        i < n;
                        i++
                      )
                        r[i] = [t[i], e[t[i]]];
                      return r;
                    }),
                    (m.invert = function (e) {
                      for (
                        var t = {}, n = m.keys(e), r = 0, i = n.length;
                        r < i;
                        r++
                      )
                        t[e[n[r]]] = n[r];
                      return t;
                    }),
                    (m.functions = m.methods = function (e) {
                      var t = [];
                      for (var n in e) m.isFunction(e[n]) && t.push(n);
                      return t.sort();
                    });
                  var q = function (e, t) {
                    return function (n) {
                      var r = arguments.length;
                      if ((t && (n = Object(n)), r < 2 || null == n)) return n;
                      for (var i = 1; i < r; i++)
                        for (
                          var o = arguments[i], s = e(o), a = s.length, u = 0;
                          u < a;
                          u++
                        ) {
                          var c = s[u];
                          (t && void 0 !== n[c]) || (n[c] = o[c]);
                        }
                      return n;
                    };
                  };
                  (m.extend = q(m.allKeys)),
                    (m.extendOwn = m.assign = q(m.keys)),
                    (m.findKey = function (e, t, n) {
                      t = w(t, n);
                      for (
                        var r, i = m.keys(e), o = 0, s = i.length;
                        o < s;
                        o++
                      )
                        if (((r = i[o]), t(e[r], r, e))) return r;
                    });
                  var z = function (e, t, n) {
                    return t in n;
                  };
                  (m.pick = x(function (e, t) {
                    var n = {},
                      r = t[0];
                    if (null == e) return n;
                    m.isFunction(r)
                      ? (t.length > 1 && (r = b(r, t[1])), (t = m.allKeys(e)))
                      : ((r = z), (t = I(t, !1, !1)), (e = Object(e)));
                    for (var i = 0, o = t.length; i < o; i++) {
                      var s = t[i],
                        a = e[s];
                      r(a, s, e) && (n[s] = a);
                    }
                    return n;
                  })),
                    (m.omit = x(function (e, t) {
                      var n,
                        r = t[0];
                      return (
                        m.isFunction(r)
                          ? ((r = m.negate(r)), t.length > 1 && (n = t[1]))
                          : ((t = m.map(I(t, !1, !1), String)),
                            (r = function (e, n) {
                              return !m.contains(t, n);
                            })),
                        m.pick(e, r, n)
                      );
                    })),
                    (m.defaults = q(m.allKeys, !0)),
                    (m.create = function (e, t) {
                      var n = O(e);
                      return t && m.extendOwn(n, t), n;
                    }),
                    (m.clone = function (e) {
                      return m.isObject(e)
                        ? m.isArray(e)
                          ? e.slice()
                          : m.extend({}, e)
                        : e;
                    }),
                    (m.tap = function (e, t) {
                      return t(e), e;
                    }),
                    (m.isMatch = function (e, t) {
                      var n = m.keys(t),
                        r = n.length;
                      if (null == e) return !r;
                      for (var i = Object(e), o = 0; o < r; o++) {
                        var s = n[o];
                        if (t[s] !== i[s] || !(s in i)) return !1;
                      }
                      return !0;
                    });
                  var $, B;
                  ($ = function (e, t, n, r) {
                    if (e === t) return 0 !== e || 1 / e == 1 / t;
                    if (null == e || null == t) return !1;
                    if (e !== e) return t !== t;
                    var i = typeof e;
                    return (
                      ("function" === i ||
                        "object" === i ||
                        "object" == typeof t) &&
                      B(e, t, n, r)
                    );
                  }),
                    (B = function (e, t, n, r) {
                      e instanceof m && (e = e._wrapped),
                        t instanceof m && (t = t._wrapped);
                      var i = f.call(e);
                      if (i !== f.call(t)) return !1;
                      switch (i) {
                        case "[object RegExp]":
                        case "[object String]":
                          return "" + e == "" + t;
                        case "[object Number]":
                          return +e != +e
                            ? +t != +t
                            : 0 == +e
                            ? 1 / +e == 1 / t
                            : +e == +t;
                        case "[object Date]":
                        case "[object Boolean]":
                          return +e == +t;
                        case "[object Symbol]":
                          return c.valueOf.call(e) === c.valueOf.call(t);
                      }
                      var o = "[object Array]" === i;
                      if (!o) {
                        if ("object" != typeof e || "object" != typeof t)
                          return !1;
                        var s = e.constructor,
                          a = t.constructor;
                        if (
                          s !== a &&
                          !(
                            m.isFunction(s) &&
                            s instanceof s &&
                            m.isFunction(a) &&
                            a instanceof a
                          ) &&
                          "constructor" in e &&
                          "constructor" in t
                        )
                          return !1;
                      }
                      (n = n || []), (r = r || []);
                      for (var u = n.length; u--; )
                        if (n[u] === e) return r[u] === t;
                      if ((n.push(e), r.push(t), o)) {
                        if ((u = e.length) !== t.length) return !1;
                        for (; u--; ) if (!$(e[u], t[u], n, r)) return !1;
                      } else {
                        var l,
                          h = m.keys(e);
                        if (((u = h.length), m.keys(t).length !== u)) return !1;
                        for (; u--; )
                          if (((l = h[u]), !A(t, l) || !$(e[l], t[l], n, r)))
                            return !1;
                      }
                      return n.pop(), r.pop(), !0;
                    }),
                    (m.isEqual = function (e, t) {
                      return $(e, t);
                    }),
                    (m.isEmpty = function (e) {
                      return (
                        null == e ||
                        (T(e) &&
                        (m.isArray(e) || m.isString(e) || m.isArguments(e))
                          ? 0 === e.length
                          : 0 === m.keys(e).length)
                      );
                    }),
                    (m.isElement = function (e) {
                      return !(!e || 1 !== e.nodeType);
                    }),
                    (m.isArray =
                      p ||
                      function (e) {
                        return "[object Array]" === f.call(e);
                      }),
                    (m.isObject = function (e) {
                      var t = typeof e;
                      return "function" === t || ("object" === t && !!e);
                    }),
                    m.each(
                      [
                        "Arguments",
                        "Function",
                        "String",
                        "Number",
                        "Date",
                        "RegExp",
                        "Error",
                        "Symbol",
                        "Map",
                        "WeakMap",
                        "Set",
                        "WeakSet",
                      ],
                      function (e) {
                        m["is" + e] = function (t) {
                          return f.call(t) === "[object " + e + "]";
                        };
                      }
                    ),
                    m.isArguments(arguments) ||
                      (m.isArguments = function (e) {
                        return A(e, "callee");
                      });
                  var W = o.document && o.document.childNodes;
                  "function" != typeof /./ &&
                    "object" != typeof Int8Array &&
                    "function" != typeof W &&
                    (m.isFunction = function (e) {
                      return "function" == typeof e || !1;
                    }),
                    (m.isFinite = function (e) {
                      return (
                        !m.isSymbol(e) && isFinite(e) && !isNaN(parseFloat(e))
                      );
                    }),
                    (m.isNaN = function (e) {
                      return m.isNumber(e) && isNaN(e);
                    }),
                    (m.isBoolean = function (e) {
                      return (
                        !0 === e || !1 === e || "[object Boolean]" === f.call(e)
                      );
                    }),
                    (m.isNull = function (e) {
                      return null === e;
                    }),
                    (m.isUndefined = function (e) {
                      return void 0 === e;
                    }),
                    (m.has = function (e, t) {
                      if (!m.isArray(t)) return A(e, t);
                      for (var n = t.length, r = 0; r < n; r++) {
                        var i = t[r];
                        if (null == e || !d.call(e, i)) return !1;
                        e = e[i];
                      }
                      return !!n;
                    }),
                    (m.noConflict = function () {
                      return (o._ = s), this;
                    }),
                    (m.identity = function (e) {
                      return e;
                    }),
                    (m.constant = function (e) {
                      return function () {
                        return e;
                      };
                    }),
                    (m.noop = function () {}),
                    (m.property = function (e) {
                      return m.isArray(e)
                        ? function (t) {
                            return k(t, e);
                          }
                        : S(e);
                    }),
                    (m.propertyOf = function (e) {
                      return null == e
                        ? function () {}
                        : function (t) {
                            return m.isArray(t) ? k(e, t) : e[t];
                          };
                    }),
                    (m.matcher = m.matches = function (e) {
                      return (
                        (e = m.extendOwn({}, e)),
                        function (t) {
                          return m.isMatch(t, e);
                        }
                      );
                    }),
                    (m.times = function (e, t, n) {
                      var r = Array(Math.max(0, e));
                      t = b(t, n, 1);
                      for (var i = 0; i < e; i++) r[i] = t(i);
                      return r;
                    }),
                    (m.random = function (e, t) {
                      return (
                        null == t && ((t = e), (e = 0)),
                        e + Math.floor(Math.random() * (t - e + 1))
                      );
                    }),
                    (m.now =
                      Date.now ||
                      function () {
                        return new Date().getTime();
                      });
                  var Q = {
                      "&": "&amp;",
                      "<": "&lt;",
                      ">": "&gt;",
                      '"': "&quot;",
                      "'": "&#x27;",
                      "`": "&#x60;",
                    },
                    J = m.invert(Q),
                    V = function (e) {
                      var t = function (t) {
                          return e[t];
                        },
                        n = "(?:" + m.keys(e).join("|") + ")",
                        r = RegExp(n),
                        i = RegExp(n, "g");
                      return function (e) {
                        return (
                          (e = null == e ? "" : "" + e),
                          r.test(e) ? e.replace(i, t) : e
                        );
                      };
                    };
                  (m.escape = V(Q)),
                    (m.unescape = V(J)),
                    (m.result = function (e, t, n) {
                      m.isArray(t) || (t = [t]);
                      var r = t.length;
                      if (!r) return m.isFunction(n) ? n.call(e) : n;
                      for (var i = 0; i < r; i++) {
                        var o = null == e ? void 0 : e[t[i]];
                        void 0 === o && ((o = n), (i = r)),
                          (e = m.isFunction(o) ? o.call(e) : o);
                      }
                      return e;
                    });
                  var H = 0;
                  (m.uniqueId = function (e) {
                    var t = ++H + "";
                    return e ? e + t : t;
                  }),
                    (m.templateSettings = {
                      evaluate: /<%([\s\S]+?)%>/g,
                      interpolate: /<%=([\s\S]+?)%>/g,
                      escape: /<%-([\s\S]+?)%>/g,
                    });
                  var K = /(.)^/,
                    G = {
                      "'": "'",
                      "\\": "\\",
                      "\r": "r",
                      "\n": "n",
                      "\u2028": "u2028",
                      "\u2029": "u2029",
                    },
                    X = /\\|'|\r|\n|\u2028|\u2029/g,
                    Y = function (e) {
                      return "\\" + G[e];
                    };
                  (m.template = function (e, t, n) {
                    !t && n && (t = n),
                      (t = m.defaults({}, t, m.templateSettings));
                    var r = RegExp(
                        [
                          (t.escape || K).source,
                          (t.interpolate || K).source,
                          (t.evaluate || K).source,
                        ].join("|") + "|$",
                        "g"
                      ),
                      i = 0,
                      o = "__p+='";
                    e.replace(r, function (t, n, r, s, a) {
                      return (
                        (o += e.slice(i, a).replace(X, Y)),
                        (i = a + t.length),
                        n
                          ? (o +=
                              "'+\n((__t=(" +
                              n +
                              "))==null?'':_.escape(__t))+\n'")
                          : r
                          ? (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                          : s && (o += "';\n" + s + "\n__p+='"),
                        t
                      );
                    }),
                      (o += "';\n"),
                      t.variable || (o = "with(obj||{}){\n" + o + "}\n"),
                      (o =
                        "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                        o +
                        "return __p;\n");
                    var s;
                    try {
                      s = new Function(t.variable || "obj", "_", o);
                    } catch (e) {
                      throw ((e.source = o), e);
                    }
                    var a = function (e) {
                      return s.call(this, e, m);
                    };
                    return (
                      (a.source =
                        "function(" + (t.variable || "obj") + "){\n" + o + "}"),
                      a
                    );
                  }),
                    (m.chain = function (e) {
                      var t = m(e);
                      return (t._chain = !0), t;
                    });
                  var Z = function (e, t) {
                    return e._chain ? m(t).chain() : t;
                  };
                  (m.mixin = function (e) {
                    return (
                      m.each(m.functions(e), function (t) {
                        var n = (m[t] = e[t]);
                        m.prototype[t] = function () {
                          var e = [this._wrapped];
                          return l.apply(e, arguments), Z(this, n.apply(m, e));
                        };
                      }),
                      m
                    );
                  }),
                    m.mixin(m),
                    m.each(
                      [
                        "pop",
                        "push",
                        "reverse",
                        "shift",
                        "sort",
                        "splice",
                        "unshift",
                      ],
                      function (e) {
                        var t = a[e];
                        m.prototype[e] = function () {
                          var n = this._wrapped;
                          return (
                            t.apply(n, arguments),
                            ("shift" !== e && "splice" !== e) ||
                              0 !== n.length ||
                              delete n[0],
                            Z(this, n)
                          );
                        };
                      }
                    ),
                    m.each(["concat", "join", "slice"], function (e) {
                      var t = a[e];
                      m.prototype[e] = function () {
                        return Z(this, t.apply(this._wrapped, arguments));
                      };
                    }),
                    (m.prototype.value = function () {
                      return this._wrapped;
                    }),
                    (m.prototype.valueOf = m.prototype.toJSON =
                      m.prototype.value),
                    (m.prototype.toString = function () {
                      return String(this._wrapped);
                    }),
                    (r = []),
                    void 0 !==
                      (i = function () {
                        return m;
                      }.apply(t, r)) && (n.exports = i);
                })();
              }.call(t, n(7), n(17)(e)));
            },
            function (e, t, n) {
              "use strict";
              var r = n(29).Promise;
              (r._continueWhile = function (e, t) {
                return e()
                  ? t().then(function () {
                      return r._continueWhile(e, t);
                    })
                  : r.resolve();
              }),
                (e.exports = r);
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(44),
                o = n(0),
                s = o.extend,
                a = n(1),
                u = n(5),
                c = n(3),
                l = c.getSessionToken,
                h = c.ajax,
                f = function (e, t) {
                  var n = new Date().getTime(),
                    r = i(n + e);
                  return t ? r + "," + n + ",master" : r + "," + n;
                },
                d = function (e, t) {
                  t
                    ? (e["X-LC-Sign"] = f(u.applicationKey))
                    : (e["X-LC-Key"] = u.applicationKey);
                },
                p = function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = arguments[1],
                    n = {
                      "X-LC-Id": u.applicationId,
                      "Content-Type": "application/json;charset=UTF-8",
                    },
                    r = !1;
                  return (
                    "boolean" == typeof e.useMasterKey
                      ? (r = e.useMasterKey)
                      : "boolean" == typeof u._config.useMasterKey &&
                        (r = u._config.useMasterKey),
                    r && u.masterKey
                      ? t
                        ? (n["X-LC-Sign"] = f(u.masterKey, !0))
                        : (n["X-LC-Key"] = u.masterKey + ",master")
                      : d(n, t),
                    u.hookKey && (n["X-LC-Hook-Key"] = u.hookKey),
                    null !== u._config.production &&
                      (n["X-LC-Prod"] = String(u._config.production)),
                    (n["X-LC-UA"] = u._sharedConfig.userAgent),
                    a.resolve().then(function () {
                      var t = l(e);
                      if (t) n["X-LC-Session"] = t;
                      else if (!u._config.disableCurrentUser)
                        return u.User.currentAsync().then(function (e) {
                          return (
                            e &&
                              e._sessionToken &&
                              (n["X-LC-Session"] = e._sessionToken),
                            n
                          );
                        });
                      return n;
                    })
                  );
                },
                v = function (e) {
                  var t = e.service,
                    n = void 0 === t ? "api" : t,
                    r = e.version,
                    i = void 0 === r ? "1.1" : r,
                    o = e.path,
                    s = u._config.serverURLs[n];
                  if (!s) throw new Error("undefined server URL for " + n);
                  return (
                    "/" !== s.charAt(s.length - 1) && (s += "/"),
                    (s += i),
                    o && (s += o),
                    s
                  );
                },
                g = function (e) {
                  var t = e.service,
                    n = e.version,
                    i = e.method,
                    o = e.path,
                    s = e.query,
                    a = e.data,
                    c = e.authOptions,
                    l = e.signKey,
                    f = void 0 === l || l;
                  if (!u.applicationId || (!u.applicationKey && !u.masterKey))
                    throw new Error("Not initialized");
                  u._appRouter.refresh();
                  var d = u._config.requestTimeout,
                    g = v({ service: t, path: o, version: n });
                  return p(c, f).then(function (e) {
                    return h({
                      method: i,
                      url: g,
                      query: s,
                      data: a,
                      headers: e,
                      timeout: d,
                    }).catch(function (e) {
                      var t = {
                        code: e.code || -1,
                        error: e.message || e.responseText,
                      };
                      if (e.response && e.response.code) t = e.response;
                      else if (e.responseText)
                        try {
                          t = JSON.parse(e.responseText);
                        } catch (e) {}
                      (t.rawMessage = t.rawMessage || t.error),
                        u._sharedConfig.keepErrorRawMessage ||
                          (t.error +=
                            " [" +
                            (e.statusCode || "N/A") +
                            " " +
                            i +
                            " " +
                            g +
                            "]");
                      var n = new Error(t.error);
                      throw (delete t.error, r.extend(n, t));
                    });
                  });
                },
                _ = function (e, t, n, r, i, o, a) {
                  var u = "";
                  if (
                    (e && (u += "/" + e),
                    t && (u += "/" + t),
                    n && (u += "/" + n),
                    i && i._fetchWhenSave)
                  )
                    throw new Error("_fetchWhenSave should be in the query");
                  if (i && i._where)
                    throw new Error("_where should be in the query");
                  return (
                    r &&
                      "get" === r.toLowerCase() &&
                      ((a = s({}, a, i)), (i = null)),
                    g({ method: r, path: u, query: a, data: i, authOptions: o })
                  );
                };
              (u.request = g), (e.exports = { _request: _, request: g });
            },
            function (e, t, n) {
              "use strict";
              var r =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                i = n(0),
                o = n(8),
                s = n(6),
                a = s("leancloud:request"),
                u = s("leancloud:request:error"),
                c = n(1),
                l = 0,
                h = function (e) {
                  var t = e.method,
                    n = e.url,
                    i = e.query,
                    h = e.data,
                    f = e.headers,
                    d = void 0 === f ? {} : f,
                    p = e.onprogress,
                    v = e.timeout,
                    g = {};
                  if (i)
                    for (var _ in i) {
                      var m = i[_];
                      void 0 !== m &&
                        ("object" === (void 0 === m ? "undefined" : r(m))
                          ? (g[_] = JSON.stringify(m))
                          : (g[_] = m));
                    }
                  var y = l++;
                  return (
                    a("request(%d) %s %s %o %o %o", y, t, n, g, h, d),
                    new c(function (e, r) {
                      var c = o(t, n).set(d).query(g).send(h);
                      p && c.on("progress", p),
                        v && c.timeout(v),
                        c.end(function (o, c) {
                          return o
                            ? (c &&
                                (s.enabled("leancloud:request") ||
                                  u(
                                    "request(%d) %s %s %o %o %o",
                                    y,
                                    t,
                                    n,
                                    i,
                                    h,
                                    d
                                  ),
                                u(
                                  "response(%d) %d %O %o",
                                  y,
                                  c.status,
                                  c.body || c.text,
                                  c.header
                                ),
                                (o.statusCode = c.status),
                                (o.responseText = c.text),
                                (o.response = c.body)),
                              r(o))
                            : (a(
                                "response(%d) %d %O %o",
                                y,
                                c.status,
                                c.body || c.text,
                                c.header
                              ),
                              e(c.body));
                        });
                    })
                  );
                },
                f = function (e) {
                  return i.isNull(e) || i.isUndefined(e);
                },
                d = function (e) {
                  return i.isArray(e)
                    ? e
                    : void 0 === e || null === e
                    ? []
                    : [e];
                },
                p = function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.keys,
                    n = e.include,
                    r = e.includeACL,
                    i = {};
                  return (
                    t && (i.keys = d(t).join(",")),
                    n && (i.include = d(n).join(",")),
                    r && (i.returnACL = r),
                    i
                  );
                },
                v = function (e) {
                  return e.sessionToken
                    ? e.sessionToken
                    : e.user && "function" == typeof e.user.getSessionToken
                    ? e.user.getSessionToken()
                    : void 0;
                },
                g = function (e) {
                  return function (t) {
                    return e(t), t;
                  };
                },
                _ = function () {},
                m = function (e, t, n) {
                  var r;
                  return (
                    (r =
                      t && t.hasOwnProperty("constructor")
                        ? t.constructor
                        : function () {
                            e.apply(this, arguments);
                          }),
                    i.extend(r, e),
                    (_.prototype = e.prototype),
                    (r.prototype = new _()),
                    t && i.extend(r.prototype, t),
                    n && i.extend(r, n),
                    (r.prototype.constructor = r),
                    (r.__super__ = e.prototype),
                    r
                  );
                },
                y = function (e) {
                  return new Date(e);
                },
                b = function (e, t, n) {
                  var r = t.split("."),
                    i = r.pop(),
                    o = e;
                  return (
                    r.forEach(function (e) {
                      void 0 === o[e] && (o[e] = {}), (o = o[e]);
                    }),
                    (o[i] = n),
                    e
                  );
                },
                w = function (e, t) {
                  for (
                    var n = t.split("."), r = n[0], i = n.pop(), o = e, s = 0;
                    s < n.length;
                    s++
                  )
                    if (void 0 === (o = o[n[s]])) return [void 0, void 0, i];
                  return [o[i], o, i, r];
                },
                x = function (e) {
                  return (
                    i.isObject(e) &&
                    Object.getPrototypeOf(e) === Object.prototype
                  );
                };
              e.exports = {
                ajax: h,
                isNullOrUndefined: f,
                ensureArray: d,
                transformFetchOptions: p,
                getSessionToken: v,
                tap: g,
                inherits: m,
                parseDate: y,
                setValue: b,
                findValue: w,
                isPlainObject: x,
              };
            },
            function (e, t, n) {
              "use strict";
              function r(e, t) {
                var n = new Error(t);
                return (n.code = e), n;
              }
              n(0).extend(r, {
                OTHER_CAUSE: -1,
                INTERNAL_SERVER_ERROR: 1,
                CONNECTION_FAILED: 100,
                OBJECT_NOT_FOUND: 101,
                INVALID_QUERY: 102,
                INVALID_CLASS_NAME: 103,
                MISSING_OBJECT_ID: 104,
                INVALID_KEY_NAME: 105,
                INVALID_POINTER: 106,
                INVALID_JSON: 107,
                COMMAND_UNAVAILABLE: 108,
                NOT_INITIALIZED: 109,
                INCORRECT_TYPE: 111,
                INVALID_CHANNEL_NAME: 112,
                PUSH_MISCONFIGURED: 115,
                OBJECT_TOO_LARGE: 116,
                OPERATION_FORBIDDEN: 119,
                CACHE_MISS: 120,
                INVALID_NESTED_KEY: 121,
                INVALID_FILE_NAME: 122,
                INVALID_ACL: 123,
                TIMEOUT: 124,
                INVALID_EMAIL_ADDRESS: 125,
                MISSING_CONTENT_TYPE: 126,
                MISSING_CONTENT_LENGTH: 127,
                INVALID_CONTENT_LENGTH: 128,
                FILE_TOO_LARGE: 129,
                FILE_SAVE_ERROR: 130,
                FILE_DELETE_ERROR: 153,
                DUPLICATE_VALUE: 137,
                INVALID_ROLE_NAME: 139,
                EXCEEDED_QUOTA: 140,
                SCRIPT_FAILED: 141,
                VALIDATION_ERROR: 142,
                INVALID_IMAGE_DATA: 150,
                UNSAVED_FILE_ERROR: 151,
                INVALID_PUSH_TIME_ERROR: 152,
                USERNAME_MISSING: 200,
                PASSWORD_MISSING: 201,
                USERNAME_TAKEN: 202,
                EMAIL_TAKEN: 203,
                EMAIL_MISSING: 204,
                EMAIL_NOT_FOUND: 205,
                SESSION_MISSING: 206,
                MUST_CREATE_USER_THROUGH_SIGNUP: 207,
                ACCOUNT_ALREADY_LINKED: 208,
                LINKED_ID_MISSING: 250,
                INVALID_LINKED_SESSION: 251,
                UNSUPPORTED_SERVICE: 252,
                X_DOMAIN_REQUEST: 602,
              }),
                (e.exports = r);
            },
            function (e, t, n) {
              "use strict";
              (function (t) {
                var r = n(0),
                  i = n(9),
                  o = n(6),
                  s = n(22),
                  a = n(3),
                  u = a.inherits,
                  c = a.parseDate,
                  l = n(1),
                  h = t.AV || {};
                (h._config = {
                  serverURLs: {},
                  useMasterKey: !1,
                  production: null,
                  realtime: null,
                  requestTimeout: null,
                }),
                  (h._sharedConfig = { userAgent: s, liveQueryRealtime: null }),
                  (h._getAVPath = function (e) {
                    if (!h.applicationId)
                      throw new Error(
                        "You need to call AV.initialize before using AV."
                      );
                    if ((e || (e = ""), !r.isString(e)))
                      throw new Error(
                        "Tried to get a localStorage path that wasn't a String."
                      );
                    return (
                      "/" === e[0] && (e = e.substring(1)),
                      "AV/" + h.applicationId + "/" + e
                    );
                  }),
                  (h._installationId = null),
                  (h._getInstallationId = function () {
                    if (h._installationId) return l.resolve(h._installationId);
                    var e = h._getAVPath("installationId");
                    return h.localStorage.getItemAsync(e).then(function (t) {
                      return (
                        (h._installationId = t),
                        h._installationId
                          ? t
                          : ((h._installationId = t = i()),
                            h.localStorage.setItemAsync(e, t).then(function () {
                              return t;
                            }))
                      );
                    });
                  }),
                  (h._subscriptionId = null),
                  (h._refreshSubscriptionId = function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : h._getAVPath("subscriptionId"),
                      t = (h._subscriptionId = i());
                    return h.localStorage.setItemAsync(e, t).then(function () {
                      return t;
                    });
                  }),
                  (h._getSubscriptionId = function () {
                    if (h._subscriptionId) return l.resolve(h._subscriptionId);
                    var e = h._getAVPath("subscriptionId");
                    return h.localStorage.getItemAsync(e).then(function (t) {
                      return (
                        (h._subscriptionId = t),
                        h._subscriptionId || (t = h._refreshSubscriptionId(e)),
                        t
                      );
                    });
                  }),
                  (h._parseDate = c),
                  (h._extend = function (e, t) {
                    var n = u(this, e, t);
                    return (n.extend = this.extend), n;
                  }),
                  (h._encode = function (e, t, n) {
                    var i =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3];
                    if (e instanceof h.Object) {
                      if (n) throw new Error("AV.Objects not allowed here");
                      return t && !r.include(t, e) && e._hasData
                        ? e._toFullJSON(t.concat(e), i)
                        : e._toPointer();
                    }
                    if (e instanceof h.ACL) return e.toJSON();
                    if (r.isDate(e))
                      return i
                        ? { __type: "Date", iso: e.toJSON() }
                        : e.toJSON();
                    if (e instanceof h.GeoPoint) return e.toJSON();
                    if (r.isArray(e))
                      return r.map(e, function (e) {
                        return h._encode(e, t, n, i);
                      });
                    if (r.isRegExp(e)) return e.source;
                    if (e instanceof h.Relation) return e.toJSON();
                    if (e instanceof h.Op) return e.toJSON();
                    if (e instanceof h.File) {
                      if (!e.url() && !e.id)
                        throw new Error(
                          "Tried to save an object containing an unsaved file."
                        );
                      return e._toFullJSON(t, i);
                    }
                    return r.isObject(e)
                      ? r.mapObject(e, function (e, r) {
                          return h._encode(e, t, n, i);
                        })
                      : e;
                  }),
                  (h._decode = function (e, t) {
                    if (!r.isObject(e) || r.isDate(e)) return e;
                    if (r.isArray(e))
                      return r.map(e, function (e) {
                        return h._decode(e);
                      });
                    if (e instanceof h.Object) return e;
                    if (e instanceof h.File) return e;
                    if (e instanceof h.Op) return e;
                    if (e instanceof h.GeoPoint) return e;
                    if (e instanceof h.ACL) return e;
                    if ("ACL" === t) return new h.ACL(e);
                    if (e.__op) return h.Op._decode(e);
                    var n;
                    if ("Pointer" === e.__type) {
                      n = e.className;
                      var i = h.Object._create(n);
                      if (Object.keys(e).length > 3) {
                        var o = r.clone(e);
                        delete o.__type,
                          delete o.className,
                          i._finishFetch(o, !0);
                      } else i._finishFetch({ objectId: e.objectId }, !1);
                      return i;
                    }
                    if ("Object" === e.__type) {
                      n = e.className;
                      var s = r.clone(e);
                      delete s.__type, delete s.className;
                      var a = h.Object._create(n);
                      return a._finishFetch(s, !0), a;
                    }
                    if ("Date" === e.__type) return h._parseDate(e.iso);
                    if ("GeoPoint" === e.__type)
                      return new h.GeoPoint({
                        latitude: e.latitude,
                        longitude: e.longitude,
                      });
                    if ("Relation" === e.__type) {
                      if (!t)
                        throw new Error("key missing decoding a Relation");
                      var u = new h.Relation(null, t);
                      return (u.targetClassName = e.className), u;
                    }
                    if ("File" === e.__type) {
                      var c = new h.File(e.name),
                        l = r.clone(e);
                      return delete l.__type, c._finishFetch(l), c;
                    }
                    return r.mapObject(e, h._decode);
                  }),
                  (h.parseJSON = h._decode),
                  (h.parse = function (e) {
                    return h.parseJSON(JSON.parse(e));
                  }),
                  (h.stringify = function (e) {
                    return JSON.stringify(h._encode(e, [], !1, !0));
                  }),
                  (h._encodeObjectOrArray = function (e) {
                    var t = function (e) {
                      return (
                        e && e._toFullJSON && (e = e._toFullJSON([])),
                        r.mapObject(e, function (e) {
                          return h._encode(e, []);
                        })
                      );
                    };
                    return r.isArray(e)
                      ? e.map(function (e) {
                          return t(e);
                        })
                      : t(e);
                  }),
                  (h._arrayEach = r.each),
                  (h._traverse = function (e, t, n) {
                    if (e instanceof h.Object) {
                      if (((n = n || []), r.indexOf(n, e) >= 0)) return;
                      return n.push(e), h._traverse(e.attributes, t, n), t(e);
                    }
                    return e instanceof h.Relation || e instanceof h.File
                      ? t(e)
                      : r.isArray(e)
                      ? (r.each(e, function (r, i) {
                          var o = h._traverse(r, t, n);
                          o && (e[i] = o);
                        }),
                        t(e))
                      : r.isObject(e)
                      ? (h._each(e, function (r, i) {
                          var o = h._traverse(r, t, n);
                          o && (e[i] = o);
                        }),
                        t(e))
                      : t(e);
                  }),
                  (h._objectEach = h._each = function (e, t) {
                    r.isObject(e)
                      ? r.each(r.keys(e), function (n) {
                          t(e[n], n);
                        })
                      : r.each(e, t);
                  }),
                  (h.debug = {
                    enable: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "leancloud*";
                      return o.enable(e);
                    },
                    disable: o.disable,
                  }),
                  (e.exports = h);
              }.call(t, n(7)));
            },
            function (e, n, r) {
              "use strict";
              function i(e) {
                return (i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              function o() {
                return (
                  !(
                    "undefined" == typeof window ||
                    !window.process ||
                    ("renderer" !== window.process.type &&
                      !window.process.__nwjs)
                  ) ||
                  (("undefined" == typeof navigator ||
                    !navigator.userAgent ||
                    !navigator.userAgent
                      .toLowerCase()
                      .match(/(edge|trident)\/(\d+)/)) &&
                    (("undefined" != typeof document &&
                      document.documentElement &&
                      document.documentElement.style &&
                      document.documentElement.style.WebkitAppearance) ||
                      ("undefined" != typeof window &&
                        window.console &&
                        (window.console.firebug ||
                          (window.console.exception &&
                            window.console.table))) ||
                      ("undefined" != typeof navigator &&
                        navigator.userAgent &&
                        navigator.userAgent
                          .toLowerCase()
                          .match(/firefox\/(\d+)/) &&
                        parseInt(RegExp.$1, 10) >= 31) ||
                      ("undefined" != typeof navigator &&
                        navigator.userAgent &&
                        navigator.userAgent
                          .toLowerCase()
                          .match(/applewebkit\/(\d+)/))))
                );
              }
              function s(t) {
                if (
                  ((t[0] =
                    (this.useColors ? "%c" : "") +
                    this.namespace +
                    (this.useColors ? " %c" : " ") +
                    t[0] +
                    (this.useColors ? "%c " : " ") +
                    "+" +
                    e.exports.humanize(this.diff)),
                  this.useColors)
                ) {
                  var n = "color: " + this.color;
                  t.splice(1, 0, n, "color: inherit");
                  var r = 0,
                    i = 0;
                  t[0].replace(/%[a-zA-Z%]/g, function (e) {
                    "%%" !== e && (r++, "%c" === e && (i = r));
                  }),
                    t.splice(i, 0, n);
                }
              }
              function a() {
                var e;
                return (
                  "object" ===
                    ("undefined" == typeof console
                      ? "undefined"
                      : i(console)) &&
                  console.log &&
                  (e = console).log.apply(e, arguments)
                );
              }
              function u(e) {
                try {
                  e
                    ? n.storage.setItem("debug", e)
                    : n.storage.removeItem("debug");
                } catch (e) {}
              }
              function c() {
                var e;
                try {
                  e = n.storage.getItem("debug");
                } catch (e) {}
                return !e && void 0 !== t && "env" in t && (e = t.env.DEBUG), e;
              }
              (n.log = a),
                (n.formatArgs = s),
                (n.save = u),
                (n.load = c),
                (n.useColors = o),
                (n.storage = (function () {
                  try {
                    return localStorage;
                  } catch (e) {}
                })()),
                (n.colors = [
                  "#0000CC",
                  "#0000FF",
                  "#0033CC",
                  "#0033FF",
                  "#0066CC",
                  "#0066FF",
                  "#0099CC",
                  "#0099FF",
                  "#00CC00",
                  "#00CC33",
                  "#00CC66",
                  "#00CC99",
                  "#00CCCC",
                  "#00CCFF",
                  "#3300CC",
                  "#3300FF",
                  "#3333CC",
                  "#3333FF",
                  "#3366CC",
                  "#3366FF",
                  "#3399CC",
                  "#3399FF",
                  "#33CC00",
                  "#33CC33",
                  "#33CC66",
                  "#33CC99",
                  "#33CCCC",
                  "#33CCFF",
                  "#6600CC",
                  "#6600FF",
                  "#6633CC",
                  "#6633FF",
                  "#66CC00",
                  "#66CC33",
                  "#9900CC",
                  "#9900FF",
                  "#9933CC",
                  "#9933FF",
                  "#99CC00",
                  "#99CC33",
                  "#CC0000",
                  "#CC0033",
                  "#CC0066",
                  "#CC0099",
                  "#CC00CC",
                  "#CC00FF",
                  "#CC3300",
                  "#CC3333",
                  "#CC3366",
                  "#CC3399",
                  "#CC33CC",
                  "#CC33FF",
                  "#CC6600",
                  "#CC6633",
                  "#CC9900",
                  "#CC9933",
                  "#CCCC00",
                  "#CCCC33",
                  "#FF0000",
                  "#FF0033",
                  "#FF0066",
                  "#FF0099",
                  "#FF00CC",
                  "#FF00FF",
                  "#FF3300",
                  "#FF3333",
                  "#FF3366",
                  "#FF3399",
                  "#FF33CC",
                  "#FF33FF",
                  "#FF6600",
                  "#FF6633",
                  "#FF9900",
                  "#FF9933",
                  "#FFCC00",
                  "#FFCC33",
                ]),
                (e.exports = r(20)(n)),
                (e.exports.formatters.j = function (e) {
                  try {
                    return JSON.stringify(e);
                  } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message;
                  }
                });
            },
            function (e, t) {
              var n;
              n = (function () {
                return this;
              })();
              try {
                n = n || Function("return this")() || (0, eval)("this");
              } catch (e) {
                "object" == typeof window && (n = window);
              }
              e.exports = n;
            },
            function (e, t, n) {
              function r() {}
              function i(e) {
                if (!v(e)) return e;
                var t = [];
                for (var n in e) o(t, n, e[n]);
                return t.join("&");
              }
              function o(e, t, n) {
                if (null != n)
                  if (Array.isArray(n))
                    n.forEach(function (n) {
                      o(e, t, n);
                    });
                  else if (v(n)) for (var r in n) o(e, t + "[" + r + "]", n[r]);
                  else
                    e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
                else null === n && e.push(encodeURIComponent(t));
              }
              function s(e) {
                for (
                  var t, n, r = {}, i = e.split("&"), o = 0, s = i.length;
                  o < s;
                  ++o
                )
                  (t = i[o]),
                    (n = t.indexOf("=")),
                    -1 == n
                      ? (r[decodeURIComponent(t)] = "")
                      : (r[
                          decodeURIComponent(t.slice(0, n))
                        ] = decodeURIComponent(t.slice(n + 1)));
                return r;
              }
              function a(e) {
                for (
                  var t,
                    n,
                    r,
                    i,
                    o = e.split(/\r?\n/),
                    s = {},
                    a = 0,
                    u = o.length;
                  a < u;
                  ++a
                )
                  (n = o[a]),
                    -1 !== (t = n.indexOf(":")) &&
                      ((r = n.slice(0, t).toLowerCase()),
                      (i = y(n.slice(t + 1))),
                      (s[r] = i));
                return s;
              }
              function u(e) {
                return /[\/+]json($|[^-\w])/.test(e);
              }
              function c(e) {
                (this.req = e),
                  (this.xhr = this.req.xhr),
                  (this.text =
                    ("HEAD" != this.req.method &&
                      ("" === this.xhr.responseType ||
                        "text" === this.xhr.responseType)) ||
                    void 0 === this.xhr.responseType
                      ? this.xhr.responseText
                      : null),
                  (this.statusText = this.req.xhr.statusText);
                var t = this.xhr.status;
                1223 === t && (t = 204),
                  this._setStatusProperties(t),
                  (this.header = this.headers = a(
                    this.xhr.getAllResponseHeaders()
                  )),
                  (this.header["content-type"] = this.xhr.getResponseHeader(
                    "content-type"
                  )),
                  this._setHeaderProperties(this.header),
                  null === this.text && e._responseType
                    ? (this.body = this.xhr.response)
                    : (this.body =
                        "HEAD" != this.req.method
                          ? this._parseBody(
                              this.text ? this.text : this.xhr.response
                            )
                          : null);
              }
              function l(e, t) {
                var n = this;
                (this._query = this._query || []),
                  (this.method = e),
                  (this.url = t),
                  (this.header = {}),
                  (this._header = {}),
                  this.on("end", function () {
                    var e = null,
                      t = null;
                    try {
                      t = new c(n);
                    } catch (t) {
                      return (
                        (e = new Error(
                          "Parser is unable to parse the response"
                        )),
                        (e.parse = !0),
                        (e.original = t),
                        n.xhr
                          ? ((e.rawResponse =
                              void 0 === n.xhr.responseType
                                ? n.xhr.responseText
                                : n.xhr.response),
                            (e.status = n.xhr.status ? n.xhr.status : null),
                            (e.statusCode = e.status))
                          : ((e.rawResponse = null), (e.status = null)),
                        n.callback(e)
                      );
                    }
                    n.emit("response", t);
                    var r;
                    try {
                      n._isResponseOK(t) ||
                        (r = new Error(
                          t.statusText || "Unsuccessful HTTP response"
                        ));
                    } catch (e) {
                      r = e;
                    }
                    r
                      ? ((r.original = e),
                        (r.response = t),
                        (r.status = t.status),
                        n.callback(r, t))
                      : n.callback(null, t);
                  });
              }
              function h(e, t, n) {
                var r = m("DELETE", e);
                return (
                  "function" == typeof t && ((n = t), (t = null)),
                  t && r.send(t),
                  n && r.end(n),
                  r
                );
              }
              var f;
              f =
                "undefined" != typeof window
                  ? window
                  : "undefined" != typeof self
                  ? self
                  : this;
              var d = n(24),
                p = n(25),
                v = n(11),
                g = n(26),
                _ = n(28),
                m = (t = e.exports = function (e, n) {
                  return "function" == typeof n
                    ? new t.Request("GET", e).end(n)
                    : 1 == arguments.length
                    ? new t.Request("GET", e)
                    : new t.Request(e, n);
                });
              (t.Request = l),
                (m.getXHR = function () {
                  if (
                    !(
                      !f.XMLHttpRequest ||
                      (f.location &&
                        "file:" == f.location.protocol &&
                        f.ActiveXObject)
                    )
                  )
                    return new XMLHttpRequest();
                  try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                  } catch (e) {}
                  try {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                  } catch (e) {}
                  try {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0");
                  } catch (e) {}
                  try {
                    return new ActiveXObject("Msxml2.XMLHTTP");
                  } catch (e) {}
                  throw Error(
                    "Browser-only version of superagent could not find XHR"
                  );
                });
              var y = "".trim
                ? function (e) {
                    return e.trim();
                  }
                : function (e) {
                    return e.replace(/(^\s*|\s*$)/g, "");
                  };
              (m.serializeObject = i),
                (m.parseString = s),
                (m.types = {
                  html: "text/html",
                  json: "application/json",
                  xml: "text/xml",
                  urlencoded: "application/x-www-form-urlencoded",
                  form: "application/x-www-form-urlencoded",
                  "form-data": "application/x-www-form-urlencoded",
                }),
                (m.serialize = {
                  "application/x-www-form-urlencoded": i,
                  "application/json": JSON.stringify,
                }),
                (m.parse = {
                  "application/x-www-form-urlencoded": s,
                  "application/json": JSON.parse,
                }),
                g(c.prototype),
                (c.prototype._parseBody = function (e) {
                  var t = m.parse[this.type];
                  return this.req._parser
                    ? this.req._parser(this, e)
                    : (!t && u(this.type) && (t = m.parse["application/json"]),
                      t && e && (e.length || e instanceof Object)
                        ? t(e)
                        : null);
                }),
                (c.prototype.toError = function () {
                  var e = this.req,
                    t = e.method,
                    n = e.url,
                    r = "cannot " + t + " " + n + " (" + this.status + ")",
                    i = new Error(r);
                  return (
                    (i.status = this.status), (i.method = t), (i.url = n), i
                  );
                }),
                (m.Response = c),
                d(l.prototype),
                p(l.prototype),
                (l.prototype.type = function (e) {
                  return this.set("Content-Type", m.types[e] || e), this;
                }),
                (l.prototype.accept = function (e) {
                  return this.set("Accept", m.types[e] || e), this;
                }),
                (l.prototype.auth = function (e, t, n) {
                  1 === arguments.length && (t = ""),
                    "object" == typeof t && null !== t && ((n = t), (t = "")),
                    n ||
                      (n = {
                        type: "function" == typeof btoa ? "basic" : "auto",
                      });
                  var r = function (e) {
                    if ("function" == typeof btoa) return btoa(e);
                    throw new Error(
                      "Cannot use basic auth, btoa is not a function"
                    );
                  };
                  return this._auth(e, t, n, r);
                }),
                (l.prototype.query = function (e) {
                  return (
                    "string" != typeof e && (e = i(e)),
                    e && this._query.push(e),
                    this
                  );
                }),
                (l.prototype.attach = function (e, t, n) {
                  if (t) {
                    if (this._data)
                      throw Error("superagent can't mix .send() and .attach()");
                    this._getFormData().append(e, t, n || t.name);
                  }
                  return this;
                }),
                (l.prototype._getFormData = function () {
                  return (
                    this._formData || (this._formData = new f.FormData()),
                    this._formData
                  );
                }),
                (l.prototype.callback = function (e, t) {
                  if (this._shouldRetry(e, t)) return this._retry();
                  var n = this._callback;
                  this.clearTimeout(),
                    e &&
                      (this._maxRetries && (e.retries = this._retries - 1),
                      this.emit("error", e)),
                    n(e, t);
                }),
                (l.prototype.crossDomainError = function () {
                  var e = new Error(
                    "Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc."
                  );
                  (e.crossDomain = !0),
                    (e.status = this.status),
                    (e.method = this.method),
                    (e.url = this.url),
                    this.callback(e);
                }),
                (l.prototype.buffer = l.prototype.ca = l.prototype.agent = function () {
                  return this;
                }),
                (l.prototype.pipe = l.prototype.write = function () {
                  throw Error(
                    "Streaming is not supported in browser version of superagent"
                  );
                }),
                (l.prototype._isHost = function (e) {
                  return (
                    e &&
                    "object" == typeof e &&
                    !Array.isArray(e) &&
                    "[object Object]" !== Object.prototype.toString.call(e)
                  );
                }),
                (l.prototype.end = function (e) {
                  return (
                    this._endCalled,
                    (this._endCalled = !0),
                    (this._callback = e || r),
                    this._finalizeQueryString(),
                    this._end()
                  );
                }),
                (l.prototype._end = function () {
                  var e = this,
                    t = (this.xhr = m.getXHR()),
                    n = this._formData || this._data;
                  this._setTimeouts(),
                    (t.onreadystatechange = function () {
                      var n = t.readyState;
                      if (
                        (n >= 2 &&
                          e._responseTimeoutTimer &&
                          clearTimeout(e._responseTimeoutTimer),
                        4 == n)
                      ) {
                        var r;
                        try {
                          r = t.status;
                        } catch (e) {
                          r = 0;
                        }
                        if (!r) {
                          if (e.timedout || e._aborted) return;
                          return e.crossDomainError();
                        }
                        e.emit("end");
                      }
                    });
                  var r = function (t, n) {
                    n.total > 0 && (n.percent = (n.loaded / n.total) * 100),
                      (n.direction = t),
                      e.emit("progress", n);
                  };
                  if (this.hasListeners("progress"))
                    try {
                      (t.onprogress = r.bind(null, "download")),
                        t.upload &&
                          (t.upload.onprogress = r.bind(null, "upload"));
                    } catch (e) {}
                  try {
                    this.username && this.password
                      ? t.open(
                          this.method,
                          this.url,
                          !0,
                          this.username,
                          this.password
                        )
                      : t.open(this.method, this.url, !0);
                  } catch (e) {
                    return this.callback(e);
                  }
                  if (
                    (this._withCredentials && (t.withCredentials = !0),
                    !this._formData &&
                      "GET" != this.method &&
                      "HEAD" != this.method &&
                      "string" != typeof n &&
                      !this._isHost(n))
                  ) {
                    var i = this._header["content-type"],
                      o =
                        this._serializer ||
                        m.serialize[i ? i.split(";")[0] : ""];
                    !o && u(i) && (o = m.serialize["application/json"]),
                      o && (n = o(n));
                  }
                  for (var s in this.header)
                    null != this.header[s] &&
                      this.header.hasOwnProperty(s) &&
                      t.setRequestHeader(s, this.header[s]);
                  return (
                    this._responseType && (t.responseType = this._responseType),
                    this.emit("request", this),
                    t.send(void 0 !== n ? n : null),
                    this
                  );
                }),
                (m.agent = function () {
                  return new _();
                }),
                ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(
                  function (e) {
                    _.prototype[e.toLowerCase()] = function (t, n) {
                      var r = new m.Request(e, t);
                      return this._setDefaults(r), n && r.end(n), r;
                    };
                  }
                ),
                (_.prototype.del = _.prototype.delete),
                (m.get = function (e, t, n) {
                  var r = m("GET", e);
                  return (
                    "function" == typeof t && ((n = t), (t = null)),
                    t && r.query(t),
                    n && r.end(n),
                    r
                  );
                }),
                (m.head = function (e, t, n) {
                  var r = m("HEAD", e);
                  return (
                    "function" == typeof t && ((n = t), (t = null)),
                    t && r.query(t),
                    n && r.end(n),
                    r
                  );
                }),
                (m.options = function (e, t, n) {
                  var r = m("OPTIONS", e);
                  return (
                    "function" == typeof t && ((n = t), (t = null)),
                    t && r.send(t),
                    n && r.end(n),
                    r
                  );
                }),
                (m.del = h),
                (m.delete = h),
                (m.patch = function (e, t, n) {
                  var r = m("PATCH", e);
                  return (
                    "function" == typeof t && ((n = t), (t = null)),
                    t && r.send(t),
                    n && r.end(n),
                    r
                  );
                }),
                (m.post = function (e, t, n) {
                  var r = m("POST", e);
                  return (
                    "function" == typeof t && ((n = t), (t = null)),
                    t && r.send(t),
                    n && r.end(n),
                    r
                  );
                }),
                (m.put = function (e, t, n) {
                  var r = m("PUT", e);
                  return (
                    "function" == typeof t && ((n = t), (t = null)),
                    t && r.send(t),
                    n && r.end(n),
                    r
                  );
                });
            },
            function (e, t, n) {
              function r(e, t, n) {
                var r = (t && n) || 0;
                "string" == typeof e &&
                  ((t = "binary" === e ? new Array(16) : null), (e = null)),
                  (e = e || {});
                var s = e.random || (e.rng || i)();
                if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t))
                  for (var a = 0; a < 16; ++a) t[r + a] = s[a];
                return t || o(s);
              }
              var i = n(18),
                o = n(19);
              e.exports = r;
            },
            function (e, t, n) {
              "use strict";
              e.exports = "3.15.0";
            },
            function (e, t, n) {
              "use strict";
              function r(e) {
                return null !== e && "object" == typeof e;
              }
              e.exports = r;
            },
            function (e, t, n) {
              "use strict";
              var r = n(1),
                i = n(31),
                o = ["getItem", "setItem", "removeItem", "clear"];
              i.async
                ? o.forEach(function (e) {
                    "function" != typeof i[e] &&
                      (i[e] = function () {
                        var t = new Error(
                          "Synchronous API [" +
                            e +
                            "] is not available in this runtime."
                        );
                        throw ((t.code = "SYNC_API_NOT_AVAILABLE"), t);
                      });
                  })
                : o.forEach(function (e) {
                    "function" == typeof i[e] &&
                      (i[e + "Async"] = function () {
                        return r.resolve(i[e].apply(i, arguments));
                      });
                  }),
                (e.exports = i);
            },
            function (e, t, n) {
              "use strict";
              var r = n(12),
                i = n(5),
                o = (t.removeAsync = r.removeItemAsync.bind(r)),
                s = function (e, t) {
                  try {
                    e = JSON.parse(e);
                  } catch (e) {
                    return null;
                  }
                  return e
                    ? e.expiredAt && e.expiredAt < Date.now()
                      ? o(t).then(function () {
                          return null;
                        })
                      : e.value
                    : null;
                };
              (t.getAsync = function (e) {
                return (
                  (e = "AV/" + i.applicationId + "/" + e),
                  r.getItemAsync(e).then(function (t) {
                    return s(t, e);
                  })
                );
              }),
                (t.setAsync = function (e, t, n) {
                  var o = { value: t };
                  return (
                    "number" == typeof n && (o.expiredAt = Date.now() + n),
                    r.setItemAsync(
                      "AV/" + i.applicationId + "/" + e,
                      JSON.stringify(o)
                    )
                  );
                });
            },
            function (e, t) {
              var n = {
                utf8: {
                  stringToBytes: function (e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
                  },
                  bytesToString: function (e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)));
                  },
                },
                bin: {
                  stringToBytes: function (e) {
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(255 & e.charCodeAt(n));
                    return t;
                  },
                  bytesToString: function (e) {
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(String.fromCharCode(e[n]));
                    return t.join("");
                  },
                },
              };
              e.exports = n;
            },
            function (e, t, n) {
              "use strict";
              /*!
               * LeanCloud JavaScript SDK
               * https://leancloud.cn
               *
               * Copyright 2016 LeanCloud.cn, Inc.
               * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
               */
              n(16);
              var r = n(0),
                i = n(5);
              (i._ = r),
                (i.version = n(10)),
                (i.Promise = n(1)),
                (i.localStorage = n(12)),
                (i.Cache = n(13)),
                (i.Error = n(4)),
                n(33),
                n(35)(i),
                n(36)(i),
                n(37)(i),
                n(38)(i),
                n(39)(i),
                n(40)(i),
                n(48)(i),
                n(49)(i),
                n(50)(i),
                n(51)(i),
                n(52)(i),
                n(54)(i),
                n(55)(i),
                n(56)(i),
                n(57)(i),
                n(58)(i),
                n(59)(i),
                (i.Conversation = n(60)),
                n(61),
                (e.exports = i);
            },
            function (e, t, n) {
              "use strict";
            },
            function (e, t) {
              e.exports = function (e) {
                return (
                  e.webpackPolyfill ||
                    ((e.deprecate = function () {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                      enumerable: !0,
                      get: function () {
                        return e.l;
                      },
                    }),
                    Object.defineProperty(e, "id", {
                      enumerable: !0,
                      get: function () {
                        return e.i;
                      },
                    }),
                    (e.webpackPolyfill = 1)),
                  e
                );
              };
            },
            function (e, t) {
              var n =
                ("undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto)) ||
                ("undefined" != typeof msCrypto &&
                  "function" == typeof window.msCrypto.getRandomValues &&
                  msCrypto.getRandomValues.bind(msCrypto));
              if (n) {
                var r = new Uint8Array(16);
                e.exports = function () {
                  return n(r), r;
                };
              } else {
                var i = new Array(16);
                e.exports = function () {
                  for (var e, t = 0; t < 16; t++)
                    0 == (3 & t) && (e = 4294967296 * Math.random()),
                      (i[t] = (e >>> ((3 & t) << 3)) & 255);
                  return i;
                };
              }
            },
            function (e, t) {
              function n(e, t) {
                var n = t || 0,
                  i = r;
                return [
                  i[e[n++]],
                  i[e[n++]],
                  i[e[n++]],
                  i[e[n++]],
                  "-",
                  i[e[n++]],
                  i[e[n++]],
                  "-",
                  i[e[n++]],
                  i[e[n++]],
                  "-",
                  i[e[n++]],
                  i[e[n++]],
                  "-",
                  i[e[n++]],
                  i[e[n++]],
                  i[e[n++]],
                  i[e[n++]],
                  i[e[n++]],
                  i[e[n++]],
                ].join("");
              }
              for (var r = [], i = 0; i < 256; ++i)
                r[i] = (i + 256).toString(16).substr(1);
              e.exports = n;
            },
            function (e, t, n) {
              "use strict";
              function r(e) {
                function t(e) {
                  for (var t = 0, n = 0; n < e.length; n++)
                    (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0);
                  return r.colors[Math.abs(t) % r.colors.length];
                }
                function r(e) {
                  function n() {
                    if (n.enabled) {
                      for (
                        var e = arguments.length, t = new Array(e), i = 0;
                        i < e;
                        i++
                      )
                        t[i] = arguments[i];
                      var o = n,
                        a = Number(new Date()),
                        u = a - (s || a);
                      (o.diff = u),
                        (o.prev = s),
                        (o.curr = a),
                        (s = a),
                        (t[0] = r.coerce(t[0])),
                        "string" != typeof t[0] && t.unshift("%O");
                      var c = 0;
                      (t[0] = t[0].replace(/%([a-zA-Z%])/g, function (e, n) {
                        if ("%%" === e) return e;
                        c++;
                        var i = r.formatters[n];
                        if ("function" == typeof i) {
                          var s = t[c];
                          (e = i.call(o, s)), t.splice(c, 1), c--;
                        }
                        return e;
                      })),
                        r.formatArgs.call(o, t),
                        (o.log || r.log).apply(o, t);
                    }
                  }
                  var s;
                  return (
                    (n.namespace = e),
                    (n.enabled = r.enabled(e)),
                    (n.useColors = r.useColors()),
                    (n.color = t(e)),
                    (n.destroy = i),
                    (n.extend = o),
                    "function" == typeof r.init && r.init(n),
                    r.instances.push(n),
                    n
                  );
                }
                function i() {
                  var e = r.instances.indexOf(this);
                  return -1 !== e && (r.instances.splice(e, 1), !0);
                }
                function o(e, t) {
                  return r(this.namespace + (void 0 === t ? ":" : t) + e);
                }
                function s(e) {
                  r.save(e), (r.names = []), (r.skips = []);
                  var t,
                    n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    i = n.length;
                  for (t = 0; t < i; t++)
                    n[t] &&
                      ((e = n[t].replace(/\*/g, ".*?")),
                      "-" === e[0]
                        ? r.skips.push(new RegExp("^" + e.substr(1) + "$"))
                        : r.names.push(new RegExp("^" + e + "$")));
                  for (t = 0; t < r.instances.length; t++) {
                    var o = r.instances[t];
                    o.enabled = r.enabled(o.namespace);
                  }
                }
                function a() {
                  r.enable("");
                }
                function u(e) {
                  if ("*" === e[e.length - 1]) return !0;
                  var t, n;
                  for (t = 0, n = r.skips.length; t < n; t++)
                    if (r.skips[t].test(e)) return !1;
                  for (t = 0, n = r.names.length; t < n; t++)
                    if (r.names[t].test(e)) return !0;
                  return !1;
                }
                function c(e) {
                  return e instanceof Error ? e.stack || e.message : e;
                }
                return (
                  (r.debug = r),
                  (r.default = r),
                  (r.coerce = c),
                  (r.disable = a),
                  (r.enable = s),
                  (r.enabled = u),
                  (r.humanize = n(21)),
                  Object.keys(e).forEach(function (t) {
                    r[t] = e[t];
                  }),
                  (r.instances = []),
                  (r.names = []),
                  (r.skips = []),
                  (r.formatters = {}),
                  (r.selectColor = t),
                  r.enable(r.load()),
                  r
                );
              }
              e.exports = r;
            },
            function (e, t) {
              function n(e) {
                if (((e = String(e)), !(e.length > 100))) {
                  var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e
                  );
                  if (t) {
                    var n = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return n * h;
                      case "weeks":
                      case "week":
                      case "w":
                        return n * l;
                      case "days":
                      case "day":
                      case "d":
                        return n * c;
                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * u;
                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * a;
                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * s;
                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return n;
                      default:
                        return;
                    }
                  }
                }
              }
              function r(e) {
                var t = Math.abs(e);
                return t >= c
                  ? Math.round(e / c) + "d"
                  : t >= u
                  ? Math.round(e / u) + "h"
                  : t >= a
                  ? Math.round(e / a) + "m"
                  : t >= s
                  ? Math.round(e / s) + "s"
                  : e + "ms";
              }
              function i(e) {
                var t = Math.abs(e);
                return t >= c
                  ? o(e, t, c, "day")
                  : t >= u
                  ? o(e, t, u, "hour")
                  : t >= a
                  ? o(e, t, a, "minute")
                  : t >= s
                  ? o(e, t, s, "second")
                  : e + " ms";
              }
              function o(e, t, n, r) {
                var i = t >= 1.5 * n;
                return Math.round(e / n) + " " + r + (i ? "s" : "");
              }
              var s = 1e3,
                a = 60 * s,
                u = 60 * a,
                c = 24 * u,
                l = 7 * c,
                h = 365.25 * c;
              e.exports = function (e, t) {
                t = t || {};
                var o = typeof e;
                if ("string" === o && e.length > 0) return n(e);
                if ("number" === o && !1 === isNaN(e))
                  return t.long ? i(e) : r(e);
                throw new Error(
                  "val is not a non-empty string or a valid number. val=" +
                    JSON.stringify(e)
                );
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(10),
                i = ["Browser"].concat(n(23));
              e.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")";
            },
            function (e, t, n) {
              "use strict";
              e.exports = [];
            },
            function (e, t, n) {
              function r(e) {
                if (e) return i(e);
              }
              function i(e) {
                for (var t in r.prototype) e[t] = r.prototype[t];
                return e;
              }
              (e.exports = r),
                (r.prototype.on = r.prototype.addEventListener = function (
                  e,
                  t
                ) {
                  return (
                    (this._callbacks = this._callbacks || {}),
                    (this._callbacks["$" + e] =
                      this._callbacks["$" + e] || []).push(t),
                    this
                  );
                }),
                (r.prototype.once = function (e, t) {
                  function n() {
                    this.off(e, n), t.apply(this, arguments);
                  }
                  return (n.fn = t), this.on(e, n), this;
                }),
                (r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (
                  e,
                  t
                ) {
                  if (
                    ((this._callbacks = this._callbacks || {}),
                    0 == arguments.length)
                  )
                    return (this._callbacks = {}), this;
                  var n = this._callbacks["$" + e];
                  if (!n) return this;
                  if (1 == arguments.length)
                    return delete this._callbacks["$" + e], this;
                  for (var r, i = 0; i < n.length; i++)
                    if ((r = n[i]) === t || r.fn === t) {
                      n.splice(i, 1);
                      break;
                    }
                  return this;
                }),
                (r.prototype.emit = function (e) {
                  this._callbacks = this._callbacks || {};
                  var t = [].slice.call(arguments, 1),
                    n = this._callbacks["$" + e];
                  if (n) {
                    n = n.slice(0);
                    for (var r = 0, i = n.length; r < i; ++r)
                      n[r].apply(this, t);
                  }
                  return this;
                }),
                (r.prototype.listeners = function (e) {
                  return (
                    (this._callbacks = this._callbacks || {}),
                    this._callbacks["$" + e] || []
                  );
                }),
                (r.prototype.hasListeners = function (e) {
                  return !!this.listeners(e).length;
                });
            },
            function (e, t, n) {
              "use strict";
              function r(e) {
                if (e) return i(e);
              }
              function i(e) {
                for (var t in r.prototype) e[t] = r.prototype[t];
                return e;
              }
              var o = n(11);
              (e.exports = r),
                (r.prototype.clearTimeout = function () {
                  return (
                    clearTimeout(this._timer),
                    clearTimeout(this._responseTimeoutTimer),
                    delete this._timer,
                    delete this._responseTimeoutTimer,
                    this
                  );
                }),
                (r.prototype.parse = function (e) {
                  return (this._parser = e), this;
                }),
                (r.prototype.responseType = function (e) {
                  return (this._responseType = e), this;
                }),
                (r.prototype.serialize = function (e) {
                  return (this._serializer = e), this;
                }),
                (r.prototype.timeout = function (e) {
                  if (!e || "object" != typeof e)
                    return (
                      (this._timeout = e), (this._responseTimeout = 0), this
                    );
                  for (var t in e)
                    switch (t) {
                      case "deadline":
                        this._timeout = e.deadline;
                        break;
                      case "response":
                        this._responseTimeout = e.response;
                    }
                  return this;
                }),
                (r.prototype.retry = function (e, t) {
                  return (
                    (0 !== arguments.length && !0 !== e) || (e = 1),
                    e <= 0 && (e = 0),
                    (this._maxRetries = e),
                    (this._retries = 0),
                    (this._retryCallback = t),
                    this
                  );
                });
              var s = [
                "ECONNRESET",
                "ETIMEDOUT",
                "EADDRINFO",
                "ESOCKETTIMEDOUT",
              ];
              (r.prototype._shouldRetry = function (e, t) {
                if (!this._maxRetries || this._retries++ >= this._maxRetries)
                  return !1;
                if (this._retryCallback)
                  try {
                    var n = this._retryCallback(e, t);
                    if (!0 === n) return !0;
                    if (!1 === n) return !1;
                  } catch (e) {}
                if (t && t.status && t.status >= 500 && 501 != t.status)
                  return !0;
                if (e) {
                  if (e.code && ~s.indexOf(e.code)) return !0;
                  if (e.timeout && "ECONNABORTED" == e.code) return !0;
                  if (e.crossDomain) return !0;
                }
                return !1;
              }),
                (r.prototype._retry = function () {
                  return (
                    this.clearTimeout(),
                    this.req &&
                      ((this.req = null), (this.req = this.request())),
                    (this._aborted = !1),
                    (this.timedout = !1),
                    this._end()
                  );
                }),
                (r.prototype.then = function (e, t) {
                  if (!this._fullfilledPromise) {
                    var n = this;
                    this._endCalled,
                      (this._fullfilledPromise = new Promise(function (e, t) {
                        n.end(function (n, r) {
                          n ? t(n) : e(r);
                        });
                      }));
                  }
                  return this._fullfilledPromise.then(e, t);
                }),
                (r.prototype.catch = function (e) {
                  return this.then(void 0, e);
                }),
                (r.prototype.use = function (e) {
                  return e(this), this;
                }),
                (r.prototype.ok = function (e) {
                  if ("function" != typeof e) throw Error("Callback required");
                  return (this._okCallback = e), this;
                }),
                (r.prototype._isResponseOK = function (e) {
                  return (
                    !!e &&
                    (this._okCallback
                      ? this._okCallback(e)
                      : e.status >= 200 && e.status < 300)
                  );
                }),
                (r.prototype.get = function (e) {
                  return this._header[e.toLowerCase()];
                }),
                (r.prototype.getHeader = r.prototype.get),
                (r.prototype.set = function (e, t) {
                  if (o(e)) {
                    for (var n in e) this.set(n, e[n]);
                    return this;
                  }
                  return (
                    (this._header[e.toLowerCase()] = t),
                    (this.header[e] = t),
                    this
                  );
                }),
                (r.prototype.unset = function (e) {
                  return (
                    delete this._header[e.toLowerCase()],
                    delete this.header[e],
                    this
                  );
                }),
                (r.prototype.field = function (e, t) {
                  if (null === e || void 0 === e)
                    throw new Error(".field(name, val) name can not be empty");
                  if ((this._data, o(e))) {
                    for (var n in e) this.field(n, e[n]);
                    return this;
                  }
                  if (Array.isArray(t)) {
                    for (var r in t) this.field(e, t[r]);
                    return this;
                  }
                  if (null === t || void 0 === t)
                    throw new Error(".field(name, val) val can not be empty");
                  return (
                    "boolean" == typeof t && (t = "" + t),
                    this._getFormData().append(e, t),
                    this
                  );
                }),
                (r.prototype.abort = function () {
                  return this._aborted
                    ? this
                    : ((this._aborted = !0),
                      this.xhr && this.xhr.abort(),
                      this.req && this.req.abort(),
                      this.clearTimeout(),
                      this.emit("abort"),
                      this);
                }),
                (r.prototype._auth = function (e, t, n, r) {
                  switch (n.type) {
                    case "basic":
                      this.set("Authorization", "Basic " + r(e + ":" + t));
                      break;
                    case "auto":
                      (this.username = e), (this.password = t);
                      break;
                    case "bearer":
                      this.set("Authorization", "Bearer " + e);
                  }
                  return this;
                }),
                (r.prototype.withCredentials = function (e) {
                  return (
                    void 0 == e && (e = !0), (this._withCredentials = e), this
                  );
                }),
                (r.prototype.redirects = function (e) {
                  return (this._maxRedirects = e), this;
                }),
                (r.prototype.maxResponseSize = function (e) {
                  if ("number" != typeof e) throw TypeError("Invalid argument");
                  return (this._maxResponseSize = e), this;
                }),
                (r.prototype.toJSON = function () {
                  return {
                    method: this.method,
                    url: this.url,
                    data: this._data,
                    headers: this._header,
                  };
                }),
                (r.prototype.send = function (e) {
                  var t = o(e),
                    n = this._header["content-type"];
                  if ((this._formData, t && !this._data))
                    Array.isArray(e)
                      ? (this._data = [])
                      : this._isHost(e) || (this._data = {});
                  else if (e && this._data && this._isHost(this._data))
                    throw Error("Can't merge these send calls");
                  if (t && o(this._data)) for (var r in e) this._data[r] = e[r];
                  else
                    "string" == typeof e
                      ? (n || this.type("form"),
                        (n = this._header["content-type"]),
                        (this._data =
                          "application/x-www-form-urlencoded" == n
                            ? this._data
                              ? this._data + "&" + e
                              : e
                            : (this._data || "") + e))
                      : (this._data = e);
                  return !t || this._isHost(e)
                    ? this
                    : (n || this.type("json"), this);
                }),
                (r.prototype.sortQuery = function (e) {
                  return (this._sort = void 0 === e || e), this;
                }),
                (r.prototype._finalizeQueryString = function () {
                  var e = this._query.join("&");
                  if (
                    (e &&
                      (this.url +=
                        (this.url.indexOf("?") >= 0 ? "&" : "?") + e),
                    (this._query.length = 0),
                    this._sort)
                  ) {
                    var t = this.url.indexOf("?");
                    if (t >= 0) {
                      var n = this.url.substring(t + 1).split("&");
                      "function" == typeof this._sort
                        ? n.sort(this._sort)
                        : n.sort(),
                        (this.url =
                          this.url.substring(0, t) + "?" + n.join("&"));
                    }
                  }
                }),
                (r.prototype._appendQueryString = function () {}),
                (r.prototype._timeoutError = function (e, t, n) {
                  if (!this._aborted) {
                    var r = new Error(e + t + "ms exceeded");
                    (r.timeout = t),
                      (r.code = "ECONNABORTED"),
                      (r.errno = n),
                      (this.timedout = !0),
                      this.abort(),
                      this.callback(r);
                  }
                }),
                (r.prototype._setTimeouts = function () {
                  var e = this;
                  this._timeout &&
                    !this._timer &&
                    (this._timer = setTimeout(function () {
                      e._timeoutError("Timeout of ", e._timeout, "ETIME");
                    }, this._timeout)),
                    this._responseTimeout &&
                      !this._responseTimeoutTimer &&
                      (this._responseTimeoutTimer = setTimeout(function () {
                        e._timeoutError(
                          "Response timeout of ",
                          e._responseTimeout,
                          "ETIMEDOUT"
                        );
                      }, this._responseTimeout));
                });
            },
            function (e, t, n) {
              "use strict";
              function r(e) {
                if (e) return i(e);
              }
              function i(e) {
                for (var t in r.prototype) e[t] = r.prototype[t];
                return e;
              }
              var o = n(27);
              (e.exports = r),
                (r.prototype.get = function (e) {
                  return this.header[e.toLowerCase()];
                }),
                (r.prototype._setHeaderProperties = function (e) {
                  var t = e["content-type"] || "";
                  this.type = o.type(t);
                  var n = o.params(t);
                  for (var r in n) this[r] = n[r];
                  this.links = {};
                  try {
                    e.link && (this.links = o.parseLinks(e.link));
                  } catch (e) {}
                }),
                (r.prototype._setStatusProperties = function (e) {
                  var t = (e / 100) | 0;
                  (this.status = this.statusCode = e),
                    (this.statusType = t),
                    (this.info = 1 == t),
                    (this.ok = 2 == t),
                    (this.redirect = 3 == t),
                    (this.clientError = 4 == t),
                    (this.serverError = 5 == t),
                    (this.error = (4 == t || 5 == t) && this.toError()),
                    (this.created = 201 == e),
                    (this.accepted = 202 == e),
                    (this.noContent = 204 == e),
                    (this.badRequest = 400 == e),
                    (this.unauthorized = 401 == e),
                    (this.notAcceptable = 406 == e),
                    (this.forbidden = 403 == e),
                    (this.notFound = 404 == e),
                    (this.unprocessableEntity = 422 == e);
                });
            },
            function (e, t, n) {
              "use strict";
              (t.type = function (e) {
                return e.split(/ *; */).shift();
              }),
                (t.params = function (e) {
                  return e.split(/ *; */).reduce(function (e, t) {
                    var n = t.split(/ *= */),
                      r = n.shift(),
                      i = n.shift();
                    return r && i && (e[r] = i), e;
                  }, {});
                }),
                (t.parseLinks = function (e) {
                  return e.split(/ *, */).reduce(function (e, t) {
                    var n = t.split(/ *; */),
                      r = n[0].slice(1, -1);
                    return (e[n[1].split(/ *= */)[1].slice(1, -1)] = r), e;
                  }, {});
                }),
                (t.cleanHeader = function (e, t) {
                  return (
                    delete e["content-type"],
                    delete e["content-length"],
                    delete e["transfer-encoding"],
                    delete e.host,
                    t && (delete e.authorization, delete e.cookie),
                    e
                  );
                });
            },
            function (e, t) {
              function n() {
                this._defaults = [];
              }
              [
                "use",
                "on",
                "once",
                "set",
                "query",
                "type",
                "accept",
                "auth",
                "withCredentials",
                "sortQuery",
                "retry",
                "ok",
                "redirects",
                "timeout",
                "buffer",
                "serialize",
                "parse",
                "ca",
                "key",
                "pfx",
                "cert",
              ].forEach(function (e) {
                n.prototype[e] = function () {
                  return (
                    this._defaults.push({ fn: e, arguments: arguments }), this
                  );
                };
              }),
                (n.prototype._setDefaults = function (e) {
                  this._defaults.forEach(function (t) {
                    e[t.fn].apply(e, t.arguments);
                  });
                }),
                (e.exports = n);
            },
            function (e, n, r) {
              (function (n) {
                /*!
                 * @overview es6-promise - a tiny implementation of Promises/A+.
                 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
                 * @license   Licensed under MIT license
                 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
                 * @version   v4.2.3+b33f4734
                 */
                !(function (n, r) {
                  e.exports = (function () {
                    "use strict";
                    function e(e) {
                      var t = typeof e;
                      return null !== e && ("object" === t || "function" === t);
                    }
                    function i(e) {
                      return "function" == typeof e;
                    }
                    function o(e) {
                      $ = e;
                    }
                    function s(e) {
                      B = e;
                    }
                    function a() {
                      return void 0 !== z
                        ? function () {
                            z(c);
                          }
                        : u();
                    }
                    function u() {
                      var e = setTimeout;
                      return function () {
                        return e(c, 1);
                      };
                    }
                    function c() {
                      for (var e = 0; e < q; e += 2)
                        (0, K[e])(K[e + 1]),
                          (K[e] = void 0),
                          (K[e + 1] = void 0);
                      q = 0;
                    }
                    function l(e, t) {
                      var n = this,
                        r = new this.constructor(f);
                      void 0 === r[X] && j(r);
                      var i = n._state;
                      if (i) {
                        var o = arguments[i - 1];
                        B(function () {
                          return E(i, r, o, n._result);
                        });
                      } else S(n, r, e, t);
                      return r;
                    }
                    function h(e) {
                      var t = this;
                      if (e && "object" == typeof e && e.constructor === t)
                        return e;
                      var n = new t(f);
                      return b(n, e), n;
                    }
                    function f() {}
                    function d() {
                      return new TypeError(
                        "You cannot resolve a promise with itself"
                      );
                    }
                    function p() {
                      return new TypeError(
                        "A promises callback cannot return that same promise."
                      );
                    }
                    function v(e) {
                      try {
                        return e.then;
                      } catch (e) {
                        return (te.error = e), te;
                      }
                    }
                    function g(e, t, n, r) {
                      try {
                        e.call(t, n, r);
                      } catch (e) {
                        return e;
                      }
                    }
                    function _(e, t, n) {
                      B(function (e) {
                        var r = !1,
                          i = g(
                            n,
                            t,
                            function (n) {
                              r || ((r = !0), t !== n ? b(e, n) : x(e, n));
                            },
                            function (t) {
                              r || ((r = !0), O(e, t));
                            },
                            "Settle: " + (e._label || " unknown promise")
                          );
                        !r && i && ((r = !0), O(e, i));
                      }, e);
                    }
                    function m(e, t) {
                      t._state === Z
                        ? x(e, t._result)
                        : t._state === ee
                        ? O(e, t._result)
                        : S(
                            t,
                            void 0,
                            function (t) {
                              return b(e, t);
                            },
                            function (t) {
                              return O(e, t);
                            }
                          );
                    }
                    function y(e, t, n) {
                      t.constructor === e.constructor &&
                      n === l &&
                      t.constructor.resolve === h
                        ? m(e, t)
                        : n === te
                        ? (O(e, te.error), (te.error = null))
                        : void 0 === n
                        ? x(e, t)
                        : i(n)
                        ? _(e, t, n)
                        : x(e, t);
                    }
                    function b(t, n) {
                      t === n ? O(t, d()) : e(n) ? y(t, n, v(n)) : x(t, n);
                    }
                    function w(e) {
                      e._onerror && e._onerror(e._result), A(e);
                    }
                    function x(e, t) {
                      e._state === Y &&
                        ((e._result = t),
                        (e._state = Z),
                        0 !== e._subscribers.length && B(A, e));
                    }
                    function O(e, t) {
                      e._state === Y &&
                        ((e._state = ee), (e._result = t), B(w, e));
                    }
                    function S(e, t, n, r) {
                      var i = e._subscribers,
                        o = i.length;
                      (e._onerror = null),
                        (i[o] = t),
                        (i[o + Z] = n),
                        (i[o + ee] = r),
                        0 === o && e._state && B(A, e);
                    }
                    function A(e) {
                      var t = e._subscribers,
                        n = e._state;
                      if (0 !== t.length) {
                        for (
                          var r = void 0, i = void 0, o = e._result, s = 0;
                          s < t.length;
                          s += 3
                        )
                          (r = t[s]), (i = t[s + n]), r ? E(n, r, i, o) : i(o);
                        e._subscribers.length = 0;
                      }
                    }
                    function k(e, t) {
                      try {
                        return e(t);
                      } catch (e) {
                        return (te.error = e), te;
                      }
                    }
                    function E(e, t, n, r) {
                      var o = i(n),
                        s = void 0,
                        a = void 0,
                        u = void 0,
                        c = void 0;
                      if (o) {
                        if (
                          ((s = k(n, r)),
                          s === te
                            ? ((c = !0), (a = s.error), (s.error = null))
                            : (u = !0),
                          t === s)
                        )
                          return void O(t, p());
                      } else (s = r), (u = !0);
                      t._state !== Y ||
                        (o && u
                          ? b(t, s)
                          : c
                          ? O(t, a)
                          : e === Z
                          ? x(t, s)
                          : e === ee && O(t, s));
                    }
                    function C(e, t) {
                      try {
                        t(
                          function (t) {
                            b(e, t);
                          },
                          function (t) {
                            O(e, t);
                          }
                        );
                      } catch (t) {
                        O(e, t);
                      }
                    }
                    function T() {
                      return ne++;
                    }
                    function j(e) {
                      (e[X] = ne++),
                        (e._state = void 0),
                        (e._result = void 0),
                        (e._subscribers = []);
                    }
                    function N() {
                      return new Error(
                        "Array Methods must be provided an Array"
                      );
                    }
                    function U(e) {
                      return new re(this, e).promise;
                    }
                    function I(e) {
                      var t = this;
                      return new t(
                        F(e)
                          ? function (n, r) {
                              for (var i = e.length, o = 0; o < i; o++)
                                t.resolve(e[o]).then(n, r);
                            }
                          : function (e, t) {
                              return t(
                                new TypeError("You must pass an array to race.")
                              );
                            }
                      );
                    }
                    function R(e) {
                      var t = this,
                        n = new t(f);
                      return O(n, e), n;
                    }
                    function L() {
                      throw new TypeError(
                        "You must pass a resolver function as the first argument to the promise constructor"
                      );
                    }
                    function P() {
                      throw new TypeError(
                        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                      );
                    }
                    function D() {
                      var e = void 0;
                      if (void 0 !== n) e = n;
                      else if ("undefined" != typeof self) e = self;
                      else
                        try {
                          e = Function("return this")();
                        } catch (e) {
                          throw new Error(
                            "polyfill failed because global object is unavailable in this environment"
                          );
                        }
                      var t = e.Promise;
                      if (t) {
                        var r = null;
                        try {
                          r = Object.prototype.toString.call(t.resolve());
                        } catch (e) {}
                        if ("[object Promise]" === r && !t.cast) return;
                      }
                      e.Promise = ie;
                    }
                    var M = void 0;
                    M = Array.isArray
                      ? Array.isArray
                      : function (e) {
                          return (
                            "[object Array]" ===
                            Object.prototype.toString.call(e)
                          );
                        };
                    var F = M,
                      q = 0,
                      z = void 0,
                      $ = void 0,
                      B = function (e, t) {
                        (K[q] = e),
                          (K[q + 1] = t),
                          2 === (q += 2) && ($ ? $(c) : G());
                      },
                      W = "undefined" != typeof window ? window : void 0,
                      Q = W || {},
                      J = Q.MutationObserver || Q.WebKitMutationObserver,
                      V =
                        "undefined" == typeof self &&
                        void 0 !== t &&
                        "[object process]" === {}.toString.call(t),
                      H =
                        "undefined" != typeof Uint8ClampedArray &&
                        "undefined" != typeof importScripts &&
                        "undefined" != typeof MessageChannel,
                      K = new Array(1e3),
                      G = void 0;
                    G = V
                      ? (function () {
                          return function () {
                            return t.nextTick(c);
                          };
                        })()
                      : J
                      ? (function () {
                          var e = 0,
                            t = new J(c),
                            n = document.createTextNode("");
                          return (
                            t.observe(n, { characterData: !0 }),
                            function () {
                              n.data = e = ++e % 2;
                            }
                          );
                        })()
                      : H
                      ? (function () {
                          var e = new MessageChannel();
                          return (
                            (e.port1.onmessage = c),
                            function () {
                              return e.port2.postMessage(0);
                            }
                          );
                        })()
                      : void 0 === W
                      ? (function () {
                          try {
                            var e = r(30);
                            return (z = e.runOnLoop || e.runOnContext), a();
                          } catch (e) {
                            return u();
                          }
                        })()
                      : u();
                    var X = Math.random().toString(36).substring(2),
                      Y = void 0,
                      Z = 1,
                      ee = 2,
                      te = { error: null },
                      ne = 0,
                      re = (function () {
                        function e(e, t) {
                          (this._instanceConstructor = e),
                            (this.promise = new e(f)),
                            this.promise[X] || j(this.promise),
                            F(t)
                              ? ((this.length = t.length),
                                (this._remaining = t.length),
                                (this._result = new Array(this.length)),
                                0 === this.length
                                  ? x(this.promise, this._result)
                                  : ((this.length = this.length || 0),
                                    this._enumerate(t),
                                    0 === this._remaining &&
                                      x(this.promise, this._result)))
                              : O(this.promise, N());
                        }
                        return (
                          (e.prototype._enumerate = function (e) {
                            for (
                              var t = 0;
                              this._state === Y && t < e.length;
                              t++
                            )
                              this._eachEntry(e[t], t);
                          }),
                          (e.prototype._eachEntry = function (e, t) {
                            var n = this._instanceConstructor,
                              r = n.resolve;
                            if (r === h) {
                              var i = v(e);
                              if (i === l && e._state !== Y)
                                this._settledAt(e._state, t, e._result);
                              else if ("function" != typeof i)
                                this._remaining--, (this._result[t] = e);
                              else if (n === ie) {
                                var o = new n(f);
                                y(o, e, i), this._willSettleAt(o, t);
                              } else
                                this._willSettleAt(
                                  new n(function (t) {
                                    return t(e);
                                  }),
                                  t
                                );
                            } else this._willSettleAt(r(e), t);
                          }),
                          (e.prototype._settledAt = function (e, t, n) {
                            var r = this.promise;
                            r._state === Y &&
                              (this._remaining--,
                              e === ee ? O(r, n) : (this._result[t] = n)),
                              0 === this._remaining && x(r, this._result);
                          }),
                          (e.prototype._willSettleAt = function (e, t) {
                            var n = this;
                            S(
                              e,
                              void 0,
                              function (e) {
                                return n._settledAt(Z, t, e);
                              },
                              function (e) {
                                return n._settledAt(ee, t, e);
                              }
                            );
                          }),
                          e
                        );
                      })(),
                      ie = (function () {
                        function e(t) {
                          (this[X] = T()),
                            (this._result = this._state = void 0),
                            (this._subscribers = []),
                            f !== t &&
                              ("function" != typeof t && L(),
                              this instanceof e ? C(this, t) : P());
                        }
                        return (
                          (e.prototype.catch = function (e) {
                            return this.then(null, e);
                          }),
                          (e.prototype.finally = function (e) {
                            var t = this,
                              n = t.constructor;
                            return t.then(
                              function (t) {
                                return n.resolve(e()).then(function () {
                                  return t;
                                });
                              },
                              function (t) {
                                return n.resolve(e()).then(function () {
                                  throw t;
                                });
                              }
                            );
                          }),
                          e
                        );
                      })();
                    return (
                      (ie.prototype.then = l),
                      (ie.all = U),
                      (ie.race = I),
                      (ie.resolve = h),
                      (ie.reject = R),
                      (ie._setScheduler = o),
                      (ie._setAsap = s),
                      (ie._asap = B),
                      (ie.polyfill = D),
                      (ie.Promise = ie),
                      ie
                    );
                  })();
                })();
              }.call(n, r(7)));
            },
            function (e, t) {},
            function (e, t, n) {
              "use strict";
              (function (t) {
                var r = {},
                  i = ["getItem", "setItem", "removeItem", "clear"],
                  o = t.localStorage;
                try {
                  var s = "__storejs__";
                  if ((o.setItem(s, s), o.getItem(s) != s)) throw new Error();
                  o.removeItem(s);
                } catch (e) {
                  o = n(32);
                }
                i.forEach(function (e) {
                  r[e] = function () {
                    return o[e].apply(o, arguments);
                  };
                }),
                  (r.async = !1),
                  (e.exports = r);
              }.call(t, n(7)));
            },
            function (e, t, n) {
              !(function (t) {
                var n = {},
                  r = {};
                (n.length = 0),
                  (n.getItem = function (e) {
                    return e in r ? r[e] : null;
                  }),
                  (n.setItem = function (e, t) {
                    void 0 === t
                      ? n.removeItem(e)
                      : (r.hasOwnProperty(e) || n.length++, (r[e] = "" + t));
                  }),
                  (n.removeItem = function (e) {
                    r.hasOwnProperty(e) && (delete r[e], n.length--);
                  }),
                  (n.key = function (e) {
                    return Object.keys(r)[e] || null;
                  }),
                  (n.clear = function () {
                    (r = {}), (n.length = 0);
                  }),
                  (e.exports = n);
              })();
            },
            function (e, t, n) {
              "use strict";
              function r(e) {
                var t = void 0,
                  n = e.slice(0, 8).toLowerCase();
                switch (e.slice(-9)) {
                  case "-9Nh9j0Va":
                    t = "lncldapi.com";
                    break;
                  case "-MdYXbMMI":
                    t = "lncldglobal.com";
                    break;
                  default:
                    t = "lncld.net";
                }
                return {
                  push: "https://" + n + ".push." + t,
                  stats: "https://" + n + ".stats." + t,
                  engine: "https://" + n + ".engine." + t,
                  api: "https://" + n + ".api." + t,
                  rtm: "https://" + n + ".rtm." + t,
                };
              }
              var i = n(5),
                o = n(34),
                s = n(3),
                a = s.isNullOrUndefined,
                u = n(0),
                c = u.extend,
                l = u.isObject,
                h = function (e) {
                  return { push: e, stats: e, engine: e, api: e, rtm: e };
                },
                f = !1;
              (i.init = function (e) {
                if (!l(e))
                  return i.init({
                    appId: e,
                    appKey: arguments.length <= 1 ? void 0 : arguments[1],
                    masterKey: arguments.length <= 2 ? void 0 : arguments[2],
                  });
                var t = e.appId,
                  n = e.appKey,
                  s = e.masterKey,
                  a = (e.hookKey, e.serverURLs),
                  u = e.disableCurrentUser,
                  d = e.production,
                  p = e.realtime;
                if (i.applicationId)
                  throw new Error("SDK is already initialized.");
                if (!t) throw new TypeError("appId must be a string");
                if (!n) throw new TypeError("appKey must be a string");
                (i._config.applicationId = t),
                  (i._config.applicationKey = n),
                  (i._config.masterKey = s),
                  void 0 !== d && (i._config.production = d),
                  void 0 !== u && (i._config.disableCurrentUser = u),
                  (i._appRouter = new o(i));
                var v = f || void 0 !== a;
                if (
                  (i._setServerURLs(
                    c(
                      {},
                      r(t),
                      i._config.serverURLs,
                      "string" == typeof a ? h(a) : a
                    ),
                    v
                  ),
                  p)
                )
                  i._config.realtime = p;
                else if (i._sharedConfig.liveQueryRealtime) {
                  var g = i._config.serverURLs,
                    _ = g.api,
                    m = g.rtm;
                  i._config.realtime = new i._sharedConfig.liveQueryRealtime({
                    appId: t,
                    appKey: n,
                    server: { api: _, RTMRouter: m },
                  });
                }
              }),
                (i.setProduction = function (e) {
                  a(e)
                    ? (i._config.production = null)
                    : (i._config.production = e ? 1 : 0);
                }),
                (i._setServerURLs = function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  "string" != typeof e
                    ? c(i._config.serverURLs, e)
                    : (i._config.serverURLs = h(e)),
                    t && (i._appRouter ? i._appRouter.disable() : (f = !0));
                }),
                (i.setServerURLs = function (e) {
                  return i._setServerURLs(e);
                }),
                (i.keepErrorRawMessage = function (e) {
                  i._sharedConfig.keepErrorRawMessage = e;
                }),
                (i.setRequestTimeout = function (e) {
                  i._config.requestTimeout = e;
                }),
                (i.initialize = i.init),
                [
                  "applicationId",
                  "applicationKey",
                  "masterKey",
                  "hookKey",
                ].forEach(function (e) {
                  return Object.defineProperty(i, e, {
                    get: function () {
                      return i._config[e];
                    },
                    set: function (t) {
                      i._config[e] = t;
                    },
                  });
                });
            },
            function (e, t, n) {
              "use strict";
              function r(e) {
                var t = this;
                (this.AV = e),
                  (this.lockedUntil = 0),
                  s
                    .getAsync("serverURLs")
                    .then(function (e) {
                      if (!t.disabled) {
                        if (!e) return t.lock(0);
                        var n = e.serverURLs,
                          r = e.lockedUntil;
                        t.AV._setServerURLs(n, !1), (t.lockedUntil = r);
                      }
                    })
                    .catch(function () {
                      return t.lock(0);
                    });
              }
              var i = n(3),
                o = i.ajax,
                s = n(13);
              (r.prototype.disable = function () {
                this.disabled = !0;
              }),
                (r.prototype.lock = function (e) {
                  this.lockedUntil = Date.now() + e;
                }),
                (r.prototype.refresh = function () {
                  var e = this;
                  if (!(this.disabled || Date.now() < this.lockedUntil))
                    return (
                      this.lock(10),
                      o({
                        method: "get",
                        url: "https://app-router.leancloud.cn/2/route",
                        query: { appId: this.AV.applicationId },
                      })
                        .then(function (t) {
                          if (!e.disabled) {
                            var n = t.ttl;
                            if (!n) throw new Error("missing ttl");
                            n *= 1e3;
                            var r = {
                              push: "https://" + t.push_server,
                              stats: "https://" + t.stats_server,
                              engine: "https://" + t.engine_server,
                              api: "https://" + t.api_server,
                            };
                            return (
                              e.AV._setServerURLs(r, !1),
                              e.lock(n),
                              s.setAsync(
                                "serverURLs",
                                { serverURLs: r, lockedUntil: e.lockedUntil },
                                n
                              )
                            );
                          }
                        })
                        .catch(function (t) {
                          e.lock(600);
                        })
                    );
                }),
                (e.exports = r);
            },
            function (e, t, n) {
              "use strict";
              var r = n(0);
              e.exports = function (e) {
                var t = /\s+/,
                  n = Array.prototype.slice;
                (e.Events = {
                  on: function (e, n, r) {
                    var i, o, s, a, u;
                    if (!n) return this;
                    for (
                      e = e.split(t),
                        i = this._callbacks || (this._callbacks = {}),
                        o = e.shift();
                      o;

                    )
                      (u = i[o]),
                        (s = u ? u.tail : {}),
                        (s.next = a = {}),
                        (s.context = r),
                        (s.callback = n),
                        (i[o] = { tail: a, next: u ? u.next : s }),
                        (o = e.shift());
                    return this;
                  },
                  off: function (e, n, i) {
                    var o, s, a, u, c, l;
                    if ((s = this._callbacks)) {
                      if (!(e || n || i)) return delete this._callbacks, this;
                      for (e = e ? e.split(t) : r.keys(s), o = e.shift(); o; )
                        if (((a = s[o]), delete s[o], a && (n || i))) {
                          for (u = a.tail, a = a.next; a !== u; )
                            (c = a.callback),
                              (l = a.context),
                              ((n && c !== n) || (i && l !== i)) &&
                                this.on(o, c, l),
                              (a = a.next);
                          o = e.shift();
                        }
                      return this;
                    }
                  },
                  trigger: function (e) {
                    var r, i, o, s, a, u, c;
                    if (!(o = this._callbacks)) return this;
                    for (
                      u = o.all,
                        e = e.split(t),
                        c = n.call(arguments, 1),
                        r = e.shift();
                      r;

                    ) {
                      if ((i = o[r]))
                        for (s = i.tail; (i = i.next) !== s; )
                          i.callback.apply(i.context || this, c);
                      if ((i = u))
                        for (
                          s = i.tail, a = [r].concat(c);
                          (i = i.next) !== s;

                        )
                          i.callback.apply(i.context || this, a);
                      r = e.shift();
                    }
                    return this;
                  },
                }),
                  (e.Events.bind = e.Events.on),
                  (e.Events.unbind = e.Events.off);
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(1);
              e.exports = function (e) {
                (e.GeoPoint = function (t, n) {
                  r.isArray(t)
                    ? (e.GeoPoint._validate(t[0], t[1]),
                      (this.latitude = t[0]),
                      (this.longitude = t[1]))
                    : r.isObject(t)
                    ? (e.GeoPoint._validate(t.latitude, t.longitude),
                      (this.latitude = t.latitude),
                      (this.longitude = t.longitude))
                    : r.isNumber(t) && r.isNumber(n)
                    ? (e.GeoPoint._validate(t, n),
                      (this.latitude = t),
                      (this.longitude = n))
                    : ((this.latitude = 0), (this.longitude = 0));
                  var i = this;
                  this.__defineGetter__ &&
                    this.__defineSetter__ &&
                    ((this._latitude = this.latitude),
                    (this._longitude = this.longitude),
                    this.__defineGetter__("latitude", function () {
                      return i._latitude;
                    }),
                    this.__defineGetter__("longitude", function () {
                      return i._longitude;
                    }),
                    this.__defineSetter__("latitude", function (t) {
                      e.GeoPoint._validate(t, i.longitude), (i._latitude = t);
                    }),
                    this.__defineSetter__("longitude", function (t) {
                      e.GeoPoint._validate(i.latitude, t), (i._longitude = t);
                    }));
                }),
                  (e.GeoPoint._validate = function (e, t) {
                    if (e < -90)
                      throw new Error(
                        "AV.GeoPoint latitude " + e + " < -90.0."
                      );
                    if (e > 90)
                      throw new Error("AV.GeoPoint latitude " + e + " > 90.0.");
                    if (t < -180)
                      throw new Error(
                        "AV.GeoPoint longitude " + t + " < -180.0."
                      );
                    if (t > 180)
                      throw new Error(
                        "AV.GeoPoint longitude " + t + " > 180.0."
                      );
                  }),
                  (e.GeoPoint.current = function () {
                    return new i(function (t, n) {
                      navigator.geolocation.getCurrentPosition(function (n) {
                        t(
                          new e.GeoPoint({
                            latitude: n.coords.latitude,
                            longitude: n.coords.longitude,
                          })
                        );
                      }, n);
                    });
                  }),
                  r.extend(e.GeoPoint.prototype, {
                    toJSON: function () {
                      return (
                        e.GeoPoint._validate(this.latitude, this.longitude),
                        {
                          __type: "GeoPoint",
                          latitude: this.latitude,
                          longitude: this.longitude,
                        }
                      );
                    },
                    radiansTo: function (e) {
                      var t = Math.PI / 180,
                        n = this.latitude * t,
                        r = this.longitude * t,
                        i = e.latitude * t,
                        o = e.longitude * t,
                        s = n - i,
                        a = r - o,
                        u = Math.sin(s / 2),
                        c = Math.sin(a / 2),
                        l = u * u + Math.cos(n) * Math.cos(i) * c * c;
                      return (l = Math.min(1, l)), 2 * Math.asin(Math.sqrt(l));
                    },
                    kilometersTo: function (e) {
                      return 6371 * this.radiansTo(e);
                    },
                    milesTo: function (e) {
                      return 3958.8 * this.radiansTo(e);
                    },
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0);
              e.exports = function (e) {
                (e.ACL = function (t) {
                  var n = this;
                  if (((n.permissionsById = {}), r.isObject(t)))
                    if (t instanceof e.User)
                      n.setReadAccess(t, !0), n.setWriteAccess(t, !0);
                    else {
                      if (r.isFunction(t))
                        throw new Error(
                          "AV.ACL() called with a function.  Did you forget ()?"
                        );
                      e._objectEach(t, function (t, i) {
                        if (!r.isString(i))
                          throw new Error(
                            "Tried to create an ACL with an invalid userId."
                          );
                        (n.permissionsById[i] = {}),
                          e._objectEach(t, function (e, t) {
                            if ("read" !== t && "write" !== t)
                              throw new Error(
                                "Tried to create an ACL with an invalid permission type."
                              );
                            if (!r.isBoolean(e))
                              throw new Error(
                                "Tried to create an ACL with an invalid permission value."
                              );
                            n.permissionsById[i][t] = e;
                          });
                      });
                    }
                }),
                  (e.ACL.prototype.toJSON = function () {
                    return r.clone(this.permissionsById);
                  }),
                  (e.ACL.prototype._setAccess = function (t, n, i) {
                    if (
                      (n instanceof e.User
                        ? (n = n.id)
                        : n instanceof e.Role && (n = "role:" + n.getName()),
                      !r.isString(n))
                    )
                      throw new Error("userId must be a string.");
                    if (!r.isBoolean(i))
                      throw new Error("allowed must be either true or false.");
                    var o = this.permissionsById[n];
                    if (!o) {
                      if (!i) return;
                      (o = {}), (this.permissionsById[n] = o);
                    }
                    i
                      ? (this.permissionsById[n][t] = !0)
                      : (delete o[t],
                        r.isEmpty(o) && delete this.permissionsById[n]);
                  }),
                  (e.ACL.prototype._getAccess = function (t, n) {
                    n instanceof e.User
                      ? (n = n.id)
                      : n instanceof e.Role && (n = "role:" + n.getName());
                    var r = this.permissionsById[n];
                    return !!r && !!r[t];
                  }),
                  (e.ACL.prototype.setReadAccess = function (e, t) {
                    this._setAccess("read", e, t);
                  }),
                  (e.ACL.prototype.getReadAccess = function (e) {
                    return this._getAccess("read", e);
                  }),
                  (e.ACL.prototype.setWriteAccess = function (e, t) {
                    this._setAccess("write", e, t);
                  }),
                  (e.ACL.prototype.getWriteAccess = function (e) {
                    return this._getAccess("write", e);
                  }),
                  (e.ACL.prototype.setPublicReadAccess = function (e) {
                    this.setReadAccess("*", e);
                  }),
                  (e.ACL.prototype.getPublicReadAccess = function () {
                    return this.getReadAccess("*");
                  }),
                  (e.ACL.prototype.setPublicWriteAccess = function (e) {
                    this.setWriteAccess("*", e);
                  }),
                  (e.ACL.prototype.getPublicWriteAccess = function () {
                    return this.getWriteAccess("*");
                  }),
                  (e.ACL.prototype.getRoleReadAccess = function (t) {
                    if (
                      (t instanceof e.Role && (t = t.getName()), r.isString(t))
                    )
                      return this.getReadAccess("role:" + t);
                    throw new Error("role must be a AV.Role or a String");
                  }),
                  (e.ACL.prototype.getRoleWriteAccess = function (t) {
                    if (
                      (t instanceof e.Role && (t = t.getName()), r.isString(t))
                    )
                      return this.getWriteAccess("role:" + t);
                    throw new Error("role must be a AV.Role or a String");
                  }),
                  (e.ACL.prototype.setRoleReadAccess = function (t, n) {
                    if (
                      (t instanceof e.Role && (t = t.getName()), r.isString(t))
                    )
                      return void this.setReadAccess("role:" + t, n);
                    throw new Error("role must be a AV.Role or a String");
                  }),
                  (e.ACL.prototype.setRoleWriteAccess = function (t, n) {
                    if (
                      (t instanceof e.Role && (t = t.getName()), r.isString(t))
                    )
                      return void this.setWriteAccess("role:" + t, n);
                    throw new Error("role must be a AV.Role or a String");
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0);
              e.exports = function (e) {
                (e.Op = function () {
                  this._initialize.apply(this, arguments);
                }),
                  r.extend(e.Op.prototype, { _initialize: function () {} }),
                  r.extend(e.Op, {
                    _extend: e._extend,
                    _opDecoderMap: {},
                    _registerDecoder: function (t, n) {
                      e.Op._opDecoderMap[t] = n;
                    },
                    _decode: function (t) {
                      var n = e.Op._opDecoderMap[t.__op];
                      return n ? n(t) : void 0;
                    },
                  }),
                  e.Op._registerDecoder("Batch", function (t) {
                    var n = null;
                    return (
                      e._arrayEach(t.ops, function (t) {
                        (t = e.Op._decode(t)), (n = t._mergeWithPrevious(n));
                      }),
                      n
                    );
                  }),
                  (e.Op.Set = e.Op._extend({
                    _initialize: function (e) {
                      this._value = e;
                    },
                    value: function () {
                      return this._value;
                    },
                    toJSON: function () {
                      return e._encode(this.value());
                    },
                    _mergeWithPrevious: function (e) {
                      return this;
                    },
                    _estimate: function (e) {
                      return this.value();
                    },
                  })),
                  (e.Op._UNSET = {}),
                  (e.Op.Unset = e.Op._extend({
                    toJSON: function () {
                      return { __op: "Delete" };
                    },
                    _mergeWithPrevious: function (e) {
                      return this;
                    },
                    _estimate: function (t) {
                      return e.Op._UNSET;
                    },
                  })),
                  e.Op._registerDecoder("Delete", function (t) {
                    return new e.Op.Unset();
                  }),
                  (e.Op.Increment = e.Op._extend({
                    _initialize: function (e) {
                      this._amount = e;
                    },
                    amount: function () {
                      return this._amount;
                    },
                    toJSON: function () {
                      return { __op: "Increment", amount: this._amount };
                    },
                    _mergeWithPrevious: function (t) {
                      if (t) {
                        if (t instanceof e.Op.Unset)
                          return new e.Op.Set(this.amount());
                        if (t instanceof e.Op.Set)
                          return new e.Op.Set(t.value() + this.amount());
                        if (t instanceof e.Op.Increment)
                          return new e.Op.Increment(this.amount() + t.amount());
                        throw new Error("Op is invalid after previous op.");
                      }
                      return this;
                    },
                    _estimate: function (e) {
                      return e ? e + this.amount() : this.amount();
                    },
                  })),
                  e.Op._registerDecoder("Increment", function (t) {
                    return new e.Op.Increment(t.amount);
                  }),
                  (e.Op.BitAnd = e.Op._extend({
                    _initialize: function (e) {
                      this._value = e;
                    },
                    value: function () {
                      return this._value;
                    },
                    toJSON: function () {
                      return { __op: "BitAnd", value: this.value() };
                    },
                    _mergeWithPrevious: function (t) {
                      if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(0);
                        if (t instanceof e.Op.Set)
                          return new e.Op.Set(t.value() & this.value());
                        throw new Error("Op is invalid after previous op.");
                      }
                      return this;
                    },
                    _estimate: function (e) {
                      return e & this.value();
                    },
                  })),
                  e.Op._registerDecoder("BitAnd", function (t) {
                    return new e.Op.BitAnd(t.value);
                  }),
                  (e.Op.BitOr = e.Op._extend({
                    _initialize: function (e) {
                      this._value = e;
                    },
                    value: function () {
                      return this._value;
                    },
                    toJSON: function () {
                      return { __op: "BitOr", value: this.value() };
                    },
                    _mergeWithPrevious: function (t) {
                      if (t) {
                        if (t instanceof e.Op.Unset)
                          return new e.Op.Set(this.value());
                        if (t instanceof e.Op.Set)
                          return new e.Op.Set(t.value() | this.value());
                        throw new Error("Op is invalid after previous op.");
                      }
                      return this;
                    },
                    _estimate: function (e) {
                      return e | this.value();
                    },
                  })),
                  e.Op._registerDecoder("BitOr", function (t) {
                    return new e.Op.BitOr(t.value);
                  }),
                  (e.Op.BitXor = e.Op._extend({
                    _initialize: function (e) {
                      this._value = e;
                    },
                    value: function () {
                      return this._value;
                    },
                    toJSON: function () {
                      return { __op: "BitXor", value: this.value() };
                    },
                    _mergeWithPrevious: function (t) {
                      if (t) {
                        if (t instanceof e.Op.Unset)
                          return new e.Op.Set(this.value());
                        if (t instanceof e.Op.Set)
                          return new e.Op.Set(t.value() ^ this.value());
                        throw new Error("Op is invalid after previous op.");
                      }
                      return this;
                    },
                    _estimate: function (e) {
                      return e ^ this.value();
                    },
                  })),
                  e.Op._registerDecoder("BitXor", function (t) {
                    return new e.Op.BitXor(t.value);
                  }),
                  (e.Op.Add = e.Op._extend({
                    _initialize: function (e) {
                      this._objects = e;
                    },
                    objects: function () {
                      return this._objects;
                    },
                    toJSON: function () {
                      return {
                        __op: "Add",
                        objects: e._encode(this.objects()),
                      };
                    },
                    _mergeWithPrevious: function (t) {
                      if (t) {
                        if (t instanceof e.Op.Unset)
                          return new e.Op.Set(this.objects());
                        if (t instanceof e.Op.Set)
                          return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.Add)
                          return new e.Op.Add(
                            t.objects().concat(this.objects())
                          );
                        throw new Error("Op is invalid after previous op.");
                      }
                      return this;
                    },
                    _estimate: function (e) {
                      return e
                        ? e.concat(this.objects())
                        : r.clone(this.objects());
                    },
                  })),
                  e.Op._registerDecoder("Add", function (t) {
                    return new e.Op.Add(e._decode(t.objects));
                  }),
                  (e.Op.AddUnique = e.Op._extend({
                    _initialize: function (e) {
                      this._objects = r.uniq(e);
                    },
                    objects: function () {
                      return this._objects;
                    },
                    toJSON: function () {
                      return {
                        __op: "AddUnique",
                        objects: e._encode(this.objects()),
                      };
                    },
                    _mergeWithPrevious: function (t) {
                      if (t) {
                        if (t instanceof e.Op.Unset)
                          return new e.Op.Set(this.objects());
                        if (t instanceof e.Op.Set)
                          return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.AddUnique)
                          return new e.Op.AddUnique(
                            this._estimate(t.objects())
                          );
                        throw new Error("Op is invalid after previous op.");
                      }
                      return this;
                    },
                    _estimate: function (t) {
                      if (t) {
                        var n = r.clone(t);
                        return (
                          e._arrayEach(this.objects(), function (t) {
                            if (t instanceof e.Object && t.id) {
                              var i = r.find(n, function (n) {
                                return n instanceof e.Object && n.id === t.id;
                              });
                              if (i) {
                                var o = r.indexOf(n, i);
                                n[o] = t;
                              } else n.push(t);
                            } else r.contains(n, t) || n.push(t);
                          }),
                          n
                        );
                      }
                      return r.clone(this.objects());
                    },
                  })),
                  e.Op._registerDecoder("AddUnique", function (t) {
                    return new e.Op.AddUnique(e._decode(t.objects));
                  }),
                  (e.Op.Remove = e.Op._extend({
                    _initialize: function (e) {
                      this._objects = r.uniq(e);
                    },
                    objects: function () {
                      return this._objects;
                    },
                    toJSON: function () {
                      return {
                        __op: "Remove",
                        objects: e._encode(this.objects()),
                      };
                    },
                    _mergeWithPrevious: function (t) {
                      if (t) {
                        if (t instanceof e.Op.Unset) return t;
                        if (t instanceof e.Op.Set)
                          return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.Remove)
                          return new e.Op.Remove(
                            r.union(t.objects(), this.objects())
                          );
                        throw new Error("Op is invalid after previous op.");
                      }
                      return this;
                    },
                    _estimate: function (t) {
                      if (t) {
                        var n = r.difference(t, this.objects());
                        return (
                          e._arrayEach(this.objects(), function (t) {
                            t instanceof e.Object &&
                              t.id &&
                              (n = r.reject(n, function (n) {
                                return n instanceof e.Object && n.id === t.id;
                              }));
                          }),
                          n
                        );
                      }
                      return [];
                    },
                  })),
                  e.Op._registerDecoder("Remove", function (t) {
                    return new e.Op.Remove(e._decode(t.objects));
                  }),
                  (e.Op.Relation = e.Op._extend({
                    _initialize: function (t, n) {
                      this._targetClassName = null;
                      var i = this,
                        o = function (t) {
                          if (t instanceof e.Object) {
                            if (!t.id)
                              throw new Error(
                                "You can't add an unsaved AV.Object to a relation."
                              );
                            if (
                              (i._targetClassName ||
                                (i._targetClassName = t.className),
                              i._targetClassName !== t.className)
                            )
                              throw new Error(
                                "Tried to create a AV.Relation with 2 different types: " +
                                  i._targetClassName +
                                  " and " +
                                  t.className +
                                  "."
                              );
                            return t.id;
                          }
                          return t;
                        };
                      (this.relationsToAdd = r.uniq(r.map(t, o))),
                        (this.relationsToRemove = r.uniq(r.map(n, o)));
                    },
                    added: function () {
                      var t = this;
                      return r.map(this.relationsToAdd, function (n) {
                        var r = e.Object._create(t._targetClassName);
                        return (r.id = n), r;
                      });
                    },
                    removed: function () {
                      var t = this;
                      return r.map(this.relationsToRemove, function (n) {
                        var r = e.Object._create(t._targetClassName);
                        return (r.id = n), r;
                      });
                    },
                    toJSON: function () {
                      var e = null,
                        t = null,
                        n = this,
                        i = function (e) {
                          return {
                            __type: "Pointer",
                            className: n._targetClassName,
                            objectId: e,
                          };
                        },
                        o = null;
                      return (
                        this.relationsToAdd.length > 0 &&
                          ((o = r.map(this.relationsToAdd, i)),
                          (e = { __op: "AddRelation", objects: o })),
                        this.relationsToRemove.length > 0 &&
                          ((o = r.map(this.relationsToRemove, i)),
                          (t = { __op: "RemoveRelation", objects: o })),
                        e && t ? { __op: "Batch", ops: [e, t] } : e || t || {}
                      );
                    },
                    _mergeWithPrevious: function (t) {
                      if (t) {
                        if (t instanceof e.Op.Unset)
                          throw new Error(
                            "You can't modify a relation after deleting it."
                          );
                        if (t instanceof e.Op.Relation) {
                          if (
                            t._targetClassName &&
                            t._targetClassName !== this._targetClassName
                          )
                            throw new Error(
                              "Related object must be of class " +
                                t._targetClassName +
                                ", but " +
                                this._targetClassName +
                                " was passed in."
                            );
                          var n = r.union(
                              r.difference(
                                t.relationsToAdd,
                                this.relationsToRemove
                              ),
                              this.relationsToAdd
                            ),
                            i = r.union(
                              r.difference(
                                t.relationsToRemove,
                                this.relationsToAdd
                              ),
                              this.relationsToRemove
                            ),
                            o = new e.Op.Relation(n, i);
                          return (
                            (o._targetClassName = this._targetClassName), o
                          );
                        }
                        throw new Error("Op is invalid after previous op.");
                      }
                      return this;
                    },
                    _estimate: function (t, n, r) {
                      if (t) {
                        if (t instanceof e.Relation) {
                          if (this._targetClassName)
                            if (t.targetClassName) {
                              if (t.targetClassName !== this._targetClassName)
                                throw new Error(
                                  "Related object must be a " +
                                    t.targetClassName +
                                    ", but a " +
                                    this._targetClassName +
                                    " was passed in."
                                );
                            } else t.targetClassName = this._targetClassName;
                          return t;
                        }
                        throw new Error("Op is invalid after previous op.");
                      }
                      new e.Relation(
                        n,
                        r
                      ).targetClassName = this._targetClassName;
                    },
                  })),
                  e.Op._registerDecoder("AddRelation", function (t) {
                    return new e.Op.Relation(e._decode(t.objects), []);
                  }),
                  e.Op._registerDecoder("RemoveRelation", function (t) {
                    return new e.Op.Relation([], e._decode(t.objects));
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0);
              e.exports = function (e) {
                (e.Relation = function (e, t) {
                  if (!r.isString(t))
                    throw new TypeError("key must be a string");
                  (this.parent = e),
                    (this.key = t),
                    (this.targetClassName = null);
                }),
                  (e.Relation.reverseQuery = function (t, n, r) {
                    var i = new e.Query(t);
                    return i.equalTo(n, r._toPointer()), i;
                  }),
                  r.extend(e.Relation.prototype, {
                    _ensureParentAndKey: function (e, t) {
                      if (
                        ((this.parent = this.parent || e),
                        (this.key = this.key || t),
                        this.parent !== e)
                      )
                        throw new Error(
                          "Internal Error. Relation retrieved from two different Objects."
                        );
                      if (this.key !== t)
                        throw new Error(
                          "Internal Error. Relation retrieved from two different keys."
                        );
                    },
                    add: function (t) {
                      r.isArray(t) || (t = [t]);
                      var n = new e.Op.Relation(t, []);
                      this.parent.set(this.key, n),
                        (this.targetClassName = n._targetClassName);
                    },
                    remove: function (t) {
                      r.isArray(t) || (t = [t]);
                      var n = new e.Op.Relation([], t);
                      this.parent.set(this.key, n),
                        (this.targetClassName = n._targetClassName);
                    },
                    toJSON: function () {
                      return {
                        __type: "Relation",
                        className: this.targetClassName,
                      };
                    },
                    query: function () {
                      var t, n;
                      return (
                        this.targetClassName
                          ? ((t = e.Object._getSubclass(this.targetClassName)),
                            (n = new e.Query(t)))
                          : ((t = e.Object._getSubclass(this.parent.className)),
                            (n = new e.Query(t)),
                            (n._extraOptions.redirectClassNameForKey = this.key)),
                        n._addCondition(
                          "$relatedTo",
                          "object",
                          this.parent._toPointer()
                        ),
                        n._addCondition("$relatedTo", "key", this.key),
                        n
                      );
                    },
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(41),
                o = n(42),
                s = n(43),
                a = n(4),
                u = n(2)._request,
                c = n(1),
                l = n(3),
                h = l.tap,
                f = l.transformFetchOptions,
                d = n(6)("leancloud:file"),
                p = n(47);
              e.exports = function (e) {
                var t = function () {
                    return Math.floor(65536 * (1 + Math.random()))
                      .toString(16)
                      .substring(1);
                  },
                  n = function (e) {
                    return r.isString(e)
                      ? e.match(
                          /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                        )[4]
                      : "";
                  },
                  l = function (e) {
                    if (e < 26) return String.fromCharCode(65 + e);
                    if (e < 52) return String.fromCharCode(e - 26 + 97);
                    if (e < 62) return String.fromCharCode(e - 52 + 48);
                    if (62 === e) return "+";
                    if (63 === e) return "/";
                    throw new Error(
                      "Tried to encode large digit " + e + " in base64."
                    );
                  },
                  v = function (e) {
                    var t = [];
                    return (
                      (t.length = Math.ceil(e.length / 3)),
                      r.times(t.length, function (n) {
                        var r = e[3 * n],
                          i = e[3 * n + 1] || 0,
                          o = e[3 * n + 2] || 0,
                          s = 3 * n + 1 < e.length,
                          a = 3 * n + 2 < e.length;
                        t[n] = [
                          l((r >> 2) & 63),
                          l(((r << 4) & 48) | ((i >> 4) & 15)),
                          s ? l(((i << 2) & 60) | ((o >> 6) & 3)) : "=",
                          a ? l(63 & o) : "=",
                        ].join("");
                      }),
                      t.join("")
                    );
                  };
                (e.File = function (t, i, o) {
                  if (
                    ((this.attributes = {
                      name: t,
                      url: "",
                      metaData: {},
                      base64: "",
                    }),
                    r.isString(i))
                  )
                    throw new TypeError(
                      "Creating an AV.File from a String is not yet supported."
                    );
                  r.isArray(i) &&
                    ((this.attributes.metaData.size = i.length),
                    (i = { base64: v(i) })),
                    (this._extName = ""),
                    (this._data = i),
                    (this._uploadHeaders = {}),
                    "undefined" != typeof Blob &&
                      i instanceof Blob &&
                      (i.size && (this.attributes.metaData.size = i.size),
                      i.name && (this._extName = n(i.name)));
                  var s = void 0;
                  if (i && i.owner) s = i.owner;
                  else if (!e._config.disableCurrentUser)
                    try {
                      s = e.User.current();
                    } catch (e) {
                      if ("SYNC_API_NOT_AVAILABLE" !== e.code) throw e;
                    }
                  (this.attributes.metaData.owner = s ? s.id : "unknown"),
                    this.set("mime_type", o);
                }),
                  (e.File.withURL = function (t, n, r, i) {
                    if (!t || !n)
                      throw new Error("Please provide file name and url");
                    var o = new e.File(t, null, i);
                    if (r)
                      for (var s in r)
                        o.attributes.metaData[s] ||
                          (o.attributes.metaData[s] = r[s]);
                    return (
                      (o.attributes.url = n),
                      (o.attributes.metaData.__source = "external"),
                      o
                    );
                  }),
                  (e.File.createWithoutData = function (t) {
                    var n = new e.File();
                    return (n.id = t), n;
                  }),
                  r.extend(e.File.prototype, {
                    className: "_File",
                    _toFullJSON: function (t) {
                      var n = this,
                        i =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        o = r.clone(this.attributes);
                      return (
                        e._objectEach(o, function (n, r) {
                          o[r] = e._encode(n, t, void 0, i);
                        }),
                        e._objectEach(this._operations, function (e, t) {
                          o[t] = e;
                        }),
                        r.has(this, "id") && (o.objectId = this.id),
                        r(["createdAt", "updatedAt"]).each(function (e) {
                          if (r.has(n, e)) {
                            var t = n[e];
                            o[e] = r.isDate(t) ? t.toJSON() : t;
                          }
                        }),
                        i && (o.__type = "File"),
                        o
                      );
                    },
                    toFullJSON: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [];
                      return this._toFullJSON(e);
                    },
                    toJSON: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : [this];
                      return this._toFullJSON(n, !1);
                    },
                    _toPointer: function () {
                      return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id,
                      };
                    },
                    getACL: function () {
                      return this._acl;
                    },
                    setACL: function (t) {
                      return t instanceof e.ACL
                        ? ((this._acl = t), this)
                        : new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.");
                    },
                    name: function () {
                      return this.get("name");
                    },
                    url: function () {
                      return this.get("url");
                    },
                    get: function (e) {
                      switch (e) {
                        case "objectId":
                          return this.id;
                        case "url":
                        case "name":
                        case "mime_type":
                        case "metaData":
                        case "createdAt":
                        case "updatedAt":
                          return this.attributes[e];
                        default:
                          return this.attributes.metaData[e];
                      }
                    },
                    set: function () {
                      for (
                        var e = this,
                          t = function (t, n) {
                            switch (t) {
                              case "name":
                              case "url":
                              case "mime_type":
                              case "base64":
                              case "metaData":
                                e.attributes[t] = n;
                                break;
                              default:
                                e.attributes.metaData[t] = n;
                            }
                          },
                          n = arguments.length,
                          r = Array(n),
                          i = 0;
                        i < n;
                        i++
                      )
                        r[i] = arguments[i];
                      switch (r.length) {
                        case 1:
                          for (var o in r[0]) t(o, r[0][o]);
                          break;
                        case 2:
                          t(r[0], r[1]);
                      }
                      return this;
                    },
                    setUploadHeader: function (e, t) {
                      return (this._uploadHeaders[e] = t), this;
                    },
                    metaData: function (e, t) {
                      return e && t
                        ? ((this.attributes.metaData[e] = t), this)
                        : e && !t
                        ? this.attributes.metaData[e]
                        : this.attributes.metaData;
                    },
                    thumbnailURL: function (e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 100,
                        r =
                          !(arguments.length > 3 && void 0 !== arguments[3]) ||
                          arguments[3],
                        i =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : "png",
                        o = this.attributes.url;
                      if (!o) throw new Error("Invalid url.");
                      if (!e || !t || e <= 0 || t <= 0)
                        throw new Error("Invalid width or height value.");
                      if (n <= 0 || n > 100)
                        throw new Error("Invalid quality value.");
                      return (
                        o +
                        "?imageView/" +
                        (r ? 2 : 1) +
                        "/w/" +
                        e +
                        "/h/" +
                        t +
                        "/q/" +
                        n +
                        "/format/" +
                        i
                      );
                    },
                    size: function () {
                      return this.metaData().size;
                    },
                    ownerId: function () {
                      return this.metaData().owner;
                    },
                    destroy: function (e) {
                      return this.id
                        ? u("files", null, this.id, "DELETE", null, e)
                        : c.reject(new Error("The file id does not eixst."));
                    },
                    _fileToken: function (e, r) {
                      var i = this.attributes.name,
                        o = n(i);
                      !o &&
                        this._extName &&
                        ((i += this._extName), (o = this._extName));
                      var s = t() + t() + t() + t() + t() + o,
                        a = {
                          key: s,
                          name: i,
                          keep_file_name: r.keepFileName,
                          ACL: this._acl,
                          mime_type: e,
                          metaData: this.attributes.metaData,
                        };
                      return (
                        (this._qiniu_key = s),
                        u("fileTokens", null, null, "POST", a, r)
                      );
                    },
                    save: function () {
                      var e = this,
                        t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                      if (this.id) throw new Error("File is already saved.");
                      if (!this._previousSave)
                        if (this._data) {
                          var n = this.get("mime_type");
                          this._previousSave = this._fileToken(n, t).then(
                            function (a) {
                              return (
                                a.mime_type &&
                                  ((n = a.mime_type), e.set("mime_type", n)),
                                (e._token = a.token),
                                c
                                  .resolve()
                                  .then(function () {
                                    var t = e._data;
                                    if (t && t.base64) return p(t.base64, n);
                                    if (t && t.blob)
                                      return (
                                        !t.blob.type && n && (t.blob.type = n),
                                        t.blob.name ||
                                          (t.blob.name = e.get("name")),
                                        t.blob
                                      );
                                    if (
                                      "undefined" != typeof Blob &&
                                      t instanceof Blob
                                    )
                                      return t;
                                    throw new TypeError("malformed file data");
                                  })
                                  .then(function (n) {
                                    var u = r.extend({}, t);
                                    switch (
                                      (t.onprogress &&
                                        (u.onprogress = function (e) {
                                          if ("download" !== e.direction)
                                            return t.onprogress(e);
                                        }),
                                      a.provider)
                                    ) {
                                      case "s3":
                                        return s(a, n, e, u);
                                      case "qcloud":
                                        return i(a, n, e, u);
                                      case "qiniu":
                                      default:
                                        return o(a, n, e, u);
                                    }
                                  })
                                  .then(
                                    h(function () {
                                      return e._callback(!0);
                                    }),
                                    function (t) {
                                      throw (e._callback(!1), t);
                                    }
                                  )
                              );
                            }
                          );
                        } else if (
                          this.attributes.url &&
                          "external" === this.attributes.metaData.__source
                        ) {
                          var a = {
                            name: this.attributes.name,
                            ACL: this._acl,
                            metaData: this.attributes.metaData,
                            mime_type: this.mimeType,
                            url: this.attributes.url,
                          };
                          this._previousSave = u(
                            "files",
                            this.attributes.name,
                            null,
                            "post",
                            a,
                            t
                          ).then(function (t) {
                            return (
                              (e.attributes.name = t.name),
                              (e.attributes.url = t.url),
                              (e.id = t.objectId),
                              t.size && (e.attributes.metaData.size = t.size),
                              e
                            );
                          });
                        }
                      return this._previousSave;
                    },
                    _callback: function (e) {
                      u("fileCallback", null, null, "post", {
                        token: this._token,
                        result: e,
                      }).catch(d),
                        delete this._token,
                        delete this._data;
                    },
                    fetch: function (e, t) {
                      return u("files", null, this.id, "GET", f(e), t).then(
                        this._finishFetch.bind(this)
                      );
                    },
                    _finishFetch: function (t) {
                      var n = e.Object.prototype.parse(t);
                      return (
                        (n.attributes = {
                          name: n.name,
                          url: n.url,
                          mime_type: n.mime_type,
                          bucket: n.bucket,
                        }),
                        (n.attributes.metaData = n.metaData || {}),
                        (n.id = n.objectId),
                        delete n.objectId,
                        delete n.metaData,
                        delete n.url,
                        delete n.name,
                        delete n.mime_type,
                        delete n.bucket,
                        r.extend(this, n),
                        this
                      );
                    },
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(8),
                i = n(6)("cos"),
                o = n(1);
              e.exports = function (e, t, n) {
                var s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
                (n.attributes.url = e.url),
                  (n._bucket = e.bucket),
                  (n.id = e.objectId);
                var a = e.upload_url + "?sign=" + encodeURIComponent(e.token);
                return new o(function (e, o) {
                  var u = r("POST", a)
                    .set(n._uploadHeaders)
                    .attach("fileContent", t, n.attributes.name)
                    .field("op", "upload");
                  s.onprogress && u.on("progress", s.onprogress),
                    u.end(function (t, r) {
                      if ((r && i(r.status, r.body, r.text), t))
                        return (
                          r &&
                            ((t.statusCode = r.status),
                            (t.responseText = r.text),
                            (t.response = r.body)),
                          o(t)
                        );
                      e(n);
                    });
                });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(8),
                i = n(1),
                o = n(6)("qiniu");
              e.exports = function (e, t, n) {
                var s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
                (n.attributes.url = e.url),
                  (n._bucket = e.bucket),
                  (n.id = e.objectId);
                var a = e.token,
                  u = e.upload_url || "https://upload.qiniup.com";
                return new i(function (i, c) {
                  var l = r("POST", u)
                    .set(n._uploadHeaders)
                    .attach("file", t, n.attributes.name)
                    .field("name", n.attributes.name)
                    .field("key", e.key || n._qiniu_key)
                    .field("token", a);
                  s.onprogress && l.on("progress", s.onprogress),
                    l.end(function (e, t) {
                      if ((t && o(t.status, t.body, t.text), e))
                        return (
                          t &&
                            ((e.statusCode = t.status),
                            (e.responseText = t.text),
                            (e.response = t.body)),
                          c(e)
                        );
                      i(n);
                    });
                });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(8),
                i = n(1),
                o = function (e, t) {
                  return (
                    t &&
                      ((e.statusCode = t.status),
                      (e.responseText = t.text),
                      (e.response = t.body)),
                    e
                  );
                };
              e.exports = function (e, t, n) {
                var s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
                return (
                  (n.attributes.url = e.url),
                  (n._bucket = e.bucket),
                  (n.id = e.objectId),
                  new i(function (i, a) {
                    var u = r("PUT", e.upload_url).set(
                      Object.assign(
                        {
                          "Content-Type": n.get("mime_type"),
                          "Cache-Control": "public, max-age=31536000",
                        },
                        n._uploadHeaders
                      )
                    );
                    s.onprogress && u.on("progress", s.onprogress),
                      u.on("response", function (e) {
                        if (e.ok) return i(n);
                        a(o(e.error, e));
                      }),
                      u.on("error", function (e, t) {
                        return a(o(e, t));
                      }),
                      u.send(t).end();
                  })
                );
              };
            },
            function (e, t, n) {
              !(function () {
                var t = n(45),
                  r = n(14).utf8,
                  i = n(46),
                  o = n(14).bin,
                  s = function (e, n) {
                    e.constructor == String
                      ? (e =
                          n && "binary" === n.encoding
                            ? o.stringToBytes(e)
                            : r.stringToBytes(e))
                      : i(e)
                      ? (e = Array.prototype.slice.call(e, 0))
                      : Array.isArray(e) || (e = e.toString());
                    for (
                      var a = t.bytesToWords(e),
                        u = 8 * e.length,
                        c = 1732584193,
                        l = -271733879,
                        h = -1732584194,
                        f = 271733878,
                        d = 0;
                      d < a.length;
                      d++
                    )
                      a[d] =
                        (16711935 & ((a[d] << 8) | (a[d] >>> 24))) |
                        (4278255360 & ((a[d] << 24) | (a[d] >>> 8)));
                    (a[u >>> 5] |= 128 << u % 32),
                      (a[14 + (((u + 64) >>> 9) << 4)] = u);
                    for (
                      var p = s._ff, v = s._gg, g = s._hh, _ = s._ii, d = 0;
                      d < a.length;
                      d += 16
                    ) {
                      var m = c,
                        y = l,
                        b = h,
                        w = f;
                      (c = p(c, l, h, f, a[d + 0], 7, -680876936)),
                        (f = p(f, c, l, h, a[d + 1], 12, -389564586)),
                        (h = p(h, f, c, l, a[d + 2], 17, 606105819)),
                        (l = p(l, h, f, c, a[d + 3], 22, -1044525330)),
                        (c = p(c, l, h, f, a[d + 4], 7, -176418897)),
                        (f = p(f, c, l, h, a[d + 5], 12, 1200080426)),
                        (h = p(h, f, c, l, a[d + 6], 17, -1473231341)),
                        (l = p(l, h, f, c, a[d + 7], 22, -45705983)),
                        (c = p(c, l, h, f, a[d + 8], 7, 1770035416)),
                        (f = p(f, c, l, h, a[d + 9], 12, -1958414417)),
                        (h = p(h, f, c, l, a[d + 10], 17, -42063)),
                        (l = p(l, h, f, c, a[d + 11], 22, -1990404162)),
                        (c = p(c, l, h, f, a[d + 12], 7, 1804603682)),
                        (f = p(f, c, l, h, a[d + 13], 12, -40341101)),
                        (h = p(h, f, c, l, a[d + 14], 17, -1502002290)),
                        (l = p(l, h, f, c, a[d + 15], 22, 1236535329)),
                        (c = v(c, l, h, f, a[d + 1], 5, -165796510)),
                        (f = v(f, c, l, h, a[d + 6], 9, -1069501632)),
                        (h = v(h, f, c, l, a[d + 11], 14, 643717713)),
                        (l = v(l, h, f, c, a[d + 0], 20, -373897302)),
                        (c = v(c, l, h, f, a[d + 5], 5, -701558691)),
                        (f = v(f, c, l, h, a[d + 10], 9, 38016083)),
                        (h = v(h, f, c, l, a[d + 15], 14, -660478335)),
                        (l = v(l, h, f, c, a[d + 4], 20, -405537848)),
                        (c = v(c, l, h, f, a[d + 9], 5, 568446438)),
                        (f = v(f, c, l, h, a[d + 14], 9, -1019803690)),
                        (h = v(h, f, c, l, a[d + 3], 14, -187363961)),
                        (l = v(l, h, f, c, a[d + 8], 20, 1163531501)),
                        (c = v(c, l, h, f, a[d + 13], 5, -1444681467)),
                        (f = v(f, c, l, h, a[d + 2], 9, -51403784)),
                        (h = v(h, f, c, l, a[d + 7], 14, 1735328473)),
                        (l = v(l, h, f, c, a[d + 12], 20, -1926607734)),
                        (c = g(c, l, h, f, a[d + 5], 4, -378558)),
                        (f = g(f, c, l, h, a[d + 8], 11, -2022574463)),
                        (h = g(h, f, c, l, a[d + 11], 16, 1839030562)),
                        (l = g(l, h, f, c, a[d + 14], 23, -35309556)),
                        (c = g(c, l, h, f, a[d + 1], 4, -1530992060)),
                        (f = g(f, c, l, h, a[d + 4], 11, 1272893353)),
                        (h = g(h, f, c, l, a[d + 7], 16, -155497632)),
                        (l = g(l, h, f, c, a[d + 10], 23, -1094730640)),
                        (c = g(c, l, h, f, a[d + 13], 4, 681279174)),
                        (f = g(f, c, l, h, a[d + 0], 11, -358537222)),
                        (h = g(h, f, c, l, a[d + 3], 16, -722521979)),
                        (l = g(l, h, f, c, a[d + 6], 23, 76029189)),
                        (c = g(c, l, h, f, a[d + 9], 4, -640364487)),
                        (f = g(f, c, l, h, a[d + 12], 11, -421815835)),
                        (h = g(h, f, c, l, a[d + 15], 16, 530742520)),
                        (l = g(l, h, f, c, a[d + 2], 23, -995338651)),
                        (c = _(c, l, h, f, a[d + 0], 6, -198630844)),
                        (f = _(f, c, l, h, a[d + 7], 10, 1126891415)),
                        (h = _(h, f, c, l, a[d + 14], 15, -1416354905)),
                        (l = _(l, h, f, c, a[d + 5], 21, -57434055)),
                        (c = _(c, l, h, f, a[d + 12], 6, 1700485571)),
                        (f = _(f, c, l, h, a[d + 3], 10, -1894986606)),
                        (h = _(h, f, c, l, a[d + 10], 15, -1051523)),
                        (l = _(l, h, f, c, a[d + 1], 21, -2054922799)),
                        (c = _(c, l, h, f, a[d + 8], 6, 1873313359)),
                        (f = _(f, c, l, h, a[d + 15], 10, -30611744)),
                        (h = _(h, f, c, l, a[d + 6], 15, -1560198380)),
                        (l = _(l, h, f, c, a[d + 13], 21, 1309151649)),
                        (c = _(c, l, h, f, a[d + 4], 6, -145523070)),
                        (f = _(f, c, l, h, a[d + 11], 10, -1120210379)),
                        (h = _(h, f, c, l, a[d + 2], 15, 718787259)),
                        (l = _(l, h, f, c, a[d + 9], 21, -343485551)),
                        (c = (c + m) >>> 0),
                        (l = (l + y) >>> 0),
                        (h = (h + b) >>> 0),
                        (f = (f + w) >>> 0);
                    }
                    return t.endian([c, l, h, f]);
                  };
                (s._ff = function (e, t, n, r, i, o, s) {
                  var a = e + ((t & n) | (~t & r)) + (i >>> 0) + s;
                  return ((a << o) | (a >>> (32 - o))) + t;
                }),
                  (s._gg = function (e, t, n, r, i, o, s) {
                    var a = e + ((t & r) | (n & ~r)) + (i >>> 0) + s;
                    return ((a << o) | (a >>> (32 - o))) + t;
                  }),
                  (s._hh = function (e, t, n, r, i, o, s) {
                    var a = e + (t ^ n ^ r) + (i >>> 0) + s;
                    return ((a << o) | (a >>> (32 - o))) + t;
                  }),
                  (s._ii = function (e, t, n, r, i, o, s) {
                    var a = e + (n ^ (t | ~r)) + (i >>> 0) + s;
                    return ((a << o) | (a >>> (32 - o))) + t;
                  }),
                  (s._blocksize = 16),
                  (s._digestsize = 16),
                  (e.exports = function (e, n) {
                    if (void 0 === e || null === e)
                      throw new Error("Illegal argument " + e);
                    var r = t.wordsToBytes(s(e, n));
                    return n && n.asBytes
                      ? r
                      : n && n.asString
                      ? o.bytesToString(r)
                      : t.bytesToHex(r);
                  });
              })();
            },
            function (e, t) {
              !(function () {
                var t =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  n = {
                    rotl: function (e, t) {
                      return (e << t) | (e >>> (32 - t));
                    },
                    rotr: function (e, t) {
                      return (e << (32 - t)) | (e >>> t);
                    },
                    endian: function (e) {
                      if (e.constructor == Number)
                        return (
                          (16711935 & n.rotl(e, 8)) |
                          (4278255360 & n.rotl(e, 24))
                        );
                      for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                      return e;
                    },
                    randomBytes: function (e) {
                      for (var t = []; e > 0; e--)
                        t.push(Math.floor(256 * Math.random()));
                      return t;
                    },
                    bytesToWords: function (e) {
                      for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8)
                        t[r >>> 5] |= e[n] << (24 - (r % 32));
                      return t;
                    },
                    wordsToBytes: function (e) {
                      for (var t = [], n = 0; n < 32 * e.length; n += 8)
                        t.push((e[n >>> 5] >>> (24 - (n % 32))) & 255);
                      return t;
                    },
                    bytesToHex: function (e) {
                      for (var t = [], n = 0; n < e.length; n++)
                        t.push((e[n] >>> 4).toString(16)),
                          t.push((15 & e[n]).toString(16));
                      return t.join("");
                    },
                    hexToBytes: function (e) {
                      for (var t = [], n = 0; n < e.length; n += 2)
                        t.push(parseInt(e.substr(n, 2), 16));
                      return t;
                    },
                    bytesToBase64: function (e) {
                      for (var n = [], r = 0; r < e.length; r += 3)
                        for (
                          var i = (e[r] << 16) | (e[r + 1] << 8) | e[r + 2],
                            o = 0;
                          o < 4;
                          o++
                        )
                          8 * r + 6 * o <= 8 * e.length
                            ? n.push(t.charAt((i >>> (6 * (3 - o))) & 63))
                            : n.push("=");
                      return n.join("");
                    },
                    base64ToBytes: function (e) {
                      e = e.replace(/[^A-Z0-9+\/]/gi, "");
                      for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4)
                        0 != i &&
                          n.push(
                            ((t.indexOf(e.charAt(r - 1)) &
                              (Math.pow(2, -2 * i + 8) - 1)) <<
                              (2 * i)) |
                              (t.indexOf(e.charAt(r)) >>> (6 - 2 * i))
                          );
                      return n;
                    },
                  };
                e.exports = n;
              })();
            },
            function (e, t) {
              function n(e) {
                return (
                  !!e.constructor &&
                  "function" == typeof e.constructor.isBuffer &&
                  e.constructor.isBuffer(e)
                );
              }
              function r(e) {
                return (
                  "function" == typeof e.readFloatLE &&
                  "function" == typeof e.slice &&
                  n(e.slice(0, 0))
                );
              }
              /*!
               * Determine if an object is a Buffer
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */
              e.exports = function (e) {
                return null != e && (n(e) || r(e) || !!e._isBuffer);
              };
            },
            function (e, t, n) {
              "use strict";
              var r = function (e, t) {
                var n;
                e.indexOf("base64") < 0
                  ? (n = atob(e))
                  : e.split(",")[0].indexOf("base64") >= 0
                  ? ((t = t || e.split(",")[0].split(":")[1].split(";")[0]),
                    (n = atob(e.split(",")[1])))
                  : (n = unescape(e.split(",")[1]));
                for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++)
                  r[i] = n.charCodeAt(i);
                return new Blob([r], { type: t });
              };
              e.exports = r;
            },
            function (e, t, n) {
              "use strict";
              function r(e, t) {
                return e && e[t] ? (o.isFunction(e[t]) ? e[t]() : e[t]) : null;
              }
              var i = (function () {
                  function e(e, t) {
                    var n = [],
                      r = !0,
                      i = !1,
                      o = void 0;
                    try {
                      for (
                        var s, a = e[Symbol.iterator]();
                        !(r = (s = a.next()).done) &&
                        (n.push(s.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (e) {
                      (i = !0), (o = e);
                    } finally {
                      try {
                        !r && a.return && a.return();
                      } finally {
                        if (i) throw o;
                      }
                    }
                    return n;
                  }
                  return function (t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  };
                })(),
                o = n(0),
                s = n(4),
                a = n(1),
                u = n(2),
                c = u._request,
                l = n(3),
                h = l.isNullOrUndefined,
                f = l.ensureArray,
                d = l.transformFetchOptions,
                p = l.setValue,
                v = l.findValue,
                g = l.isPlainObject,
                _ = function e(t) {
                  return o.isArray(t)
                    ? t.map(e)
                    : g(t)
                    ? o.mapObject(t, e)
                    : o.isObject(t) && t._toPointer
                    ? t._toPointer()
                    : t;
                },
                m = ["objectId", "createdAt", "updatedAt"],
                y = function (e) {
                  if (-1 !== m.indexOf(e))
                    throw new Error("key[" + e + "] is reserved");
                },
                b = function (e) {
                  var t = o.find(e, function (e) {
                    return e instanceof Error;
                  });
                  if (!t) return e;
                  var n = new s(t.code, t.message);
                  throw ((n.results = e), n);
                };
              e.exports = function (e) {
                (e.Object = function (t, n) {
                  if (o.isString(t))
                    return e.Object._create.apply(this, arguments);
                  (t = t || {}),
                    n &&
                      n.parse &&
                      ((t = this.parse(t)), (t = this._mergeMagicFields(t)));
                  var i = r(this, "defaults");
                  i && (t = o.extend({}, i, t)),
                    n && n.collection && (this.collection = n.collection),
                    (this._serverData = {}),
                    (this._opSetQueue = [{}]),
                    (this._flags = {}),
                    (this.attributes = {}),
                    (this._hashedJSON = {}),
                    (this._escapedAttributes = {}),
                    (this.cid = o.uniqueId("c")),
                    (this.changed = {}),
                    (this._silent = {}),
                    (this._pending = {}),
                    this.set(t, { silent: !0 }),
                    (this.changed = {}),
                    (this._silent = {}),
                    (this._pending = {}),
                    (this._hasData = !0),
                    (this._previousAttributes = o.clone(this.attributes)),
                    this.initialize.apply(this, arguments);
                }),
                  (e.Object.saveAll = function (t, n) {
                    return e.Object._deepSaveAsync(t, null, n);
                  }),
                  (e.Object.fetchAll = function (e, t) {
                    return a
                      .resolve()
                      .then(function () {
                        return c(
                          "batch",
                          null,
                          null,
                          "POST",
                          {
                            requests: o.map(e, function (e) {
                              if (!e.className)
                                throw new Error(
                                  "object must have className to fetch"
                                );
                              if (!e.id)
                                throw new Error("object must have id to fetch");
                              if (e.dirty())
                                throw new Error(
                                  "object is modified but not saved"
                                );
                              return {
                                method: "GET",
                                path:
                                  "/1.1/classes/" + e.className + "/" + e.id,
                              };
                            }),
                          },
                          t
                        );
                      })
                      .then(function (t) {
                        var n = o.map(e, function (e, n) {
                          if (t[n].success) {
                            var r = e.parse(t[n].success);
                            return e._cleanupUnsetKeys(r), e._finishFetch(r), e;
                          }
                          return null === t[n].success
                            ? new s(s.OBJECT_NOT_FOUND, "Object not found.")
                            : new s(t[n].error.code, t[n].error.error);
                        });
                        return b(n);
                      });
                  }),
                  o.extend(e.Object.prototype, e.Events, {
                    _fetchWhenSave: !1,
                    initialize: function () {},
                    fetchWhenSave: function (e) {
                      if (!o.isBoolean(e))
                        throw new Error(
                          "Expect boolean value for fetchWhenSave"
                        );
                      this._fetchWhenSave = e;
                    },
                    getObjectId: function () {
                      return this.id;
                    },
                    getCreatedAt: function () {
                      return this.createdAt;
                    },
                    getUpdatedAt: function () {
                      return this.updatedAt;
                    },
                    toJSON: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : [];
                      return this._toFullJSON(n, !1);
                    },
                    toFullJSON: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [];
                      return this._toFullJSON(e);
                    },
                    _toFullJSON: function (t) {
                      var n = this,
                        r =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        i = o.clone(this.attributes);
                      if (o.isArray(t)) var s = t.concat(this);
                      return (
                        e._objectEach(i, function (t, n) {
                          i[n] = e._encode(t, s, void 0, r);
                        }),
                        e._objectEach(this._operations, function (e, t) {
                          i[t] = e;
                        }),
                        o.has(this, "id") && (i.objectId = this.id),
                        o(["createdAt", "updatedAt"]).each(function (e) {
                          if (o.has(n, e)) {
                            var t = n[e];
                            i[e] = o.isDate(t) ? t.toJSON() : t;
                          }
                        }),
                        r &&
                          ((i.__type = "Object"),
                          o.isArray(t) && t.length && (i.__type = "Pointer"),
                          (i.className = this.className)),
                        i
                      );
                    },
                    _refreshCache: function () {
                      var t = this;
                      t._refreshingCache ||
                        ((t._refreshingCache = !0),
                        e._objectEach(this.attributes, function (n, r) {
                          n instanceof e.Object
                            ? n._refreshCache()
                            : o.isObject(n) &&
                              t._resetCacheForKey(r) &&
                              t.set(r, new e.Op.Set(n), { silent: !0 });
                        }),
                        delete t._refreshingCache);
                    },
                    dirty: function (e) {
                      this._refreshCache();
                      var t = o.last(this._opSetQueue);
                      return e ? !!t[e] : !this.id || o.keys(t).length > 0;
                    },
                    _toPointer: function () {
                      return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id,
                      };
                    },
                    get: function (e) {
                      switch (e) {
                        case "objectId":
                          return this.id;
                        case "createdAt":
                        case "updatedAt":
                          return this[e];
                        default:
                          return this.attributes[e];
                      }
                    },
                    relation: function (t) {
                      var n = this.get(t);
                      if (n) {
                        if (!(n instanceof e.Relation))
                          throw new Error(
                            "Called relation() on non-relation field " + t
                          );
                        return n._ensureParentAndKey(this, t), n;
                      }
                      return new e.Relation(this, t);
                    },
                    escape: function (e) {
                      var t = this._escapedAttributes[e];
                      if (t) return t;
                      var n,
                        r = this.attributes[e];
                      return (
                        (n = h(r) ? "" : o.escape(r.toString())),
                        (this._escapedAttributes[e] = n),
                        n
                      );
                    },
                    has: function (e) {
                      return !h(this.attributes[e]);
                    },
                    _mergeMagicFields: function (t) {
                      var n = this,
                        r = ["objectId", "createdAt", "updatedAt"];
                      return (
                        e._arrayEach(r, function (r) {
                          t[r] &&
                            ("objectId" === r
                              ? (n.id = t[r])
                              : ("createdAt" !== r && "updatedAt" !== r) ||
                                o.isDate(t[r])
                              ? (n[r] = t[r])
                              : (n[r] = e._parseDate(t[r])),
                            delete t[r]);
                        }),
                        t
                      );
                    },
                    _startSave: function () {
                      this._opSetQueue.push({});
                    },
                    _cancelSave: function () {
                      var t = o.first(this._opSetQueue);
                      this._opSetQueue = o.rest(this._opSetQueue);
                      var n = o.first(this._opSetQueue);
                      e._objectEach(t, function (e, r) {
                        var i = t[r],
                          o = n[r];
                        i && o
                          ? (n[r] = o._mergeWithPrevious(i))
                          : i && (n[r] = i);
                      }),
                        (this._saving = this._saving - 1);
                    },
                    _finishSave: function (t) {
                      var n = {};
                      e._traverse(this.attributes, function (t) {
                        t instanceof e.Object &&
                          t.id &&
                          t._hasData &&
                          (n[t.id] = t);
                      });
                      var r = o.first(this._opSetQueue);
                      (this._opSetQueue = o.rest(this._opSetQueue)),
                        this._applyOpSet(r, this._serverData),
                        this._mergeMagicFields(t);
                      var i = this;
                      e._objectEach(t, function (t, r) {
                        i._serverData[r] = e._decode(t, r);
                        var o = e._traverse(i._serverData[r], function (t) {
                          if (t instanceof e.Object && n[t.id]) return n[t.id];
                        });
                        o && (i._serverData[r] = o);
                      }),
                        this._rebuildAllEstimatedData();
                      var s = this._opSetQueue.map(o.clone);
                      this._refreshCache(),
                        (this._opSetQueue = s),
                        (this._saving = this._saving - 1);
                    },
                    _finishFetch: function (t, n) {
                      (this._opSetQueue = [{}]), this._mergeMagicFields(t);
                      var r = this;
                      e._objectEach(t, function (t, n) {
                        r._serverData[n] = e._decode(t, n);
                      }),
                        this._rebuildAllEstimatedData(),
                        this._refreshCache(),
                        (this._opSetQueue = [{}]),
                        (this._hasData = n);
                    },
                    _applyOpSet: function (t, n) {
                      var r = this;
                      e._objectEach(t, function (t, o) {
                        var s = v(n, o),
                          a = i(s, 3),
                          u = a[0],
                          c = a[1],
                          l = a[2];
                        p(n, o, t._estimate(u, r, o)),
                          c && c[l] === e.Op._UNSET && delete c[l];
                      });
                    },
                    _resetCacheForKey: function (t) {
                      var n = this.attributes[t];
                      if (
                        o.isObject(n) &&
                        !(n instanceof e.Object) &&
                        !(n instanceof e.File)
                      ) {
                        var r = JSON.stringify(_(n));
                        if (this._hashedJSON[t] !== r) {
                          var i = !!this._hashedJSON[t];
                          return (this._hashedJSON[t] = r), i;
                        }
                      }
                      return !1;
                    },
                    _rebuildEstimatedDataForKey: function (t) {
                      var n = this;
                      delete this.attributes[t],
                        this._serverData[t] &&
                          (this.attributes[t] = this._serverData[t]),
                        e._arrayEach(this._opSetQueue, function (r) {
                          var o = r[t];
                          if (o) {
                            var s = v(n.attributes, t),
                              a = i(s, 4),
                              u = a[0],
                              c = a[1],
                              l = a[2],
                              h = a[3];
                            p(n.attributes, t, o._estimate(u, n, t)),
                              c && c[l] === e.Op._UNSET && delete c[l],
                              n._resetCacheForKey(h);
                          }
                        });
                    },
                    _rebuildAllEstimatedData: function () {
                      var t = this,
                        n = o.clone(this.attributes);
                      (this.attributes = o.clone(this._serverData)),
                        e._arrayEach(this._opSetQueue, function (n) {
                          t._applyOpSet(n, t.attributes),
                            e._objectEach(n, function (e, n) {
                              t._resetCacheForKey(n);
                            });
                        }),
                        e._objectEach(n, function (e, n) {
                          t.attributes[n] !== e &&
                            t.trigger("change:" + n, t, t.attributes[n], {});
                        }),
                        e._objectEach(this.attributes, function (e, r) {
                          o.has(n, r) || t.trigger("change:" + r, t, e, {});
                        });
                    },
                    set: function (t, n, r) {
                      var i;
                      if (
                        (o.isObject(t) || h(t)
                          ? ((i = o.mapObject(t, function (t, n) {
                              return y(n), e._decode(t, n);
                            })),
                            (r = n))
                          : ((i = {}), y(t), (i[t] = e._decode(n, t))),
                        (r = r || {}),
                        !i)
                      )
                        return this;
                      i instanceof e.Object && (i = i.attributes),
                        r.unset &&
                          e._objectEach(i, function (t, n) {
                            i[n] = new e.Op.Unset();
                          });
                      var s = o.clone(i),
                        a = this;
                      e._objectEach(s, function (t, n) {
                        t instanceof e.Op &&
                          ((s[n] = t._estimate(a.attributes[n], a, n)),
                          s[n] === e.Op._UNSET && delete s[n]);
                      }),
                        this._validate(i, r),
                        (r.changes = {});
                      var u = this._escapedAttributes;
                      return (
                        e._arrayEach(o.keys(i), function (t) {
                          var n = i[t];
                          n instanceof e.Relation && (n.parent = a),
                            n instanceof e.Op || (n = new e.Op.Set(n));
                          var s = !0;
                          n instanceof e.Op.Set &&
                            o.isEqual(a.attributes[t], n.value) &&
                            (s = !1),
                            s &&
                              (delete u[t],
                              r.silent
                                ? (a._silent[t] = !0)
                                : (r.changes[t] = !0));
                          var c = o.last(a._opSetQueue);
                          (c[t] = n._mergeWithPrevious(c[t])),
                            a._rebuildEstimatedDataForKey(t),
                            s
                              ? ((a.changed[t] = a.attributes[t]),
                                r.silent || (a._pending[t] = !0))
                              : (delete a.changed[t], delete a._pending[t]);
                        }),
                        r.silent || this.change(r),
                        this
                      );
                    },
                    unset: function (e, t) {
                      return (
                        (t = t || {}), (t.unset = !0), this.set(e, null, t)
                      );
                    },
                    increment: function (t, n) {
                      return (
                        (o.isUndefined(n) || o.isNull(n)) && (n = 1),
                        this.set(t, new e.Op.Increment(n))
                      );
                    },
                    add: function (t, n) {
                      return this.set(t, new e.Op.Add(f(n)));
                    },
                    addUnique: function (t, n) {
                      return this.set(t, new e.Op.AddUnique(f(n)));
                    },
                    remove: function (t, n) {
                      return this.set(t, new e.Op.Remove(f(n)));
                    },
                    bitAnd: function (t, n) {
                      return this.set(t, new e.Op.BitAnd(n));
                    },
                    bitOr: function (t, n) {
                      return this.set(t, new e.Op.BitOr(n));
                    },
                    bitXor: function (t, n) {
                      return this.set(t, new e.Op.BitXor(n));
                    },
                    op: function (e) {
                      return o.last(this._opSetQueue)[e];
                    },
                    clear: function (e) {
                      (e = e || {}), (e.unset = !0);
                      var t = o.extend(this.attributes, this._operations);
                      return this.set(t, e);
                    },
                    revert: function (e) {
                      var t = o.last(this._opSetQueue);
                      return (
                        f(e || o.keys(t)).forEach(function (e) {
                          delete t[e];
                        }),
                        this._rebuildAllEstimatedData(),
                        this
                      );
                    },
                    _getSaveJSON: function () {
                      var t = o.clone(o.first(this._opSetQueue));
                      return (
                        e._objectEach(t, function (e, n) {
                          t[n] = e.toJSON();
                        }),
                        t
                      );
                    },
                    _canBeSerialized: function () {
                      return e.Object._canBeSerializedAsValue(this.attributes);
                    },
                    fetch: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t = arguments[1],
                        n = this;
                      return c(
                        "classes",
                        this.className,
                        this.id,
                        "GET",
                        d(e),
                        t
                      ).then(function (t) {
                        var r = n.parse(t);
                        return (
                          e.keys || n._cleanupUnsetKeys(r),
                          n._finishFetch(r, !0),
                          n
                        );
                      });
                    },
                    _cleanupUnsetKeys: function (t) {
                      var n = this;
                      e._objectEach(this._serverData, function (e, r) {
                        void 0 === t[r] && delete n._serverData[r];
                      });
                    },
                    save: function (t, n, r) {
                      var i, s, u;
                      o.isObject(t) || h(t)
                        ? ((i = t), (u = n))
                        : ((i = {}), (i[t] = n), (u = r)),
                        (u = o.clone(u) || {}),
                        u.wait && (s = o.clone(this.attributes));
                      var l = o.clone(u) || {};
                      l.wait && (l.silent = !0), i && this.set(i, l);
                      var f = this,
                        d = [],
                        p = [];
                      return (
                        e.Object._findUnsavedChildren(f, d, p),
                        d.length + p.length > 1
                          ? e.Object._deepSaveAsync(this, f, u)
                          : (this._startSave(),
                            (this._saving = (this._saving || 0) + 1),
                            (this._allPreviousSaves =
                              this._allPreviousSaves || a.resolve()),
                            (this._allPreviousSaves = this._allPreviousSaves
                              .catch(function (e) {})
                              .then(function () {
                                var e = f.id ? "PUT" : "POST",
                                  t = f._getSaveJSON(),
                                  n = {};
                                if (
                                  ((f._fetchWhenSave || u.fetchWhenSave) &&
                                    (n.new = "true"),
                                  u._failOnNotExist &&
                                    (n.failOnNotExist = "true"),
                                  u.query)
                                ) {
                                  var r;
                                  if (
                                    ("function" == typeof u.query.toJSON &&
                                      (r = u.query.toJSON()) &&
                                      (n.where = r.where),
                                    !n.where)
                                  )
                                    throw new Error(
                                      "options.query is not an AV.Query"
                                    );
                                }
                                o.extend(t, f._flags);
                                var a = "classes",
                                  h = f.className;
                                "_User" !== f.className ||
                                  f.id ||
                                  ((a = "users"), (h = null));
                                var d = u._makeRequest || c,
                                  p = d(a, h, f.id, e, t, u, n);
                                return (p = p.then(
                                  function (e) {
                                    var t = f.parse(e);
                                    return (
                                      u.wait && (t = o.extend(i || {}, t)),
                                      f._finishSave(t),
                                      u.wait && f.set(s, l),
                                      f
                                    );
                                  },
                                  function (e) {
                                    throw (f._cancelSave(), e);
                                  }
                                ));
                              })),
                            this._allPreviousSaves)
                      );
                    },
                    destroy: function (e) {
                      e = e || {};
                      var t = this,
                        n = function () {
                          t.trigger("destroy", t, t.collection, e);
                        };
                      return this.id
                        ? (e.wait || n(),
                          c(
                            "classes",
                            this.className,
                            this.id,
                            "DELETE",
                            this._flags,
                            e
                          ).then(function () {
                            return e.wait && n(), t;
                          }))
                        : n();
                    },
                    parse: function (t) {
                      var n = o.clone(t);
                      return (
                        o(["createdAt", "updatedAt"]).each(function (t) {
                          n[t] && (n[t] = e._parseDate(n[t]));
                        }),
                        n.createdAt &&
                          !n.updatedAt &&
                          (n.updatedAt = n.createdAt),
                        n
                      );
                    },
                    clone: function () {
                      return new this.constructor(this.attributes);
                    },
                    isNew: function () {
                      return !this.id;
                    },
                    change: function (t) {
                      t = t || {};
                      var n = this._changing;
                      this._changing = !0;
                      var r = this;
                      e._objectEach(this._silent, function (e) {
                        r._pending[e] = !0;
                      });
                      var i = o.extend({}, t.changes, this._silent);
                      if (
                        ((this._silent = {}),
                        e._objectEach(i, function (e, n) {
                          r.trigger("change:" + n, r, r.get(n), t);
                        }),
                        n)
                      )
                        return this;
                      for (
                        var s = function (e, t) {
                          r._pending[t] || r._silent[t] || delete r.changed[t];
                        };
                        !o.isEmpty(this._pending);

                      )
                        (this._pending = {}),
                          this.trigger("change", this, t),
                          e._objectEach(this.changed, s),
                          (r._previousAttributes = o.clone(this.attributes));
                      return (this._changing = !1), this;
                    },
                    hasChanged: function (e) {
                      return arguments.length
                        ? this.changed && o.has(this.changed, e)
                        : !o.isEmpty(this.changed);
                    },
                    changedAttributes: function (t) {
                      if (!t)
                        return !!this.hasChanged() && o.clone(this.changed);
                      var n = {},
                        r = this._previousAttributes;
                      return (
                        e._objectEach(t, function (e, t) {
                          o.isEqual(r[t], e) || (n[t] = e);
                        }),
                        n
                      );
                    },
                    previous: function (e) {
                      return arguments.length && this._previousAttributes
                        ? this._previousAttributes[e]
                        : null;
                    },
                    previousAttributes: function () {
                      return o.clone(this._previousAttributes);
                    },
                    isValid: function () {
                      try {
                        this.validate(this.attributes);
                      } catch (e) {
                        return !1;
                      }
                      return !0;
                    },
                    validate: function (t) {
                      if (o.has(t, "ACL") && !(t.ACL instanceof e.ACL))
                        throw new s(s.OTHER_CAUSE, "ACL must be a AV.ACL.");
                    },
                    _validate: function (e, t) {
                      !t.silent &&
                        this.validate &&
                        ((e = o.extend({}, this.attributes, e)),
                        this.validate(e));
                    },
                    getACL: function () {
                      return this.get("ACL");
                    },
                    setACL: function (e, t) {
                      return this.set("ACL", e, t);
                    },
                    disableBeforeHook: function () {
                      this.ignoreHook("beforeSave"),
                        this.ignoreHook("beforeUpdate"),
                        this.ignoreHook("beforeDelete");
                    },
                    disableAfterHook: function () {
                      this.ignoreHook("afterSave"),
                        this.ignoreHook("afterUpdate"),
                        this.ignoreHook("afterDelete");
                    },
                    ignoreHook: function (t) {
                      o.contains(
                        [
                          "beforeSave",
                          "afterSave",
                          "beforeUpdate",
                          "afterUpdate",
                          "beforeDelete",
                          "afterDelete",
                        ],
                        t
                      ),
                        e.hookKey,
                        this._flags.__ignore_hooks ||
                          (this._flags.__ignore_hooks = []),
                        this._flags.__ignore_hooks.push(t);
                    },
                  }),
                  (e.Object.createWithoutData = function (t, n, r) {
                    var i = void 0;
                    if (o.isString(t)) i = e.Object._getSubclass(t);
                    else {
                      if (!(t.prototype && t.prototype instanceof e.Object))
                        throw new Error(
                          "class must be a string or a subclass of AV.Object."
                        );
                      i = t;
                    }
                    var s = new i();
                    return (s.id = n), (s._hasData = r), s;
                  }),
                  (e.Object.destroyAll = function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    if (!e || 0 === e.length) return a.resolve();
                    var n = o.groupBy(e, function (e) {
                        return JSON.stringify({
                          className: e.className,
                          flags: e._flags,
                        });
                      }),
                      r = {
                        requests: o.map(n, function (e) {
                          var t = o.map(e, "id").join(",");
                          return {
                            method: "DELETE",
                            path: "/1.1/classes/" + e[0].className + "/" + t,
                            body: e[0]._flags,
                          };
                        }),
                      };
                    return c("batch", null, null, "POST", r, t).then(function (
                      e
                    ) {
                      var t = o.find(e, function (e) {
                        return !e.success;
                      });
                      if (t) throw new s(t.error.code, t.error.error);
                    });
                  }),
                  (e.Object._getSubclass = function (t) {
                    if (!o.isString(t))
                      throw new Error(
                        "AV.Object._getSubclass requires a string argument."
                      );
                    var n = e.Object._classMap[t];
                    return (
                      n ||
                        ((n = e.Object.extend(t)), (e.Object._classMap[t] = n)),
                      n
                    );
                  }),
                  (e.Object._create = function (t, n, r) {
                    return new (e.Object._getSubclass(t))(n, r);
                  }),
                  (e.Object._classMap = {}),
                  (e.Object._extend = e._extend),
                  (e.Object.new = function (t, n) {
                    return new e.Object(t, n);
                  }),
                  (e.Object.extend = function (t, n, r) {
                    if (!o.isString(t)) {
                      if (t && o.has(t, "className"))
                        return e.Object.extend(t.className, t, n);
                      throw new Error(
                        "AV.Object.extend's first argument should be the className."
                      );
                    }
                    "User" === t && (t = "_User");
                    var i = null;
                    if (o.has(e.Object._classMap, t)) {
                      var s = e.Object._classMap[t];
                      if (!n && !r) return s;
                      i = s._extend(n, r);
                    } else
                      (n = n || {}),
                        (n._className = t),
                        (i = this._extend(n, r));
                    return (
                      (i.extend = function (n) {
                        if (o.isString(n) || (n && o.has(n, "className")))
                          return e.Object.extend.apply(i, arguments);
                        var r = [t].concat(o.toArray(arguments));
                        return e.Object.extend.apply(i, r);
                      }),
                      Object.defineProperty(
                        i,
                        "query",
                        Object.getOwnPropertyDescriptor(e.Object, "query")
                      ),
                      (i.new = function (e, t) {
                        return new i(e, t);
                      }),
                      (e.Object._classMap[t] = i),
                      i
                    );
                  }),
                  Object.defineProperty(e.Object.prototype, "className", {
                    get: function () {
                      var e =
                        this._className ||
                        this.constructor._LCClassName ||
                        this.constructor.name;
                      return "User" === e ? "_User" : e;
                    },
                  }),
                  (e.Object.register = function (t, n) {
                    if (!(t.prototype instanceof e.Object))
                      throw new Error(
                        "registered class is not a subclass of AV.Object"
                      );
                    var r = n || t.name;
                    if (!r.length)
                      throw new Error("registered class must be named");
                    n && (t._LCClassName = n), (e.Object._classMap[r] = t);
                  }),
                  Object.defineProperty(e.Object, "query", {
                    get: function () {
                      return new e.Query(this.prototype.className);
                    },
                  }),
                  (e.Object._findUnsavedChildren = function (t, n, r) {
                    e._traverse(t, function (t) {
                      return t instanceof e.Object
                        ? void (t.dirty() && n.push(t))
                        : t instanceof e.File
                        ? void (t.id || r.push(t))
                        : void 0;
                    });
                  }),
                  (e.Object._canBeSerializedAsValue = function (t) {
                    var n = !0;
                    return (
                      t instanceof e.Object || t instanceof e.File
                        ? (n = !!t.id)
                        : o.isArray(t)
                        ? e._arrayEach(t, function (t) {
                            e.Object._canBeSerializedAsValue(t) || (n = !1);
                          })
                        : o.isObject(t) &&
                          e._objectEach(t, function (t) {
                            e.Object._canBeSerializedAsValue(t) || (n = !1);
                          }),
                      n
                    );
                  }),
                  (e.Object._deepSaveAsync = function (t, n, r) {
                    var i = [],
                      u = [];
                    e.Object._findUnsavedChildren(t, i, u);
                    var l = a.resolve();
                    o.each(u, function (e) {
                      l = l.then(function () {
                        return e.save();
                      });
                    });
                    var h = o.uniq(i),
                      f = o.uniq(h);
                    return l
                      .then(function () {
                        return a._continueWhile(
                          function () {
                            return f.length > 0;
                          },
                          function () {
                            var t = [],
                              n = [];
                            if (
                              (e._arrayEach(f, function (e) {
                                if (t.length > 20) return void n.push(e);
                                e._canBeSerialized() ? t.push(e) : n.push(e);
                              }),
                              (f = n),
                              0 === t.length)
                            )
                              return a.reject(
                                new s(
                                  s.OTHER_CAUSE,
                                  "Tried to save a batch with a cycle."
                                )
                              );
                            var i = a.resolve(
                                o.map(t, function (e) {
                                  return e._allPreviousSaves || a.resolve();
                                })
                              ),
                              u = i.then(function () {
                                return c(
                                  "batch",
                                  null,
                                  null,
                                  "POST",
                                  {
                                    requests: o.map(t, function (e) {
                                      var t = e.id ? "PUT" : "POST",
                                        n = e._getSaveJSON();
                                      o.extend(n, e._flags);
                                      var r = e.className,
                                        i = "/classes/" + r;
                                      "_User" !== e.className ||
                                        e.id ||
                                        (i = "/users");
                                      var i = "/1.1" + i;
                                      return (
                                        e.id && (i = i + "/" + e.id),
                                        e._startSave(),
                                        { method: t, path: i, body: n }
                                      );
                                    }),
                                  },
                                  r
                                ).then(function (e) {
                                  var n = o.map(t, function (t, n) {
                                    return e[n].success
                                      ? (t._finishSave(t.parse(e[n].success)),
                                        t)
                                      : (t._cancelSave(),
                                        new s(
                                          e[n].error.code,
                                          e[n].error.error
                                        ));
                                  });
                                  return b(n);
                                });
                              });
                            return (
                              e._arrayEach(t, function (e) {
                                e._allPreviousSaves = u;
                              }),
                              u
                            );
                          }
                        );
                      })
                      .then(function () {
                        return t;
                      });
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(4);
              e.exports = function (e) {
                e.Role = e.Object.extend("_Role", {
                  constructor: function (t, n) {
                    if (
                      (r.isString(t)
                        ? (e.Object.prototype.constructor.call(
                            this,
                            null,
                            null
                          ),
                          this.setName(t))
                        : e.Object.prototype.constructor.call(this, t, n),
                      n)
                    ) {
                      if (!(n instanceof e.ACL))
                        throw new TypeError(
                          "acl must be an instance of AV.ACL"
                        );
                      this.setACL(n);
                    }
                  },
                  getName: function () {
                    return this.get("name");
                  },
                  setName: function (e, t) {
                    return this.set("name", e, t);
                  },
                  getUsers: function () {
                    return this.relation("users");
                  },
                  getRoles: function () {
                    return this.relation("roles");
                  },
                  validate: function (t, n) {
                    if ("name" in t && t.name !== this.getName()) {
                      var o = t.name;
                      if (this.id && this.id !== t.objectId)
                        return new i(
                          i.OTHER_CAUSE,
                          "A role's name can only be set before it has been saved."
                        );
                      if (!r.isString(o))
                        return new i(
                          i.OTHER_CAUSE,
                          "A role's name must be a String."
                        );
                      if (!/^[0-9a-zA-Z\-_ ]+$/.test(o))
                        return new i(
                          i.OTHER_CAUSE,
                          "A role's name can only contain alphanumeric characters, _, -, and spaces."
                        );
                    }
                    return (
                      !!e.Object.prototype.validate &&
                      e.Object.prototype.validate.call(this, t, n)
                    );
                  },
                });
              };
            },
            function (e, t, n) {
              "use strict";
              function r(e, t, n) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n),
                  e
                );
              }
              var i = n(0),
                o = n(9),
                s = n(4),
                a = n(2),
                u = a._request,
                c = a.request,
                l = n(1),
                h = function () {
                  if ("undefined" == typeof wx || "function" != typeof wx.login)
                    throw new Error("Weapp Login is only available in Weapp");
                  return new l(function (e, t) {
                    wx.login({
                      success: function (n) {
                        var r = n.code,
                          i = n.errMsg;
                        r ? e(r) : t(new Error(i));
                      },
                      fail: function () {
                        return t(new Error("wx.login 失败"));
                      },
                    });
                  });
                },
                f = function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = t.preferUnionId,
                    r = t.unionIdPlatform,
                    i = void 0 === r ? "weixin" : r,
                    o = t.asMainAccount,
                    s = void 0 === o || o;
                  return n
                    ? { platform: i, main_account: s, code: e }
                    : { code: e };
                },
                d = function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r = n.unionIdPlatform,
                    o = void 0 === r ? "weixin" : r,
                    a = n.asMainAccount,
                    u = void 0 !== a && a;
                  if ("string" != typeof t)
                    throw new s(s.OTHER_CAUSE, "unionId is not a string");
                  if ("string" != typeof o)
                    throw new s(
                      s.OTHER_CAUSE,
                      "unionIdPlatform is not a string"
                    );
                  return i.extend({}, e, {
                    platform: o,
                    unionid: t,
                    main_account: Boolean(u),
                  });
                };
              e.exports = function (e) {
                e.User = e.Object.extend(
                  "_User",
                  {
                    _isCurrentUser: !1,
                    _mergeMagicFields: function (t) {
                      return (
                        t.sessionToken &&
                          ((this._sessionToken = t.sessionToken),
                          delete t.sessionToken),
                        e.User.__super__._mergeMagicFields.call(this, t)
                      );
                    },
                    _cleanupAuthData: function () {
                      if (this.isCurrent()) {
                        var t = this.get("authData");
                        t &&
                          e._objectEach(this.get("authData"), function (e, n) {
                            t[n] || delete t[n];
                          });
                      }
                    },
                    _synchronizeAllAuthData: function () {
                      if (this.get("authData")) {
                        var t = this;
                        e._objectEach(this.get("authData"), function (e, n) {
                          t._synchronizeAuthData(n);
                        });
                      }
                    },
                    _synchronizeAuthData: function (t) {
                      if (this.isCurrent()) {
                        var n;
                        i.isString(t)
                          ? ((n = t), (t = e.User._authProviders[n]))
                          : (n = t.getAuthType());
                        var r = this.get("authData");
                        r &&
                          t &&
                          (t.restoreAuthentication(r[n]) ||
                            this.dissociateAuthData(t));
                      }
                    },
                    _handleSaveResult: function (t) {
                      return (
                        t &&
                          !e._config.disableCurrentUser &&
                          (this._isCurrentUser = !0),
                        this._cleanupAuthData(),
                        this._synchronizeAllAuthData(),
                        delete this._serverData.password,
                        this._rebuildEstimatedDataForKey("password"),
                        this._refreshCache(),
                        (!t && !this.isCurrent()) ||
                        e._config.disableCurrentUser
                          ? l.resolve()
                          : l.resolve(e.User._saveCurrentUser(this))
                      );
                    },
                    _linkWith: function (t, n) {
                      var o,
                        s = this,
                        a =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        u = a.failOnNotExist,
                        c = void 0 !== u && u;
                      return (
                        i.isString(t)
                          ? ((o = t), (t = e.User._authProviders[t]))
                          : (o = t.getAuthType()),
                        n
                          ? this.save(
                              { authData: r({}, o, n) },
                              {
                                fetchWhenSave: !!this.get("authData"),
                                _failOnNotExist: c,
                              }
                            ).then(function (e) {
                              return e._handleSaveResult(!0).then(function () {
                                return e;
                              });
                            })
                          : t.authenticate().then(function (e) {
                              return s._linkWith(t, e);
                            })
                      );
                    },
                    associateWithAuthData: function (e, t) {
                      return this._linkWith(t, e);
                    },
                    associateWithAuthDataAndUnionId: function (e, t, n, r) {
                      return this._linkWith(t, d(e, n, r));
                    },
                    associateWithWeapp: function (e) {
                      var t = this;
                      return h().then(function (n) {
                        return t._linkWith("lc_weapp", f(n, e));
                      });
                    },
                    linkWithWeapp: function (e) {
                      return this.associateWithWeapp(e);
                    },
                    associateWithWeappWithUnionId: function (e, t) {
                      var n = this;
                      return h().then(function (r) {
                        return n._linkWith("lc_weapp", d({ code: r }, e, t));
                      });
                    },
                    dissociateAuthData: function (e) {
                      return (
                        this.unset("authData." + e),
                        this.save().then(function (e) {
                          return e._handleSaveResult(!0).then(function () {
                            return e;
                          });
                        })
                      );
                    },
                    _unlinkFrom: function (e) {
                      return this.dissociateAuthData(e);
                    },
                    _isLinked: function (e) {
                      var t;
                      return (
                        (t = i.isString(e) ? e : e.getAuthType()),
                        !!(this.get("authData") || {})[t]
                      );
                    },
                    isAnonymous: function () {
                      return this._isLinked("anonymous");
                    },
                    logOut: function () {
                      this._logOutWithAll(), (this._isCurrentUser = !1);
                    },
                    _logOutWithAll: function () {
                      if (this.get("authData")) {
                        var t = this;
                        e._objectEach(this.get("authData"), function (e, n) {
                          t._logOutWith(n);
                        });
                      }
                    },
                    _logOutWith: function (t) {
                      this.isCurrent() &&
                        (i.isString(t) && (t = e.User._authProviders[t]),
                        t && t.deauthenticate && t.deauthenticate());
                    },
                    signUp: function (e, t) {
                      var n = (e && e.username) || this.get("username");
                      if (!n || "" === n)
                        throw new s(
                          s.OTHER_CAUSE,
                          "Cannot sign up user with an empty name."
                        );
                      var r = (e && e.password) || this.get("password");
                      if (!r || "" === r)
                        throw new s(
                          s.OTHER_CAUSE,
                          "Cannot sign up user with an empty password."
                        );
                      return this.save(e, t).then(function (e) {
                        return (
                          e.isAnonymous() &&
                            (e.unset("authData.anonymous"),
                            (e._opSetQueue = [{}])),
                          e._handleSaveResult(!0).then(function () {
                            return e;
                          })
                        );
                      });
                    },
                    signUpOrlogInWithMobilePhone: function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n =
                          (e && e.mobilePhoneNumber) ||
                          this.get("mobilePhoneNumber");
                      if (!n || "" === n)
                        throw new s(
                          s.OTHER_CAUSE,
                          "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber."
                        );
                      var r = (e && e.smsCode) || this.get("smsCode");
                      if (!r || "" === r)
                        throw new s(
                          s.OTHER_CAUSE,
                          "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode."
                        );
                      return (
                        (t._makeRequest = function (e, t, n, r, i) {
                          return u("usersByMobilePhone", null, null, "POST", i);
                        }),
                        this.save(e, t).then(function (e) {
                          return (
                            delete e.attributes.smsCode,
                            delete e._serverData.smsCode,
                            e._handleSaveResult(!0).then(function () {
                              return e;
                            })
                          );
                        })
                      );
                    },
                    loginWithAuthData: function (e, t, n) {
                      return this._linkWith(t, e, n);
                    },
                    loginWithAuthDataAndUnionId: function (e, t, n, r) {
                      return this.loginWithAuthData(d(e, n, r), t, r);
                    },
                    loginWithWeapp: function (e) {
                      var t = this;
                      return h().then(function (n) {
                        return t.loginWithAuthData(f(n, e), "lc_weapp", e);
                      });
                    },
                    loginWithWeappWithUnionId: function (e, t) {
                      var n = this;
                      return h().then(function (r) {
                        return n.loginWithAuthData(
                          d({ code: r }, e, t),
                          "lc_weapp",
                          t
                        );
                      });
                    },
                    logIn: function () {
                      var e = this;
                      return u("login", null, null, "POST", this.toJSON()).then(
                        function (t) {
                          var n = e.parse(t);
                          return (
                            e._finishFetch(n),
                            e._handleSaveResult(!0).then(function () {
                              return (
                                n.smsCode || delete e.attributes.smsCode, e
                              );
                            })
                          );
                        }
                      );
                    },
                    save: function (t, n, r) {
                      var o, s;
                      return (
                        i.isObject(t) || i.isNull(t) || i.isUndefined(t)
                          ? ((o = t), (s = n))
                          : ((o = {}), (o[t] = n), (s = r)),
                        (s = s || {}),
                        e.Object.prototype.save
                          .call(this, o, s)
                          .then(function (e) {
                            return e._handleSaveResult(!1).then(function () {
                              return e;
                            });
                          })
                      );
                    },
                    follow: function (t, n) {
                      if (!this.id) throw new Error("Please signin.");
                      var r = void 0,
                        o = void 0;
                      t.user ? ((r = t.user), (o = t.attributes)) : (r = t);
                      var s = i.isString(r) ? r : r.id;
                      if (!s) throw new Error("Invalid target user.");
                      var a = "users/" + this.id + "/friendship/" + s;
                      return u(a, null, null, "POST", e._encode(o), n);
                    },
                    unfollow: function (e, t) {
                      if (!this.id) throw new Error("Please signin.");
                      var n = void 0;
                      n = e.user ? e.user : e;
                      var r = i.isString(n) ? n : n.id;
                      if (!r) throw new Error("Invalid target user.");
                      var o = "users/" + this.id + "/friendship/" + r;
                      return u(o, null, null, "DELETE", null, t);
                    },
                    followerQuery: function () {
                      return e.User.followerQuery(this.id);
                    },
                    followeeQuery: function () {
                      return e.User.followeeQuery(this.id);
                    },
                    fetch: function (t, n) {
                      return e.Object.prototype.fetch
                        .call(this, t, n)
                        .then(function (e) {
                          return e._handleSaveResult(!1).then(function () {
                            return e;
                          });
                        });
                    },
                    updatePassword: function (e, t, n) {
                      var r = "users/" + this.id + "/updatePassword";
                      return u(
                        r,
                        null,
                        null,
                        "PUT",
                        { old_password: e, new_password: t },
                        n
                      );
                    },
                    isCurrent: function () {
                      return this._isCurrentUser;
                    },
                    getUsername: function () {
                      return this.get("username");
                    },
                    getMobilePhoneNumber: function () {
                      return this.get("mobilePhoneNumber");
                    },
                    setMobilePhoneNumber: function (e, t) {
                      return this.set("mobilePhoneNumber", e, t);
                    },
                    setUsername: function (e, t) {
                      return this.set("username", e, t);
                    },
                    setPassword: function (e, t) {
                      return this.set("password", e, t);
                    },
                    getEmail: function () {
                      return this.get("email");
                    },
                    setEmail: function (e, t) {
                      return this.set("email", e, t);
                    },
                    authenticated: function () {
                      return (
                        !!this._sessionToken &&
                        !e._config.disableCurrentUser &&
                        e.User.current() &&
                        e.User.current().id === this.id
                      );
                    },
                    isAuthenticated: function () {
                      var t = this;
                      return l.resolve().then(function () {
                        return (
                          !!t._sessionToken &&
                          e.User._fetchUserBySessionToken(t._sessionToken).then(
                            function () {
                              return !0;
                            },
                            function (e) {
                              if (211 === e.code) return !1;
                              throw e;
                            }
                          )
                        );
                      });
                    },
                    getSessionToken: function () {
                      return this._sessionToken;
                    },
                    refreshSessionToken: function (e) {
                      var t = this;
                      return u(
                        "users/" + this.id + "/refreshSessionToken",
                        null,
                        null,
                        "PUT",
                        null,
                        e
                      ).then(function (e) {
                        return (
                          t._finishFetch(e),
                          t._handleSaveResult(!0).then(function () {
                            return t;
                          })
                        );
                      });
                    },
                    getRoles: function (t) {
                      return e.Relation.reverseQuery(
                        "_Role",
                        "users",
                        this
                      ).find(t);
                    },
                  },
                  {
                    _currentUser: null,
                    _currentUserMatchesDisk: !1,
                    _CURRENT_USER_KEY: "currentUser",
                    _authProviders: {},
                    signUp: function (t, n, r, i) {
                      return (
                        (r = r || {}),
                        (r.username = t),
                        (r.password = n),
                        e.Object._create("_User").signUp(r, i)
                      );
                    },
                    logIn: function (t, n) {
                      var r = e.Object._create("_User");
                      return (
                        r._finishFetch({ username: t, password: n }), r.logIn()
                      );
                    },
                    become: function (e) {
                      return this._fetchUserBySessionToken(e).then(function (
                        e
                      ) {
                        return e._handleSaveResult(!0).then(function () {
                          return e;
                        });
                      });
                    },
                    _fetchUserBySessionToken: function (t) {
                      var n = e.Object._create("_User");
                      return c({
                        method: "GET",
                        path: "/users/me",
                        authOptions: { sessionToken: t },
                      }).then(function (e) {
                        var t = n.parse(e);
                        return n._finishFetch(t), n;
                      });
                    },
                    logInWithMobilePhoneSmsCode: function (t, n) {
                      var r = e.Object._create("_User");
                      return (
                        r._finishFetch({ mobilePhoneNumber: t, smsCode: n }),
                        r.logIn()
                      );
                    },
                    signUpOrlogInWithMobilePhone: function (t, n, r, i) {
                      return (
                        (r = r || {}),
                        (r.mobilePhoneNumber = t),
                        (r.smsCode = n),
                        e.Object._create("_User").signUpOrlogInWithMobilePhone(
                          r,
                          i
                        )
                      );
                    },
                    logInWithMobilePhone: function (t, n) {
                      var r = e.Object._create("_User");
                      return (
                        r._finishFetch({ mobilePhoneNumber: t, password: n }),
                        r.logIn()
                      );
                    },
                    loginWithEmail: function (t, n) {
                      var r = e.Object._create("_User");
                      return (
                        r._finishFetch({ email: t, password: n }), r.logIn()
                      );
                    },
                    loginWithAuthData: function (t, n, r) {
                      return e.User._logInWith(n, t, r);
                    },
                    signUpOrlogInWithAuthData: function () {
                      return this.loginWithAuthData.apply(this, arguments);
                    },
                    loginWithAuthDataAndUnionId: function (e, t, n, r) {
                      return this.loginWithAuthData(d(e, n, r), t, r);
                    },
                    signUpOrlogInWithAuthDataAndUnionId: function () {
                      return this.loginWithAuthDataAndUnionId.apply(
                        this,
                        arguments
                      );
                    },
                    loginWithWeapp: function (e) {
                      var t = this;
                      return h().then(function (n) {
                        return t.loginWithAuthData(f(n, e), "lc_weapp", e);
                      });
                    },
                    loginWithWeappWithUnionId: function (e, t) {
                      var n = this;
                      return h().then(function (r) {
                        return n.loginWithAuthData(
                          d({ code: r }, e, t),
                          "lc_weapp",
                          t
                        );
                      });
                    },
                    loginAnonymously: function () {
                      return this.loginWithAuthData({ id: o() }, "anonymous");
                    },
                    associateWithAuthData: function (e, t, n) {
                      return e._linkWith(t, n);
                    },
                    logOut: function () {
                      return e._config.disableCurrentUser
                        ? l.resolve(null)
                        : (null !== e.User._currentUser &&
                            (e.User._currentUser._logOutWithAll(),
                            (e.User._currentUser._isCurrentUser = !1)),
                          (e.User._currentUserMatchesDisk = !0),
                          (e.User._currentUser = null),
                          e.localStorage
                            .removeItemAsync(
                              e._getAVPath(e.User._CURRENT_USER_KEY)
                            )
                            .then(function () {
                              return e._refreshSubscriptionId();
                            }));
                    },
                    followerQuery: function (t) {
                      if (!t || !i.isString(t))
                        throw new Error("Invalid user object id.");
                      var n = new e.FriendShipQuery("_Follower");
                      return (
                        (n._friendshipTag = "follower"),
                        n.equalTo(
                          "user",
                          e.Object.createWithoutData("_User", t)
                        ),
                        n
                      );
                    },
                    followeeQuery: function (t) {
                      if (!t || !i.isString(t))
                        throw new Error("Invalid user object id.");
                      var n = new e.FriendShipQuery("_Followee");
                      return (
                        (n._friendshipTag = "followee"),
                        n.equalTo(
                          "user",
                          e.Object.createWithoutData("_User", t)
                        ),
                        n
                      );
                    },
                    requestPasswordReset: function (e) {
                      return u("requestPasswordReset", null, null, "POST", {
                        email: e,
                      });
                    },
                    requestEmailVerify: function (e) {
                      return u("requestEmailVerify", null, null, "POST", {
                        email: e,
                      });
                    },
                    requestMobilePhoneVerify: function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = { mobilePhoneNumber: e };
                      return (
                        t.validateToken && (n.validate_token = t.validateToken),
                        u("requestMobilePhoneVerify", null, null, "POST", n, t)
                      );
                    },
                    requestPasswordResetBySmsCode: function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = { mobilePhoneNumber: e };
                      return (
                        t.validateToken && (n.validate_token = t.validateToken),
                        u(
                          "requestPasswordResetBySmsCode",
                          null,
                          null,
                          "POST",
                          n,
                          t
                        )
                      );
                    },
                    resetPasswordBySmsCode: function (e, t) {
                      return u("resetPasswordBySmsCode", null, e, "PUT", {
                        password: t,
                      });
                    },
                    verifyMobilePhone: function (e) {
                      return u("verifyMobilePhone", null, e, "POST", null);
                    },
                    requestLoginSmsCode: function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = { mobilePhoneNumber: e };
                      return (
                        t.validateToken && (n.validate_token = t.validateToken),
                        u("requestLoginSmsCode", null, null, "POST", n, t)
                      );
                    },
                    currentAsync: function () {
                      return e._config.disableCurrentUser
                        ? l.resolve(null)
                        : e.User._currentUser
                        ? l.resolve(e.User._currentUser)
                        : e.User._currentUserMatchesDisk
                        ? l.resolve(e.User._currentUser)
                        : e.localStorage
                            .getItemAsync(
                              e._getAVPath(e.User._CURRENT_USER_KEY)
                            )
                            .then(function (t) {
                              if (!t) return null;
                              (e.User._currentUserMatchesDisk = !0),
                                (e.User._currentUser = e.Object._create(
                                  "_User"
                                )),
                                (e.User._currentUser._isCurrentUser = !0);
                              var n = JSON.parse(t);
                              return (
                                (e.User._currentUser.id = n._id),
                                delete n._id,
                                (e.User._currentUser._sessionToken =
                                  n._sessionToken),
                                delete n._sessionToken,
                                e.User._currentUser._finishFetch(n),
                                e.User._currentUser._synchronizeAllAuthData(),
                                e.User._currentUser._refreshCache(),
                                (e.User._currentUser._opSetQueue = [{}]),
                                e.User._currentUser
                              );
                            });
                    },
                    current: function () {
                      if (e._config.disableCurrentUser) return null;
                      if (e.User._currentUser) return e.User._currentUser;
                      if (e.User._currentUserMatchesDisk)
                        return e.User._currentUser;
                      e.User._currentUserMatchesDisk = !0;
                      var t = e.localStorage.getItem(
                        e._getAVPath(e.User._CURRENT_USER_KEY)
                      );
                      if (!t) return null;
                      (e.User._currentUser = e.Object._create("_User")),
                        (e.User._currentUser._isCurrentUser = !0);
                      var n = JSON.parse(t);
                      return (
                        (e.User._currentUser.id = n._id),
                        delete n._id,
                        (e.User._currentUser._sessionToken = n._sessionToken),
                        delete n._sessionToken,
                        e.User._currentUser._finishFetch(n),
                        e.User._currentUser._synchronizeAllAuthData(),
                        e.User._currentUser._refreshCache(),
                        (e.User._currentUser._opSetQueue = [{}]),
                        e.User._currentUser
                      );
                    },
                    _saveCurrentUser: function (t) {
                      var n;
                      return (
                        (n =
                          e.User._currentUser !== t
                            ? e.User.logOut()
                            : l.resolve()),
                        n.then(function () {
                          (t._isCurrentUser = !0), (e.User._currentUser = t);
                          var n = t._toFullJSON();
                          return (
                            (n._id = t.id),
                            (n._sessionToken = t._sessionToken),
                            e.localStorage
                              .setItemAsync(
                                e._getAVPath(e.User._CURRENT_USER_KEY),
                                JSON.stringify(n)
                              )
                              .then(function () {
                                return (
                                  (e.User._currentUserMatchesDisk = !0),
                                  e._refreshSubscriptionId()
                                );
                              })
                          );
                        })
                      );
                    },
                    _registerAuthenticationProvider: function (t) {
                      (e.User._authProviders[t.getAuthType()] = t),
                        !e._config.disableCurrentUser &&
                          e.User.current() &&
                          e.User.current()._synchronizeAuthData(
                            t.getAuthType()
                          );
                    },
                    _logInWith: function (t, n, r) {
                      return e.Object._create("_User")._linkWith(t, n, r);
                    },
                  }
                );
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(6)("leancloud:query"),
                o = n(1),
                s = n(4),
                a = n(2),
                u = a._request,
                c = a.request,
                l = n(3),
                h = l.ensureArray,
                f = l.transformFetchOptions,
                d = function (e, t) {
                  if (void 0 === e) throw new Error(t);
                };
              e.exports = function (e) {
                (e.Query = function (t) {
                  r.isString(t) && (t = e.Object._getSubclass(t)),
                    (this.objectClass = t),
                    (this.className = t.prototype.className),
                    (this._where = {}),
                    (this._include = []),
                    (this._select = []),
                    (this._limit = -1),
                    (this._skip = 0),
                    (this._extraOptions = {});
                }),
                  (e.Query.or = function () {
                    var t = r.toArray(arguments),
                      n = null;
                    e._arrayEach(t, function (e) {
                      if ((r.isNull(n) && (n = e.className), n !== e.className))
                        throw new Error(
                          "All queries must be for the same class"
                        );
                    });
                    var i = new e.Query(n);
                    return i._orQuery(t), i;
                  }),
                  (e.Query.and = function () {
                    var t = r.toArray(arguments),
                      n = null;
                    e._arrayEach(t, function (e) {
                      if ((r.isNull(n) && (n = e.className), n !== e.className))
                        throw new Error(
                          "All queries must be for the same class"
                        );
                    });
                    var i = new e.Query(n);
                    return i._andQuery(t), i;
                  }),
                  (e.Query.doCloudQuery = function (t, n, i) {
                    var o = { cql: t };
                    return (
                      r.isArray(n) ? (o.pvalues = n) : (i = n),
                      u("cloudQuery", null, null, "GET", o, i).then(function (
                        t
                      ) {
                        var n = new e.Query(t.className);
                        return {
                          results: r.map(t.results, function (e) {
                            var r = n._newObject(t);
                            return (
                              r._finishFetch &&
                                r._finishFetch(n._processResult(e), !0),
                              r
                            );
                          }),
                          count: t.count,
                          className: t.className,
                        };
                      })
                    );
                  }),
                  (e.Query._extend = e._extend),
                  r.extend(e.Query.prototype, {
                    _processResult: function (e) {
                      return e;
                    },
                    get: function (e, t) {
                      if (!r.isString(e))
                        throw new Error("objectId must be a string");
                      if ("" === e)
                        return o.reject(
                          new s(s.OBJECT_NOT_FOUND, "Object not found.")
                        );
                      var n = this._newObject();
                      n.id = e;
                      var i = this.toJSON(),
                        a = {};
                      return (
                        i.keys && (a.keys = i.keys),
                        i.include && (a.include = i.include),
                        i.includeACL && (a.includeACL = i.includeACL),
                        u("classes", this.className, e, "GET", f(a), t).then(
                          function (e) {
                            if (r.isEmpty(e))
                              throw new s(
                                s.OBJECT_NOT_FOUND,
                                "Object not found."
                              );
                            return n._finishFetch(n.parse(e), !0), n;
                          }
                        )
                      );
                    },
                    toJSON: function () {
                      var t = { where: this._where };
                      return (
                        this._include.length > 0 &&
                          (t.include = this._include.join(",")),
                        this._select.length > 0 &&
                          (t.keys = this._select.join(",")),
                        void 0 !== this._includeACL &&
                          (t.returnACL = this._includeACL),
                        this._limit >= 0 && (t.limit = this._limit),
                        this._skip > 0 && (t.skip = this._skip),
                        void 0 !== this._order && (t.order = this._order),
                        e._objectEach(this._extraOptions, function (e, n) {
                          t[n] = e;
                        }),
                        t
                      );
                    },
                    _newObject: function (t) {
                      return t && t.className
                        ? new e.Object(t.className)
                        : new this.objectClass();
                    },
                    _createRequest: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : this.toJSON(),
                        t = arguments[1],
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : "/classes/" + this.className;
                      return encodeURIComponent(JSON.stringify(e)).length > 2e3
                        ? c({
                            path: "/batch",
                            method: "POST",
                            data: {
                              requests: [
                                { method: "GET", path: "/1.1" + n, params: e },
                              ],
                            },
                            authOptions: t,
                          }).then(function (e) {
                            var t = e[0];
                            if (t.success) return t.success;
                            var n = new Error(
                              t.error.error || "Unknown batch error"
                            );
                            throw ((n.code = t.error.code), n);
                          })
                        : c({
                            method: "GET",
                            path: n,
                            query: e,
                            authOptions: t,
                          });
                    },
                    _parseResponse: function (e) {
                      var t = this;
                      return r.map(e.results, function (n) {
                        var r = t._newObject(e);
                        return (
                          r._finishFetch &&
                            r._finishFetch(t._processResult(n), !0),
                          r
                        );
                      });
                    },
                    find: function (e) {
                      return this._createRequest(void 0, e).then(
                        this._parseResponse.bind(this)
                      );
                    },
                    scan: function () {
                      var e = this,
                        t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        n = t.orderedBy,
                        s = t.batchSize,
                        a = arguments[1],
                        c = this.toJSON();
                      i("scan %O", c),
                        c.order && delete c.order,
                        c.skip && delete c.skip,
                        c.limit && delete c.limit,
                        n && (c.scan_key = n),
                        s && (c.limit = s);
                      var l = o.resolve([]),
                        h = void 0,
                        f = !1;
                      return {
                        next: function () {
                          return (
                            (l = l.then(function (t) {
                              return f
                                ? []
                                : t.length > 1
                                ? t
                                : h || 0 === t.length
                                ? u(
                                    "scan/classes",
                                    e.className,
                                    null,
                                    "GET",
                                    h ? r.extend({}, c, { cursor: h }) : c,
                                    a
                                  )
                                    .then(function (t) {
                                      return (
                                        (h = t.cursor), e._parseResponse(t)
                                      );
                                    })
                                    .then(function (e) {
                                      return e.length || (f = !0), t.concat(e);
                                    })
                                : ((f = !0), t);
                            })),
                            l
                              .then(function (e) {
                                return e.shift();
                              })
                              .then(function (e) {
                                return { value: e, done: f };
                              })
                          );
                        },
                      };
                    },
                    destroyAll: function (t) {
                      return this.find(t).then(function (n) {
                        return e.Object.destroyAll(n, t);
                      });
                    },
                    count: function (e) {
                      var t = this.toJSON();
                      return (
                        (t.limit = 0),
                        (t.count = 1),
                        this._createRequest(t, e).then(function (e) {
                          return e.count;
                        })
                      );
                    },
                    first: function (e) {
                      var t = this,
                        n = this.toJSON();
                      return (
                        (n.limit = 1),
                        this._createRequest(n, e).then(function (e) {
                          return r.map(e.results, function (e) {
                            var n = t._newObject();
                            return (
                              n._finishFetch &&
                                n._finishFetch(t._processResult(e), !0),
                              n
                            );
                          })[0];
                        })
                      );
                    },
                    skip: function (e) {
                      return (
                        d(e, "undefined is not a valid skip value"),
                        (this._skip = e),
                        this
                      );
                    },
                    limit: function (e) {
                      return (
                        d(e, "undefined is not a valid limit value"),
                        (this._limit = e),
                        this
                      );
                    },
                    equalTo: function (t, n) {
                      return (
                        d(t, "undefined is not a valid key"),
                        d(n, "undefined is not a valid value"),
                        (this._where[t] = e._encode(n)),
                        this
                      );
                    },
                    _addCondition: function (t, n, r) {
                      return (
                        d(t, "undefined is not a valid condition key"),
                        d(n, "undefined is not a valid condition"),
                        d(r, "undefined is not a valid condition value"),
                        this._where[t] || (this._where[t] = {}),
                        (this._where[t][n] = e._encode(r)),
                        this
                      );
                    },
                    sizeEqualTo: function (e, t) {
                      return this._addCondition(e, "$size", t), this;
                    },
                    notEqualTo: function (e, t) {
                      return this._addCondition(e, "$ne", t), this;
                    },
                    lessThan: function (e, t) {
                      return this._addCondition(e, "$lt", t), this;
                    },
                    greaterThan: function (e, t) {
                      return this._addCondition(e, "$gt", t), this;
                    },
                    lessThanOrEqualTo: function (e, t) {
                      return this._addCondition(e, "$lte", t), this;
                    },
                    greaterThanOrEqualTo: function (e, t) {
                      return this._addCondition(e, "$gte", t), this;
                    },
                    containedIn: function (e, t) {
                      return this._addCondition(e, "$in", t), this;
                    },
                    notContainedIn: function (e, t) {
                      return this._addCondition(e, "$nin", t), this;
                    },
                    containsAll: function (e, t) {
                      return this._addCondition(e, "$all", t), this;
                    },
                    exists: function (e) {
                      return this._addCondition(e, "$exists", !0), this;
                    },
                    doesNotExist: function (e) {
                      return this._addCondition(e, "$exists", !1), this;
                    },
                    matches: function (e, t, n) {
                      return (
                        this._addCondition(e, "$regex", t),
                        n || (n = ""),
                        t.ignoreCase && (n += "i"),
                        t.multiline && (n += "m"),
                        n && n.length && this._addCondition(e, "$options", n),
                        this
                      );
                    },
                    matchesQuery: function (e, t) {
                      var n = t.toJSON();
                      return (
                        (n.className = t.className),
                        this._addCondition(e, "$inQuery", n),
                        this
                      );
                    },
                    doesNotMatchQuery: function (e, t) {
                      var n = t.toJSON();
                      return (
                        (n.className = t.className),
                        this._addCondition(e, "$notInQuery", n),
                        this
                      );
                    },
                    matchesKeyInQuery: function (e, t, n) {
                      var r = n.toJSON();
                      return (
                        (r.className = n.className),
                        this._addCondition(e, "$select", { key: t, query: r }),
                        this
                      );
                    },
                    doesNotMatchKeyInQuery: function (e, t, n) {
                      var r = n.toJSON();
                      return (
                        (r.className = n.className),
                        this._addCondition(e, "$dontSelect", {
                          key: t,
                          query: r,
                        }),
                        this
                      );
                    },
                    _orQuery: function (e) {
                      var t = r.map(e, function (e) {
                        return e.toJSON().where;
                      });
                      return (this._where.$or = t), this;
                    },
                    _andQuery: function (e) {
                      var t = r.map(e, function (e) {
                        return e.toJSON().where;
                      });
                      return (this._where.$and = t), this;
                    },
                    _quote: function (e) {
                      return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E";
                    },
                    contains: function (e, t) {
                      return (
                        this._addCondition(e, "$regex", this._quote(t)), this
                      );
                    },
                    startsWith: function (e, t) {
                      return (
                        this._addCondition(e, "$regex", "^" + this._quote(t)),
                        this
                      );
                    },
                    endsWith: function (e, t) {
                      return (
                        this._addCondition(e, "$regex", this._quote(t) + "$"),
                        this
                      );
                    },
                    ascending: function (e) {
                      return (
                        d(e, "undefined is not a valid key"),
                        (this._order = e),
                        this
                      );
                    },
                    addAscending: function (e) {
                      return (
                        d(e, "undefined is not a valid key"),
                        this._order
                          ? (this._order += "," + e)
                          : (this._order = e),
                        this
                      );
                    },
                    descending: function (e) {
                      return (
                        d(e, "undefined is not a valid key"),
                        (this._order = "-" + e),
                        this
                      );
                    },
                    addDescending: function (e) {
                      return (
                        d(e, "undefined is not a valid key"),
                        this._order
                          ? (this._order += ",-" + e)
                          : (this._order = "-" + e),
                        this
                      );
                    },
                    near: function (t, n) {
                      return (
                        n instanceof e.GeoPoint || (n = new e.GeoPoint(n)),
                        this._addCondition(t, "$nearSphere", n),
                        this
                      );
                    },
                    withinRadians: function (e, t, n) {
                      return (
                        this.near(e, t),
                        this._addCondition(e, "$maxDistance", n),
                        this
                      );
                    },
                    withinMiles: function (e, t, n) {
                      return this.withinRadians(e, t, n / 3958.8);
                    },
                    withinKilometers: function (e, t, n) {
                      return this.withinRadians(e, t, n / 6371);
                    },
                    withinGeoBox: function (t, n, r) {
                      return (
                        n instanceof e.GeoPoint || (n = new e.GeoPoint(n)),
                        r instanceof e.GeoPoint || (r = new e.GeoPoint(r)),
                        this._addCondition(t, "$within", { $box: [n, r] }),
                        this
                      );
                    },
                    include: function (e) {
                      var t = this;
                      return (
                        d(e, "undefined is not a valid key"),
                        r.forEach(arguments, function (e) {
                          t._include = t._include.concat(h(e));
                        }),
                        this
                      );
                    },
                    includeACL: function () {
                      var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      return (this._includeACL = e), this;
                    },
                    select: function (e) {
                      var t = this;
                      return (
                        d(e, "undefined is not a valid key"),
                        r.forEach(arguments, function (e) {
                          t._select = t._select.concat(h(e));
                        }),
                        this
                      );
                    },
                    each: function (t) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      if (this._order || this._skip || this._limit >= 0) {
                        var i = new Error(
                          "Cannot iterate on a query with sort, skip, or limit."
                        );
                        return o.reject(i);
                      }
                      var s = new e.Query(this.objectClass);
                      (s._limit = n.batchSize || 100),
                        (s._where = r.clone(this._where)),
                        (s._include = r.clone(this._include)),
                        s.ascending("objectId");
                      var a = !1;
                      return o._continueWhile(
                        function () {
                          return !a;
                        },
                        function () {
                          return s.find(n).then(function (e) {
                            var n = o.resolve();
                            return (
                              r.each(e, function (e) {
                                n = n.then(function () {
                                  return t(e);
                                });
                              }),
                              n.then(function () {
                                e.length >= s._limit
                                  ? s.greaterThan(
                                      "objectId",
                                      e[e.length - 1].id
                                    )
                                  : (a = !0);
                              })
                            );
                          });
                        }
                      );
                    },
                    subscribe: function (t) {
                      return e.LiveQuery.init(this, t);
                    },
                  }),
                  (e.FriendShipQuery = e.Query._extend({
                    _newObject: function () {
                      return new (e.Object._getSubclass("_User"))();
                    },
                    _processResult: function (e) {
                      if (e && e[this._friendshipTag]) {
                        var t = e[this._friendshipTag];
                        return (
                          "Pointer" === t.__type &&
                            "_User" === t.className &&
                            (delete t.__type, delete t.className),
                          t
                        );
                      }
                      return null;
                    },
                  }));
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(53),
                o = n(1),
                s = n(3),
                a = s.inherits,
                u = n(2),
                c = u.request,
                l = function (e, t) {
                  return c({
                    method: "POST",
                    path: "/LiveQuery/subscribe",
                    data: { query: e, id: t },
                  });
                };
              e.exports = function (e) {
                var t = function () {
                  if (!e._config.realtime)
                    throw new Error(
                      "LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query"
                    );
                };
                e.LiveQuery = a(
                  i,
                  {
                    constructor: function (e, t, n, r) {
                      var o = this;
                      i.apply(this),
                        (this.id = e),
                        (this._client = t),
                        this._client.register(this),
                        (this._queryJSON = n),
                        (this._subscriptionId = r),
                        (this._onMessage = this._dispatch.bind(this)),
                        (this._onReconnect = function () {
                          l(o._queryJSON, o._subscriptionId).catch(function (
                            e
                          ) {});
                        }),
                        t.on("message", this._onMessage),
                        t.on("reconnect", this._onReconnect);
                    },
                    _dispatch: function (t) {
                      var n = this;
                      t.forEach(function (t) {
                        var i = t.op,
                          o = t.object,
                          s = t.query_id,
                          a = t.updatedKeys;
                        if (s === n.id) {
                          var u = e.parseJSON(
                            r.extend(
                              {
                                __type:
                                  "_File" === o.className ? "File" : "Object",
                              },
                              o
                            )
                          );
                          a ? n.emit(i, u, a) : n.emit(i, u);
                        }
                      });
                    },
                    unsubscribe: function () {
                      var e = this._client;
                      return (
                        e.off("message", this._onMessage),
                        e.off("reconnect", this._onReconnect),
                        e.deregister(this),
                        c({
                          method: "POST",
                          path: "/LiveQuery/unsubscribe",
                          data: { id: e.id, query_id: this.id },
                        })
                      );
                    },
                  },
                  {
                    init: function (n) {
                      var r =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        i = r.subscriptionId,
                        s = void 0 === i ? e._getSubscriptionId() : i;
                      if ((t(), !(n instanceof e.Query)))
                        throw new TypeError(
                          "LiveQuery must be inited with a Query"
                        );
                      return o.resolve(s).then(function (t) {
                        return e._config.realtime
                          .createLiveQueryClient(t)
                          .then(function (r) {
                            var i = n.toJSON(),
                              o = i.where,
                              s = i.keys,
                              a = i.returnACL,
                              u = {
                                where: o,
                                keys: s,
                                returnACL: a,
                                className: n.className,
                              },
                              c = l(u, t)
                                .then(function (n) {
                                  var i = n.query_id;
                                  return new e.LiveQuery(i, r, u, t);
                                })
                                .finally(function () {
                                  r.deregister(c);
                                });
                            return r.register(c), c;
                          });
                      });
                    },
                    pause: function () {
                      return t(), e._config.realtime.pause();
                    },
                    resume: function () {
                      return t(), e._config.realtime.resume();
                    },
                  }
                );
              };
            },
            function (e, t, n) {
              "use strict";
              function r() {}
              function i(e, t, n) {
                (this.fn = e), (this.context = t), (this.once = n || !1);
              }
              function o() {
                (this._events = new r()), (this._eventsCount = 0);
              }
              var s = Object.prototype.hasOwnProperty,
                a = "~";
              Object.create &&
                ((r.prototype = Object.create(null)),
                new r().__proto__ || (a = !1)),
                (o.prototype.eventNames = function () {
                  var e,
                    t,
                    n = [];
                  if (0 === this._eventsCount) return n;
                  for (t in (e = this._events))
                    s.call(e, t) && n.push(a ? t.slice(1) : t);
                  return Object.getOwnPropertySymbols
                    ? n.concat(Object.getOwnPropertySymbols(e))
                    : n;
                }),
                (o.prototype.listeners = function (e, t) {
                  var n = a ? a + e : e,
                    r = this._events[n];
                  if (t) return !!r;
                  if (!r) return [];
                  if (r.fn) return [r.fn];
                  for (var i = 0, o = r.length, s = new Array(o); i < o; i++)
                    s[i] = r[i].fn;
                  return s;
                }),
                (o.prototype.emit = function (e, t, n, r, i, o) {
                  var s = a ? a + e : e;
                  if (!this._events[s]) return !1;
                  var u,
                    c,
                    l = this._events[s],
                    h = arguments.length;
                  if (l.fn) {
                    switch (
                      (l.once && this.removeListener(e, l.fn, void 0, !0), h)
                    ) {
                      case 1:
                        return l.fn.call(l.context), !0;
                      case 2:
                        return l.fn.call(l.context, t), !0;
                      case 3:
                        return l.fn.call(l.context, t, n), !0;
                      case 4:
                        return l.fn.call(l.context, t, n, r), !0;
                      case 5:
                        return l.fn.call(l.context, t, n, r, i), !0;
                      case 6:
                        return l.fn.call(l.context, t, n, r, i, o), !0;
                    }
                    for (c = 1, u = new Array(h - 1); c < h; c++)
                      u[c - 1] = arguments[c];
                    l.fn.apply(l.context, u);
                  } else {
                    var f,
                      d = l.length;
                    for (c = 0; c < d; c++)
                      switch (
                        (l[c].once &&
                          this.removeListener(e, l[c].fn, void 0, !0),
                        h)
                      ) {
                        case 1:
                          l[c].fn.call(l[c].context);
                          break;
                        case 2:
                          l[c].fn.call(l[c].context, t);
                          break;
                        case 3:
                          l[c].fn.call(l[c].context, t, n);
                          break;
                        case 4:
                          l[c].fn.call(l[c].context, t, n, r);
                          break;
                        default:
                          if (!u)
                            for (f = 1, u = new Array(h - 1); f < h; f++)
                              u[f - 1] = arguments[f];
                          l[c].fn.apply(l[c].context, u);
                      }
                  }
                  return !0;
                }),
                (o.prototype.on = function (e, t, n) {
                  var r = new i(t, n || this),
                    o = a ? a + e : e;
                  return (
                    this._events[o]
                      ? this._events[o].fn
                        ? (this._events[o] = [this._events[o], r])
                        : this._events[o].push(r)
                      : ((this._events[o] = r), this._eventsCount++),
                    this
                  );
                }),
                (o.prototype.once = function (e, t, n) {
                  var r = new i(t, n || this, !0),
                    o = a ? a + e : e;
                  return (
                    this._events[o]
                      ? this._events[o].fn
                        ? (this._events[o] = [this._events[o], r])
                        : this._events[o].push(r)
                      : ((this._events[o] = r), this._eventsCount++),
                    this
                  );
                }),
                (o.prototype.removeListener = function (e, t, n, i) {
                  var o = a ? a + e : e;
                  if (!this._events[o]) return this;
                  if (!t)
                    return (
                      0 == --this._eventsCount
                        ? (this._events = new r())
                        : delete this._events[o],
                      this
                    );
                  var s = this._events[o];
                  if (s.fn)
                    s.fn !== t ||
                      (i && !s.once) ||
                      (n && s.context !== n) ||
                      (0 == --this._eventsCount
                        ? (this._events = new r())
                        : delete this._events[o]);
                  else {
                    for (var u = 0, c = [], l = s.length; u < l; u++)
                      (s[u].fn !== t ||
                        (i && !s[u].once) ||
                        (n && s[u].context !== n)) &&
                        c.push(s[u]);
                    c.length
                      ? (this._events[o] = 1 === c.length ? c[0] : c)
                      : 0 == --this._eventsCount
                      ? (this._events = new r())
                      : delete this._events[o];
                  }
                  return this;
                }),
                (o.prototype.removeAllListeners = function (e) {
                  var t;
                  return (
                    e
                      ? ((t = a ? a + e : e),
                        this._events[t] &&
                          (0 == --this._eventsCount
                            ? (this._events = new r())
                            : delete this._events[t]))
                      : ((this._events = new r()), (this._eventsCount = 0)),
                    this
                  );
                }),
                (o.prototype.off = o.prototype.removeListener),
                (o.prototype.addListener = o.prototype.on),
                (o.prototype.setMaxListeners = function () {
                  return this;
                }),
                (o.prefixed = a),
                (o.EventEmitter = o),
                (e.exports = o);
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(3),
                o = i.tap;
              e.exports = function (e) {
                (e.Captcha = function (e, t) {
                  (this._options = e),
                    (this._authOptions = t),
                    (this.url = void 0),
                    (this.captchaToken = void 0),
                    (this.validateToken = void 0);
                }),
                  (e.Captcha.prototype.refresh = function () {
                    var t = this;
                    return e.Cloud._requestCaptcha(
                      this._options,
                      this._authOptions
                    ).then(function (e) {
                      var n = e.captchaToken,
                        i = e.url;
                      return r.extend(t, { captchaToken: n, url: i }), i;
                    });
                  }),
                  (e.Captcha.prototype.verify = function (t) {
                    var n = this;
                    return e.Cloud.verifyCaptcha(t, this.captchaToken).then(
                      o(function (e) {
                        return (n.validateToken = e);
                      })
                    );
                  }),
                  (e.Captcha.prototype.bind = function (e, t) {
                    var n = this,
                      r = e.textInput,
                      i = e.image,
                      o = e.verifyButton,
                      s = t.success,
                      a = t.error;
                    if (
                      "string" == typeof r &&
                      !(r = document.getElementById(r))
                    )
                      throw new Error("textInput with id " + r + " not found");
                    if (
                      "string" == typeof i &&
                      !(i = document.getElementById(i))
                    )
                      throw new Error("image with id " + i + " not found");
                    if (
                      "string" == typeof o &&
                      !(o = document.getElementById(o))
                    )
                      throw new Error(
                        "verifyButton with id " + o + " not found"
                      );
                    (this.__refresh = function () {
                      return n
                        .refresh()
                        .then(function (e) {
                          (i.src = e), r && ((r.value = ""), r.focus());
                        })
                        .catch(function (e) {});
                    }),
                      i &&
                        ((this.__image = i),
                        (i.src = this.url),
                        i.addEventListener("click", this.__refresh)),
                      (this.__verify = function () {
                        var e = r.value;
                        n.verify(e)
                          .catch(function (e) {
                            throw (n.__refresh(), e);
                          })
                          .then(s, a)
                          .catch(function (e) {});
                      }),
                      r &&
                        o &&
                        ((this.__verifyButton = o),
                        o.addEventListener("click", this.__verify));
                  }),
                  (e.Captcha.prototype.unbind = function () {
                    this.__image &&
                      this.__image.removeEventListener("click", this.__refresh),
                      this.__verifyButton &&
                        this.__verifyButton.removeEventListener(
                          "click",
                          this.__verify
                        );
                  }),
                  (e.Captcha.request = function (t, n) {
                    var r = new e.Captcha(t, n);
                    return r.refresh().then(function () {
                      return r;
                    });
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(2),
                o = i._request,
                s = i.request,
                a = n(1);
              e.exports = function (e) {
                (e.Cloud = e.Cloud || {}),
                  r.extend(e.Cloud, {
                    run: function (t, n, r) {
                      return s({
                        service: "engine",
                        method: "POST",
                        path: "/functions/" + t,
                        data: e._encode(n, null, !0),
                        authOptions: r,
                      }).then(function (t) {
                        return e._decode(t).result;
                      });
                    },
                    rpc: function (t, n, i) {
                      return r.isArray(n)
                        ? a.reject(
                            new Error(
                              "Can't pass Array as the param of rpc function in JavaScript SDK."
                            )
                          )
                        : s({
                            service: "engine",
                            method: "POST",
                            path: "/call/" + t,
                            data: e._encodeObjectOrArray(n),
                            authOptions: i,
                          }).then(function (t) {
                            return e._decode(t).result;
                          });
                    },
                    getServerDate: function () {
                      return o("date", null, null, "GET").then(function (t) {
                        return e._decode(t);
                      });
                    },
                    requestSmsCode: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      if (
                        (r.isString(e) && (e = { mobilePhoneNumber: e }),
                        !e.mobilePhoneNumber)
                      )
                        throw new Error("Missing mobilePhoneNumber.");
                      return (
                        t.validateToken &&
                          (e = r.extend({}, e, {
                            validate_token: t.validateToken,
                          })),
                        o("requestSmsCode", null, null, "POST", e, t)
                      );
                    },
                    verifySmsCode: function (e, t) {
                      if (!e) throw new Error("Missing sms code.");
                      var n = {};
                      return (
                        r.isString(t) && (n.mobilePhoneNumber = t),
                        o("verifySmsCode", e, null, "POST", n)
                      );
                    },
                    _requestCaptcha: function (e, t) {
                      return o("requestCaptcha", null, null, "GET", e, t).then(
                        function (e) {
                          var t = e.captcha_url;
                          return { captchaToken: e.captcha_token, url: t };
                        }
                      );
                    },
                    requestCaptcha: e.Captcha.request,
                    verifyCaptcha: function (e, t) {
                      return o("verifyCaptcha", null, null, "POST", {
                        captcha_code: e,
                        captcha_token: t,
                      }).then(function (e) {
                        return e.validate_token;
                      });
                    },
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(2).request;
              e.exports = function (e) {
                (e.Installation = e.Object.extend("_Installation")),
                  (e.Push = e.Push || {}),
                  (e.Push.send = function (e, t) {
                    if (
                      (e.where && (e.where = e.where.toJSON().where),
                      e.where && e.cql)
                    )
                      throw new Error("Both where and cql can't be set");
                    if (
                      (e.push_time && (e.push_time = e.push_time.toJSON()),
                      e.expiration_time &&
                        (e.expiration_time = e.expiration_time.toJSON()),
                      e.expiration_time && e.expiration_time_interval)
                    )
                      throw new Error(
                        "Both expiration_time and expiration_time_interval can't be set"
                      );
                    return r({
                      service: "push",
                      method: "POST",
                      path: "/push",
                      data: e,
                      authOptions: t,
                    });
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                i = n(0),
                o = n(1),
                s = n(2)._request,
                a = n(3),
                u = a.getSessionToken;
              e.exports = function (e) {
                var t = function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return u(t)
                      ? e.User._fetchUserBySessionToken(u(t))
                      : e.User.currentAsync();
                  },
                  n = function (n) {
                    return t(n).then(function (t) {
                      return e.Object.createWithoutData(
                        "_User",
                        t.id
                      )._toPointer();
                    });
                  };
                (e.Status = function (e, t) {
                  return (
                    (this.data = {}),
                    (this.inboxType = "default"),
                    (this.query = null),
                    e && "object" === (void 0 === e ? "undefined" : r(e))
                      ? (this.data = e)
                      : (e && (this.data.image = e),
                        t && (this.data.message = t)),
                    this
                  );
                }),
                  i.extend(e.Status.prototype, {
                    get: function (e) {
                      return this.data[e];
                    },
                    set: function (e, t) {
                      return (this.data[e] = t), this;
                    },
                    destroy: function (e) {
                      return this.id
                        ? s("statuses", null, this.id, "DELETE", e)
                        : o.reject(new Error("The status id is not exists."));
                    },
                    toObject: function () {
                      return this.id
                        ? e.Object.createWithoutData("_Status", this.id)
                        : null;
                    },
                    _getDataJSON: function () {
                      var t = i.clone(this.data);
                      return e._encode(t);
                    },
                    send: function () {
                      var t = this,
                        r =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                      if (!u(r) && !e.User.current())
                        throw new Error("Please signin an user.");
                      return this.query
                        ? n(r)
                            .then(function (e) {
                              var n = t.query.toJSON();
                              n.className = t.query.className;
                              var i = {};
                              return (
                                (i.query = n),
                                (t.data = t.data || {}),
                                (t.data.source = t.data.source || e),
                                (i.data = t._getDataJSON()),
                                (i.inboxType = t.inboxType || "default"),
                                s("statuses", null, null, "POST", i, r)
                              );
                            })
                            .then(function (n) {
                              return (
                                (t.id = n.objectId),
                                (t.createdAt = e._parseDate(n.createdAt)),
                                t
                              );
                            })
                        : e.Status.sendStatusToFollowers(this, r);
                    },
                    _finishFetch: function (t) {
                      (this.id = t.objectId),
                        (this.createdAt = e._parseDate(t.createdAt)),
                        (this.updatedAt = e._parseDate(t.updatedAt)),
                        (this.messageId = t.messageId),
                        delete t.messageId,
                        delete t.objectId,
                        delete t.createdAt,
                        delete t.updatedAt,
                        (this.data = e._decode(t));
                    },
                  }),
                  (e.Status.sendStatusToFollowers = function (t) {
                    var r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    if (!u(r) && !e.User.current())
                      throw new Error("Please signin an user.");
                    return n(r).then(function (n) {
                      var i = {};
                      (i.className = "_Follower"),
                        (i.keys = "follower"),
                        (i.where = { user: n });
                      var o = {};
                      return (
                        (o.query = i),
                        (t.data = t.data || {}),
                        (t.data.source = t.data.source || n),
                        (o.data = t._getDataJSON()),
                        (o.inboxType = t.inboxType || "default"),
                        s("statuses", null, null, "POST", o, r).then(function (
                          n
                        ) {
                          return (
                            (t.id = n.objectId),
                            (t.createdAt = e._parseDate(n.createdAt)),
                            t
                          );
                        })
                      );
                    });
                  }),
                  (e.Status.sendPrivateStatus = function (t, r) {
                    var o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    if (!u(o) && !e.User.current())
                      throw new Error("Please signin an user.");
                    if (!r) throw new Error("Invalid target user.");
                    var a = i.isString(r) ? r : r.id;
                    if (!a) throw new Error("Invalid target user.");
                    return n(o).then(function (n) {
                      var r = {};
                      (r.className = "_User"), (r.where = { objectId: a });
                      var i = {};
                      return (
                        (i.query = r),
                        (t.data = t.data || {}),
                        (t.data.source = t.data.source || n),
                        (i.data = t._getDataJSON()),
                        (i.inboxType = "private"),
                        (t.inboxType = "private"),
                        s("statuses", null, null, "POST", i, o).then(function (
                          n
                        ) {
                          return (
                            (t.id = n.objectId),
                            (t.createdAt = e._parseDate(n.createdAt)),
                            t
                          );
                        })
                      );
                    });
                  }),
                  (e.Status.countUnreadStatuses = function (n) {
                    var r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "default",
                      a =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                    if (
                      (i.isString(r) || (a = r),
                      !u(a) && null == n && !e.User.current())
                    )
                      throw new Error(
                        "Please signin an user or pass the owner objectId."
                      );
                    return o.resolve(n || t(a)).then(function (t) {
                      var n = {};
                      return (
                        (n.inboxType = e._encode(r)),
                        (n.owner = e._encode(t)),
                        s("subscribe/statuses/count", null, null, "GET", n, a)
                      );
                    });
                  }),
                  (e.Status.resetUnreadCount = function (n) {
                    var r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "default",
                      a =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                    if (
                      (i.isString(r) || (a = r),
                      !u(a) && null == n && !e.User.current())
                    )
                      throw new Error(
                        "Please signin an user or pass the owner objectId."
                      );
                    return o.resolve(n || t(a)).then(function (t) {
                      var n = {};
                      return (
                        (n.inboxType = e._encode(r)),
                        (n.owner = e._encode(t)),
                        s(
                          "subscribe/statuses/resetUnreadCount",
                          null,
                          null,
                          "POST",
                          n,
                          a
                        )
                      );
                    });
                  }),
                  (e.Status.statusQuery = function (t) {
                    var n = new e.Query("_Status");
                    return t && n.equalTo("source", t), n;
                  }),
                  (e.InboxQuery = e.Query._extend({
                    _objectClass: e.Status,
                    _sinceId: 0,
                    _maxId: 0,
                    _inboxType: "default",
                    _owner: null,
                    _newObject: function () {
                      return new e.Status();
                    },
                    _createRequest: function (t, n) {
                      return e.InboxQuery.__super__._createRequest.call(
                        this,
                        t,
                        n,
                        "/subscribe/statuses"
                      );
                    },
                    sinceId: function (e) {
                      return (this._sinceId = e), this;
                    },
                    maxId: function (e) {
                      return (this._maxId = e), this;
                    },
                    owner: function (e) {
                      return (this._owner = e), this;
                    },
                    inboxType: function (e) {
                      return (this._inboxType = e), this;
                    },
                    toJSON: function () {
                      var t = e.InboxQuery.__super__.toJSON.call(this);
                      return (
                        (t.owner = e._encode(this._owner)),
                        (t.inboxType = e._encode(this._inboxType)),
                        (t.sinceId = e._encode(this._sinceId)),
                        (t.maxId = e._encode(this._maxId)),
                        t
                      );
                    },
                  })),
                  (e.Status.inboxQuery = function (t, n) {
                    var r = new e.InboxQuery(e.Status);
                    return t && (r._owner = t), n && (r._inboxType = n), r;
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(2)._request;
              e.exports = function (e) {
                (e.SearchSortBuilder = function () {
                  this._sortFields = [];
                }),
                  r.extend(e.SearchSortBuilder.prototype, {
                    _addField: function (e, t, n, r) {
                      var i = {};
                      return (
                        (i[e] = {
                          order: t || "asc",
                          mode: n || "avg",
                          missing: "_" + (r || "last"),
                        }),
                        this._sortFields.push(i),
                        this
                      );
                    },
                    ascending: function (e, t, n) {
                      return this._addField(e, "asc", t, n);
                    },
                    descending: function (e, t, n) {
                      return this._addField(e, "desc", t, n);
                    },
                    whereNear: function (e, t, n) {
                      n = n || {};
                      var r = {},
                        i = { lat: t.latitude, lon: t.longitude },
                        o = {
                          order: n.order || "asc",
                          mode: n.mode || "avg",
                          unit: n.unit || "km",
                        };
                      return (
                        (o[e] = i),
                        (r._geo_distance = o),
                        this._sortFields.push(r),
                        this
                      );
                    },
                    build: function () {
                      return JSON.stringify(e._encode(this._sortFields));
                    },
                  }),
                  (e.SearchQuery = e.Query._extend({
                    _sid: null,
                    _hits: 0,
                    _queryString: null,
                    _highlights: null,
                    _sortBuilder: null,
                    _createRequest: function (e, t) {
                      return i(
                        "search/select",
                        null,
                        null,
                        "GET",
                        e || this.toJSON(),
                        t
                      );
                    },
                    sid: function (e) {
                      return (this._sid = e), this;
                    },
                    queryString: function (e) {
                      return (this._queryString = e), this;
                    },
                    highlights: function (e) {
                      var t;
                      return (
                        (t = e && r.isString(e) ? arguments : e),
                        (this._highlights = t),
                        this
                      );
                    },
                    sortBy: function (e) {
                      return (this._sortBuilder = e), this;
                    },
                    hits: function () {
                      return this._hits || (this._hits = 0), this._hits;
                    },
                    _processResult: function (e) {
                      return (
                        delete e.className,
                        delete e._app_url,
                        delete e._deeplink,
                        e
                      );
                    },
                    hasMore: function () {
                      return !this._hitEnd;
                    },
                    reset: function () {
                      (this._hitEnd = !1), (this._sid = null), (this._hits = 0);
                    },
                    find: function () {
                      var e = this;
                      return this._createRequest().then(function (t) {
                        return (
                          t.sid
                            ? ((e._oldSid = e._sid), (e._sid = t.sid))
                            : ((e._sid = null), (e._hitEnd = !0)),
                          (e._hits = t.hits || 0),
                          r.map(t.results, function (n) {
                            n.className && (t.className = n.className);
                            var r = e._newObject(t);
                            return (
                              (r.appURL = n._app_url),
                              r._finishFetch(e._processResult(n), !0),
                              r
                            );
                          })
                        );
                      });
                    },
                    toJSON: function () {
                      var t = e.SearchQuery.__super__.toJSON.call(this);
                      if (
                        (delete t.where,
                        this.className && (t.clazz = this.className),
                        this._sid && (t.sid = this._sid),
                        !this._queryString)
                      )
                        throw new Error("Please set query string.");
                      if (
                        ((t.q = this._queryString),
                        this._highlights &&
                          (t.highlights = this._highlights.join(",")),
                        this._sortBuilder && t.order)
                      )
                        throw new Error(
                          "sort and order can not be set at same time."
                        );
                      return (
                        this._sortBuilder &&
                          (t.sort = this._sortBuilder.build()),
                        t
                      );
                    },
                  }));
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(4),
                o = n(2),
                s = o.request,
                a = n(1);
              e.exports = function (e) {
                (e.Insight = e.Insight || {}),
                  r.extend(e.Insight, {
                    startJob: function (t, n) {
                      if (!t || !t.sql)
                        throw new Error(
                          "Please provide the sql to run the job."
                        );
                      var r = { jobConfig: t, appId: e.applicationId };
                      return s({
                        path: "/bigquery/jobs",
                        method: "POST",
                        data: e._encode(r, null, !0),
                        authOptions: n,
                        signKey: !1,
                      }).then(function (t) {
                        return e._decode(t).id;
                      });
                    },
                    on: function (e, t) {},
                  }),
                  (e.Insight.JobQuery = function (e, t) {
                    if (!e) throw new Error("Please provide the job id.");
                    (this.id = e),
                      (this.className = t),
                      (this._skip = 0),
                      (this._limit = 100);
                  }),
                  r.extend(e.Insight.JobQuery.prototype, {
                    skip: function (e) {
                      return (this._skip = e), this;
                    },
                    limit: function (e) {
                      return (this._limit = e), this;
                    },
                    find: function (e) {
                      var t = { skip: this._skip, limit: this._limit };
                      return s({
                        path: "/bigquery/jobs/" + this.id,
                        method: "GET",
                        query: t,
                        authOptions: e,
                        signKey: !1,
                      }).then(function (e) {
                        return e.error
                          ? a.reject(new i(e.code, e.error))
                          : a.resolve(e);
                      });
                    },
                  });
              };
            },
            function (e, t, n) {
              "use strict";
              var r = n(0),
                i = n(2),
                o = i._request,
                s = n(5),
                a = function (e) {
                  return "string" == typeof e
                    ? e
                    : "function" == typeof e.getPayload
                    ? JSON.stringify(e.getPayload())
                    : JSON.stringify(e);
                };
              e.exports = s.Object.extend("_Conversation", {
                constructor: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  s.Object.prototype.constructor.call(this, null, null),
                    this.set("name", e),
                    void 0 !== t.isSystem && this.set("sys", !!t.isSystem),
                    void 0 !== t.isTransient && this.set("tr", !!t.isTransient);
                },
                getCreator: function () {
                  return this.get("c");
                },
                getLastMessageAt: function () {
                  return this.get("lm");
                },
                getMembers: function () {
                  return this.get("m");
                },
                addMember: function (e) {
                  return this.add("m", e);
                },
                getMutedMembers: function () {
                  return this.get("mu");
                },
                getName: function () {
                  return this.get("name");
                },
                isTransient: function () {
                  return this.get("tr");
                },
                isSystem: function () {
                  return this.get("sys");
                },
                send: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    i = {
                      from_peer: e,
                      conv_id: this.id,
                      transient: !1,
                      message: a(t),
                    };
                  return (
                    void 0 !== n.toClients && (i.to_peers = n.toClients),
                    void 0 !== n.transient && (i.transient = !!n.transient),
                    void 0 !== n.pushData && (i.push_data = n.pushData),
                    o("rtm", "messages", null, "POST", i, r)
                  );
                },
                broadcast: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    s = { from_peer: e, conv_id: this.id, message: a(t) };
                  if (
                    (void 0 !== n.pushData && (s.push = n.pushData),
                    void 0 !== n.validTill)
                  ) {
                    var u = n.validTill;
                    r.isDate(u) && (u = u.getTime()), (n.valid_till = u);
                  }
                  return o("rtm", "broadcast", null, "POST", s, i);
                },
              });
            },
            function (e, t, n) {
              "use strict";
              function r(e) {
                var t = e.name,
                  n = e.value,
                  r = e.version;
                (this.name = t), (this.value = n), (this.version = r);
              }
              var i = n(0),
                o = n(1),
                s = n(2),
                a = s.request,
                u = n(3),
                c = u.ensureArray,
                l = u.parseDate,
                h = n(5);
              (h.LeaderboardVersionChangeInterval = {
                NEVER: "never",
                DAY: "day",
                WEEK: "week",
                MONTH: "month",
              }),
                (h.LeaderboardOrder = {
                  ASCENDING: "ascending",
                  DESCENDING: "descending",
                }),
                (h.LeaderboardUpdateStrategy = {
                  BETTER: "better",
                  LAST: "last",
                  SUM: "sum",
                });
              var f = function (e) {
                var t = h._decode(e);
                return new r({
                  name: t.statisticName,
                  value: t.statisticValue,
                  version: t.version,
                });
              };
              h.Leaderboard = function (e) {
                (this.statisticName = e),
                  (this.order = void 0),
                  (this.updateStrategy = void 0),
                  (this.versionChangeInterval = void 0),
                  (this.version = void 0),
                  (this.nextResetAt = void 0),
                  (this.createdAt = void 0);
              };
              var d = h.Leaderboard;
              (h.Leaderboard.createWithoutData = function (e) {
                return new d(e);
              }),
                (h.Leaderboard.createLeaderboard = function (e, t) {
                  var n = e.statisticName,
                    r = e.order,
                    i = e.versionChangeInterval,
                    o = e.updateStrategy;
                  return a({
                    method: "POST",
                    path: "/leaderboard/leaderboards",
                    data: {
                      statisticName: n,
                      order: r,
                      versionChangeInterval: i,
                      updateStrategy: o,
                    },
                    authOptions: t,
                  }).then(function (e) {
                    return new d(n)._finishFetch(e);
                  });
                }),
                (h.Leaderboard.getLeaderboard = function (e, t) {
                  return d.createWithoutData(e).fetch(t);
                }),
                (h.Leaderboard.getStatistics = function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = t.statisticNames,
                    r = arguments[2];
                  return o.resolve().then(function () {
                    if (!e || !e.id) throw new Error("user must be an AV.User");
                    return a({
                      method: "GET",
                      path: "/leaderboard/users/" + e.id + "/statistics",
                      query: { statistics: n ? c(n).join(",") : void 0 },
                      authOptions: r,
                    }).then(function (e) {
                      return e.results.map(f);
                    });
                  });
                }),
                (h.Leaderboard.updateStatistics = function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return o.resolve().then(function () {
                    if (!e || !e.id) throw new Error("user must be an AV.User");
                    var r = i.map(t, function (e, t) {
                        return { statisticName: t, statisticValue: e };
                      }),
                      o = n.overwrite;
                    return a({
                      method: "POST",
                      path: "/leaderboard/users/" + e.id + "/statistics",
                      query: { overwrite: o ? 1 : void 0 },
                      data: r,
                      authOptions: n,
                    }).then(function (e) {
                      return e.results.map(f);
                    });
                  });
                }),
                (h.Leaderboard.deleteStatistics = function (e, t, n) {
                  return o.resolve().then(function () {
                    if (!e || !e.id) throw new Error("user must be an AV.User");
                    return a({
                      method: "DELETE",
                      path: "/leaderboard/users/" + e.id + "/statistics",
                      query: { statistics: c(t).join(",") },
                      authOptions: n,
                    }).then(function () {});
                  });
                }),
                i.extend(d.prototype, {
                  _finishFetch: function (e) {
                    var t = this;
                    return (
                      i.forEach(e, function (e, n) {
                        "updatedAt" !== n &&
                          "objectId" !== n &&
                          ("expiredAt" === n && (n = "nextResetAt"),
                          "createdAt" === n && (e = l(e)),
                          e && "Date" === e.__type && (e = l(e.iso)),
                          (t[n] = e));
                      }),
                      this
                    );
                  },
                  fetch: function (e) {
                    var t = this;
                    return a({
                      method: "GET",
                      path: "/leaderboard/leaderboards/" + this.statisticName,
                      authOptions: e,
                    }).then(function (e) {
                      return t._finishFetch(e);
                    });
                  },
                  count: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.version,
                      n = arguments[1];
                    return a({
                      method: "GET",
                      path:
                        "/leaderboard/leaderboards/" +
                        this.statisticName +
                        "/ranks",
                      query: { count: 1, limit: 0, version: t },
                      authOptions: n,
                    }).then(function (e) {
                      return e.count;
                    });
                  },
                  _getResults: function (e, t, n) {
                    var r = e.skip,
                      o = e.limit,
                      s = e.selectUserKeys,
                      u = e.includeUserKeys,
                      l = e.includeStatistics,
                      d = e.version;
                    return a({
                      method: "GET",
                      path:
                        "/leaderboard/leaderboards/" +
                        this.statisticName +
                        "/ranks" +
                        (n ? "/" + n : ""),
                      query: {
                        skip: r,
                        limit: o,
                        selectUserKeys: i.union(c(s), c(u)).join(",") || void 0,
                        includeUser: u ? c(u).join(",") : void 0,
                        includeStatistics: l ? c(l).join(",") : void 0,
                        version: d,
                      },
                      authOptions: t,
                    }).then(function (e) {
                      return e.results.map(function (e) {
                        var t = h._decode(e),
                          n = t.user,
                          r = t.statisticValue,
                          i = t.rank,
                          o = t.statistics;
                        return {
                          user: n,
                          value: r,
                          rank: i,
                          includedStatistics: (void 0 === o ? [] : o).map(f),
                        };
                      });
                    });
                  },
                  getResults: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.skip,
                      n = e.limit,
                      r = e.selectUserKeys,
                      i = e.includeUserKeys,
                      o = e.includeStatistics,
                      s = e.version,
                      a = arguments[1];
                    return this._getResults(
                      {
                        skip: t,
                        limit: n,
                        selectUserKeys: r,
                        includeUserKeys: i,
                        includeStatistics: o,
                        version: s,
                      },
                      a
                    );
                  },
                  getResultsAroundUser: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = arguments[2];
                    if (e && "string" != typeof e.id)
                      return this.getResultsAroundUser(void 0, e, t);
                    var r = t.limit,
                      i = t.selectUserKeys,
                      o = t.includeUserKeys,
                      s = t.includeStatistics,
                      a = t.version;
                    return this._getResults(
                      {
                        limit: r,
                        selectUserKeys: i,
                        includeUserKeys: o,
                        includeStatistics: s,
                        version: a,
                      },
                      n,
                      e ? e.id : "self"
                    );
                  },
                  _update: function (e, t) {
                    var n = this;
                    return a({
                      method: "PUT",
                      path: "/leaderboard/leaderboards/" + this.statisticName,
                      data: e,
                      authOptions: t,
                    }).then(function (e) {
                      return n._finishFetch(e);
                    });
                  },
                  updateVersionChangeInterval: function (e, t) {
                    return this._update({ versionChangeInterval: e }, t);
                  },
                  updateUpdateStrategy: function (e, t) {
                    return this._update({ updateStrategy: e }, t);
                  },
                  reset: function (e) {
                    var t = this;
                    return a({
                      method: "PUT",
                      path:
                        "/leaderboard/leaderboards/" +
                        this.statisticName +
                        "/incrementVersion",
                      authOptions: e,
                    }).then(function (e) {
                      return t._finishFetch(e);
                    });
                  },
                  destroy: function (e) {
                    return h
                      .request({
                        method: "DELETE",
                        path: "/leaderboard/leaderboards/" + this.statisticName,
                        authOptions: e,
                      })
                      .then(function () {});
                  },
                  getArchives: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n = t.skip,
                      r = t.limit,
                      i = arguments[1];
                    return a({
                      method: "GET",
                      path:
                        "/leaderboard/leaderboards/" +
                        this.statisticName +
                        "/archives",
                      query: { skip: n, limit: r },
                      authOptions: i,
                    }).then(function (t) {
                      return t.results.map(function (t) {
                        var n = t.version,
                          r = t.status,
                          i = t.url,
                          o = t.activatedAt,
                          s = t.deactivatedAt;
                        return {
                          statisticName: e.statisticName,
                          version: n,
                          status: r,
                          url: i,
                          activatedAt: l(o.iso),
                          deactivatedAt: l(s.iso),
                        };
                      });
                    });
                  },
                });
            },
          ]);
        });
      }.call(t, n(11)));
    },
    function (e, t, n) {
      (function (t) {
        !(function (t) {
          "use strict";
          function n(e) {
            (this.tokens = []),
              (this.tokens.links = {}),
              (this.options = e || p.defaults),
              (this.rules = v.normal),
              this.options.pedantic
                ? (this.rules = v.pedantic)
                : this.options.gfm &&
                  (this.options.tables
                    ? (this.rules = v.tables)
                    : (this.rules = v.gfm));
          }
          function r(e, t) {
            if (
              ((this.options = t || p.defaults),
              (this.links = e),
              (this.rules = g.normal),
              (this.renderer = this.options.renderer || new i()),
              (this.renderer.options = this.options),
              !this.links)
            )
              throw new Error("Tokens array requires a `links` property.");
            this.options.pedantic
              ? (this.rules = g.pedantic)
              : this.options.gfm &&
                (this.options.breaks
                  ? (this.rules = g.breaks)
                  : (this.rules = g.gfm));
          }
          function i(e) {
            this.options = e || p.defaults;
          }
          function o() {}
          function s(e) {
            (this.tokens = []),
              (this.token = null),
              (this.options = e || p.defaults),
              (this.options.renderer = this.options.renderer || new i()),
              (this.renderer = this.options.renderer),
              (this.renderer.options = this.options);
          }
          function a(e, t) {
            return e
              .replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;");
          }
          function u(e) {
            return e.replace(
              /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
              function (e, t) {
                return (
                  (t = t.toLowerCase()),
                  "colon" === t
                    ? ":"
                    : "#" === t.charAt(0)
                    ? "x" === t.charAt(1)
                      ? String.fromCharCode(parseInt(t.substring(2), 16))
                      : String.fromCharCode(+t.substring(1))
                    : ""
                );
              }
            );
          }
          function c(e, t) {
            return (
              (e = e.source || e),
              (t = t || ""),
              {
                replace: function (t, n) {
                  return (
                    (n = n.source || n),
                    (n = n.replace(/(^|[^\[])\^/g, "$1")),
                    (e = e.replace(t, n)),
                    this
                  );
                },
                getRegex: function () {
                  return new RegExp(e, t);
                },
              }
            );
          }
          function l(e, t) {
            return (
              _[" " + e] ||
                (/^[^:]+:\/*[^/]*$/.test(e)
                  ? (_[" " + e] = e + "/")
                  : (_[" " + e] = e.replace(/[^/]*$/, ""))),
              (e = _[" " + e]),
              "//" === t.slice(0, 2)
                ? e.replace(/:[\s\S]*/, ":") + t
                : "/" === t.charAt(0)
                ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t
                : e + t
            );
          }
          function h() {}
          function f(e) {
            for (var t, n, r = 1; r < arguments.length; r++) {
              t = arguments[r];
              for (n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }
          function d(e, t) {
            var n = e.replace(/([^\\])\|/g, "$1 |").split(/ +\| */),
              r = 0;
            if (n.length > t) n.splice(t);
            else for (; n.length < t; ) n.push("");
            for (; r < n.length; r++) n[r] = n[r].replace(/\\\|/g, "|");
            return n;
          }
          function p(e, t, r) {
            if (void 0 === e || null === e)
              throw new Error("marked(): input parameter is undefined or null");
            if ("string" != typeof e)
              throw new Error(
                "marked(): input parameter is of type " +
                  Object.prototype.toString.call(e) +
                  ", string expected"
              );
            if (r || "function" == typeof t) {
              r || ((r = t), (t = null)), (t = f({}, p.defaults, t || {}));
              var i,
                o,
                u = t.highlight,
                c = 0;
              try {
                i = n.lex(e, t);
              } catch (e) {
                return r(e);
              }
              o = i.length;
              var l = function (e) {
                if (e) return (t.highlight = u), r(e);
                var n;
                try {
                  n = s.parse(i, t);
                } catch (t) {
                  e = t;
                }
                return (t.highlight = u), e ? r(e) : r(null, n);
              };
              if (!u || u.length < 3) return l();
              if ((delete t.highlight, !o)) return l();
              for (; c < i.length; c++)
                !(function (e) {
                  "code" !== e.type
                    ? --o || l()
                    : u(e.text, e.lang, function (t, n) {
                        return t
                          ? l(t)
                          : null == n || n === e.text
                          ? --o || l()
                          : ((e.text = n), (e.escaped = !0), void (--o || l()));
                      });
                })(i[c]);
            } else
              try {
                return t && (t = f({}, p.defaults, t)), s.parse(n.lex(e, t), t);
              } catch (e) {
                if (
                  ((e.message +=
                    "\nPlease report this to https://github.com/markedjs/marked."),
                  (t || p.defaults).silent)
                )
                  return (
                    "<p>An error occurred:</p><pre>" +
                    a(e.message + "", !0) +
                    "</pre>"
                  );
                throw e;
              }
          }
          var v = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            fences: h,
            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
            nptable: h,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html:
              "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
            table: h,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
            text: /^[^\n]+/,
          };
          (v._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
            (v._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
            (v.def = c(v.def)
              .replace("label", v._label)
              .replace("title", v._title)
              .getRegex()),
            (v.bullet = /(?:[*+-]|\d+\.)/),
            (v.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/),
            (v.item = c(v.item, "gm").replace(/bull/g, v.bullet).getRegex()),
            (v.list = c(v.list)
              .replace(/bull/g, v.bullet)
              .replace(
                "hr",
                "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
              )
              .replace("def", "\\n+(?=" + v.def.source + ")")
              .getRegex()),
            (v._tag =
              "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
            (v._comment = /<!--(?!-?>)[\s\S]*?-->/),
            (v.html = c(v.html, "i")
              .replace("comment", v._comment)
              .replace("tag", v._tag)
              .replace(
                "attribute",
                / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
              )
              .getRegex()),
            (v.paragraph = c(v.paragraph)
              .replace("hr", v.hr)
              .replace("heading", v.heading)
              .replace("lheading", v.lheading)
              .replace("tag", v._tag)
              .getRegex()),
            (v.blockquote = c(v.blockquote)
              .replace("paragraph", v.paragraph)
              .getRegex()),
            (v.normal = f({}, v)),
            (v.gfm = f({}, v.normal, {
              fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
              paragraph: /^/,
              heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
            })),
            (v.gfm.paragraph = c(v.paragraph)
              .replace(
                "(?!",
                "(?!" +
                  v.gfm.fences.source.replace("\\1", "\\2") +
                  "|" +
                  v.list.source.replace("\\1", "\\3") +
                  "|"
              )
              .getRegex()),
            (v.tables = f({}, v.gfm, {
              nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
              table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/,
            })),
            (v.pedantic = f({}, v.normal, {
              html: c(
                "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
              )
                .replace("comment", v._comment)
                .replace(
                  /tag/g,
                  "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
                )
                .getRegex(),
              def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            })),
            (n.rules = v),
            (n.lex = function (e, t) {
              return new n(t).lex(e);
            }),
            (n.prototype.lex = function (e) {
              return (
                (e = e
                  .replace(/\r\n|\r/g, "\n")
                  .replace(/\t/g, "    ")
                  .replace(/\u00a0/g, " ")
                  .replace(/\u2424/g, "\n")),
                this.token(e, !0)
              );
            }),
            (n.prototype.token = function (e, t) {
              e = e.replace(/^ +$/gm, "");
              for (var n, r, i, o, s, a, u, c, l, h, f, p, g; e; )
                if (
                  ((i = this.rules.newline.exec(e)) &&
                    ((e = e.substring(i[0].length)),
                    i[0].length > 1 && this.tokens.push({ type: "space" })),
                  (i = this.rules.code.exec(e)))
                )
                  (e = e.substring(i[0].length)),
                    (i = i[0].replace(/^ {4}/gm, "")),
                    this.tokens.push({
                      type: "code",
                      text: this.options.pedantic ? i : i.replace(/\n+$/, ""),
                    });
                else if ((i = this.rules.fences.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "code",
                      lang: i[2],
                      text: i[3] || "",
                    });
                else if ((i = this.rules.heading.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "heading",
                      depth: i[1].length,
                      text: i[2],
                    });
                else if (
                  t &&
                  (i = this.rules.nptable.exec(e)) &&
                  ((a = {
                    type: "table",
                    header: d(i[1].replace(/^ *| *\| *$/g, "")),
                    align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : [],
                  }),
                  a.header.length === a.align.length)
                ) {
                  for (
                    e = e.substring(i[0].length), c = 0;
                    c < a.align.length;
                    c++
                  )
                    /^ *-+: *$/.test(a.align[c])
                      ? (a.align[c] = "right")
                      : /^ *:-+: *$/.test(a.align[c])
                      ? (a.align[c] = "center")
                      : /^ *:-+ *$/.test(a.align[c])
                      ? (a.align[c] = "left")
                      : (a.align[c] = null);
                  for (c = 0; c < a.cells.length; c++)
                    a.cells[c] = d(a.cells[c], a.header.length);
                  this.tokens.push(a);
                } else if ((i = this.rules.hr.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "hr" });
                else if ((i = this.rules.blockquote.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "blockquote_start" }),
                    (i = i[0].replace(/^ *> ?/gm, "")),
                    this.token(i, t),
                    this.tokens.push({ type: "blockquote_end" });
                else if ((i = this.rules.list.exec(e))) {
                  for (
                    e = e.substring(i[0].length),
                      o = i[2],
                      f = o.length > 1,
                      this.tokens.push({
                        type: "list_start",
                        ordered: f,
                        start: f ? +o : "",
                      }),
                      i = i[0].match(this.rules.item),
                      n = !1,
                      h = i.length,
                      c = 0;
                    c < h;
                    c++
                  )
                    (a = i[c]),
                      (u = a.length),
                      (a = a.replace(/^ *([*+-]|\d+\.) +/, "")),
                      ~a.indexOf("\n ") &&
                        ((u -= a.length),
                        (a = this.options.pedantic
                          ? a.replace(/^ {1,4}/gm, "")
                          : a.replace(
                              new RegExp("^ {1," + u + "}", "gm"),
                              ""
                            ))),
                      this.options.smartLists &&
                        c !== h - 1 &&
                        ((s = v.bullet.exec(i[c + 1])[0]),
                        o === s ||
                          (o.length > 1 && s.length > 1) ||
                          ((e = i.slice(c + 1).join("\n") + e), (c = h - 1))),
                      (r = n || /\n\n(?!\s*$)/.test(a)),
                      c !== h - 1 &&
                        ((n = "\n" === a.charAt(a.length - 1)), r || (r = n)),
                      (p = /^\[[ xX]\] /.test(a)),
                      (g = void 0),
                      p &&
                        ((g = " " !== a[1]),
                        (a = a.replace(/^\[[ xX]\] +/, ""))),
                      this.tokens.push({
                        type: r ? "loose_item_start" : "list_item_start",
                        task: p,
                        checked: g,
                      }),
                      this.token(a, !1),
                      this.tokens.push({ type: "list_item_end" });
                  this.tokens.push({ type: "list_end" });
                } else if ((i = this.rules.html.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: this.options.sanitize ? "paragraph" : "html",
                      pre:
                        !this.options.sanitizer &&
                        ("pre" === i[1] ||
                          "script" === i[1] ||
                          "style" === i[1]),
                      text: i[0],
                    });
                else if (t && (i = this.rules.def.exec(e)))
                  (e = e.substring(i[0].length)),
                    i[3] && (i[3] = i[3].substring(1, i[3].length - 1)),
                    (l = i[1].toLowerCase().replace(/\s+/g, " ")),
                    this.tokens.links[l] ||
                      (this.tokens.links[l] = { href: i[2], title: i[3] });
                else if (
                  t &&
                  (i = this.rules.table.exec(e)) &&
                  ((a = {
                    type: "table",
                    header: d(i[1].replace(/^ *| *\| *$/g, "")),
                    align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: i[3]
                      ? i[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                      : [],
                  }),
                  a.header.length === a.align.length)
                ) {
                  for (
                    e = e.substring(i[0].length), c = 0;
                    c < a.align.length;
                    c++
                  )
                    /^ *-+: *$/.test(a.align[c])
                      ? (a.align[c] = "right")
                      : /^ *:-+: *$/.test(a.align[c])
                      ? (a.align[c] = "center")
                      : /^ *:-+ *$/.test(a.align[c])
                      ? (a.align[c] = "left")
                      : (a.align[c] = null);
                  for (c = 0; c < a.cells.length; c++)
                    a.cells[c] = d(
                      a.cells[c].replace(/^ *\| *| *\| *$/g, ""),
                      a.header.length
                    );
                  this.tokens.push(a);
                } else if ((i = this.rules.lheading.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "heading",
                      depth: "=" === i[2] ? 1 : 2,
                      text: i[1],
                    });
                else if (t && (i = this.rules.paragraph.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "paragraph",
                      text:
                        "\n" === i[1].charAt(i[1].length - 1)
                          ? i[1].slice(0, -1)
                          : i[1],
                    });
                else if ((i = this.rules.text.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "text", text: i[0] });
                else if (e)
                  throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
              return this.tokens;
            });
          var g = {
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: h,
            tag:
              "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
            link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
            nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
            strong: /^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,
            em: /^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,
            code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            del: h,
            text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/,
          };
          (g._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
            (g._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
            (g._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
            (g.autolink = c(g.autolink)
              .replace("scheme", g._scheme)
              .replace("email", g._email)
              .getRegex()),
            (g._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
            (g.tag = c(g.tag)
              .replace("comment", v._comment)
              .replace("attribute", g._attribute)
              .getRegex()),
            (g._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/),
            (g._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/),
            (g._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
            (g.link = c(g.link)
              .replace("label", g._label)
              .replace("href", g._href)
              .replace("title", g._title)
              .getRegex()),
            (g.reflink = c(g.reflink).replace("label", g._label).getRegex()),
            (g.normal = f({}, g)),
            (g.pedantic = f({}, g.normal, {
              strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
              em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
              link: c(/^!?\[(label)\]\((.*?)\)/)
                .replace("label", g._label)
                .getRegex(),
              reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                .replace("label", g._label)
                .getRegex(),
            })),
            (g.gfm = f({}, g.normal, {
              escape: c(g.escape).replace("])", "~|])").getRegex(),
              url: c(
                /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/
              )
                .replace("email", g._email)
                .getRegex(),
              _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
              del: /^~~(?=\S)([\s\S]*?\S)~~/,
              text: c(g.text)
                .replace("]|", "~]|")
                .replace(
                  "|",
                  "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|"
                )
                .getRegex(),
            })),
            (g.breaks = f({}, g.gfm, {
              br: c(g.br).replace("{2,}", "*").getRegex(),
              text: c(g.gfm.text).replace("{2,}", "*").getRegex(),
            })),
            (r.rules = g),
            (r.output = function (e, t, n) {
              return new r(t, n).output(e);
            }),
            (r.prototype.output = function (e) {
              for (var t, n, i, o, s, u = ""; e; )
                if ((s = this.rules.escape.exec(e)))
                  (e = e.substring(s[0].length)), (u += s[1]);
                else if ((s = this.rules.autolink.exec(e)))
                  (e = e.substring(s[0].length)),
                    "@" === s[2]
                      ? ((n = a(this.mangle(s[1]))), (i = "mailto:" + n))
                      : ((n = a(s[1])), (i = n)),
                    (u += this.renderer.link(i, null, n));
                else if (this.inLink || !(s = this.rules.url.exec(e))) {
                  if ((s = this.rules.tag.exec(e)))
                    !this.inLink && /^<a /i.test(s[0])
                      ? (this.inLink = !0)
                      : this.inLink &&
                        /^<\/a>/i.test(s[0]) &&
                        (this.inLink = !1),
                      (e = e.substring(s[0].length)),
                      (u += this.options.sanitize
                        ? this.options.sanitizer
                          ? this.options.sanitizer(s[0])
                          : a(s[0])
                        : s[0]);
                  else if ((s = this.rules.link.exec(e)))
                    (e = e.substring(s[0].length)),
                      (this.inLink = !0),
                      (i = s[2]),
                      this.options.pedantic
                        ? ((t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i)),
                          t ? ((i = t[1]), (o = t[3])) : (o = ""))
                        : (o = s[3] ? s[3].slice(1, -1) : ""),
                      (i = i.trim().replace(/^<([\s\S]*)>$/, "$1")),
                      (u += this.outputLink(s, {
                        href: r.escapes(i),
                        title: r.escapes(o),
                      })),
                      (this.inLink = !1);
                  else if (
                    (s = this.rules.reflink.exec(e)) ||
                    (s = this.rules.nolink.exec(e))
                  ) {
                    if (
                      ((e = e.substring(s[0].length)),
                      (t = (s[2] || s[1]).replace(/\s+/g, " ")),
                      !(t = this.links[t.toLowerCase()]) || !t.href)
                    ) {
                      (u += s[0].charAt(0)), (e = s[0].substring(1) + e);
                      continue;
                    }
                    (this.inLink = !0),
                      (u += this.outputLink(s, t)),
                      (this.inLink = !1);
                  } else if ((s = this.rules.strong.exec(e)))
                    (e = e.substring(s[0].length)),
                      (u += this.renderer.strong(
                        this.output(s[4] || s[3] || s[2] || s[1])
                      ));
                  else if ((s = this.rules.em.exec(e)))
                    (e = e.substring(s[0].length)),
                      (u += this.renderer.em(
                        this.output(
                          s[6] || s[5] || s[4] || s[3] || s[2] || s[1]
                        )
                      ));
                  else if ((s = this.rules.code.exec(e)))
                    (e = e.substring(s[0].length)),
                      (u += this.renderer.codespan(a(s[2].trim(), !0)));
                  else if ((s = this.rules.br.exec(e)))
                    (e = e.substring(s[0].length)), (u += this.renderer.br());
                  else if ((s = this.rules.del.exec(e)))
                    (e = e.substring(s[0].length)),
                      (u += this.renderer.del(this.output(s[1])));
                  else if ((s = this.rules.text.exec(e)))
                    (e = e.substring(s[0].length)),
                      (u += this.renderer.text(a(this.smartypants(s[0]))));
                  else if (e)
                    throw new Error(
                      "Infinite loop on byte: " + e.charCodeAt(0)
                    );
                } else
                  (s[0] = this.rules._backpedal.exec(s[0])[0]),
                    (e = e.substring(s[0].length)),
                    "@" === s[2]
                      ? ((n = a(s[0])), (i = "mailto:" + n))
                      : ((n = a(s[0])),
                        (i = "www." === s[1] ? "http://" + n : n)),
                    (u += this.renderer.link(i, null, n));
              return u;
            }),
            (r.escapes = function (e) {
              return e ? e.replace(r.rules._escapes, "$1") : e;
            }),
            (r.prototype.outputLink = function (e, t) {
              var n = t.href,
                r = t.title ? a(t.title) : null;
              return "!" !== e[0].charAt(0)
                ? this.renderer.link(n, r, this.output(e[1]))
                : this.renderer.image(n, r, a(e[1]));
            }),
            (r.prototype.smartypants = function (e) {
              return this.options.smartypants
                ? e
                    .replace(/---/g, "—")
                    .replace(/--/g, "–")
                    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
                    .replace(/'/g, "’")
                    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
                    .replace(/"/g, "”")
                    .replace(/\.{3}/g, "…")
                : e;
            }),
            (r.prototype.mangle = function (e) {
              if (!this.options.mangle) return e;
              for (var t, n = "", r = e.length, i = 0; i < r; i++)
                (t = e.charCodeAt(i)),
                  Math.random() > 0.5 && (t = "x" + t.toString(16)),
                  (n += "&#" + t + ";");
              return n;
            }),
            (i.prototype.code = function (e, t, n) {
              if (this.options.highlight) {
                var r = this.options.highlight(e, t);
                null != r && r !== e && ((n = !0), (e = r));
              }
              return t
                ? '<pre><code class="' +
                    this.options.langPrefix +
                    a(t, !0) +
                    '">' +
                    (n ? e : a(e, !0)) +
                    "</code></pre>\n"
                : "<pre><code>" + (n ? e : a(e, !0)) + "</code></pre>";
            }),
            (i.prototype.blockquote = function (e) {
              return "<blockquote>\n" + e + "</blockquote>\n";
            }),
            (i.prototype.html = function (e) {
              return e;
            }),
            (i.prototype.heading = function (e, t, n) {
              return this.options.headerIds
                ? "<h" +
                    t +
                    ' id="' +
                    this.options.headerPrefix +
                    n.toLowerCase().replace(/[^\w]+/g, "-") +
                    '">' +
                    e +
                    "</h" +
                    t +
                    ">\n"
                : "<h" + t + ">" + e + "</h" + t + ">\n";
            }),
            (i.prototype.hr = function () {
              return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
            }),
            (i.prototype.list = function (e, t, n) {
              var r = t ? "ol" : "ul";
              return (
                "<" +
                r +
                (t && 1 !== n ? ' start="' + n + '"' : "") +
                ">\n" +
                e +
                "</" +
                r +
                ">\n"
              );
            }),
            (i.prototype.listitem = function (e) {
              return "<li>" + e + "</li>\n";
            }),
            (i.prototype.checkbox = function (e) {
              return (
                "<input " +
                (e ? 'checked="" ' : "") +
                'disabled="" type="checkbox"' +
                (this.options.xhtml ? " /" : "") +
                "> "
              );
            }),
            (i.prototype.paragraph = function (e) {
              return "<p>" + e + "</p>\n";
            }),
            (i.prototype.table = function (e, t) {
              return (
                t && (t = "<tbody>" + t + "</tbody>"),
                "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
              );
            }),
            (i.prototype.tablerow = function (e) {
              return "<tr>\n" + e + "</tr>\n";
            }),
            (i.prototype.tablecell = function (e, t) {
              var n = t.header ? "th" : "td";
              return (
                (t.align
                  ? "<" + n + ' align="' + t.align + '">'
                  : "<" + n + ">") +
                e +
                "</" +
                n +
                ">\n"
              );
            }),
            (i.prototype.strong = function (e) {
              return "<strong>" + e + "</strong>";
            }),
            (i.prototype.em = function (e) {
              return "<em>" + e + "</em>";
            }),
            (i.prototype.codespan = function (e) {
              return "<code>" + e + "</code>";
            }),
            (i.prototype.br = function () {
              return this.options.xhtml ? "<br/>" : "<br>";
            }),
            (i.prototype.del = function (e) {
              return "<del>" + e + "</del>";
            }),
            (i.prototype.link = function (e, t, n) {
              if (this.options.sanitize) {
                try {
                  var r = decodeURIComponent(u(e))
                    .replace(/[^\w:]/g, "")
                    .toLowerCase();
                } catch (e) {
                  return n;
                }
                if (
                  0 === r.indexOf("javascript:") ||
                  0 === r.indexOf("vbscript:") ||
                  0 === r.indexOf("data:")
                )
                  return n;
              }
              this.options.baseUrl &&
                !m.test(e) &&
                (e = l(this.options.baseUrl, e));
              try {
                e = encodeURI(e).replace(/%25/g, "%");
              } catch (e) {
                return n;
              }
              var i = '<a href="' + a(e) + '"';
              return t && (i += ' title="' + t + '"'), (i += ">" + n + "</a>");
            }),
            (i.prototype.image = function (e, t, n) {
              this.options.baseUrl &&
                !m.test(e) &&
                (e = l(this.options.baseUrl, e));
              var r = '<img src="' + e + '" alt="' + n + '"';
              return (
                t && (r += ' title="' + t + '"'),
                (r += this.options.xhtml ? "/>" : ">")
              );
            }),
            (i.prototype.text = function (e) {
              return e;
            }),
            (o.prototype.strong = o.prototype.em = o.prototype.codespan = o.prototype.del = o.prototype.text = function (
              e
            ) {
              return e;
            }),
            (o.prototype.link = o.prototype.image = function (e, t, n) {
              return "" + n;
            }),
            (o.prototype.br = function () {
              return "";
            }),
            (s.parse = function (e, t) {
              return new s(t).parse(e);
            }),
            (s.prototype.parse = function (e) {
              (this.inline = new r(e.links, this.options)),
                (this.inlineText = new r(
                  e.links,
                  f({}, this.options, { renderer: new o() })
                )),
                (this.tokens = e.reverse());
              for (var t = ""; this.next(); ) t += this.tok();
              return t;
            }),
            (s.prototype.next = function () {
              return (this.token = this.tokens.pop());
            }),
            (s.prototype.peek = function () {
              return this.tokens[this.tokens.length - 1] || 0;
            }),
            (s.prototype.parseText = function () {
              for (var e = this.token.text; "text" === this.peek().type; )
                e += "\n" + this.next().text;
              return this.inline.output(e);
            }),
            (s.prototype.tok = function () {
              switch (this.token.type) {
                case "space":
                  return "";
                case "hr":
                  return this.renderer.hr();
                case "heading":
                  return this.renderer.heading(
                    this.inline.output(this.token.text),
                    this.token.depth,
                    u(this.inlineText.output(this.token.text))
                  );
                case "code":
                  return this.renderer.code(
                    this.token.text,
                    this.token.lang,
                    this.token.escaped
                  );
                case "table":
                  var e,
                    t,
                    n,
                    r,
                    i = "",
                    o = "";
                  for (n = "", e = 0; e < this.token.header.length; e++)
                    n += this.renderer.tablecell(
                      this.inline.output(this.token.header[e]),
                      { header: !0, align: this.token.align[e] }
                    );
                  for (
                    i += this.renderer.tablerow(n), e = 0;
                    e < this.token.cells.length;
                    e++
                  ) {
                    for (
                      t = this.token.cells[e], n = "", r = 0;
                      r < t.length;
                      r++
                    )
                      n += this.renderer.tablecell(this.inline.output(t[r]), {
                        header: !1,
                        align: this.token.align[r],
                      });
                    o += this.renderer.tablerow(n);
                  }
                  return this.renderer.table(i, o);
                case "blockquote_start":
                  for (o = ""; "blockquote_end" !== this.next().type; )
                    o += this.tok();
                  return this.renderer.blockquote(o);
                case "list_start":
                  o = "";
                  for (
                    var s = this.token.ordered, a = this.token.start;
                    "list_end" !== this.next().type;

                  )
                    o += this.tok();
                  return this.renderer.list(o, s, a);
                case "list_item_start":
                  for (
                    o = "",
                      this.token.task &&
                        (o += this.renderer.checkbox(this.token.checked));
                    "list_item_end" !== this.next().type;

                  )
                    o +=
                      "text" === this.token.type
                        ? this.parseText()
                        : this.tok();
                  return this.renderer.listitem(o);
                case "loose_item_start":
                  for (o = ""; "list_item_end" !== this.next().type; )
                    o += this.tok();
                  return this.renderer.listitem(o);
                case "html":
                  return this.renderer.html(this.token.text);
                case "paragraph":
                  return this.renderer.paragraph(
                    this.inline.output(this.token.text)
                  );
                case "text":
                  return this.renderer.paragraph(this.parseText());
              }
            });
          var _ = {},
            m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
          (h.exec = h),
            (p.options = p.setOptions = function (e) {
              return f(p.defaults, e), p;
            }),
            (p.getDefaults = function () {
              return {
                baseUrl: null,
                breaks: !1,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: new i(),
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartLists: !1,
                smartypants: !1,
                tables: !0,
                xhtml: !1,
              };
            }),
            (p.defaults = p.getDefaults()),
            (p.Parser = s),
            (p.parser = s.parse),
            (p.Renderer = i),
            (p.TextRenderer = o),
            (p.Lexer = n),
            (p.lexer = n.lex),
            (p.InlineLexer = r),
            (p.inlineLexer = r.output),
            (p.parse = p),
            (e.exports = p);
        })(this || ("undefined" != typeof window && window));
      }.call(t, n(12)));
    },
    function (e, t) {
      e.exports = {
        name: "valine",
        version: "1.4.1",
        description: "A simple comment system based on Leancloud.",
        main: "/dist/Valine.min.js",
        author: "xCss <xioveliu@gmail.com> (https://github.com/xCss)",
        scripts: {
          test: "webpack",
          build: "webpack",
          dev: "webpack-dev-server --env.dev",
          clean: "rm -rf dist/* ",
        },
        keywords: ["simple", "easy-to-use", "fast-and-safe", "comment-system"],
        license: "GPL-2.0",
        repository: {
          type: "git",
          url: "git+https://github.com/xcss/Valine.git",
        },
        homepage: "https://github.com/xcss/Valine#readme",
        devDependencies: {
          autoprefixer: "^7.1.1",
          autosize: "^4.0.2",
          "babel-core": "^6.25.0",
          "babel-loader": "^7.1.1",
          "babel-polyfill": "^6.23.0",
          "babel-preset-es2015": "^6.24.1",
          "babel-preset-stage-0": "^6.24.1",
          "blueimp-md5": "^2.8.0",
          "css-loader": "^0.28.4",
          "exports-loader": "^0.6.3",
          "file-loader": "^0.11.2",
          hanabi: "^0.4.0",
          marked: "^0.4.0",
          "node-polyglot": "^2.4.0",
          "node-sass": "^4.9.2",
          "object-assign": "^4.1.1",
          "postcss-loader": "^2.0.5",
          "sass-loader": "^6.0.3",
          "style-loader": "^0.18.2",
          "url-loader": "^0.6.2",
          webpack: "^2.6.1",
          "webpack-cli": "^3.3.5",
          "webpack-dev-server": "^2.9.1",
        },
        dependencies: {
          balajs: "^1.0.7",
          balalaika: "^1.0.1",
          "element-closest": "^3.0.2",
          storejs: "^1.0.25",
          xss: "^1.0.6",
          "leancloud-storage": "^3.0.4",
        },
      };
    },
    function (e, t) {
      function n() {
        throw new Error("setTimeout has not been defined");
      }
      function r() {
        throw new Error("clearTimeout has not been defined");
      }
      function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout)
          return (l = setTimeout), setTimeout(e, 0);
        try {
          return l(e, 0);
        } catch (t) {
          try {
            return l.call(null, e, 0);
          } catch (t) {
            return l.call(this, e, 0);
          }
        }
      }
      function o(e) {
        if (h === clearTimeout) return clearTimeout(e);
        if ((h === r || !h) && clearTimeout)
          return (h = clearTimeout), clearTimeout(e);
        try {
          return h(e);
        } catch (t) {
          try {
            return h.call(null, e);
          } catch (t) {
            return h.call(this, e);
          }
        }
      }
      function s() {
        v &&
          d &&
          ((v = !1), d.length ? (p = d.concat(p)) : (g = -1), p.length && a());
      }
      function a() {
        if (!v) {
          var e = i(s);
          v = !0;
          for (var t = p.length; t; ) {
            for (d = p, p = []; ++g < t; ) d && d[g].run();
            (g = -1), (t = p.length);
          }
          (d = null), (v = !1), o(e);
        }
      }
      function u(e, t) {
        (this.fun = e), (this.array = t);
      }
      function c() {}
      var l,
        h,
        f = (e.exports = {});
      !(function () {
        try {
          l = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e) {
          l = n;
        }
        try {
          h = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
          h = r;
        }
      })();
      var d,
        p = [],
        v = !1,
        g = -1;
      (f.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new u(e, t)), 1 !== p.length || v || i(a);
      }),
        (u.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (f.title = "browser"),
        (f.browser = !0),
        (f.env = {}),
        (f.argv = []),
        (f.version = ""),
        (f.versions = {}),
        (f.on = c),
        (f.addListener = c),
        (f.once = c),
        (f.off = c),
        (f.removeListener = c),
        (f.removeAllListeners = c),
        (f.emit = c),
        (f.prependListener = c),
        (f.prependOnceListener = c),
        (f.listeners = function (e) {
          return [];
        }),
        (f.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (f.cwd = function () {
          return "/";
        }),
        (f.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (f.umask = function () {
          return 0;
        });
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t) {
      e.exports = {};
    },
    function (e, t, n) {
      var r = n(15);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      var i = {};
      i.transform = void 0;
      n(17)(r, i);
      r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
      (t = e.exports = n(16)(!1)),
        t.push([
          e.i,
          '.v{font-size:16px;text-align:left}.v *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:2;color:#555;-webkit-transition:all .3s ease;transition:all .3s ease}.v hr{margin:.825em 0;border-color:#f6f6f6;border-style:dashed}.v.hide-avatar .vimg{display:none}.v a{position:relative;cursor:pointer;color:#1abc9c;display:inline-block}.v a:hover{color:#d7191a}.v a:hover:before{width:100%;left:0;right:auto}.v a:before{content:"";position:absolute;width:0;right:0;bottom:0;height:1px;background:#1abc9c;-webkit-transition:width .3s ease;transition:width .3s ease}.v code,.v pre{background-color:#f6f6f6;color:#555;padding:.2em .4em;border-radius:3px;font-size:85%;margin:0;font-family:Source Code Pro,courier new,Input Mono,PT Mono,SFMono-Regular,Consolas,Monaco,Menlo,PingFang SC,Liberation Mono,Microsoft YaHei,Courier，monospace}.v pre{padding:10px;overflow:auto;line-height:1.45}.v pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v blockquote{color:#666;margin:.5em 0;padding:0 0 0 1em;border-left:8px solid hsla(0,0%,93%,.5)}.v .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775em}.v input[type=checkbox],.v input[type=radio]{display:inline-block;vertical-align:middle;margin-top:-2px}.v .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v .vwrap input{background:transparent}.v .vwrap .vedit{position:relative;padding-top:10px}.v .vwrap .vedit .vctrl{text-align:right;font-size:12px}.v .vwrap .vedit .vctrl span{padding:10px;display:inline-block;vertical-align:middle;cursor:pointer}.v .vwrap .vedit .vemojis{display:none;font-size:18px;text-align:justify;max-height:145px;overflow:auto;margin-bottom:10px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v .vwrap .vedit .vemojis i{font-style:normal;padding:7px 0;width:38px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v .vwrap .vedit .vpreview{padding:7px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v .vwrap .vedit .vpreview frame,.v .vwrap .vedit .vpreview iframe,.v .vwrap .vedit .vpreview img{max-width:100%;border:none}.v .vwrap .vheader .vinput{width:33.33%;border-bottom:1px dashed #dedede}.v .vwrap .vheader.item2 .vinput{width:50%}.v .vwrap .vheader.item1 .vinput{width:100%}.v .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width:520px){.v .vwrap .vheader.item2 .vinput,.v .vwrap .vheader .vinput{width:100%}}.v .vwrap .vcontrol{font-size:0;padding-top:15px}.v .vwrap .vcontrol .col{display:inline-block;font-size:16px;vertical-align:middle;color:#ccc}.v .vwrap .vcontrol .col.text-right{text-align:right}.v .vwrap .vcontrol .col svg{margin-right:2px;overflow:hidden;fill:currentColor;vertical-align:middle}.v .vwrap .vcontrol .col.col-20{width:20%}.v .vwrap .vcontrol .col.col-40{width:40%}.v .vwrap .vcontrol .col.col-60{width:60%}.v .vwrap .vcontrol .col.col-80{width:80%}.v .vwrap .vcontrol .col.split{width:50%}.v .vwrap .vmark{position:absolute;background:rgba(0,0,0,.65);width:100%;height:100%;left:0;top:0}.v .vwrap .vmark .valert{padding-top:3em}.v .vwrap .vmark .valert .vtext{color:#fff;padding:1em 0}.v .vwrap .vmark .valert .vcode{width:4.6875em;border-radius:.3125em;padding:.5em;background:#dedede}.v .vwrap .vmark .valert .vcode:focus{border-color:#3090e4;background-color:#fff}@media screen and (max-width:720px){.v .vwrap .vmark .valert{padding-top:5.5em}.v .vwrap .vmark .valert .vtext{color:#fff;padding:1em 0}}.v .power{color:#999;padding:.5em 0}.v .power,.v .power a{font-size:.75em}.v .vinfo{font-size:0;padding:5px}.v .vinfo .col{font-size:16px;display:inline-block;width:50%;vertical-align:middle}.v .vinfo .vcount .vnum{font-weight:600;font-size:1.25em}.v a{text-decoration:none;color:#555}.v a:hover{color:#222}.v ol,.v ul{padding:0;margin-left:1.25em}.v .txt-center{text-align:center}.v .txt-right{text-align:right}.v .pd5{padding:5px}.v .pd10{padding:10px}.v .veditor{width:100%;min-height:8.75em;font-size:.875em;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#313131;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:#ededed;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5em 1.25em;font-size:.875em;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v .vbtn+.vbtn{margin-left:1.25em}.v .vbtn:active,.v .vbtn:hover{color:#3090e4;border-color:#3090e4;background-color:#fff}.v .vempty{padding:1.25em;text-align:center;color:#999}.v .vlist{width:100%}.v .vlist .vcard{padding-top:1.5em;position:relative;display:block}.v .vlist .vcard:after{content:"";clear:both;display:block}.v .vlist .vcard .vimg{width:3.125em;height:3.125em;float:left;border-radius:50%;margin-right:.7525em;border:1px solid #f5f5f5;padding:.125em}@media screen and (max-width:720px){.v .vlist .vcard .vimg{width:2.5em;height:2.5em}}.v .vlist .vcard .vhead{line-height:1.5;margin-top:0}.v .vlist .vcard .vhead .vnick{position:relative;font-size:.875em;font-weight:500;margin-right:.4em;cursor:pointer;color:#1abc9c;text-decoration:none;display:inline-block}.v .vlist .vcard .vhead .vnick:hover{color:#d7191a}.v .vlist .vcard .vhead .vtag{font-size:12px;display:inline-block;line-height:20px;border-radius:2px;color:#fff;padding:0 5px;position:inherit;margin-right:.4rem}.v .vlist .vcard .vhead .vtag.vmaster{background:#ffa51e}.v .vlist .vcard .vhead .vtag.vfriend{background:#6cf}.v .vlist .vcard .vhead .vtag.vvisitor{background:#828282}.v .vlist .vcard .vhead .vsys{display:inline-block;padding:.2em .5em;background:#ededed;color:#b3b1b1;font-size:.75em;border-radius:.2em;margin-right:.3em}@media screen and (max-width:520px){.v .vlist .vcard .vhead .vsys{display:none}}.v .vlist .vcard .vh{overflow:hidden;padding-bottom:.5em;border-bottom:1px dashed #f5f5f5}.v .vlist .vcard .vh .vtime{color:#b3b3b3;font-size:.75em;margin-right:.875em}.v .vlist .vcard .vh .vmeta{line-height:1;position:relative}.v .vlist .vcard .vh .vmeta .vat{font-size:.8125em;color:#ef2f11;cursor:pointer;float:right}.v .vlist .vcard:last-child .vh{border-bottom:none}.v .vlist .vcard .vcontent{word-wrap:break-word;word-break:break-all;text-align:justify;color:#4a4a4a;font-size:.875em;line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em}.v .vlist .vcard .vcontent frame,.v .vlist .vcard .vcontent iframe,.v .vlist .vcard .vcontent img{max-width:100%;border:none}.v .vlist .vcard .vcontent.expand{cursor:pointer;max-height:11.25em;overflow:hidden}.v .vlist .vcard .vcontent.expand:before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15em;pointer-events:none;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(hsla(0,0%,100%,.9)));background:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9))}.v .vlist .vcard .vcontent.expand:after{display:block;content:"Click on expand";text-align:center;color:#828586;position:absolute;width:100%;height:3.15em;line-height:3.15em;left:0;bottom:0;pointer-events:none;background:hsla(0,0%,100%,.9)}.v .vlist .vcard .vquote{color:#666;margin-top:1em;padding-left:1em;border-left:1px dashed hsla(0,0%,93%,.5)}.v .vlist .vcard .vquote .vimg{width:2.225em;height:2.225em}.v .vpage .vmore{margin:1em 0}.v .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v .vloading{position:relative;padding:20px;display:block;height:80px}.v .vloading:before{-webkit-box-sizing:border-box;box-sizing:border-box;content:"";position:absolute;display:inline-block;top:20px;left:50%;margin-left:-20px;width:40px;height:40px;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear}',
          "",
        ]);
    },
    function (e, t) {
      function n(e, t) {
        var n = e[1] || "",
          i = e[3];
        if (!i) return n;
        if (t && "function" == typeof btoa) {
          var o = r(i);
          return [n]
            .concat(
              i.sources.map(function (e) {
                return "/*# sourceURL=" + i.sourceRoot + e + " */";
              })
            )
            .concat([o])
            .join("\n");
        }
        return [n].join("\n");
      }
      function r(e) {
        return (
          "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
          " */"
        );
      }
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var r = n(t, e);
              return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
            }).join("");
          }),
          (t.i = function (e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, i = 0; i < this.length; i++) {
              var o = this[i][0];
              "number" == typeof o && (r[o] = !0);
            }
            for (i = 0; i < e.length; i++) {
              var s = e[i];
              ("number" == typeof s[0] && r[s[0]]) ||
                (n && !s[2]
                  ? (s[2] = n)
                  : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
                t.push(s));
            }
          }),
          t
        );
      };
    },
    function (e, t, n) {
      function r(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            i = p[r.id];
          if (i) {
            i.refs++;
            for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
            for (; o < r.parts.length; o++) i.parts.push(l(r.parts[o], t));
          } else {
            for (var s = [], o = 0; o < r.parts.length; o++)
              s.push(l(r.parts[o], t));
            p[r.id] = { id: r.id, refs: 1, parts: s };
          }
        }
      }
      function i(e, t) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
          var o = e[i],
            s = t.base ? o[0] + t.base : o[0],
            a = o[1],
            u = o[2],
            c = o[3],
            l = { css: a, media: u, sourceMap: c };
          r[s] ? r[s].parts.push(l) : n.push((r[s] = { id: s, parts: [l] }));
        }
        return n;
      }
      function o(e, t) {
        var n = g(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var r = y[y.length - 1];
        if ("top" === e.insertAt)
          r
            ? r.nextSibling
              ? n.insertBefore(t, r.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            y.push(t);
        else {
          if ("bottom" !== e.insertAt)
            throw new Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
            );
          n.appendChild(t);
        }
      }
      function s(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = y.indexOf(e);
        t >= 0 && y.splice(t, 1);
      }
      function a(e) {
        var t = document.createElement("style");
        return (e.attrs.type = "text/css"), c(t, e.attrs), o(e, t), t;
      }
      function u(e) {
        var t = document.createElement("link");
        return (
          (e.attrs.type = "text/css"),
          (e.attrs.rel = "stylesheet"),
          c(t, e.attrs),
          o(e, t),
          t
        );
      }
      function c(e, t) {
        Object.keys(t).forEach(function (n) {
          e.setAttribute(n, t[n]);
        });
      }
      function l(e, t) {
        var n, r, i, o;
        if (t.transform && e.css) {
          if (!(o = t.transform(e.css))) return function () {};
          e.css = o;
        }
        if (t.singleton) {
          var c = m++;
          (n = _ || (_ = a(t))),
            (r = h.bind(null, n, c, !1)),
            (i = h.bind(null, n, c, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((n = u(t)),
              (r = d.bind(null, n, t)),
              (i = function () {
                s(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = a(t)),
              (r = f.bind(null, n)),
              (i = function () {
                s(n);
              }));
        return (
          r(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else i();
          }
        );
      }
      function h(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = w(t, i);
        else {
          var o = document.createTextNode(i),
            s = e.childNodes;
          s[t] && e.removeChild(s[t]),
            s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
        }
      }
      function f(e, t) {
        var n = t.css,
          r = t.media;
        if ((r && e.setAttribute("media", r), e.styleSheet))
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function d(e, t, n) {
        var r = n.css,
          i = n.sourceMap,
          o = void 0 === t.convertToAbsoluteUrls && i;
        (t.convertToAbsoluteUrls || o) && (r = b(r)),
          i &&
            (r +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
              " */");
        var s = new Blob([r], { type: "text/css" }),
          a = e.href;
        (e.href = URL.createObjectURL(s)), a && URL.revokeObjectURL(a);
      }
      var p = {},
        v = (function (e) {
          var t;
          return function () {
            return void 0 === t && (t = e.apply(this, arguments)), t;
          };
        })(function () {
          return window && document && document.all && !window.atob;
        }),
        g = (function (e) {
          var t = {};
          return function (n) {
            return void 0 === t[n] && (t[n] = e.call(this, n)), t[n];
          };
        })(function (e) {
          return document.querySelector(e);
        }),
        _ = null,
        m = 0,
        y = [],
        b = n(18);
      e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        (t = t || {}),
          (t.attrs = "object" == typeof t.attrs ? t.attrs : {}),
          t.singleton || (t.singleton = v()),
          t.insertInto || (t.insertInto = "head"),
          t.insertAt || (t.insertAt = "bottom");
        var n = i(e, t);
        return (
          r(n, t),
          function (e) {
            for (var o = [], s = 0; s < n.length; s++) {
              var a = n[s],
                u = p[a.id];
              u.refs--, o.push(u);
            }
            if (e) {
              r(i(e, t), t);
            }
            for (var s = 0; s < o.length; s++) {
              var u = o[s];
              if (0 === u.refs) {
                for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                delete p[u.id];
              }
            }
          }
        );
      };
      var w = (function () {
        var e = [];
        return function (t, n) {
          return (e[t] = n), e.filter(Boolean).join("\n");
        };
      })();
    },
    function (e, t) {
      e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function (e, t) {
            var i = t
              .trim()
              .replace(/^"(.*)"$/, function (e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function (e, t) {
                return t;
              });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))
              return e;
            var o;
            return (
              (o =
                0 === i.indexOf("//")
                  ? i
                  : 0 === i.indexOf("/")
                  ? n + i
                  : r + i.replace(/^\.\//, "")),
              "url(" + JSON.stringify(o) + ")"
            );
          }
        );
      };
    },
    function (e, t, n) {
      n(14), (e.exports = n(1));
    },
  ]);
});
