import { Stack } from "@mui/material"

import { categories } from '../utils/constants'

export default function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
      }}
    >
      {categories.map(c => (
        <button
          className='category-btn'
          onClick={() => setSelectedCategory(c.name)}
          style={{
            background: c.name === selectedCategory && '#FC1503', color: 'white'
          }}
          key={c.name}
        >
          <span style={{ color: c.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{c.icon}</span>
          <span style={{ opacity: c.name === selectedCategory ? '1' : '0.8' }}>{c.name}</span>
        </button>
      ))}
      
    </Stack>
  )
}
