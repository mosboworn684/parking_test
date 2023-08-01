import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import { useState,useEffect } from "react"
import axios from "axios"

const User = () => {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        const url ="http://127.0.0.1:3001/showcustomer"
        console.log(url)
        axios.get(url).then(response => {
            const { data } = response
            setCustomer(data.result)
        })
    }),
    document.title = "user"
    return (
        <>
            <h1>User</h1>
            <Box >
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Box display="flex">
                            <Box flexGrow={1}>
                                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                    Users
                                </Typography>
                            </Box>
                            <Box>
                                <Button variant="contained" onClick={handleOpen} sx={{ mb: '15px', bgcolor: "teal" }}  >Contained</Button>
                            </Box>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>id</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>id</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                    {/* <CardActions>

                </CardActions> */}
                </Card>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modalCreateUser}>
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    {/* </form> */}
                </Box>
            </Modal>
        </>
    )
}
const styles = {

    modalCreateUser: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    },

}

export default User
