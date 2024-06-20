import { useState } from "react";
import { Button, Form, Input } from "antd";
import style from "./login.module.css";

function Login() {
  const uesrForm = useState({
    username: "",
    password: "",
  });
  return (
    <div className={style.box}>
      <div className={style.mian_box}>
        <Form name="login">
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
