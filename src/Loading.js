import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <ThreeDots
      height="30"
      width="50"
      radius="9"
      color="#ffff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
