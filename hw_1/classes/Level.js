"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Level = /** @class */ (function () {
    function Level(name, program) {
        this._program = '';
        this._name = '';
        this.groups = [];
        this._name = name;
        this._program = program;
    }
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "program", {
        get: function () {
            return this._program;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    return Level;
}());
exports.default = Level;
