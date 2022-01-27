import Zoom from "react-reveal/Zoom";

const Skills = () => {
  return (
    <div className="containerDiv-sm" id="skills">
      <Zoom left cascade className="skills">
        <h1 className="skills">Skills</h1>
      </Zoom>
      <div className="skills-grid">
        <Zoom right>
          <p>Next Js</p>
          <p>React</p>
          <p>TypeScript</p>
          <p>Apollo Client</p>
          <p>Node</p>
          <p>Agile</p>
        </Zoom>
      </div>
    </div>
  );
};

export default Skills;
