!function(a){"function"==typeof define&&define.amd?define("bxprogressbar",[],function(){a(window.jQuery)}):a(window.jQuery)}(function(a){$.widget("baosight.bxprogressbar",{_create:function(){this._super(),console.log("bxprogressbar widget create")},_divElement:{},_init:function(){var a=this;$.extend(a.options.option,a.options.progressBarOption),this._super(),console.log("bxprogressbar widget init"),this.show()},destroy:function(){console.log("bxprogressbar widget destroy"),this._superApply(arguments)},options:{option:{value:28,create:function(a,b){$(this).addClass("progress progress-striped active").children(0).addClass("progress-bar progress-bar-skin").removeClass("ui-widget-header")}}},_setOption:function(a,b){console.log("_setOption: key=%s  value=%s",a,b),this._superApply(arguments)},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},show:function(){this.options.option.value=parseFloat(this.options.option.value),$("#"+this.element.attr("id")).progressbar(this.options.option)}})});