import React from "react";

const Portfolio = ({ category }) => {
  const [photos] =
    useState[
      ({
        name: "runbuddy",
        category: "portfolio",
        description: "run-buddy app",
        link: "https://lernantino.github.io/run-buddy/",
      },
      {
        name: "PasswordGenerator",
        category: "portfolio",
        description: "Password-generator app",
        link: "https://msadia27.github.io/password-generator/",
      },
      {
        name: "PostIt",
        category: "portfolio",
        description: "note-taker app",
        link: "https://young-thicket-51266.herokuapp.com/",
      })
    ];

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/portfolio ${image.category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
