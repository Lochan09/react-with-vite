import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="image groom-image"></div>
        <div className="story-container">
          <div className="story">
            <h2>Kevin's Story</h2>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
            <p>
              I am alone, and feel the charm of existence in this spot, which was
              created for the bliss of souls like mine. I am so happy, my dear
              friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents.
            </p>
            <div className="author">- Kevin's Story</div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="image bride-image"></div>
        <div className="story-container">
          <div className="story">
            <h2>Cecelia's Story</h2>
            <p>
              When I hear the buzz of the little world among the stalks, and grow
              familiar with the countless indescribable forms of the insects and
              flies, then I feel the presence of the Almighty, who formed us in
              his own image, and the breath.
            </p>
            <p>
              I throw myself down among the tall grass by the trickling stream;
              and, as I lie close to the earth, a thousand unknown plants are
              noticed by me:
            </p>
            <div className="author">- Cecelia's Story</div>
          </div>
        </div>
      </div>
      <div className="title">
        <h1>Our Story</h1>
      </div>
    </div>
  );
};

export default Story;