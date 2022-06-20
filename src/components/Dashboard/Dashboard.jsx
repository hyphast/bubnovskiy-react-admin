import * as React from "react"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Title } from 'react-admin'

export const Dashboard = () => (
    <Card>
        <Title style={{fontWeight: '700'}} title="ООО 'Здоровье'" />
        <CardContent>Главная</CardContent>
    </Card>
);
