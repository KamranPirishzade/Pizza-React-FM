export default async function postContact(name, email, message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error("Network response is not ok.");
  }

  //   Normally we did this way and it is correct but also you can directly
  //   return data without await which adds data directly the promise chain
  //   and it is already awaited response so you do not need to await
  //   const data = await response.json();
  //   return data;

  return response.json();
}
