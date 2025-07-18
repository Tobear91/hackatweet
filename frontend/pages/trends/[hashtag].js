import Trend from "../../components/Trend";
import { useRouter } from "next/router";

function trendsPage() {
  const router = useRouter();
  return <Trend {...router.query} />;
}

export default trendsPage;
