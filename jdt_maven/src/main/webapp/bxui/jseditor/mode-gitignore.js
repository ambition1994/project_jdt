ace.define("ace/mode/gitignore_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(a,b,c){"use strict";var d=a("../lib/oop"),e=a("./text_highlight_rules").TextHighlightRules,f=function(){this.$rules={start:[{token:"comment",regex:/^\s*#.*$/},{token:"keyword",regex:/^\s*!.*$/}]},this.normalizeRules()};f.metaData={fileTypes:["gitignore"],name:"Gitignore"},d.inherits(f,e),b.GitignoreHighlightRules=f}),ace.define("ace/mode/gitignore",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/gitignore_highlight_rules"],function(a,b,c){"use strict";var d=a("../lib/oop"),e=a("./text").Mode,f=a("./gitignore_highlight_rules").GitignoreHighlightRules,g=function(){this.HighlightRules=f};d.inherits(g,e),function(){this.$id="ace/mode/gitignore"}.call(g.prototype),b.Mode=g});