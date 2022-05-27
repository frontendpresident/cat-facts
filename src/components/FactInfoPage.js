import {
  ArrowLeftOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Row, Typography } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteInfo, getFactInfoThunk } from "../redux/actions";
import Loading from "./Loading";

const { Meta } = Card;
const { Title } = Typography;

const FactInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getFactInfoThunk(id));
  }, []);

  const { info } = state;

  const getStatus = (verified) => {
    if (verified !== null) {
      return <CheckCircleFilled />;
    }
    return <CloseCircleFilled />;
  };

  return !info ? (
    <Loading />
  ) : (
    <Row className="fact-info-container">
      <Card
        cover={
          <Meta
            avatar={<Avatar src={info.user.photo} />}
            title={`${info.user.name.first} ${info.user.name.last}`}
            description={moment(info.createdAt).format("DD MMM, YYYY")}
          />
        }
        actions={[
          <Link to="/">
            <Button type="link" block onClick={() => dispatch(deleteInfo())}>
              <ArrowLeftOutlined />
              Back
            </Button>
          </Link>,
        ]}
      >
        <Title level={1}>{info.text}</Title>

        <Divider />

        <Row align="middle" justify="space-between">
          <Row align="middle">
            <Title level={3}>Verified: </Title>
            {getStatus(info.status.verified)}
          </Row>
          <Row>
            <Title level={3}>Type:</Title>
            <Title className="animal-type" level={3} type="success">
              {info.type.toUpperCase()}
            </Title>
          </Row>
        </Row>
      </Card>
    </Row>
  );
};

export default FactInfoPage;
