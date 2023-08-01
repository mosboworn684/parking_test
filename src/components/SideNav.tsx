import { Avatar, Box, Typography } from "@mui/material"
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined'
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import { Link } from "react-router-dom"
import { PARKING_PATH, USER_PATH, DASHBOARD_PATH } from "../config/constants"
import { useState } from "react"
const SideNav = () => {
    const isCollapsed = useProSidebar()
    const [activeMenuItem, setActiveMenuItem] = useState('Dashboard')
    const handleMenuClick = (menu: string) => {
        setActiveMenuItem(menu)
        // console.log(activeMenuItem, menu)
        isCollapsed.toggleSidebar()
    }

    // const  collapsed2  = useProSidebar()
    return (
        <Sidebar
            style={{ height: "100%", top: 'auto' }}
            breakPoint="md"
            backgroundColor={'white'}
        >
            <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} alt="Masoud" src="/assets/test.jpg" />
                {isCollapsed.collapsed != true ? <Typography variant="body2" sx={styles.yourChannel}>Mos</Typography> : null}
                {/* <Typography variant="body2">Admin</Typography> */}
            </Box>

            <Menu
                menuItemStyles={{
                    button: ({ active }) => {
                        return {
                            backgroundColor: active ? '#EEEEEE' : 'transparent',
                        }
                    }
                }}>
                <MenuItem
                    active={activeMenuItem === DASHBOARD_PATH}
                    component={<Link to={DASHBOARD_PATH} />}
                    icon={<DashboardOutlinedIcon />}
                    onClick={() => handleMenuClick(DASHBOARD_PATH)}>
                    <Typography variant="body2">Dashboard</Typography>
                </MenuItem>
                <MenuItem
                    active={activeMenuItem === USER_PATH}
                    component={<Link to={USER_PATH} />}
                    icon={<SourceOutlinedIcon />}
                    onClick={() => handleMenuClick(USER_PATH)}>
                    <Typography variant="body2">User </Typography>
                </MenuItem>
                <MenuItem
                    active={activeMenuItem === PARKING_PATH}
                    component={<Link to={PARKING_PATH} />}
                    icon={<AnalyticsOutlinedIcon />}
                    onClick={() => handleMenuClick(PARKING_PATH)}>
                    <Typography variant="body2">Report </Typography>
                </MenuItem>
                {/* <MenuItem
                    component={<Link to="/backend/setting" />}
                    icon={<StyleOutlinedIcon />} 
                    onClick={() => handleMenuClick()}>
                    <Typography variant="body2">Setting </Typography>
                </MenuItem > */}
            </Menu >
        </Sidebar >
    )
}

const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }
}

export default SideNav