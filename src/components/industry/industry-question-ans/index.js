import React, { useState } from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";
const IndustyQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(3);

  const questions = [
    {
      question: "Is MeMate specifically designed for creative agencies?",
      key: 0,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "How can MeMate benefit my creative agency?",
      key: 1,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question:
        "Can MeMate handle the unique requirements of marketing and advertising agencies?",
      key: 2,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question:
        "How does MeMate simplify project management for creative agencies?",
      key: 3,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question:
        "Can MeMate assist in financial management for creative agencies?",
      key: 4,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "How does MeMate help with client communication?",
      key: 5,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question:
        "Is MeMate suitable for both small and large creative agencies?",
      key: 6,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "Does MeMate offer creative workflow solutions?",
      key: 7,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question:
        "Is MeMate compatible with other tools or software commonly used by creative agencies?",
      key: 8,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "How can I learn more about MeMate and its features?",
      key: 9,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
  ];


  const toggleQuestion = (key) => {
    setSelectedQuestion(selectedQuestion === key ? null : key); 
  };

  return (
    <div className="question-answer-wrapper">
    <div className="question-answer-content">
      <div className="question-answer-heading-wrapper">
        <p className="question-answer-heading">We answer your questions</p>
      </div>
      <div className="questions-wrapper">
        {questions.map((ques) => (
          <div key={ques.key} className="each-ques-wrapper">
            <div
              className={`question-answer-ques ${
                selectedQuestion === ques.key ? "selected" : ""
              }`}
              onClick={() => toggleQuestion(ques.key)}
            >
              <p className="question-answer-ques-info">{ques.question}</p>
              <Box
                className="add-icon-wrapper"
                sx={{
                  height: "24px",
                  width: "24px",
                  transform: selectedQuestion === ques.key ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease", 
                }}
              >
                <div className="plus-icon-image-wrapper">
                  {selectedQuestion === ques.key ? (
                    <img
                      src={Images.selectedQuestion}
                      className="icon"
                      alt="Selected Question"
                      style={{ height: "24px" }} 
                    />
                  ) : (
                    <AddIcon className="icon" htmlColor="#000000" />
                  )}
                </div>
              </Box>
            </div>
            <div
              className={`question-answer-ans-info ${
                selectedQuestion === ques.key ? "expanded" : ""
              }`}
            >
              {selectedQuestion === ques.key && <p>{ques.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default IndustyQuesitonAndAns;
