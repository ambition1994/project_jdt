!function(a){"function"==typeof define&&define.amd?define("bxcombobox",function(){a(window.jQuery)}):a(window.jQuery)}(function(a){a.widget("baosight.bxcombobox",{version:"0.1",defaultElement:"<select>",options:{dataPattern:"local",data:[],async:!0,ccsId:"",option:{"class":"form-control"},sqldata:{label:"",value:""},bind:[]},_create:function(){var b=this.element.uniqueId().attr("id")+"_select",c=this.element.uniqueId().attr("name")+"_select";0==a("#"+b).length&&(a('<select id="'+b+'" name="'+c+'" style="width:100%"> </select> ').appendTo(a(this.element)),a(this.element).hasClass("no-padding")||a(this.element).addClass("no-padding")),this.element=a("#"+b),console.log("bxcombobox widget create")},_init:function(){this._superApply(arguments);for(key in this.options.option)this.element.attr(key,this.options.option[key]);for(var b=0;b<this.options.bind.length;b++){var c=this.options.bind[b];for(bindname in c)this.element.bind(bindname,c[bindname])}console.log("bxcombobox widget init"),"local"==this.options.dataPattern?(a(this.element).empty(),this.show(this.options.data)):"ccs"==this.options.dataPattern||"ccs-relation"==this.options.dataPattern?this.queryccs():this.showsql(this.options.sqldata)},destroy:function(){console.log("bxcombobox widget destroy"),this._superApply(arguments)},_setOption:function(a,b){console.log("_setOption: key=%s  value=%s",a,b),this._superApply(arguments)},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},queryccs:function(){var b=this,c=a(b.element),d={},e="/ccshandler.do";"ccs"==this.options.dataPattern?(e+="?method=query",d.ccsId=b.options.ccsId):"ccs-relation"==this.options.dataPattern&&(e+="?method=queryRelation",d.query_condition=b.options.queryCondition,d.upper_node=b.options.returnUpperNode,d.scope=b.options.scope);var f=httpServerPath+e;a.ajax({url:f,method:"POST",crossDomain:!0,async:b.options.async,data:{ajaxParam:JSON.stringify(d)},processData:!0,dataType:"json",success:function(a,e,f){console.log(a),"success"===a.status&&(c.empty(),b.show(b.options.data),"ccs-relation"==b.options.dataPattern?b.show(a.ccs[d.upper_node[0]]):a.ccs&&b.show(a.ccs.children)),null!=b.options.callBackFunct&&void 0!=b.options.callBackFunct&&b.options.callBackFunct()}})},show:function(b){for(var c=a(this.element),d=0;d<b.length;d++){var e=b[d];a('<option value="'+e.value+'">'+e.label+"</option>").appendTo(c)}},showsql:function(b){var c=a(this.element);if(c.empty(),""!=b.label&&""!=b.value)for(var d=b.label.split(","),e=b.value.split(","),f=0;f<d.length;f++)a('<option value="'+e[f]+'">'+d[f]+"</option>").appendTo(c)},selectObj:function(){var b=this.element.uniqueId().attr("id");return a("#"+b)}})});