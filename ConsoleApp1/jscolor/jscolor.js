<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Schema Designer | DB Designer</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
  var _rollbarConfig = {
      accessToken: "7cae76bdce6d4737a5109edcddc6577e",
      ignoredMessages: ['(unknown): Script error.'],
      captureUncaught: true,
      payload: {
          environment: "production"
      }
};
// Rollbar Snippet
!function(r){function o(e){if(t[e])return t[e].exports;var n=t[e]={exports:{},id:e,loaded:!1};return r[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var t={};return o.m=r,o.c=t,o.p="",o(0)}([function(r,o,t){"use strict";var e=t(1).Rollbar,n=t(2);_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||"https://d37gvrvc0wt4s1.cloudfront.net/js/v1.8/rollbar.min.js";var a=e.init(window,_rollbarConfig),i=n(a,_rollbarConfig);a.loadFull(window,document,!_rollbarConfig.async,_rollbarConfig,i)},function(r,o){"use strict";function t(r){return function(){try{return r.apply(this,arguments)}catch(o){try{console.error("[Rollbar]: Internal error",o)}catch(t){}}}}function e(r,o,t){window._rollbarWrappedError&&(t[4]||(t[4]=window._rollbarWrappedError),t[5]||(t[5]=window._rollbarWrappedError._rollbarContext),window._rollbarWrappedError=null),r.uncaughtError.apply(r,t),o&&o.apply(window,t)}function n(r){var o=function(){var o=Array.prototype.slice.call(arguments,0);e(r,r._rollbarOldOnError,o)};return o.belongsToShim=!0,o}function a(r){this.shimId=++s,this.notifier=null,this.parentShim=r,this._rollbarOldOnError=null}function i(r){var o=a;return t(function(){if(this.notifier)return this.notifier[r].apply(this.notifier,arguments);var t=this,e="scope"===r;e&&(t=new o(this));var n=Array.prototype.slice.call(arguments,0),a={shim:t,method:r,args:n,ts:new Date};return window._rollbarShimQueue.push(a),e?t:void 0})}function l(r,o){if(o.hasOwnProperty&&o.hasOwnProperty("addEventListener")){var t=o.addEventListener;o.addEventListener=function(o,e,n){t.call(this,o,r.wrap(e),n)};var e=o.removeEventListener;o.removeEventListener=function(r,o,t){e.call(this,r,o&&o._wrapped?o._wrapped:o,t)}}}var s=0;a.init=function(r,o){var e=o.globalAlias||"Rollbar";if("object"==typeof r[e])return r[e];r._rollbarShimQueue=[],r._rollbarWrappedError=null,o=o||{};var i=new a;return t(function(){if(i.configure(o),o.captureUncaught){i._rollbarOldOnError=r.onerror,r.onerror=n(i);var t,a,s="EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for(t=0;t<s.length;++t)a=s[t],r[a]&&r[a].prototype&&l(i,r[a].prototype)}return r[e]=i,i})()},a.prototype.loadFull=function(r,o,e,n,a){var i=function(){var o;if(void 0===r._rollbarPayloadQueue){var t,e,n,i;for(o=new Error("rollbar.js did not load");t=r._rollbarShimQueue.shift();)for(n=t.args,i=0;i<n.length;++i)if(e=n[i],"function"==typeof e){e(o);break}}"function"==typeof a&&a(o)},l=!1,s=o.createElement("script"),u=o.getElementsByTagName("script")[0],p=u.parentNode;s.crossOrigin="",s.src=n.rollbarJsUrl,s.async=!e,s.onload=s.onreadystatechange=t(function(){if(!(l||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){s.onload=s.onreadystatechange=null;try{p.removeChild(s)}catch(r){}l=!0,i()}}),p.insertBefore(s,u)},a.prototype.wrap=function(r,o){try{var t;if(t="function"==typeof o?o:function(){return o||{}},"function"!=typeof r)return r;if(r._isWrap)return r;if(!r._wrapped){r._wrapped=function(){try{return r.apply(this,arguments)}catch(o){throw o._rollbarContext=t()||{},o._rollbarContext._wrappedSource=r.toString(),window._rollbarWrappedError=o,o}},r._wrapped._isWrap=!0;for(var e in r)r.hasOwnProperty(e)&&(r._wrapped[e]=r[e])}return r._wrapped}catch(n){return r}};for(var u="log,debug,info,warn,warning,error,critical,global,configure,scope,uncaughtError".split(","),p=0;p<u.length;++p)a.prototype[u[p]]=i(u[p]);r.exports={Rollbar:a,_rollbarWindowOnError:e}},function(r,o){"use strict";r.exports=function(r,o){return function(t){if(!t&&!window._rollbarInitialized){var e=window.RollbarNotifier,n=o||{},a=n.globalAlias||"Rollbar",i=window.Rollbar.init(n,r);i._processShimQueue(window._rollbarShimQueue||[]),window[a]=i,window._rollbarInitialized=!0,e.processPayloads()}}}}]);
// End Rollbar Snippet
</script>
  <!--[if lt IE 9]>
  <script src="/excanvas.min.js"></script>
  <![endif]-->
  <link rel="stylesheet" media="all" href="/assets/application-eb96851b106371a3a4f85b0516295deff823392baf83697c9b56f8809448eab0.css" />
  <script src="/assets/application-b490c2968028ab38ceda838be7e98eb986b7b865a50fa2218a0ed9a442aaf0ba.js"></script>
  <script src="/jscolor/jscolor.js" type="text/javascript"></script>
  <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="AaFPG9fXt0kpvCTkKGKBSpSq/nsf3smKPG8eLdoqXt+VnviQfVFnW7RTGpmDGva/S6WHhgLwCCADKeIC/5867w==" />
  <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://www.dbdesigner.net/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://www.dbdesigner.net/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://www.dbdesigner.net/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://www.dbdesigner.net/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://www.dbdesigner.net/apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://www.dbdesigner.net/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://www.dbdesigner.net/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://www.dbdesigner.net/apple-touch-icon-152x152.png" />
  <link rel="icon" type="image/png" href="https://www.dbdesigner.net/favicon-196x196.png" sizes="196x196" />
  <link rel="icon" type="image/png" href="https://www.dbdesigner.net/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/png" href="https://www.dbdesigner.net/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="https://www.dbdesigner.net/favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="https://www.dbdesigner.net/favicon-128.png" sizes="128x128" />
</head>
<body>
  <div class="app-container">
	<div class="toolbar">
		<div class="notification">Notification</div>
	</div>
	<div class="canvas-container">
		<div class="init-loading"><i class="icon-spin1 animate-spin"></i></div>
		<canvas id="graph" class="canvas" width="3840" height="2400"></canvas>
		<div class="selection"></div>
	</div>
	<div class="resizer"></div>
	<div class="sidebar"></div>
	<div style="display: none">
		<img id="cache-image-bg" src="/assets/canvas-background-382ddae37df2afda79a647cf643277cc012d079c989b71853f3b9c6f2908c167.png" alt="Canvas background" />
		<img id="cache-image-key" src="/assets/key-0f0ed284afcf94f728410e720ca9ac84107d90a676864c780b0a3ddd70d8e58b.png" alt="Key" />
		<img id="cache-image-key-ai" src="/assets/key_ai-24ad7604a9cd84fea26fb6d92893079145c7a266d772e7bed9f82814729f524e.png" alt="Key ai" />
		<img id="cache-image-fk" src="/assets/table_relationship-50286182fcbd7f9cd9dc4f2b496a9152552d43285cb97dcab3f88f08f16734b2.png" alt="Table relationship" />
		<img id="cache-image-nn" src="/assets/notnull-a34e5e8bb4c0ac6157b22a1eb4c4cc75e05b55b62cf81e9814d87dab335aef7e.png" alt="Notnull" />
		<img id="cache-image-ai" src="/assets/ai-5ad4475567db2451cc26ce4e7f53c0bd7c07ba5593377ce938eefe47da2c93cc.png" alt="Ai" />
		<img src="/dbdesigner_logo_bw.png" id="cache-image-bw-logo" />
	</div>
</div>
<script>
window.userinfo = {
	login: false,
	username: "Guest",
	email: "nobody@dbdesigner.net",
	avatar: "",
	tmpid: "0"
};
window.renv = 'production';
</script>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-11380314-9', 'auto');
    ga('send', 'pageview');
  </script>
</body>
</html>
