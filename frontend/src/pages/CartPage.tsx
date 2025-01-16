import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import { useAuth } from "../Context/Auth/AutContext";
import { useCart } from "../Context/cart/CartContext";

const CartPage = () => {
  const { cartItems, totalAmount } = useCart();
  const [error, setError] = useState("");
  const { token } = useAuth();

  return (
    <Container sx={{ mt: 2 }}>
      <Grid>ahmed Ali</Grid>
      {cartItems.map((item) => (
        <Box key={item.productId}>{item.title}</Box>
      ))}
    </Container>
  );
};
export default CartPage;
