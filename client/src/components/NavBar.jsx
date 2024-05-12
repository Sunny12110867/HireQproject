import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="pl-2 text-2xl sm:pl-0 sm:text-3xl">
          Chat application
        </Link>
        <div className="mr-1 flex items-center gap-x-2">
          {user && (
            <>
             {user && (
                        <Link
                          onClick={() => logoutUser()}
                          to="/login"
                          style={{
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            padding: "0.75rem 1rem",
                            fontWeight: "500"
                           
                          }}
                        >
                          Logout
                        </Link>
                      )}
            </>
          )}
          {!user && (
            <>
              <Link to="/login" className="font-medium">
                Login
              </Link>
              <Link to="/register" className="mr-2 font-medium sm:mr-0">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
