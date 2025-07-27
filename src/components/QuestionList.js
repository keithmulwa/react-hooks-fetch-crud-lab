import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ onDeleteQuestion, onUpdateQuestion }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  const questionItems = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
      onDeleteQuestion={onDeleteQuestion}
      onUpdateQuestion={onUpdateQuestion}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
