import React, { useContext } from "react";
import { Button, ConfigProvider, Space } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { json, useLoaderData } from "react-router-dom";
import { Card } from "antd";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { MdEngineering } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const JobDetails = () => {
  const jobs = useLoaderData();

  const {_id, description, responsibility,requirements,experience,salary, title, phone, email,  address,} = jobs;

  const handleApply = async () => {

    fetch('http://localhost:5000/applyJob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jobId: _id}),
    })
    .then(res => res.json())
    .then(data => console.log(data))

      toast("Applied Successfully", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  };



  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(
        .${rootPrefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;
  return (
    <>
      <h2 className="text-4xl text-center font-extrabold mt-16 mb-24">
        Job Details
      </h2>
      <div className="grid gap-4 grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-3xl mb-4">Job Description</h1>
          <p className="text-gray-500 mb-2">{description}</p>
          <h1 className="text-3xl mb-4">Job Responsibility</h1>
          <p className="text-gray-500 mb-2">{responsibility}</p>
          <h1 className="text-3xl mb-4">Educational Requirements</h1>
          <p className="text-gray-500 mb-2">{requirements}</p>
          <h1 className="text-3xl mb-4">Experience</h1>
          <p className="text-gray-500 mb-2">{experience}</p>
        </div>

        <div className="">
          <Card className="text-gray-500 bg-purple-200">
            <h1 className=" text-2xl mb-6 text-black border-b-2 border-gray-400 py-2">
              Job Details
            </h1>
            <p className="flex gap-2 mb-2">
              <RiMoneyEuroCircleLine className="text-xl" />
              {salary}
            </p>
            <p className="mb-6 flex gap-2">
              <MdEngineering className="text-xl" />
              {title}
            </p>

            <h1 className=" text-2xl mb-6 text-black border-b-2 border-gray-400 py-2">
              Contact Information
            </h1>
            <p className="flex gap-2 mb-2">
              <FaPhone className="text-xl" />
              {phone}
            </p>
            <p className="flex gap-2 mb-2">
              <MdEmail className="text-xl" />
              {email}
            </p>
            <p className="flex gap-2 mb-2">
              <FaAddressBook className="text-xl" />
              {address}
            </p>

            <ConfigProvider
              button={{
                className: linearGradientButton,
              }}
            >
              <Space>
                <Button
                  className="ml-14 mt-8"
                  type="primary"
                  size="large"
                  icon={<AntDesignOutlined />}
                  onClick={() => {
                    handleApply();
                  }}
                >
                  Apply Now
                </Button>
              </Space>
            </ConfigProvider>
          </Card>
        </div>
      </div>
      <ToastContainer />
      <ToastContainer />
    </>
  );
};

export default JobDetails;
