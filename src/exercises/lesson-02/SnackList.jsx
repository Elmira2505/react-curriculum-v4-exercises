export default function SnackList() {
  const snack = [
    { name: 'Chocolate', rank: 10 },
    { name: 'Ice Cream', rank: 9 },
    { name: 'Coocie', rank: 8 },
    { name: 'Potato Chip', rank: 4 },
    { name: 'Popcorn', rank: 1 },
    { name: 'Pretzel', rank: 2 },
    { name: 'Yogurt', rank: 7 },
    { name: 'Penat Butter', rank: 8 },
    { name: 'Jerky', rank: 9 },
    { name: 'Nut', rank: 10 },
  ];
  return (
    <ul>
      {snack
        .toSorted((a, b) => b.rank - a.rank)
        .map((el, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
            {el.rank}. {el.name}
          </li>
        ))}
    </ul>
  );
}
