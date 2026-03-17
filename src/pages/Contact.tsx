import '../styles/Contact.scss';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer.tsx";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwvrqeqg");
  if (state.succeeded) {
      return <p>Email envoyé avec succès !</p>;
  }
  return (
    <section id='contact__form'>
        <Link to="/">Retour à l'accueil</Link>
        <form onSubmit={handleSubmit}>
            <h1>Me contacter</h1>
            <label htmlFor="email">Votre adresse email :</label>
            <input id="email" type="email" name="email" placeholder='Votre email...'/>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id="message" name="message" placeholder='Votre message...'/>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting}> Envoyer </button>
        </form>
        <Footer />
    </section>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;