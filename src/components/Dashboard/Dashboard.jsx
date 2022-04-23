import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export const Dashboard = () => (
    <Card>
        <Title style={{fontWeight: '700'}} title="ООО 'Здоровье'" />
        <CardContent>Главная</CardContent>
    </Card>
);
