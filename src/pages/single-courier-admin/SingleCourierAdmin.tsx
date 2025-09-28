import React, { useContext, useEffect, useState } from "react";
import "./SingleCourierAdmin.scss";
import { SingleCourierPageProps } from "../../types/page";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IGetCourier } from "../../types/model";
import getCourier from "../../api/courier-endpoints/getCourier";
import BackButton from "../../components/back-button/BackButton";
import Lottie from "lottie-react";
import animationData1 from "../../assets/lotties/ongoing.json";
import animationData3 from "../../assets/lotties/accept-order.json";
import animationData2 from "../../assets/lotties/review.json";
import animationData4 from "../../assets/lotties/ok.json";
import COURIER_STATUS from "../../types/enum";
import AuthButton from "../../components/auth-button/AuthButton";
import AuthHeader from "../../components/auth-header/AuthHeader";
import Section from "../../components/section/Section";
import updateCourier from "../../api/courier-endpoints/updateCourier";
import Alert from "../../components/alert/Alert";
import LoadingPage from "../loading-page/LoadingPage";
import { TokenContext } from "../../context/TokenContext";

const SingleCourierAdmin = (props: SingleCourierPageProps) => {
  const [courier, setCourier] = useState<IGetCourier>();
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [statusCode, setStatusCode] = useState(0);

  const tokenContext = useContext(TokenContext);
  const token = tokenContext?.token;

  const { courierId } = useParams();

  const navigate = useNavigate();

  const handleUpdateOrder = () => {
    updateCourier({
      courierId: courier?.courier_id?.toString(),
      status: selectedStatus,
      setError: setError,
      setLoading: setLoading,
      setSuccess: setSuccess,
      setMessage: setMessage,
      setStatusCode: setStatusCode,
      token: token || "",
      navigate: navigate,
    });
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    console.log(newStatus);
  };

  useEffect(() => {
    getCourier({
      courierId: courierId,
      setCourier: setCourier,
      token: token || "",
    });
  }, [courierId, token]);

  useEffect(() => {
    if (courier && courier.status) {
      setSelectedStatus(courier.status);
    } else {
      setSelectedStatus("");
    }
  }, [courier]);

  return (
    <div className="single-courier test">
      {loading && <LoadingPage />}

      {error && (
        <Alert message={message} statusCode={statusCode} type="error" />
      )}

      {success && (
        <Alert message={message} statusCode={statusCode} type="success" />
      )}

      <div className="test-single-courier-header">
        <Link to="/dashboard/my-couriers">
          <BackButton image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png" />
        </Link>
        <h6 className="test page-subtitle">Back to Couriers</h6>
      </div>

      <div className="test single-courier-content">
        <div className="test upper">
          <h6 className="test code">Courier Tracking Number</h6>
          <h1 className="test name">{courier?.tracking_number}</h1>
        </div>

        <div className="test upper">
          <h6 className="test code">Courier ID</h6>
          <h2 className="test name">{courier?.courier_id}</h2>
        </div>

        <div className="test middle">
          <div className="test middle-left">
            <div className="test info-container">
              <h6 className="test info-lable">Sender Name:</h6>
              <h6 className="test info">{courier?.sender_name || "Not Set"}</h6>
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Sender Address:</h6>
              <h6 className="test info">
                {courier?.sender_address || "Not Set"}
              </h6>
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Recepient Name:</h6>
              <h6 className="test info">
                {courier?.recipient_name || "Not Set"}
              </h6>
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Recepient Address:</h6>
              <h6 className="test info">
                {courier?.recipient_address || "Not Set"}
              </h6>
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Additional Info:</h6>
              <h6 className="test info">
                {courier?.additional_info || "Not Set"}
              </h6>
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Order Placed:</h6>
              <h6 className="test info">{courier?.created_at || "Not Set"}</h6>
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Last :</h6>
              <h6 className="test info">{courier?.updated_at || "Not Set"}</h6>
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Status :</h6>
              <select
                id="options"
                className="options test"
                value={selectedStatus}
                onChange={handleStatusChange}
                disabled={courier?.status === "Delivered" ? true : false}
              >
                {Object.values(COURIER_STATUS).map((status) => (
                  <option key={status} value={status} className="test option">
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="anim-container">
          {courier?.status === "Order Placed" && (
            <Lottie animationData={animationData1} className="test anim" />
          )}
          {courier?.status === "Delivered" && (
            <Lottie animationData={animationData2} className="test anim" />
          )}
          {courier?.status === "Picked Up" && (
            <Lottie animationData={animationData3} className="test anim" />
          )}
          {courier?.status === "CANCELLED" && (
            <Lottie animationData={animationData4} className="test anim" />
          )}
        </div>

        {courier?.status === "Delivered" ? (
          <AuthHeader title="Order Completed" />
        ) : (
          <Section marginTop="20px">
            <AuthButton
              title="Update Order"
              backgroundColor="black"
              textColor="white"
              onClick={handleUpdateOrder}
            />
          </Section>
        )}
      </div>
    </div>
  );
};

export default SingleCourierAdmin;
