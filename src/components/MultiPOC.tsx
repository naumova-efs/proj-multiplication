/**
 * Created by lena on 2017-03-22.
 */

import * as React from "react";
export interface MultiPOCProps {
    arrayForOperator1:number[];
    testTimeSec:number
    }

export class MultiPOC extends React.Component<MultiPOCProps, any>{
    private operator1 :string = "2";
    private operator2 :string = "2";
    private result: number;
    private inputValue: any;
    private operationSymbol: string = "x";
    private assesmentText: string = "";

    private numberOfGoodAnswers: number = 0;
    private numberOfBadAnswers: number= 0;
    private numberTotalAnswers: number = 0;

    private isTestVisible : boolean = false;
    private isStartButtonVisible : boolean = true;
    private isNextButtonVisible = false;
    private resultFontColour:string = 'grey';

    private arrayForOperator1:number[] = [2,3,4];
    private testTimeSec:number;


    constructor(props:MultiPOCProps) {
        super(props);

        this.state = {
            arrayForOperator1:this.props.arrayForOperator1,
            testTimeSec:this.props.testTimeSec
        };
    }


    public render ():JSX.Element{
        return<div>
            <div style={{visibility: this.isStartButtonVisible?'visible':'hidden'}} >
                <button id="startButton" type="button"
                      className="btn btn-primary btn-md btn-block"
                        onClick={this.startClicked.bind(this)}>Start Test
                </button>
            </div>

            <div style={{visibility: !this.isStartButtonVisible?'visible':'hidden'}} >
                <div style={{fontSize:"500%"}}>
                     <span style={{margin:'1%'}}>
                         {this.operator1}
                     </span>
                     <span style={{margin:'1%'}}>{this.operationSymbol}</span>
                     <span style={{margin:'1%'}}>
                         {this.operator2}
                     </span>
                      <span style={{margin:'1%'}}>=</span>
                      <input type="number" name="inputValue"
                             ref={(input)=> this.inputValue = input}
                             onKeyPress={this._handleKeyPress.bind(this)}
                             size={3}
                             style={{ height: '60px', width: '120px'}}

                      />
                     <button id="nextButton" type="button"
                            style= {{visibility: this.isNextButtonVisible ? 'visible':'hidden', marginLeft: '4%'}} className="btn btn-lg"
                            onClick={this.nextClicked.bind(this)}>Next
                     </button>
                 </div>

                 <div style={{fontSize:"250%"}}>
                  <span style={{marginRight:'1%', color:this.resultFontColour }}>{this.assesmentText}</span>

                 </div>
             </div>

            <div>
                <h4 id= "goodScore" > Good:{this.numberOfGoodAnswers} Bad:{this.numberOfBadAnswers}</h4>

            </div>

         </div>
    }


   public _handleKeyPress = (e:any) => {
        if (e.key === 'Enter') {
            console.log('do validate');

            console.info(this.operator1 + '*' + this.operator2);
            this.result = Number(this.operator1) * Number(this.operator2);
            let isCorrect:boolean = this.result == Number(this.inputValue.value);
            this.assesmentText = isCorrect ? 'GOOD - click Next to continue' : 'BAD - correct your result';
            this.numberTotalAnswers++;
            if(isCorrect) {
                this.numberOfGoodAnswers++;
                this.isNextButtonVisible = true;
                this.resultFontColour = 'green';
            }
            else {
                this.numberOfBadAnswers++;
                this.isNextButtonVisible = false;
                this.resultFontColour = 'red';
            }
            console.info(this.inputValue.value );
            console.info(this.result);
            console.info(isCorrect ? 'GOOD' : 'BAD');
            this.setState({
                    result: this.result,
                    assesmentText: this.assesmentText,
                    numberOfGoodAnswers: this.numberOfGoodAnswers,
                    numberOfBadAnswers: this.numberOfBadAnswers,
                    isNextButtonVisible: this.isNextButtonVisible,
                    resultFontColour: this.resultFontColour
                }

            );
            console.info(this.assesmentText);
        }
    }

    public nextClicked(): void{
        //this.operator1 = String(this.getRandom2To10());
        this.operator1 = String(this.getRandomFromArray(this.arrayForOperator1));
        this.operator2 = String(this.getRandom2To9());
        this.inputValue.value ='';
        this.assesmentText = '';
        this.isNextButtonVisible = false;

        this.setState({
            operator1: this.operator1,
            operator2: this.operator2,
            assesmentText: this.assesmentText,
            inputValue: this.inputValue,
            isNextButtonVisible: this.isNextButtonVisible
         }

        );


    }

    public startClicked(): void{

        this.isTestVisible = true;
        this.isStartButtonVisible = false;

        this.numberOfGoodAnswers = 0;
        this.numberOfBadAnswers = 0;
        this.numberTotalAnswers = 0;

        this.operator1 = String(this.getRandomFromArray(this.arrayForOperator1));
        this.operator2 = String(this.getRandom2To9());
        this.inputValue.value ='';
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
             setTimeout(this.endOfTestTime.bind(this),40000);
    }

    public endOfTestTime(): void{
        //this.isTestVisible = false;
        console.info('endOfTestTime(): ')
        this.isStartButtonVisible = true;
        this.isNextButtonVisible = false;

        this.setState({
            isStartButtonVisible: this.isStartButtonVisible,
            isNextButtonVisible: this.isNextButtonVisible
        });
    }



    public getRandom2To9():number{

       return Math.floor(Math.random()*8)+2;
        /*while(1===1){
            result= Math.floor(Math.random()*10 +1);

            if(result >=2 && result <10)
                return result;
            else
                continue;
        }*/

    }

    public getRandomFromArray(arrayToChooseFrom:number[]):number{
        let length:number = arrayToChooseFrom.length;
        // Math.floor(Math.random() * (max - min + 1)) + min;Returns a random integer between min (inclusive) and max (inclusive)
        let randomIndex = Math.floor(Math.random()* length);
        console.log("radomIndex = "+ randomIndex);
        return arrayToChooseFrom[randomIndex];
    }

    public setArrayForOperator1 (arrayToSet:number[]){
        this.arrayForOperator1 = arrayToSet;
    }
}