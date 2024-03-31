import React from "react";
import { Button, Modal } from "antd";
import AddTaskForm from "../../../form/AddTaskForm";

interface AddModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddModal: React.FC<AddModalProps> = ({ setOpen, open }) => {
  return (
    <>
      <Modal
        title="Add task"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
        footer={[
          <Button key="cancel" onClick={() => setOpen(false)} className="hidden">
            Close
          </Button>,
        ]}
      >
        <div className=" flex justify-center items-center">
          <AddTaskForm  setOpen={setOpen} />
        </div>
      </Modal>
    </>
  );
};

export default AddModal;
