import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function MenuItem({ title, to, image, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {image ? (
                <Image
                    className={cx('user-avatar-sidebar')}
                    width={40}
                    src={image}
                    alt="Alaxed"
                    fallback="https://i.pinimg.com/236x/a8/5f/44/a85f44a54ebe87a9c72abf7e04585fcf.jpg"
                />
            ) : (
                <span className={cx('icon')}>{icon}</span>
            )}

            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    activeIcon: PropTypes.node,
};

export default MenuItem;
