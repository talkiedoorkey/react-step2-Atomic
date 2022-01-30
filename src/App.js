import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SeachInput";
import { UserCard } from "./components/organism/user/UserCard";
import "./styles.css";

const user = {
  name: "まさき",
  image: "https://source.unsplash.com/9bmj7GYHDps",
  email: "1234@example.com",
  phone: "090-0000-0000",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
