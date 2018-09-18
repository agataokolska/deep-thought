import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DisplaySetOfQuestions from './components/DisplaySetOfQuestions/DisplaySetOfQuestions'
import QuestionInSingleSet from './components/QuestionsInSingleSet'

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Route exact path={'/'} component={DisplaySetOfQuestions} />
        <Route exact path={'/set/:q_id'} component={QuestionInSingleSet} />
        <Route exact path={'/questions'} component={QuestionInSingleSet} />

      </div>
    </Router>
  </div>
)


export default App;
