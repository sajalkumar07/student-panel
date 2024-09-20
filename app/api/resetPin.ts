export const resetPin = async (
  resetToken: string,
  passcode: string
): Promise<any> => {
  try {
    const response = await fetch(
      `https://api.liftu.tech/api/v1/user/resetPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resetToken,
          passcode,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.error("Failed to reset pin: " + response.statusText);
    }
  } catch (error) {
    console.error((error as Error).message);
  }
};
