jQuery.extend({createUploadIframe:function(a,b){var c="jUploadFrame"+a;if(window.ActiveXObject){if("9.0"==jQuery.browser.version||"10.0"==jQuery.browser.version){var d=document.createElement("iframe");d.id=c,d.name=c}else if("6.0"==jQuery.browser.version||"7.0"==jQuery.browser.version||"8.0"==jQuery.browser.version){var d=document.createElement('<iframe id="'+c+'" name="'+c+'" />');"boolean"==typeof b?d.src="javascript:false":"string"==typeof b&&(d.src=b)}}else{var d=document.createElement("iframe");d.id=c,d.name=c}return d.style.position="absolute",d.style.top="-1000px",d.style.left="-1000px",document.body.appendChild(d),d},createUploadForm:function(a,b,c){var d="jUploadForm"+a,e="jUploadFile"+a,f=jQuery('<form  action="" method="POST" name="'+d+'" id="'+d+'" enctype="multipart/form-data"></form>'),g=jQuery("#"+b),h=jQuery(g).clone();if(jQuery(g).attr("id",e),jQuery(g).before(h),jQuery(g).appendTo(f),c)for(var i in c)$('<input type="hidden" name="'+i+'" value="'+c[i]+'" />').appendTo(f);return jQuery(f).css("position","absolute"),jQuery(f).css("top","-1200px"),jQuery(f).css("left","-1200px"),jQuery(f).appendTo("body"),f},ajaxFileUpload:function(a){a=jQuery.extend({},jQuery.ajaxSettings,a);var b=a.id,c=jQuery.createUploadForm(b,a.fileElementId,a.data),d=(jQuery.createUploadIframe(b,a.secureuri),"jUploadFrame"+b),e="jUploadForm"+b;a.global&&!jQuery.active++&&jQuery.event.trigger("ajaxStart");var f=!1,g={};a.global&&jQuery.event.trigger("ajaxSend",[g,a]);var h=function(b){var e=document.getElementById(d);try{e.contentWindow?(g.responseText=e.contentWindow.document.body?e.contentWindow.document.body.innerHTML:null,g.responseXML=e.contentWindow.document.XMLDocument?e.contentWindow.document.XMLDocument:e.contentWindow.document):e.contentDocument&&(g.responseText=e.contentDocument.document.body?e.contentDocument.document.body.innerHTML:null,g.responseXML=e.contentDocument.document.XMLDocument?e.contentDocument.document.XMLDocument:e.contentDocument.document)}catch(h){jQuery.handleError(a,g,null,h)}if(g||"timeout"==b){f=!0;var i;try{if(i="timeout"!=b?"success":"error","error"!=i){var j=jQuery.uploadHttpData(g,a.dataType);a.success&&a.success(j,i),a.global&&jQuery.event.trigger("ajaxSuccess",[g,a])}else jQuery.handleError(a,g,i)}catch(h){i="error",jQuery.handleError(a,g,i,h)}a.global&&jQuery.event.trigger("ajaxComplete",[g,a]),a.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop"),a.complete&&a.complete(g,i),jQuery(e).unbind(),setTimeout(function(){try{jQuery(e).remove(),jQuery(c).remove()}catch(b){jQuery.handleError(a,g,null,b)}},100),g=null}};a.timeout>0&&setTimeout(function(){f||h("timeout")},a.timeout);try{var c=jQuery("#"+e);jQuery(c).attr("action",a.url),jQuery(c).attr("method","POST"),jQuery(c).attr("target",d),c.encoding?jQuery(c).attr("encoding","multipart/form-data"):jQuery(c).attr("enctype","multipart/form-data"),jQuery(c).submit()}catch(i){jQuery.handleError(a,g,null,i)}return jQuery("#"+d).load(h),{abort:function(){}}},uploadHttpData:function(a,b){var c=!b;return c="xml"==b||c?a.responseXML:a.responseText,"script"==b&&jQuery.globalEval(c),"json"==b&&(c=jQuery.parseJSON(jQuery(c).text())),"html"==b&&jQuery("<div>").html(c).evalScripts(),c},handleError:function(a,b,c,d){a.error&&a.error.call(a.context||a,b,c,d),a.global&&(a.context?jQuery(a.context):jQuery.event).trigger("ajaxError",[b,a,d])}});