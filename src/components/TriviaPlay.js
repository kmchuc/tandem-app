import React, {useState} from 'react';
import { questions } from './Questions';
import '../App.css'

const seenIndex = [];

function shuffleIndex() {
  const randomIndex = Math.floor(Math.random() * Math.floor(questions.length));

  if (seenIndex.includes(randomIndex)){
    shuffleIndex();
  }else {
    seenIndex.push(randomIndex);
  }
  return randomIndex
}

const randomQuestionIndex = shuffleIndex()
const firstQuestion = questions[randomQuestionIndex]

function shuffleOptions(incorrectOptions, correctOption) {
  const allOptions = incorrectOptions.concat(correctOption)
  const questionOptions = []

  while (questionOptions.length !== allOptions.length) {
  const randomOption = Math.floor(Math.random() * Math.floor(allOptions.length));
  if (!questionOptions.includes(allOptions[randomOption])){
    questionOptions.push(allOptions[randomOption]);
  }
}
  return questionOptions;
}

const randomizedOptions = shuffleOptions(questions[randomQuestionIndex].incorrect, questions[randomQuestionIndex].correct)

const TriviaPlay = ({setFinish, score, setScore}) => {

  const [question, setQuestion] = useState(firstQuestion)
  const [count, setCount] = useState(1)
  const [options, setOptions] = useState(randomizedOptions)
  const [selectedOption, setSelectedOption] = useState("")
  
  function changeQuestion() {
    if (count === 10) {
      setFinish(true)
    }
    const nextQuestion = shuffleIndex()
    setQuestion(questions[nextQuestion])
    const incorrect = questions[nextQuestion].incorrect
    const correct = questions[nextQuestion].correct

    const nextQuestionOptions = shuffleOptions(incorrect, correct)
    setOptions(nextQuestionOptions)

    setCount(count + 1)
  }

  function submitAnswer(selectedOption) {
    if (selectedOption === question.correct) {
      setScore(score + 1)
      changeQuestion()
    } else {
      changeQuestion()
    }
  } 
  return(
  <div className="trivia-play">
    <h1>{question.question}</h1>

    <div onChange={e => setSelectedOption(e.target.value)}>
     { options.map((option) => {
        return (
          <div key={option}>
            <input type="radio" id={option} name="questionOption" value={option}></input>
            <label htmlFor={option}>{option}</label>
          </div>
        )
      })}
    </div>

    <button onClick={e => submitAnswer(selectedOption) }>change question</button>
  </div>
  )
}

export default TriviaPlay;
