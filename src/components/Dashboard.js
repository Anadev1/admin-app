import React from 'react';
import Navigation from './Navigation';


class Dashboard extends React.Component {
     render() {
          return (
               <div className="content">
                    <Navigation />
                    <div className=" main-container">
                         <h1 className="page-title">Dashboard</h1>
                    </div>
               </div>
          )
     }
}

export default Dashboard;