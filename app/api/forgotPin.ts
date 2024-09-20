export const forgotPin = async (email: string): Promise<any> => {
  try {
    const response = await fetch(`https://api.liftu.tech/api/v1/user/recover`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.error("Failed to recover pin: " + response.statusText);
    }
  } catch (error) {
    console.error((error as Error).message);
  }
};
