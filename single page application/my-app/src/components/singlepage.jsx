import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/navigation'; // Import Navigation styles
import 'swiper/css/pagination'; // Import Pagination styles

import image1 from '../../src/img/img1.avif';
import image2 from '../../src/img/img2.avif';
import image3 from '../../src/img/img3.jpg';
import image4 from '../../src/img/img4.jpg';
import imagebck from '../../src/img/imgbck.jpg';
import image11 from '../../src/img/img11.jpg';
import image22 from '../../src/img/img22.avif';
import image33 from '../../src/img/img33.avif';

// Import Swiper required modules
import { Navigation, Pagination } from 'swiper/modules';

// Styled-components for the page structure
const Header = styled.header`
  background-color: #333;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContentSection = styled.section`
  padding: 2rem;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const MovieContainer = styled.div`
  width: 30%;  // Adjust width for multiple items per row
  margin: 1rem 0;
  text-align: center;
  box-sizing: border-box; // Prevents padding/margin from affecting width
`;

const MovieImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`;
const AboutSection = styled.section`
  padding: 2rem;
  background-color: #f4f4f4;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const AboutHeader = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const AboutImage = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TeamSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const TeamMember = styled.div`
  width: 250px;
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const TeamMemberName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-top: 1rem;
`;

const TeamMemberRole = styled.p`
  font-size: 1rem;
  color: #777;
`;

const images = [
  image1,
  image2,
  image3,
  image4
];

// Styled Swiper component
const SwiperContainer = styled.div`
  .swiper {
    width: 100%;
    height: 400px; // Adjust the height for your preference
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 10px;
  }

  .swiper-button-next, .swiper-button-prev {
    color: #fff; // Navigation button color
    background-color: rgba(0, 0, 0, 0.5); // Button background color
    border-radius: 50%;
    padding: 10px;
    z-index: 10;
  }

  .swiper-button-next:hover, .swiper-button-prev:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background-color: #f39c12;
    opacity: 1;
  }
`;

function Singlepage() {
  const [activeSection, setActiveSection] = useState('home');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('/singlepage.json') // Replace with your JSON URL
      .then(response => {
        setMovies(response.data);
        setFilteredMovies(response.data);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = movies.filter(movie => movie.Title.toLowerCase().includes(query));
    setFilteredMovies(filtered);
  };

  const getImagePath = (filename) => {
    try {
      return require(`../../src/img/${filename}`);
    } catch (err) {
      console.error(`Image ${filename} not found`);
      return null;
    }
  };

  return (
    <div>
      <Header>
        <Nav>
          <NavItem onClick={() => setActiveSection('home')}>Home</NavItem>
          <NavItem onClick={() => setActiveSection('about')}>About Us</NavItem>
          <NavItem onClick={() => setActiveSection('movies')}>Movies</NavItem>
        </Nav>
      </Header>

      <ContentSection visible={activeSection === 'home'}>
        <h1>Welcome to Our Site</h1>

        {/* Swiper Slider */}
        <SwiperContainer>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </ContentSection>

      <ContentSection visible={activeSection === 'about'}>
      <AboutSection>
          <AboutHeader>About Us</AboutHeader>
          <AboutText>
            Welcome to our company! We are dedicated to providing high-quality services
            and products that make a positive impact in the world. Our team is passionate
            about delivering excellent results and constantly pushing boundaries. We are
            committed to innovation, sustainability, and creating meaningful connections.
          </AboutText>

          <AboutImage src={imagebck} alt="Our team" />
          
          <h2>Meet Our Team</h2>
          <TeamSection>
            <TeamMember>
              <TeamMemberImage src={image11} alt="Team Member 1" />
              <TeamMemberName>John Doe</TeamMemberName>
              <TeamMemberRole>CEO</TeamMemberRole>
            </TeamMember>

            <TeamMember>
              <TeamMemberImage src={image22} alt="Team Member 2" />
              <TeamMemberName>Jane Smith</TeamMemberName>
              <TeamMemberRole>Lead Developer</TeamMemberRole>
            </TeamMember>

            <TeamMember>
              <TeamMemberImage src={image33} alt="Team Member 3" />
              <TeamMemberName>Michael Brown</TeamMemberName>
              <TeamMemberRole>Marketing Specialist</TeamMemberRole>
            </TeamMember>
          </TeamSection>
        </AboutSection>
      </ContentSection>

      <ContentSection visible={activeSection === 'movies'}>
        <h1>Movies</h1>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <Div>
          {filteredMovies.map(movie => (
            <MovieContainer key={movie.Id}>
              <h2>{movie.Title}</h2>
              <p>Director: {movie.Director}</p>
              <p>Year: {movie.Year}</p>
              <p>Genre: {movie.Genre}</p>
              {getImagePath(movie.Poster) ? (
                <MovieImage src={getImagePath(movie.Poster)} alt={movie.Title} />
              ) : (
                <p>Image not found</p>
              )}
            </MovieContainer>
          ))}
        </Div>
      </ContentSection>
    </div>
  );
}

export default Singlepage;
