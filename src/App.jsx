import Header from "./componets/Header"
import TeachingSection from "./componets/TeachingSection"
import DifferencesSection from "./componets/DifferencesSection"
import IntroSection from "./componets/introSection"
import TabSection from "./componets/Button/TabSection"
import { useState } from "react"
import FeedbackSection from "./componets/FeedbackSection"



function App() {
  const [tab, setTab] = useState('feedback')


  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}
        
        {tab === 'feedback' && <FeedbackSection />}
      </main>
    </>
  )
}

export default App
