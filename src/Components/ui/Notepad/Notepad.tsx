import { EditOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const Notepad = () => {
  const [text, setText] = useState("");

  // Load text from local storage when component mounts
  useEffect(() => {
    const savedText = localStorage.getItem("notepadText");
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleChange = (e: { target: { value: string } }) => {
    const newText = e.target.value;
    setText(newText);
    // Save text to local storage
    localStorage.setItem("notepadText", newText);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-gray-50 rounded-md">
      <h1 className="text-xl font-semibold mb-4">
        Notepad
        <EditOutlined className="ms-2" />
      </h1>
      <textarea
        placeholder="Write your note here..."
        className="w-full p-2 mb-4  rounded-md ubuntu-regular-italic text-lg"
        rows={20} // Adjust the number of rows as needed
        value={text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Notepad;
