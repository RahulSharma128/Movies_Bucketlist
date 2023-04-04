import { useState } from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
// import axios from 'axios';
const { Option } = Select;

const ModalForm = ({ onSubmit })  => {
  const [visible, setVisible] = useState(false);

  const onFinish = (values) => {
   // console.log(values);
    onSubmit(values);
    setVisible(false);
   };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  
  return (
    
    <div>
      <Button type="primary" style={{ backgroundColor: '#1E90FF' }} onClick={() => setVisible(true)}>
        Add Video 1
      </Button>
      <Modal
        title="Add Video"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input video name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="URL"
            name="url"
            rules={[
              {
                required: true,
                message: 'Please input video URL!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: 'Please select video category!',
              },
            ]}
          >
            <Select placeholder="Select a category">
              <Option value="available">Movies to Watch</Option>
              <Option value="assigned">Already Watched</Option>
                      </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" style={{ backgroundColor: '#1E90FF' }} htmlType="submit">
              Add
            </Button>
            <Button htmlType="button" onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>

    
  );
};

export default ModalForm;