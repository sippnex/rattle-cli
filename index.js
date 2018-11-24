#!/usr/bin/env node
var program = require('commander');
var banner = require('simple-banner');
banner.set("Rattle CLI", 0, 0);

program
    .command('generate <app>')
    .description('Generates a new app into your rattle instance')
    .action(function(app) {
        const generate = require('generate');
        generate.run(app);
    });

program
    .command('*')
    .action(function(command){
        console.log("command '%s' not found", command);
    });

program.parse(process.argv);