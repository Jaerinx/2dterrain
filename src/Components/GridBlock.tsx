import { Block } from "../Classes/Block";
import style from "../styles/GridBlockStyle.module.css";
export const GridBlock = ({
  x,
  y,
  space,
  setLoaded,
  step
}: {
  x: number;
  y: number;
  space: any[];
  setLoaded: any;
  step: any;
}) => {
  const row = x;
  const col = y;
  const array: Block = space[x][y];
  return (
    <button
      key={x + y}
      className={`flex justify-center items-center m-0 p-0 `}
      onClick={() => {
        step(x, y);
      }}
      style={{
        backgroundColor: `${
          array.nums.length != 1
            ? "rgb(232, 232, 232)"
            : array.nums[0] == 0
            ? "rgb(81, 214, 115)" //shrubs
            : array.nums[0] == 1
            ? "rgb(79,91,255)" //water
            : array.nums[0] == 2
            ? "rgb(255, 213, 5)" //sand
            : array.nums[0] == 3
            ? "rgb(95,245,133)" //plains
            : array.nums[0] == 4
            ? "rgb(130,148,135)" //rock
            : "white" //snow
        }`
      }}
    >
      {/* {array.getNums().toString().replaceAll(",", " ")} */}
    </button>
  );
};
