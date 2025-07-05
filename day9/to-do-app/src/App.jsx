import { useState } from "react";

const App = () => {
  const [name, setName] = useState([]);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const city = e.target.city.value;

    setName((prev) => {
      const temp = [...prev];
      temp.push({ username, city });
      return temp;
    });
  };

  const handleDeleteUser = (idx) => {
    setName(() => {
      const temp = [...name];
      temp.splice(idx,1);
      return temp;
    });
  };

  return (
    <div>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          name="username"
          placeholder="Please Enter Your Name"
        />
        <br />
        <input type="text" name="city" placeholder="Please Enter Your City" />
        <br />

        <button>Submit</button>
      </form>

      <div>
        {name.map((elem, idx) => {
          return (
            <div>
              <h3>{elem.username}</h3>
              <h5>{elem.city}</h5>
              <button
                onClick={() => {
                  handleDeleteUser(idx);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
