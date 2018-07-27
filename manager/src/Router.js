import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employees"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employees"
          />
        </Scene>
      </Scene>
    </Router>
  );

export default RouterComponent;
