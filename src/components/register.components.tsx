import {Box, Button} from "@mui/material";

export function Register() {

  const textarea = {
    display: "block",
    border: 1,
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: "white",
    color: "gray",
    padding: 5,
    marginBottom: 5,
    borderStyle: "solid",
    borderColor: "black"
  }

  return (
    <>
      <Box id="form-box" style={{margin: 20}}>
        <h3 style={{color: "black", marginBottom: 10}}>Sign up</h3>
        <form>
          <label style={{color: "black", marginRight: 5}}>E-mail:</label>
          <input name="email" id="email" placeholder="email@example.com" style={textarea}/>
          <label style={{color: "black", marginRight: 5}}>Password:</label>
          <input type="password" autoComplete="off" style={textarea}/>
        </form>
        <Button
          variant="outlined"
          style={{marginTop: 10, marginBottom: 20}}
        >
          Register
        </Button>
        <hr/>
      </Box>
    </>
  )
}
