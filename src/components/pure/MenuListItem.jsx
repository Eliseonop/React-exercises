import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { HomeIcon, Settings, Task } from '@mui/icons-material'

const getIcon = icon => {
  switch (icon) {
    case 'HOME':
      return <HomeIcon />
    case 'SETTINGS':
      return <Settings />
    case 'TASK':
      return <Task />
    default:
      return <HomeIcon />
  }
}
export const MenuListItem = ({ list }) => {
  const navigate = useNavigate()

  const navegar = path => {
    navigate(path)
  }
  return (
    <List>
      {list.map(({ text, path, icon }, index) => {
        return (
          <ListItem button key={index} onClick={() => navegar(path)}>
            <ListItemIcon>{getIcon(icon)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )
      })}
    </List>
  )
}
