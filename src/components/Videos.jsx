import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

export default function Videos({ videos, direction }) {
    if (!videos?.length)
        return 'Loading...'

    return (
        <Stack direction={ direction || 'row' } flexWrap='wrap'  justifyContent='start' gap={2}>
            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}
