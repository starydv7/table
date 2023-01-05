import React, { Component } from 'react';
import styles from "../components/home.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
class Table2 extends Component {
  constructor() {
    super();
    this.state = { person: [] };
    console.log("test");
  }
  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         // console.log(res.results);
  //           console.log(res);

  //                this.setState({items: res.results});

  //       });
  //   }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=500")
      .then((response) => response.json())
      .then((resData) => {
        //console.log(JSON.stringify(resData))
        //do your logic here
        //let person = resData.results
        this.setState({ person: resData.results }); //this is an asynchronous function
      });
  }

  render() {
    return (
      <div className={styles.container}>
        <Table variant="simple">
          <TableCaption>User Detail</TableCaption>
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Gender</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Street Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.person.map((personRecord) => {
              return (
                <Tr key={personRecord.id.value}>
                  <Td> {personRecord.id.value} </Td>
                  <Td> {personRecord.name.first} </Td>
                  <Td> {personRecord.gender} </Td>
                  <Td> {personRecord.email} </Td>
                  <Td> {personRecord.location.street.number} </Td>
                  <Td> {personRecord.location.street.name} </Td>
                </Tr>
              );
            })}
            <Tr>
              <Td></Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </div>
    );
  }
}
export default Table2;
