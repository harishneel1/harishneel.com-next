import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import ProblemSolution from '../components/sections/ProblemSolution';
import ProcessSection from '../components/sections/Process';
import AuditSection from '../components/sections/AiAudit';
import ResultsSection from '../components/sections/ResultsSection';
import FaqSection from '../components/sections/Faq';
import FinalCta from '../components/sections/FinalCta';


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProblemSolution />
      <ProcessSection />
      <AuditSection />
      {/* <ResultsSection /> */}
      <FaqSection />
      <FinalCta />

    </>
  )
}