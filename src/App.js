import React, { useState } from "react";
import styled from "styled-components";
import { signInAPI } from "./config";
import mixin from "./Styles/Mixin";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPassword: "",
  });

  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSignIn = () => {
    const { userId, userPassword } = userInfo;
    fetch(signInAPI, {
      method: "post",
      body: JSON.stringify({
        id: userId,
        pw: userPassword,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          alert("로그인에 성공하였습니다.");
        } else {
          alert(res.message);
        }
      });
  };

  return (
    <Container>
      <SignInWrapper>
        <Header>학생 로그인</Header>
        <InputBox>
          <Label>아이디</Label>
          <Input type="text" name="userId" onChange={handleUserInfo} />
        </InputBox>
        <InputBox>
          <Label>비밀번호</Label>
          <Input
            type="password"
            name="userPassword"
            onChange={handleUserInfo}
          />
        </InputBox>
        <SignInButton onClick={handleSignIn}>로그인</SignInButton>
        <ExtraInfo>
          수파자 계정이 없으신가요?{" "}
          <a href="/">
            <span>회원가입</span>
          </a>
        </ExtraInfo>
      </SignInWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.greyBackground};
  font-family: ${({ theme }) => theme.font};
`;

const SignInWrapper = styled.div``;

const Header = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const InputBox = styled.div`
  margin-top: 16px;
`;

const Label = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  margin-top: 3px;
  padding: 10px 12px;
  ${mixin.border()};
`;

const SignInButton = styled.button`
  width: 400px;
  margin-top: 24px;
  padding: 8px 0;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.purple};
  color: ${({ theme }) => theme.color.white};
`;

const ExtraInfo = styled.p`
  margin-top: 14px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkGrey};
  text-align: center;

  span {
    margin-left: 8px;
    color: ${({ theme }) => theme.color.purple};
  }
`;
