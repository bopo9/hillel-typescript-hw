"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var School = /** @class */ (function () {
    function School() {
        this.directions = [];
    }
    School.prototype.addDirection = function (direction) {
        this.directions.push(direction);
    };
    return School;
}());
exports.default = School;
