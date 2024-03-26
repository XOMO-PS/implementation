import ReactLoading from "react-loading";
type LoaderProps = {
  width?: string;
  height?: string;
  color?: string;
};
export function Loader({ width, height, color }: LoaderProps) {
  return (
    <div className="flex justify-center mt-40 ">
      <ReactLoading
        type="spinningBubbles"
        color={color !== undefined ? color : "#5B3DF6"}
        height={height !== undefined ? height : "15%"}
        width={width !== undefined ? width : "15%"}
      />
    </div>
  );
}
