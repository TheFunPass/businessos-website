import { TaskProvider } from '@/context/TaskContext';
import Navbar from '../../components/Navbar';
import YouTubeSection from '../../components/YouTubeSection';
import { useAppStore } from '@/store/useAppStore';

function App() {
  const {
    isDarkMode

  } = useAppStore()

  return (
    <TaskProvider>
      <div className={`min-h-screen ${
        isDarkMode 
          ? 'bg-gradient-to-br from-background via-background to-slate-900/50'
          : 'bg-gradient-to-br from-slate-50 via-slate-50 to-cyan-50/20'
      }`}></div>
        <Navbar />
        <YouTubeSection />
    </TaskProvider>
  );
}
export default App;