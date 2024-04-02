import React from "react";
import { Drawer } from "antd";
import CalendarAnt from "../Calender/Calender";
import Notepad from "../Notepad/Notepad";

interface DrawerAntProps {
  open: boolean;
  onClose: () => void;
}

const DrawerAnt: React.FC<DrawerAntProps> = ({ open, onClose }) => {
  return (
    <Drawer title="Make best 2024" onClose={onClose} visible={open}>
      <CalendarAnt />
      <Notepad />
    </Drawer>
  );
};

export default DrawerAnt;
