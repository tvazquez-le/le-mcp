if (window.Evergage && window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    try {
        window.SalesforceInteractions.log.warn("Aborting SDK load since the SalesforceInteractions SDK was already found on this page.");
    } catch(e) {}
} else {
window.evergageBeaconParseTimeStart = (new Date().getTime());
var Evergage = (function (exports) {
  'use strict';

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var js_cookie = createCommonjsModule(function (module, exports) {
    (function (factory) {
      var registeredInModuleLoader;
      {
        module.exports = factory();
        registeredInModuleLoader = true;
      }
      if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
          window.Cookies = OldCookies;
          return api;
        };
      }
    })(function () {
      function extend() {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
          var attributes = arguments[i];
          for (var key in attributes) {
            result[key] = attributes[key];
          }
        }
        return result;
      }
      function decode(s) {
        return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      function init(converter) {
        function api() {}
        function set(key, value, attributes) {
          if (typeof document === 'undefined') {
            return;
          }
          attributes = extend({
            path: '/'
          }, api.defaults, attributes);
          if (typeof attributes.expires === 'number') {
            attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
          }

          // We're using "expires" because "max-age" is not supported by IE
          attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
          try {
            var result = JSON.stringify(value);
            if (/^[\{\[]/.test(result)) {
              value = result;
            }
          } catch (e) {}
          value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
          key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var stringifiedAttributes = '';
          for (var attributeName in attributes) {
            if (!attributes[attributeName]) {
              continue;
            }
            stringifiedAttributes += '; ' + attributeName;
            if (attributes[attributeName] === true) {
              continue;
            }

            // Considers RFC 6265 section 5.2:
            // ...
            // 3.  If the remaining unparsed-attributes contains a %x3B (";")
            //     character:
            // Consume the characters of the unparsed-attributes up to,
            // not including, the first %x3B (";") character.
            // ...
            stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
          }
          return document.cookie = key + '=' + value + stringifiedAttributes;
        }
        function get(key, json) {
          if (typeof document === 'undefined') {
            return;
          }
          var jar = {};
          // To prevent the for loop in the first place assign an empty array
          // in case there are no cookies at all.
          var cookies = document.cookie ? document.cookie.split('; ') : [];
          var i = 0;
          for (; i < cookies.length; i++) {
            var parts = cookies[i].split('=');
            var cookie = parts.slice(1).join('=');
            if (!json && cookie.charAt(0) === '"') {
              cookie = cookie.slice(1, -1);
            }
            try {
              var name = decode(parts[0]);
              cookie = (converter.read || converter)(cookie, name) || decode(cookie);
              if (json) {
                try {
                  cookie = JSON.parse(cookie);
                } catch (e) {}
              }
              jar[name] = cookie;
              if (key === name) {
                break;
              }
            } catch (e) {}
          }
          return key ? jar[key] : jar;
        }
        api.set = set;
        api.get = function (key) {
          return get(key, false /* read as raw */);
        };
        api.getJSON = function (key) {
          return get(key, true /* read as json */);
        };
        api.remove = function (key, attributes) {
          set(key, '', extend(attributes, {
            expires: -1
          }));
        };
        api.defaults = {};
        api.withConverter = init;
        return api;
      }
      return init(function () {});
    });
  });

  /* MIT https://github.com/kenwheeler/cash */
  var doc = document,
    win = window,
    docEle = doc.documentElement,
    createElement = doc.createElement.bind(doc),
    div = createElement('div'),
    table = createElement('table'),
    tbody = createElement('tbody'),
    tr = createElement('tr'),
    isArray = Array.isArray,
    ArrayProtoType = Array.prototype,
    filter = ArrayProtoType.filter,
    indexOf = ArrayProtoType.indexOf,
    map = ArrayProtoType.map,
    push = ArrayProtoType.push,
    slice = ArrayProtoType.slice,
    some = ArrayProtoType.some,
    splice = ArrayProtoType.splice;
  var idRe = /^#[\w-]*$/,
    classRe = /^\.[\w-]*$/,
    htmlRe = /<.+>/,
    tagRe = /^\w+$/;
  // @require ./variables.ts
  function find(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : doc;
    return !isDocument(context) && !isElement(context) ? [] : classRe.test(selector) ? context.getElementsByClassName(selector.slice(1)) : tagRe.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
  }
  // @require ./find.ts
  // @require ./variables.ts
  var Cash = /*#__PURE__*/function () {
    function Cash(selector) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : doc;
      _classCallCheck(this, Cash);
      if (!selector) return;
      if (isCash(selector)) return selector;
      var eles = selector;
      if (isString(selector)) {
        var ctx = isCash(context) ? context[0] : context;
        eles = idRe.test(selector) ? ctx.getElementById(selector.slice(1)) : htmlRe.test(selector) ? parseHTML(selector) : find(selector, ctx);
        if (!eles) return;
      } else if (isFunction(selector)) {
        return this.ready(selector); //FIXME: `fn.ready` is not included in `core`, but it's actually a core functionality
      }
      if (eles.nodeType || eles === win) eles = [eles];
      this.length = eles.length;
      for (var i = 0, l = this.length; i < l; i++) {
        this[i] = eles[i];
      }
    }
    _createClass(Cash, [{
      key: "init",
      value: function init(selector, context) {
        return new Cash(selector, context);
      }
    }]);
    return Cash;
  }();
  var fn = Cash.prototype,
    cash = fn.init;
  cash.fn = cash.prototype = fn; // Ensuring that `cash () instanceof cash`
  fn.length = 0;
  fn.splice = splice; // Ensuring a cash collection gets printed as array-like in Chrome's devtools
  if (typeof Symbol === 'function') {
    // Ensuring a cash collection is iterable
    fn[Symbol['iterator']] = ArrayProtoType[Symbol['iterator']];
  }
  fn.map = function (callback) {
    return cash(map.call(this, function (ele, i) {
      return callback.call(ele, i, ele);
    }));
  };
  fn.slice = function (start, end) {
    return cash(slice.call(this, start, end));
  };
  var dashAlphaRe = /-([a-z])/g;
  function camelCase(str) {
    return str.replace(dashAlphaRe, function (match, letter) {
      return letter.toUpperCase();
    });
  }
  cash.camelCase = camelCase;
  function each(arr, callback, reverse) {
    if (reverse) {
      var i = arr.length;
      while (i--) {
        if (callback.call(arr[i], i, arr[i]) === false) return arr;
      }
    } else {
      for (var _i = 0, l = arr.length; _i < l; _i++) {
        if (callback.call(arr[_i], _i, arr[_i]) === false) return arr;
      }
    }
    return arr;
  }
  cash.each = each;
  fn.each = function (callback) {
    return each(this, callback);
  };
  fn.removeProp = function (prop) {
    return this.each(function (i, ele) {
      delete ele[prop];
    });
  };
  cash.extend = function (target) {
    for (var _len = arguments.length, objs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      objs[_key - 1] = arguments[_key];
    }
    var length = arguments.length;
    for (var i = length < 2 ? 0 : 1; i < length; i++) {
      for (var key in arguments[i]) {
        target[key] = arguments[i][key];
      }
    }
    return target;
  };
  fn.extend = function (plugins) {
    return cash.extend(fn, plugins);
  };
  cash.guid = 1;
  function matches(ele, selector) {
    var matches = ele && (ele['matches'] || ele['webkitMatchesSelector'] || ele['msMatchesSelector']);
    return !!matches && matches.call(ele, selector);
  }
  cash.matches = matches;
  function isCash(x) {
    return x instanceof Cash;
  }
  function isWindow(x) {
    return !!x && x === x.window;
  }
  function isDocument(x) {
    return !!x && x.nodeType === 9;
  }
  function isElement(x) {
    return !!x && x.nodeType === 1;
  }
  function isFunction(x) {
    return typeof x === 'function';
  }
  function isString(x) {
    return typeof x === 'string';
  }
  function isUndefined(x) {
    return x === undefined;
  }
  function isNull(x) {
    return x === null;
  }
  function isNumeric(x) {
    return !isNaN(parseFloat(x)) && isFinite(x);
  }
  cash.isWindow = isWindow;
  cash.isFunction = isFunction;
  cash.isString = isString;
  cash.isNumeric = isNumeric;
  cash.isArray = isArray;
  fn.prop = function (prop, value) {
    if (!prop) return;
    if (isString(prop)) {
      if (arguments.length < 2) return this[0] && this[0][prop];
      return this.each(function (i, ele) {
        ele[prop] = value;
      });
    }
    for (var key in prop) {
      this.prop(key, prop[key]);
    }
    return this;
  };
  fn.get = function (index) {
    if (isUndefined(index)) return slice.call(this);
    return this[index < 0 ? index + this.length : index];
  };
  fn.eq = function (index) {
    return cash(this.get(index));
  };
  fn.first = function () {
    return this.eq(0);
  };
  fn.last = function () {
    return this.eq(-1);
  };
  // @require ./matches.ts
  // @require ./type_checking.ts
  function getCompareFunction(comparator) {
    return isString(comparator) ? function (i, ele) {
      return matches(ele, comparator);
    } : isFunction(comparator) ? comparator : isCash(comparator) ? function (i, ele) {
      return comparator.is(ele);
    } : !comparator ? function () {
      return false;
    } : function (i, ele) {
      return ele === comparator;
    };
  }
  fn.filter = function (comparator) {
    var compare = getCompareFunction(comparator);
    return cash(filter.call(this, function (ele, i) {
      return compare.call(ele, i, ele);
    }));
  };
  // @require collection/filter.ts
  function filtered(collection, comparator) {
    return !comparator ? collection : collection.filter(comparator);
  }
  // @require ./type_checking.ts
  var splitValuesRe = /\S+/g;
  function getSplitValues(str) {
    return isString(str) ? str.match(splitValuesRe) || [] : [];
  }
  fn.hasClass = function (cls) {
    return !!cls && some.call(this, function (ele) {
      return ele.classList.contains(cls);
    });
  };
  fn.removeAttr = function (attr) {
    var attrs = getSplitValues(attr);
    return this.each(function (i, ele) {
      each(attrs, function (i, a) {
        ele.removeAttribute(a);
      });
    });
  };
  function attr(attr, value) {
    if (!attr) return;
    if (isString(attr)) {
      if (arguments.length < 2) {
        if (!this[0]) return;
        var _value = this[0].getAttribute(attr);
        return isNull(_value) ? undefined : _value;
      }
      if (isUndefined(value)) return this;
      if (isNull(value)) return this.removeAttr(attr);
      return this.each(function (i, ele) {
        ele.setAttribute(attr, value);
      });
    }
    for (var key in attr) {
      this.attr(key, attr[key]);
    }
    return this;
  }
  fn.attr = attr;
  fn.toggleClass = function (cls, force) {
    var classes = getSplitValues(cls),
      isForce = !isUndefined(force);
    return this.each(function (i, ele) {
      each(classes, function (i, c) {
        if (isForce) {
          force ? ele.classList.add(c) : ele.classList.remove(c);
        } else {
          ele.classList.toggle(c);
        }
      });
    });
  };
  fn.addClass = function (cls) {
    return this.toggleClass(cls, true);
  };
  fn.removeClass = function (cls) {
    if (arguments.length) return this.toggleClass(cls, false);
    return this.attr('class', '');
  };
  function pluck(arr, prop, deep) {
    var plucked = [],
      isCallback = isFunction(prop);
    for (var i = 0, l = arr.length; i < l; i++) {
      if (isCallback) {
        var _val = prop(arr[i]);
        if (_val.length) push.apply(plucked, _val);
      } else {
        var _val2 = arr[i][prop];
        while (_val2 != null) {
          plucked.push(_val2);
          _val2 = deep ? _val2[prop] : null;
        }
      }
    }
    return plucked;
  }
  function unique(arr) {
    return arr.length > 1 ? filter.call(arr, function (item, index, self) {
      return indexOf.call(self, item) === index;
    }) : arr;
  }
  cash.unique = unique;
  fn.add = function (selector, context) {
    return cash(unique(this.get().concat(cash(selector, context).get())));
  };
  // @require core/type_checking.ts
  // @require core/variables.ts
  function computeStyle(ele, prop, isVariable) {
    if (!isElement(ele) || !prop) return;
    var style = win.getComputedStyle(ele, null);
    return prop ? isVariable ? style.getPropertyValue(prop) || undefined : style[prop] : style;
  }
  // @require ./compute_style.ts
  function computeStyleInt(ele, prop) {
    return parseInt(computeStyle(ele, prop), 10) || 0;
  }
  var cssVariableRe = /^--/;
  // @require ./variables.ts
  function isCSSVariable(prop) {
    return cssVariableRe.test(prop);
  }
  var prefixedProps = {},
    style = div.style,
    vendorsPrefixes = ['webkit', 'moz', 'ms'];
  function getPrefixedProp(prop) {
    var isVariable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isCSSVariable(prop);
    if (isVariable) return prop;
    if (!prefixedProps[prop]) {
      var propCC = camelCase(prop),
        propUC = "".concat(propCC[0].toUpperCase()).concat(propCC.slice(1)),
        props = "".concat(propCC, " ").concat(vendorsPrefixes.join("".concat(propUC, " "))).concat(propUC).split(' ');
      each(props, function (i, p) {
        if (p in style) {
          prefixedProps[prop] = p;
          return false;
        }
      });
    }
    return prefixedProps[prop];
  }
  cash.prefixedProp = getPrefixedProp;
  // @require core/type_checking.ts
  // @require ./is_css_variable.ts
  var numericProps = {
    animationIterationCount: true,
    columnCount: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    widows: true,
    zIndex: true
  };
  function getSuffixedValue(prop, value) {
    var isVariable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isCSSVariable(prop);
    return !isVariable && !numericProps[prop] && isNumeric(value) ? "".concat(value, "px") : value;
  }
  function css(prop, value) {
    if (isString(prop)) {
      var isVariable = isCSSVariable(prop);
      prop = getPrefixedProp(prop, isVariable);
      if (arguments.length < 2) return this[0] && computeStyle(this[0], prop, isVariable);
      if (!prop) return this;
      value = getSuffixedValue(prop, value, isVariable);
      return this.each(function (i, ele) {
        if (!isElement(ele)) return;
        if (isVariable) {
          ele.style.setProperty(prop, value);
        } else {
          ele.style[prop] = value;
        }
      });
    }
    for (var key in prop) {
      this.css(key, prop[key]);
    }
    return this;
  }
  fn.css = css;
  // @optional ./css.ts
  // @require core/camel_case.ts
  function getData(ele, key) {
    var value = ele.dataset[key] || ele.dataset[camelCase(key)];
    try {
      return JSON.parse(value);
    } catch (_a) {}
    return value;
  }
  // @require core/camel_case.ts
  function setData(ele, key, value) {
    try {
      value = JSON.stringify(value);
    } catch (_a) {}
    ele.dataset[camelCase(key)] = value;
  }
  function data(name, value) {
    if (!name) {
      if (!this[0]) return;
      var datas = {};
      for (var key in this[0].dataset) {
        datas[key] = getData(this[0], key);
      }
      return datas;
    }
    if (isString(name)) {
      if (arguments.length < 2) return this[0] && getData(this[0], name);
      return this.each(function (i, ele) {
        setData(ele, name, value);
      });
    }
    for (var _key2 in name) {
      this.data(_key2, name[_key2]);
    }
    return this;
  }
  fn.data = data;
  // @optional ./data.ts
  // @require css/helpers/compute_style_int.ts
  function getExtraSpace(ele, xAxis) {
    return computeStyleInt(ele, "border".concat(xAxis ? 'Left' : 'Top', "Width")) + computeStyleInt(ele, "padding".concat(xAxis ? 'Left' : 'Top')) + computeStyleInt(ele, "padding".concat(xAxis ? 'Right' : 'Bottom')) + computeStyleInt(ele, "border".concat(xAxis ? 'Right' : 'Bottom', "Width"));
  }
  each([true, false], function (i, outer) {
    each(['Width', 'Height'], function (i, prop) {
      var name = "".concat(outer ? 'outer' : 'inner').concat(prop);
      fn[name] = function (includeMargins) {
        if (!this[0]) return;
        if (isWindow(this[0])) return win[name];
        return this[0]["".concat(outer ? 'offset' : 'client').concat(prop)] + (includeMargins && outer ? computeStyleInt(this[0], "margin".concat(i ? 'Top' : 'Left')) + computeStyleInt(this[0], "margin".concat(i ? 'Bottom' : 'Right')) : 0);
      };
    });
  });
  each(['width', 'height'], function (index, prop) {
    fn[prop] = function (value) {
      if (!this[0]) return isUndefined(value) ? undefined : this;
      if (!arguments.length) {
        if (isWindow(this[0])) return this[0][camelCase("outer-".concat(prop))];
        return this[0].getBoundingClientRect()[prop] - getExtraSpace(this[0], !index);
      }
      var valueNumber = parseInt(value, 10);
      return this.each(function (i, ele) {
        if (!isElement(ele)) return;
        var boxSizing = computeStyle(ele, 'boxSizing');
        ele.style[prop] = getSuffixedValue(prop, valueNumber + (boxSizing === 'border-box' ? getExtraSpace(ele, !index) : 0));
      });
    };
  });
  // @optional ./inner_outer.ts
  // @optional ./normal.ts
  // @require css/helpers/compute_style.ts
  var defaultDisplay = {};
  function getDefaultDisplay(tagName) {
    if (defaultDisplay[tagName]) return defaultDisplay[tagName];
    var ele = createElement(tagName);
    doc.body.insertBefore(ele, null);
    var display = computeStyle(ele, 'display');
    doc.body.removeChild(ele);
    return defaultDisplay[tagName] = display !== 'none' ? display : 'block';
  }
  // @require css/helpers/compute_style.ts
  function isHidden(ele) {
    return computeStyle(ele, 'display') === 'none';
  }
  var displayProperty = '___cd';
  fn.toggle = function (force) {
    return this.each(function (i, ele) {
      var show = isUndefined(force) ? isHidden(ele) : force;
      if (show) {
        ele.style.display = ele[displayProperty] || '';
        if (isHidden(ele)) {
          ele.style.display = getDefaultDisplay(ele.tagName);
        }
      } else {
        ele[displayProperty] = computeStyle(ele, 'display');
        ele.style.display = 'none';
      }
    });
  };
  fn.hide = function () {
    return this.toggle(false);
  };
  fn.show = function () {
    return this.toggle(true);
  };
  // @optional ./hide.ts
  // @optional ./show.ts
  // @optional ./toggle.ts
  function hasNamespaces(ns1, ns2) {
    return !ns2 || !some.call(ns2, function (ns) {
      return ns1.indexOf(ns) < 0;
    });
  }
  var eventsNamespace = '___ce',
    eventsNamespacesSeparator = '.',
    eventsFocus = {
      focus: 'focusin',
      blur: 'focusout'
    },
    eventsHover = {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout'
    },
    eventsMouseRe = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
  // @require ./variables.ts
  function getEventNameBubbling(name) {
    return eventsHover[name] || eventsFocus[name] || name;
  }
  // @require ./variables.ts
  function getEventsCache(ele) {
    return ele[eventsNamespace] = ele[eventsNamespace] || {};
  }
  // @require core/guid.ts
  // @require events/helpers/get_events_cache.ts
  function addEvent(ele, name, namespaces, selector, callback) {
    callback.guid = callback.guid || cash.guid++;
    var eventCache = getEventsCache(ele);
    eventCache[name] = eventCache[name] || [];
    eventCache[name].push([namespaces, selector, callback]);
    ele.addEventListener(name, callback);
  }
  // @require ./variables.ts
  function parseEventName(eventName) {
    var parts = eventName.split(eventsNamespacesSeparator);
    return [parts[0], parts.slice(1).sort()]; // [name, namespace[]]
  }
  // @require ./get_events_cache.ts
  // @require ./has_namespaces.ts
  // @require ./parse_event_name.ts
  function removeEvent(ele, name, namespaces, selector, callback) {
    var cache = getEventsCache(ele);
    if (!name) {
      for (name in cache) {
        removeEvent(ele, name, namespaces, selector, callback);
      }
    } else if (cache[name]) {
      cache[name] = cache[name].filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
          ns = _ref2[0],
          sel = _ref2[1],
          cb = _ref2[2];
        if (callback && cb.guid !== callback.guid || !hasNamespaces(ns, namespaces) || selector && selector !== sel) return true;
        ele.removeEventListener(name, cb);
      });
    }
  }
  fn.off = function (eventFullName, selector, callback) {
    var _this = this;
    if (isUndefined(eventFullName)) {
      this.each(function (i, ele) {
        removeEvent(ele);
      });
    } else if (!isString(eventFullName)) {
      for (var key in eventFullName) {
        this.off(key, eventFullName[key]);
      }
    } else {
      if (isFunction(selector)) {
        callback = selector;
        selector = '';
      }
      each(getSplitValues(eventFullName), function (i, eventFullName) {
        var _parseEventName = parseEventName(getEventNameBubbling(eventFullName)),
          _parseEventName2 = _slicedToArray(_parseEventName, 2),
          name = _parseEventName2[0],
          namespaces = _parseEventName2[1];
        _this.each(function (i, ele) {
          removeEvent(ele, name, namespaces, selector, callback);
        });
      });
    }
    return this;
  };
  function on(eventFullName, selector, callback, _one) {
    var _this2 = this;
    if (!isString(eventFullName)) {
      for (var key in eventFullName) {
        this.on(key, selector, eventFullName[key]);
      }
      return this;
    }
    if (isFunction(selector)) {
      callback = selector;
      selector = '';
    }
    each(getSplitValues(eventFullName), function (i, eventFullName) {
      var _parseEventName3 = parseEventName(getEventNameBubbling(eventFullName)),
        _parseEventName4 = _slicedToArray(_parseEventName3, 2),
        name = _parseEventName4[0],
        namespaces = _parseEventName4[1];
      _this2.each(function (i, ele) {
        var finalCallback = function finalCallback(event) {
          if (event.namespace && !hasNamespaces(namespaces, event.namespace.split(eventsNamespacesSeparator))) return;
          var thisArg = ele;
          if (selector) {
            var target = event.target;
            while (!matches(target, selector)) {
              if (target === ele) return;
              target = target.parentNode;
              if (!target) return;
            }
            thisArg = target;
            event.___cd = true; // Delegate
          }
          if (event.___cd) {
            Object.defineProperty(event, 'currentTarget', {
              configurable: true,
              get: function get() {
                return thisArg;
              }
            });
          }
          var returnValue = callback.call(thisArg, event, event.data);
          if (_one) {
            removeEvent(ele, name, namespaces, selector, finalCallback);
          }
          if (returnValue === false) {
            event.preventDefault();
            event.stopPropagation();
          }
        };
        finalCallback.guid = callback.guid = callback.guid || cash.guid++;
        addEvent(ele, name, namespaces, selector, finalCallback);
      });
    });
    return this;
  }
  fn.on = on;
  function one(eventFullName, selector, callback) {
    return this.on(eventFullName, selector, callback, true);
  }
  fn.one = one;
  fn.ready = function (callback) {
    if (doc.readyState !== 'loading') {
      callback(cash);
    } else {
      doc.addEventListener('DOMContentLoaded', function () {
        callback(cash);
      });
    }
    return this;
  };
  fn.trigger = function (event, data) {
    if (isString(event)) {
      var _parseEventName5 = parseEventName(event),
        _parseEventName6 = _slicedToArray(_parseEventName5, 2),
        name = _parseEventName6[0],
        namespaces = _parseEventName6[1],
        type = eventsMouseRe.test(name) ? 'MouseEvents' : 'HTMLEvents';
      event = doc.createEvent(type);
      event.initEvent(name, true, true);
      event.namespace = namespaces.join(eventsNamespacesSeparator);
    }
    event.data = data;
    var isEventFocus = (event.type in eventsFocus);
    return this.each(function (i, ele) {
      if (isEventFocus && isFunction(ele[event.type])) {
        ele[event.type]();
      } else {
        ele.dispatchEvent(event);
      }
    });
  };
  // @optional ./off.ts
  // @optional ./on.ts
  // @optional ./one.ts
  // @optional ./ready.ts
  // @optional ./trigger.ts
  // @require core/pluck.ts
  // @require core/variables.ts
  function getValue(ele) {
    if (ele.multiple && ele.options) return pluck(filter.call(ele.options, function (option) {
      return option.selected && !option.disabled && !option.parentNode.disabled;
    }), 'value');
    return ele.value || '';
  }
  var queryEncodeSpaceRe = /%20/g;
  function queryEncode(prop, value) {
    return "&".concat(encodeURIComponent(prop), "=").concat(encodeURIComponent(value).replace(queryEncodeSpaceRe, '+'));
  }
  var skippableRe = /file|reset|submit|button|image/i,
    checkableRe = /radio|checkbox/i;
  fn.serialize = function () {
    var query = '';
    this.each(function (i, ele) {
      each(ele.elements || [ele], function (i, ele) {
        if (ele.disabled || !ele.name || ele.tagName === 'FIELDSET' || skippableRe.test(ele.type) || checkableRe.test(ele.type) && !ele.checked) return;
        var value = getValue(ele);
        if (!isUndefined(value)) {
          var values = isArray(value) ? value : [value];
          each(values, function (i, value) {
            query += queryEncode(ele.name, value);
          });
        }
      });
    });
    return query.slice(1);
  };
  function val(value) {
    if (isUndefined(value)) return this[0] && getValue(this[0]);
    return this.each(function (i, ele) {
      if (ele.tagName === 'SELECT') {
        var eleValue = isArray(value) ? value : isNull(value) ? [] : [value];
        each(ele.options, function (i, option) {
          option.selected = eleValue.indexOf(option.value) >= 0;
        });
      } else {
        ele.value = isNull(value) ? '' : value;
      }
    });
  }
  fn.val = val;
  fn.clone = function () {
    return this.map(function (i, ele) {
      return ele.cloneNode(true);
    });
  };
  fn.detach = function () {
    return this.each(function (i, ele) {
      if (ele.parentNode) {
        ele.parentNode.removeChild(ele);
      }
    });
  };
  var fragmentRe = /^\s*<(\w+)[^>]*>/,
    singleTagRe = /^\s*<(\w+)\s*\/?>(?:<\/\1>)?\s*$/;
  var containers = {
    '*': div,
    tr: tbody,
    td: tr,
    th: tr,
    thead: table,
    tbody: table,
    tfoot: table
  };
  function parseHTML(html) {
    if (!isString(html)) return [];
    if (singleTagRe.test(html)) return [createElement(RegExp.$1)];
    var fragment = fragmentRe.test(html) && RegExp.$1,
      container = containers[fragment] || containers['*'];
    container.innerHTML = html;
    return cash(container.childNodes).detach().get();
  }
  cash.parseHTML = parseHTML;
  fn.empty = function () {
    return this.each(function (i, ele) {
      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }
    });
  };
  function html(html) {
    if (isUndefined(html)) return this[0] && this[0].innerHTML;
    return this.each(function (i, ele) {
      ele.innerHTML = html;
    });
  }
  fn.html = html;
  fn.remove = function () {
    return this.detach().off();
  };
  function text(text) {
    if (isUndefined(text)) return this[0] ? this[0].textContent : '';
    return this.each(function (i, ele) {
      ele.textContent = text;
    });
  }
  fn.text = text;
  fn.unwrap = function () {
    this.parent().each(function (i, ele) {
      var $ele = cash(ele);
      $ele.replaceWith($ele.children());
    });
    return this;
  };
  fn.offset = function () {
    var ele = this[0];
    if (!ele) return;
    var rect = ele.getBoundingClientRect();
    return {
      top: rect.top + win.pageYOffset - docEle.clientTop,
      left: rect.left + win.pageXOffset - docEle.clientLeft
    };
  };
  fn.offsetParent = function () {
    return cash(this[0] && this[0].offsetParent);
  };
  fn.position = function () {
    var ele = this[0];
    if (!ele) return;
    return {
      left: ele.offsetLeft,
      top: ele.offsetTop
    };
  };
  fn.children = function (comparator) {
    return filtered(cash(unique(pluck(this, function (ele) {
      return ele.children;
    }))), comparator);
  };
  fn.contents = function () {
    return cash(unique(pluck(this, function (ele) {
      return ele.tagName === 'IFRAME' ? [ele.contentDocument] : ele.childNodes;
    })));
  };
  fn.find = function (selector) {
    return cash(unique(pluck(this, function (ele) {
      return find(selector, ele);
    })));
  };
  // @require core/variables.ts
  // @require collection/filter.ts
  // @require traversal/find.ts
  var HTMLCDATARe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    scriptTypeRe = /^$|^module$|\/(java|ecma)script/i,
    scriptAttributes = ['type', 'src', 'nonce', 'noModule'];
  function evalScripts(node, doc) {
    var collection = cash(node);
    collection.filter('script').add(collection.find('script')).each(function (i, ele) {
      if (scriptTypeRe.test(ele.type) && docEle.contains(ele)) {
        // The script type is supported // The element is attached to the DOM // Using `documentElement` for broader browser support
        var script = createElement('script');
        script.text = ele.textContent.replace(HTMLCDATARe, '');
        each(scriptAttributes, function (i, attr) {
          if (ele[attr]) script[attr] = ele[attr];
        });
        doc.head.insertBefore(script, null);
        doc.head.removeChild(script);
      }
    });
  }
  // @require ./eval_scripts.ts
  function insertElement(anchor, target, left, inside) {
    if (inside) {
      // prepend/append
      anchor.insertBefore(target, left ? anchor.firstElementChild : null);
    } else {
      // before/after
      anchor.parentNode.insertBefore(target, left ? anchor : anchor.nextElementSibling);
    }
    evalScripts(target, anchor.ownerDocument);
  }
  // @require ./insert_element.ts
  function insertSelectors(selectors, anchors, inverse, left, inside, reverseLoop1, reverseLoop2, reverseLoop3) {
    each(selectors, function (si, selector) {
      each(cash(selector), function (ti, target) {
        each(cash(anchors), function (ai, anchor) {
          var anchorFinal = inverse ? target : anchor,
            targetFinal = inverse ? anchor : target;
          insertElement(anchorFinal, !ai ? targetFinal : targetFinal.cloneNode(true), left, inside);
        }, reverseLoop3);
      }, reverseLoop2);
    }, reverseLoop1);
    return anchors;
  }
  fn.after = function () {
    return insertSelectors(arguments, this, false, false, false, true, true);
  };
  fn.append = function () {
    return insertSelectors(arguments, this, false, false, true);
  };
  fn.appendTo = function (selector) {
    return insertSelectors(arguments, this, true, false, true);
  };
  fn.before = function () {
    return insertSelectors(arguments, this, false, true);
  };
  fn.insertAfter = function (selector) {
    return insertSelectors(arguments, this, true, false, false, false, false, true);
  };
  fn.insertBefore = function (selector) {
    return insertSelectors(arguments, this, true, true);
  };
  fn.prepend = function () {
    return insertSelectors(arguments, this, false, true, true, true, true);
  };
  fn.prependTo = function (selector) {
    return insertSelectors(arguments, this, true, true, true, false, false, true);
  };
  fn.replaceWith = function (selector) {
    return this.before(selector).remove();
  };
  fn.replaceAll = function (selector) {
    cash(selector).replaceWith(this);
    return this;
  };
  fn.wrapAll = function (selector) {
    var structure = cash(selector),
      wrapper = structure[0];
    while (wrapper.children.length) wrapper = wrapper.firstElementChild;
    this.first().before(structure);
    return this.appendTo(wrapper);
  };
  fn.wrap = function (selector) {
    return this.each(function (i, ele) {
      var wrapper = cash(selector)[0];
      cash(ele).wrapAll(!i ? wrapper : wrapper.cloneNode(true));
    });
  };
  fn.wrapInner = function (selector) {
    return this.each(function (i, ele) {
      var $ele = cash(ele),
        contents = $ele.contents();
      contents.length ? contents.wrapAll(selector) : $ele.append(selector);
    });
  };
  fn.has = function (selector) {
    var comparator = isString(selector) ? function (i, ele) {
      return find(selector, ele).length;
    } : function (i, ele) {
      return ele.contains(selector);
    };
    return this.filter(comparator);
  };
  fn.is = function (comparator) {
    var compare = getCompareFunction(comparator);
    return some.call(this, function (ele, i) {
      return compare.call(ele, i, ele);
    });
  };
  fn.next = function (comparator, _all) {
    return filtered(cash(unique(pluck(this, 'nextElementSibling', _all))), comparator);
  };
  fn.nextAll = function (comparator) {
    return this.next(comparator, true);
  };
  fn.not = function (comparator) {
    var compare = getCompareFunction(comparator);
    return this.filter(function (i, ele) {
      return !compare.call(ele, i, ele);
    });
  };
  fn.parent = function (comparator) {
    return filtered(cash(unique(pluck(this, 'parentNode'))), comparator);
  };
  fn.index = function (selector) {
    var child = selector ? cash(selector)[0] : this[0],
      collection = selector ? this : cash(child).parent().children();
    return indexOf.call(collection, child);
  };
  fn.closest = function (comparator) {
    var filtered = this.filter(comparator);
    if (filtered.length) return filtered;
    var $parent = this.parent();
    if (!$parent.length) return filtered;
    return $parent.closest(comparator);
  };
  fn.parents = function (comparator) {
    return filtered(cash(unique(pluck(this, 'parentElement', true))), comparator);
  };
  fn.prev = function (comparator, _all) {
    return filtered(cash(unique(pluck(this, 'previousElementSibling', _all))), comparator);
  };
  fn.prevAll = function (comparator) {
    return this.prev(comparator, true);
  };
  fn.siblings = function (comparator) {
    return filtered(cash(unique(pluck(this, function (ele) {
      return cash(ele).parent().children().not(ele);
    }))), comparator);
  };

  function ownKeys$1(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$1(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) {
        _defineProperty$1(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$1(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$1(t) {
    var i = _toPrimitive$1(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
  }
  function _typeof$1(o) {
    "@babel/helpers - typeof";

    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$1(o);
  }
  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
    }
  }
  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey$1(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf$1(subClass, superClass);
  }
  function _getPrototypeOf$1(o) {
    _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$1(o);
  }
  function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf$1(o, p);
  }
  function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn$1(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized$1(self);
  }
  function _createSuper$1(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf$1(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf$1(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn$1(this, result);
    };
  }
  function _superPropBase$1(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf$1(object);
      if (object === null) break;
    }
    return object;
  }
  function _get$1() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get$1 = Reflect.get.bind();
    } else {
      _get$1 = function _get(target, property, receiver) {
        var base = _superPropBase$1(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get$1.apply(this, arguments);
  }
  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
  }
  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }
  function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }
  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function F() {};
        return {
          s: F,
          n: function n() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function s() {
        it = it.call(o);
      },
      n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e2) {
        didErr = true;
        err = _e2;
      },
      f: function f() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  // tslint:disable variable-name ban-types no-empty
  var levels = ['error', 'warn', 'info', 'debug', 'trace'];
  var Log = /*#__PURE__*/function () {
    function Log() {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      _classCallCheck$1(this, Log);
      this.console = window.console;
      this.level = level;
      this.prefix = prefix;
      this.buildLogFunctions();
    }
    _createClass$1(Log, [{
      key: "shouldLog",
      value: function shouldLog(level) {
        return level <= this.level;
      }
      /**
       * Sets the logging level
       *
       * @param level logging level to change the logger into
       */
    }, {
      key: "setLoggingLevel",
      value: function setLoggingLevel(level) {
        this.level = typeof level === 'string' ? levels.indexOf(level.toLowerCase()) + 1 : level || 0 /* NONE */;
        this.buildLogFunctions();
      }
    }, {
      key: "getLoggingLevel",
      value: function getLoggingLevel() {
        return this.level;
      }
      /**
       *
       * sets the logging level so that all log lines will be logged with as such
       *
       * `[INFO]({PREFIX}): ...`
       *
       * @param {string} prefix logging prefix
       */
    }, {
      key: "setPrefix",
      value: function setPrefix(prefix) {
        this.prefix = prefix;
        this.buildLogFunctions();
      }
    }, {
      key: "getPrefix",
      value: function getPrefix() {
        return this.prefix;
      }
    }, {
      key: "buildLogFunctions",
      value: function buildLogFunctions() {
        var _this = this;
        levels.forEach(function (value, i) {
          var level = levels[i];
          _this[level] = _this.shouldLog(i + 1) ? _this.getLogFn(level) : function () {};
        });
      }
    }, {
      key: "getLogFn",
      value: function getLogFn(consoleMethod) {
        return Function.prototype.bind.call(this.console.log, this.console, "[".concat(consoleMethod.toUpperCase(), "]").concat(this.prefix ? '(' + this.prefix + ')' : '', ":"));
      }
    }]);
    return Log;
  }();
  function setLoggingLevel(level) {
    Logger.setLoggingLevel(level);
  }
  function getLoggingLevel() {
    return Logger.getLoggingLevel();
  }
  var Logger = new Log();
  var CustomEvents;
  (function (CustomEvents) {
    CustomEvents["OnEventSend"] = "interactions:onEventSend";
    CustomEvents["OnBeforeEventSend"] = "interactions:onBeforeEventSend";
    CustomEvents["OnException"] = "interactions:onException";
    CustomEvents["OnPageMatchStatusUpdated"] = "interactions:onPageMatchStatusUpdated";
    CustomEvents["OnInit"] = "interactions:onInit";
    CustomEvents["OnInitSitemap"] = "interactions:onInitSitemap";
    CustomEvents["OnShutDown"] = "interactions:onShutDown";
    CustomEvents["OnSetAnonymousId"] = "interactions:onSetAnonymousId";
    CustomEvents["OnResetAnonymousId"] = "interactions:onResetAnonymousId";
    CustomEvents["OnClearPersistedIdentities"] = "interactions:onClearPersistedIdentities";
    CustomEvents["OnClearCookie"] = "interactions:onClearCookie";
    CustomEvents["OnConsentRevoke"] = "interactions:onConsentRevoke";
    CustomEvents["OnBeforeInit"] = "interactions:onBeforeInit";
  })(CustomEvents || (CustomEvents = {}));
  // Sitemap re-init catalog rejection
  var SITEMAP_REINIT = "sitemap_reinit";
  // Channel
  var DEFAULT_CHANNEL = "Web";
  var IDENTITY_COOKIE_PREFIX = '_sfid';
  var STORAGE_INFO = {
    anonymousId: {
      ids: {
        // No local storage ID for visitor cookie
      },
      timeoutDays: 730 // 2 years
    }
  };
  function sha1(r) {
    var o,
      e,
      t,
      f,
      n,
      a = [],
      c = [e = 1732584193, t = 4023233417, ~e, ~t, 3285377520],
      u = [],
      d = unescape(encodeURI(r)) + "",
      g = d.length;
    for (u[r = --g / 4 + 2 | 15] = 8 * g; ~g;) u[g >> 2] |= d.charCodeAt(g) << 8 * ~g--;
    for (o = g = 0; o < r; o += 16) {
      for (e = c; g < 80; e = [e[4] + (a[g] = g < 16 ? ~~u[o + g] : 2 * d | d < 0) + 1518500249 + [t & f | ~t & n, d = 341275144 + (t ^ f ^ n), 882459459 + (t & f | t & n | f & n), d + 1535694389][g++ / 5 >> 2] + ((d = e[0]) << 5 | d >>> 27), d, t << 30 | t >>> 2, f, n]) d = a[g - 3] ^ a[g - 8] ^ a[g - 14] ^ a[g - 16], t = e[1], f = e[2], n = e[3];
      for (g = 5; g;) c[--g] += e[g];
    }
    for (d = ""; g < 40;) d += (c[g >> 3] >> 4 * (7 - g++) & 15).toString(16);
    return d;
  }

  // XXX: this is a workaround for how typescript/jest both import the sha1 package differently
  //
  //      here's the situation - the sha1 package contains both an ES6 module (index.mjs) and a CommonJS
  //      module (index.js) which leads to the following behaviors:
  //      * typescript compilation - the MJS version is resolved which uses `export default sha1`
  //      * jest transformation - the CJS version is resolved which uses `module.exports = sha1`
  //
  //      i'm not sure if this can be worked around via config or it's just a weird edge case around
  //      the transition towards ES6 compliant support in libraries.
  var sha1$1 = sha1.default ? sha1.default : sha1;

  /**
   * A sha1 of the current account, dataset and cookieDomainHash joined with periods
   */
  var cookieHash;
  var cookieDomain = window.location.hostname;
  var generateCookieDomainHash = function generateCookieDomainHash() {
    return sha1$1(cookieDomain + '/').slice(0, 4); // 4 hexits = 16 bits
  };
  // See convertMcisVisitorToSalesforceIdentity in MCIS module
  var getCookieDomain = function getCookieDomain() {
    return cookieDomain;
  };
  var setCookieDomain = function setCookieDomain(domain) {
    cookieDomain = domain;
    setCookieHash();
  };
  var setCookieHash = function setCookieHash() {
    cookieHash = sha1$1("".concat(generateCookieDomainHash())).slice(0, 4);
  };
  var getCookieName = function getCookieName() {
    return "".concat(IDENTITY_COOKIE_PREFIX, "_").concat(cookieHash);
  };
  var secureCookie;
  // jsCookie is a vanilla javascript library, so we set the type definitions for js-cookie 2.2 from '@types/js-cookie'
  var Cookie = js_cookie;
  document.addEventListener(CustomEvents.OnClearCookie, function (event) {
    var options = event.detail && event.detail.options || {};
    if (options.domain) {
      setCookieDomain(event.detail.options.domain);
    }
    remove(_objectSpread2$1({
      domain: getCookieDomain()
    }, options));
  });
  var read = function read() {
    return Cookie.getJSON(getCookieName());
  };
  var write = function write(cookieValue, daysToExpire) {
    if (secureCookie) {
      Cookie.set(getCookieName(), cookieValue, {
        expires: daysToExpire,
        domain: getCookieDomain(),
        secure: true
      });
    } else {
      Cookie.set(getCookieName(), cookieValue, {
        expires: daysToExpire,
        domain: getCookieDomain()
      });
    }
    if (!Cookie.get(getCookieName())) {
      Logger.warn("Web SDK cookie (_sfid) could not be set. This is possibly due to a restricted top level domain. See https://publicsuffix.org/learn/ for more information.");
    }
  };
  var remove = function remove(options) {
    Cookie.remove(getCookieName(), options);
  };
  var writeIdentityCookie = function writeIdentityCookie(identityCookie) {
    Cookies.write(identityCookie, STORAGE_INFO.anonymousId.timeoutDays);
  };
  var writeAnonymousIdToCookie = function writeAnonymousIdToCookie(anonymousId) {
    writeIdentityCookie(_objectSpread2$1(_objectSpread2$1({}, read()), {}, {
      anonymousId: anonymousId
    }));
  };
  var writeConsentsToCookie = function writeConsentsToCookie(consents) {
    writeIdentityCookie(_objectSpread2$1(_objectSpread2$1({}, read()), {}, {
      consents: consents
    }));
  };
  var setSecureAttributeOnCookie = function setSecureAttributeOnCookie(setSecureCookieAttribute) {
    secureCookie = setSecureCookieAttribute;
  };
  var Cookies = {
    read: read,
    write: write,
    remove: remove
  };

  // The only thing we have to fear is fear itself, and:
  var spiders = [/bot/i, /spider/i, /facebookexternalhit/i, /simplepie/i, /yahooseeker/i, /embedly/i, /quora link preview/i, /outbrain/i, /vkshare/i, /monit/i, /Pingability/i, /Monitoring/i, /WinHttpRequest/i, /Apache-HttpClient/i, /getprismatic.com/i, /python-requests/i, /Twurly/i, /yandex/i, /browserproxy/i, /crawler/i, /Qwantify/i, /Yahoo! Slurp/i, /pinterest/i, /Tumblr\/14.0.835.186/i, /Tumblr Agent 14.0/i];
  var isSpider = function isSpider(ua) {
    return spiders.some(function (spider) {
      return spider.test(ua);
    });
  };
  var userAgentIsRobot = function userAgentIsRobot() {
    return isSpider(getUserAgent());
  };
  var getUserAgent = function getUserAgent() {
    return window.navigator.userAgent || '';
  };
  var getNavigatorPlatform = function getNavigatorPlatform() {
    return window.navigator.platform || '';
  };
  var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && navigator.userAgent.indexOf('CriOS') == -1 && navigator.userAgent.indexOf('FxiOS') == -1;

  /* resolved locally */
  /**
   * generateUuid
   * @return {String} a pseudo-unique ID to fingerprint a user.
   */
  function generateUuid() {
    var dateTime = new Date().getTime;
    var raw = getUserAgent() + getNavigatorPlatform() + dateTime + JSON.stringify({}) + Math.random();
    return sha1$1(raw).slice(0, 16);
  }

  // TODO: Any good reason to have it be an object with an ID?
  // export interface AnonymousIdentity {
  //     id?: string;
  // }
  var anonymousId = "";
  document.addEventListener(CustomEvents.OnResetAnonymousId, function (event) {
    var options = event.detail && event.detail.options || {};
    if (options.domain) {
      setCookieDomain(options.domain);
    }
    Cookies.remove(_objectSpread2$1({
      domain: getCookieDomain()
    }, options));
    loadAnonymousIdentity();
  });
  document.addEventListener(CustomEvents.OnSetAnonymousId, function (event) {
    if (event.detail && event.detail.newAnonymousId) {
      writeAnonymousIdToCookie(event.detail.newAnonymousId);
    }
  });
  var getAnonymousId = function getAnonymousId() {
    return anonymousId;
  };
  var setAnonymousId = function setAnonymousId(newAnonymousId) {
    anonymousId = newAnonymousId;
    if (newAnonymousId) {
      document.dispatchEvent(new CustomEvent(CustomEvents.OnSetAnonymousId, {
        detail: {
          newAnonymousId: newAnonymousId
        }
      }));
    } else {
      Logger.warn('Attempted to setAnonymousId but not parameter is undefined');
    }
  };
  var loadAnonymousIdentity = function loadAnonymousIdentity() {
    if (!identityCookieExists()) {
      setAnonymousId(generateUuid());
      Logger.debug("Created new anonymous identity record. anonymousId: ".concat(getAnonymousId()));
    } else {
      var identityCookie = Cookies.read();
      anonymousId = identityCookie.anonymousId;
      // rewrite cookie to reset TTL and potential secure cookie attribute
      setAnonymousId(anonymousId);
      Logger.debug("Loaded anonymous identity record from cookie: ".concat(JSON.stringify(getAnonymousId())));
    }
    return getAnonymousId();
  };
  var identityCookieExists = function identityCookieExists() {
    var identityCookie = Cookies.read();
    return !!(identityCookie && _typeof$1(identityCookie) === "object" && Object.keys(identityCookie).length > 0);
  };
  var Signal = /*#__PURE__*/function () {
    function Signal() {
      _classCallCheck$1(this, Signal);
      this.listeners = [];
    }
    _createClass$1(Signal, [{
      key: "on",
      value: function on(listener) {
        var _this = this;
        (this.listeners = this.listeners || []).push(listener);
        return function () {
          _this.listeners = _this.listeners.filter(function (i) {
            return i !== listener;
          });
        };
      }
    }, {
      key: "once",
      value: function once(listener) {
        var _this2 = this;
        return this.on(function () {
          _this2.unbindAll();
          try {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            listener.apply(_this2, args);
          } catch (e) {
            Logger.error('Signal listener callback error: ' + e);
          }
        });
      }
    }, {
      key: "emit",
      value: function emit() {
        var _this3 = this;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        this.listeners.length !== 0 && this.listeners.forEach(function (listener) {
          try {
            listener.apply(_this3, args);
          } catch (e) {
            Logger.error('Signal listener callback error: ' + e);
          }
        });
      }
    }, {
      key: "unbindAll",
      value: function unbindAll() {
        this.listeners = [];
      }
    }]);
    return Signal;
  }();
  var unbindMySignals = function unbindMySignals(typeWithSignals) {
    Logger.debug('Unbinding all signals for type: ', typeWithSignals);
    Object.keys(typeWithSignals).forEach(function (signal) {
      if (typeWithSignals[signal].unbindAll) {
        typeWithSignals[signal].unbindAll();
      }
    });
  };
  var Signals = /*#__PURE__*/_createClass$1(function Signals() {
    _classCallCheck$1(this, Signals);
  });
  Signals.onEventSend = new Signal();
  Signals.onFireException = new Signal();
  Signals.onPageMatchStatusUpdated = new Signal();
  Signals.onInitSitemap = new Signal();
  Signals.unbindAll = function () {
    unbindMySignals(Signals);
  };
  var sitemapState = {
    result: {
      currentPage: null,
      matchedConfig: null,
      matchStatus: null
    },
    config: {
      pageTypes: []
    }
  };
  var currentKey = null;
  var getSitemapConfig = function getSitemapConfig() {
    return sitemapState.config;
  };
  var getSitemapResult = function getSitemapResult() {
    return sitemapState.result;
  };
  var getCurrentSitemapKey = function getCurrentSitemapKey() {
    return currentKey;
  };
  var setCurrentSitemapKey = function setCurrentSitemapKey(key) {
    currentKey = key;
  };
  var MatchStatus;
  (function (MatchStatus) {
    MatchStatus["Pending"] = "pending";
    MatchStatus["Running"] = "running";
    MatchStatus["Selected"] = "selected";
    MatchStatus["Matched"] = "matched";
    MatchStatus["Rejected"] = "rejected";
  })(MatchStatus || (MatchStatus = {}));
  var matchPageConfig = function matchPageConfig(pageConfigs) {
    return new Promise(function (resolve, reject) {
      var defaultPageConfig = sitemapState.config.pageTypeDefault;
      if (defaultPageConfig) {
        setDefaultPageConfigToPending(defaultPageConfig);
      }
      if (defaultPageConfig && !pageConfigs.length) {
        selectPageMatchStatus(defaultPageConfig);
        resolve(defaultPageConfig);
        return;
      }
      setPageConfigsToPending(pageConfigs);
      pageConfigs.map(function (pageConfig) {
        isPageMatch(pageConfig).then(function (isMatch) {
          if (isMatch) {
            if (defaultPageConfig) {
              rejectPageMatchStatus(defaultPageConfig);
            }
            selectPageMatchStatus(pageConfig);
            resolve(pageConfig);
          } else {
            rejectPageMatchStatus(pageConfig);
            if (!unresolvedPageMatchExists(pageConfigs)) {
              if (defaultPageConfig) {
                selectPageMatchStatus(defaultPageConfig);
                resolve(defaultPageConfig);
              } else {
                reject("No matching page found");
              }
            }
          }
        }).catch(function (e) {
          if (e !== SITEMAP_REINIT) Signals.onFireException.emit(new Error("isMatch failed while evaluating the ".concat(pageConfig.name, " page config")), 'Site-wide Javascript');
        });
      });
    });
  };
  var removeOutstandingPageMatchResolvers = function removeOutstandingPageMatchResolvers() {
    var state = sitemapState;
    if (state.result.matchStatus) {
      state.result.matchStatus.forEach(function (s) {
        if (s.status === MatchStatus.Running) {
          s._reject(SITEMAP_REINIT);
        }
      });
      sitemapState.result.matchStatus = [];
    }
    Signals.onPageMatchStatusUpdated.emit(sitemapState.result.matchStatus);
  };
  var setPageConfigsToPending = function setPageConfigsToPending(pageConfigs) {
    pageConfigs.forEach(function (config) {
      handleUpdateResultMatchStatus({
        pageName: config.name,
        status: MatchStatus.Pending
      });
    });
  };
  var setDefaultPageConfigToPending = function setDefaultPageConfigToPending(defaultPageConfig) {
    handleUpdateResultMatchStatus({
      pageName: defaultPageConfig.name,
      status: MatchStatus.Pending
    });
  };
  var selectPageMatchStatus = function selectPageMatchStatus(pageConfig) {
    handleUpdateResultMatchStatus({
      pageName: pageConfig.name,
      endTime: Date.now(),
      status: sitemapState.result.matchStatus.find(function (s) {
        return s.status === MatchStatus.Selected;
      }) ? MatchStatus.Matched : MatchStatus.Selected
    });
  };
  var rejectPageMatchStatus = function rejectPageMatchStatus(pageConfig) {
    handleUpdateResultMatchStatus({
      pageName: pageConfig.name,
      status: MatchStatus.Rejected,
      endTime: Date.now()
    });
  };
  var unresolvedPageMatchExists = function unresolvedPageMatchExists(pageConfigs) {
    var unresolvedMatches = sitemapState.result.matchStatus.filter(function (pageConfig) {
      return pageConfig.status === MatchStatus.Rejected;
    }, 0).length;
    return unresolvedMatches < pageConfigs.length;
  };
  var isPageMatch = function isPageMatch(pageConfig) {
    return new Promise(function (resolve, reject) {
      handleUpdateResultMatchStatus({
        pageName: pageConfig.name,
        status: MatchStatus.Running,
        startTime: Date.now(),
        _reject: reject
      });
      if (typeof pageConfig.isMatch === 'function') {
        var funcValue = pageConfig.isMatch();
        if (_typeof$1(funcValue) === 'object') {
          funcValue.then(function (isMatch) {
            resolve(isMatch);
          }).catch(function () {
            // TODO: log this, do anything else?
          });
        } else {
          resolve(funcValue);
        }
      } else {
        Signals.onFireException.emit(new Error("isMatch failed while evaluating the ".concat(pageConfig.name, " page config. isMatch must be a function.")), 'Site-wide Javascript');
      }
    });
  };
  var handleUpdateResultMatchStatus = function handleUpdateResultMatchStatus(matchStatus) {
    sitemapState.result.matchStatus = [].concat(_toConsumableArray$1(sitemapState.result.matchStatus || []), [matchStatus]);
    Signals.onPageMatchStatusUpdated.emit(sitemapState.result.matchStatus);
  };

  /*
   * Copyright (C) 2010-2019 Evergage, Inc.
   * All rights reserved.
   */
  var CatalogObjectInteractionName;
  (function (CatalogObjectInteractionName) {
    CatalogObjectInteractionName["ViewCatalogObject"] = "View Catalog Object";
    CatalogObjectInteractionName["ViewCatalogObjectDetail"] = "View Catalog Object Detail";
    CatalogObjectInteractionName["QuickViewCatalogObject"] = "Quick View Catalog Object";
    CatalogObjectInteractionName["ShareCatalogObject"] = "Share Catalog Object";
    CatalogObjectInteractionName["ReviewCatalogObject"] = "Review Catalog Object";
    CatalogObjectInteractionName["CommentCatalogObject"] = "Comment Catalog Object";
    CatalogObjectInteractionName["FavoriteCatalogObject"] = "Favorite Catalog Object";
  })(CatalogObjectInteractionName || (CatalogObjectInteractionName = {}));
  /* CART */
  var CartInteractionName;
  (function (CartInteractionName) {
    CartInteractionName["AddToCart"] = "Add To Cart";
    CartInteractionName["RemoveFromCart"] = "Remove From Cart";
    CartInteractionName["ReplaceCart"] = "Replace Cart";
  })(CartInteractionName || (CartInteractionName = {}));
  var OrderInteractionName;
  (function (OrderInteractionName) {
    OrderInteractionName["Purchase"] = "Purchase";
    OrderInteractionName["Preorder"] = "Preorder";
    OrderInteractionName["Cancel"] = "Cancel";
    OrderInteractionName["Ship"] = "Ship";
    OrderInteractionName["Deliver"] = "Deliver";
    OrderInteractionName["Return"] = "Return";
    OrderInteractionName["Exchange"] = "Exchange";
  })(OrderInteractionName || (OrderInteractionName = {}));
  var MetadataUpdateInteractionName;
  (function (MetadataUpdateInteractionName) {
    MetadataUpdateInteractionName["MetadataUpdate"] = "MetadataUpdate";
  })(MetadataUpdateInteractionName || (MetadataUpdateInteractionName = {}));
  var ConsentPurpose;
  (function (ConsentPurpose) {
    ConsentPurpose["Tracking"] = "Tracking";
  })(ConsentPurpose || (ConsentPurpose = {}));

  (function (ConsentStatus) {
    ConsentStatus["OptIn"] = "Opt In";
    ConsentStatus["OptOut"] = "Opt Out";
  })(exports.ConsentStatus || (exports.ConsentStatus = {}));

  /**
   *
   * #### Basic usage example:
   * ```javascript
   * try {
   *     // do something
   * } catch(e) {
   *     SalesforceInteractions.sendException(e, "Login");
   * }
   * ```
   *
   *
   * @param exception An Error object for the exception
   * @param errorSection A tag for categorizing the error
   * @param dontLogException Whether to send but silently not log the exception
   *
   */
  var sendException = function sendException(exception, errorSection, dontLogException) {
    Signals.onFireException.emit(exception, errorSection);
    Logger.warn('sendException', {
      event: event,
      errorSection: errorSection
    });
  };
  var currentConsents = [];
  var getConsents = function getConsents() {
    return currentConsents;
  };
  var findCurrentConsent = function findCurrentConsent(consentToFind) {
    return currentConsents.find(function (currentConsent) {
      return consentToFind.purpose == currentConsent.consent.purpose;
    });
  };
  var updateConsents = function updateConsents(consents) {
    handleConsentsUpdate(consents, true);
  };
  var handleConsentsUpdate = function handleConsentsUpdate(consents, sendRevoke) {
    if (Array.isArray(consents)) {
      consents.forEach(function (c) {
        handleSingleConsent(c, sendRevoke);
      });
    } else {
      handleSingleConsent(consents, sendRevoke);
    }
    writeConsentsToCookie(currentConsents);
  };
  var handleSingleConsent = function handleSingleConsent(consent, sendRevoke) {
    if (!validateConsent(consent)) {
      return;
    }
    var foundConsent = findCurrentConsent(consent);
    if (foundConsent) {
      handleExistingConsent(foundConsent, consent, sendRevoke);
    } else {
      handleNewConsent(consent, sendRevoke);
    }
  };
  var handleExistingConsent = function handleExistingConsent(currentConsent, newConsent, sendRevoke) {
    var preUpdateStatus = currentConsent.consent.status;
    if (currentConsent.consent.status != newConsent.status || currentConsent.consent.provider != newConsent.provider) {
      currentConsent.consent = newConsent;
      currentConsent.lastUpdateTime = new Date().toISOString();
    }
    if (sendRevoke && preUpdateStatus == exports.ConsentStatus.OptIn && newConsent.status == exports.ConsentStatus.OptOut) {
      revokeConsent(currentConsent);
    }
  };
  var handleNewConsent = function handleNewConsent(newConsent, sendRevoke) {
    var consentToStore = {
      consent: newConsent,
      lastUpdateTime: new Date().toISOString()
    };
    currentConsents.push(consentToStore);
    if (sendRevoke && consentToStore.consent.status == exports.ConsentStatus.OptOut) {
      revokeConsent(consentToStore);
    }
  };
  var validateConsent = function validateConsent(consent) {
    if (consent && _typeof$1(consent) == "object" && consent.purpose && consent.provider && consent.status) {
      return true;
    } else {
      sendException(new Error("Invalid consent, check that consent is a valid object and all fields are defined: ".concat(JSON.stringify(consent))), "Salesforce Web SDK");
      return false;
    }
  };
  var revokeConsent = function revokeConsent(revokedConsent) {
    document.dispatchEvent(new CustomEvent(CustomEvents.OnConsentRevoke, {
      detail: {
        revokedConsent: revokedConsent
      }
    }));
  };
  var setConsentLastSentTimes = function setConsentLastSentTimes(consents) {
    var date = new Date().toISOString();
    consents.forEach(function (consent) {
      var foundConsent = findCurrentConsent(consent);
      foundConsent.lastSentTime = date;
    });
    writeConsentsToCookie(currentConsents);
  };
  // do not update consents, and potentially send a consent revoke event, unless
  // an opt-in consent exists in either the consents passed into init or the consents stored in the cookie
  var resolveConsents = function resolveConsents(consents) {
    loadConsentFromCookie();
    Promise.resolve(consents).then(function (resolvedConsents) {
      if (resolvedConsents && resolvedConsents.length > 0) {
        updateConsents(resolvedConsents);
      }
    });
  };
  var loadConsentFromCookie = function loadConsentFromCookie() {
    var identityCookie = Cookies.read();
    if (identityCookie) {
      currentConsents = identityCookie.consents || [];
    }
  };
  var consentOptInExists = function consentOptInExists(consents) {
    return consents.findIndex(function (consent) {
      return consent.status == exports.ConsentStatus.OptIn;
    }) >= 0;
  };
  var currentConsentOptInExists = function currentConsentOptInExists() {
    return consentOptInExists(currentConsents.map(function (currentConsent) {
      return currentConsent.consent;
    }));
  };
  var prepareEvent = function prepareEvent(event) {
    prepareSourcePayload(event);
    prepareUserPayload(event);
    prepareConsentPayload(event);
  };
  var prepareSourcePayload = function prepareSourcePayload(event) {
    event.source = event.source || {};
    event.source = _objectSpread2$1(_objectSpread2$1({}, event.source || {}), {}, {
      pageType: event.source.pageType || getPageTypeFromSitemapState(),
      url: event.source.url || window.location.href,
      urlReferrer: event.source.urlReferrer || document.referrer,
      channel: event.source.channel || DEFAULT_CHANNEL
    });
  };
  var prepareUserPayload = function prepareUserPayload(event) {
    event.user = _objectSpread2$1(_objectSpread2$1({}, event.user || {}), {}, {
      anonymousId: getAnonymousId()
    });
  };
  var prepareConsentPayload = function prepareConsentPayload(event) {
    if (event.consents) {
      handleConsentsUpdate(event.consents, false);
    }
    event.consents = getConsents().filter(function (consent) {
      return !consent.lastSentTime || new Date(consent.lastUpdateTime) >= new Date(consent.lastSentTime);
    }).map(function (consentWithMetadata) {
      return consentWithMetadata.consent;
    });
    setConsentLastSentTimes(event.consents);
  };
  var getPageTypeFromSitemapState = function getPageTypeFromSitemapState() {
    if (sitemapState.result.currentPage && sitemapState.result.currentPage.source) {
      return sitemapState.result.currentPage.source.pageType;
    }
  };
  document.addEventListener(CustomEvents.OnConsentRevoke, function (event) {
    if (event.detail && event.detail.revokedConsent) {
      var consentRevokeEvent = {
        interaction: {
          name: MetadataUpdateInteractionName.MetadataUpdate
        },
        consents: [event.detail.revokedConsent.consent]
      };
      sendConsentRevokeEvent(consentRevokeEvent);
    }
  });
  var sendEvent = function sendEvent(event) {
    return sendEventWithConsentCheck(event, currentConsentOptInExists).catch(function (error) {
      Logger.error(error.message);
      Signals.onFireException.emit(error, 'Site-wide JavaScript');
      return event;
    });
  };
  var sendConsentRevokeEvent = function sendConsentRevokeEvent(event) {
    sendEventWithConsentCheck(event, function () {
      return true;
    }).then(function () {
      return Logger.debug('Consent revoked');
    }, function (error) {
      return Signals.onFireException.emit(error, 'Site-wide JavaScript');
    });
  };
  var sendEventWithConsentCheck = function sendEventWithConsentCheck(event, consentChecker) {
    event = handleOnActionEvent(event);
    prepareEvent(event);
    if (consentChecker && !consentChecker()) {
      Logger.debug('No opt-in consents provided. Event will still be dispatched.');
    }
    Logger.debug('Sent event: ', event);
    Signals.onEventSend.emit(event);
    return Promise.resolve(event);
  };
  var handleOnActionEvent = function handleOnActionEvent(event) {
    event = matchedConfigOnActionEvent(event);
    event = globalOnActionEvent(event);
    return event;
  };
  var matchedConfigOnActionEvent = function matchedConfigOnActionEvent(event) {
    var matchedConfig = sitemapState.result.matchedConfig;
    try {
      event = matchedConfig && matchedConfig.onActionEvent ? matchedConfig.onActionEvent(event) : event;
      if (_typeof$1(event) === 'object') {
        return event;
      } else {
        Signals.onFireException.emit(new Error("onActionEvent failed for the ".concat(sitemapState.result.matchedConfig.name, " page config. Must return an object or null.")), 'Site-wide Javascript');
      }
    } catch (e) {
      Signals.onFireException.emit(new Error("onActionEvent failed for the ".concat(sitemapState.result.matchedConfig.name, " page config. ").concat(e.message, ".")), 'Site-wide Javascript');
    }
  };
  var globalOnActionEvent = function globalOnActionEvent(event) {
    var siteMapConfig = sitemapState.config;
    try {
      event = siteMapConfig.global && siteMapConfig.global.onActionEvent ? siteMapConfig.global.onActionEvent(event) : event;
      if (_typeof$1(event) === 'object') {
        return event;
      } else {
        Signals.onFireException.emit(new Error("onActionEvent failed for the global page config. Must return an object or null."), 'Site-wide Javascript');
      }
    } catch (e) {
      Signals.onFireException.emit(new Error("onActionEvent failed for the global page config. ".concat(e.message, ".")), 'Site-wide Javascript');
    }
  };
  var processInteraction = function processInteraction(pageConfig) {
    return new Promise(function (resolve, reject) {
      Signals.onInitSitemap.once(function () {
        return reject(SITEMAP_REINIT);
      });
      var interaction = {
        name: null
      };
      var interactionConfigPromises = [];
      Object.keys(pageConfig.interaction).forEach(function (key) {
        var valueFromConfig = pageConfig.interaction[key];
        var interactionConfigPromise = resolveAndCleanValue(valueFromConfig, key).then(function (resolvedValue) {
          interaction[key] = resolvedValue;
        });
        interactionConfigPromises.push(interactionConfigPromise);
      });
      Promise.all(interactionConfigPromises).then(function () {
        resolve(interaction);
      }).catch(function (e) {
        Signals.onFireException.emit(new Error("Catalog object interaction config was rejected"), 'Site-wide Javascript');
      });
    });
  };
  var resolveAndCleanValue = function resolveAndCleanValue(value, key) {
    try {
      setCurrentSitemapKey(key);
      if (_typeof$1(value) === "object" && !Array.isArray(value) && Object.keys(value).length > 0) {
        return buildNestedAttributes(value);
      } else {
        return Promise.resolve(value).then(function (resolvedNotNestedValue) {
          return typeof resolvedNotNestedValue === "function" ? resolvedNotNestedValue() : resolvedNotNestedValue;
        });
      }
    } catch (e) {
      Signals.onFireException.emit(new Error("getValue for ".concat(key, " failed on ").concat(sitemapState.result.matchedConfig.name, " while evaluating custom function. ").concat(e.message, ".")), 'Site-wide Javascript');
    }
  };
  var buildNestedAttributes = function buildNestedAttributes(nestedAttributeConfig) {
    var nestedAttributes = {};
    var nestedAttributeKeys = Object.keys(nestedAttributeConfig);
    var resolvedNestedAttributes = {};
    nestedAttributeKeys.forEach(function (nestedKey) {
      var nestedAttributeValue = nestedAttributeConfig[nestedKey];
      var resolvedNestedAttributeValue = resolveAndCleanValue(nestedAttributeValue, nestedKey);
      nestedAttributes[nestedKey] = resolvedNestedAttributeValue;
    });
    return Promise.all(Object.values(nestedAttributes)).then(function (values) {
      values.forEach(function (value, index) {
        var key = nestedAttributeKeys[index];
        resolvedNestedAttributes[key] = value;
      });
      return resolvedNestedAttributes;
    });
  };
  var listenerSearchInterval;
  var startListenerSearch = function startListenerSearch() {
    cancelListenerSearch();
    if (pageHasMissingListeners()) {
      listenerSearchInterval = setInterval(function () {
        var updated = false;
        var intervalTimerStart = new Date().getTime();
        var listenerState = sitemapState.result.matchedConfig.listeners.map(function (d) {
          if (d.selectorFound) {
            return d;
          } else {
            var listener = attemptToBindListener(d);
            updated = listener.selectorFound || updated;
            return listener;
          }
        });
        if (updated) {
          Object.assign(sitemapState.result.matchedConfig, _objectSpread2$1(_objectSpread2$1({}, sitemapState.result.matchedConfig), {}, {
            listeners: listenerState
          }));
        }
        var intervalTimerEnd = new Date().getTime();
        var intervalRunningTime = intervalTimerEnd - intervalTimerStart;
        if (intervalRunningTime > 50 || !pageHasMissingListeners()) {
          cancelListenerSearch();
        }
      }, 1000);
    }
  };
  var pageHasMissingListeners = function pageHasMissingListeners() {
    if (sitemapState.result.matchedConfig) {
      var listeners = sitemapState.result.matchedConfig.listeners;
      if (listeners) {
        return listeners.filter(function (d) {
          return !d.selectorFound;
        }).length;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  var cancelListenerSearch = function cancelListenerSearch() {
    if (typeof listenerSearchInterval === 'number') {
      clearInterval(listenerSearchInterval);
    }
    listenerSearchInterval = null;
  };
  var sendEventWithCallback = function sendEventWithCallback(event, listener) {
    try {
      listener.callback(event);
    } catch (e) {
      Signals.onFireException.emit(new Error("Listener callback on ".concat(listener.bind, " bound to ").concat(listener.selector, " failed for the ").concat(sitemapState.result.matchedConfig.name, " page config. ").concat(e.message, ".")), 'Site-wide Javascript');
    }
  };
  var attemptToBindListener = function attemptToBindListener(listenerConfig) {
    var elements = cash(listenerConfig.selector);
    var listener = _objectSpread2$1(_objectSpread2$1({}, listenerConfig), {}, {
      selectorFound: elements.length > 0
    });
    elements.on(listener.bind, function (event) {
      sendEventWithCallback(event, listener);
    });
    return listener;
  };
  var removeCurrentListeners = function removeCurrentListeners() {
    if (sitemapState.result && sitemapState.result.matchedConfig && sitemapState.result.matchedConfig.listeners) {
      sitemapState.result.matchedConfig.listeners.forEach(function (listener) {
        cash(listener.selector).off(listener.bind);
      });
    }
  };
  var setConfig = function setConfig(config) {
    config.global = config.global || {};
    if (_typeof$1(config.global) != "object") {
      Signals.onFireException.emit(new Error("The global config has a type of ".concat(_typeof$1(config.global), ", but it must be an object")), 'Sitewide Javascript');
    }
    Object.assign(sitemapState.config, _objectSpread2$1({}, config));
    Signals.onInitSitemap.emit(sitemapState.config);
  };
  var initSitemap = function initSitemap(siteMapConfig) {
    run(siteMapConfig);
    return true;
  };
  var build = function build(config) {
    matchPageConfig(config.pageTypes).then(mergeConfigWithGlobal).then(handleConfig).catch(function (e) {
      if (e !== SITEMAP_REINIT) Signals.onFireException.emit(new Error("Unhandled exception: ".concat(e)), 'Site-wide Javascript');
    });
  };
  var handleConfig = function handleConfig(pageConfig) {
    sitemapState.result.matchedConfig = _objectSpread2$1(_objectSpread2$1({}, pageConfig), {}, {
      listeners: processListeners(pageConfig)
    });
    sitemapState.result.currentPage = _objectSpread2$1(_objectSpread2$1({}, sitemapState.result.currentPage || {}), {}, {
      source: {
        pageType: pageConfig.name,
        locale: processLocale(pageConfig)
      },
      user: {
        anonymousId: null // TODO: this gets filled in during sendEvent, a little strange
      },
      interaction: null,
      pageView: true
    });
    return pageConfig.interaction ? processInteraction(pageConfig).then(function (interaction) {
      sitemapState.result.currentPage.interaction = interaction;
    }) : Promise.resolve();
  };
  var processListeners = function processListeners(pageConfig) {
    return (pageConfig.listeners || []).map(function (listenerConfig) {
      return attemptToBindListener(listenerConfig);
    });
  };
  var processLocale = function processLocale(pageConfig) {
    return typeof pageConfig.locale === "function" ? pageConfig.locale() : pageConfig.locale;
  };
  var mergeDeep = function mergeDeep() {
    var isObject = function isObject(obj) {
      return obj && _typeof$1(obj) === 'object';
    };
    for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }
    return objects.reduce(function (prev, obj) {
      Object.keys(obj).forEach(function (key) {
        var pVal = prev[key];
        var oVal = obj[key];
        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          Object.assign(prev, _defineProperty$1({}, key, pVal.concat.apply(pVal, _toConsumableArray$1(oVal))));
        } else if (isObject(pVal) && isObject(oVal)) {
          Object.assign(prev, _defineProperty$1({}, key, mergeDeep(pVal, oVal)));
        } else {
          Object.assign(prev, _defineProperty$1({}, key, oVal));
        }
      });
      return prev;
    }, {});
  };
  var mergeConfigWithGlobal = function mergeConfigWithGlobal(pageConfig) {
    var global = sitemapState.config.global || {};
    var globalOnActionEvent = global.onActionEvent;
    delete global.onActionEvent;
    var mergedConfig = mergeDeep(global, pageConfig);
    global.onActionEvent = globalOnActionEvent;
    return mergedConfig;
  };
  var validatePageConfigs = function validatePageConfigs(siteMapConfig) {
    try {
      validatePageTypeConfigs(siteMapConfig.pageTypes);
      return true;
    } catch (e) {
      Signals.onFireException.emit(new Error(e), 'Sitemap');
      return false;
    }
  };
  var validatePageTypeConfigs = function validatePageTypeConfigs(pageConfigs) {
    pageConfigs.forEach(function (pageConfig) {
      if (!pageConfig.name || !pageConfig.isMatch) {
        throw new Error("All page configs must have a name and isMatch attribute defined");
      }
    });
  };
  var processResult = function processResult() {
    var result = sitemapState.result;
    sendEvent(sitemapState.result.currentPage);
    sitemapState.result = result;
  };
  var run = function run(siteMapConfig) {
    setConfig(siteMapConfig);
    removeCurrentListeners();
    removeOutstandingPageMatchResolvers();
    cancelListenerSearch();
    sitemapState.result.currentPage = null;
    if (!validatePageConfigs(siteMapConfig)) {
      return;
    }
    matchPageConfig(siteMapConfig.pageTypes).then(mergeConfigWithGlobal).then(handleConfig).then(processResult).then(startListenerSearch).catch(function (e) {
      if (e !== SITEMAP_REINIT) Signals.onFireException.emit(new Error("Unhandled exception: ".concat(e)), 'Site-wide Javascript');
    });
  };
  function listener(bind, selector, callback) {
    if (typeof callback === "function") {
      return {
        bind: bind,
        selector: selector,
        callback: callback
      };
    } else {
      return null;
    }
  }
  var fromSelector = function fromSelector(selector, transform) {
    return function () {
      if (typeof selector != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(getCurrentSitemapKey(), " failed on ").concat(sitemapState.result.matchedConfig.name, ". Selector must be a string.")), 'Site-wide Javascript');
        return null;
      }
      var resolvedValue = cash(selector).first().text();
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };
  var fromSelectorAttribute = function fromSelectorAttribute(selector, attribute, transform) {
    return function () {
      if (typeof selector != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(getCurrentSitemapKey(), " failed on ").concat(sitemapState.result.matchedConfig.name, ". Selector must be a string.")), 'Site-wide Javascript');
        return null;
      }
      if (typeof attribute != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(getCurrentSitemapKey(), " failed on ").concat(sitemapState.result.matchedConfig.name, ". Attribute must be a string.")), 'Site-wide Javascript');
        return null;
      }
      var resolvedValue = cash(selector).first().attr(attribute);
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };
  var fromSelectorMultiple = function fromSelectorMultiple(selector, transform) {
    return function () {
      if (typeof selector != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(getCurrentSitemapKey(), " failed on ").concat(sitemapState.result.matchedConfig.name, ". Selector must be a string.")), 'Site-wide Javascript');
        return null;
      }
      var selectedElements = cash(selector);
      var resolvedValue = selectedElements.get().map(function (elem) {
        return cash(elem).text();
      });
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };
  var fromSelectorAttributeMultiple = function fromSelectorAttributeMultiple(selector, attribute, transform) {
    return function () {
      if (typeof selector != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(getCurrentSitemapKey(), " failed on ").concat(sitemapState.result.matchedConfig.name, ". Selector must be a string.")), 'Site-wide Javascript');
        return null;
      }
      if (typeof attribute != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(getCurrentSitemapKey(), " failed on ").concat(sitemapState.result.matchedConfig.name, ". Attribute must be a string.")), 'Site-wide Javascript');
        return null;
      }
      var selectedElements = cash(selector);
      var resolvedValue = selectedElements.get().map(function (elem) {
        return cash(elem).attr(attribute);
      });
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };
  var fromItemProp = function fromItemProp(itemProp, transform) {
    return function () {
      var resolvedValue = cash("[itemprop='" + itemProp + "']").first().attr("content");
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };
  var fromMeta = function fromMeta(metaTag, transform) {
    return function () {
      var resolvedValue = cash("meta[name='" + metaTag + "']").first().attr("content") || cash("meta[property='" + metaTag + "']").first().attr("content");
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };
  var fromWindow = function fromWindow(path, transform) {
    return function () {
      var resolvedValue = getValueFromNestedObject(path);
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };
  var fromJsonLd = function fromJsonLd(path, transform) {
    return function () {
      var json = cash("script[type='application/ld+json']").first().text();
      try {
        var parsedJson = JSON.parse(json);
        if (!path) {
          return internalTransform(transform, parsedJson);
        } else {
          var resolvedValue = getValueFromNestedObject(path, parsedJson);
          return internalTransform(transform, resolvedValue);
        }
      } catch (e) {
        Signals.onFireException.emit(new Error("Parsing JSON-LD for ".concat(getCurrentSitemapKey(), " failed on ").concat(sitemapState.result.matchedConfig.name, ". ").concat(e)), 'Site-wide Javascript');
      }
    };
  };
  var fromCanonical = function fromCanonical(transform) {
    return function () {
      var resolvedValue = cash('link[rel=canonical]').attr("href");
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };
  var fromHref = function fromHref(transform) {
    return function () {
      var resolvedValue = window.location.href;
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };
  var buildCategoryId = function buildCategoryId(selector, startFrom, ignoreLast, transform) {
    return function () {
      var elements = Array.from(cash(selector));
      if (startFrom) {
        elements = elements.slice(startFrom);
      }
      if (ignoreLast) {
        elements = elements.slice(0, -1);
      }
      var idParts = [];
      elements.forEach(function (elem) {
        var idPart = cash(elem).text().trim();
        if (idPart) {
          idParts.push(idPart);
        } else {
          Signals.onFireException.emit(new Error("buildCategoryId for ".concat(getCurrentSitemapKey(), " failed on ").concat(sitemapState.result.matchedConfig.name, ". A category part is null.")), 'Site-wide Javascript');
        }
      });
      var categoryId = idParts.join('|');
      categoryId = internalTransform(transform, categoryId);
      return categoryId;
    };
  };
  var buildCategoryIdAttribute = function buildCategoryIdAttribute(selector, attribute, startFrom, ignoreLast, transform) {
    return function () {
      var elements = Array.from(cash(selector));
      if (startFrom) {
        elements = elements.slice(startFrom);
      }
      if (ignoreLast) {
        elements = elements.slice(0, -1);
      }
      var idParts = [];
      elements.forEach(function (elem) {
        var idPart = cash(elem).attr(attribute).trim();
        if (idPart) {
          idParts.push(idPart);
        } else {
          Signals.onFireException.emit(new Error("buildCategoryId for ".concat(getCurrentSitemapKey(), " failed on ").concat(sitemapState.result.matchedConfig.name, ". A category part is null.")), 'Site-wide Javascript');
        }
      });
      var categoryId = idParts.join('|');
      categoryId = internalTransform(transform, categoryId);
      return categoryId;
    };
  };
  var internalTransform = function internalTransform(transformFunc, resolvedValue) {
    if (transformFunc) {
      try {
        return transformFunc(resolvedValue);
      } catch (e) {
        Signals.onFireException.emit(new Error("getValue for ".concat(getCurrentSitemapKey(), " failed on ").concat(sitemapState.result.matchedConfig.name, " inside of the custom transform function. ").concat(e)), 'Site-wide Javascript');
        return null;
      }
    }
    return resolvedValue;
  };
  var getValueFromNestedObject = function getValueFromNestedObject(path, obj) {
    var cur = obj || window;
    var elems = path.split('.');
    var match;
    var _iterator = _createForOfIteratorHelper(elems),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;
        match = /(\w+)\[([0-9]+)\]/.exec(elem);
        if (cur[elem]) {
          cur = cur[elem];
        } else if (match) {
          if (cur[match[1]]) {
            cur = cur[match[1]][parseInt(match[2], 10)];
            if (!cur) {
              return null;
            }
          }
        } else {
          return null;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return cur;
  };
  var resolvers = {
    fromSelector: fromSelector,
    fromSelectorAttribute: fromSelectorAttribute,
    fromSelectorMultiple: fromSelectorMultiple,
    fromSelectorAttributeMultiple: fromSelectorAttributeMultiple,
    fromItemProp: fromItemProp,
    fromMeta: fromMeta,
    fromWindow: fromWindow,
    fromJsonLd: fromJsonLd,
    fromCanonical: fromCanonical,
    fromHref: fromHref,
    buildCategoryId: buildCategoryId,
    buildCategoryIdAttribute: buildCategoryIdAttribute
  };

  // tslint:disable variable-name
  var cashDom = cash;
  var unbindByIds = {};
  var bind = function bind(trueFunc) {
    var bindId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random().toString(36).slice(2);
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
    var checkInterval = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
    if (typeof trueFunc !== "function") return;
    return new Promise(function (resolve, reject) {
      var currentRunTime = 0;
      var interval = setInterval(function () {
        try {
          currentRunTime += checkInterval;
          var resolvedValue = trueFunc();
          if (resolvedValue) {
            unbind(bindId);
            resolve(resolvedValue);
          } else if (currentRunTime >= timeout) {
            unbind(bindId);
            resolve(false);
          }
        } catch (e) {
          unbind(bindId);
          reject(e);
        }
      }, checkInterval);
      unbindByIds[bindId] = function () {
        clearInterval(interval);
      };
    });
  };
  var unbind = function unbind(bindId) {
    if (!bindId || typeof bindId !== "string" || typeof unbindByIds[bindId] !== "function") return null;
    unbindByIds[bindId]();
    delete unbindByIds[bindId];
  };
  var getBindings = function getBindings() {
    return unbindByIds;
  };
  var clearBindings = function clearBindings() {
    for (var id in unbindByIds) {
      if (unbindByIds.hasOwnProperty(id) && typeof unbindByIds[id] === "function") {
        unbind(id);
      }
    }
  };
  var resolveWhenTrue = {
    bind: bind,
    unbind: unbind,
    getBindings: getBindings,
    clearBindings: clearBindings
  };
  var util = {
    resolveWhenTrue: resolveWhenTrue
  };
  var lifecycle = {
    state: "shutDown" /* SHUT_DOWN */
  };
  var getLifecycleState = function getLifecycleState() {
    return lifecycle.state;
  };
  var setLifecycleState = function setLifecycleState(state) {
    return lifecycle.state = state;
  };
  var sdkConfig = {
    cookieDomain: null,
    consents: null
  };
  var getSdkConfig = function getSdkConfig() {
    return sdkConfig;
  };
  var setSdkConfig = function setSdkConfig(newSdkConfig) {
    if (newSdkConfig.cookieDomain) {
      // TODO: change this maybe to event dispatch/listener
      setCookieDomain(newSdkConfig.cookieDomain);
    }
    setCookieHash();
    sdkConfig = _objectSpread2$1(_objectSpread2$1({}, sdkConfig), newSdkConfig);
  };
  var DisplayUtils = function () {
    var unbindByIds = {};
    function generateId() {
      var id = Math.random().toString(36).slice(2);
      while (unbindByIds[id]) {
        id = Math.random().toString(36).slice(2);
      }
      return id;
    }
    function getBindId(providedId, defaultId, useRandomId) {
      return useRandomId ? generateId() : providedId || defaultId;
    }
    function buildBaseMethods(bindId, useRandomId) {
      return {
        pageElementLoaded: function pageElementLoaded(targetSelector, observerSelector) {
          if (typeof observerSelector !== "string" || observerSelector === "") {
            observerSelector = cashDom("body").length > 0 ? "body" : "html";
          }
          if (typeof targetSelector !== "string" || targetSelector === "") {
            throw new Error("[pageElementLoaded] Invalid arguments");
          }
          return new Promise(function (resolve) {
            var targetElements = cashDom(targetSelector);
            if (targetElements.length > 0) {
              resolve(targetElements[0]);
            } else {
              var observerNode = cashDom(observerSelector)[0];
              if (!observerNode) {
                throw new Error("pageElementLoaded cannot be bound. observerSelector ".concat(observerSelector, " is not on the page"));
              }
              var observer = new MutationObserver(function (mutationList, observer) {
                var _iterator = _createForOfIteratorHelper(mutationList),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var mutationRecord = _step.value;
                    if (mutationRecord.addedNodes && mutationRecord.addedNodes.length > 0) {
                      var _iterator2 = _createForOfIteratorHelper(mutationRecord.addedNodes),
                        _step2;
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          var addedNode = _step2.value;
                          var targetElement = cashDom(addedNode).is(targetSelector) ? addedNode : cashDom(addedNode).find(targetSelector).get(0);
                          if (targetElement) {
                            if (bindId) {
                              bindingMethods.unbind(bindId);
                            } else {
                              observer.disconnect();
                            }
                            resolve(targetElement);
                            return;
                          }
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
              observer.observe(observerNode, {
                childList: true,
                subtree: true
              });
            }
            bindId = getBindId(bindId, "<pageElementLoaded>" + targetSelector, useRandomId);
            unbindByIds[bindId] = function () {
              observer && observer.disconnect();
            };
          });
        },
        pageElementVisible: function pageElementVisible(selector, percentage) {
          var threshold = percentage || 0;
          if (typeof selector !== "string" || selector === "" || typeof threshold !== "number" || threshold < 0 || threshold > 1) {
            throw new Error("[pageElementVisible] Invalid arguments");
          }
          return new Promise(function (resolve) {
            var target = cashDom(selector);
            var options = {
              threshold: threshold
            };
            var observer = new IntersectionObserver(callbackFn, options);
            function callbackFn(entries, observer) {
              for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                  if (bindId) {
                    bindingMethods.unbind(bindId);
                  } else {
                    observer.disconnect();
                  }
                  resolve(entries[i]);
                  break;
                }
              }
            }
            observer.observe(target[0]);
            bindId = getBindId(bindId, "<pageElementVisible>" + selector, useRandomId);
            unbindByIds[bindId] = function () {
              observer.disconnect();
            };
          });
        },
        pageExit: function pageExit(delay) {
          delay = delay || 0;
          if (typeof delay !== "number" || delay < 0) {
            throw new Error("[pageExit] Invalid arguments");
          }
          return new Promise(function (resolve) {
            var $target = cashDom(document);
            var events = "mousemove";
            var timer;
            function onmousemove(e) {
              clearTimeout(timer);
              if (e.pageY - window.pageYOffset <= 10) {
                timer = delay > 0 ? setTimeout(callbackFn.bind(this, e), delay) : callbackFn.call(this, e);
              }
            }
            function callbackFn(e) {
              if (bindId) {
                bindingMethods.unbind(bindId);
              } else {
                $target.off(events, onmousemove);
              }
              clearTimeout(timer);
              resolve(e);
            }
            $target.on(events, onmousemove);
            bindId = getBindId(bindId, "<pageExit>", useRandomId);
            unbindByIds[bindId] = function () {
              $target.off(events, onmousemove);
            };
          });
        },
        pageInactive: function pageInactive(ms) {
          if (typeof ms !== "number" || ms <= 0) {
            throw new Error("[pageInactive] Invalid arguments");
          }
          function _pageInactive(ms, state) {
            var promise = new Promise(function (resolve) {
              var $target = cashDom(document);
              var resetEvents = "mousemove click scroll keyup keydown";
              var idleTimer;
              function callbackFn(e) {
                e = e || new Event("pageInactive");
                if (bindId && !state.isSubscribe) {
                  bindingMethods.unbind(bindId);
                } else {
                  $target.off(resetEvents, resetTimer);
                }
                resolve(e);
              }
              function resetTimer(e) {
                clearTimeout(idleTimer);
                idleTimer = setTimeout(callbackFn.bind(this, e), ms);
              }
              resetTimer();
              $target.on(resetEvents, resetTimer);
            });
            promise.subscribe = function subscribe(callback) {
              delete promise.subscribe;
              state.isSubscribe = true;
              promise.then(function (event) {
                event.disconnect = function () {
                  if (bindId) {
                    bindingMethods.unbind(bindId);
                  } else {
                    state.isDisconnected = true;
                  }
                };
                callback(event);
                !state.isDisconnected && _pageInactive(ms, state).subscribe(callback);
              });
              return promise;
            };
            return promise;
          }
          var state = {
            isDisconnected: false,
            isSubscribe: false
          };
          bindId = getBindId(bindId, "<pageInactive>", useRandomId);
          unbindByIds[bindId] = function () {
            state.isDisconnected = true;
          };
          return _pageInactive(ms, state);
        },
        pageScroll: function pageScroll(percentage) {
          if (typeof percentage !== "number" || percentage < 0 || percentage > 1) {
            throw new Error("[pageScroll] Invalid arguments");
          }
          return new Promise(function (resolve) {
            var $target = cashDom(document);
            var events = "scroll";
            function callbackFn(e) {
              resolve(e);
              if (bindId) {
                bindingMethods.unbind(bindId);
              } else {
                $target.off(events, onScroll);
              }
            }
            function onScroll(e) {
              var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
              if (scrollPercentage >= percentage) {
                callbackFn.call(this, e);
              }
            }
            $target.on(events, onScroll);
            bindId = getBindId(bindId, "<pageScroll>", useRandomId);
            unbindByIds[bindId] = function () {
              $target.off(events, onScroll);
            };
          });
        }
      };
    }
    function buildBindingMethods() {
      return {
        bind: function bind(id) {
          if (id && unbindByIds[id]) {
            unbindByIds[id]();
            delete unbindByIds[id];
          }
          return buildBaseMethods(id);
        },
        unbind: function unbind(id) {
          if (!id || typeof id !== "string" || typeof unbindByIds[id] !== "function") return null;
          unbindByIds[id]();
          delete unbindByIds[id];
        },
        getBindings: function getBindings() {
          return unbindByIds;
        },
        clearBindings: function clearBindings() {
          for (var id in unbindByIds) {
            if (unbindByIds.hasOwnProperty(id)) {
              unbindByIds[id]();
              delete unbindByIds[id];
            }
          }
        }
      };
    }
    var baseMethods = buildBaseMethods(null, true);
    var bindingMethods = buildBindingMethods();
    return Object.assign(baseMethods, bindingMethods);
  }();
  var EventRateLimiter = /*#__PURE__*/function () {
    function EventRateLimiter(eventLimiterConfig) {
      var _this = this;
      _classCallCheck$1(this, EventRateLimiter);
      this.clearRateLimiter = function () {
        _this.sentEvents = [];
      };
      this.eventWithinLimitTimeRange = function (limitTimeRange, eventWithTime, now) {
        return now - eventWithTime.time < limitTimeRange;
      };
      this.getTimeRangeMax = function () {
        return _this.eventRateLimiterConfig.globalTimeRange;
      };
      this.removeOldEvents = function (now) {
        var timeRangeMax = _this.getTimeRangeMax();
        for (var index = _this.sentEvents.length - 1; index >= 0; index--) {
          if (!_this.eventWithinLimitTimeRange(timeRangeMax, _this.sentEvents[index], now)) {
            _this.sentEvents.splice(0, index + 1);
            break;
          }
        }
      };
      this.checkGlobalLimits = function (index, eventTime) {
        var _this$eventRateLimite = _objectSpread2$1({}, _this.eventRateLimiterConfig),
          globalLimit = _this$eventRateLimite.globalLimit,
          globalTimeRange = _this$eventRateLimite.globalTimeRange;
        if (_this.eventWithinLimitTimeRange(globalTimeRange, _this.sentEvents[index], eventTime)) {
          _this.globalCounter++;
          if (_this.globalCounter > globalLimit) {
            Logger.info("Event rate limit exceeded. More than ".concat(globalLimit, " events ") + "sent in ".concat(globalTimeRange, "ms."));
            return true;
          }
        }
        return false;
      };
      this.checkLimits = function (index, eventToRateLimit) {
        return _this.checkGlobalLimits(index, eventToRateLimit.time);
      };
      this.sentEvents = [];
      this.eventRateLimiterConfig = eventLimiterConfig;
    }
    _createClass$1(EventRateLimiter, [{
      key: "resetCounters",
      value: function resetCounters() {
        this.globalCounter = 0;
      }
    }, {
      key: "isTriggerLimitExceeded",
      value: function isTriggerLimitExceeded(extraFields) {
        var now = Date.now();
        var eventToRateLimit = _objectSpread2$1(_objectSpread2$1({}, extraFields), {}, {
          time: now
        });
        this.sentEvents.push(eventToRateLimit);
        this.removeOldEvents(now);
        this.resetCounters();
        // Actions in reverse chronological order, loop backwards to start with most recent.
        for (var index = this.sentEvents.length - 1; index >= 0; index--) {
          if (this.checkLimits(index, eventToRateLimit)) {
            return true;
          }
        }
        return false;
      }
    }]);
    return EventRateLimiter;
  }();
  var InteractionEventRateLimiter = /*#__PURE__*/function (_EventRateLimiter) {
    _inherits$1(InteractionEventRateLimiter, _EventRateLimiter);
    var _super = _createSuper$1(InteractionEventRateLimiter);
    function InteractionEventRateLimiter(interactionRateLimiterConfig) {
      var _this2;
      _classCallCheck$1(this, InteractionEventRateLimiter);
      _this2 = _super.call(this, interactionRateLimiterConfig);
      _this2.getTimeRangeMax = function () {
        return _this2.eventRateLimiterConfig.perInteractionTimeRange ? Math.max(_this2.eventRateLimiterConfig.globalTimeRange, _this2.eventRateLimiterConfig.perInteractionTimeRange) : _this2.eventRateLimiterConfig.globalTimeRange;
      };
      _this2.checkInteractionLimits = function (index, eventTime, interactionName) {
        if (_this2.eventRateLimiterConfig.perInteractionLimit && _this2.eventRateLimiterConfig.perInteractionTimeRange && _this2.eventWithinLimitTimeRange(_this2.eventRateLimiterConfig.perInteractionTimeRange, _this2.sentEvents[index], eventTime) && _this2.sentEvents[index].name === interactionName) {
          _this2.perEventCounter++;
          if (_this2.perEventCounter > _this2.eventRateLimiterConfig.perInteractionLimit) {
            Logger.info("Event rate limit exceeded. More than ".concat(_this2.eventRateLimiterConfig.perInteractionLimit, " events ") + "with interaction name of ".concat(interactionName, " sent in ").concat(_this2.eventRateLimiterConfig.perInteractionTimeRange, "ms."));
            return true;
          }
        }
        return false;
      };
      _this2.checkLimits = function (index, interactionToRateLimit) {
        return _this2.checkGlobalLimits(index, interactionToRateLimit.time) || _this2.checkInteractionLimits(index, interactionToRateLimit.time, interactionToRateLimit.name);
      };
      return _this2;
    }
    _createClass$1(InteractionEventRateLimiter, [{
      key: "resetCounters",
      value: function resetCounters() {
        _get$1(_getPrototypeOf$1(InteractionEventRateLimiter.prototype), "resetCounters", this).call(this);
        this.perEventCounter = 0;
      }
    }, {
      key: "isTriggerLimitExceeded",
      value: function isTriggerLimitExceeded(interactionEventInfo) {
        return _get$1(_getPrototypeOf$1(InteractionEventRateLimiter.prototype), "isTriggerLimitExceeded", this).call(this, interactionEventInfo);
      }
    }]);
    return InteractionEventRateLimiter;
  }(EventRateLimiter);
  var unbindOnFireException;
  var unbindOnSendEvent;
  var unbindOnPageMatchStatusUpdated;
  var unbindOnInitSitemap;
  function unbindPublicSignalsToDocument() {
    if (unbindOnFireException) {
      unbindOnFireException();
    }
    if (unbindOnSendEvent) {
      unbindOnSendEvent();
    }
    if (unbindOnPageMatchStatusUpdated) {
      unbindOnPageMatchStatusUpdated();
    }
    if (unbindOnInitSitemap) {
      unbindOnInitSitemap();
    }
  }
  function bindPublicSignalsToDocument() {
    unbindOnFireException = Signals.onFireException.on(function (error, context) {
      document.dispatchEvent(new CustomEvent(CustomEvents.OnException, {
        detail: {
          error: error,
          context: context
        }
      }));
    });
    unbindOnSendEvent = Signals.onEventSend.on(function (actionEvent) {
      var canceled = !document.dispatchEvent(new CustomEvent(CustomEvents.OnBeforeEventSend, {
        detail: {
          actionEvent: actionEvent
        },
        cancelable: true
      }));
      if (!canceled) {
        document.dispatchEvent(new CustomEvent(CustomEvents.OnEventSend, {
          detail: {
            actionEvent: actionEvent
          }
        }));
      }
    });
    unbindOnPageMatchStatusUpdated = Signals.onPageMatchStatusUpdated.on(function (matchStatus) {
      document.dispatchEvent(new CustomEvent(CustomEvents.OnPageMatchStatusUpdated, {
        detail: {
          matchStatus: matchStatus
        }
      }));
    });
    unbindOnInitSitemap = Signals.onInitSitemap.on(function (sitemapConfig) {
      document.dispatchEvent(new CustomEvent(CustomEvents.OnInitSitemap, {
        detail: {
          sitemapConfig: sitemapConfig
        }
      }));
    });
  }
  function checkEnv() {
    if (userAgentIsRobot()) {
      return shutDown('You are a robot.');
    }
    // Casting visibilityState to avoid complaints about 'prerender' no longer being a valid VisibilityState value
    // in TypeScript 3.7.  Some browsers might still return this, even though it's deprecated.
    var preRendered = document.visibilityState === 'prerender';
    if (preRendered && isSafari) {
      return shutDown('Page is pre-rendered and loaded in Safari.');
    }
    return true;
  }
  function shutDown(message) {
    unbindPublicSignalsToDocument();
    document.dispatchEvent(new CustomEvent(CustomEvents.OnShutDown, {
      detail: {
        message: message
      }
    }));
    setLifecycleState("shutDown" /* SHUT_DOWN */);
    return false;
  }
  // returns a Promise that is resolved or rejected based on initialization of the Web SDK itself
  // and not around validating anything around consent
  var init = function init() {
    var sdkConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!checkEnv()) {
      return Promise.reject();
    }
    if (getLifecycleState() == "initialized" /* INITIALIZED */) {
      shutDown("reinitializing Web SDK");
    }
    setSdkConfig(sdkConfig);
    document.dispatchEvent(new CustomEvent(CustomEvents.OnBeforeInit, {
      detail: {
        sdkConfig: getSdkConfig()
      }
    }));
    bindPublicSignalsToDocument();
    loadAnonymousIdentity();
    setLifecycleState("initialized" /* INITIALIZED */);
    document.dispatchEvent(new CustomEvent(CustomEvents.OnInit, {
      detail: {
        sdkConfig: getSdkConfig()
      }
    }));
    resolveConsents(getSdkConfig().consents);
    return Promise.resolve();
  };
  var reinit = function reinit() {
    // W-9974392: don't restore the initial configured consent because it may have changed, use the actual values instead
    var consents = getConsents().map(function (consentWithMetadata) {
      return consentWithMetadata.consent;
    });
    init(_objectSpread2$1(_objectSpread2$1({}, getSdkConfig()), {}, {
      consents: consents
    })).then(function () {
      initSitemap(sitemapState.config);
    });
  };
  // TODO: is there a better way to do this? We need to export as an ES module but also expose
  // something on the global namespace.
  window.SalesforceInteractions = {
    init: init,
    reinit: reinit,
    sendEvent: sendEvent,
    sendException: sendException,
    getAnonymousId: getAnonymousId,
    setAnonymousId: setAnonymousId,
    getCookieDomain: getCookieDomain,
    setCookieDomain: setCookieDomain,
    updateConsents: updateConsents,
    getConsents: getConsents,
    ConsentStatus: exports.ConsentStatus,
    log: Logger,
    getLoggingLevel: getLoggingLevel,
    setLoggingLevel: setLoggingLevel,
    initSitemap: initSitemap,
    getSitemapConfig: getSitemapConfig,
    getSitemapResult: getSitemapResult,
    CatalogObjectInteractionName: CatalogObjectInteractionName,
    CartInteractionName: CartInteractionName,
    OrderInteractionName: OrderInteractionName,
    listener: listener,
    build: build,
    cashDom: cashDom,
    resolvers: resolvers,
    util: util,
    DisplayUtils: DisplayUtils,
    CustomEvents: CustomEvents
  };

  // tslint:disable variable-name
  var PROD_TRACKER_DOMAIN = 'evergage.com'; // TODO: use evgcdn?
  var PROD_CDN_DOMAIN = "cdn.".concat(PROD_TRACKER_DOMAIN);
  var DEFAULT_CONFIG = {
    sendEvents: true,
    /* defaults for client values */
    minimumActivityTimeToRegister: 300,
    timeOnPageTimerLengthMillis: 60000,
    /* defaults for server values */
    trackAnonymousVisitors: true,
    corsAllowedOrigins: ['*'],
    identityAttributes: [],
    rememberMeUserIdsMillis: 63072000000,
    actionRateLimiterConfig: {
      globalLimit: 10,
      globalTimeRange: 5000,
      perActionLimit: 5,
      perActionTimeRange: 2000
    },
    pingRateLimiterConfig: {
      globalLimit: 10,
      globalTimeRange: 5000
    },
    campaignStatRateLimiterConfig: {
      globalLimit: 10,
      globalTimeRange: 5000,
      perExperienceLimit: 5,
      perExperienceTimeRange: 2000
    },
    errorRateLimiterConfig: {
      globalLimit: 10,
      globalTimeRange: 5000
    }
  };
  // TODO: Typescript beacon - Version hard coded for now...
  var BEACON_VERSION = 16;
  // Cookie ID's
  var COOKIE_NAME_PREFIX = '_evg';
  var VISITOR_COOKIE_ID = 'a';
  var NAMED_COOKIE_ID_CLASSIC = 'n';
  // Test Messages Query Parameter
  var TEST_MESSAGES_QUERY_PARAM = "evergageTestMessages";
  var READABLE_EVENT_QUERY_PARAM = "isReadableEvent";
  // Event receiver paths
  var MESSAGE_STAT_RECEIVER_PATH = '/msreceiver';
  var EVENT_RECEIVER_PATH = '/api2/event/';
  var PING_RECEIVER_PATH = '/pr';
  var ERROR_RECEIVER_PATH = '/er';
  // Maximum GET request size. Most browsers (not IE) have limit around 8kb.
  /** @const */
  var MAX_GET_REQUEST_SIZE = 8192;
  // Custom field names and values are each truncated before being sent in the request or recorded in the cookie.
  // @sync com.apptegic.common.domain.data.validation.DefaultEventValidator.DEFAULT_MAX_FIELD_VALUE_LENGTH_CHARS
  /** @const */
  var CUSTOM_FIELD_MAX_LENGTH = 1024;
  // URL fields ("url" and "urlref") are each truncated before being sent in the request or recorded in the cookie.
  // @sync com.apptegic.common.domain.data.validation.DefaultEventValidator.DEFAULT_MAX_URL_VALUE_LENGTH_CHARS
  /** @const */
  var URL_FIELDS_MAX_LENGTH = 3072;
  var TITLE_FIELD_MAX_LENGTH = 1024;
  var CampaignStatType;
  (function (CampaignStatType) {
    CampaignStatType["Impression"] = "i";
    CampaignStatType["Clickthrough"] = "c";
    CampaignStatType["Dismissal"] = "d";
    CampaignStatType["Unsubscribe"] = "u";
    CampaignStatType["Send"] = "s";
  })(CampaignStatType || (CampaignStatType = {}));
  (function (ItemType) {
    ItemType["Product"] = "Product";
    ItemType["Category"] = "Category";
  })(exports.ItemType || (exports.ItemType = {}));
  var McisCatalogObjectInteractionName;
  (function (McisCatalogObjectInteractionName) {
    McisCatalogObjectInteractionName["StopQuickViewCatalogObject"] = "Stop Quick View Catalog Object";
  })(McisCatalogObjectInteractionName || (McisCatalogObjectInteractionName = {}));
  var McisConsentPurpose = {
    Personalization: "Personalization"
  };
  var itemIdKeys;
  (function (itemIdKeys) {
    itemIdKeys["_id"] = "_id";
    itemIdKeys["categories"] = "categories";
    itemIdKeys["dimensions"] = "dimensions";
    itemIdKeys["relatedCatalogObjects"] = "relatedCatalogObjects";
  })(itemIdKeys || (itemIdKeys = {}));

  (function (EvergageCustomEvents) {
    EvergageCustomEvents["OnEventResponse"] = "evergage:onEventResponse";
    EvergageCustomEvents["OnEventSend"] = "evergage:onEventSend";
    EvergageCustomEvents["OnStatSend"] = "evergage:onStatSend";
    EvergageCustomEvents["OnException"] = "evergage:onException";
    EvergageCustomEvents["OnTemplateDisplayEnd"] = "evergage:onTemplateDisplayEnd";
    EvergageCustomEvents["OnPageMatchStatusUpdated"] = "evergage:onPageMatchStatusUpdated";
    EvergageCustomEvents["OnInit"] = "evergage:onInit";
    EvergageCustomEvents["OnInitSitemap"] = "evergage:onInitSitemap";
    EvergageCustomEvents["OnShutDown"] = "evergage:onShutDown";
    EvergageCustomEvents["OnConsentRevoke"] = "evergage:onConsentRevoke";
  })(exports.CustomEvents || (exports.CustomEvents = {}));
  var McisCustomEvents;
  (function (McisCustomEvents) {
    McisCustomEvents["OnEventResponse"] = "mcis:onEventResponse";
    McisCustomEvents["OnStatSend"] = "mcis:onStatSend";
    McisCustomEvents["OnTemplateDisplayEnd"] = "mcis:onTemplateDisplayEnd";
    McisCustomEvents["OnBeforeEventSend"] = "mcis:onBeforeEventSend";
    McisCustomEvents["OnInit"] = "mcis:onInit";
  })(McisCustomEvents || (McisCustomEvents = {}));

  var state = {
    endpointConfig: {},
    beaconConfig: DEFAULT_CONFIG,
    beaconState: null
  };
  var setBeaconState = function setBeaconState(beaconState) {
    state.beaconState = beaconState;
  };
  var getConfig = function getConfig() {
    var endpointConfig = state.endpointConfig,
      config = state.beaconConfig;
    return _objectSpread2(_objectSpread2({}, endpointConfig), config);
  };
  var getSdkConfig$1 = function getSdkConfig() {
    var config = getConfig();
    return ['account', 'dataset', 'cookieDomain', 'consents', 'cdnUrl', 'trackerUrl', 'siteConfigVersion', 'minimumActivityTimeToRegister', 'timeOnPageTimerLengthMillis', 'sendEvents', 'trackAnonymousVisitors', 'doNotTrackPingRequestsForActions', 'trackContextualRelatedItems', 'identityAttributes', 'actionRateLimiterConfig', 'pingRateLimiterConfig', 'campaignStatRateLimiterConfig', 'errorRateLimiterConfig'].reduce(function (obj, key) {
      return obj[key] = config[key], obj;
    }, {});
  };

  function addEventListener(target, eventType, eventHandler, useCapture) {
    if (target.addEventListener) {
      target.addEventListener(eventType, eventHandler, useCapture);
      return true;
    }
    return false;
  }
  function removeEventListener(target, eventType, eventHandler, useCapture) {
    if (target.removeEventListener) {
      target.removeEventListener(eventType, eventHandler, useCapture);
      return true;
    }
    return false;
  }
  function isObject(property) {
    return _typeof(property) === 'object';
  }
  function urlParse(href) {
    var parser = document.createElement('a');
    parser.href = href;
    return parser;
  }

  // jsCookie is a vanilla javascript library, so we set the type definitions for js-cookie 2.2 from '@types/js-cookie'
  var Cookie$1 = js_cookie;
  /**
   * A sha1 of the current account, dataset and cookieDomainHash joined with periods
   */
  var cookieHash$1;
  document.addEventListener(CustomEvents.OnClearCookie, function (event) {
    var options = event.detail && event.detail.options || {};
    remove$1(VISITOR_COOKIE_ID, _objectSpread2({
      domain: state.beaconConfig.cookieDomain
    }, options));
    remove$1(NAMED_COOKIE_ID_CLASSIC, _objectSpread2({
      domain: state.beaconConfig.cookieDomain
    }, options));
  });
  var generateCookieDomainHash$1 = function generateCookieDomainHash(cookieDomain) {
    return sha1$1(cookieDomain + '/').slice(0, 4); // 4 hexits = 16 bits
  };
  var setCookieHash$1 = function setCookieHash(account, dataset, cookieDomain) {
    cookieHash$1 = sha1$1("".concat(account, ".").concat(dataset, ".").concat(generateCookieDomainHash$1(cookieDomain))).slice(0, 4);
  };
  var getCookieName$1 = function getCookieName(cookieShortId) {
    return "".concat(COOKIE_NAME_PREFIX).concat(cookieShortId, "_").concat(cookieHash$1);
  };
  var read$1 = function read(cookieShortId) {
    return Cookie$1.getJSON(getCookieName$1(cookieShortId));
  };
  var write$1 = function write(cookieShortId, cookieValue, daysToExpire, cookieDomain) {
    // check if secureCookie is on or off
    if (state.beaconConfig.secureCookie) {
      Cookie$1.set(getCookieName$1(cookieShortId), cookieValue, {
        expires: daysToExpire,
        domain: cookieDomain,
        secure: true
      });
    } else {
      Cookie$1.set(getCookieName$1(cookieShortId), cookieValue, {
        expires: daysToExpire,
        domain: cookieDomain
      });
    }
    if (!Cookie$1.get(getCookieName$1(cookieShortId))) {
      Logger.warn("Web SDK cookie (_evga) for the Interaction Studio module could not be set. This is possibly due to a restricted top level domain. See https://publicsuffix.org/learn/ for more information.");
    }
  };
  var remove$1 = function remove(cookieShortId, options) {
    Cookie$1.remove(getCookieName$1(cookieShortId), options);
  };
  var McisCookies = {
    setCookieHash: setCookieHash$1,
    read: read$1,
    write: write$1,
    remove: remove$1
  };

  var parseMcisVisitorCookie = function parseMcisVisitorCookie(visitorCookie) {
    return {
      uuid: visitorCookie.uuid,
      affinityId: visitorCookie.affinityId,
      persistedUserId: visitorCookie.puid,
      persistedAccountId: visitorCookie.paid
    };
  };
  var buildVisitorCookie = function buildVisitorCookie(visitor) {
    return {
      uuid: visitor.uuid,
      puid: visitor.persistedUserId,
      paid: visitor.persistedAccountId,
      affinityId: visitor.affinityId
    };
  };
  var updateVisitor = function updateVisitor(updatedVisitor) {
    var mergedVisitor = _objectSpread2(_objectSpread2({}, getVisitor()), updatedVisitor);
    McisCookies.write(VISITOR_COOKIE_ID, buildVisitorCookie(mergedVisitor), STORAGE_INFO.anonymousId.timeoutDays, state.beaconConfig.cookieDomain);
    var visitorCookie = McisCookies.read(VISITOR_COOKIE_ID);
    if (visitorCookie) {
      Logger.debug("Stored visitor cookie. ".concat(JSON.stringify(visitorCookie)));
    }
    return mergedVisitor;
  };
  var getCurrentDomainWithoutWWW = function getCurrentDomainWithoutWWW(currentDomain) {
    return currentDomain.indexOf("www") === 0 ? currentDomain.substring(4, currentDomain.length) : currentDomain;
  };
  var convertClassicAnonymousCookie = function convertClassicAnonymousCookie(visitorCookie) {
    if (!visitorCookie || _typeof(visitorCookie) === "object") {
      return;
    }
    McisCookies.remove(VISITOR_COOKIE_ID, {
      domain: state.beaconConfig.cookieDomain
    });
    McisCookies.remove(VISITOR_COOKIE_ID, {
      domain: getCurrentDomainWithoutWWW(location.hostname)
    });
    var cookieParts = visitorCookie.split(".");
    if (cookieParts.length > 0) {
      updateVisitor({
        uuid: cookieParts[0]
      });
      if (cookieParts.length > 1 && cookieParts[1]) {
        updateVisitor({
          affinityId: cookieParts[1]
        });
      }
    }
  };
  var convertClassicNamedCookie = function convertClassicNamedCookie(classicNamedCookie) {
    if (!classicNamedCookie || _typeof(classicNamedCookie) !== "object") {
      return;
    }
    McisCookies.remove(NAMED_COOKIE_ID_CLASSIC, {
      domain: state.beaconConfig.cookieDomain
    });
    McisCookies.remove(NAMED_COOKIE_ID_CLASSIC, {
      domain: getCurrentDomainWithoutWWW(location.hostname)
    });
    if (classicNamedCookie.puid && typeof classicNamedCookie.puid === "string") {
      updateVisitor({
        persistedUserId: classicNamedCookie.puid
      });
    }
    if (classicNamedCookie.paid && typeof classicNamedCookie.paid === "string") {
      updateVisitor({
        persistedAccountId: classicNamedCookie.paid
      });
    }
  };
  var handleClassicCookie = function handleClassicCookie(visitorCookie, classicNamedCookie) {
    convertClassicAnonymousCookie(visitorCookie);
    convertClassicNamedCookie(classicNamedCookie);
  };
  var classicCookieExists = function classicCookieExists(visitorCookie, classicNamedCookie) {
    return typeof visitorCookie === "string" && visitorCookie.length > 0 || classicNamedCookie != null && _typeof(classicNamedCookie) === "object";
  };
  var cookieExists = function cookieExists(visitorCookie) {
    return !!(visitorCookie && _typeof(visitorCookie) === "object" && Object.keys(visitorCookie).length > 0);
  };
  var convertMcisVisitorToSalesforceIdentity = function convertMcisVisitorToSalesforceIdentity() {
    var uuid = getVisitor().uuid;
    setAnonymousId(uuid);
  };
  var getVisitor = function getVisitor() {
    var visitorCookie = McisCookies.read(VISITOR_COOKIE_ID);
    return cookieExists(visitorCookie) ? parseMcisVisitorCookie(visitorCookie) : {};
  };
  var loadVisitor = function loadVisitor() {
    var visitorCookie = McisCookies.read(VISITOR_COOKIE_ID);
    var classicNamedCookie = McisCookies.read(NAMED_COOKIE_ID_CLASSIC);
    if (cookieExists(visitorCookie)) {
      // If existing Mcis cookie exists load that. If visitor.uuid is not the same as baseSDK anonymousId keep them in sync
      var visitor = updateVisitor(parseMcisVisitorCookie(visitorCookie));
      if (visitor.uuid !== getAnonymousId()) {
        convertMcisVisitorToSalesforceIdentity();
      }
      Logger.debug("Loaded visitor record from cookie: ".concat(JSON.stringify(getVisitor())));
    } else {
      // Convert classic cookie if it exists
      if (classicCookieExists(visitorCookie, classicNamedCookie)) {
        handleClassicCookie(visitorCookie, classicNamedCookie);
        convertMcisVisitorToSalesforceIdentity();
        Logger.debug("Classic cookie detected with anonymousId: ".concat(getVisitor().uuid));
      } else {
        // Load existing baseSDK cookie if it exists. Otherwise generate a new visitor and sync.
        if (identityCookieExists()) {
          updateVisitor({
            uuid: getAnonymousId()
          });
        } else {
          updateVisitor({
            uuid: generateUuid()
          });
          convertMcisVisitorToSalesforceIdentity();
        }
        Logger.debug("Created new visitor record. anonymousId: ".concat(getVisitor().uuid));
      }
    }
    return getVisitor();
  };
  var hasNamedUser = function hasNamedUser(event) {
    if (!event) return false;
    var _ref = event || {},
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user;
    var attributesAndIdentities = _objectSpread2(_objectSpread2({}, user.attributes), user.identities);
    var hasIdentityAttribute = Object.keys(attributesAndIdentities).some(function (a) {
      return state.beaconConfig.identityAttributes.includes(a);
    });
    return hasIdentityAttribute || !!user.id || !!getVisitor().persistedUserId;
  };

  var DEFAULT_SETTINGS = {
    canonicalizeIds: false,
    runOnTranslatedPage: false,
    setDefaultListPrice: false,
    truncateTranslated: true
  };
  var mcisSitemapState = {
    result: _objectSpread2(_objectSpread2({}, getSitemapResult()), {}, {
      backgroundPage: null
    }),
    config: _objectSpread2(_objectSpread2({}, getSitemapConfig()), {}, {
      settings: DEFAULT_SETTINGS,
      currentKey: null
    }),
    campaignResponses: []
  };
  var getCurrentPage = function getCurrentPage() {
    return mcisSitemapState.result.currentPage || {};
  };
  var getState = function getState() {
    mcisSitemapState.config.currentKey = getCurrentSitemapKey();
    return mcisSitemapState;
  };
  var getSitemapResult$1 = function getSitemapResult() {
    var mcisSitemapState = getState();
    return mcisSitemapState.result || null;
  };
  var getSitemapConfig$1 = function getSitemapConfig() {
    var mcisSitemapState = getState();
    return mcisSitemapState.config || null;
  };
  var getCampaignResponses = function getCampaignResponses() {
    var mcisSitemapState = getState();
    return mcisSitemapState.campaignResponses || [];
  };

  var SESSION_ONLY_ATTRIBUTE_NAME = "customer_non_consent";
  var shouldIncludeAnonFlag = function shouldIncludeAnonFlag(event) {
    return !event["userId" /* USER_ID */] && !event["_persistedUserId" /* PERSISTED_USER_ID */] && !event["_persistedAccountId" /* PERSISTED_ACCOUNT_ID */];
  };
  var addBaseParamsToEvent = function addBaseParamsToEvent(event) {
    event[".bv" /* BEACON_VERSION */] = BEACON_VERSION; // hard coded for now.
    event["_ak" /* ACCOUNT_KEY_PARAMETER */] = state.endpointConfig.account;
    event["_ds" /* DATASET_NAME_PARAMETER */] = state.endpointConfig.dataset;
    event[".scv" /* SITE_CONFIG_VERSION */] = state.endpointConfig.siteConfigVersion;
    event["channel" /* CHANNEL */] = DEFAULT_CHANNEL; // hard coded for now.
    event["_r" /* RANDOM_PARAM */] = String(Math.random()).slice(2, 8);
  };
  var addUserFieldsToEvent = function addUserFieldsToEvent(flatEvent) {
    var visitor = getVisitor();
    if (flatEvent["userId" /* USER_ID */]) {
      flatEvent["_reqPersistedEntityIds" /* REQ_PERSISTED_ENTITY_IDS */] = "";
    } else if (visitor.persistedUserId) {
      flatEvent["_persistedUserId" /* PERSISTED_USER_ID */] = visitor.persistedUserId;
    }
    // Temporary to enable the anonymous personalization feature early for a customer.
    addSessionOnly(flatEvent);
    if (state.beaconConfig.trackAnonymousVisitors) {
      // we pass the anon id always
      flatEvent[".anonId" /* ANON_ID */] = visitor.uuid;
      // TODO: figure out what to do with affinityId
      if (visitor.affinityId != null) {
        flatEvent[".aaId" /* ANON_AFFINITY_ID */] = visitor.affinityId;
      }
      if (shouldIncludeAnonFlag(flatEvent)) {
        flatEvent["_anon" /* ANON */] = 'true';
      }
    }
    return flatEvent;
  };
  var addSessionOnly = function addSessionOnly(flatEvent) {
    if (mcisSitemapState && mcisSitemapState.result && mcisSitemapState.result.currentPage && mcisSitemapState.result.currentPage.user && mcisSitemapState.result.currentPage.user.attributes && mcisSitemapState.result.currentPage.user.attributes[SESSION_ONLY_ATTRIBUTE_NAME]) {
      flatEvent[SESSION_ONLY_ATTRIBUTE_NAME] = mcisSitemapState.result.currentPage.user.attributes[SESSION_ONLY_ATTRIBUTE_NAME];
    }
  };
  var CUSTOM_FIELD_MAX_LENGTH$1 = 1024;
  var numToTrimTo = CUSTOM_FIELD_MAX_LENGTH$1 - 50;
  var numCharsThreeQuarters = Math.round(0.75 * numToTrimTo);
  var numCharsOneQuarter = Math.round(0.25 * numToTrimTo);
  var trimLogComponent = function trimLogComponent(value) {
    var logComponentString = "".concat(value); //converts value to a string
    // Trim even if it's within 50 of the max custom field length, just to be sure
    if (logComponentString == null || logComponentString.length <= numToTrimTo) {
      // No trimming required.
      return logComponentString;
    }
    var numCharsBeginning = numCharsThreeQuarters;
    var numCharsEnding = numCharsOneQuarter;
    if (numCharsBeginning + numCharsEnding != numToTrimTo) {
      numCharsBeginning += numToTrimTo - (numCharsBeginning + numCharsEnding);
    }
    var separatorString = " ... ";
    if (numCharsEnding > 10) {
      numCharsEnding -= separatorString.length;
    } else if (numCharsBeginning > 10) {
      numCharsBeginning -= separatorString.length;
    }
    return logComponentString.substring(0, numCharsBeginning) + separatorString + logComponentString.substring(logComponentString.length - numCharsEnding);
  };
  var parseExceptionCommon = function parseExceptionCommon(flatEvent, _ref) {
    var header = _ref.header,
      fileName = _ref.fileName,
      line = _ref.line,
      column = _ref.column;
    if (!!header) {
      flatEvent[".ef" /* ERROR_HEADER */] = trimLogComponent(header);
    }
    flatEvent[".eu" /* ERROR_FILE_NAME */] = trimLogComponent(fileName);
    flatEvent[".el" /* ERROR_LINE */] = trimLogComponent(line);
    flatEvent[".ec" /* ERROR_COLUMN */] = trimLogComponent(column);
    return flatEvent;
  };
  var SAFARI_PROP_MAP = _defineProperty(_defineProperty(_defineProperty({}, ".eu" /* ERROR_FILE_NAME */, 'sourceURL'), ".el" /* ERROR_LINE */, 'line'), ".ec" /* ERROR_COLUMN */, 'column');
  var MOZILLA_PROP_MAP = _defineProperty(_defineProperty(_defineProperty({}, ".eu" /* ERROR_FILE_NAME */, 'fileName'), ".el" /* ERROR_LINE */, 'lineNumber'), ".ec" /* ERROR_COLUMN */, 'columnNumber');
  var parseException = function parseException(flatEvent, exception, propMap) {
    if (!exception) {
      return flatEvent;
    }
    return parseExceptionCommon(flatEvent, {
      header: !!exception.stack && typeof exception.stack === "string" && exception.stack.substring(0, exception.stack.indexOf("@")),
      fileName: exception[propMap[".eu" /* ERROR_FILE_NAME */]],
      line: exception[propMap[".el" /* ERROR_LINE */]],
      column: exception[propMap[".ec" /* ERROR_COLUMN */]]
    });
  };
  var parseDefaultException = function parseDefaultException(flatEvent, exception) {
    if (!exception || !exception.stack || typeof exception.stack !== "string") {
      return flatEvent;
    }
    var caller_line = exception.stack.split("\n")[1];
    var fullLine = caller_line.substring(caller_line.indexOf("at ") + 3);
    var matches = fullLine.match(/(.*) \((.*):(\d+):(\d+)\)/);
    if (Array.isArray(matches)) {
      return parseExceptionCommon(flatEvent, {
        header: matches[1],
        fileName: matches[2],
        line: matches[3],
        column: matches[4]
      });
    }
    return flatEvent;
  };
  var getBrowserInfo = function getBrowserInfo() {
    var agent = window.navigator.userAgent.toLowerCase();
    var name = "unknown" /* UNKNOWN */;
    var regexName = '';
    switch (true) {
      case agent.indexOf("edge") > -1:
        name = "ie" /* MSIE */;
        regexName = 'edge';
        break;
      case agent.indexOf("trident") > -1:
        name = "ie" /* MSIE */;
        regexName = 'trident';
        break;
      case agent.indexOf("chrome") > -1 && !!window['chrome']:
        name = "chrome" /* CHROME */;
        regexName = name;
        break;
      case agent.indexOf("firefox") > -1:
        name = "mozilla" /* MOZILLA */;
        regexName = name;
        break;
      case agent.indexOf("safari") > -1:
        name = "safari" /* SAFARI */;
        regexName = name;
        break;
    }
    if (name !== "unknown" /* UNKNOWN */) {
      var regex = new RegExp("".concat(regexName, "/(.*?)s"), 'gm');
      var match = regex.exec(agent);
      var version = parseInt(!!match && match[1]);
      return {
        name: name,
        version: isNaN(version) ? null : version
      };
    }
    return {
      name: name,
      version: null
    };
  };
  var addErrorFieldsToEvent = function addErrorFieldsToEvent(flatEvent, exception, context) {
    var message = exception.message;
    flatEvent[".em" /* ERROR_MESSAGE */] = trimLogComponent(message || exception);
    flatEvent[".es" /* ERROR_SECTION */] = context;
    var browser = getBrowserInfo();
    flatEvent[".vt" /* BROWSER_NAME */] = browser.name;
    if (!!browser.version) {
      flatEvent[".vn" /* BROWSER_VERSION */] = browser.version;
    }
    switch (browser.name) {
      case "safari" /* SAFARI */:
        parseException(flatEvent, exception, SAFARI_PROP_MAP);
        break;
      case "mozilla" /* MOZILLA */:
        parseException(flatEvent, exception, MOZILLA_PROP_MAP);
        break;
      default:
        parseDefaultException(flatEvent, exception);
        break;
    }
    return flatEvent;
  };
  var toFlatItem = function toFlatItem(catalogPayload) {
    var itemType = Object.keys(catalogPayload)[0];
    if (!itemType) {
      return {};
    }
    var item = catalogPayload[itemType];
    var flatPingRequestItem = {
      type: itemType,
      _id: item._id
    };
    /* the check for state.beaconConfig.trackContextualRelatedItems has been removed
       and all ping requests now send Contextual Related Items by default */
    if (Array.isArray(item.categories)) {
      flatPingRequestItem.categories = item.categories.map(function (category) {
        if (typeof category === 'string') {
          return {
            _id: category,
            type: exports.ItemType.Category
          };
        }
        return category;
      });
    }
    if (isObject(item.dimensions) || isObject(item.relatedCatalogObjects)) {
      flatPingRequestItem.dimensions = {};
      var relatedCatalogObjects = item.relatedCatalogObjects || item.dimensions;
      for (var catalogObject in relatedCatalogObjects) {
        if (relatedCatalogObjects.hasOwnProperty(catalogObject)) {
          var values = relatedCatalogObjects[catalogObject];
          Array.isArray(values) ? flatPingRequestItem.dimensions[catalogObject] = values : flatPingRequestItem.dimensions[catalogObject] = [values];
        }
      }
    }
    return flatPingRequestItem;
  };
  var getFlatItemStats = function getFlatItemStats(catalogItems) {
    var serverItemsInStat = [];
    Object.keys(catalogItems).forEach(function (itemTypeKey) {
      serverItemsInStat = serverItemsInStat.concat(getFlatItemStatsForItemType(itemTypeKey, catalogItems[itemTypeKey]));
    });
    return serverItemsInStat;
  };
  var getFlatItemStatsForItemType = function getFlatItemStatsForItemType(itemTypeKey, items) {
    return items.map(function (itemId) {
      var keyForStat = itemTypeKeyToCampaignStatName(itemTypeKey);
      return {
        _id: itemId,
        type: keyForStat,
        tagType: keyForStat === "t" ? itemTypeKey : undefined
      };
    });
  };
  var itemTypeKeyToCampaignStatName = function itemTypeKeyToCampaignStatName(itemType) {
    switch (itemType) {
      case "Product":
        return "p";
      case "Article":
        return "a";
      case "Blog":
        return "b";
      case "Category":
        return "c";
      case "Promotion":
        return "P";
      default:
        return "t";
      //Assume it's a dimension and the input param is the tagType.
    }
  };
  var toFlatCampaignStat = function toFlatCampaignStat(stat) {
    var campaignStat = {
      type: "e" /* Experience */,
      id: stat.experienceId,
      stat: CampaignStatType[stat.stat],
      ug: stat.control ? 'Control' : undefined
    };
    if (stat.catalog) {
      campaignStat["piks"] = getFlatItemStats(stat.catalog);
    }
    return campaignStat;
  };
  var toFlatStat = function toFlatStat(event) {
    var flatEvent = {};
    flatEvent[".cStat" /* CAMPAIGN_STATS */] = JSON.stringify(event.campaignStats.map(toFlatCampaignStat));
    addBaseParamsToEvent(flatEvent);
    addUserFieldsToEvent(flatEvent);
    return flatEvent;
  };
  var toFlatError = function toFlatError(error, context) {
    var flatError = {};
    addBaseParamsToEvent(flatError);
    addUserFieldsToEvent(flatError);
    addErrorFieldsToEvent(flatError, error, context);
    return flatError;
  };
  var toFlatPing = function toFlatPing(event) {
    var flatEvent = {};
    flatEvent[".top" /* TIME_ON_PAGE */] = '' + event.timeOnPageMillis;
    if (event.catalog && Object.keys(event.catalog).length > 0) {
      flatEvent["item" /* ITEM */] = JSON.stringify(toFlatItem(event.catalog));
    }
    if (event.action) {
      flatEvent["action" /* ACTION */] = event.action;
    }
    addPerformanceFieldsToEvent(flatEvent, event);
    addBaseParamsToEvent(flatEvent);
    addUserFieldsToEvent(flatEvent);
    return flatEvent;
  };
  var addPerformanceFieldsToEvent = function addPerformanceFieldsToEvent(flatEvent, pingEvent) {
    if (pingEvent.performance) {
      addPerformanceFieldNotNull(".tt" /* NETWORK_TIME */, pingEvent.performance.networkTime, flatEvent);
      addPerformanceFieldNotNull(".ttdns" /* EVENT_DNS_TIME */, pingEvent.performance.eventDnsTime, flatEvent);
      addPerformanceFieldNotNull(".dt" /* DOM_LOAD_TIME */, pingEvent.performance.domLoadTime, flatEvent);
      addPerformanceFieldNotNull(".lt" /* PAGE_LOAD_TIME */, pingEvent.performance.pageLoadTime, flatEvent);
      addPerformanceFieldNotNull(".bt" /* SDK_LOAD_TIME */, pingEvent.performance.sdkLoadTime, flatEvent);
      addPerformanceFieldNotNull(".pt" /* SDK_PARSE_TIME */, pingEvent.performance.sdkParseTime, flatEvent);
      addPerformanceFieldNotNull(".btdns" /* SDK_DNS_TIME */, pingEvent.performance.sdkDnsTime, flatEvent);
    }
  };
  var addPerformanceFieldNotNull = function addPerformanceFieldNotNull(performanceKey, performanceValue, flatEvent) {
    if (performanceValue) {
      flatEvent[performanceKey] = performanceValue;
    }
  };

  var has = Object.prototype.hasOwnProperty,
    undef;

  /**
   * Decode a URI encoded string.
   *
   * @param {String} input The URI encoded string.
   * @returns {String|Null} The decoded string.
   * @api private
   */
  function decode(input) {
    try {
      return decodeURIComponent(input.replace(/\+/g, ' '));
    } catch (e) {
      return null;
    }
  }

  /**
   * Simple query string parser.
   *
   * @param {String} query The query string that needs to be parsed.
   * @returns {Object}
   * @api public
   */
  function querystring(query) {
    var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;
    while (part = parser.exec(query)) {
      var key = decode(part[1]),
        value = decode(part[2]);

      //
      // Prevent overriding of existing properties. This ensures that build-in
      // methods like `toString` or __proto__ are not overriden by malicious
      // querystrings.
      //
      // In the case if failed decoding, we want to omit the key/value pairs
      // from the result.
      //
      if (key === null || value === null || key in result) continue;
      result[key] = value;
    }
    return result;
  }

  /**
   * Transform a query string to an object.
   *
   * @param {Object} obj Object that should be transformed.
   * @param {String} prefix Optional prefix.
   * @returns {String}
   * @api public
   */
  function querystringify(obj, prefix) {
    prefix = prefix || '';
    var pairs = [],
      value,
      key;

    //
    // Optionally prefix with a '?' if needed
    //
    if ('string' !== typeof prefix) prefix = '?';
    for (key in obj) {
      if (has.call(obj, key)) {
        value = obj[key];

        //
        // Edge cases where we actually want to encode the value to an empty
        // string instead of the stringified value.
        //
        if (!value && (value === null || value === undef || isNaN(value))) {
          value = '';
        }
        key = encodeURIComponent(key);
        value = encodeURIComponent(value);

        //
        // If we failed to encode the strings, we should bail out as we don't
        // want to add invalid strings to the query.
        //
        if (key === null || value === null) continue;
        pairs.push(key + '=' + value);
      }
    }
    return pairs.length ? prefix + pairs.join('&') : '';
  }

  //
  // Expose the module.
  //
  var stringify = querystringify;
  var parse = querystring;

  var ExperienceRateLimiter = /*#__PURE__*/function (_EventRateLimiter) {
    _inherits(ExperienceRateLimiter, _EventRateLimiter);
    var _super = _createSuper(ExperienceRateLimiter);
    function ExperienceRateLimiter(eventLimiterConfig) {
      var _this;
      _classCallCheck(this, ExperienceRateLimiter);
      _this = _super.call(this, eventLimiterConfig);
      _this.getTimeRangeMax = function () {
        return _this.eventRateLimiterConfig.perExperienceTimeRange ? Math.max(_this.eventRateLimiterConfig.globalTimeRange, _this.eventRateLimiterConfig.perExperienceTimeRange) : _this.eventRateLimiterConfig.globalTimeRange;
      };
      _this.checkExperienceLimits = function (index, eventTime) {
        if (_this.eventRateLimiterConfig.perExperienceLimit && _this.eventRateLimiterConfig.perExperienceTimeRange && _this.eventWithinLimitTimeRange(_this.eventRateLimiterConfig.perExperienceTimeRange, _this.sentEvents[index], eventTime) && _this.sentEvents[index].experienceIds) {
          var eventExperienceIds = _this.sentEvents[index].experienceIds;
          for (var experienceIdIndex = 0; experienceIdIndex < eventExperienceIds.length; experienceIdIndex++) {
            var experienceId = eventExperienceIds[experienceIdIndex];
            if (!_this.experienceRates.has(experienceId)) {
              _this.experienceRates.set(experienceId, 0);
            }
            _this.experienceRates.set(experienceId, _this.experienceRates.get(experienceId) + 1);
            if (_this.experienceRates.get(experienceId) > _this.eventRateLimiterConfig.perExperienceLimit) {
              Logger.info("Event rate limit exceeded. More than ".concat(_this.eventRateLimiterConfig.perExperienceLimit, " events ") + "with experience id of ".concat(experienceId, " sent in ").concat(_this.eventRateLimiterConfig.perExperienceTimeRange, "ms."));
              return true;
            }
          }
        }
      };
      _this.checkLimits = function (index, experienceEventToRateLimit) {
        return _this.checkGlobalLimits(index, experienceEventToRateLimit.time) || _this.checkExperienceLimits(index, experienceEventToRateLimit.time);
      };
      return _this;
    }
    _createClass(ExperienceRateLimiter, [{
      key: "resetCounters",
      value: function resetCounters() {
        _get(_getPrototypeOf(ExperienceRateLimiter.prototype), "resetCounters", this).call(this);
        this.experienceRates = new Map();
      }
    }, {
      key: "isTriggerLimitExceeded",
      value: function isTriggerLimitExceeded(experienceEventInfo) {
        return _get(_getPrototypeOf(ExperienceRateLimiter.prototype), "isTriggerLimitExceeded", this).call(this, experienceEventInfo);
      }
    }]);
    return ExperienceRateLimiter;
  }(EventRateLimiter);

  var OneWayReceiver = /*#__PURE__*/function () {
    function OneWayReceiver(baseURL) {
      _classCallCheck(this, OneWayReceiver);
      this.baseURL = baseURL;
    }
    _createClass(OneWayReceiver, [{
      key: "send",
      value: function send(params) {
        prepareParamValues(params);
        var url = this.baseURL + '?' + stringify(params);
        if (navigator && navigator.sendBeacon) {
          var blob = new Blob([], {
            type: 'application/x-www-form-urlencoded'
          });
          return navigator.sendBeacon(url, blob);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.send();
        }
      }
    }]);
    return OneWayReceiver;
  }();
  var ErrorReceiver = /*#__PURE__*/function (_OneWayReceiver) {
    _inherits(ErrorReceiver, _OneWayReceiver);
    var _super = _createSuper(ErrorReceiver);
    function ErrorReceiver(baseUrl, eventRateLimiter) {
      var _this;
      _classCallCheck(this, ErrorReceiver);
      _this = _super.call(this, baseUrl);
      _this.eventRateLimiter = eventRateLimiter || new EventRateLimiter({
        globalLimit: state.beaconConfig.errorRateLimiterConfig.globalLimit,
        globalTimeRange: state.beaconConfig.errorRateLimiterConfig.globalTimeRange
      });
      return _this;
    }
    _createClass(ErrorReceiver, [{
      key: "send",
      value: function send(params) {
        if (this.eventRateLimiter.isTriggerLimitExceeded()) {
          Logger.warn('Error event rate limiter triggered.');
        } else {
          return _get(_getPrototypeOf(ErrorReceiver.prototype), "send", this).call(this, params);
        }
      }
    }]);
    return ErrorReceiver;
  }(OneWayReceiver);
  var PingReceiver = /*#__PURE__*/function (_OneWayReceiver2) {
    _inherits(PingReceiver, _OneWayReceiver2);
    var _super2 = _createSuper(PingReceiver);
    function PingReceiver(baseUrl, eventRateLimiter) {
      var _this2;
      _classCallCheck(this, PingReceiver);
      _this2 = _super2.call(this, baseUrl);
      _this2.eventRateLimiter = eventRateLimiter || new EventRateLimiter({
        globalLimit: state.beaconConfig.pingRateLimiterConfig.globalLimit,
        globalTimeRange: state.beaconConfig.pingRateLimiterConfig.globalTimeRange
      });
      return _this2;
    }
    _createClass(PingReceiver, [{
      key: "send",
      value: function send(params) {
        if (this.eventRateLimiter.isTriggerLimitExceeded()) {
          Logger.warn('Ping event rate limiter triggered.');
        } else {
          return _get(_getPrototypeOf(PingReceiver.prototype), "send", this).call(this, params);
        }
      }
    }]);
    return PingReceiver;
  }(OneWayReceiver);
  var CampaignStatReceiver = /*#__PURE__*/function (_OneWayReceiver3) {
    _inherits(CampaignStatReceiver, _OneWayReceiver3);
    var _super3 = _createSuper(CampaignStatReceiver);
    function CampaignStatReceiver(baseUrl, eventRateLimiter) {
      var _this3;
      _classCallCheck(this, CampaignStatReceiver);
      _this3 = _super3.call(this, baseUrl);
      _this3.eventRateLimiter = eventRateLimiter || new ExperienceRateLimiter({
        globalLimit: state.beaconConfig.campaignStatRateLimiterConfig.globalLimit,
        globalTimeRange: state.beaconConfig.campaignStatRateLimiterConfig.globalTimeRange,
        perExperienceLimit: state.beaconConfig.campaignStatRateLimiterConfig.perExperienceLimit,
        perExperienceTimeRange: state.beaconConfig.campaignStatRateLimiterConfig.perExperienceTimeRange
      });
      return _this3;
    }
    _createClass(CampaignStatReceiver, [{
      key: "send",
      value: function send(params, experienceIds) {
        experienceIds = experienceIds ? experienceIds : [];
        if (this.eventRateLimiter.isTriggerLimitExceeded({
          experienceIds: experienceIds
        })) {
          Logger.warn('Campaign Stat event rate limiter triggered.');
        } else {
          return _get(_getPrototypeOf(CampaignStatReceiver.prototype), "send", this).call(this, params);
        }
      }
    }]);
    return CampaignStatReceiver;
  }(OneWayReceiver);
  var prepareParamValues = function prepareParamValues(params) {
    Object.keys(params).forEach(function (key) {
      var value = params[key];
      if (typeof value == 'number' || typeof value === 'boolean' || value == null) {
        return;
      } else if (typeof value == 'string') {
        params[key] = truncateParamValue(key, value);
      } else if (typeof value == 'function') {
        delete params[key];
      } else {
        params[key] = JSON.stringify(value);
      }
    });
  };
  var truncateParamValue = function truncateParamValue(key, value) {
    switch (key) {
      case "url" /* URL */:
      case "urlref" /* URLREF */:
        return value.substring(0, URL_FIELDS_MAX_LENGTH);
      case "title" /* TITLE */:
        return value.substring(0, TITLE_FIELD_MAX_LENGTH);
      default:
        return value.substring(0, CUSTOM_FIELD_MAX_LENGTH);
    }
  };
  var campaignStatReceiverUrl = function campaignStatReceiverUrl(trackerURL) {
    return trackerURL + MESSAGE_STAT_RECEIVER_PATH;
  };
  var pingReceiverUrl = function pingReceiverUrl(trackerURL) {
    return trackerURL + PING_RECEIVER_PATH;
  };
  var errorReceiverUrl = function errorReceiverUrl(trackerURL) {
    return trackerURL + ERROR_RECEIVER_PATH;
  };
  var campaignStatReceiver;
  var pingReceiver;
  var errorReceiver;
  var initOneWayReceivers = function initOneWayReceivers(baseURL) {
    var campaignStatCurrentEventRateLimiter = campaignStatReceiver ? campaignStatReceiver.eventRateLimiter : null;
    campaignStatReceiver = new CampaignStatReceiver(campaignStatReceiverUrl(baseURL), campaignStatCurrentEventRateLimiter);
    var pingCurrentEventRateLimiter = pingReceiver ? pingReceiver.eventRateLimiter : null;
    pingReceiver = new PingReceiver(pingReceiverUrl(baseURL), pingCurrentEventRateLimiter);
    var errorCurrentEventRateLimiter = errorReceiver ? errorReceiver.eventRateLimiter : null;
    errorReceiver = new ErrorReceiver(errorReceiverUrl(baseURL), errorCurrentEventRateLimiter);
  };

  var sentPageLoadTime = false;
  var sentDomLoadTime = false;
  var sentSdkTimes = false;
  var performanceMetrics = {
    sdkLoadTime: null,
    sdkParseTime: null,
    sdkDnsTime: null,
    pageLoadTime: null,
    domLoadTime: null,
    networkTime: null,
    eventDnsTime: null //.ttdns
  };
  var setSdkLoadTime = function setSdkLoadTime() {
    performanceMetrics.sdkLoadTime = Math.round((getSdkRequestTiming() || {}).duration) || null;
  };
  var setSdkParseTime = function setSdkParseTime() {
    if (window.evergageBeaconParseTimeStart && window.window.evergageBeaconParseTimeEnd) {
      performanceMetrics.sdkParseTime = window.evergageBeaconParseTimeEnd - window.evergageBeaconParseTimeStart;
    }
  };
  var setSdkDnsTime = function setSdkDnsTime() {
    var sdkRequestTiming = getSdkRequestTiming();
    if (sdkRequestTiming && sdkRequestTiming.domainLookupEnd != undefined && sdkRequestTiming.domainLookupStart != undefined) {
      performanceMetrics.sdkDnsTime = Math.round(sdkRequestTiming.domainLookupEnd - sdkRequestTiming.domainLookupStart);
    }
  };
  var setNetworkTime = function setNetworkTime() {
    performanceMetrics.networkTime = Math.round((getEventRequestTiming() || {}).duration) || null;
  };
  var setEventDnsTime = function setEventDnsTime() {
    var eventRequestTiming = getEventRequestTiming();
    if (eventRequestTiming) {
      performanceMetrics.eventDnsTime = Math.round(eventRequestTiming.domainLookupEnd - eventRequestTiming.domainLookupStart) || null;
    }
  };
  var setDomLoadTime = function setDomLoadTime() {
    var navigationTiming = getNavigationTiming();
    if (navigationTiming && navigationTiming.domContentLoadedEventEnd > 0) {
      if (isPerformanceNavigationTiming(navigationTiming)) {
        performanceMetrics.domLoadTime = Math.round(navigationTiming.domContentLoadedEventEnd) || null;
      } else {
        performanceMetrics.domLoadTime = Math.round(navigationTiming.domContentLoadedEventEnd - window.performance.timing.navigationStart) || null;
      }
    }
  };
  var setPageLoadTime = function setPageLoadTime() {
    var navigationTiming = getNavigationTiming();
    if (navigationTiming) {
      if (isPerformanceNavigationTiming(navigationTiming)) {
        performanceMetrics.pageLoadTime = Math.round(navigationTiming.loadEventEnd) || null;
      } else {
        performanceMetrics.pageLoadTime = Math.round(navigationTiming.loadEventEnd - window.performance.timing.navigationStart) || null;
      }
    }
  };
  // only sent on last PR before exiting page
  var getEventRequestTiming = function getEventRequestTiming() {
    if (window.performance.getEntriesByType) {
      var requestPerformances = window.performance.getEntriesByType("resource");
      return requestPerformances.reverse().find(function (perf) {
        return perf.name.indexOf("/api2/event/") >= 0;
      });
    }
    return null;
  };
  var getSdkRequestTiming = function getSdkRequestTiming() {
    if (window.performance.getEntriesByType) {
      var requestPerformances = window.performance.getEntriesByType("resource");
      return requestPerformances.find(function (perf) {
        return /\/evergage(Small)?(\.min)?\.js$/.test(perf.name);
      });
    }
    return null;
  };
  var getNavigationTiming = function getNavigationTiming() {
    if (window.performance.getEntriesByType) {
      var performanceEntryList = window.performance.getEntriesByType("navigation");
      if (performanceEntryList && performanceEntryList.length > 0) {
        var navigationTimings = performanceEntryList[0];
        if (!navigationTimings) {
          navigationTimings = window.performance.timing;
        }
        return navigationTimings;
      }
    }
    return null;
  };
  var clearMetricsSentInEvent = function clearMetricsSentInEvent(event) {
    for (var metric in event.performance) {
      performanceMetrics[metric] = null;
    }
  };
  var setLoadTimeMetricsBeforeSend = function setLoadTimeMetricsBeforeSend() {
    if (!sentDomLoadTime) {
      setDomLoadTime();
      if (performanceMetrics.domLoadTime) {
        sentDomLoadTime = true;
      }
    }
    if (!sentPageLoadTime) {
      setPageLoadTime();
      if (performanceMetrics.pageLoadTime) {
        sentPageLoadTime = true;
      }
    }
  };
  var setSdkTimeMetricsBeforeSend = function setSdkTimeMetricsBeforeSend() {
    if (!sentSdkTimes) {
      setSdkLoadTime();
      setSdkParseTime();
      setSdkDnsTime();
      sentSdkTimes = true;
    }
  };
  var isPerformanceNavigationTiming = function isPerformanceNavigationTiming(navigationTiming) {
    return navigationTiming.entryType != undefined;
  };

  var getPathnameFromLocation = function getPathnameFromLocation(location) {
    if (!location) {
      return '';
    }
    return location.pathname;
  };
  var getPathname = function getPathname(url) {
    if (!url) {
      return '';
    }
    return getPathnameFromLocation(urlParse(url));
  };
  var getParameterByName = function getParameterByName(name, url) {
    var queryString = typeof url === "undefined" ? location.search : url;
    var parsed = parse(queryString);
    return parsed[name] || '';
  };
  var extractFirstGroup = function extractFirstGroup(regex, str) {
    var matcher = regex.exec(str);
    if (matcher && matcher.length === 2) {
      return matcher[1];
    } else {
      return null;
    }
  };
  var getLastPathComponent = function getLastPathComponent(url) {
    return extractFirstGroup(/[/]?([^/]*)[/]?$/, getPathname(url));
  };
  var qualifyUrl = function qualifyUrl(unqualified) {
    if (typeof unqualified !== 'string' || unqualified.trim() === '') {
      return null;
    }
    var parser = urlParse(unqualified);
    // get qualified url
    return parser.href;
  };
  var removeQueryString = function removeQueryString(url) {
    if (!url) {
      return '';
    }
    var parser = urlParse(url);
    var pathname = getPathnameFromLocation(parser);
    var isHttpOrHttpsUri = parser.protocol === 'http:' && parser.port === '80' || parser.protocol === 'https:' && parser.port === '443';
    var host = isHttpOrHttpsUri ? parser.hostname : parser.host;
    return [parser.protocol, '//', host, pathname].join('');
  };
  var getLastPathComponentWithoutExtension = function getLastPathComponentWithoutExtension(url) {
    var last = getLastPathComponent(qualifyUrl(url));
    var indexOfDot = last.lastIndexOf('.');
    if (indexOfDot >= 0) {
      return last.substring(0, indexOfDot);
    } else {
      return last;
    }
  };
  var getUtagFirstForField = function getUtagFirstForField(fieldName) {
    var utagData = window.utag_data;
    if (utagData && utagData[fieldName] && utagData[fieldName].length >= 0) {
      if (Array.isArray(utagData[fieldName])) {
        return utagData[fieldName][0];
      } else {
        return utagData[fieldName];
      }
    }
  };
  var getFloatValue = function getFloatValue(text) {
    if (text && typeof text === 'string') {
      var asFloat = parseFloat(text.replace(/[^0-9.]+/g, ''));
      if (isNaN(asFloat)) {
        return null;
      } else {
        return asFloat;
      }
    } else {
      return null;
    }
  };
  var getIntegerValue = function getIntegerValue(text) {
    if (text && typeof text === 'string') {
      var asInt = parseInt(text.trim().replace(/[^0-9.]+/g, ''), 10);
      if (isNaN(asInt)) {
        return null;
      } else {
        return asInt;
      }
    } else {
      return null;
    }
  };
  var buildLineItemFromPageState = function buildLineItemFromPageState(quantitySelector) {
    if (mcisSitemapState.result.currentPage && mcisSitemapState.result.currentPage.catalog) {
      var pageData = mcisSitemapState.result.currentPage.catalog[exports.ItemType.Product];
      if (!pageData) {
        return null;
      }
      return {
        _id: pageData._id,
        price: pageData.price,
        quantity: getFloatValue(cash(quantitySelector).val())
      };
    }
  };
  var buildLineItemFromBasePageState = function buildLineItemFromBasePageState(quantitySelector) {
    var result = getSitemapResult();
    if (result.currentPage && result.currentPage.interaction && result.currentPage.interaction["catalogObject"]) {
      var catalogObject = result.currentPage.interaction["catalogObject"];
      if (!catalogObject) {
        return null;
      }
      return {
        catalogObjectType: catalogObject.type,
        catalogObjectId: catalogObject.id,
        price: catalogObject.attributes && catalogObject.attributes.price ? catalogObject.attributes.price : null,
        quantity: getFloatValue(cash(quantitySelector).val())
      };
    }
  };
  var cookie = js_cookie;
  var resolveWhenTrue$1 = util.resolveWhenTrue;
  var util$1 = {
    extractFirstGroup: extractFirstGroup,
    getLastPathComponent: getLastPathComponent,
    getLastPathComponentWithoutExtension: getLastPathComponentWithoutExtension,
    getParameterByName: getParameterByName,
    getPathname: getPathname,
    qualifyUrl: qualifyUrl,
    removeQueryString: removeQueryString,
    getFloatValue: getFloatValue,
    getIntegerValue: getIntegerValue,
    getUtagFirstForField: getUtagFirstForField,
    getValueFromNestedObject: getValueFromNestedObject,
    buildLineItemFromPageState: buildLineItemFromPageState,
    resolveWhenTrue: resolveWhenTrue$1,
    cookie: cookie
  };

  var buildCart = function buildCart(lineItemConfig) {
    return new Promise(function (resolve, reject) {
      checkSitemapReinit(reject);
      resolveAndCleanValue$1(lineItemConfig, "lineItems", false, true).then(function (data) {
        var resolvedCart = {
          complete: {
            Product: []
          }
        };
        var lineItems;
        if (Object.keys(data).length === 0) {
          resolve(resolvedCart);
        }
        lineItems = resolveAndCleanValue$1(data, "lineItems", true, false);
        resolvedCart.complete['Product'] = lineItems;
        resolve(resolvedCart);
      }).catch(function () {
        sendException(new Error("Cart Config was rejected"), 'Site-wide Javascript');
      });
    });
  };
  var resolveAndCleanValue$1 = function resolveAndCleanValue(value, key, clean, buildAttributes) {
    try {
      var resolvedValue;
      setCurrentSitemapKey(key);
      if (value) {
        if ((key === "dimensions" || key === "relatedCatalogObjects" || key === "lineItems" || key === "attributes") && buildAttributes) {
          resolvedValue = buildNestedAttributes$1(value, key);
        } else {
          resolvedValue = typeof value === "function" ? value() : value;
          if (key === "categories" && Array.isArray(resolvedValue) && _typeof(resolvedValue[0]) !== "object" && resolvedValue[0].type !== "c" && typeof resolvedValue[0]._id !== "string") {
            resolvedValue = buildCategoriesAttribute(resolvedValue);
          } else if (key === "lineItems" && _typeof(resolvedValue) === "object") {
            resolvedValue = buildMultipleLineItem(resolvedValue);
          }
        }
      }
      return clean ? cleanValue(key, resolvedValue, mcisSitemapState.config.settings.canonicalizeIds) : resolvedValue;
    } catch (e) {
      sendException(new Error("getValue for ".concat(key, " failed on ").concat(mcisSitemapState.result.matchedConfig.name, " while evaluating custom function. ").concat(e.message, ".")), 'Site-wide Javascript');
    }
  };
  var setItemValue = function setItemValue(value, key, item) {
    if (value && _typeof(value) === "object" && typeof value.then === "function") {
      sendException(new Error("getValue for ".concat(key, " failed on ").concat(mcisSitemapState.result.matchedConfig.name, " while evaluating custom function. ").concat(key, " cannot be a Promise.")), 'Site-wide Javascript');
    } else if (value || typeof value === "number" || typeof value === "boolean") {
      item[key] = value;
    }
  };
  var buildItem = function buildItem(itemConfig, itemType) {
    return new Promise(function (resolve, reject) {
      checkSitemapReinit(reject);
      var idKeys = Object.keys(itemIdKeys);
      var catalogPromises = [];
      for (var _i = 0, _idKeys = idKeys; _i < _idKeys.length; _i++) {
        var key = _idKeys[_i];
        var resolvedValue = resolveAndCleanValue$1(itemConfig[key], key, false, true);
        catalogPromises.push(resolvedValue);
      }
      Promise.all(catalogPromises).then(function (values) {
        var item = {
          _id: null
        };
        values.forEach(function (value, index) {
          var currentKey = idKeys[index];
          var resolvedValue = resolveAndCleanValue$1(value, currentKey, true, false);
          setItemValue(resolvedValue, currentKey, item);
        });
        Object.keys(itemConfig).forEach(function (key) {
          if (idKeys.includes(key)) return;
          var valueFromConfig = itemConfig[key];
          var resolvedValue = resolveAndCleanValue$1(valueFromConfig, key, true, true);
          setItemValue(resolvedValue, key, item);
        });
        var resolvedItem = _defineProperty({}, itemType, item);
        resolve(resolvedItem);
      }).catch(function () {
        sendException(new Error("Catalog Config was rejected"), 'Site-wide Javascript');
      });
    });
  };
  var buildOrder = function buildOrder(orderConfig) {
    return new Promise(function (resolve, reject) {
      checkSitemapReinit(reject);
      var orderPromises = [];
      var orderConfigKeys = Object.keys(orderConfig);
      orderConfigKeys.forEach(function (key) {
        setCurrentSitemapKey(key);
        var valueFromConfig = orderConfig[key];
        var resolvedValue = resolveAndCleanValue$1(valueFromConfig, key, false, true);
        orderPromises.push(resolvedValue);
      });
      Promise.all(orderPromises).then(function (values) {
        var order = {};
        var resolvedOrder = {
          Product: {}
        };
        values.forEach(function (value, index) {
          var orderConfigKey = orderConfigKeys[index];
          order[orderConfigKey] = resolveAndCleanValue$1(value, orderConfigKey, true, false);
        });
        resolvedOrder["Product"] = order;
        resolve(resolvedOrder);
      }).catch(function () {
        sendException(new Error("Order Config was rejected"), 'Site-wide Javascript');
      });
    });
  };
  var buildMultipleLineItem = function buildMultipleLineItem(multipleLineItem) {
    var numItems;
    if (multipleLineItem._id) {
      numItems = multipleLineItem._id.length;
    } else if (multipleLineItem.sku) {
      numItems = multipleLineItem.sku.length;
    } else {
      sendException(new Error("Either _id or sku must be defined for lineItems"), 'Sitemap');
    }
    var unformattedLineItems = [];
    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      if (value.length != numItems) {
        sendException(new Error("Resolving multiple values for ".concat(key, " failed on ").concat(mcisSitemapState.result.matchedConfig.name, ". ").concat(key, " does not have the same number of values as _id")), 'Site-wide Javascript');
      } else {
        value.forEach(function (val, i) {
          if (!unformattedLineItems[i]) {
            unformattedLineItems[i] = {
              _id: null,
              quantity: null
            };
          }
          unformattedLineItems[i][key] = val;
        });
      }
    };
    for (var _i2 = 0, _Object$entries = Object.entries(multipleLineItem); _i2 < _Object$entries.length; _i2++) {
      _loop();
    }
    return unformattedLineItems;
  };
  var buildCategoriesAttribute = function buildCategoriesAttribute(categoriesValue) {
    return categoriesValue.map(function (categoryId) {
      return {
        type: "c",
        _id: categoryId
      };
    });
  };
  var buildNestedAttributes$1 = function buildNestedAttributes(nestedAttributeConfig, key) {
    var nestedAttributes = {};
    var nestedAttributeKeys = Object.keys(nestedAttributeConfig);
    var resolvedNestedAttributes = {};
    nestedAttributeKeys.forEach(function (nestedKey) {
      var nestedAttributeValue = nestedAttributeConfig[nestedKey];
      nestedAttributes[nestedKey] = resolveAndCleanValue$1(nestedAttributeValue, nestedKey, false, true);
    });
    if (key === "lineItems" || key === "dimensions" || key === "relatedCatalogObjects") {
      return Promise.all(Object.values(nestedAttributes)).then(function (values) {
        values.forEach(function (value, index) {
          var key = nestedAttributeKeys[index];
          var resolvedValue = resolveAndCleanValue$1(value, key, false, false);
          if (resolvedValue) resolvedNestedAttributes[key] = resolvedValue;
        });
        return resolvedNestedAttributes;
      });
    }
    return nestedAttributes;
  };
  var cleanValue = function cleanValue(key, value) {
    var canonicalizeIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (Array.isArray(value)) {
      if (key === "lineItems") {
        value = cleanLineItems(value, canonicalizeIds);
      } else {
        value = value.map(function (val) {
          return cleanSingleValue(key, val, canonicalizeIds);
        });
      }
    } else {
      value = cleanSingleValue(key, value, canonicalizeIds);
    }
    return value;
  };
  var cleanLineItems = function cleanLineItems(lineItems) {
    var canonicalizeIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return lineItems.map(function (lineItem) {
      return cleanLineItem(lineItem, canonicalizeIds);
    });
  };
  var cleanLineItem = function cleanLineItem(lineItem) {
    var canonicalizeIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    for (var lineItemKey in lineItem) {
      if (lineItemKey === "item") {
        for (var itemKey in lineItem[lineItemKey]) {
          lineItem[lineItemKey][itemKey] = cleanValue(itemKey, lineItem[lineItemKey][itemKey], canonicalizeIds);
        }
      } else {
        lineItem[lineItemKey] = cleanValue(lineItemKey, lineItem[lineItemKey], canonicalizeIds);
      }
    }
    return lineItem;
  };
  var cleanSingleValue = function cleanSingleValue(key, value) {
    var canonicalizeIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var currentValue = value;
    if ((key === 'price' || key === 'listPrice' || key === 'totalValue' || key === 'rating') && typeof currentValue === 'string') {
      currentValue = getFloatValue(currentValue);
    }
    if (key === 'url' || key === 'imageUrl') {
      currentValue = qualifyUrl(currentValue);
    }
    if ((key === '_id' || key === 'sku' || key === 'orderId') && typeof currentValue === 'number') {
      currentValue = currentValue.toString();
    }
    if (canonicalizeIds && typeof currentValue === 'string' && (key === '_id' || key === 'sku' || key === 'orderId' || key === 'alternateId' || key === 'parentId')) {
      currentValue = currentValue.toUpperCase();
    }
    if (typeof currentValue === 'string') {
      if (currentValue.indexOf('&') >= 0) {
        var textarea = document.createElement('textarea');
        Object.assign(textarea, {
          innerHTML: currentValue
        });
        currentValue = textarea.value;
      }
      currentValue = currentValue.trim();
    }
    if (key === 'description' && typeof currentValue === 'string' && currentValue.length > 200) {
      currentValue = currentValue.substr(0, 197) + '...';
    }
    if ((key === 'quantity' || key === 'inventoryCount' || key === 'numRatings') && typeof currentValue === 'string') {
      currentValue = getIntegerValue(currentValue);
    }
    return currentValue;
  };
  var checkSitemapReinit = function checkSitemapReinit(promiseReject) {
    document.addEventListener(exports.CustomEvents.OnInitSitemap, function () {
      promiseReject(SITEMAP_REINIT);
    }, {
      once: true
    });
  };

  /*
   * Copyright 2010-2021 salesforce.com, inc.
   * All Rights Reserved. Company Confidential.
   */
  var currentOptOutPersonalizationExists = function currentOptOutPersonalizationExists() {
    return consentExists({
      purpose: McisConsentPurpose.Personalization,
      status: exports.ConsentStatus.OptOut
    });
  };
  var consentExists = function consentExists(consent) {
    return getConsents().some(function (currentConsentWithMetadata) {
      return currentConsentWithMetadata.consent.purpose === consent.purpose && currentConsentWithMetadata.consent.status === consent.status;
    });
  };

  /*
   * Copyright 2010-2021 salesforce.com, inc.
   * All Rights Reserved. Company Confidential.
   */
  var canSendEvent = function canSendEvent(event) {
    if (!state.beaconConfig.trackAnonymousVisitors && !hasNamedUser(event)) {
      Logger.debug("An anonymous event has been blocked. trackAnonymous has been turned off and event has no named user.");
      return false;
    }
    return !currentOptOutPersonalizationExists() && state.beaconConfig.sendEvents;
  };

  var _excluded = ["sdkLoadTime", "sdkParseTime"],
    _excluded2 = ["id", "type"],
    _excluded3 = ["Category"];
  var timeOnPage = 0;
  var lastActiveTimestamp = -1;
  var lastPingRequestSent = -1;
  var activityPingRequestTimeout;
  var setUserInactiveTimeout;
  var sendPing = function sendPing(event) {
    return canSendEvent(event) ? pingReceiver.send(toFlatPing(event)) : Promise.resolve(event);
  };
  function cancelActivityTracking() {
    Logger.debug('Cancelling activity tracking.');
    clearTimeout(activityPingRequestTimeout);
    activityPingRequestTimeout = -1;
    removeEventListener(window, 'pagehide', pagehideFunction);
    removeEventListener(window, 'blur', windowBlurFunction);
    removeEventListener(window, 'focus', windowFocusFunction);
    removeEventListener(document, 'mousemove keydown scroll click', activityRegistered);
  }
  function refreshActivityTrackingBeforeSendEvent(event) {
    var actionEvent = event.detail && event.detail.actionEvent;
    if (!actionEvent) return;
    if (actionEvent.itemAction && actionEvent.itemAction.includes('View')) {
      setupActivityTimers();
    } else if (actionEvent.interaction && isViewCatalogInteraction(actionEvent.interaction.name)) {
      setupActivityTimers();
    }
  }
  function isViewCatalogInteraction(name) {
    return name === CatalogObjectInteractionName.ViewCatalogObject || name === CatalogObjectInteractionName.ViewCatalogObjectDetail || name === CatalogObjectInteractionName.QuickViewCatalogObject || name === McisCatalogObjectInteractionName.StopQuickViewCatalogObject;
  }
  function sendExistingActivityTimersAndClear(dontSendSmallIncrements) {
    if (activityPingRequestTimeout !== -1) {
      sendActivityPingRequest(false, dontSendSmallIncrements);
      clearTimeout(activityPingRequestTimeout);
      activityPingRequestTimeout = -1;
    }
  }
  function setupActivityTimers() {
    if (state.beaconConfig.doNotTrackPingRequestsForActions) {
      return;
    }
    sendExistingActivityTimersAndClear(true);
    document.removeEventListener(exports.CustomEvents.OnEventSend, refreshActivityTrackingBeforeSendEvent);
    document.addEventListener(exports.CustomEvents.OnEventSend, refreshActivityTrackingBeforeSendEvent);
    var possibleNewTimestamp = Date.now();
    if (lastActiveTimestamp === -1 || possibleNewTimestamp - lastActiveTimestamp >= state.beaconConfig.minimumActivityTimeToRegister) {
      lastActiveTimestamp = possibleNewTimestamp;
    }
    activityPingRequestTimeout = setTimeout(function () {
      sendActivityPingRequest(true);
    }, state.beaconConfig.timeOnPageTimerLengthMillis);
    Logger.info('Setting up time on page listeners.');
    removeEventListener(window, 'pagehide', pagehideFunction);
    addEventListener(window, 'pagehide', pagehideFunction);
    removeEventListener(window, 'blur', windowBlurFunction);
    addEventListener(window, 'blur', windowBlurFunction);
    removeEventListener(window, 'focus', windowFocusFunction);
    addEventListener(window, 'focus', windowFocusFunction);
    removeEventListener(document, 'mousemove keydown scroll click', activityRegistered);
    addEventListener(document, 'mousemove keydown scroll click', activityRegistered);
  }
  function sendActivityPingRequest(shouldResetTimer, dontSendSmallIncrements) {
    var currentTime = Date.now();
    if (lastActiveTimestamp !== -1) {
      var timeSinceLastActive = currentTime - lastActiveTimestamp;
      if (state.beaconConfig.timeOnPageTimerLengthMillis < timeSinceLastActive) {
        setUserInactive();
      } else {
        Logger.trace("Evergage: timeOnPage before: sendActivityPingRequest: ".concat(timeOnPage));
        timeOnPage += timeSinceLastActive;
        Logger.trace("Evergage: timeOnPage after: sendActivityPingRequest: ".concat(timeOnPage));
        if (setUserInactiveTimeout !== -1) {
          clearTimeout(setUserInactiveTimeout);
        }
        setUserInactiveTimeout = setTimeout(setUserInactive, state.beaconConfig.timeOnPageTimerLengthMillis - timeSinceLastActive);
      }
    }
    if (timeOnPage > 0) {
      // The user's clock probably got set back.  Rezero the clock so future activity will get correctly tracked
      timeOnPage = Math.min(timeOnPage, state.beaconConfig.timeOnPageTimerLengthMillis);
      if (dontSendSmallIncrements !== true || timeOnPage >= 2000) {
        var pingEvent = buildPingRequest(timeOnPage);
        sendPing(pingEvent);
        clearMetricsSentInEvent(pingEvent);
      }
      timeOnPage = 0;
    }
    // The user's clock probably got set back.  Rezero the clock so future activity will get correctly tracked
    if (timeOnPage < 0) {
      timeOnPage = 0;
    }
    if (shouldResetTimer) {
      if (activityPingRequestTimeout !== -1) {
        clearTimeout(activityPingRequestTimeout);
      }
      // only reason not to reset is if multiple viewItem calls occur on the same page
      activityPingRequestTimeout = setTimeout(function () {
        sendActivityPingRequest(true);
      }, state.beaconConfig.timeOnPageTimerLengthMillis);
    }
  }
  function buildPingRequest(time) {
    var pingEvent = {
      timeOnPageMillis: time
    };
    var currentPage = getCurrentPage();
    var catalogPayload = {};
    if (currentPage && currentPage.itemAction && currentPage.catalog) {
      catalogPayload = currentPage.catalog;
    } else if (currentPage && currentPage.interaction && currentPage.interaction["catalogObject"]) {
      catalogPayload = convertCatalogObjectToCatalogPayload(currentPage.interaction["catalogObject"]);
    }
    if (Object.keys(catalogPayload).length !== 0) {
      pingEvent.catalog = catalogPayload;
    }
    if (currentPage && currentPage.interaction && currentPage.interaction.name != null) {
      pingEvent.action = currentPage.interaction.name;
    } else if (currentPage && currentPage.action != null) {
      pingEvent.action = currentPage.action;
    }
    setPerformanceMetricsOnPingEvent(pingEvent);
    return pingEvent;
  }
  function setPerformanceMetricsOnPingEvent(pingEvent) {
    setLoadTimeMetricsBeforeSend();
    pingEvent.performance = {};
    var pingEventMetrics = _objectWithoutProperties(performanceMetrics, _excluded);
    for (var metric in pingEventMetrics) {
      if (performanceMetrics[metric]) {
        pingEvent.performance[metric] = performanceMetrics[metric];
      }
    }
  }
  function convertCatalogObjectToCatalogPayload(catalogObject) {
    var catalogPayload = {};
    var id = catalogObject.id,
      type = catalogObject.type,
      catalog = _objectWithoutProperties(catalogObject, _excluded2);
    if (id && type) {
      catalogPayload[catalogObject.type] = {
        _id: id
      };
    }
    if (catalogObject.relatedCatalogObjects) {
      var _catalog$relatedCatal = catalog.relatedCatalogObjects,
        Category = _catalog$relatedCatal.Category,
        relatedCatalogObjects = _objectWithoutProperties(_catalog$relatedCatal, _excluded3);
      if (Array.isArray(Category)) {
        catalogPayload[catalogObject.type].categories = buildCategoriesAttribute(Category);
      }
      if (Object.keys(relatedCatalogObjects).length !== 0) {
        catalogPayload[catalogObject.type].relatedCatalogObjects = relatedCatalogObjects;
      }
    }
    return catalogPayload;
  }
  function pagehideFunction() {
    sendExistingActivityTimersAndClear();
  }
  function windowBlurFunction(event) {
    try {
      Logger.trace('Evergage: window blurred');
      setUserInactive();
    } catch (exception) {
      sendException(exception, 'windowBlurFunction');
    }
  }
  function windowFocusFunction(event) {
    try {
      Logger.trace('Evergage: window focused');
      activityRegistered();
    } catch (exception) {
      sendException(exception, 'windowFocusFunction');
    }
  }
  function setUserInactive() {
    try {
      if (setUserInactiveTimeout !== -1) {
        clearTimeout(setUserInactiveTimeout);
        setUserInactiveTimeout = -1;
      }
      var currentTime = Date.now();
      var timeToAdd = 0;
      if (lastActiveTimestamp !== -1) {
        timeToAdd = currentTime - lastActiveTimestamp;
      }
      if (lastPingRequestSent !== -1) {
        var timeSinceLastPingRequest = currentTime - lastPingRequestSent;
        if (timeSinceLastPingRequest < timeToAdd || timeToAdd === 0) {
          timeToAdd = timeSinceLastPingRequest;
        }
      }
      Logger.trace("Evergage: timeOnPage before: setUserInactive: ".concat(timeOnPage));
      timeOnPage += timeToAdd;
      Logger.trace("Evergage: timeOnPage after: setUserInactive: ".concat(timeOnPage));
      lastActiveTimestamp = -1;
    } catch (exception) {
      sendException(exception, 'setUserInactive');
    }
  }
  function activityRegistered() {
    Logger.trace('activity registered');
    try {
      if (setUserInactiveTimeout !== -1) {
        clearTimeout(setUserInactiveTimeout);
        setUserInactiveTimeout = -1;
      }
      var possibleNewTimestamp = Date.now();
      if (lastActiveTimestamp === -1 || possibleNewTimestamp - lastActiveTimestamp >= state.beaconConfig.minimumActivityTimeToRegister) {
        if (lastActiveTimestamp !== -1) {
          Logger.trace("Evergage: timeOnPage before: activityRegistered: ".concat(timeOnPage));
          timeOnPage += possibleNewTimestamp - Math.max(lastActiveTimestamp, lastPingRequestSent);
          Logger.trace("Evergage: timeOnPage after: activityRegistered: ".concat(timeOnPage));
        }
        lastActiveTimestamp = possibleNewTimestamp;
      }
    } catch (exception) {
      sendException(exception, 'activityRegistered');
    }
  }
  var sendPingWithPerformanceTiming = function sendPingWithPerformanceTiming() {
    sendExistingActivityTimersAndClear();
    setupActivityTimers();
  };
  var Activity = {
    setupActivityTimers: setupActivityTimers,
    activityRegistered: activityRegistered,
    setUserInactive: setUserInactive
  };

  (function (ItemAction) {
    ItemAction["ViewItem"] = "View Item";
    ItemAction["ViewItemOutOfStock"] = "View Item Out Of Stock";
    ItemAction["ViewItemDetail"] = "View Item Detail";
    ItemAction["QuickViewItem"] = "Quick View Item";
    ItemAction["StopQuickViewItem"] = "Stop Quick View Item";
    ItemAction["ViewCategory"] = "View Category";
    ItemAction["ViewTag"] = "View Tag";
    ItemAction["AddToCart"] = "Add To Cart";
    ItemAction["ViewCart"] = "View Cart";
    ItemAction["Purchase"] = "Purchase";
    ItemAction["Share"] = "Share";
    ItemAction["Review"] = "Review";
    ItemAction["Comment"] = "Comment";
    ItemAction["Favorite"] = "Favorite";
    ItemAction["Search"] = "Search";
    ItemAction["SearchViewResults"] = "Search View Results";
    ItemAction["SearchClick"] = "Search Click";
    ItemAction["ClickThrough"] = "Click Through";
    ItemAction["UpdateLineItem"] = "Update Line Item";
    ItemAction["RemoveFromCart"] = "Remove From Cart";
    ItemAction["ViewBanditItems"] = "View Bandit Items";
  })(exports.ItemAction || (exports.ItemAction = {}));

  function createCustomError(errorOrMessage, extraProperties) {
    var error = typeof errorOrMessage === 'string' ? new Error(errorOrMessage) : errorOrMessage;
    for (var property in extraProperties) {
      Object.defineProperty(error, property, {
        value: extraProperties[property],
        enumerable: false
      });
    }
    return error;
  }
  var EventReceiver = /*#__PURE__*/function () {
    function EventReceiver(baseURL, eventRateLimiter) {
      _classCallCheck(this, EventReceiver);
      this.baseURL = baseURL;
      this.eventRateLimiter = eventRateLimiter || new InteractionEventRateLimiter({
        globalLimit: state.beaconConfig.actionRateLimiterConfig.globalLimit,
        globalTimeRange: state.beaconConfig.actionRateLimiterConfig.globalTimeRange,
        perInteractionLimit: state.beaconConfig.actionRateLimiterConfig.perActionLimit,
        perInteractionTimeRange: state.beaconConfig.actionRateLimiterConfig.perActionTimeRange
      });
    }
    _createClass(EventReceiver, [{
      key: "handleSpecialEvent",
      value: function handleSpecialEvent(event) {
        var action = event.interaction && event.interaction.name ? event.interaction.name : event.itemAction;
        if (action === exports.ItemAction.QuickViewItem || action === CatalogObjectInteractionName.QuickViewCatalogObject) {
          mcisSitemapState.result = _objectSpread2(_objectSpread2({}, mcisSitemapState.result), {}, {
            backgroundPage: mcisSitemapState.result.backgroundPage || mcisSitemapState.result.currentPage,
            currentPage: _objectSpread2({}, event)
          });
          if (action === exports.ItemAction.QuickViewItem) {
            mcisSitemapState.result.currentPage.action = event.action || exports.ItemAction.QuickViewItem;
            mcisSitemapState.result.currentPage.itemAction = exports.ItemAction.QuickViewItem;
          }
        } else if (action === exports.ItemAction.StopQuickViewItem || action === McisCatalogObjectInteractionName.StopQuickViewCatalogObject) {
          mcisSitemapState.result = _objectSpread2(_objectSpread2({}, mcisSitemapState.result), {}, {
            backgroundPage: null,
            currentPage: mcisSitemapState.result.backgroundPage || mcisSitemapState.result.currentPage
          });
        }
      }
    }, {
      key: "handlePersistedIdentityInResponse",
      value: function handlePersistedIdentityInResponse(response) {
        var visitor = {};
        var persistedUserId = response.persistedUserId,
          anonAffinityId = response.anonAffinityId;
        if (persistedUserId) {
          var entityId = persistedUserId.entityId,
            accountId = persistedUserId.accountId;
          if (entityId) {
            visitor.persistedUserId = entityId;
          }
          if (accountId) {
            visitor.persistedAccountId = accountId;
          }
        }
        if (anonAffinityId && anonAffinityId !== visitor.affinityId) {
          visitor.affinityId = anonAffinityId;
        }
        updateVisitor(visitor);
      }
    }, {
      key: "handlePerformanceTimingBeforeEvent",
      value: function handlePerformanceTimingBeforeEvent() {
        setLoadTimeMetricsBeforeSend();
        setSdkTimeMetricsBeforeSend();
      }
    }, {
      key: "handlePerformanceTimingInResponse",
      value: function handlePerformanceTimingInResponse() {
        setNetworkTime();
        setEventDnsTime();
        sendPingWithPerformanceTiming();
      }
      /*
          Prevent errors if InteractionStudioTools sets wrong flag due to being out of date
          TODO: Can be removed once W-10501653 is implemented
       */
    }, {
      key: "handleDebug",
      value: function handleDebug(actionEvent) {
        if (actionEvent.interaction && actionEvent.interaction.name && actionEvent.debug && actionEvent.debug.explanations) {
          actionEvent.explain = actionEvent.debug.explanations;
          delete actionEvent.debug.explanations;
        }
      }
    }, {
      key: "onEventSend",
      value: function onEventSend(actionEvent) {
        var _this = this;
        this.handlePerformanceTimingBeforeEvent();
        var shouldSendEvent = document.dispatchEvent(new CustomEvent(exports.CustomEvents.OnEventSend, {
          detail: {
            actionEvent: actionEvent
          },
          cancelable: true
        })) && document.dispatchEvent(new CustomEvent(McisCustomEvents.OnBeforeEventSend, {
          detail: {
            actionEvent: actionEvent
          },
          cancelable: true
        }));
        if (!shouldSendEvent) {
          Logger.debug('MCIS Module onBeforeEventSend cancelled.');
          return;
        }
        this.handleDebug(actionEvent);
        this.handleSpecialEvent(actionEvent);
        Logger.debug('Sending event: ', actionEvent);
        this.send(actionEvent).then(function (response) {
          clearMetricsSentInEvent(actionEvent);
          if (actionEvent.pageView || actionEvent.flags && actionEvent.flags.pageView) {
            _this.handlePerformanceTimingInResponse();
          }
          _this.handlePersistedIdentityInResponse(response);
          Logger.debug('Received event response: ', response);
          if (response.campaignResponses) {
            var experienceIdsFromEvent = response.campaignResponses.map(function (campaignResponseFromEvent) {
              return campaignResponseFromEvent.experienceId;
            });
            mcisSitemapState.campaignResponses = [].concat(_toConsumableArray(response.campaignResponses), _toConsumableArray(mcisSitemapState.campaignResponses.filter(function (campaignResponse) {
              return !experienceIdsFromEvent.includes(campaignResponse.experienceId);
            })));
          }
          document.dispatchEvent(new CustomEvent(exports.CustomEvents.OnEventResponse, {
            detail: {
              response: response,
              actionEvent: actionEvent
            }
          }));
          document.dispatchEvent(new CustomEvent(McisCustomEvents.OnEventResponse, {
            detail: {
              response: response,
              actionEvent: actionEvent
            }
          }));
        }).catch(function (error) {
          sendException(error, 'Server Response'); // TODO: check if redispatch on Evergage namespace
        });
      }
    }, {
      key: "send",
      value: function send(payload) {
        var _this2 = this;
        return new Promise(function (resolve, reject) {
          var interactionName = payload["action" /* ACTION */] || payload.interaction && payload.interaction.name;
          if (_this2.eventRateLimiter.isTriggerLimitExceeded({
            name: interactionName
          })) {
            reject(new Error('Event Rate Limiter triggered'));
            return;
          }
          var payloadString;
          try {
            payloadString = JSON.stringify(payload);
          } catch (e) {
            return reject(e);
          }
          var xhr = new XMLHttpRequest();
          xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
              try {
                var responseJson = JSON.parse(xhr.response);
                resolve(responseJson);
              } catch (e) {
                reject(createCustomError(e, {
                  status: this.status,
                  statusText: xhr.statusText
                }));
              }
            } else {
              reject(createCustomError("Response was not OK: ".concat(xhr.responseText), {
                status: this.status,
                statusText: xhr.statusText
              }));
            }
          };
          xhr.onerror = function () {
            if (xhr.responseType === "" || xhr.responseType === "text") {
              var message = xhr.responseText || xhr.statusText;
              if (message) {
                reject(createCustomError("Response error: ".concat(message), {
                  status: this.status,
                  statusText: xhr.statusText
                }));
                return; // <- Remove this if we want to always log.debug
              }
            }
            Logger.debug("An error was sent with no text.  \
                                    This is un-actionable so it is being logged instead of written.");
          };
          if (payload.debug && payload.debug.explanations || payload.explain) {
            xhr.withCredentials = true;
          }
          if (getParameterByName(READABLE_EVENT_QUERY_PARAM) == 'true') {
            _this2.sendPost(xhr, _this2.baseURL, payloadString);
            return;
          }
          try {
            if (!/^[\x20-\x7E]+$/.test(payloadString)) {
              throw new Error('GET request payload contains non-ASCII characters, try sending POST request');
            }
            var _payload = encodeURIComponent(window.btoa(payloadString));
            var url = _this2.baseURL + '?event=' + _payload;
            if (url.length > MAX_GET_REQUEST_SIZE) {
              throw new Error('GET request URL exceeds 8192 characters, try sending POST request');
            }
            _this2.sendGet(xhr, url);
          } catch (e) {
            _this2.sendPost(xhr, _this2.baseURL, payloadString);
          }
        });
      }
    }, {
      key: "sendGet",
      value: function sendGet(xhr, url) {
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
        xhr.send();
      }
    }, {
      key: "sendPost",
      value: function sendPost(xhr, url, payload) {
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('event=' + encodeURIComponent(payload));
      }
    }]);
    return EventReceiver;
  }();
  var eventReceiverUrl = function eventReceiverUrl(trackerURL) {
    return trackerURL + EVENT_RECEIVER_PATH + state.endpointConfig.dataset;
  };
  var eventReceiver;
  var initEventReceivers = function initEventReceivers(baseURL) {
    var currentEventRateLimiter = eventReceiver ? eventReceiver.eventRateLimiter : null;
    eventReceiver = new EventReceiver(eventReceiverUrl(baseURL), currentEventRateLimiter);
  };

  var processContentZonesForMatchedConfig = function processContentZonesForMatchedConfig(pageConfig) {
    return (pageConfig.contentZones || []).reduce(function (allZones, zoneConfig) {
      var foundContentZone = attemptToFindContentZone(zoneConfig);
      if (typeof (foundContentZone || {}).name === "string" && (foundContentZone || {}).name !== "") allZones.push(foundContentZone);
      return allZones;
    }, []);
  };
  var processContentZonesForCurrentPage = function processContentZonesForCurrentPage(pageConfig) {
    return (pageConfig.contentZones || []).reduce(function (allZones, zoneConfig) {
      var foundContentZone = attemptToFindContentZone(zoneConfig);
      if (typeof (foundContentZone || {}).name === "string" && (foundContentZone || {}).name !== "") allZones.push((foundContentZone || {}).name);
      return allZones;
    }, []);
  };
  var attemptToFindContentZone = function attemptToFindContentZone(zoneConfig) {
    var selectorFound = !(zoneConfig || {}).selector || cashDom((zoneConfig || {}).selector).length > 0;
    return _objectSpread2(_objectSpread2({}, zoneConfig), {}, {
      selectorFound: selectorFound
    });
  };
  var getContentZoneSelector = function getContentZoneSelector(contentZoneName) {
    var matchedConfig = mcisSitemapState.result.matchedConfig;
    var _ref = matchedConfig || {},
      contentZones = _ref.contentZones;
    if (!contentZones) {
      return null;
    }
    var contentZone = contentZones.find(function (contentZone) {
      return contentZone.name === contentZoneName;
    });
    return !!contentZone && !!contentZone.selector ? contentZone.selector : null;
  };

  var listenerAndContentZoneSearchInterval;
  var startListenerAndContentZoneSearch = function startListenerAndContentZoneSearch() {
    var listenerSearch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    cancelListenerAndContentZoneSearch();
    if (pageHasMissingZonesOrListeners(listenerSearch)) {
      listenerAndContentZoneSearchInterval = setInterval(function () {
        var updated = false;
        var intervalTimerStart = new Date().getTime();
        var matchedConfig = mcisSitemapState.result.matchedConfig || {};
        var listenerState = matchedConfig.listeners || [];
        var contentZoneState = matchedConfig.contentZones || [];
        if (listenerSearch) {
          listenerState = listenerState.map(function (d) {
            if (d.selectorFound) {
              return d;
            } else {
              var listener = attemptToBindListener(d);
              updated = listener.selectorFound || updated;
              return listener;
            }
          });
        }
        contentZoneState = contentZoneState.map(function (c) {
          if (c.selectorFound) {
            return c;
          } else {
            var contentZone = attemptToFindContentZone(c);
            updated = contentZone.selectorFound || updated;
            return contentZone;
          }
        });
        if (updated) {
          Object.assign(mcisSitemapState.result.matchedConfig, _objectSpread2(_objectSpread2({}, mcisSitemapState.result.matchedConfig), {}, {
            contentZones: contentZoneState,
            listeners: listenerState
          }));
        }
        var intervalTimerEnd = new Date().getTime();
        var intervalRunningTime = intervalTimerEnd - intervalTimerStart;
        if (intervalRunningTime > 50 || !pageHasMissingZonesOrListeners(listenerSearch)) {
          cancelListenerAndContentZoneSearch();
        }
      }, 1000);
    }
  };
  var pageHasMissingZonesOrListeners = function pageHasMissingZonesOrListeners(listenerSearch) {
    if (mcisSitemapState.result.matchedConfig) {
      var _mcisSitemapState$res = mcisSitemapState.result.matchedConfig,
        listeners = _mcisSitemapState$res.listeners,
        contentZones = _mcisSitemapState$res.contentZones;
      var hasMissingListeners,
        hasMissingContentZones = false;
      if (listeners && listenerSearch) {
        hasMissingListeners = !!listeners.filter(function (d) {
          return !d.selectorFound;
        }).length;
      }
      if (contentZones) {
        hasMissingContentZones = !!contentZones.filter(function (c) {
          return !c.selectorFound;
        }).length;
      }
      return hasMissingListeners || hasMissingContentZones;
    } else {
      return false;
    }
  };
  var cancelListenerAndContentZoneSearch = function cancelListenerAndContentZoneSearch() {
    if (typeof listenerAndContentZoneSearchInterval === 'number') {
      clearInterval(listenerAndContentZoneSearchInterval);
    }
    listenerAndContentZoneSearchInterval = null;
  };
  var removeCurrentListeners$1 = function removeCurrentListeners() {
    if (mcisSitemapState.result && mcisSitemapState.result.matchedConfig && mcisSitemapState.result.matchedConfig.listeners) {
      mcisSitemapState.result.matchedConfig.listeners.forEach(function (listener) {
        cashDom(listener.selector).off(listener.bind);
      });
    }
  };

  var DO_NOT_TRUNCATE = {
    _id: true,
    id: true,
    currency: true,
    inventoryCount: true,
    price: true,
    tagType: true,
    type: true
  };
  var detectTranslate = function detectTranslate() {
    // These checks can't trigger cross origin error
    var googleTranslate = cashDom('script[src*="//translate.googleusercontent.com"]').length > 0;
    var chromeTranslate = cashDom('html.translated-ltr').length > 0 || cashDom('html.translated-rtl').length > 0;
    if (googleTranslate || chromeTranslate) {
      Logger.debug('page is translated');
      return true;
    }
    try {
      var bingTranslate = cashDom(window.parent.document).find('script[src*="//www.microsofttranslator.com"]').length > 0;
      var worldLingoTranslate = cashDom(window.parent.document).find('frame[src*="//www.worldlingo.com"]').length > 0;
      if (bingTranslate || worldLingoTranslate) {
        Logger.debug('page is translated');
        return true;
      } else {
        Logger.debug('page is not translated');
        return false;
      }
    } catch (e) {
      // These checks can cause cross origin error
      Logger.debug('exception caught, assuming page is untranslated ' + e);
      return false;
    }
  };
  var truncateTranslatedCatalog = function truncateTranslatedCatalog(catalogPayload) {
    Object.keys(catalogPayload).forEach(function (itemKey) {
      var item = catalogPayload[itemKey];
      Object.keys(item).forEach(function (key) {
        if (!DO_NOT_TRUNCATE[key]) {
          delete item[key]; // tslint:disable-line no-delete no-object-mutation
        }
      });
    });
    return catalogPayload;
  };
  var truncateTranslatedInteraction = function truncateTranslatedInteraction(catalogObject) {
    Object.keys(catalogObject).forEach(function (key) {
      if (!DO_NOT_TRUNCATE[key]) {
        delete catalogObject[key];
      }
    });
    return catalogObject;
  };
  var shouldTruncateTranslated = function shouldTruncateTranslated() {
    return mcisSitemapState.config && mcisSitemapState.config.settings && mcisSitemapState.config.settings.truncateTranslated && detectTranslate();
  };

  var _excluded$1 = ["anonymousId"];
  var sendStructuredEvent = function sendStructuredEvent(event) {
    var shouldPrepareEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (shouldPrepareEvent) prepareEvent(event);
    if (!canSendEvent(event)) {
      return Promise.resolve(event);
    }
    prepareStructuredEvent(event);
    validateStructuredEvent(event);
    eventReceiver.onEventSend(event);
    return new Promise(function (resolve) {
      document.addEventListener(exports.CustomEvents.OnEventResponse, function (event) {
        if (event && event.detail && event.detail.response) {
          resolve(event.detail.response);
        }
      });
    });
  };
  var prepareStructuredEvent = function prepareStructuredEvent(event) {
    prepareUserPayload$1(event);
    addMcisFields(event);
  };
  var prepareUserPayload$1 = function prepareUserPayload(event) {
    var visitor = getVisitor();
    var _ref = event.user || {},
      anonymousId = _ref.anonymousId,
      user = _objectWithoutProperties(_ref, _excluded$1);
    event.user = _objectSpread2(_objectSpread2({}, user || {}), {}, {
      anonId: visitor.uuid
    });
  };
  var addMcisFields = function addMcisFields(actionEvent) {
    addPersistedUserIdIfNecessary(actionEvent);
    prepareAccountPayload(actionEvent);
    prepareDebugPayload(actionEvent);
    prepareSourcePayload$1(actionEvent);
    preparePerformancePayload(actionEvent);
  };
  var addPersistedUserIdIfNecessary = function addPersistedUserIdIfNecessary(event) {
    var visitor = getVisitor();
    if (visitor.persistedUserId) {
      event.user.encryptedId = visitor.persistedUserId;
    }
  };
  var prepareAccountPayload = function prepareAccountPayload(event) {
    var visitor = getVisitor();
    event.account = event.account || {};
    if (visitor.persistedAccountId) {
      event.account.encryptedId = visitor.persistedAccountId;
    }
  };
  var prepareSourcePayload$1 = function prepareSourcePayload(event) {
    var isPageViewEvent = event.pageView || (event.flags || {}).pageView;
    event.source = _objectSpread2(_objectSpread2({}, event.source || {}), {}, {
      beaconVersion: BEACON_VERSION,
      configVersion: state.endpointConfig.siteConfigVersion,
      contentZones: prepareContentZonesForSourcePayload(event.source, isPageViewEvent)
    });
  };
  var prepareDebugPayload = function prepareDebugPayload(event) {
    var experienceIds = getParameterByName(TEST_MESSAGES_QUERY_PARAM);
    if (experienceIds) {
      event.debug ? event.debug.testMessages = experienceIds : event.debug = {
        testMessages: experienceIds
      };
    }
  };
  var preparePerformancePayload = function preparePerformancePayload(event) {
    if (performanceMetrics.domLoadTime || performanceMetrics.pageLoadTime || performanceMetrics.sdkParseTime || performanceMetrics.sdkLoadTime || performanceMetrics.sdkDnsTime) {
      event.performance = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, performanceMetrics.domLoadTime && {
        domLoadTime: performanceMetrics.domLoadTime
      }), performanceMetrics.pageLoadTime && {
        pageLoadTime: performanceMetrics.pageLoadTime
      }), performanceMetrics.sdkParseTime && {
        sdkParseTime: performanceMetrics.sdkParseTime
      }), performanceMetrics.sdkLoadTime && {
        sdkLoadTime: performanceMetrics.sdkLoadTime
      }), performanceMetrics.sdkDnsTime && {
        sdkDnsTime: performanceMetrics.sdkDnsTime
      });
    }
  };
  var prepareContentZonesForSourcePayload = function prepareContentZonesForSourcePayload(eventSource, pageView) {
    return (eventSource.contentZones || []).reduce(function (allZones, contentZone) {
      if (!pageView && _typeof(contentZone) === "object" && (contentZone || {}).name) {
        Logger.warn("Using content zone objects in 'sendEvent' will soon be deprecated in favor of zone names as strings");
      }
      var contentZoneName = typeof contentZone === "string" && contentZone !== "" ? contentZone : (contentZone || {}).name;
      if (typeof contentZoneName === "string" && contentZoneName !== "") allZones.push(contentZoneName);
      return allZones;
    }, []);
  };
  var validateStructuredEvent = function validateStructuredEvent(event) {
    return validateRelatedCatalogObjects(event);
  };
  var validateRelatedCatalogObjects = function validateRelatedCatalogObjects(event) {
    if (event.catalog && Object.keys(event.catalog).length > 0) {
      Object.keys(event.catalog).forEach(function (itemType) {
        if (event.catalog[itemType]) {
          if (event.catalog[itemType].dimensions && event.catalog[itemType].relatedCatalogObjects) {
            sendException(new Error("Catalog cannot include both dimensions and relatedCatalogObjects"), "Sitemap");
            return false;
          }
          var relatedCatalogObjects = event.catalog[itemType].relatedCatalogObjects || event.catalog[itemType].dimensions;
          if (relatedCatalogObjects && isObject(relatedCatalogObjects)) {
            Object.keys(relatedCatalogObjects).forEach(function (catalogObject) {
              if (!Array.isArray(relatedCatalogObjects[catalogObject])) {
                sendException(new Error("".concat(catalogObject, " is not an array. Related Catalog Objects must have type of string[]")), "Sitemap");
                return false;
              }
            });
          }
        }
      });
    }
    return true;
  };

  var deepCopyActionEvent = function deepCopyActionEvent(actionEvent) {
    // TODO: Look into more efficient ways to deepCopy the actionEvent
    var mcisActionEvent;
    try {
      mcisActionEvent = JSON.parse(JSON.stringify(actionEvent));
    } catch (e) {
      sendException(e, 'Copy ActionEvent');
    }
    return mcisActionEvent;
  };
  var handleInteractionEvent = function handleInteractionEvent(actionEvent) {
    if (actionEvent.interaction && actionEvent.interaction["catalogObject"] && shouldTruncateTranslated()) {
      truncateTranslatedInteraction(actionEvent.interaction["catalogObject"]);
    }
    cleanInteractionCatalogValues(actionEvent.interaction);
    addMcisFields(actionEvent);
    prepareContentZonesForEvent(actionEvent);
  };
  var cleanInteractionCatalogValues = function cleanInteractionCatalogValues(interaction) {
    if (interaction) {
      if ("catalogObject" in interaction) {
        cleanCatalogInteraction(interaction.catalogObject);
      } else if ("lineItem" in interaction) {
        cleanCatalogInteraction(interaction.lineItem);
      } else if ("lineItems" in interaction) {
        interaction.lineItems.map(function (lineItem) {
          return cleanCatalogInteraction(lineItem);
        });
      } else if ("order" in interaction) {
        cleanCatalogInteraction(interaction.order);
      }
    }
  };
  var cleanCatalogInteraction = function cleanCatalogInteraction(interactionTypeData) {
    if (_typeof(interactionTypeData) === "object") {
      for (var _i = 0, _Object$keys = Object.keys(interactionTypeData); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var currentValue = interactionTypeData[key];
        if (key === "lineItems" && Array.isArray(currentValue)) {
          currentValue.map(function (lineItem) {
            if (lineItem.catalogObjectId && typeof lineItem.catalogObjectId === "string") {
              lineItem.catalogObjectId = lineItem.catalogObjectId.trim();
            }
          });
        } else if (key === "relatedCatalogObjects") {
          for (var _i2 = 0, _Object$keys2 = Object.keys(currentValue); _i2 < _Object$keys2.length; _i2++) {
            var catalogObject = _Object$keys2[_i2];
            if (Array.isArray(currentValue[catalogObject])) {
              currentValue[catalogObject] = currentValue[catalogObject].map(function (val) {
                if (typeof val === "string") {
                  return val.trim();
                }
              });
            }
          }
        } else if (key === "catalogObjectId" || key === "id") {
          if (typeof currentValue === "string") {
            interactionTypeData[key] = currentValue.trim();
          }
        }
      }
    }
  };
  var prepareContentZonesForEvent = function prepareContentZonesForEvent(event) {
    if (event && event.source && Array.isArray(event.source.contentZones) && event.source.contentZones.length > 0) {
      return;
    }
    var matchedConfig = getSitemapResult().matchedConfig;
    //TODO: Better way is to hook into baseSDK handleConfig instead of relying on event.pageView
    if (matchedConfig && event.pageView) {
      mcisSitemapState.result.matchedConfig = _objectSpread2(_objectSpread2({}, matchedConfig), {}, {
        contentZones: processContentZonesForMatchedConfig(matchedConfig)
      });
      mcisSitemapState.result.currentPage = _objectSpread2(_objectSpread2({}, mcisSitemapState.result.currentPage || {}), {}, {
        source: _objectSpread2(_objectSpread2({}, mcisSitemapState.result.currentPage.source || {}), {}, {
          contentZones: processContentZonesForCurrentPage(matchedConfig)
        })
      });
      event.source.contentZones = mcisSitemapState.result.currentPage.source.contentZones;
      startListenerAndContentZoneSearch(false);
    }
  };

  var sendEvent$1 = function sendEvent(event) {
    event = handleOnActionEvent$1(event);
    if (event.action === MetadataUpdateInteractionName.MetadataUpdate) {
      return sendStructuredEvent(event, false);
    }
    return sendStructuredEvent(event);
  };
  var handleOnActionEvent$1 = function handleOnActionEvent(event) {
    event = matchedConfigOnActionEvent$1(event);
    event = globalOnActionEvent$1(event);
    return event;
  };
  var matchedConfigOnActionEvent$1 = function matchedConfigOnActionEvent(event) {
    var matchedConfig = mcisSitemapState.result.matchedConfig;
    try {
      event = matchedConfig && matchedConfig.onActionEvent ? matchedConfig.onActionEvent(event) : event; // TODO: better typing?
      if (_typeof(event) === 'object') {
        return event;
      } else {
        sendException(new Error("onActionEvent failed for the ".concat(mcisSitemapState.result.matchedConfig.name, " page config. Must return an object or null.")), 'Site-wide Javascript');
      }
    } catch (e) {
      sendException(new Error("onActionEvent failed for the ".concat(mcisSitemapState.result.matchedConfig.name, " page config. ").concat(e.message, ".")), 'Site-wide Javascript');
    }
  };
  var globalOnActionEvent$1 = function globalOnActionEvent(event) {
    var siteMapConfig = mcisSitemapState.config;
    try {
      event = siteMapConfig.global && siteMapConfig.global.onActionEvent ? siteMapConfig.global.onActionEvent(event) : event; // TODO: better typing?
      if (_typeof(event) === 'object') {
        return event;
      } else {
        sendException(new Error("onActionEvent failed for the global page config. Must return an object or null."), 'Site-wide Javascript');
      }
    } catch (e) {
      sendException(new Error("onActionEvent failed for the global page config. ".concat(e.message, ".")), 'Site-wide Javascript');
    }
  };

  var onSalesforceSitemapInit = function onSalesforceSitemapInit() {
    mcisSitemapState.config = _objectSpread2(_objectSpread2({}, mcisSitemapState.config), getSitemapConfig());
    cancelListenerAndContentZoneSearch();
  };
  var onSalesforceEventSend = function onSalesforceEventSend(event) {
    var actionEvent = event.detail.actionEvent;
    //TODO: BaseSDK should send a copy of the event that doesn't modify the original
    var mcisEvent = deepCopyActionEvent(actionEvent);
    if (!mcisEvent) {
      Logger.warn('MCIS Module cannot parse event');
      return;
    }
    var baseSitemapResult = getSitemapResult();
    // Overlay baseSitemapResult on mcisSitemapState.result, keeping mcisSitemapState.result.currentPage if set
    mcisSitemapState.result = _objectSpread2(_objectSpread2(_objectSpread2({}, mcisSitemapState.result), baseSitemapResult), {
      currentPage: mcisSitemapState.result.currentPage
    });
    /*
     * If the incoming actionEvent is the same as the baseSitemapResult's currentPage set
     * mcisSitemapState.result.currentPage to a copy of the incoming actionEvent. mcisSitemapState.result.currentPage
     * will reflect MCIS specific fields and baseSitemapResult.currentPage will not be changed when MCIS processes the event
     */
    if (actionEvent === baseSitemapResult.currentPage) {
      mcisSitemapState.result.currentPage = mcisEvent;
    }
    if (!canSendEvent(actionEvent) || !mcisSitemapState.config.settings.runOnTranslatedPage && detectTranslate()) {
      return;
    }
    handleInteractionEvent(mcisEvent);
    eventReceiver.onEventSend(mcisEvent);
  };
  var onSalesforcePageMatchStatusUpdated = function onSalesforcePageMatchStatusUpdated(event) {
    // Always use baseSDK's matchStatus if it exists for mcisSitemapState.
    mcisSitemapState.result.matchStatus = getSitemapResult().matchStatus;
    document.dispatchEvent(new CustomEvent(exports.CustomEvents.OnPageMatchStatusUpdated, {
      detail: {
        matchStatus: event.detail.matchStatus
      }
    }));
  };
  var onSalesforceException = function onSalesforceException(event) {
    if (event && event.detail) {
      var error = event.detail.error;
      var context = event.detail.context;
      document.dispatchEvent(new CustomEvent(exports.CustomEvents.OnException, {
        detail: {
          error: error,
          context: context
        }
      }));
      var errorEvent = toFlatError(error, context);
      if (canSendEvent(errorEvent)) errorReceiver.send(errorEvent);
    }
  };
  var onSalesforceConsentRevoke = function onSalesforceConsentRevoke(event) {
    document.dispatchEvent(new CustomEvent(exports.CustomEvents.OnConsentRevoke, {
      detail: {
        revokedConsent: event.detail.revokedConsent
      }
    }));
  };
  var onSalesforceSetAnonymousId = function onSalesforceSetAnonymousId(event) {
    if (event.detail && event.detail.newAnonymousId) {
      var visitor = getVisitor();
      var newAnonymousId = event.detail.newAnonymousId;
      if (visitor.uuid !== newAnonymousId) {
        updateVisitor({
          uuid: newAnonymousId
        });
      }
    }
  };
  var handleConsentRevokeEvent = function handleConsentRevokeEvent(event) {
    var actionEvent = event.detail.actionEvent;
    if (actionEvent.interaction && actionEvent.interaction.name === MetadataUpdateInteractionName.MetadataUpdate) {
      event.preventDefault();
      var mcisActionEvent = {
        action: MetadataUpdateInteractionName.MetadataUpdate,
        consents: actionEvent.consents,
        source: actionEvent.source,
        user: actionEvent.user
      };
      sendEvent$1(mcisActionEvent);
    }
  };
  var bindSalesforceEventListeners = function bindSalesforceEventListeners() {
    unbindSalesforceEventListeners();
    document.addEventListener(CustomEvents.OnInitSitemap, onSalesforceSitemapInit);
    document.addEventListener(CustomEvents.OnEventSend, onSalesforceEventSend);
    document.addEventListener(CustomEvents.OnPageMatchStatusUpdated, onSalesforcePageMatchStatusUpdated);
    document.addEventListener(CustomEvents.OnException, onSalesforceException);
    document.addEventListener(CustomEvents.OnConsentRevoke, onSalesforceConsentRevoke);
    document.addEventListener(CustomEvents.OnSetAnonymousId, onSalesforceSetAnonymousId);
  };
  var unbindSalesforceEventListeners = function unbindSalesforceEventListeners() {
    document.removeEventListener(CustomEvents.OnInitSitemap, onSalesforceSitemapInit);
    document.removeEventListener(CustomEvents.OnEventSend, onSalesforceEventSend);
    document.removeEventListener(CustomEvents.OnPageMatchStatusUpdated, onSalesforcePageMatchStatusUpdated);
    document.removeEventListener(CustomEvents.OnException, onSalesforceException);
    document.removeEventListener(CustomEvents.OnConsentRevoke, onSalesforceConsentRevoke);
    document.removeEventListener(CustomEvents.OnSetAnonymousId, onSalesforceSetAnonymousId);
  };

  var _excluded$2 = ["cookieDomain", "consents"];
  var mcisInit = function mcisInit(mcisSdkConfig) {
    if (state.beaconState == "running" /* RUNNING */) {
      return shutDown("reinitializing MCIS Module");
    }
    var cookieDomain = mcisSdkConfig.cookieDomain,
      consents = mcisSdkConfig.consents,
      beaconConfig = _objectWithoutProperties(mcisSdkConfig, _excluded$2);
    if (cookieDomain) state.beaconConfig.cookieDomain = cookieDomain;
    if (consents) state.beaconConfig.consents = consents;
    var _state$endpointConfig = state.endpointConfig,
      account = _state$endpointConfig.account,
      dataset = _state$endpointConfig.dataset,
      trackerUrl = _state$endpointConfig.trackerUrl;
    state.beaconConfig = _objectSpread2(_objectSpread2({}, state.beaconConfig), {}, {
      trackerUrl: trackerUrl
    }, beaconConfig);
    var sdkConfig = getSdkConfig$1();
    var shouldInit = document.dispatchEvent(new CustomEvent(exports.CustomEvents.OnInit, {
      detail: {
        beaconConfig: sdkConfig
      },
      cancelable: true
    }));
    document.dispatchEvent(new CustomEvent(McisCustomEvents.OnInit, {
      detail: {
        sdkConfig: sdkConfig
      }
    }));
    if (shouldInit) {
      //Use cookieDomain from the baseSDK
      var baseCookieDomain = getCookieDomain();
      McisCookies.setCookieHash(account, dataset, baseCookieDomain);
      loadVisitor();
      initReceivers(state.beaconConfig.trackerUrl);
      bindSalesforceEventListeners();
      Activity.setupActivityTimers();
      // TODO: make sure that removing previous beacon state conditional here is properly handled
      Logger.debug("Initialized Tracking Beacon v".concat(BEACON_VERSION, " for account[").concat(account, "] dataset[").concat(dataset, "]"));
      setBeaconState("running" /* RUNNING */);
      return true;
    } else {
      unbindSalesforceEventListeners();
      cancelActivityTracking();
      Logger.debug('IS Module initialization canceled due to a preventDefault call in a listener for the OnInit event.');
      return false;
    }
  };
  var initReceivers = function initReceivers(trackerUrl) {
    initEventReceivers(trackerUrl);
    initOneWayReceivers(trackerUrl);
  };

  function listener$1(bind, selector, optionsOrCallback) {
    var callbackFunction;
    if (_typeof(optionsOrCallback) === "object") {
      callbackFunction = function callbackFunction() {
        Logger.warn("ListenerOptions are deprecated. Please use a callback in the Listener instead.");
        var event = _objectSpread2(_objectSpread2({}, optionsOrCallback), {}, {
          user: {}
        });
        sendEvent$1(event);
      };
    } else {
      callbackFunction = optionsOrCallback;
    }
    return listener(bind, selector, callbackFunction);
  }
  var processListeners$1 = function processListeners(pageConfig) {
    return (pageConfig.listeners || []).map(function (listenerConfig) {
      return attemptToBindListener(listenerConfig);
    });
  };

  var setConfig$1 = function setConfig$1(config) {
    setConfig(config);
    document.dispatchEvent(new CustomEvent(exports.CustomEvents.OnInitSitemap, {
      detail: {
        sitemapConfig: mcisSitemapState.config
      }
    }));
  };
  var runSpecificConfig = function runSpecificConfig(pageConfig) {
    Object.assign(mcisSitemapState.config, {
      pageTypes: [pageConfig]
    });
    run$1(mcisSitemapState.config);
  };
  var initSitemap$1 = function initSitemap(siteMapConfig) {
    run$1(siteMapConfig);
    return true;
  };
  var isOrderConfig = function isOrderConfig(pageConfig) {
    return pageConfig.itemAction === exports.ItemAction.Purchase || !!(pageConfig && pageConfig.order);
  };
  var isCartConfig = function isCartConfig(pageConfig) {
    return pageConfig.itemAction === exports.ItemAction.ViewCart || !!(pageConfig && pageConfig.cart && pageConfig.cart.complete);
  };
  var build$1 = function build(config) {
    matchPageConfig(config.pageTypes) // TODO: better typing solution?
    .then(mergeConfigWithGlobal$1).then(handleConfig$1).catch(function (e) {
      if (e !== SITEMAP_REINIT) sendException(new Error("Unhandled exception: ".concat(e)), 'Site-wide Javascript');
    });
  };
  var handleConfig$1 = function handleConfig(pageConfig) {
    mcisSitemapState.result.matchedConfig = _objectSpread2(_objectSpread2({}, pageConfig), {}, {
      contentZones: processContentZonesForMatchedConfig(pageConfig),
      listeners: processListeners$1(pageConfig)
    });
    mcisSitemapState.result.currentPage = _objectSpread2(_objectSpread2({}, mcisSitemapState.result.currentPage || {}), {}, {
      action: processPageLoadAction(pageConfig),
      itemAction: processItemAction(pageConfig),
      source: {
        pageType: pageConfig.name,
        locale: processLocale$1(pageConfig),
        contentZones: processContentZonesForCurrentPage(pageConfig)
      },
      flags: {
        pageView: true
      },
      user: {},
      performance: {},
      debug: {}
    });
    return handleCatalog(pageConfig);
  };
  var handleCatalog = function handleCatalog(pageConfig) {
    if (isCartConfig(pageConfig)) {
      return processCartConfig(pageConfig).then(function (data) {
        mcisSitemapState.result.currentPage.itemAction = exports.ItemAction.ViewCart;
        mcisSitemapState.result.currentPage.cart = data;
      });
    } else if (isOrderConfig(pageConfig)) {
      return processOrderConfig(pageConfig).then(function (data) {
        mcisSitemapState.result.currentPage.itemAction = exports.ItemAction.Purchase;
        mcisSitemapState.result.currentPage.order = data;
      });
    } else {
      return processCatalogConfig(pageConfig).then(function (data) {
        mcisSitemapState.result.currentPage.catalog = data;
      });
    }
  };
  var processCartConfig = function processCartConfig(pageConfig) {
    var cartPayload = {};
    if (!pageConfig.catalog && !pageConfig.cart && !pageConfig.order) {
      return Promise.resolve(cartPayload);
    }
    var cartConfig;
    if (pageConfig.cart) {
      cartConfig = pageConfig.cart;
    } else if (pageConfig.order || pageConfig.catalog) {
      var transformedItemType = {};
      var pageConfigCartObject = pageConfig.order || pageConfig.catalog;
      Object.keys(pageConfigCartObject).forEach(function (itemTypeKey) {
        var itemType = pageConfigCartObject[itemTypeKey];
        if (itemType && itemType.lineItems) {
          transformedItemType[itemTypeKey] = itemType.lineItems;
        }
      });
      cartConfig = {
        complete: transformedItemType
      };
    }
    if (cartConfig.complete) {
      var completeCartConfig = cartConfig.complete;
      for (var itemKey in completeCartConfig) {
        if (!Array.isArray(itemKey.match(/[A-Z]/))) {
          sendException(new Error("Item types must be capitalized. Did you mean ".concat(itemKey.replace(/^\w/, function (letter) {
            return letter.toUpperCase();
          }), "?")), 'Sitewide Javascript');
          return Promise.resolve(cartPayload);
        }
        if (itemKey !== "Product") {
          sendException(new Error('Item type must be Product'), 'Sitewide Javascript');
          return Promise.resolve(cartPayload);
        }
        return buildCart(completeCartConfig[itemKey]);
      }
    }
  };
  var processOrderConfig = function processOrderConfig(pageConfig) {
    var orderPayload = {};
    if (!pageConfig.catalog && !pageConfig.order) {
      return Promise.resolve(orderPayload);
    }
    var orderConfigWithItemType = pageConfig.order || pageConfig.catalog;
    for (var itemKey in orderConfigWithItemType) {
      if (!Array.isArray(itemKey.match(/[A-Z]/))) {
        sendException(new Error("Item types must be capitalized. Did you mean ".concat(itemKey.replace(/^\w/, function (letter) {
          return letter.toUpperCase();
        }), "?")), 'Sitewide Javascript');
        return Promise.resolve(orderPayload);
      }
      if (itemKey !== "Product") {
        sendException(new Error('Item type must be Product'), 'Sitewide Javascript');
        return Promise.resolve(orderPayload);
      }
      var orderConfig = orderConfigWithItemType[itemKey];
      return buildOrder(orderConfig);
    }
  };
  var processCatalogConfig = function processCatalogConfig(pageConfig) {
    var catalogPayload = {};
    if (!pageConfig.catalog) {
      return Promise.resolve(catalogPayload);
    }
    for (var itemKey in pageConfig.catalog) {
      if (!Array.isArray(itemKey.match(/[A-Z]/))) {
        sendException(new Error("Item types must be capitalized. Did you mean ".concat(itemKey.replace(/^\w/, function (letter) {
          return letter.toUpperCase();
        }), "?")), 'Sitewide Javascript');
        return Promise.resolve(catalogPayload);
      }
      var itemConfig = pageConfig.catalog[itemKey];
      return processItemConfig(itemConfig, itemKey);
    }
  };
  var processItemConfig = function processItemConfig(itemConfig, itemKey) {
    return buildItem(itemConfig, itemKey).then(function (data) {
      Object.keys(data).forEach(function (itemType) {
        if (!data[itemType]._id) {
          sendException(new Error("Invalid ".concat(itemKey, ", missing _id for the ").concat(mcisSitemapState.result.matchedConfig.name, " page config.")), 'Site-wide Javascript');
        }
      });
      return shouldTruncateTranslated() ? truncateTranslatedCatalog(data) : data;
    });
  };
  var processLocale$1 = function processLocale(pageConfig) {
    return typeof pageConfig.locale === "function" ? pageConfig.locale() : pageConfig.locale;
  };
  var processPageLoadAction = function processPageLoadAction(pageConfig) {
    return typeof pageConfig.action === "function" ? pageConfig.action() : pageConfig.action;
  };
  var processItemAction = function processItemAction(pageConfig) {
    return pageConfig.catalog ? pageConfig.itemAction || exports.ItemAction.ViewItem : null;
  };
  var mergeDeep$1 = function mergeDeep() {
    var isObject = function isObject(obj) {
      return obj && _typeof(obj) === 'object';
    };
    for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }
    return objects.reduce(function (prev, obj) {
      Object.keys(obj).forEach(function (key) {
        var pVal = prev[key];
        var oVal = obj[key];
        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          Object.assign(prev, _defineProperty({}, key, pVal.concat.apply(pVal, _toConsumableArray(oVal))));
        } else if (isObject(pVal) && isObject(oVal)) {
          Object.assign(prev, _defineProperty({}, key, mergeDeep(pVal, oVal)));
        } else {
          Object.assign(prev, _defineProperty({}, key, oVal));
        }
      });
      return prev;
    }, {});
  };
  var mergeConfigWithGlobal$1 = function mergeConfigWithGlobal(pageConfig) {
    var global = mcisSitemapState.config.global || {};
    var globalOnActionEvent = global.onActionEvent;
    delete global.onActionEvent;
    var mergedConfig = mergeDeep$1(global, pageConfig);
    global.onActionEvent = globalOnActionEvent;
    return mergedConfig;
  };
  var validatePageConfigs$1 = function validatePageConfigs(siteMapConfig) {
    try {
      validateGlobalConfig(siteMapConfig.global);
      validateDefaultConfig(siteMapConfig.pageTypeDefault);
      validatePageTypeConfigs$1(siteMapConfig.pageTypes);
      return true;
    } catch (e) {
      sendException(new Error(e), 'Sitemap');
      return false;
    }
  };
  var validateDefaultConfig = function validateDefaultConfig(defaultConfig) {
    if (defaultConfig) {
      Object.keys(defaultConfig).forEach(function (key) {
        if (key !== "contentZones" && key !== "listeners" && key !== "locale" && key !== "name" && key != "onActionEvent") {
          throw new Error("".concat(key, " is not a valid default config attribute."));
        }
      });
    }
  };
  var validateGlobalConfig = function validateGlobalConfig(globalConfig) {
    if (globalConfig) {
      Object.keys(globalConfig).forEach(function (key) {
        if (key !== "contentZones" && key !== "listeners" && key !== "locale" && key != "onActionEvent") {
          throw new Error("".concat(key, " is not a valid global config attribute."));
        }
        if (key === "contentZones" && globalConfig[key] && !Array.isArray(globalConfig[key])) {
          throw new Error("global config: contentZones must be provided as an array of objects");
        }
      });
    }
  };
  var validatePageTypeConfigs$1 = function validatePageTypeConfigs(pageConfigs) {
    pageConfigs.forEach(function (pageConfig) {
      if (!pageConfig.name || !pageConfig.isMatch) {
        throw new Error("All page configs must have a name and isMatch attribute defined");
      }
      if (pageConfig && pageConfig.contentZones && !Array.isArray(pageConfig.contentZones)) {
        throw new Error("".concat(pageConfig.name, " pageType config: contentZones must be provided as an array of objects"));
      }
    });
  };
  var processResult$1 = function processResult() {
    var result = mcisSitemapState.result;
    sendEvent$1(mcisSitemapState.result.currentPage);
    mcisSitemapState.result = result;
  };
  var run$1 = function run(siteMapConfig) {
    setConfig$1(siteMapConfig);
    removeOutstandingPageMatchResolvers();
    removeCurrentListeners$1();
    cancelListenerAndContentZoneSearch();
    if (!mcisSitemapState.config.settings.runOnTranslatedPage && detectTranslate()) {
      return;
    }
    mcisSitemapState.result.currentPage = null;
    if (!validatePageConfigs$1(siteMapConfig)) {
      return;
    }
    matchPageConfig(siteMapConfig.pageTypes) // TODO: better typing solution?
    .then(mergeConfigWithGlobal$1).then(handleConfig$1).then(processResult$1).then(function () {
      return startListenerAndContentZoneSearch();
    }).catch(function (e) {
      if (e !== SITEMAP_REINIT) sendException(new Error("Unhandled exception: ".concat(e)), 'Site-wide Javascript');
    });
  };

  var onSalesforceInit = function onSalesforceInit(event) {
    var sdkConfig = event.detail.sdkConfig;
    mcisInit(sdkConfig);
  };
  var onBeforeInit = function onBeforeInit(event) {
    if (state.beaconConfig.secureCookie) {
      setSecureAttributeOnCookie(true);
    } else {
      setSecureAttributeOnCookie(false);
    }
  };
  var onSalesforceShutDown = function onSalesforceShutDown(event) {
    var message = event.detail.message;
    Logger.info("Shutting down MCIS Module: ".concat(message));
    document.dispatchEvent(new CustomEvent(exports.CustomEvents.OnShutDown, {
      detail: {
        message: message
      }
    }));
    setBeaconState("shutDown" /* SHUT_DOWN */);
    unbindSalesforceEventListeners();
  };
  document.addEventListener(CustomEvents.OnInit, onSalesforceInit);
  document.addEventListener(CustomEvents.OnShutDown, onSalesforceShutDown);
  document.addEventListener(CustomEvents.OnBeforeInit, onBeforeInit);
  var init$1 = function init$1() {
    var beaconConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve) {
      document.addEventListener(CustomEvents.OnBeforeEventSend, handleConsentRevokeEvent);
      init(beaconConfig).catch(function (e) {});
      if (state.beaconState === "running" /* RUNNING */) resolve(state);
    });
  };
  var reinit$1 = function reinit() {
    var consents = getConsents().map(function (consentWithMetadata) {
      return consentWithMetadata.consent;
    });
    init$1(_objectSpread2(_objectSpread2({}, getConfig()), {}, {
      consents: consents
    })).then(function () {
      initSitemap$1(mcisSitemapState.config);
    });
  };
  function reset() {
    Logger.debug('Unbinding signal subscriptions.');
    try {
      // Signals.unbindAll();
    } catch (e) {
      Logger.debug('Failed to unbind Experience.Signals', e);
    }
  }
  var sendStat = function sendStat(event) {
    var experienceIds = [];
    event.campaignStats.forEach(function (campaignStat) {
      var campaignResponse = mcisSitemapState.campaignResponses.find(function (campaignResponse) {
        return campaignResponse.experienceId === campaignStat.experienceId;
      });
      document.dispatchEvent(new CustomEvent(exports.CustomEvents.OnStatSend, {
        detail: {
          campaignStat: campaignStat,
          campaignResponse: campaignResponse
        }
      }));
      document.dispatchEvent(new CustomEvent(McisCustomEvents.OnStatSend, {
        detail: {
          campaignStat: campaignStat,
          campaignResponse: campaignResponse
        }
      }));
      experienceIds.push(campaignStat.experienceId);
    });
    // filter out duplicates
    experienceIds = Array.from(new Set(experienceIds));
    return canSendEvent(event) ? campaignStatReceiver.send(toFlatStat(event), experienceIds) : Promise.resolve(event);
  };
  function determineTrackerUrl(endpointConfig) {
    var account = endpointConfig.account;
    return "https://".concat(account, ".").concat(PROD_TRACKER_DOMAIN);
  }
  function determineCdnUrl(endpointConfig) {
    return "https://".concat(PROD_CDN_DOMAIN);
  }
  var configure = function configure(endpointConfig, config) {
    if (state.beaconState == "running" /* RUNNING */) {
      reset();
    }
    setBeaconState("initializing" /* INITIALIZING */);
    state.endpointConfig = _objectSpread2(_objectSpread2({}, state.endpointConfig), endpointConfig);
    var _state$endpointConfig = state.endpointConfig,
      account = _state$endpointConfig.account,
      dataset = _state$endpointConfig.dataset,
      siteConfigVersion = _state$endpointConfig.siteConfigVersion;
    if (!account || !dataset) {
      return shutDown('account/dataset undefined. Check your beacon configuration.');
    }
    if (!siteConfigVersion) {
      return shutDown('beacon config version undefined');
    }
    if (!state.endpointConfig.cdnUrl) state.endpointConfig.cdnUrl = determineCdnUrl();
    if (!state.endpointConfig.cdnUrl) {
      return shutDown('cdnUrl undefined. Check your beacon configuration.');
    }
    if (!state.endpointConfig.trackerUrl) state.endpointConfig.trackerUrl = determineTrackerUrl({
      account: account,
      dataset: dataset
    });
    if (!state.endpointConfig.trackerUrl) {
      return shutDown('trackerUrl undefined. Check your beacon configuration.');
    }
    state.beaconConfig.trackerUrl = state.endpointConfig.trackerUrl;
    state.beaconConfig = _objectSpread2(_objectSpread2({}, state.beaconConfig), config);
    setBeaconState("configured" /* CONFIGURED */);
  };
  /**
   * Used by the next-gen chrome and legacy chrome extensions
   */
  var getVersion = function getVersion() {
    return BEACON_VERSION;
  };
  var removeCookies = function removeCookies(domain) {
    if (domain) {
      McisCookies.setCookieHash(state.endpointConfig.account, state.endpointConfig.dataset, domain);
    }
    document.dispatchEvent(new CustomEvent(CustomEvents.OnClearCookie, {
      detail: {
        options: {
          domain: domain || state.beaconConfig.cookieDomain || getCurrentDomainWithoutWWW(location.hostname)
        }
      }
    }));
  };
  /**
   * @ignore
   * no-op, deprecated
   */
  var addResponseListener = function addResponseListener(listener) {
    Logger.warn("Evergage.addResponseListener is deprecated. Use the Evergage.CustomEvents.OnEventResponse event instead.");
    return null;
  };
  /**
   * @ignore
   * no-op, deprecated
   */
  var addEventListener$1 = function addEventListener(listener) {
    Logger.warn("Evergage.addEventListener is deprecated. Use the Evergage.CustomEvents.OnEventSend event instead.");
    return null;
  };
  if (window.SalesforceInteractions) {
    window.SalesforceInteractions.mcis = {
      extractFirstGroup: util$1.extractFirstGroup,
      getLastPathComponentWithoutExtension: util$1.getLastPathComponentWithoutExtension,
      getParameterByName: util$1.getParameterByName,
      getValueFromNestedObject: util$1.getValueFromNestedObject,
      buildLineItemFromPageState: buildLineItemFromBasePageState,
      cookie: util$1.cookie,
      sendStat: sendStat,
      getContentZoneSelector: getContentZoneSelector,
      getSdkConfig: getSdkConfig$1,
      getSitemapConfig: getSitemapConfig$1,
      getSitemapResult: getSitemapResult$1,
      getCampaignResponses: getCampaignResponses,
      CustomEvents: McisCustomEvents,
      ConsentPurpose: McisConsentPurpose,
      CatalogObjectInteractionName: McisCatalogObjectInteractionName
    };
  }

  exports.ConsentPurpose = McisConsentPurpose;
  exports.DisplayUtils = DisplayUtils;
  exports.addEventListener = addEventListener$1;
  exports.addResponseListener = addResponseListener;
  exports.build = build$1;
  exports.cashDom = cashDom;
  exports.configure = configure;
  exports.getCampaignResponses = getCampaignResponses;
  exports.getConfig = getConfig;
  exports.getConsents = getConsents;
  exports.getContentZoneSelector = getContentZoneSelector;
  exports.getCurrentPage = getCurrentPage;
  exports.getLoggingLevel = getLoggingLevel;
  exports.getSitemapConfig = getSitemapConfig$1;
  exports.getSitemapResult = getSitemapResult$1;
  exports.getState = getState;
  exports.getVersion = getVersion;
  exports.init = init$1;
  exports.initSitemap = initSitemap$1;
  exports.listener = listener$1;
  exports.log = Logger;
  exports.reinit = reinit$1;
  exports.removeCookies = removeCookies;
  exports.resolvers = resolvers;
  exports.runSpecificConfig = runSpecificConfig;
  exports.sendEvent = sendEvent$1;
  exports.sendException = sendException;
  exports.sendStat = sendStat;
  exports.setConfig = setConfig$1;
  exports.setLoggingLevel = setLoggingLevel;
  exports.shutDown = shutDown;
  exports.updateConsents = updateConsents;
  exports.util = util$1;

  return exports;

}({}));
window.evergageBeaconParseTimeEnd = (new Date().getTime());
//# sourceMappingURL=evergage.js.map

(function configureEvergage() {
    try {
       Evergage.configure({
           account: "v55685555553mx3rf3h3n3n3i091550196",
           dataset: "sciex_prod",
           cdnUrl: "https://cdn.evergage.com",
           trackerUrl: "https://v55685555553mx3rf3h3n3n3i091550196.us-1.evergage.com",
           siteConfigVersion: "4"
       },{"allowBotTraffic":false,"corsAllowedOrigins":["*"],"defaultCurrency":"USD","defaultLocale":null,"disableQtipWindowScroll":false,"doNotStoreCookiesRequireProvidedAnonId":false,"doNotTrackPingRequestsForActions":false,"enableCorsRestrictedOrigins":false,"enableMessageRotation":false,"enableRememberMeUserIds":false,"enableTemplateEsc":false,"hideContentSections":false,"hideContentSectionsMillis":2500,"hidePagesForRedirect":false,"hidePagesForRedirectMillis":1000,"identityAttributes":["customerId","emailAddress","profileId","sfmcContactKey"],"lastModified":1747773961942,"preventSensitiveDataCapture":false,"rememberMeUserIdsMillis":63072000000,"secureCookie":true,"sendErrorEvents":true,"showPoweredBy":false,"siteConfigExecBeforePageReady":false,"spaRouteChangeTimeout":500,"trackAnonymousVisitors":true,"trackContextualRelatedItems":false,"trackSubdomainAsCompany":false,"trackUnknownPagesByTitle":false,"treatHashChangeAsPageLoad":false}       );
    } catch (e) {
          console.error(e);
    }
})();


try {
    const CAMPAIGN_STAT_ATTRIBUTE = {
            CAMPAIGN: "data-evg-campaign-id",
            EXPERIENCE: "data-evg-experience-id",
            USER_GROUP: "data-evg-user-group",
            CLICKTHROUGH: "data-evg-clickthrough",
            IGNORE_CLICKTHROUGH: "data-evg-ignore-clickthrough",
            DISMISSAL: "data-evg-dismissal",
            ITEM: "data-evg-item-id",
            ITEM_TYPE: "data-evg-item-type"
        };
        
        const CAMPAIGN_STAT_TYPE = {
            IMPRESSION: "Impression",
            CLICKTHROUGH: "Clickthrough",
            DISMISSAL: "Dismissal"
        };
        
        const CAMPAIGN_STAT_USER_GROUP = {
            TEST: "Test",
            CONTROL: "Control"
        };
        
        document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (event) => {
            if (validateOnTemplateDisplayEndEvent(event)) {
                const payload = event.detail.payload;
                const campaignElement = getCampaignElementFromPayload(payload);
                sendImpression(payload, campaignElement);
                bindCampaignClickthroughsAndDismissals(campaignElement);
            }
        });
        
        const sendImpression = (payload, campaignElement) => {
            const userGroup = payload.userGroup;
            const stat = {
                control: userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL,
                experienceId: payload.experience,
                stat: CAMPAIGN_STAT_TYPE.IMPRESSION
            };
            const itemStats = generateItemStats(campaignElement);
            if (Object.keys(itemStats).length > 0) {
                stat.catalog = itemStats;
            }
            if (userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL || (userGroup === CAMPAIGN_STAT_USER_GROUP.TEST && campaignElement.length > 0)) {
                Evergage.sendStat({campaignStats: [stat]});
            } else {
                Evergage.log.warn("campaignStatsTracking.js", "Experience", payload.experience, "not found in DOM.");
            }
        };
        
        const generateItemStats = (campaignElement) => {
            const catalogStats = {};
            const itemNodes = Evergage.cashDom(campaignElement).find("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]");
            if (!itemNodes || itemNodes.length === 0) {
                return catalogStats;
            }
            Array.from(itemNodes).forEach(function(itemNode) {
                const itemId = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
                const itemType = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);
                if (itemId && itemType) {
                    if (!catalogStats[itemType]) {
                        catalogStats[itemType] = [];
                    }
                    if (!catalogStats[itemType].includes(itemId)) {
                        catalogStats[itemType].push(itemId);
                    }
                }
            });
            return catalogStats;
        }
        
        const buildCampaignSelector = (experienceId) => {
            return `[${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}='${experienceId}']`
        }
        
        const getCampaignElementFromPayload = (payload) => {
            const experienceId = payload.experience;
            const campaignSelector = buildCampaignSelector(experienceId);
            return Evergage.cashDom(campaignSelector);
        };
        
        const getCampaignClickthroughAndDismissalElements = (campaignElement) => {
            const experienceId = Evergage.cashDom(campaignElement).attr(`${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}`);
            const campaignSelector = buildCampaignSelector(experienceId);
            return Evergage.cashDom(campaignElement).parent().find(`
                ${campaignSelector}[${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
                ${campaignSelector} a,
                ${campaignSelector} [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
                ${campaignSelector} [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]
            `);
        };
        
        const sendClickthroughOrDismissal = (e) => {
            if (Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.IGNORE_CLICKTHROUGH}]`).length > 0) {
                return;
            }
            const campaignElement = Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}]`);
            if (campaignElement.length > 0  && Evergage.cashDom(e.target).closest(`
                a,
                [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
                [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]`).length > 0) {
        
                const stat = {
                    control: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.USER_GROUP) === CAMPAIGN_STAT_USER_GROUP.CONTROL,
                    experienceId: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE),
                    stat: Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}]`).length > 0 || Evergage.cashDom(e.target).closest("a").length > 0
                        ? CAMPAIGN_STAT_TYPE.CLICKTHROUGH
                        : CAMPAIGN_STAT_TYPE.DISMISSAL
                };
        
                if (stat.stat === CAMPAIGN_STAT_TYPE.CLICKTHROUGH) {
                    const itemClickthroughStats = generateItemClickthroughStats(e.target);
                    if (Object.keys(itemClickthroughStats).length > 0) {
                        stat.catalog = itemClickthroughStats;
                    }
                }
        
                Evergage.sendStat({campaignStats: [stat]});
            }
        };
        
        const generateItemClickthroughStats = (target) => {
            const itemStats = {};
            const itemId = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
            const itemType = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);
        
            if (itemId && itemType) {
                itemStats[itemType] = [itemId];
            }
            return itemStats;
        }
        
        const bindCampaignClickthroughsAndDismissals = (campaignElement) => {
            const elements = getCampaignClickthroughAndDismissalElements(campaignElement);
            elements.off("click", sendClickthroughOrDismissal);
            elements.on("click", sendClickthroughOrDismissal);
        };
        
        const validateOnTemplateDisplayEndEvent = (event) => {
            if (!event.detail) {
                Evergage.log.warn("campaignStatsTracking.js", "No detail object found for onTemplateDisplayEndEvent", event);
                return false;
            }
            if (!event.detail.payload) {
                Evergage.log.warn("campaignStatsTracking.js", "No payload object found for onTemplateDisplayEndEvent", event);
                return false;
            }
            if (!event.detail.payload.campaign) {
                Evergage.log.warn("campaignStatsTracking.js", "No campaign found in payload object", event.detail);
                return false;
            }
            if (!event.detail.payload.experience) {
                Evergage.log.warn("campaignStatsTracking.js", "No experience found in payload object", event.detail);
                return false;
            }
            if (!event.detail.payload.userGroup) {
                Evergage.log.warn("campaignStatsTracking.js", "No user group found in payload object", event.detail);
                return false;
            }
            return true;
        };
        
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Campaign Stats Tracking:campaignStatsTracking.js");
    }
};


try {
    /**
         *  Personalization Flicker Defense
         */
        Evergage.FlickerDefender = Evergage.FlickerDefender || (() => {
            const personalizationSectionsSelector = "head > style.evergagePersonalizationSections";
        
            let personalizedSectionsString = "";
            let sectionsHaveEverBeenHidden = false;
            let hasBeenHidden = false;
            let shouldReshowNow = false;
            let hiddenSections = {};
        
            const timeoutOptions = {
                pageMatchTimeout: 1000,
                redisplayTimeout: Evergage.getConfig().hideContentSectionsMillis || 2500
            }
        
            const utils = {
                getGlobalContentZoneSelectors: () => {
                    return ((Evergage.getState().config.global || {}).contentZones || [])
                        .filter((contentZone) => (contentZone || {}).selector)
                        .map((contentZone) => contentZone.selector);
                },
                getPageTypeContentZoneSelectors: () => {
                    const { pageTypes } = Evergage.getState().config;
                    return pageTypes.length < 1
                        ? []
                        : pageTypes
                            .map((pageType) => pageType.contentZones || [])
                            .reduce((acc, contentZonesArr) => acc.concat(contentZonesArr), [])
                            .filter((contentZone) => (contentZone || {}).selector)
                            .map((contentZone) => contentZone.selector);
                },
                buildContentZoneSelectors: () => {
                    return [
                        ...new Set([
                            ...utils.getGlobalContentZoneSelectors(),
                            ...utils.getPageTypeContentZoneSelectors()
                        ])
                    ];
                },
                addToPersonalizedSectionsString: (selector) => {
                    if (typeof selector === "string") {
                        try {
                            document.querySelector(selector);
                            if (personalizedSectionsString !== "") {
                                personalizedSectionsString += ", ";
                            }
                            personalizedSectionsString += selector;
                        } catch (exception) {
                            Evergage.sendException(exception, "hideSectionsInvalidCSSSelector");
                        }
                    }
                },
                hasBeenReshown: () => {
                    return Evergage.cashDom(personalizationSectionsSelector).length === 0;
                }
            };
        
            const actions = {
                hideSections: () => {
                    if (sectionsHaveEverBeenHidden) return;
        
                    const selectors = utils.buildContentZoneSelectors();
                    if (selectors.length === 0) {
                        Evergage.log.debug("Evergage: Issue with malformed request in hideSections.");
                        return;
                    }
                    for (const selector of selectors) {
                        utils.addToPersonalizedSectionsString(selector);
                    }
        
                    if (!personalizedSectionsString) return;
        
                    const head = document.head || document.getElementsByTagName("head")[0];
                    const style = document.createElement("style");
                    Evergage.cashDom(style)
                        .attr({ type: "text/css", class: "evergagePersonalizationSections" })
                        .text(`${personalizedSectionsString} { visibility: hidden !important; }`);
        
                    clearTimeout(window.evergageReshowPersonalizedSectionsTimeout);
                    window.evergageReshowPersonalizedSectionsTimeout = setTimeout(function () {
                        if (utils.hasBeenReshown()) return;
                        shouldReshowNow = true;
                        actions.reshowPersonalizedSectionsNow();
                    }, timeoutOptions.redisplayTimeout);
        
                    head.appendChild(style);
                    sectionsHaveEverBeenHidden = true;
                },
                reshowPersonalizedSections: () => {
                    if (utils.hasBeenReshown()) return;
                    try {
                        if (typeof window.requestAnimationFrame === "function") {
                            Evergage.log.info("Evergage: Scheduling for next animation frame redisplay of sections of the page marked for personalization.");
                            window.requestAnimationFrame(actions.reshowPersonalizedSectionsNow);
                        } else {
                            actions.reshowPersonalizedSectionsNow();
                        }
                    } catch (exception) {
                        Evergage.sendException(exception, "reshowPersonalizedSections");
                    }
                },
                reshowReadyPersonalizedSections: () => {
                    Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important }`);
                    Evergage.log.info(`Evergage: Redisplaying the following sections of the page marked for personalization: ${personalizedSectionsString}`);
                },
                reshowAllPersonalizedSections: () => {
                    Evergage.cashDom(personalizationSectionsSelector).remove();
                    Evergage.log.info("Evergage: Redisplaying outstanding sections of the page marked for personalization.");
                },
                reshowPersonalizedSectionsNow: () => {
                    if (utils.hasBeenReshown()) return;
                    try {
                        if (shouldReshowNow || Object.keys(hiddenSections).length === 0) {
                            actions.reshowAllPersonalizedSections();
                        } else if (Object.keys(hiddenSections).length > 0) {
                            personalizedSectionsString = "";
                            for (const contentZone in hiddenSections) {
                                utils.addToPersonalizedSectionsString(hiddenSections[contentZone]);
                            }
                            actions.reshowReadyPersonalizedSections();
                        }
                    } catch (exception) {
                        Evergage.sendException(exception, "reshowPersonalizedSectionsNow");
                    }
                }
            };
        
            const beaconListeners = {
                addOnInit: () => {
                    document.addEventListener(Evergage.CustomEvents.OnInit, (domEvent) => {
                        clearTimeout(window.evergagePageMatchTimeout);
                        window.evergagePageMatchTimeout = setTimeout(function () {
                            const { pageType } = (Evergage.getCurrentPage().source || {});
                            if (utils.hasBeenReshown() || (typeof pageType === "string" && pageType !== "")) return;
                            shouldReshowNow = true;
                            actions.reshowPersonalizedSectionsNow();
                        }, timeoutOptions.pageMatchTimeout);
                    });
                },
                addPageMatchStatusUpdated: () => {
                    document.addEventListener(Evergage.CustomEvents.OnPageMatchStatusUpdated, (domEvent) => {
                        if (!hasBeenHidden) {
                            actions.hideSections();
                            if (Evergage.cashDom(personalizationSectionsSelector).length > 0) {
                                hasBeenHidden = true;
                            }
                        }
                    });
                },
                addOnEventResponse: () => {
                    document.addEventListener(Evergage.CustomEvents.OnEventResponse, (domEvent) => {
                        const { campaignResponses } = ((domEvent.detail || {}).response || {});
                        if ((campaignResponses || []).length >= 1) {
                            personalizedSectionsString = "";
                            for (const campaign of campaignResponses) {
                                const { contentZone } = ((campaign || {}).payload || {});
                                const contentZoneSelector = Evergage.getContentZoneSelector(((campaign || {}).payload || {}).contentZone);
                                if (typeof contentZoneSelector === "string") {
                                    hiddenSections[contentZone] = contentZoneSelector;
                                    utils.addToPersonalizedSectionsString(contentZoneSelector);
                                }
                            }
                            if (!personalizedSectionsString) {
                                actions.reshowPersonalizedSections();
                                return;
                            }
        
                            Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important; }`);
                        } else {
                            actions.reshowPersonalizedSections();
                        }
                    });
                },
                addOnTemplateDisplayEnd: () => {
                    document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (domEvent) => {
                        if (utils.hasBeenReshown()) return;
                        const { contentZone } = ((domEvent.detail || {}).payload || {});
                        if (typeof contentZone === "string" && hiddenSections[contentZone]) {
                            delete hiddenSections[contentZone];
                        }
                        actions.reshowPersonalizedSections();
                    });
                },
            };
        
            return {
                setPageMatchTimeout: (millis) => {
                    if (typeof millis === "number" && millis >= 0) {
                        timeoutOptions.pageMatchTimeout = parseInt(millis);
                    } else {
                        Evergage.log.warn("flickerDefender.js", "setPageMatchTimeout: Passed argument must be a number and must be greater than or equal to 0", millis);
                    }
                },
                setRedisplayTimeout: (millis) => {
                    if (typeof millis === "number" && millis >= 0) {
                        timeoutOptions.redisplayTimeout = parseInt(millis);
                    } else {
                        Evergage.log.warn("flickerDefender.js", "setRedisplayTimeout: Passed argument must be a number and must be greater than or equal to 0", millis);
                    }
                },
                init: function() {
                    for (const key in beaconListeners) {
                        beaconListeners[key]();
                    }
                }
            };
        })();
        
        if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
            window.SalesforceInteractions.mcis.FlickerDefender = Evergage.FlickerDefender;
        }
        
        if (typeof Evergage.FlickerDefender.init === "function" && (window.frameElement || {}).id !== "siteEditorFrame") {
            Evergage.FlickerDefender.init();
        }
        
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Flicker Defender:flickerDefender.js");
    }
};


try {
    !function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.restrictContentZone=t.executeControl=t.handleCampaignResponses=t.renderTemplate=t.resetTemplate=t.registerTemplate=t.executeBundles=void 0;var a=n(5),l=n(1),s=i(n(2)),c=new Map,u=new Map,p=new Set,d=function(){return document.getElementsByTagName("html").length>0&&null!=document.getElementsByTagName("html")[0].getAttribute(s.VE_LOADING_ATTRIBUTE)||null!=document.getElementById(s.VE_ACTIVE_ELEMENT_ID)||"true"===localStorage.getItem(s.VE_INDICATOR_FLAG)||document.location.href.includes(s.TEST_TEMPLATE_PARAMETER)},f=function(e){return c.get(e)},h=function(e,t){return[e,t.campaign,t.experience].join(":")};t.executeBundles=function(e){if(e){var n=!0;e.forEach((function(e){var r,o;try{try{var i=document.createElement("script");o="prepareTemplate"+e.id,i.text="function "+o+"(TemplateService) { "+e.bundle+" }",r=document.head.appendChild(i),window[o]({registerTemplate:t.registerTemplate})}catch(r){n=!1,Function("TemplateService",e.bundle)({registerTemplate:t.registerTemplate})}}catch(e){l.dispatchError(e)}finally{r&&r.parentNode.removeChild(r),o&&window[o]&&(window[o]=void 0)}})),n||console.log("Marketing Cloud Personalization will soon require your Content Security Policy to allow `unsafe-inline`.")}},t.registerTemplate=function(e){var t=new a.Template(e);c.set(e.name,t)},t.resetTemplate=function(e,t){var n=h(e,t),r=u.get(n);if(r)try{r()}catch(e){l.dispatchError(e)}u.delete(n)},t.renderTemplate=function(e,t){if(c.has(e)){var n=f(e).render(t);u.set(h(e,t),n)}},t.handleCampaignResponses=function(e){d()||e.filter((function(e){return"ng"===e.type})).filter((function(e){return!g(e)})).forEach((function(e){switch(e.userGroup){case"Default":m(e);break;case"Control":t.executeControl(e)}}))};var m=function(e){e.templateNames.forEach((function(n){t.renderTemplate(n,e.payload)}))};t.executeControl=function(e){e.templateNames.forEach((function(t){var n=f(t),r=e.payload;if(n.control)try{var o=n.control(r);l.handleTemplateDispatch(o,r)}catch(e){l.dispatchError(e)}}))};var g=function(e){return e.payload.contentZone&&p.has(e.payload.contentZone)};t.restrictContentZone=function(e){e&&p.add(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dispatchError=t.handleTemplateDispatch=t.getQueryParam=void 0,t.getQueryParam=function(e){var t=location.search;e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))};var r=function(e){document.dispatchEvent(new CustomEvent(window.Evergage.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}})),document.dispatchEvent(new CustomEvent(window.SalesforceInteractions.mcis.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}}))};t.handleTemplateDispatch=function(e,t){window.Promise&&"function"==typeof window.Promise.resolve?window.Promise.resolve(e).then((function(){r(t)})):r(t)},t.dispatchError=function(e){document.dispatchEvent(new CustomEvent(window.SalesforceInteractions.CustomEvents.OnException,{detail:{error:new Error(e),context:"Handlebars Template Gear"}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VE_ACTIVE_ELEMENT_ID=t.VE_INDICATOR_FLAG=t.VE_LOADING_ATTRIBUTE=t.TEST_TEMPLATE_PARAMETER=t.TEST_TEMPLATE_STORAGE_KEY=void 0,t.TEST_TEMPLATE_STORAGE_KEY="testTemplate",t.TEST_TEMPLATE_PARAMETER="evergageTestTemplate",t.VE_LOADING_ATTRIBUTE="evergagevisualeditorloading",t.VE_INDICATOR_FLAG="evgVE",t.VE_ACTIVE_ELEMENT_ID="evg_ui-visual-editor"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n(4),o=n(6),i=n(0);function a(){/complete|interactive|loaded/.test(document.readyState)?(r.renderTestTemplate(),o.initPreview()):document.addEventListener("DOMContentLoaded",(function(){r.renderTestTemplate(),o.initPreview()}))}document.addEventListener(window.Evergage.CustomEvents.OnEventResponse,(function(e){i.executeBundles(e.detail.response.compiledCampaignTemplates),i.handleCampaignResponses(e.detail.response.campaignResponses)})),t.render=a,a()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderTestTemplate=void 0;var r=n(0),o=n(1),i=n(2);t.renderTestTemplate=function(){if("true"==o.getQueryParam(i.TEST_TEMPLATE_PARAMETER)){var e=a();addEventListener("storage",(function(t){t.key==i.TEST_TEMPLATE_STORAGE_KEY&&(e&&r.resetTemplate(e.templateName,e.templateConfig),e=a())}))}};var a=function(){var e=localStorage.getItem(i.TEST_TEMPLATE_STORAGE_KEY);if(e)try{var t=JSON.parse(e);return r.executeBundles(t.templates),r.renderTemplate(t.templateName,t.templateConfig),r.restrictContentZone(t.templateConfig.contentZone),t}catch(e){}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Template=void 0;var o=r(n(7)),i=n(1),a=function(){function e(e){var t=this;if(this.getContentZoneFromMatchedConfig=function(e){var t=window.Evergage.getState().result.matchedConfig;return e.contentZone&&t&&t.contentZones&&0!==t.contentZones.length&&t.contentZones.find((function(t){return t.name===e.contentZone}))||null},this.applyRender=function(e){var n=t.getContentZoneFromMatchedConfig(e);n&&t.executeInsertionForTarget(n,e)},this.replaceContentAtTarget=function(e,t){t.innerHTML=e},this.name=e.name,this.apply=e.apply,this.reset=e.reset,this.control=e.control,e.handlebars)try{this.generateHtml=o.default.template(e.handlebars),o.default.partials[e.name]=o.default.template(e.handlebars)}catch(e){i.dispatchError(e)}else this.generateHtml=function(){}}return e.prototype.render=function(e){try{var t=this.apply(e,this.generateHtml,this.applyRender);return i.handleTemplateDispatch(t,e),this.reset.bind(this,e,this.generateHtml)}catch(e){i.dispatchError(e)}},e.prototype.executeInsertionForTarget=function(e,t){if(this.generateHtml){var n=e.selector;try{var r=document.querySelector(n);if(!r){var o='Could not render template. Content zone "'+e.name+'" defined but the selector "'+n+'" not found on the page.';return void i.dispatchError(o)}var a=this.generateHtml(t);if(!a)return;this.replaceContentAtTarget(a,r)}catch(e){i.dispatchError(e)}}},e}();t.Template=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initPreview=void 0;var r=n(2),o=n(0);t.initPreview=function(){window.Evergage.Render={render:function(e,t,n){var i=JSON.stringify({templateName:e,templateConfig:t,templates:n});window.localStorage.setItem(r.TEST_TEMPLATE_STORAGE_KEY,i),o.resetTemplate(e,t),o.executeBundles(n),o.renderTemplate(e,t)},reset:o.resetTemplate}}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"extend",(function(){return u})),n.d(r,"toString",(function(){return p})),n.d(r,"isFunction",(function(){return d})),n.d(r,"isArray",(function(){return f})),n.d(r,"indexOf",(function(){return h})),n.d(r,"escapeExpression",(function(){return m})),n.d(r,"isEmpty",(function(){return g})),n.d(r,"createFrame",(function(){return v})),n.d(r,"blockParams",(function(){return E})),n.d(r,"appendContextPath",(function(){return T}));var o={};n.r(o),n.d(o,"VERSION",(function(){return k})),n.d(o,"COMPILER_REVISION",(function(){return j})),n.d(o,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return I})),n.d(o,"REVISION_CHANGES",(function(){return L})),n.d(o,"HandlebarsEnvironment",(function(){return R})),n.d(o,"log",(function(){return H})),n.d(o,"createFrame",(function(){return v})),n.d(o,"logger",(function(){return M}));var i={};n.r(i),n.d(i,"checkRevision",(function(){return V})),n.d(i,"template",(function(){return B})),n.d(i,"wrapProgram",(function(){return G})),n.d(i,"resolvePartial",(function(){return Z})),n.d(i,"invokePartial",(function(){return F})),n.d(i,"noop",(function(){return q}));const a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,s=/[&<>"'`=]/;function c(e){return a[e]}function u(e){for(let t=1;t<arguments.length;t++)for(let n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}let p=Object.prototype.toString,d=function(e){return"function"==typeof e};d(/x/)&&(d=function(e){return"function"==typeof e&&"[object Function]"===p.call(e)});const f=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===p.call(e)};function h(e,t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function m(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return s.test(e)?e.replace(l,c):e}function g(e){return!e&&0!==e||!(!f(e)||0!==e.length)}function v(e){let t=u({},e);return t._parent=e,t}function E(e,t){return e.path=t,e}function T(e,t){return(e?e+".":"")+t}const y=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function w(e,t){let n,r,o,i,a=t&&t.loc;a&&(n=a.start.line,r=a.end.line,o=a.start.column,i=a.end.column,e+=" - "+n+":"+o);let l=Error.prototype.constructor.call(this,e);for(let e=0;e<y.length;e++)this[y[e]]=l[y[e]];Error.captureStackTrace&&Error.captureStackTrace(this,w);try{a&&(this.lineNumber=n,this.endLineNumber=r,Object.defineProperty?(Object.defineProperty(this,"column",{value:o,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:i,enumerable:!0})):(this.column=o,this.endColumn=i))}catch(e){}}w.prototype=new Error;var b=w;function _(e){!function(e){e.registerHelper("blockHelperMissing",(function(t,n){let r=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return r(this);if(f(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){let e=v(n.data);e.contextPath=T(n.data.contextPath,n.name),n={data:e}}return o(t,n)}))}(e),function(e){e.registerHelper("each",(function(e,t){if(!t)throw new b("Must pass iterator to #each");let n,r,o=t.fn,i=t.inverse,a=0,l="";function s(t,i,a){n&&(n.key=t,n.index=i,n.first=0===i,n.last=!!a,r&&(n.contextPath=r+t)),l+=o(e[t],{data:n,blockParams:E([e[t],t],[r+t,null])})}if(t.data&&t.ids&&(r=T(t.data.contextPath,t.ids[0])+"."),d(e)&&(e=e.call(this)),t.data&&(n=v(t.data)),e&&"object"==typeof e)if(f(e))for(let t=e.length;a<t;a++)a in e&&s(a,a,a===e.length-1);else if(global.Symbol&&e[global.Symbol.iterator]){const t=[],n=e[global.Symbol.iterator]();for(let e=n.next();!e.done;e=n.next())t.push(e.value);for(let n=(e=t).length;a<n;a++)s(a,a,a===e.length-1)}else{let t;Object.keys(e).forEach(e=>{void 0!==t&&s(t,a-1),t=e,a++}),void 0!==t&&s(t,a-1,!0)}return 0===a&&(l=i(this)),l}))}(e),function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new b('Missing helper: "'+arguments[arguments.length-1].name+'"')}))}(e),function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new b("#if requires exactly one argument");return d(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||g(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new b("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))}(e),function(e){e.registerHelper("log",(function(){let t=[void 0],n=arguments[arguments.length-1];for(let e=0;e<arguments.length-1;e++)t.push(arguments[e]);let r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),t[0]=r,e.log(...t)}))}(e),function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}(e),function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new b("#with requires exactly one argument");d(e)&&(e=e.call(this));let n=t.fn;if(g(e))return t.inverse(this);{let r=t.data;return t.data&&t.ids&&(r=v(t.data),r.contextPath=T(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:E([e],[r&&r.contextPath])})}}))}(e)}function P(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])}function O(e){!function(e){e.registerDecorator("inline",(function(e,t,n,r){let o=e;return t.partials||(t.partials={},o=function(r,o){let i=n.partials;n.partials=u({},i,t.partials);let a=e(r,o);return n.partials=i,a}),t.partials[r.args[0]]=r.fn,o}))}(e)}let C={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){let t=h(C.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e,...t){if(e=C.lookupLevel(e),"undefined"!=typeof console&&C.lookupLevel(C.level)<=e){let n=C.methodMap[e];console[n]||(n="log"),console[n](...t)}}};var M=C;function A(...e){return u(Object.create(null),...e)}const x=Object.create(null);function S(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==x[e]&&(x[e]=!0,(void 0)("error",`Handlebars: Access has been denied to resolve the property "${e}" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}(t),!1)}const k="4.7.7",j=8,I=7,L={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function R(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},_(this),O(this)}R.prototype={constructor:R,logger:M,log:M.log,registerHelper:function(e,t){if("[object Object]"===p.call(e)){if(t)throw new b("Arg not supported with multiple helpers");u(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===p.call(e))u(this.partials,e);else{if(void 0===t)throw new b(`Attempting to register a partial called "${e}" as undefined`);this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===p.call(e)){if(t)throw new b("Arg not supported with multiple decorators");u(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses(){Object.keys(x).forEach(e=>{delete x[e]})}};let H=M.log;function N(e){this.string=e}N.prototype.toString=N.prototype.toHTML=function(){return""+this.string};var D=N;function V(e){const t=e&&e[0]||1;if(!(t>=I&&t<=j)){if(t<I){const e=L[j],n=L[t];throw new b("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+e+") or downgrade your runtime to an older version ("+n+").")}throw new b("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function B(e,t){if(!t)throw new b("No environment passed to template");if(!e||!e.main)throw new b("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);const n=e.compiler&&7===e.compiler[0];let r={strict:function(e,t,n){if(!e||!(t in e))throw new b('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){let n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||function(e,t,n){return S("function"==typeof e?t.methods:t.properties,n)}(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){const n=e.length;for(let o=0;o<n;o++){if(null!=(e[o]&&r.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:m,invokePartial:function(n,r,o){o.hash&&(r=u({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);let i=u({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),a=t.VM.invokePartial.call(this,n,r,i);if(null==a&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),a=o.partials[o.name](r,i)),null!=a){if(o.indent){let e=a.split("\n");for(let t=0,n=e.length;t<n&&(e[t]||t+1!==n);t++)e[t]=o.indent+e[t];a=e.join("\n")}return a}throw new b("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){let n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){let i=this.programs[e],a=this.fn(e);return t||o||r||n?i=G(this,e,a,t,n,r,o):i||(i=this.programs[e]=G(this,e,a)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){let n=e||t;return e&&t&&e!==t&&(n=u({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function o(t,n={}){let i=n.data;o._setup(n),!n.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?v(t):{}).root=e);return t}(t,i));let a,l=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,i,l,a)}return e.useDepths&&(a=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=U(e.main,s,r,n.depths||[],i,l))(t,n)}return o.isTop=!0,o._setup=function(o){if(o.partial)r.protoAccessControl=o.protoAccessControl,r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{let i=u({},t.helpers,o.helpers);!function(e,t){Object.keys(e).forEach(n=>{let r=e[n];e[n]=function(e,t){const n=t.lookupProperty;return function(e,t){return"function"!=typeof e?e:function(){const n=arguments[arguments.length-1];return arguments[arguments.length-1]=t(n),e.apply(this,arguments)}}(e,e=>u({lookupProperty:n},e))}(r,t)})}(i,r),r.helpers=i,e.usePartial&&(r.partials=r.mergeIfNeeded(o.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=u({},t.decorators,o.decorators)),r.hooks={},r.protoAccessControl=function(e){let t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;let n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:A(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:A(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}}(o);let a=o.allowCallsToHelperMissing||n;P(r,"helperMissing",a),P(r,"blockHelperMissing",a)}},o._child=function(t,n,o,i){if(e.useBlockParams&&!o)throw new b("must pass block params");if(e.useDepths&&!i)throw new b("must pass parent depths");return G(r,t,e[t],n,0,o,i)},o}function G(e,t,n,r,o,i,a){function l(t,o={}){let l=a;return!a||t==a[0]||t===e.nullContext&&null===a[0]||(l=[t].concat(a)),n(e,t,e.helpers,e.partials,o.data||r,i&&[o.blockParams].concat(i),l)}return(l=U(n,l,e,a,r,i)).program=t,l.depth=a?a.length:0,l.blockParams=o||0,l}function Z(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function F(e,t,n){const r=n.data&&n.data["partial-block"];let o;if(n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath),n.fn&&n.fn!==q){n.data=v(n.data);let e=n.fn;o=n.data["partial-block"]=function(t,n={}){return n.data=v(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=u({},n.partials,e.partials))}if(void 0===e&&o&&(e=o),void 0===e)throw new b("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function q(){return""}function U(e,t,n,r,o,i){if(e.decorator){let a={};u(t=e.decorator(t,a,n,r&&r[0],o,i,r),a)}return t}function Y(){let e=new R;return u(e,o),e.SafeString=D,e.Exception=b,e.Utils=r,e.escapeExpression=m,e.VM=i,e.template=function(t){return B(t,e)},e}let K=Y();K.create=Y,function(e){let t="undefined"!=typeof global?global:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}}(K),K.default=K;t.default=K}]));
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Handlebars Templates:index.js");
    }
};


try {
    // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#CUSTOM_EVENT.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
        var VE_CUSTOM_EVENT_NAME = 'msg_from_interaction_studio_tools_gear';
        // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#EVENT_TYPE.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
        var TO_LAUNCHER_MESSAGE_TYPE = 'nxve_messageFromInteractionStudioToolsGear';
        
        var TO_LAUNCHER_PAYLOAD_TYPE = 'beaconSDK_domEvent';
        
        function sendMessageToEvergageLauncher(message) {
            try {
                document.dispatchEvent(
                    new CustomEvent(VE_CUSTOM_EVENT_NAME, {
                        detail: JSON.stringify(message),
                    })
                );
            } catch (e) {
                console.error(e);
            }
        }
        
        var eventLinkId = null;
        
        if (Evergage !== null) {
            document.addEventListener(Evergage.CustomEvents.OnInit, function (
                domEvent
            ) {
                sendMessageToEvergageLauncher({
                    type: TO_LAUNCHER_MESSAGE_TYPE,
                    payload: {
                        type: TO_LAUNCHER_PAYLOAD_TYPE,
                        payload: {
                            name: Evergage.CustomEvents.OnInit,
                            detail: domEvent.detail,
                        },
                    },
                });
            });
        
            document.addEventListener(Evergage.CustomEvents.OnEventSend, function (
                domEvent
            ) {
                eventLinkId = Math.random().toString().slice(2);
        
                const { actionEvent } = domEvent.detail || {};
                actionEvent._toolsEventLinkId = eventLinkId;
                if (actionEvent.interaction) {
                    actionEvent.explain = true;
                } else {
                    actionEvent.debug = Object.assign(
                        (actionEvent.debug || {}),
                        { explanations: true }
                    );
                }
        
                sendMessageToEvergageLauncher({
                    type: TO_LAUNCHER_MESSAGE_TYPE,
                    payload: {
                        type: TO_LAUNCHER_PAYLOAD_TYPE,
                        payload: {
                            name: Evergage.CustomEvents.OnEventSend,
                            detail: domEvent.detail,
                        },
                    },
                });
            });
        
            document.addEventListener(Evergage.CustomEvents.OnEventResponse, function (
                domEvent
            ) {
                if (domEvent.detail) {
                    const currentPage = Evergage.getCurrentPage();
                    const sitemapConfig = Evergage.getState().config;
                    const matchedPageConfig =
                        Evergage.getState().result &&
                        Evergage.getState().result.matchedConfig;
        
                    eventLinkId = null;
        
                    sendMessageToEvergageLauncher({
                        type: TO_LAUNCHER_MESSAGE_TYPE,
                        payload: {
                            type: TO_LAUNCHER_PAYLOAD_TYPE,
                            payload: {
                                name: Evergage.CustomEvents.OnEventResponse,
                                detail: {
                                    response: domEvent.detail.response,
                                    currentPage: currentPage,
                                    sitemapConfig: sitemapConfig,
                                    matchedPageConfig: matchedPageConfig,
                                },
                            },
                        },
                    });
                }
            });
        }
        
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: System Tools:interactionStudioTools.js");
    }
};


try {
    Evergage.Surveys = Evergage.Surveys || (function() {
        
            var SURVEY_ACTION = {
                SUBMIT: "submit",
                PAGE_NEXT: "pageNext",
                PAGE_PREV: "pagePrev"
            };
        
            var SURVEY_EVENT_PARAM = {
                SURVEY_ACTION: 'surveyAction',
                SURVEY_ID: 'surveyId',
                SURVEY_START_TIME: 'surveyStartTime'
            };
        
            var initialized = false;
        
            function isInitialized() {
                return (initialized || typeof window.Survey === 'object');
            }
        
            /**
             * processSurveyResponses
             * ** recursive **
             * @param responses {object} a collection of survey element response values keyed by element.name (question.name)
             * @param elements {object} a collection of SurveyElements for a given page or panel of a survey
             * @param addResponseFn {function} invoked for each questionType element that has been processed
             */
            function processSurveyResponses(elements, survey, sender) {
                try {
        
                    var shouldHandleElementAsPanel = function(element) {
                        return (element.type === 'panel'
                                && Evergage.cashDom.isArray(element.elements)
                                && element.elements.length !== 0
                                && !isString(element.questionId));
                    };
        
                    var formatAnswer = function(answer) {
                        var result = (answer) ? answer : null;
                        if (result != null && Evergage.cashDom.isArray(result) || isPlainObject(result)) {
                            result = JSON.stringify(result);
                        }
                        return result;
                    };
        
                    var formatQuestionId = function(element, rowId) {
                        var questionId = "survey:" + survey.id + ":" + element.questionId;
                        if (isString(rowId)) {
                            questionId += ":" + rowId;
                        }
                        return questionId;
                    };
        
                    var responses = [];
                    for (var elementIndex = 0; elementIndex < elements.length; elementIndex++) {
                        var element = elements[elementIndex];
                        if (shouldHandleElementAsPanel(element)) {
                            responses = responses.concat(processSurveyResponses(element.elements, survey, sender));
                        } else {
                            if (element.type === "matrix") {
                                for (var rowIndex = 0; rowIndex < element.rows.length; rowIndex++) {
                                    var row = element.rows[rowIndex];
                                    var rowId = element.rowIds[rowIndex];
                                    var allRowsValues = sender.data[element.name] ? sender.data[element.name] : {};
                                    if (allRowsValues[row.value]) {
                                        var rowValue = allRowsValues[row.value];
                                        responses.push({ questionId: formatQuestionId(element, rowId), answer: rowValue });
                                    }
                                }
                            } else {
                                var answer = formatAnswer(sender.data[element.name]);
                                if (answer) {
                                    responses.push({ questionId: formatQuestionId(element), answer: answer });
                                }
                            }
                        }
                    }
                    return responses;
                } catch (e) {
                    Evergage.log.error('Evergage: There was an error when attempting to ' +
                                               'process survey responses: ', e);
                }
            }
        
            function isPlainObject(obj) {
                if (typeof obj !== 'object' || obj === null) return false;
                const proto = Object.getPrototypeOf(obj);
                return proto === null || proto === Object.prototype;
            }
        
            function isString(property) {
                return typeof property === 'string' || property instanceof String;
            }
        
            function handleSurveyAction(surveyAction, survey, sender) {
        
                try {
                    if (surveyAction === SURVEY_ACTION.PAGE_NEXT) {
                        return;
                    } else {
                        var surveyActionEvent = new SurveyActionEvent(surveyAction, survey.id, new Date().getTime());
                        Evergage.cashDom.each(survey.config.pages, function(index, page) {
                            surveyActionEvent.addResponses(processSurveyResponses(page.elements, survey, sender));
                        });
                        surveyActionEvent.send();
                    }
                } catch (e) {
                    Evergage.log.error('Evergage: There was an error when attempting to ' +
                                               'submit survey responses surveyId[' + message.surveyConfig.survey.id + ']: ', e);
                }
            }
        
            function renderSurvey(survey, renderTarget) {
                if (typeof survey !== "object" || !renderTarget) return Evergage.log.error("Evergage: renderSurvey arguments are not valid");
                return injectSurveyResourcesIntoPage().then(() => {
                    try {
                        if (surveyAlreadyRendered(survey.id, renderTarget)) return;
                        window.Survey.JsonObject.metaData.addProperty("questionbase", "questionId");
                        window.Survey.JsonObject.metaData.addProperty("questionbase", "rowIds");
                        var surveyModel = new window.Survey.Model(survey.config);
                        // eslint-disable-next-line new-cap
                        Evergage.cashDom(renderTarget).Survey({
                            model: surveyModel,
                            onComplete: function(sender) {
                                handleSurveyAction(SURVEY_ACTION.SUBMIT, survey, sender);
                            },
                            onPartialSend: function(sender) {
                                handleSurveyAction(SURVEY_ACTION.PAGE_NEXT, survey, sender);
                            }
                        });
                        Evergage.cashDom(renderTarget).attr("data-evg-survey-id", survey.id);
                    } catch (e) {
                        Evergage.log.error('Evergage: There was an error when attempting to render the survey', e);
                    }
                });
            }
        
            function injectSurveyResourceIntoPage(type, url) {
                try {
                    var documentHead = document.head || document.getElementsByTagName('head')[0];
                    var isStylesheet = (type === 'style');
                    var surveyResourceElement = document.createElement(isStylesheet ? 'link' : 'script');
                    surveyResourceElement.setAttribute('type', ((isStylesheet) ? 'text/css' : 'text/javascript'));
                    surveyResourceElement.setAttribute('class', 'evergageSurvey-' + type);
                    surveyResourceElement.setAttribute(((isStylesheet) ? 'href' : 'src'), url);
                    if (isStylesheet) {
                        surveyResourceElement.setAttribute('rel', 'stylesheet');
                    }
                    documentHead.appendChild(surveyResourceElement);
                    Evergage.log.trace('Evergage: Injected survey resource of type[' + type + '] url[' + url + ']');
                } catch (e) {
                    Evergage.log.error('Evergage: There was an error when attempting to inject surveyJS resources into the page: ', e);
                }
        
            }
        
            function injectSurveyResourcesIntoPage() {
                return new Promise(resolve => {
                    if (isInitialized()) {
                        return resolve();
                    }
                    var SURVEY_JS_CDN_BASE_URL = '//cdn.evergage.com/evergage-content/3pp';
                    var SURVEY_JS_VERSION = 'surveyjs-1.0.95';
                    var SURVEY_JS_SCRIPT_NAME = 'survey.cash.min.js';
                    var SURVEY_JS_STYLESHEET_NAME = 'survey.min.css';
                    Object.entries({
                        script: [SURVEY_JS_CDN_BASE_URL, SURVEY_JS_VERSION, SURVEY_JS_SCRIPT_NAME].join('/'),
                        style: [SURVEY_JS_CDN_BASE_URL, SURVEY_JS_VERSION, SURVEY_JS_STYLESHEET_NAME].join('/')
                    }).forEach(function(entry) {
                        const [resourceType, resourceUrl] = entry
                        injectSurveyResourceIntoPage(resourceType, resourceUrl);
                    });
                    var interval = setInterval(function(){
                        if (Evergage.cashDom.fn.Survey != null && window.Survey != null) {
                            clearInterval(interval);
                            initialized = true;
                            resolve();
                        }
                    }, 100);
                })
            }
        
            function surveyAlreadyRendered(surveyId, renderTarget) {
                return Evergage.cashDom(renderTarget).attr("data-evg-survey-id") === surveyId;
            }
        
            function SurveyActionEvent(surveyAction, surveyId, timestamp) {
                this.params = { source: {}, attributes: {} };
                this.params.source[SURVEY_EVENT_PARAM.SURVEY_ACTION] = surveyAction;
                this.params.source[SURVEY_EVENT_PARAM.SURVEY_ID] = surveyId;
                this.params.source[SURVEY_EVENT_PARAM.SURVEY_START_TIME] = timestamp;
            }
        
            SurveyActionEvent.prototype.addResponses = function(responses) {
                for (var i = 0; i < responses.length; i++) {
                    var response = responses[i];
                    this.addResponse(response.questionId, response.answer);
                }
            };
        
            SurveyActionEvent.prototype.addResponse = function(name, value) {
                Evergage.log.trace('Evergage: Adding response to SurveyActionEvent: ' + JSON.stringify({ name: name, value: value }));
                this.params.attributes[name] = value;
            };
        
            SurveyActionEvent.prototype.send = function() {
                Evergage.log.trace('Evergage: Tracking survey event: ', this.params);
                Evergage.sendEvent({
                    action: "Survey " + this.params.source[SURVEY_EVENT_PARAM.SURVEY_ACTION],
                    source: this.params.source,
                    user: {
                        attributes: this.params.attributes
                    }
                });
            };
        
            return {
                renderSurvey: renderSurvey,
                injectSurveyResourcesIntoPage: injectSurveyResourcesIntoPage
            };
        
        })(window);
        
        if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
            window.SalesforceInteractions.mcis.Surveys = Evergage.Surveys;
        }
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Surveys:SurveyJS.js");
    }
};


try {
    (function () {
            var VE_LOCAL_STORAGE_KEY = 'evgVE';
            var SITEMAP_EDITOR_LOCAL_STORAGE_KEY = 'evgVE-cdp-sitemap-editor';
        
            var SdkNamespace = window.Evergage || window.SalesforceInteractions;
        
            function injectEditorLaunchScript(isStandaloneSitemapEditor) {
                try {
                    // getConfig() is not exposed on the Salesforce/CDP build of the SDK
                    var trackerUrl =
                        typeof SdkNamespace.getConfig === 'function' &&
                        SdkNamespace.getConfig().trackerUrl;
        
                    var baseUrl = !isStandaloneSitemapEditor && trackerUrl ? trackerUrl : 'https://cdn.evergage.com';
                    var scriptPath = isStandaloneSitemapEditor
                        ? '/evergage-content/sitemap-editor/4.0.2/launch.sitemap-editor.js'
                        : '/visual-editor/launch.js';
        
                    var scriptUrl = [baseUrl, scriptPath].join('');
        
                    var scriptTag = document.createElement('script');
                    scriptTag.setAttribute('id', 'salesforceInteractionsLauncherScript');
                    scriptTag.src = scriptUrl;
        
                    if (
                        document.getElementById('salesforceInteractionsLauncherScript') == null
                    ) {
                        document.head.appendChild(scriptTag);
                    } else {
                        SdkNamespace.log.info('Launch script is already here.');
                    }
                } catch (err) {
                    SdkNamespace.log.error(
                        'Failed to inject Salesforce Interactions Launcher script: ' + err
                    );
                }
            }
        
            function getUrlBoolean(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? null : results[1] === 'true';
            }
        
            var visualEditorParam = getUrlBoolean('evergageEditor');
            var standaloneEditorParam = getUrlBoolean('salesforceInteractionsSitemapEditor');
        
            var visualEditorEnabledInStorage = function () {
                return window.localStorage[VE_LOCAL_STORAGE_KEY] === 'true';
            };
        
            var standloneSitemapEditorEnabledInStorage = function () {
                return window.localStorage[SITEMAP_EDITOR_LOCAL_STORAGE_KEY] === 'true';
            };
        
            // honor and set local storage based off queryParam
            if (visualEditorParam !== null) {
                window.localStorage.setItem(VE_LOCAL_STORAGE_KEY, visualEditorParam);
            }
        
            if (standaloneEditorParam !== null) {
                window.localStorage.setItem(
                    SITEMAP_EDITOR_LOCAL_STORAGE_KEY,
                    standaloneEditorParam
                );
            }
        
            var inSiteEditorFrameContext =
                window.frameElement && window.frameElement.id === 'siteEditorFrame';
        
            // trigger off of localStorage only
            // chrome extension reads/sets localStorage more easily than modifying the currentTab URL
            if (
                !visualEditorEnabledInStorage() &&
                !standloneSitemapEditorEnabledInStorage() &&
                !inSiteEditorFrameContext
            ) {
                return;
            }
        
            if (window.top === window.self || inSiteEditorFrameContext) {
                document.addEventListener(
                    SdkNamespace.CustomEvents.OnInit,
                    (event) => {
                        injectEditorLaunchScript(
                            standloneSitemapEditorEnabledInStorage()
                        );
                        event.preventDefault();
                    },
                    { once: true }
                );
            }
        })();
        
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Visual Editor:visualEditor.js");
    }
};


try {
        var evgr = Evergage.resolvers;
        const checkCookie = (domain) => {
            if (domain === "sciex.com") {
                let cookieExist = document.cookie.split('; ').find((row) => row.startsWith('OptanonConsent'));
                if (cookieExist && cookieExist.split("groups=")[1].includes('C0004%3A1')) {
                    return [{
                        provider: "OneTrust",
                        purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
                        status: SalesforceInteractions.ConsentStatus.OptIn
                    }];
                }
            }
            return [{
                provider: "OneTrust",
                purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
                status: SalesforceInteractions.ConsentStatus.OptOut
            }];
        };
        
        const getDomain = () => window.location.hostname;
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        function isValidEmail(email) {
            return emailRegex.test(email);
        }
        
        const sciexSitemapConfig = {
            global: {
                onActionEvent: (actionEvent) => {
                    actionEvent.user = actionEvent.user || {};
                    actionEvent.user.attributes = actionEvent.user.attributes || {};
                    actionEvent.user.identities = actionEvent.user.identities || {};
                    return actionEvent;
                },
                contentZones: [{ name: "global_popup"}],
                listeners: []
            },
            pageTypeDefault: {
                name: "default",
                interaction: {
                    name: "Default Page"
                }
            },
             pageTypes: [
                {
                        name: "Homepage",
                        isMatch: () => /^\/$/.test(window.location.pathname),
                        interaction: {
                          name: "SCIEX Homepage",
                        },
                        contentZones: [
                          { name: "HomePage_popup"}
                        ],
                    },
              {
                name: "SCIEX Products",
                isMatch: () => {
                  let regex = new RegExp("\/products$");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Products"
                }
              },
              {
                name: "SCIEX Category Page",
                isMatch: () => {
                  let regex = new RegExp("\/products\/[a-z0-9-]+$");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Category Page"
                }
              },
              {
                name: "SCIEX OS Software Landing Page",
                isMatch: () => {
                  let regex = new RegExp("/products\/software\/sciex-os-software");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX OS Software Landing Page"
                }
              },
              {
                name: "SCIEX Sub Category Page",
                isMatch: () => {
                  let regex = new RegExp("\/products\/[a-z0-9-]+\/[a-z0-9-]+\/?$");
                  let osSoftwareRegex = new RegExp("\/products\/software\/os-software-roi-calculator");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]) && !osSoftwareRegex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Sub Category Page"
                }
              },
              {
                name: "SCIEX Product Detail Page",
                isMatch: () => {
                  let regex = new RegExp("/products\/+[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Product Detail Page"
                }
              },
              {
                name: "SCIEX Applications Landing Page",
                isMatch: () => {
                  let regex = new RegExp("/applications");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Applications Landing Page"
                }
              },
        
              {
                name: "SCIEX OS Software Access Form",
                isMatch: () => {
                  let regex = new RegExp("\/Hidden\/landing-pages\/sciex-os-software-cloudshare");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX OS Software Access Form"
                }
              },
              {
                name: "SCIEX Software ROI Calculator",
                isMatch: () => {
                  let regex = new RegExp("\/products\/software\/os-software-roi-calculator");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Software ROI Calculator"
                }
              },
              {
                name: "SCIEX Request Information",
                isMatch: () => {
                  let regex = new RegExp("\/form-pages\/request-information");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Request Information"
                },
                listeners: []
              },
              {
                name: "SCIEX Product Request Form",
                isMatch: () => {
                  let regex = new RegExp("\/form-pages\/product-request");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Product Request Form"
                },
                listeners: []
              },
              {
                name: "SCIEX Create an Account",
                isMatch: () => {
                  let regex = new RegExp("\/support\/create-account");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Create an Account"
                },
                listeners: [
                  SalesforceInteractions.listener("click", "input[type=button].next_btn", async() => {
                    let email = SalesforceInteractions.cashDom("form.regform input#accountEmail").val();
                    let firstName = SalesforceInteractions.cashDom('form.regform input[name="firstName"]').val();
                    let lastName = SalesforceInteractions.cashDom('form.regform input[name="lastName"]').val();
        
                    if (isValidEmail(email)) {
                      SalesforceInteractions.sendEvent({
                        interaction: {
                          name: "SCIEX Create Account Form Submission"
                        },
                        user: {
                          attributes: {
                            emailAddress: email,
                            firstName: firstName,
                            lastName: lastName
                          }
                        }
                      });
                    }
                  })
                ]
              },
              {
                name: "SCIEX Now Support Page",
                isMatch: () => {
                  let regex = new RegExp("/support$");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Now Support Page"
                }
              },
              {
                name: "SCIEX Now Support Cases",
                isMatch: () => {
                  let regex = new RegExp("\/support\/support-cases");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Now Support Cases"
                }
              },
              {
                name: "SCIEX Training Learning Hub Page",
                isMatch: () => {
                  let regex = new RegExp("\/support\/training$");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Training Learning Hub Page"
                }
              },
              {
                name: "SCIEX Training Course Catalog All",
                isMatch: () => {
                  let regex = new RegExp("\/support\/training\/course-catalog");
                  let urlParams = new URLSearchParams(window.location.search);
                  let isViewAll = (urlParams.get('view') == 'all' ? true : false);
        
                  return regex.test(window.location.href.split('?')[0].split('#')[0]) && isViewAll;
                },
                interaction: {
                  name: "SCIEX Training Course Catalog All"
                }
              },
              {
                name: "SCIEX Virtual Training Programs",
                isMatch: () => {
                  let regex = new RegExp("/support/training/success-programs/success-virtual-training-program");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Virtual Training Programs"
                }
              },
              {
                name: "SCIEX Training Course Catalog",
                isMatch: () => {
                  let regex = new RegExp("\/support\/training\/course-catalog");
                  let urlParams = new URLSearchParams(window.location.search);
                  let isViewCustomer = (urlParams.get('view') == 'atcustomer' ? true : false);
        
                  return regex.test(window.location.href.split('?')[0].split('#')[0]) && isViewCustomer;
                },
                interaction: {
                  name: "SCIEX Training Course Catalog"
                }
              },
              {
                name: "SCIEX Learning Manager Overview",
                isMatch: () => {
                  let regex = new RegExp("/support/training/learning-manager-overview");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Learning Manager Overview"
                }
              },
              {
                name: "SCIEX My Account Profile",
                isMatch: () => {
        
                  let regex = new RegExp("\/support\/profile\/account-information$");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX My Account Profile"
                }
              },
              {
                name: "SCIEX Knowledge Base Articles",
                isMatch: () => {
                  let regex = new RegExp("\/support\/knowledge-base-articles");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Knowledge Base Articles"
                }
              },
              {
                name: "SCIEX Service Landing Page",
                isMatch: () => {
                  let regex = new RegExp("\/support\/professional-lab-services");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Service Landing Page"
                }
              },
              {
                name: "SCIEX Request Support Form Page",
                isMatch: () => {
                  let regex = new RegExp("\/support\/request-support");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Request Support Form Page"
                }
              },
              {
                name: "SCIEX Contact Us",
                isMatch: () => {
                  let regex = new RegExp("\/about-us\/contact-us");
                  return regex.test(window.location.href.split('?')[0].split('#')[0]);
                },
                interaction: {
                  name: "SCIEX Contact Us"
                }
              }
            ]
        };
        
        const initializeMCP = () => {
            const domain = getDomain();
            const consent = checkCookie(domain);
        
            SalesforceInteractions.init({
                cookieDomain: domain,
                consents: consent
            }).then(() => {
                SalesforceInteractions.initSitemap(sciexSitemapConfig);
            });
        };
        
        initializeMCP();
        
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};


}