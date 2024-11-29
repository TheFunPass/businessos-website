import { Card, CardContent } from '@/components/ui/card';
import { TaskProvider } from '@/context/TaskContext';
import { useAppStore } from '@/store/useAppStore';
import { Command } from 'lucide-react';
import Navbar from '../../components/Navbar';
import YouTubeSection from '../../components/YouTubeSection';

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
      }`}>
        <Navbar />

        <div className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mode Selection Card */}
            <Card className={`mb-8 border-0 shadow-lg ${
              isDarkMode
                ? 'bg-gradient-to-br from-slate-900 via-background to-slate-900/50'
                : 'bg-gradient-to-br from-white via-slate-50 to-cyan-50'
            }`}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Command className="h-6 w-6 text-primary" />
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Content Creation Page
                      </h1>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <YouTubeSection />
      </div>
    </TaskProvider>
  );
}
export default App;