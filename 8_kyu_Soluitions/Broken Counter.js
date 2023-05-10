/*Broken Counter
Our counter prototype is broken. Can you spot, what's wrong here?
*/

function Counter() {
        this.value = 0;
    }
    // to make everything function correct, we need to change "()" for "= function() ""
    Counter.prototype.increase = function() {
        this.value++;
    };
    //added this up, though it's not needed to pass tests
    Counter.prototype.decrease = function() {
        this.value--;
    };

    Counter.prototype.getValue = function() {
        return this.value;
    };

    Counter.prototype.reset = function() {
        this.value = 0;
};