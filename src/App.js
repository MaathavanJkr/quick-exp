import { useState } from 'react';
import * as math from 'mathjs';

function App() {

  const [exp, setExp] = useState('X+100/2');
  const [validExp, setValidExp] = useState('X+100/2');
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value !== "") {
      let finalExp = validExp.replace("X", event.target.value)
      try {
        let result = math.evaluate(finalExp).toString()
        setValue(result)
        setHistory([...history, [event.target.value, result]])
      } catch (err) {
        setValue('Error');
      }

    }
  }
  const handleExp = () => {
    if ((exp.match(/X/g) || []).length === 1) {
      setValidExp(exp)
    } else {
      setValue('Invalid Exp');
    }
  }
  return (
    <div>
      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Quick Exp</h1>
          <p className="mb-4 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-400">Got some values to solve using the same equation? Solve here.</p>
        </div>
      </section>

      <div className="max-w-sm mx-auto px-5">

        <div className="mt-5">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Input Expression</label>
          <input type="text" id="base-input" defaultValue="X+100/2" onChange={e => setExp(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          <button type="button" onClick={handleExp} className="mt-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Save</button>
        </div>

        <div className="mb-5">
          <div id="result" className="text-6xl text-center font-medium text-gray-900">{value}</div>
        </div>

        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300">
            Value
          </span>
          <input type="number" id="website-admin" onKeyDown={handleKeyDown} className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="88" />
        </div>

        <div className="mt-2 mb-5">
          <span className="block mb-2 text-md font-medium text-gray-900">History:</span>


          <div class="max-w-sm px-6 py-2 bg-white border border-gray-200 rounded-lg shadow">
            {history.map((data) => <div className="mx-5">{data[0] + " => " + data[1]}</div>)}
          </div>

        </div>

      </div>


      <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span class="text-sm text-gray-500 text-center dark:text-gray-400 w-full">Copyright © 2023 <a href="https://maathavanjkr.github.io/" class="hover:underline">Maathavan</a>. All Rights Reserved.
        </span>
      </footer>

    </div>
  );
}

export default App;
