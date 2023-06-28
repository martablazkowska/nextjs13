import { IUser } from "@/interfaces/user";

const getData = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/users`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Page = async () => {
  const users = await getData();

  return (
    <div>
      <div>Page Server</div>
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

export default Page;
