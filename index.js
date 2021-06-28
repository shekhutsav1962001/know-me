#!/usr/bin/env node

"use strict";


const boxen = require("boxen");
const chalk = require("chalk");
const clear = require("clear");

// clear screen
clear();

const data = {
  name: chalk.bold.green(
    "                                     Hello world! I am Utsav Shekh"
  ),

  twitter: chalk.gray("https://twitter.com/") + chalk.green("utsav1519"),
  npm: chalk.gray("https://npmjs.com/") + chalk.green("~shekhutsav1962001"),
  github: chalk.gray("https://github.com/") + chalk.green("shekhutsav1962001"),
  instagram: chalk.gray("https://www.instagram.com/") + chalk.green("_._utsav"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.green("utsavshekh"),
  web:
    chalk.gray("https://shekhutsav1962001.github.io/") +
    chalk.green("portfolio"),

  labelInstagram: chalk.white.bold("  Instagram:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,

    `${data.labelnpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    `${data.labelInstagram}  ${data.instagram}`,
    `${data.labelTwitter}  ${data.twitter}`,
    ``,

    ``,
    `${chalk.italic(
      "-> I am pursuing Computer Engineering at Dharmsinh Desai University."
    )}`,
    ``,
    `${chalk.italic(
      "-> I found my interest in Web development and I'm doing my best to learn new things regularly."
    )}`,
    ``,
    `${chalk.italic("-> Animation attracts me a lot.")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);
