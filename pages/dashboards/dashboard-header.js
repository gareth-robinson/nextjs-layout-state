import Link from 'next/link';
import { useCardData } from '../../context/card-data';

export default function DashboardHeader() {
  const { applicationState } = useCardData();
  const { dashboards } = applicationState;

  return (
    <ol>
      {Object.values(dashboards).map(dashboard => {
        return (
          <li key={dashboard.id}>
            <Link href={`/dashboards/${dashboard.id}`}>
              <a>{dashboard.name}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
