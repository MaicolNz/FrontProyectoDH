import React from "react";
import { useParams } from "react-router-dom";
import instruments from "../Components/utils/instruments.json";
import { useNavigate } from "react-router-dom";

const DetailView = () => {
  const { id } = useParams();
  const instrumento = instruments.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  if (!instrumento) {
    return <div>Instrumento no encontrado</div>;
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/logos/hero.png')",
        backgroundRepeat: "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          width: "70%",
          maxWidth: "1000px",
          alignItems: "center",
          flexDirection: "row",
          transform: 'translate(0%, 10%)'
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              cursor: "pointer",
              marginBottom: "20px",
              color: "#333",
              fontWeight: "bold",
            }}
            onClick={handleClick}
          >
            Volver atrás
          </div>
          <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
            {instrumento.instrumento}
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={instrumento.img}
              alt={instrumento.instrumento}
              style={{
                width: "300px",
                height: "auto",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "20px",
            marginLeft: "40px",
            flex: 1,
          }}
        >
          <img
            src={instrumento.imgView1}
            alt="Vista 1"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={instrumento.imgView1}
            alt="Vista 2"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={instrumento.imgView2}
            alt="Vista 3"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={instrumento.imgView2}
            alt="Vista 4"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailView;
