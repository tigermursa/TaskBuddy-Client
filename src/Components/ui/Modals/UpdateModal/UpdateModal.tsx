import React from "react";
import { Button, Modal } from "antd";

interface UpdateModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ setOpen, open }) => {
  return (
    <>
      <Modal
        title="Update Task"
        centered
        open={open} 
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
        footer={[
          <Button key="cancel" onClick={() => setOpen(false)}>
            Close
          </Button>
        ]}
      >
        <p>FORM COMING SOON</p>
      </Modal>
    </>
  );
};

export default UpdateModal;
