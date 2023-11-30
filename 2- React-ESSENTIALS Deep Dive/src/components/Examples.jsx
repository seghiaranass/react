import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data.js";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic.</p>;

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs buttons={
      <>
      <TabButton
          className = {selectedTopic === "components" ? "active" : undefined}

          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
         className = {selectedTopic === "jsx" ? "active" : undefined}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          className = {selectedTopic === "props" ? "active" : undefined}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
         className = {selectedTopic === "state" ? "active" : undefined}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      
      </>
    }>

      {tabContent}
      </Tabs>
    </Section>
  );
}
