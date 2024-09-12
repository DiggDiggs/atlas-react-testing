import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="from-steel-blue-50 to-steel-blue-600 flex h-full min-h-screen flex-col justify-between bg-gradient-to-t p-8">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
