import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import { INavigationGroup } from '../models/constants/INavigationItems';

export const navigationItems: Array<INavigationGroup> = [
  {
    name: "General",
    icon:  <HomeOutlinedIcon/>,
    items: [
      {name: "Home", url: "/", icon: <HomeOutlinedIcon/>},
      {name: "Team", url: "/team", icon: <PeopleOutlinedIcon/>}, 
      {name: "Contacts", url: "/contacts", icon: <ContactsOutlinedIcon/>}, 
      {name: "Profile", url: "/profile", icon: <FormatColorTextOutlinedIcon/>}, 
    ]
  },
  {
    name: "Data",
    icon:  <HomeOutlinedIcon/>,
    items: [
      {name: "Invoices", url: "/invoices", icon: <ReceiptOutlinedIcon/>}, 
      {name: "Calendar", url: "/calendar", icon: <CalendarMonthOutlinedIcon/>}, 
      {name: "FAQ", url: "/faq", icon: <QuizOutlinedIcon/>}, 
    ]
  },
  {
    name: "Charts",
    icon:  <HomeOutlinedIcon/>,
    items: [
      {name: "Bar", url: "/bar", icon: <BarChartOutlinedIcon/>}, 
      {name: "Pie", url: "/pie", icon: <PieChartOutlinedIcon/>}, 
      {name: "Line", url: "/line", icon: <QueryStatsOutlinedIcon/>}, 
      {name: "Geography", url: "/geography", icon: <MapOutlinedIcon/>}
    ]
  },
]