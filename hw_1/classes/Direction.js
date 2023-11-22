"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction = /** @class */ (function () {
    function Direction(name) {
        this._name = '';
        this.levels = [];
        this._name = name;
    }
    Object.defineProperty(Direction.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Direction.prototype.addLevel = function (level) {
        this.levels.push(level);
    };
    return Direction;
}());
exports.default = Direction;
