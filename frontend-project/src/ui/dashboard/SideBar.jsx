import React from 'react';
import {
  Category,
  TwoUsers,
  Buy,
  Swap,
  Wallet,
  Document,
} from 'react-iconly';
import Sidebar from '../../components/Sidebar';

const SideBar = ({ activeView, onViewChange, onLogout, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard Overview', Icon: Category },
    { id: 'page1', label: 'Page 2', Icon: TwoUsers },
    { id: 'page2', label: 'Page 3', Icon: Buy },
    { id: 'page3', label: 'Page 4', Icon: Swap },
    { id: 'page4', label: 'Page 5', Icon: Wallet },
    { id: 'page5', label: 'Page 6', Icon: Document },
  ];

  return (
    <Sidebar 
      items={menuItems} 
      activeId={activeView} 
      onItemClick={onViewChange} 
      onLogout={onLogout}
      onClose={onClose}
    />
  );
};

export default SideBar;
