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
        width: "65px",
      }}
      onClick={onClick}
    >
      <i
        className="ri-arrow-right-s-line"
        style={{ color: "white", fontSize: "4rem", fontWeight: "100" , backgroundColor: 'rgba(0, 0, 0, 0.400)', borderRadius: "100%"}}
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
        
        
      }}
      onClick={onClick}
    >
      <div style={{ position: "absolute", zIndex: "999" }}>
        <i
          className="ri-arrow-left-s-line"
          style={{ color: "white", fontSize: "4rem", backgroundColor: 'rgba(0, 0, 0, 0.400)', borderRadius: "100%" }}
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
  slidesToScroll: 1,
  touchMove: true,
  centerMode: true,
  className: "center",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
