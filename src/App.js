import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { UserList } from './components/Users/UserList';
import { UserEdit } from './components/Users/UserEdit/UserEdit';
import {Dashboard} from './components/Dashboard/Dashboard';
import {AppointmentList} from './components/Appointments/AppointmentList';
import {AppointmentEdit} from './components/Appointments/AppointmentEdit/AppointmentEdit';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';
import './App.css';
import {AppointmentShow} from './components/Appointments/AppointmentShow/AppointemntShow';
import {UserShow} from './components/Users/UserShow/UserShow';
import dataProvider from './dataProvider'
import {RecordShow} from './components/Records/RecordShow/RecordShow';

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
        <Resource name='records' show={RecordShow}/>
    </Admin>
  );
}

export default App;
