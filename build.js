'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
//                        
//                       
// Text + chalk definitions
const data = {
  name: chalk.yellow('                    David Llop'),
  handle: chalk.yellow('lloople'),
  work: chalk.yellow('Senior Backend Developer at GNA Hotel Solutions'),
  twitter: chalk.green.bold('https://twitter.com/') + chalk.yellow.bold('lloople'),
  npm: chalk.green('https://packagist.org/packages/') + chalk.yellow('lloople'),
  github: chalk.green('https://github.com/') + chalk.yellow('lloople'),
  linkedin: chalk.green('https://linkedin.com/in/') + chalk.yellow('lloople'),
  web: chalk.magenta.bold('https://davidllop.com'),
  labelWork: chalk.magenta.bold('       Work:'),
  labelTwitter: chalk.magenta.bold('    Twitter:'),
  labelnpm: chalk.magenta.bold('  Packagist:'),
  labelGitHub: chalk.magenta.bold('     GitHub:'),
  labelWeb: chalk.magenta.bold('        Web:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               webing + newline // data.labelWeb + data.web

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.magenta(boxen(output, options)))
