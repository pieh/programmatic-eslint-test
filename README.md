Just testing fully programmatic eslint and prettier formatting

That's why eslint/prettier config/ignore files are weirdly named to ensure they are not picked up automatically, but are respected (so it's actually feasible to run this job in peril without needing to checkout repository and install dependencies for each PR).

Here's output of the `index.js` script:

```
foo.js: PROCESSED
packages/gatsby/foo.js: IGNORED
packages/gatsby/src/foo.js: PROCESSED
packages/gatsby/dist/foo.js: IGNORED
packages/gatsby/cache-dir/foo.js: PROCESSED
packages/gatsby/cache-dir/commonjs/foo.js: IGNORED
{ filePath: '/Users/misiek/dev/programmatic-eslint/foo.js',
  messages:
   [ { ruleId: 'no-unused-vars',
       severity: 2,
       message: '\'jsx\' is assigned a value but never used.',
       line: 4,
       column: 7,
       nodeType: 'Identifier',
       endLine: 4,
       endColumn: 10 },
     { ruleId: 'react/react-in-jsx-scope',
       severity: 2,
       message: '\'React\' must be in scope when using JSX',
       line: 4,
       column: 13,
       nodeType: 'JSXOpeningElement',
       endLine: 4,
       endColumn: 27 },
     { ruleId: 'no-undef',
       severity: 2,
       message: '\'wat\' is not defined.',
       line: 5,
       column: 1,
       nodeType: 'Identifier',
       endLine: 5,
       endColumn: 4 },
     { ruleId: 'no-undef',
       severity: 2,
       message: '\'afsfafwa\' is not defined.',
       line: 8,
       column: 1,
       nodeType: 'Identifier',
       endLine: 8,
       endColumn: 9 } ],
  errorCount: 4,
  warningCount: 0,
  fixableErrorCount: 0,
  fixableWarningCount: 0,
  output:
   'import Foo from "bar"\n\nvar a = `4` // format - remove spaces and semi\nconst jsx = <dasda p="" /> // need to import "react", format\nwat = 4 // not defined\n\nspyOn(a) // it\'s in globals - not reported\nafsfafwa(2) // not in globals - should be undefined\n\n// this should be formatted\nconst fn = () => {\n  const l = 1 + 4\n  return l\n}\n\n// justto avoid not-used\nconsole.log(a, Foo, fn)\n' }
{ path: 'foo.md',
  formattedText: '# fasfas\n\nfasfasfa\n\nfsafsa\n' }
```

