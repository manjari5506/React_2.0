import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
//import { getCountries } from "../Redux/action";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {
  getCountriesFailure,
  getCountriesRequest,
  getCountriesSuccess,
} from "../Redux/action";
import axios from "axios";
import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom";

const Homepage = () => {

  const [value, setValue] = React.useState("")
    const dispatch = useDispatch();
    const countries = useSelector(state=> state.countries)
    const getCountries = () =>{
      dispatch(getCountriesRequest());
      axios.get("/countries")
      .then((r) => dispatch(getCountriesSuccess(r.data)))
      .catch((e) => dispatch(getCountriesFailure(e)))
    };
    const handleOrder = ()=>{
      setValue(value);
      if(value === "asc"){
        countries.population.sort((a,b) => a-b);
      }
      else if(value === "desc"){
        countries.population.sort((a,b)=> b-a);
      }
      console.log(value);
    }

    useEffect(() =>{
      getCountries();
  }, []);


   console.log(countries)
  return (
    <Box>
      <Text fontSize={"5xl"} textAlign={"center"} padding={"20px"}>Dashboard</Text>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup onChange={handleOrder} value={value}>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc" >
              Ascending 
            </Radio>
            <Radio data-cy="desc" value="desc" >
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          {countries.map((item) =>{
            return (
              <Tbody data-cy="table-body" key={item.id}>
            <Tr>
              <Th>{item.country}</Th>
              <Th>{item.city}</Th>
              <Th>{item.population}</Th>
              <Th><Button bgColor={"lightblue"}>
                <RouterLink to="/country/id">Edit
                </RouterLink>
                </Button></Th>
              <Th><Button bgColor={"red"}>Delete</Button></Th>
            </Tr>
            </Tbody>
            )
          })}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
