const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

const run = () => {
  core.notice("Hello World");
};

run();
