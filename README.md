# keep-alive-bug

https://modest-colden-0f3619.netlify.app/  
We have 3 kept alive pages  
When a page is deactivated computed properties are still being computed, (and the page component is being rerendered ?)

### steps to reproduce:
1. Click on Page1 link (page 1 is activated)
2. Click on Page2 link (page 1 is deactivated) 
3. Click on Page3 link (page 1 is still deactivated, and routeName computed property is being computed, see console) 