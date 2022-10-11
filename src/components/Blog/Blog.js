import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container w-50'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the purpose of react router?</Accordion.Header>
                    <Accordion.Body>
                        React router is most commonly used to make SPA(Single Page Application) websites. thus it helps reduce loading time for users. When users navigate to different pages ,
                        instead of reloading the data of whole page , react router only reloads the components that are unique.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does Context API work?</Accordion.Header>
                    <Accordion.Body>
                        Context API is used to pass data through component tree without having to pass props down manually at every level. Typically we have to use prop drilling
                        (manually passing down data to the bottom of a component tree) so that the component at the end of that tree can access the data. But Context API saves the data and can share the data to
                        any component in a component tree.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>details about useRef hook.</Accordion.Header>
                    <Accordion.Body>
                        useRef hook is used to store reference of the element. Most important thing about useRef is that it doesn't cause re-render. It also holds a mutable value so the value
                        can be changed any time. It also can be used to directly access DOM elements.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;