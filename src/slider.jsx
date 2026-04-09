import { useState } from "react";

export default function Slide() {

  const slides = [
    {
      image: "/dji/28ac11d2cd74449c07514af6a04599c5.jpg",
      title: "Surveillance",
      description:
        "DJI Mavic drones provide stable aerial monitoring with GPS and intelligent flight systems. They are suitable for area inspection, patrols, and real-time observation.",
    },
    {
      image: "/dji/f1ee918b499793fe3d4372cf8ee18353.jpg",
      title: "Camera",
      description:
        "The drone features a high-resolution camera with 3-axis gimbal stabilization for smooth images and videos. It captures detailed photos and 4K-quality footage.",
    },
    {
      image: "/dji/62a25723a9f9293fb0aabb84ebebe919.jpg",
      title: "Security",
      description:
        "DJI Mavic drones use encrypted data transmission and precise GPS tracking. These features help protect footage and ensure safe, controlled operations.",
    },
    {
      image: "/dji/55ad852d0a627fcefad499922183b57b.jpg",
      title: "Portability",
      description:
        "The Mavic has a lightweight, foldable design that is easy to carry and store. It allows quick deployment for travel and field use.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const changeSlide = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrent(index);
      setFade(false);
    }, 400);
  };

  const nextSlide = () => {
    changeSlide(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    changeSlide(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="imgslide">
      <div className="slider">

        <button className="btns left" onClick={prevSlide}>❮</button>

        <img
          src={slides[current].image}
          alt={slides[current].title}
          className={`slide-img ${fade ? "fade" : ""}`}
        />

        {/* TEXT IN FRONT OF IMAGE */}
        <div className={`slide-text ${fade ? "fade" : ""}`}>
          <h2>{slides[current].title}</h2>
          <p>{slides[current].description}</p>
        </div>

        <button className="btns right" onClick={nextSlide}>❯</button>

      </div>
    </div>
  );
}
