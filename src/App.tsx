import logo from './logo.svg';
import './App.css';
import React, {ChangeEvent, useRef, useState} from 'react';

function App() {
  const ControlledInputFixedValue = () => <input value={'ControlledInput'}/>

    const UncontrolledInput = () => {
        const [value, setValue] = useState('')
        return (
            <> <input onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setValue(e.currentTarget.value)
            }}/> - {value} </>
        )
    }

    const GetValueUncontrolledInputButtonPress = () => {
        const [value, setValue] = useState('')
        const inputRef = useRef<HTMLInputElement>(null)
        const save = () => {
            const el = inputRef.current as HTMLInputElement
            setValue(el.value)
        }
        return (
            <> <input ref={inputRef}/>
                <button onClick={save}>Save</button>
                - actual save: {value} </>
        )
    }

    const ControlledInput = () => {
        const [parentValue, setParentValue] = useState('')
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setParentValue(e.currentTarget.value)
        }
        return <input value={parentValue} onChange={onChangeHandler}/>
    }

    const ControlledCheckbox = () => {
        const [parentValue, setParentValue] = useState(true)
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setParentValue(e.currentTarget.checked)
        }
        return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
    }
    const ControlledSelect = () => {
        const [parentValue, setParentValue] = useState<string | undefined>(undefined)
        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            setParentValue(e.currentTarget.value)
        }
        return <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>Msk</option>
            <option value={'2'}>Ekb</option>
            <option value={'3'}>Spb</option>
        </select>
    }
  return (
    <div className="App">
      <UncontrolledInput/>
            <ControlledInputFixedValue/>
            <GetValueUncontrolledInputButtonPress/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
    </div>
  );
}

export default App;
