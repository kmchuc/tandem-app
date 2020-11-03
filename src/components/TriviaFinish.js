import React from 'react';

const TriviaFinish = ({score}) => {
  return(
    <div>
      <h1>TriviaFinish</h1>
      <h2>Total Score: { score }</h2>
      <button onClick={e => window.location.reload()}>Replay</button>
    </div>
  )
}

export default TriviaFinish;