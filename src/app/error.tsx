"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2>Something went wrong!</h2>
      <div>Error: {error.message}</div>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
