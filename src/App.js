import Accordion from "./Accordion";
import { accordionData } from "./utils/Content";

function App() {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => {
          return <Accordion title={title} content={content} />;
        })}
      </div>
    </div>
  );
}

export default App;
