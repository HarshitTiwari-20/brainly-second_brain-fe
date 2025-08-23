
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/Plusicon';

function App() {
  

  return (
    <>
      <Button startIcon={<PlusIcon size='md'  />} size="md" color="primary" text="Share" />



      <Button size = "md" variant="secondary" text="Share" />
    </>
  );
}

export default App
