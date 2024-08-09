import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";

const AppContainer = styled.div`
  height: 100%;
  width: 60%;
`;
const FormContainer = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 60%;
  height: 80%;
  max-width: 800px;
`;

const Test = () => {
  const { control, reset } = useForm();

  const handleReset = () => {
    reset({
      name: "",
      position: "",
      description: "",
    });
  };

  return (
    <AppContainer>
      <FormContainer>
        <div>
          <div>สร้าง Portfolio</div>
          <div>
            <button type="button" onClick={handleReset}>
              รีเซ็ทข้อมูล
            </button>
          </div>
        </div>
        <hr />
        <div>
          <label>ชื่อ</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <textarea {...field} />}
          />
        </div>
        <div>
          <label>ตำแหน่ง</label>
          <Controller
            name="position"
            control={control}
            render={({ field }) => <textarea {...field} />}
          />
        </div>
        <div>
          <label>อธิบายสั้นๆเกี่ยวกับตัวคุณ</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <textarea {...field} />}
          />
        </div>
      </FormContainer>
    </AppContainer>
  );
};

export default Test;
