import axios from "axios";

import { useState, useEffect } from "react";

const startQuestion = async (
  exam_id: number,
  question_id: number,
  github_token: string | null
) => {
  const token = localStorage.getItem("accessToken");
  const url = `https://api.liftu.tech/api/v1/exam/${exam_id}/questions/${question_id}/start`;
  const headers = {
    "x-gh-token": `${github_token}`,
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(url, {}, { headers });

    //if(response.data.data.status === "started"){
    console.log(response.data.data);
    return response.data;
    //}
    // else{
    //   console.log("failed to start question, the question with id: "+{response}+"was ended.");
    // }
  } catch (error) {
    console.error("Error starting exam question:", error);
    throw error;
  }
};

export default startQuestion;
