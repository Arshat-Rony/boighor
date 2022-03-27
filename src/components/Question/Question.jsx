import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h1>Simple Qusetion About React</h1>

            <div className="question">
                <h3>Question : 1 : How react works?</h3>
                <hr />
                <p><strong>Answer : </strong>  React is tiny library using for making interactive UI. React acts in a declarative way means you will just make the component it will automatically render and will present you a good UI. It also acts making a virtual DOM which helps to quick changes in DOM.</p>
            </div>
            <div className="question">
                <h3>Question : 1 : What is the difference between props and state?</h3>
                <hr />
                <p><strong>Answer : </strong>  Props is basically a data that is sent to one component to another component in one way direction. Props is immutable.
                    State is used in react to save user activity.
                </p>
            </div>
        </div>
    );
};

export default Question;