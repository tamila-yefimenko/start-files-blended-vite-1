import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp key="1" size={30} />,
  <MdPeople key="2" size={30} />,
  <MdOutlineProductionQuantityLimits key="3" size={30} />,
  <GiTreeDoor key="4" size={30} />,
];

const Statistics = ({ title, stats }) => {
  return (
    <>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.list}>
        {stats.map(({ id, title, total }, index) => (
          <li key={id} className={style.item}>
            <StatisticsItem total={total} icon={icons[index]} title={title} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
