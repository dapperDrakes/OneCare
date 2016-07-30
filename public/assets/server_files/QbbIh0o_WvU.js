if (self.CavalryLogger) { CavalryLogger.start_js(["utbZO"]); }

__d("FeedbackReactionType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NONE:0,LIKE:1,LOVE:2,WOW:3,HAHA:4,YAY:5,OUCH:6,SORRY:7,ANGER:8,CONFUSED:10,DOROTHY:11,TOTO:12};},null);
__d("VideoBroadcastAPIStatus",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={UNPUBLISHED:"UNPUBLISHED",LIVE:"LIVE",LIVE_STOPPED:"LIVE_STOPPED",PROCESSING:"PROCESSING",VOD:"VOD",SCHEDULED:"SCHEDULED"};},null);
__d('ReactTransitionEvents',['ExecutionEnvironment','getVendorPrefixedEventName'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=[];function i(){var m=c('getVendorPrefixedEventName')('animationend'),n=c('getVendorPrefixedEventName')('transitionend');if(m)h.push(m);if(n)h.push(n);}if(c('ExecutionEnvironment').canUseDOM)i();function j(m,n,o){m.addEventListener(n,o,false);}function k(m,n,o){m.removeEventListener(n,o,false);}var l={addEndEventListener:function(m,n){if(h.length===0){window.setTimeout(n,0);return;}h.forEach(function(o){j(m,o,n);});},removeEndEventListener:function(m,n){if(h.length===0)return;h.forEach(function(o){k(m,o,n);});}};f.exports=l;},null);
__d('ReactCSSTransitionGroupChild',['React','ReactDOM','CSSCore','ReactTransitionEvents','onlyChild'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=17,i=c('React').createClass({displayName:'ReactCSSTransitionGroupChild',propTypes:{name:c('React').PropTypes.oneOfType([c('React').PropTypes.string,c('React').PropTypes.shape({enter:c('React').PropTypes.string,leave:c('React').PropTypes.string,active:c('React').PropTypes.string}),c('React').PropTypes.shape({enter:c('React').PropTypes.string,enterActive:c('React').PropTypes.string,leave:c('React').PropTypes.string,leaveActive:c('React').PropTypes.string,appear:c('React').PropTypes.string,appearActive:c('React').PropTypes.string})]).isRequired,appear:c('React').PropTypes.bool,enter:c('React').PropTypes.bool,leave:c('React').PropTypes.bool,appearTimeout:c('React').PropTypes.number,enterTimeout:c('React').PropTypes.number,leaveTimeout:c('React').PropTypes.number},transition:function(j,k,l){var m=c('ReactDOM').findDOMNode(this);if(!m){if(k)k();return;}var n=this.props.name[j]||this.props.name+'-'+j,o=this.props.name[j+'Active']||n+'-active',p=null,q=function(r){if(r&&r.target!==m)return;clearTimeout(p);c('CSSCore').removeClass(m,n);c('CSSCore').removeClass(m,o);c('ReactTransitionEvents').removeEndEventListener(m,q);if(k)k();};c('CSSCore').addClass(m,n);this.queueClassAndNode(o,m);if(l){p=setTimeout(q,l);this.transitionTimeouts.push(p);}else c('ReactTransitionEvents').addEndEventListener(m,q);},queueClassAndNode:function(j,k){this.classNameAndNodeQueue.push({className:j,node:k});if(!this.timeout)this.timeout=setTimeout(this.flushClassNameAndNodeQueue,h);},flushClassNameAndNodeQueue:function(){if(this.isMounted())this.classNameAndNodeQueue.forEach(function(j){c('CSSCore').addClass(j.node,j.className);});this.classNameAndNodeQueue.length=0;this.timeout=null;},componentWillMount:function(){this.classNameAndNodeQueue=[];this.transitionTimeouts=[];},componentWillUnmount:function(){if(this.timeout)clearTimeout(this.timeout);this.transitionTimeouts.forEach(function(j){clearTimeout(j);});this.classNameAndNodeQueue.length=0;},componentWillAppear:function(j){if(this.props.appear){this.transition('appear',j,this.props.appearTimeout);}else j();},componentWillEnter:function(j){if(this.props.enter){this.transition('enter',j,this.props.enterTimeout);}else j();},componentWillLeave:function(j){if(this.props.leave){this.transition('leave',j,this.props.leaveTimeout);}else j();},render:function(){return c('onlyChild')(this.props.children);}});f.exports=i;},null);
__d('ReactTransitionChildMapping',['flattenChildren'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={getChildMapping:function(i,j){if(!i)return i;return c('flattenChildren')(i);},mergeChildMappings:function(i,j){i=i||{};j=j||{};function k(s){if(j.hasOwnProperty(s)){return j[s];}else return i[s];}var l={},m=[];for(var n in i)if(j.hasOwnProperty(n)){if(m.length){l[n]=m;m=[];}}else m.push(n);var o,p={};for(var q in j){if(l.hasOwnProperty(q))for(o=0;o<l[q].length;o++){var r=l[q][o];p[l[q][o]]=k(r);}p[q]=k(q);}for(o=0;o<m.length;o++)p[m[o]]=k(m[o]);return p;}};f.exports=h;},null);
__d('ReactTransitionGroup',['React','ReactInstanceMap','ReactTransitionChildMapping','emptyFunction'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').createClass({displayName:'ReactTransitionGroup',propTypes:{component:c('React').PropTypes.any,childFactory:c('React').PropTypes.func},getDefaultProps:function(){return {component:'span',childFactory:c('emptyFunction').thatReturnsArgument};},getInitialState:function(){return {children:c('ReactTransitionChildMapping').getChildMapping(this.props.children)};},componentWillMount:function(){this.currentlyTransitioningKeys={};this.keysToEnter=[];this.keysToLeave=[];},componentDidMount:function(){var i=this.state.children;for(var j in i)if(i[j])this.performAppear(j);},componentWillReceiveProps:function(i){var j;j=c('ReactTransitionChildMapping').getChildMapping(i.children);var k=this.state.children;this.setState({children:c('ReactTransitionChildMapping').mergeChildMappings(k,j)});var l;for(l in j){var m=k&&k.hasOwnProperty(l);if(j[l]&&!m&&!this.currentlyTransitioningKeys[l])this.keysToEnter.push(l);}for(l in k){var n=j&&j.hasOwnProperty(l);if(k[l]&&!n&&!this.currentlyTransitioningKeys[l])this.keysToLeave.push(l);}},componentDidUpdate:function(){var i=this.keysToEnter;this.keysToEnter=[];i.forEach(this.performEnter);var j=this.keysToLeave;this.keysToLeave=[];j.forEach(this.performLeave);},performAppear:function(i){this.currentlyTransitioningKeys[i]=true;var j=this.refs[i];if(j.componentWillAppear){j.componentWillAppear(this._handleDoneAppearing.bind(this,i));}else this._handleDoneAppearing(i);},_handleDoneAppearing:function(i){var j=this.refs[i];if(j.componentDidAppear)j.componentDidAppear();delete this.currentlyTransitioningKeys[i];var k;k=c('ReactTransitionChildMapping').getChildMapping(this.props.children);if(!k||!k.hasOwnProperty(i))this.performLeave(i);},performEnter:function(i){this.currentlyTransitioningKeys[i]=true;var j=this.refs[i];if(j.componentWillEnter){j.componentWillEnter(this._handleDoneEntering.bind(this,i));}else this._handleDoneEntering(i);},_handleDoneEntering:function(i){var j=this.refs[i];if(j.componentDidEnter)j.componentDidEnter();delete this.currentlyTransitioningKeys[i];var k;k=c('ReactTransitionChildMapping').getChildMapping(this.props.children);if(!k||!k.hasOwnProperty(i))this.performLeave(i);},performLeave:function(i){this.currentlyTransitioningKeys[i]=true;var j=this.refs[i];if(j.componentWillLeave){j.componentWillLeave(this._handleDoneLeaving.bind(this,i));}else this._handleDoneLeaving(i);},_handleDoneLeaving:function(i){var j=this.refs[i];if(j.componentDidLeave)j.componentDidLeave();delete this.currentlyTransitioningKeys[i];var k;k=c('ReactTransitionChildMapping').getChildMapping(this.props.children);if(k&&k.hasOwnProperty(i)){this.performEnter(i);}else this.setState(function(l){var m=Object.assign({},l.children);delete m[i];return {children:m};});},render:function(){var i=[];for(var j in this.state.children){var k=this.state.children[j];if(k)i.push(c('React').cloneElement(this.props.childFactory(k),{ref:j,key:j}));}var l=Object.assign({},this.props);delete l.transitionLeave;delete l.transitionName;delete l.transitionAppear;delete l.transitionEnter;delete l.childFactory;delete l.transitionLeaveTimeout;delete l.transitionEnterTimeout;delete l.transitionAppearTimeout;delete l.component;return c('React').createElement(this.props.component,l,i);}});f.exports=h;},null);
__d('ReactCSSTransitionGroup',['React','ReactTransitionGroup','ReactCSSTransitionGroupChild'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(j){var k='transition'+j+'Timeout',l='transition'+j;return function(m){if(m[l])if(m[k]==null){return new Error(k+' wasn\'t supplied to ReactCSSTransitionGroup: '+'this can cause unreliable animations and won\'t be supported in '+'a future version of React. See '+'https://fb.me/react-animation-transition-group-timeout for more '+'information.');}else if(typeof m[k]!=='number')return new Error(k+' must be a number (in milliseconds)');};}var i=c('React').createClass({displayName:'ReactCSSTransitionGroup',propTypes:{transitionName:c('ReactCSSTransitionGroupChild').propTypes.name,transitionAppear:c('React').PropTypes.bool,transitionEnter:c('React').PropTypes.bool,transitionLeave:c('React').PropTypes.bool,transitionAppearTimeout:h('Appear'),transitionEnterTimeout:h('Enter'),transitionLeaveTimeout:h('Leave')},getDefaultProps:function(){return {transitionAppear:false,transitionEnter:true,transitionLeave:true};},_wrapChild:function(j){return c('React').createElement(c('ReactCSSTransitionGroupChild'),{name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave,appearTimeout:this.props.transitionAppearTimeout,enterTimeout:this.props.transitionEnterTimeout,leaveTimeout:this.props.transitionLeaveTimeout},j);},render:function(){return c('React').createElement(c('ReactTransitionGroup'),Object.assign({},this.props,{childFactory:this._wrapChild}));}});f.exports=i;},null);
__d('AnimatedImageMarauderLogger',['MarauderLogger'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){'use strict';this.$AnimatedImageMarauderLogger1=false;this.$AnimatedImageMarauderLogger2=null;this.$AnimatedImageMarauderLogger3=null;this.$AnimatedImageMarauderLogger4=false;this.$AnimatedImageMarauderLogger5=false;this.$AnimatedImageMarauderLogger6=false;this.$AnimatedImageMarauderLogger7=null;this.$AnimatedImageMarauderLogger8=false;this.$AnimatedImageMarauderLogger9=null;this.$AnimatedImageMarauderLogger10=null;this.$AnimatedImageMarauderLogger11=0;this.$AnimatedImageMarauderLogger12=false;}h.prototype.initSession=function(i,j,k,l,m,n){'use strict';this.$AnimatedImageMarauderLogger1=i;this.$AnimatedImageMarauderLogger13=j;this.$AnimatedImageMarauderLogger6=l;this.$AnimatedImageMarauderLogger7=k;this.$AnimatedImageMarauderLogger8=m;this.$AnimatedImageMarauderLogger9=n;this.$AnimatedImageMarauderLogger4=true;};h.prototype.hasCurrentSession=function(){'use strict';return this.$AnimatedImageMarauderLogger4;};h.prototype.logAnimatedRender=function(i){'use strict';if(this.$AnimatedImageMarauderLogger10&&this.$AnimatedImageMarauderLogger11===0){this.$AnimatedImageMarauderLogger2=i-this.$AnimatedImageMarauderLogger10;this.$AnimatedImageMarauderLogger5=true;}};h.prototype.logStaticClick=function(i){'use strict';this.$AnimatedImageMarauderLogger10=i;this.$AnimatedImageMarauderLogger12=true;};h.prototype.endSession=function(i){'use strict';if(this.$AnimatedImageMarauderLogger9)this.$AnimatedImageMarauderLogger11=i-this.$AnimatedImageMarauderLogger9;this.$AnimatedImageMarauderLogger4=false;this.logSession();};h.prototype.logSession=function(){'use strict';var i={autoplay:this.$AnimatedImageMarauderLogger1,download_time:this.$AnimatedImageMarauderLogger2,is_video:this.$AnimatedImageMarauderLogger6,image_src:this.$AnimatedImageMarauderLogger7,fbid:this.$AnimatedImageMarauderLogger13,load_succeeded:this.$AnimatedImageMarauderLogger5,plays_inline:this.$AnimatedImageMarauderLogger8,time_spent:this.$AnimatedImageMarauderLogger11,was_tapped:this.$AnimatedImageMarauderLogger12};c('MarauderLogger').log('animated_image_session',undefined,i);};f.exports=h;},null);
__d('FeedAnimatedImageShare.react',['cx','DOMContainer.react','OnVisible.react','Image.react','AnimatedImageMarauderLogger','Event','React','ReactDOM','ReactTransitionEvents','SubscriptionsHandler','VideoPlayerReason'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=20;i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return n=(o=j.constructor).call.apply(o,[this].concat(q)),this.state={disableAutoplay:false,hasPlayedAtleastOnce:false,isLoaded:false,isLoading:false,isPlaying:false,wasPlaying:false},this.$FeedAnimatedImageShare1=null,this.$FeedAnimatedImageShare3=function(){if(!this.props.videoController||!this.refs.videoPlayer)return;c('ReactDOM').findDOMNode(this.refs.videoPlayer).addEventListener('click',this.$FeedAnimatedImageShare4);this.props.videoController.addListener('finishPlayback',function(){window.setTimeout(function(){this.props.videoController.play(c('VideoPlayerReason').LOOP);}.bind(this),1);}.bind(this));this.$FeedAnimatedImageShare1=new (c('SubscriptionsHandler'))();this.$FeedAnimatedImageShare1.addSubscriptions(c('Event').listen(window,'blur',this.$FeedAnimatedImageShare5),c('Event').listen(window,'focus',this.$FeedAnimatedImageShare6));}.bind(this),this.$FeedAnimatedImageShare7=function(){return this.props.autoplay&&!this.state.disableAutoplay;}.bind(this),this.$FeedAnimatedImageShare8=function(){if(this.state.isLoading)return;this.setState({isLoading:true});var s=new Image();s.onload=function(){this.setState({hasPlayedAtleastOnce:true,isLoaded:true,isLoading:false});this.$FeedAnimatedImageShare2.logAnimatedRender(Date.now());}.bind(this);s.src=this.props.animatedSrc;}.bind(this),this.$FeedAnimatedImageShare4=function(){this.setState({disableAutoplay:true});if(!this.props.isPlayableInline){window.open(this.props.href,'_blank');return;}if(this.state.isPlaying){this.pause(c('VideoPlayerReason').USER);}else this.play(c('VideoPlayerReason').USER);}.bind(this),this.$FeedAnimatedImageShare9=function(){var s=this.props.isPlayableInline&&(!this.state.isPlaying||this.state.isLoading),t=this.state.isLoading,u=!this.state.hasPlayedAtleastOnce&&this.state.isLoaded;return (c('React').createElement('div',{className:!s?"hidden_elem":'',onClick:this.$FeedAnimatedImageShare4},c('React').createElement('div',{ref:'playButton',className:"_393-"+(u?' '+"_30a":'')}),c('React').createElement('div',{className:"_30b"+(t?' '+"_30c":'')+(u?' '+"_30e":'')}),c('React').createElement('div',{className:"_30h"+(u?' '+"_30i":'')})));}.bind(this),this.$FeedAnimatedImageShare10=function(){this.$FeedAnimatedImageShare2.initSession(this.props.autoplay,this.props.fbid,this.props.href,this.props.isPlayableInline,!!this.props.videoController,Date.now());}.bind(this),this.$FeedAnimatedImageShare11=function(){if(this.$FeedAnimatedImageShare2&&this.$FeedAnimatedImageShare2.hasCurrentSession())this.$FeedAnimatedImageShare2.endSession(Date.now());}.bind(this),this.$FeedAnimatedImageShare6=function(){this.$FeedAnimatedImageShare10();if(!this.state.isPlaying&&this.props.isPlayableInline&&(this.$FeedAnimatedImageShare7()||this.state.wasPlaying))this.play(this.state.wasPlaying?c('VideoPlayerReason').PAGE_VISIBILITY:c('VideoPlayerReason').AUTOPLAY);}.bind(this),this.$FeedAnimatedImageShare5=function(){this.$FeedAnimatedImageShare11();this.setState({wasPlaying:this.state.isPlaying});if(this.state.isPlaying)this.pause(c('VideoPlayerReason').PAGE_VISIBILITY);}.bind(this),this.$FeedAnimatedImageShare12=function(){if(!this.props.staticSrc)return null;return (c('React').createElement(c('Image.react'),{className:"_9_m _30j",src:this.props.staticSrc,width:this.props.width,height:this.props.height,onClick:this.$FeedAnimatedImageShare4}));}.bind(this),this.$FeedAnimatedImageShare13=function(){return (c('React').createElement(c('Image.react'),{className:"_9_m",src:this.props.animatedSrc,width:this.props.width,height:this.props.height,onClick:this.$FeedAnimatedImageShare4}));}.bind(this),this.$FeedAnimatedImageShare14=function(){if(!this.state.isPlaying||!this.state.isLoaded||!this.props.isPlayableInline)return this.$FeedAnimatedImageShare12();return this.$FeedAnimatedImageShare13();}.bind(this),this.$FeedAnimatedImageShare15=function(){if(!this.props.videoElement)return null;return (c('React').createElement('span',null,c('React').createElement('span',{className:!this.state.hasPlayedAtleastOnce?"hidden_elem":''},c('React').createElement(c('DOMContainer.react'),{ref:'videoPlayer'},this.props.videoElement)),c('React').createElement('span',{className:this.state.hasPlayedAtleastOnce?"hidden_elem":''},this.$FeedAnimatedImageShare12())));}.bind(this),this.$FeedAnimatedImageShare16=function(){if(this.state.isPlaying||!this.props.overlay)return null;return c('React').createElement(c('DOMContainer.react'),null,this.props.overlay);}.bind(this),this.play=function(s){this.$FeedAnimatedImageShare2.logStaticClick(Date.now());this.setState({isPlaying:true});if(this.props.videoController){if(!this.state.hasPlayedAtleastOnce)this.setState({hasPlayedAtleastOnce:true});this.props.videoController.play(s);}else this.$FeedAnimatedImageShare8();}.bind(this),this.pause=function(s){this.setState({isPlaying:false});if(this.props.videoController)this.props.videoController.pause(s);}.bind(this),n;}m.prototype.componentDidMount=function(){'use strict';this.$FeedAnimatedImageShare2=new (c('AnimatedImageMarauderLogger'))();if(this.refs.playButton)c('ReactTransitionEvents').addEndEventListener(c('ReactDOM').findDOMNode(this.refs.playButton),this.play);this.$FeedAnimatedImageShare3();};m.prototype.componentWillUnmount=function(){'use strict';if(this.$FeedAnimatedImageShare1)this.$FeedAnimatedImageShare1.release();};m.prototype.render=function(){'use strict';var n=-1*(this.props.height*l/100);return (c('React').createElement(c('OnVisible.react'),{onVisible:this.$FeedAnimatedImageShare6,onHidden:this.$FeedAnimatedImageShare5,buffer:n},c('React').createElement('div',null,this.$FeedAnimatedImageShare15()||this.$FeedAnimatedImageShare14(),this.$FeedAnimatedImageShare9(),this.$FeedAnimatedImageShare16())));};m.propTypes={animatedSrc:k.string,autoplay:k.bool,fbid:k.string,height:k.number.isRequired,href:k.string.isRequired,isPlayableInline:k.bool,overlay:k.object,staticSrc:k.string,videoController:k.object,videoElement:k.object,width:k.number.isRequired};m.defaultProps={autoplay:false,isPlayableInline:false};f.exports=m;},null);
__d('DialogExpansion',['Animation','DialogPosition','LoadingDialogDimensions','Style'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=400,i=100;function j(k){'use strict';this._dialog=k;this._fixedTopMargin=k.getFixedTopPosition();this._ignoreFixedTopInShortViewport=k.shouldIgnoreFixedTopInShortViewport();}j.prototype.enable=function(){'use strict';this._subscription=this._dialog.subscribe('aftershow',this._onAfterShow.bind(this));};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};j.prototype.setTargetWidth=function(k){'use strict';this._targetWidth=k;};j.prototype._onAfterShow=function(){'use strict';this._outer=this._dialog.getContentRoot();this._inner=this._dialog.getInnerContent();if(isNaN(parseInt(c('Style').get(this._inner,'height'),10)))return;var k=this._getWidth(),l=c('LoadingDialogDimensions').HEIGHT,m=c('DialogPosition').calculateTopMargin(k,l);c('Style').apply(this._inner,{opacity:'0',width:this._dialog.getWidth()+'px'});c('Style').apply(this._outer,{width:k+'px',height:l+'px',marginTop:m+'px',overflow:'hidden'});setTimeout(function(){var n=parseInt(this._dialog.getWidth(),10);if(this._targetWidth)n=this._targetWidth;var o=parseInt(c('Style').get(this._inner,'height'),10),p=c('DialogPosition').calculateTopMargin(n,o,this._fixedTopMargin,this._ignoreFixedTopInShortViewport);this._growThenFade(n,o,p);}.bind(this),100);};j.prototype._growThenFade=function(k,l,m){'use strict';new (c('Animation'))(this._outer).to('width',k).to('height',l).to('marginTop',m).duration(h).ease(c('Animation').ease.both).ondone(this._fadeIn.bind(this)).go();};j.prototype._fadeIn=function(){'use strict';c('Style').set(this._outer,'overflow','');c('Style').set(this._outer,'height','');new (c('Animation'))(this._inner).from('opacity',0).to('opacity',1).ondone(function(){this._dialog.inform('afterexpand');}.bind(this)).duration(i).go();};j.prototype._getWidth=function(){'use strict';return c('LoadingDialogDimensions').WIDTH;};f.exports=j;},null);