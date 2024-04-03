import React from "react";
import { Drawer } from "antd";
import CalendarAnt from "../Calender/Calender";
import Notepad from "../Notepad/Notepad";

interface DrawerAntProps {
  open: boolean;
  onClose: () => void;
}

const DrawerAnt: React.FC<DrawerAntProps> = ({ open, onClose }) => {
  const getDaysLeftInMonth = () => {
    const today = new Date();
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );
    const daysLeft = lastDayOfMonth.getDate() - today.getDate();
    return daysLeft;
  };

  const dayleft = `Days left in current month: ${getDaysLeftInMonth()}`;

  return (
    <Drawer title={dayleft} onClose={onClose} visible={open}>
      <CalendarAnt />
      <Notepad />
    </Drawer>
  );
};

export default DrawerAnt;
