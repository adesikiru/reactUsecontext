import Images from "../img/Images";
import styles from "../styles/modules/sidebar.module.scss"
import routes from '../util/routes'
import { Link } from "react-router-dom";

/* let a = {
    image: Images.charts_icon,
    navLink: {
        label: 'label',
        link: 'link'
    }
}
*/

const SideBarLink = ({ image, navLink, width=20 }) => <Link to={navLink.link} className={styles.link}>
    <img src={image} alt={`${navLink.label}_icon`} width={width} height={width} />
    <span>{navLink.label}</span>
</Link>
const center = [{
    image: Images.charts_icon,
    navLink: {
        label: 'Charts',
        link: routes.charts
    }
},
{
    image: Images.referrals_icon,
    navLink: {
        label: 'Referrals',
        link: routes.referrals
    }
},
{
    image: Images.transactions_icon,
    navLink: {
        label: 'Transactions',
        link: routes.transactions
    }
},
{
    image: Images.payouts_icon,
    navLink: {
        label: 'Payouts',
        link: routes.payouts
    }
}
]
const top =  {
    image: Images.logo,
    navLink: {
        label: 'Language  Acad',
        link: routes.home
    }
}
const Sidebar = () => <div className={styles.sidebar}>
    <div className={styles.top}>
        <b><SideBarLink {...top} width={'auto'} /></b>
    </div>
    <div className={styles.center}>
        {center.map(link => <SideBarLink {...link} />)}
    </div>
    <div className={styles.bottom}>
        <a className={styles.settings}>
            <img src={Images.settings_icon} alt="settings_icon" />
            <span>Settings</span>
        </a>
        <a className={styles.home}>
            <img src={Images.home_icon} alt="home_icon" />
            <span>Home</span>
        </a>
    </div>
</div>

export default Sidebar;