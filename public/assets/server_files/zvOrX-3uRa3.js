if (self.CavalryLogger) { CavalryLogger.start_js(["S5Sui"]); }

__d('ReactBlueBarPerfLogger',['Arbiter','BanzaiScuba','LogBuffer','NavigationMetrics','pageLoadedViaSWCache','performance'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='reactbluebar_perf',i=function(k){var l=new (c('BanzaiScuba'))(h,null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addRequestFields:true});l.addNormal('page_client',k.page);l.addNormal('response_type',c('pageLoadedViaSWCache')()?'sw':'server');l.addNormal('second_load',k.isSecondLoad);if(c('performance').timing){var m=c('performance').timing,n=m.navigationStart,o=m.fetchStart,p=m.requestStart;l.addInteger('tti',k.tti-o);l.addInteger('e2e',k.e2e-o);l.addInteger('display_done',k.displayDone-o);l.addInteger('rbb_display_done',k.rbbDisplayDone-o);if(k.bodyVisible)l.addInteger('body_visible',k.bodyVisible-o);l.addInteger('fetch_start',o-n);l.addInteger('request_start',p-n);}l.post();},j={init:function(k){var l=k.samplingRateServer,m=k.samplingRateSW,n=k.isSecondLoad,o=null;c('Arbiter').subscribe('sw/bodyVisible',function(p,q){var r=q.relativeTime;if(c('performance').timing)o=r+c('performance').timing.navigationStart;});c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.NAVIGATION_DONE,function(p,q){var r=q.page,s=q.pageType,t=q.tti,u=q.e2e,v=q.all_pagelets_displayed;s=s||'normal';var w=c('pageLoadedViaSWCache')()?m:l;if(s!=='normal'||Math.random()>w)return;c('LogBuffer').tail('reactbluebar_perf',function(x){var y=x.displayDone;i({bodyVisible:o,rbbDisplayDone:y,displayDone:v,e2e:u,page:r,pageType:s,tti:t,isSecondLoad:n});});});}};f.exports=j;},null);