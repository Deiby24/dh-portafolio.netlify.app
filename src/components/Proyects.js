import React from "react";
import data from './Data/data';
import { Grid,  Typography, Button, ThemeProvider, Box } from '@mui/material';
import { theme } from "./Variants/theme";
import { ContainerCardPy  } from "./Variants/grid";
import { CardContentPy, SubCardPy } from "./Variants/cards";
import { BoxButtonPy } from "./Variants/boxs";

const images = require.context('../../src/img', true)


export function Proyects() {
    // useEffect(() => {
    //     const cardContainer = document.querySelector('.containerProyect');
    
    //     if (cardContainer) {
    //       const cards = cardContainer.querySelectorAll('.cardsProyects');
    //       const numberOfCards = cards.length;
    
    //       if (numberOfCards === 1) {
    //         cardContainer.classList.add('single-card');
    //       } else if (numberOfCards === 2) {
    //         cardContainer.classList.add('double-cards');
    //       } else {
    //         cardContainer.classList.add('multiple-cards');
    //       }
    //     }
    // }, []);
    return(
      <ThemeProvider theme={theme}>
        <Grid
          id="" 
          className="w-full" 
          style={{ 
            height:`${data.length === 1 ? data.length * 600 : data.length * 300}px`, 
          // ...(data.length === 1 && window.innerWidth <= 700 && {height:`${data.length * 800}px`, paddingTop:'70%'}) || 
          // (data.length === 2 && window.innerWidth <= 1000 && {height:`${data.length * 500}px`, paddingTop:'50%'} )
          }}
        >
          <Box >
            <Typography variant='subtitle' style={{position:'relative'}} >PROYECTS</Typography>
          </Box>
          <ContainerCardPy style={{position:'relative'}} className="containerProyect "> 
              {data.map(item=> (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} id="cardsProyects" className="cardsProyects ">
                <SubCardPy className="max-w-xs  overflow-hidden">
                  <img src={images(item.image)} alt="card"/>
                  <CardContentPy className="px-6 py-6">
                      <Typography variant="namePy" component='div' className="mb-2">{item.name}</Typography>
                      {/* <p className="text-sm">{item.description}</p> */}
                      {item.enabled ? ( 
                        <BoxButtonPy>
                          <Button target="blanck" href={item.link} variant='ButtonPy' className="mt-4 auto">{item.button}</Button> 
                        </BoxButtonPy>
                        ):(
                          <div className="bg-zinc-900 text-white text-center	 py-2 px-3 rounded-lg mt-4 ml-auto block">Proximamente</div>
                      )}   
                  </CardContentPy>
                </SubCardPy>
              </Grid>
              ))}
          </ContainerCardPy>
        </Grid>
      </ThemeProvider>
    )
}