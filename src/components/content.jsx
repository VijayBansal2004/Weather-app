import React, { useEffect, useState } from "react";

export const Content = () => {
  const [main, setMain] = useState();
  const [sys, setSys] = useState();
  const [wind, setWind] = useState();
  const [search, setSearch] = useState("Barnala");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1071febf965fb4c699c28dce84a19ec5`;
      const response = await fetch(url);
      const resJson = await response.json();
      setMain(resJson.main);
      setSys(resJson.sys);
      setWind(resJson.wind);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div
        style={{
          transition: "all 1s ease",
          background:
            "radial-gradient(circle at 7.4% 45.1%, rgb(236, 206, 251) 0%, rgb(205, 237, 246) 45.1%, rgb(227, 251, 252) 78.4%, rgb(230, 247, 235) 90%)",
        }}
        className="container rounded shadow my-5 py-3 col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-9 col-11 fs-col-1 mh-25 text-sm "
      >
        <h1 className="text-center text-capitalize display-5 fw-bold">
          <i className="bi bi-geo-alt"></i>
          {"  "}
          {search}
        </h1>

        <form className="d-flex" role="search">
          <input
            className="mx-4 form-control"
            type="search"
            placeholder="Search City OR State"
            aria-label="Search"
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                event.preventDefault();
              }
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        {!main ? (
          <p className="text-center my-3 fs-4 font-weight-bold">
            No Data Found
          </p>
        ) : (
          <div className="my-3 mt-5">
            <h3 className="d-flex justify-content-center mx-5">
              <p className="display-1">{Math.round(main.temp) + "°"}</p>
            </h3>

            <hr />
            <div>
              <div className="d-flex justify-content-center mx-5 fs-4">
                <p className="d-inline mx-2">
                  <i className="bi bi-thermometer-low"></i> Min
                </p>
                <p className="d-inline mx-2">
                  <i className="bi bi-thermometer-high"></i> Max
                </p>
              </div>

              <div className="d-flex justify-content-center mx-5 fs-4">
                <p className="d-inline mx-2">
                  <p> {Math.round(main.temp_min) + " °"}</p>
                </p>
                <span className="mx-2">/</span>
                <p className="d-inline mx-2">
                  <p> {Math.round(main.temp_max) + " °"}</p>
                </p>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between mx-5 fs-xl-5 fs-lg-5 fs-md-5">
              <p>
                <i className="bi bi-droplet"></i>
                {"  "} Humidity :{" "}
              </p>
              <p>{main.humidity + "%"}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between mx-5">
              <p>
                <i className="bi bi-speedometer2"></i>
                {"  "} pressure :{" "}
              </p>
              <p>{main.pressure + " hPa"}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between mx-5">
              <p>
                <i className="bi bi-speedometer2"></i>
                {"  "} Feels Like :{" "}
              </p>
              <p>{main.feels_like + " °"}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between mx-5">
              <p>
                <i className="bi bi-wind"></i>
                {"  "}Wind Degree :
              </p>
              <p>{wind.deg + " °"}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between mx-5">
              <p>
                <i className="bi bi-wind"></i>
                {"  "}Wind Speed :
              </p>
              <p>{wind.speed + " kmph"}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between mx-5">
              <p>Country :</p>
              <p>{sys.country}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
