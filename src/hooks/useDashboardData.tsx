import axios from "../api";
import { useEffect, useCallback } from "react";

const useDashboardData = () => {
  const getDashboardChartData = useCallback(async () => {
    try {
      const response = await axios.get("/api/dashboard/chart-data/dashboard");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }, []);
  
  return (
    <div>useDashboardData</div>
  )
}

export default useDashboardData