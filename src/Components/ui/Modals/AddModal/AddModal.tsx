import React from "react";
import { Button, Modal } from "antd";
import AddTaskForm from "../../../form/AddTaskForm";
import { AddModalProps } from "../../../../types/taskTypes";

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
          <Button
            key="cancel"
            onClick={() => setOpen(false)}
            className="hidden"
          >
            Close
          </Button>,
        ]}
      >
        <AddTaskForm setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default AddModal;
