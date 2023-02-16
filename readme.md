# **notjs**
### **Function that gives false if true and true if false**
## **How to use?**
**1.** First you need to install it: ```npm i @lorypell/notjs```  
**2.** Then you need to import it, there are two ways:
- commonjs -> ```const { not } = require("@lorypelli/notjs")```  
- ESM -> ```import { not } from "@lorypelli/notjs"``` **RECOMMENDED**  

**3.** You can start using it in your js file
```js
console.log(not("a" == "a")) //false
console.log(not("a" == "b")) //true
console.log(not("c")) //TypeError: Invalid Expression!
```
You can also use **variables**