import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardView from "../../components/DashboardView";
import DashboardContextProvider, {
  useDashboardContext,
} from "../../context/Dashboard";
import withContext from "../../context/withContext";

function Dashboard() {
  const { dashboard, loadDashboard } = useDashboardContext();
  const navigate = useNavigate();

  const onCardClick = useCallback((cardData) => {
    navigate(`/places/${cardData.id}`);
  }, []);

  useEffect(() => {
    loadDashboard();
  }, []);

  return <DashboardView dashboard={dashboard} onCardClick={onCardClick} />;
}

export default withContext(Dashboard, DashboardContextProvider);
