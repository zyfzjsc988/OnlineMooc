import React from 'react';
import {Modal} from 'antd';

const UpdateForm = props => {
  const {modalVisible, onCancel} = props;
  return (
    <Modal
      destroyOnClose
      title="修改小节"
      visible={modalVisible}
      width={600}
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default UpdateForm;
