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
    <div className='detailview-background'>
      <div className='detailview-block'>
        <div className='detailview-block1'>
          <div className='detailview-volveratras' onClick={handleClick}>
            {/* <img src="../public/images/icons/iconBack.svg" alt="" /> */}
            <p>Volver atrás</p>
          </div>
          <h1>
            {instrumento.instrumento}
          </h1>
          <div>
            <img
              src={instrumento.img}
              alt={instrumento.instrumento}
            />
          </div>
        </div>
        <div className="detailview-block2"
        >
          <img
            src={instrumento.imgView1}
            alt="Vista 1"
          />
          <img
            src={instrumento.imgView1}
            alt="Vista 2"
          />
          <img
            src={instrumento.imgView2}
            alt="Vista 3"
          />
          <img
            src={instrumento.imgView2}
            alt="Vista 4"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailView;
