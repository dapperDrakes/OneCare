if (self.CavalryLogger) { CavalryLogger.start_js(["aVNvQ"]); }

__d('StarsInput.react',['cx','fbt','invariant','React','TooltipLink.react','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();var m={CUMULATIVE:'CUMULATIVE',SINGLE:'SINGLE'},n={STAR:'STAR',BOX:'BOX'};k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;function o(p){l.constructor.call(this,p);if(p.initialStars)!Number.isInteger(p.initialStars)?j(0):void 0;this.state={starRating:p.initialStars!=undefined?p.initialStars:p.count,starsShown:p.initialStars!=undefined?p.initialStars:p.count,canUpdate:true};}o.prototype.onMouseEnter=function(p,event){if(this.state.canUpdate){this.setState({starsShown:p});this.props.onMouseEnter&&this.props.onMouseEnter(p);}};o.prototype.onMouseLeave=function(p,event){if(this.state.canUpdate){var q=this.state.starRating;this.setState({starsShown:q});this.props.onMouseLeave&&this.props.onMouseLeave(p);}};o.prototype.onClick=function(p,event){if(this.state.canUpdate){this.setState({starRating:p,starsShown:p,canUpdate:this.props.allowMultipleSubmissions});this.props.onClick(p);}};o.prototype.$StarsInput1=function(p,q,r){if(this.props.displayMode==m.SINGLE){return r?p+1==q:true;}else return r?p<q:p>=q;};o.prototype.$StarsInput2=function(p,q){var r="mls"+(' '+"_22mm")+(!this.state.canUpdate?' '+"_1g87":'');if(this.props.shape==n.BOX){var s="_5fx1"+(this.$StarsInput1(p,q,false)?' '+"_5fx2":'')+(this.$StarsInput1(p,q,true)?' '+"_5fx3":'');return c('joinClasses')(r,s);}else{var t=(this.props.large?"_1vr2":'')+(this.$StarsInput1(p,q,false)?' '+"_22mn":'')+(this.$StarsInput1(p,q,true)?' '+"_22mo":'');return c('joinClasses')(r,t);}};o.prototype.getStars=function(){if(!this.props.starLabels)return [];var p=this.props.starLabels.length,q=[],r=this.state.starsShown?this.state.starsShown:0;for(var s=0;s<p;s++){var t=s+1;q.push(c('React').createElement(c('TooltipLink.react'),{className:this.$StarsInput2(s,r),key:s,tooltip:this.props.starLabels&&this.props.starLabels[s],onMouseEnter:this.onMouseEnter.bind(this,t),onMouseLeave:this.onMouseLeave.bind(this,t),onClick:this.onClick.bind(this,t),position:'above',alignH:'center'}));}return q;};o.prototype.render=function(){return (c('React').createElement('div',{className:this.props.className},this.getStars()));};o.defaultProps={allowMultipleSubmissions:false,count:0,large:false,starLabels:[i._("Poor"),i._("Fair"),i._("Good"),i._("Very Good"),i._("Excellent")],displayMode:m.CUMULATIVE,shape:n.STAR,className:undefined,initialStars:undefined,onMouseEnter:undefined,onMouseLeave:undefined};f.exports=o;},null);
__d('MessengerProfileImageWrapper.react',['cssVar','cx','React','TooltipData','getViewportDimensions','joinClasses'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l,m;if(c.__markCompiled)c.__markCompiled();var n=c('React').PropTypes;j=babelHelpers.inherits(o,c('React').PureComponent);k=j&&j.prototype;function o(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return q=(r=k.constructor).call.apply(r,[this].concat(t)),this.$MessengerProfileImageWrapper1=function(){if(!this.props.showBadge||this.props.isMessengerUser==null)return null;return (c('React').createElement(p,{className:"_4ld_",isMessengerUser:this.props.isMessengerUser}));}.bind(this),q;}o.prototype.render=function(){var q={};if(this.props.tooltipContent){var r=c('getViewportDimensions')().width,s=parseInt("640px".replace('px',''),10),t=r<=s?'above':'left';Object.assign(q,c('TooltipData').propsFor(this.props.tooltipContent,t));}return c('React').createElement('div',babelHelpers['extends']({className:c('joinClasses')("_4ldz",this.props.className),style:{width:this.props.size+'px',height:this.props.size+'px'}},q),c('React').createElement('div',{className:"_4ld-",style:{width:this.props.size+'px',height:this.props.size+'px'}},this.props.children),this.$MessengerProfileImageWrapper1());};o.propTypes={isMessengerUser:n.bool,showBadge:n.bool,size:n.number,tooltipContent:n.string};l=babelHelpers.inherits(p,c('React').PureComponent);m=l&&l.prototype;p.prototype.render=function(){return (c('React').createElement('div',{className:c('joinClasses')(this.props.className,"_2pom")},c('React').createElement('div',{className:"_2pon"+(this.props.isMessengerUser?' '+"_2poo":'')+(!this.props.isMessengerUser?' '+"_2pop":'')})));};function p(){l.apply(this,arguments);}p.propTypes={isMessengerUser:n.bool,size:n.number};f.exports=o;},null);
__d('FBRTCConstants',['FBRTCStruct','keyMirror'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={OFFER:'offer',ANSWER:'answer',ICE_CANDIDATE:'ice_candidate',OK:'ok',PING:'ping',HANGUP:'hang_up',OTHER_DISMISS:'other_dismiss',MSG_ACK:'msg_ack',PRANSWER:'pranswer',ICERESTART_OFFER:'icerestart_offer',ICERESTART_ANSWER:'icerestart_answer',PCRESTART_OFFER:'pcrestart_offer',PCRESTART_ANSWER:'pcrestart_answer',SDP_UPDATE:'sdp_update',OFFER_ACK:'offer_ack',OFFER_NACK:'offer_nack',ANSWER_ACK:'answer_ack',SET_VIDEO:'set_video',VIDEO_REQUEST:'video_request',ACK:'ack'},i={AUDIO_ONLY:'audio_only',AUDIO_VIDEO:'audio_video',SCREEN_CONTENT:'screen'},j=c('keyMirror')({NO_VIDEO:null,LQ_VIDEO:null,SD_VIDEO:null,HD_VIDEO:null,CUSTOM_VIDEO:null}),k=new (c('FBRTCStruct'))([{IGNORE_CALL:'IgnoreCall'},{HANGUP_CALL:'HangupCall'},{IN_ANOTHER_CALL:'InAnotherCall'},{ACCEPT_AFTER_HANGUP:'CallEndAcceptAfterHangUp'},{NO_ANSWER_TIMEOUT:'NoAnswerTimeout'},{INCOMING_TIMEOUT:'IncomingTimeout'},{OTHER_INSTANCE_HANDLED:'OtherInstanceHandled'},{SIGNALING_MESSAGE_FAILED:'SignalingMessageFailed'},{CONNECTION_DROPPED:'ConnectionDropped'},{CLIENT_INTERRUPTED:'ClientInterrupted'},{WEBRTC_ERROR:'WebRTCError'},{CLIENT_ERROR:'ClientError'},{NO_PERMISSION:'NoPermission'},{OTHER_NOT_CAPABLE:'OtherNotCapable'},{NO_UI_ERROR:'NoUIShown'},{UNSUPPORTED_VERSION:'VersionUnsupported'},{CALLER_NOT_VISIBLE:'CallerNotVisible'},{CARRIER_BLOCKED:'CarrierBlocked'},{OTHER_CARRIER_BLOCKED:'OtherCarrierBlocked'}]),l={REMOTE_PEER_HANGUP:'CollabRemotePeerHangup',REMOTE_PEER_REJECT:'CollabRemotePeerReject',CLOSED_BY_MCU:'CollabClosedByMcu',CLOSED_AS_STALE:'CollabClosedAsStale',CALL_INITIALIZATION_FAILED:'CollabCallInitializationFailed',SIP_CONNECTION_INITIALIZATION_FAILED:'CollabSipConnectionInitializationFailed',LOST_MCU_CONNECTION:'CollabLostMcuConnection',MCU_NO_AUDIO_STREAM:'CollabMcuNoAudioStream',MCU_INVALID_STREAM_CONFIGURATION:'CollabMcuInvalidStreamConfiguration',UNKNOWN:'CollabUnknown'},m={TOGGLE_SELF_VIEW:5,SUBMIT_STAR_RATING:6,SUBMIT_FEEDBACK:7,START_CALL:9,OPEN_SCREEN_IN_NEW:10},n={ONE_HOUR:'1hour',UNTIL_EIGHT_AM:'8am',ALWAYS:'always'},o=c('keyMirror')({VIDEO:null,AUDIO:null,SCREEN_SHARE:null}),p={PayloadType:h,StreamType:i,VideoQuality:j,CallEndReason:k,CollabCallEndSubreason:l,UIEventType:m,CallBlockingConstants:n,IncomingCallDialogTypes:o,endCallReasonFromString:function(q){return k.strNames.indexOf(q);},callEndReasonString:function(q){if(q<0||q>k.strNames.length)return 'Unknown';return k.strNames[q];},fullCallEndReasonString:function(q,r){return this.callEndReasonString(q)+'_'+(r?'remote':'local');}};f.exports=p;},null);
__d('FBRTCIceStatsParser',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null;i.getInstance=function(){'use strict';if(!h)h=new i();return h;};function i(){'use strict';}i.prototype.extractIceInfo=function(j){'use strict';var k=[],l=j.split("\r\n");for(var m=0;m<l.length;m++){var n=l[m];if(this.$FBRTCIceStatsParser1(n))k.push({gen:this.$FBRTCIceStatsParser2(n),type:this.$FBRTCIceStatsParser3(n)});}return k;};i.prototype.$FBRTCIceStatsParser1=function(j){'use strict';return j.indexOf('candidate:')>-1;};i.prototype.$FBRTCIceStatsParser2=function(j){'use strict';var k=0,l=j.match(/generation (\d+)/);if(l)k=parseInt(l[1],10);return k;};i.prototype.$FBRTCIceStatsParser3=function(j){'use strict';var k=j.match(/typ (host|relay|srflx|prflx)/);if(k){return k[1];}else return 'unknown';};f.exports=i;},null);
__d('FBRTCCallSummary',['FBRTCConstants','FBRTCIceStatsParser','FBRTCLogger','UserAgentData','performanceNow'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=5*60*1000,i={CALL_STARTED:'started',POPUP_OPENED:'opened',SENT_OFFER:'s_o',RECV_OFFER:'r_o',SENT_OFFER_ACK:'s_oack',RECV_OFFER_ACK:'r_oack',SENT_RETRIED_OFFER:'s_o2',RECV_RETRIED_OFFER:'r_o2',SENT_RETRIED_OFFER_ACK:'s_oack2',RECV_RETRIED_OFFER_ACK:'r_oack2',SENT_PRANSWER:'s_pr',RECV_PRANSWER:'r_pr',NETWORK_READY:'network_ready',SENT_ANSWER:'s_a',RECV_ANSWER:'r_a',SENT_ANSWER_ACK:'s_aack',RECV_ANSWER_ACK:'r_aack',SENT_RETRIED_ANSWER:'s_a2',RECV_RETRIED_ANSWER:'r_a2',SENT_RETRIED_ANSWER_ACK:'s_aack2',RECV_RETRIED_ANSWER_ACK:'r_aack2',SENT_OK:'s_ok',RECV_OK:'r_ok',CALL_CONNECTED:'connected',CALL_ENDED:'ended'};j.CURRENT_SUMMARY_VERSION=19;function j(k){'use strict';this.peerID=k.peerID;this.callID=k.callID;this.$FBRTCCallSummary1=k.isCaller;this.$FBRTCCallSummary2=new Date().valueOf();this.$FBRTCCallSummary3=null;this.$FBRTCCallSummary4={};this.$FBRTCCallSummary5=null;this.$FBRTCCallSummary6=null;this.$FBRTCCallSummary7=null;this.$FBRTCCallSummary8=null;this.$FBRTCCallSummary9=null;this.$FBRTCCallSummary10=null;this.$FBRTCCallSummary11={};this.$FBRTCCallSummary12={};this.$FBRTCCallSummary13={};this.$FBRTCCallSummary14={};this.$FBRTCCallSummary15={};this.$FBRTCCallSummary16={};this.$FBRTCCallSummary17=c('performanceNow')();this.$FBRTCCallSummary18=0;this.$FBRTCCallSummary19={};this.$FBRTCCallSummary20=this.$FBRTCCallSummary17;this.$FBRTCCallSummary21=0;this.$FBRTCCallSummary22={};this.addExtraInfo(c('FBRTCLogger').Key.DEVICE_INFO,this.$FBRTCCallSummary23());this.$FBRTCCallSummary24();this.$FBRTCCallSummary25=c('FBRTCIceStatsParser').getInstance();this.$FBRTCCallSummary26=c('FBRTCLogger').getInstance();}j.prototype.toJsonString=function(){'use strict';this.$FBRTCCallSummary9=new Date().valueOf();return JSON.stringify({version:j.CURRENT_SUMMARY_VERSION,peerID:this.peerID,callID:this.callID,isCaller:this.$FBRTCCallSummary1,callType:this.$FBRTCCallSummary27,localVideoDuration:this.$FBRTCCallSummary28,remoteVideoDuration:this.$FBRTCCallSummary29,startTime:this.$FBRTCCallSummary2,trigger:this.$FBRTCCallSummary3,signalingTime:this.$FBRTCCallSummary4,endCallReason:this.$FBRTCCallSummary5,endCallSubreason:this.$FBRTCCallSummary6,isRemoteEnded:this.$FBRTCCallSummary7,lastUpdatedTime:this.$FBRTCCallSummary8,lastSerializedTime:this.$FBRTCCallSummary9,unsetOnRetrieve:this.$FBRTCCallSummary10,openCount:this.$FBRTCCallSummary21,extraInfo:this.$FBRTCCallSummary22,pcStats:this.$FBRTCCallSummary11,captureStats:this.$FBRTCCallSummary12,gen0IceSentCount:this.$FBRTCCallSummary13,gen0IceReceivedCount:this.$FBRTCCallSummary14,iceSentCount:this.$FBRTCCallSummary15,iceReceivedCount:this.$FBRTCCallSummary16,newSignalingTime:this.$FBRTCCallSummary19,accumulatedCallTime:this.$FBRTCCallSummary30()});};j.fromJsonString=function(k){'use strict';var l;try{l=JSON.parse(k);}catch(m){return null;}if(l.version!==j.CURRENT_SUMMARY_VERSION)return null;if(!l.hasOwnProperty('peerID')||!l.hasOwnProperty('callID')||!l.hasOwnProperty('isCaller')||!l.hasOwnProperty('startTime')||!l.hasOwnProperty('trigger')||!l.hasOwnProperty('signalingTime')||!l.hasOwnProperty('endCallReason')||!l.hasOwnProperty('isRemoteEnded')||!l.hasOwnProperty('lastUpdatedTime')||!l.hasOwnProperty('lastSerializedTime'))return null;var n=new j({peerID:l.peerID,callID:l.callID,isCaller:l.isCaller});n.$FBRTCCallSummary2=l.startTime;n.$FBRTCCallSummary3=l.trigger;n.$FBRTCCallSummary4=l.signalingTime;n.$FBRTCCallSummary5=l.endCallReason;n.$FBRTCCallSummary6=l.endCallSubreason;n.$FBRTCCallSummary7=l.isRemoteEnded;n.$FBRTCCallSummary8=l.lastUpdatedTime;n.$FBRTCCallSummary9=l.lastSerializedTime;if(l.callType)n.$FBRTCCallSummary27=l.callType;if(l.localVideoDuration)n.$FBRTCCallSummary28=l.localVideoDuration;if(l.remoteVideoDuration)n.$FBRTCCallSummary29=l.remoteVideoDuration;if(l.unsetOnRetrieve)n.$FBRTCCallSummary10=l.unsetOnRetrieve;if(l.openCount)n.$FBRTCCallSummary21=l.openCount;if(l.extraInfo)n.$FBRTCCallSummary22=l.extraInfo;if(l.pcStats)n.$FBRTCCallSummary11=l.pcStats;if(l.captureStats)n.$FBRTCCallSummary12=l.captureStats;if(l.gen0IceSentCount)n.$FBRTCCallSummary13=l.gen0IceSentCount;if(l.gen0IceReceivedCount)n.$FBRTCCallSummary14=l.gen0IceReceivedCount;if(l.iceSentCount)n.$FBRTCCallSummary15=l.iceSentCount;if(l.iceReceivedCount)n.$FBRTCCallSummary16=l.iceReceivedCount;if(l.newSignalingTime)n.$FBRTCCallSummary19=l.newSignalingTime;if(l.accumulatedCallTime)n.$FBRTCCallSummary18=l.accumulatedCallTime;return n;};j.restoreOrInitialize=function(k,l,m,n,o){'use strict';var p=k.retrieveCallSummary(l,m);if(!p){p=new j({peerID:l,callID:m,isCaller:n});if(o){p.onFullMessageReceived({msg:o});p.onOfferAckSent(o);}else p.onCallStarted(c('FBRTCLogger').Trigger.UNKNOWN);c('FBRTCLogger').getInstance().logError(l,m,'Missing call summary from storage');}else if(p.$FBRTCCallSummary10){p.$FBRTCCallSummary5=null;p.$FBRTCCallSummary6=null;p.$FBRTCCallSummary7=null;delete p.$FBRTCCallSummary4[i.CALL_ENDED];delete p.$FBRTCCallSummary19[i.CALL_ENDED];p.$FBRTCCallSummary10=null;}return p;};j.logSavedSummaries=function(k){'use strict';var l=k.getLoggableSummaries(),m=l.length;if(m<=0)return;var n=c('FBRTCLogger').getInstance(),o=[];for(var p=0;p<m;p++){var q=l[p];n.logEndCallSummary(q);o.push({peerID:q.peerID,callID:q.callID});}k.removeCallSummaries(o);n.logToConsole('Logged pending summaries: '+m);};j.prototype.save=function(k){'use strict';var l=c('performanceNow')(),m=l-this.$FBRTCCallSummary20;if(m>h){this.$FBRTCCallSummary26.logInfo(this.peerID,this.callID,'Summary too old: '+m);return;}k.storeCallSummary(this.peerID,this.callID,this);this.$FBRTCCallSummary20=l;};j.prototype.getLastUpdatedTime=function(){'use strict';return this.$FBRTCCallSummary8;};j.prototype.setLastUpdatedTime=function(k){'use strict';this.$FBRTCCallSummary8=k;};j.prototype.getExtraInfo=function(){'use strict';return this.$FBRTCCallSummary22;};j.prototype.addExtraInfo=function(k,l){'use strict';this.$FBRTCCallSummary22[k]=l;this.$FBRTCCallSummary24();};j.prototype.onCallStarted=function(k){'use strict';this.$FBRTCCallSummary3=k;this.$FBRTCCallSummary31(i.CALL_STARTED);this.$FBRTCCallSummary24();};j.prototype.onPopupOpened=function(){'use strict';this.$FBRTCCallSummary31(i.POPUP_OPENED);this.$FBRTCCallSummary21++;this.$FBRTCCallSummary24();};j.prototype.setPcStats=function(k){'use strict';this.$FBRTCCallSummary11=k;this.$FBRTCCallSummary24();};j.prototype.setVideoCaptureStats=function(k,l){'use strict';this.$FBRTCCallSummary12={w:k,h:l};this.$FBRTCCallSummary24();};j.prototype.setCallType=function(k){'use strict';this.$FBRTCCallSummary27=k;this.$FBRTCCallSummary24();};j.prototype.setVideoDurations=function(k,l){'use strict';this.$FBRTCCallSummary28=k;this.$FBRTCCallSummary29=l;this.$FBRTCCallSummary24();};j.prototype.onOfferAckSent=function(k){'use strict';this.onMessageSent({type:c('FBRTCConstants').PayloadType.OFFER_ACK,flag:k.flag});};j.prototype.onMessageSent=function(k){'use strict';var l=k.flag===1;switch(k.type){case c('FBRTCConstants').PayloadType.OFFER:this.$FBRTCCallSummary32(l,i.SENT_OFFER,i.SENT_RETRIED_OFFER);this.$FBRTCCallSummary33(k,this.$FBRTCCallSummary13,this.$FBRTCCallSummary15);break;case c('FBRTCConstants').PayloadType.ANSWER:this.$FBRTCCallSummary32(l,i.SENT_ANSWER,i.SENT_RETRIED_ANSWER);this.$FBRTCCallSummary33(k,this.$FBRTCCallSummary13,this.$FBRTCCallSummary15);break;case c('FBRTCConstants').PayloadType.OK:this.$FBRTCCallSummary31(i.SENT_OK);break;case c('FBRTCConstants').PayloadType.PRANSWER:this.$FBRTCCallSummary31(i.SENT_PRANSWER);break;case c('FBRTCConstants').PayloadType.OFFER_ACK:this.$FBRTCCallSummary32(l,i.SENT_OFFER_ACK,i.SENT_RETRIED_OFFER_ACK);break;case c('FBRTCConstants').PayloadType.ANSWER_ACK:this.$FBRTCCallSummary32(l,i.SENT_ANSWER_ACK,i.SENT_RETRIED_ANSWER_ACK);break;case c('FBRTCConstants').PayloadType.ICE_CANDIDATE:this.$FBRTCCallSummary33(k,this.$FBRTCCallSummary13,this.$FBRTCCallSummary15);break;default:}this.$FBRTCCallSummary24();};j.prototype.$FBRTCCallSummary33=function(k,l,m){'use strict';var n=null,o=null,p=this.$FBRTCCallSummary25.extractIceInfo(k.sdp);for(var q=0;q<p.length;q++){n=p[q].gen;o=p[q].type;if(n===0)this.$FBRTCCallSummary34(l,o);this.$FBRTCCallSummary34(m,o);}};j.prototype.$FBRTCCallSummary34=function(k,l){'use strict';if(!k[l]){k[l]=1;}else k[l]=k[l]+1;};j.prototype.$FBRTCCallSummary35=function(k){'use strict';if(k.isFromMobile())this.addExtraInfo(c('FBRTCLogger').Key.PEER_IS_MOBILE,'1');};j.prototype.onFullMessageReceived=function(k){'use strict';var l=k.msg,m=l.flag===1;switch(l.type){case c('FBRTCConstants').PayloadType.OFFER:this.$FBRTCCallSummary35(k);this.$FBRTCCallSummary32(m,i.RECV_OFFER,i.RECV_RETRIED_OFFER);this.$FBRTCCallSummary33(l,this.$FBRTCCallSummary14,this.$FBRTCCallSummary16);break;case c('FBRTCConstants').PayloadType.ANSWER:this.$FBRTCCallSummary35(k);this.$FBRTCCallSummary32(m,i.RECV_ANSWER,i.RECV_RETRIED_ANSWER);this.$FBRTCCallSummary33(l,this.$FBRTCCallSummary14,this.$FBRTCCallSummary16);break;case c('FBRTCConstants').PayloadType.OK:this.$FBRTCCallSummary31(i.RECV_OK);break;case c('FBRTCConstants').PayloadType.PRANSWER:this.$FBRTCCallSummary31(i.RECV_PRANSWER);break;case c('FBRTCConstants').PayloadType.OFFER_ACK:this.$FBRTCCallSummary32(m,i.RECV_OFFER_ACK,i.RECV_RETRIED_OFFER_ACK);break;case c('FBRTCConstants').PayloadType.ANSWER_ACK:this.$FBRTCCallSummary32(m,i.RECV_ANSWER_ACK,i.RECV_RETRIED_ANSWER_ACK);break;case c('FBRTCConstants').PayloadType.ICE_CANDIDATE:this.$FBRTCCallSummary33(l,this.$FBRTCCallSummary14,this.$FBRTCCallSummary16);break;default:}this.$FBRTCCallSummary24();};j.prototype.onMsgAckReceived=function(k,l){'use strict';var m=k.msg.flag===1;if(l){this.$FBRTCCallSummary32(m,i.RECV_OFFER_ACK,i.RECV_RETRIED_OFFER_ACK);}else this.$FBRTCCallSummary32(m,i.RECV_ANSWER_ACK,i.RECV_RETRIED_ANSWER_ACK);};j.prototype.onCallConnected=function(){'use strict';this.$FBRTCCallSummary31(i.NETWORK_READY);this.$FBRTCCallSummary31(i.CALL_CONNECTED);this.$FBRTCCallSummary24();};j.prototype.onCallEnded=function(k,l,m,n){'use strict';this.$FBRTCCallSummary10=m;this.$FBRTCCallSummary5=k;this.$FBRTCCallSummary6=n;this.$FBRTCCallSummary7=l;this.$FBRTCCallSummary31(i.CALL_ENDED);this.$FBRTCCallSummary24();};j.prototype.toString=function(){'use strict';var k={};k.core_metrics=this.$FBRTCCallSummary36();k.time_series=null;return JSON.stringify(k);};j.prototype.$FBRTCCallSummary36=function(){'use strict';var k={};k.ver=j.CURRENT_SUMMARY_VERSION;k.caller=this.$FBRTCCallSummary1;k.call_type=this.$FBRTCCallSummary27;k.conn=this.$FBRTCCallSummary37();k.peer_id=this.peerID;k.has_video=true;k.open_count=this.$FBRTCCallSummary21;k.signaling=this.$FBRTCCallSummary38();k.sender=this.$FBRTCCallSummary39();k.receiver=this.$FBRTCCallSummary40();k.end=this.$FBRTCCallSummary41();k.video=this.$FBRTCCallSummary42();return k;};j.prototype.$FBRTCCallSummary37=function(){'use strict';var k={dtls:1};if(this.$FBRTCCallSummary11.sender&&this.$FBRTCCallSummary11.sender.rtt)k.rtt=this.$FBRTCCallSummary11.sender.rtt;return k;};j.prototype.$FBRTCCallSummary38=function(){'use strict';var k={};if(this.$FBRTCCallSummary3)k.trigger=this.$FBRTCCallSummary3;k.start_time=this.$FBRTCCallSummary2;k.time_from_start=this.$FBRTCCallSummary4;var l=this.$FBRTCCallSummary4[i.CALL_CONNECTED],m=this.$FBRTCCallSummary4[i.CALL_ENDED];if(l){if(!m)if(this.$FBRTCCallSummary9){m=this.$FBRTCCallSummary9-this.$FBRTCCallSummary2;}else m=this.$FBRTCCallSummary43();var n=m-l;if(n>0)k.duration=n;}k.new_time_from_start=this.$FBRTCCallSummary19;l=this.$FBRTCCallSummary19[i.CALL_CONNECTED];m=this.$FBRTCCallSummary19[i.CALL_ENDED];if(l){if(!m)if(this.$FBRTCCallSummary18>0){m=this.$FBRTCCallSummary18;}else m=this.$FBRTCCallSummary30();n=m-l;if(n>0)k.new_duration=n;}return k;};j.prototype.$FBRTCCallSummary39=function(){'use strict';var k={};if(this.$FBRTCCallSummary13)k.ice_g0=this.$FBRTCCallSummary13;if(this.$FBRTCCallSummary15)k.ice=this.$FBRTCCallSummary15;if(this.$FBRTCCallSummary11.sender)Object.assign(k,this.$FBRTCCallSummary11.sender);return k;};j.prototype.$FBRTCCallSummary40=function(){'use strict';var k={};if(this.$FBRTCCallSummary14)k.ice_g0=this.$FBRTCCallSummary14;if(this.$FBRTCCallSummary16)k.ice=this.$FBRTCCallSummary16;return k;};j.prototype.$FBRTCCallSummary41=function(){'use strict';var k={};if(this.$FBRTCCallSummary5!==null){k.end_call_reason_string=c('FBRTCConstants').callEndReasonString(this.$FBRTCCallSummary5);if(this.$FBRTCCallSummary6!==null)k.end_call_subreason_string=this.$FBRTCCallSummary6;k.remote_ended=this.$FBRTCCallSummary7;}if(this.$FBRTCCallSummary11.end)Object.assign(k,this.$FBRTCCallSummary11.end);return k;};j.prototype.$FBRTCCallSummary42=function(){'use strict';var k={capture:{}};if(this.$FBRTCCallSummary11.video&&this.$FBRTCCallSummary11.video.sender)Object.assign(k,this.$FBRTCCallSummary11.video.sender);if(this.$FBRTCCallSummary12)Object.assign(k.capture,this.$FBRTCCallSummary12);return {sender:k,ld:this.$FBRTCCallSummary28,rd:this.$FBRTCCallSummary29};};j.prototype.$FBRTCCallSummary43=function(){'use strict';return new Date().valueOf()-this.$FBRTCCallSummary2;};j.prototype.$FBRTCCallSummary30=function(){'use strict';var k=c('performanceNow')()-this.$FBRTCCallSummary17;return Math.floor(this.$FBRTCCallSummary18+k);};j.prototype.$FBRTCCallSummary31=function(k){'use strict';if(this.$FBRTCCallSummary4[k])return;this.$FBRTCCallSummary4[k]=this.$FBRTCCallSummary43();this.$FBRTCCallSummary19[k]=this.$FBRTCCallSummary30();};j.prototype.$FBRTCCallSummary32=function(k,l,m){'use strict';if(k){this.$FBRTCCallSummary31(m);}else this.$FBRTCCallSummary31(l);};j.prototype.$FBRTCCallSummary24=function(){'use strict';this.$FBRTCCallSummary8=new Date().valueOf();};j.prototype.$FBRTCCallSummary23=function(){'use strict';return {device:c('UserAgentData').deviceName,os:c('UserAgentData').platformName,os_version:c('UserAgentData').platformFullVersion,browser:c('UserAgentData').browserName,browser_version:c('UserAgentData').browserFullVersion,screen_height:window.screen.availHeight,screen_width:window.screen.availWidth};};f.exports=j;},null);
__d('FBRTCCallSummaryStore',['CacheStorage','FBRTCCallSummary','FBRTCLogger','areEqual'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='localstorage',i='RTC_CALL_SUMMARY_',j='summary',k=2000,l=3,m=3*60*1000,n=null;o.getInstance=function(){'use strict';if(!n)n=new o();return n;};function o(){'use strict';this.$FBRTCCallSummaryStore1=new (c('CacheStorage'))(h,i);this.$FBRTCCallSummaryStore2=c('FBRTCLogger').getInstance();}o.prototype.storeCallSummary=function(p,q,r){'use strict';var s=this;this.$FBRTCCallSummaryStore3(function(t){if(!t[p])t[p]={};var u=t[p][q];if(u){var v=s.$FBRTCCallSummaryStore4(u);if(v&&v.getLastUpdatedTime()>r.getLastUpdatedTime()){s.$FBRTCCallSummaryStore2.logToConsole('Outdated summaries');return null;}}t[p][q]=s.$FBRTCCallSummaryStore5(r);return t;},s.$FBRTCCallSummaryStore2.logError.bind(s.$FBRTCCallSummaryStore2,p,q));};o.prototype.retrieveCallSummary=function(p,q){'use strict';var r=this.$FBRTCCallSummaryStore6(),s=null;if(r[p])s=r[p][q];if(s){return this.$FBRTCCallSummaryStore4(s);}else return null;};o.prototype.removeCallSummary=function(p,q){'use strict';this.removeCallSummaries([{peerID:p,callID:q}]);};o.prototype.removeCallSummaries=function(p){'use strict';var q=this;this.$FBRTCCallSummaryStore3(function(r){var s=p.length;for(var t=0;t<s;t++){var u=p[t].peerID,v=p[t].callID;if(r[u]&&r[u][v]){delete r[u][v];if(q.$FBRTCCallSummaryStore7(r[u]))delete r[u];}}return r;},q.$FBRTCCallSummaryStore2.logError.bind(q.$FBRTCCallSummaryStore2,null,null));};o.prototype.getLoggableSummaries=function(){'use strict';var p=this.$FBRTCCallSummaryStore6(),q=[];for(var r in p)if(p.hasOwnProperty(r))for(var s in p[r])if(p[r].hasOwnProperty(s)){var t=this.$FBRTCCallSummaryStore4(p[r][s],m);if(t)q.push(t);}return q;};o.prototype.$FBRTCCallSummaryStore7=function(p){'use strict';for(var q in p)if(p.hasOwnProperty(q))return false;return true;};o.prototype.$FBRTCCallSummaryStore5=function(p){'use strict';var q={__t:Date.now(),__d:p.toJsonString()};return q;};o.prototype.$FBRTCCallSummaryStore4=function(p,q){'use strict';if(p)if(!q||Date.now()-p.__t>=q)return c('FBRTCCallSummary').fromJsonString(p.__d);return null;};o.prototype.$FBRTCCallSummaryStore6=function(){'use strict';var p=this.$FBRTCCallSummaryStore1.get(j)||{};return p;};o.prototype.$FBRTCCallSummaryStore3=function(p,q,r,s){'use strict';if(r===undefined||r===null)r=l;var t=this.$FBRTCCallSummaryStore6(),u=this.$FBRTCCallSummaryStore6(),v=p(t);if(v===null)return;var w=this.$FBRTCCallSummaryStore6();if(c('areEqual')(u,w)){this.$FBRTCCallSummaryStore1.set(j,v);this.$FBRTCCallSummaryStore2.logToConsole('Updated summaries');}else if(r>0){q('Retry lock');if(s){var x=this;setTimeout(function(){x.$FBRTCCallSummaryStore3(p,q,r-1,true);},k);}else this.$FBRTCCallSummaryStore3(p,q,r-1,true);}else q('Failed to lock');};f.exports=o;},null);