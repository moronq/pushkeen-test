import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../../common/Button/Button';
import styles from './UserItem.module.scss';

type UserItemType = {
    name: string
    city: string
    id: number
}

const UserItem: React.FC<UserItemType> = ({name, id, city}) => {
  const navigate = useNavigate();

  const onProfileButtonClick = () => {
    navigate(`/userpage/${id.toString()}`);
  };

  return (
    <li className={styles.userItemBox}>
      <div className={styles.userItemInfo}>
        <h5 className={styles.userItemName}>{name}</h5>
        <p className={styles.uerItemCity}>{city}</p>
      </div>
      <div className={styles.userItemButtonContainer}>
        <Button background={'black'}
          callBackFn={onProfileButtonClick} color={'white'}
          fontSize={'11px'} height={'35px'} pdCol={'20px'}>
                    Смотреть профиль
        </Button>
      </div>
    </li>
  );
};

export default UserItem;
