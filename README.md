# Handlebars compile plugin #

## Simple use ##


* template: is a handlebars template to use
* container: where to insert the compiled code
* content: data we are sent to the template

<pre>
	$('#template').handlebarsCompile({ container: '#content', content: { firstName: "Alan", lastName: "Johnson" }  });
</pre>


## Actions to insert the content ##

Add 'action' parameter (replace, prepend, append)

* Replace: replace the content
* Prepend: add content to the top
* Append: add content to the end

<pre>
	// Replace content
	$('#template').handlebarsCompile({ container: '#content', content: { firstName: "Alan", lastName: "Johnson" }, action: 'insert' });
	
	// Append into content
	$('#template').handlebarsCompile({ container: '#content ul', content: { firstName: "Maria", lastName: "Helder" }, action: 'append' });
	
	// Prepend into content
	$('#template').handlebarsCompile({ container: '#content ul', content: { firstName: "Robin", lastName: "Hackman" }, action: 'prepend' });
</pre>



