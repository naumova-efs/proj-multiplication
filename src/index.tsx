/// <reference path="../node_modules/@types/react/index.d.ts"/>
/// <reference path="../node_modules/@types/react-dom/index.d.ts"/>

import * as React from 'react';
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Multi} from "./components/Multi";
import { MultiPOC} from "./components/MultiPOC";
import {MultiPOCProps} from "./components/MultiPOC"
import {TestSetForm} from "./components/TestSetForm"


//let myProps : MultiPOCProps = {operator1: '8', operator2:'9', operationSymbol: '*'};

ReactDOM.render(
    <MultiPOC arrayForOperator1= {[2,3,4,5]} testTimeSec = {30} />,
    document.getElementById("multitest")
);


ReactDOM.render(
    <TestSetForm testTimeSec = {60} />,
    document.getElementById("testSettings")
);
