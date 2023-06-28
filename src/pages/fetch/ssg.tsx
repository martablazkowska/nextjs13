import { IUser } from "@/interfaces/user";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/users`);
  const users = await res.json();

  return { props: { users } };
};

interface ISSGProps {
  users: IUser[];
}

const SSG = ({ users }: ISSGProps) => {
  return (
    <div>
      <div>SSG</div>
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

export default SSG;
