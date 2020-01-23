import React from "react";
import Card from "react-bootstrap/Card";
function About() {
  return (
    <Card >
      <Card.Body>
        <Card.Title>A Little About Me!</Card.Title>
        <Card.Body> 
          I am from Vancouver, British Columbia seeking a career change from 10+
          years of customer service experience towards the web development
          field. I enjoy programming because I have a natural curiosity towards
          figuring things out and love the satisfaction from solving problems.
          For the same reasons, I enjoy puzzle related games like chess and
          real-time strategy games like League of Legends and spend a lot of
          time on edabit.com.
        </Card.Body>
        <Card.Title>Personal Philosophy</Card.Title>
        <Card.Body>
          "Growing yourself requires exploring new territory and it is a virtue
          to reflect on the knowledge gained. But while knowledge is power, knowledge without action is useless."
        </Card.Body>
      </Card.Body>
    </Card>
  );
}
export default About;
