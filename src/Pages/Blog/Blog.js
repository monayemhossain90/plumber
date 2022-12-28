import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
  return (
    <div className='container row mx-auto' >
      <div className="col-12 col-md-8 mx-auto">
        <h2>QNA</h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Q: How much time require to send a plumber to your location?
</Accordion.Header>
            <Accordion.Body>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Q: How do I view my auto plumbing ID card?</Accordion.Header>
            <Accordion.Body>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Q: How do I pay my bill online?</Accordion.Header>
            <Accordion.Body>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;