# TypeScript

TypeScript is a programming language that was created by Microsoft to address the shortcomings of JavaScript. It is built around JavaScript, so any JavaScript file is a valid TypeScript file.

## Benefits

*Static typing- Variables maintain a single type once it is declared.
*Refactoring- Updating the source code without changing the behavior of the application.
\*Shorthand notations- Abreviated values that make smaller lines of code

## Drawbacks

*Compilation- Browsers largely don't understand TypeScript code, so the code needs to be compiled and turned into javascript in a process called **Transpilation**
*Requires discipline- Not great for coders that just want to get the jod done asap, but are great for teamworking environments

## Installation

Use npm to install the typescript package.

```bash
npm i -g typescript
```

Once you have it installed you can make your TypeScript file in your code editor, ending the file name with .ts
For example: index.ts

## Running code

Once you are ready to run your TypeScript Code, type **tsc nameoffile.ts** the following example will run the code on a file called index.ts.

```bash
tsc index.ts
```
