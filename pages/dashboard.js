import { UserAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="signin">
        <h1>Profile</h1>
      </div>
      <div className="signin">
        <p>Name: user</p>
      </div>
      <div className="signin">
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </>
  );
};

export default Dashboard;
