import { createContext, useEffect, useState } from "react";
import featureflagdataservicecall from "../data";

export const FeaturedFlagContext = createContext(null);

export default function FeaturedFlagGlobalstate({ children }) {
  
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchfeaturedFlag() {
    try {
      setLoading(true);
      const response = await featureflagdataservicecall();

      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchfeaturedFlag();
  }, []);

  return (
    <FeaturedFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeaturedFlagContext.Provider>
  );
}
