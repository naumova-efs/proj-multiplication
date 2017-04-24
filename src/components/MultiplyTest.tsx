/**
 * Created by lena on 2017-03-22.
 */

import * as React from "react";
export interface MultiPOCProps {
    testTimeSec:number
    }

export class MultiplyTest extends React.Component<MultiPOCProps, any>{
    private operator1 :string = "2";
    private operator2 :string = "2";
    private result: number;

    private textInput: any;
    private nextButton: any;

    private operationSymbol: string = "x";
    private assesmentText: string = "";

    private numberOfGoodAnswers: number = 0;
    private numberOfBadAnswers: number= 0;
    private numberTotalAnswers: number = 0;


    private isTestVisible : boolean = false;
    private isStartButtonVisible : boolean = true;
    private isNextButtonVisible = false;
    private resultFontColour:string = 'grey';

    private checkBoxesSelected:boolean[]  = new Array(10);
    private checkBoxSelectedFor2:boolean;
    private checkBoxSelectedFor3:boolean;
    private checkBoxSelectedFor4:boolean;
    private checkBoxSelectedFor5:boolean;
    private checkBoxSelectedFor6:boolean;
    private checkBoxSelectedFor7:boolean;
    private checkBoxSelectedFor8:boolean;
    private checkBoxSelectedFor9:boolean;



    private arrayForOperator1:any[8];
    private durationSec:any;


    constructor(props:MultiPOCProps) {
        super(props);

        this.state = {
            testTimeSec:this.props.testTimeSec
        };
    }


    public render ():JSX.Element{
        return<div>

          <fieldset style={{fontSize:"120%"}}>
              <legend> Coose multiplicant values for the test</legend>
              <div>
                   <span className={this.checkBoxSelectedFor2 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor2.bind(this)}>2</span>
              </div>
              <div>
                   <span className={this.checkBoxSelectedFor3 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor3.bind(this)}>3</span>
              </div>
              <div>
                   <span className={this.checkBoxSelectedFor4 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor4.bind(this)}>4</span>
              </div>
              <div>
                   <span className={this.checkBoxSelectedFor5 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor5.bind(this)}>5</span>
              </div>
              <div>
                   <span className={this.checkBoxSelectedFor6 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor6.bind(this)}>6</span>
              </div>
              <div>
                   <span className={this.checkBoxSelectedFor7 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor7.bind(this)}>7</span>
              </div>
              <div>
                   <span className={this.checkBoxSelectedFor8 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor8.bind(this)}>8</span>
              </div>
              <div>
                   <span className={this.checkBoxSelectedFor9? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor9.bind(this)}>9</span>
              </div>

              <div >
                  <span style={{margin:'2%'}}> Test duration is:</span>
                  <input type="number" name="durationSec"
                         ref={(input)=> this.durationSec = input}
                         onKeyPress={this._handleKeyPressDuration.bind(this)}
                         style={{ height: '30px', width: '60px'}}

                  />
                  <span style={{margin:'2%'}}>sec</span>
              </div>

          </fieldset>




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
                             ref={(input)=> this.textInput = input}
                             onKeyPress={this._handleKeyPress.bind(this)}
                             size={3}
                             style={{ height: '60px', width: '120px'}}

                      />
                     <button id="nextButton" type="button"
                            style= {{visibility: this.isNextButtonVisible ? 'visible':'hidden', marginLeft: '4%'}} className="btn btn-lg"
                            onClick={this.nextClicked.bind(this)}
                            ref={(thisButton)=>{this.nextButton = thisButton}}>Next
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
   public _handleKeyPressDuration = (e:any) => {
       if (e.key === 'Enter') {
           console.log("Duration set: "+this.durationSec.value + " sec");
       }
   };

   public _handleKeyPress = (e:any) => {
        if (e.key === 'Enter') {
            this.result = Number(this.operator1) * Number(this.operator2);
            let isCorrect:boolean = this.result == Number(this.textInput.value);
            this.assesmentText = isCorrect ? 'GOOD - click Next to continue' : 'BAD - correct your result';
            this.numberTotalAnswers++;
            if(isCorrect) {
                this.numberOfGoodAnswers++;
                this.isNextButtonVisible = true;
                this.nextButton.focus();
                this.resultFontColour = 'green';

            }
            else {
                this.numberOfBadAnswers++;
                this.isNextButtonVisible = false;
                this.resultFontColour = 'red';
                 //this.textInput.focus();
            }

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
    };

    public nextClicked(): void{
        //this.operator1 = String(this.getRandom2To10());
        this.operator1 = String(this.getRandomFromArray(this.arrayForOperator1));
        this.operator2 = String(this.getRandom2To9());
        this.textInput.value ='';
        this.assesmentText = '';
        this.isNextButtonVisible = false;
        this.textInput.focus();

        this.setState({
            operator1: this.operator1,
            operator2: this.operator2,
            assesmentText: this.assesmentText,
            inputValue: this.textInput,
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

        this.arrayForOperator1 = [];


       for(let i=2; i<=this.checkBoxesSelected.length; i++){
           if(this.checkBoxesSelected[i])
               this.arrayForOperator1.push(i);
       }

        this.operator1 = String(this.getRandomFromArray(this.arrayForOperator1));
        this.operator2 = String(this.getRandom2To9());
        this.textInput.value ='';
        this.assesmentText = 'Type result and press Enter';

        this.textInput.focus();

        this.setState({
            operator1: this.operator1,
            operator2: this.operator2,
            assesmentText: this.assesmentText,
            inputValue: this.textInput,
            numberOfGoodAnswers: this.numberOfGoodAnswers,
            numberOfBadAnswers: this.numberOfBadAnswers,
            isTestVisible: this.isTestVisible,
            isStartButtonVisible: this.isStartButtonVisible,


        });
             setTimeout(this.endOfTestTime.bind(this),Number(this.durationSec.value)*1000);
    }

    public endOfTestTime(): void{
        //this.isTestVisible = false;
        console.info('endOfTestTime(): ');
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
        console.log("array to choose operator1 is:"+arrayToChooseFrom.toString());
        let length:number = arrayToChooseFrom.length;
        // Math.floor(Math.random() * (max - min + 1)) + min;Returns a random integer between min (inclusive) and max (inclusive)
        let randomIndex = Math.floor(Math.random()* length);
        console.log("radomIndex = "+ randomIndex);
        return arrayToChooseFrom[randomIndex];
    }

    public setArrayForOperator1 (arrayToSet:number[]){
        this.arrayForOperator1 = arrayToSet;
    }

    public cbClickedFor2(){
        this.checkBoxSelectedFor2 = !this.checkBoxSelectedFor2;
        this.checkBoxesSelected[2] = this.checkBoxSelectedFor2;
        this.setState({checkBoxSelectedFor2: this.checkBoxSelectedFor2}
        )
    }
    public cbClickedFor3(){
        this.checkBoxSelectedFor3 = !this.checkBoxSelectedFor3;
        this.checkBoxesSelected[3] = this.checkBoxSelectedFor3;
        this.setState({checkBoxSelectedFor3: this.checkBoxSelectedFor3}
        )
    }
    public cbClickedFor4(){
        this.checkBoxSelectedFor4 = !this.checkBoxSelectedFor4;
        this.checkBoxesSelected[4] = this.checkBoxSelectedFor4;
        this.setState({checkBoxSelectedFor4: this.checkBoxSelectedFor4}
        )
    }

    public cbClickedFor5(){
        this.checkBoxSelectedFor5 = !this.checkBoxSelectedFor5;
        this.checkBoxesSelected[5] = this.checkBoxSelectedFor5;
        this.setState({checkBoxSelectedFor5: this.checkBoxSelectedFor5}
        )
    }
public cbClickedFor6(){
    this.checkBoxSelectedFor6 = !this.checkBoxSelectedFor6;
    this.checkBoxesSelected[6] = this.checkBoxSelectedFor6;
    this.setState({checkBoxSelectedFor6: this.checkBoxSelectedFor6}
    )
}
public cbClickedFor7(){
    this.checkBoxSelectedFor7 = !this.checkBoxSelectedFor7;
    this.checkBoxesSelected[7] = this.checkBoxSelectedFor7;
    this.setState({checkBoxSelectedFor7: this.checkBoxSelectedFor7}
    )
}
public cbClickedFor8(){
    this.checkBoxSelectedFor8 = !this.checkBoxSelectedFor8;
    this.checkBoxesSelected[8] = this.checkBoxSelectedFor8;
    this.setState({checkBoxSelectedFor8: this.checkBoxSelectedFor8}
    )
}
public cbClickedFor9(){
    this.checkBoxSelectedFor9 = !this.checkBoxSelectedFor9;
    this.checkBoxesSelected[9] = this.checkBoxSelectedFor9;
    this.setState({checkBoxSelectedFor9: this.checkBoxSelectedFor9}
    )
}


}