!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],t):e.ReactTT=t(e.PropTypes,e.React)}(this,function(e,t){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("._arrow_1rec4_5{border:7px solid transparent;left:-7px!important;position:absolute!important}._arrow_1rec4_5._bottom_1rec4_9{bottom:100%!important}._wrapper_1rec4_12{position:fixed!important}._wrapper_1rec4_12._invisible_1rec4_15{pointer-events:none!important;visibility:hidden!important}._wrapper_1rec4_12._visible_1rec4_18{pointer-events:auto!important;visibility:visible!important}@media print{._wrapper_1rec4_12{display:none!important}}@media speech{._wrapper_1rec4_12{display:none!important}}",{});var n={backgroundColor:"#222",spacing:"14px",arrow:"_arrow_1rec4_5",bottom:"_bottom_1rec4_9",wrapper:"_wrapper_1rec4_12",invisible:"_invisible_1rec4_15",visible:"_visible_1rec4_18"},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},a=parseInt(n.spacing,10);var p=e.oneOf(["bottom","top"]),c=function(e){function p(e){o(this,p);var t=l(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,e));return t.onMouseEnter=function(){t.show()},t.onMouseLeave=function(){t.hide()},t.onScroll=function(e){t.state.showTooltip&&t.forceUpdate()},t.state={showTooltip:!1},t.el=null,t.parentEl=null,t.bodyEl=null,t.componentEl=null,t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(p,t.Component),r(p,[{key:"componentDidMount",value:function(){this.parentEl=this.el.parentElement,this.applyListeners(!0)}},{key:"componentWillUnmount",value:function(){this.applyListeners(!1),this.parentEl=null,this.el=null,this.bodyEl=null,this.componentEl=null}},{key:"applyListeners",value:function(e){e?(this.parentEl.addEventListener("mouseenter",this.onMouseEnter),this.parentEl.addEventListener("mouseleave",this.onMouseLeave),window.addEventListener("scroll",this.onScroll)):(this.parentEl.removeEventListener("mouseenter",this.onMouseEnter),this.parentEl.removeEventListener("mouseleave",this.onMouseLeave),window.removeEventListener("scroll",this.onScroll))}},{key:"hide",value:function(){this.setState(function(){return{showTooltip:!1}})}},{key:"show",value:function(){this.setState(function(){return{showTooltip:!0}})}},{key:"render",value:function(){var e,o,r=this,l=this.props,p=l.children,c=l.id,u=l.location,d=this.state.showTooltip?n.visible:n.invisible,h=n.arrow+" "+n[u]+" "+d,f=n[u]+" "+d,m=n[u]+" "+d,b=n.wrapper+" "+n[u]+" "+d,v=function(e){var t=e.location,n=e.backgroundColor,o=""+t.charAt(0).toUpperCase()+t.slice(1);return i({},"border"+o+"Color",n)}(this.props,this.state,this.parentEl,this.bodyEl),y=function(e,t,n,o){if(!n||!o)return{};var r=n.getBoundingClientRect(),i=o.getBoundingClientRect(),s=r.left+r.width/2,l=i.width/2;return l>s?l=s:s+l>document.documentElement.clientWidth&&(l=s+i.width-document.documentElement.scrollWidth),{transform:"translateX(-"+l+"px)"}}(this.props,this.state,this.parentEl,this.bodyEl),_=(this.props,e=this.state,this.parentEl,this.bodyEl,{visibility:e.showTooltip?"visible":"hidden"}),E=(o=this.props,this.state,this.parentEl,this.bodyEl,{backgroundColor:o.backgroundColor}),w=function(e,t,n,o){var r=e.location,i=e.spacing,l=e.zIndex;if(!n)return{};var p=Math.max(i,a),c={},u=n.getBoundingClientRect(),d=o.getBoundingClientRect();switch(l&&(c.zIndex=l),r){case"bottom":return s({},c,{left:u.left+u.width/2,top:u.top+u.height+p+1});case"top":return s({},c,{left:u.left+u.width/2,top:u.top-d.height-p-1});default:return console.warn("unknown tooltip direction '"+r+"'"),c}}(this.props,this.state,this.parentEl,this.bodyEl);return t.createElement("div",{className:b,id:c,onMouseEnter:this.onMouseLeave,ref:function(e){return r.el=e},role:"tooltip",style:w},t.createElement("div",{className:m,ref:function(e){return r.componentEl=e},style:_},t.createElement("div",{className:f,ref:function(e){return r.bodyEl=e},style:y},t.createElement("div",{style:E},p)),t.createElement("div",{className:h,style:v})))}}]),p}();return c.propTypes={backgroundColor:e.string,children:e.any,id:e.string.isRequired,location:p,spacing:e.number,zIndex:e.number},c.defaultProps={backgroundColor:"#222222",location:"top",spacing:14,zIndex:0},c});