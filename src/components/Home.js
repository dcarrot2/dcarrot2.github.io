import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {

  return (
    <div>
      <p style={s.p}>
          <br/>

        I live in CA and build software powered by JavaScript,
        with React and React Native, Golang and Python.
        Previously at Uber and worked on UberEATS and Uber's dispatch.
        You will soon find technical writings and other musings here.
        Proud graduate from the
        <Interactive
            as={"a"}
            {...s.link}
            href='https://sites.google.com/site/csitin3/'
        > CS-in-3 </Interactive>program!
      </p>
    </div>
  );
}
