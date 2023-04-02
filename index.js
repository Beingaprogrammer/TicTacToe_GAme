document.body.style.backgroundImage = "url('backgroundimg.jpg')";

let count = 1;

const checkClick = () => {
  if (count == 1) {
    mySubmit();
    count++;
  } else {
    removeold();
    mySubmit();
  }
};

// call checkclick without click button....

const enterkey = () => {
  const inputkey = document.getElementById("myNumber");
  inputkey.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      inputkey.addEventListener("click", checkClick());
    }
  });
};

function mySubmit() {
  var n = document.getElementById("myNumber").value;
  if (n == 3 || n == 5 || n == 7) {
    let container = document.getElementById("container");
    console.log(container);

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        let gridimage = "gridbackground.jpg";
        container.style.backgroundImage = `url(${gridimage})`;
        let newdiv = document.createElement("div");
        newdiv.className = "box";
        newdiv.id = `${i}${j}`;
        // console.log(newdiv.id);
        container.appendChild(newdiv);
      }
    }

    document.getElementById(
      "container"
    ).style.gridTemplateRows = `repeat(${n}, ${n}vw)`;
    document.getElementById(
      "container"
    ).style.gridTemplateColumns = `repeat(${n}, ${n}vw)`;

    let turn = "X";
    let audio = new Audio("tune.mp3");

    //check div clicked or not....
    const checkdivClick = () => {
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          const elem = document.getElementById(`${i}${j}`);
          let elementClicked = false;
          elem.addEventListener("click", () => {
            if (elementClicked == true) {
              alert("This field has already been clicked before");
            }

            elementClicked = true;
          });
        }
      }
    };

    // to check victory....

    const checkvictory = () => {
      let x_count, c_count, h_count, t_count, j_count, d_count, r_count, s_count ;
        x_count = c_count = h_count = t_count = j_count = d_count = r_count = s_count = 0 ;
      
      const rowv = () => {
        
        if (x_count == n) {
          alert("X win");
          console.log("X win");
        } else if (c_count == n) {
          alert("X win");
          console.log("O win");
        }
      };

      const colv = () => {
        if (h_count == n) {
          alert("X win");

          console.log("X win");
        } else if (t_count == n) {
          alert("O win");

          console.log("O win");
        }
      };

      const diagv = () => {
        if (j_count == n) {
          alert("X win");

          console.log("X win");
        } else if (d_count == n) {
          alert("O win");

          console.log("O win");
        }
      };

      const antidiagv = () => {
        console.log(r_count, "x");
        console.log(s_count, "o");

        if (r_count == n - 1) {
          console.log("X win");
        } else if (s_count == n - 1) {
          console.log("O win");
        }
      };

      // for rows...
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          let elem = document.getElementById(`${i}${j}`);

          if (elem.innerHTML == "X") {
            x_count++;
          } else if (elem.innerHTML == "O") {
            c_count++;
          } else {
            break;
          }
        }
      }

      //for colms...
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          let elem = document.getElementById(`${j}${i}`);
          if (elem.innerHTML == "X") {
            h_count++;
          } else if (elem.innerHTML == "O") {
            t_count++;
          } else {
            break;
          }
        }
      }

      //for diagonals...
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          if (i == j) {
            let elem = document.getElementById(`${i}${j}`);
            if (elem.innerHTML == "X") {
              j_count++;
            } else if (elem.innerHTML == "O") {
              d_count++;
            } else {
              break;
            }
          }
        }
      }

      //for antidiagonal...

      for (let i = 0; i < n; i++) {
        let j = n - i - 1;
          console.log(i, j);
      
        if (document.getElementById(`${i}${j}`) != null) {
          

          let elem = document.getElementById(`${i}${j}`);

          if (elem.innerHTML == "X") {
            r_count++;
          } else if (elem.innerHTML == "O") {
            s_count++;
          }
        }
      }

      rowv();
      colv();
      diagv();
      antidiagv();
    };

    // Game logic...
    var box = document.getElementsByClassName("box");

    for (let i = 0; i < box.length; i++) {
      box[i].addEventListener("click", (e) => {
        console.log(e);

        if (box[i].innerText == "") {
          box[i].innerText = turn;
          turn = turn == "X" ? "O" : "X";
          audio.play();
          checkdivClick();
          checkvictory();
        }
      });
    }
  } else {
    alert("I can't provide this grid");
  }
}

function removeold() {
  const boxes = Array.from(document.getElementsByClassName("box"));

  boxes.forEach((box) => {
    box.remove();
  });
}
