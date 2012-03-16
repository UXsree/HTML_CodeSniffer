var HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_2 = {
    /**
     * Determines the elements to register for processing.
     *
     * Each element of the returned array can either be an element name, or "_top"
     * which is the top element of the tested code.
     *
     * @returns {Array} The list of elements.
     */
    register: function()
    {
        return [
            '_top',
            'blink'
        ];

    },

    /**
     * Process the registered element.
     *
     * @param {DOMNode} element The element registered.
     * @param {DOMNode} top     The top element of the tested code.
     */
    process: function(element, top)
    {
        if (element === top) {
            HTMLCS.addMessage(HTMLCS.NOTICE, element, 'If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.', 'SCR33,SCR22,G187,G152,G186,G191');

            var elements = top.querySelectorAll('*');
            for (var i = 0; i < elements.length; i++) {
                var computedStyle = null;
                if (elements[i].currentStyle) {
                    computedStyle = elements[i].currentStyle;
                } else {
                    computedStyle = window.getComputedStyle(elements[i], null);
                }

                if (/blink/.test(computedStyle['text-decoration']) === true) {
                    HTMLCS.addMessage(HTMLCS.WARNING, elements[i], 'Ensure there is a mechanism available to stop this blinking element in less than five seconds.', 'F4');
                }
            }//end for
        } else if (element.nodeName.toLowerCase() === 'blink') {
            HTMLCS.addMessage(HTMLCS.ERROR, element, 'Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.', 'F47');
        }//end if

    }
};
