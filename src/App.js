// ------------------------ import components ------------------------
import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'

// ------------------------ import pics ------------------------
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'


function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
        <div className="inner-wrapper">
          <div className="blog-container">
            <ProfileCard
              name={"Homer Simpson"} pic={homer}
              description={"Loves his family as much as donuts."} email={"homer@simpson.com"}
            />
            <ProfileCard name={"Lisa Simpson"} pic={lisa}
              description={"Amazing saxaphone player."} email={"lisa@harvard.edu"}
            />
            <ProfileCard name={"Maggie Simpson"} pic={maggie}
              description={"Maggie is know to have murdered atleast one person."} email={"maggie@simpson.com"}
            />
            <ProfileCard name={"Marge Simpson"} pic={marge}
              description={"Marge is a role model."} email={"marge@simpson.com"}
            />
            <ProfileCard name={"Bart Simpson"} pic={bart}
              description={"Bart is an eternal prankster."} email={"bart@simpson.com"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
