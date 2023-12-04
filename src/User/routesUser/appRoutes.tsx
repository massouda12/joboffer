import HomePage from "../Userpages/home/HomePage";
import { RouteType } from "./config";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Statistics from "../Userpages/Statistics/Statistics";
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Jobs from "../Userpages/installation/Startup";
import Users from "../Userpages/documentation/Usersuperadmin";
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';

const userRoutes: RouteType[] = [
  {
    path:"/user/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeIcon />
    }
  },
  {
    path: "/user/startUp",
    element: <Jobs />,
    state: "StartUp",
    sidebarProps: {
      displayText: "StartUps",
      icon: <ApartmentIcon />
    },
  },
  {
    path: "/user/User",
    element: <Users />,
    state: "Users",
    sidebarProps: {
      displayText: "Users",
      icon: <PeopleIcon />
    },
  },
  {
    path: "/user/Statistics",
    element: <Statistics />,
    state: "Statistics",
    sidebarProps: {
      displayText: "Statistics",
      icon: <AnalyticsIcon />
    },
  },
 
 

  
];

export default userRoutes;