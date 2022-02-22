import * as React from "react";

interface AboutProps {
  title?: string;
  p?: string
}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <h2 id="heading">judul ini</h2>
      <p data-testid="paragraph">tolong laaah</p>
    </div>
  );
};

export default About;
