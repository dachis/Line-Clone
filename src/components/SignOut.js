import { Button } from "@mui/material";
import { auth } from "../firebase.js";
import React from "react";
import { Call } from "@mui/icons-material";

function SignOut() {
  return (
    <div className="header">
      <Button
        style={{ color: "white", fontSize: "15px" }}
        onClick={() => auth.signOut()}
      >
        Signout
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <Call />
    </div>
  );
}

export default SignOut;
