import { styled } from 'styled-components';

const Capabilite = () => {
  return (
    <Container>
      <h4>CAPABILITIES</h4>
      <Wrapper>
        <div className='item'>
          <h5>STRATEGY</h5>
          <ul>
            <li>Research and Insight</li>
            <li>Brand Positioning</li>
            <li>Creative Strategy</li>
            <li>Brand Audits</li>
            <li>Brand Architecture</li>
            <li>Competitive Analysis</li>
            <li>Customer Profiles</li>
            <li>Category Definition</li>
          </ul>
          <div className='line'></div>
        </div>
        <div className='item'>
          <h5>BRANDING</h5>
          <ul>
            <li>Naming</li>
            <li>Brand Identity</li>
            <li>Brand Evolution</li>
            <li>Design Systems</li>
            <li>Type Design</li>
            <li>Print + Packaging</li>
            <li>Guidelines</li>
            <li>Campaign Creative</li>
            <li>Photo & Film AD</li>
            <li>Motion</li>
            <li>Environmental</li>
          </ul>
          <div className='line'></div>
        </div>
        <div className='item'>
          <h5>DIGITAL</h5>
          <ul>
            <li>Website Design</li>
            <li>User Experience</li>
            <li>User Interface</li>
            <li>Digital Experiences</li>
            <li>Architecture</li>
            <li>User Journeys</li>
            <li>Prototyping</li>
          </ul>
        </div>
        <div className='item'>
          <h5>TECHNOLOGY</h5>
          <ul>
            <li>Web Development</li>
            <li>Creative Development</li>
            <li>eCommerce</li>
            <li>App Development</li>
            <li>CMS Integration</li>
            <li>CRM Integration</li>
            <li>API Integration</li>
            <li>Technical Consulting</li>
          </ul>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Capabilite;

const Container = styled.div`
  float: left;
  width: 100%;
  display: flex;
  padding: 42px 39px 55px 39px;
  h4 {
    width: 50%;
    font-size: 32px;
    letter-spacing: -0.64px;
    text-transform: uppercase;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;

  .item {
    width: 50%;
    padding: 0 14px 36px 14px;
    margin-bottom: 39px;
    position: relative;
  }
  h5 {
    font-size: 16px;
    letter-spacing: -0.64px;
    text-transform: uppercase;
    margin: 0 0 18px;
  }
  li {
    font-size: 16px;
    line-height: 27px;
  }
  .line {
    position: absolute;
    background-color: white;
    bottom: 0px;
    width: 80%;
    height: 1px;
    clear: both;
  }
`;
