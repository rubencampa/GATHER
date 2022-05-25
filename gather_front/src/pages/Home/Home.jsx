import "./home.css";
import Header from "../../components/molecules/Header/Header";
import Footer from "../../components/molecules/Footer/Footer";
import ScrollMenu from "../../components/molecules/ScrollMenu/ScrollMenu";


const Home = () => {
  return (
    <>
      <div className="container-home d-flex flex-column ">
        <Header />
        
        <ScrollMenu className="my-4"/>

        <main className="my-auto">
          <div className="div-post">
            <div className="header-post d-flex justify-content-between mx-3">
              <p>titulo</p>
              <p>usuario</p>
            </div>
            <div className="main-post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea iusto vitae, ex iste nam id optio. Placeat, animi exercitationem repellat nemo officiis fugit illo quos optio autem dolorum quas?
            </div>
          </div>
          <div className="div-post">
            <div className="header-post d-flex justify-content-between mx-3">
              <p>titulo</p>
              <p>usuario</p>
            </div>
            <div className="main-post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea iusto vitae, ex iste nam id optio. Placeat, animi exercitationem repellat nemo officiis fugit illo quos optio autem dolorum quas?
            </div>
          </div>
          <div className="div-post">
            <div className="header-post d-flex justify-content-between mx-3">
              <p>titulo</p>
              <p>usuario</p>
            </div>
            <div className="main-post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea iusto vitae, ex iste nam id optio. Placeat, animi exercitationem repellat nemo officiis fugit illo quos optio autem dolorum quas?
            </div>
          </div>
          <div className="div-post">
            <div className="header-post d-flex justify-content-between mx-3">
              <p>titulo</p>
              <p>usuario</p>
            </div>
            <div className="main-post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea iusto vitae, ex iste nam id optio. Placeat, animi exercitationem repellat nemo officiis fugit illo quos optio autem dolorum quas?
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
