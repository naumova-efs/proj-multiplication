/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by lena on 2017-03-22.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var MultiPOC = (function (_super) {
    __extends(MultiPOC, _super);
    function MultiPOC(props) {
        var _this = _super.call(this, props) || this;
        _this.operator1 = "2";
        _this.operator2 = "2";
        _this.operationSymbol = "x";
        _this.assesmentText = "";
        _this.numberOfGoodAnswers = 0;
        _this.numberOfBadAnswers = 0;
        _this.numberTotalAnswers = 0;
        _this.isTestVisible = false;
        _this.isStartButtonVisible = true;
        _this.isNextButtonVisible = false;
        _this.resultFontColour = 'grey';
        _this.arrayForOperator1 = [2, 3, 4];
        _this._handleKeyPress = function (e) {
            if (e.key === 'Enter') {
                console.log('do validate');
                console.info(_this.operator1 + '*' + _this.operator2);
                _this.result = Number(_this.operator1) * Number(_this.operator2);
                var isCorrect = _this.result == Number(_this.inputValue.value);
                _this.assesmentText = isCorrect ? 'GOOD - click Next to continue' : 'BAD - correct your result';
                _this.numberTotalAnswers++;
                if (isCorrect) {
                    _this.numberOfGoodAnswers++;
                    _this.isNextButtonVisible = true;
                    _this.resultFontColour = 'green';
                }
                else {
                    _this.numberOfBadAnswers++;
                    _this.isNextButtonVisible = false;
                    _this.resultFontColour = 'red';
                }
                console.info(_this.inputValue.value);
                console.info(_this.result);
                console.info(isCorrect ? 'GOOD' : 'BAD');
                _this.setState({
                    result: _this.result,
                    assesmentText: _this.assesmentText,
                    numberOfGoodAnswers: _this.numberOfGoodAnswers,
                    numberOfBadAnswers: _this.numberOfBadAnswers,
                    isNextButtonVisible: _this.isNextButtonVisible,
                    resultFontColour: _this.resultFontColour
                });
                console.info(_this.assesmentText);
            }
        };
        _this.state = {
            arrayForOperator1: _this.props.arrayForOperator1,
            testTimeSec: _this.props.testTimeSec
        };
        return _this;
    }
    MultiPOC.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement("div", { style: { visibility: this.isStartButtonVisible ? 'visible' : 'hidden' } },
                React.createElement("button", { id: "startButton", type: "button", className: "btn btn-primary btn-md btn-block", onClick: this.startClicked.bind(this) }, "Start Test")),
            React.createElement("div", { style: { visibility: !this.isStartButtonVisible ? 'visible' : 'hidden' } },
                React.createElement("div", { style: { fontSize: "500%" } },
                    React.createElement("span", { style: { margin: '1%' } }, this.operator1),
                    React.createElement("span", { style: { margin: '1%' } }, this.operationSymbol),
                    React.createElement("span", { style: { margin: '1%' } }, this.operator2),
                    React.createElement("span", { style: { margin: '1%' } }, "="),
                    React.createElement("input", { type: "number", name: "inputValue", ref: function (input) { return _this.inputValue = input; }, onKeyPress: this._handleKeyPress.bind(this), size: 3, style: { height: '60px', width: '120px' } }),
                    React.createElement("button", { id: "nextButton", type: "button", style: { visibility: this.isNextButtonVisible ? 'visible' : 'hidden', marginLeft: '4%' }, className: "btn btn-lg", onClick: this.nextClicked.bind(this) }, "Next")),
                React.createElement("div", { style: { fontSize: "250%" } },
                    React.createElement("span", { style: { marginRight: '1%', color: this.resultFontColour } }, this.assesmentText))),
            React.createElement("div", null,
                React.createElement("h4", { id: "goodScore" },
                    " Good:",
                    this.numberOfGoodAnswers,
                    " Bad:",
                    this.numberOfBadAnswers)));
    };
    MultiPOC.prototype.nextClicked = function () {
        //this.operator1 = String(this.getRandom2To10());
        this.operator1 = String(this.getRandomFromArray(this.arrayForOperator1));
        this.operator2 = String(this.getRandom2To9());
        this.inputValue.value = '';
        this.assesmentText = '';
        this.isNextButtonVisible = false;
        this.setState({
            operator1: this.operator1,
            operator2: this.operator2,
            assesmentText: this.assesmentText,
            inputValue: this.inputValue,
            isNextButtonVisible: this.isNextButtonVisible
        });
    };
    MultiPOC.prototype.startClicked = function () {
        this.isTestVisible = true;
        this.isStartButtonVisible = false;
        this.numberOfGoodAnswers = 0;
        this.numberOfBadAnswers = 0;
        this.numberTotalAnswers = 0;
        this.operator1 = String(this.getRandomFromArray(this.arrayForOperator1));
        this.operator2 = String(this.getRandom2To9());
        this.inputValue.value = '';
        this.assesmentText = 'Type result and press Enter';
        this.setState({
            operator1: this.operator1,
            operator2: this.operator2,
            assesmentText: this.assesmentText,
            inputValue: this.inputValue,
            numberOfGoodAnswers: this.numberOfGoodAnswers,
            numberOfBadAnswers: this.numberOfBadAnswers,
            isTestVisible: this.isTestVisible,
            isStartButtonVisible: this.isStartButtonVisible
        });
        setTimeout(this.endOfTestTime.bind(this), 40000);
    };
    MultiPOC.prototype.endOfTestTime = function () {
        //this.isTestVisible = false;
        console.info('endOfTestTime(): ');
        this.isStartButtonVisible = true;
        this.isNextButtonVisible = false;
        this.setState({
            isStartButtonVisible: this.isStartButtonVisible,
            isNextButtonVisible: this.isNextButtonVisible
        });
    };
    MultiPOC.prototype.getRandom2To9 = function () {
        return Math.floor(Math.random() * 8) + 2;
        /*while(1===1){
            result= Math.floor(Math.random()*10 +1);

            if(result >=2 && result <10)
                return result;
            else
                continue;
        }*/
    };
    MultiPOC.prototype.getRandomFromArray = function (arrayToChooseFrom) {
        var length = arrayToChooseFrom.length;
        // Math.floor(Math.random() * (max - min + 1)) + min;Returns a random integer between min (inclusive) and max (inclusive)
        var randomIndex = Math.floor(Math.random() * length);
        console.log("radomIndex = " + randomIndex);
        return arrayToChooseFrom[randomIndex];
    };
    MultiPOC.prototype.setArrayForOperator1 = function (arrayToSet) {
        this.arrayForOperator1 = arrayToSet;
    };
    return MultiPOC;
}(React.Component));
exports.MultiPOC = MultiPOC;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="../node_modules/@types/react/index.d.ts"/>
/// <reference path="../node_modules/@types/react-dom/index.d.ts"/>

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var MultiPOC_1 = __webpack_require__(1);
var TestSetForm_1 = __webpack_require__(4);
//let myProps : MultiPOCProps = {operator1: '8', operator2:'9', operationSymbol: '*'};
ReactDOM.render(React.createElement(MultiPOC_1.MultiPOC, { arrayForOperator1: [2, 3, 4, 5], testTimeSec: 30 }), document.getElementById("multitest"));
ReactDOM.render(React.createElement(TestSetForm_1.TestSetForm, { testTimeSec: 60 }), document.getElementById("testSettings"));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by lena on 2017-04-09.
 */
var React = __webpack_require__(0);
var TestSetForm = (function (_super) {
    __extends(TestSetForm, _super);
    function TestSetForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            testTimeSec: _this.props.testTimeSec
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    TestSetForm.prototype.handleChange = function (event) {
        this.setState({ testTimeSec: event.target.testTimeSec });
    };
    TestSetForm.prototype.handleSubmit = function (event) {
        alert('Test time was submitted: ' + String(this.state.testTimeSec));
        event.preventDefault();
    };
    TestSetForm.prototype.render = function () {
        return (React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement("label", null,
                "Test Duration in Seconds:",
                React.createElement("input", { type: "number", value: this.state.testTimeSec, onChange: this.handleChange.bind(this) })),
            React.createElement("input", { type: "submit", value: "Update test parameters ", className: "btn btn-primary btn-md btn-block" })));
    };
    return TestSetForm;
}(React.Component));
exports.TestSetForm = TestSetForm;
/*
 <p>Set test duration in seconds:</p>
 <form>
 <h3>Select values for multiplier: </h2>
 <div class="checkbox">
 <label><input type="checkbox" value="">2</label>
 </div>
 <div class="checkbox">
 <label><input type="checkbox" value="">3</label>
 </div>
 <div class="checkbox disabled">
 <label><input type="checkbox" value="" disabled>Option 3</label>
 </div>
 <label>
 Name:
 <input type="text" name="name" />
 </label>


 <input type="submit" value="Submit" />
 </form>*/ 


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map