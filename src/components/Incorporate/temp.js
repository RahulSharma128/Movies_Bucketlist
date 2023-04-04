import { useState } from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
// import axios from 'axios';
const { Option } = Select;

const ModalForm = () => {
  const [visible, setVisible] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    // axios.post('http://localhost:3001/cards', {    
    //   id: 7,
    //   uuid: "5fdbfd77",
    //   title: "jsdffvdfnn",
    //   subtitle: "cfdvfdce",
    //   updatedAt: "8dfvdfo"
    
// })
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
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
        Add Video
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
              <Option value="music">Music</Option>
              <Option value="sports">Sports</Option>
              <Option value="news">News</Option>
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