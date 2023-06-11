import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function onFormSubmit(newQuestion) {
    setQuestions(...questions, newQuestion);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onFormSubmit={onFormSubmit} />
      ) : (
        <QuestionList />
      )}
    </main>
  );
}

export default App;
