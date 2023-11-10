import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    // Register the user with the backend
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Handle the response
    if (response.ok) {
      // The user was registered successfully
    } else {
      // There was an error registering the user
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" placeholder="Name"
        {...register('name')}
      />

      
<input type="email" name="email" placeholder="Email"
        {...register('email')}
      />

      
<input type="password" name="password" placeholder="Password"
        {...register('password')}
      />

      
<button type="submit">Register</button>
</form>
  );
};

export default RegisterForm;