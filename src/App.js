import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest'
import { UserList } from './components/Users/UserList';
import { UserEdit } from './components/Users/UserEdit';
import {Dashboard} from './components/Dashboard/Dashboard';
import {AppointmentList} from './components/Appointments/AppointmentList';
import {AppointmentEdit} from './components/Appointments/AppointmentEdit';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';
import Test from './lists/Test';
import './App.css';

const dataProvider = simpleRestProvider('http://localhost:5000/api/admin');
const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

function App() {
  return (
     <Admin title="My Custom Admin"
            i18nProvider={i18nProvider}
            dataProvider={dataProvider}
            dashboard={Dashboard}
            disableTelemetry
     >
        <Resource name='users' options={{ label: 'Пользователи' }} list={UserList} edit={UserEdit}/>
        <Resource name='appointments' options={{ label: 'Записи' }} list={AppointmentList} edit={AppointmentEdit} />
    </Admin>
  );
}

export default App;
