const fs = require(`fs`)

const checkIgnore = () => {
  const ignore = require(`ignore`)
  const ignorePaths = fs.readFileSync(`./wat-ignore`, { encoding: `utf-8` })
  const ig = ignore().add(ignorePaths)
  ;[
    `foo.js`,
    `packages/gatsby/foo.js`,
    `packages/gatsby/src/foo.js`,
    `packages/gatsby/dist/foo.js`,
    `packages/gatsby/cache-dir/foo.js`,
    `packages/gatsby/cache-dir/commonjs/foo.js`,
  ].forEach(p => {
    console.log(`${p}: ${ig.ignores(p) ? `IGNORED` : `PROCESSED`} `)
  })
}

const runEslint = () => {
  var CLIEngine = require(`eslint`).CLIEngine

  const { ...esconfig } = JSON.parse(
    fs.readFileSync(`./wat-eslintrc`, { encoding: `utf-8` })
  )
  const prettierconfig = JSON.parse(
    fs.readFileSync(`./wat-prettierrc`, { encoding: `utf-8` })
  )

  esconfig.rules[`prettier/prettier`] = [`error`, prettierconfig]

  var cli = new CLIEngine({
    baseConfig: esconfig,
    fix: true,
  })

  const fileName = `foo.js`
  const text = fs.readFileSync(fileName, { encoding: `utf-8` })
  const report = cli.executeOnText(text, fileName)
  console.log(report.results[0])
}

const runPrettier = async () => {
  const prettier = require(`prettier`)
  const prettierconfig = JSON.parse(
    fs.readFileSync(`./wat-prettierrc`, { encoding: `utf-8` })
  )
  const mdfileName = `foo.md`
  const mdtext = fs.readFileSync(mdfileName, { encoding: `utf-8` })

  const finfo = await prettier.getFileInfo(mdfileName)
  const formattedText = await prettier.format(mdtext, {
    ...prettierconfig,
    parser: finfo.inferredParser,
  })

  console.log({
    path: mdfileName,
    formattedText,
  })
}

checkIgnore()
runPrettier()
runEslint()
