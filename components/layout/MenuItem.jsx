import Link from 'next/link';
import IconFA from '../IconFA';

const MenuItem = ({iconName, iconType, text, selected}) => {
  return (
    <li>
      <Link href="/">
        <a>
          <IconFA name={iconName} type={iconType} />
          <span className='menu-item-label'>{text}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
