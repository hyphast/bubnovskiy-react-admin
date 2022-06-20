import * as React from 'react';
import { createElement } from 'react';
import { useMediaQuery } from '@mui/material';
import { DashboardMenuItem, Menu, MenuItemLink, useResourceDefinitions, useSidebarState } from 'react-admin';
import DefaultIcon from '@mui/icons-material/ViewList';
import LabelIcon from '@mui/icons-material/Label';
import HomeIcon from '@mui/icons-material/Home';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

export const CustomMenu = (props) => {
  const resources = useResourceDefinitions()
  const [open] = useSidebarState();
  return (
    <Menu {...props}>
      <DashboardMenuItem leftIcon={<HomeIcon/>}/>
      {Object.keys(resources).map(name => (
        <MenuItemLink
          key={name}
          to={`/${name}`}
          primaryText={
            (resources[name].options && resources[name].options.label) ||
            name
          }
          leftIcon={
            resources[name].icon ? createElement(resources[name].icon) : <DefaultIcon />
          }
          onClick={props.onMenuClick}
          sidebarIsOpen={open}
        />
      ))}
      {/*<div style={{ display: 'flex' }}>*/}
      {/*  <HelpCenterIcon className='MuiListItemIcon-root RaMenuItemLink-icon css-cveggr-MuiListItemIcon-root' />*/}
      {/*  <a className='MuiMenuItem-root MuiMenuItem-gutters MuiButtonBase-root  css-krc73u-MuiButtonBase-root-MuiMenuItem-root-RaMenuItemLink-root'*/}
      {/*     href='https://pomo1.notion.site/bf73cafbd2af41e887d54eef1b1c32ed'>Руководство</a>*/}
      {/*</div>*/}
      <MenuItemLink to="/user-guide"
                    primaryText='Руководство'
                    leftIcon={<HelpCenterIcon />}
      />
    </Menu>
  );
};
