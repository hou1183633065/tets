webpackJsonp([3],{Luci:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Ht/P");var i={components:{requireLogin:function(t){return s.a.get("/connect/oauth2/authorize?"+t)}},data:function(){return{msg:"注册登录"}},methods:{wxLogin:function(){console.log(this.runState()),this.wxRegister("onMenuShareAppMessage")}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login"},[e("p",[this._v(this._s(this.msg))]),this._v(" "),e("van-button",{attrs:{type:"primary"},on:{click:this.wxLogin}},[this._v("微信登录")])],1)},staticRenderFns:[]},o=n("VU/8")(i,r,!1,null,null,null);e.default=o.exports}});