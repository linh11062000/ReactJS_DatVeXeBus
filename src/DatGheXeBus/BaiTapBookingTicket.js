import React, { Component } from "react";
import "./DatVe.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGhe from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />{" "}
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-9 text-center" color="black">
                <div className="dark-light" style={{ fontSize: 50 }}>
                  Đặt vé xe Bus{" "}
                </div>{" "}
                <div className="mt-5 tai-xe">
                  <a class="btn btn-light btn-lg" href="#" role="button">
                    {" "}
                    Tài xế
                  </a>{" "}
                </div>{" "}
                <div
                  className="tai-xe"
                  style={{
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <div className="screen "> </div>{" "}
                </div>{" "}
                {this.renderHangGhe()}{" "}
              </div>{" "}
              <div className="col-3 ">
                <div
                  style={{ fontSize: "25px", marginBottom: "1rem" }}
                  className="dark-light mt-2"
                >
                  DANH SÁCH GHẾ BẠN CHỌN{" "}
                </div>{" "}
                <ThongTinDatGhe />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
