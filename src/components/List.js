import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, editAsync, listAsyn } from '../redux/actions/actionPlantas';

const List = () => {
    const dispatch = useDispatch()

    const { plantas } = useSelector(store => store.plantas)

    useEffect(() => {
        dispatch(listAsyn())
    }, [])

    console.log(plantas)


    return (
        <div>
            <Table>
                <thead>
                </thead>
                <tbody>
                    {
                        plantas.map((p, index) => (
                            <tr key={index}>
                                <td>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: p.foto
                                        },
                                        largeImage: {
                                            src: p.foto,
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </td>
                                <td>{p.nombre}</td>
                                <td>{p.codigo}</td>
                                <td>{p.tipo}</td>
                                <td>
                                    <Button onClick={() => dispatch(deleteAsync(p.codigo))}>Delete</Button>
                                    <Button onClick={()=> dispatch(editAsync(p.codigo, p))}>Edit</Button>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default List;