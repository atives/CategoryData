import React, { Fragment, useState } from "react";
import { Container, Row } from "react-bootstrap";

function Index({ data, types, Component, searchBy, dataName }) {
  const [state, setstate] = useState(data);
  const [showSearch, setshowSearch] = useState(false);

  const handler = (value) => {
    if (value == "") {
      setstate(data);
    }
    setstate(
      data.filter((element) => {
        if (element[searchBy ? searchBy : "name"].toLowerCase().includes(value))
          return element;
      })
    );
  };
  return (
    <Container>
      <Row>
        <div className="search_box">
          <i
            className={"fas fa-search"}
            style={{ fontSize: "28px", color: "white" }}
            onClick={() => {
              setshowSearch(true);
            }}
          />
          {showSearch && (
            <Fragment>
              <input
                className="serch_input"
                onChange={({ target: { value } }) =>
                  handler(value.toLowerCase())
                }
              />

              <i
                className="far fa-times-circle"
                style={{ fontSize: "28px", color: "white" }}
                onClick={() => {
                  setshowSearch(false);
                }}
              />
            </Fragment>
          )}
        </div>
      </Row>

      <Row>
        <div className="ticket_type-box">
          {types.map((t) => {
            return (
              <button
                className="ticket_type-btn"
                onClick={() => {
                  setstate(
                    data.filter((item) => {
                      if (item.type == t.key) {
                        return item;
                      }
                    })
                  );
                }}
              >
                {t.name}
              </button>
            );
          })}
        </div>
      </Row>
      <Row>
        <Component data={state} dataName={dataName} />
      </Row>
    </Container>
  );
}

export default Index;
