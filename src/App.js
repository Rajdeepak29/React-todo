import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import images1 from "../src/images/66982lms.jpg";
import images2 from "../src/images/82860library-management-system.jpg";
import images3 from "../src/images/libraryBooks.jpg";

import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
  Carousel,
  Row,
  Col,
} from "react-bootstrap";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  function create() {
    axios
      .post("http://localhost:5000/posting", { todo })
      .then(() => {
        alert("Data has been posted successfully");
        setTodo("");
        // getData();
      })
      .catch(() => {
        alert("Failed to post data");
      });
  }

  function getData() {
    axios
      .get("http://localhost:5000/getting")
      .then((response) => {
        setTodos(response.data);
      })
      .catch(() => {
        alert("Failed to retrieve data");
      });
  }

  const updatedTodo = (id, updatedData) => {
    axios
      .put(`http://localhost:5000/updating/${id}`, { todo: updatedData })
      .then(() => {
        console.log("Todo updated successfully");
        getData();
      })
      .catch((error) => {
        console.error("Failed to update todo:", error);
        alert("Failed to update todo");
      });
  };

  const handleEditButtonClick = (id) => {
    const newdata = prompt("Enter the new data");

    if (newdata === null || newdata.trim() === "") {
      alert("Please enter valid new data");
      return;
    }

    updatedTodo(id, newdata.trim());
  };

  function deleteTodo(id) {
    axios
      .delete(`http://localhost:5000/deleting/${id}`)
      .then(() => {
        getData();
      })
      .catch(() => {
        alert("Data cannot change");
      });
  }

  return (
    <div className="container mt-5">
      <Form className="d-flex mb-4">
        <FormControl
          type="text"
          placeholder="Todo"
          className="me-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button variant="primary" onClick={create} className="me-2">
          Post
        </Button>
        <Button variant="secondary" onClick={getData}>
          Get All
        </Button>
      </Form>

      <ol>
        {todos.map((item) => (
          <li key={item._id}>
            {item.todo}
            <Button
              variant="warning"
              onClick={() => handleEditButtonClick(item._id)}
              className="ms-2"
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => deleteTodo(item._id)}
              className="ms-2"
            >
              Delete
            </Button>
          </li>
        ))}
      </ol>
    </div>
  );
};

const Home = () => (
  <div className="container mt-5">
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={images1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={images2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={images3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Row className="mt-4">
      <Col md={4}>
        <div className="card">
          <img src={images1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title 1</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button variant="primary">Go somewhere</Button>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="card">
          <img src={images2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title 2</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button variant="primary">Go somewhere</Button>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="card">
          <img src={images3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title 3</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button variant="primary">Go somewhere</Button>
          </div>
        </div>
      </Col>
    </Row>

    <footer className="mt-5 bg-dark text-white text-center py-3">
      <Container>
        <p>&copy; 2023 TodoApp. All rights reserved.</p>
      </Container>
    </footer>
  </div>
);

const About = () => <h2>About</h2>;

const SignUp = () => (
  <div className="container mt-5">
    <h2>Sign Up</h2>
    <Form>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>
      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Sign Up
      </Button>
    </Form>
  </div>
);

const SignIn = () => (
  <div className="container mt-5">
    <h2>Sign In</h2>
    <Form>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Sign In
      </Button>
    </Form>
  </div>
);

const App = () => (
  <Router>
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TodoApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/todolist">
              TodoList
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div style={{ paddingTop: "70px" }}>
      {" "}
      {/* Adjust padding to account for fixed navbar */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  </Router>
);

export default App;
