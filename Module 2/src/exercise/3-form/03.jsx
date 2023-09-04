import { useRef } from 'react';

const UserForm = ({ onSubmitUser }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const username = form.name.value;
    const password = form.password.value;

    onSubmitUser({ username, password });
  };

  return (
    <form className="vertical-stack form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" ref={usernameRef} />
      </label>
      <label>
        Password
        <input type="password" name="password" ref={passwordRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

const Form = () => {
  const onSubmitUser = (data) => {
    console.log('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default Form;
