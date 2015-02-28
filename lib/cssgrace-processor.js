var cssgrace = require('cssgrace');

module.exports = function(less) {
    function CSSGraceProcessor(options) {
        this.options = options || {};
    };

    CSSGraceProcessor.prototype = {
        process: function (css, extra) {

            return cssgrace.pack(css, { from: extra.options.filename });
        }
    };

    return CSSGraceProcessor;
};
