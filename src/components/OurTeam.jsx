import React from 'react';
import '../pages/css/OurTeam.css'; // Add a CSS file for styling

// Importing images for team members (Make sure images are in the correct path)
import teamLeader from "../pages/images/leader.jpg";
import member1 from "../pages/images/rus.jpg";
import member2 from "../pages/images/member2.jpg";
import member3 from "../pages/images/member3.jpg";

// import teamMember2 from '../images/teamMember2.jpg';
// import teamMember3 from '../images/teamMember3.jpg';
// import teamLeader from '../images/teamLeader.jpg';

const OurTeam = () => {
  const team = [
    {
      name: 'Abdullah AL-Mamun Polash',
      role: 'CEO',
      description: 'A visionary leader in digital printing, driving innovation.',
      image: teamLeader
    },
    {
      name: 'Masud Rana',
      role: 'CTO',
      description: 'Tech leader driving innovation and growth in digital printing.',
      image: member2
    },
    {
      name: 'Shanto',
      role: 'Designer',
      description: 'Creative expert crafting unique, eye-catching designs for digital printing.',
      image: member3
    },
    {
      name: 'Md Rustom Islam',
      role: 'Designer',
      description: 'Creative expert crafting unique, eye-catching designs for digital printing.',
      image: member1
    }
  ];

  return (
    <div className="team-section">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-container">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
