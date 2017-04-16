/**
 * Created by lena on 2017-04-09.
 */
import * as React from "react";
export interface TestSetFormProps{
    testTimeSec:number;
}

export class TestSetForm extends React.Component<TestSetFormProps, any>{
    private testTimeSec:number;

    constructor(props:TestSetFormProps){
        super(props);

        this.state={
            testTimeSec:this.props.testTimeSec
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event:any) {
        this.setState({testTimeSec: event.target.testTimeSec});
    }

    handleSubmit(event:any) {
        alert('Test time was submitted: ' + String(this.state.testTimeSec));
        event.preventDefault();
    }

    public render ():JSX.Element{
        return(

        <form onSubmit={this.handleSubmit}>
            <label>
                Test Duration in Seconds:
                <input type="number" value={this.state.testTimeSec} onChange={this.handleChange.bind(this)} />
            </label>
            <input type="submit" value="Update test parameters "  className="btn btn-primary btn-md btn-block"/>
        </form>






        );
    }
}

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