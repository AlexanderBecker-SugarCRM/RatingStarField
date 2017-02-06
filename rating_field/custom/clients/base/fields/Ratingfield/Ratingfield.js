({
    plugins: ['CssLoader'],

    css: [
        'custom/themes/star_rating.css',
    ],
    /**
     * Called when initializing the field
     * @param options
     */
    initialize: function(options) {
        this._super('initialize', [options]);
    },

    /**
     * Called when rendering the field
     * @private
     */
    _render: function() {
        this._super('_render');
    },

    /**
     * Called when formatting the value for display
     * @param value
     */
    format: function(value) {
		value = isNaN(parseFloat(value)) ? 0 : parseFloat(value);
        this.percentage = value > 5 ? value : (value*100)/5;
        return this._super('format', [value]);
    },

    /**
     * Called when unformatting the value for storage
     * @param value
     */
    unformat: function(value) {
        return this._super('unformat', [value]);
    }
})