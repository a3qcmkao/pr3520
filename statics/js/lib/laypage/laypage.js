!function(){"use strict";function e(r){var s="laypagecss";e.dir="dir"in e?e.dir:n.getpath+"/statics/js/lib/laypage/skin/laypage.css",new n(r),e.dir&&!a[t](s)&&n.use(e.dir,s)}e.v="1.3";var a=document,t="getElementById",r="getElementsByTagName",s=0,n=function(e){var a=this,t=a.config=e||{};t.item=s++,a.render(!0)};n.on=function(e,a,t){return e.attachEvent?e.attachEvent("on"+a,function(){t.call(e,window.even)}):e.addEventListener(a,t,!1),n},n.getpath=function(){var e=document.scripts,a=e[e.length-1].src;return a.substring(0,a.lastIndexOf("/")+1)}(),n.use=function(t,s){var n=a.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e.dir,s&&(n.id=s),a[r]("head")[0].appendChild(n),n=null},n.prototype.type=function(){var e=this.config;return"object"==typeof e.cont?void 0===e.cont.length?2:3:void 0},n.prototype.view=function(){var a=this,t=a.config,r=[],s={};if(t.pages=0|t.pages,t.curr=0|t.curr||1,t.groups="groups"in t?0|t.groups:5,t.first="first"in t?t.first:"&#x9996;&#x9875;",t.last="last"in t?t.last:"&#x5C3E;&#x9875;",t.prev="prev"in t?t.prev:"&#x4E0A;&#x4E00;&#x9875;",t.next="next"in t?t.next:"&#x4E0B;&#x4E00;&#x9875;",t.pages<=0)return"";for(t.groups>t.pages&&(t.groups=t.pages),s.index=Math.ceil((t.curr+(t.groups>1&&t.groups!==t.pages?1:0))/(0===t.groups?1:t.groups)),t.curr>=0&&t.prev&&r.push('<a href="javascript:;" class="laypage_prev '+(1==t.curr?"disabled":"")+'" data-page="'+(t.curr-1)+'">'+t.prev+"</a>"),s.index>1&&t.first&&0!==t.groups?r.push('<a href="javascript:;" class="laypage_first" data-page="1"  title="&#x9996;&#x9875;">'+t.first+"</a><span>&#x2026;</span>"):s.index>1&&0!==t.groups&&r.push("<span>&#x2026;</span>"),s.poor=Math.floor((t.groups-1)/2),s.start=s.index>1?t.curr-s.poor:1,s.end=s.index>1?function(){var e=t.curr+(t.groups-s.poor-1);return e>t.pages?t.pages:e}():t.groups,s.end-s.start<t.groups-1&&(s.start=s.end-t.groups+1);s.start<=s.end;s.start++)r.push(s.start===t.curr?'<span class="laypage_curr" '+(/^#/.test(t.skin)?'style="background-color:'+t.skin+'"':"")+">"+s.start+"</span>":'<a href="javascript:;" data-page="'+s.start+'">'+s.start+"</a>");return t.pages>t.groups&&s.end<t.pages&&t.last&&0!==t.groups?r.push('<span>&#x2026;</span><a href="javascript:;" class="laypage_last" title="&#x5C3E;&#x9875;"  data-page="'+t.pages+'">'+t.last+"</a>"):t.pages>t.groups&&s.end<t.pages&&0!==t.groups&&r.push("<span>&#x2026;</span>"),s.flow=!t.prev&&0===t.groups,t.next&&r.push(function(){return'<a href="javascript:;" class="laypage_next '+(t.curr==t.pages?"disabled":"")+'" data-page="'+(t.curr+1)+'">'+t.next+"</a>"}()),'<div name="laypage'+e.v+'" class="laypage_main laypageskin_'+(t.skin?function(e){return/^#/.test(e)?"molv":e}(t.skin):"default")+'" id="laypage_'+a.config.item+'">'+r.join("")+function(){return t.skip?'<span class="laypage_total"><label class="total-page-desc">��'+t.pages+'ҳ</label><label>&#x5230;&#x7B2C;</label><input type="text" min="1" value="'+t.curr+'" onkeyup="this.value=this.value.replace(/\\D/, \'\');" class="laypage_skip"><label>&#x9875;</label><button type="button" class="laypage_btn">ȷ��</button></span>':""}()+"</div>"},n.prototype.jump=function(e){if(e){for(var a=this,t=a.config,s=e.children,p=e[r]("button")[0],i=e[r]("input")[0],o=0,u=s.length;u>o;o++)"a"===s[o].nodeName.toLowerCase()&&n.on(s[o],"click",function(){if(!this.className.match(/disabled/)){var e=0|this.getAttribute("data-page");t.curr=e,a.render()}});p&&n.on(p,"click",function(){var e=0|i.value.replace(/\s|\D/g,"");e&&e<=t.pages&&(t.curr=e,a.render())})}},n.prototype.render=function(e){var r=this,s=r.config,n=r.type(),p=r.view();2===n?s.cont.innerHTML=p:3===n?s.cont.html(p):a[t](s.cont).innerHTML=p,s.jump&&s.jump(s,e),r.jump(a[t]("laypage_"+s.item)),s.hash&&!e&&(location.hash="!"+s.hash+"="+s.curr)},"function"==typeof define?define(function(){return e}):"undefined"!=typeof exports?module.exports=e:window.laypage=e}();