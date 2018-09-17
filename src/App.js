import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import DisplaySetOfQuestions from './components/DisplaySetOfQuestions/DisplaySetOfQuestions'
import QuestionsToSet from './components/QuestionsInSingleSet/QuestionsToSet';

const App = () => (
      <div className="App">
      <Router>
        <div>
        <Route exact path ={'/'} component={DisplaySetOfQuestions} />
        <Route exact path={'/set/:uid'} component={QuestionsToSet}/>
        
        </div>
        </Router>
      </div>
    )
  

export default App;
