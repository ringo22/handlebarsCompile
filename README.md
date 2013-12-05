# Handlebars compile plugin #

## Simple use ##


* template: is a handlebars template to use
* container: where to insert the compiled code
* content: data we are sent to the template

<pre>
	$(template).handlebarsCompile({ container: '#content', content: { firstName: "Alan", lastName: "Johnson" }  });
</pre>


## Actions to insert the content ##
   Replace, add to first, add to last

* template: is a handlebars template to use
* container: where to insert the compiled code
* content: data we are sent to the template

<pre>
	// Replace content
	$(template).handlebarsCompile({ container: '#content', content: { firstName: "Alan", lastName: "Johnson" }, action: 'insert' });
	
	// Append into content
	$(template).handlebarsCompile({ container: '#content ul li', content: { firstName: "Maria", lastName: "Helder" }, action: 'append' });
	
	// Prepend into content
	$(template).handlebarsCompile({ container: '#content ul li', content: { firstName: "Robin", lastName: "Hackman" }, action: 'prepend' });
</pre>



