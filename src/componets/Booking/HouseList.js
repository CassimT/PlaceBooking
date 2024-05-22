import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import HouseListData from '../../data/HouseListData';

function HouseList(props) {
    const navigate = useNavigate();
    const columns = [
        {   
            name: 'Image',
            selector: 'imgPath',
            cell: row => <img onClick={() => gotDetails(row)} src={row.imgPath} alt="House" className="w-24 cursor-pointer" />
        },
        { 
            name: 'Hostel Name',
            selector: row => row.hostelName,
            sortable: true,
            cell: row => <div className="text-gray-800">{row.hostelName}</div>,
        },
        { 
            name: 'Price',
            selector: row => row.price,
            sortable: true,
            cell: row => <div className="text-gray-800">${row.price}</div>,
        },
        { 
            name: 'Status',
            selector: row => row.status,
            cell: row => <div className={`text-sm ${row.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>{row.status}</div>,
        },
        { 
            name: 'Room Capacity',
            selector: row => row.roomCapacity,
            sortable: true,
            cell: row => <div className="text-gray-800">{row.roomCapacity}</div>,
        },
        {  
            name: 'Actions',
            button: true,
            cell: row => (
                <button 
                    className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-md py-2 px-4'
                    onClick={() => goTo(row)}
                >
                    Book
                </button>
            ),
        }
    ];

    function goTo(props) {
        navigate(`/MakePaymentPage`, { state: { House: props } });
    }
    function gotDetails(props) {
        navigate(`/DetailsPage`,{ state: { House: props } })
    }

    return (
        <div className='flex flex-col justify-between justify-items-center w-11/12 m-auto '>
            <DataTable
                columns={columns}
                data={HouseListData} 
                fixedHeader
                pagination
                selectableRows
                className="border border-gray-300 rounded-lg shadow-md"
                customStyles={{
                    headRow: {
                        style: {
                            backgroundColor: 'rgba(243, 244, 246, 1)', // Tailwind's gray-100
                        },
                    },
                    rows: {
                        style: {
                            minHeight: '48px',
                            '&:nth-of-type(odd)': {
                                backgroundColor: 'rgba(249, 250, 251, 1)', // Tailwind's gray-50
                            },
                        },
                    },
                    pagination: {
                        style: {
                            backgroundColor: 'rgba(243, 244, 246, 1)', // Tailwind's gray-100
                        },
                    },
                }}
            />
        </div>
    );
}

export default HouseList;
