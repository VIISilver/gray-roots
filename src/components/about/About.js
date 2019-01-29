import React, { Component } from 'react';
import Nav from '../../functional/Nav';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';

class About extends Component {
  render() {
    return (
      <div id='container'>          
          <Nav />
        <h1>About</h1>
        <hr/>
        <img src={image1} />
        <p>Sit veniam fugiat mollit sint adipisicing velit. Sint velit pariatur ad qui qui.</p>
        <p>Ullamco mollit veniam anim proident voluptate qui esse officia voluptate proident duis. Nulla adipisicing commodo enim non. Laboris dolore labore esse occaecat sint minim labore ea reprehenderit in aute. Velit irure adipisicing cupidatat commodo esse consequat et aute consequat fugiat proident ipsum ut. Culpa anim nulla Lorem enim enim esse elit sit et. Eu consequat cupidatat eu irure nostrud. Sunt dolore minim dolor ut dolore quis non mollit do incididunt nisi.</p>
        <img src={image2} />
        <p>Cillum nostrud officia consequat aute laborum sunt dolor. Esse laborum ad consequat cillum occaecat duis occaecat est aliqua qui duis occaecat. Ex ullamco est non id in quis ea esse qui qui quis. Velit nostrud Lorem ex enim magna nostrud tempor magna commodo. Cillum laborum adipisicing do quis proident. Eiusmod id eiusmod incididunt labore tempor eiusmod laborum. Minim fugiat adipisicing cupidatat deserunt ullamco dolore adipisicing id occaecat irure.</p>
        <img src={image3} />
        <p>Pariatur aute aute commodo sit consectetur deserunt consectetur in qui consequat anim ex aliquip. Nulla culpa aute irure adipisicing excepteur consequat sunt velit nostrud consectetur. Pariatur esse aute dolore non veniam amet sit. Ad culpa voluptate elit et aliqua ipsum culpa dolore. Consequat non magna aute officia esse esse nulla incididunt Lorem ipsum adipisicing labore aliqua excepteur. Fugiat aliqua nulla ut do sint commodo aute ipsum qui esse laboris. Ea laborum dolor adipisicing ullamco ex voluptate irure dolore non.</p>
        <img src={image4} />
        <p>Fugiat magna aliqua id id. Cillum pariatur officia do sit pariatur qui aliqua aliquip consectetur enim irure. Amet sint adipisicing nulla cupidatat ea eiusmod commodo.</p>
        <img src={image5} />
      </div>
    )
  }
}

export default About;