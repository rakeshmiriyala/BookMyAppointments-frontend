import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carouselll = () => {
  const imageUrls = [
    "https://imgs.search.brave.com/9hWNTGILk7L95WvX9xWWCP8nN9NEHxdDipHOf7oOoHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8x/Mi8xMC8yMS8wMS9k/b2N0b3ItNTYzNDI5/XzY0MC5qcGc",
    "https://imgs.search.brave.com/KltLQk6Tufn3vvudUmECyA3FQQVT5XpD6d9oiW_SmG0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8xNC8wMy8yMC93/b21hbi0yMTQxODA4/XzY0MC5qcGc",
    "https://imgs.search.brave.com/XhAeRmrpxxZIc1yGOtDcruAakzBSAXldGEeRQLkfF0Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8xNC8wMy8wNS9z/dXJnZXJ5LTE4MjI0/NThfNjQwLmpwZw",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container ">
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="mx-auto max-w-500 max-h-300"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carouselll;
