import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const mutation = useMutation({
    mutationFn: (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      return postContact(
        form.get("name"),
        form.get("email"),
        form.get("message")
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!!!</h3>
      ) : (
        <form action="POST" onSubmit={mutation.mutate}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
