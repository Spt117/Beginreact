const UserForm = ({ onSubmitUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const username = form.name.value;
    const password = form.password.value;

    onSubmitUser({ username, password });
  };

  return (
    <form className="vertical-stack form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input id="name" type="text" name="name" />
      </label>
      <label htmlFor="password">
        Password
        <input id="password" type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

const App = () => {
  const onSubmitUser = (data) => {
    alert('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default App;
