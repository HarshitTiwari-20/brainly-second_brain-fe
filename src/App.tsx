
import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card';
import { PlusIcon } from './icons/Plusicon';
import { ShareIcon } from './icons/ShareIcon';

function App() {
  

  return (
    <div className="p-4">
      <div className="App flex justify-end ">
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
      </div>
      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com/linuxopsys/status/1963262930880745601"
          title="First Tweet"
        />

        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=Xs0Lxif1u9E"
          title="First Video"
        />
      </div>
    </div>
  );
}

export default App
