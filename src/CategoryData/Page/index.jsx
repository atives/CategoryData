import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Component from "../Component";
import { Data } from "../Data";
function Index() {
  return (
    <Fragment>
      <Component
        data={Data}
        types={[
          {
            key: "vip",
            name: "VIP",
          },
          {
            key: "economy",
            name: "Economy",
          },
        ]}
        Component={RenderData}
        dataName={[
          {
            name: "نام",
            key: "name",
          },
          {
            name: "قیمت",
            key: "price",
          },
          {
            name: "ساعت",
            key: "clock",
          },
          {
            name: "نوع",
            key: "type",
          },
        ]}
        searchBy={"price"} // بر اساس چ چیزی سرچ بشه
      />
    </Fragment>
  );
}
const searchData = (data, key) => {
  let result = "";
  if (data) {
    data.map((element) => {
      if (element.key == key) {
        result = element.name;
      }
    });
  }
  return result;
};
const RenderData = ({ data, dataName }) => {
  return data.map((item) => {
    return (
      <Row>
        <Col className="ticket_box " style={{ direction: "rtl" }}>
          {dataName.map((elememt) => (
            <div className="ticket_data">
              <span> {elememt.name} </span>
              <span>{item[elememt.key]}</span>
            </div>
          ))}
        </Col>
      </Row>
    );
  });
};

export default Index;
