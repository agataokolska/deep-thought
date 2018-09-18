import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DisplaySetOfQuestions from './components/DisplaySetOfQuestions/DisplaySetOfQuestions'
import QuestionInSingleSet from './components/QuestionsInSingleSet'
import SingleSetOfQuestions from './components/DisplaySetOfQuestions/SingleSetOfQuestions'
import ListOfQuestions from './components/QuestionsInSingleSet/ListOfQuestions';
import ListOfQuestionsToChoose from './components/ListOfQuestionsToChoose/ListOfQuestionsToChoose'
const App = () => (
  <div className="App">
    <Router>
      <div>
        <Route exact path={'/'} component={DisplaySetOfQuestions} />
        <Route exact path={'/set/:q_id'} component={ListOfQuestionsToChoose} />
        <Route exact path={'/questions'} component={QuestionInSingleSet} />
      </div>
    </Router>
  </div>
)


export default App;
