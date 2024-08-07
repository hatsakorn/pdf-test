import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Nametxt = styled.label`
  color: #424242;
  display: flex;
  align-item: left;
  margin-bottom: 8px;
  font-family: "FC-Iconic", sans-serif;
  font-weight: normal;
`;

const InputContainer = styled.input`
  display: flex;
  align-item: left;
  background: #ffffff;
  margin-bottom: 10px;
  padding: 10px;
  width: 97%;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-family: "FC-Iconic", sans-serif;
  font-weight: normal;
`;

const InputTextContainer = styled.textarea`
  display: block;
  background: #ffffff;
  margin-bottom: 10px;
  padding: 10px;
  width: 97%;
  height: 80px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  resize: vertical;
  overflow: auto;
  font-family: "FC-Iconic", sans-serif;
  font-weight: normal;
`;

const Testuseform = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Nametxt>ชื่อ</Nametxt>
        <InputContainer placeholder="ชื่อ-นามสกุล" {...register("name")} />
      </div>
      <div>
        <Nametxt>ตำแหน่ง</Nametxt>
        <InputContainer placeholder="ตำแหน่ง" {...register("position")} />
      </div>
      <div>
        <Nametxt>อธิบายสั้นๆเกี่ยวกับตัวคุณ</Nametxt>
        <InputTextContainer
          placeholder="อธิบายสั้นๆเกี่ยวกับตัวคุณ"
          {...register("description")}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Testuseform;
