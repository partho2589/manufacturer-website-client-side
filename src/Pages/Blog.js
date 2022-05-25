import React from 'react';

const Blog = () => {
    return (
        <div className='mt-6 ml-5'>
            <div>
            <h2 className='text-2xl font-bold '>1. How will you improve the performance of a React Application?</h2>
            <p> To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. </p>
            </div>
            <div>
            <h2 className='text-2xl  '>2.What are the different ways to manage a state in a React application?</h2>
            <p> What are the different ways to manage a state in a React application?
            </p>
            <small>* Local state.</small> <br/>
            <small>* Global state</small> <br/>
            <small>* Server state.</small><br/>
            <small>* URL state.</small>
            </div>
            <div>
            <h2 className='text-2xl font-bold '>3.How does prototypical inheritance work?</h2>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. </p>
            </div>
            <div>
            <h2 className='text-2xl font-bold '>4. What is a unit test? Why should write unit tests?</h2>
            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div>
            <h2 className='text-2xl font-bold '>5. How will you improve the performance of a React Application?</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum quasi officia reiciendis, eveniet nisi dolorem rem, saepe ipsam itaque, laboriosam voluptate eos vel libero modi impedit eius vitae laborum!</p>
            </div>
        </div>
    );
};

export default Blog;