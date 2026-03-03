import "./App.module.scss";
import Header from "./components/Header/Header";
import SearchSection from "./components/SearchSection/SearchSection";
import SlideSection from "./components/SlideSection/SlideSection";
import EventsSection from "./components/EventsSection/EventsSection";
import ApplicationForm from "./components/ApplicationForm";

function App() {
  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div>
      <Header />
      <SlideSection />
      <SearchSection />
      <EventsSection />
      <ApplicationForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;