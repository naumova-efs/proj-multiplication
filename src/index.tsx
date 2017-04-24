/// <reference path="../node_modules/@types/react/index.d.ts"/>
/// <reference path="../node_modules/@types/react-dom/index.d.ts"/>

import * as React from 'react';
import * as ReactDOM from "react-dom";

import { MultiplyTest} from "./components/MultiplyTest";



ReactDOM.render(
    <MultiplyTest  testTimeSec = {30} />,
    document.getElementById("multitest")
);


