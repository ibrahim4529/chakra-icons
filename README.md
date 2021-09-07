<p align="center">
  <label style="font-weight:bold;font-size:200%">Transform SVG to React Chakra UI <Icon \/> ✨ </label>
  <br/><label style="font-weight:bold;font-size:small;font-style:italic">from SVG file to CODE</label>
  <br/>
  <br/>
  <img src="https://github.com/kodingdotninja/create-chakra-icons/blob/main/create-chakra-icons.gif?raw=true" alt="creater-chakra-icons" />  
</p>


## Features
* [x] Transform `<SVG/>` to Chakra-UI `Icon` Component or Functional `createIcon(...)`.
* [x] Multiple input with `directories` as `-i` or `--input` options

## Usage

### Command Line Arguments
```console
create-chakra-icons [FLAGS] [OPTIONS] [INPUT]
```

### Flags
```console
-h, --help      Prints help information
-V, --version   Prints version information
```

### Options
```console
-i, --input <PATH>      This option for read the input from PATH of FILE or DIRECTORIES.
                        [e.g.: -i some/path , -i file.svg]
-o, --output <PATH>     Writes the output. [default: stdout]
-n, --name <STRING>     Sets value for `displayName` properties
                        (*ONLY for pipelines command). [default: Unamed] [e.g. -n "MyIcon"]
-C, --case <snake|camel|constant|pascal>     
                        Sets for case [snake|camel|constant|pascal] in export named declaration 
                        output. [default: pascal]
-S, --suffix <STRING>   Sets for suffix in export named declaration.
-P, --prefix <STRING>   Sets for prefix in export named declaration.
                        [e.g.: -S "Icon"]
--ts, --typescript      Sets output as TypeScript code.
```

### Input
```console
[INPUT]     This option for read the input from PATH of FILE or DIRECTORIES.
            [e.g.: create-chakra-icons ./MyICON.svg ~/assets] 
```
### Examples

#### Pipelines command:

* **input** in pipe
```console
echo "
<svg viewBox=\"0 0 200 200\">
    <path
      fill=\"#666\"
      d=\"M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0\"
    />
  </svg>
" | create-chakra-icons -n "KodingNinjaIcon"
```
* **output** in stdout 

```jsx
import { createIcon } from "@chakra-ui/react";
export const Rin = createIcon({
  displayName: "Rin",
  viewBox: "0 0 200 200",
  d: "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
});
```

## Roadmap

* [ ] TypeScript Support (Type Annotation or Type Definition).
* [ ] ReScript Support.
* [ ] Per file input is Per file output. ⁉️ 🤔
* [ ] Feel free for give me any feedback or feature request (create an issue first).


## API

<details>
<summary> Click here, for more details about API of create-chakra-icons</summary>
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

*   [ast](#ast)
    *   [pairToObjectProperty](#pairtoobjectproperty)
        *   [Examples](#examples)
    *   [objectPropertyToPair](#objectpropertytopair)
        *   [Parameters](#parameters)
        *   [Examples](#examples-1)
    *   [objectToObjectExpression](#objecttoobjectexpression)
        *   [Parameters](#parameters-1)
        *   [Examples](#examples-2)
    *   [objectExpressionToObject](#objectexpressiontoobject)
        *   [Parameters](#parameters-2)
        *   [Examples](#examples-3)
    *   [toImportDeclaration](#toimportdeclaration)
        *   [Parameters](#parameters-3)
    *   [toExportNamedDeclaration](#toexportnameddeclaration)
        *   [Parameters](#parameters-4)
        *   [Properties](#properties)
        *   [Examples](#examples-4)
    *   [toSource](#tosource)
        *   [Parameters](#parameters-5)
    *   [hastToProperties](#hasttoproperties)
        *   [Parameters](#parameters-6)
    *   [hastChildrenLength](#hastchildrenlength)
        *   [Parameters](#parameters-7)
    *   [hastToJSXProperties](#hasttojsxproperties)
        *   [Parameters](#parameters-8)
    *   [jsxPropertiesToComponent](#jsxpropertiestocomponent)
        *   [Parameters](#parameters-9)
*   [objectToObjectExpression](#objecttoobjectexpression-1)
    *   [Parameters](#parameters-10)
*   [chakra](#chakra)
    *   [createChakraIcon](#createchakraicon)
        *   [Parameters](#parameters-11)
*   [utils](#utils)
    *   [compose](#compose)
        *   [Parameters](#parameters-12)
    *   [pairToObject](#pairtoobject)
        *   [Parameters](#parameters-13)
    *   [objectToPair](#objecttopair)
        *   [Parameters](#parameters-14)
    *   [pairsToObject](#pairstoobject)
        *   [Parameters](#parameters-15)
    *   [objectToPairs](#objecttopairs)
        *   [Parameters](#parameters-16)

### ast

#### pairToObjectProperty

##### Examples

```javascript
const pair = ["hey", "jude"]

pairToObjectProperty(value)
// output:
// {
//   type: 'ObjectProperty',
//   key: { type: 'Identifier', name: 'hey' },
//   value: { type: 'StringLiteral', value: 'jude' },
//   computed: false,
//   shorthand: false,
//   decorators: null
// }
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### objectPropertyToPair

##### Parameters

*   `Object`  

##### Examples

```javascript
const objectProperty = {
  type: 'ObjectProperty',
  key: { type: 'Identifier', name: 'hey' },
  value: { type: 'StringLiteral', value: 'jude' },
  computed: false,
  shorthand: false,
  decorators: null
}

objectPropertyToPair(objectProperty)
// output: ["hey", "jude"]
```

Returns **\[[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)]** 

#### objectToObjectExpression

##### Parameters

*   `Object`  

##### Examples

```javascript
let object = { hey: "jude" }
// output:
objectToObjectExpression(object)
// {
//   type: 'ObjectExpression',
//   properties: [
//     {
//       type: 'ObjectProperty',
//       key: [Object],
//       value: [Object],
//       computed: false,
//       shorthand: false,
//       decorators: null
//     }
//   ]
// }
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### objectExpressionToObject

##### Parameters

*   `Object`  

##### Examples

```javascript
let objectExpression = {
  type: 'ObjectExpression',
  properties: [
    {
      type: 'ObjectProperty',
      key: [Object],
      value: [Object],
      computed: false,
      shorthand: false,
      decorators: null
    }
  ]
}
objectExpressionToObject(objectExpression)
// output:
// let object = { hey: "jude" }
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toImportDeclaration

*   **See**: {<https://babeljs.io/docs/en/babel-types#importdeclaration}>

##### Parameters

*   `from` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `imports` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toExportNamedDeclaration

##### Parameters

*   `Object`  

##### Properties

*   `displayName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `objectExpression` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

##### Examples

```javascript
let object = {
 displayName: "MyModule",
 objectExpression: {...} // you can make with function objectToObjectExpression
}
toExportNamedDeclaration(object)
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toSource

##### Parameters

*   `Array`  

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### hastToProperties

##### Parameters

*   `Object`  

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### hastChildrenLength

##### Parameters

*   `Object`  

Returns **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### hastToJSXProperties

##### Parameters

*   `Object`  

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### jsxPropertiesToComponent

##### Parameters

*   `Object`  

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### objectToObjectExpression

#### Parameters

*   `object`  

### chakra

the module for generate Chakra Icon Code.

#### createChakraIcon

##### Parameters

*   `svg` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `displayName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### utils

provided utility function.

#### compose

##### Parameters

*   `Array`  

Returns **T** 

#### pairToObject

##### Parameters

*   `Array`  

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### objectToPair

##### Parameters

*   `Object`  

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

#### pairsToObject

##### Parameters

*   `Array`  

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### objectToPairs

##### Parameters

*   `Object`  

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

</details>

## Maintainer
* **Rin** ([@ri7nz](//github.com/ri7nz))

## Contribution

Feel free for making an issue, pull request, or give any feedback. 🙌

### Documentation

*   Write the documentation 📝, you just need to modify `comments` in `lib/*.js`.
*   When you done write the documentation, you just need to run `yarn docs` in the root repository.
*   The command `yarn docs` will modify `README.md` and see the changes.

## LICENSE

[See Here](./LICENSE)