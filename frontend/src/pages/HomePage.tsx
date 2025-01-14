import { Box, Container, Grid } from "@mui/material";
import ProductCard from "../components/ProductCart";
import { useEffect, useState } from "react";
import { Product } from "../types/Products";
import { BASE_URL } from "../constants/baseUrl";


const HomePage=()=>{
    const [products,setproducts]= useState<Product[]>([]);
    const [error,setError]=useState(false);
    useEffect(()=>{
        const fechData=async()=>{
        try{
           
                const response = await fetch(`${BASE_URL}/products`)
                    const data=response.json();
                    setproducts( await data);
        }catch 
        {
            setError(true);
        }

        
        }

        fechData();
    },[])
    if(error){
       return <Box>something went wrong, please try again</Box>
    }
    return <Container sx={{mt:2 }}>
        <Grid container spacing={2}>
            {products.map((p)=>(
                <Grid item md={4}><ProductCard {...p}/></Grid>
            ))}

        </Grid>
    </Container>
}
export default HomePage;