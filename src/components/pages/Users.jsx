import styled from "styled-components";
import { SearchInput } from "../molecules/SeachInput";
import { UserCard } from "../organism/user/UserCard";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `まさき${val}`,
    image: "https://source.unsplash.com/9bmj7GYHDps",
    email: "1234@example.com",
    phone: "090-0000-0000",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  console.log(state);
  const { pathname } = useLocation();
  console.log(pathname);
  const isAdmin = state ? state.isAdmin : false;
  return (
    <Scontainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
