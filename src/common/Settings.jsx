function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "transparent",
        fontSize: "30px",
        width: "40px",
      }}
      onClick={onClick}
    >
      <i
        className="ri-arrow-right-s-line"
        style={{ color: "white", fontSize: "4rem", fontWeight: "100" }}
      ></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "transparent",
        fontSize: "30px",
        width: "0px",
        left: "-40px"
      }}
      onClick={onClick}
    >
      <div  style={{ position: "absolute" , zIndex:'999' }}>
        <i
          className="ri-arrow-left-s-line"
          style={{ color: "white", fontSize: "4rem" }}
        ></i>
      </div>
    </div>
  );
}

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  draggable: true,
  swipe: true,
  touchMove: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
