import { useEffect } from 'react';
import { useCardData } from '../../context/card-data';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import getCardData from './get-card-data';
import DashboardHeader from './dashboard-header';
import DashboardCard from './dashboard-card';
import { DragDropContext } from 'cx-component-library';

const Dashboard = () => {
  const router = useRouter();
  const { dashboardid } = router.query
  const { applicationState, setApplicationState } = useCardData();
  const { cardData, dashboards } = applicationState;
  const dashboard = dashboards[dashboardid] ||
    dashboards[Object.keys(dashboards)[0]];
  const { cards } = dashboard;

  useEffect(() => {
    cards.forEach(card => {
      if (!cardData[card.cardId]) {
        getCardData(card)
          .then(data => {
            cardData[card.cardId] = data;
            const newApplicationState = {
              ...applicationState,
              cardData: JSON.parse(JSON.stringify(cardData))
            };
            setApplicationState(newApplicationState);
          });
      }
    });
  }, [cardData]);

  return (
    <>
      <p>Dashboard: {dashboard.name}</p>
      <DashboardHeader/>
      <DragDropContext>
        <div class="cards">
          {
            cards.map(card => {
              return (
                <DashboardCard card={{}}/>
              )
            })
          }
        </div>
      </DragDropContext>
    </>
  )
}

export default Dashboard;
