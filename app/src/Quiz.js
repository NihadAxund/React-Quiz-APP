import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import Massiv from "./Question/quiz.json";
import Finish from './Finish';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rSelected: null,
            QSelected:"",
            Questions:[]
        };
        this.CountRef = null;
        this.CorrectRef = 0;
    }

    componentDidMount() {
        this.CountRef = Massiv.questions.length;
        console.log(Massiv)
        if(this.CountRef>0){
            this.setState({ QSelected: Massiv.questions[0] }, () => {
               // alert(this.state.QSelected.question);
                console.log(this.state.QSelected.question)
              });
            
            
        }

      }

    handleRadioChange = (value,Answer) => {
        this.setState({ rSelected: value });
        this.CountRef--;
        if(this.CountRef>0){
            this.setState({QSelected:Massiv.questions[Massiv.questions.length-this.CountRef]})
            if(value==Answer){
                this.CorrectRef+=1;
                
            }
        }
   
    }

    render() {
        const { rSelected } = this.state;
         if(this.CountRef!=null && this.CountRef<=0){
            return(
                <Finish Count={Massiv.questions.length} Correct={this.CorrectRef} ></Finish>
            )
        }
        else if(this.state.QSelected!=null&&this.state.QSelected!=""){
            return (
                <div>
                    <section className='Sec-1'>
                        <p className='Quiz_Text bg-primary'>QUIZ {Massiv.questions.length-(this.CountRef-1)}</p>
                    </section>
                    <section className='Sec-2'>
                        <h2 className="animate__animated animate__bounce">
                          {this.state.QSelected.question}
                        </h2>
                    </section>
                    <section className='Sec-3'>
              
                            <ButtonGroup className='ButtonGroup'>
                                <Button
                                    className='Item'
                             
                                    onClick={() => this.handleRadioChange(this.state.QSelected.options.A,
                                        this.state.QSelected.correct_answer)}
                                    active={rSelected === 1}
                                >
                                    <label>A) </label>
                                    <h4>{this.state.QSelected.options.A}</h4>
                                    
                                </Button>
                                <Button
                                    className='Item'
                          
                                    onClick={() => this.handleRadioChange(this.state.QSelected.options.B,
                                        this.state.QSelected.correct_answer)}
                                    active={rSelected === 2}
                                >
                                    <label>B) </label>
                                    <h4>{this.state.QSelected.options.B}</h4>
                                </Button>
                                <Button
                                    className='Item'            
                                   
                                    onClick={() => this.handleRadioChange(this.state.QSelected.options.C,
                                        this.state.QSelected.correct_answer)}
                                    active={rSelected === 3}
                                >
                                    <label>C) </label>
                                    <h4>{this.state.QSelected.options.C}</h4>
                                </Button>
                            </ButtonGroup>
                 
                    </section>
                </div>
            );
        }

    }
}

export default Quiz;
