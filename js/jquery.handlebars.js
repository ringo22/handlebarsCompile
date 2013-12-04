// Handlebars compile function
// by Rodrigo Raya

(function($,undefinedz){$.fn.extend({handlebarsCompile:function(opt){$s=this;var source=$s.html();var template=Handlebars.compile(source);if(opt.action==undefined){$(opt.container).html(template(opt.content));}else{if(opt.action=="insert"){$(opt.container).html(template(opt.content));}else{if(opt.action=="append"){$(opt.container).append(template(opt.content));}else{if(opt.action=="prepend"){$(opt.container).prepend(template(opt.content));}else{$(opt.container).html(template(opt.content));}}}}}});})(jQuery,undefined);