var he = Object.defineProperty;
var le = (O, i, n) => i in O ? he(O, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : O[i] = n;
var a = (O, i, n) => le(O, typeof i != "symbol" ? i + "" : i, n);
var rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fe(O) {
  return O && O.__esModule && Object.prototype.hasOwnProperty.call(O, "default") ? O.default : O;
}
var ct = { exports: {} }, de = ct.exports, xt;
function ge() {
  return xt || (xt = 1, function(O, i) {
    (function(n, u) {
      O.exports = u();
    })(de, function() {
      function n(s, t, e) {
        return t = _(t), function(r, c) {
          if (c && (typeof c == "object" || typeof c == "function")) return c;
          if (c !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return function(h) {
            if (h === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h;
          }(r);
        }(s, u() ? Reflect.construct(t, e || [], _(s).constructor) : t.apply(s, e));
      }
      function u() {
        try {
          var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch {
        }
        return (u = function() {
          return !!s;
        })();
      }
      function d(s, t) {
        var e = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(s);
          t && (r = r.filter(function(c) {
            return Object.getOwnPropertyDescriptor(s, c).enumerable;
          })), e.push.apply(e, r);
        }
        return e;
      }
      function l(s) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t] != null ? arguments[t] : {};
          t % 2 ? d(Object(e), !0).forEach(function(r) {
            S(s, r, e[r]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(e)) : d(Object(e)).forEach(function(r) {
            Object.defineProperty(s, r, Object.getOwnPropertyDescriptor(e, r));
          });
        }
        return s;
      }
      function p(s) {
        var t = function(e, r) {
          if (typeof e != "object" || !e) return e;
          var c = e[Symbol.toPrimitive];
          if (c !== void 0) {
            var h = c.call(e, r);
            if (typeof h != "object") return h;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        }(s, "string");
        return typeof t == "symbol" ? t : t + "";
      }
      function o(s, t) {
        if (!(s instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function f(s, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(s, p(r.key), r);
        }
      }
      function g(s, t, e) {
        return t && f(s.prototype, t), Object.defineProperty(s, "prototype", { writable: !1 }), s;
      }
      function S(s, t, e) {
        return (t = p(t)) in s ? Object.defineProperty(s, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : s[t] = e, s;
      }
      function v(s, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
        s.prototype = Object.create(t && t.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), t && M(s, t);
      }
      function _(s) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, _(s);
      }
      function M(s, t) {
        return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
          return e.__proto__ = r, e;
        }, M(s, t);
      }
      function y(s, t) {
        for (; !Object.prototype.hasOwnProperty.call(s, t) && (s = _(s)) !== null; ) ;
        return s;
      }
      function b() {
        return b = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(s, t, e) {
          var r = y(s, t);
          if (r) {
            var c = Object.getOwnPropertyDescriptor(r, t);
            return c.get ? c.get.call(arguments.length < 3 ? s : e) : c.value;
          }
        }, b.apply(this, arguments);
      }
      function w(s) {
        return Number(s) === s && s % 1 == 0;
      }
      function k(s) {
        return Number(s) === s;
      }
      function I(s) {
        return typeof s == "string";
      }
      function j(s) {
        return typeof s == "boolean";
      }
      function H(s) {
        return s === 1 / 0;
      }
      function A(s) {
        return Object.prototype.toString.call(s) === "[object Array]";
      }
      function B(s) {
        return Object.prototype.toString.call(s) === "[object Object]";
      }
      function P(s) {
        return typeof s == "function";
      }
      function z(s) {
        return s instanceof Uint8Array;
      }
      function W(s) {
        return s instanceof Date;
      }
      function D(s) {
        return s === void 0;
      }
      function q(s) {
        return s === null;
      }
      function F(s) {
        return s + 3 & -4;
      }
      function R(s) {
        return Object.prototype.hasOwnProperty.call(typeof rt < "u" ? rt : window, s);
      }
      function N(s) {
        return s.buffer ? new DataView(s.buffer) : s instanceof ArrayBuffer ? new DataView(s) : new DataView(new Uint8Array(s));
      }
      function G(s) {
        if (w(s)) return "i";
        if (t = s, Number(t) === t && t % 1 != 0) return "f";
        if (I(s)) return "s";
        if (z(s)) return "b";
        if (j(s)) return s ? "T" : "F";
        if (q(s)) return "N";
        if (H(s)) return "I";
        var t;
        throw new Error("OSC typeTag() found unknown value type");
      }
      function x(s) {
        var t = "";
        if (A(s)) return "/".concat(s.join("/"));
        if (I(s)) return (t = s).length > 1 && t[t.length - 1] === "/" && (t = t.slice(0, t.length - 1)), t.length > 1 && t[0] !== "/" && (t = "/".concat(t)), t;
        throw new Error("OSC prepareAddress() needs addresses of type array or string");
      }
      function U(s) {
        if (!I(s)) throw new Error("OSC prepareRegExPattern() needs strings");
        return s.replace(/\./g, "\\.").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\{/g, "(").replace(/\}/g, ")").replace(/,/g, "|").replace(/\[!/g, "[^").replace(/\?/g, ".").replace(/\*/g, ".*");
      }
      var kt = g(function s() {
        o(this, s), this.data = [], this.byteLength = 0;
      }, [{ key: "add", value: function(s) {
        if (j(s) || H(s) || q(s)) return this;
        var t = s.pack();
        return this.byteLength += t.byteLength, this.data.push(t), this;
      } }, { key: "merge", value: function() {
        var s = new Uint8Array(this.byteLength), t = 0;
        return this.data.forEach(function(e) {
          s.set(e, t), t += e.byteLength;
        }), s;
      } }]), Y = g(function s(t) {
        o(this, s), this.value = t, this.offset = 0;
      }, [{ key: "pack", value: function(s, t) {
        if (!s || !t) throw new Error("OSC Atomic cant't be packed without given method or byteLength");
        var e = new Uint8Array(t), r = new DataView(e.buffer);
        if (D(this.value)) throw new Error("OSC Atomic cant't be encoded with empty value");
        return r[s](this.offset, this.value, !1), e;
      } }, { key: "unpackWithMethod", value: function(s, t, e) {
        var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        if (!(s && t && e)) throw new Error("OSC Atomic cant't be unpacked without given dataView, method or byteLength");
        if (!(s instanceof DataView)) throw new Error("OSC Atomic expects an instance of type DataView");
        return this.value = s[t](r, !1), this.offset = r + e, this.offset;
      } }]), ot = function(s) {
        function t(e) {
          if (o(this, t), e && !w(e)) throw new Error("OSC AtomicInt32 constructor expects value of type number");
          return n(this, t, [e]);
        }
        return v(t, s), g(t, [{ key: "pack", value: function() {
          return b(_(t.prototype), "pack", this).call(this, "setInt32", 4);
        } }, { key: "unpack", value: function(e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return b(_(t.prototype), "unpackWithMethod", this).call(this, e, "getInt32", 4, r);
        } }]);
      }(Y), St = "utf-8";
      function Bt(s) {
        if (R("Buffer")) return Buffer.from(s).toString(St);
        if (R("TextDecoder")) return new TextDecoder(St).decode(new Int8Array(s));
        for (var t = "", e = 0; e < s.length; e += 65537) t += String.fromCharCode.apply(null, s.slice(e, e + 65537));
        return t;
      }
      var J = function(s) {
        function t(e) {
          if (o(this, t), e && !I(e)) throw new Error("OSC AtomicString constructor expects value of type string");
          return n(this, t, [e]);
        }
        return v(t, s), g(t, [{ key: "pack", value: function() {
          if (D(this.value)) throw new Error("OSC AtomicString can not be encoded with empty value");
          for (var e = "".concat(this.value, "\0"), r = F(e.length), c = new Uint8Array(r), h = 0; h < e.length; h += 1) c[h] = e.charCodeAt(h);
          return c;
        } }, { key: "unpack", value: function(e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          if (!(e instanceof DataView)) throw new Error("OSC AtomicString expects an instance of type DataView");
          for (var c, h = r, m = []; h < e.byteLength; h += 1) {
            if ((c = e.getUint8(h)) === 0) {
              h += 1;
              break;
            }
            m.push(c);
          }
          if (h === e.length) throw new Error("OSC AtomicString found a malformed OSC string");
          return this.offset = F(h), this.value = Bt(m), this.offset;
        } }]);
      }(Y), It = 2208988800, At = 4294967296, lt = g(function s() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (o(this, s), !w(t) || !w(e)) throw new Error("OSC Timetag constructor expects values of type integer number");
        this.seconds = t, this.fractions = e;
      }, [{ key: "timestamp", value: function(s) {
        var t;
        if (typeof s == "number") {
          t = s / 1e3;
          var e = Math.floor(t);
          return this.seconds = e + It, this.fractions = Math.round(At * (t - e)), s;
        }
        return 1e3 * ((t = this.seconds - It) + Math.round(this.fractions / At));
      } }]), st = function(s) {
        function t() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Date.now();
          o(this, t);
          var r = new lt();
          return e instanceof lt ? r = e : w(e) ? r.timestamp(e) : W(e) && r.timestamp(e.getTime()), n(this, t, [r]);
        }
        return v(t, s), g(t, [{ key: "pack", value: function() {
          if (D(this.value)) throw new Error("OSC AtomicTimetag can not be encoded with empty value");
          var e = this.value, r = e.seconds, c = e.fractions, h = new Uint8Array(8), m = new DataView(h.buffer);
          return m.setInt32(0, r, !1), m.setInt32(4, c, !1), h;
        } }, { key: "unpack", value: function(e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          if (!(e instanceof DataView)) throw new Error("OSC AtomicTimetag expects an instance of type DataView");
          var c = e.getUint32(r, !1), h = e.getUint32(r + 4, !1);
          return this.value = new lt(c, h), this.offset = r + 8, this.offset;
        } }]);
      }(Y), Ct = function(s) {
        function t(e) {
          if (o(this, t), e && !z(e)) throw new Error("OSC AtomicBlob constructor expects value of type Uint8Array");
          return n(this, t, [e]);
        }
        return v(t, s), g(t, [{ key: "pack", value: function() {
          if (D(this.value)) throw new Error("OSC AtomicBlob can not be encoded with empty value");
          var e = F(this.value.byteLength), r = new Uint8Array(e + 4);
          return new DataView(r.buffer).setInt32(0, this.value.byteLength, !1), r.set(this.value, 4), r;
        } }, { key: "unpack", value: function(e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          if (!(e instanceof DataView)) throw new Error("OSC AtomicBlob expects an instance of type DataView");
          var c = e.getInt32(r, !1);
          return this.value = new Uint8Array(e.buffer, r + 4, c), this.offset = F(r + 4 + c), this.offset;
        } }]);
      }(Y), Ot = function(s) {
        function t(e) {
          if (o(this, t), e && !k(e)) throw new Error("OSC AtomicFloat32 constructor expects value of type float");
          return n(this, t, [e]);
        }
        return v(t, s), g(t, [{ key: "pack", value: function() {
          return b(_(t.prototype), "pack", this).call(this, "setFloat32", 4);
        } }, { key: "unpack", value: function(e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return b(_(t.prototype), "unpackWithMethod", this).call(this, e, "getFloat32", 4, r);
        } }]);
      }(Y), Tt = function(s) {
        function t(e) {
          if (o(this, t), e && !k(e)) throw new Error("OSC AtomicFloat64 constructor expects value of type float");
          return n(this, t, [e]);
        }
        return v(t, s), g(t, [{ key: "pack", value: function() {
          return b(_(t.prototype), "pack", this).call(this, "setFloat64", 8);
        } }, { key: "unpack", value: function(e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return b(_(t.prototype), "unpackWithMethod", this).call(this, e, "getFloat64", 8, r);
        } }]);
      }(Y), Dt = BigInt("9223372036854775807"), Ft = BigInt("-9223372036854775808"), Et = function(s) {
        function t(e) {
          if (o(this, t), e && typeof e != "bigint") throw new Error("OSC AtomicInt64 constructor expects value of type BigInt");
          if (e && (e < Ft || e > Dt)) throw new Error("OSC AtomicInt64 value is out of bounds");
          var r;
          return e && (r = BigInt.asIntN(64, e)), n(this, t, [r]);
        }
        return v(t, s), g(t, [{ key: "pack", value: function() {
          return b(_(t.prototype), "pack", this).call(this, "setBigInt64", 8);
        } }, { key: "unpack", value: function(e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return b(_(t.prototype), "unpackWithMethod", this).call(this, e, "getBigInt64", 8, r);
        } }]);
      }(Y), Rt = BigInt("18446744073709551615"), Mt = function(s) {
        function t(e) {
          if (o(this, t), e && typeof e != "bigint") throw new Error("OSC AtomicUInt64 constructor expects value of type BigInt");
          if (e && (e < 0 || e > Rt)) throw new Error("OSC AtomicUInt64 value is out of bounds");
          var r;
          return e && (r = BigInt.asUintN(64, e)), n(this, t, [r]);
        }
        return v(t, s), g(t, [{ key: "pack", value: function() {
          return b(_(t.prototype), "pack", this).call(this, "setBigUint64", 8);
        } }, { key: "unpack", value: function(e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return b(_(t.prototype), "unpackWithMethod", this).call(this, e, "getBigUint64", 8, r);
        } }]);
      }(Y), ft = !0, dt = !1, gt = null, pt = 1 / 0, _t = g(function s(t, e) {
        var r = this;
        if (o(this, s), this.offset = 0, this.address = "", this.types = "", this.args = [], !D(t)) {
          if (!I(t) && !A(t)) throw new Error("OSC Message constructor first argument (address) must be a string or array");
          this.address = x(t);
        }
        if (!D(e)) {
          if (!A(e)) throw new Error("OSC Message constructor second argument (args) must be an array");
          e.forEach(function(c) {
            return r.add(c.type, c.value);
          });
        }
      }, [{ key: "add", value: function(s, t) {
        if (D(s)) throw new Error("OSC Message needs a valid OSC Atomic Data Type");
        s === "N" ? this.args.push(gt) : s === "T" ? this.args.push(ft) : s === "F" ? this.args.push(dt) : s === "I" ? this.args.push(pt) : this.args.push(t), this.types += s;
      } }, { key: "pack", value: function() {
        var s = this;
        if (this.address.length === 0 || this.address[0] !== "/") throw new Error("OSC Message has an invalid address");
        var t = new kt();
        if (t.add(new J(this.address)), t.add(new J(",".concat(this.types))), this.args.length > 0) {
          var e;
          if (this.args.length > this.types.length) throw new Error("OSC Message argument and type tag mismatch");
          this.args.forEach(function(r, c) {
            var h = s.types[c];
            if (h === "i") e = new ot(r);
            else if (h === "h") e = new Et(r);
            else if (h === "t") e = new Mt(r);
            else if (h === "f") e = new Ot(r);
            else if (h === "d") e = new Tt(r);
            else if (h === "s") e = new J(r);
            else if (h === "b") e = new Ct(r);
            else if (h === "T") e = ft;
            else if (h === "F") e = dt;
            else if (h === "N") e = gt;
            else {
              if (h !== "I") throw new Error("OSC Message found unknown argument type");
              e = pt;
            }
            t.add(e);
          });
        }
        return t.merge();
      } }, { key: "unpack", value: function(s) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (!(s instanceof DataView)) throw new Error("OSC Message expects an instance of type DataView.");
        var e = new J();
        e.unpack(s, t);
        var r = new J();
        if (r.unpack(s, e.offset), e.value.length === 0 || e.value[0] !== "/") throw new Error("OSC Message found malformed or missing address string");
        if (r.value.length === 0 && r.value[0] !== ",") throw new Error("OSC Message found malformed or missing type string");
        for (var c, h, m = r.offset, C = [], L = 1; L < r.value.length; L += 1) {
          if (c = null, (h = r.value[L]) === "i") c = new ot();
          else if (h === "h") c = new Et();
          else if (h === "t") c = new Mt();
          else if (h === "f") c = new Ot();
          else if (h === "d") c = new Tt();
          else if (h === "s") c = new J();
          else if (h === "b") c = new Ct();
          else if (h === "T") C.push(ft);
          else if (h === "F") C.push(dt);
          else if (h === "N") C.push(gt);
          else {
            if (h !== "I") throw new Error("OSC Message found unsupported argument type");
            C.push(pt);
          }
          c && (m = c.unpack(s, m), C.push(c.value));
        }
        return this.offset = m, this.address = e.value, this.types = r.value, this.args = C, this.offset;
      } }]), Z = function(s) {
        function t(e) {
          var r, c;
          o(this, t);
          for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++) m[C - 1] = arguments[C];
          return m.length > 0 && m[0] instanceof Array && (c = m.shift()), r = n(this, t, [e, c]), m.length > 0 && (r.types = m.map(function(L) {
            return G(L);
          }).join(""), r.args = m), r;
        }
        return v(t, s), g(t, [{ key: "add", value: function(e) {
          b(_(t.prototype), "add", this).call(this, G(e), e);
        } }]);
      }(_t), at = "#bundle", tt = function() {
        function s() {
          var t = this;
          o(this, s), this.offset = 0, this.timetag = new st(), this.bundleElements = [];
          for (var e = arguments.length, r = new Array(e), c = 0; c < e; c++) r[c] = arguments[c];
          r.length > 0 && (r[0] instanceof Date || w(r[0]) ? this.timetag = new st(r[0]) : A(r[0]) ? (r[0].forEach(function(h) {
            t.add(h);
          }), r.length > 1 && (r[1] instanceof Date || w(r[1])) && (this.timetag = new st(r[1]))) : r.forEach(function(h) {
            t.add(h);
          }));
        }
        return g(s, [{ key: "timestamp", value: function(t) {
          if (!w(t)) throw new Error("OSC Bundle needs an integer for setting the timestamp");
          this.timetag = new st(t);
        } }, { key: "add", value: function(t) {
          if (!(t instanceof Z || t instanceof s)) throw new Error("OSC Bundle contains only Messages and Bundles");
          this.bundleElements.push(t);
        } }, { key: "pack", value: function() {
          var t = new kt();
          return t.add(new J(at)), this.timetag || (this.timetag = new st()), t.add(this.timetag), this.bundleElements.forEach(function(e) {
            t.add(new ot(e.pack().byteLength)), t.add(e);
          }), t.merge();
        } }, { key: "unpack", value: function(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          if (!(t instanceof DataView)) throw new Error("OSC Bundle expects an instance of type DataView");
          var r = new J();
          if (r.unpack(t, e), r.value !== at) throw new Error("OSC Bundle does not contain a valid #bundle head");
          var c = new st(), h = c.unpack(t, r.offset);
          for (this.bundleElements = []; h < t.byteLength; ) {
            var m = new J(), C = new ot();
            h = C.unpack(t, h);
            var L = void 0;
            m.unpack(t, h), h = (L = m.value === at ? new s() : new Z()).unpack(t, h), this.bundleElements.push(L);
          }
          return this.offset = h, this.timetag = c, this.offset;
        } }]);
      }(), et = g(function s(t) {
        if (o(this, s), t && !(t instanceof Z || t instanceof tt)) throw new Error("OSC Packet value has to be Message or Bundle");
        this.value = t, this.offset = 0;
      }, [{ key: "pack", value: function() {
        if (!this.value) throw new Error("OSC Packet can not be encoded with empty body");
        return this.value.pack();
      } }, { key: "unpack", value: function(s) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (!(s instanceof DataView)) throw new Error("OSC Packet expects an instance of type DataView");
        if (s.byteLength % 4 != 0) throw new Error("OSC Packet byteLength has to be a multiple of four");
        var e, r = new J();
        return r.unpack(s, t), (e = r.value === at ? new tt() : new Z()).unpack(s, t), this.offset = e.offset, this.value = e, this.offset;
      } }]), Vt = { discardLateMessages: !1 }, Ht = g(function s(t) {
        o(this, s), this.options = l(l({}, Vt), t), this.addressHandlers = [], this.eventHandlers = { open: [], error: [], close: [] }, this.uuid = 0;
      }, [{ key: "dispatch", value: function(s, t) {
        var e = this;
        if (!(s instanceof et)) throw new Error("OSC EventHander dispatch() accepts only arguments of type Packet");
        if (!s.value) throw new Error("OSC EventHander dispatch() can't read empty Packets");
        if (s.value instanceof tt) {
          var r = s.value;
          return r.bundleElements.forEach(function(h) {
            if (h instanceof tt) {
              if (r.timetag.value.timestamp() < h.timetag.value.timestamp()) throw new Error("OSC Bundle timestamp is older than the timestamp of enclosed Bundles");
              return e.dispatch(new et(h));
            }
            if (h instanceof Z) {
              var m = h;
              return e.notify(m.address, m, r.timetag.value.timestamp(), t);
            }
            throw new Error("OSC EventHander dispatch() can't dispatch unknown Packet value");
          });
        }
        if (s.value instanceof Z) {
          var c = s.value;
          return this.notify(c.address, c, 0, t);
        }
        throw new Error("OSC EventHander dispatch() can't dispatch unknown Packet value");
      } }, { key: "call", value: function(s, t, e) {
        var r = !1;
        if (I(s) && s in this.eventHandlers) return this.eventHandlers[s].forEach(function(m) {
          m.callback(t, e), r = !0;
        }), r;
        var c = Object.keys(this.addressHandlers), h = this.addressHandlers;
        return c.forEach(function(m) {
          var C = !1, L = new RegExp(U(x(s)), "g");
          if (L.test(m) && m.length === L.lastIndex && (C = !0), !C) {
            var K = new RegExp(U(x(m)), "g");
            K.test(s) && s.length === K.lastIndex && (C = !0);
          }
          C && h[m].forEach(function(nt) {
            nt.callback(t, e), r = !0;
          });
        }), r;
      } }, { key: "notify", value: function() {
        for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++) t[e] = arguments[e];
        if (t.length === 0) throw new Error("OSC EventHandler can not be called without any argument");
        try {
          if (t[0] instanceof et) return this.dispatch(t[0], t[1]);
          if (t[0] instanceof tt || t[0] instanceof Z) return this.dispatch(new et(t[0]), t[1]);
          if (!I(t[0])) {
            var r = new et();
            return r.unpack(N(t[0])), this.dispatch(r, t[1]);
          }
          var c = t[0], h = null;
          t.length > 1 && (h = t[1]);
          var m = null;
          if (t.length > 2) if (w(t[2])) m = t[2];
          else {
            if (!(t[2] instanceof Date)) throw new Error("OSC EventHandler timestamp has to be a number or Date");
            m = t[2].getTime();
          }
          var C = null;
          if (t.length >= 3 && (C = t[3]), m) {
            var L = Date.now();
            if (L > m && !this.options.discardLateMessages) return this.call(c, h, C);
            var K = this;
            return setTimeout(function() {
              K.call(c, h, C);
            }, m - L), !0;
          }
          return this.call(c, h, C);
        } catch (nt) {
          return this.notify("error", nt), !1;
        }
      } }, { key: "on", value: function(s, t) {
        if (!I(s) && !A(s)) throw new Error("OSC EventHandler accepts only strings or arrays for address patterns");
        if (!P(t)) throw new Error("OSC EventHandler callback has to be a function");
        this.uuid += 1;
        var e = { id: this.uuid, callback: t };
        if (I(s) && s in this.eventHandlers) return this.eventHandlers[s].push(e), this.uuid;
        var r = x(s);
        return r in this.addressHandlers || (this.addressHandlers[r] = []), this.addressHandlers[r].push(e), this.uuid;
      } }, { key: "off", value: function(s, t) {
        if (!I(s) && !A(s)) throw new Error("OSC EventHandler accepts only strings or arrays for address patterns");
        if (!w(t)) throw new Error("OSC EventHandler subscription id has to be a number");
        var e, r;
        return I(s) && s in this.eventHandlers ? (e = s, r = this.eventHandlers) : (e = x(s), r = this.addressHandlers), e in r && r[e].some(function(c, h) {
          return c.id === t && (r[e].splice(h, 1), !0);
        });
      } }]), it = g(function s() {
        if (o(this, s), this.constructor === s) throw new Error("Plugin is an abstract class. Please create or use an implementation!");
      }, [{ key: "status", value: function() {
        throw new Error("Abstract method!");
      } }, { key: "open", value: function() {
        throw new Error("Abstract method!");
      } }, { key: "close", value: function() {
        throw new Error("Abstract method!");
      } }, { key: "send", value: function(s) {
        throw new Error("Abstract method!");
      } }]), zt = 0, Ut = 1, Wt = 2, qt = 3, Gt = function(s) {
        function t() {
          throw o(this, t), n(this, t), new Error("DatagramPlugin can not be used in browser context");
        }
        return v(t, s), g(t, [{ key: "registerNotify", value: function(e) {
          this.notify = e;
        } }, { key: "status", value: function() {
          return this.socketStatus;
        } }, { key: "open", value: function() {
          var e = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = l(l({}, this.options.open), r), h = c.port, m = c.exclusive;
          this.socketStatus = zt, this.socket.bind({ address: c.host, port: h, exclusive: m }, function() {
            e.socketStatus = Ut, e.notify("open");
          });
        } }, { key: "close", value: function() {
          var e = this;
          this.socketStatus = Wt, this.socket.close(function() {
            e.socketStatus = qt, e.notify("close");
          });
        } }, { key: "send", value: function(e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = l(l({}, this.options.send), r), h = c.port, m = c.host;
          this.socket.send(Buffer.from(e), 0, e.byteLength, h, m);
        } }]);
      }(it), Nt = typeof WebSocket < "u" ? WebSocket : typeof MozWebSocket < "u" ? MozWebSocket : typeof rt < "u" ? rt.WebSocket || rt.MozWebSocket : typeof window < "u" ? window.WebSocket || window.MozWebSocket : typeof self < "u" ? self.WebSocket || self.MozWebSocket : void 0, mt = void 0, Xt = 0, $t = 1, Jt = 2, Zt = 3, ut = { udpServer: { host: "localhost", port: 41234, exclusive: !1 }, udpClient: { host: "localhost", port: 41235 }, wsServer: { host: "localhost", port: 8080 }, receiver: "ws" };
      function Lt(s, t) {
        return l(l(l(l({}, ut), s), t), {}, { udpServer: l(l(l({}, ut.udpServer), s.udpServer), t.udpServer), udpClient: l(l(l({}, ut.udpClient), s.udpClient), t.udpClient), wsServer: l(l(l({}, ut.wsServer), s.wsServer), t.wsServer) });
      }
      var Kt = function(s) {
        function t() {
          throw o(this, t), n(this, t), new Error("BridgePlugin can not be used in browser context");
        }
        return v(t, s), g(t, [{ key: "registerNotify", value: function(e) {
          this.notify = e;
        } }, { key: "status", value: function() {
          return this.socketStatus;
        } }, { key: "open", value: function() {
          var e = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = Lt(this.options, r);
          this.socketStatus = Xt, this.socket.bind({ address: c.udpServer.host, port: c.udpServer.port, exclusive: c.udpServer.exclusive }, function() {
            var h = {};
            c.wsServer.server ? h.server = c.wsServer.server : h = c.wsServer, e.websocket = new mt(h), e.websocket.binaryType = "arraybuffer", e.websocket.on("listening", function() {
              e.socketStatus = $t, e.notify("open");
            }), e.websocket.on("error", function(m) {
              e.notify("error", m);
            }), e.websocket.on("connection", function(m) {
              m.on("message", function(C, L) {
                e.send(C, { receiver: "udp" }), e.notify(new Uint8Array(C), L);
              });
            });
          });
        } }, { key: "close", value: function() {
          var e = this;
          this.socketStatus = Jt, this.socket.close(function() {
            e.websocket.close(function() {
              e.socketStatus = Zt, e.notify("close");
            });
          });
        } }, { key: "send", value: function(e) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = Lt(this.options, r), h = c.receiver;
          if (h === "udp") {
            var m = e instanceof Buffer ? e : Buffer.from(e);
            this.socket.send(m, 0, m.byteLength, c.udpClient.port, c.udpClient.host);
          } else {
            if (h !== "ws") throw new Error("BridgePlugin can not send message to unknown receiver");
            this.websocket.clients.forEach(function(C) {
              C.send(e, { binary: !0 });
            });
          }
        } }]);
      }(it), Qt = -1, Yt = 0, te = 1, ee = 2, se = 3, ie = { host: "localhost", port: 8080, secure: !1, protocol: [] }, Pt = function(s) {
        function t(e) {
          var r;
          if (o(this, t), r = n(this, t), !Nt) throw new Error("WebsocketClientPlugin can't find a WebSocket class");
          return r.options = l(l({}, ie), e), r.socket = null, r.socketStatus = Qt, r.notify = function() {
          }, r;
        }
        return v(t, s), g(t, [{ key: "registerNotify", value: function(e) {
          this.notify = e;
        } }, { key: "status", value: function() {
          return this.socketStatus;
        } }, { key: "open", value: function() {
          var e = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = l(l({}, this.options), r), h = c.port, m = c.host, C = c.secure, L = c.protocol;
          this.socket && this.close();
          var K = C ? "wss" : "ws", nt = { address: m, family: K, port: h, size: 0 };
          this.socket = new Nt("".concat(K, "://").concat(m, ":").concat(h), L), this.socket.binaryType = "arraybuffer", this.socketStatus = Yt, this.socket.onopen = function() {
            e.socketStatus = te, e.notify("open");
          }, this.socket.onclose = function() {
            e.socketStatus = se, e.notify("close");
          }, this.socket.onerror = function(vt) {
            e.notify("error", vt);
          }, this.socket.onmessage = function(vt) {
            e.notify(vt.data, nt);
          };
        } }, { key: "close", value: function() {
          this.socketStatus = ee, this.socket.close();
        } }, { key: "send", value: function(e) {
          this.socket.send(e);
        } }]);
      }(it), ne = 0, re = 1, oe = 2, ae = 3, ue = function(s) {
        function t(e) {
          throw o(this, t), n(this, t), new Error("WebsocketServerPlugin can not be used in browser context");
        }
        return v(t, s), g(t, [{ key: "registerNotify", value: function(e) {
          this.notify = e;
        } }, { key: "status", value: function() {
          return this.socketStatus;
        } }, { key: "open", value: function() {
          var e = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = l(l({}, this.options), r), h = c.port, m = c.host, C = { address: m, family: "wsserver", port: h, size: 0 };
          this.socket && this.close(), c.server ? this.socket = new mt({ server: c.server }) : this.socket = new mt({ host: m, port: h }), this.socket.binaryType = "arraybuffer", this.socketStatus = ne, this.socket.on("listening", function() {
            e.socketStatus = re, e.notify("open");
          }), this.socket.on("error", function(L) {
            e.notify("error", L);
          }), this.socket.on("connection", function(L) {
            L.on("message", function(K) {
              e.notify(new Uint8Array(K), C);
            });
          });
        } }, { key: "close", value: function() {
          var e = this;
          this.socketStatus = oe, this.socket.close(function() {
            e.socketStatus = ae, e.notify("close");
          });
        } }, { key: "send", value: function(e) {
          this.socket.clients.forEach(function(r) {
            r.send(e, { binary: !0 });
          });
        } }]);
      }(it), ce = { discardLateMessages: !1 }, X = g(function s(t) {
        if (o(this, s), t && !B(t)) throw new Error("OSC options argument has to be an object.");
        this.options = l(l({}, ce), t), this.options.plugin || (this.options.plugin = new Pt()), this.eventHandler = new Ht({ discardLateMessages: this.options.discardLateMessages });
        var e = this.eventHandler;
        this.options.plugin && this.options.plugin.registerNotify && this.options.plugin.registerNotify(function() {
          return e.notify.apply(e, arguments);
        });
      }, [{ key: "on", value: function(s, t) {
        if (!I(s) || !P(t)) throw new Error("OSC on() needs event- or address string and callback function");
        return this.eventHandler.on(s, t);
      } }, { key: "off", value: function(s, t) {
        if (!I(s) || !w(t)) throw new Error("OSC off() needs string and number (subscriptionId) to unsubscribe");
        return this.eventHandler.off(s, t);
      } }, { key: "open", value: function(s) {
        if (s && !B(s)) throw new Error("OSC open() options argument needs to be an object");
        if (!this.options.plugin || !P(this.options.plugin.open)) throw new Error("OSC Plugin API #open is not implemented!");
        return this.options.plugin.open(s);
      } }, { key: "status", value: function() {
        if (!this.options.plugin || !P(this.options.plugin.status)) throw new Error("OSC Plugin API #status is not implemented!");
        return this.options.plugin.status();
      } }, { key: "close", value: function() {
        if (!this.options.plugin || !P(this.options.plugin.close)) throw new Error("OSC Plugin API #close is not implemented!");
        return this.options.plugin.close();
      } }, { key: "send", value: function(s, t) {
        if (!this.options.plugin || !P(this.options.plugin.send)) throw new Error("OSC Plugin API #send is not implemented!");
        if (!(s instanceof _t || s instanceof Z || s instanceof tt || s instanceof et)) throw new Error("OSC send() needs Messages, Bundles or Packets");
        if (t && !B(t)) throw new Error("OSC send() options argument has to be an object");
        return this.options.plugin.send(s.pack(), t);
      } }]);
      return X.STATUS = { IS_NOT_INITIALIZED: -1, IS_CONNECTING: 0, IS_OPEN: 1, IS_CLOSING: 2, IS_CLOSED: 3 }, X.Packet = et, X.Bundle = tt, X.Message = Z, X.TypedMessage = _t, X.Plugin = it, X.DatagramPlugin = Gt, X.WebsocketClientPlugin = Pt, X.WebsocketServerPlugin = ue, X.BridgePlugin = Kt, X;
    });
  }(ct)), ct.exports;
}
var pe = ge();
const jt = /* @__PURE__ */ fe(pe);
class _e {
  constructor() {
    a(this, "_isConnected");
    a(this, "_messageListeners");
    this._isConnected = !1, this._messageListeners = /* @__PURE__ */ new Map();
  }
  get isConnected() {
    return this._isConnected;
  }
  set isConnected(i) {
    this._isConnected = i;
  }
  onOscMessage(i) {
    const n = this._messageListeners.get(i.address);
    if (n !== void 0)
      for (let u of n)
        u(i);
  }
  addMessageListener(i, n) {
    var u;
    this._messageListeners.has(i) || this._messageListeners.set(i, []), (u = this._messageListeners.get(i)) == null || u.push(n);
  }
}
class Ce extends _e {
  constructor(n, u) {
    super();
    a(this, "_host");
    a(this, "_port");
    a(this, "_osc");
    this._host = n, this._port = u;
    const d = new jt.WebsocketClientPlugin({ host: this._host, port: this._port });
    this._osc = new jt({ plugin: d }), this._osc.on("*", (l) => this.onOscMessage(l));
  }
  connect() {
    this._osc.open(), this.isConnected = !0;
  }
  disconnect() {
    this._osc.close(), this.isConnected = !1;
  }
}
class bt {
  constructor(i, n) {
    a(this, "_startTime");
    a(this, "_position");
    this._startTime = i, this._position = n;
  }
  get startTime() {
    return this._startTime;
  }
  get position() {
    return this._position;
  }
  set position(i) {
    this._position = i;
  }
}
const V = class V {
  constructor(i) {
    a(this, "_name");
    this._name = i;
  }
  toString() {
    return `TuioState.${this._name}`;
  }
};
a(V, "Added", new V("Added")), a(V, "Accelerating", new V("Accelerating")), a(V, "Decelerating", new V("Decelerating")), a(V, "Stopped", new V("Stopped")), a(V, "Removed", new V("Removed")), a(V, "Rotating", new V("Rotating")), a(V, "Idle", new V("Idle"));
let T = V;
class yt extends bt {
  constructor(n, u, d, l, p) {
    super(n, d);
    a(this, "MAX_PATH_LENGTH", 128);
    a(this, "_currentTime");
    a(this, "_sessionId");
    a(this, "_velocity");
    a(this, "_motionSpeed");
    a(this, "_motionAccel");
    a(this, "_state");
    a(this, "_prevPoints");
    this._currentTime = n, this._sessionId = u, this._velocity = l, this._motionSpeed = l.length(), this._motionAccel = p, this._state = T.Added, this._prevPoints = [], this._prevPoints.push(new bt(n, d));
  }
  get currentTime() {
    return this._currentTime;
  }
  get sessionId() {
    return this._sessionId;
  }
  get velocity() {
    return this._velocity;
  }
  get motionSpeed() {
    return this._motionSpeed;
  }
  get motionAccel() {
    return this._motionAccel;
  }
  get state() {
    return this._state;
  }
  set state(n) {
    this._state = n;
  }
  get path() {
    return this._prevPoints;
  }
  updateContainer(n, u, d, l, p) {
    let o = this.path[this.path.length - 1];
    if (this.position = u, p) {
      const f = n.subtract(o.startTime).getTotalMilliseconds() / 1e3, g = this.position.subtract(o.position);
      let S = g.length(), v = this.motionSpeed;
      this._velocity = g.divide(f), this._motionSpeed = S / f, this._motionAccel = (this.motionSpeed - v) / f;
    } else
      this._velocity = d, this._motionSpeed = this._velocity.length(), this._motionAccel = l;
    this._currentTime = n, this._prevPoints.push(new bt(n, u)), this._prevPoints.length > this.MAX_PATH_LENGTH && this._prevPoints.shift(), this._motionAccel > 0 ? this._state = T.Accelerating : this._motionAccel < 0 ? this._state = T.Decelerating : this._state = T.Stopped;
  }
  remove(n) {
    this._currentTime = n, this._state = T.Removed;
  }
}
class me extends yt {
  constructor(n, u, d, l, p, o, f, g, S) {
    super(n, u, l, o, g);
    a(this, "_symbolId");
    a(this, "_angle");
    a(this, "_rotationSpeed");
    a(this, "_rotationAccel");
    this._symbolId = d, this._angle = p, this._rotationSpeed = f, this._rotationAccel = S;
  }
  get symbolId() {
    return this._symbolId;
  }
  get angle() {
    return this._angle;
  }
  get rotationSpeed() {
    return this._rotationSpeed;
  }
  get rotationAccel() {
    return this._rotationAccel;
  }
  hasChanged(n, u, d, l, p, o) {
    return !(n === this.position && u === this.angle && d === this.velocity && l === this.rotationSpeed && p === this.motionAccel && o === this.rotationAccel);
  }
  update(n, u, d, l, p, o, f) {
    let g = this.path[this.path.length - 1], S = u.x !== this.position.x && l.x === 0 || u.y !== this.position.y && l.y === 0;
    if (this.updateContainer(n, u, l, o, S), d !== this.angle && p === 0) {
      let _ = n.subtract(g.startTime).getTotalMilliseconds() / 1e3, M = this.angle, y = this.rotationSpeed, b = (d - M) / (2 * Math.PI);
      b > 0.5 ? b -= 1 : b <= -0.5 && (b += 1), this._rotationSpeed = b / _, this._rotationAccel = (this.rotationSpeed - y) / _;
    } else
      this._rotationSpeed = p, this._rotationAccel = f;
    this._angle = d, this.state !== T.Stopped && this.rotationAccel !== 0 && (this.state = T.Rotating);
  }
}
class ve extends yt {
  constructor(n, u, d, l, p, o) {
    super(n, u, l, p, o);
    a(this, "_cursorId");
    this._cursorId = d;
  }
  get cursorId() {
    return this._cursorId;
  }
  hasChanged(n, u, d) {
    return !(n === this.position && u === this.velocity && d === this.motionAccel);
  }
  update(n, u, d, l) {
    let p = u.x !== this.position.x && d.x === 0 || u.y !== this.position.y && d.y === 0;
    this.updateContainer(n, u, d, l, p);
  }
}
class be extends yt {
  constructor(n, u, d, l, p, o, f, g, S, v, _) {
    super(n, u, l, g, v);
    a(this, "_blobId");
    a(this, "_angle");
    a(this, "_size");
    a(this, "_area");
    a(this, "_rotationSpeed");
    a(this, "_rotationAccel");
    this._blobId = d, this._angle = p, this._size = o, this._area = f, this._rotationSpeed = S, this._rotationAccel = _;
  }
  get blobId() {
    return this._blobId;
  }
  get angle() {
    return this._angle;
  }
  get size() {
    return this._size;
  }
  get area() {
    return this._area;
  }
  get rotationSpeed() {
    return this._rotationSpeed;
  }
  get rotationAccel() {
    return this._rotationAccel;
  }
  hasChanged(n, u, d, l, p, o, f, g) {
    return !(n === this.position && u === this.angle && d === this.size && l === this.area && p === this.velocity && o === this.rotationSpeed && f === this.motionAccel && g === this.rotationAccel);
  }
  update(n, u, d, l, p, o, f, g, S) {
    let v = this.path[this.path.length - 1], _ = u.x !== this.position.x && o.x === 0 || u.y !== this.position.y && o.y === 0;
    if (this.updateContainer(n, u, o, g, _), d !== this.angle && f === 0) {
      let y = n.subtract(v.startTime).getTotalMilliseconds() / 1e3, b = this.angle, w = this.rotationSpeed, k = (d - b) / (2 * Math.PI);
      k > 0.5 ? k -= 1 : k <= -0.5 && (k += 1), this._rotationSpeed = k / y, this._rotationAccel = (this.rotationSpeed - w) / y;
    } else
      this._rotationSpeed = f, this._rotationAccel = S;
    this._angle = d, this.state !== T.Stopped && this.rotationAccel !== 0 && (this.state = T.Rotating), this._size = l, this._area = p;
  }
}
const $ = class $ {
  constructor(i, n) {
    a(this, "_seconds");
    a(this, "_microSeconds");
    this._seconds = i, this._microSeconds = n;
  }
  static fromOscTime(i) {
    let n = Number(i >> 32n);
    const u = Number(i & 0xFFFFFFFFn), d = Math.floor(u * 1e6 / Math.pow(2, 32));
    return new $(n, d);
  }
  subtract(i) {
    let n = this._seconds - i._seconds, u = this._microSeconds - i._microSeconds;
    return u < 0 && (u += 1e6, n = n - 1), new $(n, u);
  }
  getTotalMilliseconds() {
    return 1e3 * this._seconds + this._microSeconds / 1e3;
  }
  static init() {
    $._startTime = $._getSystemTime();
  }
  static getCurrentTime() {
    return $._getSystemTime().subtract($._startTime);
  }
  static _getSystemTime() {
    let i = performance.now();
    return new $(Math.floor(i / 1e3), Math.floor(i * 1e3) % 1e6);
  }
};
a($, "_startTime", new $(0, 0));
let Q = $;
class E {
  /**
   * Create a vector with the given components.
   * @param x - The component of the x-axis.
   * @param y - The component of the y-axis.
   * @returns The vector.
   */
  constructor(i, n) {
    this.x = i, this.y = n;
  }
  /**
   * Create a vector with the given components.
   * @param x - The component of the x-axis.
   * @param y - The component of the y-axis.
   * @returns The vector.
   */
  static of([i, n]) {
    return new E(i, n);
  }
  /**
   * Add another vector to the vector.
   * @param val - The vector to be added.
   * @returns The resulting vector of the addition.
   */
  add(i) {
    return new E(this.x + i.x, this.y + i.y);
  }
  /**
   * Subtract another vector from the vector.
   * @param val - The vector to be added.
   * @returns The resulting vector of the subtraction.
   */
  subtract(i) {
    return new E(this.x - i.x, this.y - i.y);
  }
  /**
   * Multiply the vector by a scalar.
   * @param scalar - The scalar the vector will be multiplied by.
   * @returns The resulting vector of the multiplication.
   */
  multiply(i) {
    return new E(this.x * i, this.y * i);
  }
  /**
   * Divide the vector by a scalar.
   * @param scalar - The scalar the vector will be divided by.
   * @returns The resulting vector of the division.
   */
  divide(i) {
    return new E(this.x / i, this.y / i);
  }
  /**
   * Calculate the dot product of the vector and another vector.
   * @param other - The other vector used for calculating the dot product.
   * @returns The dot product.
   */
  dot(i) {
    return this.x * i.x + this.y * i.y;
  }
  /**
   * Calculate the cross product of the vector and another vector. The cross product of two vectors `a` and `b` is defined as `a.x * b.y - a.y * b.x`.
   * @param other - The other vector used for calculating the cross product.
   * @returns The cross product.
   */
  cross(i) {
    return this.x * i.y - i.x * this.y;
  }
  /**
   * Calculate the Hadamard product of the vector and another vector.
   * @param other - The other vector used for calculating the Hadamard product.
   * @returns The Hadamard product.
   */
  hadamard(i) {
    return new E(this.x * i.x, this.y * i.y);
  }
  /**
   * Calculate the length of the vector using the L2 norm.
   * @returns The length.
   */
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  /**
   * Normalize the vector using the L2 norm.
   * @returns The normalized vector.
   */
  normalize() {
    const i = this.length();
    return new E(this.x / i, this.y / i);
  }
  /**
   * Rotate the vector by the given radians counterclockwise.
   * @param radians - The radians the vector will be rotated by.
   * @returns The rotated vector.
   */
  rotateByRadians(i) {
    const n = Math.cos(i), u = Math.sin(i);
    return new E(this.x * n - this.y * u, this.x * u + this.y * n);
  }
  /**
   * Rotate the vector by the given degrees counterclockwise.
   * @param degrees - The degrees the vector will be rotated by.
   * @returns The rotated vector.
   */
  rotateByDegrees(i) {
    return this.rotateByRadians(i * Math.PI / 180);
  }
}
class Oe {
  constructor(i) {
    a(this, "_tuioReceiver");
    a(this, "_currentTime");
    a(this, "_currentFrame");
    a(this, "_tuioObjects");
    a(this, "_tuioCursors");
    a(this, "_tuioBlobs");
    a(this, "_objectSetMessages");
    a(this, "_cursorSetMessages");
    a(this, "_blobSetMessages");
    a(this, "_objectAliveMessage");
    a(this, "_cursorAliveMessage");
    a(this, "_blobAliveMessage");
    a(this, "_freeCursorIds");
    a(this, "_freeBlobIds");
    a(this, "_tuioListeners");
    this._tuioReceiver = i, this._tuioReceiver.addMessageListener("/tuio/2Dobj", this.on2Dobj.bind(this)), this._tuioReceiver.addMessageListener("/tuio/2Dcur", this.on2Dcur.bind(this)), this._tuioReceiver.addMessageListener("/tuio/2Dblb", this.on2Dblb.bind(this)), this._tuioListeners = [], this._tuioObjects = /* @__PURE__ */ new Map(), this._tuioCursors = /* @__PURE__ */ new Map(), this._tuioBlobs = /* @__PURE__ */ new Map(), this._objectSetMessages = [], this._cursorSetMessages = [], this._blobSetMessages = [], this._objectAliveMessage = null, this._cursorAliveMessage = null, this._blobAliveMessage = null, this._freeCursorIds = [], this._freeBlobIds = [], this._currentFrame = 0, this._currentTime = Q.getCurrentTime();
  }
  connect() {
    Q.init(), this._currentTime = Q.getCurrentTime(), this._tuioReceiver.connect();
  }
  disconnect() {
    this._tuioReceiver.disconnect();
  }
  addTuioListener(i) {
    this._tuioListeners.push(i);
  }
  removeTuioListener(i) {
    let n = this._tuioListeners.indexOf(i);
    n > -1 && this._tuioListeners.splice(n, 1);
  }
  removeAllTuioListeners() {
    this._tuioListeners = [];
  }
  getTuioObjects() {
    return this._tuioObjects.values();
  }
  getTuioCursors() {
    return this._tuioCursors.values();
  }
  getTuioBlobs() {
    return this._tuioBlobs.values();
  }
  getTuioObject(i) {
    let n = this._tuioObjects.get(i);
    return n === void 0 ? null : n;
  }
  getTuioCursor(i) {
    let n = this._tuioCursors.get(i);
    return n === void 0 ? null : n;
  }
  getTuioBlob(i) {
    let n = this._tuioBlobs.get(i);
    return n === void 0 ? null : n;
  }
  updateFrame(i) {
    let n = Q.getCurrentTime();
    if (i > 0)
      if (i > this._currentFrame && (this._currentTime = n), i >= this._currentFrame || this._currentFrame - i > 100)
        this._currentFrame = i;
      else
        return !1;
    else n.subtract(this._currentTime).getTotalMilliseconds() > 100 && (this._currentTime = n);
    return !0;
  }
  on2Dobj(i) {
    let n = i.args[0];
    if (n === "set")
      this._objectSetMessages.push(i);
    else if (n === "alive")
      this._objectAliveMessage = i;
    else if (n === "fseq") {
      let u = Number(i.args[1]);
      if (this.updateFrame(u)) {
        if (this._objectAliveMessage !== null) {
          let d = new Set(this._tuioObjects.keys()), l = new Set(this._objectAliveMessage.args.slice(1).map((o) => Number(o))), p = new Set([...d].filter((o) => !l.has(o)));
          for (let o of p) {
            let f = this._tuioObjects.get(o);
            if (f) {
              f.remove(this._currentTime);
              for (let g of this._tuioListeners)
                g.removeTuioObject(f);
            }
            this._tuioObjects.delete(o);
          }
          for (let o of this._objectSetMessages) {
            const f = Number(o.args[1]), g = Number(o.args[2]), S = new E(Number(o.args[3]), Number(o.args[4])), v = Number(o.args[5]), _ = new E(Number(o.args[6]), Number(o.args[7])), M = Number(o.args[8]), y = Number(o.args[9]), b = Number(o.args[10]);
            if (l.has(f))
              if (d.has(f)) {
                let w = this._tuioObjects.get(f);
                if (w != null && w.hasChanged(S, v, _, M, y, b)) {
                  w == null || w.update(this._currentTime, S, v, _, M, y, b);
                  for (let k of this._tuioListeners)
                    k.updateTuioObject(w);
                }
              } else {
                let w = new me(this._currentTime, f, g, S, v, _, M, y, b);
                this._tuioObjects.set(f, w);
                for (let k of this._tuioListeners)
                  k.addTuioObject(w);
              }
          }
          for (let o of this._tuioListeners)
            o.refresh(this._currentTime);
        }
        this._objectSetMessages = [], this._objectAliveMessage = null;
      }
    }
  }
  on2Dcur(i) {
    let n = i.args[0];
    if (n === "set")
      this._cursorSetMessages.push(i);
    else if (n === "alive")
      this._cursorAliveMessage = i;
    else if (n === "fseq") {
      let u = Number(i.args[1]);
      if (this.updateFrame(u)) {
        if (this._cursorAliveMessage !== null) {
          let d = new Set(this._tuioCursors.keys()), l = new Set(this._cursorAliveMessage.args.slice(1).map((o) => Number(o))), p = new Set([...d].filter((o) => !l.has(o)));
          for (let o of p) {
            let f = this._tuioCursors.get(o);
            if (f) {
              f.remove(this._currentTime);
              for (let g of this._tuioListeners)
                g.removeTuioCursor(f);
              this._tuioCursors.delete(o), this._freeCursorIds.push(f.cursorId);
            }
          }
          this._freeCursorIds.sort();
          for (let o of this._cursorSetMessages) {
            const f = Number(o.args[1]), g = new E(Number(o.args[2]), Number(o.args[3])), S = new E(Number(o.args[4]), Number(o.args[5])), v = Number(o.args[6]);
            if (l.has(f))
              if (d.has(f)) {
                let _ = this._tuioCursors.get(f);
                if (_ != null && _.hasChanged(g, S, v)) {
                  _ == null || _.update(this._currentTime, g, S, v);
                  for (let M of this._tuioListeners)
                    M.updateTuioCursor(_);
                }
              } else {
                let _ = this._tuioCursors.size;
                this._freeCursorIds.length > 0 && (_ = this._freeCursorIds[0], this._freeCursorIds.splice(0, 1));
                let M = new ve(this._currentTime, f, _, g, S, v);
                this._tuioCursors.set(f, M);
                for (let y of this._tuioListeners)
                  y.addTuioCursor(M);
              }
          }
          for (let o of this._tuioListeners)
            o.refresh(this._currentTime);
        }
        this._cursorSetMessages = [], this._cursorAliveMessage = null;
      }
    }
  }
  on2Dblb(i) {
    let n = i.args[0];
    if (n === "set")
      this._blobSetMessages.push(i);
    else if (n === "alive")
      this._blobAliveMessage = i;
    else if (n === "fseq") {
      let u = Number(i.args[1]);
      if (this.updateFrame(u)) {
        if (this._blobAliveMessage !== null) {
          let d = new Set(this._tuioBlobs.keys()), l = new Set(this._blobAliveMessage.args.slice(1).map((o) => Number(o))), p = new Set([...d].filter((o) => !l.has(o)));
          for (let o of p) {
            let f = this._tuioBlobs.get(o);
            if (f) {
              f.remove(this._currentTime);
              for (let g of this._tuioListeners)
                g.removeTuioBlob(f);
              this._tuioBlobs.delete(o), this._freeBlobIds.push(f.blobId);
            }
          }
          this._freeBlobIds.sort();
          for (let o of this._blobSetMessages) {
            const f = Number(o.args[1]), g = new E(Number(o.args[2]), Number(o.args[3])), S = Number(o.args[4]), v = new E(Number(o.args[5]), Number(o.args[6])), _ = Number(o.args[7]), M = new E(Number(o.args[8]), Number(o.args[9])), y = Number(o.args[10]), b = Number(o.args[11]), w = Number(o.args[12]);
            if (l.has(f))
              if (d.has(f)) {
                let k = this._tuioBlobs.get(f);
                if (k != null && k.hasChanged(g, S, v, _, M, y, b, w)) {
                  k == null || k.update(this._currentTime, g, S, v, _, M, y, b, w);
                  for (let I of this._tuioListeners)
                    I.updateTuioBlob(k);
                }
              } else {
                let k = this._tuioBlobs.size;
                this._freeBlobIds.length > 0 && (k = this._freeBlobIds[0], this._freeBlobIds.splice(0, 1));
                let I = new be(this._currentTime, f, k, g, S, v, _, M, y, b, w);
                this._tuioBlobs.set(f, I);
                for (let j of this._tuioListeners)
                  j.addTuioBlob(I);
              }
          }
          for (let o of this._tuioListeners)
            o.refresh(this._currentTime);
        }
        this._blobSetMessages = [], this._blobAliveMessage = null;
      }
    }
  }
}
class we {
  constructor(i, n) {
    a(this, "_startTime");
    a(this, "_currentTime");
    a(this, "_sessionId");
    a(this, "_token");
    a(this, "_pointer");
    a(this, "_bounds");
    a(this, "_symbol");
    a(this, "_state");
    this._startTime = i, this._currentTime = i, this._sessionId = n, this._token = null, this._pointer = null, this._bounds = null, this._symbol = null, this._state = T.Added;
  }
  _update(i) {
    this._currentTime = i, this._state = T.Idle;
  }
  get startTime() {
    return this._startTime;
  }
  get currentTime() {
    return this._currentTime;
  }
  get sessionId() {
    return this._sessionId;
  }
  get token() {
    return this._token;
  }
  get pointer() {
    return this._pointer;
  }
  get bounds() {
    return this._bounds;
  }
  get symbol() {
    return this._symbol;
  }
  get state() {
    return this._state;
  }
  setTuioToken(i) {
    this._token = i, this._state = T.Added;
  }
  setTuioPointer(i) {
    this._pointer = i, this._state = T.Added;
  }
  setTuioBounds(i) {
    this._bounds = i, this._state = T.Added;
  }
  setTuioSymbol(i) {
    this._symbol = i, this._state = T.Added;
  }
  containsTuioToken() {
    return this._token !== null;
  }
  containsTuioPointer() {
    return this._pointer !== null;
  }
  containsTuioBounds() {
    return this._bounds !== null;
  }
  containsTuioSymbol() {
    return this._symbol !== null;
  }
  containsNewTuioToken() {
    return this._token !== null && this._token._state === T.Added;
  }
  containsNewTuioPointer() {
    return this._pointer !== null && this._pointer._state === T.Added;
  }
  containsNewTuioBounds() {
    return this._bounds !== null && this._bounds._state === T.Added;
  }
  containsNewTuioSymbol() {
    return this._symbol !== null && this._symbol._state === T.Added;
  }
  _remove(i) {
    this._currentTime = i, this._token !== null && this._token._remove(i), this._pointer !== null && this._pointer._remove(i), this._bounds !== null && this._bounds._remove(i), this._symbol !== null && this._symbol._remove(i), this._state = T.Removed;
  }
}
class wt {
  constructor(i, n) {
    a(this, "_startTime");
    a(this, "_position");
    this._startTime = i, this._position = n;
  }
  get startTime() {
    return this._startTime;
  }
  get position() {
    return this._position;
  }
  set position(i) {
    this._position = i;
  }
}
class ht extends wt {
  constructor(n, u, d, l, p, o, f, g) {
    super(n, d);
    a(this, "MAX_PATH_LENGTH", 128);
    a(this, "_currentTime");
    a(this, "_container");
    a(this, "_angle");
    a(this, "_velocity");
    a(this, "_mVel");
    a(this, "_aVel");
    a(this, "_mAcc");
    a(this, "_rAcc");
    a(this, "_state");
    a(this, "_prevPoints");
    this._currentTime = n, this._container = u, this._angle = l, this._velocity = p, this._mVel = p.length(), this._aVel = o, this._mAcc = f, this._rAcc = g, this._state = T.Added, this._prevPoints = [], this._prevPoints.push(new wt(n, d));
  }
  get currentTime() {
    return this._currentTime;
  }
  get container() {
    return this._container;
  }
  get sessionId() {
    return this.container.sessionId;
  }
  get angle() {
    return this._angle;
  }
  get velocity() {
    return this._velocity;
  }
  get mVel() {
    return this._mVel;
  }
  get aVel() {
    return this._aVel;
  }
  get mAcc() {
    return this._mAcc;
  }
  get rAcc() {
    return this._rAcc;
  }
  get state() {
    return this._state;
  }
  get path() {
    return this._prevPoints;
  }
  _updateComponent(n, u, d, l, p, o, f) {
    this._currentTime = n, this.position = u, this._angle = d, this._velocity = l, this._mVel = l.length(), this._aVel = p, this._mAcc = o, this._rAcc = f, this._prevPoints.push(new wt(n, u)), this._prevPoints.length > this.MAX_PATH_LENGTH && this._prevPoints.shift(), this._mAcc > 0 ? this._state = T.Accelerating : this._mAcc < 0 ? this._state = T.Decelerating : this._rAcc !== 0 && this._state === T.Stopped && (this._state = T.Rotating), this._container._update(n);
  }
  _remove(n) {
    this._currentTime = n, this._state = T.Removed;
  }
}
class ye extends ht {
  constructor(n, u, d, l, p, o, f, g, S, v) {
    super(n, u, p, o, f, g, S, v);
    a(this, "_tuId");
    a(this, "_cId");
    this._tuId = d, this._cId = l;
  }
  get tuId() {
    return this._tuId;
  }
  get cId() {
    return this._cId;
  }
  _hasChanged(n, u, d, l, p, o, f, g) {
    return !(n === this.tuId && u === this.cId && d === this.position && l === this.angle && p === this.velocity && o === this.aVel && f === this.mAcc && g === this.rAcc);
  }
  _update(n, u, d, l, p, o, f, g, S) {
    this._updateComponent(n, l, p, o, f, g, S), this._tuId = u, this._cId = d;
  }
}
class ke extends ht {
  constructor(n, u, d, l, p, o, f, g, S, v, _, M, y) {
    super(n, u, p, o, v, 0, M, 0);
    a(this, "_tuId");
    a(this, "_cId");
    a(this, "_shear");
    a(this, "_radius");
    a(this, "_press");
    a(this, "_pVel");
    a(this, "_pAcc");
    this._tuId = d, this._cId = l, this._shear = f, this._radius = g, this._press = S, this._pVel = _, this._pAcc = y;
  }
  get tuId() {
    return this._tuId;
  }
  get cId() {
    return this._cId;
  }
  get shear() {
    return this._shear;
  }
  get radius() {
    return this._radius;
  }
  get press() {
    return this._press;
  }
  get pVel() {
    return this._pVel;
  }
  get pAcc() {
    return this._pAcc;
  }
  _hasChanged(n, u, d, l, p, o, f, g, S, v, _) {
    return !(n === this.tuId && u === this.cId && d === this.position && l === this.angle && p === this.shear && o === this.radius && f === this.press && g === this.velocity && S === this.pVel && v === this.mAcc && _ === this.pAcc);
  }
  _update(n, u, d, l, p, o, f, g, S, v, _, M) {
    this._updateComponent(n, l, p, S, 0, _, 0), this._tuId = u, this._cId = d, this._shear = o, this._radius = f, this._press = g, this._pVel = v, this._pAcc = M;
  }
}
class Se extends ht {
  constructor(n, u, d, l, p, o, f, g, S, v) {
    super(n, u, d, l, f, g, S, v);
    a(this, "_size");
    a(this, "_area");
    this._size = p, this._area = o;
  }
  get size() {
    return this._size;
  }
  get area() {
    return this._area;
  }
  _hasChanged(n, u, d, l, p, o, f, g) {
    return !(n === this.position && u === this.angle && d === this.size && l === this.area && p === this.velocity && o === this.aVel && f === this.mAcc && g === this.rAcc);
  }
  _update(n, u, d, l, p, o, f, g, S) {
    this._updateComponent(n, u, d, o, f, g, S), this._size = l, this._area = p;
  }
}
class Ie extends ht {
  constructor(n, u, d, l, p, o) {
    super(n, u, new E(0, 0), 0, new E(0, 0), 0, 0, 0);
    a(this, "_tuId");
    a(this, "_cId");
    a(this, "_group");
    a(this, "_data");
    this._tuId = d, this._cId = l, this._group = p, this._data = o;
  }
  get tuId() {
    return this._tuId;
  }
  get cId() {
    return this._cId;
  }
  get group() {
    return this._group;
  }
  get data() {
    return this._data;
  }
  _hasChanged(n, u, d, l) {
    return !(n === this.tuId && u === this.cId && d === this.group && l === this.data);
  }
  _update(n, u, d, l, p) {
    this._updateComponent(n, new E(0, 0), 0, new E(0, 0), 0, 0, 0), this._tuId = u, this._cId = d, this._group = l, this._data = p;
  }
}
class Te {
  constructor(i) {
    a(this, "_tuioReceiver");
    a(this, "_tuioListeners");
    a(this, "_tuioObjects", /* @__PURE__ */ new Map());
    a(this, "_frmMessage", null);
    a(this, "_otherMessages", []);
    a(this, "_bundleFrameId", 0);
    a(this, "_nextFrameId", 0);
    a(this, "_prevFrameId", 0);
    a(this, "_prevFrameTime", new Q(0, 0));
    a(this, "_dim", null);
    a(this, "_source", null);
    this._tuioReceiver = i, this._tuioReceiver.addMessageListener("/tuio2/frm", this._onFrm.bind(this)), this._tuioReceiver.addMessageListener("/tuio2/alv", this._onAlv.bind(this)), this._tuioReceiver.addMessageListener("/tuio2/tok", this._onOther.bind(this)), this._tuioReceiver.addMessageListener("/tuio2/ptr", this._onOther.bind(this)), this._tuioReceiver.addMessageListener("/tuio2/bnd", this._onOther.bind(this)), this._tuioReceiver.addMessageListener("/tuio2/sym", this._onOther.bind(this)), this._tuioListeners = [];
  }
  _initialize_fields() {
    this._tuioObjects = /* @__PURE__ */ new Map(), this._frmMessage = null, this._otherMessages = [], this._bundleFrameId = 0, this._nextFrameId = 0, this._prevFrameId = 0, this._dim = null, this._source = null, this._prevFrameTime = new Q(0, 0);
  }
  connect() {
    this._initialize_fields(), this._tuioReceiver.connect();
  }
  disconnect() {
    this._tuioReceiver.disconnect();
  }
  get dim() {
    return this._dim;
  }
  get source() {
    return this._source;
  }
  addTuioListener(i) {
    this._tuioListeners.push(i);
  }
  getTuioPointerList() {
    let i = [];
    for (let [n, u] of this._tuioObjects)
      u.containsTuioPointer() && i.push(u._pointer);
    return i;
  }
  getTuioTokenList() {
    let i = [];
    for (let [n, u] of this._tuioObjects)
      u.containsTuioToken() && i.push(u._token);
    return i;
  }
  getTuioBoundsList() {
    let i = [];
    for (let [n, u] of this._tuioObjects)
      u.containsTuioBounds() && i.push(u._bounds);
    return i;
  }
  getTuioSymbolList() {
    let i = [];
    for (let [n, u] of this._tuioObjects)
      u.containsTuioSymbol() && i.push(u._symbol);
    return i;
  }
  removeTuioListener(i) {
    let n = this._tuioListeners.indexOf(i);
    n > -1 && this._tuioListeners.splice(n, 1);
  }
  removeAllTuioListeners() {
    this._tuioListeners = [];
  }
  _onFrm(i) {
    this._bundleFrameId = Number(i.args[0]), this._bundleFrameId > this._nextFrameId && (this._otherMessages = [], this._nextFrameId = this._bundleFrameId, this._frmMessage = i);
  }
  _onOther(i) {
    this._bundleFrameId === this._nextFrameId && this._otherMessages.push(i);
  }
  _onAlv(i) {
    if (this._frmMessage === null || this._bundleFrameId !== this._nextFrameId)
      return;
    const n = Number(this._frmMessage.args[0]), u = BigInt(String(this._frmMessage.args[1])), d = Number(this._frmMessage.args[2]), l = String(this._frmMessage.args[3]);
    let p = Q.fromOscTime(u);
    if (n >= this._prevFrameId || n === 0 || p.subtract(this._prevFrameTime).getTotalMilliseconds() >= 1e3) {
      this._dim = d, this._source = l;
      let o = new Set(this._tuioObjects.keys()), f = new Set(i.args.map((y) => Number(y))), g = new Set([...f].filter((y) => !o.has(y))), S = new Set([...o].filter((y) => !f.has(y))), v = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
      for (let y of g) {
        let b = new we(p, y);
        this._tuioObjects.set(y, b);
      }
      for (let y of S) {
        let b = this._tuioObjects.get(y);
        b && (M.add(b), b == null || b._remove(p), this._tuioObjects.delete(y));
      }
      for (let y of this._otherMessages) {
        let b = y.args;
        if (y.address === "/tuio2/tok") {
          let [w, k, I, j, H, A, ...B] = b;
          w = Number(w), k = Number(k), I = Number(I);
          const P = new E(Number(j), Number(H));
          if (A = Number(A), f.has(w)) {
            B = B.concat(new Array(5 - B.length).fill(0));
            let [z, W, D, q, F] = B;
            const R = new E(Number(z), Number(W));
            D = Number(D), q = Number(q), F = Number(F);
            let N = this._tuioObjects.get(w);
            (N == null ? void 0 : N.token) === null ? (v.add(N), N.setTuioToken(new ye(p, N, k, I, P, A, R, D, q, F))) : N != null && N.token._hasChanged(k, I, P, A, R, D, q, F) && (_.add(N), N.token._update(p, k, I, P, A, R, D, q, F));
          }
        } else if (y.address === "/tuio2/ptr") {
          let [w, k, I, j, H, A, B, P, z, ...W] = b;
          w = Number(w), k = Number(k), I = Number(I);
          const D = new E(Number(j), Number(H));
          if (A = Number(A), B = Number(B), P = Number(P), z = Number(z), f.has(w)) {
            W = W.concat(new Array(5 - W.length).fill(0));
            let [q, F, R, N, G] = W;
            const x = new E(Number(q), Number(F));
            R = Number(R), N = Number(N), G = Number(G);
            let U = this._tuioObjects.get(w);
            (U == null ? void 0 : U.pointer) === null ? (v.add(U), U.setTuioPointer(new ke(p, U, k, I, D, A, B, P, z, x, R, N, G))) : U != null && U.pointer._hasChanged(k, I, D, A, B, P, z, x, R, N, G) && (_.add(U), U.pointer._update(p, k, I, D, A, B, P, z, x, R, N, G));
          }
        } else if (y.address === "/tuio2/bnd") {
          let [w, k, I, j, H, A, B, ...P] = b;
          w = Number(w);
          const z = new E(Number(k), Number(I));
          j = Number(j);
          const W = new E(Number(H), Number(A));
          if (B = Number(B), f.has(w)) {
            P = P.concat(new Array(5 - P.length).fill(0));
            let [D, q, F, R, N] = P;
            const G = new E(Number(D), Number(q));
            F = Number(F), R = Number(R), N = Number(N);
            let x = this._tuioObjects.get(w);
            (x == null ? void 0 : x.bounds) === null ? (v.add(x), x.setTuioBounds(new Se(p, x, z, j, W, B, G, F, R, N))) : x != null && x.bounds._hasChanged(z, j, W, B, G, F, R, N) && (_.add(x), x.bounds._update(p, z, j, W, B, G, F, R, N));
          }
        } else if (y.address === "/tuio2/sym") {
          let [w, k, I, j, H] = b;
          if (w = Number(w), k = Number(k), I = Number(I), j = String(j), H = String(H), f.has(w)) {
            let A = this._tuioObjects.get(w);
            (A == null ? void 0 : A.symbol) === null ? (v.add(A), A.setTuioSymbol(new Ie(p, A, k, I, j, H))) : A != null && A.symbol._hasChanged(k, I, j, H) && (_.add(A), A.symbol._update(p, k, I, j, H));
          }
        }
      }
      for (let y of v)
        for (let b of this._tuioListeners)
          b.tuioAdd(y);
      for (let y of _)
        for (let b of this._tuioListeners)
          b.tuioUpdate(y);
      for (let y of M)
        for (let b of this._tuioListeners)
          b.tuioRemove(y);
      for (let y of this._tuioListeners)
        y.tuioRefresh(p);
    }
    this._prevFrameTime = p, this._prevFrameId = n, this._frmMessage = null;
  }
}
class Ee {
  constructor(i) {
    a(this, "_ws");
    a(this, "_scapeEngineAddress");
    a(this, "_scapeEnginePort", 3330);
    a(this, "_sxmConfig");
    a(this, "_eventHandlers", []);
    a(this, "_defaultMqttUrl", "broker.hivemq.com");
    this._ws = null, this._scapeEngineAddress = i, this._sxmConfig = { roomId: "", mqttUrl: "" };
  }
  set onConfigChange(i) {
    this._eventHandlers.push(i);
  }
  connect() {
    this._ws = new WebSocket(`ws://${this._scapeEngineAddress}:${this._scapeEnginePort}`), this._ws.onmessage = (i) => this.parseSxmConfig(i), this._ws.onclose = (i) => {
      console.log(i);
    };
  }
  parseSxmConfig(i) {
    const n = JSON.parse(i.data);
    switch (console.log(n), n.type) {
      case "server": {
        this._sxmConfig.mqttUrl = n.value === "" ? this._defaultMqttUrl : n.value;
        break;
      }
      case "subscribe": {
        this._sxmConfig.roomId = n.topic.split("/")[0];
        break;
      }
    }
    this._eventHandlers.forEach((u) => {
      u(this._sxmConfig);
    });
  }
  disconnect() {
    var i;
    (i = this._ws) == null || i.close();
  }
}
export {
  Ee as ScapeXMobile,
  be as Tuio11Blob,
  Oe as Tuio11Client,
  ve as Tuio11Cursor,
  me as Tuio11Object,
  Se as Tuio20Bounds,
  Te as Tuio20Client,
  we as Tuio20Object,
  ke as Tuio20Pointer,
  Ie as Tuio20Symbol,
  ye as Tuio20Token,
  Ce as WebsocketTuioReceiver
};
//# sourceMappingURL=tuio-client.es.js.map
