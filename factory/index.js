'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var cgUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var FactoryGenerator = module.exports = function FactoryGenerator(args, options, config) {

    cgUtils.getNameArg(this,args);

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(FactoryGenerator, yeoman.generators.Base);

FactoryGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [];

    cgUtils.addNamePrompt(this,prompts,'factory');

    this.prompt(prompts, function (props) {
        if (props.name){
            this.name = props.name;
        }
        cgUtils.askForModuleAndDir('factory',this,false,cb);
    }.bind(this));

};

FactoryGenerator.prototype.files = function files() {

    cgUtils.processTemplates(this.name,this.dir,'factory',this,null,null,this.module);

};
