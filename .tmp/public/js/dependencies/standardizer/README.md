Standardizer
------------

Standardizer solve some problems you have daily.

Now, you can use this in Internet Explorer 8!
```javascript
document.body.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('ohh yeah!');
});

// You can remove elements easily
document.querySelector('p').remove();
```

Install
-------
`bower install standardizer`

API
---
* addEventListener(type, listener[, useCapture])
* removeEventListener(type, listener[, useCapture])
* remove()

Browser Support
-------------
IE8+  
Google Chrome  
Firefox  
Opera  

License
-------
MIT
