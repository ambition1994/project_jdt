!function(a){"function"==typeof define&&define.amd?define("bxtree",["jstree"],function(){a(window.jQuery)}):a(window.jQuery)}(function(a){var b="/ccshandler.do?method=query";a.widget("baosight.bxtree",{_create:function(){this._superApply(arguments),console.log("bxtree widget create")},_init:function(){this._superApply(arguments),console.log("bxtree widget init"),a(this.element).jstree("destroy"),isAvailable(this.options.option.height)&&a(this.element).css("height",this.options.option.height),"local"===this.options.dataPattern?this.loadCustomData():"url"===this.options.dataPattern?this.loadOption(this.options.option):this.queryccs()},destroy:function(){a(this.element).jstree("destroy"),console.log("bxtree widget destroy"),this._superApply(arguments)},_setOption:function(a,b){console.log("_setOption: key=%s  value=%s",a,b),this._superApply(arguments)},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},options:{dataPattern:"local",async:!0,showText:"",data:[],ccsId:"",option:{core:{multiple:!0,strings:{"Loading ...":"请稍等一会 ..."},themes:{name:"default",stripes:!0,responsive:!0}},checkbox:{keep_selected_style:!1},plugins:["themes","wholerow","checkbox"]},preHandlerFunct:null,callBackFunct:null,bind:{}},loadCustomData:function(){var b=a(this.element);this.loadCustomDatawithObj(b)},loadCustomDatawithObj:function(a){a.empty(),this.show(a.attr("id"),this.options.showText,this.options.data)},show:function(b,c,d){function e(a){var b={};if(void 0!=a.value&&(b.id=a.value),void 0!=a.label&&(b.text=a.label),void 0!=a.children)if(1==a.children)b.children=!0;else{b.children=[];for(var c in a.children)b.children.push(e(a.children[c]))}return void 0!=a.state&&(b.state=a.state,(null==b.state.opened||void 0==b.state.opened)&&(b.state.opened=!0)),(null==b.state||void 0==b.state)&&(b.state={opened:!0}),b}var f={core:{}};a.extend(f,this.options.option);var g=[];for(var h in d){var i=d[h];g.push(e(i))}if(null==c||void 0==c)f.core.data=g;else{var j={text:c,id:b,state:{opened:!0}};j.children=g,f.core.data=j}this.loadOption(f)},loadOption:function(b){var c=a(this.element);this.loadOptionwithObj(b,c)},loadOptionwithObj:function(a,b){void 0!=this.options.preHandlerFunct&&null!=this.options.preHandlerFunct&&this.options.preHandlerFunct(a),b.jstree(a).bind("loaded.jstree",function(a,b){b.instance.open_all(-1)});for(var c in this.options.bind){var d=c+".jstree";b.on(d,this.options.bind[c])}void 0!=this.options.callBackFunct&&null!=this.options.callBackFunct&&this.options.callBackFunct()},queryccs:function(){var b=this,c=a(b.element);this.queryccswithObj(c)},queryccswithObj:function(c){var d=this,e={};if(""==d.options.ccsId)return void console.log("提示：ccsId为空");e.ccsId=d.options.ccsId;var f=httpServerPath;f+=b,a.ajax({url:f,method:"POST",crossDomain:!0,async:d.options.async,data:{ajaxParam:JSON.stringify(e)},processData:!0,dataType:"json",success:function(a,b,e){console.log(a),0===a.errCode&&(c.empty(),d.show(d.options.ccsId,a.ccs.label,a.ccs.children))}})},treeObj:function(){return a(this.element).jstree()},getChecked:function(){return a(this.element).jstree().get_checked(!0)},getCheckedLabel:function(){for(var a=new Array,b=this.getChecked(),c=0;c<b.length;c++){var d=b[c];a.push(d.text)}return a},getCheckedValue:function(){for(var a=new Array,b=this.getChecked(),c=0;c<b.length;c++){var d=b[c];a.push(d.id)}return a},getSelected:function(){return a(this.element).jstree().get_selected(!0)},getSelectedLabel:function(){for(var a=this.getSelected(),b=new Array,c=0;c<a.length;c++)b.push(a[c].text);return b},getSelectedValue:function(){for(var a=this.getSelected(),b=new Array,c=0;c<a.length;c++)b.push(a[c].id);return b}})});