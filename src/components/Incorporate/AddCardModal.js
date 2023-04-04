import { useState } from 'react';
import Modal from 'antd/lib/modal/Modal';

const AddCardModal = ({ visible, onCancel, onOk }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');

  const handleOk = () => {
    onOk(title, subtitle, updatedAt);
    setTitle('');
    setSubtitle('');
    setUpdatedAt('');
  };

  return (
    <Modal
      title="Add Card"
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Subtitle:</label>
        <input
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
      </div>
      <div>
        <label>Updated At:</label>
        <input
          value={updatedAt}
          onChange={(e) => setUpdatedAt(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default AddCardModal;
