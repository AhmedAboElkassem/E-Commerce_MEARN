import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import { useAuth } from "../Context/Auth/AutContext";

const CartPage = () => {
  const [cart, setCart] = useState();
  const [error, setError] = useState("");
  const { token } = useAuth();
  useEffect(() => {
    const fechCart = async () => {
      if (!token) {
        return;
      }
      const response = await fetch(`${BASE_URL}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        setError("Failed to fetch user cart, please try again");
      }
      const data = await response.json();
      setCart(data);
    };
    fechCart();
  }, [token]);
  console.log({ cart });
  return (
    <Container sx={{ mt: 2 }}>
      <Grid>ahmed Ali</Grid>
    </Container>
  );
};
export default CartPage;
