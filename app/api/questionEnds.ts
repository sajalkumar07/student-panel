import axios from "axios";

const endQuestion = async (
  exam_id: number,
  question_id: number,
  github_token: string | null
) => {
  const token = localStorage.getItem("accessToken");
  const url = `https://api.liftu.tech/api/v1/exam/${exam_id}/questions/${question_id}/submit`;
  const headers = {
    "x-gh-token": `${github_token}`,
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(url, {}, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error submitting exam question:", error);
    throw error;
  }
};

export default endQuestion;
