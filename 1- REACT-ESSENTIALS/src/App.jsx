import {useState } from 'react'

import { CORE_CONCEPTS } from './data';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConecept/CoreConecept.jsx';
import TabButton from './components/TabButton.jsx';

import { EXAMPLES } from './data';


function App() {
  const [seletedTopic,setSelectedTopic] = useState();
  console.log("Ex")
  let tabContent  = 'Please click a button';

  function handleClick(selectedButton){
    // selectedButton => 'componenets', 'jsx', 'props', 'state'
    tabContent = selectedButton
    setSelectedTopic(selectedButton)
    console.log(tabContent)
   }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
            <ul>
              <CoreConcept 
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
               />   
              <CoreConcept {...CORE_CONCEPTS[1]}/>   

              <CoreConcept {...CORE_CONCEPTS[2]}/>   

              <CoreConcept {...CORE_CONCEPTS[3]}/>   
            </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
            
            {!seletedTopic && <p>Please select a topic.</p>}
            {seletedTopic && (
                          <div id="tab-content">
                          <h3>{EXAMPLES[seletedTopic].title}</h3>
                          <p>{EXAMPLES[seletedTopic].description}</p>
                          <pre>
                            <code>{EXAMPLES[seletedTopic].code}</code>
                          </pre>
                        </div>
            )
            }


            
        </section>
      </main>
    </div>
  );
}

export default App;
