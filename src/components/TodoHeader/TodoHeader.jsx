import { Container, Nav, Navbar } from "react-bootstrap";

const TodoHeader = () => {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Todo List</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default TodoHeader;
