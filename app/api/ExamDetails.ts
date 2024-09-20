import axios from "axios";
import { useEffect, useState } from "react";

const fetchExamDetails = async () => {
  const exam_id = "12";
  const url = `https://api.liftu.tech/api/v1/exam/${exam_id}/details`;
  const token = localStorage.getItem("accessToken");

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching exam details:", error);
    throw error;
  }
};

const useExamDetails = () => {
  const [examDetails, setExamDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errorResponse, setErrorResponse] = useState<string>("");

  useEffect(() => {
    const getExamDetails = async () => {
      try {
        const data = await fetchExamDetails();
        setExamDetails(data);
      } catch (error: any) {
        console.error("Error fetching exam details:", error);
        setError(error.message);
        setErrorResponse(error.response.data.data.data);
      } finally {
        setLoading(false);
      }
    };

    getExamDetails();
  }, []);

  return { examDetails, loading, error, errorResponse };
};

export default useExamDetails;
