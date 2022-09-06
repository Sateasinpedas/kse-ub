import React from "react";

import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Avatar,
    Badge,
    Pagination,
    Input,
    Dropdown,
    DropdownItem,
} from '@windmill/react-ui'

export default function AdminDashboard(){
    const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = React.useState(false)

    const handleLogout = () => {
        localStorage.removeItem('auth');
        window.location.reload();
    }

    return(
        <div>
            <TableContainer>
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>No.</TableCell>
                            <TableCell>Gambar & Judul</TableCell>
                            <TableCell>Active</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Dibuat</TableCell>
                            <TableCell>Action</TableCell>
                        </tr>
                    </TableHeader>
                    <TableBody>
                            <TableRow>
                                <TableCell>
                                    {1}
                                </TableCell>
                                <TableCell>
                                    <div className='flex items-center'>
                                        {/* <img src={user.picture} className="w-6 h-6 rounded-[50%]" /> */}
                                        <span className="text-sm ml-2">{'judul'}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {
                                        true ?
                                            <Input className='cursor-pointer' type='checkbox' css={undefined} defaultChecked />
                                            :
                                            <Input className='cursor-pointer' type='checkbox' css={undefined} />
                                    }
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold">{'user.type'}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{'user.dibuat'}</span>
                                </TableCell>
                                <TableCell className='relative'>
                                    <button aria-haspopup="true" className="text-sm p-3 rounded-lg shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </button>
                                    <Dropdown
                                        align="right"
                                        className='absolute top-10 z-10'
                                        isOpen={isNotificationsMenuOpen}
                                        onClose={() => { }}
                                    >
                                        <DropdownItem tag="a" href="/admin/news/edit" className="justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            <span className='ml-2'>Edit</span>
                                        </DropdownItem>
                                        <DropdownItem tag="a" href="#" className="justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            <span className='ml-2'>Delete</span>
                                        </DropdownItem>
                                    </Dropdown>
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
                <TableFooter>
                    hee
                </TableFooter>
            </TableContainer>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}