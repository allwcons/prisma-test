import { GetServerSideProps } from 'next'
import React from 'react'
import { User, Post } from '@prisma/client'
import fetch from 'isomorphic-unfetch';
import { TableContainer,Table, TableHead,TableBody,TableRow,TableCell, Paper,ListItemButton, ListItemText } from '@mui/material'

type UserProps = {
    users: User[]
}

const index = ({users}:UserProps) => {
    console.log(users)
    if(users.length > 0){
        return <UsersDataTable users={users}/>
    }

    return <span>Empty</span>
}

const UsersDataTable = ({users}:UserProps)=>{
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>Id</TableRow>
                    <TableRow>UserName</TableRow>
                    <TableRow>Email</TableRow>
                    <TableRow>Posts</TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user=>{
                            return <TableRow 
                            key={user.id}
                            >
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>

                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}



export default index;

index.getInitialProps = async (ctx) => {
    const res = await fetch("http://localhost:3000/api/users")
    const users = await res.json()
    return { users }
  }