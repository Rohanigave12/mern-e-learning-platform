import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "shreenath",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://imgs.search.brave.com/5izm8lc_jC1gIh00btBllFBn7QPGaNFTDwdy_2J9CpI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzM5LzY0LzY2/LzM2MF9GXzQzOTY0/NjY0OV9xYmxJek9D/OHhyTnlCUjJwZ2JD/dUM2MGdJS29NWkp6/Ry5qcGc",
    },
    {
      id: 2,
      name: "Vaishnav",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "manoj",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://imgs.search.brave.com/qrJoFS_n9nmOV9gNvoz3aFw3wTbOSjGUM4xWfx61N-g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE5LzQ5Lzk5/LzM2MF9GXzUxOTQ5/OTkwN19NV3ZMc1Nz/d1FYRzh4WHpHT1R0/YTRkOWRMdEhOUVVF/Ri5qcGc",
    },
    {
      id: 4,
      name: "Shreyash",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://imgs.search.brave.com/jzbN2ne21ZamZVrGbbit27RqzdXoViyUUkGPPidOkqY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzg4LzI2LzI5/LzM2MF9GXzEyODgy/NjI5MzdfakFPRGhs/SGNJVk95ZG94MWNy/bXhYRnFuYUtKaWo5/U28uanBn",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
