import React, {useState} from 'react';

function InputSample() {
    // const [text, setText] = useState('');a
    const[inputs, setInputs] = useState({
      name :"",
      nick : ""
    });

    const {name, nick} = inputs; //비구조화
    
    const onChange = (e) => {
      // setText(e.target.value);
      const {value, name} = e.target;
      setInputs ({
        ...inputs,
        [name] : value
      });      
    };
  
    const onReset = () => {
      // setText(''); 
      setInputs({
        name : "",
        nick : "",
      })
    };
  
    return (
      <div>
      <input  name= "name" placeholder="name" onChange={onChange} value={name}/>
        <input  name= "nick" placeholder="nick" onChange={onChange} value={nick}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nick})
              </div>
    </div>
  );
}

export default InputSample;