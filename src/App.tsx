
import { useState } from 'react';
import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card';
import { CreateContent } from './components/ui/CreateContent';
import { PlusIcon } from './icons/Plusicon';
import { ShareIcon } from './icons/ShareIcon';

function App() {
  const [ModelOpen, setModelOpen] = useState(false);
  return (
    <div className="p-4">
      <CreateContent open={ModelOpen} onClose={() => setModelOpen(false)} />
      <div className="App flex justify-end ">
        <Button onClick={() => {setModelOpen(true)}}
          startIcon={<PlusIcon size="md" />}
          size="md"
          variant='primary'
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
          link="https://www.youtube.com/watch?v="
          title="First Video"
        />
      </div>
    </div>
  );
}

export default App
