import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest'
import { UserList } from './components/Users/UserList';
import { UserEdit } from './components/Users/UserEdit';
import {Dashboard} from './components/Dashboard/Dashboard';
import {AppointmentList} from './components/Appointments/AppointmentList';
import {AppointmentEdit} from './components/Appointments/AppointmentEdit/AppointmentEdit';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';
import './App.css';
import {AppointmentShow} from './components/Appointments/AppointmentShow/AppointemntShow';
import {UserShow} from './components/Users/UserShow';
import dataProvider from './dataProvider'

// let apiUrl;
// if (process.env.NODE_ENV === 'production') {
//   apiUrl = 'http://bubnovskiy30.hopto.org/api/admin';
// } else {
//   apiUrl = 'http://localhost:5000';
// }

//const dataProvider = simpleRestProvider(apiUrl);
const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

function App() {
  return (
     <Admin title="My Custom Admin"
            i18nProvider={i18nProvider}
            dataProvider={dataProvider}
            dashboard={Dashboard}
            disableTelemetry
     >
        <Resource name='users' options={{ label: 'Пользователи' }} list={UserList} edit={UserEdit} show={UserShow}/>
        <Resource name='appointments' options={{ label: 'Записи' }} list={AppointmentList} edit={AppointmentEdit} show={AppointmentShow}/>
    </Admin>
  );
}

export default App;
