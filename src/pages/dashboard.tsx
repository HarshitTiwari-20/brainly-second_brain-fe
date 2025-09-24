
import { useEffect, useState } from 'react';

import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card';
import { CreateContent } from '../components/ui/CreateContent';
import { PlusIcon } from '../icons/Plusicon';
import { ShareIcon } from '../icons/ShareIcon';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { useContent } from '../hooks/useContent';

export default function Dashboard() {
  const [ModelOpen, setModelOpen] = useState(false);
  const {contents, refresh} = useContent();

    useEffect(() => {
    refresh();
  }, [ModelOpen])


  return (
    <div >
      <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-4 ">
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
        <div className="flex gap-4 flex-wrap">
        {contents.map(({type, link, title}) => <Card 
            type={type}
            link={link}
            title={title}
        />)}
      </div>
    </div>
    </div>
  );
}

