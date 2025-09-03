
import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card';
import { PlusIcon } from './icons/Plusicon';
import { ShareIcon } from './icons/ShareIcon';

function App() {
  

  return (
    <>
      <div className="App ">
        <Button
          startIcon={<PlusIcon size="md" />}
          size="md"
          color="primary"
          text="Add Content"
        />

        <Button
          startIcon={<ShareIcon size="md" />}
          size="md"
          color="secondary"
          variant="secondary"
          text="Share Content"
        />
        <Card />
      </div>
    </>
  );
}

export default App
