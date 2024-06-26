import { Button, Modal } from "antd";
import UpdateTaskForm from "../../../form/UpdateTaskForm";
import { UpdateModalProps } from "../../../../types/taskTypes";

const UpdateModal: React.FC<UpdateModalProps> = ({
  setOpen,
  open,
  selectedTask,
}) => {
  // console.log("from um",selectedTask); success✔
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
          </Button>,
        ]}
      >
        <UpdateTaskForm setOpen={setOpen} defaultValues={selectedTask} />
      </Modal>
    </>
  );
};

export default UpdateModal;
