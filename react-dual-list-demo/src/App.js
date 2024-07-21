import './App.css';

import React, { useState } from 'react';

import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';

function App() {

  const [selected, setSelected] = useState([]);

 /* const options = [
    { value: 'one', label: 'Option One' },
    { value: 'two', label: 'Option Two' },
    { value: 'three', label: 'Option Three' }
];*/
/*const options = [
  {
      label: 'Earth',
      options: [
          { value: 'luna', label: 'Moon' },
      ],
  },
  {
      label: 'Mars',
      options: [
          { value: 'phobos', label: 'Phobos' },
          { value: 'deimos', label: 'Deimos' },
      ],
  },
  {
      label: 'Jupiter',
      options: [
          { value: 'io', label: 'Io' },
          { value: 'europa', label: 'Europa' },
          { value: 'ganymede', label: 'Ganymede' },
          { value: 'callisto', label: 'Callisto' },
      ],
  },
];*/

const options = [
  {
      label: 'Mars',
      disabled: true,
      options: [
          { value: 'phobos', label: 'Phobos' },
          { value: 'deimos', label: 'Deimos' },
      ],
  },
  {
      label: 'Jupiter',
      options: [
          { value: 'io', label: 'Io' },
          { value: 'europa', label: 'Europa', disabled: true },
          { value: 'ganymede', label: 'Ganymede' },
          { value: 'callisto', label: 'Callisto' },
      ],
  },
];

  return (
    <div className="App">
      React Dual List demo

      <DualListBox
      options={options}
      selected={selected}
      onChange={(newValue) => setSelected(newValue)}
      ></DualListBox>

      selected Items :
      <ul>
        {
          selected.map((obj,index)=>(
            <li key={index}>
              {obj}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
