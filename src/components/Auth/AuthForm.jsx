import { Link } from 'react-router-dom';

export default function AuthForm({ mode = 'signin' }) {
  const { signUp, signIn, error } = useAuth();
  const [credentials, handleChange] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await type.action(credentials);
  };

  const signin = {
    prompt: 'Sign into your account',
    button: 'Sign In',
    switch: {
      prompt: 'Need to create an account?',
      link: 'signup',
    },
    action: signIn,
  };

  const signup = {
    prompt: 'Create an account',
    button: 'Sign Up',
    switch: {
      prompt: 'Already have an account?',
      link: '../',
    },
    action: signUp,
  };

  const modes = { signin, signup };
  const type = modes[mode];

  return (
    <form onSubmit={handleSubmit}>
      <h2>{type.prompt}</h2>
    </form>
  );
}
