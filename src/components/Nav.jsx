import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../redux/actions";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Nav() {
  let [props, setValue] = useState({ value: "", placeholder: "City..." });
  const dispatch = useDispatch();
  const cityNotFound = useSelector((state) => state.cityNotFound);

  useEffect(() => {
    if (cityNotFound) {
      setValue({
        value: "",
        placeholder: "City not found, try again...",
      });
    } else {
      setValue({ value: "", placeholder: "City..." });
    }
  }, [cityNotFound]);

  function handleChange(e) {
    setValue({ value: e.target.value });
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link to={`/`}>
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="logo" height="40px" width="40px" />
          </a>
        </Link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={`/`}>
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/about"}>
                <a class="nav-link" href="/about">
                  About
                </a>
              </Link>
            </li>
          </ul>
          <form
            class="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(getCity(props.value));
              setValue({ value: "", placeholder: "City..." });
            }}
          >
            <input
              class="form-control me-2"
              type="search"
              value={props.value}
              onChange={(e) => handleChange(e)}
              placeholder={props.placeholder}
              aria-label={props.placeholder}
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// function Nav() {
//   return (
//     <nav>
//       <Link to="/">
//         <span className="navbar-brand">
//           <img
//             id="logoHenry"
//             src={Logo}
//             width="50"
//             height="50"
//             className="d-inline-block align-top"
//             alt=""
//           />
//         </span>
//       </Link>
//       <Link to="/about">
//         <span>About</span>
//       </Link>
//     </nav>
//   );
// }

export default Nav;
