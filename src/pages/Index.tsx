import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FederatedLearningSection from "@/components/FederatedLearningSection";
import OfflineGauge from "@/components/OfflineGauge";
import EthicsCharter from "@/components/EthicsCharter";
import GovernanceVoting from "@/components/GovernanceVoting";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <FederatedLearningSection />
      <OfflineGauge />
      <EthicsCharter />
      <GovernanceVoting />
      <Footer />
    </div>
  );
};

export default Index;
