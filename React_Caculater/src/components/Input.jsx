import React, { useState } from "react";
import style from "./Input.module.css";
import Output from "./Output";
function Input() {
  const [powerOn, setPowerOn] = useState(false);
  const [outputText, setOutputText] = useState("");

  // const handleResult = (e) => {
  //   const arr = outputText.split("");
  //   const res = [];
  //   let left = "";
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] == "+") {
  //       res.push(Number(left));
  //       res.push(arr[i]);
  //       left = "";
  //       continue;
  //     } else if (arr[i] == "-") {
  //       res.push(Number(left));
  //       res.push(arr[i]);
  //       left = "";
  //       continue;
  //     } else if (arr[i] == "*") {
  //       res.push(Number(left));
  //       res.push(arr[i]);
  //       left = "";
  //       continue;
  //     } else if (arr[i] == "/") {
  //       res.push(Number(left));
  //       res.push(arr[i]);
  //       left = "";
  //       continue;
  //     } else {
  //       left += arr[i];
  //     }
  //   }

  //   res.push(Number(left));
  //   console.log(res);
  //   let ans = 0;
  //   ans += res[0];
  //   for (let i = 1; i < res.length; i += 2) {
  //     switch (res[i]) {
  //       case "+":
  //         ans = ans + res[i + 1];
  //         break;

  //       case "-":
  //         ans = ans - res[i + 1];
  //         break;

  //       case "*":
  //         ans = ans * res[i + 1];
  //         break;
  //       case "/":
  //         ans = ans / res[i + 1];
  //         break;
  //     }
  //     console.log(ans);
  //     setOutputText(ans);
  //   }
  // };
  const handleResult = () => {
    const arr = outputText.split("");
    const res = [];
    let left = "";
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        res.push(Number(left));
        res.push(arr[i]);
        left = "";
        continue;
      }
      left += arr[i];
    }
    res.push(Number(left));
    console.log(res);
    let ans = 0;
    ans += res[0];
    for (let i = 1; i < res.length; i += 2) {
      switch (res[i]) {
        case "+":
          ans = ans + res[i + 1];
          break;

        case "-":
          ans = ans - res[i + 1];
          break;

        case "*":
          ans = ans * res[i + 1];
          break;

        case "/":
          ans = ans / res[i + 1];
          break;
      }
      console.log(ans);
      setOutputText(ans);
    }
    setOutputText(ans);
  };
  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <Output powerOn={powerOn} outputText={outputText} />

      <div className={style.container}>
        <div
          className={style.btn}
          onClick={() => setPowerOn(!powerOn)}
        >
          {powerOn ? "Off" : "On"}
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          %
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText("0")}
        >
          C
        </div>
        <div
          className={style.btn}
          onClick={(e) => {
            const abc = outputText.split("");
            abc.pop();
            setOutputText(abc.join(""));
          }}
        >
          Del
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          7
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          8
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          9
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          /
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          4
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          5
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          6
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          *
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          1
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          2
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          3
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          -
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          0
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          .
        </div>
        <div className={style.btn} onClick={handleResult}>
          =
        </div>
        <div
          className={style.btn}
          onClick={(e) =>
            setOutputText(outputText + e.target.innerText)
          }
        >
          +
        </div>
      </div>
    </div>
  );
}

export default Input;
