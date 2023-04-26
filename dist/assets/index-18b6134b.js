function Hx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function zg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lo={},Wx={get exports(){return Lo},set exports(e){Lo=e}},_l={},E={},Gx={get exports(){return E},set exports(e){E=e}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ds=Symbol.for("react.element"),Kx=Symbol.for("react.portal"),Yx=Symbol.for("react.fragment"),Xx=Symbol.for("react.strict_mode"),qx=Symbol.for("react.profiler"),Qx=Symbol.for("react.provider"),Zx=Symbol.for("react.context"),Jx=Symbol.for("react.forward_ref"),e2=Symbol.for("react.suspense"),t2=Symbol.for("react.memo"),n2=Symbol.for("react.lazy"),Cp=Symbol.iterator;function r2(e){return e===null||typeof e!="object"?null:(e=Cp&&e[Cp]||e["@@iterator"],typeof e=="function"?e:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,jg={};function zi(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||Fg}zi.prototype.isReactComponent={};zi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bg(){}Bg.prototype=zi.prototype;function xd(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||Fg}var Sd=xd.prototype=new Bg;Sd.constructor=xd;Vg(Sd,zi.prototype);Sd.isPureReactComponent=!0;var Pp=Array.isArray,$g=Object.prototype.hasOwnProperty,_d={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function Hg(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)$g.call(t,r)&&!Ug.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ds,type:e,key:o,ref:s,props:i,_owner:_d.current}}function i2(e,t){return{$$typeof:ds,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ed(e){return typeof e=="object"&&e!==null&&e.$$typeof===ds}function o2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kp=/\/+/g;function Iu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?o2(""+e.key):t.toString(36)}function sa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ds:case Kx:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Iu(s,0):r,Pp(i)?(n="",e!=null&&(n=e.replace(kp,"$&/")+"/"),sa(i,t,n,"",function(u){return u})):i!=null&&(Ed(i)&&(i=i2(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(kp,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Pp(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Iu(o,a);s+=sa(o,t,n,l,i)}else if(l=r2(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Iu(o,a++),s+=sa(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ms(e,t,n){if(e==null)return e;var r=[],i=0;return sa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function s2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var st={current:null},aa={transition:null},a2={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:aa,ReactCurrentOwner:_d};ae.Children={map:Ms,forEach:function(e,t,n){Ms(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ms(e,function(){t++}),t},toArray:function(e){return Ms(e,function(t){return t})||[]},only:function(e){if(!Ed(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=zi;ae.Fragment=Yx;ae.Profiler=qx;ae.PureComponent=xd;ae.StrictMode=Xx;ae.Suspense=e2;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a2;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vg({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=_d.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)$g.call(t,l)&&!Ug.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ds,type:e.type,key:i,ref:o,props:r,_owner:s}};ae.createContext=function(e){return e={$$typeof:Zx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qx,_context:e},e.Consumer=e};ae.createElement=Hg;ae.createFactory=function(e){var t=Hg.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:Jx,render:e}};ae.isValidElement=Ed;ae.lazy=function(e){return{$$typeof:n2,_payload:{_status:-1,_result:e},_init:s2}};ae.memo=function(e,t){return{$$typeof:t2,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=aa.transition;aa.transition={};try{e()}finally{aa.transition=t}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(e,t){return st.current.useCallback(e,t)};ae.useContext=function(e){return st.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return st.current.useDeferredValue(e)};ae.useEffect=function(e,t){return st.current.useEffect(e,t)};ae.useId=function(){return st.current.useId()};ae.useImperativeHandle=function(e,t,n){return st.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return st.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return st.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return st.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return st.current.useReducer(e,t,n)};ae.useRef=function(e){return st.current.useRef(e)};ae.useState=function(e){return st.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return st.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return st.current.useTransition()};ae.version="18.2.0";(function(e){e.exports=ae})(Gx);const Ee=zg(E),Ic=Hx({__proto__:null,default:Ee},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l2=E,u2=Symbol.for("react.element"),c2=Symbol.for("react.fragment"),f2=Object.prototype.hasOwnProperty,d2=l2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h2={key:!0,ref:!0,__self:!0,__source:!0};function Wg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)f2.call(t,r)&&!h2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:u2,type:e,key:o,ref:s,props:i,_owner:d2.current}}_l.Fragment=c2;_l.jsx=Wg;_l.jsxs=Wg;(function(e){e.exports=_l})(Wx);const zc=Lo.Fragment,S=Lo.jsx,N=Lo.jsxs;var Fc={},Vc={},p2={get exports(){return Vc},set exports(e){Vc=e}},St={},jc={},m2={get exports(){return jc},set exports(e){jc=e}},Gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var A=T.length;T.push(M);e:for(;0<A;){var D=A-1>>>1,O=T[D];if(0<i(O,M))T[D]=M,T[A]=O,A=D;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],A=T.pop();if(A!==M){T[0]=A;e:for(var D=0,O=T.length,$=O>>>1;D<$;){var j=2*(D+1)-1,q=T[j],_=j+1,Y=T[_];if(0>i(q,A))_<O&&0>i(Y,q)?(T[D]=Y,T[_]=A,D=_):(T[D]=q,T[j]=A,D=j);else if(_<O&&0>i(Y,A))T[D]=Y,T[_]=A,D=_;else break e}}return M}function i(T,M){var A=T.sortIndex-M.sortIndex;return A!==0?A:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,h=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=T)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function w(T){if(v=!1,p(T),!h)if(n(l)!==null)h=!0,ie(C);else{var M=n(u);M!==null&&ee(w,M.startTime-T)}}function C(T,M){h=!1,v&&(v=!1,y(k),k=-1),g=!0;var A=d;try{for(p(M),f=n(l);f!==null&&(!(f.expirationTime>M)||T&&!I());){var D=f.callback;if(typeof D=="function"){f.callback=null,d=f.priorityLevel;var O=D(f.expirationTime<=M);M=e.unstable_now(),typeof O=="function"?f.callback=O:f===n(l)&&r(l),p(M)}else r(l);f=n(l)}if(f!==null)var $=!0;else{var j=n(u);j!==null&&ee(w,j.startTime-M),$=!1}return $}finally{f=null,d=A,g=!1}}var b=!1,P=null,k=-1,B=5,L=-1;function I(){return!(e.unstable_now()-L<B)}function F(){if(P!==null){var T=e.unstable_now();L=T;var M=!0;try{M=P(!0,T)}finally{M?U():(b=!1,P=null)}}else b=!1}var U;if(typeof m=="function")U=function(){m(F)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,G=K.port2;K.port1.onmessage=F,U=function(){G.postMessage(null)}}else U=function(){x(F,0)};function ie(T){P=T,b||(b=!0,U())}function ee(T,M){k=x(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){h||g||(h=!0,ie(C))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var A=d;d=M;try{return T()}finally{d=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var A=d;d=T;try{return M()}finally{d=A}},e.unstable_scheduleCallback=function(T,M,A){var D=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?D+A:D):A=D,T){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=A+O,T={id:c++,callback:M,priorityLevel:T,startTime:A,expirationTime:O,sortIndex:-1},A>D?(T.sortIndex=A,t(u,T),n(l)===null&&T===n(u)&&(v?(y(k),k=-1):v=!0,ee(w,A-D))):(T.sortIndex=O,t(l,T),h||g||(h=!0,ie(C))),T},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(T){var M=d;return function(){var A=d;d=M;try{return T.apply(this,arguments)}finally{d=A}}}})(Gg);(function(e){e.exports=Gg})(m2);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg=E,wt=jc;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,Mo={};function Fr(e,t){Ei(e,t),Ei(e+"Capture",t)}function Ei(e,t){for(Mo[e]=t,e=0;e<t.length;e++)Yg.add(t[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,g2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bp={},Tp={};function v2(e){return Bc.call(Tp,e)?!0:Bc.call(bp,e)?!1:g2.test(e)?Tp[e]=!0:(bp[e]=!0,!1)}function y2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w2(e,t,n,r){if(t===null||typeof t>"u"||y2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function at(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function Pd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cd,Pd);Xe[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cd,Pd);Xe[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cd,Pd);Xe[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});function kd(e,t,n,r){var i=Xe.hasOwnProperty(t)?Xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w2(t,n,i,r)&&(n=null),r||i===null?v2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var En=Kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ds=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Xg=Symbol.for("react.provider"),qg=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),Qg=Symbol.for("react.offscreen"),Ap=Symbol.iterator;function Xi(e){return e===null||typeof e!="object"?null:(e=Ap&&e[Ap]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,zu;function lo(e){if(zu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zu=t&&t[1]||""}return`
`+zu+e}var Fu=!1;function Vu(e,t){if(!e||Fu)return"";Fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Fu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lo(e):""}function x2(e){switch(e.tag){case 5:return lo(e.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return e=Vu(e.type,!1),e;case 11:return e=Vu(e.type.render,!1),e;case 1:return e=Vu(e.type,!0),e;default:return""}}function Wc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zr:return"Fragment";case Qr:return"Portal";case $c:return"Profiler";case bd:return"StrictMode";case Uc:return"Suspense";case Hc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qg:return(e.displayName||"Context")+".Consumer";case Xg:return(e._context.displayName||"Context")+".Provider";case Td:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ad:return t=e.displayName||null,t!==null?t:Wc(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return Wc(e(t))}catch{}}return null}function S2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(t);case 8:return t===bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _2(e){var t=Zg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Is(e){e._valueTracker||(e._valueTracker=_2(e))}function Jg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gc(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function e1(e,t){t=t.checked,t!=null&&kd(e,"checked",t,!1)}function Kc(e,t){e1(e,t);var n=Jn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yc(e,t.type,Jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Op(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yc(e,t,n){(t!=="number"||Ta(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var uo=Array.isArray;function pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Np(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(uo(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jn(n)}}function t1(e,t){var n=Jn(t.value),r=Jn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function n1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?n1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zs,r1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zs=zs||document.createElement("div"),zs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Do(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E2=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(e){E2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),po[t]=po[e]})});function i1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||po.hasOwnProperty(e)&&po[e]?(""+t).trim():t+"px"}function o1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=i1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var C2=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qc(e,t){if(t){if(C2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function Zc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function Rd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ef=null,mi=null,gi=null;function Mp(e){if(e=ms(e)){if(typeof ef!="function")throw Error(V(280));var t=e.stateNode;t&&(t=bl(t),ef(e.stateNode,e.type,t))}}function s1(e){mi?gi?gi.push(e):gi=[e]:mi=e}function a1(){if(mi){var e=mi,t=gi;if(gi=mi=null,Mp(e),t)for(e=0;e<t.length;e++)Mp(t[e])}}function l1(e,t){return e(t)}function u1(){}var ju=!1;function c1(e,t,n){if(ju)return e(t,n);ju=!0;try{return l1(e,t,n)}finally{ju=!1,(mi!==null||gi!==null)&&(u1(),a1())}}function Io(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var tf=!1;if(vn)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){tf=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{tf=!1}function P2(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var mo=!1,Aa=null,Ra=!1,nf=null,k2={onError:function(e){mo=!0,Aa=e}};function b2(e,t,n,r,i,o,s,a,l){mo=!1,Aa=null,P2.apply(k2,arguments)}function T2(e,t,n,r,i,o,s,a,l){if(b2.apply(this,arguments),mo){if(mo){var u=Aa;mo=!1,Aa=null}else throw Error(V(198));Ra||(Ra=!0,nf=u)}}function Vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dp(e){if(Vr(e)!==e)throw Error(V(188))}function A2(e){var t=e.alternate;if(!t){if(t=Vr(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Dp(i),e;if(o===r)return Dp(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function d1(e){return e=A2(e),e!==null?h1(e):null}function h1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=h1(e);if(t!==null)return t;e=e.sibling}return null}var p1=wt.unstable_scheduleCallback,Ip=wt.unstable_cancelCallback,R2=wt.unstable_shouldYield,O2=wt.unstable_requestPaint,Re=wt.unstable_now,N2=wt.unstable_getCurrentPriorityLevel,Od=wt.unstable_ImmediatePriority,m1=wt.unstable_UserBlockingPriority,Oa=wt.unstable_NormalPriority,L2=wt.unstable_LowPriority,g1=wt.unstable_IdlePriority,El=null,Qt=null;function M2(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(El,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:z2,D2=Math.log,I2=Math.LN2;function z2(e){return e>>>=0,e===0?32:31-(D2(e)/I2|0)|0}var Fs=64,Vs=4194304;function co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Na(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=co(a):(o&=s,o!==0&&(r=co(o)))}else s=n&~i,s!==0?r=co(s):o!==0&&(r=co(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$t(t),i=1<<n,r|=e[n],t&=~i;return r}function F2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-$t(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=F2(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function rf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function v1(){var e=Fs;return Fs<<=1,!(Fs&4194240)&&(Fs=64),e}function Bu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=n}function j2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$t(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Nd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function y1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var w1,Ld,x1,S1,_1,of=!1,js=[],jn=null,Bn=null,$n=null,zo=new Map,Fo=new Map,Ln=[],B2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function Qi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ms(t),t!==null&&Ld(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $2(e,t,n,r,i){switch(t){case"focusin":return jn=Qi(jn,e,t,n,r,i),!0;case"dragenter":return Bn=Qi(Bn,e,t,n,r,i),!0;case"mouseover":return $n=Qi($n,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zo.set(o,Qi(zo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fo.set(o,Qi(Fo.get(o)||null,e,t,n,r,i)),!0}return!1}function E1(e){var t=Sr(e.target);if(t!==null){var n=Vr(t);if(n!==null){if(t=n.tag,t===13){if(t=f1(n),t!==null){e.blockedOn=t,_1(e.priority,function(){x1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function la(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jc=r,n.target.dispatchEvent(r),Jc=null}else return t=ms(n),t!==null&&Ld(t),e.blockedOn=n,!1;t.shift()}return!0}function Fp(e,t,n){la(e)&&n.delete(t)}function U2(){of=!1,jn!==null&&la(jn)&&(jn=null),Bn!==null&&la(Bn)&&(Bn=null),$n!==null&&la($n)&&($n=null),zo.forEach(Fp),Fo.forEach(Fp)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,of||(of=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,U2)))}function Vo(e){function t(i){return Zi(i,e)}if(0<js.length){Zi(js[0],e);for(var n=1;n<js.length;n++){var r=js[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&Zi(jn,e),Bn!==null&&Zi(Bn,e),$n!==null&&Zi($n,e),zo.forEach(t),Fo.forEach(t),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)E1(n),n.blockedOn===null&&Ln.shift()}var vi=En.ReactCurrentBatchConfig,La=!0;function H2(e,t,n,r){var i=de,o=vi.transition;vi.transition=null;try{de=1,Md(e,t,n,r)}finally{de=i,vi.transition=o}}function W2(e,t,n,r){var i=de,o=vi.transition;vi.transition=null;try{de=4,Md(e,t,n,r)}finally{de=i,vi.transition=o}}function Md(e,t,n,r){if(La){var i=sf(e,t,n,r);if(i===null)Qu(e,t,r,Ma,n),zp(e,r);else if($2(i,e,t,n,r))r.stopPropagation();else if(zp(e,r),t&4&&-1<B2.indexOf(e)){for(;i!==null;){var o=ms(i);if(o!==null&&w1(o),o=sf(e,t,n,r),o===null&&Qu(e,t,r,Ma,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qu(e,t,r,null,n)}}var Ma=null;function sf(e,t,n,r){if(Ma=null,e=Rd(r),e=Sr(e),e!==null)if(t=Vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=f1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ma=e,null}function C1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N2()){case Od:return 1;case m1:return 4;case Oa:case L2:return 16;case g1:return 536870912;default:return 16}default:return 16}}var In=null,Dd=null,ua=null;function P1(){if(ua)return ua;var e,t=Dd,n=t.length,r,i="value"in In?In.value:In.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ua=i.slice(e,1<r?1-r:void 0)}function ca(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bs(){return!0}function Vp(){return!1}function _t(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bs:Vp,this.isPropagationStopped=Vp,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bs)},persist:function(){},isPersistent:Bs}),t}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=_t(Fi),ps=Pe({},Fi,{view:0,detail:0}),G2=_t(ps),$u,Uu,Ji,Cl=Pe({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ji&&(Ji&&e.type==="mousemove"?($u=e.screenX-Ji.screenX,Uu=e.screenY-Ji.screenY):Uu=$u=0,Ji=e),$u)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),jp=_t(Cl),K2=Pe({},Cl,{dataTransfer:0}),Y2=_t(K2),X2=Pe({},ps,{relatedTarget:0}),Hu=_t(X2),q2=Pe({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),Q2=_t(q2),Z2=Pe({},Fi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J2=_t(Z2),eS=Pe({},Fi,{data:0}),Bp=_t(eS),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rS[e])?!!t[e]:!1}function zd(){return iS}var oS=Pe({},ps,{key:function(e){if(e.key){var t=tS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(e){return e.type==="keypress"?ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sS=_t(oS),aS=Pe({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=_t(aS),lS=Pe({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),uS=_t(lS),cS=Pe({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=_t(cS),dS=Pe({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=_t(dS),pS=[9,13,27,32],Fd=vn&&"CompositionEvent"in window,go=null;vn&&"documentMode"in document&&(go=document.documentMode);var mS=vn&&"TextEvent"in window&&!go,k1=vn&&(!Fd||go&&8<go&&11>=go),Up=String.fromCharCode(32),Hp=!1;function b1(e,t){switch(e){case"keyup":return pS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function gS(e,t){switch(e){case"compositionend":return T1(t);case"keypress":return t.which!==32?null:(Hp=!0,Up);case"textInput":return e=t.data,e===Up&&Hp?null:e;default:return null}}function vS(e,t){if(Jr)return e==="compositionend"||!Fd&&b1(e,t)?(e=P1(),ua=Dd=In=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return k1&&t.locale!=="ko"?null:t.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yS[e.type]:t==="textarea"}function A1(e,t,n,r){s1(r),t=Da(t,"onChange"),0<t.length&&(n=new Id("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vo=null,jo=null;function wS(e){j1(e,0)}function Pl(e){var t=ni(e);if(Jg(t))return e}function xS(e,t){if(e==="change")return t}var R1=!1;if(vn){var Wu;if(vn){var Gu="oninput"in document;if(!Gu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Gu=typeof Gp.oninput=="function"}Wu=Gu}else Wu=!1;R1=Wu&&(!document.documentMode||9<document.documentMode)}function Kp(){vo&&(vo.detachEvent("onpropertychange",O1),jo=vo=null)}function O1(e){if(e.propertyName==="value"&&Pl(jo)){var t=[];A1(t,jo,e,Rd(e)),c1(wS,t)}}function SS(e,t,n){e==="focusin"?(Kp(),vo=t,jo=n,vo.attachEvent("onpropertychange",O1)):e==="focusout"&&Kp()}function _S(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(jo)}function ES(e,t){if(e==="click")return Pl(t)}function CS(e,t){if(e==="input"||e==="change")return Pl(t)}function PS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:PS;function Bo(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bc.call(t,i)||!Ht(e[i],t[i]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xp(e,t){var n=Yp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yp(n)}}function N1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?N1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function L1(){for(var e=window,t=Ta();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ta(e.document)}return t}function Vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kS(e){var t=L1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&N1(n.ownerDocument.documentElement,n)){if(r!==null&&Vd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Xp(n,o);var s=Xp(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bS=vn&&"documentMode"in document&&11>=document.documentMode,ei=null,af=null,yo=null,lf=!1;function qp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lf||ei==null||ei!==Ta(r)||(r=ei,"selectionStart"in r&&Vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Bo(yo,r)||(yo=r,r=Da(af,"onSelect"),0<r.length&&(t=new Id("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ei)))}function $s(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ti={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionend:$s("Transition","TransitionEnd")},Ku={},M1={};vn&&(M1=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function kl(e){if(Ku[e])return Ku[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in M1)return Ku[e]=t[n];return e}var D1=kl("animationend"),I1=kl("animationiteration"),z1=kl("animationstart"),F1=kl("transitionend"),V1=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(e,t){V1.set(e,t),Fr(t,[e])}for(var Yu=0;Yu<Qp.length;Yu++){var Xu=Qp[Yu],TS=Xu.toLowerCase(),AS=Xu[0].toUpperCase()+Xu.slice(1);lr(TS,"on"+AS)}lr(D1,"onAnimationEnd");lr(I1,"onAnimationIteration");lr(z1,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(F1,"onTransitionEnd");Ei("onMouseEnter",["mouseout","mouseover"]);Ei("onMouseLeave",["mouseout","mouseover"]);Ei("onPointerEnter",["pointerout","pointerover"]);Ei("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Zp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,T2(r,t,void 0,e),e.currentTarget=null}function j1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Zp(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Zp(i,a,u),o=l}}}if(Ra)throw e=nf,Ra=!1,nf=null,e}function ve(e,t){var n=t[hf];n===void 0&&(n=t[hf]=new Set);var r=e+"__bubble";n.has(r)||(B1(t,e,2,!1),n.add(r))}function qu(e,t,n){var r=0;t&&(r|=4),B1(n,e,r,t)}var Us="_reactListening"+Math.random().toString(36).slice(2);function $o(e){if(!e[Us]){e[Us]=!0,Yg.forEach(function(n){n!=="selectionchange"&&(RS.has(n)||qu(n,!1,e),qu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Us]||(t[Us]=!0,qu("selectionchange",!1,t))}}function B1(e,t,n,r){switch(C1(t)){case 1:var i=H2;break;case 4:i=W2;break;default:i=Md}n=i.bind(null,t,n,e),i=void 0,!tf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Qu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Sr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}c1(function(){var u=o,c=Rd(n),f=[];e:{var d=V1.get(e);if(d!==void 0){var g=Id,h=e;switch(e){case"keypress":if(ca(n)===0)break e;case"keydown":case"keyup":g=sS;break;case"focusin":h="focus",g=Hu;break;case"focusout":h="blur",g=Hu;break;case"beforeblur":case"afterblur":g=Hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Y2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=uS;break;case D1:case I1:case z1:g=Q2;break;case F1:g=fS;break;case"scroll":g=G2;break;case"wheel":g=hS;break;case"copy":case"cut":case"paste":g=J2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$p}var v=(t&4)!==0,x=!v&&e==="scroll",y=v?d!==null?d+"Capture":null:d;v=[];for(var m=u,p;m!==null;){p=m;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,y!==null&&(w=Io(m,y),w!=null&&v.push(Uo(m,w,p)))),x)break;m=m.return}0<v.length&&(d=new g(d,h,null,n,c),f.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==Jc&&(h=n.relatedTarget||n.fromElement)&&(Sr(h)||h[yn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(h=n.relatedTarget||n.toElement,g=u,h=h?Sr(h):null,h!==null&&(x=Vr(h),h!==x||h.tag!==5&&h.tag!==6)&&(h=null)):(g=null,h=u),g!==h)){if(v=jp,w="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=$p,w="onPointerLeave",y="onPointerEnter",m="pointer"),x=g==null?d:ni(g),p=h==null?d:ni(h),d=new v(w,m+"leave",g,n,c),d.target=x,d.relatedTarget=p,w=null,Sr(c)===u&&(v=new v(y,m+"enter",h,n,c),v.target=p,v.relatedTarget=x,w=v),x=w,g&&h)t:{for(v=g,y=h,m=0,p=v;p;p=Wr(p))m++;for(p=0,w=y;w;w=Wr(w))p++;for(;0<m-p;)v=Wr(v),m--;for(;0<p-m;)y=Wr(y),p--;for(;m--;){if(v===y||y!==null&&v===y.alternate)break t;v=Wr(v),y=Wr(y)}v=null}else v=null;g!==null&&Jp(f,d,g,v,!1),h!==null&&x!==null&&Jp(f,x,h,v,!0)}}e:{if(d=u?ni(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=xS;else if(Wp(d))if(R1)C=CS;else{C=_S;var b=SS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=ES);if(C&&(C=C(e,u))){A1(f,C,n,c);break e}b&&b(e,d,u),e==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Yc(d,"number",d.value)}switch(b=u?ni(u):window,e){case"focusin":(Wp(b)||b.contentEditable==="true")&&(ei=b,af=u,yo=null);break;case"focusout":yo=af=ei=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,qp(f,n,c);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":qp(f,n,c)}var P;if(Fd)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Jr?b1(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(k1&&n.locale!=="ko"&&(Jr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Jr&&(P=P1()):(In=c,Dd="value"in In?In.value:In.textContent,Jr=!0)),b=Da(u,k),0<b.length&&(k=new Bp(k,e,null,n,c),f.push({event:k,listeners:b}),P?k.data=P:(P=T1(n),P!==null&&(k.data=P)))),(P=mS?gS(e,n):vS(e,n))&&(u=Da(u,"onBeforeInput"),0<u.length&&(c=new Bp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}j1(f,t)})}function Uo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Da(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Io(e,n),o!=null&&r.unshift(Uo(e,o,i)),o=Io(e,t),o!=null&&r.push(Uo(e,o,i))),e=e.return}return r}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jp(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Io(n,o),l!=null&&s.unshift(Uo(n,l,a))):i||(l=Io(n,o),l!=null&&s.push(Uo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var OS=/\r\n?/g,NS=/\u0000|\uFFFD/g;function em(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(NS,"")}function Hs(e,t,n){if(t=em(t),em(e)!==t&&n)throw Error(V(425))}function Ia(){}var uf=null,cf=null;function ff(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,tm=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof tm<"u"?function(e){return tm.resolve(null).then(e).catch(DS)}:df;function DS(e){setTimeout(function(){throw e})}function Zu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vo(t)}function Un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vi=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Vi,Ho="__reactProps$"+Vi,yn="__reactContainer$"+Vi,hf="__reactEvents$"+Vi,IS="__reactListeners$"+Vi,zS="__reactHandles$"+Vi;function Sr(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nm(e);e!==null;){if(n=e[Xt])return n;e=nm(e)}return t}e=n,n=e.parentNode}return null}function ms(e){return e=e[Xt]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ni(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function bl(e){return e[Ho]||null}var pf=[],ri=-1;function ur(e){return{current:e}}function ye(e){0>ri||(e.current=pf[ri],pf[ri]=null,ri--)}function me(e,t){ri++,pf[ri]=e.current,e.current=t}var er={},tt=ur(er),ft=ur(!1),Tr=er;function Ci(e,t){var n=e.type.contextTypes;if(!n)return er;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function dt(e){return e=e.childContextTypes,e!=null}function za(){ye(ft),ye(tt)}function rm(e,t,n){if(tt.current!==er)throw Error(V(168));me(tt,t),me(ft,n)}function $1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,S2(e)||"Unknown",i));return Pe({},n,r)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||er,Tr=tt.current,me(tt,e),me(ft,ft.current),!0}function im(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=$1(e,t,Tr),r.__reactInternalMemoizedMergedChildContext=e,ye(ft),ye(tt),me(tt,e)):ye(ft),me(ft,n)}var on=null,Tl=!1,Ju=!1;function U1(e){on===null?on=[e]:on.push(e)}function FS(e){Tl=!0,U1(e)}function cr(){if(!Ju&&on!==null){Ju=!0;var e=0,t=de;try{var n=on;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,Tl=!1}catch(i){throw on!==null&&(on=on.slice(e+1)),p1(Od,cr),i}finally{de=t,Ju=!1}}return null}var ii=[],oi=0,Va=null,ja=0,Pt=[],kt=0,Ar=null,an=1,ln="";function vr(e,t){ii[oi++]=ja,ii[oi++]=Va,Va=e,ja=t}function H1(e,t,n){Pt[kt++]=an,Pt[kt++]=ln,Pt[kt++]=Ar,Ar=e;var r=an;e=ln;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var o=32-$t(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,an=1<<32-$t(t)+i|n<<i|r,ln=o+e}else an=1<<o|n<<i|r,ln=e}function jd(e){e.return!==null&&(vr(e,1),H1(e,1,0))}function Bd(e){for(;e===Va;)Va=ii[--oi],ii[oi]=null,ja=ii[--oi],ii[oi]=null;for(;e===Ar;)Ar=Pt[--kt],Pt[kt]=null,ln=Pt[--kt],Pt[kt]=null,an=Pt[--kt],Pt[kt]=null}var yt=null,vt=null,we=!1,Vt=null;function W1(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function om(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,vt=Un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ar!==null?{id:an,overflow:ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,vt=null,!0):!1;default:return!1}}function mf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gf(e){if(we){var t=vt;if(t){var n=t;if(!om(e,t)){if(mf(e))throw Error(V(418));t=Un(n.nextSibling);var r=yt;t&&om(e,t)?W1(r,n):(e.flags=e.flags&-4097|2,we=!1,yt=e)}}else{if(mf(e))throw Error(V(418));e.flags=e.flags&-4097|2,we=!1,yt=e}}}function sm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function Ws(e){if(e!==yt)return!1;if(!we)return sm(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ff(e.type,e.memoizedProps)),t&&(t=vt)){if(mf(e))throw G1(),Error(V(418));for(;t;)W1(e,t),t=Un(t.nextSibling)}if(sm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=Un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=yt?Un(e.stateNode.nextSibling):null;return!0}function G1(){for(var e=vt;e;)e=Un(e.nextSibling)}function Pi(){vt=yt=null,we=!1}function $d(e){Vt===null?Vt=[e]:Vt.push(e)}var VS=En.ReactCurrentBatchConfig;function zt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ba=ur(null),$a=null,si=null,Ud=null;function Hd(){Ud=si=$a=null}function Wd(e){var t=Ba.current;ye(Ba),e._currentValue=t}function vf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yi(e,t){$a=e,Ud=si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Ot(e){var t=e._currentValue;if(Ud!==e)if(e={context:e,memoizedValue:t,next:null},si===null){if($a===null)throw Error(V(308));si=e,$a.dependencies={lanes:0,firstContext:e}}else si=si.next=e;return t}var _r=null;function Gd(e){_r===null?_r=[e]:_r.push(e)}function K1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Gd(t)):(n.next=i.next,i.next=n),t.interleaved=n,wn(e,r)}function wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var On=!1;function Kd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wn(e,n)}return i=r.interleaved,i===null?(t.next=t,Gd(r)):(t.next=i.next,i.next=t),r.interleaved=t,wn(e,n)}function fa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nd(e,n)}}function am(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var i=e.updateQueue;On=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var h=e,v=a;switch(d=t,g=n,v.tag){case 1:if(h=v.payload,typeof h=="function"){f=h.call(g,f,d);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,d=typeof h=="function"?h.call(g,f,d):h,d==null)break e;f=Pe({},f,d);break e;case 2:On=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Or|=s,e.lanes=s,e.memoizedState=f}}function lm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var X1=new Kg.Component().refs;function yf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternals)?Vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),i=Gn(e),o=hn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Hn(e,o,i),t!==null&&(Ut(t,e,i,r),fa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),i=Gn(e),o=hn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Hn(e,o,i),t!==null&&(Ut(t,e,i,r),fa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=Gn(e),i=hn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Hn(e,i,r),t!==null&&(Ut(t,e,r,n),fa(t,e,r))}};function um(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Bo(n,r)||!Bo(i,o):!0}function q1(e,t,n){var r=!1,i=er,o=t.contextType;return typeof o=="object"&&o!==null?o=Ot(o):(i=dt(t)?Tr:tt.current,r=t.contextTypes,o=(r=r!=null)?Ci(e,i):er),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function cm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function wf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=X1,Kd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ot(o):(o=dt(t)?Tr:tt.current,i.context=Ci(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(yf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Al.enqueueReplaceState(i,i.state,null),Ua(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===X1&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function Gs(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fm(e){var t=e._init;return t(e._payload)}function Q1(e){function t(y,m){if(e){var p=y.deletions;p===null?(y.deletions=[m],y.flags|=16):p.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=Kn(y,m),y.index=0,y.sibling=null,y}function o(y,m,p){return y.index=p,e?(p=y.alternate,p!==null?(p=p.index,p<m?(y.flags|=2,m):p):(y.flags|=2,m)):(y.flags|=1048576,m)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,m,p,w){return m===null||m.tag!==6?(m=sc(p,y.mode,w),m.return=y,m):(m=i(m,p),m.return=y,m)}function l(y,m,p,w){var C=p.type;return C===Zr?c(y,m,p.props.children,w,p.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Rn&&fm(C)===m.type)?(w=i(m,p.props),w.ref=eo(y,m,p),w.return=y,w):(w=va(p.type,p.key,p.props,null,y.mode,w),w.ref=eo(y,m,p),w.return=y,w)}function u(y,m,p,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=ac(p,y.mode,w),m.return=y,m):(m=i(m,p.children||[]),m.return=y,m)}function c(y,m,p,w,C){return m===null||m.tag!==7?(m=kr(p,y.mode,w,C),m.return=y,m):(m=i(m,p),m.return=y,m)}function f(y,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=sc(""+m,y.mode,p),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ds:return p=va(m.type,m.key,m.props,null,y.mode,p),p.ref=eo(y,null,m),p.return=y,p;case Qr:return m=ac(m,y.mode,p),m.return=y,m;case Rn:var w=m._init;return f(y,w(m._payload),p)}if(uo(m)||Xi(m))return m=kr(m,y.mode,p,null),m.return=y,m;Gs(y,m)}return null}function d(y,m,p,w){var C=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(y,m,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ds:return p.key===C?l(y,m,p,w):null;case Qr:return p.key===C?u(y,m,p,w):null;case Rn:return C=p._init,d(y,m,C(p._payload),w)}if(uo(p)||Xi(p))return C!==null?null:c(y,m,p,w,null);Gs(y,p)}return null}function g(y,m,p,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(p)||null,a(m,y,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ds:return y=y.get(w.key===null?p:w.key)||null,l(m,y,w,C);case Qr:return y=y.get(w.key===null?p:w.key)||null,u(m,y,w,C);case Rn:var b=w._init;return g(y,m,p,b(w._payload),C)}if(uo(w)||Xi(w))return y=y.get(p)||null,c(m,y,w,C,null);Gs(m,w)}return null}function h(y,m,p,w){for(var C=null,b=null,P=m,k=m=0,B=null;P!==null&&k<p.length;k++){P.index>k?(B=P,P=null):B=P.sibling;var L=d(y,P,p[k],w);if(L===null){P===null&&(P=B);break}e&&P&&L.alternate===null&&t(y,P),m=o(L,m,k),b===null?C=L:b.sibling=L,b=L,P=B}if(k===p.length)return n(y,P),we&&vr(y,k),C;if(P===null){for(;k<p.length;k++)P=f(y,p[k],w),P!==null&&(m=o(P,m,k),b===null?C=P:b.sibling=P,b=P);return we&&vr(y,k),C}for(P=r(y,P);k<p.length;k++)B=g(P,y,k,p[k],w),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?k:B.key),m=o(B,m,k),b===null?C=B:b.sibling=B,b=B);return e&&P.forEach(function(I){return t(y,I)}),we&&vr(y,k),C}function v(y,m,p,w){var C=Xi(p);if(typeof C!="function")throw Error(V(150));if(p=C.call(p),p==null)throw Error(V(151));for(var b=C=null,P=m,k=m=0,B=null,L=p.next();P!==null&&!L.done;k++,L=p.next()){P.index>k?(B=P,P=null):B=P.sibling;var I=d(y,P,L.value,w);if(I===null){P===null&&(P=B);break}e&&P&&I.alternate===null&&t(y,P),m=o(I,m,k),b===null?C=I:b.sibling=I,b=I,P=B}if(L.done)return n(y,P),we&&vr(y,k),C;if(P===null){for(;!L.done;k++,L=p.next())L=f(y,L.value,w),L!==null&&(m=o(L,m,k),b===null?C=L:b.sibling=L,b=L);return we&&vr(y,k),C}for(P=r(y,P);!L.done;k++,L=p.next())L=g(P,y,k,L.value,w),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?k:L.key),m=o(L,m,k),b===null?C=L:b.sibling=L,b=L);return e&&P.forEach(function(F){return t(y,F)}),we&&vr(y,k),C}function x(y,m,p,w){if(typeof p=="object"&&p!==null&&p.type===Zr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ds:e:{for(var C=p.key,b=m;b!==null;){if(b.key===C){if(C=p.type,C===Zr){if(b.tag===7){n(y,b.sibling),m=i(b,p.props.children),m.return=y,y=m;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Rn&&fm(C)===b.type){n(y,b.sibling),m=i(b,p.props),m.ref=eo(y,b,p),m.return=y,y=m;break e}n(y,b);break}else t(y,b);b=b.sibling}p.type===Zr?(m=kr(p.props.children,y.mode,w,p.key),m.return=y,y=m):(w=va(p.type,p.key,p.props,null,y.mode,w),w.ref=eo(y,m,p),w.return=y,y=w)}return s(y);case Qr:e:{for(b=p.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(y,m.sibling),m=i(m,p.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=ac(p,y.mode,w),m.return=y,y=m}return s(y);case Rn:return b=p._init,x(y,m,b(p._payload),w)}if(uo(p))return h(y,m,p,w);if(Xi(p))return v(y,m,p,w);Gs(y,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,p),m.return=y,y=m):(n(y,m),m=sc(p,y.mode,w),m.return=y,y=m),s(y)):n(y,m)}return x}var ki=Q1(!0),Z1=Q1(!1),gs={},Zt=ur(gs),Wo=ur(gs),Go=ur(gs);function Er(e){if(e===gs)throw Error(V(174));return e}function Yd(e,t){switch(me(Go,t),me(Wo,e),me(Zt,gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qc(t,e)}ye(Zt),me(Zt,t)}function bi(){ye(Zt),ye(Wo),ye(Go)}function J1(e){Er(Go.current);var t=Er(Zt.current),n=qc(t,e.type);t!==n&&(me(Wo,e),me(Zt,n))}function Xd(e){Wo.current===e&&(ye(Zt),ye(Wo))}var Se=ur(0);function Ha(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ec=[];function qd(){for(var e=0;e<ec.length;e++)ec[e]._workInProgressVersionPrimary=null;ec.length=0}var da=En.ReactCurrentDispatcher,tc=En.ReactCurrentBatchConfig,Rr=0,Ce=null,Me=null,Ve=null,Wa=!1,wo=!1,Ko=0,jS=0;function Qe(){throw Error(V(321))}function Qd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function Zd(e,t,n,r,i,o){if(Rr=o,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,da.current=e===null||e.memoizedState===null?HS:WS,e=n(r,i),wo){o=0;do{if(wo=!1,Ko=0,25<=o)throw Error(V(301));o+=1,Ve=Me=null,t.updateQueue=null,da.current=GS,e=n(r,i)}while(wo)}if(da.current=Ga,t=Me!==null&&Me.next!==null,Rr=0,Ve=Me=Ce=null,Wa=!1,t)throw Error(V(300));return e}function Jd(){var e=Ko!==0;return Ko=0,e}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ce.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Nt(){if(Me===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ve===null?Ce.memoizedState:Ve.next;if(t!==null)Ve=t,Me=e;else{if(e===null)throw Error(V(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ve===null?Ce.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Yo(e,t){return typeof t=="function"?t(e):t}function nc(e){var t=Nt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Me,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Ce.lanes|=c,Or|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ht(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ce.lanes|=o,Or|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rc(e){var t=Nt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ht(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ev(){}function tv(e,t){var n=Ce,r=Nt(),i=t(),o=!Ht(r.memoizedState,i);if(o&&(r.memoizedState=i,ut=!0),r=r.queue,eh(iv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Xo(9,rv.bind(null,n,r,i,t),void 0,null),je===null)throw Error(V(349));Rr&30||nv(n,t,i)}return i}function nv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rv(e,t,n,r){t.value=n,t.getSnapshot=r,ov(t)&&sv(e)}function iv(e,t,n){return n(function(){ov(t)&&sv(e)})}function ov(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function sv(e){var t=wn(e,1);t!==null&&Ut(t,e,1,-1)}function dm(e){var t=Kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:e},t.queue=e,e=e.dispatch=US.bind(null,Ce,e),[t.memoizedState,e]}function Xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function av(){return Nt().memoizedState}function ha(e,t,n,r){var i=Kt();Ce.flags|=e,i.memoizedState=Xo(1|t,n,void 0,r===void 0?null:r)}function Rl(e,t,n,r){var i=Nt();r=r===void 0?null:r;var o=void 0;if(Me!==null){var s=Me.memoizedState;if(o=s.destroy,r!==null&&Qd(r,s.deps)){i.memoizedState=Xo(t,n,o,r);return}}Ce.flags|=e,i.memoizedState=Xo(1|t,n,o,r)}function hm(e,t){return ha(8390656,8,e,t)}function eh(e,t){return Rl(2048,8,e,t)}function lv(e,t){return Rl(4,2,e,t)}function uv(e,t){return Rl(4,4,e,t)}function cv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fv(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4,4,cv.bind(null,t,e),n)}function th(){}function dv(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hv(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pv(e,t,n){return Rr&21?(Ht(n,t)||(n=v1(),Ce.lanes|=n,Or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function BS(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=tc.transition;tc.transition={};try{e(!1),t()}finally{de=n,tc.transition=r}}function mv(){return Nt().memoizedState}function $S(e,t,n){var r=Gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gv(e))vv(t,n);else if(n=K1(e,t,n,r),n!==null){var i=it();Ut(n,e,r,i),yv(n,t,r)}}function US(e,t,n){var r=Gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gv(e))vv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ht(a,s)){var l=t.interleaved;l===null?(i.next=i,Gd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=K1(e,t,i,r),n!==null&&(i=it(),Ut(n,e,r,i),yv(n,t,r))}}function gv(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function vv(e,t){wo=Wa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nd(e,n)}}var Ga={readContext:Ot,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},HS={readContext:Ot,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:hm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ha(4194308,4,cv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return ha(4,2,e,t)},useMemo:function(e,t){var n=Kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$S.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:dm,useDebugValue:th,useDeferredValue:function(e){return Kt().memoizedState=e},useTransition:function(){var e=dm(!1),t=e[0];return e=BS.bind(null,e[1]),Kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,i=Kt();if(we){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),je===null)throw Error(V(349));Rr&30||nv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hm(iv.bind(null,r,o,e),[e]),r.flags|=2048,Xo(9,rv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Kt(),t=je.identifierPrefix;if(we){var n=ln,r=an;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},WS={readContext:Ot,useCallback:dv,useContext:Ot,useEffect:eh,useImperativeHandle:fv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:hv,useReducer:nc,useRef:av,useState:function(){return nc(Yo)},useDebugValue:th,useDeferredValue:function(e){var t=Nt();return pv(t,Me.memoizedState,e)},useTransition:function(){var e=nc(Yo)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},GS={readContext:Ot,useCallback:dv,useContext:Ot,useEffect:eh,useImperativeHandle:fv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:hv,useReducer:rc,useRef:av,useState:function(){return rc(Yo)},useDebugValue:th,useDeferredValue:function(e){var t=Nt();return Me===null?t.memoizedState=e:pv(t,Me.memoizedState,e)},useTransition:function(){var e=rc(Yo)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function Ti(e,t){try{var n="",r=t;do n+=x2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ic(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var KS=typeof WeakMap=="function"?WeakMap:Map;function wv(e,t,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ya||(Ya=!0,Rf=r),xf(e,t)},n}function xv(e,t,n){n=hn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xf(e,t),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function pm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new KS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=a_.bind(null,e,t,n),t.then(e,e))}function mm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=hn(-1,1),t.tag=2,Hn(n,t,1))),n.lanes|=1),e)}var YS=En.ReactCurrentOwner,ut=!1;function rt(e,t,n,r){t.child=e===null?Z1(t,null,n,r):ki(t,e.child,n,r)}function vm(e,t,n,r,i){n=n.render;var o=t.ref;return yi(t,i),r=Zd(e,t,n,r,o,i),n=Jd(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(we&&n&&jd(t),t.flags|=1,rt(e,t,r,i),t.child)}function ym(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!uh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Sv(e,t,o,r,i)):(e=va(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(s,r)&&e.ref===t.ref)return xn(e,t,i)}return t.flags|=1,e=Kn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Sv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Bo(o,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,xn(e,t,i)}return Sf(e,t,n,r,i)}function _v(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(li,gt),gt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(li,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(li,gt),gt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(li,gt),gt|=r;return rt(e,t,i,n),t.child}function Ev(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sf(e,t,n,r,i){var o=dt(n)?Tr:tt.current;return o=Ci(t,o),yi(t,i),n=Zd(e,t,n,r,o,i),r=Jd(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(we&&r&&jd(t),t.flags|=1,rt(e,t,n,i),t.child)}function wm(e,t,n,r,i){if(dt(n)){var o=!0;Fa(t)}else o=!1;if(yi(t,i),t.stateNode===null)pa(e,t),q1(t,n,r),wf(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ot(u):(u=dt(n)?Tr:tt.current,u=Ci(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&cm(t,s,r,u),On=!1;var d=t.memoizedState;s.state=d,Ua(t,r,s,i),l=t.memoizedState,a!==r||d!==l||ft.current||On?(typeof c=="function"&&(yf(t,n,c,r),l=t.memoizedState),(a=On||um(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Y1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:zt(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ot(l):(l=dt(n)?Tr:tt.current,l=Ci(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&cm(t,s,r,l),On=!1,d=t.memoizedState,s.state=d,Ua(t,r,s,i);var h=t.memoizedState;a!==f||d!==h||ft.current||On?(typeof g=="function"&&(yf(t,n,g,r),h=t.memoizedState),(u=On||um(t,n,u,r,d,h,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,h,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),s.props=r,s.state=h,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return _f(e,t,n,r,o,i)}function _f(e,t,n,r,i,o){Ev(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&im(t,n,!1),xn(e,t,o);r=t.stateNode,YS.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ki(t,e.child,null,o),t.child=ki(t,null,a,o)):rt(e,t,a,o),t.memoizedState=r.state,i&&im(t,n,!0),t.child}function Cv(e){var t=e.stateNode;t.pendingContext?rm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rm(e,t.context,!1),Yd(e,t.containerInfo)}function xm(e,t,n,r,i){return Pi(),$d(i),t.flags|=256,rt(e,t,n,r),t.child}var Ef={dehydrated:null,treeContext:null,retryLane:0};function Cf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pv(e,t,n){var r=t.pendingProps,i=Se.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Se,i&1),e===null)return gf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ll(s,r,0,null),e=kr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Cf(n),t.memoizedState=Ef,e):nh(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return XS(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Kn(a,o):(o=kr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Cf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ef,r}return o=e.child,e=o.sibling,r=Kn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nh(e,t){return t=Ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ks(e,t,n,r){return r!==null&&$d(r),ki(t,e.child,null,n),e=nh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function XS(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ic(Error(V(422))),Ks(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ll({mode:"visible",children:r.children},i,0,null),o=kr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ki(t,e.child,null,s),t.child.memoizedState=Cf(s),t.memoizedState=Ef,o);if(!(t.mode&1))return Ks(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(V(419)),r=ic(o,r,void 0),Ks(e,t,s,r)}if(a=(s&e.childLanes)!==0,ut||a){if(r=je,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wn(e,i),Ut(r,e,i,-1))}return lh(),r=ic(Error(V(421))),Ks(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=l_.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vt=Un(i.nextSibling),yt=t,we=!0,Vt=null,e!==null&&(Pt[kt++]=an,Pt[kt++]=ln,Pt[kt++]=Ar,an=e.id,ln=e.overflow,Ar=t),t=nh(t,r.children),t.flags|=4096,t)}function Sm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vf(e.return,t,n)}function oc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function kv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(rt(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sm(e,n,t);else if(e.tag===19)Sm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ha(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ha(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oc(t,!0,n,null,o);break;case"together":oc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=Kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qS(e,t,n){switch(t.tag){case 3:Cv(t),Pi();break;case 5:J1(t);break;case 1:dt(t.type)&&Fa(t);break;case 4:Yd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(Ba,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?Pv(e,t,n):(me(Se,Se.current&1),e=xn(e,t,n),e!==null?e.sibling:null);me(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,_v(e,t,n)}return xn(e,t,n)}var bv,Pf,Tv,Av;bv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pf=function(){};Tv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Er(Zt.current);var o=null;switch(n){case"input":i=Gc(e,i),r=Gc(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=Xc(e,i),r=Xc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ia)}Qc(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Av=function(e,t,n,r){n!==r&&(t.flags|=4)};function to(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function QS(e,t,n){var r=t.pendingProps;switch(Bd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return dt(t.type)&&za(),Ze(t),null;case 3:return r=t.stateNode,bi(),ye(ft),ye(tt),qd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ws(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&(Lf(Vt),Vt=null))),Pf(e,t),Ze(t),null;case 5:Xd(t);var i=Er(Go.current);if(n=t.type,e!==null&&t.stateNode!=null)Tv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return Ze(t),null}if(e=Er(Zt.current),Ws(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xt]=t,r[Ho]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)ve(fo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Rp(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":Np(r,o),ve("invalid",r)}Qc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Hs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Hs(r.textContent,a,e),i=["children",""+a]):Mo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ve("scroll",r)}switch(n){case"input":Is(r),Op(r,o,!0);break;case"textarea":Is(r),Lp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ia)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=n1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Xt]=t,e[Ho]=r,bv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Zc(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)ve(fo[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":Rp(e,r),i=Gc(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ve("invalid",e);break;case"textarea":Np(e,r),i=Xc(e,r),ve("invalid",e);break;default:i=r}Qc(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?o1(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r1(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Do(e,l):typeof l=="number"&&Do(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ve("scroll",e):l!=null&&kd(e,o,l,s))}switch(n){case"input":Is(e),Op(e,r,!1);break;case"textarea":Is(e),Lp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?pi(e,!!r.multiple,o,!1):r.defaultValue!=null&&pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Av(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Er(Go.current),Er(Zt.current),Ws(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(o=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:Hs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return Ze(t),null;case 13:if(ye(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&vt!==null&&t.mode&1&&!(t.flags&128))G1(),Pi(),t.flags|=98560,o=!1;else if(o=Ws(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[Xt]=t}else Pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else Vt!==null&&(Lf(Vt),Vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?De===0&&(De=3):lh())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return bi(),Pf(e,t),e===null&&$o(t.stateNode.containerInfo),Ze(t),null;case 10:return Wd(t.type._context),Ze(t),null;case 17:return dt(t.type)&&za(),Ze(t),null;case 19:if(ye(Se),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)to(o,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ha(e),s!==null){for(t.flags|=128,to(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Se,Se.current&1|2),t.child}e=e.sibling}o.tail!==null&&Re()>Ai&&(t.flags|=128,r=!0,to(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ha(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),to(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!we)return Ze(t),null}else 2*Re()-o.renderingStartTime>Ai&&n!==1073741824&&(t.flags|=128,r=!0,to(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Re(),t.sibling=null,n=Se.current,me(Se,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return ah(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?gt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function ZS(e,t){switch(Bd(t),t.tag){case 1:return dt(t.type)&&za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bi(),ye(ft),ye(tt),qd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xd(t),null;case 13:if(ye(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(Se),null;case 4:return bi(),null;case 10:return Wd(t.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var Ys=!1,Je=!1,JS=typeof WeakSet=="function"?WeakSet:Set,X=null;function ai(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function kf(e,t,n){try{n()}catch(r){Te(e,t,r)}}var _m=!1;function e_(e,t){if(uf=La,e=L1(),Vd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:e,selectionRange:n},La=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,x=h.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?v:zt(t.type,v),x);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(w){Te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return h=_m,_m=!1,h}function xo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&kf(t,n,o)}i=i.next}while(i!==r)}}function Ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rv(e){var t=e.alternate;t!==null&&(e.alternate=null,Rv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[Ho],delete t[hf],delete t[IS],delete t[zS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ov(e){return e.tag===5||e.tag===3||e.tag===4}function Em(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ov(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ia));else if(r!==4&&(e=e.child,e!==null))for(Tf(e,t,n),e=e.sibling;e!==null;)Tf(e,t,n),e=e.sibling}function Af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Af(e,t,n),e=e.sibling;e!==null;)Af(e,t,n),e=e.sibling}var We=null,Ft=!1;function kn(e,t,n){for(n=n.child;n!==null;)Nv(e,t,n),n=n.sibling}function Nv(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:Je||ai(n,t);case 6:var r=We,i=Ft;We=null,kn(e,t,n),We=r,Ft=i,We!==null&&(Ft?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Ft?(e=We,n=n.stateNode,e.nodeType===8?Zu(e.parentNode,n):e.nodeType===1&&Zu(e,n),Vo(e)):Zu(We,n.stateNode));break;case 4:r=We,i=Ft,We=n.stateNode.containerInfo,Ft=!0,kn(e,t,n),We=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&kf(n,t,s),i=i.next}while(i!==r)}kn(e,t,n);break;case 1:if(!Je&&(ai(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,t,a)}kn(e,t,n);break;case 21:kn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,kn(e,t,n),Je=r):kn(e,t,n);break;default:kn(e,t,n)}}function Cm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new JS),t.forEach(function(r){var i=u_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,Ft=!1;break e;case 3:We=a.stateNode.containerInfo,Ft=!0;break e;case 4:We=a.stateNode.containerInfo,Ft=!0;break e}a=a.return}if(We===null)throw Error(V(160));Nv(o,s,i),We=null,Ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lv(t,e),t=t.sibling}function Lv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Gt(e),r&4){try{xo(3,e,e.return),Ol(3,e)}catch(v){Te(e,e.return,v)}try{xo(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:It(t,e),Gt(e),r&512&&n!==null&&ai(n,n.return);break;case 5:if(It(t,e),Gt(e),r&512&&n!==null&&ai(n,n.return),e.flags&32){var i=e.stateNode;try{Do(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&e1(i,o),Zc(a,s);var u=Zc(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?o1(i,f):c==="dangerouslySetInnerHTML"?r1(i,f):c==="children"?Do(i,f):kd(i,c,f,u)}switch(a){case"input":Kc(i,o);break;case"textarea":t1(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?pi(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?pi(i,!!o.multiple,o.defaultValue,!0):pi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ho]=o}catch(v){Te(e,e.return,v)}}break;case 6:if(It(t,e),Gt(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Te(e,e.return,v)}}break;case 3:if(It(t,e),Gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(t.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:It(t,e),Gt(e);break;case 13:It(t,e),Gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(oh=Re())),r&4&&Cm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(u=Je)||c,It(t,e),Je=u):It(t,e),Gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(X=e,c=e.child;c!==null;){for(f=X=c;X!==null;){switch(d=X,g=d.child,d.tag){case 0:case 11:case 14:case 15:xo(4,d,d.return);break;case 1:ai(d,d.return);var h=d.stateNode;if(typeof h.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:ai(d,d.return);break;case 22:if(d.memoizedState!==null){km(f);continue}}g!==null?(g.return=d,X=g):km(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i1("display",s))}catch(v){Te(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Te(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:It(t,e),Gt(e),r&4&&Cm(e);break;case 21:break;default:It(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ov(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Do(i,""),r.flags&=-33);var o=Em(e);Af(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Em(e);Tf(e,a,s);break;default:throw Error(V(161))}}catch(l){Te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t_(e,t,n){X=e,Mv(e)}function Mv(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ys;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Je;a=Ys;var u=Je;if(Ys=s,(Je=l)&&!u)for(X=i;X!==null;)s=X,l=s.child,s.tag===22&&s.memoizedState!==null?bm(i):l!==null?(l.return=s,X=l):bm(i);for(;o!==null;)X=o,Mv(o),o=o.sibling;X=i,Ys=a,Je=u}Pm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,X=o):Pm(e)}}function Pm(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Je||Ol(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&lm(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lm(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}Je||t.flags&512&&bf(t)}catch(d){Te(t,t.return,d)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function km(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function bm(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ol(4,t)}catch(l){Te(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Te(t,i,l)}}var o=t.return;try{bf(t)}catch(l){Te(t,o,l)}break;case 5:var s=t.return;try{bf(t)}catch(l){Te(t,s,l)}}}catch(l){Te(t,t.return,l)}if(t===e){X=null;break}var a=t.sibling;if(a!==null){a.return=t.return,X=a;break}X=t.return}}var n_=Math.ceil,Ka=En.ReactCurrentDispatcher,rh=En.ReactCurrentOwner,Rt=En.ReactCurrentBatchConfig,ce=0,je=null,Ne=null,Ye=0,gt=0,li=ur(0),De=0,qo=null,Or=0,Nl=0,ih=0,So=null,lt=null,oh=0,Ai=1/0,rn=null,Ya=!1,Rf=null,Wn=null,Xs=!1,zn=null,Xa=0,_o=0,Of=null,ma=-1,ga=0;function it(){return ce&6?Re():ma!==-1?ma:ma=Re()}function Gn(e){return e.mode&1?ce&2&&Ye!==0?Ye&-Ye:VS.transition!==null?(ga===0&&(ga=v1()),ga):(e=de,e!==0||(e=window.event,e=e===void 0?16:C1(e.type)),e):1}function Ut(e,t,n,r){if(50<_o)throw _o=0,Of=null,Error(V(185));hs(e,n,r),(!(ce&2)||e!==je)&&(e===je&&(!(ce&2)&&(Nl|=n),De===4&&Mn(e,Ye)),ht(e,r),n===1&&ce===0&&!(t.mode&1)&&(Ai=Re()+500,Tl&&cr()))}function ht(e,t){var n=e.callbackNode;V2(e,t);var r=Na(e,e===je?Ye:0);if(r===0)n!==null&&Ip(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ip(n),t===1)e.tag===0?FS(Tm.bind(null,e)):U1(Tm.bind(null,e)),MS(function(){!(ce&6)&&cr()}),n=null;else{switch(y1(r)){case 1:n=Od;break;case 4:n=m1;break;case 16:n=Oa;break;case 536870912:n=g1;break;default:n=Oa}n=$v(n,Dv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dv(e,t){if(ma=-1,ga=0,ce&6)throw Error(V(327));var n=e.callbackNode;if(wi()&&e.callbackNode!==n)return null;var r=Na(e,e===je?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qa(e,r);else{t=r;var i=ce;ce|=2;var o=zv();(je!==e||Ye!==t)&&(rn=null,Ai=Re()+500,Pr(e,t));do try{o_();break}catch(a){Iv(e,a)}while(1);Hd(),Ka.current=o,ce=i,Ne!==null?t=0:(je=null,Ye=0,t=De)}if(t!==0){if(t===2&&(i=rf(e),i!==0&&(r=i,t=Nf(e,i))),t===1)throw n=qo,Pr(e,0),Mn(e,r),ht(e,Re()),n;if(t===6)Mn(e,r);else{if(i=e.current.alternate,!(r&30)&&!r_(i)&&(t=qa(e,r),t===2&&(o=rf(e),o!==0&&(r=o,t=Nf(e,o))),t===1))throw n=qo,Pr(e,0),Mn(e,r),ht(e,Re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:yr(e,lt,rn);break;case 3:if(Mn(e,r),(r&130023424)===r&&(t=oh+500-Re(),10<t)){if(Na(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=df(yr.bind(null,e,lt,rn),t);break}yr(e,lt,rn);break;case 4:if(Mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-$t(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*n_(r/1960))-r,10<r){e.timeoutHandle=df(yr.bind(null,e,lt,rn),r);break}yr(e,lt,rn);break;case 5:yr(e,lt,rn);break;default:throw Error(V(329))}}}return ht(e,Re()),e.callbackNode===n?Dv.bind(null,e):null}function Nf(e,t){var n=So;return e.current.memoizedState.isDehydrated&&(Pr(e,t).flags|=256),e=qa(e,t),e!==2&&(t=lt,lt=n,t!==null&&Lf(t)),e}function Lf(e){lt===null?lt=e:lt.push.apply(lt,e)}function r_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mn(e,t){for(t&=~ih,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$t(t),r=1<<n;e[n]=-1,t&=~r}}function Tm(e){if(ce&6)throw Error(V(327));wi();var t=Na(e,0);if(!(t&1))return ht(e,Re()),null;var n=qa(e,t);if(e.tag!==0&&n===2){var r=rf(e);r!==0&&(t=r,n=Nf(e,r))}if(n===1)throw n=qo,Pr(e,0),Mn(e,t),ht(e,Re()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yr(e,lt,rn),ht(e,Re()),null}function sh(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(Ai=Re()+500,Tl&&cr())}}function Nr(e){zn!==null&&zn.tag===0&&!(ce&6)&&wi();var t=ce;ce|=1;var n=Rt.transition,r=de;try{if(Rt.transition=null,de=1,e)return e()}finally{de=r,Rt.transition=n,ce=t,!(ce&6)&&cr()}}function ah(){gt=li.current,ye(li)}function Pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,LS(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Bd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&za();break;case 3:bi(),ye(ft),ye(tt),qd();break;case 5:Xd(r);break;case 4:bi();break;case 13:ye(Se);break;case 19:ye(Se);break;case 10:Wd(r.type._context);break;case 22:case 23:ah()}n=n.return}if(je=e,Ne=e=Kn(e.current,null),Ye=gt=t,De=0,qo=null,ih=Nl=Or=0,lt=So=null,_r!==null){for(t=0;t<_r.length;t++)if(n=_r[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}_r=null}return e}function Iv(e,t){do{var n=Ne;try{if(Hd(),da.current=Ga,Wa){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wa=!1}if(Rr=0,Ve=Me=Ce=null,wo=!1,Ko=0,rh.current=null,n===null||n.return===null){De=1,qo=t,Ne=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=mm(s);if(g!==null){g.flags&=-257,gm(g,s,a,o,t),g.mode&1&&pm(o,u,t),t=g,l=u;var h=t.updateQueue;if(h===null){var v=new Set;v.add(l),t.updateQueue=v}else h.add(l);break e}else{if(!(t&1)){pm(o,u,t),lh();break e}l=Error(V(426))}}else if(we&&a.mode&1){var x=mm(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),gm(x,s,a,o,t),$d(Ti(l,a));break e}}o=l=Ti(l,a),De!==4&&(De=2),So===null?So=[o]:So.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=wv(o,l,t);am(o,y);break e;case 1:a=l;var m=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Wn===null||!Wn.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=xv(o,a,t);am(o,w);break e}}o=o.return}while(o!==null)}Vv(n)}catch(C){t=C,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function zv(){var e=Ka.current;return Ka.current=Ga,e===null?Ga:e}function lh(){(De===0||De===3||De===2)&&(De=4),je===null||!(Or&268435455)&&!(Nl&268435455)||Mn(je,Ye)}function qa(e,t){var n=ce;ce|=2;var r=zv();(je!==e||Ye!==t)&&(rn=null,Pr(e,t));do try{i_();break}catch(i){Iv(e,i)}while(1);if(Hd(),ce=n,Ka.current=r,Ne!==null)throw Error(V(261));return je=null,Ye=0,De}function i_(){for(;Ne!==null;)Fv(Ne)}function o_(){for(;Ne!==null&&!R2();)Fv(Ne)}function Fv(e){var t=Bv(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?Vv(e):Ne=t,rh.current=null}function Vv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ZS(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Ne=null;return}}else if(n=QS(n,t,gt),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);De===0&&(De=5)}function yr(e,t,n){var r=de,i=Rt.transition;try{Rt.transition=null,de=1,s_(e,t,n,r)}finally{Rt.transition=i,de=r}return null}function s_(e,t,n,r){do wi();while(zn!==null);if(ce&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(j2(e,o),e===je&&(Ne=je=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xs||(Xs=!0,$v(Oa,function(){return wi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Rt.transition,Rt.transition=null;var s=de;de=1;var a=ce;ce|=4,rh.current=null,e_(e,n),Lv(n,e),kS(cf),La=!!uf,cf=uf=null,e.current=n,t_(n),O2(),ce=a,de=s,Rt.transition=o}else e.current=n;if(Xs&&(Xs=!1,zn=e,Xa=i),o=e.pendingLanes,o===0&&(Wn=null),M2(n.stateNode),ht(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ya)throw Ya=!1,e=Rf,Rf=null,e;return Xa&1&&e.tag!==0&&wi(),o=e.pendingLanes,o&1?e===Of?_o++:(_o=0,Of=e):_o=0,cr(),null}function wi(){if(zn!==null){var e=y1(Xa),t=Rt.transition,n=de;try{if(Rt.transition=null,de=16>e?16:e,zn===null)var r=!1;else{if(e=zn,zn=null,Xa=0,ce&6)throw Error(V(331));var i=ce;for(ce|=4,X=e.current;X!==null;){var o=X,s=o.child;if(X.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(X=u;X!==null;){var c=X;switch(c.tag){case 0:case 11:case 15:xo(8,c,o)}var f=c.child;if(f!==null)f.return=c,X=f;else for(;X!==null;){c=X;var d=c.sibling,g=c.return;if(Rv(c),c===u){X=null;break}if(d!==null){d.return=g,X=d;break}X=g}}}var h=o.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}X=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,X=s;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xo(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,X=y;break e}X=o.return}}var m=e.current;for(X=m;X!==null;){s=X;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,X=p;else e:for(s=m;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(C){Te(a,a.return,C)}if(a===s){X=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,X=w;break e}X=a.return}}if(ce=i,cr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(El,e)}catch{}r=!0}return r}finally{de=n,Rt.transition=t}}return!1}function Am(e,t,n){t=Ti(n,t),t=wv(e,t,1),e=Hn(e,t,1),t=it(),e!==null&&(hs(e,1,t),ht(e,t))}function Te(e,t,n){if(e.tag===3)Am(e,e,n);else for(;t!==null;){if(t.tag===3){Am(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){e=Ti(n,e),e=xv(t,e,1),t=Hn(t,e,1),e=it(),t!==null&&(hs(t,1,e),ht(t,e));break}}t=t.return}}function a_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ye&n)===n&&(De===4||De===3&&(Ye&130023424)===Ye&&500>Re()-oh?Pr(e,0):ih|=n),ht(e,t)}function jv(e,t){t===0&&(e.mode&1?(t=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):t=1);var n=it();e=wn(e,t),e!==null&&(hs(e,t,n),ht(e,n))}function l_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jv(e,n)}function u_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),jv(e,n)}var Bv;Bv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,qS(e,t,n);ut=!!(e.flags&131072)}else ut=!1,we&&t.flags&1048576&&H1(t,ja,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pa(e,t),e=t.pendingProps;var i=Ci(t,tt.current);yi(t,n),i=Zd(null,t,r,e,i,n);var o=Jd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)?(o=!0,Fa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kd(t),i.updater=Al,t.stateNode=i,i._reactInternals=t,wf(t,r,e,n),t=_f(null,t,r,!0,o,n)):(t.tag=0,we&&o&&jd(t),rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=f_(r),e=zt(r,e),i){case 0:t=Sf(null,t,r,e,n);break e;case 1:t=wm(null,t,r,e,n);break e;case 11:t=vm(null,t,r,e,n);break e;case 14:t=ym(null,t,r,zt(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Sf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),wm(e,t,r,i,n);case 3:e:{if(Cv(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Y1(e,t),Ua(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ti(Error(V(423)),t),t=xm(e,t,r,n,i);break e}else if(r!==i){i=Ti(Error(V(424)),t),t=xm(e,t,r,n,i);break e}else for(vt=Un(t.stateNode.containerInfo.firstChild),yt=t,we=!0,Vt=null,n=Z1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pi(),r===i){t=xn(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return J1(t),e===null&&gf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ff(r,i)?s=null:o!==null&&ff(r,o)&&(t.flags|=32),Ev(e,t),rt(e,t,s,n),t.child;case 6:return e===null&&gf(t),null;case 13:return Pv(e,t,n);case 4:return Yd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ki(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),vm(e,t,r,i,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,me(Ba,r._currentValue),r._currentValue=s,o!==null)if(Ht(o.value,s)){if(o.children===i.children&&!ft.current){t=xn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=hn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vf(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(V(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),vf(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yi(t,n),i=Ot(i),r=r(i),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,i=zt(r,t.pendingProps),i=zt(r.type,i),ym(e,t,r,i,n);case 15:return Sv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),pa(e,t),t.tag=1,dt(r)?(e=!0,Fa(t)):e=!1,yi(t,n),q1(t,r,i),wf(t,r,i,n),_f(null,t,r,!0,e,n);case 19:return kv(e,t,n);case 22:return _v(e,t,n)}throw Error(V(156,t.tag))};function $v(e,t){return p1(e,t)}function c_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new c_(e,t,n,r)}function uh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f_(e){if(typeof e=="function")return uh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Td)return 11;if(e===Ad)return 14}return 2}function Kn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function va(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")uh(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Zr:return kr(n.children,i,o,t);case bd:s=8,i|=8;break;case $c:return e=Tt(12,n,t,i|2),e.elementType=$c,e.lanes=o,e;case Uc:return e=Tt(13,n,t,i),e.elementType=Uc,e.lanes=o,e;case Hc:return e=Tt(19,n,t,i),e.elementType=Hc,e.lanes=o,e;case Qg:return Ll(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xg:s=10;break e;case qg:s=9;break e;case Td:s=11;break e;case Ad:s=14;break e;case Rn:s=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Tt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function kr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Ll(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=Qg,e.lanes=n,e.stateNode={isHidden:!1},e}function sc(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function ac(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function d_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ch(e,t,n,r,i,o,s,a,l){return e=new d_(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(o),e}function h_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uv(e){if(!e)return er;e=e._reactInternals;e:{if(Vr(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(dt(n))return $1(e,n,t)}return t}function Hv(e,t,n,r,i,o,s,a,l){return e=ch(n,r,!0,e,i,o,s,a,l),e.context=Uv(null),n=e.current,r=it(),i=Gn(n),o=hn(r,i),o.callback=t??null,Hn(n,o,i),e.current.lanes=i,hs(e,i,r),ht(e,r),e}function Ml(e,t,n,r){var i=t.current,o=it(),s=Gn(i);return n=Uv(n),t.context===null?t.context=n:t.pendingContext=n,t=hn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Hn(i,t,s),e!==null&&(Ut(e,i,s,o),fa(e,i,s)),s}function Qa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fh(e,t){Rm(e,t),(e=e.alternate)&&Rm(e,t)}function p_(){return null}var Wv=typeof reportError=="function"?reportError:function(e){console.error(e)};function dh(e){this._internalRoot=e}Dl.prototype.render=dh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));Ml(e,t,null,null)};Dl.prototype.unmount=dh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nr(function(){Ml(null,e,null,null)}),t[yn]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=S1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ln.length&&t!==0&&t<Ln[n].priority;n++);Ln.splice(n,0,e),n===0&&E1(e)}};function hh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Om(){}function m_(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Qa(s);o.call(u)}}var s=Hv(t,r,e,0,null,!1,!1,"",Om);return e._reactRootContainer=s,e[yn]=s.current,$o(e.nodeType===8?e.parentNode:e),Nr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Qa(l);a.call(u)}}var l=ch(e,0,!1,null,null,!1,!1,"",Om);return e._reactRootContainer=l,e[yn]=l.current,$o(e.nodeType===8?e.parentNode:e),Nr(function(){Ml(t,l,n,r)}),l}function zl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Qa(s);a.call(l)}}Ml(t,s,e,i)}else s=m_(n,t,e,i,r);return Qa(s)}w1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=co(t.pendingLanes);n!==0&&(Nd(t,n|1),ht(t,Re()),!(ce&6)&&(Ai=Re()+500,cr()))}break;case 13:Nr(function(){var r=wn(e,1);if(r!==null){var i=it();Ut(r,e,1,i)}}),fh(e,1)}};Ld=function(e){if(e.tag===13){var t=wn(e,134217728);if(t!==null){var n=it();Ut(t,e,134217728,n)}fh(e,134217728)}};x1=function(e){if(e.tag===13){var t=Gn(e),n=wn(e,t);if(n!==null){var r=it();Ut(n,e,t,r)}fh(e,t)}};S1=function(){return de};_1=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};ef=function(e,t,n){switch(t){case"input":if(Kc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bl(r);if(!i)throw Error(V(90));Jg(r),Kc(r,i)}}}break;case"textarea":t1(e,n);break;case"select":t=n.value,t!=null&&pi(e,!!n.multiple,t,!1)}};l1=sh;u1=Nr;var g_={usingClientEntryPoint:!1,Events:[ms,ni,bl,s1,a1,sh]},no={findFiberByHostInstance:Sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},v_={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=d1(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||p_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qs.isDisabled&&qs.supportsFiber)try{El=qs.inject(v_),Qt=qs}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g_;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(t))throw Error(V(200));return h_(e,t,null,n)};St.createRoot=function(e,t){if(!hh(e))throw Error(V(299));var n=!1,r="",i=Wv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ch(e,1,!1,null,null,n,!1,r,i),e[yn]=t.current,$o(e.nodeType===8?e.parentNode:e),new dh(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=d1(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return Nr(e)};St.hydrate=function(e,t,n){if(!Il(t))throw Error(V(200));return zl(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!hh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Wv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Hv(t,null,e,1,n??null,i,!1,o,s),e[yn]=t.current,$o(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Dl(t)};St.render=function(e,t,n){if(!Il(t))throw Error(V(200));return zl(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!Il(e))throw Error(V(40));return e._reactRootContainer?(Nr(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1};St.unstable_batchedUpdates=sh;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Il(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return zl(e,t,n,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=St})(p2);var Nm=Vc;Fc.createRoot=Nm.createRoot,Fc.hydrateRoot=Nm.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qo.apply(this,arguments)}var Fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fn||(Fn={}));const Lm="popstate";function y_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Mf("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Za(i)}return x_(t,n,null,e)}function Ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ph(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function w_(){return Math.random().toString(36).substr(2,8)}function Mm(e,t){return{usr:e.state,key:e.key,idx:t}}function Mf(e,t,n,r){return n===void 0&&(n=null),Qo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ji(t):t,{state:n,key:t&&t.key||r||w_()})}function Za(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ji(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function x_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Fn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Qo({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=Fn.Pop;let x=c(),y=x==null?null:x-u;u=x,l&&l({action:a,location:v.location,delta:y})}function d(x,y){a=Fn.Push;let m=Mf(v.location,x,y);n&&n(m,x),u=c()+1;let p=Mm(m,u),w=v.createHref(m);try{s.pushState(p,"",w)}catch{i.location.assign(w)}o&&l&&l({action:a,location:v.location,delta:1})}function g(x,y){a=Fn.Replace;let m=Mf(v.location,x,y);n&&n(m,x),u=c();let p=Mm(m,u),w=v.createHref(m);s.replaceState(p,"",w),o&&l&&l({action:a,location:v.location,delta:0})}function h(x){let y=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof x=="string"?x:Za(x);return Ie(y,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,y)}let v={get action(){return a},get location(){return e(i,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Lm,f),l=x,()=>{i.removeEventListener(Lm,f),l=null}},createHref(x){return t(i,x)},createURL:h,encodeLocation(x){let y=h(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:d,replace:g,go(x){return s.go(x)}};return v}var Dm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dm||(Dm={}));function S_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ji(t):t,i=mh(r.pathname||"/",n);if(i==null)return null;let o=Gv(e);__(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=O_(o[a],M_(i));return s}function Gv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Yn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:A_(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Kv(o.path))i(o,s,l)}),t}function Kv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Kv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function __(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:R_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const E_=/^:\w+$/,C_=3,P_=2,k_=1,b_=10,T_=-2,Im=e=>e==="*";function A_(e,t){let n=e.split("/"),r=n.length;return n.some(Im)&&(r+=T_),t&&(r+=P_),n.filter(i=>!Im(i)).reduce((i,o)=>i+(E_.test(o)?C_:o===""?k_:b_),r)}function R_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function O_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=N_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:Yn([i,c.pathname]),pathnameBase:F_(Yn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Yn([i,c.pathnameBase]))}return o}function N_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=L_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=D_(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function L_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ph(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function M_(e){try{return decodeURI(e)}catch(t){return ph(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function D_(e,t){try{return decodeURIComponent(e)}catch(n){return ph(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function mh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function I_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ji(e):e;return{pathname:n?n.startsWith("/")?n:z_(n,t):t,search:V_(r),hash:j_(i)}}function z_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ji(e):(i=Qo({},e),Ie(!i.pathname||!i.pathname.includes("?"),lc("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),lc("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),lc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=t.length-1;if(s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?t[f]:"/"}let l=I_(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Yn=e=>e.join("/").replace(/\/\/+/g,"/"),F_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),V_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,j_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function B_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const U_=typeof Object.is=="function"?Object.is:$_,{useState:H_,useEffect:W_,useLayoutEffect:G_,useDebugValue:K_}=Ic;function Y_(e,t,n){const r=t(),[{inst:i},o]=H_({inst:{value:r,getSnapshot:t}});return G_(()=>{i.value=r,i.getSnapshot=t,uc(i)&&o({inst:i})},[e,r,t]),W_(()=>(uc(i)&&o({inst:i}),e(()=>{uc(i)&&o({inst:i})})),[e]),K_(r),r}function uc(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!U_(n,r)}catch{return!0}}function X_(e,t,n){return t()}const q_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q_=!q_,Z_=Q_?X_:Y_;"useSyncExternalStore"in Ic&&(e=>e.useSyncExternalStore)(Ic);const qv=E.createContext(null),gh=E.createContext(null),Bi=E.createContext(null),Fl=E.createContext(null),jr=E.createContext({outlet:null,matches:[]}),Qv=E.createContext(null);function Df(){return Df=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Df.apply(this,arguments)}function J_(e,t){let{relative:n}=t===void 0?{}:t;vs()||Ie(!1);let{basename:r,navigator:i}=E.useContext(Bi),{hash:o,pathname:s,search:a}=vh(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Yn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function vs(){return E.useContext(Fl)!=null}function $i(){return vs()||Ie(!1),E.useContext(Fl).location}function Zv(){vs()||Ie(!1);let{basename:e,navigator:t}=E.useContext(Bi),{matches:n}=E.useContext(jr),{pathname:r}=$i(),i=JSON.stringify(Yv(n).map(a=>a.pathnameBase)),o=E.useRef(!1);return E.useEffect(()=>{o.current=!0}),E.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Xv(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Yn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function eE(){let{matches:e}=E.useContext(jr),t=e[e.length-1];return t?t.params:{}}function vh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(jr),{pathname:i}=$i(),o=JSON.stringify(Yv(r).map(s=>s.pathnameBase));return E.useMemo(()=>Xv(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function tE(e,t){vs()||Ie(!1);let{navigator:n}=E.useContext(Bi),r=E.useContext(gh),{matches:i}=E.useContext(jr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=$i(),u;if(t){var c;let v=typeof t=="string"?ji(t):t;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ie(!1),u=v}else u=l;let f=u.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",g=S_(e,{pathname:d}),h=oE(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Yn([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Yn([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&h?E.createElement(Fl.Provider,{value:{location:Df({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Fn.Pop}},h):h}function nE(){let e=uE(),t=B_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,o)}class rE extends E.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(jr.Provider,{value:this.props.routeContext},E.createElement(Qv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iE(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(qv);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(jr.Provider,{value:t},r)}function oE(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||Ie(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=null;n&&(s.route.ErrorBoundary?u=E.createElement(s.route.ErrorBoundary,null):s.route.errorElement?u=s.route.errorElement:u=E.createElement(nE,null));let c=t.concat(r.slice(0,a+1)),f=()=>{let d=o;return l?d=u:s.route.Component?d=E.createElement(s.route.Component,null):s.route.element&&(d=s.route.element),E.createElement(iE,{match:s,routeContext:{outlet:o,matches:c},children:d})};return n&&(s.route.ErrorBoundary||s.route.errorElement||a===0)?E.createElement(rE,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var zm;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(zm||(zm={}));var Ja;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ja||(Ja={}));function sE(e){let t=E.useContext(gh);return t||Ie(!1),t}function aE(e){let t=E.useContext(jr);return t||Ie(!1),t}function lE(e){let t=aE(),n=t.matches[t.matches.length-1];return n.route.id||Ie(!1),n.route.id}function uE(){var e;let t=E.useContext(Qv),n=sE(Ja.UseRouteError),r=lE(Ja.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Tn(e){Ie(!1)}function cE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Fn.Pop,navigator:o,static:s=!1}=e;vs()&&Ie(!1);let a=t.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=ji(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:g="default"}=r,h=E.useMemo(()=>{let v=mh(u,a);return v==null?null:{location:{pathname:v,search:c,hash:f,state:d,key:g},navigationType:i}},[a,u,c,f,d,g,i]);return h==null?null:E.createElement(Bi.Provider,{value:l},E.createElement(Fl.Provider,{children:n,value:h}))}function fE(e){let{children:t,location:n}=e,r=E.useContext(qv),i=r&&!t?r.router.routes:If(t);return tE(i,n)}var Fm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fm||(Fm={}));new Promise(()=>{});function If(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;if(r.type===E.Fragment){n.push.apply(n,If(r.props.children,t));return}r.type!==Tn&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=If(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}function Jv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function dE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hE(e,t){return e.button===0&&(!t||t==="_self")&&!dE(e)}const pE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],mE=["aria-current","caseSensitive","className","end","style","to","children"];function gE(e){let{basename:t,children:n,window:r}=e,i=E.useRef();i.current==null&&(i.current=y_({window:r,v5Compat:!0}));let o=i.current,[s,a]=E.useState({action:o.action,location:o.location});return E.useLayoutEffect(()=>o.listen(a),[o]),E.createElement(cE,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const vE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pt=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=t,f=Jv(t,pE),{basename:d}=E.useContext(Bi),g,h=!1;if(typeof u=="string"&&yE.test(u)&&(g=u,vE)){let m=new URL(window.location.href),p=u.startsWith("//")?new URL(m.protocol+u):new URL(u),w=mh(p.pathname,d);p.origin===m.origin&&w!=null?u=w+p.search+p.hash:h=!0}let v=J_(u,{relative:i}),x=wE(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function y(m){r&&r(m),m.defaultPrevented||x(m)}return E.createElement("a",el({},f,{href:g||v,onClick:h||o?r:y,ref:n,target:l}))}),ey=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=t,c=Jv(t,mE),f=vh(l,{relative:c.relative}),d=$i(),g=E.useContext(gh),{navigator:h}=E.useContext(Bi),v=h.encodeLocation?h.encodeLocation(f).pathname:f.pathname,x=d.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(x=x.toLowerCase(),y=y?y.toLowerCase():null,v=v.toLowerCase());let m=x===v||!s&&x.startsWith(v)&&x.charAt(v.length)==="/",p=y!=null&&(y===v||!s&&y.startsWith(v)&&y.charAt(v.length)==="/"),w=m?r:void 0,C;typeof o=="function"?C=o({isActive:m,isPending:p}):C=[o,m?"active":null,p?"pending":null].filter(Boolean).join(" ");let b=typeof a=="function"?a({isActive:m,isPending:p}):a;return E.createElement(pt,el({},c,{"aria-current":w,className:C,ref:n,style:b,to:l}),typeof u=="function"?u({isActive:m,isPending:p}):u)});var Vm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Vm||(Vm={}));var jm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jm||(jm={}));function wE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=Zv(),l=$i(),u=vh(e,{relative:s});return E.useCallback(c=>{if(hE(c,n)){c.preventDefault();let f=r!==void 0?r:Za(l)===Za(u);a(e,{replace:f,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}var tl={},xE={get exports(){return tl},set exports(e){tl=e}},he={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh=Symbol.for("react.element"),wh=Symbol.for("react.portal"),Vl=Symbol.for("react.fragment"),jl=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),$l=Symbol.for("react.provider"),Ul=Symbol.for("react.context"),SE=Symbol.for("react.server_context"),Hl=Symbol.for("react.forward_ref"),Wl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),Yl=Symbol.for("react.lazy"),_E=Symbol.for("react.offscreen"),ty;ty=Symbol.for("react.module.reference");function Mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case yh:switch(e=e.type,e){case Vl:case Bl:case jl:case Wl:case Gl:return e;default:switch(e=e&&e.$$typeof,e){case SE:case Ul:case Hl:case Yl:case Kl:case $l:return e;default:return t}}case wh:return t}}}he.ContextConsumer=Ul;he.ContextProvider=$l;he.Element=yh;he.ForwardRef=Hl;he.Fragment=Vl;he.Lazy=Yl;he.Memo=Kl;he.Portal=wh;he.Profiler=Bl;he.StrictMode=jl;he.Suspense=Wl;he.SuspenseList=Gl;he.isAsyncMode=function(){return!1};he.isConcurrentMode=function(){return!1};he.isContextConsumer=function(e){return Mt(e)===Ul};he.isContextProvider=function(e){return Mt(e)===$l};he.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yh};he.isForwardRef=function(e){return Mt(e)===Hl};he.isFragment=function(e){return Mt(e)===Vl};he.isLazy=function(e){return Mt(e)===Yl};he.isMemo=function(e){return Mt(e)===Kl};he.isPortal=function(e){return Mt(e)===wh};he.isProfiler=function(e){return Mt(e)===Bl};he.isStrictMode=function(e){return Mt(e)===jl};he.isSuspense=function(e){return Mt(e)===Wl};he.isSuspenseList=function(e){return Mt(e)===Gl};he.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Vl||e===Bl||e===jl||e===Wl||e===Gl||e===_E||typeof e=="object"&&e!==null&&(e.$$typeof===Yl||e.$$typeof===Kl||e.$$typeof===$l||e.$$typeof===Ul||e.$$typeof===Hl||e.$$typeof===ty||e.getModuleId!==void 0)};he.typeOf=Mt;(function(e){e.exports=he})(xE);function EE(e){function t(O,$,j,q,_){for(var Y=0,z=0,Q=0,Z=0,le,te,W=0,se=0,oe,be=oe=le=0,fe=0,$e=0,Ki=0,Ue=0,Ls=j.length,Yi=Ls-1,Dt,ne="",Ae="",Mu="",Du="",Pn;fe<Ls;){if(te=j.charCodeAt(fe),fe===Yi&&z+Z+Q+Y!==0&&(z!==0&&(te=z===47?10:47),Z=Q=Y=0,Ls++,Yi++),z+Z+Q+Y===0){if(fe===Yi&&(0<$e&&(ne=ne.replace(d,"")),0<ne.trim().length)){switch(te){case 32:case 9:case 59:case 13:case 10:break;default:ne+=j.charAt(fe)}te=59}switch(te){case 123:for(ne=ne.trim(),le=ne.charCodeAt(0),oe=1,Ue=++fe;fe<Ls;){switch(te=j.charCodeAt(fe)){case 123:oe++;break;case 125:oe--;break;case 47:switch(te=j.charCodeAt(fe+1)){case 42:case 47:e:{for(be=fe+1;be<Yi;++be)switch(j.charCodeAt(be)){case 47:if(te===42&&j.charCodeAt(be-1)===42&&fe+2!==be){fe=be+1;break e}break;case 10:if(te===47){fe=be+1;break e}}fe=be}}break;case 91:te++;case 40:te++;case 34:case 39:for(;fe++<Yi&&j.charCodeAt(fe)!==te;);}if(oe===0)break;fe++}switch(oe=j.substring(Ue,fe),le===0&&(le=(ne=ne.replace(f,"").trim()).charCodeAt(0)),le){case 64:switch(0<$e&&(ne=ne.replace(d,"")),te=ne.charCodeAt(1),te){case 100:case 109:case 115:case 45:$e=$;break;default:$e=ie}if(oe=t($,$e,oe,te,_+1),Ue=oe.length,0<T&&($e=n(ie,ne,Ki),Pn=a(3,oe,$e,$,U,F,Ue,te,_,q),ne=$e.join(""),Pn!==void 0&&(Ue=(oe=Pn.trim()).length)===0&&(te=0,oe="")),0<Ue)switch(te){case 115:ne=ne.replace(b,s);case 100:case 109:case 45:oe=ne+"{"+oe+"}";break;case 107:ne=ne.replace(m,"$1 $2"),oe=ne+"{"+oe+"}",oe=G===1||G===2&&o("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=ne+oe,q===112&&(oe=(Ae+=oe,""))}else oe="";break;default:oe=t($,n($,ne,Ki),oe,q,_+1)}Mu+=oe,oe=Ki=$e=be=le=0,ne="",te=j.charCodeAt(++fe);break;case 125:case 59:if(ne=(0<$e?ne.replace(d,""):ne).trim(),1<(Ue=ne.length))switch(be===0&&(le=ne.charCodeAt(0),le===45||96<le&&123>le)&&(Ue=(ne=ne.replace(" ",":")).length),0<T&&(Pn=a(1,ne,$,O,U,F,Ae.length,q,_,q))!==void 0&&(Ue=(ne=Pn.trim()).length)===0&&(ne="\0\0"),le=ne.charCodeAt(0),te=ne.charCodeAt(1),le){case 0:break;case 64:if(te===105||te===99){Du+=ne+j.charAt(fe);break}default:ne.charCodeAt(Ue-1)!==58&&(Ae+=i(ne,le,te,ne.charCodeAt(2)))}Ki=$e=be=le=0,ne="",te=j.charCodeAt(++fe)}}switch(te){case 13:case 10:z===47?z=0:1+le===0&&q!==107&&0<ne.length&&($e=1,ne+="\0"),0<T*A&&a(0,ne,$,O,U,F,Ae.length,q,_,q),F=1,U++;break;case 59:case 125:if(z+Z+Q+Y===0){F++;break}default:switch(F++,Dt=j.charAt(fe),te){case 9:case 32:if(Z+Y+z===0)switch(W){case 44:case 58:case 9:case 32:Dt="";break;default:te!==32&&(Dt=" ")}break;case 0:Dt="\\0";break;case 12:Dt="\\f";break;case 11:Dt="\\v";break;case 38:Z+z+Y===0&&($e=Ki=1,Dt="\f"+Dt);break;case 108:if(Z+z+Y+K===0&&0<be)switch(fe-be){case 2:W===112&&j.charCodeAt(fe-3)===58&&(K=W);case 8:se===111&&(K=se)}break;case 58:Z+z+Y===0&&(be=fe);break;case 44:z+Q+Z+Y===0&&($e=1,Dt+="\r");break;case 34:case 39:z===0&&(Z=Z===te?0:Z===0?te:Z);break;case 91:Z+z+Q===0&&Y++;break;case 93:Z+z+Q===0&&Y--;break;case 41:Z+z+Y===0&&Q--;break;case 40:if(Z+z+Y===0){if(le===0)switch(2*W+3*se){case 533:break;default:le=1}Q++}break;case 64:z+Q+Z+Y+be+oe===0&&(oe=1);break;case 42:case 47:if(!(0<Z+Y+Q))switch(z){case 0:switch(2*te+3*j.charCodeAt(fe+1)){case 235:z=47;break;case 220:Ue=fe,z=42}break;case 42:te===47&&W===42&&Ue+2!==fe&&(j.charCodeAt(Ue+2)===33&&(Ae+=j.substring(Ue,fe+1)),Dt="",z=0)}}z===0&&(ne+=Dt)}se=W,W=te,fe++}if(Ue=Ae.length,0<Ue){if($e=$,0<T&&(Pn=a(2,Ae,$e,O,U,F,Ue,q,_,q),Pn!==void 0&&(Ae=Pn).length===0))return Du+Ae+Mu;if(Ae=$e.join(",")+"{"+Ae+"}",G*K!==0){switch(G!==2||o(Ae,2)||(K=0),K){case 111:Ae=Ae.replace(w,":-moz-$1")+Ae;break;case 112:Ae=Ae.replace(p,"::-webkit-input-$1")+Ae.replace(p,"::-moz-$1")+Ae.replace(p,":-ms-input-$1")+Ae}K=0}}return Du+Ae+Mu}function n(O,$,j){var q=$.trim().split(x);$=q;var _=q.length,Y=O.length;switch(Y){case 0:case 1:var z=0;for(O=Y===0?"":O[0]+" ";z<_;++z)$[z]=r(O,$[z],j).trim();break;default:var Q=z=0;for($=[];z<_;++z)for(var Z=0;Z<Y;++Z)$[Q++]=r(O[Z]+" ",q[z],j).trim()}return $}function r(O,$,j){var q=$.charCodeAt(0);switch(33>q&&(q=($=$.trim()).charCodeAt(0)),q){case 38:return $.replace(y,"$1"+O.trim());case 58:return O.trim()+$.replace(y,"$1"+O.trim());default:if(0<1*j&&0<$.indexOf("\f"))return $.replace(y,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+$}function i(O,$,j,q){var _=O+";",Y=2*$+3*j+4*q;if(Y===944){O=_.indexOf(":",9)+1;var z=_.substring(O,_.length-1).trim();return z=_.substring(0,O).trim()+z+";",G===1||G===2&&o(z,1)?"-webkit-"+z+z:z}if(G===0||G===2&&!o(_,1))return _;switch(Y){case 1015:return _.charCodeAt(10)===97?"-webkit-"+_+_:_;case 951:return _.charCodeAt(3)===116?"-webkit-"+_+_:_;case 963:return _.charCodeAt(5)===110?"-webkit-"+_+_:_;case 1009:if(_.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+_+_;case 978:return"-webkit-"+_+"-moz-"+_+_;case 1019:case 983:return"-webkit-"+_+"-moz-"+_+"-ms-"+_+_;case 883:if(_.charCodeAt(8)===45)return"-webkit-"+_+_;if(0<_.indexOf("image-set(",11))return _.replace(I,"$1-webkit-$2")+_;break;case 932:if(_.charCodeAt(4)===45)switch(_.charCodeAt(5)){case 103:return"-webkit-box-"+_.replace("-grow","")+"-webkit-"+_+"-ms-"+_.replace("grow","positive")+_;case 115:return"-webkit-"+_+"-ms-"+_.replace("shrink","negative")+_;case 98:return"-webkit-"+_+"-ms-"+_.replace("basis","preferred-size")+_}return"-webkit-"+_+"-ms-"+_+_;case 964:return"-webkit-"+_+"-ms-flex-"+_+_;case 1023:if(_.charCodeAt(8)!==99)break;return z=_.substring(_.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+z+"-webkit-"+_+"-ms-flex-pack"+z+_;case 1005:return h.test(_)?_.replace(g,":-webkit-")+_.replace(g,":-moz-")+_:_;case 1e3:switch(z=_.substring(13).trim(),$=z.indexOf("-")+1,z.charCodeAt(0)+z.charCodeAt($)){case 226:z=_.replace(C,"tb");break;case 232:z=_.replace(C,"tb-rl");break;case 220:z=_.replace(C,"lr");break;default:return _}return"-webkit-"+_+"-ms-"+z+_;case 1017:if(_.indexOf("sticky",9)===-1)break;case 975:switch($=(_=O).length-10,z=(_.charCodeAt($)===33?_.substring(0,$):_).substring(O.indexOf(":",7)+1).trim(),Y=z.charCodeAt(0)+(z.charCodeAt(7)|0)){case 203:if(111>z.charCodeAt(8))break;case 115:_=_.replace(z,"-webkit-"+z)+";"+_;break;case 207:case 102:_=_.replace(z,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+_.replace(z,"-webkit-"+z)+";"+_.replace(z,"-ms-"+z+"box")+";"+_}return _+";";case 938:if(_.charCodeAt(5)===45)switch(_.charCodeAt(6)){case 105:return z=_.replace("-items",""),"-webkit-"+_+"-webkit-box-"+z+"-ms-flex-"+z+_;case 115:return"-webkit-"+_+"-ms-flex-item-"+_.replace(k,"")+_;default:return"-webkit-"+_+"-ms-flex-line-pack"+_.replace("align-content","").replace(k,"")+_}break;case 973:case 989:if(_.charCodeAt(3)!==45||_.charCodeAt(4)===122)break;case 931:case 953:if(L.test(O)===!0)return(z=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?i(O.replace("stretch","fill-available"),$,j,q).replace(":fill-available",":stretch"):_.replace(z,"-webkit-"+z)+_.replace(z,"-moz-"+z.replace("fill-",""))+_;break;case 962:if(_="-webkit-"+_+(_.charCodeAt(5)===102?"-ms-"+_:"")+_,j+q===211&&_.charCodeAt(13)===105&&0<_.indexOf("transform",10))return _.substring(0,_.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+_}return _}function o(O,$){var j=O.indexOf($===1?":":"{"),q=O.substring(0,$!==3?j:10);return j=O.substring(j+1,O.length-1),M($!==2?q:q.replace(B,"$1"),j,$)}function s(O,$){var j=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return j!==$+";"?j.replace(P," or ($1)").substring(4):"("+$+")"}function a(O,$,j,q,_,Y,z,Q,Z,le){for(var te=0,W=$,se;te<T;++te)switch(se=ee[te].call(c,O,W,j,q,_,Y,z,Q,Z,le)){case void 0:case!1:case!0:case null:break;default:W=se}if(W!==$)return W}function l(O){switch(O){case void 0:case null:T=ee.length=0;break;default:if(typeof O=="function")ee[T++]=O;else if(typeof O=="object")for(var $=0,j=O.length;$<j;++$)l(O[$]);else A=!!O|0}return l}function u(O){return O=O.prefix,O!==void 0&&(M=null,O?typeof O!="function"?G=1:(G=2,M=O):G=0),u}function c(O,$){var j=O;if(33>j.charCodeAt(0)&&(j=j.trim()),D=j,j=[D],0<T){var q=a(-1,$,j,j,U,F,0,0,0,0);q!==void 0&&typeof q=="string"&&($=q)}var _=t(ie,j,$,0,0);return 0<T&&(q=a(-2,_,j,j,U,F,_.length,0,0,0),q!==void 0&&(_=q)),D="",K=0,F=U=1,_}var f=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,h=/zoo|gra/,v=/([,: ])(transform)/g,x=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,w=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,k=/-self|flex-/g,B=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,I=/([^-])(image-set\()/,F=1,U=1,K=0,G=1,ie=[],ee=[],T=0,M=null,A=0,D="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var CE={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function PE(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var kE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Bm=PE(function(e){return kE.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),zf={},bE={get exports(){return zf},set exports(e){zf=e}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,xh=Be?Symbol.for("react.element"):60103,Sh=Be?Symbol.for("react.portal"):60106,Xl=Be?Symbol.for("react.fragment"):60107,ql=Be?Symbol.for("react.strict_mode"):60108,Ql=Be?Symbol.for("react.profiler"):60114,Zl=Be?Symbol.for("react.provider"):60109,Jl=Be?Symbol.for("react.context"):60110,_h=Be?Symbol.for("react.async_mode"):60111,eu=Be?Symbol.for("react.concurrent_mode"):60111,tu=Be?Symbol.for("react.forward_ref"):60112,nu=Be?Symbol.for("react.suspense"):60113,TE=Be?Symbol.for("react.suspense_list"):60120,ru=Be?Symbol.for("react.memo"):60115,iu=Be?Symbol.for("react.lazy"):60116,AE=Be?Symbol.for("react.block"):60121,RE=Be?Symbol.for("react.fundamental"):60117,OE=Be?Symbol.for("react.responder"):60118,NE=Be?Symbol.for("react.scope"):60119;function Et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xh:switch(e=e.type,e){case _h:case eu:case Xl:case Ql:case ql:case nu:return e;default:switch(e=e&&e.$$typeof,e){case Jl:case tu:case iu:case ru:case Zl:return e;default:return t}}case Sh:return t}}}function ny(e){return Et(e)===eu}pe.AsyncMode=_h;pe.ConcurrentMode=eu;pe.ContextConsumer=Jl;pe.ContextProvider=Zl;pe.Element=xh;pe.ForwardRef=tu;pe.Fragment=Xl;pe.Lazy=iu;pe.Memo=ru;pe.Portal=Sh;pe.Profiler=Ql;pe.StrictMode=ql;pe.Suspense=nu;pe.isAsyncMode=function(e){return ny(e)||Et(e)===_h};pe.isConcurrentMode=ny;pe.isContextConsumer=function(e){return Et(e)===Jl};pe.isContextProvider=function(e){return Et(e)===Zl};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xh};pe.isForwardRef=function(e){return Et(e)===tu};pe.isFragment=function(e){return Et(e)===Xl};pe.isLazy=function(e){return Et(e)===iu};pe.isMemo=function(e){return Et(e)===ru};pe.isPortal=function(e){return Et(e)===Sh};pe.isProfiler=function(e){return Et(e)===Ql};pe.isStrictMode=function(e){return Et(e)===ql};pe.isSuspense=function(e){return Et(e)===nu};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xl||e===eu||e===Ql||e===ql||e===nu||e===TE||typeof e=="object"&&e!==null&&(e.$$typeof===iu||e.$$typeof===ru||e.$$typeof===Zl||e.$$typeof===Jl||e.$$typeof===tu||e.$$typeof===RE||e.$$typeof===OE||e.$$typeof===NE||e.$$typeof===AE)};pe.typeOf=Et;(function(e){e.exports=pe})(bE);var Eh=zf,LE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ME={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},DE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ry={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ch={};Ch[Eh.ForwardRef]=DE;Ch[Eh.Memo]=ry;function $m(e){return Eh.isMemo(e)?ry:Ch[e.$$typeof]||LE}var IE=Object.defineProperty,zE=Object.getOwnPropertyNames,Um=Object.getOwnPropertySymbols,FE=Object.getOwnPropertyDescriptor,VE=Object.getPrototypeOf,Hm=Object.prototype;function iy(e,t,n){if(typeof t!="string"){if(Hm){var r=VE(t);r&&r!==Hm&&iy(e,r,n)}var i=zE(t);Um&&(i=i.concat(Um(t)));for(var o=$m(e),s=$m(t),a=0;a<i.length;++a){var l=i[a];if(!ME[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=FE(t,l);try{IE(e,l,u)}catch{}}}}return e}var jE=iy;function un(){return(un=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Wm=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ff=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!tl.typeOf(e)},nl=Object.freeze([]),Xn=Object.freeze({});function Zo(e){return typeof e=="function"}function Gm(e){return e.displayName||e.name||"Component"}function Ph(e){return e&&typeof e.styledComponentId=="string"}var Ri=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",kh=typeof window<"u"&&"HTMLElement"in window,BE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function ys(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var $E=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&ys(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),ya=new Map,rl=new Map,Eo=1,Qs=function(e){if(ya.has(e))return ya.get(e);for(;rl.has(Eo);)Eo++;var t=Eo++;return ya.set(e,t),rl.set(t,e),t},UE=function(e){return rl.get(e)},HE=function(e,t){t>=Eo&&(Eo=t+1),ya.set(e,t),rl.set(t,e)},WE="style["+Ri+'][data-styled-version="5.3.9"]',GE=new RegExp("^"+Ri+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),KE=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},YE=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(GE);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(HE(u,l),KE(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},XE=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},oy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ri))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ri,"active"),r.setAttribute("data-styled-version","5.3.9");var s=XE();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},qE=function(){function e(n){var r=this.element=oy(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}ys(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),QE=function(){function e(n){var r=this.element=oy(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),ZE=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Km=kh,JE={isServer:!kh,useCSSOMInjection:!BE},sy=function(){function e(n,r,i){n===void 0&&(n=Xn),r===void 0&&(r={}),this.options=un({},JE,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&kh&&Km&&(Km=!1,function(o){for(var s=document.querySelectorAll(WE),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Ri)!=="active"&&(YE(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Qs(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(un({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new ZE(s):o?new qE(s):new QE(s),new $E(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Qs(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Qs(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Qs(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=UE(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var c=Ri+".g"+s+'[id="'+a+'"]',f="";l!==void 0&&l.forEach(function(d){d.length>0&&(f+=d+",")}),o+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),e4=/(a)(d)/gi,Ym=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ym(t%52)+n;return(Ym(t%52)+n).replace(e4,"$1-$2")}var ui=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ay=function(e){return ui(5381,e)};function t4(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zo(n)&&!Ph(n))return!1}return!0}var n4=ay("5.3.9"),r4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&t4(t),this.componentId=n,this.baseHash=ui(n4,n),this.baseStyle=r,sy.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=Oi(this.rules,t,n,r).join(""),a=Vf(ui(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=ui(this.baseHash,r.hash),f="",d=0;d<u;d++){var g=this.rules[d];if(typeof g=="string")f+=g;else if(g){var h=Oi(g,t,n,r),v=Array.isArray(h)?h.join(""):h;c=ui(c,v+d),f+=v}}if(f){var x=Vf(c>>>0);if(!n.hasNameForId(i,x)){var y=r(f,"."+x,void 0,i);n.insertRules(i,x,y)}o.push(x)}}return o.join(" ")},e}(),i4=/^\s*\/\/.*$/gm,o4=[":","[",".","#"];function s4(e){var t,n,r,i,o=e===void 0?Xn:e,s=o.options,a=s===void 0?Xn:s,l=o.plugins,u=l===void 0?nl:l,c=new EE(a),f=[],d=function(v){function x(y){if(y)try{v(y+"}")}catch{}}return function(y,m,p,w,C,b,P,k,B,L){switch(y){case 1:if(B===0&&m.charCodeAt(0)===64)return v(m+";"),"";break;case 2:if(k===0)return m+"/*|*/";break;case 3:switch(k){case 102:case 112:return v(p[0]+m),"";default:return m+(L===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(x)}}}(function(v){f.push(v)}),g=function(v,x,y){return x===0&&o4.indexOf(y[n.length])!==-1||y.match(i)?v:"."+t};function h(v,x,y,m){m===void 0&&(m="&");var p=v.replace(i4,""),w=x&&y?y+" "+x+" { "+p+" }":p;return t=m,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(y||!x?"":x,w)}return c.use([].concat(u,[function(v,x,y){v===2&&y.length&&y[0].lastIndexOf(n)>0&&(y[0]=y[0].replace(r,g))},d,function(v){if(v===-2){var x=f;return f=[],x}}])),h.hash=u.length?u.reduce(function(v,x){return x.name||ys(15),ui(v,x.name)},5381).toString():"",h}var ly=Ee.createContext();ly.Consumer;var uy=Ee.createContext(),a4=(uy.Consumer,new sy),jf=s4();function l4(){return E.useContext(ly)||a4}function u4(){return E.useContext(uy)||jf}var c4=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=jf);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return ys(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=jf),this.name+t.hash},e}(),f4=/([A-Z])/,d4=/([A-Z])/g,h4=/^ms-/,p4=function(e){return"-"+e.toLowerCase()};function Xm(e){return f4.test(e)?e.replace(d4,p4).replace(h4,"-ms-"):e}var qm=function(e){return e==null||e===!1||e===""};function Oi(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=Oi(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(qm(e))return"";if(Ph(e))return"."+e.styledComponentId;if(Zo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Oi(l,t,n,r)}var u;return e instanceof c4?n?(e.inject(n,r),e.getName(r)):e:Ff(e)?function c(f,d){var g,h,v=[];for(var x in f)f.hasOwnProperty(x)&&!qm(f[x])&&(Array.isArray(f[x])&&f[x].isCss||Zo(f[x])?v.push(Xm(x)+":",f[x],";"):Ff(f[x])?v.push.apply(v,c(f[x],x)):v.push(Xm(x)+": "+(g=x,(h=f[x])==null||typeof h=="boolean"||h===""?"":typeof h!="number"||h===0||g in CE?String(h).trim():h+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(e):e.toString()}var Qm=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function m4(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Zo(e)||Ff(e)?Qm(Oi(Wm(nl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Qm(Oi(Wm(e,n)))}var g4=function(e,t,n){return n===void 0&&(n=Xn),e.theme!==n.theme&&e.theme||t||n.theme},v4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,y4=/(^-|-$)/g;function cc(e){return e.replace(v4,"-").replace(y4,"")}var w4=function(e){return Vf(ay(e)>>>0)};function Zs(e){return typeof e=="string"&&!0}var Bf=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},x4=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function S4(e,t,n){var r=e[n];Bf(t)&&Bf(r)?cy(r,t):e[n]=t}function cy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(Bf(s))for(var a in s)x4(a)&&S4(e,s[a],a)}return e}var fy=Ee.createContext();fy.Consumer;var fc={};function dy(e,t,n){var r=Ph(e),i=!Zs(e),o=t.attrs,s=o===void 0?nl:o,a=t.componentId,l=a===void 0?function(m,p){var w=typeof m!="string"?"sc":cc(m);fc[w]=(fc[w]||0)+1;var C=w+"-"+w4("5.3.9"+w+fc[w]);return p?p+"-"+C:C}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(m){return Zs(m)?"styled."+m:"Styled("+Gm(m)+")"}(e):u,f=t.displayName&&t.componentId?cc(t.displayName)+"-"+t.componentId:t.componentId||l,d=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(m,p,w){return e.shouldForwardProp(m,p,w)&&t.shouldForwardProp(m,p,w)}:e.shouldForwardProp);var h,v=new r4(n,f,r?e.componentStyle:void 0),x=v.isStatic&&s.length===0,y=function(m,p){return function(w,C,b,P){var k=w.attrs,B=w.componentStyle,L=w.defaultProps,I=w.foldedComponentIds,F=w.shouldForwardProp,U=w.styledComponentId,K=w.target,G=function(q,_,Y){q===void 0&&(q=Xn);var z=un({},_,{theme:q}),Q={};return Y.forEach(function(Z){var le,te,W,se=Z;for(le in Zo(se)&&(se=se(z)),se)z[le]=Q[le]=le==="className"?(te=Q[le],W=se[le],te&&W?te+" "+W:te||W):se[le]}),[z,Q]}(g4(C,E.useContext(fy),L)||Xn,C,k),ie=G[0],ee=G[1],T=function(q,_,Y,z){var Q=l4(),Z=u4(),le=_?q.generateAndInjectStyles(Xn,Q,Z):q.generateAndInjectStyles(Y,Q,Z);return le}(B,P,ie),M=b,A=ee.$as||C.$as||ee.as||C.as||K,D=Zs(A),O=ee!==C?un({},C,{},ee):C,$={};for(var j in O)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?$.as=O[j]:(F?F(j,Bm,A):!D||Bm(j))&&($[j]=O[j]));return C.style&&ee.style!==C.style&&($.style=un({},C.style,{},ee.style)),$.className=Array.prototype.concat(I,U,T!==U?T:null,C.className,ee.className).filter(Boolean).join(" "),$.ref=M,E.createElement(A,$)}(h,m,p,x)};return y.displayName=c,(h=Ee.forwardRef(y)).attrs=d,h.componentStyle=v,h.displayName=c,h.shouldForwardProp=g,h.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):nl,h.styledComponentId=f,h.target=r?e.target:e,h.withComponent=function(m){var p=t.componentId,w=function(b,P){if(b==null)return{};var k,B,L={},I=Object.keys(b);for(B=0;B<I.length;B++)k=I[B],P.indexOf(k)>=0||(L[k]=b[k]);return L}(t,["componentId"]),C=p&&p+"-"+(Zs(m)?m:cc(Gm(m)));return dy(m,un({},w,{attrs:d,componentId:C}),n)},Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?cy({},e.defaultProps,m):m}}),Object.defineProperty(h,"toString",{value:function(){return"."+h.styledComponentId}}),i&&jE(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),h}var $f=function(e){return function t(n,r,i){if(i===void 0&&(i=Xn),!tl.isValidElementType(r))return ys(1,String(r));var o=function(){return n(r,i,m4.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,un({},i,{},s))},o.attrs=function(s){return t(n,r,un({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(dy,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){$f[e]=$f(e)});const Fe=$f,Zm="/assets/blob-081e750c.svg",_4="/assets/vans-sneaker-f7b6ddcb.png";var E4=Object.defineProperty,C4=Object.defineProperties,P4=Object.getOwnPropertyDescriptors,Jm=Object.getOwnPropertySymbols,k4=Object.prototype.hasOwnProperty,b4=Object.prototype.propertyIsEnumerable,e0=(e,t,n)=>t in e?E4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ro=(e,t)=>{for(var n in t||(t={}))k4.call(t,n)&&e0(e,n,t[n]);if(Jm)for(var n of Jm(t))b4.call(t,n)&&e0(e,n,t[n]);return e},io=(e,t)=>C4(e,P4(t)),T4=class extends E.Component{constructor(e){super(e),this.ref=Ee.createRef(),this.state={style:{}};const t={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0};this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.element=null,this.settings=Object.assign({},t,this.props.options),this.reverse=this.settings.reverse?-1:1,this.onMouseEnter=this.onMouseEnter.bind(this,this.props.onMouseEnter),this.onMouseMove=this.onMouseMove.bind(this,this.props.onMouseMove),this.onMouseLeave=this.onMouseLeave.bind(this,this.props.onMouseLeave)}componentDidMount(){this.element=this.ref.current,setTimeout(()=>{this.element.parentElement.querySelector(":hover")===this.element&&this.onMouseEnter()},0)}componentWillUnmount(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}onMouseEnter(e=()=>{},t){return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:io(ro({},this.state.style),{willChange:"transform"})})),this.setTransition(),e(t)}reset(){window.requestAnimationFrame(()=>{this.setState(Object.assign({},this.state,{style:io(ro({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`})}))})}onMouseMove(e=()=>{},t){return t.persist(),this.updateCall!==null&&window.cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.update.bind(this,t)),e(t)}setTransition(){clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:io(ro({},this.state.style),{transition:`${this.settings.speed}ms ${this.settings.easing}`})})),this.transitionTimeout=setTimeout(()=>{this.setState(Object.assign({},this.state,{style:io(ro({},this.state.style),{transition:""})}))},this.settings.speed)}onMouseLeave(e=()=>{},t){return this.setTransition(),this.settings.reset&&this.reset(),e(t)}getValues(e){const t=(e.nativeEvent.clientX-this.left)/this.width,n=(e.nativeEvent.clientY-this.top)/this.height,r=Math.min(Math.max(t,0),1),i=Math.min(Math.max(n,0),1),o=(this.reverse*(this.settings.max/2-r*this.settings.max)).toFixed(2),s=(this.reverse*(i*this.settings.max-this.settings.max/2)).toFixed(2),a=r*100,l=i*100;return{tiltX:o,tiltY:s,percentageX:a,percentageY:l}}updateElementPosition(){const e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(e){const t=this.getValues(e);this.setState(Object.assign({},this.state,{style:io(ro({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(${this.settings.axis==="x"?0:t.tiltY}deg) rotateY(${this.settings.axis==="y"?0:t.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`})})),this.updateCall=null}render(){const e=Object.assign({},this.props.style,this.state.style);return S("div",{style:e,ref:this.ref,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,children:this.props.children})}};const A4=()=>S(R4,{children:N("div",{className:"header__flexbox",children:[N("div",{className:"header__intro",children:[N("h1",{children:["Your style, your look,",S("span",{children:"you shoes."})]}),S("h3",{children:"Embrace your style with leggings, shorts, t-shirts and sneakers from the new collection. Compose your look, opt for sporty, contemporary and colorful pieces and proudly display your style."}),S(pt,{className:"btn btn-header",to:"/shoes",children:"See more"})]}),S(T4,{options:{scale:1,transition:!0,glare:!0,"max-glare":1,"glare-prerender":!0},className:"header__illustration",children:S("img",{className:"sneakerImg",src:_4,alt:""})})]})}),R4=Fe.header`
  width: 100vw;
  max-width: 100%;
  background: var(--header-black-clr);
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  .header__flexbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    gap: 1rem;
    max-width: 1920px;

    .header__intro {
      width: 100%;

      h1 {
        color: var(--header-clr);
        font-size: 4rem;
        font-weight: 600;
        width: 100%;

        span {
          color: var(--primary-clr);
          display: block;
        }
      }

      h3 {
        color: var(--header-clr);
        font-size: 2rem;
        font-weight: 300;
        margin-top: 2rem;
      }
    }

    .header__illustration {
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transform: perspective(5000px);
      position: relative;
      background: url(${Zm});
      /* background: url(${Zm}), rgba(0, 0, 0, 0.144); */
      /* background: rgba(0, 0, 0, 0.144); */
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      border-radius: 15px;
      padding: 4rem;
      cursor: pointer;

      /* 
      img {
        display: block;
      } */

      /* .productBg {
        width: 60%;
        text-align: center;
        border: &px solid red;
        transform: translateZ(20px);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 98;
      } */

      .sneakerImg {
        width: 60%;
        position: absolute;
        top: 20%;
        left: 10%;
        transform: translate(-20%, -10%);
        z-index: 99;
        transform: translateZ(100px);
      }
    }
  }

  /* >1200PX */

  @media (min-width: 75em) {
    height: 100%;

    .header__flexbox {
      margin: 5rem auto;

      .header__intro {
        h1 {
          font-size: 3rem;
        }

        h3 {
          font-size: 1.5rem;
        }
      }

      .header__illustration {
        padding: 20rem 0;
        .sneakerImg {
          width: 80%;
          left: 0;
        }
      }
    }
  }

  /* 800PX to 1200PX */

  @media (min-width: 50em) and (max-width: 74.938em) {
    /* background: lightcoral; */
    height: 100%;

    .header__flexbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-top: 5rem;

      .header__intro {
        h1 {
          font-size: 3.5rem;
          text-align: center;
        }

        h3 {
          font-size: 1.5rem;
          text-align: center;
        }

        .btn.btn-header {
          display: block;
          margin: 0 auto;
          width: 30%;
          text-align: center;
          margin-top: 3rem;
        }
      }

      .header__illustration {
        height: 400px;

        .sneakerImg {
          width: 80%;
          position: absolute;
          top: 20%;
          left: 10%;
          transform: translate(-20%, -10%);
          z-index: 99;
          transform: translateZ(100px);
        }
      }
    }
  }

  /* < 800PX */

  @media (max-width: 49.938em) {
    height: 100%;
    .header__flexbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-top: 5rem;

      .header__intro {
        h1 {
          font-size: 3.5rem;
          text-align: center;
        }

        h3 {
          font-size: 1.5rem;
          text-align: center;
        }

        .btn.btn-header {
          display: block;
          margin: 0 auto;
          width: 50%;
          text-align: center;
          margin-top: 3rem;
        }
      }

      .header__illustration {
        height: 400px;

        .sneakerImg {
          width: 80%;
          position: absolute;
          top: 20%;
          left: 10%;
          transform: translate(-20%, -10%);
          z-index: 99;
          transform: translateZ(100px);
        }
      }
    }
  }

  /* <= 500PX */
  @media (max-width: 31.25em) {
    height: 100%;
    .header__flexbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-top: 5rem;

      .header__intro {
        h1 {
          font-size: 3.5rem;
          text-align: center;
        }

        h3 {
          font-size: 1.5rem;
          text-align: center;
        }

        .btn.btn-header {
          display: block;
          margin: 0 auto;
          width: 80%;
          text-align: center;
          margin-top: 3rem;
        }
      }

      .header__illustration {
        height: 400px;

        .sneakerImg {
          width: 100%;
          position: absolute;
          top: 20%;
          left: 0%;
          transform: translate(-20%, -10%);
          z-index: 99;
          transform: translateZ(100px);
        }
      }
    }
  }
`,O4="/assets/puma-sportwear-model-header-1b5a074a.webp",N4="/assets/nike-airMax-new-474794a9.webp",L4="/assets/adidas-mode-af4758e8.webp";var hy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},t0=Ee.createContext&&Ee.createContext(hy),qn=globalThis&&globalThis.__assign||function(){return qn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qn.apply(this,arguments)},M4=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function py(e){return e&&e.map(function(t,n){return Ee.createElement(t.tag,qn({key:n},t.attr),py(t.child))})}function qe(e){return function(t){return Ee.createElement(D4,qn({attr:qn({},e.attr)},t),py(e.child))}}function D4(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=M4(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Ee.createElement("svg",qn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:qn(qn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Ee.createElement("title",null,o),e.children)};return t0!==void 0?Ee.createElement(t0.Consumer,null,function(n){return t(n)}):t(hy)}function I4(e){return qe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}}]})(e)}function z4(e){return qe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"}}]})(e)}function F4(e){return qe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}}]})(e)}function V4(e){return qe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}}]})(e)}function j4(e){return qe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"}}]})(e)}const B4=()=>N($4,{children:[S("h2",{className:"section__title",children:"New collections"}),N("div",{className:"newCollection__container",children:[N("article",{className:"newCollection-card",children:[N("div",{className:"article__header",children:[S("h3",{children:"Puma 75"}),S("p",{children:"Stay cool with the Players Lounge capsule collection. This line of footwear and apparel revisits the classic football aesthetic with original styling and authentic materials."}),S(pt,{className:"btn-newCollection",children:"See more"})]}),S("img",{src:O4,alt:""})]}),N("article",{className:"newCollection-card",children:[N("div",{className:"article__header",children:[S("h3",{children:"Nike AirMax"}),S("p",{children:"Stay cool with the Players Lounge capsule collection. This line of footwear and apparel revisits the classic football aesthetic with original styling and authentic materials."}),S(pt,{className:"btn-newCollection",children:"See more"})]}),S("img",{src:N4,alt:""})]}),N("article",{className:"newCollection-card",children:[N("div",{className:"article__header",children:[S("h3",{children:"Superstar"}),S("p",{children:"Stay cool with the Players Lounge capsule collection. This line of footwear and apparel revisits the classic football aesthetic with original styling and authentic materials."}),S(pt,{className:"btn-newCollection",children:"See more"})]}),S("img",{src:L4,alt:""})]})]})]}),$4=Fe.section`
  width: 100vw;
  max-width: 100%;
  padding-top: 6rem;

  .section__title {
    margin: 0 auto;
    display: block;
    width: 80%;
    max-width: 1920px;
    font-size: 2rem;
    font-weight: 300;
  }
  .newCollection__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 80%;
    margin: 2rem auto;
    max-width: 1920px;

    .newCollection-card {
      width: 100%;
      display: flex;
      align-items: center;
      /* border: 1px solid var(--header-clr); */
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

      .article__header {
        width: 100%;
        padding: 1rem;

        h3 {
          font-size: 2rem;
          font-weight: 600;
        }
        p {
          font-size: 1rem;
          margin-top: 1rem;
        }

        .btn-newCollection {
          font-size: 1rem;
          color: var(--header-black-clr);
          margin-top: 2rem;
          display: flex;
          align-items: center;
          font-weight: 600;
          gap: 0.5rem;
          transition: all 0.2s ease-in-out;

          &::after {
            content: "⭢";
          }

          &:hover {
            color: var(--secondary-clr);
          }
        }
      }
      img {
        width: 50%;
        height: 100%;
        border-radius: 0 5px 5px 0;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 75em) {
    .newCollection__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 37.5em) {
    .newCollection__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .newCollection-card {
        .article__header {
          h3 {
            font-size: 1.2rem;
          }

          p {
            font-size: 0.95rem;
          }
        }

        img {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 31.25em) {
    .newCollection__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .newCollection-card {
        flex-direction: column;
        .article__header {
          h3 {
            font-size: 1.2rem;
          }

          p {
            font-size: 0.95rem;
          }
        }

        img {
          width: 100%;
          border-radius: 0 0 5px 5px;
        }
      }
    }
  }
`,ou=E.createContext(),U4=({children:e})=>{const[t,n]=E.useState(!0),[r,i]=E.useState(!1),o=()=>{i(!1),document.body.style.overflow="scroll"};return S(ou.Provider,{value:{loading:t,setLoading:n,openMobileMenu:r,setOpenMobileMenu:i,closeMobileMenu:o},children:e})};function n0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H4(e,t,n){return t&&n0(e.prototype,t),n&&n0(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var r0="(prefers-reduced-motion: reduce)",ci=1,W4=2,Ni=3,Ui=4,ws=5,wa=6,il=7,G4={CREATED:ci,MOUNTED:W4,IDLE:Ni,MOVING:Ui,SCROLLING:ws,DRAGGING:wa,DESTROYED:il};function Sn(e){e.length=0}function fr(e,t,n){return Array.prototype.slice.call(e,t,n)}function ge(e){return e.bind.apply(e,[null].concat(fr(arguments,1)))}var my=setTimeout,Uf=function(){};function i0(e){return requestAnimationFrame(e)}function su(e,t){return typeof t===e}function Jo(e){return!Th(e)&&su("object",e)}var bh=Array.isArray,gy=ge(su,"function"),tr=ge(su,"string"),xs=ge(su,"undefined");function Th(e){return e===null}function vy(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Ss(e){return bh(e)?e:[e]}function Lt(e,t){Ss(e).forEach(t)}function Ah(e,t){return e.indexOf(t)>-1}function xa(e,t){return e.push.apply(e,Ss(t)),e}function cn(e,t,n){e&&Lt(t,function(r){r&&e.classList[n?"add":"remove"](r)})}function en(e,t){cn(e,tr(t)?t.split(" "):t,!0)}function _s(e,t){Lt(t,e.appendChild.bind(e))}function Rh(e,t){Lt(e,function(n){var r=(t||n).parentNode;r&&r.insertBefore(n,t)})}function es(e,t){return vy(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function yy(e,t){var n=e?fr(e.children):[];return t?n.filter(function(r){return es(r,t)}):n}function Es(e,t){return t?yy(e,t)[0]:e.firstElementChild}var ts=Object.keys;function br(e,t,n){return e&&(n?ts(e).reverse():ts(e)).forEach(function(r){r!=="__proto__"&&t(e[r],r)}),e}function ns(e){return fr(arguments,1).forEach(function(t){br(t,function(n,r){e[r]=t[r]})}),e}function Vn(e){return fr(arguments,1).forEach(function(t){br(t,function(n,r){bh(n)?e[r]=n.slice():Jo(n)?e[r]=Vn({},Jo(e[r])?e[r]:{},n):e[r]=n})}),e}function o0(e,t){Lt(t||ts(e),function(n){delete e[n]})}function tn(e,t){Lt(e,function(n){Lt(t,function(r){n&&n.removeAttribute(r)})})}function re(e,t,n){Jo(t)?br(t,function(r,i){re(e,i,r)}):Lt(e,function(r){Th(n)||n===""?tn(r,t):r.setAttribute(t,String(n))})}function xi(e,t,n){var r=document.createElement(e);return t&&(tr(t)?en(r,t):re(r,t)),n&&_s(n,r),r}function jt(e,t,n){if(xs(n))return getComputedStyle(e)[t];Th(n)||(e.style[t]=""+n)}function rs(e,t){jt(e,"display",t)}function wy(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function Bt(e,t){return e.getAttribute(t)}function s0(e,t){return e&&e.classList.contains(t)}function bt(e){return e.getBoundingClientRect()}function Lr(e){Lt(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function xy(e){return Es(new DOMParser().parseFromString(e,"text/html").body)}function sn(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function Sy(e,t){return e&&e.querySelector(t)}function Oh(e,t){return t?fr(e.querySelectorAll(t)):[]}function fn(e,t){cn(e,t,!1)}function Hf(e){return e.timeStamp}function mr(e){return tr(e)?e:e?e+"px":""}var Cs="splide",Nh="data-"+Cs;function Co(e,t){if(!e)throw new Error("["+Cs+"] "+(t||""))}var nr=Math.min,ol=Math.max,sl=Math.floor,is=Math.ceil,ct=Math.abs;function _y(e,t,n){return ct(e-t)<n}function Sa(e,t,n,r){var i=nr(t,n),o=ol(t,n);return r?i<e&&e<o:i<=e&&e<=o}function Kr(e,t,n){var r=nr(t,n),i=ol(t,n);return nr(ol(r,e),i)}function Wf(e){return+(e>0)-+(e<0)}function Gf(e,t){return Lt(t,function(n){e=e.replace("%s",""+n)}),e}function Lh(e){return e<10?"0"+e:""+e}var a0={};function K4(e){return""+e+Lh(a0[e]=(a0[e]||0)+1)}function Ey(){var e=[];function t(s,a,l,u){i(s,a,function(c,f,d){var g="addEventListener"in c,h=g?c.removeEventListener.bind(c,f,l,u):c.removeListener.bind(c,l);g?c.addEventListener(f,l,u):c.addListener(l),e.push([c,f,d,l,h])})}function n(s,a,l){i(s,a,function(u,c,f){e=e.filter(function(d){return d[0]===u&&d[1]===c&&d[2]===f&&(!l||d[3]===l)?(d[4](),!1):!0})})}function r(s,a,l){var u,c=!0;return typeof CustomEvent=="function"?u=new CustomEvent(a,{bubbles:c,detail:l}):(u=document.createEvent("CustomEvent"),u.initCustomEvent(a,c,!1,l)),s.dispatchEvent(u),u}function i(s,a,l){Lt(s,function(u){u&&Lt(a,function(c){c.split(" ").forEach(function(f){var d=f.split(".");l(u,d[0],d[1])})})})}function o(){e.forEach(function(s){s[4]()}),Sn(e)}return{bind:t,unbind:n,dispatch:r,destroy:o}}var dr="mounted",Kf="ready",_n="move",Hi="moved",Mh="click",Cy="active",Py="inactive",ky="visible",by="hidden",Le="refresh",ot="updated",Li="resize",au="resized",Ty="drag",Ay="dragging",Ry="dragged",lu="scroll",Br="scrolled",Y4="overflow",Dh="destroy",Oy="arrows:mounted",Ny="arrows:updated",Ly="pagination:mounted",My="pagination:updated",Ih="navigation:mounted",zh="autoplay:play",Dy="autoplay:playing",Fh="autoplay:pause",Vh="lazyload:loaded",Iy="sk",zy="sh",al="ei";function ke(e){var t=e?e.event.bus:document.createDocumentFragment(),n=Ey();function r(o,s){n.bind(t,Ss(o).join(" "),function(a){s.apply(s,bh(a.detail)?a.detail:[])})}function i(o){n.dispatch(t,o,fr(arguments,1))}return e&&e.event.on(Dh,n.destroy),ns(n,{bus:t,on:r,off:ge(n.unbind,t),emit:i})}function uu(e,t,n,r){var i=Date.now,o,s=0,a,l=!0,u=0;function c(){if(!l){if(s=e?nr((i()-o)/e,1):1,n&&n(s),s>=1&&(t(),o=i(),r&&++u>=r))return d();a=i0(c)}}function f(y){y||h(),o=i()-(y?s*e:0),l=!1,a=i0(c)}function d(){l=!0}function g(){o=i(),s=0,n&&n(s)}function h(){a&&cancelAnimationFrame(a),s=0,a=0,l=!0}function v(y){e=y}function x(){return l}return{start:f,rewind:g,pause:d,cancel:h,set:v,isPaused:x}}function X4(e){var t=e;function n(i){t=i}function r(i){return Ah(Ss(i),t)}return{set:n,is:r}}function q4(e,t){var n=uu(t||0,e,null,1);return function(){n.isPaused()&&n.start()}}function Q4(e,t,n){var r=e.state,i=n.breakpoints||{},o=n.reducedMotion||{},s=Ey(),a=[];function l(){var h=n.mediaQuery==="min";ts(i).sort(function(v,x){return h?+v-+x:+x-+v}).forEach(function(v){c(i[v],"("+(h?"min":"max")+"-width:"+v+"px)")}),c(o,r0),f()}function u(h){h&&s.destroy()}function c(h,v){var x=matchMedia(v);s.bind(x,"change",f),a.push([h,x])}function f(){var h=r.is(il),v=n.direction,x=a.reduce(function(y,m){return Vn(y,m[1].matches?m[0]:{})},{});o0(n),g(x),n.destroy?e.destroy(n.destroy==="completely"):h?(u(!0),e.mount()):v!==n.direction&&e.refresh()}function d(h){matchMedia(r0).matches&&(h?Vn(n,o):o0(n,ts(o)))}function g(h,v,x){Vn(n,h),v&&Vn(Object.getPrototypeOf(n),h),(x||!r.is(ci))&&e.emit(ot,n)}return{setup:l,destroy:u,reduce:d,set:g}}var cu="Arrow",fu=cu+"Left",du=cu+"Right",Fy=cu+"Up",Vy=cu+"Down",l0="rtl",hu="ttb",dc={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Fy,du],ArrowRight:[Vy,fu]};function Z4(e,t,n){function r(o,s,a){a=a||n.direction;var l=a===l0&&!s?1:a===hu?0:-1;return dc[o]&&dc[o][l]||o.replace(/width|left|right/i,function(u,c){var f=dc[u.toLowerCase()][l]||u;return c>0?f.charAt(0).toUpperCase()+f.slice(1):f})}function i(o){return o*(n.direction===l0?1:-1)}return{resolve:r,orient:i}}var pn="role",Si="tabindex",J4="disabled",Wt="aria-",Ps=Wt+"controls",jy=Wt+"current",u0=Wt+"selected",At=Wt+"label",jh=Wt+"labelledby",By=Wt+"hidden",Bh=Wt+"orientation",os=Wt+"roledescription",c0=Wt+"live",f0=Wt+"busy",d0=Wt+"atomic",$h=[pn,Si,J4,Ps,jy,At,jh,By,Bh,os],nn=Cs+"__",hr="is-",hc=Cs,h0=nn+"track",eC=nn+"list",pu=nn+"slide",$y=pu+"--clone",tC=pu+"__container",Uh=nn+"arrows",mu=nn+"arrow",Uy=mu+"--prev",Hy=mu+"--next",gu=nn+"pagination",Wy=gu+"__page",nC=nn+"progress",rC=nC+"__bar",iC=nn+"toggle",oC=nn+"spinner",sC=nn+"sr",aC=hr+"initialized",Mr=hr+"active",Gy=hr+"prev",Ky=hr+"next",Yf=hr+"visible",Xf=hr+"loading",Yy=hr+"focus-in",Xy=hr+"overflow",lC=[Mr,Yf,Gy,Ky,Xf,Yy,Xy],uC={slide:pu,clone:$y,arrows:Uh,arrow:mu,prev:Uy,next:Hy,pagination:gu,page:Wy,spinner:oC};function cC(e,t){if(gy(e.closest))return e.closest(t);for(var n=e;n&&n.nodeType===1&&!es(n,t);)n=n.parentElement;return n}var fC=5,p0=200,qy="touchstart mousedown",pc="touchmove mousemove",mc="touchend touchcancel mouseup click";function dC(e,t,n){var r=ke(e),i=r.on,o=r.bind,s=e.root,a=n.i18n,l={},u=[],c=[],f=[],d,g,h;function v(){p(),w(),m()}function x(){i(Le,y),i(Le,v),i(ot,m),o(document,qy+" keydown",function(P){h=P.type==="keydown"},{capture:!0}),o(s,"focusin",function(){cn(s,Yy,!!h)})}function y(P){var k=$h.concat("style");Sn(u),fn(s,c),fn(d,f),tn([d,g],k),tn(s,P?k:["style",os])}function m(){fn(s,c),fn(d,f),c=b(hc),f=b(h0),en(s,c),en(d,f),re(s,At,n.label),re(s,jh,n.labelledby)}function p(){d=C("."+h0),g=Es(d,"."+eC),Co(d&&g,"A track/list element is missing."),xa(u,yy(g,"."+pu+":not(."+$y+")")),br({arrows:Uh,pagination:gu,prev:Uy,next:Hy,bar:rC,toggle:iC},function(P,k){l[k]=C("."+P)}),ns(l,{root:s,track:d,list:g,slides:u})}function w(){var P=s.id||K4(Cs),k=n.role;s.id=P,d.id=d.id||P+"-track",g.id=g.id||P+"-list",!Bt(s,pn)&&s.tagName!=="SECTION"&&k&&re(s,pn,k),re(s,os,a.carousel),re(g,pn,"presentation")}function C(P){var k=Sy(s,P);return k&&cC(k,"."+hc)===s?k:void 0}function b(P){return[P+"--"+n.type,P+"--"+n.direction,n.drag&&P+"--draggable",n.isNavigation&&P+"--nav",P===hc&&Mr]}return ns(l,{setup:v,mount:x,destroy:y})}var Mi="slide",Wi="loop",ks="fade";function hC(e,t,n,r){var i=ke(e),o=i.on,s=i.emit,a=i.bind,l=e.Components,u=e.root,c=e.options,f=c.isNavigation,d=c.updateOnMove,g=c.i18n,h=c.pagination,v=c.slideFocus,x=l.Direction.resolve,y=Bt(r,"style"),m=Bt(r,At),p=n>-1,w=Es(r,"."+tC),C;function b(){p||(r.id=u.id+"-slide"+Lh(t+1),re(r,pn,h?"tabpanel":"group"),re(r,os,g.slide),re(r,At,m||Gf(g.slideLabel,[t+1,e.length]))),P()}function P(){a(r,"click",ge(s,Mh,T)),a(r,"keydown",ge(s,Iy,T)),o([Hi,zy,Br],I),o(Ih,B),d&&o(_n,L)}function k(){C=!0,i.destroy(),fn(r,lC),tn(r,$h),re(r,"style",y),re(r,At,m||"")}function B(){var M=e.splides.map(function(A){var D=A.splide.Components.Slides.getAt(t);return D?D.slide.id:""}).join(" ");re(r,At,Gf(g.slideX,(p?n:t)+1)),re(r,Ps,M),re(r,pn,v?"button":""),v&&tn(r,os)}function L(){C||I()}function I(){if(!C){var M=e.index;F(),U(),cn(r,Gy,t===M-1),cn(r,Ky,t===M+1)}}function F(){var M=G();M!==s0(r,Mr)&&(cn(r,Mr,M),re(r,jy,f&&M||""),s(M?Cy:Py,T))}function U(){var M=ie(),A=!M&&(!G()||p);if(e.state.is([Ui,ws])||re(r,By,A||""),re(Oh(r,c.focusableNodes||""),Si,A?-1:""),v&&re(r,Si,A?-1:0),M!==s0(r,Yf)&&(cn(r,Yf,M),s(M?ky:by,T)),!M&&document.activeElement===r){var D=l.Slides.getAt(e.index);D&&wy(D.slide)}}function K(M,A,D){jt(D&&w||r,M,A)}function G(){var M=e.index;return M===t||c.cloneStatus&&M===n}function ie(){if(e.is(ks))return G();var M=bt(l.Elements.track),A=bt(r),D=x("left",!0),O=x("right",!0);return sl(M[D])<=is(A[D])&&sl(A[O])<=is(M[O])}function ee(M,A){var D=ct(M-t);return!p&&(c.rewind||e.is(Wi))&&(D=nr(D,e.length-D)),D<=A}var T={index:t,slideIndex:n,slide:r,container:w,isClone:p,mount:b,destroy:k,update:I,style:K,isWithin:ee};return T}function pC(e,t,n){var r=ke(e),i=r.on,o=r.emit,s=r.bind,a=t.Elements,l=a.slides,u=a.list,c=[];function f(){d(),i(Le,g),i(Le,d)}function d(){l.forEach(function(I,F){v(I,F,-1)})}function g(){C(function(I){I.destroy()}),Sn(c)}function h(){C(function(I){I.update()})}function v(I,F,U){var K=hC(e,F,U,I);K.mount(),c.push(K),c.sort(function(G,ie){return G.index-ie.index})}function x(I){return I?b(function(F){return!F.isClone}):c}function y(I){var F=t.Controller,U=F.toIndex(I),K=F.hasFocus()?1:n.perPage;return b(function(G){return Sa(G.index,U,U+K-1)})}function m(I){return b(I)[0]}function p(I,F){Lt(I,function(U){if(tr(U)&&(U=xy(U)),vy(U)){var K=l[F];K?Rh(U,K):_s(u,U),en(U,n.classes.slide),k(U,ge(o,Li))}}),o(Le)}function w(I){Lr(b(I).map(function(F){return F.slide})),o(Le)}function C(I,F){x(F).forEach(I)}function b(I){return c.filter(gy(I)?I:function(F){return tr(I)?es(F.slide,I):Ah(Ss(I),F.index)})}function P(I,F,U){C(function(K){K.style(I,F,U)})}function k(I,F){var U=Oh(I,"img"),K=U.length;K?U.forEach(function(G){s(G,"load error",function(){--K||F()})}):F()}function B(I){return I?l.length:c.length}function L(){return c.length>n.perPage}return{mount:f,destroy:g,update:h,register:v,get:x,getIn:y,getAt:m,add:p,remove:w,forEach:C,filter:b,style:P,getLength:B,isEnough:L}}function mC(e,t,n){var r=ke(e),i=r.on,o=r.bind,s=r.emit,a=t.Slides,l=t.Direction.resolve,u=t.Elements,c=u.root,f=u.track,d=u.list,g=a.getAt,h=a.style,v,x,y;function m(){p(),o(window,"resize load",q4(ge(s,Li))),i([ot,Le],p),i(Li,w)}function p(){v=n.direction===hu,jt(c,"maxWidth",mr(n.width)),jt(f,l("paddingLeft"),C(!1)),jt(f,l("paddingRight"),C(!0)),w(!0)}function w(T){var M=bt(c);(T||x.width!==M.width||x.height!==M.height)&&(jt(f,"height",b()),h(l("marginRight"),mr(n.gap)),h("width",k()),h("height",B(),!0),x=M,s(au),y!==(y=ee())&&(cn(c,Xy,y),s(Y4,y)))}function C(T){var M=n.padding,A=l(T?"right":"left");return M&&mr(M[A]||(Jo(M)?0:M))||"0px"}function b(){var T="";return v&&(T=P(),Co(T,"height or heightRatio is missing."),T="calc("+T+" - "+C(!1)+" - "+C(!0)+")"),T}function P(){return mr(n.height||bt(d).width*n.heightRatio)}function k(){return n.autoWidth?null:mr(n.fixedWidth)||(v?"":L())}function B(){return mr(n.fixedHeight)||(v?n.autoHeight?null:L():P())}function L(){var T=mr(n.gap);return"calc((100%"+(T&&" + "+T)+")/"+(n.perPage||1)+(T&&" - "+T)+")"}function I(){return bt(d)[l("width")]}function F(T,M){var A=g(T||0);return A?bt(A.slide)[l("width")]+(M?0:G()):0}function U(T,M){var A=g(T);if(A){var D=bt(A.slide)[l("right")],O=bt(d)[l("left")];return ct(D-O)+(M?0:G())}return 0}function K(T){return U(e.length-1)-U(0)+F(0,T)}function G(){var T=g(0);return T&&parseFloat(jt(T.slide,l("marginRight")))||0}function ie(T){return parseFloat(jt(f,l("padding"+(T?"Right":"Left"))))||0}function ee(){return e.is(ks)||K(!0)>I()}return{mount:m,resize:w,listSize:I,slideSize:F,sliderSize:K,totalSize:U,getPadding:ie,isOverflow:ee}}var gC=2;function vC(e,t,n){var r=ke(e),i=r.on,o=t.Elements,s=t.Slides,a=t.Direction.resolve,l=[],u;function c(){i(Le,f),i([ot,Li],g),(u=x())&&(h(u),t.Layout.resize(!0))}function f(){d(),c()}function d(){Lr(l),Sn(l),r.destroy()}function g(){var y=x();u!==y&&(u<y||!y)&&r.emit(Le)}function h(y){var m=s.get().slice(),p=m.length;if(p){for(;m.length<y;)xa(m,m);xa(m.slice(-y),m.slice(0,y)).forEach(function(w,C){var b=C<y,P=v(w.slide,C);b?Rh(P,m[0].slide):_s(o.list,P),xa(l,P),s.register(P,C-y+(b?0:p),w.index)})}}function v(y,m){var p=y.cloneNode(!0);return en(p,n.classes.clone),p.id=e.root.id+"-clone"+Lh(m+1),p}function x(){var y=n.clones;if(!e.is(Wi))y=0;else if(xs(y)){var m=n[a("fixedWidth")]&&t.Layout.slideSize(0),p=m&&is(bt(o.track)[a("width")]/m);y=p||n[a("autoWidth")]&&e.length||n.perPage*gC}return y}return{mount:c,destroy:d}}function yC(e,t,n){var r=ke(e),i=r.on,o=r.emit,s=e.state.set,a=t.Layout,l=a.slideSize,u=a.getPadding,c=a.totalSize,f=a.listSize,d=a.sliderSize,g=t.Direction,h=g.resolve,v=g.orient,x=t.Elements,y=x.list,m=x.track,p;function w(){p=t.Transition,i([dr,au,ot,Le],C)}function C(){t.Controller.isBusy()||(t.Scroll.cancel(),P(e.index),t.Slides.update())}function b(A,D,O,$){A!==D&&T(A>O)&&(I(),k(L(K(),A>O),!0)),s(Ui),o(_n,D,O,A),p.start(D,function(){s(Ni),o(Hi,D,O,A),$&&$()})}function P(A){k(U(A,!0))}function k(A,D){if(!e.is(ks)){var O=D?A:B(A);jt(y,"transform","translate"+h("X")+"("+O+"px)"),A!==O&&o(zy)}}function B(A){if(e.is(Wi)){var D=F(A),O=D>t.Controller.getEnd(),$=D<0;($||O)&&(A=L(A,O))}return A}function L(A,D){var O=A-ee(D),$=d();return A-=v($*(is(ct(O)/$)||1))*(D?1:-1),A}function I(){k(K(),!0),p.cancel()}function F(A){for(var D=t.Slides.get(),O=0,$=1/0,j=0;j<D.length;j++){var q=D[j].index,_=ct(U(q,!0)-A);if(_<=$)$=_,O=q;else break}return O}function U(A,D){var O=v(c(A-1)-ie(A));return D?G(O):O}function K(){var A=h("left");return bt(y)[A]-bt(m)[A]+v(u(!1))}function G(A){return n.trimSpace&&e.is(Mi)&&(A=Kr(A,0,v(d(!0)-f()))),A}function ie(A){var D=n.focus;return D==="center"?(f()-l(A,!0))/2:+D*l(A)||0}function ee(A){return U(A?t.Controller.getEnd():0,!!n.trimSpace)}function T(A){var D=v(L(K(),A));return A?D>=0:D<=y[h("scrollWidth")]-bt(m)[h("width")]}function M(A,D){D=xs(D)?K():D;var O=A!==!0&&v(D)<v(ee(!1)),$=A!==!1&&v(D)>v(ee(!0));return O||$}return{mount:w,move:b,jump:P,translate:k,shift:L,cancel:I,toIndex:F,toPosition:U,getPosition:K,getLimit:ee,exceededLimit:M,reposition:C}}function wC(e,t,n){var r=ke(e),i=r.on,o=r.emit,s=t.Move,a=s.getPosition,l=s.getLimit,u=s.toPosition,c=t.Slides,f=c.isEnough,d=c.getLength,g=n.omitEnd,h=e.is(Wi),v=e.is(Mi),x=ge(K,!1),y=ge(K,!0),m=n.start||0,p,w=m,C,b,P;function k(){B(),i([ot,Le,al],B),i(au,L)}function B(){C=d(!0),b=n.perMove,P=n.perPage,p=T();var _=Kr(m,0,g?p:C-1);_!==m&&(m=_,s.reposition())}function L(){p!==T()&&o(al)}function I(_,Y,z){if(!q()){var Q=U(_),Z=ee(Q);Z>-1&&(Y||Z!==m)&&(O(Z),s.move(Q,Z,w,z))}}function F(_,Y,z,Q){t.Scroll.scroll(_,Y,z,function(){var Z=ee(s.toIndex(a()));O(g?nr(Z,p):Z),Q&&Q()})}function U(_){var Y=m;if(tr(_)){var z=_.match(/([+\-<>])(\d+)?/)||[],Q=z[1],Z=z[2];Q==="+"||Q==="-"?Y=G(m+ +(""+Q+(+Z||1)),m):Q===">"?Y=Z?M(+Z):x(!0):Q==="<"&&(Y=y(!0))}else Y=h?_:Kr(_,0,p);return Y}function K(_,Y){var z=b||(j()?1:P),Q=G(m+z*(_?-1:1),m,!(b||j()));return Q===-1&&v&&!_y(a(),l(!_),1)?_?0:p:Y?Q:ee(Q)}function G(_,Y,z){if(f()||j()){var Q=ie(_);Q!==_&&(Y=_,_=Q,z=!1),_<0||_>p?!b&&(Sa(0,_,Y,!0)||Sa(p,Y,_,!0))?_=M(A(_)):h?_=z?_<0?-(C%P||P):C:_:n.rewind?_=_<0?p:0:_=-1:z&&_!==Y&&(_=M(A(Y)+(_<Y?-1:1)))}else _=-1;return _}function ie(_){if(v&&n.trimSpace==="move"&&_!==m)for(var Y=a();Y===u(_,!0)&&Sa(_,0,e.length-1,!n.rewind);)_<m?--_:++_;return _}function ee(_){return h?(_+C)%C||0:_}function T(){for(var _=C-(j()||h&&b?1:P);g&&_-- >0;)if(u(C-1,!0)!==u(_,!0)){_++;break}return Kr(_,0,C-1)}function M(_){return Kr(j()?_:P*_,0,p)}function A(_){return j()?nr(_,p):sl((_>=p?C-1:_)/P)}function D(_){var Y=s.toIndex(_);return v?Kr(Y,0,p):Y}function O(_){_!==m&&(w=m,m=_)}function $(_){return _?w:m}function j(){return!xs(n.focus)||n.isNavigation}function q(){return e.state.is([Ui,ws])&&!!n.waitForTransition}return{mount:k,go:I,scroll:F,getNext:x,getPrev:y,getAdjacent:K,getEnd:T,setIndex:O,getIndex:$,toIndex:M,toPage:A,toDest:D,hasFocus:j,isBusy:q}}var xC="http://www.w3.org/2000/svg",SC="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Js=40;function _C(e,t,n){var r=ke(e),i=r.on,o=r.bind,s=r.emit,a=n.classes,l=n.i18n,u=t.Elements,c=t.Controller,f=u.arrows,d=u.track,g=f,h=u.prev,v=u.next,x,y,m={};function p(){C(),i(ot,w)}function w(){b(),p()}function C(){var F=n.arrows;F&&!(h&&v)&&B(),h&&v&&(ns(m,{prev:h,next:v}),rs(g,F?"":"none"),en(g,y=Uh+"--"+n.direction),F&&(P(),I(),re([h,v],Ps,d.id),s(Oy,h,v)))}function b(){r.destroy(),fn(g,y),x?(Lr(f?[h,v]:g),h=v=null):tn([h,v],$h)}function P(){i([dr,Hi,Le,Br,al],I),o(v,"click",ge(k,">")),o(h,"click",ge(k,"<"))}function k(F){c.go(F,!0)}function B(){g=f||xi("div",a.arrows),h=L(!0),v=L(!1),x=!0,_s(g,[h,v]),!f&&Rh(g,d)}function L(F){var U='<button class="'+a.arrow+" "+(F?a.prev:a.next)+'" type="button"><svg xmlns="'+xC+'" viewBox="0 0 '+Js+" "+Js+'" width="'+Js+'" height="'+Js+'" focusable="false"><path d="'+(n.arrowPath||SC)+'" />';return xy(U)}function I(){if(h&&v){var F=e.index,U=c.getPrev(),K=c.getNext(),G=U>-1&&F<U?l.last:l.prev,ie=K>-1&&F>K?l.first:l.next;h.disabled=U<0,v.disabled=K<0,re(h,At,G),re(v,At,ie),s(Ny,h,v,U,K)}}return{arrows:m,mount:p,destroy:b,update:I}}var EC=Nh+"-interval";function CC(e,t,n){var r=ke(e),i=r.on,o=r.bind,s=r.emit,a=uu(n.interval,e.go.bind(e,">"),P),l=a.isPaused,u=t.Elements,c=t.Elements,f=c.root,d=c.toggle,g=n.autoplay,h,v,x=g==="pause";function y(){g&&(m(),d&&re(d,Ps,u.track.id),x||p(),b())}function m(){n.pauseOnHover&&o(f,"mouseenter mouseleave",function(B){h=B.type==="mouseenter",C()}),n.pauseOnFocus&&o(f,"focusin focusout",function(B){v=B.type==="focusin",C()}),d&&o(d,"click",function(){x?p():w(!0)}),i([_n,lu,Le],a.rewind),i(_n,k)}function p(){l()&&t.Slides.isEnough()&&(a.start(!n.resetProgress),v=h=x=!1,b(),s(zh))}function w(B){B===void 0&&(B=!0),x=!!B,b(),l()||(a.pause(),s(Fh))}function C(){x||(h||v?w(!1):p())}function b(){d&&(cn(d,Mr,!x),re(d,At,n.i18n[x?"play":"pause"]))}function P(B){var L=u.bar;L&&jt(L,"width",B*100+"%"),s(Dy,B)}function k(B){var L=t.Slides.getAt(B);a.set(L&&+Bt(L.slide,EC)||n.interval)}return{mount:y,destroy:a.cancel,play:p,pause:w,isPaused:l}}function PC(e,t,n){var r=ke(e),i=r.on;function o(){n.cover&&(i(Vh,ge(a,!0)),i([dr,ot,Le],ge(s,!0)))}function s(l){t.Slides.forEach(function(u){var c=Es(u.container||u.slide,"img");c&&c.src&&a(l,c,u)})}function a(l,u,c){c.style("background",l?'center/cover no-repeat url("'+u.src+'")':"",!0),rs(u,l?"none":"")}return{mount:o,destroy:ge(s,!1)}}var kC=10,bC=600,TC=.6,AC=1.5,RC=800;function OC(e,t,n){var r=ke(e),i=r.on,o=r.emit,s=e.state.set,a=t.Move,l=a.getPosition,u=a.getLimit,c=a.exceededLimit,f=a.translate,d=e.is(Mi),g,h,v=1;function x(){i(_n,w),i([ot,Le],C)}function y(P,k,B,L,I){var F=l();if(w(),B&&(!d||!c())){var U=t.Layout.sliderSize(),K=Wf(P)*U*sl(ct(P)/U)||0;P=a.toPosition(t.Controller.toDest(P%U))+K}var G=_y(F,P,1);v=1,k=G?0:k||ol(ct(P-F)/AC,RC),h=L,g=uu(k,m,ge(p,F,P,I),1),s(ws),o(lu),g.start()}function m(){s(Ni),h&&h(),o(Br)}function p(P,k,B,L){var I=l(),F=P+(k-P)*b(L),U=(F-I)*v;f(I+U),d&&!B&&c()&&(v*=TC,ct(U)<kC&&y(u(c(!0)),bC,!1,h,!0))}function w(){g&&g.cancel()}function C(){g&&!g.isPaused()&&(w(),m())}function b(P){var k=n.easingFunc;return k?k(P):1-Math.pow(1-P,4)}return{mount:x,destroy:w,scroll:y,cancel:C}}var Yr={passive:!1,capture:!0};function NC(e,t,n){var r=ke(e),i=r.on,o=r.emit,s=r.bind,a=r.unbind,l=e.state,u=t.Move,c=t.Scroll,f=t.Controller,d=t.Elements.track,g=t.Media.reduce,h=t.Direction,v=h.resolve,x=h.orient,y=u.getPosition,m=u.exceededLimit,p,w,C,b,P,k=!1,B,L,I;function F(){s(d,pc,Uf,Yr),s(d,mc,Uf,Yr),s(d,qy,K,Yr),s(d,"click",ee,{capture:!0}),s(d,"dragstart",sn),i([dr,ot],U)}function U(){var W=n.drag;te(!W),b=W==="free"}function K(W){if(B=!1,!L){var se=Z(W);Q(W.target)&&(se||!W.button)&&(f.isBusy()?sn(W,!0):(I=se?d:window,P=l.is([Ui,ws]),C=null,s(I,pc,G,Yr),s(I,mc,ie,Yr),u.cancel(),c.cancel(),T(W)))}}function G(W){if(l.is(wa)||(l.set(wa),o(Ty)),W.cancelable)if(P){u.translate(p+z(j(W)));var se=q(W)>p0,oe=k!==(k=m());(se||oe)&&T(W),B=!0,o(Ay),sn(W)}else D(W)&&(P=A(W),sn(W))}function ie(W){l.is(wa)&&(l.set(Ni),o(Ry)),P&&(M(W),sn(W)),a(I,pc,G),a(I,mc,ie),P=!1}function ee(W){!L&&B&&sn(W,!0)}function T(W){C=w,w=W,p=y()}function M(W){var se=O(W),oe=$(se),be=n.rewind&&n.rewindByDrag;g(!1),b?f.scroll(oe,0,n.snap):e.is(ks)?f.go(x(Wf(se))<0?be?"<":"-":be?">":"+"):e.is(Mi)&&k&&be?f.go(m(!0)?">":"<"):f.go(f.toDest(oe),!0),g(!0)}function A(W){var se=n.dragMinThreshold,oe=Jo(se),be=oe&&se.mouse||0,fe=(oe?se.touch:+se)||10;return ct(j(W))>(Z(W)?fe:be)}function D(W){return ct(j(W))>ct(j(W,!0))}function O(W){if(e.is(Wi)||!k){var se=q(W);if(se&&se<p0)return j(W)/se}return 0}function $(W){return y()+Wf(W)*nr(ct(W)*(n.flickPower||600),b?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}function j(W,se){return Y(W,se)-Y(_(W),se)}function q(W){return Hf(W)-Hf(_(W))}function _(W){return w===W&&C||w}function Y(W,se){return(Z(W)?W.changedTouches[0]:W)["page"+v(se?"Y":"X")]}function z(W){return W/(k&&e.is(Mi)?fC:1)}function Q(W){var se=n.noDrag;return!es(W,"."+Wy+", ."+mu)&&(!se||!es(W,se))}function Z(W){return typeof TouchEvent<"u"&&W instanceof TouchEvent}function le(){return P}function te(W){L=W}return{mount:F,disable:te,isDragging:le}}var LC={Spacebar:" ",Right:du,Left:fu,Up:Fy,Down:Vy};function Hh(e){return e=tr(e)?e:e.key,LC[e]||e}var m0="keydown";function MC(e,t,n){var r=ke(e),i=r.on,o=r.bind,s=r.unbind,a=e.root,l=t.Direction.resolve,u,c;function f(){d(),i(ot,g),i(ot,d),i(_n,v)}function d(){var y=n.keyboard;y&&(u=y==="global"?window:a,o(u,m0,x))}function g(){s(u,m0)}function h(y){c=y}function v(){var y=c;c=!0,my(function(){c=y})}function x(y){if(!c){var m=Hh(y);m===l(fu)?e.go("<"):m===l(du)&&e.go(">")}}return{mount:f,destroy:g,disable:h}}var Po=Nh+"-lazy",_a=Po+"-srcset",DC="["+Po+"], ["+_a+"]";function IC(e,t,n){var r=ke(e),i=r.on,o=r.off,s=r.bind,a=r.emit,l=n.lazyLoad==="sequential",u=[Hi,Br],c=[];function f(){n.lazyLoad&&(d(),i(Le,d))}function d(){Sn(c),g(),l?y():(o(u),i(u,h),h())}function g(){t.Slides.forEach(function(m){Oh(m.slide,DC).forEach(function(p){var w=Bt(p,Po),C=Bt(p,_a);if(w!==p.src||C!==p.srcset){var b=n.classes.spinner,P=p.parentElement,k=Es(P,"."+b)||xi("span",b,P);c.push([p,m,k]),p.src||rs(p,"none")}})})}function h(){c=c.filter(function(m){var p=n.perPage*((n.preloadPages||1)+1)-1;return m[1].isWithin(e.index,p)?v(m):!0}),c.length||o(u)}function v(m){var p=m[0];en(m[1].slide,Xf),s(p,"load error",ge(x,m)),re(p,"src",Bt(p,Po)),re(p,"srcset",Bt(p,_a)),tn(p,Po),tn(p,_a)}function x(m,p){var w=m[0],C=m[1];fn(C.slide,Xf),p.type!=="error"&&(Lr(m[2]),rs(w,""),a(Vh,w,C),a(Li)),l&&y()}function y(){c.length&&v(c.shift())}return{mount:f,destroy:ge(Sn,c),check:h}}function zC(e,t,n){var r=ke(e),i=r.on,o=r.emit,s=r.bind,a=t.Slides,l=t.Elements,u=t.Controller,c=u.hasFocus,f=u.getIndex,d=u.go,g=t.Direction.resolve,h=l.pagination,v=[],x,y;function m(){p(),i([ot,Le,al],m);var L=n.pagination;h&&rs(h,L?"":"none"),L&&(i([_n,lu,Br],B),w(),B(),o(Ly,{list:x,items:v},k(e.index)))}function p(){x&&(Lr(h?fr(x.children):x),fn(x,y),Sn(v),x=null),r.destroy()}function w(){var L=e.length,I=n.classes,F=n.i18n,U=n.perPage,K=c()?u.getEnd()+1:is(L/U);x=h||xi("ul",I.pagination,l.track.parentElement),en(x,y=gu+"--"+P()),re(x,pn,"tablist"),re(x,At,F.select),re(x,Bh,P()===hu?"vertical":"");for(var G=0;G<K;G++){var ie=xi("li",null,x),ee=xi("button",{class:I.page,type:"button"},ie),T=a.getIn(G).map(function(A){return A.slide.id}),M=!c()&&U>1?F.pageX:F.slideX;s(ee,"click",ge(C,G)),n.paginationKeyboard&&s(ee,"keydown",ge(b,G)),re(ie,pn,"presentation"),re(ee,pn,"tab"),re(ee,Ps,T.join(" ")),re(ee,At,Gf(M,G+1)),re(ee,Si,-1),v.push({li:ie,button:ee,page:G})}}function C(L){d(">"+L,!0)}function b(L,I){var F=v.length,U=Hh(I),K=P(),G=-1;U===g(du,!1,K)?G=++L%F:U===g(fu,!1,K)?G=(--L+F)%F:U==="Home"?G=0:U==="End"&&(G=F-1);var ie=v[G];ie&&(wy(ie.button),d(">"+G),sn(I,!0))}function P(){return n.paginationDirection||n.direction}function k(L){return v[u.toPage(L)]}function B(){var L=k(f(!0)),I=k(f());if(L){var F=L.button;fn(F,Mr),tn(F,u0),re(F,Si,-1)}if(I){var U=I.button;en(U,Mr),re(U,u0,!0),re(U,Si,"")}o(My,{list:x,items:v},L,I)}return{items:v,mount:m,destroy:p,getAt:k,update:B}}var FC=[" ","Enter"];function VC(e,t,n){var r=n.isNavigation,i=n.slideFocus,o=[];function s(){e.splides.forEach(function(h){h.isParent||(u(e,h.splide),u(h.splide,e))}),r&&c()}function a(){o.forEach(function(h){h.destroy()}),Sn(o)}function l(){a(),s()}function u(h,v){var x=ke(h);x.on(_n,function(y,m,p){v.go(v.is(Wi)?p:y)}),o.push(x)}function c(){var h=ke(e),v=h.on;v(Mh,d),v(Iy,g),v([dr,ot],f),o.push(h),h.emit(Ih,e.splides)}function f(){re(t.Elements.list,Bh,n.direction===hu?"vertical":"")}function d(h){e.go(h.index)}function g(h,v){Ah(FC,Hh(v))&&(d(h),sn(v))}return{setup:ge(t.Media.set,{slideFocus:xs(i)?r:i},!0),mount:s,destroy:a,remount:l}}function jC(e,t,n){var r=ke(e),i=r.bind,o=0;function s(){n.wheel&&i(t.Elements.track,"wheel",a,Yr)}function a(u){if(u.cancelable){var c=u.deltaY,f=c<0,d=Hf(u),g=n.wheelMinThreshold||0,h=n.wheelSleep||0;ct(c)>g&&d-o>h&&(e.go(f?"<":">"),o=d),l(f)&&sn(u)}}function l(u){return!n.releaseWheel||e.state.is(Ui)||t.Controller.getAdjacent(u)!==-1}return{mount:s}}var BC=90;function $C(e,t,n){var r=ke(e),i=r.on,o=t.Elements.track,s=n.live&&!n.isNavigation,a=xi("span",sC),l=uu(BC,ge(c,!1));function u(){s&&(d(!t.Autoplay.isPaused()),re(o,d0,!0),a.textContent="…",i(zh,ge(d,!0)),i(Fh,ge(d,!1)),i([Hi,Br],ge(c,!0)))}function c(g){re(o,f0,g),g?(_s(o,a),l.start()):(Lr(a),l.cancel())}function f(){tn(o,[c0,d0,f0]),Lr(a)}function d(g){s&&re(o,c0,g?"off":"polite")}return{mount:u,disable:d,destroy:f}}var UC=Object.freeze({__proto__:null,Media:Q4,Direction:Z4,Elements:dC,Slides:pC,Layout:mC,Clones:vC,Move:yC,Controller:wC,Arrows:_C,Autoplay:CC,Cover:PC,Scroll:OC,Drag:NC,Keyboard:MC,LazyLoad:IC,Pagination:zC,Sync:VC,Wheel:jC,Live:$C}),HC={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},WC={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:uC,i18n:HC,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function GC(e,t,n){var r=t.Slides;function i(){ke(e).on([dr,Le],o)}function o(){r.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function s(a,l){r.style("transition","opacity "+n.speed+"ms "+n.easing),my(l)}return{mount:i,start:s,cancel:Uf}}function KC(e,t,n){var r=t.Move,i=t.Controller,o=t.Scroll,s=t.Elements.list,a=ge(jt,s,"transition"),l;function u(){ke(e).bind(s,"transitionend",function(g){g.target===s&&l&&(f(),l())})}function c(g,h){var v=r.toPosition(g,!0),x=r.getPosition(),y=d(g);ct(v-x)>=1&&y>=1?n.useScroll?o.scroll(v,y,!1,h):(a("transform "+y+"ms "+n.easing),r.translate(v,!0),l=h):(r.jump(g),h())}function f(){a(""),o.cancel()}function d(g){var h=n.rewindSpeed;if(e.is(Mi)&&h){var v=i.getIndex(!0),x=i.getEnd();if(v===0&&g>=x||v>=x&&g===0)return h}return n.speed}return{mount:u,start:c,cancel:f}}var YC=function(){function e(n,r){this.event=ke(),this.Components={},this.state=X4(ci),this.splides=[],this._o={},this._E={};var i=tr(n)?Sy(document,n):n;Co(i,i+" is invalid."),this.root=i,r=Vn({label:Bt(i,At)||"",labelledby:Bt(i,jh)||""},WC,e.defaults,r||{});try{Vn(r,JSON.parse(Bt(i,Nh)))}catch{Co(!1,"Invalid JSON")}this._o=Object.create(Vn({},r))}var t=e.prototype;return t.mount=function(r,i){var o=this,s=this.state,a=this.Components;Co(s.is([ci,il]),"Already mounted!"),s.set(ci),this._C=a,this._T=i||this._T||(this.is(ks)?GC:KC),this._E=r||this._E;var l=ns({},UC,this._E,{Transition:this._T});return br(l,function(u,c){var f=u(o,a,o._o);a[c]=f,f.setup&&f.setup()}),br(a,function(u){u.mount&&u.mount()}),this.emit(dr),en(this.root,aC),s.set(Ni),this.emit(Kf),this},t.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Ni)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},t.go=function(r){return this._C.Controller.go(r),this},t.on=function(r,i){return this.event.on(r,i),this},t.off=function(r){return this.event.off(r),this},t.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(fr(arguments,1))),this},t.add=function(r,i){return this._C.Slides.add(r,i),this},t.remove=function(r){return this._C.Slides.remove(r),this},t.is=function(r){return this._o.type===r},t.refresh=function(){return this.emit(Le),this},t.destroy=function(r){r===void 0&&(r=!0);var i=this.event,o=this.state;return o.is(ci)?ke(this).on(Kf,this.destroy.bind(this,r)):(br(this._C,function(s){s.destroy&&s.destroy(r)},!0),i.emit(Dh),i.destroy(),r&&Sn(this.splides),o.set(il)),this},H4(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),Wh=YC;Wh.defaults={};Wh.STATES=G4;var g0=[[dr,"onMounted"],[Kf,"onReady"],[_n,"onMove"],[Hi,"onMoved"],[Mh,"onClick"],[Cy,"onActive"],[Py,"onInactive"],[ky,"onVisible"],[by,"onHidden"],[Le,"onRefresh"],[ot,"onUpdated"],[Li,"onResize"],[au,"onResized"],[Ty,"onDrag"],[Ay,"onDragging"],[Ry,"onDragged"],[lu,"onScroll"],[Br,"onScrolled"],[Dh,"onDestroy"],[Oy,"onArrowsMounted"],[Ny,"onArrowsUpdated"],[Ly,"onPaginationMounted"],[My,"onPaginationUpdated"],[Ih,"onNavigationMounted"],[zh,"onAutoplayPlay"],[Dy,"onAutoplayPlaying"],[Fh,"onAutoplayPause"],[Vh,"onLazyLoadLoaded"]];function Gh(...e){return e.filter(Boolean).join(" ")}function ll(e){return e!==null&&typeof e=="object"}function qf(e,t){if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&!e.some((n,r)=>!qf(n,t[r]));if(ll(e)&&ll(t)){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(i=>!Object.prototype.hasOwnProperty.call(t,i)||!qf(e[i],t[i]))}return e===t}function XC(e,t){return e.length===t.length&&!e.some((n,r)=>n!==t[r])}function qC(e,t){if(e){const n=Object.keys(e);for(let r=0;r<n.length;r++){const i=n[r];if(i!=="__proto__"&&t(e[i],i)===!1)break}}return e}function Qf(e,t){const n=e;return qC(t,(r,i)=>{Array.isArray(r)?n[i]=r.slice():ll(r)?n[i]=Qf(ll(n[i])?n[i]:{},r):n[i]=r}),n}var QC=({children:e,className:t,...n})=>Ee.createElement("div",{className:Gh("splide__track",t),...n},Ee.createElement("ul",{className:"splide__list"},e)),Qy=class extends Ee.Component{constructor(){super(...arguments),this.splideRef=Ee.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:t,transition:n}=this.props,{current:r}=this.splideRef;r&&(this.splide=new Wh(r,e),this.bind(this.splide),this.splide.mount(t,n),this.options=Qf({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!qf(this.options,e)&&(this.splide.options=e,this.options=Qf({},e));const t=this.getSlides();XC(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(e){var t;(t=this.splide)==null||t.sync(e)}go(e){var t;(t=this.splide)==null||t.go(e)}getSlides(){var e;if(this.splide){const t=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){g0.forEach(([t,n])=>{const r=this.props[n];typeof r=="function"&&e.on(t,(...i)=>{r(e,...i)})})}omit(e,t){return t.forEach(n=>{Object.prototype.hasOwnProperty.call(e,n)&&delete e[n]}),e}render(){const{className:e,tag:t="div",hasTrack:n=!0,children:r,...i}=this.props;return Ee.createElement(t,{className:Gh("splide",e),ref:this.splideRef,...this.omit(i,["options",...g0.map(o=>o[1])])},n?Ee.createElement(QC,null,r):r)}},Zy=({children:e,className:t,...n})=>Ee.createElement("li",{className:Gh("splide__slide",t),...n},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */const rr=["https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/765bb0b5-dfa1-4882-8992-b9c0f1889532/chaussure-air-max-plus-og-pour-xV03SK.png","https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/21d38052-598b-44f6-a857-123c9f72b015/chaussure-air-force-1-07-pour-GjGXSP.png","https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/c09cf8bc-4d6c-4564-86d6-cc172deab92e/chaussure-dunk-low-pour-kf1bHr.png","https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/5d95fbe4-5c2f-4bb0-b4b0-1711fa232281/chaussure-dunk-low-pour-4kzgHn.png","https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/5b0981ff-45f8-40c3-9372-32430a62aaea/chaussure-dunk-high-pour-lC4X8h.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5bf8e7f4-18c7-4826-9bab-7b9532a5e3b6/chaussure-air-jordan-1-mid-pour-6Pstgd.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bce6584e-5577-47c8-a818-5b5f63f2adba/chaussure-de-skateboard-sb-zoom-blazer-low-pro-gt-5dmrDX.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/af8fc2f0-ea7f-4d94-926d-6fcca8c40112/chaussure-de-skateboard-sb-zoom-blazer-mid-VR988H.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6d180e6-03f6-4e44-8160-668c1ef97c5e/chaussure-de-skateboard-sb-zoom-blazer-mid-Kglg38.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58735fff-8063-47e2-9a94-539fb1175613/chaussure-sb-dunk-high-run-jewels-pour.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7cf4d714-116f-451f-a02a-e94e74ca0f7e/chaussure-de-skateboard-sb-ishod-wair-RG2HJB.png"],ir=["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9197f6c0-2a70-4b67-b0b5-bf8e7bb6c87a/sweat-a-capuche-en-tissu-fleece-sportswear-essential-pour-lxCx15.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cj2wat4kkw2d7rdylcl1/sweat-a-capuche-sportswear-club-fleece-tz1kGP.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7090b804-50d0-40b6-a59b-120d9d9e22ea/sweat-a-capuche-et-zip-oversize-en-jersey-sportswear-pour-xKMm4v.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/26c9ef29-90ca-4f73-9320-effadddbadaa/sweat-a-capuche-en-tissu-fleece-jordan-brooklyn-pour-TvTsNR.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a589ea54-c226-40e9-be51-189eba9d9b30/sweat-shirt-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-vpR1GN.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e1caa74a-8c00-4032-bab5-b1080637a016/sweat-a-capuche-sportswear-club-fleece-pour-XHKcJS.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f68b0838-c25b-434d-9f56-e1d990c77455/sweat-shirt-en-tissu-fleece-sportswear-essential-pour-l7rDPk.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ee0c62aa-c72e-48e6-9e28-d31f81b0f5b2/sweat-a-capuche-en-tissu-fleece-a-zip-jordan-brooklyn-pour-1jBPbp.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/30ea72f2-aee1-4f8a-949b-a967cc66063e/sweat-a-capuche-en-tissu-fleece-jordan-flight-mvp-pour-jdzFVj.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/429e114c-63fc-4505-9ba1-1a07bd2512ac/sweat-a-capuche-en-tissu-fleece-jordan-flight-pour-1GRn1j.png"],Jy=[{page:"Shoes",url:"/shoes"},{page:"Clothes",url:"/clothes"},{page:"About",url:"/about"},{page:"Contact",url:"/contact"}],vu=E.forwardRef((e,t)=>{const{id:n,price:r,images:i,title:o,category:s}=e.item;return N(ZC,{ref:t,children:[S(pt,{to:`/product/${n}`,children:S("div",{className:"card-header",children:S("img",{src:s.name==="Shoes"?rr[Math.floor(Math.random()*rr.length)]:ir[Math.floor(Math.random()*ir.length)],alt:o})})}),N("div",{className:"card-info",children:[S("h3",{children:o}),S("p",{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r/10)})]})]})}),ZC=Fe.article`
  .card-header {
    /* width: 300px;
    height: 225px;
    max-height: 225px;
    border-radius: 5px; */
    width: 100%;
    height: 100%;

    &:hover {
      img {
        filter: brightness(80%);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }
  }

  .card-info {
    padding: 0.5rem;
    h3 {
      font-size: 0.8rem;
      font-weight: 600;
    }

    p {
      font-size: 0.8rem;
      font-weight: 400;
      margin-top: 0.2rem;
    }
  }
`;function ew(e,t){return function(){return e.apply(t,arguments)}}const{toString:tw}=Object.prototype,{getPrototypeOf:Kh}=Object,Yh=(e=>t=>{const n=tw.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Cn=e=>(e=e.toLowerCase(),t=>Yh(t)===e),yu=e=>t=>typeof t===e,{isArray:Gi}=Array,ss=yu("undefined");function JC(e){return e!==null&&!ss(e)&&e.constructor!==null&&!ss(e.constructor)&&or(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const nw=Cn("ArrayBuffer");function e5(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&nw(e.buffer),t}const t5=yu("string"),or=yu("function"),rw=yu("number"),Xh=e=>e!==null&&typeof e=="object",n5=e=>e===!0||e===!1,Ea=e=>{if(Yh(e)!=="object")return!1;const t=Kh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},r5=Cn("Date"),i5=Cn("File"),o5=Cn("Blob"),s5=Cn("FileList"),a5=e=>Xh(e)&&or(e.pipe),l5=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||tw.call(e)===t||or(e.toString)&&e.toString()===t)},u5=Cn("URLSearchParams"),c5=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bs(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Gi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function iw(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const ow=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),sw=e=>!ss(e)&&e!==ow;function Zf(){const{caseless:e}=sw(this)&&this||{},t={},n=(r,i)=>{const o=e&&iw(t,i)||i;Ea(t[o])&&Ea(r)?t[o]=Zf(t[o],r):Ea(r)?t[o]=Zf({},r):Gi(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&bs(arguments[r],n);return t}const f5=(e,t,n,{allOwnKeys:r}={})=>(bs(t,(i,o)=>{n&&or(i)?e[o]=ew(i,n):e[o]=i},{allOwnKeys:r}),e),d5=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),h5=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},p5=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Kh(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},m5=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},g5=e=>{if(!e)return null;if(Gi(e))return e;let t=e.length;if(!rw(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},v5=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Kh(Uint8Array)),y5=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},w5=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},x5=Cn("HTMLFormElement"),S5=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),v0=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_5=Cn("RegExp"),aw=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};bs(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},E5=e=>{aw(e,(t,n)=>{if(or(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(or(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},C5=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Gi(e)?r(e):r(String(e).split(t)),n},P5=()=>{},k5=(e,t)=>(e=+e,Number.isFinite(e)?e:t),gc="abcdefghijklmnopqrstuvwxyz",y0="0123456789",lw={DIGIT:y0,ALPHA:gc,ALPHA_DIGIT:gc+gc.toUpperCase()+y0},b5=(e=16,t=lw.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function T5(e){return!!(e&&or(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const A5=e=>{const t=new Array(10),n=(r,i)=>{if(Xh(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Gi(r)?[]:{};return bs(r,(s,a)=>{const l=n(s,i+1);!ss(l)&&(o[a]=l)}),t[i]=void 0,o}}return r};return n(e,0)},R={isArray:Gi,isArrayBuffer:nw,isBuffer:JC,isFormData:l5,isArrayBufferView:e5,isString:t5,isNumber:rw,isBoolean:n5,isObject:Xh,isPlainObject:Ea,isUndefined:ss,isDate:r5,isFile:i5,isBlob:o5,isRegExp:_5,isFunction:or,isStream:a5,isURLSearchParams:u5,isTypedArray:v5,isFileList:s5,forEach:bs,merge:Zf,extend:f5,trim:c5,stripBOM:d5,inherits:h5,toFlatObject:p5,kindOf:Yh,kindOfTest:Cn,endsWith:m5,toArray:g5,forEachEntry:y5,matchAll:w5,isHTMLForm:x5,hasOwnProperty:v0,hasOwnProp:v0,reduceDescriptors:aw,freezeMethods:E5,toObjectSet:C5,toCamelCase:S5,noop:P5,toFiniteNumber:k5,findKey:iw,global:ow,isContextDefined:sw,ALPHABET:lw,generateString:b5,isSpecCompliantForm:T5,toJSONObject:A5};function ue(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const uw=ue.prototype,cw={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{cw[e]={value:e}});Object.defineProperties(ue,cw);Object.defineProperty(uw,"isAxiosError",{value:!0});ue.from=(e,t,n,r,i,o)=>{const s=Object.create(uw);return R.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ue.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const R5=null;function Jf(e){return R.isPlainObject(e)||R.isArray(e)}function fw(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function w0(e,t,n){return e?e.concat(t).map(function(i,o){return i=fw(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function O5(e){return R.isArray(e)&&!e.some(Jf)}const N5=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function wu(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,x){return!R.isUndefined(x[v])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(R.isDate(h))return h.toISOString();if(!l&&R.isBlob(h))throw new ue("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(h)||R.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,v,x){let y=h;if(h&&!x&&typeof h=="object"){if(R.endsWith(v,"{}"))v=r?v:v.slice(0,-2),h=JSON.stringify(h);else if(R.isArray(h)&&O5(h)||(R.isFileList(h)||R.endsWith(v,"[]"))&&(y=R.toArray(h)))return v=fw(v),y.forEach(function(p,w){!(R.isUndefined(p)||p===null)&&t.append(s===!0?w0([v],w,o):s===null?v:v+"[]",u(p))}),!1}return Jf(h)?!0:(t.append(w0(x,v,o),u(h)),!1)}const f=[],d=Object.assign(N5,{defaultVisitor:c,convertValue:u,isVisitable:Jf});function g(h,v){if(!R.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(h),R.forEach(h,function(y,m){(!(R.isUndefined(y)||y===null)&&i.call(t,y,R.isString(m)?m.trim():m,v,d))===!0&&g(y,v?v.concat(m):[m])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return g(e),t}function x0(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function qh(e,t){this._pairs=[],e&&wu(e,this,t)}const dw=qh.prototype;dw.append=function(t,n){this._pairs.push([t,n])};dw.toString=function(t){const n=t?function(r){return t.call(this,r,x0)}:x0;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function L5(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function hw(e,t,n){if(!t)return e;const r=n&&n.encode||L5,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new qh(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class M5{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const S0=M5,pw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},D5=typeof URLSearchParams<"u"?URLSearchParams:qh,I5=typeof FormData<"u"?FormData:null,z5=typeof Blob<"u"?Blob:null,F5=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),V5=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),qt={isBrowser:!0,classes:{URLSearchParams:D5,FormData:I5,Blob:z5},isStandardBrowserEnv:F5,isStandardBrowserWebWorkerEnv:V5,protocols:["http","https","file","blob","url","data"]};function j5(e,t){return wu(e,new qt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return qt.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function B5(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $5(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function mw(e){function t(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&R.isArray(i)?i.length:s,l?(R.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!R.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&R.isArray(i[s])&&(i[s]=$5(i[s])),!a)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(B5(r),i,n,0)}),n}return null}const U5={"Content-Type":void 0};function H5(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const xu={transitional:pw,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(mw(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return j5(t,this.formSerializer).toString();if((a=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return wu(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),H5(t)):t}],transformResponse:[function(t){const n=this.transitional||xu.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?ue.from(a,ue.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],function(t){xu.headers[t]={}});R.forEach(["post","put","patch"],function(t){xu.headers[t]=R.merge(U5)});const Qh=xu,W5=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),G5=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&W5[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},_0=Symbol("internals");function oo(e){return e&&String(e).trim().toLowerCase()}function Ca(e){return e===!1||e==null?e:R.isArray(e)?e.map(Ca):String(e)}function K5(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Y5(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function vc(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function X5(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function q5(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Su{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,l,u){const c=oo(l);if(!c)throw new Error("header name must be a non-empty string");const f=R.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=Ca(a))}const s=(a,l)=>R.forEach(a,(u,c)=>o(u,c,l));return R.isPlainObject(t)||t instanceof this.constructor?s(t,n):R.isString(t)&&(t=t.trim())&&!Y5(t)?s(G5(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=oo(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return K5(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=oo(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||vc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=oo(s),s){const a=R.findKey(r,s);a&&(!n||vc(r,r[a],a,n))&&(delete r[a],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||vc(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const s=R.findKey(r,o);if(s){n[s]=Ca(i),delete n[o];return}const a=t?X5(o):String(o).trim();a!==o&&delete n[o],n[a]=Ca(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[_0]=this[_0]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=oo(s);r[a]||(q5(i,s),r[a]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}Su.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.freezeMethods(Su.prototype);R.freezeMethods(Su);const mn=Su;function yc(e,t){const n=this||Qh,r=t||n,i=mn.from(r.headers);let o=r.data;return R.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function gw(e){return!!(e&&e.__CANCEL__)}function Ts(e,t,n){ue.call(this,e??"canceled",ue.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(Ts,ue,{__CANCEL__:!0});function Q5(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Z5=qt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,a){const l=[];l.push(n+"="+encodeURIComponent(r)),R.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),R.isString(o)&&l.push("path="+o),R.isString(s)&&l.push("domain="+s),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function J5(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function e3(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function vw(e,t){return e&&!J5(t)?e3(e,t):t}const t3=qt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=R.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function n3(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function r3(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];s||(s=u),n[i]=l,r[i]=u;let f=o,d=0;for(;f!==i;)d+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const g=c&&u-c;return g?Math.round(d*1e3/g):void 0}}function E0(e,t){let n=0;const r=r3(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,l=r(a),u=o<=s;n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-o)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const i3=typeof XMLHttpRequest<"u",o3=i3&&function(e){return new Promise(function(n,r){let i=e.data;const o=mn.from(e.headers).normalize(),s=e.responseType;let a;function l(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}R.isFormData(i)&&(qt.isStandardBrowserEnv||qt.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+h))}const c=vw(e.baseURL,e.url);u.open(e.method.toUpperCase(),hw(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const g=mn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:e,request:u};Q5(function(y){n(y),l()},function(y){r(y),l()},v),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new ue("Request aborted",ue.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new ue("Network Error",ue.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||pw;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new ue(h,v.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,e,u)),u=null},qt.isStandardBrowserEnv){const g=(e.withCredentials||t3(c))&&e.xsrfCookieName&&Z5.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&R.forEach(o.toJSON(),function(h,v){u.setRequestHeader(v,h)}),R.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&s!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",E0(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",E0(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=g=>{u&&(r(!g||g.type?new Ts(null,e,u):g),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const d=n3(c);if(d&&qt.protocols.indexOf(d)===-1){r(new ue("Unsupported protocol "+d+":",ue.ERR_BAD_REQUEST,e));return}u.send(i||null)})},Pa={http:R5,xhr:o3};R.forEach(Pa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const s3={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=R.isString(n)?Pa[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ue(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(R.hasOwnProp(Pa,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!R.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Pa};function wc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ts(null,e)}function C0(e){return wc(e),e.headers=mn.from(e.headers),e.data=yc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),s3.getAdapter(e.adapter||Qh.adapter)(e).then(function(r){return wc(e),r.data=yc.call(e,e.transformResponse,r),r.headers=mn.from(r.headers),r},function(r){return gw(r)||(wc(e),r&&r.response&&(r.response.data=yc.call(e,e.transformResponse,r.response),r.response.headers=mn.from(r.response.headers))),Promise.reject(r)})}const P0=e=>e instanceof mn?e.toJSON():e;function Di(e,t){t=t||{};const n={};function r(u,c,f){return R.isPlainObject(u)&&R.isPlainObject(c)?R.merge.call({caseless:f},u,c):R.isPlainObject(c)?R.merge({},c):R.isArray(c)?c.slice():c}function i(u,c,f){if(R.isUndefined(c)){if(!R.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function o(u,c){if(!R.isUndefined(c))return r(void 0,c)}function s(u,c){if(R.isUndefined(c)){if(!R.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,c)=>i(P0(u),P0(c),!0)};return R.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=l[c]||i,d=f(e[c],t[c],c);R.isUndefined(d)&&f!==a||(n[c]=d)}),n}const yw="1.3.4",Zh={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Zh[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const k0={};Zh.transitional=function(t,n,r){function i(o,s){return"[Axios v"+yw+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new ue(i(s," has been removed"+(n?" in "+n:"")),ue.ERR_DEPRECATED);return n&&!k0[s]&&(k0[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function a3(e,t,n){if(typeof e!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new ue("option "+o+" must be "+l,ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ue("Unknown option "+o,ue.ERR_BAD_OPTION)}}const ed={assertOptions:a3,validators:Zh},bn=ed.validators;class ul{constructor(t){this.defaults=t,this.interceptors={request:new S0,response:new S0}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Di(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&ed.assertOptions(r,{silentJSONParsing:bn.transitional(bn.boolean),forcedJSONParsing:bn.transitional(bn.boolean),clarifyTimeoutError:bn.transitional(bn.boolean)},!1),i!==void 0&&ed.assertOptions(i,{encode:bn.function,serialize:bn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=o&&R.merge(o.common,o[n.method]),s&&R.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=mn.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,f=0,d;if(!l){const h=[C0.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,u),d=h.length,c=Promise.resolve(n);f<d;)c=c.then(h[f++],h[f++]);return c}d=a.length;let g=n;for(f=0;f<d;){const h=a[f++],v=a[f++];try{g=h(g)}catch(x){v.call(this,x);break}}try{c=C0.call(this,g)}catch(h){return Promise.reject(h)}for(f=0,d=u.length;f<d;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=Di(this.defaults,t);const n=vw(t.baseURL,t.url);return hw(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){ul.prototype[t]=function(n,r){return this.request(Di(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(Di(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}ul.prototype[t]=n(),ul.prototype[t+"Form"]=n(!0)});const ka=ul;class Jh{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Ts(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Jh(function(i){t=i}),cancel:t}}}const l3=Jh;function u3(e){return function(n){return e.apply(null,n)}}function c3(e){return R.isObject(e)&&e.isAxiosError===!0}const td={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(td).forEach(([e,t])=>{td[t]=e});const f3=td;function ww(e){const t=new ka(e),n=ew(ka.prototype.request,t);return R.extend(n,ka.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return ww(Di(e,i))},n}const ze=ww(Qh);ze.Axios=ka;ze.CanceledError=Ts;ze.CancelToken=l3;ze.isCancel=gw;ze.VERSION=yw;ze.toFormData=wu;ze.AxiosError=ue;ze.Cancel=ze.CanceledError;ze.all=function(t){return Promise.all(t)};ze.spread=u3;ze.isAxiosError=c3;ze.mergeConfig=Di;ze.AxiosHeaders=mn;ze.formToJSON=e=>mw(R.isHTMLForm(e)?new FormData(e):e);ze.HttpStatusCode=f3;ze.default=ze;const Dr=ze,d3=()=>{const{loading:e,setLoading:t}=E.useContext(ou),[n,r]=E.useState([]),[i,o]=E.useState([]);localStorage.getItem("bestsellers");const s=async()=>{t(!0);try{const l=await(await Dr.get("https://api.escuelajs.co/api/v1/products/?categoryId=4")).data;r(l.slice(0,10)),o(l.slice(0,10)),t(!1),e||localStorage.setItem("bestsellers",JSON.stringify(i))}catch(a){console.log(a),t(!1)}};return E.useEffect(()=>{s()},[]),N(h3,{children:[S("h2",{className:"section__title",children:"Our bestsellers"}),S("div",{className:"bestsellers__container",children:S(Qy,{className:"inner__container",options:{rewind:!0,perPage:4,perMove:1,drag:"free",gap:"1rem",classes:{prev:"splide__arrow--prev bestsellers-class-prev",next:"splide__arrow--next bestsellers-class-next",pagination:"splide__pagination bestsellers-class-pagination",page:"splide__pagination__page bestsellers-class-page"},breakpoints:{1200:{perPage:3,perMove:1,gap:"1rem"},900:{perPage:2,perMove:1,gap:"1rem"},600:{perPage:1,perMove:1,gap:"1rem"}}},children:!e&&n.map(a=>S(Zy,{children:S(vu,{item:a})},a.id))})})]})},h3=Fe.section`
  width: 100vw;
  max-width: 100%;
  padding-top: 2rem;

  .section__title {
    margin: 0 auto;
    display: block;
    width: 80%;
    font-size: 2rem;
    font-weight: 300;
    max-width: 1920px;
  }

  .bestsellers__container {
    overflow-x: hidden;
    width: 80%;
    margin: 2rem auto;
    padding-bottom: 1rem;
    max-width: 1920px;

    .inner__container {
      display: flex;
      width: 100%;

      .splide__arrow--prev.bestsellers-class-prev,
      .splide__arrow--next.bestsellers-class-next {
        background: var(--primary-clr);

        svg {
          fill: white;
        }
      }

      .splide__pagination.bestsellers-class-pagination {
        bottom: -1rem;
      }

      .splide__pagination__page.bestsellers-class-page {
        background: var(--primary-clr);
      }
    }
  }
`,p3="/assets/youshoes-spirit-express1-e77531fe.gif",m3="/assets/youshoes-spirit-express2-d9506b87.gif",g3=()=>N(v3,{children:[S("h2",{className:"section__title",children:"Express yourself without fear."}),N("div",{className:"heroSpirit__container",children:[N("div",{className:"hero__card",children:[S("img",{src:p3,alt:""}),N("div",{className:"hero__card_info",children:[S("h3",{children:"Your style, your look"}),N("p",{children:["The ",S("span",{children:"You Shoes"})," spirit is about expressing yourself without fear, making your voice heard and showing the world who you really are."]})]})]}),N("div",{className:"hero__card",children:[S("img",{src:m3,alt:""}),N("div",{className:"hero__card_info",children:[S("h3",{children:"Your style, your look"}),N("p",{children:["The ",S("span",{children:"You Shoes"})," spirit is about expressing yourself without fear, making your voice heard and showing the world who you really are."]})]})]})]})]}),v3=Fe.section`
  width: 100vw;
  max-width: 100%;
  padding: 6rem 0;
  background: var(--header-clr);

  .section__title {
    margin: 0 auto;
    display: block;
    width: 80%;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
  }

  .heroSpirit__container {
    width: 80%;
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .hero__card {
      border-radius: 5px;
      position: relative;

      img {
        border-radius: 5px;
        width: 100%;
        transition: all 0.5s ease-in-out;
      }

      .hero__card_info {
        position: absolute;
        bottom: 0;
        padding: 1rem;
        transition: all 0.5s ease-in-out;

        h3 {
          font-weight: 400;
          font-size: 1.2rem;
        }

        p {
          font-size: 0.7rem;
        }
      }

      &:hover {
        img {
          filter: brightness(40%);
        }

        .hero__card_info {
          color: white;
        }
      }
    }
  }

  @media (max-width: 75em) {
    .section__title {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 50em) {
    .section__title {
      font-size: 2.5rem;
    }

    .heroSpirit__container {
      flex-direction: column;
    }
  }
`,y3=()=>{const[e,t]=E.useState(!0),[n,r]=E.useState([]),[i,o]=E.useState([]);E.useState([]),localStorage.getItem("localClothes"),localStorage.getItem("localShoes");const s=Zv(),a=async()=>{t(!0);try{const u=await(await Dr.get("https://api.escuelajs.co/api/v1/products/?categoryId=1")).data;r(u);const f=await(await Dr.get("https://api.escuelajs.co/api/v1/products/?categoryId=4")).data;o(f),t(!1)}catch(l){console.log(l),t(!1)}};return E.useEffect(()=>{a()},[]),N(w3,{children:[S("h2",{className:"section__title",children:"Our Catalog"}),!e&&S(zc,{children:N("div",{className:"catalogpreview__container",children:[S("div",{className:"preview-container",children:N("div",{className:"main-item",children:[S("img",{src:ir[Math.floor(Math.random()*ir.length)],alt:n[0].title,className:"main-item-preview"}),S("button",{className:"catalog-btn",onClick:()=>s("/clothes"),children:"Clothes"})]})}),S("div",{className:"preview-container",children:N("div",{className:"main-item",children:[S("img",{src:rr[Math.floor(Math.random()*rr.length)],alt:i[0].title,className:"main-item-preview"}),S("button",{className:"catalog-btn",onClick:()=>s("/shoes"),children:"Shoes"})]})})]})})]})},w3=Fe.section`
  width: 100vw;
  max-width: 100%;
  padding-top: 2rem;
  padding-bottom: 4rem;

  .section__title {
    margin: 0 auto;
    display: block;
    width: 80%;
    font-size: 2rem;
    font-weight: 300;
    max-width: 1920px;
  }

  .catalogpreview__container {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-evenly;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    max-width: 1920px;

    .preview-container {
      width: 100%;
      /* gap: 1rem;
      display: flex;
      align-items: center;
      justify-content: center; */

      background: var(--header-clr);
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

      .main-item {
        width: 100%;
        height: 300px;

        position: relative;
        display: flex;
        align-items: center;

        &:hover {
          img {
            filter: brightness(50%);
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
          transition: all 0.3s ease-in-out;
        }

        .catalog-btn {
          position: absolute;
          margin: 0 auto;
          left: 50%;
          color: black;
          transform: translateX(-50%);
          padding: 1rem 3rem;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          font-weight: 600;
          background: white;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
            rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
          transition: all 0.3s ease-in-out;
          font-size: 1rem;

          &:hover {
            background: var(--secondary-clr);
            color: var(--header-clr);
          }
        }
      }

      .side-items-preview {
        width: 400px;
        height: 100px;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          object-fit: contain;
        }
      }
    }
  }

  @media (max-width: 31.25em) {
    .catalogpreview__container {
      flex-direction: column;
    }
  }
`,xw=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),_u=E.createContext({}),Eu=E.createContext(null),Cu=typeof document<"u",cl=Cu?E.useLayoutEffect:E.useEffect,Sw=E.createContext({strict:!1});function x3(e,t,n,r){const{visualElement:i}=E.useContext(_u),o=E.useContext(Sw),s=E.useContext(Eu),a=E.useContext(xw).reducedMotion,l=E.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;return E.useInsertionEffect(()=>{u&&u.update(n,s)}),cl(()=>{u&&u.render()}),E.useEffect(()=>{u&&u.updateFeatures()}),(window.HandoffAppearAnimations?cl:E.useEffect)(()=>{u&&u.animationState&&u.animationState.animateChanges()}),u}function fi(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function S3(e,t,n){return E.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):fi(n)&&(n.current=r))},[t])}function as(e){return typeof e=="string"||Array.isArray(e)}function Pu(e){return typeof e=="object"&&typeof e.start=="function"}const ep=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tp=["initial",...ep];function ku(e){return Pu(e.animate)||tp.some(t=>as(e[t]))}function _w(e){return!!(ku(e)||e.variants)}function _3(e,t){if(ku(e)){const{initial:n,animate:r}=e;return{initial:n===!1||as(n)?n:void 0,animate:as(r)?r:void 0}}return e.inherit!==!1?t:{}}function E3(e){const{initial:t,animate:n}=_3(e,E.useContext(_u));return E.useMemo(()=>({initial:t,animate:n}),[b0(t),b0(n)])}function b0(e){return Array.isArray(e)?e.join(" "):e}const T0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ls={};for(const e in T0)ls[e]={isEnabled:t=>T0[e].some(n=>!!t[n])};function C3(e){for(const t in e)ls[t]={...ls[t],...e[t]}}function np(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const ko={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let P3=1;function k3(){return np(()=>{if(ko.hasEverUpdated)return P3++})}const rp=E.createContext({}),Ew=E.createContext({}),b3=Symbol.for("motionComponentSymbol");function T3({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&C3(e);function o(a,l){let u;const c={...E.useContext(xw),...a,layoutId:A3(a)},{isStatic:f}=c,d=E3(a),g=f?void 0:k3(),h=r(a,f);if(!f&&Cu){d.visualElement=x3(i,h,c,t);const v=E.useContext(Ew),x=E.useContext(Sw).strict;d.visualElement&&(u=d.visualElement.loadFeatures(c,x,e,g,v))}return E.createElement(_u.Provider,{value:d},u&&d.visualElement?E.createElement(u,{visualElement:d.visualElement,...c}):null,n(i,a,g,S3(h,d.visualElement,l),h,f,d.visualElement))}const s=E.forwardRef(o);return s[b3]=i,s}function A3({layoutId:e}){const t=E.useContext(rp).id;return t&&e!==void 0?t+"-"+e:e}function R3(e){function t(r,i={}){return T3(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const O3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ip(e){return typeof e!="string"||e.includes("-")?!1:!!(O3.indexOf(e)>-1||/[A-Z]/.test(e))}const fl={};function N3(e){Object.assign(fl,e)}const bu=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$r=new Set(bu);function Cw(e,{layout:t,layoutId:n}){return $r.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!fl[e]||e==="opacity")}const mt=e=>!!(e&&e.getVelocity),L3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},M3=bu.length;function D3(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<M3;s++){const a=bu[s];if(e[a]!==void 0){const l=L3[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Pw=e=>t=>typeof t=="string"&&t.startsWith(e),kw=Pw("--"),nd=Pw("var(--"),I3=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ir=(e,t,n)=>Math.min(Math.max(n,e),t),Ur={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},bo={...Ur,transform:e=>Ir(0,1,e)},ea={...Ur,default:1},To=e=>Math.round(e*1e5)/1e5,us=/(-)?([\d]*\.?[\d])+/g,rd=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,z3=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function As(e){return typeof e=="string"}const Rs=e=>({test:t=>As(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),An=Rs("deg"),Jt=Rs("%"),J=Rs("px"),F3=Rs("vh"),V3=Rs("vw"),A0={...Jt,parse:e=>Jt.parse(e)/100,transform:e=>Jt.transform(e*100)},R0={...Ur,transform:Math.round},bw={borderWidth:J,borderTopWidth:J,borderRightWidth:J,borderBottomWidth:J,borderLeftWidth:J,borderRadius:J,radius:J,borderTopLeftRadius:J,borderTopRightRadius:J,borderBottomRightRadius:J,borderBottomLeftRadius:J,width:J,maxWidth:J,height:J,maxHeight:J,size:J,top:J,right:J,bottom:J,left:J,padding:J,paddingTop:J,paddingRight:J,paddingBottom:J,paddingLeft:J,margin:J,marginTop:J,marginRight:J,marginBottom:J,marginLeft:J,rotate:An,rotateX:An,rotateY:An,rotateZ:An,scale:ea,scaleX:ea,scaleY:ea,scaleZ:ea,skew:An,skewX:An,skewY:An,distance:J,translateX:J,translateY:J,translateZ:J,x:J,y:J,z:J,perspective:J,transformPerspective:J,opacity:bo,originX:A0,originY:A0,originZ:J,zIndex:R0,fillOpacity:bo,strokeOpacity:bo,numOctaves:R0};function op(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const f in t){const d=t[f];if(kw(f)){o[f]=d;continue}const g=bw[f],h=I3(d,g);if($r.has(f)){if(l=!0,s[f]=h,!c)continue;d!==(g.default||0)&&(c=!1)}else f.startsWith("origin")?(u=!0,a[f]=h):i[f]=h}if(t.transform||(l||r?i.transform=D3(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:d="50%",originZ:g=0}=a;i.transformOrigin=`${f} ${d} ${g}`}}const sp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Tw(e,t,n){for(const r in t)!mt(t[r])&&!Cw(r,n)&&(e[r]=t[r])}function j3({transformTemplate:e},t,n){return E.useMemo(()=>{const r=sp();return op(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function B3(e,t,n){const r=e.style||{},i={};return Tw(i,r,e),Object.assign(i,j3(e,t,n)),e.transformValues?e.transformValues(i):i}function $3(e,t,n){const r={},i=B3(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const U3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function dl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||U3.has(e)}let Aw=e=>!dl(e);function H3(e){e&&(Aw=t=>t.startsWith("on")?!dl(t):e(t))}try{H3(require("@emotion/is-prop-valid").default)}catch{}function W3(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Aw(i)||n===!0&&dl(i)||!t&&!dl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function O0(e,t,n){return typeof e=="string"?e:J.transform(t+n*e)}function G3(e,t,n){const r=O0(t,e.x,e.width),i=O0(n,e.y,e.height);return`${r} ${i}`}const K3={offset:"stroke-dashoffset",array:"stroke-dasharray"},Y3={offset:"strokeDashoffset",array:"strokeDasharray"};function X3(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?K3:Y3;e[o.offset]=J.transform(-r);const s=J.transform(t),a=J.transform(n);e[o.array]=`${s} ${a}`}function ap(e,{attrX:t,attrY:n,originX:r,originY:i,pathLength:o,pathSpacing:s=1,pathOffset:a=0,...l},u,c,f){if(op(e,l,u,f),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:g,dimensions:h}=e;d.transform&&(h&&(g.transform=d.transform),delete d.transform),h&&(r!==void 0||i!==void 0||g.transform)&&(g.transformOrigin=G3(h,r!==void 0?r:.5,i!==void 0?i:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),o!==void 0&&X3(d,o,s,a,!1)}const Rw=()=>({...sp(),attrs:{}}),lp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function q3(e,t,n,r){const i=E.useMemo(()=>{const o=Rw();return ap(o,t,{enableHardwareAcceleration:!1},lp(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Tw(o,e.style,e),i.style={...o,...i.style}}return i}function Q3(e=!1){return(n,r,i,o,{latestValues:s},a)=>{const u=(ip(n)?q3:$3)(r,s,a,n),f={...W3(r,typeof n=="string",e),...u,ref:o},{children:d}=r,g=E.useMemo(()=>mt(d)?d.get():d,[d]);return i&&(f["data-projection-id"]=i),E.createElement(n,{...f,children:g})}}const up=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function Ow(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Nw=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Lw(e,t,n,r){Ow(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Nw.has(i)?i:up(i),t.attrs[i])}function cp(e,t){const{style:n}=e,r={};for(const i in n)(mt(n[i])||t.style&&mt(t.style[i])||Cw(i,e))&&(r[i]=n[i]);return r}function Mw(e,t){const n=cp(e,t);for(const r in e)if(mt(e[r])||mt(t[r])){const i=r==="x"||r==="y"?"attr"+r.toUpperCase():r;n[i]=e[r]}return n}function fp(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}const hl=e=>Array.isArray(e),Z3=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),J3=e=>hl(e)?e[e.length-1]||0:e;function ba(e){const t=mt(e)?e.get():e;return Z3(t)?t.toValue():t}function eP({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:tP(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Dw=e=>(t,n)=>{const r=E.useContext(_u),i=E.useContext(Eu),o=()=>eP(e,t,r,i);return n?o():np(o)};function tP(e,t,n,r){const i={},o=r(e,{});for(const d in o)i[d]=ba(o[d]);let{initial:s,animate:a}=e;const l=ku(e),u=_w(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const f=c?a:s;return f&&typeof f!="boolean"&&!Pu(f)&&(Array.isArray(f)?f:[f]).forEach(g=>{const h=fp(e,g);if(!h)return;const{transitionEnd:v,transition:x,...y}=h;for(const m in y){let p=y[m];if(Array.isArray(p)){const w=c?p.length-1:0;p=p[w]}p!==null&&(i[m]=p)}for(const m in v)i[m]=v[m]}),i}const nP={useVisualState:Dw({scrapeMotionValuesFromProps:Mw,createRenderState:Rw,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}ap(n,r,{enableHardwareAcceleration:!1},lp(t.tagName),e.transformTemplate),Lw(t,n)}})},rP={useVisualState:Dw({scrapeMotionValuesFromProps:cp,createRenderState:sp})};function iP(e,{forwardMotionProps:t=!1},n,r){return{...ip(e)?nP:rP,preloadedFeatures:n,useRender:Q3(t),createVisualElement:r,Component:e}}function dn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Iw=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Tu(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const oP=e=>t=>Iw(t)&&e(t,Tu(t));function gn(e,t,n,r){return dn(e,t,oP(n),r)}const sP=(e,t)=>n=>t(e(n)),Qn=(...e)=>e.reduce(sP);function zw(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const N0=zw("dragHorizontal"),L0=zw("dragVertical");function Fw(e){let t=!1;if(e==="y")t=L0();else if(e==="x")t=N0();else{const n=N0(),r=L0();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Vw(){const e=Fw(!0);return e?(e(),!1):!0}class pr{constructor(t){this.isMounted=!1,this.node=t}update(){}}function aP(e){let t=[],n=[],r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const f=c&&i,d=f?t:n;return u&&s.add(l),d.indexOf(l)===-1&&(d.push(l),f&&i&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),s.has(c)&&(a.schedule(c),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const et={delta:0,timestamp:0,isProcessing:!1},lP=40;let id=!0,cs=!1;const Os=["read","update","preRender","render","postRender"],Au=Os.reduce((e,t)=>(e[t]=aP(()=>cs=!0),e),{}),xe=Os.reduce((e,t)=>{const n=Au[t];return e[t]=(r,i=!1,o=!1)=>(cs||cP(),n.schedule(r,i,o)),e},{}),sr=Os.reduce((e,t)=>(e[t]=Au[t].cancel,e),{}),xc=Os.reduce((e,t)=>(e[t]=()=>Au[t].process(et),e),{}),uP=e=>Au[e].process(et),jw=e=>{cs=!1,et.delta=id?1e3/60:Math.max(Math.min(e-et.timestamp,lP),1),et.timestamp=e,et.isProcessing=!0,Os.forEach(uP),et.isProcessing=!1,cs&&(id=!1,requestAnimationFrame(jw))},cP=()=>{cs=!0,id=!0,et.isProcessing||requestAnimationFrame(jw)};function M0(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.type==="touch"||Vw())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&xe.update(()=>a[r](o,s))};return gn(e.current,n,i,{passive:!e.getProps()[r]})}class fP extends pr{mount(){this.unmount=Qn(M0(this.node,!0),M0(this.node,!1))}unmount(){}}class dP extends pr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qn(dn(this.node.current,"focus",()=>this.onFocus()),dn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Bw=(e,t)=>t?e===t?!0:Bw(e,t.parentElement):!1,Ke=e=>e;function Sc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Tu(n))}class hP extends pr{constructor(){super(...arguments),this.removeStartListeners=Ke,this.removeEndListeners=Ke,this.removeAccessibleListeners=Ke,this.startPointerPress=(t,n)=>{if(this.removeEndListeners(),this.isPressing)return;const r=this.node.getProps(),o=gn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c}=this.node.getProps();xe.update(()=>{Bw(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=gn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Qn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Sc("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&xe.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=dn(this.node.current,"keyup",s),Sc("down",(a,l)=>{this.startPress(a,l)})},n=dn(this.node.current,"keydown",t),r=()=>{this.isPressing&&Sc("cancel",(o,s)=>this.cancelPress(o,s))},i=dn(this.node.current,"blur",r);this.removeAccessibleListeners=Qn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&xe.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Vw()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&xe.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=gn(this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=dn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Qn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const od=new WeakMap,_c=new WeakMap,pP=e=>{const t=od.get(e.target);t&&t(e)},mP=e=>{e.forEach(pP)};function gP({root:e,...t}){const n=e||document;_c.has(n)||_c.set(n,{});const r=_c.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(mP,{root:e,...t})),r[i]}function vP(e,t,n){const r=gP(t);return od.set(e,n),r.observe(e),()=>{od.delete(e),r.unobserve(e)}}const yP={some:0,all:1};class wP extends pr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:yP[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return vP(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(xP(t,n))&&this.startObserver()}unmount(){}}function xP({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const SP={inView:{Feature:wP},tap:{Feature:hP},focus:{Feature:dP},hover:{Feature:fP}};function $w(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function _P(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function EP(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ru(e,t,n){const r=e.getProps();return fp(r,t,n!==void 0?n:r.custom,_P(e),EP(e))}const CP="framerAppearId",PP="data-"+up(CP);let kP=Ke,pl=Ke;const Zn=e=>e*1e3,zr=e=>e/1e3,bP={current:!1},Uw=e=>Array.isArray(e)&&typeof e[0]=="number";function Hw(e){return!!(!e||typeof e=="string"&&Ww[e]||Uw(e)||Array.isArray(e)&&e.every(Hw))}const ho=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ww={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ho([0,.65,.55,1]),circOut:ho([.55,0,1,.45]),backIn:ho([.31,.01,.66,-.59]),backOut:ho([.33,1.53,.69,.99])};function Gw(e){if(e)return Uw(e)?ho(e):Array.isArray(e)?e.map(Gw):Ww[e]}function TP(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=Gw(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}const D0={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},Ec={},Kw={};for(const e in D0)Kw[e]=()=>(Ec[e]===void 0&&(Ec[e]=D0[e]()),Ec[e]);function AP(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Yw=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,RP=1e-7,OP=12;function NP(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Yw(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>RP&&++a<OP);return s}function Ns(e,t,n,r){if(e===t&&n===r)return Ke;const i=o=>NP(o,0,1,e,n);return o=>o===0||o===1?o:Yw(i(o),t,r)}const LP=Ns(.42,0,1,1),MP=Ns(0,0,.58,1),Xw=Ns(.42,0,.58,1),dp=(e,t)=>n=>!!(As(n)&&z3.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),qw=(e,t,n)=>r=>{if(!As(r))return r;const[i,o,s,a]=r.match(us);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},DP=e=>Ir(0,255,e),Cc={...Ur,transform:e=>Math.round(DP(e))},Cr={test:dp("rgb","red"),parse:qw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Cc.transform(e)+", "+Cc.transform(t)+", "+Cc.transform(n)+", "+To(bo.transform(r))+")"};function IP(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const sd={test:dp("#"),parse:IP,transform:Cr.transform},di={test:dp("hsl","hue"),parse:qw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Jt.transform(To(t))+", "+Jt.transform(To(n))+", "+To(bo.transform(r))+")"},nt={test:e=>Cr.test(e)||sd.test(e)||di.test(e),parse:e=>Cr.test(e)?Cr.parse(e):di.test(e)?di.parse(e):sd.parse(e),transform:e=>As(e)?e:e.hasOwnProperty("red")?Cr.transform(e):di.transform(e)},_e=(e,t,n)=>-n*e+n*t+e;function Pc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function zP({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Pc(l,a,e+1/3),o=Pc(l,a,e),s=Pc(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const kc=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},FP=[sd,Cr,di],VP=e=>FP.find(t=>t.test(e));function I0(e){const t=VP(e);let n=t.parse(e);return t===di&&(n=zP(n)),n}const Qw=(e,t)=>{const n=I0(e),r=I0(t),i={...n};return o=>(i.red=kc(n.red,r.red,o),i.green=kc(n.green,r.green,o),i.blue=kc(n.blue,r.blue,o),i.alpha=_e(n.alpha,r.alpha,o),Cr.transform(i))},Zw="${c}",Jw="${n}";function jP(e){var t,n;return isNaN(e)&&As(e)&&(((t=e.match(us))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(rd))===null||n===void 0?void 0:n.length)||0)>0}function ml(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0,r=0;const i=e.match(rd);i&&(n=i.length,e=e.replace(rd,Zw),t.push(...i.map(nt.parse)));const o=e.match(us);return o&&(r=o.length,e=e.replace(us,Jw),t.push(...o.map(Ur.parse))),{values:t,numColors:n,numNumbers:r,tokenised:e}}function ex(e){return ml(e).values}function tx(e){const{values:t,numColors:n,tokenised:r}=ml(e),i=t.length;return o=>{let s=r;for(let a=0;a<i;a++)s=s.replace(a<n?Zw:Jw,a<n?nt.transform(o[a]):To(o[a]));return s}}const BP=e=>typeof e=="number"?0:e;function $P(e){const t=ex(e);return tx(e)(t.map(BP))}const ar={test:jP,parse:ex,createTransformer:tx,getAnimatableNone:$P};function nx(e,t){return typeof e=="number"?n=>_e(e,t,n):nt.test(e)?Qw(e,t):ix(e,t)}const rx=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>nx(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},UP=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=nx(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},ix=(e,t)=>{const n=ar.createTransformer(t),r=ml(e),i=ml(t);return r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Qn(rx(r.values,i.values),n):s=>`${s>0?t:e}`},fs=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},z0=(e,t)=>n=>_e(e,t,n);function HP(e){return typeof e=="number"?z0:typeof e=="string"?nt.test(e)?Qw:ix:Array.isArray(e)?rx:typeof e=="object"?UP:z0}function WP(e,t,n){const r=[],i=n||HP(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]:t;a=Qn(l,a)}r.push(a)}return r}function ox(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(pl(o===t.length),pl(!r||!Array.isArray(r)||r.length===o-1),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=WP(t,r,i),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const f=fs(e[c],e[c+1],u);return s[c](f)};return n?u=>l(Ir(e[0],e[o-1],u)):l}function GP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=fs(0,t,r);e.push(_e(n,1,i))}}function KP(e){const t=[0];return GP(t,e.length-1),t}function YP(e,t){return e.map(n=>n*t)}const sx=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ax=e=>t=>1-e(1-t),lx=e=>1-Math.sin(Math.acos(e)),hp=ax(lx),XP=sx(hp),ux=Ns(.33,1.53,.69,.99),pp=ax(ux),qP=sx(pp),QP=e=>(e*=2)<1?.5*pp(e):.5*(2-Math.pow(2,-10*(e-1))),ZP={linear:Ke,easeIn:LP,easeInOut:Xw,easeOut:MP,circIn:lx,circInOut:XP,circOut:hp,backIn:pp,backInOut:qP,backOut:ux,anticipate:QP},F0=e=>{if(Array.isArray(e)){pl(e.length===4);const[t,n,r,i]=e;return Ns(t,n,r,i)}else if(typeof e=="string")return ZP[e];return e},JP=e=>Array.isArray(e)&&typeof e[0]!="number";function ek(e,t){return e.map(()=>t||Xw).splice(0,e.length-1)}function gl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=JP(r)?r.map(F0):F0(r),o={done:!1,value:t[0]},s=YP(n&&n.length===t.length?n:KP(t),e),a=ox(s,t,{ease:Array.isArray(i)?i:ek(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function cx(e,t){return t?e*(1e3/t):0}const tk=5;function fx(e,t,n){const r=Math.max(t-tk,0);return cx(n-e(r),t-r)}const bc=.001,nk=.01,V0=10,rk=.05,ik=1;function ok({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;kP(e<=Zn(V0));let s=1-t;s=Ir(rk,ik,s),e=Ir(nk,V0,zr(e)),s<1?(i=u=>{const c=u*s,f=c*e,d=c-n,g=ad(u,s),h=Math.exp(-f);return bc-d/g*h},o=u=>{const f=u*s*e,d=f*n+n,g=Math.pow(s,2)*Math.pow(u,2)*e,h=Math.exp(-f),v=ad(Math.pow(u,2),s);return(-i(u)+bc>0?-1:1)*((d-g)*h)/v}):(i=u=>{const c=Math.exp(-u*e),f=(u-n)*e+1;return-bc+c*f},o=u=>{const c=Math.exp(-u*e),f=(n-u)*(e*e);return c*f});const a=5/e,l=ak(i,o,a);if(e=Zn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const sk=12;function ak(e,t,n){let r=n;for(let i=1;i<sk;i++)r=r-e(r)/t(r);return r}function ad(e,t){return e*Math.sqrt(1-t*t)}const lk=["duration","bounce"],uk=["stiffness","damping","mass"];function j0(e,t){return t.some(n=>e[n]!==void 0)}function ck(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!j0(e,uk)&&j0(e,lk)){const n=ok(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function dx({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,velocity:c,duration:f,isResolvedFromDuration:d}=ck(r),g=c?-zr(c):0,h=l/(2*Math.sqrt(a*u)),v=o-i,x=zr(Math.sqrt(a/u)),y=Math.abs(v)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let m;if(h<1){const p=ad(x,h);m=w=>{const C=Math.exp(-h*x*w);return o-C*((g+h*x*v)/p*Math.sin(p*w)+v*Math.cos(p*w))}}else if(h===1)m=p=>o-Math.exp(-x*p)*(v+(g+x*v)*p);else{const p=x*Math.sqrt(h*h-1);m=w=>{const C=Math.exp(-h*x*w),b=Math.min(p*w,300);return o-C*((g+h*x*v)*Math.sinh(b)+p*v*Math.cosh(b))/p}}return{calculatedDuration:d&&f||null,next:p=>{const w=m(p);if(d)s.done=p>=f;else{let C=g;p!==0&&(h<1?C=fx(m,p,w):C=0);const b=Math.abs(C)<=n,P=Math.abs(o-w)<=t;s.done=b&&P}return s.value=s.done?o:w,s}}}function B0({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=e[0],d={done:!1,value:f},g=k=>a!==void 0&&k<a||l!==void 0&&k>l,h=k=>a===void 0?l:l===void 0||Math.abs(a-k)<Math.abs(l-k)?a:l;let v=n*t;const x=f+v,y=s===void 0?x:s(x);y!==x&&(v=y-f);const m=k=>-v*Math.exp(-k/r),p=k=>y+m(k),w=k=>{const B=m(k),L=p(k);d.done=Math.abs(B)<=u,d.value=d.done?y:L};let C,b;const P=k=>{g(d.value)&&(C=k,b=dx({keyframes:[d.value,h(d.value)],velocity:fx(p,k,d.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:k=>{let B=!1;return!b&&C===void 0&&(B=!0,w(k),P(k)),C!==void 0&&k>C?b.next(k-C):(!B&&w(k),d)}}}const fk=e=>{const t=({timestamp:n})=>e(n);return{start:()=>xe.update(t,!0),stop:()=>sr.update(t),now:()=>et.isProcessing?et.timestamp:performance.now()}},dk={decay:B0,inertia:B0,tween:gl,keyframes:gl,spring:dx},hk=2e4;function pk(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<hk;)t+=n,r=e.next(t);return t}function vl({autoplay:e=!0,delay:t=0,driver:n=fk,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:f,...d}){let g=1,h=!1,v,x;const y=()=>{v&&v(),x=new Promise(D=>{v=D})};y();let m;const p=dk[i]||gl;let w;p!==gl&&typeof r[0]!="number"&&(w=ox([0,100],r,{clamp:!1}),r=[0,100]);const C=p({...d,keyframes:r});let b;a==="mirror"&&(b=p({...d,keyframes:[...r].reverse(),velocity:-(d.velocity||0)}));let P="idle",k=null,B=null,L=null;C.calculatedDuration===null&&o&&(C.calculatedDuration=pk(C));const{calculatedDuration:I}=C;let F=1/0,U=1/0;I!==null&&(F=I+s,U=F*(o+1)-s);let K=0;const G=D=>{if(B===null)return;k!==null?K=k:K=(D-B)*g,K=Math.max(K-t,0),P==="finished"&&k===null&&(K=U);let O=K,$=C;if(o){const Y=K/F;let z=Math.floor(Y),Q=Y%1;!Q&&Y>=1&&(Q=1),Q===1&&z--,z=Math.min(z,o+1);const Z=!!(z%2);Z&&(a==="reverse"?(Q=1-Q,s&&(Q-=s/F)):a==="mirror"&&($=b));let le=Ir(0,1,Q);K>U&&(le=a==="reverse"&&Z?1:0),O=le*F}const j=$.next(O);w&&(j.value=w(j.value));let{done:q}=j;I!==null&&(q=K>=U);const _=k===null&&(P==="finished"||P==="running"&&q||g<0&&K<=0);return f&&f(j.value),_&&T(),j},ie=()=>{m&&m.stop(),m=void 0},ee=()=>{P="idle",ie(),y(),B=L=null},T=()=>{P="finished",c&&c(),ie(),y()},M=()=>{if(h)return;m||(m=n(G));const D=m.now();l&&l(),P="running",k!==null?B=D-k:B||(B=D),L=B,k=null,m.start()};e&&M();const A={then(D,O){return x.then(D,O)},get time(){return zr(K)},set time(D){D=Zn(D),K=D,k!==null||!m||g===0?k=D:B=m.now()-D/g},get speed(){return g},set speed(D){D===g||!m||(g=D,A.time=zr(K))},get state(){return P},play:M,pause:()=>{P="paused",k=K},stop:()=>{h=!0,P!=="idle"&&(P="idle",u&&u(),ee())},cancel:()=>{L!==null&&G(L),ee()},complete:()=>{P="finished"},sample:D=>(B=0,G(D))};return A}const mk=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ta=10,gk=2e4,vk=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Hw(t.ease);function yk(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Kw.waapi()&&mk.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l;const u=()=>{l=new Promise(v=>{a=v})};u();let{keyframes:c,duration:f=300,ease:d}=i;if(vk(t,i)){const v=vl({...i,repeat:0,delay:0});let x={done:!1,value:c[0]};const y=[];let m=0;for(;!x.done&&m<gk;)x=v.sample(m),y.push(x.value),m+=ta;c=y,f=m-ta,d="linear"}const g=TP(e.owner.current,t,c,{...i,duration:f,ease:d}),h=()=>{xe.update(()=>g.cancel()),a(),u()};return g.onfinish=()=>{e.set(AP(c,i)),r&&r(),h()},{then(v,x){return l.then(v,x)},get time(){return zr(g.currentTime||0)},set time(v){g.currentTime=Zn(v)},get speed(){return g.playbackRate},set speed(v){g.playbackRate=v},play:()=>{s||g.play()},pause:()=>g.pause(),stop:()=>{if(s=!0,g.playState==="idle")return;const{currentTime:v}=g;if(v){const x=vl({...i,autoplay:!1});e.setWithVelocity(x.sample(v-ta).value,x.sample(v).value,ta)}h()},complete:()=>g.finish(),cancel:h}}function wk({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,play:Ke,pause:Ke,stop:Ke,then:o=>(o(),Promise.resolve()),cancel:Ke,complete:Ke});return t?vl({keyframes:[0,1],duration:t,onComplete:i}):i()}const xk={type:"spring",stiffness:500,damping:25,restSpeed:10},Sk=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),_k={type:"keyframes",duration:.8},Ek={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ck=(e,{keyframes:t})=>t.length>2?_k:$r.has(e)?e.startsWith("scale")?Sk(t[1]):xk:Ek,ld=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&ar.test(t)&&!t.startsWith("url(")),Pk=new Set(["brightness","contrast","saturate","opacity"]);function kk(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(us)||[];if(!r)return e;const i=n.replace(r,"");let o=Pk.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const bk=/([a-z-]*)\(.*?\)/g,ud={...ar,getAnimatableNone:e=>{const t=e.match(bk);return t?t.map(kk).join(" "):e}},Tk={...bw,color:nt,backgroundColor:nt,outlineColor:nt,fill:nt,stroke:nt,borderColor:nt,borderTopColor:nt,borderRightColor:nt,borderBottomColor:nt,borderLeftColor:nt,filter:ud,WebkitFilter:ud},mp=e=>Tk[e];function gp(e,t){let n=mp(e);return n!==ud&&(n=ar),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function Ak({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function $0(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function U0(e){return typeof e=="number"?0:gp("",e)}function hx(e,t){return e[t]||e.default||e}function Rk(e,t,n,r){const i=ld(t,n);let o=r.from!==void 0?r.from:e.get();return o==="none"&&i&&typeof n=="string"?o=gp(t,n):$0(o)&&typeof n=="string"?o=U0(n):!Array.isArray(n)&&$0(n)&&typeof o=="string"&&(n=U0(o)),Array.isArray(n)?(n[0]===null&&(n[0]=o),n):[o,n]}const vp=(e,t,n,r={})=>i=>{const o=hx(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Zn(s);const l=Rk(t,e,n,o),u=l[0],c=l[l.length-1],f=ld(e,u),d=ld(e,c);let g={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:h=>{t.set(h),o.onUpdate&&o.onUpdate(h)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(!f||!d||bP.current||o.type===!1)return wk(g);if(Ak(o)||(g={...g,...Ck(e,g)}),g.duration&&(g.duration=Zn(g.duration)),g.repeatDelay&&(g.repeatDelay=Zn(g.repeatDelay)),t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const h=yk(t,e,g);if(h)return h}return vl(g)};function yl(e){return!!(mt(e)&&e.add)}const Ok=e=>/^\-?\d*\.?\d+$/.test(e),Nk=e=>/^0[^.\s]+$/.test(e);function yp(e,t){e.indexOf(t)===-1&&e.push(t)}function wp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class xp{constructor(){this.subscriptions=[]}add(t){return yp(this.subscriptions,t),()=>wp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Lk=e=>!isNaN(parseFloat(e));class Mk{constructor(t,n={}){this.version="10.8.5",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=et;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,xe.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>xe.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Lk(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new xp);const r=this.events[t].add(n);return t==="change"?()=>{r(),xe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?cx(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ii(e,t){return new Mk(e,t)}const px=e=>t=>t.test(e),Dk={test:e=>e==="auto",parse:e=>e},mx=[Ur,J,Jt,An,V3,F3,Dk],so=e=>mx.find(px(e)),Ik=[...mx,nt,ar],zk=e=>Ik.find(px(e));function Fk(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ii(n))}function Vk(e,t){const n=Ru(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=J3(o[s]);Fk(e,s,a)}}function jk(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),c!=null&&(typeof c=="string"&&(Ok(c)||Nk(c))?c=parseFloat(c):!zk(c)&&ar.test(u)&&(c=gp(l,u)),e.addValue(l,Ii(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function Bk(e,t){return t?(t[e]||t.default||t).from:void 0}function $k(e,t,n){const r={};for(const i in e){const o=Bk(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function Uk({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function gx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const d=e.getValue(f),g=a[f];if(!d||g===void 0||c&&Uk(c,f))continue;const h={delay:n,elapsed:0,...o};if(window.HandoffAppearAnimations&&!d.hasAnimated){const x=e.getProps()[PP];x&&(h.elapsed=window.HandoffAppearAnimations(x,f,d,xe))}d.start(vp(f,d,g,e.shouldReduceMotion&&$r.has(f)?{type:!1}:h));const v=d.animation;yl(l)&&(l.add(f),v.then(()=>l.remove(f))),u.push(v)}return s&&Promise.all(u).then(()=>{s&&Vk(e,s)}),u}function cd(e,t,n={}){const r=Ru(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(gx(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:f}=i;return Hk(e,t,u+l,c,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function Hk(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(Wk).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(cd(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function Wk(e,t){return e.sortNodePosition(t)}function Gk(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>cd(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=cd(e,t,n);else{const i=typeof t=="function"?Ru(e,t,n.custom):t;r=Promise.all(gx(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Kk=[...ep].reverse(),Yk=ep.length;function Xk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Gk(e,n,r)))}function qk(e){let t=Xk(e);const n=Zk();let r=!0;const i=(l,u)=>{const c=Ru(e,u);if(c){const{transition:f,transitionEnd:d,...g}=c;l={...l,...g,...d}}return l};function o(l){t=l(e)}function s(l,u){const c=e.getProps(),f=e.getVariantContext(!0)||{},d=[],g=new Set;let h={},v=1/0;for(let y=0;y<Yk;y++){const m=Kk[y],p=n[m],w=c[m]!==void 0?c[m]:f[m],C=as(w),b=m===u?p.isActive:null;b===!1&&(v=y);let P=w===f[m]&&w!==c[m]&&C;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),p.protectedKeys={...h},!p.isActive&&b===null||!w&&!p.prevProp||Pu(w)||typeof w=="boolean")continue;const k=Qk(p.prevProp,w);let B=k||m===u&&p.isActive&&!P&&C||y>v&&C;const L=Array.isArray(w)?w:[w];let I=L.reduce(i,{});b===!1&&(I={});const{prevResolvedValues:F={}}=p,U={...F,...I},K=G=>{B=!0,g.delete(G),p.needsAnimating[G]=!0};for(const G in U){const ie=I[G],ee=F[G];h.hasOwnProperty(G)||(ie!==ee?hl(ie)&&hl(ee)?!$w(ie,ee)||k?K(G):p.protectedKeys[G]=!0:ie!==void 0?K(G):g.add(G):ie!==void 0&&g.has(G)?K(G):p.protectedKeys[G]=!0)}p.prevProp=w,p.prevResolvedValues=I,p.isActive&&(h={...h,...I}),r&&e.blockInitialAnimation&&(B=!1),B&&!P&&d.push(...L.map(G=>({animation:G,options:{type:m,...l}})))}if(g.size){const y={};g.forEach(m=>{const p=e.getBaseTarget(m);p!==void 0&&(y[m]=p)}),d.push({animation:y})}let x=!!d.length;return r&&c.initial===!1&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(d):Promise.resolve()}function a(l,u,c){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(g=>{var h;return(h=g.animationState)===null||h===void 0?void 0:h.setActive(l,u)}),n[l].isActive=u;const d=s(c,l);for(const g in n)n[g].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function Qk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!$w(t,e):!1}function gr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Zk(){return{animate:gr(!0),whileInView:gr(),whileHover:gr(),whileTap:gr(),whileDrag:gr(),whileFocus:gr(),exit:gr()}}class Jk extends pr{constructor(t){super(t),t.animationState||(t.animationState=qk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Pu(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let eb=0;class tb extends pr{constructor(){super(...arguments),this.id=eb++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const nb={animation:{Feature:Jk},exit:{Feature:tb}},H0=(e,t)=>Math.abs(e-t);function rb(e,t){const n=H0(e.x,t.x),r=H0(e.y,t.y);return Math.sqrt(n**2+r**2)}class vx{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Ac(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,f=rb(u.offset,{x:0,y:0})>=3;if(!c&&!f)return;const{point:d}=u,{timestamp:g}=et;this.history.push({...d,timestamp:g});const{onStart:h,onMove:v}=this.handlers;c||(h&&h(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=Tc(c,this.transformPagePoint),xe.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:f,onSessionEnd:d}=this.handlers,g=Ac(u.type==="pointercancel"?this.lastMoveEventInfo:Tc(c,this.transformPagePoint),this.history);this.startEvent&&f&&f(u,g),d&&d(u,g)},!Iw(t))return;this.handlers=n,this.transformPagePoint=r;const i=Tu(t),o=Tc(i,this.transformPagePoint),{point:s}=o,{timestamp:a}=et;this.history=[{...s,timestamp:a}];const{onSessionStart:l}=n;l&&l(t,Ac(o,this.history)),this.removeListeners=Qn(gn(window,"pointermove",this.handlePointerMove),gn(window,"pointerup",this.handlePointerUp),gn(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),sr.update(this.updatePoint)}}function Tc(e,t){return t?{point:t(e.point)}:e}function W0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ac({point:e},t){return{point:e,delta:W0(e,yx(t)),offset:W0(e,ib(t)),velocity:ob(t,.1)}}function ib(e){return e[0]}function yx(e){return e[e.length-1]}function ob(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=yx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Zn(t)));)n--;if(!r)return{x:0,y:0};const o=zr(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function xt(e){return e.max-e.min}function fd(e,t=0,n=.01){return Math.abs(e-t)<=n}function G0(e,t,n,r=.5){e.origin=r,e.originPoint=_e(t.min,t.max,e.origin),e.scale=xt(n)/xt(t),(fd(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=_e(n.min,n.max,e.origin)-e.originPoint,(fd(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ao(e,t,n,r){G0(e.x,t.x,n.x,r?r.originX:void 0),G0(e.y,t.y,n.y,r?r.originY:void 0)}function K0(e,t,n){e.min=n.min+t.min,e.max=e.min+xt(t)}function sb(e,t,n){K0(e.x,t.x,n.x),K0(e.y,t.y,n.y)}function Y0(e,t,n){e.min=t.min-n.min,e.max=e.min+xt(t)}function Ro(e,t,n){Y0(e.x,t.x,n.x),Y0(e.y,t.y,n.y)}function ab(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?_e(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?_e(n,e,r.max):Math.min(e,n)),e}function X0(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function lb(e,{top:t,left:n,bottom:r,right:i}){return{x:X0(e.x,n,i),y:X0(e.y,t,r)}}function q0(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ub(e,t){return{x:q0(e.x,t.x),y:q0(e.y,t.y)}}function cb(e,t){let n=.5;const r=xt(e),i=xt(t);return i>r?n=fs(t.min,t.max-r,e.min):r>i&&(n=fs(e.min,e.max-i,t.min)),Ir(0,1,n)}function fb(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const dd=.35;function db(e=dd){return e===!1?e=0:e===!0&&(e=dd),{x:Q0(e,"left","right"),y:Q0(e,"top","bottom")}}function Q0(e,t,n){return{min:Z0(e,t),max:Z0(e,n)}}function Z0(e,t){return typeof e=="number"?e:e[t]||0}const J0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oo=()=>({x:J0(),y:J0()}),eg=()=>({min:0,max:0}),Oe=()=>({x:eg(),y:eg()});function Yt(e){return[e("x"),e("y")]}function wx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function hb({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function pb(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Rc(e){return e===void 0||e===1}function hd({scale:e,scaleX:t,scaleY:n}){return!Rc(e)||!Rc(t)||!Rc(n)}function wr(e){return hd(e)||xx(e)||e.z||e.rotate||e.rotateX||e.rotateY}function xx(e){return tg(e.x)||tg(e.y)}function tg(e){return e&&e!=="0%"}function wl(e,t,n){const r=e-n,i=t*r;return n+i}function ng(e,t,n,r,i){return i!==void 0&&(e=wl(e,i,r)),wl(e,n,r)+t}function pd(e,t=0,n=1,r,i){e.min=ng(e.min,t,n,r,i),e.max=ng(e.max,t,n,r,i)}function Sx(e,{x:t,y:n}){pd(e.x,t.translate,t.scale,t.originPoint),pd(e.y,n.translate,n.scale,n.originPoint)}function mb(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&hi(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Sx(e,s)),r&&wr(o.latestValues)&&hi(e,o.latestValues))}t.x=rg(t.x),t.y=rg(t.y)}function rg(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Nn(e,t){e.min=e.min+t,e.max=e.max+t}function ig(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=_e(e.min,e.max,o);pd(e,t[n],t[r],s,t.scale)}const gb=["x","scaleX","originX"],vb=["y","scaleY","originY"];function hi(e,t){ig(e.x,t,gb),ig(e.y,t,vb)}function _x(e,t){return wx(pb(e.getBoundingClientRect(),t))}function yb(e,t,n){const r=_x(e,n),{scroll:i}=t;return i&&(Nn(r.x,i.offset.x),Nn(r.y,i.offset.y)),r}const wb=new WeakMap;class xb{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Oe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=l=>{this.stopAnimation(),n&&this.snapToCursor(Tu(l,"page").point)},o=(l,u)=>{const{drag:c,dragPropagation:f,onDragStart:d}=this.getProps();if(c&&!f&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Fw(c),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yt(h=>{let v=this.getAxisMotionValue(h).get()||0;if(Jt.test(v)){const{projection:x}=this.visualElement;if(x&&x.layout){const y=x.layout.layoutBox[h];y&&(v=xt(y)*(parseFloat(v)/100))}}this.originPoint[h]=v}),d&&xe.update(()=>d(l,u));const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},s=(l,u)=>{const{dragPropagation:c,dragDirectionLock:f,onDirectionLock:d,onDrag:g}=this.getProps();if(!c&&!this.openGlobalLock)return;const{offset:h}=u;if(f&&this.currentDirection===null){this.currentDirection=Sb(h),this.currentDirection!==null&&d&&d(this.currentDirection);return}this.updateAxis("x",u.point,h),this.updateAxis("y",u.point,h),this.visualElement.render(),g&&g(l,u)},a=(l,u)=>this.stop(l,u);this.panSession=new vx(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&xe.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!na(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=ab(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},i=this.constraints;t&&fi(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=lb(r.layoutBox,t):this.constraints=!1,this.elastic=db(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Yt(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=fb(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!fi(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=yb(r,i.root,this.visualElement.getTransformPagePoint());let s=ub(i.layout.layoutBox,o);if(n){const a=n(hb(s));this.hasMutatedConstraints=!!a,a&&(s=wx(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Yt(c=>{if(!na(c,n,this.currentDirection))return;let f=l&&l[c]||{};s&&(f={min:0,max:0});const d=i?200:1e6,g=i?40:1e7,h={type:"inertia",velocity:r?t[c]:0,bounceStiffness:d,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(c,h)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(vp(t,r,0,n))}stopAnimation(){Yt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Yt(n=>{const{drag:r}=this.getProps();if(!na(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-_e(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!fi(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Yt(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=cb({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Yt(s=>{if(!na(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(_e(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;wb.set(this.visualElement,this);const t=this.visualElement.current,n=gn(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();fi(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=dn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Yt(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=dd,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function na(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Sb(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class _b extends pr{constructor(t){super(t),this.removeGroupControls=Ke,this.removeListeners=Ke,this.controls=new xb(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ke}unmount(){this.removeGroupControls(),this.removeListeners()}}const og=e=>(t,n)=>{e&&xe.update(()=>e(t,n))};class Eb extends pr{constructor(){super(...arguments),this.removePointerDownListener=Ke}onPointerDown(t){this.session=new vx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:og(t),onStart:og(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&xe.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=gn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Cb(){const e=E.useContext(Eu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=E.useId();return E.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}function sg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ao={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(J.test(e))e=parseFloat(e);else return e;const n=sg(e,t.target.x),r=sg(e,t.target.y);return`${n}% ${r}%`}},Ex=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Pb(e){const t=Ex.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function md(e,t,n=1){const[r,i]=Pb(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);return o?o.trim():nd(i)?md(i,t,n+1):i}function kb(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!nd(o))return;const s=md(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!nd(o))continue;const s=md(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const ag="_$css",bb={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=e.includes("var("),o=[];i&&(e=e.replace(Ex,g=>(o.push(g),ag)));const s=ar.parse(e);if(s.length>5)return r;const a=ar.createTransformer(e),l=typeof s[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;s[0+l]/=u,s[1+l]/=c;const f=_e(u,c,.5);typeof s[2+l]=="number"&&(s[2+l]/=f),typeof s[3+l]=="number"&&(s[3+l]/=f);let d=a(s);if(i){let g=0;d=d.replace(ag,()=>{const h=o[g];return g++,h})}return d}};class Tb extends Ee.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;N3(Ab),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ko.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||xe.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Cx(e){const[t,n]=Cb(),r=E.useContext(rp);return Ee.createElement(Tb,{...e,layoutGroup:r,switchLayoutGroup:E.useContext(Ew),isPresent:t,safeToRemove:n})}const Ab={borderRadius:{...ao,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ao,borderTopRightRadius:ao,borderBottomLeftRadius:ao,borderBottomRightRadius:ao,boxShadow:bb},Px=["TopLeft","TopRight","BottomLeft","BottomRight"],Rb=Px.length,lg=e=>typeof e=="string"?parseFloat(e):e,ug=e=>typeof e=="number"||J.test(e);function Ob(e,t,n,r,i,o){i?(e.opacity=_e(0,n.opacity!==void 0?n.opacity:1,Nb(r)),e.opacityExit=_e(t.opacity!==void 0?t.opacity:1,0,Lb(r))):o&&(e.opacity=_e(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<Rb;s++){const a=`border${Px[s]}Radius`;let l=cg(t,a),u=cg(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||ug(l)===ug(u)?(e[a]=Math.max(_e(lg(l),lg(u),r),0),(Jt.test(u)||Jt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=_e(t.rotate||0,n.rotate||0,r))}function cg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Nb=kx(0,.5,hp),Lb=kx(.5,.95,Ke);function kx(e,t,n){return r=>r<e?0:r>t?1:n(fs(e,t,r))}function fg(e,t){e.min=t.min,e.max=t.max}function Ct(e,t){fg(e.x,t.x),fg(e.y,t.y)}function dg(e,t,n,r,i){return e-=t,e=wl(e,1/n,r),i!==void 0&&(e=wl(e,1/i,r)),e}function Mb(e,t=0,n=1,r=.5,i,o=e,s=e){if(Jt.test(t)&&(t=parseFloat(t),t=_e(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=_e(o.min,o.max,r);e===o&&(a-=t),e.min=dg(e.min,t,n,a,i),e.max=dg(e.max,t,n,a,i)}function hg(e,t,[n,r,i],o,s){Mb(e,t[n],t[r],t[i],t.scale,o,s)}const Db=["x","scaleX","originX"],Ib=["y","scaleY","originY"];function pg(e,t,n,r){hg(e.x,t,Db,n?n.x:void 0,r?r.x:void 0),hg(e.y,t,Ib,n?n.y:void 0,r?r.y:void 0)}function mg(e){return e.translate===0&&e.scale===1}function bx(e){return mg(e.x)&&mg(e.y)}function gd(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function gg(e){return xt(e.x)/xt(e.y)}class zb{constructor(){this.members=[]}add(t){yp(this.members,t),t.scheduleRender()}remove(t){if(wp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function vg(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const Fb=(e,t)=>e.depth-t.depth;class Vb{constructor(){this.children=[],this.isDirty=!1}add(t){yp(this.children,t),this.isDirty=!0}remove(t){wp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Fb),this.isDirty=!1,this.children.forEach(t)}}function jb(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(sr.read(r),e(o-t))};return xe.read(r,!0),()=>sr.read(r)}function Bb(e){window.MotionDebug&&window.MotionDebug.record(e)}function $b(e){return e instanceof SVGElement&&e.tagName!=="svg"}function Ub(e,t,n){const r=mt(e)?e:Ii(e);return r.start(vp("",r,t,n)),r.animation}const yg=["","X","Y","Z"],wg=1e3;let Hb=0;const xr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Tx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s,a={},l=t==null?void 0:t()){this.id=Hb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{xr.totalNodes=xr.resolvedTargetDeltas=xr.recalculatedProjection=0,this.nodes.forEach(Kb),this.nodes.forEach(Qb),this.nodes.forEach(Zb),this.nodes.forEach(Yb),Bb(xr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=s,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,s&&this.root.registerPotentialNode(s,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new Vb)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new xp),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}registerPotentialNode(s,a){this.potentialNodes.set(s,a)}mount(s,a=!1){if(this.instance)return;this.isSVG=$b(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const d=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=jb(d,250),ko.hasAnimatedSinceResize&&(ko.hasAnimatedSinceResize=!1,this.nodes.forEach(Sg))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:g,layout:h})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||c.getDefaultTransition()||rT,{onLayoutAnimationStart:x,onLayoutAnimationComplete:y}=c.getProps(),m=!this.targetLayout||!gd(this.targetLayout,h)||g,p=!d&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||p||d&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,p);const w={...hx(v,"layout"),onPlay:x,onComplete:y};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else!d&&this.animationProgress===0&&Sg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=h})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,sr.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Jb),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(xg);return}this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(iT),this.potentialNodes.clear()),this.nodes.forEach(qb),this.nodes.forEach(Wb),this.nodes.forEach(Gb),this.clearAllSnapshots(),xc.update(),xc.preRender(),xc.render())}clearAllSnapshots(){this.nodes.forEach(Xb),this.sharedNodes.forEach(eT)}scheduleUpdateProjection(){xe.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){xe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!bx(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||wr(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),oT(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return Oe();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(Nn(a.x,l.offset.x),Nn(a.y,l.offset.y)),a}removeElementScroll(s){const a=Oe();Ct(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:f}=u;if(u!==this.root&&c&&f.layoutScroll){if(c.isRoot){Ct(a,s);const{scroll:d}=this.root;d&&(Nn(a.x,-d.offset.x),Nn(a.y,-d.offset.y))}Nn(a.x,c.offset.x),Nn(a.y,c.offset.y)}}return a}applyTransform(s,a=!1){const l=Oe();Ct(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&hi(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),wr(c.latestValues)&&hi(l,c.latestValues)}return wr(this.latestValues)&&hi(l,this.latestValues),l}removeTransform(s){const a=Oe();Ct(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!wr(u.latestValues))continue;hd(u.latestValues)&&u.updateSnapshot();const c=Oe(),f=u.measurePageBox();Ct(c,f),pg(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return wr(this.latestValues)&&pg(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=et.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout?(this.relativeParent=g,this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),Ro(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Ct(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Oe(),this.targetWithTransforms=Oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.relativeParent.resolvedRelativeTargetAt!==et.timestamp&&this.relativeParent.resolveTargetDelta(!0),sb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ct(this.target,this.layout.layoutBox),Sx(this.target,this.targetDelta)):Ct(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target?(this.relativeParent=g,this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),Ro(this.relativeTargetOrigin,this.target,g.target),Ct(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}xr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||hd(this.parent.latestValues)||xx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===et.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Ct(this.layoutCorrected,this.layout.layoutBox),mb(this.layoutCorrected,this.treeScale,this.path,l);const{target:d}=a;if(!d)return;this.projectionDelta||(this.projectionDelta=Oo(),this.projectionDeltaWithTransform=Oo());const g=this.treeScale.x,h=this.treeScale.y,v=this.projectionTransform;Ao(this.projectionDelta,this.layoutCorrected,d,this.latestValues),this.projectionTransform=vg(this.projectionDelta,this.treeScale),(this.projectionTransform!==v||this.treeScale.x!==g||this.treeScale.y!==h)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",d)),xr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Oo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Oe(),g=l?l.source:void 0,h=this.layout?this.layout.source:void 0,v=g!==h,x=this.getStack(),y=!x||x.members.length<=1,m=!!(v&&!y&&this.options.crossfade===!0&&!this.path.some(nT));this.animationProgress=0;let p;this.mixTargetDelta=w=>{const C=w/1e3;_g(f.x,s.x,C),_g(f.y,s.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ro(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),tT(this.relativeTarget,this.relativeTargetOrigin,d,C),p&&gd(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=Oe()),Ct(p,this.relativeTarget)),v&&(this.animationValues=c,Ob(c,u,this.latestValues,C,m,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(sr.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=xe.update(()=>{ko.hasAnimatedSinceResize=!0,this.currentAnimation=Ub(0,wg,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(wg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&Ax(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Oe();const f=xt(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const d=xt(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+d}Ct(a,l),hi(a,c),Ao(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new zb),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<yg.length;c++){const f="rotate"+yg[c];l[f]&&(u[f]=l[f],s.setStaticValue(f,0))}s.render();for(const c in u)s.setStaticValue(c,u[c]);s.scheduleRender()}getProjectionStyles(s={}){var a,l;const u={};if(!this.instance||this.isSVG)return u;if(this.isVisible)u.visibility="";else return{visibility:"hidden"};const c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ba(s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=ba(s.pointerEvents)||""),this.hasProjected&&!wr(this.latestValues)&&(v.transform=c?c({},""):"none",this.hasProjected=!1),v}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=vg(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:g,y:h}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${h.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const v in fl){if(d[v]===void 0)continue;const{correct:x,applyTo:y}=fl[v],m=u.transform==="none"?d[v]:x(d[v],f);if(y){const p=y.length;for(let w=0;w<p;w++)u[y[w]]=m}else u[v]=m}return this.options.layoutId&&(u.pointerEvents=f===this?ba(s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(xg),this.root.sharedNodes.clear()}}}function Wb(e){e.updateLayout()}function Gb(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?Yt(f=>{const d=s?n.measuredBox[f]:n.layoutBox[f],g=xt(d);d.min=r[f].min,d.max=d.min+g}):Ax(o,n.layoutBox,r)&&Yt(f=>{const d=s?n.measuredBox[f]:n.layoutBox[f],g=xt(r[f]);d.max=d.min+g});const a=Oo();Ao(a,r,n.layoutBox);const l=Oo();s?Ao(l,e.applyTransform(i,!0),n.measuredBox):Ao(l,r,n.layoutBox);const u=!bx(a);let c=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:g}=f;if(d&&g){const h=Oe();Ro(h,n.layoutBox,d.layoutBox);const v=Oe();Ro(v,r,g.layoutBox),gd(h,v)||(c=!0),f.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=h,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Kb(e){xr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Yb(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Xb(e){e.clearSnapshot()}function xg(e){e.clearMeasurements()}function qb(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Sg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function Qb(e){e.resolveTargetDelta()}function Zb(e){e.calcProjection()}function Jb(e){e.resetRotation()}function eT(e){e.removeLeadSnapshot()}function _g(e,t,n){e.translate=_e(t.translate,0,n),e.scale=_e(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Eg(e,t,n,r){e.min=_e(t.min,n.min,r),e.max=_e(t.max,n.max,r)}function tT(e,t,n,r){Eg(e.x,t.x,n.x,r),Eg(e.y,t.y,n.y,r)}function nT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const rT={duration:.45,ease:[.4,0,.1,1]};function iT(e,t){let n=e.root;for(let o=e.path.length-1;o>=0;o--)if(e.path[o].instance){n=e.path[o];break}const i=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);i&&e.mount(i,!0)}function Cg(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function oT(e){Cg(e.x),Cg(e.y)}function Ax(e,t,n){return e==="position"||e==="preserve-aspect"&&!fd(gg(t),gg(n),.2)}const sT=Tx({attachResizeListener:(e,t)=>dn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Oc={current:void 0},Rx=Tx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Oc.current){const e=new sT(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Oc.current=e}return Oc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),aT={pan:{Feature:Eb},drag:{Feature:_b,ProjectionNode:Rx,MeasureLayout:Cx}},lT=new Set(["width","height","top","left","right","bottom","x","y"]),Ox=e=>lT.has(e),uT=e=>Object.keys(e).some(Ox),Pg=e=>e===Ur||e===J,kg=(e,t)=>parseFloat(e.split(", ")[t]),bg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return kg(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?kg(o[1],e):0}},cT=new Set(["x","y","z"]),fT=bu.filter(e=>!cT.has(e));function dT(e){const t=[];return fT.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Tg={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:bg(4,13),y:bg(5,14)},hT=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=Tg[u](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(a[u]),e[u]=Tg[u](l,o)}),e},pT=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(Ox);let o=[],s=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],f=so(c);const d=t[l];let g;if(hl(d)){const h=d.length,v=d[0]===null?1:0;c=d[v],f=so(c);for(let x=v;x<h;x++)g?pl(so(d[x])===g):g=so(d[x])}else g=so(d);if(f!==g)if(Pg(f)&&Pg(g)){const h=u.get();typeof h=="string"&&u.set(parseFloat(h)),typeof d=="string"?t[l]=parseFloat(d):Array.isArray(d)&&g===J&&(t[l]=d.map(parseFloat))}else f!=null&&f.transform&&(g!=null&&g.transform)&&(c===0||d===0)?c===0?u.set(g.transform(c)):t[l]=f.transform(d):(s||(o=dT(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(d))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=hT(t,e,a);return o.length&&o.forEach(([c,f])=>{e.getValue(c).set(f)}),e.render(),Cu&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function mT(e,t,n,r){return uT(t)?pT(e,t,n,r):{target:t,transitionEnd:r}}const gT=(e,t,n,r)=>{const i=kb(e,t,r);return t=i.target,r=i.transitionEnd,mT(e,t,n,r)},vd={current:null},Nx={current:!1};function vT(){if(Nx.current=!0,!!Cu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>vd.current=e.matches;e.addListener(t),t()}else vd.current=!1}function yT(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(mt(o))e.addValue(i,o),yl(r)&&r.add(i);else if(mt(s))e.addValue(i,Ii(o,{owner:e})),yl(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,Ii(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Ag=new WeakMap,Lx=Object.keys(ls),wT=Lx.length,Rg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],xT=tp.length;class ST{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>xe.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=ku(n),this.isVariantNode=_w(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const f in c){const d=c[f];a[f]!==void 0&&mt(d)&&(d.set(a[f],!1),yl(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Ag.set(t,this),this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Nx.current||vT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:vd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ag.delete(this.current),this.projection&&this.projection.unmount(),sr.update(this.notifyUpdate),sr.render(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=$r.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&xe.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o,s){let a,l;for(let u=0;u<wT;u++){const c=Lx[u],{isEnabled:f,Feature:d,ProjectionNode:g,MeasureLayout:h}=ls[c];g&&(a=g),f(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),h&&(l=h))}if(!this.projection&&a){this.projection=new a(o,this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:c,drag:f,dragConstraints:d,layoutScroll:g,layoutRoot:h}=n;this.projection.setOptions({layoutId:u,layout:c,alwaysMeasureLayout:!!f||d&&fi(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:g,layoutRoot:h})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update(this.props,this.prevProps):(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Rg.length;r++){const i=Rg[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=yT(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<xT;r++){const i=tp[r],o=this.props[i];(as(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Ii(n,{owner:this}),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=fp(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!mt(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new xp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Mx extends ST{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=$k(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){jk(this,r,s);const a=gT(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function _T(e){return window.getComputedStyle(e)}class ET extends Mx{readValueFromInstance(t,n){if($r.has(n)){const r=mp(n);return r&&r.default||0}else{const r=_T(t),i=(kw(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return _x(t,n)}build(t,n,r,i){op(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return cp(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;mt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Ow(t,n,r,i)}}class CT extends Mx{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if($r.has(n)){const r=mp(n);return r&&r.default||0}return n=Nw.has(n)?n:up(n),t.getAttribute(n)}measureInstanceViewportBox(){return Oe()}scrapeMotionValuesFromProps(t,n){return Mw(t,n)}build(t,n,r,i){ap(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Lw(t,n,r,i)}mount(t){this.isSVGTag=lp(t.tagName),super.mount(t)}}const PT=(e,t)=>ip(e)?new CT(t,{enableHardwareAcceleration:!1}):new ET(t,{enableHardwareAcceleration:!0}),kT={layout:{ProjectionNode:Rx,MeasureLayout:Cx}},bT={...nb,...SP,...aT,...kT},Hr=R3((e,t)=>iP(e,t,bT,PT));function Dx(){const e=E.useRef(!1);return cl(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function TT(){const e=Dx(),[t,n]=E.useState(0),r=E.useCallback(()=>{e.current&&n(t+1)},[t]);return[E.useCallback(()=>xe.postRender(r),[r]),t]}class AT extends E.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function RT({children:e,isPresent:t}){const n=E.useId(),r=E.useRef(null),i=E.useRef({width:0,height:0,top:0,left:0});return E.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),E.createElement(AT,{isPresent:t,childRef:r,sizeRef:i},E.cloneElement(e,{ref:r}))}const Nc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=np(OT),l=E.useId(),u=E.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c=>{a.set(c,!0);for(const f of a.values())if(!f)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),o?void 0:[n]);return E.useMemo(()=>{a.forEach((c,f)=>a.set(f,!1))},[n]),E.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=E.createElement(RT,{isPresent:n},e)),E.createElement(Eu.Provider,{value:u},e)};function OT(){return new Map}function NT(e){return E.useEffect(()=>()=>e(),[])}const Xr=e=>e.key||"";function LT(e,t){e.forEach(n=>{const r=Xr(n);t.set(r,n)})}function MT(e){const t=[];return E.Children.forEach(e,n=>{E.isValidElement(n)&&t.push(n)}),t}const DT=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{let[a]=TT();const l=E.useContext(rp).forceRender;l&&(a=l);const u=Dx(),c=MT(e);let f=c;const d=new Set,g=E.useRef(f),h=E.useRef(new Map).current,v=E.useRef(!0);if(cl(()=>{v.current=!1,LT(c,h),g.current=f}),NT(()=>{v.current=!0,h.clear(),d.clear()}),v.current)return E.createElement(E.Fragment,null,f.map(p=>E.createElement(Nc,{key:Xr(p),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},p)));f=[...f];const x=g.current.map(Xr),y=c.map(Xr),m=x.length;for(let p=0;p<m;p++){const w=x[p];y.indexOf(w)===-1&&d.add(w)}return s==="wait"&&d.size&&(f=[]),d.forEach(p=>{if(y.indexOf(p)!==-1)return;const w=h.get(p);if(!w)return;const C=x.indexOf(p),b=()=>{h.delete(p),d.delete(p);const P=g.current.findIndex(k=>k.key===p);if(g.current.splice(P,1),!d.size){if(g.current=c,u.current===!1)return;a(),r&&r()}};f.splice(C,0,E.createElement(Nc,{key:Xr(w),isPresent:!1,onExitComplete:b,custom:t,presenceAffectsLayout:o,mode:s},w))}),f=f.map(p=>{const w=p.key;return d.has(w)?p:E.createElement(Nc,{key:Xr(p),isPresent:!0,presenceAffectsLayout:o,mode:s},p)}),E.createElement(E.Fragment,null,d.size?f:f.map(p=>E.cloneElement(p)))},IT=()=>N(Hr.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[S(A4,{}),S(B4,{}),S(d3,{}),S(y3,{}),S(g3,{})]}),zT="/assets/model-red-dress-header-min-ff37de8e.webp";function FT(e){return qe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function VT(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"}}]})(e)}function jT(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"}}]})(e)}function BT(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"}}]})(e)}function $T(e){return qe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"}}]})(e)}function Og(e){return qe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"}}]})(e)}function UT(e){return qe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}const Ix=({setMinRange:e,setMaxRange:t,handleRangeSubmit:n,handleRangeReset:r,handleSortByHighPrice:i,handleSortByLowPrice:o,handleSearch:s,minRef:a,maxRef:l})=>N(HT,{children:[S(WT,{children:S("div",{className:"form-search",children:S("input",{className:"form__search-bar",type:"text",placeholder:"Search",onChange:s})})}),N("div",{className:"filters-options",children:[S("h2",{className:"filters-title",children:"Filters"}),N("div",{className:"filters-options-price",children:[S("h3",{children:"Price:"}),N("form",{className:"filters-options-price-range-container",children:[N("div",{className:"inputsWrapper",children:[N("div",{children:[S("label",{htmlFor:"minrange",children:"Min"}),S("input",{type:"number",min:"1",max:"2000",step:"1",name:"minrange",ref:a,onChange:u=>e(Number(u.target.value))})]}),N("div",{children:[S("label",{htmlFor:"maxrange",children:"Max"}),S("input",{type:"number",min:"1",max:"2000",step:"1",name:"maxrange",ref:l,onChange:u=>t(Number(u.target.value))})]})]}),N("div",{className:"price-btns-wrapper",children:[S("button",{type:"submit",onClick:n,children:"Apply"}),S("button",{onClick:r,children:"Reset"})]})]})]}),N("div",{className:"filters-options-sort",children:[S("h3",{children:"Sort By:"}),N("div",{className:"filters-options-btns",children:[S("button",{onClick:i,children:"High Price"}),S("button",{onClick:o,children:"Low Price"})]})]})]})]}),HT=Fe.aside`
  width: 30%;
  height: auto;
  padding: 0 1rem;
  border-radius: 5px;

  .filters-options {
    .filters-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 2rem;
      border-bottom: 1px solid var(--primary-clr);
    }

    .filters-options-price {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;

      h3 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }

      .filters-options-price-range-container {
        width: 100%;
        .inputsWrapper {
          display: flex;
          width: 100%;
          gap: 0.5rem;

          label,
          input {
            display: inline-block;
            width: 100%;
            margin: 0;
          }

          label {
            font-size: 0.8rem;
            margin-bottom: 0.2rem;
          }

          input {
            width: 100%;
            border: none;
            border: 1px solid var(--primary-clr);
            border-radius: 5px;
            padding: 0.5rem;

            &:focus {
              outline: none;
              border: 1px solid var(--secondary-clr);
            }
          }
        }
      }

      .price-btns-wrapper {
        display: flex;
        gap: 0.5rem;

        button {
          margin-top: 0.5rem;
          text-transform: uppercase;
          border-radius: 0;
          outline: none;
          border: none;
          padding: 0.5rem 2rem;
          background: var(--primary-clr);
          cursor: pointer;
          width: 100%;
          transition: all 0.2s ease-in-out;

          &:hover {
            background: var(--secondary-clr);
            color: var(--header-clr);
          }
        }
      }
    }

    .filters-options-sort {
      margin-top: 1rem;

      h3 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }

      .filters-options-btns {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: flex-start;
        justify-content: flex-start;

        button {
          outline: none;
          font-size: 0.8rem;
          border: 1px solid var(--header-black-clr);
          background: transparent;
          padding: 0.5rem 2rem;
          cursor: pointer;

          &:hover,
          &:active {
            background: var(--primary-clr);
          }
        }
      }
    }
  }

  @media screen and (min-width: 31.25em) and (max-width: 75em) {
    width: 100%;
    padding: 0;

    .filters-options-price-range-container {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 1rem;

      .price-btns-wrapper {
        width: 100%;
      }
    }
  }

  @media (max-width: 75em) {
    width: 100%;

    .filters-options-price-range-container {
      .inputsWrapper {
        justify-content: center;
      }
    }
  }
`,WT=Fe.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  .form-search {
    width: 100%;

    .form__search-bar {
      width: 100%;
      border: none;
      border: 1px solid var(--primary-clr);
      border-radius: 5px;
      padding: 0.5rem;

      &:focus {
        outline: none;
        border: 1px solid var(--secondary-clr);
      }
    }
  }
`,GT=()=>{const[e,t]=E.useState([]),[n,r]=E.useState([]),[i,o]=E.useState(!0),[s,a]=E.useState(),[l,u]=E.useState(),c=E.useRef(null),f=E.useRef(null);let d;const g=p=>{p.preventDefault(),r(e.filter(w=>w.title.toLowerCase().includes(p.target.value.toLowerCase())))},h=p=>{p.preventDefault(),!(!s||!l||s>l)&&(d=e.filter(w=>w.price>=s*10&&w.price<=l*10),r(d))},v=p=>{p.preventDefault(),!(!s||!l)&&(a(null),u(null),c.current.value="",f.current.value="",r(e))},x=()=>{d&&r([...d].sort((p,w)=>p.price<w.price)),r([...n].sort((p,w)=>p.price<w.price))},y=()=>{r(d?[...d].sort((p,w)=>p.price>w.price):[...n].sort((p,w)=>p.price>w.price))},m=async()=>{o(!0);try{const w=await(await Dr.get("https://api.escuelajs.co/api/v1/products/?categoryId=1")).data;t(w),r(w),o(!1)}catch(p){console.log(p),o(!1)}};return E.useEffect(()=>{m()},[]),S(KT,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:N("div",{className:"clothes__container",children:[N("div",{className:"clothes__header",children:[N("div",{className:"clothes__header_info",children:[S("h1",{children:"Get ready for the sunshine."}),S("h2",{children:"Warm weather and cold ice cream. It is that time of year again, folks! Summer is here, and that means it is time to update your seasonal wardrobe."}),N("h3",{children:["Get ",S("span",{children:"30% off"})," your next order !"]}),S(pt,{className:"btn clothes-header-btn",children:"Shop now"})]}),S("div",{className:"clothes__header__image__container",children:S("img",{src:zT,alt:"Woman model in red dress"})})]}),N("div",{className:"clothes__show_container",children:[S(Ix,{setMinRange:a,setMaxRange:u,handleRangeSubmit:h,handleRangeReset:v,handleSortByHighPrice:x,handleSortByLowPrice:y,handleSearch:g,minRef:c,maxRef:f}),N("div",{className:"clothes__items__maping",children:[S("div",{className:"clothes-length",children:N("h2",{children:["(",d?d.length:n.length,") Products found"]})}),S("div",{className:"clothes__grid",children:!i&&n.map(p=>S(vu,{item:p},p.id))}),S("p",{className:"end-of-list-text",children:"It's all we got for now"})]})]})]})})},KT=Fe(Hr.section)`
  width: 100vw;
  max-width: 100%;
  margin-top: 2rem;

  .clothes__container {
    width: 80%;
    margin: 0 auto;
    max-width: 1920px;

    .clothes__header {
      display: flex;
      align-items: center;
      justify-content: center;

      .clothes__header_info {
        width: 50%;
        align-self: stretch;
        padding: 5rem 2rem;
        background: var(--accent-clr);
        border-radius: 5px 0 0 5px;

        h1 {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        h3 {
          font-size: 1rem;
          font-weight: 400;

          span {
            font-weight: 600;
            text-transform: uppercase;
          }
        }

        .clothes-header-btn {
          padding: 0.5rem 3rem;
          margin-top: 2rem;
        }
      }

      .clothes__header__image__container {
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 5px 5px 0;
        }
      }
    }

    .clothes__show_container {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;

      .clothes__items__maping {
        width: 100%;

        .clothes-length {
          width: 100%;
          padding-left: 1rem;
          margin-bottom: 1rem;
          h2 {
            font-size: 1rem;
            font-weight: 400;
          }
        }

        .clothes__grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          justify-items: flex-end;
        }

        .end-of-list-text {
          margin: 5rem 0;
          font-size: 0.8rem;
          text-align: center;
          color: var(--font-clr);
        }
      }
    }
  }

  @media (width > 75em) {
    .clothes__container {
      .clothes__header {
        .clothes__header_info {
          height: 450px;
          min-height: 450px;
          max-height: 450px;

          h1 {
            font-size: 2.8rem;
          }
        }

        .clothes__header__image__container {
          img {
            height: 450px;
            object-position: top;
          }
        }
      }
    }
  }

  @media (max-width: 75em) {
    .clothes__container {
      .clothes__header {
        .clothes__header_info {
          width: 100%;
          min-height: 354px;
          padding: 2rem;

          h1 {
            font-size: 2rem;
          }
        }
      }

      .clothes__header__image__container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 5px 5px 0;

        img {
          min-width: 535px;
          min-height: 300px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 5px 5px 0;
        }
      }
    }

    .clothes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .clothes__items__maping {
        .clothes__grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }

  @media (max-width: 50em) {
    .clothes__container {
      width: 95%;
      .clothes__header {
        flex-direction: column;
        .clothes__header_info {
          width: 100%;
          min-height: 354px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 5px 5px 0 0;

          h1 {
            font-size: 3rem;
          }

          h2,
          h3 {
            font-size: 1.5rem;
          }

          h3 {
            margin-top: 2rem;
          }

          .clothes-header-btn {
            font-size: 1.2rem;
          }
        }
      }

      .clothes__header__image__container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 0 5px 5px;

        img {
          min-width: 535px;
          min-height: 300px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 0 5px 5px;
        }
      }
    }

    .clothes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .clothes__items__maping {
        .clothes__grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }

  @media (max-width: 37.5em) {
    .clothes__container {
      .clothes__header {
        .clothes__header_info {
          width: 100%;
          min-height: 354px;
          padding: 2rem;

          h1 {
            font-size: 2rem;
          }

          h2,
          h3 {
            font-size: 1.2rem;
          }
        }
      }

      .clothes__header__image__container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 0 5px 5px;

        img {
          min-width: 535px;
          min-height: 300px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 0 5px 5px;
        }
      }
    }

    .clothes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .clothes__items__maping {
        .clothes__grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }
`,YT="/assets/model-man-with-sneakers-min-c9d5770a.webp",XT=()=>{const[e,t]=E.useState([]),[n,r]=E.useState([]),[i,o]=E.useState(!0),[s,a]=E.useState(),[l,u]=E.useState(),c=E.useRef(null),f=E.useRef(null);let d;const g=p=>{p.preventDefault(),r(e.filter(w=>w.title.toLowerCase().includes(p.target.value.toLowerCase())))},h=p=>{p.preventDefault(),!(!s||!l||s>l)&&(d=e.filter(w=>w.price>=s*10&&w.price<=l*10),r(d))},v=p=>{p.preventDefault(),!(!s||!l)&&(a(null),u(null),c.current.value="",f.current.value="",r(e))},x=()=>{d&&r([...d].sort((p,w)=>p.price<w.price)),r([...n].sort((p,w)=>p.price<w.price))},y=()=>{r(d?[...d].sort((p,w)=>p.price>w.price):[...n].sort((p,w)=>p.price>w.price))},m=async()=>{o(!0);try{const w=await(await Dr.get("https://api.escuelajs.co/api/v1/products/?categoryId=4")).data;t(w),r(w),o(!1)}catch(p){console.log(p),o(!1)}};return E.useEffect(()=>{m()},[]),S(qT,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:N("div",{className:"shoes__container",children:[N("div",{className:"shoes__header",children:[N("div",{className:"shoes__header_info",children:[S("h1",{children:"Customize your so-you shoes."}),S("h2",{children:"Warm weather and cold ice cream. It is that time of year again, folks! Summer is here, and that means it is time to update your seasonal wardrobe."}),N("h3",{children:["Get ",S("span",{children:"30% off"})," your next order !"]}),S(pt,{className:"btn shoes-header-btn",children:"Shop now"})]}),S("div",{className:"shoes__header__image__container",children:S("img",{src:YT,alt:"Woman model in red dress"})})]}),N("div",{className:"shoes__show_container",children:[S(Ix,{setMinRange:a,setMaxRange:u,handleRangeSubmit:h,handleRangeReset:v,handleSortByHighPrice:x,handleSortByLowPrice:y,handleSearch:g,minRef:c,maxRef:f}),N("div",{className:"shoes__items__maping",children:[S("div",{className:"shoes-length",children:N("h2",{children:["(",d?d.length:n.length,") Products found"]})}),S("div",{className:"shoes__grid",children:!i&&n.map(p=>S(vu,{item:p},p.id))}),S("p",{className:"end-of-list-text",children:"It's all we got for now"})]})]})]})})},qT=Fe(Hr.section)`
  width: 100vw;
  max-width: 100%;
  margin-top: 2rem;

  .shoes__container {
    width: 80%;
    margin: 0 auto;
    max-width: 1920px;

    .shoes__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .shoes__header_info {
        width: 50%;
        /* align-self: stretch; */
        padding: 5rem 2rem;
        background: var(--accent-clr);
        border-radius: 5px 0 0 5px;

        h1 {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        h3 {
          font-size: 1rem;
          font-weight: 400;

          span {
            font-weight: 600;
            text-transform: uppercase;
          }
        }

        .shoes-header-btn {
          padding: 0.5rem 3rem;
          margin-top: 2rem;
        }
      }

      .shoes__header__image__container {
        width: 100%;

        img {
          width: 100%;
          max-width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          border-radius: 0 5px 5px 0;
        }
      }
    }

    .shoes__show_container {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;

      .shoes__items__maping {
        width: 100%;

        .shoes-length {
          width: 100%;
          padding-left: 1rem;
          margin-bottom: 1rem;
          h2 {
            font-size: 1rem;
            font-weight: 400;
          }
        }

        .shoes__grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          justify-items: center;
        }

        .end-of-list-text {
          margin: 5rem 0;
          font-size: 0.8rem;
          text-align: center;
          color: var(--font-clr);
        }
      }
    }
  }

  @media (min-width: 75em) {
    .shoes__container {
      .shoes__header {
        .shoes__header_info {
          width: 50%;
          height: 450px;
          min-height: 450px;
          max-height: 450px;
          padding: 2rem;
        }

        .shoes__header__image__container {
          width: 100%;
          img {
            height: 450px;
            min-height: 450px;
            max-height: 450px;
          }
        }
      }
    }
  }

  @media (max-width: 74.938em) {
    .shoes__container {
      .shoes__header {
        .shoes__header_info {
          width: 100%;
          min-height: 354px;
          padding: 2rem;

          h1 {
            font-size: 2rem;
          }
        }
      }

      .shoes__header__image__container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 5px 5px 0;

        img {
          min-width: 535px;
          min-height: 300px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 5px 5px 0;
        }
      }
    }

    .shoes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .shoes__items__maping {
        .shoes__grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }

  @media (max-width: 50em) {
    .shoes__container {
      width: 95%;
      .shoes__header {
        flex-direction: column;
        .shoes__header_info {
          width: 100%;
          min-height: 354px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 5px 5px 0 0;

          h1 {
            font-size: 3rem;
          }

          h2,
          h3 {
            font-size: 1.5rem;
          }

          h3 {
            margin-top: 2rem;
          }

          .shoes-header-btn {
            font-size: 1.2rem;
          }
        }
      }

      .shoes__header__image__container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 0 5px 5px;

        img {
          min-width: 535px;
          min-height: 300px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 0 5px 5px;
        }
      }
    }

    .shoes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .shoes__items__maping {
        .shoes__grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }

  @media (max-width: 37.5em) {
    .shoes__container {
      .shoes__header {
        .shoes__header_info {
          width: 100%;
          min-height: 354px;
          padding: 2rem;

          h1 {
            font-size: 2rem;
          }

          h2,
          h3 {
            font-size: 1.2rem;
          }
        }
      }

      .shoes__header__image__container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 0 5px 5px;

        img {
          min-width: 535px;
          min-height: 300px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 0 5px 5px;
        }
      }
    }

    .shoes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .shoes__items__maping {
        .shoes__grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }
`,QT="/assets/hang-b83c7369.png",ZT=()=>S(JT,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:N("div",{className:"pagenotfound-container",children:[S("div",{className:"image-container",children:S("img",{src:QT,alt:"Page not found"})}),S("h1",{children:"Oops! Nothing here..."})]})}),JT=Fe(Hr.section)`
  width: 100vw;
  max-width: 100%;

  .pagenotfound-container {
    width: 100%;

    height: 100%;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 20rem;

    h1 {
      font-size: 3rem;
      font-weight: 400;
      color: var(--header-black-clr);
      text-align: center;
    }

    .image-container {
      width: 50%;
      height: 100%;
      max-width: 600px;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 31.25em) {
    .pagenotfound-container {
      h1 {
        font-size: 2rem;
      }
    }
  }
`;function e8(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1h4v2h-4v3l-4-4 4-4v3z"}}]})(e)}function t8(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}]})(e)}function n8(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(e)}const r8="/assets/spinner-e0d0b5b0.svg",i8=()=>S(o8,{children:S("img",{src:r8,alt:""})}),o8=Fe.div`
  height: 100vh;
  width: 100%;
  position: relative;

  img {
    width: 10%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,Ou=E.createContext(),s8=({children:e})=>{const[t,n]=E.useState(!1),[r,i]=E.useState([]),[o,s]=E.useState({}),[a,l]=E.useState(0),u=h=>{o[h.id]<10&&s({...o,[h.id]:o[h.id]+1})},c=h=>{o[h.id]>1&&s({...o,[h.id]:o[h.id]-1})},f=()=>{const h=r.map(v=>v.price*o[v.id]);l(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(h.reduce((v,x)=>v+x,0)/10))},d=h=>{r.find(x=>x.id===h.id)?u(h):(i([...r,h]),s({...o,[h.id]:1}))},g=h=>{i(r.filter(v=>v.id!==h.id)),s(v=>{const x={...v};return delete x[h.id],x})};return E.useEffect(()=>{f()},[o]),S(Ou.Provider,{value:{openCartTab:t,setOpenCartTab:n,itemsList:r,setItemsList:i,addToCart:d,removeItem:g,handleIncrementProduct:u,handleDecrementProduct:c,productQuantity:o,cartTotal:a,getTotal:f},children:e})},a8=()=>{var f;const e=eE(),[t,n]=E.useState([]),[r,i]=E.useState([]),[o,s]=E.useState(!0),{addToCart:a}=E.useContext(Ou),l=[1,4],u=Math.floor(Math.random()*l.length),c=async()=>{s(!0);try{const g=await(await Dr.get(`https://api.escuelajs.co/api/v1/products/${e.id}`)).data;n(g);const v=await(await Dr.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${l[u]}`)).data;i(v.slice(0,10)),s(!1)}catch(d){console.log(d),s(!1)}};return E.useEffect(()=>{c()},[e]),S(l8,{children:N("div",{className:"productDetails__container",children:[N("div",{className:"productDetails-back-control",children:[N(pt,{className:"goback-btn",to:((f=t==null?void 0:t.category)==null?void 0:f.name)==="Shoes"?"/shoes":"/clothes",children:[S(e8,{}),"Back"]}),S("div",{className:"liner"})]}),o?S(i8,{}):N("div",{className:"productDetails-content",children:[N("article",{className:"product__item",children:[S("div",{className:"product__item-image-container",children:S("img",{src:t.category.name==="Shoes"?rr[Math.floor(Math.random()*rr.length)]:ir[Math.floor(Math.random()*ir.length)],alt:t.title})}),N("div",{className:"product__item-text-container",children:[S("h1",{children:t.title}),S("h3",{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t.price/10)}),S("p",{className:"description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum minima sapiente. Dolorem aperiam dolor quam error consectetur adipisci molestias voluptatibus, ipsam, enim recusandae tempora, cumque facere voluptate hic blanditiis? Nam iusto sapiente possimus, nostrum ad consectetur porro tenetur harum aperiam, dolorem in voluptatum quasi, laudantium tempore doloribus laboriosam. Nam perferendis dolore tempore voluptate maiores quia mollitia ipsa. Soluta, illo. Aliquid voluptas accusantium minima quos vero, ab vel eius sed in optio molestiae ipsum, iusto nesciunt ex commodi beatae quas sequi nostrum nemo nihil sapiente! Voluptatibus quam enim nihil maxime."}),N("p",{className:"category",children:["Category:",S("span",{children:t.category.name})]}),S("div",{className:"addtocart-btn",children:S("button",{onClick:()=>a(t),children:"Add to cart"})}),N("div",{className:"shipping-details-container",children:[N("div",{className:"ship-info",children:[S($T,{}),S("h3",{children:"Express Shipping"}),S("p",{children:"Fast shipping for orders above $50"})]}),N("div",{className:"ship-info",children:[S(n8,{}),S("h3",{children:"Free Shipping"}),S("p",{children:"Free standard shipping for members"})]}),N("div",{className:"ship-info",children:[S(BT,{}),S("h3",{children:"Free Returns"}),S("p",{children:"Free 60-day returns for members"})]})]})]})]}),N("div",{className:"featured-products-container",children:[S("h2",{children:"Recommended for you"}),S("div",{className:"featured-products",children:S(Qy,{className:"featured-products-inner-container",options:{rewind:!0,perPage:5,perMove:5,drag:"free",gap:"1rem",classes:{prev:"splide__arrow--prev featured-class-prev",next:"splide__arrow--next featured-class-next",pagination:"splide__pagination featured-class-pagination",page:"splide__pagination__page featured-class-page"},breakpoints:{1200:{perPage:3,perMove:1,gap:"1rem"},900:{perPage:2,perMove:1,gap:"1rem"},600:{perPage:1,perMove:1,gap:"1rem"}}},children:r.map(d=>S(Zy,{children:S(vu,{item:d})},d.id))})})]})]})]})})},l8=Fe(Hr.section)`
  width: 100vw;
  max-width: 100%;
  .productDetails__container {
    width: 80%;
    margin: 5rem auto;
    max-width: 1920px;

    .productDetails-back-control {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .goback-btn {
        border: none;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        color: white;
        background: var(--header-black-clr);
        padding: 0.2rem 2rem;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        svg {
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          svg {
            transform: translateX(-5px);
          }
        }
      }
      .liner {
        width: 100%;
        height: 1px;
        background: rgba(211, 211, 211, 0.884);
      }
    }

    .productDetails-content {
      .product__item {
        display: flex;
        align-items: flex-start;
        margin-top: 2rem;
        gap: 2rem;

        .product__item-text-container {
          max-width: 800px;
        }

        .product__item-image-container {
          overflow: hidden;
          max-width: 800px;
          max-height: 600px;
          width: 800px;
          height: 600px;

          border-radius: 5px;

          img {
            border-radius: 5px;
            object-fit: contain;
            width: 100%;
            height: 100%;
            transition: all 0.3s ease-in-out;

            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }

      .product__item-text-container {
        width: 100%;

        h1 {
          font-size: 2rem;
          font-weight: 600;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        p {
          font-size: 1rem;
          margin-top: 2rem;

          span {
            margin-left: 0.5rem;
            padding: 0.2rem;
          }
        }

        .addtocart-btn {
          margin-top: 2rem;
          button {
            border: none;
            background: var(--header-black-clr);
            color: white;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            border-radius: 5px;

            &:hover {
              background: var(--secondary-clr);
              color: white;
            }
          }
        }

        .shipping-details-container {
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;
          gap: 2rem;
          margin-top: 4rem;
          border-top: 1px solid rgba(211, 211, 211, 0.884);
          padding-top: 2rem;

          .ship-info {
            width: 100%;
            svg {
              font-size: 1.5rem;
            }
            h3 {
              font-size: 1rem;
            }
            p {
              font-size: 0.8rem;
              margin: 0;
            }
          }
        }
      }

      .featured-products-container {
        width: 100%;
        margin-top: 5rem;
        padding-bottom: 1rem;
        overflow-x: hidden;

        h2 {
          font-size: 1.5rem;
          font-weight: 300;
        }

        .featured-products {
          width: 100%;
          margin-top: 2rem;
          .featured-products-inner-container {
            .splide__arrow--prev.featured-class-prev,
            .splide__arrow--next.featured-class-next {
              background: var(--primary-clr);

              svg {
                fill: white;
              }
            }

            .splide__pagination.featured-class-pagination {
              bottom: -1rem;
            }

            .splide__pagination__page.featured-class-page {
              background: var(--primary-clr);
            }
          }
        }
      }
    }
  }

  @media (max-width: 75em) {
    .productDetails__container {
      .productDetails-content {
        .product__item {
          flex-direction: column;

          .product__item-image-container {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 31.25em) {
    .productDetails__container {
      .productDetails-content {
        .shipping-details-container {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      }
    }
  }
`,u8="/assets/youshoes-about-eco-bf76a172.webp";function Lc(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 16 16 12 12 8"}},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"}}]})(e)}const c8=()=>S(f8,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:N("article",{className:"about__container",children:[N("div",{className:"about-header",children:[N("div",{className:"about-header-info",children:[S("h1",{children:"About us"}),S("p",{children:"As a leading European online platform for fashion and lifestyle we deliver to customers in 25 countries. In our fashion store, they can find a wide assortment from more than 7,000 brands."}),S("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel dolorum tenetur, nihil asperiores aliquam nobis, tempore magnam, provident excepturi deleniti dicta. Minima voluptas repudiandae adipisci porro, voluptatum laborum nulla? Amet non numquam asperiores laboriosam nobis aspernatur omnis aliquam nostrum iure repudiandae velit hic consectetur saepe cum corporis dolorem ipsam dignissimos totam sequi, sit repellendus? Nihil, hic corporis. Nemo, eligendi! Consequatur a est omnis distinctio adipisci ad eveniet commodi. Dolorum dolore necessitatibus ea, incidunt odio modi enim nostrum quos odit ducimus suscipit architecto minima tenetur eius! Vero dolores similique delectus. Adipisci voluptas vero nisi quidem ipsam totam tenetur ducimus modi laboriosam sed debitis culpa ea, ratione odit nesciunt assumenda sapiente voluptatem quasi. Necessitatibus laboriosam, soluta molestiae qui earum quaerat eum."})]}),S("div",{className:"about-image",children:S("img",{src:u8,alt:"a shirt hang"})})]}),N("div",{className:"about-more",children:[N("div",{className:"about-more-details",children:[S("h2",{children:"Who we are"}),S(Lc,{})]}),N("div",{className:"about-more-details",children:[S("h2",{children:"What we do"}),S(Lc,{})]}),N("div",{className:"about-more-details",children:[S("h2",{children:"Brands & Retailers"}),S(Lc,{})]})]})]})}),f8=Fe(Hr.section)`
  width: 100vw;
  max-width: 100%;
  margin-top: 5rem;
  margin-bottom: 15rem;

  .about__container {
    width: 80%;
    margin: 0 auto;
    max-width: 1920px;

    .about-header {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      gap: 1rem;

      .about-header-info {
        width: 100%;

        h1 {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        p {
          font-size: 1rem;
          margin-top: 0.5rem;
          line-height: 1.5rem;
        }
      }

      .about-image {
        width: 50%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          object-fit: contain;
          box-shadow: 24px 24px 0px 1px var(--primary-clr);
        }
      }
    }

    .about-more {
      margin: 5rem 0;
      display: flex;
      gap: 1rem;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      .about-more-details {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        border: 1px solid var(--header-black-clr);
        padding: 2rem 3rem;
        border-radius: 5px;

        h2 {
          font-size: 2rem;
          font-weight: 400;
        }

        svg {
          font-size: 1.5rem;
        }
      }
    }
  }
  /* @media (62.5 <= width <= 75em)  */

  @media (max-width: 75em) {
    .about__container {
      .about-header {
        width: 100%;
        flex-direction: column;
        gap: 2rem;
      }

      .about-image {
        width: 100%;
        align-self: center;
        max-width: 400px;
      }

      .about-more {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 62.5em) {
    .about__container {
      .about-header {
        width: 100%;
        flex-direction: column;
        gap: 2rem;
      }

      .about-image {
        width: 100%;
        align-self: center;
        max-width: 400px;
      }

      .about-more {
        flex-direction: column;

        .about-more-details {
          padding: 1rem 2rem;
          h2 {
            font-size: 1rem;
          }
        }
      }
    }
  }
`,d8=()=>{const[e,t]=E.useState({userfirstname:"",userlastname:"",useremail:"",userphone:"",usermessage:""}),[n,r]=E.useState(!1),i=E.useRef(),o=a=>{t({...e,[a.target.name]:a.target.value})};return N(h8,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[N("div",{className:"section-title",children:[S("h1",{children:"Contact Us"}),S("h2",{children:"Any question? Just write us a message!"})]}),N("div",{className:"contact__container",children:[N("div",{className:"contact-information",children:[N("div",{className:"contact-information-header",children:[S("h2",{children:"Contact Information"}),S("h3",{children:"Fill up the form and our Team will get back to you within 24 hours."})]}),S("div",{className:"contact-information-content",children:N("ul",{children:[N("li",{children:[S(I4,{}),S("h4",{children:"+90 543 658 684"})]}),N("li",{children:[S(z4,{}),S("h4",{children:"hello@youshoes.com"})]}),N("li",{children:[S(F4,{}),S("h4",{children:"102 Street 2714 Canada"})]})]})}),N("div",{className:"contact-information-social",children:[S(pt,{children:S(j4,{})}),S(pt,{children:S(V4,{})})]})]}),S("div",{className:"contact-form",children:N("form",{onSubmit:a=>{a.preventDefault(),i.current.reset(),r(!0),setTimeout(()=>r(!1),3e3)},ref:i,children:[N("div",{className:"user-infos",children:[N("div",{children:[S("label",{htmlFor:"userfirstname",children:"First Name"}),S("br",{}),S("input",{type:"text",maxLength:"10",name:"userfirstname",required:!0,onChange:o})]}),N("div",{children:[S("label",{htmlFor:"userlastname",children:"Last Name"}),S("br",{}),S("input",{type:"text",maxLength:"10",name:"userlastname",required:!0,onChange:o})]})]}),N("div",{className:"user-contact",children:[N("div",{children:[S("label",{htmlFor:"usermail",children:"Mail"}),S("br",{}),S("input",{type:"email",name:"useremail",required:!0,onChange:o})]}),N("div",{children:[S("label",{htmlFor:"userphone",children:"Phone"}),S("br",{}),S("input",{type:"tel",name:"userphone",onChange:o})]})]}),N("div",{className:"user-message",children:[S("label",{htmlFor:"usermessage",children:"Message"}),S("br",{}),S("textarea",{className:"form-message-box",name:"usermessage",id:"",cols:"30",rows:"5",placeholder:"Write your message...",required:!0,onChange:o})]}),S("button",{type:"submit",children:"Send Message"}),n&&S("div",{className:"messageConfirmBox",children:S("h3",{children:"Your message has been sent. Thank you!"})})]})})]})]})},h8=Fe(Hr.section)`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  padding-top: 5rem;

  .section-title {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 3rem;

    h1 {
      font-size: 3rem;
      font-weight: 600;
    }

    h2 {
      font-weight: 400;
    }
  }

  .contact__container {
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    /* background: var(--header-clr); */
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    max-width: 1920px;

    .contact-information {
      width: 100%;
      padding: 2rem;
      background: var(--accent-clr);
      border-radius: 5px;
      .contact-information-header {
        h2 {
          font-size: 2.5rem;
          font-weight: 400;
          color: var(--header-black-clr);
        }

        h3 {
          margin-top: 1rem;
          font-size: 1rem;
          font-weight: 200;
          color: var(--header-black-clr);
        }
      }

      .contact-information-content {
        ul {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;

          li {
            display: flex;
            gap: 1rem;
            align-items: center;
            list-style: none;

            svg {
              font-size: 1.2rem;
              color: var(--secondary-clr);
            }

            h4 {
              font-size: 1.1rem;
              font-weight: 300;
              color: var(--header-black-clr);
            }
          }
        }
      }

      .contact-information-social {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 4rem;
        gap: 1.5rem;

        a {
          color: var(--header-clr);
          border-radius: 50%;
          transition: all 0.2s ease-in-out;
          padding: 0.5rem;
          background: var(--secondary-clr);
          display: flex;
          align-items: center;

          svg {
            font-size: 1rem;
          }

          &:hover {
            color: var(--secondary-clr);
            background: var(--header-clr);
          }
        }
      }
    }

    .contact-form {
      width: 100%;

      form {
        width: 100%;
        padding: 1rem;
        .user-infos label,
        .user-contact label,
        .user-message label {
          width: 100%;
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--header-black-clr);
        }

        .user-infos input::placeholder,
        .user-contact input::placeholder,
        .form-message-box::placeholder,
        .form-message-box {
          font-family: var(--font-family);
        }

        .user-message label {
          display: block;
          margin-top: 2rem;
        }

        .user-infos input {
          margin-bottom: 2rem;
        }

        .form-message-box {
          resize: none;
        }

        .user-infos input,
        .user-contact input,
        .form-message-box {
          outline: none;
          width: 100%;
          padding: 0.5rem;
          font-weight: 300;
          border: none;
          background: transparent;
          border-bottom: 2px solid var(--primary-clr);

          &:focus {
            border-bottom: 2px solid var(--secondary-clr);
          }
        }

        .user-infos,
        .user-contact {
          display: grid;
          column-gap: 2rem;
          grid-template-columns: repeat(2, 1fr);
          justify-content: center;
        }

        button {
          padding: 0.8rem 2rem;
          font-weight: 600;
          margin-top: 1rem;
          border-radius: 50px;
          background: var(--primary-clr);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            background: var(--secondary-clr);
            color: var(--header-clr);
          }
        }

        .messageConfirmBox {
          background: #b7e4c7;
          padding: 0.5rem;
          border-radius: 5px;
          margin-top: 1rem;
          h3 {
            font-weight: 300;
            font-style: italic;
          }
        }
      }
    }
  }

  @media screen and (min-width: 50em) and (max-width: 75em) {
    .contact__container {
      width: 95%;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 49.875em) {
    .contact__container {
      width: 95%;
      flex-direction: column;
      margin-bottom: 5rem;

      .contact-information {
        height: 100%;
        .contact-information-header {
          text-align: center;
          h2 {
            font-size: 2rem;
          }
        }

        .contact-information-content {
          ul {
            li {
              flex-direction: column;
            }
          }
        }

        .contact-information-social {
          justify-content: center;
        }
      }

      .contact-form {
        height: 100%;
        form {
          .user-infos,
          .user-contact {
            display: flex;
            flex-direction: column;
          }

          .user-contact {
            gap: 2rem;
          }
        }
      }
    }
  }
`,p8=()=>{const e=$i();return S(DT,{children:N(fE,{location:e,children:[S(Tn,{path:"/",element:S(IT,{})}),S(Tn,{path:"/shoes",element:S(XT,{})}),S(Tn,{path:"/clothes",element:S(GT,{})}),S(Tn,{path:"/product/:id",element:S(a8,{})}),S(Tn,{path:"/about",element:S(c8,{})}),S(Tn,{path:"/contact",element:S(d8,{})}),S(Tn,{path:"*",element:S(ZT,{})})]},e.pathname)})};var ra,m8=new Uint8Array(16);function g8(){if(!ra&&(ra=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!ra))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ra(m8)}const v8=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function y8(e){return typeof e=="string"&&v8.test(e)}var He=[];for(var Mc=0;Mc<256;++Mc)He.push((Mc+256).toString(16).substr(1));function w8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(He[e[t+0]]+He[e[t+1]]+He[e[t+2]]+He[e[t+3]]+"-"+He[e[t+4]]+He[e[t+5]]+"-"+He[e[t+6]]+He[e[t+7]]+"-"+He[e[t+8]]+He[e[t+9]]+"-"+He[e[t+10]]+He[e[t+11]]+He[e[t+12]]+He[e[t+13]]+He[e[t+14]]+He[e[t+15]]).toLowerCase();if(!y8(n))throw TypeError("Stringified UUID is invalid");return n}function Sp(e,t,n){e=e||{};var r=e.random||(e.rng||g8)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return w8(r)}const x8=()=>{const{openCartTab:e,setOpenCartTab:t,itemsList:n,productQuantity:r}=E.useContext(Ou),{openMobileMenu:i,setOpenMobileMenu:o}=E.useContext(ou);return S(S8,{children:N("div",{className:"navigation__container",children:[S(pt,{to:"/",className:"logo-title",children:"You Shoes"}),S("div",{className:"navigation__links",children:S("ul",{children:Jy.map(s=>S("li",{children:S(ey,{to:s.url,children:s.page})},Sp()))})}),N("div",{className:"navigation__shopping-components",children:[N("button",{className:"btn btn-header-cart",onClick:()=>t(!e),children:[S(Og,{}),"Cart (",Object.values(r).reduce((s,a)=>s+a,0),")"]}),N("button",{className:"btn btn-header-login",children:[S(UT,{})," Login"]})]}),N("div",{className:"mobile-buttons-container",children:[N("button",{onClick:()=>t(!e),children:[S(Og,{}),S("span",{children:Object.values(r).reduce((s,a)=>s+a,0)})]}),S("button",{onClick:()=>{o(!0),document.body.style.overflow="hidden"},children:S(FT,{})})]})]})})},S8=Fe.nav`
  width: 100vw;
  max-width: 100%;
  padding: 2rem 0;
  background: var(--header-black-clr);

  .navigation__container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding: 1rem 0;
    max-width: 1920px;

    .logo-title {
      color: var(--primary-clr);
      font-weight: 600;
      font-size: 2rem;
    }

    .navigation__links ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;

      & li {
        display: inline-block;
        font-size: 1.5rem;
        & a {
          color: var(--header-clr);
          transition: all 0.2s ease-in-out;
          &.active,
          &:hover {
            color: var(--primary-clr);
          }
        }
      }
    }

    .navigation__shopping-components {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;

      .btn-header-cart {
        padding: 0.3rem 3rem;
        background: transparent;
        border: 1px solid var(--primary-clr);
        color: var(--header-clr);
        font-weight: 200;
      }

      .btn-header-login {
        gap: 0.5rem;
        padding: 0.3rem 3rem;
        background: var(--secondary-clr);
        text-transform: uppercase;
        color: var(--header-clr);
        font-weight: 200;
      }
    }

    .mobile-buttons-container {
      display: none;
    }
  }

  @media screen and (max-width: 75em) {
    .navigation__links,
    .navigation__shopping-components {
      display: none !important;
    }

    .mobile-buttons-container {
      display: flex !important;
      align-items: center;
      justify-content: flex-end;

      button {
        border: none;
        outline: none;
        background: none;
        cursor: pointer;
        position: relative;
        margin: 0 1rem;

        span {
          color: white;
          display: inline-block;
          background: #ae2012;
          border-radius: 100%;
          border: 1px solid white;
          font-size: 0.8rem;
          padding: 0.05rem 0.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -10px;
          right: -10px;
        }

        svg {
          font-size: 1.6rem;
          color: white;
          &:hover {
            color: var(--secondary-clr);
          }
        }
      }
    }
  }
`,_8=()=>S(E8,{children:N("div",{className:"footer__container",children:[S("p",{children:"Disclaimer : This site has no commercial purpose and is not affiliated with any brand."}),S("p",{children:"Please note: This site uses an editable public API. Therefore, it is possible that some products do not appear on the page. Normally, there are 39 shoes and 42 clothes."})]})}),E8=Fe.footer`
  width: 100vw;
  max-width: 100%;
  background: var(--header-black-clr);
  padding: 20rem 1rem;

  .footer__container {
    p {
      color: var(--header-clr);
      font-size: 1rem;
      text-align: center;
    }
  }
`,C8=()=>{const{openCartTab:e,itemsList:t,removeItem:n,handleIncrementProduct:r,handleDecrementProduct:i,productQuantity:o,cartTotal:s}=E.useContext(Ou);return S(zc,{children:e&&S(P8,{children:S("div",{className:"cart__container",children:t.length===0?S("h3",{children:"You have no items in your cart."}):N(zc,{children:[S("h2",{className:"cart-title",children:"Your Cart"}),S("div",{className:"cart__list__wrapper",children:t.map(a=>N("article",{children:[S("div",{className:"item-image-container",children:S("img",{src:a.category.name==="Shoes"?rr[Math.floor(Math.random()*rr.length)]:ir[Math.floor(Math.random()*ir.length)],alt:a.title})}),N("div",{className:"item-details-container",children:[S("h2",{className:"item-title",children:a.title}),S("h4",{className:"item-price",children:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a.price/10)}),S("div",{className:"item-quantity-container",children:N("div",{className:"item-quantity-controlers",children:[S("button",{onClick:()=>i(a),children:S(VT,{})}),S("h3",{className:"input",children:o[a.id]}),S("button",{onClick:()=>r(a),children:S(jT,{})})]})})]}),S("div",{className:"item-remover-container",children:S("button",{onClick:()=>n(a),children:S(t8,{})})})]},`${a.id} ${Sp()}`))}),N("div",{className:"cart-total-container",children:[S("h2",{className:"cart-total-title",children:"Total:"}),S("span",{children:s})]}),S(pt,{className:"place-order-btn",children:"Place Order"})]})})})})},P8=Fe.div`
  min-width: 300px;
  width: 400px;
  /* min-height: 300px; */
  padding: 1rem;
  position: absolute;
  z-index: 999;
  right: 10%;
  top: 100px;
  background: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .cart__container {
    h3,
    h2 {
      font-size: 1rem;
      font-weight: 400;
    }

    h3 {
      text-align: center;
    }

    .cart__list__wrapper {
      margin-top: 1rem;
      overflow-y: scroll;
      max-height: 400px;
      article {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 1rem 0;
        background: var(--header-clr);
        padding: 1rem 0;
        border-radius: 5px;

        .item-image-container {
          width: 100px;
          height: 80px;
          border-radius: 5px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
          }
        }

        .item-details-container {
          .item-title {
            font-size: 1rem;
            font-weight: 600;
          }

          .item-price {
            font-size: 1rem;
            font-weight: 400;
          }

          .item-quantity-container {
            .item-quantity-controlers {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-top: 5px;

              button {
                border: none;
                background: none;
                cursor: pointer;

                svg {
                  color: var(--secondary-clr);
                  font-size: 1rem;
                }
              }

              .input {
                width: 30px;
                margin: 0 0.5rem;
                font-size: 1rem;
                font-weight: 400;
                text-align: center;
                color: #0000009d;
              }
            }
          }
        }

        .item-remover-container {
          display: flex;
          align-items: center;
          button {
            margin: auto 0;
            border: none;
            background: none;
            cursor: pointer;

            svg {
              font-size: 1.5rem;
              color: #ef233c;
              transition: all 0.2s ease-in-out;

              &:hover {
                filter: brightness(50%);
              }
            }
          }
        }
      }
    }
    .cart-total-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      .cart-total-title {
        font-size: 1rem;
        font-weight: 400;
      }

      span {
        font-size: 1.3rem;
        font-weight: 600;
      }
    }

    .place-order-btn {
      font-size: 1rem;
      text-transform: uppercase;
      color: white;
      background: var(--header-black-clr);
      padding: 0.5rem 2rem;
      border-radius: 5px;
      margin-top: 1rem;
      display: inline-block;
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 31.25em) {
    right: 0%;
    width: 100%;
  }
`;var zx={},Nu={},xl={},k8={get exports(){return xl},set exports(e){xl=e}},b8="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",T8=b8,A8=T8;function Fx(){}function Vx(){}Vx.resetWarningCache=Fx;var R8=function(){function e(r,i,o,s,a,l){if(l!==A8){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Vx,resetWarningCache:Fx};return n.PropTypes=n,n};k8.exports=R8();var Lu={},Ge={};Object.defineProperty(Ge,"__esModule",{value:!0});Ge.disabledIconStyle=Ge.disabledStyle=Ge.hoverStyle=Ge.svgStyle=Ge.iconStyle=Ge.lightStyle=Ge.darkStyle=void 0;function Ng(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function jx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ng(Object(n),!0).forEach(function(r){O8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ng(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function O8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Bx={height:"50px",width:"240px",border:"none",textAlign:"center",verticalAlign:"center",boxShadow:"0 2px 4px 0 rgba(0,0,0,.25)",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",transition:"background-color .218s, border-color .218s, box-shadow .218s",fontFamily:"Roboto,arial,sans-serif",cursor:"pointer",userSelect:"none"},N8=jx({backgroundColor:"#4285f4",color:"#fff"},Bx);Ge.darkStyle=N8;var L8=jx({backgroundColor:"#fff",color:"rgba(0,0,0,.54)"},Bx);Ge.lightStyle=L8;var M8={width:"48px",height:"48px",textAlign:"center",verticalAlign:"center",display:"block",marginTop:"1px",marginLeft:"1px",float:"left",backgroundColor:"#fff",borderRadius:"1px",whiteSpace:"nowrap"};Ge.iconStyle=M8;var D8={width:"48px",height:"48px",display:"block"};Ge.svgStyle=D8;var I8={boxShadow:"0 0 3px 3px rgba(66,133,244,.3)",transition:"background-color .218s, border-color .218s, box-shadow .218s"};Ge.hoverStyle=I8;var z8={backgroundColor:"rgba(37, 5, 5, .08)",color:"rgba(0, 0, 0, .40)",cursor:"not-allowed"};Ge.disabledStyle=z8;var F8={backgroundColor:"transparent"};Ge.disabledIconStyle=F8;Object.defineProperty(Lu,"__esModule",{value:!0});Lu.GoogleIcon=void 0;var H=$x(E),Lg=$x(xl),_i=Ge;function $x(e){return e&&e.__esModule?e:{default:e}}function Mg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function V8(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mg(Object(n),!0).forEach(function(r){j8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B8=H.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:_i.svgStyle},H.default.createElement("defs",null,H.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},H.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),H.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),H.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),H.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),H.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),H.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),H.default.createElement("feMerge",null,H.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),H.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),H.default.createElement("feMergeNode",{in:"SourceGraphic"}))),H.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"}),H.default.createElement("rect",{id:"path-3",x:"5",y:"5",width:"38",height:"38",rx:"1"})),H.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},H.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -219.000000)"}),H.default.createElement("g",{id:"btn_google_dark_normal",transform:"translate(-1.000000, -1.000000)"},H.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},H.default.createElement("g",{id:"button-bg"},H.default.createElement("use",{fill:"#4285F4",fillRule:"evenodd"}),H.default.createElement("use",{fill:"none"}),H.default.createElement("use",{fill:"none"}),H.default.createElement("use",{fill:"none"}))),H.default.createElement("g",{id:"button-bg-copy"},H.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),H.default.createElement("use",{fill:"none"}),H.default.createElement("use",{fill:"none"}),H.default.createElement("use",{fill:"none"})),H.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},H.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),H.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),H.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),H.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),H.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),H.default.createElement("g",{id:"handles_square"})))),$8=H.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:_i.svgStyle},H.default.createElement("defs",null,H.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},H.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),H.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),H.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),H.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),H.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),H.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),H.default.createElement("feMerge",null,H.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),H.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),H.default.createElement("feMergeNode",{in:"SourceGraphic"}))),H.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"})),H.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},H.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -160.000000)"}),H.default.createElement("g",{id:"btn_google_light_normal",transform:"translate(-1.000000, -1.000000)"},H.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},H.default.createElement("g",{id:"button-bg"},H.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),H.default.createElement("use",{fill:"none"}),H.default.createElement("use",{fill:"none"}),H.default.createElement("use",{fill:"none"}))),H.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},H.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),H.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),H.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),H.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),H.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),H.default.createElement("g",{id:"handles_square"})))),U8=H.default.createElement("svg",{width:"46px",height:"46px",viewBox:"0 0 46 46",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:_i.svgStyle},H.default.createElement("defs",null,H.default.createElement("rect",{id:"path-1",x:"0",y:"0",width:"40",height:"40",rx:"2"})),H.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},H.default.createElement("g",{id:"9-PATCH",transform:"translate(-788.000000, -219.000000)"}),H.default.createElement("g",{id:"btn_google_dark_disabled",transform:"translate(-1.000000, -1.000000)"},H.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)"},H.default.createElement("g",{id:"button-bg"},H.default.createElement("use",{fillOpacity:"0.08",fill:"#000000",fillRule:"evenodd"}),H.default.createElement("use",{fill:"none"}),H.default.createElement("use",{fill:"none"}),H.default.createElement("use",{fill:"none"}))),H.default.createElement("path",{d:"M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",id:"Shape-Copy",fillOpacity:"0.4",fill:"#000000"}),H.default.createElement("g",{id:"handles_square"})))),_p=function(t){var n=t.disabled,r=t.type;return H.default.createElement("div",{style:n?V8({},_i.iconStyle,{},_i.disabledIconStyle):_i.iconStyle},n?U8:r==="dark"?B8:$8)};Lu.GoogleIcon=_p;_p.propTypes={disabled:Lg.default.bool,type:Lg.default.oneOf(["light","dark"])};_p.defaultProps={type:"dark"};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.default=void 0;var ia=G8(E),Gr=W8(xl),H8=Lu,oa=Ge;function W8(e){return e&&e.__esModule?e:{default:e}}function Ux(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Ux=function(){return e},e}function G8(e){if(e&&e.__esModule)return e;if(e===null||No(e)!=="object"&&typeof e!="function")return{default:e};var t=Ux();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}function No(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?No=function(n){return typeof n}:No=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},No(e)}function yd(){return yd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yd.apply(this,arguments)}function K8(e,t){if(e==null)return{};var n=Y8(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Y8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Dg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dg(Object(n),!0).forEach(function(r){Dn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function X8(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ig(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q8(e,t,n){return t&&Ig(e.prototype,t),n&&Ig(e,n),e}function Q8(e){return function(){var t=Sl(e),n;if(J8()){var r=Sl(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return Z8(this,n)}}function Z8(e,t){return t&&(No(t)==="object"||typeof t=="function")?t:qr(e)}function qr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Sl(e){return Sl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Sl(e)}function e6(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&wd(e,t)}function wd(e,t){return wd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},wd(e,t)}function Dn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ep=function(e){e6(n,e);var t=Q8(n);function n(){var r;X8(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o)),Dn(qr(r),"state",{hovered:!1}),Dn(qr(r),"getStyle",function(a){var l=r.props.type==="dark"?oa.darkStyle:oa.lightStyle;return r.state.hovered?Dc({},l,{},oa.hoverStyle,{},a):r.props.disabled?Dc({},l,{},oa.disabledStyle,{},a):Dc({},l,{},a)}),Dn(qr(r),"mouseOver",function(){r.props.disabled||r.setState({hovered:!0})}),Dn(qr(r),"mouseOut",function(){r.props.disabled||r.setState({hovered:!1})}),Dn(qr(r),"click",function(a){r.props.disabled||r.props.onClick(a)}),r}return q8(n,[{key:"render",value:function(){var i=this.props,o=i.label,s=i.style,a=K8(i,["label","style"]);return ia.default.createElement("div",yd({},a,{role:"button",onClick:this.click,style:this.getStyle(s),onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}),ia.default.createElement(H8.GoogleIcon,this.props),ia.default.createElement("span",null,o))}}]),n}(ia.PureComponent);Nu.default=Ep;Dn(Ep,"propTypes",{label:Gr.default.string,disabled:Gr.default.bool,tabIndex:Gr.default.number,onClick:Gr.default.func,type:Gr.default.oneOf(["light","dark"]),style:Gr.default.object});Dn(Ep,"defaultProps",{label:"Sign in with Google",disabled:!1,type:"dark",tabIndex:0,onClick:function(){}});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"GoogleButton",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}});var t=n(Nu);function n(r){return r&&r.__esModule?r:{default:r}}})(zx);const t6=zg(zx);function n6(e){return qe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]})(e)}const r6=()=>{const{openMobileMenu:e,setOpenMobileMenu:t,closeMobileMenu:n}=E.useContext(ou);return e&&N(i6,{$openMobileMenu:!0,children:[S("button",{className:"close-mobile-navigation",onClick:n,children:S(n6,{})}),N("div",{className:"mobile-navigation-container",children:[S(pt,{to:"/",className:"logo-title",onClick:n,children:"You Shoes"}),S("div",{className:"mobile-navigation-links",children:S("ul",{children:Jy.map(r=>S("li",{children:S(ey,{to:r.url,onClick:n,children:r.page})},Sp()))})}),S("button",{className:"mobile-btn btn-login",children:"Login"}),S(t6,{})]})]})},i6=Fe.nav`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background: var(--header-black-clr);
  z-index: 9999;
  opacity: ${e=>e.$openMobileMenu?1:0};
  display: ${e=>e.$openMobileMenu?"block":"none"};
  transform: scale(${e=>e.$openMobileMenu?1:0});
  transition: all 0.4s ease-in-out;

  .close-mobile-navigation {
    background: none;
    border: none;
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;

    svg {
      font-size: 3rem;
      color: white;
    }
  }

  .mobile-navigation-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo-title {
      color: var(--primary-clr);
      font-weight: 600;
      font-size: 3rem;
    }
    .mobile-navigation-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ul {
        list-style: none;

        li {
          margin: 2rem 0;
          text-align: center;
          a {
            font-size: 2rem;
            color: var(--header-clr);
            transition: all 0.2s ease-in-out;
            &.active,
            &:hover {
              color: var(--primary-clr);
            }
          }
        }
      }
    }

    .mobile-btn.btn-login {
      font-size: 1rem;
      font-weight: 600;
      padding: 0.8rem 1rem;
      background: var(--secondary-clr);
      color: white;
      border: none;
      width: 240px;
      margin: 1rem 0;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
        filter: brightness(90%);
        color: white;
      }
    }
  }
`,o6=()=>S(U4,{children:S(s8,{children:N(gE,{children:[S(r6,{}),S(x8,{}),S(C8,{}),S(p8,{}),S(_8,{})]})})});Fc.createRoot(document.getElementById("root")).render(S(Ee.StrictMode,{children:S(o6,{})}));
