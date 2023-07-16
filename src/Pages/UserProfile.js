import { useNavigate } from "react-router-dom"; // useHistory for the app

// The Collections page HTML goes here
// Will need a component or container for all the images
// and to scroll through them

export default function UserProfile() {
  const history = useNavigate();

  const buttonHandler = () => {
    history("/");
  };
  return (
    <section>
      <h1>This is your Profile page</h1>
      <p>It's the Collections page</p>
      <button onClick={buttonHandler}>Home</button>
    </section>
  );
}
