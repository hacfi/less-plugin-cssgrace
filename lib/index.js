var getCSSGraceProcessor = require("./cssgrace-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginCSSGrace(options) {
    this.options = options;
};

LessPluginCSSGrace.prototype = {
    install: function(less, pluginManager) {
        var CSSGraceProcessor = getCSSGraceProcessor(less);
        pluginManager.addPostProcessor(new CSSGraceProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 0, 0]
};

module.exports = LessPluginCSSGrace;
