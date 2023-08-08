import "antd/dist/antd.css"
import "./App.css"
import { Input, Modal} from "antd"
//import { Button, } from "antd-mobile"
import * as React from 'react';

import { useState } from "react"
import { EditOutlined, DeleteOutlined, } from "@ant-design/icons"

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DocumentScannerRoundedIcon from '@mui/icons-material/DocumentScannerRounded';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArticleIcon from '@mui/icons-material/Article';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';
import AirplayRoundedIcon from '@mui/icons-material/AirplayRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';

import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import { alignProperty } from "@mui/material/styles/cssUtils";
//import Typography from '@mui/material/Typography';


function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  
  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });
  

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <AccountBoxIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Username
            </Typography>
            
            <IconButton edge="end" color="inherit" aria-label="menu" sx={{ ml: 17 }}>
              <ArticleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Card sx={{ maxWidth: 375 }} >
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <QrCode2Icon/>Wallet Address
          </Typography>
          <Typography variant="h4" color="text.secondary">
            0.0
            <hr/>
            
          </Typography>
          <Typography>
            <AccountBalanceWalletIcon size="small"/>bh634fjksbfyebfhsb343
          </Typography>
        </CardContent>
        <CardActions >
          &nbsp;&nbsp;
          <Button sx={{ border: '1px solid green', }} size="small"><DownloadIcon/>I want to buy</Button>
          &nbsp;&nbsp;&nbsp;
          <Button sx={{ border: '1px solid blue', }} size="small"><FileUploadIcon/>I want to sell</Button>
          &nbsp;&nbsp;
        </CardActions>
      </Card>

      <TableBody>
        <TableRow sx={{ border: '0px', }}>
          
          <TableCell/>
          <TableCell>
            <Avatar sx={{ bgcolor: green[500] }}>
              <FolderIcon />
            </Avatar>
          </TableCell>
          <TableCell/>
          <TableCell>
            <Avatar sx={{ bgcolor: green[500] }}>
              <PageviewIcon />
            </Avatar>
          </TableCell>
          <TableCell/>
          <TableCell>
            <Avatar sx={{ bgcolor: green[500] }}>
              <AssignmentIcon />
            </Avatar>
          </TableCell>
          <TableCell/>
          
        </TableRow >
        <TableRow sx={{ border: '0px', }}>
          
          <TableCell/>
          <TableCell>
            <Avatar sx={{ bgcolor: green[500] }}>
              <MenuBookRoundedIcon />
            </Avatar>
          </TableCell>
          <TableCell/>
          <TableCell>
            <Avatar sx={{ bgcolor: green[500] }}>
              <WidgetsRoundedIcon />
            </Avatar>
          </TableCell>
          <TableCell/>
          <TableCell>
            <Avatar sx={{ bgcolor: green[500] }}>
              <AddCardRoundedIcon />
            </Avatar>
          </TableCell>
          <TableCell/>
          
        </TableRow >
        <TableRow sx={{ border: '0px', }}>
          
          <TableCell/>
          <TableCell>
            <Avatar sx={{ bgcolor: green[500] }}>
              <AirplayRoundedIcon />
            </Avatar>
          </TableCell>
          <TableCell/>
          <TableCell>
            <Avatar sx={{ bgcolor: green[500] }}>
              <AssignmentIndRoundedIcon />
            </Avatar>
          </TableCell>
          <TableCell/>
          <TableCell>
            <Avatar sx={{ bgcolor: green[500] }}>
              <BadgeRoundedIcon />
            </Avatar>
          </TableCell>
          <TableCell/>
          
        </TableRow >
      </TableBody>

      

      {/* <div className="App-header">
        <Button onClick={onAddStudent}>Add a new Student</Button>
        <Table className="" columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal>
      </div> */}
      <br></br><br></br><br></br><br></br><br></br><br></br>
      
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
          <BottomNavigationAction  />
          <StyledFab color="primary" aria-label="add">
            <DocumentScannerRoundedIcon />
          </StyledFab>
          
          <BottomNavigationAction label="Profile" icon={<PersonRoundedIcon />} />
          
        </Toolbar>
      </AppBar> 
      
    </div>
    
  );
}

export default App;
