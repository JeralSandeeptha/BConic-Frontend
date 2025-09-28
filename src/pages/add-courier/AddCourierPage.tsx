import React, { useContext, useEffect, useState } from "react";
import "./AddCourierPage.scss";
import { AddCourierPageProps } from "../../types/page";
import BackButton from "../../components/back-button/BackButton";
import { Link, useNavigate } from "react-router-dom";
import Lable from "../../components/lable/Lable";
import DashboardTextfield from "../../components/dashboard-textfield/DashboardTextfield";
import getSingleUser from "../../api/user-service/getUser";
import { IdContext } from "../../context/UserIdContext";
import { User } from "../../types/model";
import Section from "../../components/section/Section";
import LoadingPage from "../loading-page/LoadingPage";
import Alert from "../../components/alert/Alert";
import createCourier from "../../api/courier-endpoints/createCourier";
import { TokenContext } from "../../context/TokenContext";

const AddCourierPage = (props: AddCourierPageProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const [name, setName] = useState<string>();
  const [mobile, setMobile] = useState<string>();
  const [address, setAddress] = useState<string>();

  const [senderInfo, setSenderInfo] = useState({
    recepientAddress: "",
    recepientName: "",
    additionalInfo: "",
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const idContext = useContext(IdContext);
  const id = idContext?.id;
  if (!id) {
    throw new Error("Id context is not available");
  }

  const tokenContext = useContext(TokenContext);
  const token = tokenContext?.token;

  const submitPlaceOrder = () => {
    if (!name?.trim() || !mobile?.trim() || !address?.trim()) {
      alert(
        "Please update your name, mobile and address from the profile section. Then you can proceed."
      );
    } else if (
      !senderInfo.recepientName?.trim() ||
      !senderInfo.recepientAddress?.trim()
    ) {
      alert("Please fill recepient name and address.");
    } else {
      createCourier({
        setError: setError,
        setLoading: setLoading,
        setStatusCode: setStatusCode,
        setMessage: setMessage,
        navigate: navigate,
        userId: id,
        senderName: name || "",
        mobile: mobile || "",
        senderAddress: address || "",
        recepientName: senderInfo.recepientName,
        recepientAddress: senderInfo.recepientAddress,
        additionalInfo: senderInfo.additionalInfo,
        token: token || "",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderInfo((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    getSingleUser({
      id: id,
      setUser: setUser,
      token: token || "",
    });
  }, [id, token]);

  useEffect(() => {
    if (user) {
      setName(`${user.first_name} ${user.last_name}`);
      setAddress(user.address);
      setMobile(user.mobile);
    }
  }, [user]);

  return (
    <div className="test add-courier">
      {loading && <LoadingPage />}

      {error && (
        <Alert message={message} statusCode={statusCode} type="error" />
      )}

      <div className="test single-courier-header">
        <Link to="/dashboard/my-couriers">
          <BackButton image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png" />
        </Link>
        <h6 className="test page-subtitle">Back to Couriers</h6>
      </div>

      <div className="test add-courier-content">
        <h1 className="test header">Add New Courier</h1>
        <h5 className="test subheader">
          Fill the details for add a new courier
        </h5>
        <div className="test form-container">
          <div className="test input">
            <Lable title="Sender Name" />
            <DashboardTextfield
              disable={true}
              type="text"
              name="senderName"
              value={name || ""}
              placeholder="Update your name from profile section"
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Sender Address" />
            <DashboardTextfield
              disable={true}
              type="text"
              name="senderAddress"
              value={address || ""}
              placeholder="Update your address from profile section"
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Mobile" />
            <DashboardTextfield
              disable={true}
              type="text"
              name="mobile"
              value={mobile || ""}
              placeholder="Update your mobile number from profile section"
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Recepient Name" />
            <DashboardTextfield
              type="text"
              name="recepientName"
              value={senderInfo.recepientName || ""}
              placeholder="Enter the recepient name"
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Recepient Address" />
            <DashboardTextfield
              type="text"
              name="recepientAddress"
              value={senderInfo.recepientAddress || ""}
              placeholder="Enter the recepient address"
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Additional Notes" />
            <DashboardTextfield
              type="text"
              name="additionalInfo"
              value={senderInfo.additionalInfo || ""}
              placeholder="Enter additional notes"
              onChange={handleChange}
            />
          </div>
        </div>
        <Section marginTop="20px">
          <div className="test input">
            <Lable title="Click here to add a new courier" />
            <button className="test add-btn" onClick={submitPlaceOrder}>
              Place Order
            </button>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default AddCourierPage;
