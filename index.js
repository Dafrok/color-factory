(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ColorFactory = factory());
}(this, function () { 'use strict';

	var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
	function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

	var index = __commonjs(function (module) {
	module.exports = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};
	});

	var csscolors = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);

	var regexp = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;

	function isLegalRate(rates) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = rates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var rate = _step.value;

	      if (rate[rate.length - 1] !== '%' || !regexp.test(+rate.slice(0, rate.length - 1))) {
	        return false;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return true;
	}

	function isLegalNumber(numbers) {
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = numbers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var number = _step2.value;

	      if (!regexp.test(+number)) {
	        return false;
	      }
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  return true;
	}

	function isHex(color) {
	  var colorValue = parseInt(color.substring(1, 7), 16);
	  return color[0] === '#' && (color.length === 7 || color.length === 4) && colorValue >= 0 && colorValue <= 16777215;
	}

	function isNamedColor(color) {
	  if (window) {
	    var el = document.createElement('i');
	    el.style.color = '';
	    el.style.color = color;
	    return !!el.style.color && el.style.color !== 'transparent';
	    // return computedColor = (el.currentStyle ? el.currentStyle : window.getComputedStyle(el, null)).color
	  } else {
	    return color in csscolors[color];
	  }
	}

	function isTransparent(color) {
	  return color === 'transparent';
	}

	function isRGB(colorAry) {
	  return colorAry.length === 3 && isLegalNumber(colorAry);
	}

	function isRGBA(colorAry) {
	  return colorAry.length === 4 && isLegalNumber(colorAry);
	}

	function isHSL(colorAry) {
	  return colorAry.length === 3 && isLegalNumber(colorAry.slice(0, 1)) && isLegalRate(colorAry.slice(1));
	}

	function isHSLA(colorAry) {
	  return colorAry.length === 4 && isLegalNumber([colorAry[0], colorAry[3]]) && isLegalRate(colorAry.slice(1, 3));
	}

	function _getColorType (color) {
	  var type = color.match(/^(hsl|hsla|rgba|rgb)\(.+\)$/);
	  try {
	    if (type) {

	      var ret = null;
	      var result = type[1];
	      var colorAry = color.replace(/rgba|hsla|rgb|hsl|\(|\)/g, '').split(',');
	      switch (type[1]) {
	        case 'rgb':
	          ret = isRGB(colorAry) && result;
	          break;
	        case 'rgba':
	          ret = isRGBA(colorAry) && result;
	          break;
	        case 'hsl':
	          ret = isHSL(colorAry) && result;
	          break;
	        case 'hsla':
	          ret = isHSLA(colorAry) && result;
	          break;
	      }
	      if (ret) {
	        return ret;
	      } else {
	        throw new Error('Illegal color string.');
	      }
	    } else if (isHex(color)) {
	      return 'hex';
	    } else if (isNamedColor(color)) {
	      return 'named';
	    } else if (isTransparent(color)) {
	      return 'transparent';
	    } else {
	      throw new Error('Illegal color string.');
	    }
	  } catch (e) {
	    return 'unknown';
	  }
	}

	var converter = __commonjs(function (module) {
	// expected hue range: [0, 360)
	// expected saturation range: [0, 1]
	// expected lightness range: [0, 1]
	var hslToRgb = function hslToRgb(hue, saturation, lightness) {
	  // based on algorithm from http://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
	  if (hue == undefined) {
	    return [0, 0, 0];
	  }

	  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
	  var huePrime = hue / 60;
	  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));

	  huePrime = Math.floor(huePrime);
	  var red;
	  var green;
	  var blue;

	  if (huePrime === 0) {
	    red = chroma;
	    green = secondComponent;
	    blue = 0;
	  } else if (huePrime === 1) {
	    red = secondComponent;
	    green = chroma;
	    blue = 0;
	  } else if (huePrime === 2) {
	    red = 0;
	    green = chroma;
	    blue = secondComponent;
	  } else if (huePrime === 3) {
	    red = 0;
	    green = secondComponent;
	    blue = chroma;
	  } else if (huePrime === 4) {
	    red = secondComponent;
	    green = 0;
	    blue = chroma;
	  } else if (huePrime === 5) {
	    red = chroma;
	    green = 0;
	    blue = secondComponent;
	  }

	  var lightnessAdjustment = lightness - chroma / 2;
	  red += lightnessAdjustment;
	  green += lightnessAdjustment;
	  blue += lightnessAdjustment;

	  return [Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255)];
	};

	module.exports = hslToRgb;
	});

	var hslConverter = (converter && typeof converter === 'object' && 'default' in converter ? converter['default'] : converter);

	var index$1 = __commonjs(function (module, exports, global) {
	(function () {
	  module.exports = function (r, g, b) {
	    var d, h, l, max, min, s;
	    r /= 255;
	    g /= 255;
	    b /= 255;
	    max = Math.max(r, g, b);
	    min = Math.min(r, g, b);
	    h = 0;
	    s = 0;
	    l = (max + min) / 2;
	    if (max === min) {
	      h = s = 0;
	    } else {
	      d = max - min;
	      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	      switch (max) {
	        case r:
	          h = (g - b) / d + (g < b ? 6 : 0);
	          break;
	        case g:
	          h = (b - r) / d + 2;
	          break;
	        case b:
	          h = (r - g) / d + 4;
	      }
	      h /= 6;
	    }
	    h = Math.ceil(h * 360);
	    s = Math.ceil(s * 100) + "%";
	    l = Math.ceil(l * 100) + "%";
	    return [h, s, l];
	  };
	}).call(__commonjs_global);
	});

	var rgbConverter = (index$1 && typeof index$1 === 'object' && 'default' in index$1 ? index$1['default'] : index$1);

	function parseToHex(num) {
	  var ret = num.toString(16);
	  return ret.length === 1 ? '0' + ret : ret;
	}

	function getLimitedNumber(num, max, min) {
	  return num > max ? max : num < min ? min : num;
	}

	function rgbaToHSL(color) {
	  var rgbAry = color.slice(color.indexOf('(') + 1, color.indexOf(')')).split(',');
	  var hslAry = rgbConverter(getLimitedNumber(rgbAry[0], 255, 0), getLimitedNumber(rgbAry[1], 255, 0), getLimitedNumber(rgbAry[2], 255, 0));
	  hslAry[1] = hslAry[1].slice(0, -1) / 100;
	  hslAry[2] = hslAry[2].slice(0, -1) / 100;
	  return {
	    h: hslAry[0],
	    s: hslAry[1],
	    l: hslAry[2]
	  };
	}

	function hslaToHSL(color) {
	  var rgb = hslaToRGB(color);
	  return rgbaToHSL('rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')');
	}

	function hexToHSL(color) {
	  var rgb = hexToRGB(color);
	  return rgbaToHSL('rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')');
	}

	function namedToHSL(color) {
	  var rgb = namedToRGB(color);
	  return rgbaToHSL('rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')');
	}

	function hexToRGB(color) {
	  color.length === 4 && (color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3]);
	  return {
	    r: parseInt(color.slice(1, 3), 16),
	    g: parseInt(color.slice(3, 5), 16),
	    b: parseInt(color.slice(5, 7), 16)
	  };
	}

	function rgbaToRGB(color) {
	  var rgbAry = color.slice(color.indexOf('(') + 1, color.indexOf(')')).split(',');
	  return {
	    r: getLimitedNumber(+rgbAry[0], 255, 0),
	    g: getLimitedNumber(+rgbAry[1], 255, 0),
	    b: getLimitedNumber(+rgbAry[2], 255, 0)
	  };
	}

	function hslaToRGB(color) {
	  var hslAry = color.slice(color.indexOf('(') + 1, color.indexOf(')')).split(',');
	  var h = hslAry[0] % 360;
	  var s = getLimitedNumber(hslAry[1].slice(0, -1) / 100, 1, 0);
	  var l = getLimitedNumber(hslAry[2].slice(0, -1) / 100, 1, 0);
	  var rgbAry = hslConverter(h, s, l);
	  return {
	    r: rgbAry[0],
	    g: rgbAry[1],
	    b: rgbAry[2]
	  };
	}

	function namedToRGB(color) {
	  return {
	    r: csscolors[color][0],
	    g: csscolors[color][1],
	    b: csscolors[color][2]
	  };
	}

	var colorParse = {
	  toHSL: function toHSL(color, type) {
	    switch (type) {
	      case 'hex':
	        return hexToHSL(color);
	      case 'rgb':
	      case 'rgba':
	        return rgbaToHSL(color);
	      case 'hsl':
	      case 'hsla':
	        return hslaToHSL(color);
	      case 'named':
	        return namedToHSL(color);
	    }
	    return { h: 0, s: 0, l: 0 };
	  },
	  toRGB: function toRGB(color, type) {
	    switch (type) {
	      case 'hex':
	        return hexToRGB(color);
	      case 'rgb':
	      case 'rgba':
	        return rgbaToRGB(color);
	      case 'hsl':
	      case 'hsla':
	        return hslaToRGB(color);
	      case 'named':
	        return namedToRGB(color);
	    }
	    return { r: 0, g: 0, b: 0 };
	  },
	  getAlpha: function getAlpha(color, type) {
	    if (color === 'transparent') {
	      return 0;
	    } else if (type === 'rgba' || type === 'hsla') {
	      var alpha = parseFloat(color.split(',')[3].slice(0, -1));
	      alpha = alpha > 1 ? 1 : alpha;
	      alpha = alpha < 0 ? 0 : alpha;
	      return alpha;
	    } else {
	      return 1;
	    }
	  }
	};

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var Color = function () {
	  function Color() {
	    var cssColor = arguments.length <= 0 || arguments[0] === undefined ? { r: 0, g: 0, b: 0, h: 0, s: 0, l: 0, a: 0 } : arguments[0];
	    classCallCheck(this, Color);

	    var color = void 0;
	    var type = void 0;
	    if (typeof cssColor === 'string') {
	      color = cssColor.replace(/ /g, '');
	      type = this.getColorType(color);
	    } else {
	      if (cssColor.r || cssColor.g || cssColor.b) {
	        color = 'rgba(' + (cssColor.r || 0) + ',' + (cssColor.g || 0) + ',' + (cssColor.b || 0) + ',' + (cssColor.a || 1) + ')';
	        type = 'rgba';
	      } else {
	        color = 'hsl(' + (cssColor.h || 0) + ',' + (cssColor.s || 0) * 100 + '%,' + (cssColor.l || 0) * 100 + '%,' + (cssColor.a || 1) + ')';
	        type = 'hsla';
	      }
	    }
	    if (type === 'unknown') {
	      this.R = 0;
	      this.G = 0;
	      this.B = 0;
	      this.H = 0;
	      this.S = 0;
	      this.L = 0;
	      this.A = 0;
	    } else {
	      var RGB = colorParse.toRGB(color, type);
	      var HSL = colorParse.toHSL(color, type);
	      var ALPHA = colorParse.getAlpha(color, type);
	      this.R = RGB.r;
	      this.G = RGB.g;
	      this.B = RGB.b;
	      this.H = HSL.h;
	      this.S = HSL.s;
	      this.L = HSL.l;
	      this.A = ALPHA;
	    }
	  }

	  createClass(Color, [{
	    key: 'r',
	    value: function r(val) {
	      if (typeof val === 'undefined') {
	        return this.R;
	      } else {
	        this.R = getLimitedNumber(val | 0, 255, 0);
	        var HSL = colorParse.toHSL(this.toRGB(), 'rgb');
	        this.H = HSL.h;
	        this.S = HSL.s;
	        this.L = HSL.l;
	        return this;
	      }
	    }
	  }, {
	    key: 'g',
	    value: function g(val) {
	      if (typeof val === 'undefined') {
	        return this.G;
	      } else {
	        this.G = getLimitedNumber(val | 0, 255, 0);
	        var HSL = colorParse.toHSL(this.toRGB(), 'rgb');
	        this.H = HSL.h;
	        this.S = HSL.s;
	        this.L = HSL.l;
	        return this;
	      }
	    }
	  }, {
	    key: 'b',
	    value: function b(val) {
	      if (typeof val === 'undefined') {
	        return this.B;
	      } else {
	        this.B = getLimitedNumber(val | 0, 255, 0);
	        var HSL = colorParse.toHSL(this.toRGB(), 'rgb');
	        this.H = HSL.h;
	        this.S = HSL.s;
	        this.L = HSL.l;
	        return this;
	      }
	    }
	  }, {
	    key: 'h',
	    value: function h(val) {
	      if (typeof val === 'undefined') {
	        return this.H;
	      } else {
	        this.H = (val | 0) % 360;
	        var RGB = colorParse.toRGB(this.toHSL(), 'hsl');
	        this.R = RGB.r;
	        this.G = RGB.g;
	        this.B = RGB.b;
	        return this;
	      }
	    }
	  }, {
	    key: 's',
	    value: function s(val) {
	      if (typeof val === 'undefined') {
	        return this.S;
	      } else {
	        this.S = getLimitedNumber(parseFloat(val) || 0, 1, 0);
	        var RGB = colorParse.toRGB(this.toHSL(), 'hsl');
	        this.R = RGB.r;
	        this.G = RGB.g;
	        this.B = RGB.b;
	        return this;
	      }
	    }
	  }, {
	    key: 'l',
	    value: function l(val) {
	      if (typeof val === 'undefined') {
	        return this.L;
	      } else {
	        this.L = getLimitedNumber(parseFloat(val) || 0, 1, 0);
	        var RGB = colorParse.toRGB(this.toHSL(), 'hsl');
	        this.R = RGB.r;
	        this.G = RGB.g;
	        this.B = RGB.b;
	        return this;
	      }
	    }
	  }, {
	    key: 'a',
	    value: function a(val) {
	      if (typeof val === 'undefined') {
	        return this.A;
	      } else {
	        this.A = getLimitedNumber(parseFloat(val) || 0, 1, 0);
	        return this;
	      }
	    }
	  }, {
	    key: 'getColorType',
	    value: function getColorType(color) {
	      return _getColorType(color);
	    }
	  }, {
	    key: 'toHEX',
	    value: function toHEX() {
	      return '#' + parseToHex(this.R) + parseToHex(this.G) + parseToHex(this.B);
	    }
	  }, {
	    key: 'toRGB',
	    value: function toRGB() {
	      return 'rgb(' + this.R + ',' + this.G + ',' + this.B + ')';
	    }
	  }, {
	    key: 'toRGBA',
	    value: function toRGBA() {
	      return 'rgba(' + this.R + ',' + this.G + ',' + this.B + ',' + this.A + ')';
	    }
	  }, {
	    key: 'toHSL',
	    value: function toHSL() {
	      return 'hsl(' + this.H + ',' + this.S * 100 + '%,' + this.L * 100 + '%)';
	    }
	  }, {
	    key: 'toHSLA',
	    value: function toHSLA() {
	      return 'hsla(' + this.H + ',' + this.S * 100 + '%,' + this.L * 100 + '%,' + this.A + ')';
	    }
	  }, {
	    key: 'toSTRING',
	    value: function toSTRING() {
	      if (this.A === 0) {
	        return 'transparent';
	      } else if (this.A === 1) {
	        for (var key in csscolors) {
	          if (csscolors[key][0] === this.R && csscolors[key][1] === this.G && csscolors[key][2] === this.B) {
	            return key;
	          }
	        }
	      }
	      return '';
	    }
	  }]);
	  return Color;
	}();

	return Color;

}));