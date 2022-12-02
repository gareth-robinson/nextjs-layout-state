import Link from 'next/link';

const applications = [
  {
    id: "dashboards",
    name: "Dashboards"
  }, {
    id: "cases",
    name: "Cases"
  }
];

export default function SidebarNav() {
  return (
    <ol>
      {applications.map(application => {
        return (
          <li key={application.id}>
            <Link href={`/${application.id}`}>
              <a>{application.name}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
