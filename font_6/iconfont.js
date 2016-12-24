;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.904 96 357.12 96C315.264 96 281.024 127.2 281.024 165.344l0 693.344c0 38.144 34.24 69.344 76.096 69.344l334.784 0C733.76 928 768 896.8 768 858.656L768 165.344C768 127.2 733.76 96 691.904 96M478.88 151.456l91.296 0c8.384 0 15.232 6.176 15.232 13.856 0 7.648-6.848 13.856-15.232 13.856l-91.296 0c-8.416 0-15.232-6.208-15.232-13.856C463.68 157.664 470.496 151.456 478.88 151.456M524.544 900.256c-25.248 0-45.664-18.592-45.664-41.6 0-23.008 20.416-41.6 45.664-41.6 25.216 0 45.664 18.592 45.664 41.6C570.176 881.664 549.76 900.256 524.544 900.256M737.6 789.344 311.488 789.344 311.488 234.656 737.6 234.656 737.6 789.344z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pc" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M919.565463 121.942283 104.433514 121.942283c-22.036899 0-40.066531 18.029632-40.066531 40.066531L64.366983 682.937161c0 22.036899 18.029632 40.066531 40.066531 40.066531l345.360725 0-10.544147 107.886149L250.5248 830.889841l-10.544147 71.167876 544.03767 0-11.598152-71.167876L584.748884 830.889841l-10.544147-107.886149 345.360725 0c22.036899 0 40.066531-18.029632 40.066531-40.066531L959.631994 162.008814C959.633017 139.971915 941.602362 121.942283 919.565463 121.942283zM935.467641 659.734716 88.531336 659.734716 88.531336 178.113607l846.936305 0L935.467641 659.734716z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyingshi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M938.666667 426.666667 938.666667 170.666667c0-22.698667-19.882667-42.666667-42.666667-42.666667L128 128C105.216 128 85.333333 147.968 85.333333 170.666667l0 554.666667c0 22.698667 19.882667 42.666667 42.666667 42.666667l298.666667 0 0 85.333333c0 0-42.666667 0-85.333333 0s-42.666667 42.666667-42.666667 42.666667l383.957333 0c0 42.666667 42.709333 42.666667 42.709333 42.666667L938.666667 938.666667c0 0 42.666667 0 42.666667-42.666667s0-384 0-426.666667C981.333333 426.666667 938.709333 426.666667 938.666667 426.666667zM128 682.666667 128 170.666667l768 0 0 256-170.666667 0c0 0-42.666667 0-42.666667 42.666667 0 21.333333 0 117.333333 0 213.333333L128 682.666667zM597.333333 853.333333l0-85.333333 85.290667 0c0 32.896 0 62.378667 0 85.333333L597.333333 853.333333zM832 896c-11.776 0-21.333333-9.557333-21.333333-21.333333 0-11.776 9.557333-21.333333 21.333333-21.333333s21.333333 9.557333 21.333333 21.333333C853.333333 886.442667 843.776 896 832 896zM938.666667 810.666667l-213.376 0 0-341.333333L938.666667 469.333333 938.666667 810.666667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)