'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./index');

var _ptzCoreDomain = require('ptz-core-domain');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Position = function (_EntityBase) {
    _inherits(Position, _EntityBase);

    function Position(args) {
        _classCallCheck(this, Position);

        var _this = _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this, args));

        _this.latitude = args.latitude;
        _this.longitude = args.longitude;
        _this.time = args.time;
        _this.validate();
        return _this;
    }

    _createClass(Position, [{
        key: 'validate',
        value: function validate() {
            this.validateLatitude();
            this.validateLongitude();
            this.validateTime();
            if (this.errors && this.errors.length === 0) return true;
            return false;
        }
    }, {
        key: 'validateLatitude',
        value: function validateLatitude() {
            if (!this.latitude || _typeof(this.latitude) !== _typeof(0)) this.addError(_index.errors.ERROR_POSITION_LATITUDE_NOTANUMBER);
            if (!this.latitude || this.latitude === null) this.addError(_index.errors.ERROR_POSITION_LATITUDE_NULLORUNDEFINED);
        }
    }, {
        key: 'validateLongitude',
        value: function validateLongitude() {
            if (!this.longitude || _typeof(this.longitude) !== _typeof(0)) this.addError(_index.errors.ERROR_POSITION_LONGITUDE_NOTANUMBER);
            if (!this.longitude || this.longitude === null) this.addError(_index.errors.ERROR_POSITION_LONGITUDE_NULLORUNDEFINED);
        }
    }, {
        key: 'validateTime',
        value: function validateTime() {
            if (!this.time) this.addError(_index.errors.ERROR_POSITION_TIME_REQUIRED);
            if (this.time && this.time < new Date()) this.addError(_index.errors.ERROR_POSITION_TIMEISINTHEPAST);
        }
    }]);

    return Position;
}(_ptzCoreDomain.EntityBase);

exports.default = Position;