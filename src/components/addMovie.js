import React, { useState } from "react";
import { Modal, Button } from "antd";

export default function Add(props) {
  const [visible, setvisible] = useState(false);
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [date, setdate] = useState("");
  const [rating, setrating] = useState(0);
  const [description, setdescription] = useState("");

  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    setvisible(false);
  };

  const handleCancel = (e) => {
    setvisible(false);
  };
  const handleSubmit = () => {
    props.handleAdd({
      id: Math.random,
      image: image,
      rating: rating,
      name: name,
      date: date,
      description: description,
    });
    handleOk();
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add movie
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <input value={name} onChange={(e) => setname(e.target.value)} />
        <input value={date} onChange={(e) => setdate(e.target.value)} />
        <input
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <input value={rating} onChange={(e) => setrating(e.target.value)} />
        <input value={image} onChange={(e) => setimage(e.target.value)} />
      </Modal>
    </>
  );
}
