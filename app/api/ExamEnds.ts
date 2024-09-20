export const endExam = async (exam_id: number): Promise<any> => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://api.liftu.tech/api/v1/exam/${exam_id}/end`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Failed to end exam: " + response.statusText);
    }
  } catch (error) {
    console.error((error as Error).message);
  }
};
