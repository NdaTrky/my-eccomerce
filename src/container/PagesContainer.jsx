import React from 'react';
import Container from "@mui/material/Container";

function PagesContainer({ children }) {
  return (
    <Container maxWidth="lg">
      {children}
    </Container>
  );
}

export default PagesContainer;