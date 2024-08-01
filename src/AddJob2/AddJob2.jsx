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

    fetch('http://localhost:5000/addJob2', {
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


const AddJob2 = () => {
    

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
            name={["user", "Cname"]}
            label="Company Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input className="" />
          </Form.Item>
          <Form.Item
            name={["user", "logo"]}
            label="Company Log"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input className="" />
          </Form.Item>
          <Form.Item
            name={["user", "jobName"]}
            label="Job Name"
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
            <Input className="" />
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

export default AddJob2;
