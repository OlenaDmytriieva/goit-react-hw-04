import { Rings } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Rings
      visible={true}
      height="80"
      width="80"
      color="rgb(72, 72, 177)"
      ariaLabel="rings-loading"
      wrapperStyle={{
        display: "block",
        marginLeft: "auto",
      }}
      wrapperClass=""
    />
  );
};
