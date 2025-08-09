import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import postContact from "../api/postContact";
import { useFormStatus } from "react-dom";

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const mutation = useMutation({
    mutationFn: (form) => {
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
        <form action={mutation.mutate}>
          <InputItem type="text" name="name" placeholder="Name" required />
          <InputItem type="email" name="email" placeholder="Email" required />
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

function InputItem(props) {
  const { pending } = useFormStatus();
  return (
    <input
      disabled={pending}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
