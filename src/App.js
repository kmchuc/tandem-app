import React from 'react';
import TriviaQuestion from '../src/components/TriviaQuestion'

class App extends React.Component {
  render() {
    return (
      <div className="#tandemtrivia">
        <div className="questions">
          <TriviaQuestion tagline="things are about to get trivial" />
        </div>
      </div>
    )
  }
}

export default App;