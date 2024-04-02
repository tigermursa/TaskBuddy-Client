import React from "react";
import { Button, Modal } from "antd";

import ViewTaskDetails from "../../View/ViewTaskDetails";
import { UpdateModalProps } from "../../../../types/taskTypes";

const ViewDetailsModal: React.FC<UpdateModalProps> = ({
  setOpen,
  open,
  selectedTask,
}) => {
  return (
    <>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={700}
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
        <ViewTaskDetails task={selectedTask} />
      </Modal>
    </>
  );
};

export default ViewDetailsModal;
