if (self.CavalryLogger) { CavalryLogger.start_js(["XR8\/R"]); }

__d("XServiceWorkerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/sw\/",{s:{type:"String",required:true}});},null);
__d('ReactBlueBarBrowserPushMuteLink.react',['fbt','BrowserPushMuteOptions','React','XServiceWorkerController','nullthrows'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();function k(){var m=c('XServiceWorkerController').getURIBuilder().setString('s','push').getURI();m.setPath(m.getPath().replace(/\/$/,''));return m.toString();}i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.shouldComponentUpdate=function(){'use strict';return false;};l.prototype.render=function(){'use strict';return (c('React').createElement('span',{ref:function(m){return this.$ReactBlueBarBrowserPushMuteLink1=m;}.bind(this)},h._("Mute")));};l.prototype.componentDidMount=function(){'use strict';c('BrowserPushMuteOptions').showMuteOptions(c('nullthrows')(this.$ReactBlueBarBrowserPushMuteLink1),k(),this.props.appID);};function l(){'use strict';i.apply(this,arguments);}f.exports=l;},null);