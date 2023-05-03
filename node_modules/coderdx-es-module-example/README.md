## ES Module Example

This package demonstrates a simple module example. The sample module contains an exported constant, function, and a class.

## Instructions
1. On your local machine, create a new directory.
1. cd to your new directory.
1. Run `npm init` to create a `package.json` file.
1. Add this package using `npm -i` or `yarn add`.
1. Create a new `index.js` file.
1. Add this code:
```
import { coolNum, hello, dx  } from 'coderdx-es-module-example'

console.log('Way cool num: ', coolNum)

hello()

const importedClass = new dx

importedClass.printDay()
```
7. In your shell run  
 `node index.js`  
8. In your terminal you should see 
```
$ node index.js
Way cool num:  42
Hello!
The day today is:  29
$
```