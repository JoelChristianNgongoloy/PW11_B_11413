import React from "react";
import { useState } from "react";

const Game2 = () => {
  const [list, setList] = useState([]);
  const [nama, setNama] = useState("");
  const [catatan, setCatatan] = useState("");
  const [priority, setPriority] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setList((dataSebelumnya) => {
      const newData = {
        nama: nama,
        catatan: catatan,
        priority: priority,
      };
      return [...dataSebelumnya, newData];
    });
    setNama("");
    setCatatan("");
    setPriority("");
  };
  return (
    <div className="p-3">
      <h1 className="mb-4">Simple To-Do List</h1>
      <div className="row align-item-center">
        <form onSubmit={submitHandler} className="p-2">
          <div className="d-flex">
            <div className="col-md-6">
              <div className="col-md-11">
                <label
                  htmlFor="validationCustom01"
                  className="form-label d-block text-start mt-4"
                >
                  Apa Yang Ingin Anda Kerjakan ?
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Nama To-Do List"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
                <label
                  htmlFor="validationCustom02"
                  className="form-label d-block text-start mt-4"
                >
                  Catatan
                </label>
                <textarea
                  className="area form-control"
                  required
                  placeholder="Isi Catatan To-Do List"
                  style={{ resize: "none" }}
                  value={catatan}
                  onChange={(e) => setCatatan(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-11">
                <label
                  htmlFor="validationCustom03"
                  className="form-label d-block text-start mt-4"
                >
                  Pilih Priority
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>
                    Pilih Priority
                  </option>
                  <option value="urgent">Urgent</option>
                  <option value="normal">Normal</option>
                  <option value="biasa">Biasa Saja</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 ms-0 text-start mt-3">
            <button className="btn btn-primary" type="submit">
              Tambah To-Do List
            </button>
          </div>
        </form>
        <div className="row row-cols-3 mt-4">
          {list.map((item, index) => (
            <div
              className="card mb-3"
              style={{
                maxWidth: "350px",
                marginRight: "20px",
                padding: 0,
                border: "0.5px solid black"
              }}
              key={index}
            >
              <div
                className="card-header"
                style={{
                  backgroundColor:
                    item.priority === "urgent"
                      ? "#d73546"
                      : item.priority === "biasa"
                      ? "#212529"
                      : "#238755",
                  color: "white",
                  width: "",
                }}
              >
                {item.priority === "urgent"
                  ? "Urgent"
                  : item.priority === "biasa"
                  ? "Biasa Saja"
                  : "Normal"}
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.nama}</h5>
                <p className="card-text">{item.catatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game2;
