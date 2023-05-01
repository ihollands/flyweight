export default function HeroNav() {
  const navItems = [
    'Untold Truth',
    'Platform',
    'Deliverables',
    'Code of Conduct',
    'Work',
    'Contact',
  ];

  return (
    <nav>
      <ul className="text-lg">
        {
          navItems.map((item, idx) => (
            <li
              key={idx}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
