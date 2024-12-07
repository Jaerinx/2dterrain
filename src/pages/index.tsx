import Image from "next/image";
import { Inter, M_PLUS_1 } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import { Block } from "../Classes/Block";
import { Slider } from "@nextui-org/slider";
import { GridBlock } from "@/Components/GridBlock";
import { sort } from "fast-sort";
const inter = Inter({ subsets: ["latin"] });
/*
0:woods
1:water
2:sand
3:plains
4:rock
 */

let space: any[] = [];
let collapsed: any[] = [];
let toCollapse: any[][] = [];
export default function Home() {
  const [size, setSize] = useState(9);
  const [Array, setArray] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [width, setWidth] = useState(0);
  const [iterator, setIterate] = useState(0);
  const [woodsMultiplier, setWoodsMultiplier] = useState(
    Math.floor(15 + Math.random() * 4)
  );
  const [waterMultiplier, setWaterMultiplier] = useState(
    Math.floor(15 + Math.random() * 4)
  );
  const [sandMultiplier, setSandMultiplier] = useState(
    Math.floor(15 + Math.random() * 4)
  );
  const [plainsMultiplier, setPlainsMultiplier] = useState(
    Math.floor(15 + Math.random() * 4)
  );
  const [rockMultiplier, setRockMultiplier] = useState(
    Math.floor(15 + Math.random() * 4)
  );
  const [snowMultiplier, setSnowMultiplier] = useState(
    Math.floor(15 + Math.random() * 4)
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setLoaded(true);
    });
    setWidth(window.innerWidth);
    setLoaded(true);
  }, [Array]);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setIterate(iterator + 1);
    }, 100);
    return () => {
      clearTimeout(timer1);
    };
  }, [iterator, size]);

  const clear = () => {
    setIterate(0);
    toCollapse = [];
    space = [];
    let x = 0;
    let y = 0;
    for (let row = 0; row < size; row++) {
      const rowArr = [];
      for (let col = 0; col < size; col++) {
        rowArr.push(new Block([0, 1, 2, 3, 4, 5], x, y));
        x += 1;
      }
      y += 1;
      space.push(rowArr);
    }
    collapsed = [];
    x = 0;
    y = 0;
    for (let row = 0; row < size; row++) {
      const rowArr = [];
      for (let col = 0; col < size; col++) {
        rowArr.push([]);
        x += 1;
      }
      y += 1;
      collapsed.push(rowArr);
    }
    setArray(true);
  };

  useEffect(() => {
    setIterate(0);
    toCollapse = [];
    space = [];
    let x = 0;
    let y = 0;
    for (let row = 0; row < size; row++) {
      const rowArr = [];
      for (let col = 0; col < size; col++) {
        rowArr.push(new Block([0, 1, 2, 3, 4, 5], x, y));
        x += 1;
      }
      y += 1;
      space.push(rowArr);
    }
    collapsed = [];
    x = 0;
    y = 0;
    for (let row = 0; row < size; row++) {
      const rowArr = [];
      for (let col = 0; col < size; col++) {
        rowArr.push([]);
        x += 1;
      }
      y += 1;
      collapsed.push(rowArr);
    }
    setArray(true);
  }, [size]);

  const getNeighbors = (row: number, col: number, width: number) => {
    const returnArr = [];
    var rowLimit = space.length - 1;
    var columnLimit = space[0].length - 1;
    for (
      var x = Math.max(0, row - width);
      x <= Math.min(row + width, rowLimit);
      x++
    ) {
      for (
        var y = Math.max(0, col - width);
        y <= Math.min(col + width, columnLimit);
        y++
      ) {
        if (x !== row || y !== col) {
          returnArr.push([x, y]);
        }
      }
    }
    return returnArr;
  };

  const isCollapsed = () => {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (space[row][col].getLength() > 1) {
          return false;
        }
      }
    }
    return true;
  };

  // const rasterize = () => {
  //   for (let row = 0; row < size; row++) {
  //     for (let col = 0; col < size; col++) {
  //       if (space[row][col].getLength() == 1) {
  //         const neighbors = getNeighbors(row, col, 1);
  //         const probabilityMap: any[] = [];
  //         for (let j = 0; j < neighbors.length; j++) {
  //           const x = neighbors[j][0];
  //           const y = neighbors[j][1];
  //           if (space[x][y].getLength() == 1) {
  //             if (space[x][y].nums[0] == 0) {
  //               for (var i = 0; i < 10; i++) probabilityMap.push(0);
  //             }
  //             if (space[x][y].nums[0] == 1) {
  //               for (var i = 0; i < 10; i++) probabilityMap.push(1);
  //             }
  //             if (space[x][y].nums[0] == 2) {
  //               for (var i = 0; i < 10; i++) probabilityMap.push(2);
  //             }
  //             if (space[x][y].nums[0] == 3) {
  //               for (var i = 0; i < 10; i++) probabilityMap.push(3);
  //               for (var i = 0; i < 10 * 0.2; i++) probabilityMap.push(2);
  //             }
  //             if (space[x][y].nums[0] == 4) {
  //               for (var i = 0; i < rockMultiplier; i++) probabilityMap.push(4);
  //             }
  //           }
  //         }

  //         if (
  //           space[row][col].getNums()[0] == 0 &&
  //           probabilityMap.reduce(
  //             (total, x) => (x == 1 ? total + 1 : total),
  //             0
  //           ) > 0
  //         ) {
  //           space[row][col].setNum(2);
  //           continue;
  //         }

  //         if (
  //           space[row][col].getNums()[0] == 2 &&
  //           probabilityMap.reduce(
  //             (total, x) => (x == 3 ? total + 1 : total),
  //             0
  //           ) >
  //             probabilityMap.reduce(
  //               (total, x) => (x == 1 ? total + 1 : total),
  //               0
  //             )
  //         ) {
  //           console.log("set water at row: " + row + " and col: " + col);
  //           space[row][col].setNum(0);
  //           continue;
  //         } else if (space[row][col].getNums()[0] == 2) {
  //           space[row][col].setNum(1);
  //           continue;
  //         }
  //         let num = 0;
  //         num =
  //           probabilityMap[Math.floor(Math.random() * probabilityMap.length)];
  //         space[row][col].setNum(num);
  //       }
  //     }
  //   }
  //   setIterate(iterator + 1);
  // };

  function timeout(delay: number) {
    return new Promise((res) => {
      setIterate(iterator + 1);
      setTimeout(res, delay);
    });
  }

  const waveFunctionCollapse = async () => {
    let tempArr = [];
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (space[row][col].getLength() > 1) {
          tempArr.push([row, col]);
        }
      }
    }
    while (tempArr.length > 0) {
      let arr = tempArr.pop();
      step(arr![0], arr![1]);
      await timeout(1);
      tempArr = sort(tempArr).desc([(a) => space[a[0]][a[1]].getLength()]);
    }
  };

  const modelSynthesis = async () => {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (space[row][col].getLength() > 1) {
          step(row, col);
          if ((row + col) % 10 == 0) {
            await timeout(0.000001);
            setIterate(iterator + 1);
          }
        }
      }
    }
  };

  const neighborChecker = async () => {
    let toSearch: number[][] = [];
    const initialNodeX = Math.floor(Math.random() * size - 1);
    const initialNodey = Math.floor(Math.random() * size - 1);
    toSearch.push([initialNodeX, initialNodey]);
    while (toSearch.length < size * size) {
      let nextNode = toSearch[toSearch.length - 1];
      const neighbors = getNeighbors(nextNode![0], nextNode![1], 1);
      neighbors.forEach((neighbor) => {
        if (
          space[neighbor[0]][neighbor[1]].getLength() > 1 &&
          !toSearch.includes([neighbor[0], neighbor[1]])
        ) {
          toSearch.push([neighbor[0], neighbor[1]]);
        }
      });
    }
    for (let i = 0; i < toSearch.length; i++) {
      let arr = toSearch[i];
      step(arr![0], arr![1]);
      await timeout(1);
    }
  };

  const checkEmpty = () => {
    let total = 0;
    collapsed.forEach((row) => {
      row.forEach((item: any[]) => {
        if (item.length != 1) {
          total += 1;
        }
      });
    });
    return total;
  };

  const findEmpty = () => {
    collapsed.forEach((row) => {
      row.forEach((item: any[]) => {
        if (item.length == 0) {
          console.log(item);
          return [collapsed.indexOf(row), row.indexOf(item)];
        }
      });
    });
    return [];
  };

  const step5 = () => {
    console.log("5");
    let total = checkEmpty();
    let Empty = findEmpty();
    for (let i = 0; i < 100; i++) {
      total = checkEmpty();
      let row = 0;
      let col = 0;
      Empty = findEmpty();
      if (Empty.length != 0) {
        row = Empty[0];
        col = Empty[1];
      }
      // rasterize();
      step(row, col);
    }
  };

  const step = async (row: number, col: number) => {
    setIterate(iterator + 1);
    const neighbors = getNeighbors(row, col, 1);
    const probabilityMap: any[] = [];
    const length = space[row][col].getLength();
    space[row][col].nums.forEach((num: any) => {
      if (num == 0) {
        for (var i = 0; i < woodsMultiplier; i++) probabilityMap.push(0);
      }
      if (num == 1) {
        for (var i = 0; i < waterMultiplier; i++) probabilityMap.push(1);
      }
      if (num == 2) {
        for (var i = 0; i < sandMultiplier; i++) probabilityMap.push(2);
      }
      if (num == 3) {
        for (var i = 0; i < plainsMultiplier; i++) probabilityMap.push(3);
      }
      if (num == 4) {
        for (var i = 0; i < rockMultiplier; i++) probabilityMap.push(4);
      }
      if (num == 5) {
        for (var i = 0; i < snowMultiplier; i++) probabilityMap.push(5);
      }
    });
    neighbors.forEach((neighbor) => {
      const x = neighbor[0];
      const y = neighbor[1];
      if (
        space[x][y].getLength() == 1 &&
        probabilityMap.includes(space[x][y].nums[0])
      ) {
        if (space[x][y].nums[0] == 0) {
          for (var i = 0; i < woodsMultiplier / length; i++)
            probabilityMap.push(0);
        }
        if (space[x][y].nums[0] == 1) {
          for (var i = 0; i < waterMultiplier / length; i++)
            probabilityMap.push(1);
        }
        if (space[x][y].nums[0] == 2) {
          for (var i = 0; i < sandMultiplier / length; i++)
            probabilityMap.push(2);
        }
        if (space[x][y].nums[0] == 3) {
          for (var i = 0; i < plainsMultiplier / length; i++)
            probabilityMap.push(3);
        }
        if (space[x][y].nums[0] == 4) {
          for (var i = 0; i < rockMultiplier / length; i++)
            probabilityMap.push(4);
        }
        if (space[x][y].nums[0] == 5) {
          for (var i = 0; i < snowMultiplier / length; i++)
            probabilityMap.push(5);
        }
      }
    });
    let num = 0;
    num = probabilityMap[Math.floor(Math.random() * probabilityMap.length)];
    space[row][col].setNum(num);
    collapsed[row][col] = num;
    collapse(row, col, num);
  };

  const collapse = (row: number, col: number, num: any) => {
    toCollapse.push([row, col, num]);
    while (toCollapse.length > 0) {
      const collapse = toCollapse.pop();
      collapse_out(collapse![0], collapse![1], collapse![2]);
    }
  };

  const collapse_out = (row: number, col: number, num: any) => {
    const neightbors = getNeighbors(row, col, 1);
    neightbors.forEach((neighbor) => {
      const x = neighbor[0];
      const y = neighbor[1];
      if (space[x][y].getLength() !== 1) {
        if (space[row][col].nums[0] == 0) {
          space[x][y].delete(1);
          space[x][y].delete(5);
          space[x][y].delete(2);
        } else if (space[row][col].nums[0] == 1) {
          space[x][y].delete(3);
          space[x][y].delete(5);
          space[x][y].delete(4);
          space[x][y].delete(0);
        } else if (space[row][col].nums[0] == 2) {
          space[x][y].delete(0);
          space[x][y].delete(5);
        } else if (space[row][col].nums[0] == 3) {
          space[x][y].delete(1);
          space[x][y].delete(5);
        } else if (space[row][col].nums[0] == 4) {
          space[x][y].delete(1);
        } else if (space[row][col].nums[0] == 5) {
          space[x][y].delete(0);
          space[x][y].delete(1);
          space[x][y].delete(2);
          space[x][y].delete(3);
        }
        if (space[x][y].getLength() == 1) {
          collapsed[row][col] = num;
          toCollapse.push([x, y, space[x][y].getNums()[0]]);
        }
      }
    });
  };

  if (loaded && Array) {
    return (
      <main
        className={`flex min-h-screen min-w-screen flex-col items-center justify-between m-0 p-2 overflow-hidden bg-white ${inter.className}`}
      >
        <div
          className="text-black absolute top-10 right-10 "
          style={{ width: `${0.23 * width}px` }}
        >
          <Slider
            label="size"
            step={10}
            maxValue={300}
            minValue={10}
            defaultValue={size}
            onChangeEnd={(e) => {
              if (e !== size) {
                setArray(false);
                setSize(Number(e));
              }
            }}
            className="w-full"
          />
          <div className="flex justify-center w-full m-5">
            <button
              className="text-black border-2 border-black rounded-md px-4 hover:bg-green-50 m-2"
              onClick={() => {
                setArray(false);
                clear();
              }}
            >
              clear
            </button>

            <button
              className="text-black border-2 border-black rounded-md px-4 hover:bg-red-50 m-2"
              onClick={() => {
                modelSynthesis();
              }}
            >
              Model Synthesis
            </button>
            <button
              className="text-black border-2 border-black rounded-md px-4 hover:bg-red-50 m-2"
              onClick={waveFunctionCollapse}
            >
              Wave Function Collapse
            </button>

            {/* <button
              className="text-black border-2 border-black rounded-md px-4 hover:bg-red-50 m-2"
              onClick={neighborChecker}
            >
              Neighborhood Search
            </button> */}
          </div>
        </div>

        <div
          className="text-black absolute top-10 left-10 "
          style={{ width: `${0.23 * width}px` }}
        >
          <Slider
            label="woods"
            step={1}
            maxValue={30}
            minValue={0}
            defaultValue={woodsMultiplier}
            onChangeEnd={(e) => {
              setWoodsMultiplier(Number(e));
            }}
            className="w-full"
          />
          <Slider
            label="water"
            step={1}
            maxValue={30}
            minValue={0}
            defaultValue={waterMultiplier}
            onChangeEnd={(e) => {
              setWaterMultiplier(Number(e));
            }}
            className="w-full"
          />
          <Slider
            label="sand"
            step={1}
            maxValue={30}
            minValue={0}
            defaultValue={sandMultiplier}
            onChangeEnd={(e) => {
              setSandMultiplier(Number(e));
            }}
            className="w-full"
          />
          <Slider
            label="plains"
            step={1}
            maxValue={30}
            minValue={0}
            defaultValue={plainsMultiplier}
            onChangeEnd={(e) => {
              setPlainsMultiplier(Number(e));
            }}
            className="w-full"
          />
          <Slider
            label="rock"
            step={1}
            maxValue={30}
            minValue={0}
            defaultValue={rockMultiplier}
            onChangeEnd={(e) => {
              setRockMultiplier(Number(e));
            }}
            className="w-full"
          />
          <Slider
            label="snow"
            step={1}
            maxValue={30}
            minValue={0}
            defaultValue={snowMultiplier}
            onChangeEnd={(e) => {
              setSnowMultiplier(Number(e));
            }}
            className="w-full"
          />
        </div>

        <div
          className={`text-black  border-black overflow-hidden grid grid-flow-row auto-rows-fr border-2`}
          style={{
            width: `${0.45 * width}px`,
            maxWidth: `${0.45 * width}px`,
            height: `${0.45 * width}px`,
            maxHeight: `${0.45 * width}px`
          }}
        >
          {space.map((row) => {
            return (
              <div
                key={space.indexOf(row)}
                className="grid grid-flow-col auto-cols-fr m-0"
              >
                {row.map((array: any) => {
                  const x = space.indexOf(row);
                  const y = row.indexOf(array);
                  return GridBlock({ x, y, space, setLoaded, step });
                })}
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}
