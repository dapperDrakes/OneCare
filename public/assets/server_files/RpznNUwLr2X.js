if (self.CavalryLogger) { CavalryLogger.start_js(["pTWs+"]); }

__d('UFIFeedbackContext.react',['React','UFICentralUpdates','UFIFeedbackTargets'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return l=(m=i.constructor).call.apply(m,[this].concat(o)),this.state={contextArgs:this.props.contextArgs,feedback:null},this.$UFIFeedbackContext1=null,this.loadFeedbackTarget=function(q){if(!this.$UFIFeedbackContext1)this.$UFIFeedbackContext1=c('UFIFeedbackTargets').getFeedbackTarget(q,function(r){this.$UFIFeedbackContext2=null;this.setState({feedback:r});}.bind(this));}.bind(this),l;}k.prototype.componentDidMount=function(){this.loadFeedbackTarget(this.state.contextArgs.ftentidentifier);this.ufiCentralUpdatesSubscriptions=[c('UFICentralUpdates').subscribe('instance-updated',function(l,m){var n=this.state.contextArgs;if(n.instanceid in m.updates)this.loadFeedbackTarget(n.ftentidentifier);}.bind(this)),c('UFICentralUpdates').subscribe('feedback-updated',function(l,m){var n=this.state.contextArgs;if(n.ftentidentifier in m.updates)this.loadFeedbackTarget(n.ftentidentifier);}.bind(this))];};k.prototype.componentWillUnmount=function(){this.ufiCentralUpdatesSubscriptions.forEach(function(l){return l&&c('UFICentralUpdates').unsubscribe(l);});if(this.$UFIFeedbackContext1)c('UFIFeedbackTargets').unsubscribe(this.$UFIFeedbackContext1);};k.prototype.render=function(){if(this.state.feedback)return this.props.render(this.state.contextArgs,this.state.feedback);return null;};k.propTypes={contextArgs:j.object.isRequired,render:j.func.isRequired};k.contextTypes={stores:j.object};f.exports=k;},null);
__d('UFIAddCommentController',['Parent','React','ReactDOM','UFIActionTypes','UFIAddComment.react','UFICallbackStore','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFIInstanceState','UFINewCommentNotifier'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();h.factory=function(i,j){'use strict';new h(i,j);};function h(i,j){'use strict';this.$UFIAddCommentController1=i;this.$UFIAddCommentController2=j;this.$UFIAddCommentController2.rootid=i.id;this.$UFIAddCommentController3=new (c('UFIDispatcher'))();this.$UFIAddCommentController4={UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c('UFIActionTypes').ADD_COMMENT.SUBMIT_NEW,function(k){return c('UFINewCommentNotifier').onNewComment(c('Parent').byTag(i,'form'),this.$UFIAddCommentController2,k.comment,k.target,k.replyCommentID,k.timestamp);}.bind(this));this.render();}h.prototype.render=function(){'use strict';var i=c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c('ReactDOM').render(i,this.$UFIAddCommentController1);};h.prototype.renderAddComment=function(i,j){'use strict';var k=c('UFIInstanceState').getKeyForInstance(i.instanceid,'isediting');if(k||!j||!j.cancomment||!j.actorforpost)return null;return (c('React').createElement(c('UFIAddComment.react'),{viewerActorID:j.actorforpost,replyCommentID:null,targetID:j.ownerid,initialData:null,ref:null,withoutSeparator:null,editingComment:{},isEditing:false,mentionsDataSource:j.mentionsdatasource,showSendOnEnterTip:j.showsendonentertip,allowPhotoAttachments:j.allowphotoattachments&&!i.islivestreaming,allowVideoAttachments:j.allowvideoattachments&&!i.islivestreaming,allowStickerAttachments:j.allowstickerattachments&&!i.islivestreaming,contextArgs:i,subtitle:j.subtitle,isQAndA:j.isqanda}));};f.exports=h;},null);
__d('MentionsInputTypeaheadView.react',['cx','MentionsTypeaheadViewItem.react','React'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return m=(n=j.constructor).call.apply(n,[this].concat(p)),this.$MentionsInputTypeaheadView1=function(r){var s=r===this.props.highlightedEntry;return (c('React').createElement(c('MentionsTypeaheadViewItem.react'),{key:r.getUniqueID(),entry:r,highlighted:s,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));}.bind(this),m;}l.prototype.render=function(){'use strict';var m="_5u8_"+(!this.props.entries.length?' '+"_5u90":'');return (c('React').createElement('ul',{className:m,role:'listbox',id:this.props.id},this.props.entries.map(this.$MentionsInputTypeaheadView1)));};l.propTypes={id:k.string,highlightedEntry:k.object,entries:k.array.isRequired,onSelect:k.func.isRequired,onHighlight:k.func,onRenderHighlight:k.func};f.exports=l;},null);
__d('PhotoMultiPhotosThumb',['Event','Style'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=1200,i={init:function(j,k){var l=null,m=0;function n(p){m=p;k.forEach(function(q,r){c('Style').set(q,'opacity',r===p?1:0);});}function o(){n((m+1)%k.length);l=setTimeout(o,h);}c('Event').listen(j,'mouseenter',function(){if(l)return;m=0;o();});c('Event').listen(j,'mouseleave',function(){n(0);window.clearTimeout(l);l=null;});}};f.exports=i;},null);
__d('ElementVisibilityObserver',['EventEmitter','getElementRect'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j={notvisible:'notvisible',visible:'visible',fullyvisible:'fullyvisible'},k={visiblestart:'visiblestart',visibleend:'visibleend',fullyvisiblestart:'fullyvisiblestart',fullyvisibleend:'fullyvisibleend'};function l(n,o){var p=(n?1:0)+(o?1:0);switch(p){case 0:return j.notvisible;case 1:return j.visible;case 2:return j.fullyvisible;}throw new Error('This cannot happen but keeps flow happy. Happy flow.');}h=babelHelpers.inherits(m,c('EventEmitter'));i=h&&h.prototype;function m(n){i.constructor.call(this);this.$ElementVisibilityObserver1=n;this.$ElementVisibilityObserver2=false;this.$ElementVisibilityObserver3=false;}m.prototype.getCurrentState=function(){return l(this.$ElementVisibilityObserver2,this.$ElementVisibilityObserver3);};m.prototype.onMove=function(n){var o=c('getElementRect')(this.$ElementVisibilityObserver1),p=o.top>n.top&&o.top<n.bottom,q=o.bottom>n.top&&o.bottom<n.bottom,r=l(this.$ElementVisibilityObserver2,this.$ElementVisibilityObserver3),s=l(q,p);if(r==s)return;switch(r){case j.notvisible:this.emit(k.visiblestart);break;case j.fullyvisible:this.emit(k.fullyvisibleend);break;}switch(s){case j.notvisible:this.emit(k.visibleend);break;case j.fullyvisible:this.emit(k.fullyvisiblestart);break;}this.$ElementVisibilityObserver2=q;this.$ElementVisibilityObserver3=p;};f.exports.ElementVisibilityObserver=m;f.exports.VISIBILITY=j;f.exports.VISIBILITY_CHANGE=k;},null);
__d('VisibilityObserver',['ElementVisibilityObserver','EmitterSubscription','onViewportChanged'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('ElementVisibilityObserver').ElementVisibilityObserver;function i(){this.$VisibilityObserver1=[];var j=c('onViewportChanged')(this.$VisibilityObserver4.bind(this));this.$VisibilityObserver2=j.scheduleCheck;this.$VisibilityObserver3=j.remove;}i.prototype.removeSubscriptions=function(){this.$VisibilityObserver3();};i.prototype.addListener=function(j,k,l){var m=this.$VisibilityObserver5(j);return m.addListener(k,l);};i.prototype.once=function(j,k,l){var m=this.$VisibilityObserver5(j);return m.once(k,l);};i.prototype.getCurrentState=function(j){return this.$VisibilityObserver5(j).getCurrentState();};i.prototype.$VisibilityObserver5=function(j){for(var k=this.$VisibilityObserver1,l=Array.isArray(k),m=0,k=l?k:k[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var n;if(l){if(m>=k.length)break;n=k[m++];}else{m=k.next();if(m.done)break;n=m.value;}var o=n;if(o.element===j)return o;}var p=new h(j);this.$VisibilityObserver1.push(p);this.$VisibilityObserver2();return p;};i.prototype.$VisibilityObserver4=function(j){this.$VisibilityObserver1.forEach(function(k){return k.onMove(j);});};f.exports.instance=new i();f.exports.VISIBILITY=c('ElementVisibilityObserver').VISIBILITY;f.exports.VISIBILITY_CHANGE=c('ElementVisibilityObserver').VISIBILITY_CHANGE;},null);
__d('easeInOutInterpolate',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=function(j){!function(k){return 0;}?h(0):void 0;return Math.cos((j+1)*Math.PI)/2+.5;};f.exports=i;},null);
__d("d3/time/format-utc",["d3/time/time","d3/time/format"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3/time/time")._utc,i=function(j){var k=c("d3/time/format")(j);function l(m){try{c("d3/time/time")._time=h;var n=new (c("d3/time/time")._time)();n._=m;return k(n);}finally{c("d3/time/time")._time=Date;}}l.parse=function(m){try{c("d3/time/time")._time=h;var n=k.parse(m);return n&&n._;}finally{c("d3/time/time")._time=Date;}};l.toString=k.toString;return l;};f.exports=i;},null);