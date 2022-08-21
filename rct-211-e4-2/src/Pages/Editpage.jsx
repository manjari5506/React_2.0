import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

export const Editpage = () => {
  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input data-cy="population" />
      </Box>
      <Button data-cy="update-button">Update</Button>
    </Box>
  );
};

export default Editpage;
