import React from "react";
import { Col, Form } from "react-bootstrap";

const Search = ({ search }) => {
  return (
    <section className="search">
      <Col sm={{ span: 7, offset: 2 }}>
        <Form.Label htmlFor="searchBar" className="mb-3" srOnly></Form.Label>
        <Form.Control
          type="text"
          placeholder="Search recipes"
          name="searchBar"
          className="mb-3"
          // value={keyword}
          // onChange={(e) => setKeyword(e.target.value)}
          onChange={search}
        />
      </Col>
    </section>
  );
};

export default Search;
