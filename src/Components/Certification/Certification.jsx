import "./Certification.css";

const Certification = ({ darkmode }) => {
  const certificates = [
    {
      id: 1,
      title: "Certificate of Internship",
      image:
        "https://asset.cloudinary.com/dhm6iwll2/a1a3d7407b2834c3d47e0f018d32a941",
      data: "Frontend Developer @ AgriJod; Worked on Next.js, CSS Modules, Git",
    },
    {
      id: 2,
      title: "Goldman sachs virtual experince",
      image:
        "https://asset.cloudinary.com/dhm6iwll2/a7d64abd9eb1b968318439afa02c9ace",
      data: "M; Tech Lead @ NITS HACKS 6.0",
    },
    {
      id: 3,
      title: "GEN AI Study Jams Certificate",
      image:
        "https://asset.cloudinary.com/dhm6iwll2/81d44b9a43e2d93803a4684d1fd47963",
      data: "css hack;abacus2023",
    },
  ];
  return (
    <section className="section" id="speakers">
      <div className={`${darkmode ? "about-line" : ""}`}></div>
      <div className="about-me">
        What I<span className="me"> Achieved </span>
      </div>
      <div className="gridContainer">
        {certificates.map((speaker) => {
          const dataList = speaker.data.split(";");
          return (
            <div className="flip_card" key={speaker.id}>
              <div className="flip_card_front">
                <div className="flip_card_inner">
                  <img
                    src={speaker.image}
                    className="speaker_image"
                    alt="certificate"
                  />
                  <h1 className="name">{speaker.title}</h1>
                </div>
              </div>
              <div className="flip_card_back">
                <div className="flip_card_inner">
                  <ul className="data">
                    {dataList.map((data, i) => (
                      <li key={i}>{data.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certification;
