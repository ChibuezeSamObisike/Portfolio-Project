import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const Blog = () => {
  return (
    <div className="containerDivBlog">
      <div className="blog-sec">
        <RubberBand>
          <h1 style={{ textAlign: "center" }} className="blogT">
            My blog
          </h1>
        </RubberBand>
        <Fade bottom>
          <div
            style={{ textAlign: "center", color: "white", marginTop: "30px" }}
          >
            <h2 className="midText">
              I write awesome articles explaining state of the art Technologies
              to Beginners and intermediates.
            </h2>
            <a href="https://chibueze.hashnode.dev/" className="blogbtn">
              Blog
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Blog;
