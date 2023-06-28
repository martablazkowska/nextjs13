import { IUser } from "@/interfaces/user";

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/users`);
  const users = await res.json();

  return { props: { users } };
};

interface ISSRProps {
  users: IUser[];
}
const SSR = ({ users }: ISSRProps) => {
  return (
    <div>
      <div>SSR</div>
      <ul>
        {users?.map(({ id, name, email }: IUser) => (
          <li key={`USER_${id}`}>
            {name} - {email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SSR;
