import React from "react";
import { Button, Form, Input } from "antd";
import Swal from 'sweetalert2'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */
const onFinish = (values) => {
    console.log(values);
    const name = values.user.name;
    console.log(name)

    fetch('http://localhost:5000/addJob', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(values.user) 
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Job Added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
    })
  };


const AddJob = () => {
    

  return (
    <>
      <div className="mt-10">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Company Name"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input className="" />
          </Form.Item>
          <Form.Item
            name={["user", "title"]}
            label="Job Title"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "reOn"]}
            label="Remote or Onsite"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "location"]}
            label="Location"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "jobType"]}
            label="Job Type"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "salary"]}
            label="Salary"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "phone"]}
            label="Phone"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "address"]}
            label="Address"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "experience"]}
            label="Experience"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "logo"]} label="Logo">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "description"]} label="Job Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name={["user", "requirements"]}
            label="Educational Requirements"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name={["user", "responsibility"]}
            label="Job Responsibility"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
            className="col-span-2"
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddJob;
