'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ptzCoreDomain = require('ptz-core-domain');

var _index = require('./index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Route = function (_EntityBase) {
    _inherits(Route, _EntityBase);

    function Route(args) {
        _classCallCheck(this, Route);

        var _this = _possibleConstructorReturn(this, (Route.__proto__ || Object.getPrototypeOf(Route)).call(this, args));

        _this.positions = args.positions;
        _this.starTime = args.starTime;
        _this.endTime = args.endTime;
        _this.validate();
        return _this;
    }

    _createClass(Route, [{
        key: 'validate',
        value: function validate() {
            this.validatePositions();
            this.validateTime();
        }
    }, {
        key: 'validatePositions',
        value: function validatePositions() {
            if (!this.positions || this.positions.length == 0) this.addError(_index.errors.ERROR_ROUTE_POSITIONS_EMPTY);
        }
    }, {
        key: 'validateTime',
        value: function validateTime() {
            if (!this.starTime) this.addError(_index.errors.ERROR_ROUTE_STARTTIME_REQUIRED);
            if (!this.endTime) this.addError(_index.errors.ERROR_ROUTE_ENDTIME_REQUIRED);
            if (this.endTime <= this.starTime) this.addError(_index.errors.ERROR_ROUTE_ENDTIME_BEFORE_STARTTIME);
        }
    }, {
        key: 'compareRoute',
        value: function compareRoute(otherRoute) {
            var _this2 = this;

            var matchPositions = [];
            otherRoute.positions.map(function (pos) {
                _this2.positions.map(function (thisPos) {
                    if (pos.latitude === thisPos.latitude && pos.longitude === thisPos.longitude) matchPositions.push(pos);
                });
            });
            return matchPositions;
        }
    }]);

    return Route;
}(_ptzCoreDomain.EntityBase);

exports.default = Route;

;