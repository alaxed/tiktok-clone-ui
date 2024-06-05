import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    CompassIcon,
    FollowUserIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowUserIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <MenuItem title="Friends" to={config.routes.live} icon={<UserGroupIcon />} />
                <MenuItem title="Explore" to={config.routes.live} icon={<CompassIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
                <MenuItem
                    className={cx('profile-bar')}
                    title="Profile"
                    to={config.routes.live}
                    image={'https://i.pinimg.com/originals/21/40/97/214097714d1a0ed442a9507e297a5014.jpg'}
                />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
